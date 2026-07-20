import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import Link from "next/link";
import { Route } from "next";

import Breadcrumbs from "@/components/breadcrumbs";
import StickyCTA from "@/components/sticky-cta";
import ProofCluster from "@/components/proof-cluster";
import { getTestimonialByID } from "@/data/testimonials";

export const metadata = {
  title: "Pricing | RAVENCI Solutions",
  description:
    "What it costs to work with RAVENCI. Custom websites from $7,500, eCommerce from $12,000, branding from $3,500, SEO from $1,750/mo, care plans from $350/mo, hosting from $39/mo. Clear starting prices, scoped up front.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Pricing | RAVENCI Solutions",
    description:
      "What it costs to work with RAVENCI. Custom websites from $7,500, eCommerce from $12,000, branding, SEO, care plans, and hosting. Clear starting prices, scoped up front.",
    url: "/pricing",
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
};

type PriceItem = { name: string; price: string; line: string };
type PriceGroup = {
  heading: string;
  href: string;
  blurb: string;
  items: PriceItem[];
};

const groups: PriceGroup[] = [
  {
    heading: "Websites",
    href: "/web-development",
    blurb:
      "Custom sites built to last, owned by you, still fast in five years.",
    items: [
      {
        name: "Business Website",
        price: "from $7,500",
        line: "For an established business whose site should look as credible as they are.",
      },
      {
        name: "Custom Website",
        price: "from $10,000",
        line: "For sites that need integrations or bespoke flows off-the-shelf won't cover.",
      },
      {
        name: "eCommerce",
        price: "from $12,000",
        line: "A store built to sell and to last, on the right platform for your products.",
      },
      {
        name: "Custom eCommerce",
        price: "from $18,000",
        line: "For stores with real complexity: large catalogues, custom logic, migrations.",
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
      },
      {
        name: "Full Brand Identity",
        price: "from $10,000",
        line: "The complete system: logo, type, colour, and how it all holds together.",
      },
      {
        name: "Premium Signage",
        price: "from $175",
        line: "Signage designed to match the rest of the brand.",
      },
      {
        name: "Vehicle Wraps",
        price: "from $350",
        line: "Vehicle branding that turns the work ute into a moving billboard.",
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
        line: "Ongoing work to lift you up the rankings and keep you there.",
      },
      {
        name: "eCommerce SEO + Campaigns",
        price: "from $2,250/mo",
        line: "SEO built around product pages, plus campaign support.",
      },
      {
        name: "Copywriting",
        price: "from $390/page",
        line: "Words written to read well and rank, one page at a time.",
      },
    ],
  },
  {
    heading: "Care Plans",
    href: "/retainer-packages",
    blurb:
      "A dedicated digital team on retainer, for a fraction of hiring in-house.",
    items: [
      {
        name: "Website Care",
        price: "$350/mo",
        line: "Ongoing hours and support for a business website.",
      },
      {
        name: "eCommerce Care",
        price: "$750/mo",
        line: "The same, sized for a store that needs more hands-on time.",
      },
      {
        name: "Growth Essentials",
        price: "$1,800/mo",
        line: "More hours and a lower overage rate for businesses actively growing.",
      },
      {
        name: "Growth Partner",
        price: "$3,000/mo",
        line: "The most hands-on tier, for businesses treating the site as a channel.",
      },
    ],
  },
  {
    heading: "Maintenance",
    href: "/website-maintenance",
    blurb: "Updates, security, and backups so nothing drifts into trouble.",
    items: [
      {
        name: "Monthly Maintenance",
        price: "$249/mo",
        line: "Updates, security, backups, and monitoring in one package.",
      },
      {
        name: "One-Off Maintenance",
        price: "$495",
        line: "A single tidy-up for a site that's fallen behind.",
      },
    ],
  },
  {
    heading: "Hosting",
    href: "/web-hosting",
    blurb: "Fast, managed hosting with Brisbane-based support.",
    items: [
      {
        name: "Managed Hosting",
        price: "from $39/mo",
        line: "All-inclusive: fast servers worldwide, SSL, monitoring, no surprise fees.",
      },
    ],
  },
];

export default function PricingPage() {
  const proofTestimonial = getTestimonialByID("geoff-beisler");

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="content-section pt-32 pb-16 px-5 sm:px-20 xl:px-36 bg-white">
        <div className="max-w-3xl">
          <Breadcrumbs items={[{ label: "Pricing" }]} />
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-h1 font-medium">
            Clear pricing, scoped up front
          </h1>
          <p className="mt-6 text-lg text-neutral-500/90">
            No surprises. You know the starting point before we ever get on a
            call. Every project is quoted properly once we understand what you
            need, but here's where each thing starts.
          </p>
        </div>
      </section>

      {/* Why we cost more */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-ravenci-dark text-white">
        <div className="max-w-3xl">
          <h2 className="font-serif text-h3 font-bold">
            Why a RAVENCI site costs more than a $999 one
          </h2>
          <div className="mt-6 space-y-5 text-neutral-300 font-light leading-relaxed">
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
      <section className="content-section py-20 px-5 sm:px-20 xl:px-36 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          {groups.map((group) => (
            <div key={group.heading}>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h2 className="font-serif text-h3 font-bold">
                  {group.heading}
                </h2>
                <Link
                  href={group.href as Route}
                  className="text-sm font-medium text-ravenci-primary underline underline-offset-4 hover:no-underline"
                >
                  See details
                </Link>
              </div>
              <p className="mb-6 text-neutral-500/80">{group.blurb}</p>
              <div className="divide-y divide-neutral-200 border-y border-neutral-200">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6"
                  >
                    <div className="sm:w-52 flex-shrink-0">
                      <p className="font-medium">{item.name}</p>
                      <p className="font-bold text-ravenci-primary">
                        {item.price}
                      </p>
                    </div>
                    <p className="text-sm text-neutral-500/90 sm:pt-0.5">
                      {item.line}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <p className="text-sm text-neutral-500">
            Additional work outside a project or plan is billed at $165/hr, and
            I always confirm before doing anything beyond what's agreed. Not
            sure what your project needs?{" "}
            <Link
              href="/cost-of-a-website-in-brisbane"
              className="font-medium text-ravenci-primary underline underline-offset-4 hover:no-underline"
            >
              Read the Brisbane website cost guide
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="content-section pt-20 pb-28 px-5 sm:px-20 xl:px-36 bg-ravenci-primary text-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium">
            Tell me what you need
          </h2>
          <p className="mt-4 text-white/80">
            Send through the problem and I'll come back with a scoped, fixed
            price. No sales pressure, no obligation.
          </p>
          <div className="mt-10">
            <Link
              href="/launch-your-vision"
              className="inline-block px-8 py-3 bg-white text-ravenci-dark font-medium rounded-full hover:bg-neutral-100 transition-colors duration-300"
            >
              Launch Your Vision
            </Link>
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
