import Link from "next/link";
import { IconArrowRight, IconCheck } from "@tabler/icons-react";

import Accordion from "@/components/accordion";
import Breadcrumbs from "@/components/breadcrumbs";
import SectionLabel from "@/components/section-label";
import StickyCTA from "@/components/sticky-cta";
import { Button } from "@/components/ui/button";
import type { ServicePageData } from "@/data/service-pages";

const SECTION = "px-5 py-14 md:px-12 md:py-24 lg:px-20";

export default function ServicePage({ data }: { data: ServicePageData }) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ravenci.solutions" },
      {
        "@type": "ListItem",
        position: 2,
        name: data.breadcrumbLabel,
        item: `https://ravenci.solutions/${data.slug}`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };

  const serviceJsonLd = data.schema
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: data.schema.serviceType,
        name: data.name,
        description: data.metaDescription,
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
        ...(data.schema.offers
          ? {
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: `${data.name} packages`,
                itemListElement: data.schema.offers.map((o) => ({
                  "@type": "Offer",
                  name: o.name,
                  price: o.price,
                  priceCurrency: "AUD",
                  description: o.description,
                })),
              },
            }
          : {}),
      }
    : null;

  return (
    <main className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {serviceJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      )}

      {/* Hero */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="flex flex-col gap-5 lg:max-w-[640px]">
            <Breadcrumbs items={[{ label: data.breadcrumbLabel }]} />
            <SectionLabel index="01" label="Service" tick />
            <h1 className="text-display-l text-foreground">{data.name}</h1>
            <p className="text-lead text-foreground">{data.outcome}</p>
            {data.supporting && (
              <p className="max-w-xl text-body text-muted-foreground">{data.supporting}</p>
            )}
            <div className="mt-2 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="primary">
                <Link href={data.heroCtas.primary.href}>{data.heroCtas.primary.label}</Link>
              </Button>
              {data.heroCtas.secondary && (
                <Button asChild size="lg" variant="secondary">
                  <Link href={data.heroCtas.secondary.href}>{data.heroCtas.secondary.label}</Link>
                </Button>
              )}
            </div>
          </div>

          {/* Pricing anchor */}
          <div className="lg:w-[360px] lg:shrink-0">
            <div className="rounded-sm border border-border bg-card p-8">
              <SectionLabel label="Pricing anchor" tone="muted" />
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-mono text-label uppercase text-muted-foreground">
                  {data.pricingAnchor.fromLabel}
                </span>
                {data.pricingAnchor.price && (
                  <span className="text-metric text-foreground">{data.pricingAnchor.price}</span>
                )}
              </div>
              {data.pricingAnchor.note && (
                <p className="mt-3 text-small text-muted-foreground">{data.pricingAnchor.note}</p>
              )}
              <div className="my-6 h-px w-full bg-border" />
              <ul className="flex flex-col gap-3">
                {data.pricingAnchor.ticks.map((tick) => (
                  <li key={tick} className="flex items-start gap-2 text-small text-foreground">
                    <IconCheck size={18} aria-hidden className="mt-0.5 shrink-0 text-accent" />
                    {tick}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section id="included" className={`${SECTION} border-b border-border`}>
        <div className="mb-10 flex flex-col gap-3">
          <SectionLabel index="02" label="Included" />
          <h2 className="text-heading-m text-foreground">In every build, not as an upsell</h2>
        </div>
        <ul className="grid grid-cols-1 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {data.included.map((item, i) => (
            <li key={item.title} className="flex flex-col gap-2 border-b border-r border-border p-6">
              <span className="font-mono text-label uppercase text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-heading-s text-foreground">{item.title}</span>
              <span className="text-small text-muted-foreground">{item.description}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Process (dark) */}
      {data.process && (
        <section className={`dark bg-background text-foreground ${SECTION}`}>
          <div className="mb-10 flex flex-col gap-3">
            <SectionLabel index="03" label="How it runs" tone="muted" />
            <h2 className="max-w-3xl text-heading-m text-foreground">{data.process.heading}</h2>
            {data.process.note && (
              <p className="max-w-2xl text-body text-muted-foreground">{data.process.note}</p>
            )}
          </div>
          <ol className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
            {data.process.steps.map((step, i) => (
              <li
                key={step.title}
                className={`flex flex-col gap-2.5 border-t-2 pt-4 ${i === 0 ? "border-accent" : "border-border"}`}
              >
                <span className="font-mono text-label uppercase text-muted-foreground">
                  {step.when ?? String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-heading-s text-foreground">{step.title}</span>
                <span className="text-small text-muted-foreground">{step.description}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Related work */}
      {data.relatedWork && data.relatedWork.length > 0 && (
        <section className={`${SECTION} border-b border-border`}>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-col gap-3">
              <SectionLabel index="04" label="Related work" />
              <h2 className="text-heading-m text-foreground">Built this way</h2>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1 text-small font-medium text-accent hover:underline"
            >
              All case studies <IconArrowRight size={16} aria-hidden />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {data.relatedWork.map((work) => (
              <Link
                key={work.href}
                href={work.href}
                className="group flex flex-col rounded-sm border border-border bg-card transition-colors duration-fast hover:border-foreground/30"
              >
                <div className="h-40 rounded-t-sm bg-muted" aria-hidden />
                <div className="flex flex-col gap-2 p-6">
                  <span className="font-mono text-label uppercase text-accent">{work.category}</span>
                  <span className="text-heading-s text-foreground">{work.title}</span>
                  <span className="text-small text-muted-foreground">{work.blurb}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          <div className="flex flex-col gap-4 lg:w-[360px] lg:shrink-0">
            <SectionLabel index="05" label="Questions" />
            <h2 className="text-heading-m text-foreground">The ones I get asked every time</h2>
            <p className="text-small text-muted-foreground">
              Something not here? Ring me.{" "}
              <a href="tel:+61731061836" className="text-accent hover:underline">
                07 3106 1836
              </a>
            </p>
          </div>
          <div className="flex-1">
            <Accordion
              items={data.faq.map((q) => ({ title: q.question, content: q.answer, summary: q.answer }))}
            />
          </div>
        </div>
      </section>

      {/* Closing CTA (dark) */}
      <section className={`dark bg-background text-foreground ${SECTION}`}>
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-display-m text-foreground">{data.closingCta.heading}</h2>
            <p className="mt-4 text-body text-muted-foreground">{data.closingCta.body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="primary">
              <Link href={data.closingCta.primary.href}>{data.closingCta.primary.label}</Link>
            </Button>
            {data.closingCta.secondary && (
              <Button asChild size="lg" variant="secondary">
                <Link href={data.closingCta.secondary.href}>{data.closingCta.secondary.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      <StickyCTA
        link={data.sticky.href}
        label={data.sticky.label}
        startingPrice={data.sticky.startingPrice}
      />
    </main>
  );
}
