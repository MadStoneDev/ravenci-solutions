import type { Metadata } from "next";
import Link from "next/link";

import {
  IconCheck,
  IconBolt,
  IconSearch,
  IconShieldCheck,
  IconAccessible,
  IconDeviceMobile,
  IconArrowRight,
} from "@tabler/icons-react";

import Breadcrumbs from "@/components/breadcrumbs";
import VisibilityCheckForm from "@/components/visibility-check-form";
import Accordion from "@/components/accordion";
import { auditStats, AUDIT_META } from "@/data/brisbane-audit";

export const metadata: Metadata = {
  title: "Free Website Audit for Brisbane Businesses | RAVENCI Solutions",
  description:
    "Free website audit for Brisbane businesses. We check your site's speed, SEO, mobile usability, accessibility and security — and email you a no-obligation report showing exactly where you stand.",
  openGraph: {
    title: "Free Website Audit for Brisbane Businesses",
    description:
      "Five-category audit, no obligation, no spam. We email you a report showing how your site performs against the 50 Brisbane businesses we surveyed in 2026.",
    type: "website",
  },
  alternates: { canonical: "/free-audit" },
};

const auditCategories = [
  {
    icon: IconBolt,
    title: "Speed & Core Web Vitals",
    description:
      "How fast your site loads on mobile and desktop. Google ranks fast sites higher; slow sites bleed conversions.",
  },
  {
    icon: IconSearch,
    title: "SEO & AI Visibility",
    description:
      "Structured data, meta tags, schema markup. The new battleground for being cited by AI search (ChatGPT, Perplexity, Google SGE).",
  },
  {
    icon: IconDeviceMobile,
    title: "Mobile Usability",
    description:
      "Tap targets, viewport behaviour, layout shift. Most of your visitors are on a phone — your site needs to behave like it knows that.",
  },
  {
    icon: IconAccessible,
    title: "Accessibility",
    description:
      "Colour contrast, alt text, keyboard navigation, screen reader behaviour. Compliance matters; not excluding customers matters more.",
  },
  {
    icon: IconShieldCheck,
    title: "Security",
    description:
      "SSL, CMS version, common vulnerabilities. Out-of-date software invites the kind of incident no business wants to explain to its customers.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Submit your details",
    description:
      "Name, email, business name, website URL. Takes thirty seconds. No credit card, no obligation.",
  },
  {
    step: "02",
    title: "We audit your site",
    description:
      "Run your site through the same five-category check we used on 50 Brisbane businesses in 2026. Real review by a real person, not an automated scan.",
  },
  {
    step: "03",
    title: "Get the report by email",
    description:
      "Plain-English findings, what's working, what isn't, and what to prioritise — no upsell, no sales call required. Use the report yourself or send it to whoever maintains your site.",
  },
];

const faqItems = [
  {
    title: "What does \"free\" actually mean here?",
    summary:
      "Free means free. No payment details required, no introductory offer that converts to a paid plan, no \"free with sign-up\" trap.",
    content:
      "Free means free. No payment details required, no introductory offer that converts to a paid plan, no \"free with sign-up\" trap. We do this because we'd rather help a business understand its site than sell something the business doesn't need yet. If after reading the report you decide you'd like RAVENCI to fix any of the issues, that's a separate conversation. Most of the time you can act on the findings yourself or pass them to your existing developer.",
  },
  {
    title: "How long until I get the report?",
    summary:
      "Usually within 2–3 business days. We do a real audit, not an automated scan, so it takes a beat.",
    content:
      "Usually within 2–3 business days. We do a real audit, not an automated scan, so it takes a beat. If you need it faster for a specific reason (a board meeting, a pitch, a rebrand decision), tell us in the form and we'll prioritise.",
  },
  {
    title: "What if I don't have a website yet?",
    summary:
      "The audit is for live sites. If you're pre-launch, we can have a different conversation — talk to us via the contact form.",
    content:
      "The audit is for live sites — there's nothing to test if there's no live URL. If you're pre-launch and figuring out platform, scope, or what \"good\" should look like for your industry, we can have a different conversation. Use the main contact form on the site and tell us where you're at.",
  },
  {
    title: "Is this just a sales pitch in disguise?",
    summary:
      "No. The report is the deliverable. There's no follow-up sales call unless you specifically ask for one.",
    content:
      "No. The report is the deliverable. There's no follow-up sales call, no automated email sequence, no retargeting pixel that follows you around the internet for the next month. We send the report; what you do with it is up to you.",
  },
  {
    title: "Can I share the report with my team or current developer?",
    summary:
      "Of course. The report is yours. Print it, forward it, paste sections into a brief — whatever's useful.",
    content:
      "Of course. The report is yours to use however you want. Print it, forward it, paste sections into a brief for your current developer or marketing team. We'd rather you act on the findings than sit on them.",
  },
];

export default function FreeAuditPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="content-section pt-32 pb-16 md:pb-20 px-5 sm:px-20 xl:px-36 bg-white">
        <div className="max-w-3xl">
          <Breadcrumbs items={[{ label: "Free Website Audit" }]} />
          <span className="mt-4 block text-xs font-medium tracking-widest uppercase text-ravenci-primary">
            Free, no obligation, no spam
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] text-ravenci-dark">
            A free website audit for your Brisbane business
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-500/90 leading-relaxed">
            We check your site across the same five categories we used on{" "}
            {AUDIT_META.totalSitesAudited} Brisbane businesses in{" "}
            {AUDIT_META.conductedDate} — speed, SEO, mobile usability,
            accessibility, and security — and email you a plain-English
            report showing exactly where you stand. No payment details, no
            sales call.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <IconCheck
                size={18}
                className="p-0.5 bg-ravenci-primary rounded-full text-white"
              />
              <span>Real human review</span>
            </div>
            <div className="flex items-center gap-2">
              <IconCheck
                size={18}
                className="p-0.5 bg-ravenci-primary rounded-full text-white"
              />
              <span>Plain-English report</span>
            </div>
            <div className="flex items-center gap-2">
              <IconCheck
                size={18}
                className="p-0.5 bg-ravenci-primary rounded-full text-white"
              />
              <span>2–3 business days</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form — pulled high on the page so the action is immediate */}
      <section
        id="audit-form"
        className="content-section pt-12 pb-20 md:pb-24 px-5 sm:px-20 xl:px-36 bg-neutral-100"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-medium text-ravenci-dark mb-4">
            Get your audit
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600">
            Four fields, thirty seconds. We&apos;ll come back to you within
            2–3 business days with the full report.
          </p>
        </div>
        <VisibilityCheckForm />
      </section>

      {/* What the audit covers */}
      <section className="content-section py-20 md:py-24 px-5 sm:px-20 xl:px-36 bg-white">
        <div className="max-w-3xl mb-12">
          <span className="block mb-3 text-xs font-medium tracking-widest uppercase text-ravenci-primary">
            What we check
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-ravenci-dark">
            Five categories, one honest report
          </h2>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            The same framework we used to audit{" "}
            {AUDIT_META.totalSitesAudited} Brisbane business websites for our
            2026 research. No proprietary scoring magic — just the things
            that actually matter to whether your site ranks, loads, and
            converts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {auditCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="p-6 border border-neutral-200 rounded-lg bg-white hover:border-ravenci-primary/30 transition-colors duration-200"
              >
                <div className="mb-4 inline-flex p-2.5 rounded-lg bg-ravenci-primary/10">
                  <Icon size={24} className="text-ravenci-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-ravenci-dark">
                  {cat.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why it matters — the data */}
      <section className="content-section py-20 md:py-24 px-5 sm:px-20 xl:px-36 bg-ravenci-dark text-white">
        <div className="max-w-3xl mb-10">
          <span className="block mb-3 text-xs font-medium tracking-widest uppercase text-white/70">
            Why it matters
          </span>
          <h2 className="text-3xl md:text-4xl font-medium">
            The bar in Brisbane is lower than most owners realise
          </h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            Findings from our 2026 audit of {AUDIT_META.totalSitesAudited}{" "}
            randomly selected Brisbane business websites across{" "}
            {AUDIT_META.industries} industries:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl">
          {auditStats.slice(0, 6).map((item, index) => (
            <div
              key={index}
              className="p-5 bg-white/5 border border-white/10 rounded-lg"
            >
              <div className="text-3xl font-bold mb-2">{item.stat}</div>
              <p className="text-sm text-white/70 leading-relaxed">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/brisbane-website-audit"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white hover:gap-3 transition-all duration-200"
          >
            <span className="font-medium">Read the full audit research</span>
            <IconArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="content-section py-20 md:py-24 px-5 sm:px-20 xl:px-36 bg-white">
        <div className="max-w-3xl mb-12">
          <span className="block mb-3 text-xs font-medium tracking-widest uppercase text-ravenci-primary">
            How it works
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-ravenci-dark">
            Three steps, no fine print
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {howItWorks.map((step) => (
            <div
              key={step.step}
              className="p-8 border border-neutral-200 rounded-lg bg-white"
            >
              <div className="mb-4 text-ravenci-primary text-sm font-bold tracking-widest">
                {step.step}
              </div>
              <h3 className="mb-3 text-xl font-bold text-ravenci-dark">
                {step.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="content-section py-16 md:py-20 px-6 md:px-10 flex flex-col items-center justify-center gap-3 bg-neutral-100">
        <h2 className="font-serif text-h3 text-ravenci-dark">
          Common Questions
        </h2>
        <div className="max-w-3xl w-full">
          <Accordion titleClassName="py-6 text-lg" items={faqItems} />
        </div>
      </section>

      {/* Final CTA back to the form */}
      <section className="content-section py-20 px-5 sm:px-20 xl:px-36 flex flex-col items-center text-center bg-ravenci-primary text-white">
        <h2 className="mb-4 text-3xl md:text-4xl font-medium">
          Ready when you are
        </h2>
        <p className="mb-10 max-w-lg text-white/90">
          Submit your details and we&apos;ll come back within 2–3 business
          days with the full report. No payment, no sales call, no spam.
        </p>
        <Link
          href="#audit-form"
          className="px-8 py-3 grid place-content-center bg-white rounded-full text-ravenci-primary font-medium hover:bg-white/90 transition-all duration-300 ease-in-out"
        >
          Get my free audit
        </Link>
      </section>

      {/* FAQPage JSON-LD for AEO */}
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

      {/* Service JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Website Audit",
            provider: {
              "@type": "Organization",
              name: "RAVENCI Solutions",
              url: "https://ravenci.solutions",
            },
            areaServed: {
              "@type": "City",
              name: "Brisbane",
            },
            description:
              "Free website audit covering speed, SEO, mobile usability, accessibility, and security for Brisbane businesses.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "AUD",
            },
          }),
        }}
      />

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
                name: "Free Website Audit",
                item: "https://ravenci.solutions/free-audit",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
