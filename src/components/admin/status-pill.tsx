import { cn } from "@/lib/utils";
import type { ArticleStatus } from "@/lib/admin-articles";

const PILL: Record<ArticleStatus, string> = {
  published:
    "bg-[#e7f1ea] text-[#1f5c34] dark:bg-[#15291f] dark:text-[#86cda3]",
  scheduled:
    "bg-[#f7efda] text-[#7a5200] dark:bg-[#2a2310] dark:text-[#d8ab5c]",
  draft: "bg-muted text-subtle",
};

const DOT: Record<ArticleStatus, string> = {
  published: "bg-[#2f7a47]", // green
  scheduled: "bg-[#c68a1e]", // amber / gold
  draft: "bg-[#8a8a93]", // grey
};

const LABEL: Record<ArticleStatus, string> = {
  published: "Published",
  scheduled: "Scheduled",
  draft: "Draft",
};

export function StatusPill({ status }: { status: ArticleStatus }) {
  return (
    <>
      {/* Compact colour dot on small screens. */}
      <span
        role="img"
        aria-label={LABEL[status]}
        title={LABEL[status]}
        className={cn(
          "block h-2.5 w-2.5 shrink-0 rounded-full sm:hidden",
          DOT[status],
        )}
      />
      {/* Full labelled tag from sm up. */}
      <span
        className={cn(
          "hidden h-[26px] items-center gap-1.5 rounded-full px-2.5 font-mono text-label-sm sm:inline-flex",
          PILL[status],
        )}
      >
        <span className={cn("h-1.5 w-1.5 rounded-full", DOT[status])} />
        {LABEL[status]}
      </span>
    </>
  );
}
