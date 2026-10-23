"use client";

import { useRef, useState, useTransition } from "react";
import { IconUpload, IconTrash, IconCopy, IconCheck } from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import type { MediaItem } from "@/lib/admin-media";
import {
  uploadMedia,
  deleteMedia,
  updateMediaAlt,
} from "@/app/admin/_actions/media";

/**
 * Media grid. In "manage" mode (no onSelect) it's the /admin/media page.
 * With onSelect it becomes a picker (used by the editor's Insert image modal).
 */
export function MediaLibrary({
  initialItems,
  onSelect,
}: {
  initialItems: MediaItem[];
  onSelect?: (item: MediaItem) => void;
}) {
  const [items, setItems] = useState<MediaItem[]>(initialItems);
  const [error, setError] = useState<string>();
  const [copiedId, setCopiedId] = useState<string>();
  const [pending, start] = useTransition();
  const fileRef = useRef<HTMLInputElement>(null);

  function onFiles(files: FileList | null) {
    if (!files?.length) return;
    setError(undefined);
    start(async () => {
      for (const file of Array.from(files)) {
        const fd = new FormData();
        fd.set("file", file);
        const res = await uploadMedia(fd);
        if (res.ok && res.item) {
          setItems((prev) => [res.item!, ...prev]);
        } else {
          setError(res.error);
        }
      }
      if (fileRef.current) fileRef.current.value = "";
    });
  }

  function onDelete(id: string) {
    if (!confirm("Delete this image? This can't be undone.")) return;
    start(async () => {
      const res = await deleteMedia(id);
      if (res.ok) setItems((prev) => prev.filter((i) => i.id !== id));
      else setError(res.error);
    });
  }

  function copyUrl(item: MediaItem) {
    navigator.clipboard?.writeText(item.url);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(undefined), 1500);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          disabled={pending}
          className="inline-flex h-10 items-center gap-2 rounded-sm bg-accent px-3 text-small font-medium text-accent-foreground hover:opacity-90 disabled:opacity-50"
        >
          <IconUpload className="h-4 w-4" />
          {pending ? "Uploading…" : "Upload images"}
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          multiple
          className="hidden"
          onChange={(e) => onFiles(e.target.files)}
        />
        <span className="text-small text-muted-foreground">
          {items.length} image{items.length === 1 ? "" : "s"}
        </span>
      </div>

      {error && (
        <p className="rounded-sm border border-destructive/30 bg-destructive/10 px-3 py-2 text-small text-destructive">
          {error}
        </p>
      )}

      {items.length === 0 ? (
        <p className="rounded-sm border border-dashed border-border p-10 text-center text-small text-muted-foreground">
          No images yet. Upload one to get started.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-sm border border-border bg-card"
            >
              <button
                type="button"
                onClick={() => onSelect?.(item)}
                className={cn(
                  "relative block aspect-[16/10] w-full overflow-hidden bg-muted",
                  onSelect && "cursor-pointer hover:opacity-90",
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.thumbUrl}
                  alt={item.alt}
                  className="h-full w-full object-cover"
                />
                {onSelect && (
                  <span className="absolute inset-0 flex items-center justify-center bg-foreground/0 text-small font-medium text-background opacity-0 transition hover:bg-foreground/40 hover:opacity-100">
                    Insert
                  </span>
                )}
              </button>
              <div className="space-y-2 p-2">
                <input
                  defaultValue={item.alt}
                  placeholder="Alt text"
                  onBlur={(e) => {
                    if (e.target.value !== item.alt) {
                      updateMediaAlt(item.id, e.target.value);
                      item.alt = e.target.value;
                    }
                  }}
                  className="w-full rounded-sm border border-input/25 bg-card px-2 py-1 text-label-sm text-foreground outline-none focus:border-accent"
                />
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => copyUrl(item)}
                    className="inline-flex items-center gap-1 text-label-sm text-muted-foreground hover:text-foreground"
                  >
                    {copiedId === item.id ? (
                      <>
                        <IconCheck className="h-3 w-3" /> Copied
                      </>
                    ) : (
                      <>
                        <IconCopy className="h-3 w-3" /> URL
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => onDelete(item.id)}
                    aria-label="Delete image"
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <IconTrash className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
