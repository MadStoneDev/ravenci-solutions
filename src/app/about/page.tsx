import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import Link from "next/link";
import { IconCheck } from "@tabler/icons-react";

import Breadcrumbs from "@/components/breadcrumbs";
import SectionLabel from "@/components/section-label";
import { Button } from "@/components/ui/button";
import { getTestimonialByID } from "@/data/testimonials";

const SECTION = "px-5 py-14 md:px-12 md:py-20 lg:px-20";

export const metadata = {
  title: "About | RAVENCI Solutions",
  description:
    "Meet RAVENCI Solutions. 25+ years of digital experience, an engineering mindset, and a commitment to transparency and websites that genuinely perform.",
  openGraph: {
    ...OG_DEFAULTS,
    title: "About | RAVENCI Solutions",
    description:
      "Meet RAVENCI Solutions. 25+ years of digital experience, an engineering mindset, and websites that genuinely perform.",
    url: "/about",
    type: "website" as const,
  },
  twitter: { ...TWITTER_DEFAULTS },
  alternates: { canonical: "/about" },
};

const STATS = [
  { value: "25+", label: "Years in digital" },
  { value: "75+", label: "Australian businesses" },
  { value: "467", label: "Projects delivered" },
  { value: "85+", label: "PageSpeed guaranteed" },
];

const VALUES = [
  { title: "Transparency", description: "No jargon, no hidden fees. I explain everything in plain English and keep you informed at every stage." },
  { title: "Client ownership", description: "You own what you pay for: your website, your content, your domain. No lock-in contracts, no proprietary traps." },
  { title: "Education", description: "Every project comes with tailored video training and full access after launch, so you're never guessing how to manage your own site." },
  { title: "Integrity", description: "Honest timelines, honest pricing. If something isn't right for your business, I'll tell you, even if it means a different approach." },
];

const QUALIFICATIONS = [
  { title: "Structural Engineering degree", detail: "for analytical thinking and problem solving" },
  { title: "Ten years in steel detailing and structural drafting", detail: "where a thing either holds up under load or it doesn't" },
  { title: "Graphic Design diploma", detail: "for professional visual design" },
  { title: "25+ years digital experience", detail: "across construction, trades, medical, legal and retail" },
];

export default function AboutPage() {
  const geoff = getTestimonialByID("geoff-beisler");

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="flex max-w-3xl flex-col gap-4">
          <Breadcrumbs items={[{ label: "About" }]} />
          <SectionLabel label="About" tick />
          <h1 className="text-display-l text-foreground">The engineering behind your website</h1>
          <p className="text-lead text-muted-foreground">
            I take the long view on what your website needs to do, and I build it
            so it still holds up in five years.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className={`${SECTION} border-b border-border`}>
        <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <dt className="sr-only">{s.label}</dt>
              <dd className="tnum text-metric text-accent">{s.value}</dd>
              <p className="text-small text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </dl>
      </section>

      {/* Story */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          <div className="flex flex-col gap-3 lg:w-[280px] lg:shrink-0">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-border font-mono text-heading-s text-accent">
              RH
            </div>
            <span className="text-heading-s text-foreground">Richard Haddad</span>
            <span className="font-mono text-label uppercase text-muted-foreground">Founder · RAVENCI Solutions</span>
          </div>
          <div className="flex max-w-2xl flex-col gap-4">
            <SectionLabel index="01" label="The story" />
            <p className="text-body text-muted-foreground">
              I&apos;m a structural engineer turned web developer, with a
              multicultural upbringing that spans the Middle East and Australia.
              Before the web, I spent ten years in steel detailing and structural
              drafting, with a Structural Engineering degree behind that, and a
              Graphic Design diploma alongside it.
            </p>
            <p className="text-body text-muted-foreground">
              That mix, analytical thinking and visual craft, shapes how I work.
              Everything has to serve a purpose, and everything has to hold up.
            </p>
            <p className="text-body text-muted-foreground">
              After 25+ years in the digital space, I founded RAVENCI in Brisbane
              in 2018 to offer Australian businesses something different: websites
              and designs built with the same discipline and attention to detail.
            </p>
            <p className="text-body text-muted-foreground">
              RAVENCI runs as a founder-led studio backed by a network of
              specialist collaborators. You get the accountability of dealing
              directly with the person doing the work, plus specialist expertise
              whenever your project needs it.
            </p>
          </div>
        </div>
      </section>

      {/* What makes me different (dark) */}
      <section className={`dark bg-background text-foreground ${SECTION} border-b border-white/10`}>
        <div className="mx-auto max-w-3xl">
          <SectionLabel index="02" label="What makes me different" tone="muted" />
          <h2 className="mt-3 text-display-m text-foreground">Built to a standard, not to a deadline</h2>
          <div className="mt-6 flex flex-col gap-4 text-body text-muted-foreground">
            <p>
              Most developers and designers come from a purely technical or
              creative background. Engineering taught me something else: every
              decision has to be intentional, every component has to be solid, and
              the finished thing has to perform under real conditions.
            </p>
            <p>
              That&apos;s why I guarantee 85+ Google PageSpeed. Performance isn&apos;t
              optional, and I&apos;ve seen what happens when shortcuts get taken.
            </p>
          </div>

          <h3 className="mt-10 text-heading-s text-foreground">The qualifications behind the work</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {QUALIFICATIONS.map((q) => (
              <li key={q.title} className="flex items-start gap-3 text-body text-muted-foreground">
                <IconCheck size={20} aria-hidden className="mt-0.5 shrink-0 text-foreground" />
                <span>
                  <span className="font-semibold text-foreground">{q.title}</span> {q.detail}
                </span>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-heading-s text-foreground">You own everything</h3>
          <p className="mt-3 text-body text-muted-foreground">
            When I build your website, it&apos;s yours. Your code, your content,
            your domain. No lock-in, no proprietary systems. If you ever want to
            move on, you take everything with you.
          </p>

          <h3 className="mt-10 text-heading-s text-foreground">I teach you, too</h3>
          <p className="mt-3 text-body text-muted-foreground">
            Every project includes training videos showing you exactly how to
            manage your site. I don&apos;t build dependency. I want you confident
            making updates and running your site on your own terms.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="mb-10 flex flex-col gap-3">
          <SectionLabel index="03" label="What I stand for" />
          <h2 className="text-display-m text-foreground">What I stand for</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-sm border border-border bg-card p-8">
              <h3 className="text-heading-s text-foreground">{v.title}</h3>
              <p className="mt-2 text-body text-muted-foreground">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial + CTA (dark) */}
      <section className={`dark bg-background text-foreground ${SECTION}`}>
        {geoff && (
          <figure className="mx-auto mb-12 max-w-3xl">
            <SectionLabel label="5.0 · Google review" tone="muted" />
            <blockquote className="mt-4 text-heading-m text-foreground">
              &ldquo;{geoff.content}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-small text-muted-foreground">
              <span className="font-semibold text-foreground">{geoff.author}</span>
              {geoff.company ? ` · ${geoff.company}` : ""}
            </figcaption>
          </figure>
        )}
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-display-m text-foreground">Ready to work with me?</h2>
            <p className="mt-4 text-body text-muted-foreground">
              Whether you&apos;re starting from scratch or need a site that
              performs, tell me about your project.
            </p>
          </div>
          <Button asChild size="lg" variant="primary">
            <Link href="/launch-your-vision">Start a project</Link>
          </Button>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About RAVENCI Solutions",
            description:
              "Meet the person behind RAVENCI Solutions. 25+ years of digital experience, an engineering mindset, and a commitment to transparency.",
            mainEntity: {
              "@type": "Organization",
              name: "RAVENCI Solutions",
              founder: { "@type": "Person", name: "Richard Haddad", jobTitle: "Founder" },
              foundingLocation: { "@type": "Place", name: "Brisbane, Australia" },
              areaServed: "Australia",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Richard Haddad",
            jobTitle: "Founder",
            worksFor: { "@type": "Organization", name: "RAVENCI Solutions", url: "https://ravenci.solutions" },
            knowsAbout: ["Web Design and Development", "Next.js", "React", "WordPress", "UI/UX Design", "Structural Engineering", "SEO"],
            sameAs: ["https://www.linkedin.com/company/91459779/"],
          }),
        }}
      />
    </main>
  );
}
