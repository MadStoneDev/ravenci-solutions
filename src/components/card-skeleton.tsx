import { cn } from "@/lib/utils";

/**
 * CardSkeleton — placeholder for a loading card. Opacity pulse only, 1.6s, no
 * shimmer sweep (BRIEF §4.1). Aria-hidden; pair with an sr-only status nearby.
 */
export default function CardSkeleton({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "rv-pulse rounded-sm border border-border bg-card p-5",
        className,
      )}
    >
      <div className="h-40 w-full rounded-sm bg-muted" />
      <div className="mt-4 h-3 w-1/3 rounded-sm bg-muted" />
      <div className="mt-3 h-4 w-3/4 rounded-sm bg-muted" />
      <div className="mt-2 h-4 w-1/2 rounded-sm bg-muted" />
    </div>
  );
}
