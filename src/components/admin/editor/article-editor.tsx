"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  IconChevronLeft,
  IconEye,
  IconX,
  IconPhoto,
} from "@tabler/icons-react";
import type { EditorView } from "@codemirror/view";

import { cn } from "@/lib/utils";
import { validateMdx } from "@/lib/mdx/validate";
import type { AdminArticleFull } from "@/lib/admin-articles";
import type { MediaItem } from "@/lib/admin-media";
import { MediaPickerModal } from "./media-picker-modal";
import {
  saveArticle,
  uploadFeaturedImage,
  removeFeaturedImage,
  type ArticleInput,
} from "@/app/admin/_actions/articles";

const MdxCodeEditor = dynamic(() => import("./mdx-code-editor"), { ssr: false });

type Status = "draft" | "scheduled" | "published";

function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

// Brisbane is UTC+10 year-round (no DST).
function isoToBrisbaneParts(iso?: string): { date: string; time: string } {
  if (!iso) return { date: "", time: "" };
  const d = new Date(iso);
  const b = new Date(d.getTime() + 10 * 3600 * 1000);
  return {
    date: b.toISOString().slice(0, 10),
    time: b.toISOString().slice(11, 16),
  };
}
function brisbanePartsToIso(date: string, time: string): string | undefined {
  if (!date) return undefined;
  return new Date(`${date}T${time || "09:00"}:00+10:00`).toISOString();
}

const INPUT =
  "w-full rounded-sm border border-input/25 bg-card px-3 py-2 text-small text-foreground outline-none focus:border-accent";
const LABEL = "font-mono text-label-sm text-muted-foreground";

const STATUS_NOTE: Record<Status, string> = {
  draft: "Only you can see drafts. Nothing changes on the live site.",
  scheduled:
    "Goes live on its own at the time below. The date shown on the article will match.",
  published: "Live now. Changes stay local until you press the button above.",
};

export function ArticleEditor({
  initial,
  categorySuggestions = [],
}: {
  initial?: AdminArticleFull;
  categorySuggestions?: string[];
}) {
  const [id, setId] = useState(initial?.id);
  const [title, setTitle] = useState(initial?.title ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "");
  const [content, setContent] = useState(initial?.content ?? "");
  const [categories, setCategories] = useState<string[]>(
    initial?.categories ?? [],
  );
  const [metaTitle, setMetaTitle] = useState(initial?.metaTitle ?? "");
  const [metaDescription, setMetaDescription] = useState(
    initial?.metaDescription ?? "",
  );
  const [metaKeywords, setMetaKeywords] = useState(initial?.metaKeywords ?? "");
  const [imageAlt, setImageAlt] = useState(initial?.featuredImageAlt ?? "");
  const [image, setImage] = useState(initial?.featuredImage);
  const [status, setStatus] = useState<Status>(initial?.status ?? "draft");

  const initialParts = isoToBrisbaneParts(
    initial?.scheduleDate ?? initial?.publishedAt,
  );
  const [schedDate, setSchedDate] = useState(initialParts.date);
  const [schedTime, setSchedTime] = useState(initialParts.time || "09:00");

  const wasPublished = Boolean(
    initial && (initial.status === "published" || initial.publishedAt),
  );
  const slugLocked = wasPublished;

  const [saveState, setSaveState] = useState<
    "idle" | "saving" | "saved" | "dirty" | "error"
  >("idle");
  const [error, setError] = useState<string>();
  const [mdxStatus, setMdxStatus] = useState<{ ok: boolean; message?: string }>({
    ok: true,
  });
  const saving = saveState === "saving";
  const [showMediaPicker, setShowMediaPicker] = useState(false);
  const cmViewRef = useRef<EditorView | null>(null);

  // Auto-slug from title until first publish or manual edit.
  const slugTouched = useRef(Boolean(initial?.slug));
  useEffect(() => {
    if (!slugLocked && !slugTouched.current) setSlug(slugify(title));
  }, [title, slugLocked]);

  // Live MDX validation (debounced).
  useEffect(() => {
    const t = setTimeout(async () => {
      setMdxStatus(await validateMdx(content));
    }, 500);
    return () => clearTimeout(t);
  }, [content]);

  const buildInput = useCallback(
    (targetStatus: Status): ArticleInput => ({
      id,
      title,
      slug,
      excerpt,
      content,
      author: initial?.author ?? "Richard",
      categories,
      metaTitle,
      metaDescription,
      metaKeywords,
      featuredImageAlt: imageAlt,
      status: targetStatus,
      scheduleDate:
        targetStatus === "scheduled" || targetStatus === "published"
          ? brisbanePartsToIso(schedDate, schedTime)
          : undefined,
    }),
    [
      id, title, slug, excerpt, content, categories, metaTitle, metaDescription,
      metaKeywords, imageAlt, schedDate, schedTime, initial?.author,
    ],
  );

  const doSave = useCallback(
    async (targetStatus: Status): Promise<boolean> => {
      setError(undefined);
      setSaveState("saving");
      const res = await saveArticle(buildInput(targetStatus));
      if (res.ok) {
        if (res.id) setId(res.id);
        if (res.slug) setSlug(res.slug);
        setStatus(targetStatus);
        setSaveState("saved");
        return true;
      }
      setError(res.error);
      setSaveState("error");
      return false;
    },
    [buildInput],
  );

  // Autosave drafts only — never touches the live article.
  const dirtyRef = useRef(false);
  function markDirty() {
    dirtyRef.current = true;
    setSaveState("dirty");
  }
  useEffect(() => {
    if (status !== "draft") return;
    if (!dirtyRef.current) return;
    const t = setTimeout(() => {
      if (slug) doSave("draft");
      dirtyRef.current = false;
    }, 2000);
    return () => clearTimeout(t);
  }, [content, title, excerpt, status, slug, doSave]);

  async function ensureSaved(): Promise<string | undefined> {
    if (id) return id;
    const ok = await doSave("draft");
    return ok ? idRef.current : undefined;
  }
  const idRef = useRef(id);
  useEffect(() => {
    idRef.current = id;
  }, [id]);

  async function onPickImage(file: File) {
    const articleId = await ensureSaved();
    if (!articleId) return;
    const fd = new FormData();
    fd.set("id", articleId);
    fd.set("file", file);
    const res = await uploadFeaturedImage(fd);
    if (res.ok) {
      setImage({
        url: res.url!,
        name: res.name!,
        width: res.width ?? 0,
        height: res.height ?? 0,
      });
    } else {
      setError(res.error);
    }
  }

  function insertImageMarkdown(item: MediaItem) {
    const md = `![${item.alt || ""}](${item.url})`;
    const view = cmViewRef.current;
    if (view) {
      const { from, to } = view.state.selection.main;
      view.dispatch({
        changes: { from, to, insert: md },
        selection: { anchor: from + md.length },
      });
      view.focus();
    } else {
      setContent((c) => (c ? `${c}\n\n${md}\n` : `${md}\n`));
    }
    markDirty();
    setShowMediaPicker(false);
  }

  const primaryLabel =
    status === "scheduled"
      ? "Schedule"
      : status === "published"
        ? wasPublished
          ? "Update article"
          : "Publish"
        : "Save draft";

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-10 flex flex-wrap items-center gap-3 border-b border-border bg-background/95 px-4 py-2.5 backdrop-blur md:px-6">
        <Link
          href="/admin/articles"
          className="inline-flex items-center gap-1 text-small text-subtle hover:text-foreground"
        >
          <IconChevronLeft className="h-4 w-4" /> Articles
        </Link>
        <span className="text-small text-muted-foreground">
          {saveState === "saving"
            ? "Saving…"
            : saveState === "saved"
              ? "Saved"
              : saveState === "dirty"
                ? "Unsaved changes"
                : saveState === "error"
                  ? "Save failed"
                  : ""}
        </span>

        <div className="ml-auto flex items-center gap-2">
          {slug && (
            <a
              href={`https://ravenci.solutions/articles/${slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-sm border border-border px-3 py-1.5 text-small text-subtle hover:text-foreground"
            >
              <IconEye className="h-4 w-4" /> Preview
            </a>
          )}
          <button
            type="button"
            disabled={saving}
            onClick={() => doSave(status)}
            className="inline-flex items-center rounded-sm bg-accent px-4 py-1.5 text-small font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {saving ? "Saving…" : primaryLabel}
          </button>
        </div>
      </header>

      {error && (
        <div
          role="alert"
          className="border-b border-destructive/30 bg-destructive/10 px-6 py-2 text-small text-destructive"
        >
          {error}
        </div>
      )}

      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Canvas */}
        <main className="min-w-0 flex-1 px-4 py-8 md:px-8">
          <div className="mx-auto max-w-[720px] space-y-6">
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                markDirty();
              }}
              placeholder="Article title"
              className="w-full bg-transparent text-display-m text-foreground outline-none placeholder:text-muted-foreground/50"
            />

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className={LABEL}>MDX — body only</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setShowMediaPicker(true)}
                    className="inline-flex items-center gap-1 text-label-sm text-accent hover:underline"
                  >
                    <IconPhoto className="h-3.5 w-3.5" /> Insert image
                  </button>
                  <span
                    className={cn(
                      "font-mono text-label-sm",
                      mdxStatus.ok ? "text-[#2f7a47]" : "text-destructive",
                    )}
                  >
                    {mdxStatus.ok ? "● Valid MDX" : "● Invalid MDX"}
                  </span>
                </div>
              </div>
              <MdxCodeEditor
                value={content}
                onChange={(v) => {
                  setContent(v);
                  markDirty();
                }}
                onReady={(view) => {
                  cmViewRef.current = view;
                }}
              />
              {!mdxStatus.ok && mdxStatus.message && (
                <p className="font-mono text-label-sm text-destructive">
                  {mdxStatus.message}
                </p>
              )}
              <p className="text-small text-muted-foreground">
                Frontmatter is managed in the side panel; this is the body only.
                Use MDX components like{" "}
                <code className="font-mono">&lt;Callout&gt;</code> and{" "}
                <code className="font-mono">&lt;Checklist&gt;</code> directly.
              </p>
            </div>
          </div>
        </main>

        {/* Side panel */}
        <aside className="w-full shrink-0 space-y-7 border-t border-border p-6 lg:w-[360px] lg:border-l lg:border-t-0">
          {/* Publishing */}
          <section className="space-y-2">
            <span className={LABEL}>Publishing</span>
            <div className="flex rounded-sm border border-border p-0.5">
              {(["draft", "scheduled", "published"] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setStatus(s)}
                  className={cn(
                    "flex-1 rounded-[2px] px-2 py-1.5 text-small capitalize transition-colors",
                    status === s
                      ? "bg-card text-foreground shadow-1"
                      : "text-subtle hover:text-foreground",
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
            {(status === "scheduled" || status === "published") && (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="space-y-1">
                  <label className={LABEL}>
                    {status === "published" ? "Published on" : "Date"}
                  </label>
                  <input
                    type="date"
                    value={schedDate}
                    onChange={(e) => setSchedDate(e.target.value)}
                    className={INPUT}
                  />
                </div>
                <div className="space-y-1">
                  <label className={LABEL}>Time (AEST)</label>
                  <input
                    type="time"
                    value={schedTime}
                    onChange={(e) => setSchedTime(e.target.value)}
                    className={INPUT}
                  />
                </div>
              </div>
            )}
            <p className="text-small text-muted-foreground">
              {STATUS_NOTE[status]}
            </p>
          </section>

          {/* URL */}
          <section className="space-y-2">
            <span className={LABEL}>URL</span>
            <div className="flex items-center gap-1">
              <span className="font-mono text-label-sm text-muted-foreground">
                /articles/
              </span>
              <input
                value={slug}
                disabled={slugLocked}
                onChange={(e) => {
                  slugTouched.current = true;
                  setSlug(slugify(e.target.value));
                }}
                className={cn(INPUT, "font-mono", slugLocked && "opacity-60")}
              />
            </div>
            {slugLocked && (
              <p className="text-label-sm text-muted-foreground">
                Locked after publishing.
              </p>
            )}
          </section>

          {/* Excerpt */}
          <section className="space-y-2">
            <div className="flex items-center justify-between">
              <span className={LABEL}>Excerpt</span>
              <span className="font-mono text-label-sm text-muted-foreground">
                {excerpt.length}
              </span>
            </div>
            <textarea
              value={excerpt}
              onChange={(e) => {
                setExcerpt(e.target.value);
                markDirty();
              }}
              rows={3}
              className={INPUT}
            />
          </section>

          {/* Featured image */}
          <section className="space-y-2">
            <span className={LABEL}>Featured image</span>
            {image ? (
              <div className="flex gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.url}
                  alt=""
                  className="h-12 w-[72px] shrink-0 rounded-sm border border-border object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-small text-foreground">
                    {image.name}
                  </p>
                  <p className="text-label-sm text-muted-foreground">
                    {image.width} × {image.height}
                  </p>
                  <button
                    type="button"
                    onClick={async () => {
                      if (id) {
                        await removeFeaturedImage(id);
                        setImage(undefined);
                      }
                    }}
                    className="mt-1 inline-flex items-center gap-1 text-label-sm text-destructive hover:underline"
                  >
                    <IconX className="h-3 w-3" /> Remove
                  </button>
                </div>
              </div>
            ) : (
              <label className="flex cursor-pointer items-center justify-center gap-2 rounded-sm border border-dashed border-border px-3 py-6 text-small text-muted-foreground hover:border-accent hover:text-foreground">
                <IconPhoto className="h-4 w-4" />
                Upload image
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) onPickImage(f);
                  }}
                />
              </label>
            )}
            <div className="space-y-1">
              <label className={LABEL}>Alt text</label>
              <input
                value={imageAlt}
                onChange={(e) => setImageAlt(e.target.value)}
                placeholder="Describe the image"
                className={INPUT}
              />
            </div>
          </section>

          {/* Categories */}
          <section className="space-y-2">
            <span className={LABEL}>Categories</span>
            <CategoryEditor
              value={categories}
              onChange={setCategories}
              suggestions={categorySuggestions}
            />
          </section>

          {/* Search & social */}
          <section className="space-y-3">
            <span className={LABEL}>Search &amp; social</span>
            <div className="rounded-sm border border-border bg-muted/30 p-3">
              <p className="text-label-sm text-muted-foreground">
                ravenci.solutions › articles
              </p>
              <p className="text-body text-[#1a0dab] dark:text-[#8ab4f8]">
                {metaTitle || title || "Article title"}
              </p>
              <p className="line-clamp-2 text-small text-subtle">
                {metaDescription || excerpt}
              </p>
            </div>
            <Counter label="Meta title" value={metaTitle} max={60} onChange={setMetaTitle} />
            <Counter
              label="Meta description"
              value={metaDescription}
              max={160}
              onChange={setMetaDescription}
              textarea
            />
            <div className="space-y-1">
              <label className={LABEL}>Keywords</label>
              <input
                value={metaKeywords}
                onChange={(e) => setMetaKeywords(e.target.value)}
                className={INPUT}
              />
            </div>
          </section>

          {(initial?.publishedAt || initial?.updatedAt) && (
            <section className="space-y-1 border-t border-border pt-4 text-label-sm text-muted-foreground">
              {initial?.publishedAt && (
                <p>Published {new Date(initial.publishedAt).toLocaleString("en-AU")}</p>
              )}
              {initial?.updatedAt && (
                <p>Last updated {new Date(initial.updatedAt).toLocaleString("en-AU")}</p>
              )}
            </section>
          )}
        </aside>
      </div>

      {showMediaPicker && (
        <MediaPickerModal
          onClose={() => setShowMediaPicker(false)}
          onPick={insertImageMarkdown}
        />
      )}
    </div>
  );
}

function Counter({
  label,
  value,
  max,
  onChange,
  textarea,
}: {
  label: string;
  value: string;
  max: number;
  onChange: (v: string) => void;
  textarea?: boolean;
}) {
  const over = value.length > max;
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <label className={LABEL}>{label}</label>
        <span
          className={cn(
            "font-mono text-label-sm",
            over ? "text-warning" : "text-muted-foreground",
          )}
        >
          {value.length} / {max}
        </span>
      </div>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className={INPUT}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={INPUT}
        />
      )}
    </div>
  );
}

function CategoryEditor({
  value,
  onChange,
  suggestions = [],
}: {
  value: string[];
  onChange: (v: string[]) => void;
  suggestions?: string[];
}) {
  const [input, setInput] = useState("");
  const available = suggestions.filter((s) => !value.includes(s));
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {value.map((c) => (
        <span
          key={c}
          className="inline-flex items-center gap-1 rounded-sm bg-foreground px-2 py-1 text-label-sm text-background"
        >
          {c}
          <button
            type="button"
            aria-label={`Remove ${c}`}
            onClick={() => onChange(value.filter((x) => x !== c))}
          >
            <IconX className="h-3 w-3" />
          </button>
        </span>
      ))}
      <input
        list="category-suggestions"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && input.trim()) {
            e.preventDefault();
            if (!value.includes(input.trim())) onChange([...value, input.trim()]);
            setInput("");
          }
        }}
        placeholder="+ Add"
        className="w-28 rounded-sm border border-dashed border-border bg-transparent px-2 py-1 text-small outline-none focus:border-accent"
      />
      <datalist id="category-suggestions">
        {available.map((s) => (
          <option key={s} value={s} />
        ))}
      </datalist>
    </div>
  );
}
