import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import Breadcrumbs from "@/components/breadcrumbs";
import SectionLabel from "@/components/section-label";
import { Button } from "@/components/ui/button";
import { LAB_PROJECTS, type LabStatus } from "@/data/labs";
import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";

const SECTION = "px-5 py-14 md:px-12 md:py-20 lg:px-20";

export const metadata: Metadata = {
  title: "Labs | RAVENCI Solutions",
  description:
    "Products I've built. Side projects and tools, as proof of range, from RAVENCI Solutions in Brisbane.",
  openGraph: {
    ...OG_DEFAULTS,
    title: "Labs | RAVENCI Solutions",
    description: "Products I've built, as proof of range.",
    url: "/labs",
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
  alternates: { canonical: "/labs" },
};

const STATUS_LABEL: Record<LabStatus, string> = {
  live: "Live",
  beta: "Beta",
  wip: "In progress",
};

export default function LabsPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="flex max-w-3xl flex-col gap-4">
          <Breadcrumbs items={[{ label: "Labs" }]} />
          <SectionLabel label="Labs" tick />
          <h1 className="text-display-l text-foreground">Things I&apos;ve built</h1>
          <p className="text-lead text-muted-foreground">
            Products and tools I&apos;ve built outside of client work. Proof of
            range, and where I try things before they turn up in a build.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className={SECTION}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {LAB_PROJECTS.filter((p) => !p.hidden).map((p) => {
            const inner = (
              <>
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-heading-s text-foreground">{p.name}</h2>
                  <span className="shrink-0 font-mono text-label-sm uppercase text-muted-foreground">
                    {STATUS_LABEL[p.status]}
                  </span>
                </div>
                <p className="mt-2 flex-1 text-small text-muted-foreground">{p.oneLiner}</p>
                {p.stack.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-sm border border-border px-2.5 py-1 font-mono text-label-sm uppercase text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
                {p.url && (
                  <span className="mt-4 inline-flex items-center gap-1 text-small font-medium text-accent">
                    Visit <IconArrowUpRight size={16} aria-hidden />
                  </span>
                )}
              </>
            );

            const cls =
              "flex flex-col rounded-sm border border-border bg-card p-6 transition-colors duration-fast hover:border-foreground/30";

            return p.url ? (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className={`group ${cls}`}>
                {inner}
              </a>
            ) : (
              <div key={p.name} className={cls}>
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      {/* Closing CTA (dark) */}
      <section className={`dark bg-background text-foreground ${SECTION}`}>
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-2xl text-display-m text-foreground">
            Got something like this in mind?
          </h2>
          <Button asChild size="lg" variant="primary">
            <Link href="/launch-your-vision">Start a project</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
