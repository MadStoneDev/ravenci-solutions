import Link from "next/link";
import Image from "next/image";
import {
  IconArrowRight,
  IconCheck,
  IconExternalLink,
  IconX,
} from "@tabler/icons-react";

import SectionLabel from "@/components/section-label";
import VisibilityCheckForm from "@/components/visibility-check-form";
import HeroBuild from "@/components/hero-build";
import StackStory from "@/components/stack-story";
import PlatformSelector from "@/components/platform-selector";
import { Button } from "@/components/ui/button";
import { getCaseStudyBySlug } from "@/data/case-studies";
import { getHomepagePageSpeed } from "@/lib/pagespeed";
import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";

export const metadata = {
  title: "Custom Website Design Brisbane | RAVENCI Solutions",
  description:
    "Custom websites and eCommerce for established Australian businesses. A structural engineer's approach, built properly, still working in five years.",
  alternates: { canonical: "/" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Custom Website Design Brisbane | RAVENCI Solutions",
    description:
      "Custom websites and eCommerce for established Australian businesses. Built properly, still working in five years.",
    url: "/",
    type: "website" as const,
  },
  twitter: { ...TWITTER_DEFAULTS },
};

const LIGHT = "px-5 py-16 md:px-12 md:py-24 lg:px-20";
const DARK =
  "dark bg-background text-foreground px-5 py-16 md:px-12 md:py-24 lg:px-20";

const INDUSTRIES = [
  {
    n: "01",
    label: "Construction",
    headline: "Builders, developers, engineers",
    blurb:
      "You want councils, city planners and architects to choose you for their next big development." +
      " Your website should showcase your capabilities, past work and expertise. I know, because I spent 14 years" +
      " in the industry, from construction sites to steel detailing and structural drafting.",
    chips: ["Showcases", "Capability Statements", "14 Years in the Industry"],
    href: "/construction",
  },
  {
    n: "02",
    label: "Healthcare",
    headline: "Practices, clinics, allied health, wellness",
    blurb:
      "People value convenience. They want to book appointments online, know if you're bulk billed or not and learn" +
      " about the doctors. Some things they'd rather read about than ask in a room full of other patients. I build" +
      " AHPRA-aware sites that give them all of that.",
    chips: ["Online Booking", "Practitioner Profiles", "AHPRA-aware"],
    href: "/healthcare",
  },
  {
    n: "03",
    label: "eCommerce",
    headline: "Retail and online stores",
    blurb:
      "I've designed and built many online stores and each one used the platform that was most appropriate for the" +
      " business. Shopify, BigCommerce, ThriveCart, Square, WooCommerce. I don't push the platform I prefer." +
      " I've worked with all of them. I pick the right one for you.",
    chips: ["Store Setup", "Product Populating", "POS Integration"],
    href: "/ecommerce",
  },
];

const WORK_FEATURED = [
  {
    slug: "dirt",
    category: "Creative Services",
    name: "DIRT",
    blurb:
      "A branding and positioning creative who wanted a very custom build that makes her stand out the way she makes" +
      " her customers do too.",
    metricValue: "+56%",
    metricLabel: "Traffic",
  },
  {
    slug: "goingdark",
    category: "eCommerce / Shopify",
    name: "GoingDark",
    blurb:
      "Thermal and night-vision hunting supplies store, redesign and rebuilt properly on Shopify.",
    metricValue: "+38.5%",
    metricLabel: "Purchases",
  },
  {
    slug: "peninsula-homes",
    category: "Construction",
    name: "Peninsula Homes",
    blurb:
      "A Sydney Northern Beaches builder whose site I collaborated on with an amazing team.",
    metricValue: "80%",
    metricLabel: "Work from referrals",
  },
];

const WORK_COMPACT = [
  {
    slug: "covenant-security-solutions",
    name: "Covenant Security",
    services: "Brand identity, print, vehicle signage",
  },
  {
    slug: "nikita-morell",
    name: "Nikita Morell",
    services: "Copywriting Services",
  },
  {
    slug: "sac-consulting",
    name: "SAC Consulting",
    services: "Web development",
  },
];

const COMPARISON = [
  {
    feature: "You talk to the person building it",
    ravenci: "Always",
    agency: "Account manager",
    diy: "You're on your own",
  },
  {
    feature: "Built for speed",
    ravenci: "From start to finish",
    agency: "Varies",
    diy: "Not usually",
  },
  {
    feature: "You own your site",
    ravenci: "Code, content and domain",
    agency: "Partly",
    diy: "Locked to the Platform",
  },
  {
    feature: "Ongoing care",
    ravenci: "Monthly, cancel any time",
    agency: "Contracts and tickets",
    diy: "All on you",
  },
  {
    feature: "Add-ons and subscriptions",
    ravenci: "Only what's needed",
    agency: "Heavily reliant on them",
    diy: "Paid apps for everything",
  },
];

const TRUST = [
  "Shopify Partner",
  "BigCommerce Partner",
  "Synergy Wholesale Partner",
];

const TESTIMONIALS = [
  {
    label: "5.0 · Google review",
    quote:
      "I could not recommend Richard more highly. His knowledge is remarkable, his professionalism exceptional, and the way he completely sorted my issues, quickly, effortlessly was simply brilliant. Champion bloke, brilliant at what he does.",
    name: "Geoff Beisler",
    company: "Green Earth Trees",
  },
  {
    label: "Client",
    quote:
      "Our brand new startup is launching with the best possible website I could have imagined. He took the time from the very beginning to understand us and our business, and he has made our branding and website reflect that and represent us perfectly.",
    name: "Adam Bisset",
    company: "Covenant Security Solutions",
  },
];

function WorkThumb({ slug, name }: { slug: string; name: string }) {
  const cs = getCaseStudyBySlug(slug);
  const img = cs?.cardImage ?? cs?.featuredImage;
  return (
    <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted">
      {img && (
        <Image
          src={img}
          alt={`${name} project`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top transition-transform duration-slow ease-standard group-hover:scale-105"
        />
      )}
    </div>
  );
}

export default async function Home() {
  const score = await getHomepagePageSpeed();

  return (
    <main className="flex flex-col">
      {/* 1 - Hero */}
      <section className={`${LIGHT} border-b border-border`}>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex max-w-xl flex-col gap-6">
            <SectionLabel index="01" label="Build" tick />
            <h1 className="text-display-xl text-foreground">
              Custom websites, engineered to last
            </h1>
            <p className="text-lead text-muted-foreground">
              Why settle for over-used templates? I bet you promise your
              customers a solution that's just right for them. So why does your
              website look exactly like your competitors'?
            </p>
            <p className="text-lead text-muted-foreground">
              I've been building websites for over 25 years, professionally for
              the last 8. If you want a copy-and-paste site, there are plenty of
              people who'll sell you one. That's not what I do. Every site I
              build is tailored to the business it's for, and its customers.
            </p>
            <p className="text-lead text-muted-foreground">
              If that's what you're after, let's talk.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="primary">
                <Link href="/launch-your-vision">Start a project</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="#visibility-check">Free visibility check</Link>
              </Button>
            </div>
            <p className="font-mono text-label uppercase text-muted-foreground">
              From $7,500 · 85+ PageSpeed, guaranteed · Brisbane
            </p>
          </div>

          <HeroBuild />
        </div>
      </section>

      {/* 2 - Trust strip */}
      <section className="dark bg-background px-5 py-6 text-foreground md:px-12 lg:px-20">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-label-sm uppercase text-muted-foreground">
          {TRUST.map((t) => (
            <span key={t}>{t}</span>
          ))}
          <span className="text-foreground">
            <span className="font-semibold">5.0</span> from Google reviews
          </span>
          <span>Since 2018</span>
        </div>
      </section>

      {/* 3 - Stack story */}
      <StackStory />

      {/* 4 - Platform selector */}
      <section className={`${LIGHT} border-b border-border`}>
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3">
            <SectionLabel index="03" label="Platform" />
            <h2 className="text-display-m text-foreground">
              The right tool for your business
            </h2>
          </div>
          <p className="max-w-sm text-small text-muted-foreground">
            I've been coding long enough to know what works. Tell me what you
            need and I'll tell you what platform is best for you.
          </p>
        </div>
        <PlatformSelector />
      </section>

      {/* 5 - Industries */}
      <section className={`${LIGHT} border-b border-border`}>
        <div className="mb-10 flex flex-col gap-3">
          <SectionLabel index="04" label="Industries" />
          <h2 className="text-display-m text-foreground">Who I work with</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {INDUSTRIES.map((ind) => (
            <Link
              key={ind.href}
              href={ind.href}
              className="group flex flex-col gap-4 rounded-sm border border-border bg-card p-8 transition-colors duration-fast hover:border-foreground/30"
            >
              <SectionLabel index={ind.n} label={ind.label} />
              <h3 className="text-heading-m text-foreground">{ind.headline}</h3>
              <p className="flex-1 text-small text-muted-foreground">
                {ind.blurb}
              </p>
              <div className="flex flex-wrap gap-2">
                {ind.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-sm border border-border px-2.5 py-1 font-mono text-label-sm uppercase text-muted-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-small font-medium text-accent">
                {ind.label} websites{" "}
                <IconArrowRight
                  size={16}
                  aria-hidden
                  className="transition-transform duration-fast group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 6 - Selected work */}
      <section className={`${LIGHT} border-b border-border`}>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            <SectionLabel index="05" label="Selected work" />
            <h2 className="text-display-m text-foreground">
              Work I've done for some amazing Aussie businesses
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1 text-small font-medium text-accent hover:underline"
          >
            All case studies <IconArrowRight size={16} aria-hidden />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {WORK_FEATURED.map((w) => (
            <Link
              key={w.slug}
              href={`/case-studies/${w.slug}`}
              className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-colors duration-fast hover:border-foreground/30"
            >
              <WorkThumb slug={w.slug} name={w.name} />
              <div className="flex flex-1 flex-col gap-2 p-6">
                <span className="font-mono text-label uppercase text-accent">
                  {w.category}
                </span>
                <span className="text-heading-s text-foreground">{w.name}</span>
                <span className="flex-1 text-small text-muted-foreground">
                  {w.blurb}
                </span>
                {w.metricValue && (
                  <div className="mt-2 flex items-baseline gap-2 border-t border-border pt-3">
                    <span className="tnum text-heading-m text-accent">
                      {w.metricValue}
                    </span>
                    <span className="font-mono text-label-sm uppercase text-muted-foreground">
                      {w.metricLabel}
                    </span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {WORK_COMPACT.map((w) => (
            <Link
              key={w.slug}
              href={`/case-studies/${w.slug}`}
              className="group flex items-center justify-between gap-4 rounded-sm border border-border bg-card p-5 transition-colors duration-fast hover:border-foreground/30"
            >
              <div className="flex flex-col">
                <span className="text-heading-s text-foreground">{w.name}</span>
                <span className="text-small text-muted-foreground">
                  {w.services}
                </span>
              </div>
              <IconArrowRight
                size={18}
                aria-hidden
                className="shrink-0 text-accent transition-transform duration-fast group-hover:translate-x-1"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* 7 - Proof */}
      <section id="pricing" className={DARK}>
        <div className="flex flex-col gap-10 border-b border-white/10 pb-14 lg:flex-row lg:items-center lg:gap-16">
          {score !== null && (
            <div className="flex shrink-0 items-center gap-5">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-accent">
                <span className="tnum text-metric text-foreground">
                  {score}
                </span>
              </div>
              <span className="font-mono text-label uppercase text-muted-foreground">
                Live PageSpeed
                <br />
                this URL, mobile
              </span>
            </div>
          )}
          <div className="flex flex-col gap-4">
            <SectionLabel index="06" label="Proof" tone="muted" />
            <h2 className="max-w-2xl text-display-m text-foreground">
              Why work with me
            </h2>
            <p className="max-w-2xl text-body text-muted-foreground">
              I build fast sites, give you honest pricing, and I'm here after
              your website goes live. The internet keeps changing. Security
              risks change, search engines change and now AI has thrown a
              spanner in the works. You don't want to be left stranded. I stand
              by my work.
            </p>
          </div>
        </div>

        {/* Comparison table */}
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/15">
                <th className="py-3 pr-4 font-mono text-label uppercase text-muted-foreground">
                  What you get
                </th>
                <th className="bg-accent/30 px-4 py-3 text-heading-s text-foreground">
                  RAVENCI
                </th>
                <th className="px-4 py-3 text-small text-muted-foreground">
                  Typical agency
                </th>
                <th className="px-4 py-3 text-small text-muted-foreground">
                  DIY builder
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.feature} className="border-b border-white/10">
                  <td className="py-4 pr-4 text-small text-foreground/90">
                    {row.feature}
                  </td>
                  <td className="bg-accent/30 px-4 py-4">
                    <span className="flex items-center gap-2 text-small font-semibold text-foreground">
                      <IconCheck
                        size={16}
                        aria-hidden
                        className="shrink-0 text-foreground"
                      />
                      {row.ravenci}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="flex items-center gap-2 text-small text-muted-foreground">
                      <IconX size={16} aria-hidden className="shrink-0" />
                      {row.agency}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="flex items-center gap-2 text-small text-muted-foreground">
                      <IconX size={16} aria-hidden className="shrink-0" />
                      {row.diy}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <span className="font-mono text-label-sm uppercase text-muted-foreground">
            Custom sites from $7,500 / eCommerce from $12,000 / maintenance from
            $249/mo
          </span>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1 text-small font-medium text-accent hover:underline"
          >
            See full pricing <IconArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </section>

      {/* 8 - Testimonials */}
      <section className={`${LIGHT} border-b border-border`}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-sm border border-border bg-card p-9"
            >
              <SectionLabel label={t.label} />
              <blockquote className="mt-5 flex-1 text-heading-s font-normal text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-small text-muted-foreground">
                <span className="font-semibold text-foreground">{t.name}</span>{" "}
                · {t.company}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 9 - Founder note */}
      <section id="founder" className={`${LIGHT} border-b border-border`}>
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
          <div className="flex max-w-3xl flex-col gap-5">
            <SectionLabel index="07" label="The guy behind it all" />
            <p className="text-display-m font-normal leading-tight text-foreground">
              I've been everywhere, man. Sort of. I was born overseas, came to
              Australia when I was 10, grew up in Sydney and then moved to
              Brisbane. I have a bachelor's degree in civil engineering
              (majoring in structural), worked 5 years on construction sites, 4
              years in steel detailing and 5 years in structural drafting.
            </p>
            <p className="text-display-m leading-tight text-foreground font-bold">
              Through it all, since I was 11, I've been coding and building
              websites.
            </p>
            <p className="text-body text-muted-foreground">
              It's been my passion for over 25 years, and now it's my job.
              Engineering made me love solving problems even more. I've learned
              that every problem has a solution and no two solutions are the
              same. I bring all of that to RAVENCI, my own business that I've
              been running for the past 8 years.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1 text-small font-medium text-accent hover:underline"
            >
              More about how I work <IconArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* 10 - Visibility check */}
      <section id="visibility-check" className={DARK}>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          <div className="flex flex-col gap-4 lg:w-[440px] lg:shrink-0">
            <SectionLabel index="08" label="Free check" tone="muted" />
            <h2 className="text-display-m text-foreground">
              Can Google and AI actually find you?
            </h2>
            <p className="text-body text-muted-foreground">
              Fill out the form and I'll go through your site and run it against
              the same checks I use on client work. Then I'll send you a
              completely free report on how you show up for search engines and
              AI assistants.
            </p>
            <ul className="mt-2 flex flex-col gap-2.5">
              {[
                "Technical SEO and site speed",
                "How AI assistants describe your business",
                "What you can do to improve",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-small text-muted-foreground"
                >
                  <span
                    aria-hidden
                    className="mt-1.5 h-2 w-2 shrink-0 bg-accent"
                  />
                  {b}
                </li>
              ))}
            </ul>
            <a
              href={`/audit/sample-visibility-report`}
              target="_blank"
              className={`flex flex-row items-center gap-1 text-small italic text-muted-foreground hover:text-accent transition-all`}
            >
              See a sample report
              <IconExternalLink size={18} />
            </a>
          </div>
          <div className="flex-1">
            <VisibilityCheckForm />
          </div>
        </div>
      </section>
    </main>
  );
}
