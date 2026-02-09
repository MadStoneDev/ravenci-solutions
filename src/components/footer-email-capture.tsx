"use client";

import Link from "next/link";
import { IconSearch } from "@tabler/icons-react";

export default function FooterEmailCapture() {
  return (
    <div className="mt-12 pt-6 border-t border-neutral-700">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-white">
            Free AI & Google Visibility Check
          </p>
          <p className="text-xs text-neutral-500">
            Find out how search engines and AI see your business
          </p>
        </div>
        <Link
          href="/#visibility-check"
          className="inline-flex items-center gap-2 px-4 py-2 bg-ravenci-primary text-white text-sm font-medium rounded-lg hover:bg-ravenci-primary/80 transition-colors"
        >
          <IconSearch size={16} />
          Get Your Free Report
        </Link>
      </div>
    </div>
  );
}
