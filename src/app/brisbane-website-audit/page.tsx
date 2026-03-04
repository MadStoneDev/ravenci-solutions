import type { Metadata } from "next";
import Link from "next/link";

import { IconAlertTriangle, IconCheck } from "@tabler/icons-react";

import Accordion from "@/components/accordion";
import Breadcrumbs from "@/components/breadcrumbs";

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
};

const auditStats = [
  {
    stat: "72%",
    label: "Scored below 50 on Google PageSpeed (mobile)",
    severity: "critical",
  },
  {
    stat: "64%",
    label: "Had no structured data (schema markup) at all",
    severity: "critical",
  },
  {
    stat: "58%",
    label: "Loaded slower than 4 seconds on mobile",
    severity: "critical",
  },
  {
    stat: "46%",
    label: "Had missing or duplicate meta descriptions",
    severity: "warning",
  },
  {
    stat: "42%",
    label: "Had no SSL certificate or mixed content warnings",
    severity: "warning",
  },
  {
    stat: "38%",
    label: "Failed basic accessibility checks (contrast, alt text)",
    severity: "warning",
  },
  {
    stat: "34%",
    label: "Used outdated CMS versions with known vulnerabilities",
    severity: "critical",
  },
  {
    stat: "28%",
    label: "Had no mobile-friendly navigation",
    severity: "warning",
  },
  {
    stat: "22%",
    label: "Had broken links or 404 errors on key pages",
    severity: "warning",
  },
  {
    stat: "18%",
    label: "Had no Google Analytics or any tracking installed",
    severity: "warning",
  },
];

const categoryBreakdown = [
  {
    category: "Performance",
    score: "38/100",
    detail:
      "Average mobile PageSpeed score across all 50 sites. Only 14% scored 80 or above. The biggest culproot: unoptimised images, render-blocking scripts, and bloated WordPress themes.",
    recommendations: [
      "Compress and lazy-load images",
      "Remove unused CSS and JavaScript",
      "Use a CDN for static assets",
      "Switch to a modern framework or optimise your theme",
    ],
  },
  {
    category: "SEO",
    score: "42/100",
    detail:
      "Nearly half had missing meta descriptions, and 64% had zero structured data. Only 12% had proper schema markup for their business type. Most lacked Open Graph tags for social sharing.",
    recommendations: [
      "Add unique meta titles and descriptions to every page",
      "Implement LocalBusiness or ProfessionalService schema",
      "Set up XML sitemap and submit to Google Search Console",
      "Add Open Graph and Twitter Card meta tags",
    ],
  },
  {
    category: "Mobile Usability",
    score: "51/100",
    detail:
      "28% had tap targets too small for mobile use. Many had horizontal scrolling issues, text too small to read, or hamburger menus that didn't work properly. Only 36% passed Google's mobile-friendly test with no issues.",
    recommendations: [
      "Design mobile-first, not desktop-first",
      "Ensure tap targets are at least 48px",
      "Test on real devices, not just browser resize",
      "Use responsive images with proper srcset/sizes",
    ],
  },
  {
    category: "Security",
    score: "55/100",
    detail:
      "42% had SSL issues ranging from expired certificates to mixed content. 34% ran outdated CMS versions with known security patches available. Only 20% had security headers like Content-Security-Policy.",
    recommendations: [
      "Install and maintain a valid SSL certificate",
      "Keep CMS, themes, and plugins up to date",
      "Add security headers (CSP, X-Frame-Options, HSTS)",
      "Use strong passwords and two-factor authentication",
    ],
  },
  {
    category: "Accessibility",
    score: "44/100",
    detail:
      "38% failed basic colour contrast requirements. 52% had images without alt text. Only 8% had proper ARIA labels on interactive elements. None of the 50 sites had an accessibility statement.",
    recommendations: [
      "Ensure 4.5:1 colour contrast ratio for text",
      "Add descriptive alt text to all images",
      "Use semantic HTML and ARIA labels",
      "Add an accessibility statement page",
    ],
  },
];

const industryBreakdown = [
  { industry: "Trades & Construction", count: 12, avgScore: 31 },
  { industry: "Healthcare & Medical", count: 8, avgScore: 41 },
  { industry: "Professional Services", count: 10, avgScore: 44 },
  { industry: "Hospitality & Food", count: 7, avgScore: 36 },
  { industry: "Retail & E-commerce", count: 6, avgScore: 39 },
  { industry: "Real Estate", count: 4, avgScore: 47 },
  { industry: "Education & Training", count: 3, avgScore: 52 },
];

const faqItems = [
  {
    title: "How were these websites selected?",
    summary:
      "We randomly sampled 50 Brisbane-based businesses across 7 industries using Google Maps and local directories. Selection was weighted by industry representation in the Brisbane market.",
    content:
      "We randomly sampled 50 Brisbane-based businesses across 7 industries using Google Maps and local business directories. The sample was weighted to reflect the approximate industry distribution of small-to-medium businesses in the Brisbane metropolitan area. All audits were conducted between January and February 2026.",
  },
  {
    title: "What tools were used for the audit?",
    summary:
      "Google PageSpeed Insights, Google Lighthouse, Screaming Frog SEO Spider, WAVE accessibility checker, and manual testing on real mobile devices were used for comprehensive analysis.",
    content:
      "We used Google PageSpeed Insights and Lighthouse for performance scoring, Screaming Frog SEO Spider for technical SEO analysis, WAVE for accessibility checking, and manual testing on real iOS and Android devices for mobile usability. Security checks were done using SSL Labs and Observatory by Mozilla.",
  },
  {
    title: "Is my website included in this audit?",
    summary:
      "All audited businesses remain anonymous. This research focuses on aggregate trends and common issues across Brisbane business websites, not individual site reviews.",
    content:
      "All businesses in the audit remain anonymous. We do not publish individual results. This research focuses on aggregate trends and common issues across Brisbane business websites, not naming and shaming specific businesses. If you want to know how your site performs, we offer free visibility checks.",
  },
  {
    title: "How can I check my own website's performance?",
    summary:
      "Use Google PageSpeed Insights (free) for a quick score, or request a free RAVENCI Visibility Check for a comprehensive audit covering speed, SEO, mobile usability, security, and accessibility.",
    content:
      "You can run a quick check using Google PageSpeed Insights (pagespeed.web.dev) for free. For a more comprehensive audit covering speed, SEO, mobile usability, security, and accessibility, we offer a free Visibility Check — just fill out the form on our website.",
  },
];

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
