"use server";

import sharp from "sharp";

import { requireUser } from "@/lib/admin-auth";
import { fetchMedia, recordToMedia, type MediaItem } from "@/lib/admin-media";

export async function listMedia(): Promise<MediaItem[]> {
  const { pb } = await requireUser();
  return fetchMedia(pb);
}

const MAX_IMAGE = 10 * 1024 * 1024;
const OK_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

export interface MediaUploadResult {
  ok: boolean;
  item?: MediaItem;
  error?: string;
}

export async function uploadMedia(
  formData: FormData,
): Promise<MediaUploadResult> {
  const { pb } = await requireUser();
  const file = formData.get("file");
  const alt = String(formData.get("alt") ?? "");

  if (!(file instanceof File)) return { ok: false, error: "No file provided." };
  if (!OK_TYPES.includes(file.type)) {
    return { ok: false, error: "Use a JPG, PNG, WebP or GIF image." };
  }
  if (file.size > MAX_IMAGE) {
    return { ok: false, error: "Image must be 10 MB or smaller." };
  }

  // Normalise to a Blob (and confirm it's a real image via sharp).
  const buf = Buffer.from(await file.arrayBuffer());
  try {
    await sharp(buf).metadata();
  } catch {
    return { ok: false, error: "That file isn't a readable image." };
  }

  const pbForm = new FormData();
  pbForm.set("file", new Blob([buf], { type: file.type }), file.name);
  pbForm.set("alt", alt);

  try {
    const rec = await pb.collection("media").create(pbForm);
    return {
      ok: true,
      item: recordToMedia({
        id: rec.id,
        file: rec.file as string,
        alt: rec.alt as string,
        created: rec.created as string,
      }),
    };
  } catch {
    return { ok: false, error: "Upload failed. Please try again." };
  }
}

export async function updateMediaAlt(
  id: string,
  alt: string,
): Promise<{ ok: boolean; error?: string }> {
  const { pb } = await requireUser();
  try {
    await pb.collection("media").update(id, { alt });
    return { ok: true };
  } catch {
    return { ok: false, error: "Could not update." };
  }
}

export async function deleteMedia(
  id: string,
): Promise<{ ok: boolean; error?: string }> {
  const { pb } = await requireUser();
  try {
    await pb.collection("media").delete(id);
    return { ok: true };
  } catch {
    return { ok: false, error: "Could not delete." };
  }
}
