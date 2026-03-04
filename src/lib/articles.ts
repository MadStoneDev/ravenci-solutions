import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "src/content/articles");

export interface ArticleFrontmatter {
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: { src: string; alt: string; width: number; height: number };
  author: string;
  categories: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords?: string;
  };
  scheduleDate: string;
  publishedAt: string;
  updatedAt?: string;
}

export interface Article extends ArticleFrontmatter {
  content: string;
}

export function getAllArticles(): ArticleFrontmatter[] {
  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".mdx"));
  const now = new Date();

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), "utf-8");
      const { data } = matter(raw);
      return data as ArticleFrontmatter;
    })
    .filter((a) => new Date(a.scheduleDate) <= now)
    .sort(
      (a, b) =>
        new Date(b.scheduleDate).getTime() -
        new Date(a.scheduleDate).getTime(),
    );
}

export function getArticleBySlug(slug: string): Article | undefined {
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return { ...(data as ArticleFrontmatter), content };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
