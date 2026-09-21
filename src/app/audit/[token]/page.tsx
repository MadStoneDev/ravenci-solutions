import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

import { IconCheck, IconAlertTriangle } from "@tabler/icons-react";

import { getAuditByToken, getAllAuditTokens } from "@/lib/audits";
import { mdxComponents } from "@/lib/mdx-components";
import PrintButton from "@/components/print-button";
import { Button } from "@/components/ui/button";
import SectionLabel from "@/components/section-label";

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

const LABEL = "font-mono text-label-sm uppercase text-muted-foreground";

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
    <main className="report-page flex min-h-screen flex-col bg-background text-foreground">
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

      <div className="mx-auto max-w-4xl px-5 py-12 md:px-10 md:py-20">
        {/* Cover */}
        <header className="mb-12 border-b border-border pb-10">
          <SectionLabel
            label={`Visibility Audit · Prepared for ${audit.clientBusiness}`}
          />
          <h1 className="mt-4 text-display-m text-foreground">
            {audit.headline}
          </h1>
          <p className="mt-2 text-heading-s text-muted-foreground">
            {audit.clientWebsite}
          </p>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className={LABEL}>Prepared by</p>
              <p className="mt-1 text-body font-semibold text-foreground">
                RAVENCI Solutions
              </p>
              <p className="text-small text-muted-foreground">
                Brisbane, Australia · ravenci.solutions
              </p>
            </div>
            <div className="text-right">
              <p className={LABEL}>Conducted</p>
              <p className="mt-1 text-body font-semibold text-foreground">
                {audit.conductedDate}
              </p>
              <p className="text-small text-muted-foreground">
                Overall score{" "}
                <span className="font-semibold text-accent">
                  {audit.overallScore}/100
                </span>
              </p>
            </div>
          </div>
        </header>

        {audit.specialMessage && (
          <section className="avoid-break mb-14">
            <div className="border-l-2 border-accent bg-muted p-6">
              <p className="whitespace-pre-line text-body text-muted-foreground">
                {audit.specialMessage}
              </p>
            </div>
          </section>
        )}

        {/* Score bars */}
        <section className="avoid-break mb-14">
          <h2 className="mb-6 border-l-2 border-accent pl-4 text-heading-m text-foreground">
            Category Scores
          </h2>
          <div className="space-y-3">
            {audit.categories.map((cat) => (
              <div key={cat.id} className="flex items-center gap-3 text-small">
                <span className="w-44 min-w-[120px] font-medium text-foreground">
                  {cat.label}
                </span>
                <div className="h-7 flex-1 overflow-hidden rounded-full bg-muted">
                  <div
                    className="flex h-full items-center justify-end rounded-full bg-accent pr-2"
                    style={{ width: `${Math.max(cat.score, 4)}%` }}
                  >
                    <span className="text-xs font-bold text-accent-foreground">
                      {cat.score}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Per-category breakdown */}
        <section className="page-break-before mb-14">
          <h2 className="mb-6 border-l-2 border-accent pl-4 text-heading-m text-foreground">
            Findings by Category
          </h2>
          <div className="space-y-8">
            {audit.categories.map((cat) => (
              <div key={cat.id} className="avoid-break">
                <div className="mb-2 flex flex-wrap items-baseline gap-3">
                  <h3 className="text-heading-s text-foreground">
                    {cat.label}
                  </h3>
                  <span className="rounded-full border border-border bg-muted px-3 py-0.5 text-small font-semibold text-foreground">
                    {cat.score}/100
                  </span>
                </div>
                <p className="mb-4 text-small text-muted-foreground">
                  {cat.summary}
                </p>

                {cat.findings.length > 0 && (
                  <>
                    <p className={`mb-2 ${LABEL}`}>What we found</p>
                    <ul className="mb-4 space-y-1.5">
                      {cat.findings.map((f, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-small text-muted-foreground"
                        >
                          <IconAlertTriangle
                            size={14}
                            className="mt-1 flex-shrink-0 text-muted-foreground"
                          />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {cat.recommendations.length > 0 && (
                  <>
                    <p className={`mb-2 ${LABEL}`}>Recommendations</p>
                    <ul className="space-y-1.5">
                      {cat.recommendations.map((r, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-small text-muted-foreground"
                        >
                          <IconCheck
                            size={14}
                            className="mt-1 flex-shrink-0 text-accent"
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
          <section className="avoid-break prose prose-sm mb-14 max-w-none">
            <MDXRemote source={audit.content} components={mdxComponents} />
          </section>
        )}

        {/* Priority actions */}
        {audit.priorityActions.length > 0 && (
          <section className="page-break-before avoid-break mb-14">
            <h2 className="mb-6 border-l-2 border-accent pl-4 text-heading-m text-foreground">
              Where We&apos;d Start
            </h2>
            <ol className="space-y-4">
              {audit.priorityActions.map((action, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                    {i + 1}
                  </span>
                  <p className="pt-0.5 text-body text-muted-foreground">
                    {action}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* CTA */}
        <section className="avoid-break mt-16 border-t border-border pt-10">
          <h2 className="mb-4 text-heading-m text-foreground">
            Want a hand fixing any of this?
          </h2>
          <p className="mb-6 text-body text-muted-foreground">
            If any of the issues above are worth fixing and you&apos;d like
            RAVENCI&apos;s help, reply to the email this report came in on with
            your rough timeline and budget. I&apos;ll come back with options
            that fit. No sales call required, no obligation.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <p className="text-body font-semibold text-foreground">Website</p>
              <p className="text-muted-foreground">ravenci.solutions</p>
            </div>
            <div>
              <p className="text-body font-semibold text-foreground">Phone</p>
              <p className="text-muted-foreground">07 3106 1836</p>
            </div>
            <div>
              <p className="text-body font-semibold text-foreground">
                Brisbane, AU
              </p>
              <p className="text-muted-foreground">hello@ravenci.solutions</p>
            </div>
          </div>
          <div className="no-print mt-8">
            <Button asChild size="lg" variant="primary">
              <Link href="/launch-your-vision">
                Talk to RAVENCI About Your Project
              </Link>
            </Button>
          </div>
        </section>

        {/* Footer credit */}
        <footer className="mt-12 border-t border-border pt-6 text-center text-small text-muted-foreground">
          © {new Date().getFullYear()} RAVENCI Solutions · Visibility audit
          prepared for {audit.clientBusiness} on {audit.conductedDate}
        </footer>
      </div>
    </main>
  );
}
