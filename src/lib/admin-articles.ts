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
  readMins: number;
}

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
      ? pbFileUrl("articles", r.id, r.featuredImage, "400x250")
      : undefined,
    scheduleDate: pbDate(r.scheduleDate),
    publishedAt: pbDate(r.publishedAt),
    updatedAt: pbDate(r.contentUpdatedAt) ?? pbDate(r.updated),
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
