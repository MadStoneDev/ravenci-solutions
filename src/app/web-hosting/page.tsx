import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import Link from "next/link";
import Image from "next/image";
import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import Accordion from "@/components/accordion";
import Breadcrumbs from "@/components/breadcrumbs";
import StickyCTA from "@/components/sticky-cta";
import { getTestimonialsForPage } from "@/data/testimonials";

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
        "Your site loads quickly whether your visitor's in Brisbane, Sydney, London or Tokyo. We serve it from wherever they are",
    },
    {
      title: "We Run It So You Don't Have To",
      description:
        "From migration to launch to the next five years, we handle the boring infrastructure bit so you don't have to think about it",
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
      description: "If something goes wrong at 3am, we know about it before your customers do",
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
    <main className={`flex flex-col`}>
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

      {/* Hero Section */}
      <section
        className={`content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 min-h-[250px] bg-white`}
      >
        <article className={`col-span-12 flex flex-col`}>
          <Breadcrumbs items={[{ label: "Web Hosting" }]} />
          <h1 className={`mt-4 text-4xl md:text-5xl lg:text-h1 font-medium`}>
            Host With Us!
          </h1>
          <h2
            className={`max-w-4xl text-2xl md:text-3xl lg:text-h2 font-light`}
          >
            Modern web hosting that grows with you
          </h2>
          <p className={`mt-6 max-w-2xl text-neutral-500/80`}>
            RAVENCI Solutions provides managed cloud hosting for Australian
            businesses. Fast servers worldwide, 24/7 monitoring,
            reliable security, and Brisbane-based support. All-inclusive pricing
            from $39/mo with no hidden fees, no surprise charges, and no complex
            add-ons to buy.
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
            Hosting websites for 75+ Australian businesses including law
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

      {/* Two-Column Section */}
      <div className={`grid grid-cols-1 lg:grid-cols-2`}>
        {/* Left Column — Dark: Pain Points + Why Choose + Info */}
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark`}
        >
          <article className={`max-w-lg`}>
            <h2 className={`font-serif text-h3 font-bold text-white`}>
              Hosting Should Be Simple
            </h2>
            <div className={`my-4 text-neutral-400/90`}>
              Stop dealing with:
              <ul className={`mt-4 flex flex-col gap-2`}>
                <li>- Websites that crash during high traffic</li>
                <li>- Slow loading times that lose customers</li>
                <li>- Complex hosting panels you can't understand</li>
                <li>- Surprise overage charges and hidden fees</li>
                <li>- Offshore support that can't relate to you</li>
              </ul>
            </div>

            <h2
              className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}
            >
              Why Choose RAVENCI Over Other Hosts?
            </h2>
            <ul className={`flex flex-col gap-4 mb-6 text-neutral-400/90`}>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Brisbane-based support you can reach directly
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />
                All-inclusive pricing with no hidden fees
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Automatic scaling as your site grows
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Built for business websites
              </li>
            </ul>

            <h2
              className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}
            >
              Fast for Every Customer, Everywhere
            </h2>
            <p className={`mb-4 text-neutral-400/90`}>
              Your site loads quickly whether your visitor is around the corner
              or across the world. We handle the boring infrastructure side of
              that. You just get a site that performs.
            </p>

            <h2
              className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}
            >
              Fair, Simple Pricing
            </h2>
            <p className={`mb-4 text-neutral-400/90`}>
              Instead of complex tiers, our hosting scales naturally with your
              website's needs. We start with generous resources that work for
              most businesses, and as your site grows, your hosting grows with
              it – no complicated decisions required. You'll never pay for
              resources you don't need, and we'll proactively let you know if we
              spot opportunities to optimize your site's performance.
            </p>
          </article>
        </section>

        {/* Right Column — Light: Features */}
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-white`}
        >
          <article className={`max-w-lg`}>
            <h2 className={`mb-8 font-serif text-h3 font-bold`}>
              What's Included with Every Hosting
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

      {/* Full-Width Pricing Section */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark`}
      >
        <h2
          className={`mb-12 font-serif text-h3 font-bold text-white text-center`}
        >
          Simple, All-Inclusive Hosting
        </h2>
        <div className="bg-neutral-800/50 rounded-xl p-8 border border-neutral-700 max-w-md mx-auto">
          <h4 className="text-xl font-bold text-white">
            Managed Cloud Hosting
          </h4>
          <p className="mt-2 text-neutral-400/90">
            Everything you need to keep your website fast, secure, and online.
            Cloud hosting, SSL, daily backups, security monitoring, automatic
            scaling, and Brisbane-based support, all included.
          </p>
          <Link
            href="/quote?service=web-hosting"
            className="group/cta mt-8 block text-center rounded-xl border border-neutral-600 hover:border-white hover:bg-white p-6 transition-colors"
          >
            <span className="block text-3xl font-bold text-white group-hover/cta:text-ravenci-dark transition-colors">
              $39
              <span className="text-lg font-normal text-neutral-400 group-hover/cta:text-neutral-500 transition-colors">
                /mo.
              </span>
            </span>
            <span className="block mt-3 text-sm font-medium text-white group-hover/cta:text-ravenci-dark transition-colors">
              Get a hosting quote &rarr;
            </span>
          </Link>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 px-5 sm:px-20 xl:px-36 bg-white">
        <h2 className="mb-10 font-serif text-h3 font-bold text-center">
          Some of the Businesses We Host
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Peninsula Homes", image: "/showcase-images/Client - Peninsula Homes.png" },
            { name: "SAC Consulting", image: "/showcase-images/Client - SAC Consulting.png" },
            { name: "Beauty Retreat Bribie Islands", image: "/showcase-images/Client - Beauty Retreat Bribie Islands.png" },
            { name: "The DIRT Agency", image: "/showcase-images/Client - The DIRT Agency.png" },
          ].map((project) => (
            <div key={project.name} className="group relative overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={`${project.name} hosted by RAVENCI`}
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

      {/* Notice Section */}
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
          Hosting isn&apos;t a cost you absorb. It&apos;s the foundation that
          keeps your website earning revenue every day.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="p-6 rounded-xl border border-neutral-200 text-center">
            <p className="text-3xl font-bold text-ravenci-primary">$1.30</p>
            <p className="mt-1 text-sm text-neutral-500">per day</p>
            <p className="mt-3 text-sm text-neutral-700">
              Managed cloud hosting
            </p>
          </div>
          <div className="p-6 rounded-xl border border-neutral-200 text-center">
            <p className="text-3xl font-bold text-ravenci-primary">$468</p>
            <p className="mt-1 text-sm text-neutral-500">per year</p>
            <p className="mt-3 text-sm text-neutral-700">
              Total annual hosting cost
            </p>
          </div>
          <div className="p-6 rounded-xl border border-ravenci-primary/30 bg-ravenci-primary/5 text-center">
            <p className="text-3xl font-bold text-ravenci-primary">99.9%</p>
            <p className="mt-1 text-sm text-neutral-500">uptime</p>
            <p className="mt-3 text-sm text-neutral-700">
              Your site stays online and earning
            </p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto text-neutral-600 space-y-4">
          <p>
            Every hour your website is down costs you customers. If your site
            generates even one enquiry a day, a single day of downtime from
            cheap hosting costs you more than an entire year of managed hosting
            with RAVENCI.
          </p>
          <p>
            The real question isn&apos;t &ldquo;can I afford proper
            hosting?&rdquo; It&apos;s &ldquo;can I afford the lost revenue
            when my $5/month host goes down during a campaign?&rdquo;
          </p>
        </div>
      </section>

      {/* What Can Affect Pricing */}
      <section className={`content-section py-16 px-5 sm:px-20 xl:px-36 bg-neutral-50`}>
        <h2 className={`mb-8 font-serif text-h3 font-bold text-center`}>
          What Can Affect Pricing
        </h2>
        <p className={`mb-8 text-center text-neutral-500/80 max-w-2xl mx-auto`}>
          Our hosting starts at $39/mo for most business websites. These
          factors can move the price above that starting point.
        </p>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto`}>
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
        <h2 className="mb-8 font-serif text-h3 font-bold text-center">Related Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { name: "Website Maintenance", href: "/website-maintenance", description: "Keep your site secure and up to date" },
            { name: "Web Development", href: "/web-development", description: "Custom websites built to perform" },
            { name: "Retainer Packages", href: "/retainer-packages", description: "Ongoing development and support" },
          ].map((service) => (
            <Link key={service.href} href={service.href} className="p-6 rounded-xl border border-neutral-200 bg-white hover:border-ravenci-primary/30 transition-colors text-center">
              <h3 className="font-bold text-ravenci-dark mb-2">{service.name}</h3>
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
              title: `How is this different from cheap hosting like Bluehost?`,
              summary: `RAVENCI uses enterprise-grade cloud infrastructure with automatic scaling, dedicated resources, Brisbane-based support, and all-inclusive pricing. SSL, backups, and security are included. No extra charges.`,
              content: `Our hosting uses enterprise-grade cloud infrastructure with automatic scaling, not overcrowded shared servers. You get dedicated resources, Brisbane-based support, and performance optimization that cheap hosts can't match. Plus everything is included - SSL, backups, security - no extra charges.`,
            },
            {
              title: `What if my traffic suddenly spikes?`,
              summary: `RAVENCI cloud hosting automatically scales to handle traffic spikes without crashing or downtime. Servers grow with your traffic, unlike shared hosting which can go offline during surges.`,
              content: `Our cloud hosting automatically scales to handle traffic spikes without your site crashing. Our servers grow with your traffic so you never have to worry about any downtime. Compare this to shared hosting where traffic spikes can take your site offline.`,
            },
            {
              title: `Do you migrate my existing website?`,
              summary: `Yes. RAVENCI handles complete website migration from your current host, though extra charges may apply. Your site will be faster and more secure from day one with zero downtime.`,
              content: `Yes, we handle the complete migration from your current host though extra charges may apply. Your site will be faster and more secure from day one, and we'll make sure nothing breaks in the process.`,
            },
            {
              title: `What's included in the $39/month price?`,
              summary: `Everything: cloud hosting, SSL certificate, daily backups, security monitoring, automatic scaling, and Brisbane-based support. No hidden fees, no surprise charges, no add-ons required.`,
              content: `Everything: cloud hosting, SSL certificate, daily backups, security monitoring, automatic scaling, and Brisbane-based support. No hidden fees, no surprise charges, no complex add-ons to buy.`,
            },
            {
              title: `Can I host my website elsewhere and still get your other services?`,
              summary: `Yes, RAVENCI can work with other quality hosts. However, hosting and maintenance bundles offer the best value and performance since everything is optimised to work together.`,
              content: `While we prefer to host sites we maintain to guarantee optimal performance and security, we can work with other quality hosts. However, our hosting + maintenance bundles offer the best value and performance since everything is optimized to work together.`,
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
                  text: "Our hosting uses enterprise-grade cloud infrastructure with automatic scaling, not overcrowded shared servers. You get dedicated resources, Brisbane-based support, and performance optimization that cheap hosts can't match. Plus everything is included - SSL, backups, security - no extra charges.",
                },
              },
              {
                "@type": "Question",
                name: "What if my traffic suddenly spikes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our cloud hosting automatically scales to handle traffic spikes without your site crashing. Our servers grow with your traffic so you never have to worry about any downtime. Compare this to shared hosting where traffic spikes can take your site offline.",
                },
              },
              {
                "@type": "Question",
                name: "Do you migrate my existing website?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we handle the complete migration from your current host though extra charges may apply. Your site will be faster and more secure from day one, and we'll make sure nothing breaks in the process.",
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
                  text: "While we prefer to host sites we maintain to guarantee optimal performance and security, we can work with other quality hosts. However, our hosting + maintenance bundles offer the best value and performance since everything is optimized to work together.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
