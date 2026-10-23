"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import sharp from "sharp";
import { z } from "zod";

import { requireUser } from "@/lib/admin-auth";
import { ARTICLES_TAG, pbFileUrl } from "@/lib/pocketbase";

/** Revalidate the public article surfaces plus the admin list. */
function revalidateArticle(slug?: string) {
  revalidateTag(ARTICLES_TAG);
  revalidatePath("/articles");
  if (slug) revalidatePath(`/articles/${slug}`);
  revalidatePath("/admin/articles");
}

const SLUG_RE = /^[a-z0-9-]+$/;

const ArticleInput = z.object({
  id: z.string().optional(),
  title: z.string().default(""),
  slug: z.string().default(""),
  excerpt: z.string().default(""),
  content: z.string().default(""),
  author: z.string().default("Richard"),
  categories: z.array(z.string()).default([]),
  metaTitle: z.string().default(""),
  metaDescription: z.string().default(""),
  metaKeywords: z.string().default(""),
  featuredImageAlt: z.string().default(""),
  status: z.enum(["draft", "scheduled", "published"]),
  scheduleDate: z.string().optional(),
});

export type ArticleInput = z.input<typeof ArticleInput>;

export interface SaveResult {
  ok: boolean;
  id?: string;
  slug?: string;
  error?: string;
}

export async function saveArticle(raw: ArticleInput): Promise<SaveResult> {
  const { pb } = await requireUser();
  const input = ArticleInput.parse(raw);

  // Slug: required and url-safe for everything.
  if (!input.slug || !SLUG_RE.test(input.slug)) {
    return {
      ok: false,
      error: "Slug must contain only lowercase letters, numbers and hyphens.",
    };
  }

  // Full validation before going live.
  if (input.status !== "draft") {
    const missing: string[] = [];
    if (!input.title.trim()) missing.push("title");
    if (!input.excerpt.trim()) missing.push("excerpt");
    if (!input.metaDescription.trim()) missing.push("meta description");
    if (!input.featuredImageAlt.trim()) missing.push("featured image alt text");

    // Featured image must exist on the record.
    let hasImage = false;
    if (input.id) {
      try {
        const rec = await pb.collection("articles").getOne(input.id);
        hasImage = Boolean(rec.featuredImage);
      } catch {
        hasImage = false;
      }
    }
    if (!hasImage) missing.push("featured image");

    if (input.status === "scheduled" && !input.scheduleDate) {
      missing.push("schedule date");
    }

    if (missing.length) {
      return {
        ok: false,
        error: `Add ${missing.join(", ")} before ${input.status === "scheduled" ? "scheduling" : "publishing"}.`,
      };
    }
  }

  const now = new Date().toISOString();
  const data: Record<string, unknown> = {
    title: input.title,
    slug: input.slug,
    excerpt: input.excerpt,
    content: input.content,
    author: input.author || "Richard",
    categories: input.categories,
    metaTitle: input.metaTitle,
    metaDescription: input.metaDescription,
    metaKeywords: input.metaKeywords,
    featuredImageAlt: input.featuredImageAlt,
    status: input.status,
    contentUpdatedAt: now,
  };

  if (input.status === "published") {
    data.scheduleDate = input.scheduleDate || now;
    // set publishedAt the first time it goes live
    if (input.id) {
      try {
        const rec = await pb.collection("articles").getOne(input.id);
        data.publishedAt = rec.publishedAt || now;
      } catch {
        data.publishedAt = now;
      }
    } else {
      data.publishedAt = now;
    }
  } else if (input.status === "scheduled") {
    data.scheduleDate = input.scheduleDate;
  }

  try {
    let id = input.id;
    let slug = input.slug;
    if (id) {
      const rec = await pb.collection("articles").update(id, data);
      slug = rec.slug as string;
    } else {
      const rec = await pb.collection("articles").create(data);
      id = rec.id;
      slug = rec.slug as string;
    }
    revalidateArticle(slug);
    return { ok: true, id, slug };
  } catch (e) {
    const err = e as { response?: { data?: Record<string, { message?: string }> } };
    if (err.response?.data?.slug) {
      return { ok: false, error: "That slug is already taken." };
    }
    return { ok: false, error: "Could not save. Please try again." };
  }
}

const MAX_IMAGE = 10 * 1024 * 1024;
const OK_TYPES = ["image/jpeg", "image/png", "image/webp"];

export interface UploadResult {
  ok: boolean;
  url?: string;
  name?: string;
  width?: number;
  height?: number;
  error?: string;
}

/** Upload/replace a featured image. Requires the article to already exist. */
export async function uploadFeaturedImage(
  formData: FormData,
): Promise<UploadResult> {
  const { pb } = await requireUser();
  const id = String(formData.get("id") ?? "");
  const file = formData.get("file");

  if (!id) return { ok: false, error: "Save the article first." };
  if (!(file instanceof File)) return { ok: false, error: "No file provided." };
  if (!OK_TYPES.includes(file.type)) {
    return { ok: false, error: "Use a JPG, PNG or WebP image." };
  }
  if (file.size > MAX_IMAGE) {
    return { ok: false, error: "Image must be 10 MB or smaller." };
  }

  const buf = Buffer.from(await file.arrayBuffer());
  let width = 0;
  let height = 0;
  try {
    const meta = await sharp(buf).metadata();
    width = meta.width ?? 0;
    height = meta.height ?? 0;
  } catch {
    // leave 0s if sharp can't read it
  }

  const pbForm = new FormData();
  pbForm.set("featuredImage", new Blob([buf], { type: file.type }), file.name);
  pbForm.set("featuredImageWidth", String(width));
  pbForm.set("featuredImageHeight", String(height));

  try {
    const rec = await pb.collection("articles").update(id, pbForm);
    revalidateArticle(rec.slug as string);
    return {
      ok: true,
      url: pbFileUrl("articles", rec.id, rec.featuredImage as string),
      name: rec.featuredImage as string,
      width,
      height,
    };
  } catch {
    return { ok: false, error: "Upload failed. Please try again." };
  }
}

export async function removeFeaturedImage(id: string): Promise<SaveResult> {
  const { pb } = await requireUser();
  try {
    const rec = await pb
      .collection("articles")
      .update(id, { featuredImage: null, featuredImageWidth: 0, featuredImageHeight: 0 });
    revalidateArticle(rec.slug as string);
    return { ok: true, id, slug: rec.slug as string };
  } catch {
    return { ok: false, error: "Could not remove the image." };
  }
}

export async function deleteArticle(id: string): Promise<void> {
  const { pb } = await requireUser();
  let slug: string | undefined;
  try {
    const rec = await pb.collection("articles").getOne(id);
    slug = rec.slug as string;
  } catch {
    // already gone
  }
  await pb.collection("articles").delete(id);
  revalidateArticle(slug);
}
