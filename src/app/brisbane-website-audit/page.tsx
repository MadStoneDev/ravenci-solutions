import type { Metadata } from "next";
import Link from "next/link";

import { IconAlertTriangle, IconCheck } from "@tabler/icons-react";

import Accordion from "@/components/accordion";
import Breadcrumbs from "@/components/breadcrumbs";
import AuditReportGate from "@/components/audit-report-gate";
import {
  auditStats,
  categoryBreakdown,
  industryBreakdown,
  auditFaqItems as faqItems,
} from "@/data/brisbane-audit";

export const metadata: Metadata = {
  title:
    "We Audited 50 Brisbane Business Websites — Here's What We Found | RAVENCI Solutions",
  description:
    "RAVENCI Solutions audited 50 Brisbane business websites for speed, SEO, mobile usability, accessibility, and security. 72% scored below 50 on Google PageSpeed. See the full findings.",
  openGraph: {
    title: "We Audited 50 Brisbane Business Websites — Here's What We Found",
    description:
      "72% of Brisbane business websites scored below 50 on Google PageSpeed. We audited 50 sites for speed, SEO, mobile usability, and security. See the data.",
    type: "article",
  },
  alternates: { canonical: "/brisbane-website-audit" },
};


export default function BrisbaneWebsiteAuditPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 bg-white">
        <article className="max-w-3xl flex flex-col gap-2">
          <Breadcrumbs items={[{ label: "Brisbane Website Audit" }]} />
          <span className="mt-2 text-xs font-medium tracking-wider uppercase text-ravenci-primary">
            Original Research — 2026
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-h1 font-medium">
            We Audited 50 Brisbane Business Websites
          </h1>
          <h2 className="max-w-2xl text-2xl md:text-3xl lg:text-h2 font-light">
            The results were worse than we expected
          </h2>
          <p className="mt-6 max-w-2xl text-neutral-500/80">
            Between January and February 2026, RAVENCI Solutions audited 50
            randomly selected Brisbane business websites across 7 industries. We
            tested for speed, SEO, mobile usability, accessibility, and
            security. The average mobile PageSpeed score was 38 out of 100. Here
            are the full findings.
          </p>
        </article>
      </section>

      {/* Key stats grid */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-ravenci-dark text-white">
        <h3 className="mb-10 font-serif text-h3 font-bold">
          The Headline Numbers
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {auditStats.map((item, index) => (
            <div
              key={index}
              className="p-5 bg-white/5 border border-white/10 rounded-lg"
            >
              <div className="flex items-start gap-2 mb-2">
                {item.severity === "critical" ? (
                  <IconAlertTriangle
                    size={20}
                    className="text-red-400 flex-shrink-0 mt-0.5"
                  />
                ) : (
                  <IconAlertTriangle
                    size={20}
                    className="text-yellow-400 flex-shrink-0 mt-0.5"
                  />
                )}
                <span className="text-3xl font-bold">{item.stat}</span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Category breakdown */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-neutral-200/50">
        <h3 className="mb-4 font-serif text-h3 font-bold">
          Category-by-Category Breakdown
        </h3>
        <p className="mb-10 max-w-2xl text-neutral-500/80">
          We scored each site across five categories. Here&apos;s how Brisbane
          businesses performed on average, with actionable recommendations for
          each area.
        </p>
        <div className="space-y-8">
          {categoryBreakdown.map((cat, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-white rounded-lg border border-neutral-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                <h4 className="text-xl font-bold text-ravenci-dark">
                  {cat.category}
                </h4>
                <span
                  className={`px-3 py-1 w-fit text-sm font-bold rounded-full ${
                    parseInt(cat.score) < 40
                      ? "bg-red-100 text-red-700"
                      : parseInt(cat.score) < 50
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                  }`}
                >
                  Average: {cat.score}
                </span>
              </div>
              <p className="mb-4 text-neutral-600 leading-relaxed">
                {cat.detail}
              </p>
              <div>
                <p className="mb-2 text-sm font-bold text-ravenci-dark">
                  How to fix it:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {cat.recommendations.map((rec, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <IconCheck
                        size={18}
                        className="p-0.5 bg-ravenci-primary rounded-full text-white flex-shrink-0 mt-0.5"
                      />
                      <span className="text-neutral-600">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry breakdown */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-white">
        <h3 className="mb-4 font-serif text-h3 font-bold">
          Performance by Industry
        </h3>
        <p className="mb-10 max-w-2xl text-neutral-500/80">
          Trades and construction businesses performed worst, while education
          and real estate showed comparatively stronger results — though no
          industry averaged above 52.
        </p>
        <div className="max-w-2xl space-y-4">
          {industryBreakdown.map((ind, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="w-48 min-w-[120px] text-sm font-medium text-ravenci-dark">
                {ind.industry}
              </span>
              <div className="flex-1 h-8 bg-neutral-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full flex items-center justify-end pr-3 ${
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
              <span className="text-xs text-neutral-400 min-w-[60px]">
                {ind.count} sites
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Key takeaways */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-ravenci-primary text-white">
        <div className="max-w-3xl">
          <h3 className="mb-8 font-serif text-h3 font-bold">Key Takeaways</h3>
          <div className="space-y-6 text-white/90 leading-relaxed">
            <div>
              <h4 className="mb-2 text-lg font-bold text-white">
                1. Speed is the biggest problem
              </h4>
              <p>
                72% of Brisbane business websites scored below 50 on mobile
                PageSpeed. Google uses Core Web Vitals as a ranking factor — slow
                sites are actively penalised in search results. Every second of
                load time costs conversions.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-bold text-white">
                2. Most sites are invisible to AI search
              </h4>
              <p>
                64% had no structured data at all. As AI-powered search (Google
                SGE, ChatGPT, Perplexity) grows, sites without schema markup
                will not be cited in AI-generated answers. This is the new SEO
                battleground.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-bold text-white">
                3. Security is being ignored
              </h4>
              <p>
                42% had SSL issues and 34% ran outdated CMS versions. These
                sites are vulnerable to hacking, data breaches, and Google
                warnings that drive visitors away.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-bold text-white">
                4. Accessibility is an afterthought
              </h4>
              <p>
                38% failed basic colour contrast checks. 52% had images without
                alt text. Zero sites had accessibility statements. This
                isn&apos;t just about compliance — it&apos;s about excluding
                potential customers.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-bold text-white">
                5. The bar is surprisingly low
              </h4>
              <p>
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
      <section className="content-section py-20 px-5 sm:px-20 xl:px-36 bg-neutral-100">
        <div className="text-center mb-10">
          <span className="block mb-3 text-xs font-medium tracking-widest uppercase text-ravenci-primary">
            Take it with you
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-ravenci-dark">
            Want the full report as a PDF?
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-neutral-600">
            Same data, formatted for printing or sharing internally. We&apos;ll
            email you the report and a copy lands in your inbox to keep.
          </p>
        </div>
        <AuditReportGate />
      </section>

      {/* CTA */}
      <section className="content-section py-20 px-5 sm:px-20 xl:px-36 flex flex-col items-center text-center bg-ravenci-dark text-white">
        <h2 className="mb-4 text-3xl md:text-4xl font-medium">
          How Does Your Website Stack Up?
        </h2>
        <p className="mb-10 max-w-lg text-neutral-400">
          Get a free Visibility Check — we&apos;ll audit your site across all
          five categories and show you exactly where you stand compared to your
          competitors.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/launch-your-vision"
            className="group relative px-8 py-3 grid place-content-center bg-ravenci-primary rounded-full text-white hover:bg-ravenci-primary/85 transition-all duration-300 ease-in-out"
          >
            Free Visibility Check
          </Link>
          <Link
            href="/web-development"
            className="group relative px-8 py-3 grid place-content-center border border-neutral-600 rounded-full text-neutral-300 hover:text-white hover:border-white transition-all duration-300 ease-in-out"
          >
            See Our Web Development Packages
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="content-section py-16 px-6 md:px-10 flex flex-col items-center justify-center gap-3 bg-white">
        <h2 className="font-serif text-h3">About This Research</h2>
        <Accordion titleClassName="py-6 text-lg" items={faqItems} />
      </section>

      {/* Spacer */}
      <section className="content-section py-20 px-5 sm:px-20 xl:px-36 grid grid-cols-5 gap-10 min-h-[150px] bg-white" />

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
              "We Audited 50 Brisbane Business Websites — Here's What We Found",
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
