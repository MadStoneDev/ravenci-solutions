import fs from "fs";
import path from "path";
import matter from "gray-matter";

import {
  ARTICLES_TAG,
  POCKETBASE_URL,
  isPocketBaseEnabled,
  recordToArticle,
  type ArticleRecord,
} from "@/lib/pocketbase";

const ARTICLES_DIR = path.join(process.cwd(), "src/content/articles");

export interface ArticleFrontmatter {
  title: string;
  slug: string;
  excerpt: string;
  // Optional: an article may have no featured image. Pages already null-check it.
  featuredImage?: { src: string; alt: string; width: number; height: number };
  author: string;
  categories: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords?: string;
  };
  scheduleDate: string;
  publishedAt?: string;
  updatedAt?: string;
}

export interface Article extends ArticleFrontmatter {
  content: string;
}

/**
 * Backend switch: with POCKETBASE_URL set we read from PocketBase; otherwise we
 * fall back to the legacy .mdx files in src/content/articles. This keeps the live
 * site working off the committed MDX until PocketBase is wired up in production.
 */

// ---------------------------------------------------------------------------
// PocketBase backend (public reads, tagged for on-demand revalidation)
// ---------------------------------------------------------------------------

const PUBLISHED_FILTER = 'status = "published" && scheduleDate <= @now';

async function pbFetchArticles(params: {
  filter?: string;
  sort?: string;
  perPage?: number;
}): Promise<ArticleRecord[]> {
  const search = new URLSearchParams({
    perPage: String(params.perPage ?? 500),
    sort: params.sort ?? "-scheduleDate",
    skipTotal: "true",
  });
  if (params.filter) search.set("filter", params.filter);

  const url = `${POCKETBASE_URL}/api/collections/articles/records?${search.toString()}`;
  const res = await fetch(url, {
    next: { tags: [ARTICLES_TAG], revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`PocketBase articles fetch failed: ${res.status}`);
  }
  const json = (await res.json()) as { items: ArticleRecord[] };
  return json.items ?? [];
}

// ---------------------------------------------------------------------------
// Legacy MDX backend
// ---------------------------------------------------------------------------

function mdxReadAll(): ArticleFrontmatter[] {
  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), "utf-8");
    const { data } = matter(raw);
    return {
      ...(data as ArticleFrontmatter),
      slug: file.replace(/\.mdx$/, ""),
    };
  });
}

function mdxGetAll(): ArticleFrontmatter[] {
  const now = new Date();
  return mdxReadAll()
    .filter((a) => new Date(a.scheduleDate) <= now)
    .sort(
      (a, b) =>
        new Date(b.scheduleDate).getTime() - new Date(a.scheduleDate).getTime(),
    );
}

function mdxGetBySlug(slug: string): Article | undefined {
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  if (new Date(data.scheduleDate) > new Date()) return undefined;
  return { ...(data as ArticleFrontmatter), slug, content };
}

function mdxGetSlugs(): string[] {
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

// ---------------------------------------------------------------------------
// Public API (stable signatures — now async)
// ---------------------------------------------------------------------------

export async function getAllArticles(): Promise<ArticleFrontmatter[]> {
  if (isPocketBaseEnabled()) {
    try {
      const records = await pbFetchArticles({
        filter: PUBLISHED_FILTER,
        sort: "-scheduleDate",
      });
      return records.map(recordToArticle);
    } catch (e) {
      // CMS unreachable (e.g. at build time) — fall back to the committed MDX
      // files so the site never ships empty or fails to build.
      console.error("[articles] PocketBase unreachable, using MDX fallback:", e);
    }
  }
  return mdxGetAll();
}

export async function getArticleBySlug(
  slug: string,
): Promise<Article | undefined> {
  if (isPocketBaseEnabled()) {
    try {
      const filter = `slug = ${JSON.stringify(slug)} && ${PUBLISHED_FILTER}`;
      const records = await pbFetchArticles({ filter, perPage: 1 });
      // PocketBase is the source of truth when reachable: a miss means the
      // article isn't published (so unpublish/delete actually hides it).
      return records[0] ? recordToArticle(records[0]) : undefined;
    } catch (e) {
      console.error("[articles] PocketBase unreachable, using MDX fallback:", e);
    }
  }
  return mdxGetBySlug(slug);
}

export async function getAllSlugs(): Promise<string[]> {
  if (isPocketBaseEnabled()) {
    try {
      const records = await pbFetchArticles({ filter: PUBLISHED_FILTER });
      return records.map((r) => r.slug);
    } catch (e) {
      console.error("[articles] PocketBase unreachable, using MDX fallback:", e);
    }
  }
  return mdxGetSlugs();
}

// Related articles for cross-linking: most shared categories first, then recency.
export async function getRelatedArticles(
  slug: string,
  count: number,
): Promise<ArticleFrontmatter[]> {
  const all = await getAllArticles();
  const current = all.find((a) => a.slug === slug);
  const others = all.filter((a) => a.slug !== slug);
  if (!current) return others.slice(0, count);

  return others
    .map((a) => ({
      article: a,
      shared: a.categories.filter((c) => current.categories.includes(c)).length,
    }))
    .sort((x, y) => y.shared - x.shared)
    .slice(0, count)
    .map((s) => s.article);
}
