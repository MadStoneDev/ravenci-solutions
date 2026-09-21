"use client";

import { useState } from "react";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

type PlatformKey = "content" | "store" | "app" | "design";

interface PlatformOption {
  key: PlatformKey;
  num: string;
  label: string;
  stack: string;
  reason: string;
  spec: string[];
  price: string;
}

const OPTIONS: PlatformOption[] = [
  {
    key: "content",
    num: "01",
    label: "A content site people read",
    stack: "WordPress + RAVENCI Builder",
    reason:
      "You publish regularly and want to edit pages yourself without a developer and without the layout falling apart.",
    spec: [
      "A custom block system, so there's no page-builder bloat to slow it down",
      "85+ PageSpeed on a CMS, which most WordPress sites never reach",
      "Hosted, patched and backed up by me from $39/mo",
    ],
    price: "FROM $7,500",
  },
  {
    key: "store",
    num: "02",
    label: "An online store",
    stack: "Shopify, or BigCommerce for big catalogues",
    reason:
      "You're selling, so the platform should handle payments, tax and fraud, and I should spend the budget on the buying experience.",
    spec: [
      "A theme built from scratch against your products, not a bought template",
      "Headless on Next.js only when the catalogue or content genuinely needs it",
      "Wholesale and B2B pricing tiers where you sell both ways",
    ],
    price: "FROM $12,000",
  },
  {
    key: "app",
    num: "03",
    label: "A custom app or client portal",
    stack: "Next.js 15, React and a Postgres database",
    reason:
      "Your process doesn't fit off-the-shelf software, so the site becomes a tool your staff and clients actually log into.",
    spec: [
      "Logins, roles and permissions built properly from day one",
      "Integrations with your CRM, booking, accounting or industry software",
      "Australian hosting, monitored, with a restore that's been tested",
    ],
    price: "QUOTED ON SCOPE",
  },
  {
    key: "design",
    num: "04",
    label: "I already have a design",
    stack: "Build-only, on the platform that suits it",
    reason:
      "Your designer has done their job. You need someone who'll build it exactly, not approximately, and stand behind the result.",
    spec: [
      "Pixel-accurate build against your files, on WordPress, Shopify or Next.js",
      "The same 85+ PageSpeed guarantee as a full RAVENCI build",
      "Your designer keeps the relationship, I keep the code honest",
    ],
    price: "QUOTED ON PAGES",
  },
];

export default function PlatformSelector() {
  const [selected, setSelected] = useState<PlatformKey>("content");
  const active = OPTIONS.find((o) => o.key === selected) ?? OPTIONS[0];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[380px_1fr]">
      {/* Options */}
      <div className="flex gap-3 overflow-x-auto lg:flex-col lg:overflow-visible" role="tablist" aria-label="Platform options">
        {OPTIONS.map((o) => {
          const isActive = o.key === selected;
          return (
            <button
              key={o.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelected(o.key)}
              className={`flex min-h-[60px] shrink-0 items-center gap-3 rounded-sm px-4 text-left transition-colors duration-fast lg:shrink ${
                isActive
                  ? "bg-foreground text-background"
                  : "border border-foreground/20 text-foreground hover:bg-muted"
              }`}
            >
              <span className={`font-mono text-label ${isActive ? "text-background/70" : "text-muted-foreground"}`}>
                {o.num}
              </span>
              <span className="text-body font-semibold">{o.label}</span>
            </button>
          );
        })}
      </div>

      {/* Detail card */}
      <div className="rounded-sm border border-border bg-card p-8">
        <span className="font-mono text-label uppercase text-muted-foreground">Recommended stack</span>
        <div className="my-4 h-px w-full bg-border" />
        <h3 className="text-heading-m text-foreground">{active.stack}</h3>
        <p className="mt-3 text-body text-muted-foreground">{active.reason}</p>
        <ul className="mt-5 flex flex-col gap-2.5">
          {active.spec.map((s) => (
            <li key={s} className="flex items-start gap-3 text-small text-foreground">
              <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 bg-accent" />
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
          <span className="font-mono text-label uppercase text-foreground">{active.price}</span>
          <Link
            href="/launch-your-vision"
            className="inline-flex items-center gap-1 text-small font-medium text-accent hover:underline"
          >
            Get a recommendation <IconArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}
