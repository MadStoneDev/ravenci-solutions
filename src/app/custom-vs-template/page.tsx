import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";

import { IconCheck, IconX } from "@tabler/icons-react";

import Accordion from "@/components/accordion";
import Breadcrumbs from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Custom Website vs Template | RAVENCI Solutions",
  description:
    "Compare custom-built websites vs templates and DIY builders. Cost, performance, SEO, and scalability breakdown for Australian businesses. Find out which option pays off.",
  openGraph: {
    ...OG_DEFAULTS,
    title: "Custom Website vs Template | RAVENCI Solutions",
    description:
      "Compare custom-built websites vs templates and DIY builders. Cost, performance, SEO, and scalability breakdown for Australian businesses. Find out which option pays off.",
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
      "Absolutely. Many of our clients come to us after outgrowing a template site or DIY builder. We migrate your content and build a custom platform that reflects your brand and scales with you.",
  },
  {
    title: "What's wrong with the way most agencies build websites?",
    summary:
      "Most agencies stack pre-built themes and plugins instead of building properly. The result: slow sites that get hacked, plugin subscriptions that pile up, and a developer you can't reach when something breaks.",
    content:
      "Most agencies assemble websites from pre-built themes and a stack of plugins instead of building properly. It's faster for them, but it's a problem for you: slow sites, security gaps from plugin stacking, subscriptions piling up for every little feature, and a deep dependency on third-party developers who may stop supporting their plugins next year. We build sites the way they should be built. Properly, once, with the long view in mind. So they're still working in five years instead of falling apart in eighteen months.",
  },
  {
    title:
      "What technology does RAVENCI use for custom websites?",
    summary:
      "We choose the right platform for each project: modern custom builds for performance and flexibility, WordPress for clients who want to manage content themselves. Either way, the result is fast, secure, and built to last.",
    content:
      "We choose the right platform for each project rather than forcing every client onto the same one. For performance-critical sites we build custom from the ground up. For content-led sites where the team wants to manage things themselves, we build on WordPress, but properly, not as a stack of plugins. Either way you get a site that performs, ranks, and is still working five years from now.",
  },
  {
    title:
      "How much does a custom website cost compared to a typical agency build?",
    summary:
      "RAVENCI custom websites start from $7,500. A typical agency build may look cheaper upfront, but plugin licence renewals ($300 to 800/yr), customisation fees ($1,000 to 5,000), and ongoing maintenance make total ownership cost comparable with worse results.",
    content:
      "Our custom websites start from $7,500 for a Brochure site with CRM. A typical agency build may look cheaper upfront, but factor in plugin licence renewals ($300 to 800/yr), customisation fees ($1,000 to 5,000), and ongoing maintenance. The total cost of ownership is often comparable, with a worse result.",
  },
];

export default function CustomVsTemplatePage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 bg-white">
        <article className="max-w-3xl flex flex-col gap-2">
          <Breadcrumbs items={[{ label: "Custom vs Template" }]} />
          <h1 className="mt-2 text-4xl md:text-5xl lg:text-h1 font-medium">
            Custom Website vs Template
          </h1>
          <h2 className="max-w-2xl text-2xl md:text-3xl lg:text-h2 font-light">
            Which approach pays off for Australian businesses?
          </h2>
          <p className="mt-6 max-w-2xl text-neutral-500/80">
            Every business needs a website, but not every business needs the same
            kind. We break down the real differences between a custom-built
            website, a typical agency build, and a DIY builder, so you can make an
            informed decision based on cost, performance, and long-term value.
          </p>
        </article>
      </section>

      {/* Comparison Table */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-white">
        <h3 className="mb-10 font-serif text-h3 font-bold">
          Side-by-Side Comparison
        </h3>

        {/* Desktop table */}
        <div className="hidden lg:block overflow-x-auto rounded-xl border border-neutral-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-200">
                <th className="py-4 pl-6 pr-4 text-left font-bold text-ravenci-dark w-[14%]">
                  Feature
                </th>
                <th className="py-4 px-4 text-left font-bold text-ravenci-primary w-[30%] bg-ravenci-primary/5">
                  RAVENCI Custom
                </th>
                <th className="py-4 px-4 text-left font-bold text-neutral-700 w-[28%]">
                  Typical Agency
                </th>
                <th className="py-4 px-4 text-left font-bold text-neutral-700 w-[28%]">
                  DIY Builder
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-neutral-100 last:border-0"
                >
                  <td className="py-5 pl-6 pr-4 font-bold text-ravenci-dark align-top">
                    {row.feature}
                  </td>
                  <td className="py-5 px-4 text-ravenci-dark align-top bg-ravenci-primary/5">
                    {row.custom}
                  </td>
                  <td className="py-5 px-4 text-neutral-700 align-top">
                    {row.template}
                  </td>
                  <td className="py-5 px-4 text-neutral-700 align-top">
                    {row.diy}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden space-y-6">
          {comparisonRows.map((row, index) => (
            <div key={index} className="p-5 rounded-xl border border-neutral-200">
              <h4 className="mb-4 font-bold text-ravenci-dark text-lg">
                {row.feature}
              </h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 rounded-lg bg-ravenci-primary/5">
                  <span className="font-bold text-ravenci-primary">
                    Custom:
                  </span>{" "}
                  <span className="text-ravenci-dark">{row.custom}</span>
                </div>
                <div>
                  <span className="font-bold text-neutral-700">
                    Template:
                  </span>{" "}
                  <span className="text-neutral-700">{row.template}</span>
                </div>
                <div>
                  <span className="font-bold text-neutral-700">
                    DIY Builder:
                  </span>{" "}
                  <span className="text-neutral-700">{row.diy}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick verdict */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-ravenci-dark text-white">
        <div>
          <h3 className="mb-8 font-serif text-h3 font-bold">
            The Quick Verdict
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="mb-3 text-lg font-bold text-ravenci-primary">
                Choose Custom If...
              </h4>
              <ul className="space-y-2 text-neutral-400/90">
                <li className="flex gap-2">
                  <IconCheck
                    size={20}
                    className="p-0.5 bg-ravenci-primary rounded-full text-white flex-shrink-0 mt-0.5"
                  />
                  Your website drives revenue
                </li>
                <li className="flex gap-2">
                  <IconCheck
                    size={20}
                    className="p-0.5 bg-ravenci-primary rounded-full text-white flex-shrink-0 mt-0.5"
                  />
                  You need strong SEO
                </li>
                <li className="flex gap-2">
                  <IconCheck
                    size={20}
                    className="p-0.5 bg-ravenci-primary rounded-full text-white flex-shrink-0 mt-0.5"
                  />
                  Brand perception matters
                </li>
                <li className="flex gap-2">
                  <IconCheck
                    size={20}
                    className="p-0.5 bg-ravenci-primary rounded-full text-white flex-shrink-0 mt-0.5"
                  />
                  You plan to scale
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-lg font-bold text-neutral-300">
                A Typical Agency Works If...
              </h4>
              <ul className="space-y-2 text-neutral-400/90">
                <li className="flex gap-2">
                  <IconCheck
                    size={20}
                    className="p-0.5 bg-neutral-600 rounded-full text-white flex-shrink-0 mt-0.5"
                  />
                  Budget is very tight
                </li>
                <li className="flex gap-2">
                  <IconCheck
                    size={20}
                    className="p-0.5 bg-neutral-600 rounded-full text-white flex-shrink-0 mt-0.5"
                  />
                  You just need a basic presence
                </li>
                <li className="flex gap-2">
                  <IconX
                    size={20}
                    className="p-0.5 bg-neutral-700 rounded-full text-neutral-400 flex-shrink-0 mt-0.5"
                  />
                  Performance is not critical
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-lg font-bold text-neutral-300">
                DIY Works If...
              </h4>
              <ul className="space-y-2 text-neutral-400/90">
                <li className="flex gap-2">
                  <IconCheck
                    size={20}
                    className="p-0.5 bg-neutral-600 rounded-full text-white flex-shrink-0 mt-0.5"
                  />
                  You need something this week
                </li>
                <li className="flex gap-2">
                  <IconCheck
                    size={20}
                    className="p-0.5 bg-neutral-600 rounded-full text-white flex-shrink-0 mt-0.5"
                  />
                  It&apos;s a side project or hobby
                </li>
                <li className="flex gap-2">
                  <IconX
                    size={20}
                    className="p-0.5 bg-neutral-700 rounded-full text-neutral-400 flex-shrink-0 mt-0.5"
                  />
                  You don&apos;t mind platform lock-in
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Total Cost of Ownership */}
      <section className="content-section py-20 px-5 sm:px-20 xl:px-36 bg-white">
        <h3 className="mb-4 font-serif text-h3 font-bold text-center">
          The Real Cost Is What You Pay Over Five Years
        </h3>
        <p className="mb-12 text-center text-neutral-500/80 max-w-2xl mx-auto">
          Upfront price is only part of the picture. Here&apos;s what each
          approach actually costs when you account for the full lifecycle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <div className="p-6 rounded-xl border border-ravenci-primary/30 bg-ravenci-primary/5">
            <h4 className="font-bold text-ravenci-primary mb-3">
              Custom Website
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>Build: $7,500 to $12,000</li>
              <li>Plugins & licences: $0/yr</li>
              <li>Rebuild: None needed</li>
              <li className="pt-2 border-t border-neutral-200 font-bold text-ravenci-dark">
                5-year total: $7,500 to $12,000 + hosting
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-neutral-200">
            <h4 className="font-bold text-neutral-700 mb-3">
              Typical Agency Build
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>Build: $3,000 to $6,000</li>
              <li>Plugins & licences: $300 to $800/yr</li>
              <li>Rebuild at 18 to 24 months: $3,000 to $6,000</li>
              <li className="pt-2 border-t border-neutral-200 font-bold text-neutral-700">
                5-year total: $8,500 to $18,000
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-neutral-200">
            <h4 className="font-bold text-neutral-700 mb-3">
              DIY Builder
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>Platform: $20 to $80/mo ($1,200 to $4,800 over 5 yrs)</li>
              <li>Premium features: $10 to $40/mo</li>
              <li>Your time: priceless (or billable)</li>
              <li className="pt-2 border-t border-neutral-200 font-bold text-neutral-700">
                5-year total: $1,800 to $7,200 + your time
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-neutral-600 space-y-4">
          <p>
            But cost is only half the equation. A custom site that ranks well
            and converts visitors into clients pays for itself. At $7,500 over
            five years, that&apos;s $4.10 a day. If it brings in one extra
            client a month, even at $500 per job, that&apos;s $6,000 a year
            from a $1,500 annual investment. A 4x return. Most businesses see
            more than that.
          </p>
          <p>
            A template or DIY site might cost less upfront, but if it
            doesn&apos;t rank, doesn&apos;t convert, and needs replacing in
            eighteen months, it&apos;s the most expensive option of the three.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="content-section py-20 px-5 sm:px-20 xl:px-36 flex flex-col items-center text-center bg-ravenci-primary text-white">
        <h2 className="mb-4 text-3xl md:text-4xl font-medium">
          Ready to Build It Right?
        </h2>
        <p className="mb-10 max-w-md text-white/80">
          Custom websites from $7,500. No templates, no lock-in, no surprises.
          Start with a free consultation.
        </p>
        <Link
          href="/launch-your-vision"
          className="group relative px-8 py-3 grid place-content-center bg-white rounded-full text-ravenci-dark hover:text-white transition-all duration-300 ease-in-out"
        >
          <span className="z-20">Launch Your Vision</span>
          <div className="absolute top-0 bottom-full group-hover:bottom-0 left-0 right-0 bg-ravenci-dark z-0 transition-all duration-500 ease-in-out" />
          <div className="absolute top-0 bottom-0 left-0 right-0 rounded-full border-2 border-white z-10" />
        </Link>
      </section>

      {/* FAQ */}
      <section className="content-section py-16 px-6 md:px-10 flex flex-col items-center justify-center gap-3 bg-white">
        <h2 className="font-serif text-h3">Common Questions</h2>
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
