"use client";

import { useState } from "react";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

type PlatformKey = "content" | "store" | "app";

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
    label: "A content site you can edit",
    stack: "WordPress + RAVENCI Builder",
    reason:
      "This setup is great if you want to edit pages yourself without a developer and without the layout falling" +
      " apart. I built my own builder to be simple to use. After launch, I record videos showing you how to use" +
      " the builder with your own site. Not generic tutorials you have to figure out how to apply. Your site, your pages.",
    spec: [
      "A custom block system, without all the extra bloat (needly code that weighs a site down)",
      "Scores 85+ on Google's speed test, which a lot of sites never reach",
      "As many pages as your website needs",
      "Basic analytics and SEO out of the box",
      "Two months' free hosting and maintenance after launch",
    ],
    price: "FROM $7,500",
  },
  {
    key: "store",
    num: "02",
    label: "An online store",
    stack: "Shopify, or BigCommerce for big catalogues",
    reason:
      "If you're after an online store to sell products, handle payments, and everything in between, this is" +
      " the setup for you. If you have a preference for a platform, let me know. Otherwise, I'll choose the one that" +
      " suits your business best.",
    spec: [
      "A theme that fits your industry and vibe",
      "Designed for your branding and target audience",
      "Customised so you're not paying for a stack of monthly add-ons",
      "Set up with your products and articles",
      "Configured with the shipping, taxes and payment methods that you offer",
    ],
    price: "FROM $12,000",
  },
  {
    key: "app",
    num: "03",
    label: "A custom app or client portal",
    stack: "Next.js, Node, Express and Postgres",
    reason:
      "Going for something bigger, like a custom online platform for your users? This is my bread and butter, and" +
      " it's the setup I recommend. I look after the frontend (what your visitors see) and the backend (the" +
      " behind-the-scenes part that stores your data and makes it all work).",
    spec: [
      "User portal with logins, registrations, roles and permissions",
      "Admin dashboard for your team and moderators",
      "Integrations with a CRM, booking engine, accounting or industry-specific software",
      "Australian hosting for your site and your database, so your data stays onshore",
      "Ongoing maintenance and monitoring with error tracking",
    ],
    price: "QUOTED ON SCOPE",
  },
];

export default function PlatformSelector() {
  const [selected, setSelected] = useState<PlatformKey>("content");
  const active = OPTIONS.find((o) => o.key === selected) ?? OPTIONS[0];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[380px_1fr]">
      {/* Options */}
      <div
        className="flex gap-3 overflow-x-auto lg:flex-col lg:overflow-visible"
        role="tablist"
        aria-label="Platform options"
      >
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
              <span
                className={`font-mono text-label ${
                  isActive ? "text-background/70" : "text-muted-foreground"
                }`}
              >
                {o.num}
              </span>
              <span className="text-body font-semibold">{o.label}</span>
            </button>
          );
        })}
      </div>

      {/* Detail card. Keyed by selection so the CSS assemble animation replays
          on change without an animation library. */}
      <div className="rounded-sm border border-border bg-card p-8">
        <span className="font-mono text-label uppercase text-muted-foreground">
          Recommended stack
        </span>
        <div className="my-4 h-px w-full bg-border" />
        <div key={selected} className="rv-assemble max-w-3xl">
          <h3 className="text-heading-m text-foreground">{active.stack}</h3>
          <p className="mt-3 text-body text-muted-foreground">
            {active.reason}
          </p>
          <ul className="mt-5 flex flex-col gap-2.5">
            {active.spec.map((s) => (
              <li
                key={s}
                className="flex items-start gap-3 text-small text-foreground"
              >
                <span
                  aria-hidden
                  className="mt-1.5 h-2 w-2 shrink-0 bg-accent"
                />
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
            <span className="font-mono text-label uppercase text-foreground">
              {active.price}
            </span>
            <Link
              href="/launch-your-vision"
              className="inline-flex items-center gap-1 text-small font-medium text-accent hover:underline"
            >
              Get a recommendation <IconArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
