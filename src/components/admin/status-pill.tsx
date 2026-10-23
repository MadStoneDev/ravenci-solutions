import { cn } from "@/lib/utils";
import type { ArticleStatus } from "@/lib/admin-articles";

const PILL: Record<ArticleStatus, string> = {
  published:
    "bg-[#e7f1ea] text-[#1f5c34] dark:bg-[#15291f] dark:text-[#86cda3]",
  scheduled:
    "bg-[#f5e8f3] text-[#7a1670] dark:bg-accent/15 dark:text-foreground/85",
  draft: "bg-muted text-subtle",
};

const DOT: Record<ArticleStatus, string> = {
  published: "bg-[#2f7a47]",
  scheduled: "bg-accent",
  draft: "bg-[#8a8a93]",
};

const LABEL: Record<ArticleStatus, string> = {
  published: "Published",
  scheduled: "Scheduled",
  draft: "Draft",
};

export function StatusPill({ status }: { status: ArticleStatus }) {
  return (
    <span
      className={cn(
        "inline-flex h-[26px] items-center gap-1.5 rounded-full px-2.5 font-mono text-label-sm",
        PILL[status],
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", DOT[status])} />
      {LABEL[status]}
    </span>
  );
}
