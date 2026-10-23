"use client";

import { useEffect, useState } from "react";
import { IconX } from "@tabler/icons-react";

import { MediaLibrary } from "@/components/admin/media-library";
import { listMedia } from "@/app/admin/_actions/media";
import type { MediaItem } from "@/lib/admin-media";

export function MediaPickerModal({
  onClose,
  onPick,
}: {
  onClose: () => void;
  onPick: (item: MediaItem) => void;
}) {
  const [items, setItems] = useState<MediaItem[] | null>(null);

  useEffect(() => {
    listMedia().then(setItems).catch(() => setItems([]));
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-foreground/50 p-4"
      onClick={onClose}
    >
      <div
        className="mt-[5vh] w-full max-w-3xl rounded-md border border-border bg-background p-5 shadow-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-heading-s text-foreground">Insert image</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-sm p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <IconX className="h-4 w-4" />
          </button>
        </div>
        {items === null ? (
          <p className="p-8 text-center text-small text-muted-foreground">
            Loading…
          </p>
        ) : (
          <MediaLibrary initialItems={items} onSelect={onPick} />
        )}
      </div>
    </div>
  );
}
