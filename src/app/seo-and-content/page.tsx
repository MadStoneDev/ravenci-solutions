import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import Accordion from "@/components/accordion";
import Breadcrumbs from "@/components/breadcrumbs";
import PricingCards from "@/components/pricing-cards";
import StickyCTA from "@/components/sticky-cta";
import { getTestimonialsForPage } from "@/data/testimonials";

export const metadata = {
  title: "SEO & Content Services | RAVENCI Solutions",
  description:
    "SEO and content in Brisbane, Australia that gets you found and converts. Transparent AUD pricing. On-page SEO, content, and ethical link building.",
  alternates: { canonical: "/seo-and-content" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "SEO & Content Services | RAVENCI Solutions",
    description:
      "SEO and content in Brisbane, Australia that gets you found and converts. Transparent AUD pricing. On-page SEO, content, and ethical link building.",
    url: "/seo-and-content",
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
};

export default function SEOContentPage() {
  const testimonials = getTestimonialsForPage("seo-and-content");
  const features = [
    {
      title: "Keyword Research",
      description:
        "In-depth analysis to find the keywords your customers search for",
    },
    {
      title: "Found by the Right People",
      description:
        "We make sure Google can read your site properly, and the right customers can find what you offer when they go looking",
    },
    {
      title: "Content Strategy",
      description:
        "Content planning that brings the right customers to your site",
    },
    {
      title: "Copy That Sells",
      description:
        "Website copy written to move visitors towards enquiries and sales",
    },
    {
      title: "Local SEO",
      description:
        "Optimization for local searches to win in Brisbane and your service areas",
    },
    {
      title: "Performance Tracking",
      description:
        "Clear reporting on rankings, traffic quality, and conversions",
    },
    {
      title: "Competitor Analysis",
      description:
        "Understand what works in your niche and how to outperform competitors",
    },
    {
      title: "Brand Voice Development",
      description:
        "Consistent messaging that reflects your brand personality and values",
    },
    {
      title: "Long-term Results",
      description:
        "Sustainable strategies that build lasting search visibility",
    },
  ];

  const addons = [
    {
      title: "Google Ads Copy",
      description:
        "High-converting ad copy for Google Ads and social campaigns",
    },
    {
      title: "Email Marketing",
      description: "Newsletter content and automations that sell",
    },
    {
      title: "Social Media Content",
      description: "Engaging posts and captions for major platforms",
    },
    {
      title: "Video Script Writing",
      description:
        "Scripts for promotional videos, explainers, and social content",
    },
    {
      title: "Press Release Writing",
      description:
        "Professional press releases for media coverage and backlinks",
    },
    {
      title: "Why You're Not Ranking Audit",
      description:
        "We dig through your site and find the technical issues stopping you from showing up, then prioritise what to fix first",
    },
    {
      title: "Link Building",
      description: "Ethical, quality-first backlink acquisition",
    },
    {
      title: "Content Refresh",
      description: "Update and enrich existing content for gains",
    },
    {
      title: "Multilingual SEO",
      description: "SEO and content for multiple languages and regions",
    },
    {
      title: "E-commerce SEO",
      description: "Specialized optimization for online stores",
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
                name: "SEO & Content",
                item: "https://ravenci.solutions/seo-and-content",
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
          <Breadcrumbs items={[{ label: "SEO & Content" }]} />
          <h1 className={`mt-4 text-4xl md:text-5xl lg:text-h1 font-medium`}>
            SEO & Content That Brings You Customers
          </h1>
          <h2
            className={`max-w-4xl text-2xl md:text-3xl lg:text-h2 font-light`}
          >
            SEO & Content in Brisbane that drives high&#8209;intent traffic and
            converts visitors into customers
          </h2>
          <p className={`mt-6 max-w-2xl text-neutral-500/80`}>
            RAVENCI Solutions provides SEO and content services in Brisbane,
            Australia. Standard SEO from $1,750/month, eCommerce SEO +
            Campaigns from $2,250/month, and copywriting from $390/page.
            Keyword research, on-page optimisation, local SEO, and
            conversion-focused content with transparent AUD pricing.
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
            Trusted by 75+ Australian businesses to win the right searches and
            convert
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
        {/* Left Column — Dark: Pain Points + Why Choose */}
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark`}
        >
          <article className={`max-w-lg`}>
            <h2 className={`font-serif text-h3 font-bold text-white`}>
              Your Customers Are Searching. Can They Find You?
            </h2>
            <div className={`my-4 text-neutral-400/90`}>
              Stop losing customers to competitors because of:
              <ul className={`mt-4 flex flex-col gap-2`}>
                <li>- Website traffic that never converts to sales</li>
                <li>- Being buried on page 2+ of Google search results</li>
                <li>- Thin, off-brand content</li>
                <li>- SEO agencies that don&apos;t deliver real results</li>
                <li>- Marketing copy that fails to persuade</li>
              </ul>
            </div>

            <h2 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              Why Choose RAVENCI
            </h2>
            <ul className={`flex flex-col gap-4 mb-6 text-neutral-400/90`}>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />
                We focus on leads and sales, not just traffic numbers
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Brisbane market expertise with transparent AUD pricing
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Content written for your customers first, search engines second
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Clear scopes, capped deliverables, reliable timelines
              </li>
            </ul>
          </article>
        </section>

        {/* Right Column — Light: Features */}
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-white`}
        >
          <article className={`max-w-lg`}>
            <h2 className={`mb-8 font-serif text-h3 font-bold`}>
              What&apos;s Included with Every Project
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

      {/* Full-Width Add-ons Section */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-neutral-50`}
      >
        <h2 className={`mb-10 font-serif text-h3 font-bold text-center`}>
          Plenty of Add-ons to Suit Your Needs
        </h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto`}
        >
          {addons.map((addon, index) => (
            <div key={index} className="flex items-start gap-2">
              <IconCircleCheckFilled
                className="text-ravenci-primary flex-shrink-0"
                size={24}
              />
              <p className={`text-neutral-500/80`}>
                <span className="font-bold text-ravenci-dark">
                  {addon.title}:
                </span>{" "}
                {addon.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 px-5 sm:px-20 xl:px-36 bg-white">
        <h2 className="mb-10 font-serif text-h3 font-bold text-center">
          Some of Our Recent Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "GoingDark",
              image: "/showcase-images/Client - GoingDark.png",
            },
            {
              name: "Covenant Security",
              image: "/showcase-images/Client - Covenant Security.png",
            },
            {
              name: "Vipertac",
              image: "/showcase-images/Client - Vipertac.png",
            },
          ].map((project) => (
            <div
              key={project.name}
              className="group relative overflow-hidden rounded-xl"
            >
              <Image
                src={project.image}
                alt={`${project.name} SEO by RAVENCI`}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10">
                <p className="text-sm font-medium text-white">
                  {project.name}
                </p>
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
              name: "1. Standard SEO",
              price: "1,750",
              description:
                "Ongoing SEO for businesses that want to rank locally and nationally. Technical fixes, on-page optimisation, content, and monthly reporting. Per month.",
              accordionContent: `
<p class="mt-3 text-neutral-100">Setup (one-off)</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
  <li>Comprehensive audit and prioritised roadmap</li>
  <li>Keyword research (up to 50 target terms)</li>
  <li>Technical fixes batch (crawlability, indexation, sitemaps)</li>
  <li>Google Business Profile optimisation</li>
  <li>GA4 and Google Search Console setup</li>
  <li>Schema markup for key templates</li>
</ul>
<p class="mt-5 text-neutral-100">Monthly</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
  <li>On-page optimisation for up to 8 pages/month</li>
  <li>2 articles/posts per month (1,000-1,500 words)</li>
  <li>2 on-page content refreshes per month</li>
  <li>Internal linking improvements</li>
  <li>Monthly reporting and strategy call</li>
</ul>`,
            },
            {
              name: "2. eCommerce SEO + Campaigns",
              price: "2,250",
              description:
                "SEO and campaign strategy built for online stores. Product page optimisation, category structure, shopping feeds, and conversion tracking. Per month.",
              accordionContent: `
<p class="mt-3 text-neutral-100">Setup (one-off)</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
  <li>eCommerce audit and prioritised roadmap</li>
  <li>Product and category keyword mapping</li>
  <li>Technical fixes (structured data, canonical tags, faceted nav)</li>
  <li>Google Merchant Centre and Shopping feed setup</li>
  <li>GA4 eCommerce tracking configuration</li>
</ul>
<p class="mt-5 text-neutral-100">Monthly</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
  <li>Product page optimisation (up to 20 products/month)</li>
  <li>Category and collection page SEO</li>
  <li>2 blog articles or buying guides per month</li>
  <li>Campaign performance review and adjustments</li>
  <li>Ethical link building (budget as add-on)</li>
  <li>Monthly reporting and strategy call</li>
</ul>`,
            },
            {
              name: "3. Copywriting Only",
              price: "390",
              description:
                "Professional website copy as a standalone service. Clear scope, reliable turnaround. Per page.",
              accordionContent: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
  <li>Audience and messaging discovery</li>
  <li>Brand voice and tone guidance</li>
  <li>Website copy for up to 8 core pages (e.g., Home, About, Services x3, Contact, 2x additional)</li>
  <li>Conversion‑focused CTAs</li>
  <li>Optional add‑ons: sales/landing pages, email sequences</li>
  <li>2 rounds of revisions</li>
  <li>4–6 weeks delivery</li>
</ul>`,
            },
          ]}
        />
      </section>

      {/* Investment ROI */}
      <section className="content-section py-20 px-5 sm:px-20 xl:px-36 bg-white">
        <h2 className="mb-4 font-serif text-h3 font-bold text-center">
          Think of It as an Investment, Not an Expense
        </h2>
        <p className="mb-12 text-center text-neutral-500/80 max-w-2xl mx-auto">
          SEO isn&apos;t a cost you absorb. It&apos;s infrastructure that
          compounds and delivers returns month after month.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="p-6 rounded-xl border border-neutral-200 text-center">
            <p className="text-3xl font-bold text-ravenci-primary">$58</p>
            <p className="mt-1 text-sm text-neutral-500">per day</p>
            <p className="mt-3 text-sm text-neutral-700">
              Standard SEO retainer
            </p>
          </div>
          <div className="p-6 rounded-xl border border-neutral-200 text-center">
            <p className="text-3xl font-bold text-ravenci-primary">$75</p>
            <p className="mt-1 text-sm text-neutral-500">per day</p>
            <p className="mt-3 text-sm text-neutral-700">
              eCommerce SEO + Campaigns
            </p>
          </div>
          <div className="p-6 rounded-xl border border-ravenci-primary/30 bg-ravenci-primary/5 text-center">
            <p className="text-3xl font-bold text-ravenci-primary">3-6x</p>
            <p className="mt-1 text-sm text-neutral-500">return</p>
            <p className="mt-3 text-sm text-neutral-700">
              From organic traffic that converts
            </p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto text-neutral-600 space-y-4">
          <p>
            If your SEO brings in just two extra enquiries a month &mdash; even
            at $500 per job &mdash; that&apos;s $12,000 a year in revenue from
            a $1,750/month investment. Most businesses that rank well see far
            more than two leads a month from organic search.
          </p>
          <p>
            The real question isn&apos;t &ldquo;can I afford SEO?&rdquo;
            It&apos;s &ldquo;can I afford to let my competitors take the
            searches my customers are making?&rdquo;
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
          Every project is different. These are the most common factors that
          can move the price above the starting point for each tier.
        </p>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto`}
        >
          {[
            "Competitive industries requiring more aggressive strategy",
            "Large websites with hundreds of pages to optimise",
            "Multi-location or multi-region SEO campaigns",
            "Link building budgets (separate from retainer)",
            "Content volume beyond included articles",
            "Technical migrations or platform changes",
            "International or multilingual SEO",
            "Google Ads management alongside organic SEO",
            "eCommerce catalogues with 500+ products",
            "Rush content delivery timelines",
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
        <p className={`mt-8 text-center text-sm text-neutral-400`}>
          Hourly rate for additional work: $165/hr
        </p>
      </section>

      {/* Related Services */}
      <section className="content-section py-12 px-5 sm:px-20 xl:px-36 bg-neutral-50">
        <h2 className="mb-8 font-serif text-h3 font-bold text-center">
          Related Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              name: "Website Design",
              href: "/web-development",
              description: "Websites built for search from day one",
            },
            {
              name: "Branding",
              href: "/business-design",
              description: "Branding that builds trust",
            },
            {
              name: "Website Maintenance",
              href: "/website-maintenance",
              description: "Keep your site performing",
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
        <h2 className={`font-serif text-h3`}>
          SEO & Content Questions Answered
        </h2>
        <Accordion
          titleClassName={`py-6 text-lg`}
          items={[
            {
              title: "How long does it take to see SEO results?",
              summary:
                "Most businesses see SEO improvements in 3-6 months, with significant gains within 6-12 months. Results depend on competition, domain authority, and strategy execution.",
              content: `<p class="pt-3 text-neutral-500/90">Most businesses start seeing improvements in 3–6 months, with significant gains typically within 6–12 months.</p>`,
            },
            {
              title:
                "Do you guarantee specific rankings or traffic increases?",
              summary:
                "No ethical SEO provider guarantees rankings. RAVENCI guarantees disciplined execution and measurable improvements in visibility, traffic quality, and conversions.",
              content: `<p class="pt-3 text-neutral-500/90">No ethical SEO provider can guarantee rankings. We guarantee disciplined execution and measurable improvements in visibility, traffic quality, and conversions.</p>`,
            },
            {
              title: "Can you work with our existing marketing team?",
              summary:
                "Yes. RAVENCI works alongside in-house marketing teams, provides training and guidelines, and integrates wherever needed.",
              content: `<p class="pt-3 text-neutral-500/90">Yes. We work well alongside in-house teams, provide training and guidelines, and fit in wherever you need us.</p>`,
            },
            {
              title: "What industries do you specialize in?",
              summary:
                "RAVENCI works across industries with strong experience in professional services, healthcare, retail, and B2B.",
              content: `<p class="pt-3 text-neutral-500/90">We work across industries, with strong experience in professional services, healthcare, retail, and B2B.</p>`,
            },
            {
              title: "How do you measure success and ROI?",
              summary:
                "RAVENCI tracks organic traffic growth, keyword rankings, conversions, and revenue attribution from organic search channels.",
              content: `<p class="pt-3 text-neutral-500/90">We track organic traffic growth, rankings, conversions, and revenue attribution from organic channels.</p>`,
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
        startingPrice={1750}
        label="Request a Proposal"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "SEO & Content",
            name: "SEO & Content Services",
            description:
              "SEO and content in Brisbane, Australia that gets you found and converts. Transparent AUD pricing. On-page SEO, content, and ethical link building.",
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
            areaServed: { "@type": "Country", name: "Australia" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "SEO & Content Packages",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Standard SEO",
                  price: "1750",
                  priceCurrency: "AUD",
                  description:
                    "Ongoing SEO for businesses that want to rank locally and nationally. Technical fixes, on-page optimisation, content, and monthly reporting.",
                },
                {
                  "@type": "Offer",
                  name: "eCommerce SEO + Campaigns",
                  price: "2250",
                  priceCurrency: "AUD",
                  description:
                    "SEO and campaign strategy built for online stores. Product page optimisation, category structure, shopping feeds, and conversion tracking.",
                },
                {
                  "@type": "Offer",
                  name: "Copywriting Only",
                  price: "390",
                  priceCurrency: "AUD",
                  description:
                    "Professional website copy as a standalone service. Clear scope, reliable turnaround. Per page.",
                },
              ],
            },
          }),
        }}
      />

      {/* JSON-LD FAQ Schema for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does it take to see SEO results?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most businesses see SEO improvements in 3-6 months, with significant gains within 6-12 months. Results depend on competition, domain authority, and strategy execution.",
                },
              },
              {
                "@type": "Question",
                name: "Do you guarantee specific rankings or traffic increases?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No ethical SEO provider guarantees rankings. RAVENCI guarantees disciplined execution and measurable improvements in visibility, traffic quality, and conversions.",
                },
              },
              {
                "@type": "Question",
                name: "Can you work with our existing marketing team?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. RAVENCI works alongside in-house marketing teams, provides training and guidelines, and integrates wherever needed.",
                },
              },
              {
                "@type": "Question",
                name: "What industries do you specialize in?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RAVENCI works across industries with strong experience in professional services, healthcare, retail, and B2B.",
                },
              },
              {
                "@type": "Question",
                name: "How do you measure success and ROI?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RAVENCI tracks organic traffic growth, keyword rankings, conversions, and revenue attribution from organic search channels.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
