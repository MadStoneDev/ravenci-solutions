"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IconSearch } from "@tabler/icons-react";

export function SearchBox() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const ref = useRef<HTMLInputElement>(null);

  // "/" focuses the search, matching the mockup shortcut.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (
        e.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        ref.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function submit(value: string) {
    const next = new URLSearchParams(params.toString());
    if (value) next.set("q", value);
    else next.delete("q");
    router.push(`${pathname}?${next.toString()}`);
  }

  return (
    <label className="relative flex items-center">
      <span className="sr-only">Search articles</span>
      <IconSearch className="pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground" />
      <input
        ref={ref}
        type="search"
        defaultValue={params.get("q") ?? ""}
        placeholder="Search titles"
        onKeyDown={(e) => {
          if (e.key === "Enter") submit((e.target as HTMLInputElement).value);
        }}
        className="h-10 w-full rounded-sm border border-input/25 bg-card pl-9 pr-10 text-small text-foreground outline-none focus:border-accent sm:w-64"
      />
      <kbd className="pointer-events-none absolute right-3 rounded-[3px] border border-border px-1.5 font-mono text-label-sm text-muted-foreground">
        /
      </kbd>
    </label>
  );
}
