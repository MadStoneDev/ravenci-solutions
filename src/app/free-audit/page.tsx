import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
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
import SectionLabel from "@/components/section-label";
import { Button } from "@/components/ui/button";
import VisibilityCheckForm from "@/components/visibility-check-form";
import Accordion from "@/components/accordion";
import { auditStats, AUDIT_META } from "@/data/brisbane-audit";

const SECTION = "px-5 py-14 md:px-12 md:py-20 lg:px-20";

export const metadata: Metadata = {
  title: "Free Website Audit Brisbane | RAVENCI Solutions",
  description:
    "Free website audit for Brisbane businesses. I check speed, SEO, mobile usability, accessibility and security, then email you a no-obligation report.",
  openGraph: {
    ...OG_DEFAULTS,
    title: "Free Website Audit Brisbane | RAVENCI Solutions",
    description:
      "Free website audit for Brisbane businesses. I check speed, SEO, mobile usability, accessibility and security, then email you a no-obligation report.",
    url: "/free-audit",
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
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
      "Tap targets, viewport behaviour, layout shift. Most of your visitors are on a phone. Your site needs to behave like it knows that.",
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
    title: "I audit your site",
    description:
      "Run your site through the same five-category check I used on 50 Brisbane businesses in 2026. Real review by a real person, not an automated scan.",
  },
  {
    step: "03",
    title: "Get the report by email",
    description:
      "Plain-English findings: what's working, what isn't, and what to prioritise. Use the report yourself or send it to whoever maintains your site.",
  },
];

const faqItems = [
  {
    title: "What does \"free\" actually mean here?",
    summary:
      "Free means free. No payment details required, no introductory offer that converts to a paid plan, no \"free with sign-up\" trap.",
    content:
      "Free means free. No payment details required, no introductory offer that converts to a paid plan, no \"free with sign-up\" trap. I do this because I'd rather help a business understand its site than sell something the business doesn't need yet. If after reading the report you decide you'd like RAVENCI to fix any of the issues, that's a separate conversation. Most of the time you can act on the findings yourself or pass them to your existing developer.",
  },
  {
    title: "How long until I get the report?",
    summary:
      "Usually within 2 to 3 business days. I do this manually, not via an automated scan, so it takes a beat.",
    content:
      "Usually within 2 to 3 business days. I do this manually, not via an automated scan, so it takes a beat. If you need it faster for a specific reason (a board meeting, a pitch, a rebrand decision), tell me in the form and I'll prioritise.",
  },
  {
    title: "What if I don't have a website yet?",
    summary:
      "The audit is for live sites. If you're pre-launch, I can have a different conversation. Talk to me via the contact form.",
    content:
      "The audit is for live sites. There's nothing to test if there's no live URL. If you're pre-launch and figuring out platform, scope, or what \"good\" should look like for your industry, I can have a different conversation. Use the main contact form on the site and tell me where you're at.",
  },
  {
    title: "Is this just a sales pitch in disguise?",
    summary:
      "No. The report is the deliverable. There's no follow-up sales call unless you specifically ask for one.",
    content:
      "No. The report is the deliverable. There's no follow-up sales call, no automated email sequence, no retargeting pixel that follows you around the internet for the next month. I send the report; what you do with it is up to you.",
  },
  {
    title: "Can I share the report with my team or current developer?",
    summary:
      "Of course. The report is yours. Print it, forward it, paste sections into a brief, whatever's useful.",
    content:
      "Of course. The report is yours to use however you want. Print it, forward it, paste sections into a brief for your current developer or marketing team. I'd rather you act on the findings than sit on them.",
  },
];

export default function FreeAuditPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="flex max-w-3xl flex-col gap-4">
          <Breadcrumbs items={[{ label: "Free Website Audit" }]} />
          <SectionLabel label="Five-category website audit" tick />
          <h1 className="text-display-l text-foreground">
            A free website audit for your Brisbane business
          </h1>
          <p className="text-lead text-muted-foreground">
            I check your site across the same five categories I used on{" "}
            {AUDIT_META.totalSitesAudited} Brisbane businesses in{" "}
            {AUDIT_META.conductedDate}: speed, SEO, mobile usability,
            accessibility, and security. I email you a plain-English report
            showing exactly where you stand. No payment details, no sales call.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3 text-small text-muted-foreground">
            <div className="flex items-center gap-2">
              <IconCheck
                size={18}
                className="rounded-full bg-accent p-0.5 text-accent-foreground"
              />
              <span>Real human review</span>
            </div>
            <div className="flex items-center gap-2">
              <IconCheck
                size={18}
                className="rounded-full bg-accent p-0.5 text-accent-foreground"
              />
              <span>Plain-English report</span>
            </div>
            <div className="flex items-center gap-2">
              <IconCheck
                size={18}
                className="rounded-full bg-accent p-0.5 text-accent-foreground"
              />
              <span>2 to 3 business days</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form, pulled high on the page so the action is immediate */}
      <section id="audit-form" className={`${SECTION} border-b border-border`}>
        <div className="mb-10 text-center">
          <h2 className="text-display-m text-foreground">Get your audit</h2>
          <p className="mx-auto mt-4 max-w-2xl text-body text-muted-foreground">
            Four fields, thirty seconds. I&apos;ll come back to you within 2 to 3
            business days with the full report.
          </p>
        </div>
        <VisibilityCheckForm />
      </section>

      {/* What the audit covers */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="mb-12 flex max-w-3xl flex-col gap-3">
          <SectionLabel index="01" label="What I check" />
          <h2 className="text-display-m text-foreground">
            Five categories, one honest report
          </h2>
          <p className="text-body text-muted-foreground">
            The same framework I used to audit {AUDIT_META.totalSitesAudited}{" "}
            Brisbane business websites for my 2026 research. No proprietary
            scoring magic, just the things that matter to whether your site
            ranks, loads, and converts.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {auditCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="rounded-sm border border-border bg-card p-6"
              >
                <div className="mb-4 inline-flex rounded-sm bg-accent/10 p-2.5">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="mb-2 text-heading-s text-foreground">
                  {cat.title}
                </h3>
                <p className="text-body text-muted-foreground">
                  {cat.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why it matters, the data (dark) */}
      <section
        className={`dark bg-background text-foreground ${SECTION} border-b border-white/10`}
      >
        <div className="mb-10 flex max-w-3xl flex-col gap-3">
          <SectionLabel index="02" label="Why it matters" tone="muted" />
          <h2 className="text-display-m text-foreground">
            The bar in Brisbane is lower than most owners realise
          </h2>
          <p className="text-body text-muted-foreground">
            Findings from my 2026 audit of {AUDIT_META.totalSitesAudited}{" "}
            randomly selected Brisbane business websites across{" "}
            {AUDIT_META.industries} industries:
          </p>
        </div>
        <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {auditStats.slice(0, 6).map((item, index) => (
            <div
              key={index}
              className="rounded-sm border border-white/10 bg-white/5 p-5"
            >
              <div className="mb-2 text-metric text-foreground">
                {item.stat}
              </div>
              <p className="text-body text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/brisbane-website-audit"
            className="inline-flex items-center gap-2 text-foreground transition-all duration-fast hover:gap-3"
          >
            <span className="font-medium">Read the full audit research</span>
            <IconArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="mb-12 flex max-w-3xl flex-col gap-3">
          <SectionLabel index="03" label="How it works" />
          <h2 className="text-display-m text-foreground">
            Three steps, no fine print
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {howItWorks.map((step) => (
            <div
              key={step.step}
              className="rounded-sm border border-border bg-card p-8"
            >
              <div className="mb-4 font-mono text-label text-accent">
                {step.step}
              </div>
              <h3 className="mb-3 text-heading-s text-foreground">
                {step.title}
              </h3>
              <p className="text-body text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-3">
          <h2 className="text-display-m text-foreground">Common questions</h2>
          <div className="w-full">
            <Accordion titleClassName="py-6 text-lg" items={faqItems} />
          </div>
        </div>
      </section>

      {/* Final CTA back to the form (dark) */}
      <section
        className={`dark bg-background text-foreground ${SECTION} flex flex-col items-center text-center`}
      >
        <h2 className="text-display-m text-foreground">Ready when you are</h2>
        <p className="mb-8 mt-4 max-w-lg text-body text-muted-foreground">
          Submit your details and I&apos;ll come back within 2 to 3 business days
          with the full report.
        </p>
        <Button asChild size="lg" variant="primary">
          <Link href="#audit-form">Get my free audit</Link>
        </Button>
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
