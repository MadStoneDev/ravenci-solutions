import { cn } from "@/lib/utils";
import type { ArticleStatus } from "@/lib/admin-articles";

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
  // Dot only — the label reads badly where the tag sits on the card edge.
  return (
    <span
      role="img"
      aria-label={LABEL[status]}
      title={LABEL[status]}
      className={cn("block h-2.5 w-2.5 shrink-0 rounded-full", DOT[status])}
    />
  );
}
