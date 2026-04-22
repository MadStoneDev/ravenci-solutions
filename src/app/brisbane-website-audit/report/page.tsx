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

export const metadata: Metadata = {
  title:
    "Brisbane Business Website Audit 2026 — Full Report | RAVENCI Solutions",
  description:
    "The full report from RAVENCI's audit of 50 Brisbane business websites — printable, savable as PDF.",
  alternates: { canonical: "/brisbane-website-audit/report" },
  // Don't index the report version — the audit landing page is the canonical
  // public-facing page; the report is the gated downloadable.
  robots: { index: false, follow: false },
};

export default function BrisbaneAuditReportPage() {
  return (
    <main className="report-page bg-white text-ravenci-dark min-h-screen">
      {/* Print stylesheet — applies when user prints or saves as PDF */}
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

      {/* Floating print button — hidden in print */}
      <div className="no-print fixed top-6 right-6 z-50 flex flex-col gap-2">
        <PrintButton />
        <Link
          href="/brisbane-website-audit"
          className="px-5 py-3 bg-white text-ravenci-dark border border-neutral-300 rounded-full shadow-lg hover:bg-neutral-100 transition-colors text-sm font-medium text-center"
        >
          Back to summary
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-12 md:py-20">
        {/* Cover */}
        <header className="pb-10 mb-12 border-b-2 border-ravenci-dark">
          <p className="text-xs font-bold tracking-widest uppercase text-ravenci-primary">
            Original Research · {AUDIT_META.conductedDate}
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-medium leading-tight">
            We Audited 50 Brisbane Business Websites
          </h1>
          <p className="mt-2 text-xl md:text-2xl font-light text-neutral-600">
            The full findings — performance, SEO, mobile, security, accessibility.
          </p>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm text-neutral-500">Published by</p>
              <p className="text-lg font-bold">RAVENCI Solutions</p>
              <p className="text-sm text-neutral-500">
                Brisbane, Australia · ravenci.solutions
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-neutral-500">Sample size</p>
              <p className="text-lg font-bold">
                {AUDIT_META.totalSitesAudited} websites
              </p>
              <p className="text-sm text-neutral-500">
                {AUDIT_META.industries} industries
              </p>
            </div>
          </div>
        </header>

        {/* Executive summary */}
        <section className="mb-14 avoid-break">
          <h2 className="text-2xl md:text-3xl font-medium mb-4 border-l-4 border-ravenci-primary pl-4">
            Executive Summary
          </h2>
          <p className="text-base leading-relaxed text-neutral-700">
            Between January and February 2026, RAVENCI Solutions audited 50
            randomly selected Brisbane business websites across 7 industries.
            The average mobile PageSpeed score was{" "}
            <strong>38 out of 100</strong>. 72% scored below 50. 64% had no
            structured data at all. 42% had SSL issues. The bar for Brisbane
            business websites in 2026 is surprisingly low — and the
            opportunity to differentiate is correspondingly large.
          </p>
        </section>

        {/* Headline stats */}
        <section className="mb-14 avoid-break">
          <h2 className="text-2xl md:text-3xl font-medium mb-6 border-l-4 border-ravenci-primary pl-4">
            The Headline Numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {auditStats.map((s, i) => (
              <div
                key={i}
                className={`p-4 border-l-4 ${
                  s.severity === "critical"
                    ? "border-red-500 bg-red-50"
                    : "border-yellow-500 bg-yellow-50"
                }`}
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold">{s.stat}</span>
                  <IconAlertTriangle
                    size={18}
                    className={
                      s.severity === "critical"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }
                  />
                </div>
                <p className="mt-1 text-sm text-neutral-700 leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Category breakdown */}
        <section className="mb-14 page-break-before">
          <h2 className="text-2xl md:text-3xl font-medium mb-6 border-l-4 border-ravenci-primary pl-4">
            Category-by-Category Breakdown
          </h2>
          <div className="space-y-6">
            {categoryBreakdown.map((cat, i) => (
              <div key={i} className="avoid-break">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <h3 className="text-lg font-bold">{cat.category}</h3>
                  <span
                    className={`px-3 py-0.5 text-sm font-bold rounded-full ${
                      parseInt(cat.score) < 40
                        ? "bg-red-100 text-red-700"
                        : parseInt(cat.score) < 50
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                    }`}
                  >
                    Avg {cat.score}
                  </span>
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed mb-3">
                  {cat.detail}
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  Recommendations
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {cat.recommendations.map((r, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-neutral-700"
                    >
                      <IconCheck
                        size={14}
                        className="mt-1 text-ravenci-primary flex-shrink-0"
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
        <section className="mb-14 avoid-break">
          <h2 className="text-2xl md:text-3xl font-medium mb-6 border-l-4 border-ravenci-primary pl-4">
            Performance by Industry
          </h2>
          <div className="space-y-3">
            {industryBreakdown.map((ind, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className="w-44 min-w-[120px] font-medium">
                  {ind.industry}
                </span>
                <div className="flex-1 h-7 bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full flex items-center justify-end pr-2 ${
                      ind.avgScore < 40
                        ? "bg-red-400"
                        : ind.avgScore < 50
                          ? "bg-yellow-400"
                          : "bg-green-400"
                    }`}
                    style={{ width: `${ind.avgScore}%` }}
                  >
                    <span className="text-xs font-bold text-white">
                      {ind.avgScore}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-neutral-500 w-16 text-right">
                  {ind.count} sites
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Key takeaways */}
        <section className="mb-14 page-break-before">
          <h2 className="text-2xl md:text-3xl font-medium mb-6 border-l-4 border-ravenci-primary pl-4">
            Key Takeaways
          </h2>
          <ol className="space-y-4">
            {keyTakeaways.map((t, i) => (
              <li key={i} className="avoid-break">
                <h3 className="text-lg font-bold">
                  {i + 1}. {t.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-700 leading-relaxed">
                  {t.detail}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Methodology / FAQ */}
        <section className="mb-14 avoid-break">
          <h2 className="text-2xl md:text-3xl font-medium mb-6 border-l-4 border-ravenci-primary pl-4">
            Methodology
          </h2>
          <div className="space-y-4">
            {auditFaqItems.map((f, i) => (
              <div key={i} className="avoid-break">
                <h3 className="text-base font-bold">{f.title}</h3>
                <p className="mt-1 text-sm text-neutral-700 leading-relaxed">
                  {f.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* About / CTA */}
        <section className="mt-16 pt-10 border-t-2 border-ravenci-dark avoid-break">
          <h2 className="text-2xl font-medium mb-4">About RAVENCI Solutions</h2>
          <p className="text-sm text-neutral-700 leading-relaxed mb-6">
            RAVENCI Solutions is a Brisbane-based web development and design
            studio. We&apos;ve delivered over 450 projects for Australian
            businesses since 2018, building on Custom Next.js, WordPress,
            Shopify, BigCommerce, GoHighLevel, Plasmic and Strapi. As a Shopify
            Partner, BigCommerce Partner, and Synergy Wholesale Partner, we
            pass through better infrastructure pricing to clients.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-bold">Website</p>
              <p className="text-neutral-600">ravenci.solutions</p>
            </div>
            <div>
              <p className="font-bold">Phone</p>
              <p className="text-neutral-600">07 3106 1836</p>
            </div>
            <div>
              <p className="font-bold">Brisbane, AU</p>
              <p className="text-neutral-600">hello@ravenci.solutions</p>
            </div>
          </div>
          <div className="no-print mt-8">
            <Link
              href="/launch-your-vision"
              className="inline-block px-6 py-3 bg-ravenci-dark text-white rounded-full hover:bg-ravenci-primary transition-colors text-sm"
            >
              Talk to RAVENCI About Your Project
            </Link>
          </div>
        </section>

        {/* Footer credit */}
        <footer className="mt-12 pt-6 border-t border-neutral-200 text-xs text-neutral-500 text-center">
          © {new Date().getFullYear()} RAVENCI Solutions · Brisbane Business
          Website Audit 2026 · Published {AUDIT_META.publishedDate}
        </footer>
      </div>
    </main>
  );
}
