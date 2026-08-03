import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

import { IconCheck, IconAlertTriangle } from "@tabler/icons-react";

import { getAuditByToken, getAllAuditTokens } from "@/lib/audits";
import { mdxComponents } from "@/lib/mdx-components";
import PrintButton from "@/components/print-button";

export function generateStaticParams() {
  // Only prerender published audits, drafts must not be reachable.
  return getAllAuditTokens()
    .filter((token) => getAuditByToken(token)?.status === "published")
    .map((token) => ({ token }));
}

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ token: string }>;
}): Promise<Metadata> {
  const audit = getAuditByToken((await params).token);
  if (!audit || audit.status !== "published") {
    return { title: "Audit Not Found | RAVENCI Solutions" };
  }
  return {
    title: `${audit.clientBusiness}, Visibility Audit | RAVENCI Solutions`,
    description: `Visibility audit for ${audit.clientBusiness}, conducted ${audit.conductedDate}.`,
    robots: { index: false, follow: false },
  };
}

function scoreColour(score: number): string {
  if (score < 40) return "border-red-500 bg-red-50 text-red-700";
  if (score < 60) return "border-yellow-500 bg-yellow-50 text-yellow-700";
  if (score < 80) return "border-blue-500 bg-blue-50 text-blue-700";
  return "border-green-500 bg-green-50 text-green-700";
}

function overallScoreColour(score: number): string {
  if (score < 40) return "text-red-600";
  if (score < 60) return "text-yellow-600";
  if (score < 80) return "text-blue-600";
  return "text-green-600";
}

export default async function AuditReportPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const audit = getAuditByToken(token);

  // Drafts are gated: only published audits render, everything else 404s.
  if (!audit || audit.status !== "published") {
    notFound();
  }

  return (
    <main className="report-page bg-white text-ravenci-dark min-h-screen">
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

      {/* Floating action buttons, hidden in print */}
      <div className="no-print fixed top-6 right-6 z-50 flex flex-col gap-2">
        <PrintButton />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-12 md:py-20">
        {/* Cover */}
        <header className="pb-10 mb-12 border-b-2 border-ravenci-dark">
          <p className="text-xs font-bold tracking-widest uppercase text-ravenci-primary">
            Visibility Audit · Prepared for {audit.clientBusiness}
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-medium leading-tight">
            {audit.headline}
          </h1>
          <p className="mt-2 text-xl md:text-2xl font-light text-neutral-600">
            {audit.clientWebsite}
          </p>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm text-neutral-500">Prepared by</p>
              <p className="text-lg font-bold">RAVENCI Solutions</p>
              <p className="text-sm text-neutral-500">
                Brisbane, Australia · ravenci.solutions
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-neutral-500">Conducted</p>
              <p className="text-lg font-bold">{audit.conductedDate}</p>
              <p className="text-sm text-neutral-500">
                Overall score{" "}
                <span
                  className={`font-bold ${overallScoreColour(audit.overallScore)}`}
                >
                  {audit.overallScore}/100
                </span>
              </p>
            </div>
          </div>
        </header>

        {audit.specialMessage && (
          <section className="mb-14 avoid-break">
            <div className="p-6 border-l-4 border-ravenci-primary bg-neutral-50">
              <p className="text-base leading-relaxed text-neutral-700 whitespace-pre-line">
                {audit.specialMessage}
              </p>
            </div>
          </section>
        )}

        {/* Score bars */}
        <section className="mb-14 avoid-break">
          <h2 className="text-2xl md:text-3xl font-medium mb-6 border-l-4 border-ravenci-primary pl-4">
            Category Scores
          </h2>
          <div className="space-y-3">
            {audit.categories.map((cat) => (
              <div key={cat.id} className="flex items-center gap-3 text-sm">
                <span className="w-44 min-w-[120px] font-medium">
                  {cat.label}
                </span>
                <div className="flex-1 h-7 bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full flex items-center justify-end pr-2 ${
                      cat.score < 40
                        ? "bg-red-400"
                        : cat.score < 60
                          ? "bg-yellow-400"
                          : cat.score < 80
                            ? "bg-blue-400"
                            : "bg-green-400"
                    }`}
                    style={{ width: `${Math.max(cat.score, 4)}%` }}
                  >
                    <span className="text-xs font-bold text-white">
                      {cat.score}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Per-category breakdown */}
        <section className="mb-14 page-break-before">
          <h2 className="text-2xl md:text-3xl font-medium mb-6 border-l-4 border-ravenci-primary pl-4">
            Findings by Category
          </h2>
          <div className="space-y-8">
            {audit.categories.map((cat) => (
              <div key={cat.id} className="avoid-break">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <h3 className="text-lg font-bold">{cat.label}</h3>
                  <span
                    className={`px-3 py-0.5 text-sm font-bold rounded-full border ${scoreColour(cat.score)}`}
                  >
                    {cat.score}/100
                  </span>
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                  {cat.summary}
                </p>

                {cat.findings.length > 0 && (
                  <>
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                      What we found
                    </p>
                    <ul className="mb-4 space-y-1.5">
                      {cat.findings.map((f, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-neutral-700"
                        >
                          <IconAlertTriangle
                            size={14}
                            className="mt-1 text-yellow-600 flex-shrink-0"
                          />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {cat.recommendations.length > 0 && (
                  <>
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                      Recommendations
                    </p>
                    <ul className="space-y-1.5">
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
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Optional narrative body from MDX */}
        {audit.content.trim().length > 0 && (
          <section className="mb-14 avoid-break prose prose-sm max-w-none">
            <MDXRemote source={audit.content} components={mdxComponents} />
          </section>
        )}

        {/* Priority actions */}
        {audit.priorityActions.length > 0 && (
          <section className="mb-14 page-break-before avoid-break">
            <h2 className="text-2xl md:text-3xl font-medium mb-6 border-l-4 border-ravenci-primary pl-4">
              Where We&apos;d Start
            </h2>
            <ol className="space-y-4">
              {audit.priorityActions.map((action, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-ravenci-primary text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p className="text-base text-neutral-700 leading-relaxed pt-0.5">
                    {action}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* CTA */}
        <section className="mt-16 pt-10 border-t-2 border-ravenci-dark avoid-break">
          <h2 className="text-2xl font-medium mb-4">
            Want a hand fixing any of this?
          </h2>
          <p className="text-sm text-neutral-700 leading-relaxed mb-6">
            If any of the issues above are worth fixing and you&apos;d like
            RAVENCI&apos;s help, reply to the email this report came in on
            with your rough timeline and budget. I&apos;ll come back with
            options that fit. No sales call required, no obligation.
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
          © {new Date().getFullYear()} RAVENCI Solutions · Visibility audit
          prepared for {audit.clientBusiness} on {audit.conductedDate}
        </footer>
      </div>
    </main>
  );
}
