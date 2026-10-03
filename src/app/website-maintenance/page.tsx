import type { Metadata } from "next";
import Link from "next/link";
import { IconCheck } from "@tabler/icons-react";

import Breadcrumbs from "@/components/breadcrumbs";
import SectionLabel from "@/components/section-label";
import Accordion from "@/components/accordion";
import { Button } from "@/components/ui/button";
import StickyCTA from "@/components/sticky-cta";
import ProofCluster from "@/components/proof-cluster";
import { getTestimonialByID } from "@/data/testimonials";
import { MANAGED_WEB } from "@/data/service-pages";
import {
  CARE_PLANS,
  STORE_ADDON,
  STANDALONE_HOSTING,
  CALENDLY_URL,
} from "@/lib/data/care-plans";
import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";

const TITLE = "Care Plans & Managed Hosting | RAVENCI Solutions";

export const metadata: Metadata = {
  title: TITLE,
  description: MANAGED_WEB.metaDescription,
  alternates: { canonical: "/website-maintenance" },
  openGraph: {
    ...OG_DEFAULTS,
    title: TITLE,
    description: MANAGED_WEB.metaDescription,
    url: "/website-maintenance",
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
};

const SECTION = "px-5 py-14 md:px-12 md:py-20 lg:px-20";

export default function WebsiteMaintenancePage() {
  const proofTestimonial = getTestimonialByID("geoff-beisler");

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ravenci.solutions" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Care Plans",
        item: "https://ravenci.solutions/website-maintenance",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: MANAGED_WEB.faq.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Website Care Plans & Managed Hosting",
    name: "Care Plans",
    description: MANAGED_WEB.metaDescription,
    provider: {
      "@type": "ProfessionalService",
      name: "RAVENCI Solutions",
      url: "https://ravenci.solutions",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brisbane",
        addressRegion: "QLD",
        addressCountry: "AU",
      },
    },
    areaServed: { "@type": "Country", name: "Australia" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Care Plans",
      itemListElement: (MANAGED_WEB.schema?.offers ?? []).map((o) => ({
        "@type": "Offer",
        name: o.name,
        price: o.price,
        priceCurrency: "AUD",
        description: o.description,
      })),
    },
  };

  return (
    <main className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* Hero */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="max-w-3xl">
          <Breadcrumbs items={[{ label: "Care Plans" }]} />
          <div className="mt-4">
            <SectionLabel index="01" label="Care Plans" tick />
          </div>
          <h1 className="mt-4 text-display-l text-foreground">
            Care plans that keep your site fast, secure and improving
          </h1>
          <p className="mt-6 text-lead text-muted-foreground">
            Every plan includes hosting, updates, security and backups. Higher
            plans add hours each month for design, development and content work.
            Billed monthly, cancel any time.
          </p>
          <p className="mt-4 text-body text-muted-foreground">
            Since October 2024 I only host sites that are on a care plan, so
            hosting and care come together. That's why my sites stay fast and
            secure instead of quietly rotting.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="mb-10 flex flex-col gap-3">
          <SectionLabel index="02" label="The plans" />
          <h2 className="text-display-m text-foreground">Four tiers, hosting in every one</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {CARE_PLANS.map((plan) => (
            <div
              key={plan.id}
              className="flex flex-col rounded-sm border border-border bg-card p-6 shadow-1"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-heading-s text-foreground">{plan.name}</h3>
                <p className="text-heading-s text-accent">
                  ${plan.monthly.toLocaleString()}
                  <span className="text-small font-normal text-muted-foreground">
                    /mo
                  </span>
                </p>
              </div>
              <p className="mt-2 text-small text-muted-foreground">{plan.line}</p>
              <ul className="mt-4 flex flex-1 flex-col gap-2">
                {plan.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-small text-muted-foreground"
                  >
                    <IconCheck size={16} aria-hidden className="mt-0.5 shrink-0 text-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                {plan.mode === "checkout" ? (
                  <Button asChild variant="primary" className="w-full">
                    <Link href="/quote">Get started</Link>
                  </Button>
                ) : (
                  <Button asChild variant="secondary" className="w-full">
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                      Book a call
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-small text-muted-foreground">
          Online stores add ${STORE_ADDON.monthly}/month to any plan. Hours reset
          each month and don&apos;t roll over. Extra work outside your plan is
          billed at $165/hr.
        </p>
      </section>

      {/* What every plan includes */}
      <section className={`dark bg-background text-foreground ${SECTION} border-b border-white/10`}>
        <div className="mb-10 flex flex-col gap-3">
          <SectionLabel index="03" label="In every plan" tone="muted" />
          <h2 className="text-display-m text-foreground">What every plan includes</h2>
        </div>
        <div className="grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
          {MANAGED_WEB.included.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <IconCheck size={20} aria-hidden className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="font-medium text-foreground">{item.title}</p>
                <p className="mt-1 text-small text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Standalone hosting */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="mb-8 flex flex-col gap-3">
          <SectionLabel index="04" label="Hosting only" />
          <h2 className="text-display-m text-foreground">Just need hosting?</h2>
        </div>
        <div className="max-w-xl rounded-sm border border-border bg-card p-6">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-heading-s text-foreground">{STANDALONE_HOSTING.name}</h3>
            <p className="text-heading-s text-accent">
              ${STANDALONE_HOSTING.monthly}
              <span className="text-small font-normal text-muted-foreground">/mo</span>
            </p>
          </div>
          <p className="mt-2 text-small text-muted-foreground">{STANDALONE_HOSTING.line}</p>
          <ul className="mt-4 flex flex-col gap-2">
            {STANDALONE_HOSTING.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-small text-muted-foreground">
                <IconCheck size={16} aria-hidden className="mt-0.5 shrink-0 text-accent" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button asChild variant="secondary" className="w-full">
              <Link href="/quote">Get hosting</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="mb-8 flex flex-col gap-3">
          <SectionLabel index="05" label="Questions" />
          <h2 className="text-display-m text-foreground">Common questions</h2>
        </div>
        <Accordion
          items={MANAGED_WEB.faq.map((q) => ({
            title: q.question,
            content: q.answer,
            summary: q.answer,
          }))}
        />
      </section>

      {/* CTA */}
      <section className={`dark bg-background text-foreground ${SECTION}`}>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-display-m text-foreground">Want it handled?</h2>
          <p className="mt-4 text-body text-muted-foreground">
            Tell me about your site and I'll get you on the right plan. One
            invoice, one person to call.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" variant="primary">
              <Link href="/quote">Choose a plan</Link>
            </Button>
          </div>
        </div>
        <div className="mt-12">
          <ProofCluster testimonial={proofTestimonial} theme="dark" />
        </div>
      </section>

      <StickyCTA link="/quote" startingPrice={249} label="Choose a plan" />
    </main>
  );
}
