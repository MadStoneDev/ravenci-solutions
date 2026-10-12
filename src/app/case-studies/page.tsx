import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";

import Breadcrumbs from "@/components/breadcrumbs";
import CaseStudyCard from "@/components/case-study-card";
import PortfolioCard from "@/components/portfolio-card";
import SectionLabel from "@/components/section-label";
import { Button } from "@/components/ui/button";
import { getAllCaseStudies } from "@/data/case-studies";
import { getPortfolioItems } from "@/data/portfolio";
import { getTestimonialByID, type Testimonial } from "@/data/testimonials";

const SECTION = "px-5 py-14 md:px-12 md:py-24 lg:px-20";

export const metadata: Metadata = {
  title: "Case Studies | RAVENCI Solutions",
  description:
    "Explore real results from real businesses. See how RAVENCI Solutions has helped Australian companies grow through strategic web development and design.",
  openGraph: {
    ...OG_DEFAULTS,
    title: "Case Studies | RAVENCI Solutions",
    description:
      "Explore real results from real businesses. See how RAVENCI Solutions has helped Australian companies grow through strategic web development and design.",
    url: "/case-studies",
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
  alternates: { canonical: "/case-studies" },
};

const STATS = [
  { value: "25+", label: "Years in digital" },
  { value: "100+", label: "Australian businesses" },
  { value: "467", label: "Projects delivered" },
  { value: "95/100", label: "Avg Google Best-Practices" },
];

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();
  // Explicit order controls which testimonial leads each grid break (Danni
  // first). Add more IDs to fill later breaks (card 18, 30, …).
  const pageTestimonials = ["danni-green-1", "adam-bisset"]
    .map((id) => getTestimonialByID(id))
    .filter((t): t is Testimonial => Boolean(t));

  // Case studies and lighter portfolio items share one grid, ordered by their
  // `order` field (case studies have deep-dive pages; portfolio cards open a
  // lightbox instead).
  const gridEntries = [
    ...caseStudies.map((cs) => ({ kind: "case" as const, cs })),
    ...getPortfolioItems().map((item) => ({ kind: "portfolio" as const, item })),
  ].sort((a, b) => {
    const oa = a.kind === "case" ? a.cs.order : a.item.order;
    const ob = b.kind === "case" ? b.cs.order : b.item.order;
    return oa - ob;
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Case Studies | RAVENCI Solutions",
    description:
      "Explore real results from real businesses. See how RAVENCI Solutions has helped Australian companies grow through strategic web development and design.",
    url: "https://ravenci.solutions/case-studies",
    publisher: {
      "@type": "Organization",
      name: "RAVENCI Solutions",
      url: "https://ravenci.solutions",
    },
  };

  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "RAVENCI Case Studies",
    itemListElement: caseStudies.map((cs, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://ravenci.solutions/case-studies/${cs.slug}`,
      name: cs.clientName,
    })),
  };

  return (
    <main className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }}
      />

      {/* Hero */}
      <section className="px-5 pt-5 pb-10 md:px-12 md:pt-10 md:pb-20 lg:px-20 border-b border-border">
        <Breadcrumbs
          items={[{ label: "Case Studies" }]}
          className="mb-5 md:mb-10"
        />
        <div className="flex max-w-3xl flex-col gap-4">
          <SectionLabel label="My Portfolio" tick />
          <h1 className="text-display-l text-foreground">
            Some of my past client work
          </h1>
          <p className="text-lead text-muted-foreground">
            I’m proud to have worked with so many small businesses from all over
            Australia, and to have played a part in their story.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className={`${SECTION} border-b border-border`}>
        <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="tnum text-metric text-accent">{stat.value}</dd>
              <p className="text-small text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </dl>
      </section>

      {/* Case study grid */}
      <section className={SECTION}>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
          {gridEntries.map((entry, i) => {
            // Interrupt the grid with a full-width testimonial after card 6,
            // then every 12 after that (18, 30, …) — but only when more cards
            // follow, so a testimonial never trails the final row.
            const cardNo = i + 1;
            const isBreak =
              cardNo >= 6 &&
              (cardNo - 6) % 12 === 0 &&
              cardNo < gridEntries.length;
            const testimonial =
              isBreak && pageTestimonials.length > 0
                ? pageTestimonials[
                    ((cardNo - 6) / 12) % pageTestimonials.length
                  ]
                : null;
            const key =
              entry.kind === "case" ? `cs-${entry.cs.slug}` : `pf-${entry.item.id}`;
            return (
              <Fragment key={key}>
                {entry.kind === "case" ? (
                  <CaseStudyCard caseStudy={entry.cs} priority={i < 3} />
                ) : (
                  <PortfolioCard item={entry.item} priority={i < 3} />
                )}
                {testimonial && (
                  <figure className="col-span-full rounded-sm border border-border bg-card p-8 md:p-10">
                    <blockquote className="max-w-4xl text-heading-m text-foreground">
                      &ldquo;{testimonial.content}&rdquo;
                    </blockquote>
                    <figcaption className="mt-5 text-small text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        {testimonial.author}
                      </span>
                      {testimonial.company ? ` · ${testimonial.company}` : ""}
                    </figcaption>
                  </figure>
                )}
              </Fragment>
            );
          })}
        </div>
      </section>

      {/* Closing CTA (dark) */}
      <section className={`dark bg-background text-foreground ${SECTION}`}>
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-display-m text-foreground">
              Ready to start your project?
            </h2>
            <p className="mt-4 text-body text-muted-foreground">
              Every project here started with a conversation. Let&apos;s start
              yours.
            </p>
          </div>
          <Button asChild size="lg" variant="primary">
            <Link href="/launch-your-vision">Start a project</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
