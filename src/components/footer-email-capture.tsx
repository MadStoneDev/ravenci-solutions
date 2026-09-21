"use client";

import Link from "next/link";
import { IconSearch } from "@tabler/icons-react";

export default function FooterEmailCapture() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="flex-1">
        <p className="text-body font-semibold text-foreground">
          Free AI &amp; Google Visibility Check
        </p>
        <p className="text-small text-muted-foreground">
          Find out how search engines and AI see your business.
        </p>
      </div>
      <Link
        href="/#visibility-check"
        className="inline-flex h-11 items-center gap-2 rounded-sm bg-accent px-5 text-sm font-semibold text-accent-foreground transition-all duration-fast ease-standard hover:bg-accent/90 hover:shadow-[0_0_0_3px_hsl(var(--accent)/0.12)]"
      >
        <IconSearch size={16} aria-hidden />
        Get Your Free Report
      </Link>
    </div>
  );
}
