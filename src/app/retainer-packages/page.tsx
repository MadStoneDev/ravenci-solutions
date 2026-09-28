import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import StickyCTA from "@/components/sticky-cta";

import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import Accordion from "@/components/accordion";
import Breadcrumbs from "@/components/breadcrumbs";
import SectionLabel from "@/components/section-label";
import { Button } from "@/components/ui/button";
import PricingCards from "@/components/pricing-cards";
import { getTestimonialsForPage } from "@/data/testimonials";
import ProofCluster from "@/components/proof-cluster";

const SECTION = "px-5 py-14 md:px-12 md:py-20 lg:px-20";

export const metadata = {
  title: "Retainer Packages | RAVENCI Solutions",
  description:
    "Monthly retainer packages for ongoing web support, eCommerce and strategy in Brisbane. A founder-led studio backed by a specialist network, without the overhead of hiring.",
  alternates: { canonical: "/retainer-packages" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Retainer Packages | RAVENCI Solutions",
    description:
      "Monthly retainer packages for ongoing web support, eCommerce and strategy in Brisbane. A founder-led studio backed by a specialist network, without the overhead of hiring.",
    url: "/retainer-packages",
    type: "website",
  },
  twitter: {
    ...TWITTER_DEFAULTS,
  },
};

export default function RetainerPackagesPage() {
  const testimonials = getTestimonialsForPage("retainer-packages");
  const features = [
    {
      title: "Hosting & Maintenance Included",
      description:
        "Every retainer includes managed cloud hosting, security, backups, and updates. No separate bills",
    },
    {
      title: "Dedicated Monthly Hours",
      description:
        "Guaranteed development and design time reserved just for you, every month",
    },
    {
      title: "Flexible Allocation",
      description:
        "Use your hours for dev, design, content, or strategy, whatever you need most that month",
    },
    {
      title: "Priority Support",
      description:
        "Retainer clients always come first. Faster response times and direct access to your developer",
    },
    {
      title: "Consistent Progress",
      description:
        "Your website improves every month instead of sitting stagnant between projects",
    },
    {
      title: "Cost Predictability",
      description:
        "One monthly invoice covers everything. No surprise quotes or scope negotiations",
    },
    {
      title: "No Lock-In on Website Care",
      description:
        "My entry-level tier has no minimum commitment. Pay monthly, cancel anytime",
    },
  ];

  const tiers = [
    {
      name: "Website Care",
      price: 350,
      hours: 1,
      hoursLabel: "Up to 1 hour of edits",
      includes: [
        "Managed cloud hosting included",
        "Security monitoring, backups & updates",
        "Plugin and CMS updates",
        "Uptime monitoring",
        "Email support, 48-hour response",
        "Minor content edits (text and images)",
        "Monthly performance report",
        "No minimum commitment, cancel anytime",
        "Overage rate: $165/hr",
      ],
    },
    {
      name: "eCommerce Care",
      price: 750,
      hours: 3,
      hoursLabel: "3 hours/month",
      includes: [
        "Everything in Website Care, plus:",
        "3 hours of development or design work",
        "Product catalogue maintenance support",
        "eCommerce platform updates (Shopify/BigCommerce/WooCommerce)",
        "Payment gateway and shipping monitoring",
        "Monthly performance audit (speed & Core Web Vitals)",
        "Basic SEO monitoring",
        "24-hour support response",
        "1 month hour rollover",
        "3-month minimum commitment",
        "Overage rate: $165/hr",
      ],
    },
    {
      name: "Growth Essentials",
      price: 1800,
      hours: 8,
      hoursLabel: "8 hours/month",
      includes: [
        "Everything in eCommerce Care, plus:",
        "8 hours of development, design, or SEO work",
        "SEO foundations and keyword tracking",
        "Monthly strategy call",
        "Monthly performance audit + analytics review",
        "Content updates and page creation",
        "24-hour support response",
        "1 month hour rollover",
        "3-month minimum commitment",
        "Overage rate: $155/hr",
      ],
    },
    {
      name: "Growth Partner",
      price: 3000,
      hours: 15,
      hoursLabel: "15 hours/month",
      includes: [
        "Everything in Growth Essentials, plus:",
        "15 hours of development, design, and strategy",
        "On-call priority support (same business day)",
        "Bi-weekly 30-minute strategy calls",
        "Full SEO with keyword tracking and reporting",
        "Monthly CRO review",
        "2 months hour rollover",
        "15% off additional project work",
        "3-month minimum commitment",
        "Overage rate: $155/hr",
      ],
    },
  ];

  const faqItems = [
    {
      title: "What kind of work can I use retainer hours for?",
      summary:
        "Anything digital: new pages, design tweaks, feature development, content updates, landing pages, email templates, and performance optimisation. Your hours are fully flexible each month.",
      content:
        "Anything digital. New pages, design tweaks, feature development, content updates, landing pages, email templates, performance optimisation, whatever matters most to your business that month. Your hours are fully flexible.",
    },
    {
      title: "How do unused hours work?",
      summary:
        "Website Care includes up to 1 hour of edits. eCommerce Care and Growth Essentials hours roll over for 1 month, Growth Partner for 2 months. RAVENCI tracks your balance and helps plan usage.",
      content:
        "It depends on your tier. Website Care includes up to 1 hour of content edits per month. eCommerce Care and Growth Essentials hours roll over for 1 month, and Growth Partner hours roll over for 2 months. I'll always let you know your balance and help you plan usage.",
    },
    {
      title:
        "What's the difference between Website Care and the Growth tiers?",
      summary:
        "Website Care keeps things running: hosting, updates, backups, and security monitoring with minor edits. The Growth tiers include all of that plus dedicated hours for active development, design, SEO, and strategy.",
      content:
        "Website Care keeps things running: hosting, updates, backups, security monitoring, and minor content edits. The Growth tiers include all of that plus dedicated hours for active development, design, SEO, and strategy. Website Care keeps things running. Growth tiers keep things moving forward.",
    },
    {
      title: "Can I change tiers?",
      summary:
        "Yes. You can upgrade at any time effective next billing cycle. Downgrades are available at the end of your current commitment period.",
      content:
        "Yes. You can upgrade at any time and the change takes effect on your next billing cycle. Downgrades are available at the end of your current commitment period.",
    },
    {
      title: "What if I need more hours in a month?",
      summary:
        "Additional hours are billed at your tier's overage rate ($165/hr for Website Care and eCommerce Care, $155/hr for Growth Essentials and Growth Partner). RAVENCI always confirms before doing any work beyond your included hours.",
      content:
        "No problem. Additional hours are billed at your tier's overage rate ($165/hr for Website Care and eCommerce Care, $155/hr for Growth Essentials and Growth Partner). I'll always confirm before doing any work beyond your included hours.",
    },
  ];

  return (
    <main className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://ravenci.solutions",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Retainer Packages",
                item: "https://ravenci.solutions/retainer-packages",
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="flex max-w-3xl flex-col gap-4">
          <Breadcrumbs items={[{ label: "Retainer Packages" }]} />
          <SectionLabel label="Retainer Packages" tick />
          <h1 className="text-display-l text-foreground">
            Your Dedicated Digital Partner
          </h1>
          <p className="text-lead text-muted-foreground">
            Ongoing development, design, and strategy, without the overhead of
            hiring.
          </p>
          <p className="text-body text-muted-foreground">
            For established Australian businesses that want ongoing digital
            support without the overhead of hiring in-house. Hosting,
            maintenance, and dedicated time for development, design, content and
            SEO, used however your business needs it that month. Tell me the
            priorities. I&apos;ll take it from there.
          </p>
        </div>
      </section>

      {/* Social proof */}
      <section
        className={`dark bg-background text-foreground ${SECTION} border-b border-white/10`}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-heading-m text-foreground">
            Trusted by Brisbane businesses for ongoing digital partnership
          </h2>
          {testimonials[0] && (
            <figure className="mt-6">
              <blockquote className="text-heading-m font-light text-foreground">
                &ldquo;{testimonials[0].content}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-small text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {testimonials[0].author}
                </span>
                {testimonials[0].role ? ` · ${testimonials[0].role}` : ""}
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* Two-column: problem (dark) + why choose (light) */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <section
          className={`dark bg-background text-foreground ${SECTION} border-b border-white/10`}
        >
          <div className="max-w-lg">
            <h2 className="text-heading-m text-foreground">
              The Problem with Project-by-Project Work
            </h2>
            <div className="mt-4 text-body text-muted-foreground">
              Common frustrations I hear from businesses:
              <ul className="mt-4 flex flex-col gap-2">
                <li>- Freelancers who disappear between projects</li>
                <li>- Websites that sit stagnant for months after launch</li>
                <li>- Surprise invoices every time you need a small change</li>
                <li>- Juggling multiple vendors for dev, design, and SEO</li>
                <li>
                  - Losing momentum because you can&apos;t get things done fast
                  enough
                </li>
              </ul>
            </div>

            <h2 className="mt-8 text-heading-m text-foreground">
              Why a Retainer Beats Hiring In-House
            </h2>
            <p className="mt-4 text-body text-muted-foreground">
              My Growth Partner retainer costs{" "}
              <span className="font-semibold text-foreground">
                $36,000/year
              </span>
              , a full-time hire costs{" "}
              <span className="font-semibold text-foreground">
                $80,000 to $100,000/year
              </span>{" "}
              before super, leave, equipment, and training.
            </p>
            <ul className="mt-6 flex flex-col gap-4 text-body text-muted-foreground">
              <li className="flex items-start gap-3">
                <IconCheck
                  size={20}
                  aria-hidden
                  className="mt-0.5 shrink-0 text-foreground"
                />
                No recruitment costs, onboarding, or HR overhead
              </li>
              <li className="flex items-start gap-3">
                <IconCheck
                  size={20}
                  aria-hidden
                  className="mt-0.5 shrink-0 text-foreground"
                />
                Access to a full range of skills (dev, design, SEO, content)
                through one point of contact
              </li>
              <li className="flex items-start gap-3">
                <IconCheck
                  size={20}
                  aria-hidden
                  className="mt-0.5 shrink-0 text-foreground"
                />
                Scale up or down as your business needs change
              </li>
              <li className="flex items-start gap-3">
                <IconCheck
                  size={20}
                  aria-hidden
                  className="mt-0.5 shrink-0 text-foreground"
                />
                No sick days, no annual leave, no gaps in coverage
              </li>
            </ul>
            <p className="mt-6 text-body text-muted-foreground">
              A retainer gives you a digital partner who knows your business
              inside and out. No onboarding every time, no context switching, no
              lost momentum.
            </p>
            <p className="mt-4 text-body text-muted-foreground">
              That&apos;s how I approach it at RAVENCI. To make it even simpler
              for you, I offer four tiers of retainer packages, each designed to
              meet your specific needs.
            </p>
          </div>
        </section>

        <section className={`${SECTION} border-b border-border`}>
          <div className="max-w-lg">
            <h2 className="text-heading-m text-foreground">
              Why Choose a Retainer
            </h2>
            <ul className="mt-8 flex flex-col gap-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <IconCircleCheckFilled
                    className="mt-0.5 shrink-0 text-accent"
                    size={22}
                  />
                  <p className="text-body text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {feature.title}:
                    </span>{" "}
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* Showcase */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="mb-10 flex flex-col gap-3">
          <SectionLabel index="01" label="Retainer clients" />
          <h2 className="text-display-m text-foreground">
            Some of My Retainer Clients
          </h2>
        </div>
        <div className="grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            {
              name: "Covenant Security",
              image: "/showcase-images/Client - Covenant Security.png",
            },
            {
              name: "GoingDark",
              image: "/showcase-images/Client - GoingDark.png",
            },
          ].map((project) => (
            <div
              key={project.name}
              className="group overflow-hidden rounded-sm border border-border bg-card"
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.name}, RAVENCI retainer client`}
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="p-4 text-small font-medium text-foreground">
                {project.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section
        className={`dark bg-background text-foreground ${SECTION} border-b border-white/10`}
      >
        <div className="mb-12 flex flex-col gap-3">
          <SectionLabel index="02" label="Pricing" tone="muted" />
          <h2 className="text-display-m text-foreground">Choose Your Retainer</h2>
        </div>
        <PricingCards
          tiers={[
            {
              name: "1. Website Care",
              price: "350",
              description: "Up to 1 hour of edits. Managed cloud hosting, security, backups, updates, and email support. No minimum commitment. Per month.",
              accordionContent: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Managed cloud hosting included</li>
    <li>Security monitoring, backups &amp; updates</li>
    <li>Plugin and CMS updates</li>
    <li>Uptime monitoring</li>
    <li>Email support, 48-hour response</li>
    <li>Minor content edits (text and images)</li>
    <li>Monthly performance report</li>
    <li>No minimum commitment, cancel anytime</li>
    <li>Overage rate: $165/hr</li>
</ul>`,
            },
            {
              name: "2. eCommerce Care",
              price: "750",
              description: "3 hours/month of development or design. Everything in Website Care plus eCommerce support, SEO monitoring, and 24-hour response. Per month.",
              accordionContent: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Everything in Website Care, plus:</li>
    <li>3 hours of development or design work</li>
    <li>Product catalogue maintenance support</li>
    <li>eCommerce platform updates (Shopify/BigCommerce/WooCommerce)</li>
    <li>Payment gateway and shipping monitoring</li>
    <li>Monthly performance audit (speed &amp; Core Web Vitals)</li>
    <li>Basic SEO monitoring</li>
    <li>24-hour support response</li>
    <li>1 month hour rollover</li>
    <li>3-month minimum commitment</li>
    <li>Overage rate: $165/hr</li>
</ul>`,
            },
            {
              name: "3. Growth Essentials",
              price: "1,800",
              description: "8 hours/month for development, design, or SEO. Monthly strategy call, analytics review, and content creation. Per month.",
              accordionContent: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Everything in eCommerce Care, plus:</li>
    <li>8 hours of development, design, or SEO work</li>
    <li>SEO foundations and keyword tracking</li>
    <li>Monthly strategy call</li>
    <li>Monthly performance audit + analytics review</li>
    <li>Content updates and page creation</li>
    <li>24-hour support response</li>
    <li>1 month hour rollover</li>
    <li>3-month minimum commitment</li>
    <li>Overage rate: $155/hr</li>
</ul>`,
            },
            {
              name: "4. Growth Partner",
              price: "3,000",
              description: "15 hours/month for development, design, and strategy. Same-day priority support, bi-weekly calls, full SEO, and CRO review. Per month.",
              accordionContent: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Everything in Growth Essentials, plus:</li>
    <li>15 hours of development, design, and strategy</li>
    <li>On-call priority support (same business day)</li>
    <li>Bi-weekly 30-minute strategy calls</li>
    <li>Full SEO with keyword tracking and reporting</li>
    <li>Monthly CRO review</li>
    <li>2 months hour rollover</li>
    <li>15% off additional project work</li>
    <li>3-month minimum commitment</li>
    <li>Overage rate: $155/hr</li>
</ul>`,
            },
          ]}
        />
      </section>

      {/* Investment ROI */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="mb-10 flex flex-col gap-3">
          <SectionLabel index="03" label="The maths" />
          <h2 className="text-display-m text-foreground">
            A Retainer That Pays for Itself
          </h2>
          <p className="max-w-2xl text-lead text-muted-foreground">
            A retainer gives you a full range of digital skills for a fraction
            of what hiring in-house would cost. No salaries, no super, no
            drawn-out hiring.
          </p>
        </div>
        <div className="mb-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-sm border border-border bg-card p-6 text-center">
            <p className="tnum text-metric text-accent">$36k</p>
            <p className="mt-1 text-small text-muted-foreground">per year</p>
            <p className="mt-3 text-small text-foreground">
              Growth Partner retainer
            </p>
          </div>
          <div className="rounded-sm border border-border bg-card p-6 text-center">
            <p className="tnum text-metric text-accent">$80 to 100k</p>
            <p className="mt-1 text-small text-muted-foreground">per year</p>
            <p className="mt-3 text-small text-foreground">
              Full-time hire before super and leave
            </p>
          </div>
          <div className="rounded-sm border border-accent/40 bg-accent/[0.04] p-6 text-center">
            <p className="text-metric text-accent">Full skill set</p>
            <p className="mt-1 text-small text-muted-foreground">
              not one specialty
            </p>
            <p className="mt-3 text-small text-foreground">
              Dev, design, SEO, and content
            </p>
          </div>
        </div>
        <div className="max-w-2xl space-y-4 text-body text-muted-foreground">
          <p>
            A full-time developer costs $80,000 to $100,000 a year before super,
            leave, equipment, and training, and you get one person with one
            skill set. My Growth Partner retainer gives you the full range, dev,
            design, SEO, and content, for $36,000 a year, and you use the hours
            however your business needs them that month.
          </p>
          <p>
            The real question isn&apos;t &ldquo;can I afford a retainer?&rdquo;
            It&apos;s &ldquo;can I afford to let my website sit stagnant between
            projects?&rdquo;
          </p>
        </div>
      </section>

      {/* What Can Affect Which Tier */}
      <section className={`bg-muted ${SECTION} border-b border-border`}>
        <div className="mb-8 flex flex-col gap-3">
          <SectionLabel index="04" label="Which tier" />
          <h2 className="text-heading-m text-foreground">
            What Can Affect Which Tier You Need
          </h2>
          <p className="max-w-2xl text-body text-muted-foreground">
            Not sure which retainer fits? These factors help determine the right
            level of support for your business.
          </p>
        </div>
        <div className="grid max-w-4xl grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
          {[
            "How often you need content or design changes",
            "Whether you need active SEO and keyword tracking",
            "eCommerce platforms requiring product and catalogue work",
            "Multiple websites or microsites to maintain",
            "Seasonal campaigns needing landing pages and updates",
            "Growth goals requiring ongoing development work",
            "Need for strategy calls and performance reviews",
            "Priority response time requirements",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <IconCircleCheckFilled
                className="mt-0.5 shrink-0 text-muted-foreground"
                size={18}
              />
              <p className="text-small text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className={`${SECTION} border-b border-border`}>
        <h2 className="mb-8 text-heading-m text-foreground">Related Services</h2>
        <div className="grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { name: "Website Design", href: "/web-development", description: "Custom websites built to perform" },
            { name: "Website Maintenance", href: "/website-maintenance", description: "Keep your site secure and up to date" },
            { name: "SEO & Content", href: "/seo-and-content", description: "Get found by the right customers" },
          ].map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-sm border border-border bg-card p-6 text-center transition-colors duration-fast hover:border-foreground/30"
            >
              <h3 className="text-heading-s text-foreground">{service.name}</h3>
              <p className="mt-2 text-small text-muted-foreground">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex flex-col gap-3">
            <SectionLabel index="05" label="FAQ" />
            <h2 className="text-display-m text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion titleClassName="py-6 text-lg" items={faqItems} />
        </div>
      </section>

      {/* Closing CTA */}
      <section className={`dark bg-background text-foreground ${SECTION}`}>
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          <ProofCluster testimonial={testimonials[0]} theme="dark" />
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-display-m text-foreground">
                Ready to bring me on board?
              </h2>
              <p className="mt-4 text-body text-muted-foreground">
                Tell me your priorities and I&apos;ll take it from there.
              </p>
            </div>
            <Button asChild size="lg" variant="primary">
              <Link href="/launch-your-vision">Book a Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky CTA for Mobile */}
      <StickyCTA
        link="/launch-your-vision"
        startingPrice={350}
        label="Book a Strategy Call"
      />

      {/* Product JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "RAVENCI Retainer Packages",
            description:
              "Monthly retainer packages for ongoing web development, design, and strategy. Includes hosting, maintenance, and dedicated development hours.",
            image: "https://ravenci.solutions/og/retainer-packages.png",
            brand: {
              "@type": "Brand",
              name: "RAVENCI Solutions",
            },
            offers: tiers.map((tier) => ({
              "@type": "Offer",
              name: `${tier.name} Retainer`,
              price: tier.price,
              priceCurrency: "AUD",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: tier.price,
                priceCurrency: "AUD",
                billingDuration: "P1M",
              },
              availability: "https://schema.org/InStock",
              url: "https://ravenci.solutions/retainer-packages",
              shippingDetails: {
                "@type": "OfferShippingDetails",
                shippingRate: {
                  "@type": "MonetaryAmount",
                  value: 0,
                  currency: "AUD",
                },
                deliveryTime: {
                  "@type": "ShippingDeliveryTime",
                  handlingTime: {
                    "@type": "QuantitativeValue",
                    minValue: 0,
                    maxValue: 0,
                    unitCode: "DAY",
                  },
                  transitTime: {
                    "@type": "QuantitativeValue",
                    minValue: 0,
                    maxValue: 0,
                    unitCode: "DAY",
                  },
                },
                shippingDestination: {
                  "@type": "DefinedRegion",
                  addressCountry: "AU",
                },
              },
              hasMerchantReturnPolicy: {
                "@type": "MerchantReturnPolicy",
                applicableCountry: "AU",
                returnPolicyCategory:
                  "https://schema.org/MerchantReturnNotPermitted",
                merchantReturnDays: 0,
              },
            })),
          }),
        }}
      />

      {/* FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.title,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.content,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
