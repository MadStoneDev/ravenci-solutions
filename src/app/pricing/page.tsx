import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import Link from "next/link";
import { Route } from "next";
import { IconCheck } from "@tabler/icons-react";

import Breadcrumbs from "@/components/breadcrumbs";
import SectionLabel from "@/components/section-label";
import { Button } from "@/components/ui/button";
import StickyCTA from "@/components/sticky-cta";
import ProofCluster from "@/components/proof-cluster";
import { getTestimonialByID } from "@/data/testimonials";
import {
  RUNNING_OFFERS,
  WEBSITE_CARE_TIERS,
  WEBSITE_CARE_ADDONS,
  STORE_ADDON,
} from "@/lib/data/care-plans";

export const metadata = {
  title: "Pricing | RAVENCI Solutions",
  description:
    "What it costs to work with me. Websites from $7,500, eCommerce from $12,000, branding from $3,500. Hosting $39/mo, maintenance $239/mo, Website Care $320 to $2,800/mo.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Pricing | RAVENCI Solutions",
    description:
      "What it costs to work with me. Websites from $7,500, eCommerce from $12,000, branding from $3,500. Hosting $39/mo, maintenance $239/mo, Website Care $320 to $2,800/mo.",
    url: "/pricing",
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
};

type PriceItem = {
  name: string;
  price: string;
  line: string;
  bullets?: string[];
  timeline?: string;
};
type PriceGroup = {
  heading: string;
  href: string;
  blurb: string;
  /** Short note under the blurb, e.g. payment terms. */
  note?: string;
  items: PriceItem[];
  /** Note rendered below the cards. */
  footnote?: string;
};

// The hosting/maintenance and Website Care figures come straight from
// care-plans.ts, so this page can't drift from /website-maintenance.
const runningItems: PriceItem[] = RUNNING_OFFERS.map((o) => ({
  name: o.name,
  price: `$${o.monthly}/mo`,
  line: o.line,
  bullets: o.bullets,
}));

const webCareItems: PriceItem[] = WEBSITE_CARE_TIERS.map((t) => ({
  name: t.name,
  price: t.monthly === null ? "Pricing on request" : `$${t.monthly.toLocaleString()}/mo`,
  line: t.line,
  bullets: t.bullets,
}));

const groups: PriceGroup[] = [
  {
    heading: "Websites",
    href: "/web-development",
    blurb: "Custom sites built to last, owned by you, still fast in five years.",
    note: "50% deposit, 25% when you see the first version, 25% before launch. Larger projects can be staged to suit.",
    items: [
      {
        name: "Business Website",
        price: "from $7,500",
        line: "For an established business whose site should look as credible as they are.",
        bullets: [
          "Up to 10 custom-designed pages, signed off before build",
          "WordPress + RAVENCI Builder, so you can edit it yourself",
          "85+ PageSpeed guaranteed, with SEO foundations in place",
          "Launch, training and one free month of hosting and maintenance",
        ],
        timeline: "Typically 3 to 6 weeks",
      },
      {
        name: "Custom Website",
        price: "from $10,000",
        line: "A Next.js build for sites that need integrations or flows off-the-shelf won't cover.",
        bullets: [
          "Everything in Business Website",
          "Integrations like booking systems, CRMs or practice software",
          "Custom forms, calculators or member areas",
          "More pages and content structure",
        ],
        timeline: "Typically 6 to 10 weeks",
      },
      {
        name: "eCommerce",
        price: "from $12,000",
        line: "A store built to sell and to last, on the right platform for your products.",
        bullets: [
          "Shopify or BigCommerce, set up properly from the start",
          "Custom design, product and collection pages",
          "Payments, shipping and tax configured",
          "Training so you can run it day-to-day",
        ],
        timeline: "Typically 8 to 12 weeks",
      },
      {
        name: "Custom eCommerce",
        price: "from $18,000",
        line: "For stores with real complexity.",
        bullets: [
          "Everything in eCommerce",
          "Large catalogues, custom logic or wholesale pricing",
          "Migration from your old store, with redirects so you keep your rankings",
          "Headless builds when the catalogue demands it",
        ],
        timeline: "Typically 10 to 16 weeks",
      },
    ],
  },
  {
    heading: "Web Apps & Platforms",
    href: "/web-apps",
    blurb: "Custom software built around how your business actually works.",
    note: "50% deposit, 25% when you see the first version, 25% before launch. Larger projects can be staged to suit.",
    items: [
      {
        name: "Web App / Client Portal",
        price: "from $35,000",
        line: "Logins, roles, job tracking and document handover, wired into the tools you already run.",
        bullets: [
          "Secure logins with different access levels",
          "Built around your actual workflow",
          "Integrations with tools like Xero, Procore or your practice software",
          "Hosting, security and support after launch",
        ],
        timeline: "Typically 3 to 4 months",
      },
      {
        name: "Business Platform",
        price: "from $55,000",
        line: "A full platform that replaces the spreadsheets and duplicate systems eating your team's time.",
        bullets: [
          "Everything in Web App",
          "Multiple connected modules, dashboards and reporting",
          "Data migration from your existing systems",
          "Staged rollout so your team isn't disrupted",
        ],
        timeline: "Typically 4 to 6 months",
      },
      {
        name: "Enterprise Build",
        price: "from $75,000",
        line: "Larger builds designed to scale from where you are now to where you're heading.",
        bullets: [
          "Architecture planned for growth and higher traffic",
          "Detailed discovery and technical planning at the start",
          "Phased delivery with regular check-ins",
          "Ongoing development available on a Website Care plan",
        ],
        timeline: "Timeline scoped during discovery",
      },
    ],
  },
  {
    heading: "Branding",
    href: "/business-design",
    blurb: "A brand that looks as established as the work behind it.",
    items: [
      {
        name: "Logo + Guidelines",
        price: "from $3,500",
        line: "A logo and the rules for using it consistently.",
        bullets: [
          "3 initial concepts, refined to one",
          "Full logo set for print, web and social",
          "A simple guide covering colours, fonts and usage",
        ],
      },
      {
        name: "Full Brand Identity",
        price: "from $10,000",
        line: "The complete system: logo, type, colour, and how it all holds together.",
        bullets: [
          "Everything in Logo + Guidelines",
          "Complete typography and colour system",
          "Stationery, templates and social assets",
          "A detailed brand guide your team and suppliers can follow",
        ],
      },
      {
        name: "Premium Signage",
        price: "Get a quote",
        line: "Signage designed to match the rest of the brand.",
        bullets: [
          "Designed to match your brand, with print-ready files for your supplier",
        ],
      },
      {
        name: "Vehicle Wraps",
        price: "Get a quote",
        line: "Vehicle branding that turns the work ute into a moving billboard.",
        bullets: [
          "Designed to match your brand, with print-ready files for your supplier",
        ],
      },
    ],
  },
  {
    heading: "SEO & Content",
    href: "/seo-and-content",
    blurb: "Getting found, then staying found, month after month.",
    items: [
      {
        name: "Standard SEO",
        price: "from $1,750/mo",
        line: "Getting found on Google and AI search, then staying found.",
        bullets: [
          "Technical fixes and ongoing health checks",
          "Pages or articles written or improved each month",
          "Local SEO and Google Business Profile management",
          "AI visibility tracking: how ChatGPT, Gemini and Google's AI describe you",
          "Monthly report on rankings, traffic and enquiries",
        ],
        timeline: "Billed monthly, cancel any time. Most results build over 3 to 6 months.",
      },
      {
        name: "eCommerce SEO + Campaigns",
        price: "from $2,250/mo",
        line: "SEO built around product pages, plus campaign support.",
        bullets: [
          "Everything in Standard SEO",
          "Product and collection page optimisation",
          "Structured data so products show up properly in search and AI answers",
          "Support for seasonal campaigns and promotions",
        ],
      },
      {
        name: "Copywriting",
        price: "from $390/page",
        line: "Words written to read well and rank, one page at a time.",
        bullets: [
          "Written to read well for people and rank for search",
          "Researched around the terms your customers actually use",
          "One round of revisions included",
        ],
      },
    ],
  },
  {
    heading: "Hosting & maintenance",
    href: "/website-maintenance",
    blurb:
      "Keeping your site fast, secure and online. Billed monthly, cancel any time. Hosting + Maintenance is the one most sites want.",
    items: runningItems,
    footnote: `Running an online store adds $${STORE_ADDON.monthly}/mo to Maintenance or Hosting + Maintenance. Hosting on its own is for sites maintained by another reputable provider.`,
  },
  {
    heading: "Website Care",
    href: "/website-maintenance",
    blurb:
      "A monthly block of my time for design, development and content, with priority support. Hosting and maintenance aren't included.",
    items: webCareItems,
    footnote: `Add maintenance for $${WEBSITE_CARE_ADDONS.maintenance.monthly}/mo, or hosting and maintenance for $${WEBSITE_CARE_ADDONS["hosting-maintenance"].monthly}/mo (each $10 less than on its own). Month to month, up to 25% of unused hours roll into the next month; an optional 12-month contract rolls all of them over.`,
  },
];

export default function PricingPage() {
  const proofTestimonial = getTestimonialByID("geoff-beisler");

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="px-5 py-14 md:px-12 md:py-20 lg:px-20">
        <div className="max-w-3xl">
          <Breadcrumbs items={[{ label: "Pricing" }]} />
          <div className="mt-4">
            <SectionLabel index="01" label="Pricing" tick />
          </div>
          <h1 className="mt-4 text-display-l text-foreground">
            Clear pricing, scoped up front
          </h1>
          <p className="mt-6 text-lead text-muted-foreground">
            You'll know the starting point before we ever get on a call. I quote
            every project properly once I understand what you need, but here's
            where each thing starts.
          </p>
        </div>
      </section>

      {/* Why we cost more */}
      <section className="dark bg-background text-foreground px-5 py-14 md:px-12 md:py-20 lg:px-20">
        <div className="max-w-3xl">
          <SectionLabel index="02" label="Value" tone="muted" />
          <h2 className="mt-4 text-display-m text-foreground">
            Why a RAVENCI site costs more than a $999 one
          </h2>
          <div className="mt-6 space-y-5 text-body text-muted-foreground">
            <p>
              You can buy a website for $999. You'll get one page, no revisions,
              and a template you'll be rebuilding inside two years. The cheapest
              quote is usually the most expensive site you'll own, because you
              pay for it twice.
            </p>
            <p>
              What I build is custom, owned by you, editable by you, and built on
              a system with no plugin clutter to rot. The sites I built five
              years ago are still fast, still ranking, still running. That's the
              whole pitch. Tell me the problem, I'll take it from there.
            </p>
          </div>
        </div>
      </section>

      {/* Price groups */}
      <section className="px-5 py-14 md:px-12 md:py-20 lg:px-20">
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          {groups.map((group) => (
            <div key={group.heading}>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h2 className="text-heading-m text-foreground">
                  {group.heading}
                </h2>
                <Link
                  href={group.href as Route}
                  className="text-small font-medium text-accent underline underline-offset-4 hover:no-underline"
                >
                  See details
                </Link>
              </div>
              <p className="text-body text-muted-foreground">{group.blurb}</p>
              {group.note && (
                <p className="mt-2 text-small font-medium text-foreground">
                  {group.note}
                </p>
              )}
              <div className="mt-6 divide-y divide-border border-y border-border">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="py-5 flex flex-col sm:flex-row gap-2 sm:gap-6"
                  >
                    <div className="sm:w-52 flex-shrink-0">
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="font-bold text-accent">{item.price}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-small text-muted-foreground">
                        {item.line}
                      </p>
                      {item.bullets && (
                        <ul className="mt-3 flex flex-col gap-1.5">
                          {item.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex items-start gap-2 text-small text-muted-foreground"
                            >
                              <IconCheck
                                size={16}
                                aria-hidden
                                className="mt-0.5 shrink-0 text-accent"
                              />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.timeline && (
                        <p className="mt-3 font-mono text-label-sm uppercase text-muted-foreground">
                          {item.timeline}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {group.footnote && (
                <p className="mt-4 text-small text-muted-foreground">
                  {group.footnote}
                </p>
              )}
            </div>
          ))}

          <p className="text-small text-muted-foreground">
            Work outside a project or plan is $165/hr, and I always confirm
            before doing anything beyond what's agreed. Not sure what your
            project needs?{" "}
            <Link
              href="/cost-of-a-website-in-brisbane"
              className="font-medium text-accent underline underline-offset-4 hover:no-underline"
            >
              Read the Brisbane website cost guide
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="dark bg-background text-foreground px-5 py-14 md:px-12 md:py-20 lg:px-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-display-m text-foreground">
            Tell me what you need
          </h2>
          <p className="mt-4 text-body text-muted-foreground">
            Send through the problem and I'll come back with a scoped, fixed
            price. No sales pressure, no obligation.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" variant="primary">
              <Link href="/launch-your-vision">Launch Your Vision</Link>
            </Button>
          </div>
        </div>
        <div className="mt-12">
          <ProofCluster testimonial={proofTestimonial} theme="dark" />
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <StickyCTA
        link="/launch-your-vision"
        startingPrice={7500}
        label="Request a Proposal"
      />
    </main>
  );
}
