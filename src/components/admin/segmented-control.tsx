"use client";

import { cn } from "@/lib/utils";

interface Option<T extends string> {
  value: T;
  label: string;
}

/**
 * One shared segmented control for the editor's Blocks/MDX toggle and the
 * Draft/Scheduled/Published control. Consistent 13px sans, same height/padding
 * and a single subtle active state. `fullWidth` makes the segments share the row
 * (used by Publishing); otherwise it's compact (the toggle).
 */
export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
  fullWidth = false,
}: {
  options: Option<T>[];
  value: T;
  onChange: (v: T) => void;
  ariaLabel: string;
  fullWidth?: boolean;
}) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex rounded-sm border border-border p-0.5",
        fullWidth && "flex w-full",
      )}
    >
      {options.map((o) => {
        const active = value === o.value;
        return (
          <button
            key={o.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(o.value)}
            className={cn(
              "rounded-[2px] px-3 py-1 text-[13px] font-sans transition-colors",
              fullWidth && "flex-1",
              active
                ? "bg-foreground/10 text-foreground"
                : "text-subtle hover:text-foreground",
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
