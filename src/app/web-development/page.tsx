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
  title: "Custom Website Design Brisbane, Built to Last | RAVENCI",
  description:
    "Custom websites for established Brisbane businesses. Fast, owned by you, still working in five years. No templates, no plugin clutter. From $7,500.",
  alternates: { canonical: "/web-development" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Custom Website Design Brisbane, Built to Last | RAVENCI",
    description:
      "Custom websites for established Brisbane businesses. Fast, owned by you, still working in five years. No templates, no plugin clutter. From $7,500.",
    url: "/web-development",
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
};

export default function WebHostingDevelopmentPage() {
  const testimonials = getTestimonialsForPage("web-development");
  const features = [
    {
      title: "Responsive Design",
      description:
        "Optimised for viewing on desktop, tablet, and mobile devices",
    },
    {
      title: "Easy Management",
      description:
        "Easy-to-use solution so you can update your content without technical knowledge",
    },
    {
      title: "Branding Suitability",
      description:
        "Tailored to look and function as per your brand's and business's needs",
    },
    {
      title: "Performance Optimization",
      description:
        "Fast-loading pages that are optimized for speed and user experience",
    },
    {
      title: "SEO Optimization",
      description:
        "Built-in SEO best practices to help your site rank in search results",
    },
    {
      title: "Google Analytics",
      description:
        "Track your visitors and website performance with integrated analytics",
    },
    {
      title: "Cross-Browser Compatibility",
      description:
        "Your site is tested to work flawlessly across all major browsers",
    },
    {
      title: "Strategic Navigation",
      description:
        "Optimised menu options to help your customers find what they need",
    },
    {
      title: "Contact Forms (if opted for)",
      description:
        "Modern contact forms with spam protection and email notifications",
    },
    {
      title: "SSL Certificate",
      description: "Free SSL Certificate when you choose to host with RAVENCI",
    },
  ];

  const addons = [
    {
      title: "Extra Pages",
      description:
        "If our service offering doesn't fit the vision for your website, customise it by adding extra pages",
    },
    {
      title: "Portfolio / Gallery",
      description: "Showcase your previous work to support your brand",
    },
    {
      title: "Contact Form + Integration",
      description: "Generate leads from your website with a contact form",
    },
    {
      title: "Cookie Consent Banner",
      description:
        "Stay compliant with privacy laws and build trust with your visitors",
    },
    {
      title: "Professional Copywriting",
      description:
        "Get compelling content that converts visitors into customers",
    },
    {
      title: "SEO Content Optimisation",
      description: "Boost your search rankings with content that Google loves",
    },
    {
      title: "Advanced Blog Setup",
      description:
        "Share your expertise and attract customers with a professional blog",
    },
    {
      title: "Newsletter Signup Forms",
      description:
        "Build your email list and stay connected with your audience",
    },
    {
      title: "Add Facebook Pixel",
      description: "Feed traffic analytics from your website to Facebook",
    },
    {
      title: "Google Business Profile",
      description:
        "Build and optimise your Google Business Profile and link it to your website",
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
                name: "Website Design",
                item: "https://ravenci.solutions/web-development",
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
          <Breadcrumbs items={[{ label: "Website Design" }]} />
          <h1 className={`mt-4 text-4xl md:text-5xl lg:text-h1 font-medium`}>
            Custom websites, designed and built to last
          </h1>
          <h2
            className={`max-w-4xl text-2xl md:text-3xl lg:text-h2 font-light`}
          >
            One senior developer designs it around your business and
            hand-builds it, the whole website, not just the look.
          </h2>
          <p className={`mt-6 max-w-2xl text-neutral-500/80`}>
            For established Australian businesses ready to replace the site
            they have with one that performs. Built properly the first time so
            it&apos;s still working in five years. No plugin clutter, no
            surprise subscriptions, no developer disappearing on you. Custom
            websites from $7,500, eCommerce platforms from $12,000, plus
            ongoing support. Brisbane-based. 25+ years.
          </p>
          <div
            className={`mt-6 max-w-2xl flex flex-col gap-2 text-sm text-neutral-500/80`}
          >
            <p>
              <span className={`font-semibold text-ravenci-dark`}>
                Design + build
              </span>
              . I handle the whole thing, look and code. Most projects.
            </p>
            <p>
              <span className={`font-semibold text-ravenci-dark`}>
                Build from your design
              </span>
              . Already have a designer or agency? I build it exactly to spec.
              It&apos;s how I work with studios like The Design Order.
            </p>
          </div>
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
            Trusted by 75+ Australian businesses to build websites that work
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
        {/* Left Column — Dark: Pain Points + Why Choose + Intro */}
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark`}
        >
          <article className={`max-w-lg`}>
            <h2 className={`font-serif text-h3 font-bold text-white`}>
              Common Problems We Hear About
            </h2>
            <div className={`my-4 text-neutral-400/90`}>
              Problems businesses come to us with:
              <ul className={`mt-4 flex flex-col gap-2`}>
                <li>- Developers who disappear after launch</li>
                <li>- Websites that look nothing like what you wanted</li>
                <li>- Sites that don't work on mobile devices</li>
                <li>- Hidden costs and endless revision charges</li>
                <li>- Technical jargon instead of clear communication</li>
              </ul>
            </div>

            <h2 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              Why Choose RAVENCI Over Other Developers?
            </h2>
            <ul className={`flex flex-col gap-4 mb-6 text-neutral-400/90`}>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Fixed pricing with no scope creep
              </li>
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
                Ongoing support after launch, not build-and-abandon
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />
                85+ PageSpeed guaranteed, not just a nice-looking design
              </li>
            </ul>
            <p className={`mb-4 text-neutral-400/90`}>
              The web development process should never be overwhelming for you.
              It should respect your vision and bring it to life in a way that
              simply gets out of the way.
            </p>
            <p className={`text-neutral-400/90`}>
              That's how we approach it at RAVENCI. To make it even simpler for
              you, we offer four tiers of development services, each designed
              to meet your specific needs.
            </p>
          </article>
        </section>

        {/* Right Column — Light: Features */}
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-white`}
        >
          <article className={`max-w-lg`}>
            <h2 className={`mb-8 font-serif text-h3 font-bold`}>
              What's Included with Every Build
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
              name: "Peninsula Homes",
              image: "/showcase-images/Client - Peninsula Homes.png",
            },
            {
              name: "SAC Consulting",
              image: "/showcase-images/Client - SAC Consulting.png",
            },
            {
              name: "Nikita Morell",
              image: "/showcase-images/Client - Nikita Morell.png",
            },
            {
              name: "Covenant Security",
              image: "/showcase-images/Client - Covenant Security.png",
            },
            {
              name: "Coast Remedial Solutions",
              image: "/showcase-images/Client - Coast Remedial Solutions.png",
            },
            {
              name: "Intercorp Developments",
              image: "/showcase-images/Client - Intercorp Developments.png",
            },
          ].map((project) => (
            <div
              key={project.name}
              className="group relative overflow-hidden rounded-xl"
            >
              <Image
                src={project.image}
                alt={`${project.name} website by RAVENCI`}
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
              name: "1. Business Website",
              price: "7,500",
              description:
                "For the established business whose site should look as credible as they are. A custom site that captures enquiries, that you can update yourself, and that's still fast in five years.",
              accordionContent: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Custom responsive design (up to 5 pages)</li>
    <li>CMS setup for easy content management</li>
    <li>CRM integration (HubSpot, Zoho, or similar)</li>
    <li>Contact forms with lead capture</li>
    <li>Google Analytics and Search Console setup</li>
    <li>Basic on-page SEO</li>
    <li>85+ Google PageSpeed score guaranteed</li>
    <li>Mobile-optimised layout</li>
    <li>SSL certificate with RAVENCI hosting</li>
    <li>2 rounds of revisions</li>
    <li>4 weeks delivery</li>
</ul>`,
            },
            {
              name: "2. Custom Website",
              price: "10,000",
              description:
                "For businesses that need the site to do something specific, integrations, bespoke flows, features off-the-shelf won't cover, built around how you actually work, without a stack of plugins to maintain.",
              accordionContent: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Fully custom design and development</li>
    <li>Multi-page website (up to 12 pages)</li>
    <li>Brand identity and design direction</li>
    <li>Advanced CMS with content workflows</li>
    <li>Custom integrations and API connections</li>
    <li>Advanced SEO with structured data</li>
    <li>Blog setup with content strategy</li>
    <li>Analytics with goal and conversion tracking</li>
    <li>85+ Google PageSpeed score guaranteed</li>
    <li>3 rounds of revisions</li>
    <li>6 to 8 weeks delivery</li>
</ul>`,
            },
            {
              name: "3. eCommerce",
              price: "12,000",
              description:
                "For product businesses that want a store built to sell and to last. The right platform for your products, a custom theme, and no tower of app subscriptions dragging every page down.",
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
    <li>6 to 8 weeks delivery</li>
</ul>`,
            },
            {
              name: "4. Custom eCommerce",
              price: "18,000",
              description:
                "For stores with real complexity: large catalogues, custom filtering, multi-channel, ERP integrations. We scope it to exactly what the business needs, nothing it doesn't.",
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
    <li>8 to 10+ weeks delivery</li>
</ul>`,
            },
          ]}
        />
      </section>

      {/* Investment ROI */}
      <section className="content-section py-20 px-5 sm:px-20 xl:px-36 bg-white">
        <h2 className="mb-4 font-serif text-h3 font-bold text-center">
          What a Website Actually Returns
        </h2>
        <p className="mb-12 text-center text-neutral-500/80 max-w-2xl mx-auto">
          A website that&apos;s built properly earns its keep every month for
          years, quietly bringing in enquiries while you get on with the work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="p-6 rounded-xl border border-neutral-200 text-center">
            <p className="text-3xl font-bold text-ravenci-primary">$4.11</p>
            <p className="mt-1 text-sm text-neutral-500">per day</p>
            <p className="mt-3 text-sm text-neutral-700">
              Business website over 5 years
            </p>
          </div>
          <div className="p-6 rounded-xl border border-neutral-200 text-center">
            <p className="text-3xl font-bold text-ravenci-primary">$6.58</p>
            <p className="mt-1 text-sm text-neutral-500">per day</p>
            <p className="mt-3 text-sm text-neutral-700">
              eCommerce store over 5 years
            </p>
          </div>
          <div className="p-6 rounded-xl border border-ravenci-primary/30 bg-ravenci-primary/5 text-center">
            <p className="text-3xl font-bold text-ravenci-primary">3 to 6x</p>
            <p className="mt-1 text-sm text-neutral-500">return</p>
            <p className="mt-3 text-sm text-neutral-700">
              From just one extra client per month
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-neutral-600 space-y-4">
          <p>
            If your website brings in just one extra client a month, even at
            $500 per job, that&apos;s $6,000 a year in revenue. On a $7,500
            business site, that&apos;s a 4x return in year one alone. On a
            $12,000 eCommerce build with direct sales, the returns compound
            from day one. Most businesses see far more than one lead a month
            from a site that actually ranks and converts.
          </p>
          <p>
            The cheaper quote usually isn&apos;t. A budget template built on a
            stack of plugins tends to slow down, break, or need replacing
            within a couple of years, so you pay once for the site and again
            for the rebuild. Built properly the first time, with no plugin
            clutter to rot, a site is still doing its job in five years.
            That&apos;s the difference you&apos;re paying for.
          </p>
          <p>
            The real question isn&apos;t &ldquo;can I afford a proper
            website?&rdquo; It&apos;s &ldquo;can I afford not to have
            one?&rdquo;
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
        <p className={`mb-8 text-center text-neutral-500/80 max-w-2xl mx-auto`}>
          Every project is different. These are the most common factors that
          can move the price above the starting point for each tier.
        </p>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto`}>
          {[
            "Additional pages beyond the included count",
            "Custom integrations (CRMs, ERPs, payment gateways, APIs)",
            "Multi-language or internationalisation",
            "Migration from an existing platform (data, SEO redirects, content)",
            "Advanced animations or interactive elements",
            "Membership or gated content areas",
            "Custom reporting dashboards",
            "Ongoing content creation (copywriting, photography, video)",
            "Rush timelines (under 4 weeks)",
            "Third-party platform licensing (not included in build cost)",
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
        <h2 className="mb-8 font-serif text-h3 font-bold text-center">Related Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { name: "Retainer Packages", href: "/retainer-packages", description: "Ongoing care, hosting, and development" },
            { name: "Branding", href: "/business-design", description: "Brand identity and visual design" },
            { name: "SEO & Content", href: "/seo-and-content", description: "Get found by the right customers" },
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
        <h2 className={`font-serif text-h3`}>Common Website Questions</h2>
        <Accordion
          titleClassName={`py-6 text-lg`}
          items={[
            {
              title: `How long does a typical website take to build?`,
              summary: `Brochure websites take 4 weeks, eCommerce template builds 4 to 5 weeks, custom solutions 6 to 8 weeks, and custom eCommerce builds 8 to 10 weeks. RAVENCI provides regular progress updates throughout every project.`,
              content: `Brochure Website: 4 weeks. eCommerce Template: 4 to 5 weeks. Custom Solution: 6 to 8 weeks. eCommerce Custom: 8 to 10 weeks. We stick to these timelines and provide regular progress updates.`,
            },
            {
              title: `What if I'm not happy with the result?`,
              summary: `Every RAVENCI package includes multiple revision rounds. We guarantee the website matches your vision and won't consider the project complete until you're 100% satisfied.`,
              content: `We guarantee your website will match your vision. Each package includes multiple revision rounds, and we won't consider the project complete until you're 100% satisfied.`,
            },
            {
              title: `Can I update the website myself after it's built?`,
              summary: `Yes. RAVENCI builds on user-friendly CMS platforms and provides training so you can update content, add blog posts, and make changes without needing a developer.`,
              content: `Absolutely. We build on user-friendly CMS platforms and provide training so you can easily update content, add blog posts, and make basic changes without needing a developer.`,
            },
            {
              title: `What makes your development different from cheaper options?`,
              summary: `RAVENCI guarantees 85+ PageSpeed scores, provides ongoing support, uses professional development practices, and is Brisbane-based. Cheap developers often create slow, problematic sites that cost more to fix later.`,
              content: `We guarantee 85+ PageSpeed scores, provide ongoing support, use professional development practices, and we're local to Brisbane. Cheap developers often create slow, problematic sites that cost more to fix later.`,
            },
            {
              title: `Do you handle the domain and hosting setup?`,
              summary: `Yes. All RAVENCI packages include one year of free domain registration and full hosting setup. RAVENCI hosting is recommended for optimal performance, but other quality hosts are supported.`,
              content: `Yes, all packages include 1 year free domain registration and we can handle hosting setup. We recommend our own hosting for optimal performance, but can work with other quality hosts if needed.`,
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
        startingPrice={7500}
        label="Request a Proposal"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Website Design & Development",
            name: "Custom Website Design & Development",
            description:
              "Custom websites for established Brisbane businesses. Fast, owned by you, still working in five years. No templates, no plugin clutter. From $7,500.",
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
              name: "Website Design Packages",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Business Website",
                  price: "7500",
                  priceCurrency: "AUD",
                  description:
                    "Custom responsive design up to 5 pages with CMS, CRM integration, SEO, and 85+ PageSpeed score. 4 weeks delivery.",
                },
                {
                  "@type": "Offer",
                  name: "Custom Website",
                  price: "10000",
                  priceCurrency: "AUD",
                  description:
                    "Fully custom design and development up to 12 pages with brand identity, advanced CMS, integrations, and structured data. 6 to 8 weeks delivery.",
                },
                {
                  "@type": "Offer",
                  name: "eCommerce",
                  price: "12000",
                  priceCurrency: "AUD",
                  description:
                    "Custom Shopify or BigCommerce store with product catalogue setup, payment and shipping integration. 6 to 8 weeks delivery.",
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
                name: "How long does a typical website take to build?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Brochure websites take 4 weeks, eCommerce template builds 4 to 5 weeks, custom solutions 6 to 8 weeks, and custom eCommerce builds 8 to 10 weeks. RAVENCI provides regular progress updates throughout every project.",
                },
              },
              {
                "@type": "Question",
                name: "What if I'm not happy with the result?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Every RAVENCI package includes multiple revision rounds. We guarantee the website matches your vision and won't consider the project complete until you're 100% satisfied.",
                },
              },
              {
                "@type": "Question",
                name: "Can I update the website myself after it's built?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. RAVENCI builds on user-friendly CMS platforms and provides training so you can update content, add blog posts, and make changes without needing a developer.",
                },
              },
              {
                "@type": "Question",
                name: "What makes your development different from cheaper options?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RAVENCI guarantees 85+ PageSpeed scores, provides ongoing support, uses professional development practices, and is Brisbane-based. Cheap developers often create slow, problematic sites that cost more to fix later.",
                },
              },
              {
                "@type": "Question",
                name: "Do you handle the domain and hosting setup?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. All RAVENCI packages include one year of free domain registration and full hosting setup. RAVENCI hosting is recommended for optimal performance, but other quality hosts are supported.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
