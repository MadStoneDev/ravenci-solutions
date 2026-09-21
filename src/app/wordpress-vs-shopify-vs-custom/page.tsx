import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";

import { IconCheck, IconX, IconMinus } from "@tabler/icons-react";

import Accordion from "@/components/accordion";
import Breadcrumbs from "@/components/breadcrumbs";
import SectionLabel from "@/components/section-label";
import { Button } from "@/components/ui/button";

const SECTION = "px-5 py-14 md:px-12 md:py-20 lg:px-20";

export const metadata: Metadata = {
  title: "WordPress vs Shopify vs Custom | RAVENCI Solutions",
  description:
    "Honest 2026 comparison of WordPress, Shopify and custom Next.js for Australian businesses. Real costs, when each wins, and how to choose without lock-in.",
  openGraph: {
    ...OG_DEFAULTS,
    title: "WordPress vs Shopify vs Custom | RAVENCI Solutions",
    description:
      "Honest 2026 comparison of WordPress, Shopify and custom Next.js for Australian businesses. Real costs, when each wins, and how to choose without lock-in.",
    url: "/wordpress-vs-shopify-vs-custom",
    type: "article",
  },
  twitter: { ...TWITTER_DEFAULTS },
  alternates: { canonical: "/wordpress-vs-shopify-vs-custom" },
};

type CellValue = "yes" | "partial" | "no" | string;

const matrixRows: {
  feature: string;
  wordpress: CellValue;
  shopify: CellValue;
  custom: CellValue;
}[] = [
  {
    feature: "Best for",
    wordpress: "Content sites, blogs, brochure sites",
    shopify: "Standard e-commerce, drop-shipping",
    custom: "Performance, differentiation, web apps",
  },
  {
    feature: "Typical build cost (AU)",
    wordpress: "$3,500 to $15,000",
    shopify: "$5,000 to $20,000",
    custom: "$10,000 to $50,000+",
  },
  {
    feature: "Build timeline",
    wordpress: "3 to 8 weeks",
    shopify: "3 to 6 weeks",
    custom: "8 to 14 weeks",
  },
  {
    feature: "Monthly platform fee",
    wordpress: "$0 (self-hosted)",
    shopify: "$45 to $645/mo",
    custom: "$0 (self-hosted)",
  },
  {
    feature: "Hosting cost (AU)",
    wordpress: "$30 to $50/mo",
    shopify: "Included",
    custom: "$30 to $80/mo",
  },
  {
    feature: "Performance (PageSpeed)",
    wordpress: "partial",
    shopify: "partial",
    custom: "yes",
  },
  {
    feature: "SEO control",
    wordpress: "yes",
    shopify: "partial",
    custom: "yes",
  },
  {
    feature: "Customisation ceiling",
    wordpress: "partial",
    shopify: "partial",
    custom: "yes",
  },
  {
    feature: "Plugin / app ecosystem",
    wordpress: "yes",
    shopify: "yes",
    custom: "no",
  },
  {
    feature: "Self-manage content easily",
    wordpress: "yes",
    shopify: "yes",
    custom: "partial",
  },
  {
    feature: "Vendor lock-in",
    wordpress: "no",
    shopify: "yes",
    custom: "no",
  },
  {
    feature: "Long-term cost predictability",
    wordpress: "partial",
    shopify: "partial",
    custom: "yes",
  },
];

function Cell({ value }: { value: CellValue }) {
  if (value === "yes")
    return (
      <span className="inline-flex items-center gap-1.5 text-small font-medium text-accent">
        <IconCheck size={18} className="shrink-0" /> Yes
      </span>
    );
  if (value === "partial")
    return (
      <span className="inline-flex items-center gap-1.5 text-small text-muted-foreground">
        <IconMinus size={18} className="shrink-0" /> Partial
      </span>
    );
  if (value === "no")
    return (
      <span className="inline-flex items-center gap-1.5 text-small text-muted-foreground">
        <IconX size={18} className="shrink-0" /> No
      </span>
    );
  return <span className="text-small text-muted-foreground">{value}</span>;
}

const platforms = [
  {
    name: "WordPress",
    tagline: "The flexible default for content-driven sites",
    chooseWhen: [
      "You need a content-heavy site, blog or news platform",
      "You want a familiar CMS your team can update",
      "Your site has 10+ pages of regularly-updated content",
      "You want a wide ecosystem of plugins and themes",
      "You're not running e-commerce as the primary business",
      "Long-term ownership and portability matter",
    ],
    avoidWhen: [
      "You're running a high-volume e-commerce store (use Shopify or BigCommerce)",
      "You need sub-2-second load times on every page (custom is faster)",
      "You expect heavy custom functionality (custom builds scale better)",
      "You don't want to maintain plugin updates yourself or pay someone to",
    ],
    costs:
      "Build: $3,500 to $15,000. Hosting: $30 to $50/mo. Maintenance: $200 to $500/mo. Premium plugin licences: $300 to $800/yr.",
    examples:
      "Professional services sites, healthcare practices, news and media, education, charity and not-for-profit, multi-location businesses with location pages.",
  },
  {
    name: "Shopify",
    tagline: "The e-commerce industry standard",
    chooseWhen: [
      "Your primary business is selling products online",
      "You want all-in-one hosting, payments, inventory, and shipping",
      "You're scaling from 50+ to 5,000+ products",
      "You need reliable mobile checkout out of the box",
      "Your team doesn't want to manage hosting or security",
      "You can live with Shopify's design constraints (or pay for Shopify Plus)",
    ],
    avoidWhen: [
      "You're selling fewer than 20 products and the monthly fee outpaces revenue",
      "You need deep custom functionality the platform doesn't expose",
      "You want full control of your stack and zero vendor lock-in (look at custom)",
      "You're primarily a content site with a small product range (consider WooCommerce on WordPress)",
    ],
    costs:
      "Build: $5,000 to $20,000. Platform: $45 to $645/mo. Apps: $50 to $300/mo typical. Transaction fees: 0.5 to 2% if not using Shopify Payments.",
    examples:
      "Retail e-commerce, fashion and apparel, beauty and cosmetics, consumer goods, drop-shipping, multi-channel sellers (Shopify + Amazon + eBay).",
  },
  {
    name: "Custom Next.js",
    tagline: "When performance and differentiation are the business case",
    chooseWhen: [
      "Performance is a competitive advantage (PageSpeed 90+, sub-2s load)",
      "You need bespoke functionality that off-the-shelf platforms don't offer",
      "You want zero vendor lock-in and own everything end-to-end",
      "Your design needs to differentiate (motion, editorial layouts, custom interactions)",
      "You're building a web app or platform, not just a marketing site",
      "Long-term cost predictability matters more than short-term setup speed",
    ],
    avoidWhen: [
      "You need a CMS your in-house team can update without developer help (use WordPress)",
      "You're running a standard product catalogue (Shopify is faster to launch)",
      "Budget under $10,000 (template-based platforms give better value at the low end)",
      "You need to launch in under 4 weeks (custom takes 8 to 14 weeks)",
    ],
    costs:
      "Build: $10,000 to $50,000+. Hosting: $30 to $80/mo. Maintenance: $250 to $500/mo. No platform fees, no plugin renewals.",
    examples:
      "High-traffic marketing sites, web applications, multi-brand portfolios, performance-critical businesses, design-led brands, headless CMS setups for editorial control.",
  },
];

const decisionFramework = [
  {
    scenario: "I'm a small business with 5 to 15 pages, no e-commerce",
    answer: "WordPress",
    reason:
      "Lowest cost, fastest to launch, easiest for your team to update later. Avoid the temptation to over-engineer.",
  },
  {
    scenario: "I sell products online, physical or digital",
    answer: "Shopify",
    reason:
      "All-in-one solution. Payment, inventory, shipping, security and PCI compliance handled. Build cost recovered within months at most product volumes.",
  },
  {
    scenario: "I'm a multi-location business or franchise",
    answer: "WordPress (or Custom)",
    reason:
      "WordPress handles location pages and multi-site setups well. Custom Next.js wins if you need a location finder, booking integration, or unique per-location functionality.",
  },
  {
    scenario: "I need lightning-fast performance for SEO or conversions",
    answer: "Custom Next.js",
    reason:
      "WordPress and Shopify can be optimised, but custom Next.js consistently delivers 90+ PageSpeed scores out of the box.",
  },
  {
    scenario: "I'm building a custom platform or web app",
    answer: "Custom Next.js",
    reason:
      "Off-the-shelf platforms can't host the functionality you need. Custom build is the only realistic path.",
  },
  {
    scenario: "I want my brand to feel premium and one-of-a-kind",
    answer: "Custom Next.js (or Shopify Plus)",
    reason:
      "Both give enough design control to break out of template patterns. Custom wins on motion, layout, and load time. Shopify Plus wins if e-commerce is the focus.",
  },
];

const commonMistakes = [
  {
    mistake: "Choosing Shopify when you don't sell anything online",
    detail:
      "I see this monthly. A consulting business launches on Shopify because the templates look good, then pays $45 to $645/month for a platform they don't use as e-commerce. WordPress (or custom) costs less and serves the use case better.",
  },
  {
    mistake: "Choosing custom Next.js for a budget under $10,000",
    detail:
      "Custom builds need 60 to 120 hours of senior developer time. Quotes under $10,000 mean cut corners somewhere, usually on design, testing, or post-launch support. Spend $5,000 on WordPress instead and reinvest the rest in marketing.",
  },
  {
    mistake: "Choosing WordPress for high-volume e-commerce",
    detail:
      "WooCommerce works for 20 to 200 products. Beyond that, performance, security, and PCI compliance all become harder than they need to be. Migrate to Shopify or BigCommerce before the pain hits.",
  },
  {
    mistake: "Believing 'cheap WordPress' is the same product as 'agency WordPress'",
    detail:
      "A $1,500 WordPress site and a $12,000 WordPress site are not the same thing. The difference is custom design, performance optimisation, security hardening, structured data, and someone who knows what they're doing.",
  },
  {
    mistake: "Letting the agency's preferred platform drive the decision",
    detail:
      "If an agency only quotes one platform regardless of your needs, that's a signal. Reputable agencies build on multiple platforms and recommend based on your business, not their comfort zone.",
  },
];

const faqItems = [
  {
    title: "Which is cheapest: WordPress, Shopify or Custom Next.js?",
    summary:
      "WordPress is cheapest upfront ($3,500 to $15,000) and lowest in monthly fees. Shopify costs $45 to $645/mo on top of build cost. Custom Next.js has the highest build cost ($10,000+) but lowest long-term running costs and no platform lock-in.",
    content:
      "WordPress is typically the cheapest upfront option, with build costs of $3,500 to $15,000 and minimal ongoing platform fees beyond hosting and maintenance. Shopify has lower build costs ($5,000 to $20,000) but adds $45 to $645 per month in platform fees plus app subscriptions. Custom Next.js has the highest build cost ($10,000 to $50,000+) but the lowest long-term running costs and no platform lock-in or surprise fee increases. Over 3 years, the total cost differences narrow considerably. For a typical small business site, WordPress costs roughly $15,000 over 36 months, Shopify $30,000+, and Custom Next.js $20,000.",
  },
  {
    title: "Can I switch platforms later?",
    summary:
      "Yes, but it's expensive. Migrating between platforms typically costs $3,000 to $10,000 plus rebuilding designs and integrations. Choose the right platform from day one. The second-best platform you commit to is cheaper than the right one you switch to in year two.",
    content:
      "Yes, but switching platforms later is rarely cheap. Migrating between WordPress, Shopify and custom platforms typically costs $3,000 to $10,000 in pure migration work, plus rebuilding designs and integrations. SEO authority can also take 3 to 6 months to fully recover after a major platform change if redirects aren't handled properly. The rule of thumb: choose the right platform from day one. The second-best platform you commit to and stick with is cheaper than the perfect platform you switch to in year two.",
  },
  {
    title: "Is custom Next.js really worth the higher cost?",
    summary:
      "Worth it when performance, custom functionality, brand differentiation or zero vendor lock-in are real business priorities. Not worth it for a standard 5-page brochure site or a small product catalogue. WordPress or Shopify deliver more value at lower cost in those cases.",
    content:
      "Custom Next.js is worth the higher cost when performance is a competitive advantage, when you need bespoke functionality that off-the-shelf platforms don't offer, when brand differentiation drives revenue, or when you genuinely need zero vendor lock-in. It's not worth it for a standard 5-page brochure site or a small product catalogue. WordPress and Shopify deliver more value at lower cost in those cases. The honest test: if your business case for custom can't be summarised in one sentence, you probably don't need it.",
  },
  {
    title: "What about Webflow, Wix, or Squarespace?",
    summary:
      "These are DIY-friendly visual builders, sitting between WordPress and Shopify in capability. Wix and Squarespace work for very simple sites under $5,000 budget. Webflow is more capable but harder for non-technical users to maintain. Most established Australian businesses outgrow them within 12 to 24 months.",
    content:
      "Webflow, Wix and Squarespace are DIY-friendly visual builders that sit between WordPress and Shopify in capability. Wix and Squarespace are reasonable for very simple sites under a $5,000 budget where the goal is fast launch with minimal maintenance, but customisation ceilings are low and SEO control is limited. Webflow is more capable, with cleaner code and better performance, but it's harder for non-technical users to maintain and locked to Webflow's hosting (which can be expensive at scale). Most established Australian businesses outgrow these platforms within 12 to 24 months and end up migrating to WordPress, Shopify or custom anyway.",
  },
  {
    title: "Should I use BigCommerce instead of Shopify?",
    summary:
      "BigCommerce is a strong Shopify alternative for businesses with complex catalogues, B2B requirements, or wanting more built-in features without paying for apps. Shopify wins on app ecosystem and brand recognition. RAVENCI is a partner of both. I recommend based on your specific catalogue and feature needs.",
    content:
      "BigCommerce is a strong Shopify alternative, particularly for businesses with complex product catalogues, B2B requirements, or that want more functionality built in without paying for separate apps. Shopify wins on app ecosystem breadth, brand recognition, and the cleanest checkout experience. BigCommerce wins on built-in features, lower app dependency, and often lower total cost of ownership at scale. As a Shopify Partner and a BigCommerce Partner, RAVENCI recommends based on your specific catalogue size, integration needs, and B2B/B2C mix, not on what's easier for me to build.",
  },
  {
    title: "What about WordPress with WooCommerce vs Shopify?",
    summary:
      "WooCommerce works well for sub-200-product catalogues attached to a content-led business. Shopify wins above 200 products, in checkout reliability, security, and ongoing maintenance simplicity. If e-commerce is the primary business, choose Shopify. If it's a side feature on a content site, WooCommerce is fine.",
    content:
      "WooCommerce, the e-commerce plugin for WordPress, works well for catalogues under about 200 products attached to a content-led business. It's a sensible choice when most of the site is content (services, blog, about) with e-commerce as a secondary feature. Shopify wins above 200 products, on checkout reliability, on security and PCI compliance handled for you, and on simpler ongoing maintenance. The honest test: if e-commerce is the primary business, choose Shopify. If it's a side feature on a content site, WooCommerce is fine and saves the platform fee.",
  },
  {
    title: "How long does each platform take to build?",
    summary:
      "WordPress: 3 to 8 weeks for most small business sites. Shopify: 3 to 6 weeks for standard stores. Custom Next.js: 8 to 14 weeks for typical builds, longer for web apps. Add 2 to 4 weeks if you need content production or branding work alongside development.",
    content:
      "Build timelines depend on scope but typical ranges look like this. WordPress: 3 to 8 weeks for most small business sites, longer for multi-site setups or heavy plugin customisation. Shopify: 3 to 6 weeks for standard stores, longer for theme customisation or migrating large catalogues. Custom Next.js: 8 to 14 weeks for typical builds, longer for web applications. Add 2 to 4 weeks across any platform if you also need content production (copywriting, photography) or branding work alongside development. Rush projects under 3 weeks usually carry a 20 to 30% premium.",
  },
  {
    title: "Which platform is best for SEO in Australia?",
    summary:
      "All three can rank well. The platform matters less than the build quality. Custom Next.js gives the most SEO control and consistently fastest performance. WordPress with proper SEO plugins (Yoast, Rank Math) is highly capable. Shopify works for product SEO but is more constrained for content marketing.",
    content:
      "All three platforms can rank well in Australian search results. The platform matters less than the build quality. Custom Next.js gives the most SEO control, consistently fastest performance (a known ranking factor), and the cleanest implementation of structured data. WordPress with proper SEO plugins (Yoast, Rank Math) is highly capable for both local and content SEO, and most of Australia's top-ranking small business sites run on it. Shopify works for product-level SEO but is more constrained for content marketing. Its blog and CMS features are functional but limited compared to WordPress. The biggest SEO factor across all three is whether the build was done by someone who genuinely understands SEO from day one.",
  },
];

export default function PlatformComparisonPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className={`${SECTION} border-b border-border`}>
        <article className="flex max-w-3xl flex-col gap-4">
          <Breadcrumbs
            items={[{ label: "WordPress vs Shopify vs Custom Next.js" }]}
          />
          <SectionLabel label="Platform Comparison, 2026" tick />
          <h1 className="text-display-l text-foreground">
            WordPress vs Shopify vs Custom Next.js
          </h1>
          <p className="text-lead text-muted-foreground">
            Which platform is right for your Australian business?
          </p>
          <p className="max-w-prose text-body text-muted-foreground">
            For most Australian businesses in 2026,{" "}
            <strong className="text-foreground">WordPress</strong> remains the
            safest default for content-heavy sites,{" "}
            <strong className="text-foreground">Shopify</strong> dominates
            standard e-commerce, and{" "}
            <strong className="text-foreground">Custom Next.js</strong> wins
            where performance, custom functionality or differentiation matter
            most. Choosing the wrong platform can cost $5,000 to $15,000 to fix
            within 18 months. Here&apos;s an honest comparison from an agency
            that builds on all three.
          </p>
        </article>
      </section>

      {/* Comparison matrix */}
      <section className={`${SECTION} border-b border-border`}>
        <SectionLabel index="01" label="Quick comparison" />
        <h2 className="mt-3 text-display-m text-foreground">Quick Comparison</h2>
        <p className="mb-10 mt-4 max-w-prose text-body text-muted-foreground">
          The full feature-by-feature comparison. Detailed breakdowns and
          recommendations follow below.
        </p>
        <div className="overflow-x-auto rounded-sm border border-border">
          <table className="w-full bg-card text-foreground">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="px-4 py-4 text-left text-small font-semibold text-foreground">
                  Feature
                </th>
                <th className="px-4 py-4 text-left text-small font-semibold text-foreground">
                  WordPress
                </th>
                <th className="px-4 py-4 text-left text-small font-semibold text-foreground">
                  Shopify
                </th>
                <th className="px-4 py-4 text-left text-small font-semibold text-foreground">
                  Custom Next.js
                </th>
              </tr>
            </thead>
            <tbody>
              {matrixRows.map((row, index) => (
                <tr key={index} className="border-t border-border">
                  <td className="px-4 py-3 align-top text-small font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td className="px-4 py-3 align-top">
                    <Cell value={row.wordpress} />
                  </td>
                  <td className="px-4 py-3 align-top">
                    <Cell value={row.shopify} />
                  </td>
                  <td className="px-4 py-3 align-top">
                    <Cell value={row.custom} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Platform deep dives */}
      <section className={`dark bg-background text-foreground ${SECTION}`}>
        <SectionLabel index="02" label="When to choose each" tone="muted" />
        <h2 className="mt-3 text-display-m text-foreground">
          When to Choose Each Platform
        </h2>
        <p className="mb-10 mt-4 max-w-prose text-body text-muted-foreground">
          The case for and against each platform, including when <em>not</em> to
          pick it. Most agencies skip the &quot;avoid&quot; section. I
          don&apos;t.
        </p>
        <div className="space-y-8">
          {platforms.map((p, index) => (
            <div
              key={index}
              className="rounded-sm border border-white/10 bg-card p-6 md:p-8"
            >
              <h3 className="mb-2 text-heading-m text-foreground">{p.name}</h3>
              <p className="mb-6 text-body italic text-muted-foreground">
                {p.tagline}
              </p>
              <div className="mb-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <p className="mb-3 text-small font-semibold text-foreground">
                    Choose {p.name} when:
                  </p>
                  <ul className="space-y-2">
                    {p.chooseWhen.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-small text-muted-foreground"
                      >
                        <IconCheck
                          size={18}
                          className="mt-0.5 shrink-0 text-foreground"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3 text-small font-semibold text-foreground">
                    Avoid {p.name} when:
                  </p>
                  <ul className="space-y-2">
                    {p.avoidWhen.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-small text-muted-foreground"
                      >
                        <IconX
                          size={18}
                          className="mt-0.5 shrink-0 text-muted-foreground"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 border-t border-white/10 pt-6 md:grid-cols-2">
                <div>
                  <p className="mb-2 font-mono text-label uppercase text-muted-foreground">
                    Real costs (AU, 2026)
                  </p>
                  <p className="text-small text-muted-foreground">{p.costs}</p>
                </div>
                <div>
                  <p className="mb-2 font-mono text-label uppercase text-muted-foreground">
                    Common use cases
                  </p>
                  <p className="text-small text-muted-foreground">
                    {p.examples}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Decision framework */}
      <section className={`${SECTION} border-b border-border`}>
        <SectionLabel index="03" label="Decision framework" />
        <h2 className="mt-3 text-display-m text-foreground">
          The Five-Minute Decision Framework
        </h2>
        <p className="mb-10 mt-4 max-w-prose text-body text-muted-foreground">
          Six common scenarios and the platform that usually wins. Not absolute
          (your situation may differ), but a strong starting point.
        </p>
        <div className="max-w-4xl space-y-4">
          {decisionFramework.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-4 rounded-sm border border-border bg-card p-5 md:grid-cols-12 md:p-6"
            >
              <div className="md:col-span-5">
                <p className="text-body font-medium text-foreground">
                  &quot;{item.scenario}&quot;
                </p>
              </div>
              <div className="md:col-span-2">
                <span className="inline-block rounded-sm bg-accent px-3 py-1 text-small font-semibold text-accent-foreground">
                  {item.answer}
                </span>
              </div>
              <div className="md:col-span-5">
                <p className="text-small text-muted-foreground">
                  {item.reason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common mistakes */}
      <section className={`dark bg-background text-foreground ${SECTION}`}>
        <div className="max-w-4xl">
          <SectionLabel index="04" label="Common mistakes" tone="muted" />
          <h2 className="mt-3 text-display-m text-foreground">
            Five Common Platform Mistakes
          </h2>
          <p className="mb-10 mt-4 max-w-prose text-body text-muted-foreground">
            Patterns I&apos;ve seen across hundreds of Australian small business
            projects. Each one costs money to fix later, usually more than the
            original build saved.
          </p>
          <div className="space-y-6">
            {commonMistakes.map((m, index) => (
              <div
                key={index}
                className="rounded-sm border border-white/10 bg-card p-5 md:p-6"
              >
                <h3 className="mb-2 text-heading-s text-foreground">
                  {index + 1}. {m.mistake}
                </h3>
                <p className="text-body text-muted-foreground">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RAVENCI positioning */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="max-w-3xl">
          <SectionLabel index="05" label="How RAVENCI picks" />
          <h2 className="mt-3 text-display-m text-foreground">
            How RAVENCI Picks the Right Platform
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-body text-muted-foreground">
            <p>
              I build on all three (Custom Next.js, WordPress, and Shopify), plus
              BigCommerce, Plasmic, and Strapi when the project calls for them.
              As a <strong className="text-foreground">Shopify Partner</strong>,
              a{" "}
              <strong className="text-foreground">BigCommerce Partner</strong>,
              and a{" "}
              <strong className="text-foreground">
                Synergy Wholesale Partner
              </strong>
              , I get better pricing on platforms and infrastructure that I pass
              through to clients.
            </p>
            <p>
              My recommendation process is the same on every project: scope the
              actual business need, look at content volume and update cadence,
              look at e-commerce requirements, look at performance and
              integration needs, and then recommend the platform that fits not
              the one that&apos;s easiest for me to build. I&apos;ll tell you
              when WordPress is the right answer even when custom would be more
              profitable for me.
            </p>
            <p>
              See my{" "}
              <Link
                href="/cost-of-a-website-in-brisbane"
                className="text-accent hover:underline"
              >
                Brisbane website cost guide
              </Link>{" "}
              for honest pricing across all platforms, or{" "}
              <Link
                href="/web-development"
                className="text-accent hover:underline"
              >
                see my web development packages
              </Link>{" "}
              for what I deliver and at what price point.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" variant="primary">
              <Link href="/launch-your-vision">
                Get a Platform Recommendation
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/web-development">See Website Design Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${SECTION} border-b border-border`}>
        <SectionLabel index="06" label="FAQ" />
        <h2 className="mt-3 text-display-m text-foreground">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 max-w-3xl">
          <Accordion titleClassName="py-6 text-lg" items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className={`dark bg-background text-foreground ${SECTION}`}>
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-display-m text-foreground">
              Still Not Sure Which Platform?
            </h2>
            <p className="mt-4 text-body text-muted-foreground">
              Tell me about your business in 2 minutes and I&apos;ll send back a
              tailored platform recommendation with realistic pricing. No sales
              pressure.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" variant="primary">
              <Link href="/launch-your-vision">Launch Your Vision</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/cost-of-a-website-in-brisbane">See Pricing Guide</Link>
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
                name: "WordPress vs Shopify vs Custom Next.js",
                item: "https://ravenci.solutions/wordpress-vs-shopify-vs-custom",
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
              "WordPress vs Shopify vs Custom Next.js: Which Platform for Australian Businesses?",
            description:
              "Honest 2026 comparison of WordPress, Shopify and Custom Next.js for Australian businesses. Real costs, when each wins, common mistakes.",
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
            datePublished: "2026-04-22",
            dateModified: "2026-04-22",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ravenci.solutions/wordpress-vs-shopify-vs-custom",
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
