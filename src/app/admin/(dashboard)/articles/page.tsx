import Image from "next/image";
import Link from "next/link";
import { IconPlus, IconPhoto } from "@tabler/icons-react";

import { requireUser } from "@/lib/admin-auth";
import {
  fetchAdminArticles,
  computeStats,
  sortForStatus,
  type ArticleStatus,
  type AdminArticleListItem,
} from "@/lib/admin-articles";
import { formatDate, formatTime, relativeTime } from "@/lib/admin-format";
import { cn } from "@/lib/utils";
import { StatusPill } from "@/components/admin/status-pill";
import { SearchBox } from "@/components/admin/search-box";
import { RowActions } from "@/components/admin/row-actions";

export const dynamic = "force-dynamic";

const TABS: { key: "all" | ArticleStatus; label: string }[] = [
  { key: "all", label: "All" },
  { key: "published", label: "Published" },
  { key: "scheduled", label: "Scheduled" },
  { key: "draft", label: "Drafts" },
];

export default async function AdminArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; q?: string }>;
}) {
  const sp = await searchParams;
  const status = (
    ["all", "published", "scheduled", "draft"].includes(sp.status ?? "")
      ? sp.status
      : "all"
  ) as "all" | ArticleStatus;
  const q = (sp.q ?? "").trim().toLowerCase();

  const { pb } = await requireUser();
  const all = await fetchAdminArticles(pb);
  const stats = computeStats(all);

  let rows = sortForStatus(all, status);
  if (q) rows = rows.filter((a) => a.title.toLowerCase().includes(q));

  const counts = {
    all: stats.all,
    published: stats.published,
    scheduled: stats.scheduled,
    draft: stats.drafts,
  };

  return (
    <div className="flex flex-col gap-7 p-6 md:p-10">
      {/* Header */}
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-label text-muted-foreground">
            Writing
          </span>
          <h1 className="text-display-m text-foreground">Articles</h1>
        </div>
        <Link
          href="/admin/articles/new"
          className="inline-flex h-11 items-center gap-2 rounded-sm bg-accent px-4 text-small font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          <IconPlus className="h-4 w-4" />
          New article
        </Link>
      </header>

      {/* Stat strip */}
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-4">
        <Stat label="Published" value={String(stats.published)} />
        <Stat label="Scheduled" value={String(stats.scheduled)} />
        <Stat label="Drafts" value={String(stats.drafts)} />
        <Stat
          label="Next to go live"
          value={
            stats.nextToGoLive?.scheduleDate
              ? `${formatDate(stats.nextToGoLive.scheduleDate)}`
              : "—"
          }
          small
        />
      </div>

      {/* Toolbar: tabs + search */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border">
        <div role="tablist" className="flex flex-wrap gap-1">
          {TABS.map((t) => {
            const active = status === t.key;
            const href =
              t.key === "all"
                ? `/admin/articles${q ? `?q=${encodeURIComponent(q)}` : ""}`
                : `/admin/articles?status=${t.key}${q ? `&q=${encodeURIComponent(q)}` : ""}`;
            return (
              <Link
                key={t.key}
                href={href}
                role="tab"
                aria-selected={active}
                className={cn(
                  "flex items-center gap-1.5 border-b-2 px-3 py-2 text-small transition-colors",
                  active
                    ? "border-accent font-semibold text-foreground"
                    : "border-transparent text-subtle hover:text-foreground",
                )}
              >
                {t.label}
                <span className="font-mono text-label-sm text-muted-foreground">
                  {counts[t.key]}
                </span>
              </Link>
            );
          })}
        </div>
        <div className="pb-2">
          <SearchBox />
        </div>
      </div>

      {/* List */}
      <div className="overflow-hidden rounded-sm border border-border bg-card">
        {rows.length === 0 ? (
          <p className="p-12 text-center text-small text-muted-foreground">
            {q ? "No articles match your search." : "Nothing here yet."}
          </p>
        ) : (
          <ul className="divide-y divide-border">
            {rows.map((a) => (
              <Row key={a.id} article={a} />
            ))}
          </ul>
        )}
      </div>

      <p className="text-small text-muted-foreground">
        Times shown in Brisbane (AEST). Scheduled articles go live on their own at
        the set time.
      </p>
    </div>
  );
}

function Stat({
  label,
  value,
  small,
}: {
  label: string;
  value: string;
  small?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5 bg-card p-4">
      <span className="font-mono text-label-sm text-muted-foreground">
        {label}
      </span>
      <span
        className={cn(
          "text-foreground",
          small ? "text-body font-medium" : "text-display-m",
        )}
      >
        {value}
      </span>
    </div>
  );
}

function Row({ article: a }: { article: AdminArticleListItem }) {
  const meta =
    a.status === "draft"
      ? a.updatedAt
        ? `edited ${relativeTime(a.updatedAt)}`
        : "Draft"
      : [a.categories[0], `${a.readMins} min read`].filter(Boolean).join(" · ");

  const dateMain =
    a.status === "published"
      ? formatDate(a.publishedAt ?? a.scheduleDate)
      : a.status === "scheduled"
        ? formatDate(a.scheduleDate)
        : "—";
  const dateNote =
    a.status === "scheduled" && a.scheduleDate
      ? `Goes live ${formatTime(a.scheduleDate)}`
      : a.status === "draft"
        ? "Not scheduled"
        : "";

  return (
    <li className="flex items-center gap-4 p-3 transition-colors hover:bg-muted/40">
      <div className="relative hidden h-[60px] w-[96px] shrink-0 overflow-hidden rounded-sm border border-border bg-muted sm:block">
        {a.thumbUrl ? (
          <Image
            src={a.thumbUrl}
            alt=""
            fill
            sizes="96px"
            className="object-cover"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-muted-foreground">
            <IconPhoto className="h-5 w-5" />
          </span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <Link
          href={`/admin/articles/${a.slug}`}
          className="line-clamp-1 text-body font-medium text-foreground hover:text-accent"
        >
          {a.title || "(untitled)"}
        </Link>
        <p className="mt-0.5 line-clamp-1 text-small text-muted-foreground">
          {meta}
        </p>
      </div>

      <div className="hidden shrink-0 md:block">
        <StatusPill status={a.status} />
      </div>

      <div className="hidden w-40 shrink-0 flex-col text-right md:flex">
        <span className="text-small text-foreground">{dateMain}</span>
        {dateNote && (
          <span className="text-label-sm text-muted-foreground">{dateNote}</span>
        )}
      </div>

      <RowActions id={a.id} slug={a.slug} title={a.title} />
    </li>
  );
}
