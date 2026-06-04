import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import Accordion from "@/components/accordion";
import Breadcrumbs from "@/components/breadcrumbs";
import PricingCards from "@/components/pricing-cards";
import StickyCTA from "@/components/sticky-cta";
import { getTestimonialsForPage } from "@/data/testimonials";
import TestimonialsSingle from "@/components/testimonials-single";

export const metadata = {
  title:
    "eCommerce Website Development Brisbane | Shopify & BigCommerce | RAVENCI",
  description:
    "Custom Shopify and BigCommerce stores for Australian product businesses. Certified partner, 25+ years experience. eCommerce builds from $12,000. Brisbane-based.",
  alternates: { canonical: "/ecommerce" },
  openGraph: {
    ...OG_DEFAULTS,
    title:
      "eCommerce Website Development Brisbane | Shopify & BigCommerce | RAVENCI",
    description:
      "Custom Shopify and BigCommerce stores for Australian product businesses. Certified partner, 25+ years experience. eCommerce builds from $12,000.",
    url: "/ecommerce",
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
};

export default function EcommercePage() {
  const testimonials = getTestimonialsForPage("web-development");

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
                name: "eCommerce",
                item: "https://ravenci.solutions/ecommerce",
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 bg-white">
        <article className="max-w-4xl flex flex-col">
          <Breadcrumbs items={[{ label: "eCommerce" }]} />
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-h1 font-medium">
            Online Stores That Actually Sell
          </h1>
          <h2 className="max-w-4xl text-2xl md:text-3xl lg:text-h2 font-light">
            Shopify and BigCommerce stores built around how your customers buy
            and how your team fulfils
          </h2>
          <p className="mt-6 max-w-2xl text-neutral-500/80">
            Most eCommerce builds focus on how the store looks. We focus on how
            it sells. Product discovery, checkout flow, shipping logic, inventory
            sync — the operational detail that turns a good-looking store into a
            revenue engine. Certified Shopify and BigCommerce partner. Brisbane-based.
            25+ years.
          </p>
        </article>
      </section>

      {/* Partner logos */}
      <section className="content-section py-12 px-5 sm:px-20 xl:px-36 bg-ravenci-dark">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/tech/tech-logos-shopify.svg"
              alt="Shopify Partner"
              width={140}
              height={40}
              className="brightness-0 invert opacity-80"
            />
            <span className="text-xs text-neutral-400 tracking-wider uppercase">
              Certified Partner
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/tech/tech-logos-bigcommerce.svg"
              alt="BigCommerce Partner"
              width={160}
              height={40}
              className="brightness-0 invert opacity-80"
            />
            <span className="text-xs text-neutral-400 tracking-wider uppercase">
              Certified Partner
            </span>
          </div>
        </div>
      </section>

      {/* Why eCommerce with RAVENCI */}
      <section className="content-section py-20 md:py-28 px-5 sm:px-20 xl:px-36 bg-white">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-ravenci-dark">
            Built to Sell, Not Just to Launch
          </h2>
          <p className="mt-6 text-neutral-600 leading-relaxed">
            An online store is not a website with a cart bolted on. It&apos;s a
            sales channel with its own operational requirements. We build stores
            that handle real-world complexity: product variants, shipping zones,
            tax rules, inventory that syncs with your warehouse or POS. The kind
            of detail that template installs skip and you discover six weeks
            after launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Custom Theme Design",
              description:
                "Your store looks and feels like your brand, not a template with your logo dropped in. Designed around how your customers browse and buy.",
            },
            {
              title: "Product Catalogue Setup",
              description:
                "Variants, collections, filters, and search configured so customers find what they want. Up to 100 products included, bulk import for larger catalogues.",
            },
            {
              title: "Checkout Optimisation",
              description:
                "Payment gateways, shipping calculators, tax rules, and abandoned cart recovery configured for Australian buyers and conditions.",
            },
            {
              title: "Inventory & Fulfilment",
              description:
                "Stock synced with your warehouse, POS, or 3PL. Multi-location inventory support. Automated low-stock alerts.",
            },
            {
              title: "Analytics & Conversion Tracking",
              description:
                "Google Analytics 4 with eCommerce events, Meta Pixel, and conversion tracking so you know exactly what drives revenue.",
            },
            {
              title: "Staff Training",
              description:
                "Your team trained on order management, product updates, and daily operations. You run your store without calling a developer.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl border border-neutral-200"
            >
              <h3 className="font-bold text-ravenci-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform choice */}
      <section className="content-section py-20 md:py-28 px-5 sm:px-20 xl:px-36 bg-neutral-100">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-ravenci-dark">
            Right Platform for the Business
          </h2>
          <p className="mt-6 text-neutral-600 leading-relaxed">
            We don&apos;t push one platform because it&apos;s easier for us. We
            recommend the one that fits your operations, catalogue size, and
            growth plans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          <div className="p-8 rounded-xl bg-white border border-neutral-200">
            <h3 className="text-xl font-bold text-ravenci-dark mb-4">
              Shopify
            </h3>
            <ul className="space-y-3">
              {[
                "Best for most product businesses under 5,000 SKUs",
                "Fastest time-to-market with the richest app ecosystem",
                "Built-in payment processing (Shopify Payments)",
                "POS integration for physical retail",
                "Subscription and membership support via apps",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <IconCircleCheckFilled
                    size={18}
                    className="mt-0.5 text-ravenci-primary flex-shrink-0"
                  />
                  <span className="text-sm text-neutral-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-xl bg-white border border-neutral-200">
            <h3 className="text-xl font-bold text-ravenci-dark mb-4">
              BigCommerce
            </h3>
            <ul className="space-y-3">
              {[
                "Better for large catalogues and complex product rules",
                "No transaction fees on any payment gateway",
                "Multi-storefront from a single dashboard",
                "Stronger B2B features (price lists, quote management)",
                "Headless commerce ready for custom frontends",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <IconCircleCheckFilled
                    size={18}
                    className="mt-0.5 text-ravenci-primary flex-shrink-0"
                  />
                  <span className="text-sm text-neutral-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Case study callout */}
      <section className="content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-primary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-medium tracking-widest uppercase text-white/70">
            eCommerce Case Study
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-medium">GoingDark</h2>
          <p className="mt-4 text-white/80 leading-relaxed max-w-2xl mx-auto">
            Thermal and night vision retailer for serious Australian hunters.
            Custom Shopify store with product comparison tools, expert buying
            guides, and brand positioning that sets them apart from the big-box
            retailers.
          </p>
          <Link
            href="/case-studies/goingdark"
            className="mt-8 inline-flex px-8 py-3 bg-white text-ravenci-dark font-medium rounded-full hover:bg-neutral-100 transition-colors duration-300"
          >
            Read the Case Study
          </Link>
        </div>
      </section>

      {/* Pricing */}
      <section className="content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark">
        <h2 className="mb-12 font-serif text-h3 font-bold text-white text-center">
          eCommerce Packages
        </h2>
        <PricingCards
          tiers={[
            {
              name: "1. eCommerce",
              price: "12,000",
              description:
                "A professionally built Shopify or BigCommerce store. Custom theme, product catalogue setup, and integrations tailored to your operations.",
              accordionContent: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Shopify or BigCommerce setup</li>
    <li>Custom theme and brand design</li>
    <li>Product catalogue setup (up to 100 products)</li>
    <li>Payment gateway integration</li>
    <li>Shipping and tax configuration</li>
    <li>Google Analytics with eCommerce tracking</li>
    <li>Mobile-first responsive design</li>
    <li>Staff training on store management</li>
    <li>Basic SEO setup</li>
    <li>3 rounds of revisions</li>
    <li>6-8 weeks delivery</li>
</ul>`,
            },
            {
              name: "2. Custom eCommerce",
              price: "Scope to fit",
              description:
                "For complex eCommerce requirements: large catalogues, custom filtering, multi-channel, ERP integrations, or advanced product configurations.",
              accordionContent: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Everything in eCommerce, plus:</li>
    <li>Custom product filtering and search</li>
    <li>Advanced payment and shipping rules</li>
    <li>Inventory management integration</li>
    <li>Customer account portal</li>
    <li>Email marketing integration</li>
    <li>Multi-channel sales setup</li>
    <li>Advanced eCommerce analytics</li>
    <li>8-10+ weeks delivery</li>
</ul>`,
            },
          ]}
        />
      </section>

      {/* Testimonial */}
      {testimonials.length > 0 && (
        <TestimonialsSingle
          testimonial={{
            content: testimonials[0].content,
            author: testimonials[0].author,
            role: testimonials[0].role,
            company: testimonials[0].company,
            image: testimonials[0].image || null,
          }}
          extraClassNames="content-section bg-ravenci-primary"
        />
      )}

      {/* FAQ */}
      <section className="content-section py-16 px-6 md:px-10 flex flex-col items-center justify-center gap-3 bg-white">
        <h2 className="font-serif text-h3">eCommerce Questions Answered</h2>
        <Accordion
          titleClassName="py-6 text-lg"
          items={[
            {
              title: "Which platform should I choose — Shopify or BigCommerce?",
              summary:
                "Most product businesses under 5,000 SKUs do best on Shopify. BigCommerce suits larger catalogues, B2B, or multi-storefront needs. We recommend based on your operations, not our preference.",
              content:
                "Most product businesses under 5,000 SKUs do best on Shopify. BigCommerce suits larger catalogues, B2B requirements, or businesses that need multi-storefront from a single dashboard. We recommend based on your operations, catalogue size, and growth plans — not our preference.",
            },
            {
              title: "Can you migrate my existing store?",
              summary:
                "Yes. We migrate products, customers, order history, and SEO (URL redirects, meta data). Migrations are scoped and quoted separately based on catalogue size and complexity.",
              content:
                "Yes. We migrate products, customers, order history, and SEO equity (URL redirects, meta data, structured data). Migrations are scoped and quoted separately based on your catalogue size, platform, and integration complexity.",
            },
            {
              title: "How long does an eCommerce build take?",
              summary:
                "Standard eCommerce builds take 6-8 weeks. Custom eCommerce with advanced integrations takes 8-10+ weeks. We provide regular progress updates throughout.",
              content:
                "Standard eCommerce builds take 6-8 weeks. Custom eCommerce with advanced integrations (ERP, multi-channel, custom filtering) takes 8-10+ weeks. We provide regular progress updates and stick to the agreed timeline.",
            },
            {
              title: "Do you handle ongoing store management?",
              summary:
                "We train your team to manage daily operations. For ongoing support, our retainer packages cover product updates, platform maintenance, and performance monitoring.",
              content:
                "We train your team to handle daily operations — orders, product updates, promotions. For ongoing platform support, our retainer packages cover maintenance, updates, and performance monitoring. Most eCommerce clients add a retainer after launch.",
            },
            {
              title:
                "What about payment gateways and shipping for Australian businesses?",
              summary:
                "We configure Australian payment gateways (Shopify Payments, Stripe, PayPal, Afterpay), GST settings, and shipping zones for domestic and international delivery.",
              content:
                "We configure Australian payment gateways (Shopify Payments, Stripe, PayPal, Afterpay/Zip), GST calculation, and shipping zones for domestic and international delivery. We also set up Australia Post, Sendle, or your preferred carrier for real-time shipping rates.",
            },
          ]}
        />
      </section>

      {/* CTA */}
      <section className="content-section py-24 px-5 sm:px-20 xl:px-36 bg-ravenci-primary text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium">
            Ready to Sell Online?
          </h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            Tell us about your products and how you operate. We&apos;ll come
            back with a tailored proposal — the right platform, realistic
            timeline, and a fixed price.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/launch-your-vision"
              className="px-8 py-3 grid place-content-center bg-white text-ravenci-dark font-medium rounded-full hover:bg-neutral-100 transition-colors duration-300"
            >
              Start Your eCommerce Project
            </Link>
            <Link
              href="/case-studies/goingdark"
              className="px-8 py-3 grid place-content-center rounded-full text-white border-2 border-white/30 hover:bg-white hover:text-ravenci-dark transition-colors duration-300"
            >
              See Our eCommerce Work
            </Link>
          </div>
        </div>
      </section>

      {/* Footer spacer */}
      <section className="content-section py-20 px-5 sm:px-20 xl:px-36 grid grid-cols-5 gap-10 min-h-[150px] bg-white"></section>

      {/* Mobile sticky CTA */}
      <StickyCTA
        link="/launch-your-vision"
        startingPrice={12000}
        label="Start Your Store"
      />

      {/* Service JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "eCommerce Website Development",
            name: "eCommerce Website Development Brisbane",
            description:
              "Custom Shopify and BigCommerce stores for Australian product businesses. Certified partner, 25+ years experience. eCommerce builds from $12,000. Brisbane-based.",
            provider: {
              "@type": "ProfessionalService",
              name: "RAVENCI Solutions",
              url: "https://ravenci.solutions",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Brisbane",
                addressRegion: "QLD",
                addressCountry: "AU",
              },
            },
            areaServed: {
              "@type": "Country",
              name: "Australia",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "eCommerce Packages",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "eCommerce Store",
                  price: "12000",
                  priceCurrency: "AUD",
                  description:
                    "Custom Shopify or BigCommerce store with theme design, product catalogue setup, payment and shipping integration. 6-8 weeks delivery.",
                },
              ],
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
                name: "Which platform should I choose — Shopify or BigCommerce?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most product businesses under 5,000 SKUs do best on Shopify. BigCommerce suits larger catalogues, B2B requirements, or businesses that need multi-storefront from a single dashboard.",
                },
              },
              {
                "@type": "Question",
                name: "Can you migrate my existing store?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We migrate products, customers, order history, and SEO equity (URL redirects, meta data, structured data). Migrations are scoped and quoted separately.",
                },
              },
              {
                "@type": "Question",
                name: "How long does an eCommerce build take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Standard eCommerce builds take 6-8 weeks. Custom eCommerce with advanced integrations takes 8-10+ weeks.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
