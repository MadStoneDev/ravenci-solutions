import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";

import { IconCheck, IconX } from "@tabler/icons-react";

import Accordion from "@/components/accordion";
import Breadcrumbs from "@/components/breadcrumbs";
import SectionLabel from "@/components/section-label";
import { Button } from "@/components/ui/button";

const SECTION = "px-5 py-14 md:px-12 md:py-20 lg:px-20";

export const metadata: Metadata = {
  title: "Custom Website vs Template | RAVENCI Solutions",
  description:
    "Compare custom-built websites vs templates and DIY builders. Cost, performance, SEO and scalability, and which option actually pays off.",
  openGraph: {
    ...OG_DEFAULTS,
    title: "Custom Website vs Template | RAVENCI Solutions",
    description:
      "Compare custom-built websites vs templates and DIY builders. Cost, performance, SEO and scalability, and which option actually pays off.",
    url: "/custom-vs-template",
    type: "article",
  },
  twitter: { ...TWITTER_DEFAULTS },
  alternates: { canonical: "/custom-vs-template" },
};

const comparisonRows = [
  {
    feature: "Design",
    custom: "Bespoke design tailored to your brand, audience, and goals",
    template: "Pre-built layouts with limited colour and font changes",
    diy: "Drag-and-drop with generic blocks and stock imagery",
  },
  {
    feature: "Performance",
    custom: "Pages load in under 2 seconds. Customers don't wait around to bounce.",
    template: "Slow load times. Plugin bloat. Customers get tired and leave.",
    diy: "Wildly inconsistent. Often loads slow on mobile, where it matters most.",
  },
  {
    feature: "SEO",
    custom:
      "Search engines understand and rank your content from day one.",
    template: "Depends on a plugin to do what should be built in. Usually halfway done.",
    diy: "You're limited to what the platform lets you control. That's not much.",
  },
  {
    feature: "Scalability",
    custom: "Add pages, features, and integrations as your business grows",
    template:
      "Limited by off-the-shelf themes. Major changes often require rebuilds",
    diy: "Locked into the platform's feature set",
  },
  {
    feature: "Security",
    custom:
      "Your site and your customers' data are protected by design, not by hoping a plugin doesn't break.",
    template:
      "Every extra plugin is a new way to get hacked. Most agency-built sites have a stack of them.",
    diy: "The platform handles security, which is fine, until it doesn't, and you can't do anything about it.",
  },
  {
    feature: "Ownership",
    custom: "You own everything: code, design, content, hosting choice",
    template: "You own content but depend on the agency or theme/plugin developers for updates",
    diy: "Platform owns the infrastructure. You rent access",
  },
  {
    feature: "Ongoing Cost",
    custom:
      "Hosting + optional maintenance. No recurring theme/plugin licence fees",
    template:
      "Hosting + theme updates + plugin licence renewals ($300 to 800/yr)",
    diy: "Monthly platform fee ($20 to 80/mo) plus transaction fees on some",
  },
  {
    feature: "Time to Launch",
    custom: "3 to 14 weeks depending on scope",
    template: "1 to 4 weeks with customisation",
    diy: "Hours to days for a basic site",
  },
];

const faqItems = [
  {
    title: "Is a custom website worth the investment for a small business?",
    summary:
      "Yes, if your website drives customer acquisition. Custom websites deliver better search rankings, faster load times, and higher conversion rates. Most businesses outgrow templates within 12 to 18 months.",
    content:
      "If your website is a core part of how you attract customers, yes. A custom website pays for itself through better search rankings, faster load times, and higher conversion rates. Businesses that rely on foot traffic or word-of-mouth may find a template sufficient initially, but most outgrow it within 12 to 18 months.",
  },
  {
    title: "Can I move from a template to a custom website later?",
    summary:
      "Yes. Many RAVENCI clients come after outgrowing a template site or DIY builder. Content is migrated and a custom platform is built that reflects your brand and scales with you.",
    content:
      "Absolutely. Many of my clients come to me after outgrowing a template site or DIY builder. I migrate your content and build a custom platform that reflects your brand and scales with you.",
  },
  {
    title: "What's wrong with the way most agencies build websites?",
    summary:
      "Most agencies stack pre-built themes and plugins instead of building properly. The result: slow sites that get hacked, plugin subscriptions that pile up, and a developer you can't reach when something breaks.",
    content:
      "Most agencies assemble websites from pre-built themes and a stack of plugins instead of building properly. It's faster for them, but it's a problem for you: slow sites, security gaps from plugin stacking, subscriptions piling up for every little feature, and a deep dependency on third-party developers who may stop supporting their plugins next year. I build sites the way they should be built. Properly, once, with the long view in mind. So they're still working in five years instead of falling apart in eighteen months.",
  },
  {
    title:
      "What technology does RAVENCI use for custom websites?",
    summary:
      "I choose the right platform for each project: modern custom builds for performance and flexibility, WordPress for clients who want to manage content themselves. Either way, the result is fast, secure, and built to last.",
    content:
      "I choose the right platform for each project rather than forcing every client onto the same one. For performance-critical sites I build custom from the ground up. For content-led sites where the team wants to manage things themselves, I build on WordPress, but properly, not as a stack of plugins. Either way you get a site that performs, ranks, and is still working five years from now.",
  },
  {
    title:
      "How much does a custom website cost compared to a typical agency build?",
    summary:
      "RAVENCI custom websites start from $7,500. A typical agency build may look cheaper upfront, but plugin licence renewals ($300 to 800/yr), customisation fees ($1,000 to 5,000), and ongoing maintenance make total ownership cost comparable with worse results.",
    content:
      "My custom websites start from $7,500 for a Brochure site with CRM. A typical agency build may look cheaper upfront, but factor in plugin licence renewals ($300 to 800/yr), customisation fees ($1,000 to 5,000), and ongoing maintenance. The total cost of ownership is often comparable, with a worse result.",
  },
];

export default function CustomVsTemplatePage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className={`${SECTION} border-b border-border`}>
        <article className="flex max-w-3xl flex-col gap-4">
          <Breadcrumbs items={[{ label: "Custom vs Template" }]} />
          <SectionLabel label="Custom vs Template" tick />
          <h1 className="text-display-l text-foreground">
            Custom Website vs Template
          </h1>
          <p className="text-lead text-muted-foreground">
            Which approach pays off for Australian businesses?
          </p>
          <p className="max-w-prose text-body text-muted-foreground">
            Every business needs a website, but not every business needs the same
            kind. I break down the real differences between a custom-built
            website, a typical agency build, and a DIY builder, so you can make an
            informed decision based on cost, performance, and long-term value.
          </p>
        </article>
      </section>

      {/* Comparison Table */}
      <section className={`${SECTION} border-b border-border`}>
        <SectionLabel index="01" label="Comparison" />
        <h2 className="mb-10 mt-3 text-display-m text-foreground">
          Side-by-Side Comparison
        </h2>

        {/* Desktop table */}
        <div className="hidden overflow-x-auto rounded-sm border border-border lg:block">
          <table className="w-full text-small">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="w-[14%] py-4 pl-6 pr-4 text-left font-semibold text-foreground">
                  Feature
                </th>
                <th className="w-[30%] bg-accent/5 py-4 px-4 text-left font-semibold text-accent">
                  RAVENCI Custom
                </th>
                <th className="w-[28%] py-4 px-4 text-left font-semibold text-foreground">
                  Typical Agency
                </th>
                <th className="w-[28%] py-4 px-4 text-left font-semibold text-foreground">
                  DIY Builder
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-border last:border-0"
                >
                  <td className="py-5 pl-6 pr-4 align-top font-semibold text-foreground">
                    {row.feature}
                  </td>
                  <td className="bg-accent/5 py-5 px-4 align-top text-foreground">
                    {row.custom}
                  </td>
                  <td className="py-5 px-4 align-top text-muted-foreground">
                    {row.template}
                  </td>
                  <td className="py-5 px-4 align-top text-muted-foreground">
                    {row.diy}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="space-y-6 lg:hidden">
          {comparisonRows.map((row, index) => (
            <div
              key={index}
              className="rounded-sm border border-border bg-card p-5"
            >
              <h3 className="mb-4 text-heading-s text-foreground">
                {row.feature}
              </h3>
              <div className="space-y-3 text-small">
                <div className="rounded-sm bg-accent/5 p-3">
                  <span className="font-semibold text-accent">Custom:</span>{" "}
                  <span className="text-foreground">{row.custom}</span>
                </div>
                <div className="text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Template:
                  </span>{" "}
                  <span>{row.template}</span>
                </div>
                <div className="text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    DIY Builder:
                  </span>{" "}
                  <span>{row.diy}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick verdict */}
      <section className={`dark bg-background text-foreground ${SECTION}`}>
        <SectionLabel label="The quick verdict" tone="muted" />
        <h2 className="mb-8 mt-3 text-display-m text-foreground">
          The Quick Verdict
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-sm border border-white/10 bg-card p-6">
            <h3 className="mb-3 text-heading-s text-foreground">
              Choose Custom If...
            </h3>
            <ul className="space-y-2 text-body text-muted-foreground">
              <li className="flex gap-2">
                <IconCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-foreground"
                />
                Your website drives revenue
              </li>
              <li className="flex gap-2">
                <IconCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-foreground"
                />
                You need strong SEO
              </li>
              <li className="flex gap-2">
                <IconCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-foreground"
                />
                Brand perception matters
              </li>
              <li className="flex gap-2">
                <IconCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-foreground"
                />
                You plan to scale
              </li>
            </ul>
          </div>
          <div className="rounded-sm border border-white/10 bg-card p-6">
            <h3 className="mb-3 text-heading-s text-foreground">
              A Typical Agency Works If...
            </h3>
            <ul className="space-y-2 text-body text-muted-foreground">
              <li className="flex gap-2">
                <IconCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-foreground"
                />
                Budget is very tight
              </li>
              <li className="flex gap-2">
                <IconCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-foreground"
                />
                You just need a basic presence
              </li>
              <li className="flex gap-2">
                <IconX
                  size={20}
                  className="mt-0.5 shrink-0 text-muted-foreground"
                />
                Performance is not critical
              </li>
            </ul>
          </div>
          <div className="rounded-sm border border-white/10 bg-card p-6">
            <h3 className="mb-3 text-heading-s text-foreground">
              DIY Works If...
            </h3>
            <ul className="space-y-2 text-body text-muted-foreground">
              <li className="flex gap-2">
                <IconCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-foreground"
                />
                You need something this week
              </li>
              <li className="flex gap-2">
                <IconCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-foreground"
                />
                It&apos;s a side project or hobby
              </li>
              <li className="flex gap-2">
                <IconX
                  size={20}
                  className="mt-0.5 shrink-0 text-muted-foreground"
                />
                You don&apos;t mind platform lock-in
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Total Cost of Ownership */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="mb-12 flex flex-col gap-3">
          <SectionLabel index="02" label="Total cost of ownership" />
          <h2 className="text-display-m text-foreground">
            The Real Cost Is What You Pay Over Five Years
          </h2>
          <p className="max-w-prose text-body text-muted-foreground">
            Upfront price is only part of the picture. Here&apos;s what each
            approach actually costs when you account for the full lifecycle.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-sm border border-accent/30 bg-accent/5 p-6">
            <h3 className="mb-3 text-heading-s text-accent">Custom Website</h3>
            <ul className="space-y-2 text-small text-muted-foreground">
              <li>Build: $7,500 to $12,000</li>
              <li>Plugins &amp; licences: $0/yr</li>
              <li>Rebuild: None needed</li>
              <li className="border-t border-border pt-2 font-semibold text-foreground">
                5-year total: $7,500 to $12,000 + hosting
              </li>
            </ul>
          </div>
          <div className="rounded-sm border border-border bg-card p-6">
            <h3 className="mb-3 text-heading-s text-foreground">
              Typical Agency Build
            </h3>
            <ul className="space-y-2 text-small text-muted-foreground">
              <li>Build: $3,000 to $6,000</li>
              <li>Plugins &amp; licences: $300 to $800/yr</li>
              <li>Rebuild at 18 to 24 months: $3,000 to $6,000</li>
              <li className="border-t border-border pt-2 font-semibold text-foreground">
                5-year total: $8,500 to $18,000
              </li>
            </ul>
          </div>
          <div className="rounded-sm border border-border bg-card p-6">
            <h3 className="mb-3 text-heading-s text-foreground">DIY Builder</h3>
            <ul className="space-y-2 text-small text-muted-foreground">
              <li>Platform: $20 to $80/mo ($1,200 to $4,800 over 5 yrs)</li>
              <li>Premium features: $10 to $40/mo</li>
              <li>Your time: priceless (or billable)</li>
              <li className="border-t border-border pt-2 font-semibold text-foreground">
                5-year total: $1,800 to $7,200 + your time
              </li>
            </ul>
          </div>
        </div>

        <div className="flex max-w-prose flex-col gap-4 text-body text-muted-foreground">
          <p>
            But cost is only half the equation. A custom site that ranks well and
            converts visitors into clients pays for itself. At $7,500 over five
            years, that&apos;s $4.10 a day. If it brings in one extra client a
            month, even at $500 per job, that&apos;s $6,000 a year from a $1,500
            annual investment. A 4x return. Most businesses see more than that.
          </p>
          <p>
            A template or DIY site might cost less upfront, but if it doesn&apos;t
            rank, doesn&apos;t convert, and needs replacing in eighteen months,
            it&apos;s the most expensive option of the three.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${SECTION} border-b border-border`}>
        <SectionLabel index="03" label="FAQ" />
        <h2 className="mt-3 text-display-m text-foreground">Common Questions</h2>
        <div className="mt-8 max-w-3xl">
          <Accordion titleClassName="py-6 text-lg" items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className={`dark bg-background text-foreground ${SECTION}`}>
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-display-m text-foreground">
              Ready to Build It Right?
            </h2>
            <p className="mt-4 text-body text-muted-foreground">
              Custom websites from $7,500. No templates, no lock-in, no
              surprises. Start with a free consultation.
            </p>
          </div>
          <Button asChild size="lg" variant="primary">
            <Link href="/launch-your-vision">Launch Your Vision</Link>
          </Button>
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
                name: "Custom vs Template",
                item: "https://ravenci.solutions/custom-vs-template",
              },
            ],
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
