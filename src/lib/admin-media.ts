import "server-only";

import type PocketBase from "pocketbase";

import { pbFileUrl } from "@/lib/pocketbase";

export interface MediaItem {
  id: string;
  url: string;
  thumbUrl: string;
  alt: string;
  name: string;
  created?: string;
}

interface MediaRecord {
  id: string;
  file: string;
  alt: string;
  created: string;
}

export function recordToMedia(r: MediaRecord): MediaItem {
  return {
    id: r.id,
    url: pbFileUrl("media", r.id, r.file),
    thumbUrl: pbFileUrl("media", r.id, r.file, "400x250"),
    alt: r.alt ?? "",
    name: r.file,
    created: r.created,
  };
}

export async function fetchMedia(pb: PocketBase): Promise<MediaItem[]> {
  const records = await pb
    .collection("media")
    .getFullList<MediaRecord>({ sort: "-created" });
  return records.map(recordToMedia);
}
