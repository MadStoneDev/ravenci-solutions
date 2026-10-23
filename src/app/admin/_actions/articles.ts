"use server";

import { revalidatePath, revalidateTag } from "next/cache";

import { requireUser } from "@/lib/admin-auth";
import { ARTICLES_TAG } from "@/lib/pocketbase";

/** Revalidate the public article surfaces plus the admin list. */
function revalidateArticle(slug?: string) {
  revalidateTag(ARTICLES_TAG);
  revalidatePath("/articles");
  if (slug) revalidatePath(`/articles/${slug}`);
  revalidatePath("/admin/articles");
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
