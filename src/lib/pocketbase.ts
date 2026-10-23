import PocketBase from "pocketbase";

import type { Article } from "@/lib/articles";

/**
 * PocketBase wiring for the articles CMS.
 *
 * Public reads (lib/articles.ts) go through native `fetch` so they can be tagged
 * for on-demand revalidation. This module holds the bits shared by the public
 * reads and the authenticated admin: the base URL, file-URL building, date
 * normalisation, and the record -> Article mapper.
 *
 * When POCKETBASE_URL is unset the whole CMS is dormant and the site reads the
 * legacy .mdx files instead (see lib/articles.ts).
 */

export const POCKETBASE_URL = (process.env.POCKETBASE_URL ?? "").replace(
  /\/+$/,
  "",
);

export function isPocketBaseEnabled(): boolean {
  return POCKETBASE_URL.length > 0;
}

/** A plain (unauthenticated) SDK client. Admin auth is layered on in admin-auth.ts. */
export function createPocketBaseClient(): PocketBase {
  return new PocketBase(POCKETBASE_URL);
}

/** Public URL for a file stored on a record's file field (optionally a thumb). */
export function pbFileUrl(
  collection: string,
  recordId: string,
  filename: string,
  thumb?: string,
): string {
  const base = `${POCKETBASE_URL}/api/files/${collection}/${recordId}/${filename}`;
  return thumb ? `${base}?thumb=${encodeURIComponent(thumb)}` : base;
}

/** PocketBase stores dates as "YYYY-MM-DD HH:mm:ss.SSSZ"; normalise to ISO (or undefined when empty). */
export function pbDate(value: unknown): string | undefined {
  if (typeof value !== "string" || value.trim() === "") return undefined;
  return value.replace(" ", "T");
}

/** The raw article record shape we read back from PocketBase. */
export interface ArticleRecord {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  featuredImageAlt: string;
  featuredImageWidth: number;
  featuredImageHeight: number;
  author: string;
  categories: string[] | null;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  status: "draft" | "scheduled" | "published";
  scheduleDate: string;
  publishedAt: string;
  contentUpdatedAt: string;
  created: string;
  updated: string;
}

/** Map a PocketBase article record into the public `Article` shape the pages expect. */
export function recordToArticle(r: ArticleRecord): Article {
  return {
    title: r.title,
    slug: r.slug,
    excerpt: r.excerpt ?? "",
    content: r.content ?? "",
    featuredImage: r.featuredImage
      ? {
          src: pbFileUrl("articles", r.id, r.featuredImage),
          alt: r.featuredImageAlt ?? "",
          width: r.featuredImageWidth || 0,
          height: r.featuredImageHeight || 0,
        }
      : undefined,
    author: r.author || "Richard",
    categories: Array.isArray(r.categories) ? r.categories : [],
    seo: {
      metaTitle: r.metaTitle ?? "",
      metaDescription: r.metaDescription ?? "",
      metaKeywords: r.metaKeywords || undefined,
    },
    scheduleDate: pbDate(r.scheduleDate) ?? pbDate(r.created) ?? "",
    publishedAt: pbDate(r.publishedAt),
    updatedAt: pbDate(r.contentUpdatedAt) ?? pbDate(r.updated),
  };
}

/** Cache tag applied to every public article fetch, revalidated on save. */
export const ARTICLES_TAG = "articles";
