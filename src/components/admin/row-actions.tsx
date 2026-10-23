"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import Link from "next/link";
import { IconDots } from "@tabler/icons-react";

import { deleteArticle } from "@/app/admin/_actions/articles";

export function RowActions({
  id,
  slug,
  title,
}: {
  id: string;
  slug: string;
  title: string;
}) {
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function onDelete() {
    setOpen(false);
    if (
      !confirm(
        `Delete “${title}”? This permanently removes it. This can't be undone.`,
      )
    ) {
      return;
    }
    startTransition(() => deleteArticle(id));
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label="More actions"
        aria-haspopup="menu"
        aria-expanded={open}
        disabled={pending}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-50"
      >
        <IconDots className="h-4 w-4" />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 z-20 mt-1 w-44 overflow-hidden rounded-md border border-border bg-popover py-1 shadow-2"
        >
          <Link
            role="menuitem"
            href={`/admin/articles/${slug}`}
            className="block px-3 py-2 text-small text-subtle hover:bg-muted"
          >
            Edit
          </Link>
          <a
            role="menuitem"
            href={`https://ravenci.solutions/articles/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 text-small text-subtle hover:bg-muted"
          >
            View on site
          </a>
          <button
            role="menuitem"
            type="button"
            onClick={onDelete}
            className="block w-full px-3 py-2 text-left text-small text-destructive hover:bg-destructive/10"
          >
            Delete…
          </button>
        </div>
      )}
    </div>
  );
}
