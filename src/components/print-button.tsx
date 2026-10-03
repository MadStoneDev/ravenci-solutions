"use client";

import { IconPrinter } from "@tabler/icons-react";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined") window.print();
      }}
      className="px-5 py-3 bg-accent text-accent-foreground rounded-full shadow-lg hover:bg-accent/85 transition-colors flex items-center gap-2 text-sm font-medium"
    >
      <IconPrinter size={18} />
      Print / Save as PDF
    </button>
  );
}
