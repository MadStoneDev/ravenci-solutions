import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumbs from "@/components/breadcrumbs";
import CaseStudyCard from "@/components/case-study-card";
import SectionLabel from "@/components/section-label";
import { Button } from "@/components/ui/button";
import { getAllCaseStudies } from "@/data/case-studies";

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
  { value: "75+", label: "Australian businesses" },
  { value: "467", label: "Projects delivered" },
  { value: "85+", label: "PageSpeed guaranteed" },
];

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }} />

      {/* Hero */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="flex max-w-3xl flex-col gap-4">
          <Breadcrumbs items={[{ label: "Case Studies" }]} />
          <SectionLabel label="Selected work" tick />
          <h1 className="text-display-l text-foreground">
            The work speaks for itself
          </h1>
          <p className="text-lead text-muted-foreground">
            What I&apos;ve built for Australian businesses, and the results they
            got.
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
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} priority={i < 3} />
          ))}
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
