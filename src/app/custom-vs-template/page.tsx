import type { Metadata } from "next";
import Link from "next/link";

import { IconCheck, IconX } from "@tabler/icons-react";

import Accordion from "@/components/accordion";
import Breadcrumbs from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title:
    "Custom Website vs Template: Which Is Right for Your Business? | RAVENCI Solutions",
  description:
    "Compare custom-built websites vs templates and DIY builders. Cost, performance, SEO, and scalability breakdown for Australian businesses. Find out which option actually pays off.",
  openGraph: {
    title: "Custom Website vs Template: Which Is Right for Your Business?",
    description:
      "Compare custom-built websites vs templates and DIY builders. Cost, performance, SEO, and scalability breakdown for Australian businesses.",
    type: "article",
  },
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
    custom: "80+ PageSpeed scores, optimised code, lazy loading, CDN-ready",
    template: "Plugin-heavy, often 40-60 PageSpeed scores out of the box",
    diy: "Varies wildly — often bloated with unused CSS/JS",
  },
  {
    feature: "SEO",
    custom:
      "Structured data, semantic HTML, meta tags, sitemap, schema markup built in",
    template: "Basic SEO plugin support, manual configuration required",
    diy: "Limited control over meta tags, URL structure, and schema",
  },
  {
    feature: "Scalability",
    custom: "Add pages, features, and integrations as your business grows",
    template:
      "Limited by theme architecture — major changes often require rebuilds",
    diy: "Locked into the platform's feature set",
  },
  {
    feature: "Security",
    custom:
      "No unnecessary plugins, minimal attack surface, SSL, secure headers",
    template:
      "Vulnerable to plugin exploits — WordPress sites are a top hacking target",
    diy: "Platform-managed but you have no control over patches",
  },
  {
    feature: "Ownership",
    custom: "You own everything — code, design, content, hosting choice",
    template: "You own content but depend on the theme developer for updates",
    diy: "Platform owns the infrastructure — you rent access",
  },
  {
    feature: "Ongoing Cost",
    custom:
      "Hosting + optional maintenance. No recurring theme/plugin licence fees",
    template:
      "Hosting + theme updates + premium plugin subscriptions ($300-800/yr)",
    diy: "Monthly platform fee ($20-80/mo) plus transaction fees on some",
  },
  {
    feature: "Time to Launch",
    custom: "3-14 weeks depending on scope",
    template: "1-4 weeks with customisation",
    diy: "Hours to days for a basic site",
  },
];

const faqItems = [
  {
    title: "Is a custom website worth the investment for a small business?",
    summary:
      "Yes, if your website drives customer acquisition. Custom websites deliver better search rankings, faster load times, and higher conversion rates. Most businesses outgrow templates within 12-18 months.",
    content:
      "If your website is a core part of how you attract customers, yes. A custom website pays for itself through better search rankings, faster load times, and higher conversion rates. Businesses that rely on foot traffic or word-of-mouth may find a template sufficient initially, but most outgrow it within 12-18 months.",
  },
  {
    title: "Can I move from a template to a custom website later?",
    summary:
      "Yes. Many RAVENCI clients come after outgrowing a WordPress theme or Squarespace site. Content is migrated and a custom platform is built that reflects your brand and scales with you.",
    content:
      "Absolutely. Many of our clients come to us after outgrowing a WordPress theme or Squarespace site. We migrate your content and build a custom platform that actually reflects your brand and scales with you.",
  },
  {
    title: "Why not just use WordPress with a premium theme?",
    summary:
      "WordPress themes add unnecessary code, rely on plugins that create security vulnerabilities, and make updates risky. A custom build delivers exactly what you need with better performance and security.",
    content:
      "WordPress themes add layers of code you don't need, rely on plugins that create security vulnerabilities, and make updates risky. A custom build gives you exactly what you need — nothing more, nothing less — with better performance and security.",
  },
  {
    title:
      "What technology does RAVENCI use for custom websites?",
    summary:
      "RAVENCI builds primarily with Next.js (React) for high-performance sites and WordPress for clients needing familiar CMS management. Both deliver 80+ PageSpeed scores, strong SEO, and clean code.",
    content:
      "We build primarily with Next.js (React) for high-performance sites and WordPress for clients who need familiar CMS management. Both approaches deliver 80+ PageSpeed scores, strong SEO foundations, and clean, maintainable code.",
  },
  {
    title:
      "How much does a custom website cost compared to a template?",
    summary:
      "RAVENCI custom websites start from $3,490. A premium WordPress theme costs $50-200 upfront, but plugins ($300-800/yr), developer customisation ($1,000-5,000), and maintenance make total ownership cost comparable with worse results.",
    content:
      "Our custom websites start from $3,490 for a Foundation site. A premium WordPress theme costs $50-200 upfront but factor in plugins ($300-800/yr), developer customisation ($1,000-5,000), and ongoing maintenance — the total cost of ownership is often comparable, with a worse result.",
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
            Which approach actually pays off for Australian businesses?
          </h2>
          <p className="mt-6 max-w-2xl text-neutral-500/80">
            Every business needs a website, but not every business needs the same
            kind. We break down the real differences between a custom-built
            website, a WordPress template, and a DIY builder — so you can make an
            informed decision based on cost, performance, and long-term value.
          </p>
        </article>
      </section>

      {/* Comparison Table */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-neutral-200/50">
        <h3 className="mb-10 font-serif text-h3 font-bold">
          Side-by-Side Comparison
        </h3>

        {/* Desktop table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-ravenci-dark">
                <th className="py-4 pr-6 text-left font-bold text-ravenci-dark w-1/6">
                  Feature
                </th>
                <th className="py-4 px-6 text-left font-bold text-ravenci-primary w-3/12">
                  Custom Build
                </th>
                <th className="py-4 px-6 text-left font-bold text-neutral-600 w-3/12">
                  WordPress Template
                </th>
                <th className="py-4 px-6 text-left font-bold text-neutral-600 w-3/12">
                  DIY Builder
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-neutral-200 last:border-0"
                >
                  <td className="py-5 pr-6 font-bold text-ravenci-dark align-top">
                    {row.feature}
                  </td>
                  <td className="py-5 px-6 text-neutral-600 align-top">
                    {row.custom}
                  </td>
                  <td className="py-5 px-6 text-neutral-500 align-top">
                    {row.template}
                  </td>
                  <td className="py-5 px-6 text-neutral-500 align-top">
                    {row.diy}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden space-y-8">
          {comparisonRows.map((row, index) => (
            <div key={index} className="bg-white p-5 rounded-lg">
              <h4 className="mb-4 font-bold text-ravenci-dark text-lg">
                {row.feature}
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-ravenci-primary">
                    Custom:
                  </span>{" "}
                  <span className="text-neutral-600">{row.custom}</span>
                </div>
                <div>
                  <span className="font-medium text-neutral-600">
                    Template:
                  </span>{" "}
                  <span className="text-neutral-500">{row.template}</span>
                </div>
                <div>
                  <span className="font-medium text-neutral-600">
                    DIY Builder:
                  </span>{" "}
                  <span className="text-neutral-500">{row.diy}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick verdict */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-ravenci-dark text-white">
        <div className="max-w-3xl">
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
                A Template Works If...
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

      {/* CTA */}
      <section className="content-section py-20 px-5 sm:px-20 xl:px-36 flex flex-col items-center text-center bg-ravenci-primary text-white">
        <h2 className="mb-4 text-3xl md:text-4xl font-medium">
          Ready to Build It Right?
        </h2>
        <p className="mb-10 max-w-md text-white/80">
          Custom websites from $3,490. No templates, no lock-in, no surprises.
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
