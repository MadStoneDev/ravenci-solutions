import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import PricingCards from "@/components/pricing-cards";
import StickyCTA from "@/components/sticky-cta";

import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import Accordion from "@/components/accordion";
import Breadcrumbs from "@/components/breadcrumbs";
import { getTestimonialsForPage } from "@/data/testimonials";

export const metadata = {
  title: "Website Maintenance | RAVENCI Solutions",
  description:
    "Website maintenance in Brisbane. Updates, security, backups, and optimization in one package. Protect your website investment with RAVENCI Solutions.",
  alternates: { canonical: "/website-maintenance" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Website Maintenance | RAVENCI Solutions",
    description:
      "Website maintenance in Brisbane. Updates, security, backups, and optimization in one package. Protect your website investment with RAVENCI Solutions.",
    url: "/website-maintenance",
    type: "website",
  },
  twitter: {
    ...TWITTER_DEFAULTS,
  },
};

export default function WebMaintenancePage() {
  const testimonials = getTestimonialsForPage("website-maintenance");
  const features = [
    {
      title: "Software Updates",
      description:
        "We keep your website, plugins, and themes updated to ensure compatibility and security",
    },
    {
      title: "Security Monitoring",
      description:
        "Continuous security scans and protection against malware, hacks, and vulnerabilities",
    },
    {
      title: "Performance Checks",
      description:
        "Regular optimization of speed, database, and overall site performance",
    },
    {
      title: "Daily Backups",
      description:
        "Your site is backed up daily with quick restore points if ever needed",
    },
    {
      title: "Uptime Monitoring",
      description:
        "24/7 monitoring ensures your site stays online and performs optimally",
    },
    {
      title: "Technical Support",
      description:
        "Expert support for any issues, changes, or improvements you need",
    },
    {
      title: "Content Updates",
      description:
        "Regular checks of forms, links, and content to ensure everything works correctly",
    },
    {
      title: "Browser Testing",
      description:
        "Regular testing across different browsers and devices to ensure consistent experience",
    },
    {
      title: "Monthly Reports",
      description:
        "Receive monthly maintenance reports outlining the work done and any issues encountered",
    },
  ];

  return (
    <main className={`flex flex-col`}>
      {/* BreadcrumbList JSON-LD */}
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
                name: "Website Maintenance",
                item: "https://ravenci.solutions/website-maintenance",
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section
        className={`content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 min-h-[250px] bg-white`}
      >
        <article className={`col-span-12 flex flex-col`}>
          <Breadcrumbs items={[{ label: "Website Maintenance" }]} />
          <h1 className={`mt-4 text-4xl md:text-5xl lg:text-h1 font-medium`}>
            Straight Forward Maintenance
          </h1>
          <h2
            className={`max-w-3xl text-2xl md:text-3xl lg:text-h2 font-light`}
          >
            Protect your website investment
          </h2>
          <p className={`mt-6 max-w-2xl text-neutral-500/80`}>
            Website maintenance in Brisbane for businesses that depend on their
            site. Updates, security, backups, and performance monitoring in one
            package. Monthly plans from $249/mo, or one-off service for $495.
            Brisbane-based. 25+ years.
          </p>
        </article>
      </section>

      {/* Social Proof Bar */}
      <section
        className={`p-10 flex flex-col items-center gap-3 bg-ravenci-primary text-white text-center`}
      >
        <div className={`max-w-lg`}>
          <h3
            className={`pb-6 border-b border-white/20 font-serif font-medium text-xl`}
          >
            Maintaining websites for 75+ Australian businesses including law
            firms, medical practices and retail stores
          </h3>
          {testimonials[0] && (
            <>
              <p
                className={`my-6 font-sans font-light leading-8 text-ravenci-light-gray`}
              >
                &ldquo;{testimonials[0].content}&rdquo;
              </p>
              <h3 className={`font-sans text-2xl font-light text-neutral-100`}>
                <span className={`font-bold`}>
                  {testimonials[0].author.split(" ")[0]}
                </span>{" "}
                {testimonials[0].author.split(" ").slice(1).join(" ")}
              </h3>
              {testimonials[0].role && (
                <p className="mt-1 text-sm text-white/60">
                  {testimonials[0].role}
                </p>
              )}
            </>
          )}
        </div>
      </section>

      {/* Two-Column Section (Rebalanced) */}
      <div className={`grid grid-cols-1 lg:grid-cols-2`}>
        {/* Left Column — Dark: Pain Points + Why Choose */}
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark`}
        >
          <article className={`max-w-lg`}>
            <h2 className={`font-serif text-h3 font-bold text-white`}>
              Did You Know
            </h2>
            <p className={`my-4 text-neutral-400/90`}>
              Websites face over 40,000 attacks daily and without proper
              maintenance, your website is vulnerable to:
            </p>
            <ul className={`mt-4 flex flex-col gap-2 text-neutral-400/90`}>
              <li>- Security breaches that could be costly to recover</li>
              <li>- Downtime causing loss of sales</li>
              <li>- Slow speeds that drive customers to competitors</li>
              <li>- Outdated plugins creating compatibility issues</li>
            </ul>
            <h2 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              Why Businesses Choose RAVENCI Over DIY Maintenance:
            </h2>
            <ul className={`flex flex-col gap-4 mb-6 text-neutral-400/90`}>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />{" "}
                Professional monitoring and 24/7 alerts
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />{" "}
                2-hour response time during business hours
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />{" "}
                Brisbane-based support you can reach directly
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />{" "}
                Proactive updates before problems happen
              </li>
            </ul>
            <h2 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              Proactive Protection
            </h2>
            <p className={`mb-4 text-neutral-400/90`}>
              Don't wait for problems to occur. Our maintenance service actively
              monitors your site for security threats, performance issues, and
              needed updates to make sure your website is always available.
            </p>
            <h2 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              Comprehensive Care
            </h2>
            <p className={`mb-4 text-neutral-400/90`}>
              Our ongoing maintenance service ensures your website doesn't fall
              behind. Although we offer one-off maintenance options, we highly
              recommend that you sign up to our ongoing plans instead as it will
              save you time and money in the long run.
            </p>
          </article>
        </section>

        {/* Right Column — Light: Features */}
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-white`}
        >
          <article className={`max-w-lg`}>
            <h2 className={`mb-8 font-serif text-h3 font-bold`}>
              How We Protect Your Business
            </h2>
            <ul className={`flex flex-col gap-8`}>
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <IconCircleCheckFilled
                    className="text-ravenci-primary flex-shrink-0"
                    size={24}
                  />
                  <p className={`text-neutral-600`}>
                    <span className="font-bold text-ravenci-dark">
                      {feature.title}:
                    </span>{" "}
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </div>

      {/* Showcase Section */}
      <section className="py-20 px-5 sm:px-20 xl:px-36 bg-white">
        <h2 className="mb-10 font-serif text-h3 font-bold text-center">
          Some of the Businesses We Maintain
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Peninsula Homes",
              image: "/showcase-images/Client - Peninsula Homes.png",
            },
            {
              name: "Nikita Morell",
              image: "/showcase-images/Client - Nikita Morell.png",
            },
            {
              name: "The DIRT Agency",
              image: "/showcase-images/Client - The DIRT Agency.png",
            },
            {
              name: "SAC Consulting",
              image: "/showcase-images/Client - SAC Consulting.png",
            },
          ].map((project) => (
            <div
              key={project.name}
              className="group relative overflow-hidden rounded-xl"
            >
              <Image
                src={project.image}
                alt={`${project.name} maintained by RAVENCI`}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10">
                <p className="text-sm font-medium text-white">{project.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full-Width Pricing Section */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark`}
      >
        <h2
          className={`mb-12 font-serif text-h3 font-bold text-white text-center`}
        >
          Choose Your Package
        </h2>
        <PricingCards
          tiers={[
            {
              name: "1. Monthly Maintenance",
              price: "249",
              description:
                "Ongoing website maintenance with updates, security monitoring, backups, and performance checks. Per month.",
              accordionContent: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Software, plugin, and theme updates</li>
    <li>Security monitoring and malware protection</li>
    <li>Daily backups with quick restore</li>
    <li>Performance checks and optimisation</li>
    <li>24/7 uptime monitoring</li>
    <li>Technical support</li>
    <li>Content and link checks</li>
    <li>Cross-browser testing</li>
    <li>Monthly maintenance report</li>
</ul>`,
            },
            {
              name: "2. One-Off Maintenance",
              price: "495",
              description:
                "A single comprehensive maintenance pass for when you need it. Updates, security checks, performance optimisation, and a health report.",
              accordionContent: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Full software and plugin update</li>
    <li>Security audit and malware scan</li>
    <li>Performance optimisation pass</li>
    <li>Backup verification</li>
    <li>Browser compatibility check</li>
    <li>Detailed health report</li>
</ul>`,
            },
          ]}
        />
      </section>

      {/* Maintenance + Hosting Notice */}
      <section
        className={`content-section py-16 px-5 sm:px-20 xl:px-36 bg-ravenci-primary`}
      >
        <article className={`mx-auto max-w-xl`}>
          <p className={`text-center text-neutral-50/70`}>
            Please note:{" "}
            <span className={`text-white`}>As of October, 2024</span>, we no
            longer host websites that are not signed up to reliable ongoing
            maintenance. This does not have to be through RAVENCI, but it must
            be from a reputable provider.
          </p>
        </article>
      </section>

      {/* Investment ROI */}
      <section className="content-section py-20 px-5 sm:px-20 xl:px-36 bg-white">
        <h2 className="mb-4 font-serif text-h3 font-bold text-center">
          Think of It as an Investment, Not an Expense
        </h2>
        <p className="mb-12 text-center text-neutral-500/80 max-w-2xl mx-auto">
          Website maintenance isn&apos;t a cost you absorb. It&apos;s insurance
          that protects the revenue your website generates every month.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="p-6 rounded-xl border border-neutral-200 text-center">
            <p className="text-3xl font-bold text-ravenci-primary">$8.30</p>
            <p className="mt-1 text-sm text-neutral-500">per day</p>
            <p className="mt-3 text-sm text-neutral-700">
              Monthly maintenance plan
            </p>
          </div>
          <div className="p-6 rounded-xl border border-neutral-200 text-center">
            <p className="text-3xl font-bold text-ravenci-primary">$2,988</p>
            <p className="mt-1 text-sm text-neutral-500">per year</p>
            <p className="mt-3 text-sm text-neutral-700">
              Total annual maintenance cost
            </p>
          </div>
          <div className="p-6 rounded-xl border border-ravenci-primary/30 bg-ravenci-primary/5 text-center">
            <p className="text-3xl font-bold text-ravenci-primary">$5-15k</p>
            <p className="mt-1 text-sm text-neutral-500">typical cost</p>
            <p className="mt-3 text-sm text-neutral-700">
              Of a single security breach to fix
            </p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto text-neutral-600 space-y-4">
          <p>
            A single security breach typically costs $5,000&ndash;$15,000 to
            fix, plus the damage to your reputation and lost sales while
            your site is down. Our annual maintenance cost is less than what
            most businesses spend on one emergency fix.
          </p>
          <p>
            The real question isn&apos;t &ldquo;can I afford website
            maintenance?&rdquo; It&apos;s &ldquo;can I afford the downtime
            and recovery costs when something goes wrong?&rdquo;
          </p>
        </div>
      </section>

      {/* What Can Affect Pricing */}
      <section
        className={`content-section py-16 px-5 sm:px-20 xl:px-36 bg-neutral-50`}
      >
        <h2 className={`mb-8 font-serif text-h3 font-bold text-center`}>
          What Can Affect Pricing
        </h2>
        <p
          className={`mb-8 text-center text-neutral-500/80 max-w-2xl mx-auto`}
        >
          Every website is different. These are the most common factors that
          can affect maintenance pricing.
        </p>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto`}
        >
          {[
            "Complex websites with many plugins or integrations",
            "eCommerce platforms with payment gateway monitoring",
            "Sites with high traffic requiring performance tuning",
            "Legacy platforms requiring specialised update procedures",
            "Multi-site or multi-domain setups",
            "Custom application maintenance beyond standard CMS",
            "Content updates beyond basic text and image changes",
            "Emergency or after-hours support requirements",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <IconCircleCheckFilled
                className="text-neutral-400 flex-shrink-0 mt-0.5"
                size={18}
              />
              <p className="text-neutral-600 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className="content-section py-12 px-5 sm:px-20 xl:px-36 bg-neutral-50">
        <h2 className="mb-8 font-serif text-h3 font-bold text-center">
          Related Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              name: "Web Hosting",
              href: "/web-hosting",
              description: "Fast, reliable cloud hosting",
            },
            {
              name: "Website Design",
              href: "/web-development",
              description: "Custom websites built to perform",
            },
            {
              name: "SEO & Content",
              href: "/seo-and-content",
              description: "Get found by the right customers",
            },
          ].map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="p-6 rounded-xl border border-neutral-200 bg-white hover:border-ravenci-primary/30 transition-colors text-center"
            >
              <h3 className="font-bold text-ravenci-dark mb-2">
                {service.name}
              </h3>
              <p className="text-sm text-neutral-500">{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className={`content-section py-16 px-6 md:px-10 flex flex-col items-center justify-center gap-3 bg-white`}
      >
        <h2 className={`font-serif text-h3`}>Frequently Asked Questions</h2>
        <Accordion
          titleClassName={`py-6 text-lg`}
          items={[
            {
              title: `Can't I just do this myself?`,
              summary: `Most business owners lack the 5+ hours monthly needed for security monitoring, performance optimisation, and updates. Professional maintenance costs less than one emergency fix and protects against 2 AM breakdowns.`,
              content: `
You absolutely could, but most business owners don't have 5+ hours monthly for security monitoring, performance optimization, and technical updates. Plus, when something breaks at 2 AM on a weekend, you'll be scrambling to fix it while losing sales. Your time is worth more than $39/hour.
`,
            },
            {
              title: `What if my site goes down?`,
              summary: `RAVENCI monitors 24/7 and typically restores sites within 2 hours during business hours. Proactive monitoring catches 95% of issues before they cause any downtime.`,
              content: `
We monitor 24/7 and typically restore sites within 2 hours during business hours. Our monitoring catches 95% of issues before they cause downtime. Compare this to DIY maintenance where you might not even know your site is down until a customer tells you.
`,
            },
            {
              title: `Is this really necessary?`,
              summary: `WordPress sites without maintenance are 70% more likely to be hacked. A single security breach typically costs $5,000-$15,000 to fix. Professional maintenance costs less than one emergency fix per year.`,
              content: `
WordPress sites without maintenance are 70% more likely to be hacked. One security breach typically costs $5,000-$15,000 to fix, plus the damage to your reputation. Our maintenance costs less than one emergency website fix per year.
`,
            },
            {
              title: `What makes you different from other providers?`,
              summary: `RAVENCI is Brisbane-based with local support, not an overseas call centre. You get direct access to your developer, a 2-hour response time during business hours, and proactive monitoring that prevents problems.`,
              content: `
We're Brisbane-based with local support, not an overseas call center. You get direct access to our team and, if we built your website, you will get direct access to the same developer who built your site. We promise a 2-hour response time during business hours, and proactive monitoring that prevents problems rather than just reacting to them.
`,
            },
          ]}
        />
      </section>

      {/* Footer Spacer */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 grid grid-cols-5 gap-10 min-h-[150px] bg-white`}
      ></section>

      {/* Sticky CTA for Mobile */}
      <StickyCTA
        link="/launch-your-vision"
        startingPrice={249}
        label="Protect My Website"
      />

      {/* Product JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "RAVENCI Website Maintenance",
            description:
              "Website maintenance in Brisbane. Updates, security, backups, and optimization in one package. Protect your website investment.",
            image: "https://ravenci.solutions/og/website-maintenance.png",
            brand: {
              "@type": "Brand",
              name: "RAVENCI Solutions",
            },
            offers: [
              {
                "@type": "Offer",
                name: "Monthly Website Maintenance",
                price: 249,
                priceCurrency: "AUD",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: 249,
                  priceCurrency: "AUD",
                  billingDuration: "P1M",
                },
                availability: "https://schema.org/InStock",
                url: "https://ravenci.solutions/website-maintenance",
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
              },
              {
                "@type": "Offer",
                name: "One-Off Website Maintenance",
                price: 495,
                priceCurrency: "AUD",
                availability: "https://schema.org/InStock",
                url: "https://ravenci.solutions/website-maintenance",
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
              },
            ],
          }),
        }}
      />

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Can't I just do website maintenance myself?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You absolutely could, but most business owners don't have 5+ hours monthly for security monitoring, performance optimization, and technical updates. Plus, when something breaks at 2 AM on a weekend, you'll be scrambling to fix it while losing sales.",
                },
              },
              {
                "@type": "Question",
                name: "What if my site goes down?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We monitor 24/7 and typically restore sites within 2 hours during business hours. Our monitoring catches 95% of issues before they cause downtime.",
                },
              },
              {
                "@type": "Question",
                name: "Is website maintenance really necessary?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "WordPress sites without maintenance are 70% more likely to be hacked. One security breach typically costs $5,000-$15,000 to fix, plus the damage to your reputation. Our maintenance costs less than one emergency website fix per year.",
                },
              },
              {
                "@type": "Question",
                name: "What makes RAVENCI different from other maintenance providers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We're Brisbane-based with local support, not an overseas call center. You get direct access to our team and, if we built your website, you will get direct access to the same developer who built your site. We promise a 2-hour response time during business hours, and proactive monitoring that prevents problems rather than just reacting to them.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
