import Link from "next/link";
import Image from "next/image";
import { IconArrowRight, IconCheck, IconX } from "@tabler/icons-react";

import SectionLabel from "@/components/section-label";
import PlatformSelector from "@/components/platform-selector";
import VisibilityCheckForm from "@/components/visibility-check-form";
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
const DARK = "dark bg-background text-foreground px-5 py-16 md:px-12 md:py-24 lg:px-20";

const STACK_STEPS = [
  { n: "01", name: "Design", copy: "Wireframes and a full visual design you sign off before a line of code is written.", tag: "Signed-off design" },
  { n: "02", name: "Build", copy: "Hand-built on the right platform. Your code, your content, your domain. No lock-in.", tag: "Repo + CMS" },
  { n: "03", name: "Host", copy: "Managed Australian-supported hosting from $39/mo. SSL, daily backups, monitoring, 99.9% uptime.", tag: "Live, monitored", highlight: true },
  { n: "04", name: "Secure", copy: "Patching, firewall, domain and DNS management, and a restore that has actually been tested.", tag: "Patch log" },
  { n: "05", name: "Optimise", copy: "SEO, AEO and GEO: found by Google, and quoted correctly by the AI assistants your buyers now ask.", tag: "Monthly report" },
  { n: "06", name: "Maintain", copy: "Updates, content changes and new features on retainer from $249/mo. You email me, not a ticket system.", tag: "Care plan" },
];

const INDUSTRIES = [
  { n: "01", label: "Construction", headline: "Builders, developers, architects, engineers", blurb: "Project showcases that win tenders, secure client and tender portals, and Procore, Xero and Deputy talking to each other.", chips: ["Procore", "Xero", "Tender portal"], href: "/construction" },
  { n: "02", label: "Healthcare", headline: "Practices, clinics, allied health, recruiters", blurb: "Online booking wired to HotDoc, Cliniko or Halaxy, patient portals, and content written to stay inside AHPRA's advertising rules.", chips: ["HotDoc", "Cliniko", "AHPRA-aware"], href: "/healthcare" },
  { n: "03", label: "eCommerce", headline: "Retail and wholesale brands that need to sell", blurb: "Shopify and BigCommerce done properly, headless when the catalogue demands it, and B2B portals with real wholesale pricing.", chips: ["Shopify", "BigCommerce", "B2B portal"], href: "/ecommerce" },
];

const WORK_FEATURED = [
  { slug: "goingdark", category: "eCommerce / Shopify", name: "GoingDark", blurb: "An inherited thermal and night-vision store, rebuilt properly on Shopify.", metricValue: "+38.5%", metricLabel: "Purchases" },
  { slug: "peninsula-homes", category: "Construction", name: "Peninsula Homes", blurb: "A Sydney Northern Beaches builder whose site had to look as considered as the houses.", metricValue: "80%", metricLabel: "Work from referrals" },
  { slug: "nikita-morell", category: "Professional services", name: "Nikita Morell", blurb: "A copywriter for architects whose own site had to out-write the architects." },
];

const WORK_COMPACT = [
  { slug: "covenant-security-solutions", name: "Covenant Security", services: "Brand identity, print, vehicle signage" },
  { slug: "sac-consulting", name: "SAC Consulting", services: "Web development" },
  { slug: "cadeaurable", name: "Cadeaurable", services: "Branding, stationery, eCommerce" },
];

const COMPARISON = [
  { feature: "You speak to the person building it", ravenci: "Always", agency: "Account manager", diy: "Nobody" },
  { feature: "85+ PageSpeed in writing", ravenci: "Guaranteed", agency: "Rarely", diy: "No" },
  { feature: "You own the code, content and domain", ravenci: "Yes", agency: "Sometimes", diy: "Platform owns it" },
  { feature: "Hosting, security and backups included", ravenci: "From $39/mo", agency: "Outsourced", diy: "Bundled, unmanaged" },
  { feature: "Plugin clutter and subscription stack", ravenci: "None", agency: "15 to 30 plugins", diy: "Paid apps forever" },
  { feature: "Still working in five years", ravenci: "By design", agency: "Rebuild at 3 years", diy: "Rebuild at 2 years" },
];

const TRUST = ["Shopify Partner", "BigCommerce Partner", "Synergy Wholesale Partner"];

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
        <Image src={img} alt={`${name} project`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top transition-transform duration-slow ease-standard group-hover:scale-105" />
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
              Websites engineered to still be working in five years.
            </h1>
            <p className="text-lead text-muted-foreground">
              Designed, developed, hosted, secured, optimised and maintained. One
              engineer, one number to call, accountable for the whole stack.
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

          {/* Static blueprint (HeroBuild replaces this in step 8) */}
          <div className="flex-1" aria-hidden>
            <div className="rounded-sm border border-border bg-card p-6 shadow-1">
              <div className="mb-4 flex items-center justify-between">
                <div className="h-2.5 w-24 rounded-sm bg-foreground/80" />
                <div className="h-6 w-20 rounded-sm bg-accent" />
              </div>
              <div className="mb-3 h-3 w-3/4 rounded-sm bg-foreground/70" />
              <div className="mb-5 h-2 w-1/2 rounded-sm bg-muted" />
              <div className="mb-5 aspect-[16/7] rounded-sm border border-dashed border-accent/60 bg-muted" />
              <div className="grid grid-cols-3 gap-3">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="rounded-sm border border-border p-3">
                    <div className={`mb-2 h-1.5 w-8 rounded-sm ${i === 0 ? "bg-accent" : "bg-muted"}`} />
                    <div className="h-1.5 w-full rounded-sm bg-muted" />
                  </div>
                ))}
              </div>
              <div className="mt-5 flex justify-between font-mono text-label-sm uppercase text-muted-foreground">
                <span>1440 px</span>
                <span>LCP 0.9s</span>
                <span>Hero / SVG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 - Trust strip */}
      <section className="dark bg-background px-5 py-6 text-foreground md:px-12 lg:px-20">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-label-sm uppercase text-muted-foreground">
          {TRUST.map((t) => (
            <span key={t}>{t}</span>
          ))}
          <span className="text-foreground">
            <span className="font-semibold">5.0</span> from 11 Google reviews
          </span>
          <span>Since 2018</span>
          <span>25+ years</span>
        </div>
      </section>

      {/* 3 - Stack story */}
      <section id="process" className={DARK}>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          <div className="flex flex-col gap-4 lg:w-[420px] lg:shrink-0">
            <SectionLabel index="02" label="The whole stack" tone="muted" />
            <h2 className="text-display-m text-foreground">One person, the whole stack.</h2>
            <p className="text-body text-muted-foreground">
              Most agencies hand you off: a designer, then a developer, then a
              support queue, then a hosting company who has never seen your site. I
              do all six steps, so nothing falls between them.
            </p>
          </div>
          <div className="flex-1">
            <ol className="flex flex-col">
              {STACK_STEPS.map((s) => (
                <li
                  key={s.n}
                  className={`flex flex-col gap-2 border-t border-white/10 py-5 md:flex-row md:items-baseline md:gap-6 ${s.highlight ? "bg-accent/10 px-4" : ""}`}
                >
                  <span className="font-mono text-label text-muted-foreground md:w-10">{s.n}</span>
                  <span className="text-heading-s text-foreground md:w-36 md:shrink-0">{s.name}</span>
                  <span className="flex-1 text-small text-muted-foreground">{s.copy}</span>
                  <span className="font-mono text-label-sm uppercase text-foreground/80 md:w-44 md:text-right">{s.tag}</span>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-heading-s text-foreground">
              Built once. Built properly. Still working in five years.
            </p>
          </div>
        </div>
      </section>

      {/* 4 - Platform selector */}
      <section className={`${LIGHT} border-b border-border`}>
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3">
            <SectionLabel index="03" label="Platform" />
            <h2 className="text-display-m text-foreground">
              Right tool for the business, <em className="not-italic text-accent">not the agency.</em>
            </h2>
          </div>
          <p className="max-w-sm text-small text-muted-foreground">
            Tell me your situation. I&apos;ll tell you what I&apos;d build it on and
            why, including when the answer is cheaper than you expected.
          </p>
        </div>
        <PlatformSelector />
      </section>

      {/* 5 - Industries */}
      <section className={`${LIGHT} border-b border-border`}>
        <div className="mb-10 flex flex-col gap-3">
          <SectionLabel index="04" label="Industries" />
          <h2 className="text-display-m text-foreground">I know your software before you name it.</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {INDUSTRIES.map((ind) => (
            <Link key={ind.href} href={ind.href} className="group flex flex-col gap-4 rounded-sm border border-border bg-card p-8 transition-colors duration-fast hover:border-foreground/30">
              <SectionLabel index={ind.n} label={ind.label} />
              <h3 className="text-heading-m text-foreground">{ind.headline}</h3>
              <p className="flex-1 text-small text-muted-foreground">{ind.blurb}</p>
              <div className="flex flex-wrap gap-2">
                {ind.chips.map((c) => (
                  <span key={c} className="rounded-sm border border-border px-2.5 py-1 font-mono text-label-sm uppercase text-muted-foreground">{c}</span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-small font-medium text-accent">
                {ind.label} websites <IconArrowRight size={16} aria-hidden className="transition-transform duration-fast group-hover:translate-x-1" />
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
            <h2 className="text-display-m text-foreground">Built for Australian businesses. Measured after launch.</h2>
          </div>
          <Link href="/case-studies" className="inline-flex items-center gap-1 text-small font-medium text-accent hover:underline">
            All case studies <IconArrowRight size={16} aria-hidden />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {WORK_FEATURED.map((w) => (
            <Link key={w.slug} href={`/case-studies/${w.slug}`} className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-colors duration-fast hover:border-foreground/30">
              <WorkThumb slug={w.slug} name={w.name} />
              <div className="flex flex-1 flex-col gap-2 p-6">
                <span className="font-mono text-label uppercase text-accent">{w.category}</span>
                <span className="text-heading-s text-foreground">{w.name}</span>
                <span className="flex-1 text-small text-muted-foreground">{w.blurb}</span>
                {w.metricValue && (
                  <div className="mt-2 flex items-baseline gap-2 border-t border-border pt-3">
                    <span className="tnum text-heading-m text-accent">{w.metricValue}</span>
                    <span className="font-mono text-label-sm uppercase text-muted-foreground">{w.metricLabel}</span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {WORK_COMPACT.map((w) => (
            <Link key={w.slug} href={`/case-studies/${w.slug}`} className="group flex items-center justify-between gap-4 rounded-sm border border-border bg-card p-5 transition-colors duration-fast hover:border-foreground/30">
              <div className="flex flex-col">
                <span className="text-heading-s text-foreground">{w.name}</span>
                <span className="text-small text-muted-foreground">{w.services}</span>
              </div>
              <IconArrowRight size={18} aria-hidden className="shrink-0 text-accent transition-transform duration-fast group-hover:translate-x-1" />
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
                <span className="tnum text-metric text-foreground">{score}</span>
              </div>
              <span className="font-mono text-label uppercase text-muted-foreground">
                Live PageSpeed<br />this URL, mobile
              </span>
            </div>
          )}
          <div className="flex flex-col gap-4">
            <SectionLabel index="06" label="Proof" tone="muted" />
            <h2 className="max-w-2xl text-display-m text-foreground">
              {score !== null ? `This site scores ${score}. ` : ""}Your site will score 85+ or I keep working.
            </h2>
            <p className="max-w-2xl text-body text-muted-foreground">
              Not a target. A written guarantee on every build. Performance is a
              structural decision, so it gets made at the start, not bolted on after
              launch.
            </p>
          </div>
        </div>

        {/* Comparison table */}
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/15">
                <th className="py-3 pr-4 font-mono text-label uppercase text-muted-foreground">What you get</th>
                <th className="bg-accent/10 px-4 py-3 text-heading-s text-foreground">RAVENCI</th>
                <th className="px-4 py-3 text-small text-muted-foreground">Typical agency</th>
                <th className="px-4 py-3 text-small text-muted-foreground">DIY builder</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.feature} className="border-b border-white/10">
                  <td className="py-4 pr-4 text-small text-foreground/90">{row.feature}</td>
                  <td className="bg-accent/10 px-4 py-4">
                    <span className="flex items-center gap-2 text-small font-semibold text-foreground">
                      <IconCheck size={16} aria-hidden className="shrink-0 text-foreground" />
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
            Custom sites from $7,500 / eCommerce from $12,000 / maintenance from $249/mo
          </span>
          <Link href="/pricing" className="inline-flex items-center gap-1 text-small font-medium text-accent hover:underline">
            See full pricing <IconArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </section>

      {/* 8 - Testimonials */}
      <section className={`${LIGHT} border-b border-border`}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-sm border border-border bg-card p-9">
              <SectionLabel label={t.label} />
              <blockquote className="mt-5 flex-1 text-heading-s font-normal text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-small text-muted-foreground">
                <span className="font-semibold text-foreground">{t.name}</span> · {t.company}
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
            <span className="text-heading-s text-foreground">Richard Haddad</span>
            <span className="font-mono text-label uppercase text-muted-foreground">Founder · RAVENCI Solutions</span>
          </div>
          <div className="flex max-w-3xl flex-col gap-5">
            <SectionLabel index="07" label="Who builds it" />
            <p className="text-display-m font-normal leading-tight text-foreground">
              I trained as a structural engineer. Ten years in steel detailing and
              structural drafting taught me that a thing either holds up under load
              or it doesn&apos;t, and that you find out later, not on the day it&apos;s
              handed over.
            </p>
            <p className="text-body text-muted-foreground">
              I&apos;ve been building for the web for 25 years and running RAVENCI
              from Brisbane since 2018. I design it, I build it, I host it, I patch
              it, and I answer the phone when something breaks. The sites I built
              five years ago are still fast, still ranking, still running. That&apos;s
              the whole pitch.
            </p>
            <Link href="/about" className="inline-flex items-center gap-1 text-small font-medium text-accent hover:underline">
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
            <h2 className="text-display-m text-foreground">Can Google and AI actually find you?</h2>
            <p className="text-body text-muted-foreground">
              I&apos;ll run your site through the same checks I use on client work and
              send back what search engines and AI assistants see. No pitch attached.
            </p>
            <ul className="mt-2 flex flex-col gap-2.5">
              {["Technical SEO and Core Web Vitals", "How AI assistants describe your business", "What your three nearest competitors are doing"].map((b) => (
                <li key={b} className="flex items-start gap-3 text-small text-muted-foreground">
                  <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <VisibilityCheckForm />
          </div>
        </div>
      </section>
    </main>
  );
}
