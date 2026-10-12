"use client";

import Image from "next/image";
import {
  IconChevronLeft,
  IconChevronRight,
  IconPhoto,
  IconX,
} from "@tabler/icons-react";
import { useCallback, useEffect, useState } from "react";

import type { PortfolioItem } from "@/data/portfolio";

/**
 * A portfolio card for work without a full case-study page. The card matches
 * CaseStudyCard visually, but instead of linking it opens the item's images in
 * an accessible lightbox (Esc / arrow keys / backdrop click to dismiss).
 */
export default function PortfolioCard({
  item,
  priority = false,
}: {
  item: PortfolioItem;
  priority?: boolean;
}) {
  const images =
    item.images && item.images.length > 0 ? item.images : [item.image];
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, prev, next]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIndex(0);
          setOpen(true);
        }}
        className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card text-left transition-colors duration-fast hover:border-foreground/30"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-muted">
          <Image
            src={item.image}
            alt={`${item.title} — ${item.label}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            priority={priority}
            className="object-cover object-top transition-transform duration-slow ease-standard group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <span className="mb-2 font-mono text-label uppercase text-accent">
            {item.label}
          </span>
          <h3 className="text-heading-s text-foreground">{item.title}</h3>
          <p className="mt-2 line-clamp-3 flex-1 text-small text-muted-foreground">
            {item.excerpt}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-sm border border-border px-2.5 py-1 font-mono text-label-sm uppercase text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="mt-4 inline-flex items-center gap-1.5 text-small font-medium text-accent">
            <IconPhoto
              size={16}
              aria-hidden
              className="transition-transform duration-fast group-hover:scale-110"
            />
            {images.length > 1 ? "View gallery" : "View work"}
          </span>
        </div>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} gallery`}
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-8"
        >
          <button
            type="button"
            aria-label="Close gallery"
            onClick={close}
            className="absolute right-4 top-4 rounded-sm p-2 text-white/80 transition-colors hover:text-white"
          >
            <IconX size={28} aria-hidden />
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-full max-w-6xl flex-col items-center gap-3"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[index]}
              alt={`${item.title} — ${item.label} (${index + 1} of ${images.length})`}
              className="max-h-[82vh] w-auto max-w-full rounded-sm object-contain"
            />
            <figcaption className="text-small text-white/70">
              {item.title}
              {images.length > 1 ? ` · ${index + 1} / ${images.length}` : ""}
            </figcaption>
          </figure>

          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-sm p-2 text-white/80 transition-colors hover:text-white sm:left-4"
              >
                <IconChevronLeft size={32} aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm p-2 text-white/80 transition-colors hover:text-white sm:right-4"
              >
                <IconChevronRight size={32} aria-hidden />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
