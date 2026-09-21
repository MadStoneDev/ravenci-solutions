import Image from "next/image";
import Link from "next/link";

import Breadcrumbs from "@/components/breadcrumbs";
import SectionLabel from "@/components/section-label";
import { Button } from "@/components/ui/button";
import { getCaseStudyBySlug } from "@/data/case-studies";
import type { IndustryPageData } from "@/data/industry-pages";

const SECTION = "px-5 py-14 md:px-12 md:py-20 lg:px-20";

export default function IndustryPage({ data }: { data: IndustryPageData }) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ravenci.solutions" },
      {
        "@type": "ListItem",
        position: 2,
        name: `${data.industryLabel} Websites`,
        item: `https://ravenci.solutions/${data.slug}`,
      },
    ],
  };

  const serviceJsonLd = data.schema && {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: data.schema.serviceType,
    name: data.metaTitle,
    description: data.metaDescription,
    provider: {
      "@type": "ProfessionalService",
      name: "RAVENCI Solutions",
      url: "https://ravenci.solutions",
      address: { "@type": "PostalAddress", addressLocality: "Brisbane", addressRegion: "QLD", addressCountry: "AU" },
    },
    areaServed: { "@type": "Country", name: "Australia" },
    ...(data.schema.offers
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${data.industryLabel} Website Packages`,
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
  };

  return (
    <main className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {serviceJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      )}

      {/* Hero */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="flex max-w-3xl flex-col gap-5">
          <Breadcrumbs items={[{ label: data.industryLabel }]} />
          <SectionLabel label={`Industry / ${data.industryLabel}`} tick />
          <h1 className="text-display-l text-foreground">{data.headline}</h1>
          <p className="text-lead text-muted-foreground">{data.intro}</p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="primary">
              <Link href={data.cta.primary.href}>Start a project</Link>
            </Button>
            {data.caseStudies && data.caseStudies.length > 0 && (
              <Button asChild size="lg" variant="secondary">
                <Link href="#work">See the work</Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Pains */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="mb-10 flex flex-col gap-3">
          <SectionLabel index="01" label="What I hear" />
          <h2 className="text-heading-m text-foreground">The problems I hear, every time</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {data.pains.map((pain, i) => (
            <div key={pain.title} className="flex flex-col gap-3 rounded-sm border border-border bg-card p-8">
              <span className="font-mono text-label uppercase text-accent">
                Pain {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-heading-s text-foreground">{pain.title}</h3>
              <p className="text-body text-muted-foreground">{pain.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions + integrations (dark) */}
      <section className={`dark bg-background text-foreground ${SECTION} border-b border-white/10`}>
        <div className="mb-10 flex flex-col gap-3">
          <SectionLabel index="02" label="What I build" tone="muted" />
          <h2 className="text-heading-m text-foreground">
            Built for how {data.industryLabel.toLowerCase()} actually runs
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {data.solutions.map((s) => (
            <div key={s.title} className="flex flex-col gap-2 rounded-sm border border-white/15 p-7">
              <h3 className="text-heading-s text-foreground">{s.title}</h3>
              <p className="text-small text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-sm border border-white/15 p-7 md:flex-row md:items-center md:gap-8">
          <span className="font-mono text-label uppercase text-muted-foreground md:w-40 md:shrink-0">
            Integrations
          </span>
          <div className="flex flex-wrap gap-2.5">
            {data.integrations.map((name) => {
              const placeholder = name.startsWith("[");
              return (
                <span
                  key={name}
                  className={`rounded-sm border px-3 py-1.5 font-mono text-label-sm uppercase ${
                    placeholder ? "border-dashed border-white/25 text-muted-foreground" : "border-white/25 text-foreground"
                  }`}
                >
                  {name}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related case studies */}
      {data.caseStudies && data.caseStudies.length > 0 && (
        <section id="work" className={`${SECTION} border-b border-border`}>
          <div className="mb-10 flex flex-col gap-3">
            <SectionLabel index="03" label={`${data.industryLabel} work`} />
            <h2 className="text-heading-m text-foreground">Built for this industry</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {data.caseStudies.map((work) => {
              const slug = work.href.split("/").pop() ?? "";
              const cs = getCaseStudyBySlug(slug);
              const img = cs?.cardImage ?? cs?.featuredImage;
              return (
                <Link
                  key={work.href}
                  href={work.href}
                  className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-colors duration-fast hover:border-foreground/30"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted">
                    {img && (
                      <Image
                        src={img}
                        alt={`${work.title} project`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top transition-transform duration-slow ease-standard group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-2 p-6">
                    <span className="font-mono text-label uppercase text-accent">{work.category}</span>
                    <span className="text-heading-s text-foreground">{work.title}</span>
                    <span className="text-small text-muted-foreground">{work.blurb}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Stats */}
      {data.stats && data.stats.length > 0 && (
        <section className={`${SECTION} border-b border-border`}>
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {data.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <dt className="sr-only">{stat.label}</dt>
                <dd className={`tnum text-metric ${stat.accent ? "text-accent" : "text-foreground"}`}>
                  {stat.value}
                </dd>
                <p className="text-small text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </dl>
        </section>
      )}

      {/* Testimonial (only when a real one exists) */}
      {data.testimonial && (
        <section className={`${SECTION} border-b border-border`}>
          <SectionLabel label="In their words" />
          <figure className="mt-5 max-w-3xl">
            <blockquote className="text-heading-m text-foreground">
              &ldquo;{data.testimonial.content}&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-small text-muted-foreground">
              <span className="font-semibold text-foreground">{data.testimonial.author}</span>
              {data.testimonial.role ? ` · ${data.testimonial.role}` : ""}
            </figcaption>
          </figure>
        </section>
      )}

      {/* Closing CTA (dark) */}
      <section className={`dark bg-background text-foreground ${SECTION}`}>
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-display-m text-foreground">{data.cta.heading}</h2>
            <p className="mt-4 text-body text-muted-foreground">{data.cta.body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="primary">
              <Link href={data.cta.primary.href}>{data.cta.primary.label}</Link>
            </Button>
            {data.cta.secondary && (
              <Button asChild size="lg" variant="secondary">
                <Link href={data.cta.secondary.href}>{data.cta.secondary.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
