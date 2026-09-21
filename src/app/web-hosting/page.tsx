import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import Link from "next/link";
import Image from "next/image";
import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import Accordion from "@/components/accordion";
import Breadcrumbs from "@/components/breadcrumbs";
import SectionLabel from "@/components/section-label";
import { Button } from "@/components/ui/button";
import StickyCTA from "@/components/sticky-cta";
import { getTestimonialsForPage } from "@/data/testimonials";
import ProofCluster from "@/components/proof-cluster";

const SECTION = "px-5 py-14 md:px-12 md:py-20 lg:px-20";

export const metadata = {
  title: "Web Hosting | RAVENCI Solutions",
  description:
    "Managed cloud hosting from Brisbane. Fast servers worldwide, 24/7 monitoring, reliable security, and local support. From $39/mo.",
  alternates: { canonical: "/web-hosting" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Web Hosting | RAVENCI Solutions",
    description:
      "Managed cloud hosting from Brisbane. Fast servers worldwide, 24/7 monitoring, reliable security, and local support. From $39/mo.",
    url: "/web-hosting",
    type: "website",
  },
  twitter: {
    ...TWITTER_DEFAULTS,
  },
};

export default function WebHostingPage() {
  const testimonials = getTestimonialsForPage("web-hosting");
  const features = [
    {
      title: "Fast for Every Customer",
      description:
        "Your site loads quickly whether your visitor's in Brisbane, Sydney, London or Tokyo. I serve it from wherever they are",
    },
    {
      title: "I Run It So You Don't Have To",
      description:
        "From migration to launch to the next five years, I handle the boring infrastructure bit so you don't have to think about it",
    },
    {
      title: "Pages That Load Instantly",
      description: "Smart performance built in, so your customers never sit waiting for your homepage to appear",
    },
    {
      title: "Properly Secured",
      description: "Encrypted connection, secure setup, and the lock icon your customers expect to see in their browser",
    },
    {
      title: "Protected From the Bad Guys",
      description:
        "Active protection against hacking attempts, malicious traffic, and the everyday garbage trying to break websites",
    },
    {
      title: "Watched Around the Clock",
      description: "If something goes wrong at 3am, I know about it before your customers do",
    },
    {
      title: "Handles Sudden Traffic Spikes",
      description: "When you get featured, go viral, or run a campaign, the site doesn't fall over. It just handles it",
    },
    {
      title: "Daily Backups, No Drama",
      description:
        "If anything ever goes wrong, your site can be back the way it was yesterday in minutes. In minutes, not days",
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
                name: "Web Hosting",
                item: "https://ravenci.solutions/web-hosting",
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="flex max-w-3xl flex-col gap-4">
          <Breadcrumbs items={[{ label: "Web Hosting" }]} />
          <SectionLabel label="Web Hosting" tick />
          <h1 className="text-display-l text-foreground">Host With Me!</h1>
          <p className="text-lead text-muted-foreground">
            Modern web hosting that grows with you.
          </p>
          <p className="text-body text-muted-foreground">
            RAVENCI Solutions provides managed cloud hosting for Australian
            businesses. Fast servers worldwide, 24/7 monitoring, reliable
            security, and Brisbane-based support. All-inclusive pricing from
            $39/mo with no hidden fees, no surprise charges, and no complex
            add-ons to buy.
          </p>
        </div>
      </section>

      {/* Social proof */}
      <section
        className={`dark bg-background text-foreground ${SECTION} border-b border-white/10`}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-heading-m text-foreground">
            Hosting websites for 75+ Australian businesses including law firms,
            medical practices and retail stores
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

      {/* Two-column: why (dark) + what's included (light) */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <section
          className={`dark bg-background text-foreground ${SECTION} border-b border-white/10`}
        >
          <div className="max-w-lg">
            <h2 className="text-heading-m text-foreground">
              Hosting Should Be Simple
            </h2>
            <div className="mt-4 text-body text-muted-foreground">
              Stop dealing with:
              <ul className="mt-4 flex flex-col gap-2">
                <li>- Websites that crash during high traffic</li>
                <li>- Slow loading times that lose customers</li>
                <li>- Complex hosting panels you can&apos;t understand</li>
                <li>- Surprise overage charges and hidden fees</li>
                <li>- Offshore support that can&apos;t relate to you</li>
              </ul>
            </div>

            <h2 className="mt-8 text-heading-s text-foreground">
              Why Choose RAVENCI Over Other Hosts?
            </h2>
            <ul className="mt-4 flex flex-col gap-4 text-body text-muted-foreground">
              <li className="flex items-start gap-3">
                <IconCheck
                  size={20}
                  aria-hidden
                  className="mt-0.5 shrink-0 text-foreground"
                />
                Brisbane-based support you can reach directly
              </li>
              <li className="flex items-start gap-3">
                <IconCheck
                  size={20}
                  aria-hidden
                  className="mt-0.5 shrink-0 text-foreground"
                />
                All-inclusive pricing with no hidden fees
              </li>
              <li className="flex items-start gap-3">
                <IconCheck
                  size={20}
                  aria-hidden
                  className="mt-0.5 shrink-0 text-foreground"
                />
                Automatic scaling as your site grows
              </li>
              <li className="flex items-start gap-3">
                <IconCheck
                  size={20}
                  aria-hidden
                  className="mt-0.5 shrink-0 text-foreground"
                />
                Built for business websites
              </li>
            </ul>

            <h2 className="mt-8 text-heading-s text-foreground">
              Fast for Every Customer, Everywhere
            </h2>
            <p className="mt-4 text-body text-muted-foreground">
              Your site loads quickly whether your visitor is around the corner
              or across the world. I handle the boring infrastructure side of
              that. You just get a site that performs.
            </p>

            <h2 className="mt-8 text-heading-s text-foreground">
              Fair, Simple Pricing
            </h2>
            <p className="mt-4 text-body text-muted-foreground">
              Instead of complex tiers, my hosting scales naturally with your
              website&apos;s needs. I start with generous resources that work for
              most businesses, and as your site grows, your hosting grows with
              it, no complicated decisions required. You&apos;ll never pay for
              resources you don&apos;t need, and I&apos;ll proactively let you
              know if I spot opportunities to optimise your site&apos;s
              performance.
            </p>
          </div>
        </section>

        <section className={`${SECTION} border-b border-border`}>
          <div className="max-w-lg">
            <h2 className="text-heading-m text-foreground">
              What&apos;s Included with Every Hosting
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

      {/* Pricing */}
      <section
        className={`dark bg-background text-foreground ${SECTION} border-b border-white/10`}
      >
        <div className="mb-12 flex flex-col gap-3">
          <SectionLabel index="01" label="Pricing" tone="muted" />
          <h2 className="text-display-m text-foreground">
            Simple, All-Inclusive Hosting
          </h2>
        </div>
        <div className="mx-auto max-w-md rounded-sm border border-border bg-card p-8">
          <h3 className="text-heading-s text-foreground">
            Managed Cloud Hosting
          </h3>
          <p className="mt-2 text-body text-muted-foreground">
            Everything you need to keep your website fast, secure, and online.
            Cloud hosting, SSL, daily backups, security monitoring, automatic
            scaling, and Brisbane-based support, all included.
          </p>
          <div className="mt-8 flex items-baseline gap-1">
            <span className="tnum text-metric text-foreground">$39</span>
            <span className="text-body text-muted-foreground">/mo.</span>
          </div>
          <Button asChild size="lg" variant="primary" className="mt-6 w-full">
            <Link href="/quote?service=web-hosting">Get a hosting quote</Link>
          </Button>
        </div>
      </section>

      {/* Showcase */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="mb-10 flex flex-col gap-3">
          <SectionLabel index="02" label="Hosted businesses" />
          <h2 className="text-display-m text-foreground">
            Some of the Businesses I Host
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Peninsula Homes", image: "/showcase-images/Client - Peninsula Homes.png" },
            { name: "SAC Consulting", image: "/showcase-images/Client - SAC Consulting.png" },
            { name: "Beauty Retreat Bribie Islands", image: "/showcase-images/Client - Beauty Retreat Bribie Islands.png" },
            { name: "The DIRT Agency", image: "/showcase-images/Client - The DIRT Agency.png" },
          ].map((project) => (
            <div
              key={project.name}
              className="group overflow-hidden rounded-sm border border-border bg-card"
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.name} hosted by RAVENCI`}
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

      {/* Notice */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="mx-auto max-w-xl rounded-sm border border-border bg-muted p-6 md:p-8">
          <p className="text-center text-body text-muted-foreground">
            Please note:{" "}
            <span className="font-medium text-foreground">
              As of October, 2024
            </span>
            , I no longer host websites that are not signed up to reliable
            ongoing maintenance. This does not have to be through RAVENCI, but it
            must be from a reputable provider.
          </p>
        </div>
      </section>

      {/* Investment ROI */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="mb-10 flex flex-col gap-3">
          <SectionLabel index="03" label="The real cost" />
          <h2 className="text-display-m text-foreground">
            Cheap Hosting Has a Real Price
          </h2>
          <p className="max-w-2xl text-lead text-muted-foreground">
            Hosting is the foundation everything else sits on. Get it right and
            your site stays fast and online every day. Get it wrong and you feel
            it in lost customers.
          </p>
        </div>
        <div className="mb-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-sm border border-border bg-card p-6 text-center">
            <p className="tnum text-metric text-accent">$1.30</p>
            <p className="mt-1 text-small text-muted-foreground">per day</p>
            <p className="mt-3 text-small text-foreground">
              Managed cloud hosting
            </p>
          </div>
          <div className="rounded-sm border border-border bg-card p-6 text-center">
            <p className="tnum text-metric text-accent">$468</p>
            <p className="mt-1 text-small text-muted-foreground">per year</p>
            <p className="mt-3 text-small text-foreground">
              Total annual hosting cost
            </p>
          </div>
          <div className="rounded-sm border border-accent/40 bg-accent/[0.04] p-6 text-center">
            <p className="tnum text-metric text-accent">99.9%</p>
            <p className="mt-1 text-small text-muted-foreground">uptime</p>
            <p className="mt-3 text-small text-foreground">
              Your site stays online and earning
            </p>
          </div>
        </div>
        <div className="max-w-2xl space-y-4 text-body text-muted-foreground">
          <p>
            Every hour your website is down costs you customers. If your site
            generates even one enquiry a day, a single day of downtime from cheap
            hosting costs you more than an entire year of managed hosting with
            RAVENCI.
          </p>
          <p>
            The real question isn&apos;t &ldquo;can I afford proper
            hosting?&rdquo; It&apos;s &ldquo;can I afford the lost revenue when
            my $5/month host goes down during a campaign?&rdquo;
          </p>
        </div>
      </section>

      {/* What Can Affect Pricing */}
      <section className={`bg-muted ${SECTION} border-b border-border`}>
        <div className="mb-8 flex flex-col gap-3">
          <SectionLabel index="04" label="Pricing factors" />
          <h2 className="text-heading-m text-foreground">
            What Can Affect Pricing
          </h2>
          <p className="max-w-2xl text-body text-muted-foreground">
            My hosting starts at $39/mo for most business websites. These factors
            can move the price above that starting point.
          </p>
        </div>
        <div className="grid max-w-4xl grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
          {[
            "High-traffic websites requiring more server resources",
            "eCommerce platforms with payment gateway requirements",
            "Multiple websites or staging environments",
            "Custom server configurations or specific software needs",
            "Dedicated IP addresses or advanced SSL setups",
            "Geographic-specific hosting requirements",
            "Large file storage (video, high-res images, downloads)",
            "Migration from complex existing hosting setups",
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
            { name: "Website Maintenance", href: "/website-maintenance", description: "Keep your site secure and up to date" },
            { name: "Website Design", href: "/web-development", description: "Custom websites built to perform" },
            { name: "Retainer Packages", href: "/retainer-packages", description: "Ongoing development and support" },
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
          <Accordion
            titleClassName="py-6 text-lg"
            items={[
              {
                title: `How is this different from cheap hosting like Bluehost?`,
                summary: `RAVENCI uses enterprise-grade cloud infrastructure with automatic scaling, dedicated resources, Brisbane-based support, and all-inclusive pricing. SSL, backups, and security are included. No extra charges.`,
                content: `My hosting uses enterprise-grade cloud infrastructure with automatic scaling, not overcrowded shared servers. You get dedicated resources, Brisbane-based support, and performance optimisation that cheap hosts can't match. Plus everything is included: SSL, backups, security. No extra charges.`,
              },
              {
                title: `What if my traffic suddenly spikes?`,
                summary: `RAVENCI cloud hosting automatically scales to handle traffic spikes without crashing or downtime. Servers grow with your traffic, unlike shared hosting which can go offline during surges.`,
                content: `My cloud hosting automatically scales to handle traffic spikes without your site crashing. My servers grow with your traffic so you never have to worry about any downtime. Compare this to shared hosting where traffic spikes can take your site offline.`,
              },
              {
                title: `Do you migrate my existing website?`,
                summary: `Yes. RAVENCI handles complete website migration from your current host, though extra charges may apply. Your site will be faster and more secure from day one with zero downtime.`,
                content: `Yes, I handle the complete migration from your current host though extra charges may apply. Your site will be faster and more secure from day one, and I'll make sure nothing breaks in the process.`,
              },
              {
                title: `What's included in the $39/month price?`,
                summary: `Everything: cloud hosting, SSL certificate, daily backups, security monitoring, automatic scaling, and Brisbane-based support. No hidden fees, no surprise charges, no add-ons required.`,
                content: `Everything: cloud hosting, SSL certificate, daily backups, security monitoring, automatic scaling, and Brisbane-based support. No hidden fees, no surprise charges, no complex add-ons to buy.`,
              },
              {
                title: `Can I host my website elsewhere and still get your other services?`,
                summary: `Yes, RAVENCI can work with other quality hosts. However, hosting and maintenance bundles offer the best value and performance since everything is optimised to work together.`,
                content: `While I prefer to host sites I maintain to guarantee optimal performance and security, I can work with other quality hosts. However, my hosting + maintenance bundles offer the best value and performance since everything is optimised to work together.`,
              },
            ]}
          />
        </div>
      </section>

      {/* Closing CTA */}
      <section className={`dark bg-background text-foreground ${SECTION}`}>
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          <ProofCluster testimonial={testimonials[0]} theme="dark" />
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-display-m text-foreground">
                Ready to host with me?
              </h2>
              <p className="mt-4 text-body text-muted-foreground">
                Tell me about your site and I&apos;ll put together a hosting
                quote.
              </p>
            </div>
            <Button asChild size="lg" variant="primary">
              <Link href="/quote?service=web-hosting">Get a Hosting Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky CTA for Mobile */}
      <StickyCTA
        link="/quote?service=web-hosting"
        startingPrice={39}
        label="Get a Hosting Quote"
        priceNote="per month"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "RAVENCI Managed Cloud Hosting",
            description:
              "Managed cloud hosting with automatic scaling, SSL, daily backups, security monitoring, and Brisbane-based support.",
            image: "https://ravenci.solutions/og/web-hosting.png",
            brand: {
              "@type": "Brand",
              name: "RAVENCI Solutions",
            },
            offers: {
              "@type": "Offer",
              price: 39,
              priceCurrency: "AUD",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: 39,
                priceCurrency: "AUD",
                billingDuration: "P1M",
              },
              availability: "https://schema.org/InStock",
              url: "https://ravenci.solutions/web-hosting",
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
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How is this different from cheap hosting like Bluehost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "My hosting uses enterprise-grade cloud infrastructure with automatic scaling, not overcrowded shared servers. You get dedicated resources, Brisbane-based support, and performance optimisation that cheap hosts can't match. Plus everything is included: SSL, backups, security. No extra charges.",
                },
              },
              {
                "@type": "Question",
                name: "What if my traffic suddenly spikes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "My cloud hosting automatically scales to handle traffic spikes without your site crashing. My servers grow with your traffic so you never have to worry about any downtime. Compare this to shared hosting where traffic spikes can take your site offline.",
                },
              },
              {
                "@type": "Question",
                name: "Do you migrate my existing website?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, I handle the complete migration from your current host though extra charges may apply. Your site will be faster and more secure from day one, and I'll make sure nothing breaks in the process.",
                },
              },
              {
                "@type": "Question",
                name: "What's included in the $39/month price?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Everything: cloud hosting, SSL certificate, daily backups, security monitoring, automatic scaling, and Brisbane-based support. No hidden fees, no surprise charges, no complex add-ons to buy.",
                },
              },
              {
                "@type": "Question",
                name: "Can I host my website elsewhere and still get your other services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "While I prefer to host sites I maintain to guarantee optimal performance and security, I can work with other quality hosts. However, my hosting + maintenance bundles offer the best value and performance since everything is optimised to work together.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
