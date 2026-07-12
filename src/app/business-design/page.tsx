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
  title: "Branding & Brand Identity Brisbane | RAVENCI",
  description:
    "Professional branding and graphic design in Brisbane. From logo and guidelines to full brand identity systems for established businesses.",
  alternates: { canonical: "/business-design" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Branding & Brand Identity Brisbane | RAVENCI",
    description:
      "Professional branding and graphic design in Brisbane. From logo and guidelines to full brand identity systems for established businesses.",
    url: "/business-design",
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
};

export default function BusinessDesignPage() {
  const testimonials = getTestimonialsForPage("business-design");
  const features = [
    {
      title: "Brand Consistency",
      description:
        "All designs follow your brand guidelines for a cohesive professional look",
    },
    {
      title: "Print-Ready Files",
      description:
        "High-resolution files ready for professional printing in multiple formats",
    },
    {
      title: "Vector Graphics",
      description:
        "Scalable designs that look crisp at any size, from business cards to billboards",
    },
    {
      title: "Brand Guidelines",
      description:
        "Comprehensive style guide to maintain consistency across all materials",
    },
    {
      title: "Multiple Concepts",
      description:
        "Several design options to choose from, ensuring you get exactly what you want",
    },
    {
      title: "Unlimited Revisions",
      description:
        "We'll refine your designs until they perfectly represent your business",
    },
    {
      title: "Fast Turnaround",
      description:
        "Quick delivery times without compromising on quality or attention to detail",
    },
    {
      title: "Professional Quality",
      description:
        "Designs that compete with the biggest brands in your industry",
    },
    {
      title: "File Ownership",
      description:
        "You own all design files and can use them however you need for your business",
    },
  ];

  const addons = [
    {
      title: "Rush Delivery",
      description: "Get your designs completed in half the standard time",
    },
    {
      title: "Additional Concepts",
      description: "More design options to choose from for complex projects",
    },
    {
      title: "3D Mockups",
      description: "See how your designs will look in real-world applications",
    },
    {
      title: "Animation Services",
      description: "Add movement to your logos and graphics with motion design",
    },
    {
      title: "Trade Show Materials",
      description: "Banners, pull-up stands, and booth graphics for events",
    },
    {
      title: "Packaging Design",
      description: "Product packaging that represents your brand",
    },
    {
      title: "Digital Assets",
      description: "Social media templates, email signatures, and web graphics",
    },
    {
      title: "Brand Photography Direction",
      description:
        "Style guides for consistent photography across all channels",
    },
    {
      title: "Copywriting Integration",
      description: "Professional copy that complements your designs",
    },
    {
      title: "Brand Training",
      description: "Teach your team how to maintain brand consistency",
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
                name: "Branding",
                item: "https://ravenci.solutions/business-design",
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
          <Breadcrumbs items={[{ label: "Branding" }]} />
          <h1 className={`mt-4 text-4xl md:text-5xl lg:text-h1 font-medium`}>
            Professional Branding That Builds Trust
          </h1>
          <h2
            className={`max-w-4xl text-2xl md:text-3xl lg:text-h2 font-light`}
          >
            Professional branding and graphic design that builds trust and
            drives sales
          </h2>
          <p className={`mt-6 max-w-2xl text-neutral-500/80`}>
            Professional branding and graphic design for established Australian
            businesses. Logo and guidelines from $3,500, full brand identity
            systems from $10,000, plus signage and vehicle wraps. Brisbane-based.
            25+ years.
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
            Trusted by 75+ Australian businesses to build brands that stand
            out
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
              Your Brand Deserves Better
            </h2>
            <div className={`my-4 text-neutral-400/90`}>
              Common problems we see:
              <ul className={`mt-4 flex flex-col gap-2`}>
                <li>- Generic logos that look like everyone else's</li>
                <li>- Inconsistent branding across different materials</li>
                <li>- DIY designs that look unprofessional</li>
                <li>- Marketing materials that fail to convert</li>
                <li>
                  - Brand identity that doesn't reflect your premium service
                </li>
              </ul>
            </div>

            <h2 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              Why Choose RAVENCI Over Other Designers?
            </h2>
            <ul className={`flex flex-col gap-4 mb-6 text-neutral-400/90`}>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Design backed by strategy
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Complete brand systems from logo to collateral
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Brisbane-based with local support
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Focused on what works for your business
              </li>
            </ul>
            <p className={`mb-4 text-neutral-400/90`}>
              Good design builds trust, earns customer confidence, and makes
              your business look established and professional.
            </p>
            <p className={`text-neutral-400/90`}>
              We offer four comprehensive design packages, each tailored to
              different business needs and budgets.
            </p>
          </article>
        </section>

        {/* Right Column — Light: Features */}
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-white`}
        >
          <article className={`max-w-lg`}>
            <h2 className={`mb-8 font-serif text-h3 font-bold`}>
              What's Included with Every Design
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
          Additional Services Available
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
              name: "Covenant Security",
              image: "/showcase-images/Client - Covenant Security.png",
            },
            {
              name: "Coast Remedial Solutions",
              image: "/showcase-images/Client - Coast Remedial Solutions.png",
            },
            {
              name: "Cadeaurable",
              image: "/showcase-images/Client - Cadeaurable.png",
            },
          ].map((project) => (
            <div
              key={project.name}
              className="group relative overflow-hidden rounded-xl"
            >
              <Image
                src={project.image}
                alt={`${project.name} branding by RAVENCI`}
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
              name: "1. Logo + Guidelines",
              price: "3,500",
              description:
                "The core brand elements every business needs. Logo, colour palette, typography, and a style guide so everything stays consistent as you grow.",
              accordionContent: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Custom logo design (3 initial concepts)</li>
    <li>Brand color palette</li>
    <li>Typography selection</li>
    <li>Business card design (double-sided)</li>
    <li>Letterhead design</li>
    <li>Email signature template</li>
    <li>Brand guidelines (PDF)</li>
    <li>Social media profile images</li>
    <li>6 weeks delivery</li>
    <li>3 revisions included</li>
    <li>All files in industry standard formats</li>
</ul>`,
            },
            {
              name: "2. Full Brand Identity",
              price: "10,000",
              description:
                "A complete brand system from logo to marketing materials, designed to represent the quality of your work.",
              accordionContent: `
<p class="mt-3 text-neutral-100">Brand Foundation</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Logo design or refinement (if needed)</li>
    <li>Extended brand guidelines (PDF)</li>
    <li>Brand color palette</li>
    <li>Typography system</li>
</ul>
<p class="mt-5 text-neutral-100">Print Materials</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Business card design (2 concepts)</li>
    <li>Business card printing (1000 QTY)</li>
    <li>Letterhead design</li>
    <li>A4 flyer or brochure design</li>
    <li>Invoice/quote template design</li>
</ul>
<p class="mt-5 text-neutral-100">Digital Assets</p>
<ul class="mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Email signature templates (3 variations)</li>
    <li>Social media profile images</li>
    <li>8 weeks delivery</li>
    <li>2 rounds of revisions per item</li>
    <li>All files in industry standard formats</li>
</ul>`,
            },
            {
              name: "3. Premium Signage",
              price: "175",
              description:
                "Shopfront signs, reception wall graphics, window graphics, outdoor banners, wayfinding signage, and A-frame signs. Installation support available.",
              accordionContent: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Custom signage design</li>
    <li>Shopfront and reception wall graphics</li>
    <li>Window graphics and outdoor banners</li>
    <li>Wayfinding and directional signage</li>
    <li>A-frame or sidewalk signs</li>
    <li>Print-ready files in all required formats</li>
    <li>Installation coordination available</li>
</ul>`,
            },
            {
              name: "4. Vehicle Wraps",
              price: "350",
              description:
                "Partial or full vehicle wraps for sedans, utes, vans, and buses. One of the best ongoing marketing tools for your business.",
              accordionContent: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Custom vehicle wrap design</li>
    <li>Partial or full wrap options</li>
    <li>Sedans, utes, vans, and buses</li>
    <li>Print-ready files to specification</li>
    <li>Installation coordination available</li>
    <li>Maintenance guidance included</li>
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
          Professional branding isn&apos;t a cost you absorb. It&apos;s the foundation
          that earns customer trust and drives revenue for years.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="p-6 rounded-xl border border-neutral-200 text-center">
            <p className="text-3xl font-bold text-ravenci-primary">$1.92</p>
            <p className="mt-1 text-sm text-neutral-500">per day</p>
            <p className="mt-3 text-sm text-neutral-700">
              Logo + Guidelines over 5 years
            </p>
          </div>
          <div className="p-6 rounded-xl border border-neutral-200 text-center">
            <p className="text-3xl font-bold text-ravenci-primary">$5.48</p>
            <p className="mt-1 text-sm text-neutral-500">per day</p>
            <p className="mt-3 text-sm text-neutral-700">
              Full Brand Identity over 5 years
            </p>
          </div>
          <div className="p-6 rounded-xl border border-ravenci-primary/30 bg-ravenci-primary/5 text-center">
            <p className="text-3xl font-bold text-ravenci-primary">5-10x</p>
            <p className="mt-1 text-sm text-neutral-500">trust factor</p>
            <p className="mt-3 text-sm text-neutral-700">
              Professional branding vs DIY design
            </p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto text-neutral-600 space-y-4">
          <p>
            Customers judge your business in seconds. Professional branding
            signals quality, builds trust, and justifies premium pricing. A
            $3,500 brand identity that helps you win even one extra client a
            month at $1,000 per job pays for itself in under four months.
          </p>
          <p>
            The real question isn&apos;t &ldquo;can I afford professional
            branding?&rdquo; It&apos;s &ldquo;can I afford to look like I
            don&apos;t take my business seriously?&rdquo;
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
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto`}
        >
          {[
            "Additional logo concepts beyond the included count",
            "Extended brand guidelines with detailed usage rules",
            "Large-format signage requiring structural engineering",
            "Multi-vehicle fleet wrap design and coordination",
            "Packaging design for product lines",
            "Photography direction and art direction",
            "Animation or motion graphics for digital assets",
            "Rush timelines (under 4 weeks)",
            "Multilingual brand materials",
            "Trade show and event material design",
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
              description: "Bring your brand online",
            },
            {
              name: "SEO & Content",
              href: "/seo-and-content",
              description: "Content that matches your brand voice",
            },
            {
              name: "Retainer Packages",
              href: "/retainer-packages",
              description: "Ongoing design and development support",
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
        <h2 className={`font-serif text-h3`}>Design Questions Answered</h2>
        <Accordion
          titleClassName={`py-6 text-lg`}
          items={[
            {
              title: `How long does design work typically take?`,
              summary: `Logo + Guidelines takes 6 weeks, Full Brand Identity 8 weeks, and Signage or Vehicle Wraps 4-6 weeks. RAVENCI provides regular updates throughout every project.`,
              content: `Brand Essentials: 6 weeks. Marketing Materials: 8 weeks. Signage & Vehicle Wraps: 4-6 weeks. We provide regular updates and involve you in every decision.`,
            },
            {
              title: `What if I don't like the initial concepts?`,
              summary: `Every RAVENCI package includes multiple revisions. Designs are refined until they perfectly capture your vision and business goals.`,
              content: `We include multiple revisions with every package. Our aim is that our designs perfectly capture your vision and business goals.`,
            },
            {
              title: `Do you handle printing and installation?`,
              summary: `RAVENCI works closely with trusted local suppliers and installers with near a decade of collaboration for all printing and installation needs.`,
              content: `Though we do not personally handle printing, we do, however, work closely with trusted local suppliers and installers that we have collaborated with for near a decade.`,
            },
            {
              title: `Can you work with our existing brand guidelines?`,
              summary: `Yes. RAVENCI can work within existing brand guidelines or help evolve and strengthen your current brand identity, assessing what works and what needs improvement.`,
              content: `Absolutely. We can work within existing brand guidelines or help evolve and strengthen your current brand identity. We'll assess what's working and what needs improvement.`,
            },
            {
              title: `What file formats do we receive?`,
              summary: `RAVENCI delivers all designs in industry standard formats including web-ready PNG and JPG, and print-ready PDF and SVG. Everything is organised and labeled for easy use.`,
              content: `Our designs and print-ready files are provide in industry standard formats. Where applicable, you will receive source web-ready files in PNG and JPG, and print-ready files in PDF and SVG versions. Everything is organised and labeled for easy use.`,
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
        startingPrice={3500}
        label="Request a Proposal"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Branding",
            name: "Branding & Brand Identity",
            description:
              "Professional branding and graphic design in Brisbane. From logo and guidelines to full brand identity systems for established businesses.",
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
              name: "Branding Packages",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Logo + Guidelines",
                  price: "3500",
                  priceCurrency: "AUD",
                  description:
                    "Custom logo design with 3 concepts, brand colour palette, typography, business card, letterhead, email signature, brand guidelines PDF, and social media assets. 6 weeks delivery.",
                },
                {
                  "@type": "Offer",
                  name: "Full Brand Identity",
                  price: "10000",
                  priceCurrency: "AUD",
                  description:
                    "Complete brand system including logo, extended guidelines, print materials, business cards with printing, flyer or brochure, invoice templates, and digital assets. 8 weeks delivery.",
                },
                {
                  "@type": "Offer",
                  name: "Premium Signage",
                  price: "175",
                  priceCurrency: "AUD",
                  description:
                    "Shopfront signs, reception wall graphics, window graphics, outdoor banners, wayfinding signage, and A-frame signs with installation coordination.",
                },
                {
                  "@type": "Offer",
                  name: "Vehicle Wraps",
                  price: "350",
                  priceCurrency: "AUD",
                  description:
                    "Partial or full vehicle wraps for sedans, utes, vans, and buses with print-ready files and installation coordination.",
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
                name: "How long does design work typically take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Logo + Guidelines takes 6 weeks, Full Brand Identity 8 weeks, and Signage or Vehicle Wraps 4-6 weeks. RAVENCI provides regular updates throughout every project.",
                },
              },
              {
                "@type": "Question",
                name: "What if I don't like the initial concepts?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Every RAVENCI package includes multiple revisions. Designs are refined until they perfectly capture your vision and business goals.",
                },
              },
              {
                "@type": "Question",
                name: "Do you handle printing and installation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RAVENCI works closely with trusted local suppliers and installers with near a decade of collaboration for all printing and installation needs.",
                },
              },
              {
                "@type": "Question",
                name: "Can you work with our existing brand guidelines?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. RAVENCI can work within existing brand guidelines or help evolve and strengthen your current brand identity, assessing what works and what needs improvement.",
                },
              },
              {
                "@type": "Question",
                name: "What file formats do we receive?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RAVENCI delivers all designs in industry standard formats including web-ready PNG and JPG, and print-ready PDF and SVG. Everything is organised and labeled for easy use.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
