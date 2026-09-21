import type { Metadata } from "next";
import Link from "next/link";

import { IconCheck, IconAlertTriangle } from "@tabler/icons-react";

import {
  AUDIT_META,
  auditStats,
  categoryBreakdown,
  industryBreakdown,
  keyTakeaways,
  auditFaqItems,
} from "@/data/brisbane-audit";
import PrintButton from "@/components/print-button";
import SectionLabel from "@/components/section-label";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title:
    "Brisbane Business Website Audit 2026: Full Report | RAVENCI Solutions",
  description:
    "The full report from RAVENCI's audit of 50 Brisbane business websites. Printable, savable as PDF.",
  alternates: { canonical: "/brisbane-website-audit/report" },
  // Don't index the report version, the audit landing page is the canonical
  // public-facing page; the report is the gated downloadable.
  robots: { index: false, follow: false },
};

export default function BrisbaneAuditReportPage() {
  return (
    <main className="report-page min-h-screen bg-background text-foreground">
      {/* Print stylesheet, applies when user prints or saves as PDF */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @page {
              size: A4;
              margin: 18mm 16mm;
            }
            @media print {
              .no-print { display: none !important; }
              .report-page { background: white !important; }
              .page-break-before { page-break-before: always; }
              .avoid-break { page-break-inside: avoid; }
              body { font-size: 11pt; line-height: 1.45; }
              h1 { font-size: 24pt; }
              h2 { font-size: 16pt; }
              h3 { font-size: 13pt; }
              a { color: #1b1b1b; text-decoration: none; }
              a[href]:after { content: ""; }
            }
          `,
        }}
      />

      {/* Floating print button, hidden in print */}
      <div className="no-print fixed right-6 top-6 z-50 flex flex-col gap-2">
        <PrintButton />
        <Link
          href="/brisbane-website-audit"
          className="rounded-sm border border-border bg-card px-5 py-3 text-center text-small font-medium text-foreground shadow-lg transition-colors hover:bg-muted"
        >
          Back to summary
        </Link>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12 md:px-10 md:py-20">
        {/* Cover */}
        <header className="mb-12 border-b-2 border-foreground pb-10">
          <SectionLabel label={`Original research · ${AUDIT_META.conductedDate}`} />
          <h1 className="mt-4 text-display-l text-foreground">
            We audited 50 Brisbane business websites
          </h1>
          <p className="mt-2 text-lead text-muted-foreground">
            The full findings: performance, SEO, mobile, security, accessibility.
          </p>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-small text-muted-foreground">Published by</p>
              <p className="text-heading-s text-foreground">RAVENCI Solutions</p>
              <p className="text-small text-muted-foreground">
                Brisbane, Australia · ravenci.solutions
              </p>
            </div>
            <div className="text-right">
              <p className="text-small text-muted-foreground">Sample size</p>
              <p className="text-heading-s text-foreground">
                {AUDIT_META.totalSitesAudited} websites
              </p>
              <p className="text-small text-muted-foreground">
                {AUDIT_META.industries} industries
              </p>
            </div>
          </div>
        </header>

        {/* Executive summary */}
        <section className="avoid-break mb-14">
          <h2 className="mb-4 border-l-4 border-accent pl-4 text-heading-m text-foreground">
            Executive summary
          </h2>
          <p className="text-body text-muted-foreground">
            Between January and February 2026, RAVENCI Solutions audited 50
            randomly selected Brisbane business websites across 7 industries.
            The average mobile PageSpeed score was{" "}
            <strong className="text-foreground">38 out of 100</strong>. 72%
            scored below 50. 64% had no structured data at all. 42% had SSL
            issues. The bar for Brisbane business websites in 2026 is
            surprisingly low, and the opportunity to differentiate is
            correspondingly large.
          </p>
        </section>

        {/* Headline stats */}
        <section className="avoid-break mb-14">
          <h2 className="mb-6 border-l-4 border-accent pl-4 text-heading-m text-foreground">
            The headline numbers
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {auditStats.map((s, i) => (
              <div
                key={i}
                className="rounded-sm border border-border bg-card p-4"
              >
                <div className="flex items-baseline gap-3">
                  <span className="tnum text-metric text-foreground">
                    {s.stat}
                  </span>
                  <IconAlertTriangle
                    size={18}
                    aria-hidden
                    className="text-muted-foreground"
                  />
                </div>
                <p className="mt-1 text-small text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Category breakdown */}
        <section className="page-break-before mb-14">
          <h2 className="mb-6 border-l-4 border-accent pl-4 text-heading-m text-foreground">
            Category-by-category breakdown
          </h2>
          <div className="space-y-6">
            {categoryBreakdown.map((cat, i) => (
              <div key={i} className="avoid-break">
                <div className="mb-2 flex flex-wrap items-baseline gap-3">
                  <h3 className="text-heading-s text-foreground">
                    {cat.category}
                  </h3>
                  <span className="rounded-sm border border-border bg-muted px-3 py-0.5 text-small font-medium text-foreground">
                    Avg {cat.score}
                  </span>
                </div>
                <p className="mb-3 text-body text-muted-foreground">
                  {cat.detail}
                </p>
                <p className="mb-2 font-mono text-label uppercase text-muted-foreground">
                  Recommendations
                </p>
                <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {cat.recommendations.map((r, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-small text-muted-foreground"
                    >
                      <IconCheck
                        size={14}
                        aria-hidden
                        className="mt-1 shrink-0 text-accent"
                      />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Industry breakdown */}
        <section className="avoid-break mb-14">
          <h2 className="mb-6 border-l-4 border-accent pl-4 text-heading-m text-foreground">
            Performance by industry
          </h2>
          <div className="space-y-3">
            {industryBreakdown.map((ind, i) => (
              <div key={i} className="flex items-center gap-3 text-small">
                <span className="w-44 min-w-[120px] font-medium text-foreground">
                  {ind.industry}
                </span>
                <div className="h-7 flex-1 overflow-hidden rounded-sm bg-muted">
                  <div
                    className="flex h-full items-center justify-end rounded-sm bg-foreground pr-2"
                    style={{ width: `${ind.avgScore}%` }}
                  >
                    <span className="tnum text-small font-semibold text-background">
                      {ind.avgScore}
                    </span>
                  </div>
                </div>
                <span className="w-16 text-right text-small text-muted-foreground">
                  {ind.count} sites
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Key takeaways */}
        <section className="page-break-before mb-14">
          <h2 className="mb-6 border-l-4 border-accent pl-4 text-heading-m text-foreground">
            Key takeaways
          </h2>
          <ol className="space-y-4">
            {keyTakeaways.map((t, i) => (
              <li key={i} className="avoid-break">
                <h3 className="text-heading-s text-foreground">
                  {i + 1}. {t.title}
                </h3>
                <p className="mt-1 text-body text-muted-foreground">
                  {t.detail}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Methodology / FAQ */}
        <section className="avoid-break mb-14">
          <h2 className="mb-6 border-l-4 border-accent pl-4 text-heading-m text-foreground">
            Methodology
          </h2>
          <div className="space-y-4">
            {auditFaqItems.map((f, i) => (
              <div key={i} className="avoid-break">
                <h3 className="text-heading-s text-foreground">{f.title}</h3>
                <p className="mt-1 text-body text-muted-foreground">
                  {f.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* About / CTA */}
        <section className="avoid-break mt-16 border-t-2 border-foreground pt-10">
          <h2 className="mb-4 text-heading-m text-foreground">
            About RAVENCI Solutions
          </h2>
          <p className="mb-6 text-body text-muted-foreground">
            RAVENCI Solutions is a Brisbane-based web development and design
            studio. We&apos;ve delivered 467 projects for Australian
            businesses since 2018, building on Custom Next.js, WordPress,
            Shopify, BigCommerce, GoHighLevel, Plasmic and Strapi. As a Shopify
            Partner, BigCommerce Partner, and Synergy Wholesale Partner, we
            pass through better infrastructure pricing to clients.
          </p>
          <div className="grid grid-cols-1 gap-4 text-small sm:grid-cols-3">
            <div>
              <p className="font-semibold text-foreground">Website</p>
              <p className="text-muted-foreground">ravenci.solutions</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Phone</p>
              <p className="text-muted-foreground">07 3106 1836</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Brisbane, AU</p>
              <p className="text-muted-foreground">hello@ravenci.solutions</p>
            </div>
          </div>
          <div className="no-print mt-8">
            <Button asChild variant="primary">
              <Link href="/launch-your-vision">
                Talk to RAVENCI about your project
              </Link>
            </Button>
          </div>
        </section>

        {/* Footer credit */}
        <footer className="mt-12 border-t border-border pt-6 text-center text-small text-muted-foreground">
          © {new Date().getFullYear()} RAVENCI Solutions · Brisbane Business
          Website Audit 2026 · Published {AUDIT_META.publishedDate}
        </footer>
      </div>
    </main>
  );
}
