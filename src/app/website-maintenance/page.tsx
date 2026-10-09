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
  RUNNING_OFFERS,
  WEBSITE_CARE_TIERS,
  WEBSITE_CARE_ADDONS,
  STORE_ADDON,
  AD_HOC_HOURLY,
  CALENDLY_URL,
} from "@/lib/data/care-plans";
import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";

const TITLE = "Hosting & Website Care | RAVENCI Solutions";

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
        name: "Hosting & Website Care",
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
    serviceType: "Website Hosting & Maintenance",
    name: "Hosting & Website Care",
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
      name: "Hosting & Website Care",
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
          <Breadcrumbs items={[{ label: "Hosting & Website Care" }]} />
          <div className="mt-4">
            <SectionLabel index="01" label="Hosting & Website Care" tick />
          </div>
          <h1 className="mt-4 text-display-l text-foreground">
            Hosting and website care
          </h1>
          <p className="mt-6 text-lead text-muted-foreground">
            I host your site, keep it patched and secure, and fix things when
            they break. Two separate things: keeping it running, and keeping it
            improving. Pick what you need. Billed monthly, cancel any time.
          </p>
          <p className="mt-4 text-body text-muted-foreground">
            Since October 2024 I only host sites that are being maintained. It
            doesn&apos;t have to be me doing it, just a reputable provider. An
            unmaintained site is how sites get hacked or go down, and I&apos;m
            not putting my name on that.
          </p>
        </div>
      </section>

      {/* Section 2: Keep it running (hosting & maintenance) */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="mb-10 flex flex-col gap-3">
          <SectionLabel index="02" label="Keep it running" />
          <h2 className="text-display-m text-foreground">Hosting and maintenance</h2>
          <p className="max-w-2xl text-body text-muted-foreground">
            The basics that keep a site fast, secure and online. Hosting + Maintenance
            is the one most sites want.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {RUNNING_OFFERS.map((offer) => (
            <div
              key={offer.id}
              className={`flex flex-col rounded-sm border bg-card p-6 shadow-1 ${
                offer.featured ? "border-accent" : "border-border"
              }`}
            >
              {offer.featured && (
                <span className="mb-3 inline-block w-fit rounded-sm bg-accent/10 px-2 py-1 font-mono text-label-sm uppercase text-accent">
                  Most sites
                </span>
              )}
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-heading-s text-foreground">{offer.name}</h3>
                <p className="text-heading-s text-accent">
                  ${offer.monthly}
                  <span className="text-small font-normal text-muted-foreground">/mo</span>
                </p>
              </div>
              <p className="mt-2 text-small text-muted-foreground">{offer.line}</p>
              <ul className="mt-4 flex flex-1 flex-col gap-2">
                {offer.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-small text-muted-foreground">
                    <IconCheck size={16} aria-hidden className="mt-0.5 shrink-0 text-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {offer.storeAddonAllowed && (
                <p className="mt-4 text-small text-muted-foreground">
                  Running an online store? Add ${STORE_ADDON.monthly}/mo.
                </p>
              )}
              <div className="mt-6">
                <Button asChild variant={offer.featured ? "primary" : "secondary"} className="w-full">
                  <Link href="/quote">Get started</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-small text-muted-foreground">
          Hosting on its own is for sites someone else keeps maintained (I&apos;ll
          need proof of that). The online-store add-on (${STORE_ADDON.monthly}/mo)
          goes on Maintenance or Hosting + Maintenance only.
        </p>
      </section>

      {/* Section 3: Keep it improving (Website Care) */}
      <section className={`dark bg-background text-foreground ${SECTION} border-b border-white/10`}>
        <div className="mb-10 flex flex-col gap-3">
          <SectionLabel index="03" label="Keep it improving" tone="muted" />
          <h2 className="text-display-m text-foreground">Website Care</h2>
          <p className="max-w-2xl text-body text-muted-foreground">
            A monthly block of my time for design, development and content, with
            priority when you need something done. This is separate from hosting
            and maintenance; add those below if you want them too.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {WEBSITE_CARE_TIERS.map((tier) => (
            <div
              key={tier.id}
              className="flex flex-col rounded-sm border border-border bg-card p-6"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-heading-s text-foreground">{tier.name}</h3>
                <p className="text-small font-medium text-muted-foreground">
                  {tier.monthly === null ? "Pricing on request" : `$${tier.monthly.toLocaleString()}/mo`}
                </p>
              </div>
              <p className="mt-2 text-small text-muted-foreground">{tier.line}</p>
              <ul className="mt-4 flex flex-1 flex-col gap-2">
                {tier.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-small text-muted-foreground">
                    <IconCheck size={16} aria-hidden className="mt-0.5 shrink-0 text-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button asChild variant="secondary" className="w-full">
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                    Book a call
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 max-w-3xl space-y-3 text-small text-muted-foreground">
          <p>
            Want hosting or maintenance on a Website Care plan too? Add maintenance
            for ${WEBSITE_CARE_ADDONS.maintenance.monthly}/mo, or hosting and
            maintenance for ${WEBSITE_CARE_ADDONS["hosting-maintenance"].monthly}/mo.
            Both are $10 less than buying them on their own, because I&apos;m not
            charging for the monthly report twice.
          </p>
          <p>
            Month to month, up to 25% of unused hours roll into the next month,
            then they expire. If you&apos;d rather not lose them, there&apos;s an
            optional 12-month contract (still billed monthly) where all unused
            hours roll over, with each month&apos;s rolled hours lasting two
            months. No lock-in unless you choose it. Extra work beyond your hours
            is ${AD_HOC_HOURLY}/hr, confirmed with you first.
          </p>
        </div>
      </section>

      {/* Section 4: What hosting and maintenance covers */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="mb-10 flex flex-col gap-3">
          <SectionLabel index="04" label="What's covered" />
          <h2 className="text-display-m text-foreground">What hosting and maintenance covers</h2>
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
            Tell me about your site and I&apos;ll get you on the right setup. One
            invoice, one person to call.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" variant="primary">
              <Link href="/quote">See the options</Link>
            </Button>
          </div>
        </div>
        <div className="mt-12">
          <ProofCluster testimonial={proofTestimonial} theme="dark" />
        </div>
      </section>

      <StickyCTA link="/quote" label="See the options" />
    </main>
  );
}
