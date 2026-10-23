"use client";

import { cn } from "@/lib/utils";

interface Option<T extends string> {
  value: T;
  label: string;
}

/**
 * One shared segmented control for the editor's Blocks/MDX toggle and the
 * Draft/Scheduled/Published control. Subtle dark active state; sans font only.
 * size="sm" is the compact secondary toggle; size="md" fills its row.
 */
export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
  size = "md",
}: {
  options: Option<T>[];
  value: T;
  onChange: (v: T) => void;
  ariaLabel: string;
  size?: "sm" | "md";
}) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex rounded-sm border border-border p-0.5",
        size === "md" && "flex w-full",
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
              "rounded-[2px] font-sans transition-colors",
              size === "sm"
                ? "px-2 py-0.5 text-[13px]"
                : "flex-1 px-2 py-1.5 text-small",
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
