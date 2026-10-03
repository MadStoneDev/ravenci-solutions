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

export const metadata = {
  title: "Pricing | RAVENCI Solutions",
  description:
    "What it costs to work with RAVENCI. Websites from $7,500, eCommerce from $12,000, branding from $3,500, care plans from $249/mo, hosting from $39/mo.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Pricing | RAVENCI Solutions",
    description:
      "What it costs to work with RAVENCI. Websites from $7,500, eCommerce from $12,000, branding from $3,500, care plans from $249/mo, hosting from $39/mo.",
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

const groups: PriceGroup[] = [
  {
    heading: "Websites",
    href: "/web-development",
    blurb:
      "Custom sites built to last, owned by you, still fast in five years.",
    note: "50% deposit to start, 50% at launch.",
    items: [
      {
        name: "Business Website",
        price: "from $7,500",
        line: "For an established business whose site should look as credible as they are.",
        bullets: [
          "Up to 10 custom-designed pages, signed off before build",
          "WordPress + RAVENCI Builder, so you can edit it yourself",
          "85+ PageSpeed guaranteed, with SEO foundations in place",
          "Launch, training and 30 days of support",
        ],
        timeline: "Typically 3 to 6 weeks",
      },
      {
        name: "Custom Website",
        price: "from $10,000",
        line: "For sites that need integrations or bespoke flows off-the-shelf won't cover.",
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
    blurb:
      "Custom software built around how your business actually works, not bent around someone else's.",
    note: "50% deposit to start, 50% at launch.",
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
          "Ongoing development available on a Partner plan",
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
    heading: "Care Plans",
    href: "/website-maintenance",
    blurb:
      "Every plan includes hosting, updates, security and backups. Higher plans add hours each month for design, development and content work. Billed monthly, cancel any time.",
    items: [
      {
        name: "Maintenance",
        price: "$249/mo",
        line: "For a site that just needs to stay safe and fast.",
        bullets: [
          "Hosting included",
          "Updates, security, daily backups and monitoring",
          "Minor fixes when something breaks",
          "Issues looked at the next business day",
        ],
      },
      {
        name: "Website Care",
        price: "$549/mo",
        line: "For businesses that regularly need small changes.",
        bullets: [
          "Everything in Maintenance",
          "2 hours a month of design, development or content work",
          "Requests handled within 2 business days",
          "Extra hours at $150 instead of $165",
        ],
      },
      {
        name: "Growth",
        price: "$1,390/mo",
        line: "For businesses actively adding to their site.",
        bullets: [
          "Everything in Maintenance",
          "8 hours a month for new pages, landing pages and features",
          "Priority turnaround, within 1 business day",
          "Extra hours at $140",
        ],
      },
      {
        name: "Partner",
        price: "$2,750/mo",
        line: "About half a day a week of my time, for a fraction of hiring in-house.",
        bullets: [
          "Everything in Maintenance",
          "20 hours a month across design, development and content",
          "Same-day response and a monthly planning call",
          "Extra hours at $125",
        ],
      },
    ],
    footnote:
      "Online stores add $200/month to any plan. Hours reset each month and don't roll over.",
  },
  {
    heading: "Hosting",
    href: "/web-hosting",
    blurb: "Fast, managed hosting with Brisbane-based support.",
    items: [
      {
        name: "Managed Hosting",
        price: "$39/mo",
        line: "For sites that don't need a care plan.",
        bullets: [
          "Fast servers, SSL and uptime monitoring",
          "Daily backups",
          "Brisbane-based support",
          "Included free on every care plan",
        ],
      },
    ],
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
            No surprises. You know the starting point before I ever get on a
            call. Every project is quoted properly once I understand what you
            need, but here's where each thing starts.
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
              quote is usually the most expensive site you'll ever own, because
              you pay for it twice.
            </p>
            <p>
              A RAVENCI build is custom, owned by you, editable by you, and
              built on a system with no plugin clutter to rot. The sites I built
              five years ago are still fast, still ranking, still untouched.
              You're not buying pages. You're buying a business asset that keeps
              working after launch day. Tell me the problem, I'll take it from
              there.
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
            Additional work outside a project or plan is billed at $165/hr, and
            I always confirm before doing anything beyond what's agreed. Not
            sure what your project needs?{" "}
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
