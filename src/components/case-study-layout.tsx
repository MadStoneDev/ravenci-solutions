import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconExternalLink } from "@tabler/icons-react";

import Breadcrumbs from "@/components/breadcrumbs";
import SectionLabel from "@/components/section-label";
import ScrollingScreenshot from "@/components/scrolling-screenshot";
import { Button } from "@/components/ui/button";
import {
  type CaseStudy,
  type CaseStudyMetric,
  getAllCaseStudies,
} from "@/data/case-studies";

const SECTION = "px-5 py-14 md:px-12 md:py-20 lg:px-20";
const SECTION_WIDE = "px-5 py-16 md:px-16 md:py-24 lg:px-32"; // premium gutters

function nextOf(cs: CaseStudy): CaseStudy | null {
  const all = getAllCaseStudies();
  if (all.length < 2) return null;
  const i = all.findIndex((c) => c.slug === cs.slug);
  if (i === -1) return all[0];
  return all[(i + 1) % all.length];
}

/**
 * Media block for case studies. Handles three real cases from the data:
 *  - video features (.mp4/.webm) -> autoplay-loop-muted <video>
 *  - full-length screenshots (scroll) -> ScrollingScreenshot auto-scroll window
 *  - everything else -> next/image, top-anchored
 * `className` controls the frame (aspect ratio + border), so the caller decides
 * whether it's a standalone bordered block or flush inside a card.
 */
function CaseMedia({
  src,
  alt,
  scroll,
  duration,
  className,
}: {
  src: string;
  alt: string;
  scroll?: boolean;
  duration?: number;
  className?: string;
}) {
  const frame = `relative w-full overflow-hidden bg-muted ${className ?? "aspect-[16/9] rounded-sm border border-border"}`;

  if (/\.(mp4|webm)$/i.test(src)) {
    return (
      <div className={frame}>
        <video
          src={src}
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
          aria-label={alt}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
    );
  }

  if (scroll) {
    return <ScrollingScreenshot src={src} alt={alt} duration={duration} className={`${frame} group`} />;
  }

  return (
    <div className={frame}>
      <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 900px" className="object-cover object-top" />
    </div>
  );
}

function MetricsBand({ metrics }: { metrics: CaseStudyMetric[] }) {
  return (
    <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      {metrics.map((m) => (
        <div key={m.label} className="flex flex-col gap-1">
          <dt className="sr-only">{m.label}</dt>
          <dd className="tnum text-metric text-foreground">{m.value}</dd>
          <p className="font-mono text-label uppercase text-muted-foreground">
            {m.label}
          </p>
        </div>
      ))}
    </dl>
  );
}

/** Honest bar chart: one bar per metric, length scaled to the parsed numeric
 *  magnitude of the real value. No fabricated before/after. Paper on dark. */
function MetricsChart({ metrics }: { metrics: CaseStudyMetric[] }) {
  const parsed = metrics.map((m) => {
    const n = parseFloat(m.value.replace(/[^0-9.]/g, ""));
    return { ...m, n: Number.isFinite(n) ? n : 0 };
  });
  const max = Math.max(...parsed.map((p) => p.n), 1);
  return (
    <div className="flex flex-col gap-5" role="img" aria-label="Results by metric">
      {parsed.map((p) => (
        <div key={p.label} className="flex flex-col gap-1.5">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-label uppercase text-muted-foreground">
              {p.label}
            </span>
            <span className="tnum text-heading-s text-foreground">{p.value}</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-sm bg-white/10">
            <div
              className="h-full rounded-sm bg-foreground"
              style={{ width: `${Math.max(6, (p.n / max) * 100)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectDetails({ cs }: { cs: CaseStudy }) {
  const items: { label: string; value: string; href?: string }[] = [
    { label: "Client", value: cs.clientName, href: cs.clientUrl },
    { label: "Industry", value: cs.industryLabel },
    {
      label: "Platform",
      value: cs.techStack?.slice(0, 3).join(", ") || cs.serviceLabels[0] || "Custom",
    },
    { label: "Services", value: cs.serviceLabels.join(", ") },
  ];
  return (
    <section className={`${SECTION} border-y border-border`}>
      <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {items.map((it) => (
          <div key={it.label} className="flex flex-col gap-1.5">
            <dt className="font-mono text-label uppercase text-muted-foreground">
              {it.label}
            </dt>
            <dd className="text-heading-s text-foreground">
              {it.href ? (
                <a
                  href={it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-accent"
                >
                  {it.value}
                  <IconExternalLink size={15} aria-hidden />
                </a>
              ) : (
                it.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function ClosingCta({ next }: { next: CaseStudy | null }) {
  return (
    <section id="start" className={`dark bg-background text-foreground ${SECTION}`}>
      <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-display-m text-foreground">
            Tell me the problem. I&apos;ll take it from there.
          </h2>
          <p className="mt-4 text-body text-muted-foreground">
            Two minutes of questions and I&apos;ll come back with a scoped, fixed
            price and a timeline. No obligation.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" variant="primary">
            <Link href="/launch-your-vision">Start a project</Link>
          </Button>
          {next && (
            <Button asChild size="lg" variant="secondary">
              <Link href={`/case-studies/${next.slug}`}>Next case study</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

function ChallengeApproach({ cs }: { cs: CaseStudy }) {
  return (
    <section className={`${SECTION} border-b border-border`}>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-4">
          <SectionLabel index="01" label="The challenge" />
          <h2 className="text-heading-m text-foreground">{cs.problem.heading}</h2>
          {cs.problem.paragraphs.map((p, i) => (
            <p key={i} className="text-body text-muted-foreground">{p}</p>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <SectionLabel index="02" label="The approach" />
          <h2 className="text-heading-m text-foreground">{cs.approach.heading}</h2>
          {cs.approach.paragraphs.map((p, i) => (
            <p key={i} className="text-body text-muted-foreground">{p}</p>
          ))}
          {cs.approach.highlights && cs.approach.highlights.length > 0 && (
            <ul className="mt-2 flex flex-col gap-2.5">
              {cs.approach.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-body text-foreground">
                  <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

function WhatIBuilt({ cs }: { cs: CaseStudy }) {
  if (!cs.features || cs.features.length === 0) return null;
  return (
    <section className={`${SECTION} border-b border-border`}>
      <div className="mb-10 flex flex-col gap-3">
        <SectionLabel index="03" label="What I built" />
        <h2 className="text-heading-m text-foreground">{cs.results.heading || "The work"}</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cs.features.map((f, i) => (
          <div key={f.title} className="flex flex-col overflow-hidden rounded-sm border border-border bg-card">
            {(f.image || f.images?.[0]) && (
              <CaseMedia
                src={(f.image ?? f.images?.[0]) as string}
                alt={f.title}
                scroll={f.imageScroll}
                className="aspect-[16/10] border-b border-border"
              />
            )}
            <div className="flex flex-col gap-2 p-6">
              <span className="font-mono text-label uppercase text-accent">
                Feature {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-heading-s text-foreground">{f.title}</h3>
              <p className="text-small text-muted-foreground">{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function CaseStudyLayout({ caseStudy: cs }: { caseStudy: CaseStudy }) {
  const next = nextOf(cs);
  const metrics = cs.results.metrics ?? [];
  const isDarkHero = cs.template !== "visual-showcase";
  const wide = cs.template === "premium";
  const heroSection = wide ? SECTION_WIDE : SECTION;

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section
        className={`${isDarkHero ? "dark bg-background text-foreground" : ""} ${heroSection} ${!isDarkHero ? "border-b border-border" : ""}`}
      >
        <div className={`flex flex-col gap-5 ${wide ? "max-w-4xl" : "max-w-3xl"}`}>
          <Breadcrumbs items={[{ label: "Case Studies", href: "/case-studies" }, { label: cs.clientName }]} />
          <SectionLabel label={cs.industryLabel} tone={isDarkHero ? "muted" : "accent"} tick />
          <h1 className={wide ? "text-display-xl text-foreground" : "text-display-l text-foreground"}>
            {cs.heroHeadline}
          </h1>
          <p className={`${wide ? "text-lead" : "text-lead"} text-muted-foreground`}>
            {cs.heroSubheadline}
          </p>
          <div className="mt-1 flex flex-wrap gap-2">
            {cs.serviceLabels.map((s) => (
              <span
                key={s}
                className={`rounded-sm border px-2.5 py-1 font-mono text-label-sm uppercase ${isDarkHero ? "border-white/20 text-muted-foreground" : "border-border text-muted-foreground"}`}
              >
                {s}
              </span>
            ))}
          </div>
          {cs.clientUrl && (
            <div className="mt-2">
              <Button asChild size="default" variant={isDarkHero ? "secondary" : "secondary"}>
                <a href={cs.clientUrl} target="_blank" rel="noopener noreferrer">
                  Visit the site
                </a>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Results variant: metrics band leads under the hero (dark) */}
      {cs.template === "results-driven" && metrics.length > 0 && (
        <section className={`dark bg-card text-foreground ${SECTION} border-b border-white/10`}>
          <MetricsBand metrics={metrics} />
        </section>
      )}

      {/* Media */}
      <section className={SECTION}>
        <CaseMedia
          src={cs.featuredImage}
          alt={`${cs.clientName} website`}
          scroll={cs.featuredImageScroll}
          duration={cs.featuredImageScrollDuration}
          className="aspect-[16/9] rounded-sm border border-border md:aspect-[21/9]"
        />
      </section>

      {/* Visual variant: gallery */}
      {cs.template === "visual-showcase" && cs.galleryImages && cs.galleryImages.length > 0 && (
        <section className={`${SECTION} border-t border-border`}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {cs.galleryImages.slice(0, 3).map((img, i) => (
              <CaseMedia
                key={i}
                src={img}
                alt={`${cs.clientName} screenshot ${i + 1}`}
                className="aspect-[3/4] rounded-sm border border-border"
              />
            ))}
          </div>
        </section>
      )}

      <ChallengeApproach cs={cs} />

      {/* What I built (results + premium; visual leads with imagery instead) */}
      {cs.template !== "visual-showcase" && <WhatIBuilt cs={cs} />}

      {/* Results section (results variant, dark) */}
      {cs.template === "results-driven" && (
        <section className={`dark bg-background text-foreground ${SECTION} border-b border-white/10`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
            <div className="flex flex-col gap-4 lg:w-[380px] lg:shrink-0">
              <SectionLabel index="04" label="The results" tone="muted" />
              <h2 className="text-heading-m text-foreground">{cs.results.heading}</h2>
              {metrics.length > 0 && <MetricsChart metrics={metrics} />}
            </div>
            <div className="flex flex-1 flex-col gap-4">
              {cs.results.paragraphs.map((p, i) => (
                <p key={i} className="text-body text-muted-foreground">{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Visual variant: optional low metrics */}
      {cs.template === "visual-showcase" && metrics.length > 0 && (
        <section className={`dark bg-background text-foreground ${SECTION} border-b border-white/10`}>
          <MetricsBand metrics={metrics} />
        </section>
      )}

      {/* Testimonial: own section for premium, inline otherwise */}
      {cs.testimonial && (
        <section
          className={`${cs.template === "premium" ? "dark bg-background text-foreground" : "border-b border-border"} ${wide ? SECTION_WIDE : SECTION}`}
        >
          <SectionLabel label="In their words" tone={cs.template === "premium" ? "muted" : "accent"} />
          <figure className="mt-5 max-w-3xl">
            <blockquote className={`${cs.template === "premium" ? "text-display-m" : "text-heading-m"} text-foreground`}>
              &ldquo;{cs.testimonial.content}&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-small text-muted-foreground">
              <span className="font-semibold text-foreground">{cs.testimonial.author}</span>
              {cs.testimonial.role ? ` · ${cs.testimonial.role}` : ""}
            </figcaption>
          </figure>
        </section>
      )}

      <ProjectDetails cs={cs} />
      <ClosingCta next={next} />
    </div>
  );
}
