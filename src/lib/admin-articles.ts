import "server-only";

import type PocketBase from "pocketbase";

import { pbFileUrl, pbDate, type ArticleRecord } from "@/lib/pocketbase";

/**
 * Admin-side article reads. These run with the owner's authenticated PocketBase
 * client, so they see every status (drafts, scheduled, published) — unlike the
 * public reads in lib/articles.ts which only see published+due.
 */

export type ArticleStatus = "draft" | "scheduled" | "published";

export interface AdminArticleListItem {
  id: string;
  title: string;
  slug: string;
  status: ArticleStatus;
  categories: string[];
  thumbUrl?: string;
  scheduleDate?: string;
  publishedAt?: string;
  updatedAt?: string;
  createdAt?: string;
  readMins: number;
}

export type SortKey = "created" | "modified" | "name";

function wordCount(s: string): number {
  const t = s.trim();
  return t ? t.split(/\s+/).length : 0;
}

export function recordToListItem(r: ArticleRecord): AdminArticleListItem {
  return {
    id: r.id,
    title: r.title,
    slug: r.slug,
    status: r.status,
    categories: Array.isArray(r.categories) ? r.categories : [],
    thumbUrl: r.featuredImage
      ? // Small thumb for the list rows (displayed in a 96x60 box, ~2x retina).
        pbFileUrl("articles", r.id, r.featuredImage, "200x120")
      : undefined,
    scheduleDate: pbDate(r.scheduleDate),
    publishedAt: pbDate(r.publishedAt),
    updatedAt: pbDate(r.contentUpdatedAt) ?? pbDate(r.updated),
    createdAt: pbDate(r.created),
    readMins: Math.max(1, Math.round(wordCount(r.content ?? "") / 200)),
  };
}

export async function fetchAdminArticles(
  pb: PocketBase,
): Promise<AdminArticleListItem[]> {
  const records = await pb.collection("articles").getFullList<ArticleRecord>({
    sort: "-created",
  });
  return records.map(recordToListItem);
}

/** Full article for the editor (all editable fields). */
export interface AdminArticleFull {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: { url: string; name: string; width: number; height: number };
  featuredImageAlt: string;
  author: string;
  categories: string[];
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  status: ArticleStatus;
  scheduleDate?: string;
  publishedAt?: string;
  updatedAt?: string;
}

function recordToFull(r: ArticleRecord): AdminArticleFull {
  return {
    id: r.id,
    title: r.title ?? "",
    slug: r.slug,
    excerpt: r.excerpt ?? "",
    content: r.content ?? "",
    featuredImage: r.featuredImage
      ? {
          url: pbFileUrl("articles", r.id, r.featuredImage),
          name: r.featuredImage,
          width: r.featuredImageWidth || 0,
          height: r.featuredImageHeight || 0,
        }
      : undefined,
    featuredImageAlt: r.featuredImageAlt ?? "",
    author: r.author || "Richard",
    categories: Array.isArray(r.categories) ? r.categories : [],
    metaTitle: r.metaTitle ?? "",
    metaDescription: r.metaDescription ?? "",
    metaKeywords: r.metaKeywords ?? "",
    status: r.status,
    scheduleDate: pbDate(r.scheduleDate),
    publishedAt: pbDate(r.publishedAt),
    updatedAt: pbDate(r.contentUpdatedAt) ?? pbDate(r.updated),
  };
}

export async function getAdminArticleBySlug(
  pb: PocketBase,
  slug: string,
): Promise<AdminArticleFull | undefined> {
  try {
    const rec = await pb
      .collection("articles")
      .getFirstListItem<ArticleRecord>(`slug = ${JSON.stringify(slug)}`);
    return recordToFull(rec);
  } catch {
    return undefined;
  }
}

export interface ArticleStats {
  published: number;
  scheduled: number;
  drafts: number;
  all: number;
  nextToGoLive?: AdminArticleListItem;
}

export function computeStats(items: AdminArticleListItem[]): ArticleStats {
  const published = items.filter((a) => a.status === "published").length;
  const scheduledItems = items.filter((a) => a.status === "scheduled");
  const drafts = items.filter((a) => a.status === "draft").length;

  const now = Date.now();
  const upcoming = scheduledItems
    .filter((a) => a.scheduleDate && new Date(a.scheduleDate).getTime() > now)
    .sort(
      (a, b) =>
        new Date(a.scheduleDate!).getTime() - new Date(b.scheduleDate!).getTime(),
    );

  return {
    published,
    scheduled: scheduledItems.length,
    drafts,
    all: items.length,
    nextToGoLive: upcoming[0],
  };
}

/** Explicit list sorting chosen from the toolbar. */
export function sortArticles(
  items: AdminArticleListItem[],
  sort: SortKey,
): AdminArticleListItem[] {
  const arr = [...items];
  const ts = (v?: string) => (v ? new Date(v).getTime() : 0);
  switch (sort) {
    case "name":
      return arr.sort((a, b) =>
        (a.title || "").localeCompare(b.title || "", undefined, {
          sensitivity: "base",
        }),
      );
    case "modified":
      return arr.sort((a, b) => ts(b.updatedAt) - ts(a.updatedAt));
    case "created":
    default:
      return arr.sort((a, b) => ts(b.createdAt) - ts(a.createdAt));
  }
}

/** Sort for display: scheduled/published by scheduleDate desc, drafts by updated desc. */
export function sortForStatus(
  items: AdminArticleListItem[],
  status: "all" | ArticleStatus,
): AdminArticleListItem[] {
  const filtered =
    status === "all" ? items : items.filter((a) => a.status === status);
  return [...filtered].sort((a, b) => {
    if (a.status === "draft" && b.status === "draft") {
      return (
        new Date(b.updatedAt ?? 0).getTime() -
        new Date(a.updatedAt ?? 0).getTime()
      );
    }
    const ad = a.scheduleDate ?? a.publishedAt ?? a.updatedAt ?? "";
    const bd = b.scheduleDate ?? b.publishedAt ?? b.updatedAt ?? "";
    return new Date(bd).getTime() - new Date(ad).getTime();
  });
}
