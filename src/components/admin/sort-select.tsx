"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IconArrowsSort, IconChevronDown } from "@tabler/icons-react";

const OPTIONS = [
  { value: "created", label: "Created" },
  { value: "modified", label: "Last modified" },
  { value: "name", label: "Name" },
] as const;

export function SortSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const current = params.get("sort") ?? "created";

  function change(value: string) {
    const next = new URLSearchParams(params.toString());
    // "created" is the default, so keep the URL clean for it.
    if (value && value !== "created") next.set("sort", value);
    else next.delete("sort");
    router.push(`${pathname}?${next.toString()}`);
  }

  return (
    <label className="relative flex items-center">
      <span className="sr-only">Sort articles</span>
      <IconArrowsSort className="pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground" />
      <select
        value={current}
        onChange={(e) => change(e.target.value)}
        className="h-10 appearance-none rounded-sm border border-input/25 bg-card pl-9 pr-9 text-small text-foreground outline-none focus:border-accent"
      >
        {OPTIONS.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <IconChevronDown className="pointer-events-none absolute right-2.5 h-4 w-4 text-muted-foreground" />
    </label>
  );
}
