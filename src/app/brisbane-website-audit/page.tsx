import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";

import { IconAlertTriangle, IconCheck } from "@tabler/icons-react";

import Accordion from "@/components/accordion";
import Breadcrumbs from "@/components/breadcrumbs";
import SectionLabel from "@/components/section-label";
import { Button } from "@/components/ui/button";
import AuditReportGate from "@/components/audit-report-gate";
import {
  auditStats,
  categoryBreakdown,
  industryBreakdown,
  auditFaqItems as faqItems,
} from "@/data/brisbane-audit";

const SECTION = "px-5 py-14 md:px-12 md:py-20 lg:px-20";

export const metadata: Metadata = {
  title: "Brisbane Website Audit Results | RAVENCI Solutions",
  description:
    "I audited 50 Brisbane business websites for speed, SEO, mobile, accessibility and security. 72% scored below 50 on Google PageSpeed. See the findings.",
  openGraph: {
    ...OG_DEFAULTS,
    title: "Brisbane Website Audit Results | RAVENCI Solutions",
    url: "/brisbane-website-audit",
    description:
      "I audited 50 Brisbane business websites for speed, SEO, mobile, accessibility and security. 72% scored below 50 on Google PageSpeed. See the findings.",
    type: "article",
  },
  twitter: { ...TWITTER_DEFAULTS },
  alternates: { canonical: "/brisbane-website-audit" },
};


export default function BrisbaneWebsiteAuditPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="flex max-w-3xl flex-col gap-4">
          <Breadcrumbs items={[{ label: "Brisbane Website Audit" }]} />
          <SectionLabel label="Original research, 2026" tick />
          <h1 className="text-display-l text-foreground">
            I audited 50 Brisbane business websites
          </h1>
          <p className="text-heading-m text-muted-foreground">
            The results were worse than I expected.
          </p>
          <p className="text-lead text-muted-foreground">
            Between January and February 2026, RAVENCI Solutions audited 50
            randomly selected Brisbane business websites across 7 industries. I
            tested for speed, SEO, mobile usability, accessibility, and
            security. The average mobile PageSpeed score was 38 out of 100. Here
            are the full findings.
          </p>
        </div>
      </section>

      {/* Key stats grid (dark) */}
      <section
        className={`dark bg-background text-foreground ${SECTION} border-b border-white/10`}
      >
        <SectionLabel index="01" label="The headline numbers" tone="muted" />
        <h2 className="mt-3 mb-10 text-display-m text-foreground">
          The headline numbers
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {auditStats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-sm border border-border bg-card p-6"
            >
              <div className="mb-2 flex items-start gap-2">
                <IconAlertTriangle
                  size={20}
                  aria-hidden
                  className="mt-0.5 shrink-0 text-muted-foreground"
                />
                <span className="tnum text-metric text-foreground">
                  {item.stat}
                </span>
              </div>
              <p className="text-small text-muted-foreground">{item.label}</p>
              {item.ravenciCounter && (
                <div
                  className="mt-auto flex items-center gap-2 pt-3 text-small font-semibold text-foreground"
                  title={item.ravenciCounterNote}
                >
                  <IconCheck size={16} aria-hidden className="shrink-0" />
                  <span>{item.ravenciCounter}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Category breakdown */}
      <section className={`${SECTION} border-b border-border`}>
        <SectionLabel index="02" label="Category breakdown" />
        <h2 className="mt-3 text-display-m text-foreground">
          Category-by-category breakdown
        </h2>
        <p className="mb-10 mt-3 max-w-2xl text-lead text-muted-foreground">
          I scored each site across five categories. Here&apos;s how Brisbane
          businesses performed on average, with actionable recommendations for
          each area.
        </p>
        <div className="space-y-8">
          {categoryBreakdown.map((cat, index) => (
            <div
              key={index}
              className="rounded-sm border border-border bg-card p-6 md:p-8"
            >
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <h3 className="text-heading-s text-foreground">
                  {cat.category}
                </h3>
                <span className="w-fit rounded-sm border border-border bg-muted px-3 py-1 text-small font-medium text-foreground">
                  Brisbane average: {cat.score}
                </span>
                {cat.ravenciAverage && (
                  <span
                    className="w-fit rounded-sm border border-accent/30 px-3 py-1 text-small font-medium text-accent"
                    title={cat.ravenciSampleNote}
                  >
                    RAVENCI sites: {cat.ravenciAverage}
                  </span>
                )}
              </div>
              <p className="mb-4 text-body text-muted-foreground">
                {cat.detail}
              </p>
              {cat.ravenciSampleNote && (
                <p className="mb-4 text-small italic text-muted-foreground">
                  RAVENCI comparison: {cat.ravenciSampleNote}
                </p>
              )}
              <div>
                <p className="mb-2 text-small font-semibold text-foreground">
                  How to fix it:
                </p>
                <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  {cat.recommendations.map((rec, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-small text-muted-foreground"
                    >
                      <IconCheck
                        size={18}
                        aria-hidden
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry breakdown */}
      <section className={`${SECTION} border-b border-border`}>
        <SectionLabel index="03" label="Performance by industry" />
        <h2 className="mt-3 text-display-m text-foreground">
          Performance by industry
        </h2>
        <p className="mb-10 mt-3 max-w-2xl text-lead text-muted-foreground">
          Trades and construction businesses performed worst, while education
          and real estate showed comparatively stronger results, though no
          industry averaged above 52.
        </p>
        <div className="max-w-2xl space-y-4">
          {industryBreakdown.map((ind, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="w-48 min-w-[120px] text-small font-medium text-foreground">
                {ind.industry}
              </span>
              <div className="h-8 flex-1 overflow-hidden rounded-sm bg-muted">
                <div
                  className="flex h-full items-center justify-end rounded-sm bg-foreground pr-3"
                  style={{ width: `${ind.avgScore}%` }}
                >
                  <span className="tnum text-small font-semibold text-background">
                    {ind.avgScore}
                  </span>
                </div>
              </div>
              <span className="min-w-[60px] text-small text-muted-foreground">
                {ind.count} sites
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Key takeaways (dark) */}
      <section
        className={`dark bg-background text-foreground ${SECTION} border-b border-white/10`}
      >
        <div className="max-w-3xl">
          <SectionLabel index="04" label="Key takeaways" tone="muted" />
          <h2 className="mt-3 mb-8 text-display-m text-foreground">
            Key takeaways
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-heading-s text-foreground">
                1. Speed is the biggest problem
              </h3>
              <p className="text-body text-muted-foreground">
                72% of Brisbane business websites scored below 50 on mobile
                PageSpeed. Google uses Core Web Vitals as a ranking factor: slow
                sites are actively penalised in search results. Every second of
                load time costs conversions.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-heading-s text-foreground">
                2. Most sites are invisible to AI search
              </h3>
              <p className="text-body text-muted-foreground">
                64% had no structured data at all. As AI-powered search (Google
                SGE, ChatGPT, Perplexity) grows, sites without schema markup
                will not be cited in AI-generated answers. This is the new SEO
                battleground.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-heading-s text-foreground">
                3. Security is being ignored
              </h3>
              <p className="text-body text-muted-foreground">
                42% had SSL issues and 34% ran outdated CMS versions. These
                sites are vulnerable to hacking, data breaches, and Google
                warnings that drive visitors away.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-heading-s text-foreground">
                4. Accessibility is an afterthought
              </h3>
              <p className="text-body text-muted-foreground">
                38% failed basic colour contrast checks. 52% had images without
                alt text. Zero sites had accessibility statements. This
                isn&apos;t just about compliance. It&apos;s about excluding
                potential customers.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-heading-s text-foreground">
                5. The bar is surprisingly low
              </h3>
              <p className="text-body text-muted-foreground">
                If your website scores 80+ on PageSpeed, has structured data,
                proper meta tags, and basic accessibility, you&apos;re already
                ahead of the vast majority of Brisbane businesses. The
                opportunity is enormous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead-gated downloadable report */}
      <section className={`bg-muted ${SECTION} border-b border-border`}>
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <SectionLabel label="Take it with you" />
          <h2 className="text-display-m text-foreground">
            Want the full report as a PDF?
          </h2>
          <p className="mx-auto max-w-xl text-lead text-muted-foreground">
            Same data, formatted for printing or sharing internally. I&apos;ll
            email you the report and a copy lands in your inbox to keep.
          </p>
        </div>
        <AuditReportGate />
      </section>

      {/* FAQ */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="mb-8 flex flex-col gap-3">
          <SectionLabel label="About this research" />
          <h2 className="text-display-m text-foreground">
            About this research
          </h2>
        </div>
        <Accordion items={faqItems} />
      </section>

      {/* Closing CTA (dark) */}
      <section className={`dark bg-background text-foreground ${SECTION}`}>
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-display-m text-foreground">
              How does your website stack up?
            </h2>
            <p className="mt-4 text-body text-muted-foreground">
              Get a free Visibility Check. I&apos;ll audit your site across all
              five categories and show you exactly where you stand compared to
              your competitors.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" variant="primary">
              <Link href="/launch-your-vision">Free Visibility Check</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/web-development">See my website design packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://ravenci.solutions",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Brisbane Website Audit",
                item: "https://ravenci.solutions/brisbane-website-audit",
              },
            ],
          }),
        }}
      />

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "We Audited 50 Brisbane Business Websites: Here's What We Found",
            description:
              "RAVENCI Solutions audited 50 Brisbane business websites for speed, SEO, mobile usability, accessibility, and security. 72% scored below 50 on Google PageSpeed.",
            author: {
              "@type": "Organization",
              name: "RAVENCI Solutions",
              url: "https://ravenci.solutions",
            },
            publisher: {
              "@type": "Organization",
              name: "RAVENCI Solutions",
              logo: {
                "@type": "ImageObject",
                url: "https://ravenci.solutions/ravenci-logo.svg",
              },
            },
            datePublished: "2026-03-04",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ravenci.solutions/brisbane-website-audit",
            },
          }),
        }}
      />

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.title,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.summary || item.content,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
