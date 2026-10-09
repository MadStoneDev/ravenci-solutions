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
    "I'm Richard Haddad. I run RAVENCI from Brisbane, building custom websites for Australian businesses." +
    " 25 years building for the web, RAVENCI since 2018, with a background in structural engineering and drafting.",
  openGraph: {
    ...OG_DEFAULTS,
    title: "About | RAVENCI Solutions",
    description:
      "Richard Haddad, founder of RAVENCI. 25 years building for the web, running RAVENCI since 2018," +
      " with a structural engineering and drafting background.",
    url: "/about",
    type: "website" as const,
  },
  twitter: { ...TWITTER_DEFAULTS },
  alternates: { canonical: "/about" },
};

const STATS = [
  { value: "25", label: "Years building for the web" },
  { value: "8", label: "Years running RAVENCI" },
  { value: "467", label: "Projects delivered" },
  { value: "100+", label: "Businesses helped" },
];

const VALUES = [
  {
    title: "Plain English",
    description:
      "I explain what I'm doing and why, in words that make sense. The price is written down before we start, and the price is the price.",
  },
  {
    title: "The honest answer",
    description:
      "If a smaller build or a simple fix is the right call, I'll say so, even when it's less work for me. If something won't work for your business, you'll hear it early.",
  },
];

// [TODO: Richard to confirm. Current site said "Structural Engineering degree",
// but your records have this as an undergraduate certificate, so I've softened
// it to "training". Say whichever is accurate.]
const QUALIFICATIONS = [
  {
    title: "I'm based in Brisbane.",
    detail:
      "As great as video calls are, I'd love to meet you face to face too.",
  },
  {
    title: "I do the work myself.",
    detail: "I don't outsource. You hired me not so I would palm off the work.",
  },
  {
    title: "I'm really good at what I do.",
    detail: "Not trying to be cocky. I've been doing this for 25 years.",
  },
];

export default function AboutPage() {
  const viv = getTestimonialByID("viv-luhrs");

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="flex max-w-3xl flex-col gap-4">
          <Breadcrumbs items={[{ label: "About" }]} />
          <SectionLabel label="About" tick />
          <h1 className="text-display-l text-foreground">
            building more than websites
          </h1>
          <p className="text-lead text-muted-foreground">
            I've been coding and building websites for over 25 years. The best
            thing about what I do now is that I've been running a business for 8
            years in an industry that's been my passion for decades. What's
            changed in that time? I no longer just build websites. I build
            investments that keep paying off.
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
            <span className="text-heading-s text-foreground">
              Richard Haddad
            </span>
            <span className="font-mono text-label uppercase text-muted-foreground">
              Founder · RAVENCI Solutions
            </span>
          </div>
          <div className="flex max-w-2xl flex-col gap-4">
            <SectionLabel index="01" label="The story" />
            <p className="text-body text-muted-foreground">
              I was born overseas and came to Australia when I was 10. A year
              later I was teaching myself to code, and I haven't stopped since.
            </p>
            <p className="text-body text-muted-foreground">
              I studied civil engineering at UNSW, majoring in structural, and
              spent over a decade working in the industry. Five years on
              construction sites, four years in steel detailing and another five
              in structural drafting. Somewhere in there I picked up a Diploma
              of Graphic Design and a Certificate in Journalism too. Just
              because.
            </p>
            <p className="text-body text-muted-foreground">
              The entire time, I kept building websites and platforms on the
              side. In 2018 I decided to take the leap and started what's now,
              RAVENCI.
            </p>
          </div>
        </div>
      </section>

      {/* What makes me different (dark) */}
      <section
        className={`dark bg-background text-foreground ${SECTION} border-b border-white/10`}
      >
        <div className="mx-auto max-w-3xl">
          <SectionLabel
            index="02"
            label="What makes me different"
            tone="muted"
          />
          <h2 className="mt-3 text-display-m text-foreground">
            Many, many things
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-body text-muted-foreground">
            <p>But let's focus on just the business stuff.</p>

            <p>
              From start to finish, you deal with me. The guy you contacted, the
              one who did the work (sounds like a Friends episode). And the very
              same developer who's still available to support you, fix any
              problems and push your business even further.
            </p>
            <p>
              I'm a perfectionist. In fact, I care so much about detail that I'd
              rather build my own platforms and tools, like RAVENCI Builder for
              WordPress and RankRiot for SEO, than use something that is
              half-baked.
            </p>
          </div>

          <h3 className="mt-10 text-heading-s text-foreground">
            You're in good hands
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {QUALIFICATIONS.map((q) => (
              <li
                key={q.title}
                className="flex items-start gap-3 text-body text-muted-foreground"
              >
                <IconCheck
                  size={20}
                  aria-hidden
                  className="mt-0.5 shrink-0 text-foreground"
                />
                <span>
                  <span className="font-semibold text-foreground">
                    {q.title}
                  </span>{" "}
                  {q.detail}
                </span>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-heading-s text-foreground">
            You own it all
          </h3>
          <p className="mt-3 text-body text-muted-foreground">
            Your investment is yours. Sounds obvious, but you'd be surprised how
            many developers will lay claim to what you've paid for. Not me. I
            build your site and it's all yours. Code, content and domain.
          </p>

          <h3 className="mt-10 text-heading-s text-foreground">
            You can run it yourself
          </h3>
          <p className="mt-3 text-body text-muted-foreground">
            Every build comes with short training videos showing you how to run
            your own site, step by step. These aren't generic tutorials that
            you'll then have to translate and adapt to what you have. The videos
            are recorded for you on your new website. I'm not interested in
            making you dependent on me. I don't need to. If you're going to
            stay, and I want you to, I'd rather it be because you want to also.
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
            <div
              key={v.title}
              className="rounded-sm border border-border bg-card p-8"
            >
              <h3 className="text-heading-s text-foreground">{v.title}</h3>
              <p className="mt-2 text-body text-muted-foreground">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial + CTA (dark) */}
      <section className={`dark bg-background text-foreground ${SECTION}`}>
        {viv && (
          <figure className="mx-auto mb-12 max-w-3xl">
            <SectionLabel label="5.0 · Google review" tone="muted" />
            <blockquote className="mt-4 text-heading-m text-foreground">
              &ldquo;{viv.content}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-small text-muted-foreground">
              <span className="font-semibold text-foreground">
                {viv.author}
              </span>
              {viv.company ? ` · ${viv.company}` : ""}
            </figcaption>
          </figure>
        )}
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-display-m text-foreground">
              Ready to work with me?
            </h2>
            <p className="mt-4 text-body text-muted-foreground">
              Starting fresh, or rebuilding something that should be doing more?
              Tell me about it.
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
              "Richard Haddad runs RAVENCI Solutions from Brisbane. 25 years building for the web, RAVENCI since 2018, with a background in structural engineering and drafting.",
            mainEntity: {
              "@type": "Organization",
              name: "RAVENCI Solutions",
              founder: {
                "@type": "Person",
                name: "Richard Haddad",
                jobTitle: "Founder",
              },
              foundingLocation: {
                "@type": "Place",
                name: "Brisbane, Australia",
              },
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
            worksFor: {
              "@type": "Organization",
              name: "RAVENCI Solutions",
              url: "https://ravenci.solutions",
            },
            knowsAbout: [
              "Web Design and Development",
              "Next.js",
              "React",
              "WordPress",
              "UI/UX Design",
              "Structural Engineering",
              "SEO",
            ],
            sameAs: ["https://www.linkedin.com/company/91459779/"],
          }),
        }}
      />
    </main>
  );
}
