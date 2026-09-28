import { cn } from "@/lib/utils";

/**
 * SectionLabel — the mono engineering eyebrow above section headings, e.g.
 *   01 / BUILD
 * Accent purple on paper, auto-switching to the lighter dark-accent on charcoal
 * sections (via the --accent token). The optional dimension tick is the
 * structural-engineering motif (BRIEF §6). The index is the section's position
 * on the page, not a global counter.
 */
export default function SectionLabel({
  index,
  label,
  tick = false,
  tone = "accent",
  className,
}: {
  /** Zero-padded two-digit index, e.g. "01". Omit for a bare label. */
  index?: string;
  /** Label text, e.g. "BUILD". Uppercased by the label token's tracking. */
  label: string;
  /** Prepend the 22px dimension-line tick (hero / breadcrumb treatment). */
  tick?: boolean;
  /** accent = purple (default); muted = in-card sub-labels like "RECOMMENDED STACK". */
  tone?: "accent" | "muted";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-label uppercase",
        tone === "accent" ? "text-accent" : "text-muted-foreground",
        className,
      )}
    >
      {tick ? (
        <span aria-hidden className="h-px w-[22px] shrink-0 bg-accent" />
      ) : null}
      <span>{index ? `${index} / ${label}` : label}</span>
    </span>
  );
}
