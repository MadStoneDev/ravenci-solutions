import Link from "next/link";

import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";

import Accordion from "@/components/accordion";
import Breadcrumbs from "@/components/breadcrumbs";
import PriceButton from "@/components/price-button";
import StickyCTA from "@/components/sticky-cta";
import TestimonialsSingle from "@/components/testimonials-single";
import { getTestimonialsForIndustry } from "@/data/testimonials";

export const metadata = {
  title:
    "Construction & Property Developer Website Design Brisbane | RAVENCI Solutions",
  description:
    "Websites built for builders. Project portfolios, lead generation, QBCC licence display, mobile-friendly for on-site teams, 85+ PageSpeed guaranteed. Brisbane team, 25+ years experience. From $4,950.",
  alternates: { canonical: "/construction" },
};

const features = [
  {
    title: "Project Portfolio Showcase",
    description:
      "Display completed and in-progress builds with high-quality galleries, project details, and before/after imagery",
  },
  {
    title: "Lead Generation Forms",
    description:
      "Capture enquiries from developers, architects, and property owners with forms designed to qualify leads",
  },
  {
    title: "Mobile-Ready for Site",
    description:
      "Your team and prospects check your site on phones and tablets. Every page is built to load fast and look great on any device",
  },
  {
    title: "Team & Capability Showcase",
    description:
      "Highlight your team, licences, certifications, and capabilities to build trust with prospective clients",
  },
  {
    title: "Your Portfolio Loads Instantly",
    description:
      "Construction work generates massive photos. We make sure those beautiful project shots load in seconds, even on a phone in the field",
  },
  {
    title: "Multi-Project Management",
    description:
      "Easily add new projects, update progress, and archive completed work through a simple content management system",
  },
  {
    title: "Tender & Document Downloads",
    description:
      "Provide downloadable capability statements, safety documentation, and project summaries directly from your site",
  },
  {
    title: "Local SEO for Construction",
    description:
      "Rank for construction-related searches in Brisbane and Southeast Queensland with targeted local SEO",
  },
  {
    title: "QBCC Licence & Insurance Display",
    description:
      "Prominently display your QBCC licence number, insurance details, and certifications so prospects trust you immediately",
  },
  {
    title: "Video & Drone Footage",
    description:
      "Embed project walkthroughs, drone footage, and timelapse videos directly into project pages without slowing your site down",
  },
];

const businessTypes = [
  {
    title: "Residential Builders",
    description:
      "Custom home galleries, display home locations, inclusions lists, house and land packages, and new home enquiry forms with budget qualifiers",
  },
  {
    title: "Commercial Construction",
    description:
      "Capability statements, project scale indicators, safety records, multi-sector experience showcase, and tender submission portals",
  },
  {
    title: "Renovation & Extension Specialists",
    description:
      "Before/after galleries, suburb-specific landing pages, renovation cost guides, and consultation booking forms",
  },
  {
    title: "Property Developers",
    description:
      "Off-the-plan sales pages, project timelines, investor information packs, real estate platform integration, and construction progress updates",
  },
  {
    title: "Civil & Infrastructure",
    description:
      "Government tender capability, project scale documentation, fleet and equipment showcase, and safety compliance displays",
  },
  {
    title: "Trade Subcontractors",
    description:
      "Service area maps, availability calendars, builder referral programs, licence verification displays, and quick-quote forms",
  },
];

const integrations = [
  { name: "HubSpot", description: "CRM and lead management" },
  { name: "Procore", description: "Construction project management" },
  { name: "CoConstruct", description: "Residential builder management" },
  { name: "Buildertrend", description: "Project scheduling" },
  { name: "Xero", description: "Accounting and invoicing" },
  { name: "Google Business", description: "Maps and local visibility" },
  { name: "Calendly", description: "Consultation booking" },
  { name: "Mailchimp", description: "Email marketing" },
  { name: "realestate.com.au", description: "Property listings" },
  { name: "Domain", description: "Property listings" },
];

const seoKeywords = [
  "builder brisbane",
  "custom home builder brisbane",
  "commercial construction brisbane",
  "renovation builder brisbane",
  "property developer brisbane",
  "construction company near me",
  "home builder southeast queensland",
  "granny flat builder brisbane",
  "knockdown rebuild brisbane",
  "QBCC licensed builder",
  "new home builder northside",
  "extension builder southside",
];

const faqItems = [
  {
    title: "Can you build a project portfolio that we can update ourselves?",
    summary:
      "Yes. RAVENCI sets up an easy-to-use CMS where your team can add projects, upload photos, update progress, and archive completed builds without a developer. Training is included.",
    content:
      "Yes. We set up an easy-to-use content management system where your team can add new projects, upload photos, update progress details, and archive completed builds. No developer required for day-to-day updates. We provide hands-on training as part of the handover, and most teams are confident adding projects within a day.",
  },
  {
    title: "Do you work with property developers too?",
    summary:
      "Yes. RAVENCI builds property developer websites with off-the-plan sales pages, project timelines, investor information packs, construction progress photo updates, and real estate platform integration.",
    content:
      "Absolutely. Property developer sites have different needs: off-the-plan sales pages with interactive floor plans, project timelines showing construction progress, investor information packs, integration with realestate.com.au and Domain, and construction update photo galleries that keep buyers engaged throughout the build.",
  },
  {
    title: "Our project photos are huge. Will that slow the site down?",
    summary:
      "No. RAVENCI uses automatic compression, responsive image sizing, lazy loading, and modern formats like WebP and AVIF. Your portfolio loads fast with a guaranteed 85+ PageSpeed score.",
    content:
      "No. We implement automatic compression, responsive image sizing (serving smaller files on mobile), lazy loading so images only download as visitors scroll, and modern formats like WebP and AVIF that are 30-50% smaller than JPEG. Your portfolio will look sharp and load fast. We guarantee 85+ PageSpeed scores even with image-heavy project pages.",
  },
  {
    title: "Can you integrate with our CRM or project management tools?",
    summary:
      "Yes. RAVENCI integrates with Procore, CoConstruct, Buildertrend, HubSpot, Salesforce, and most CRM systems with an API. Lead form submissions flow directly into your existing pipeline.",
    content:
      "We integrate with Procore, CoConstruct, Buildertrend, HubSpot, Salesforce, and most systems that offer an API. The most common setup: lead form submissions flow directly into your CRM with the enquiry type, budget range, and project details attached. No manual data entry.",
  },
  {
    title: "How long does a construction website take to build?",
    summary:
      "Most construction websites take 5-8 weeks. A standard site with portfolio and lead generation runs 5-6 weeks. Sites with project databases, CRM integration, or property developer features take 6-8 weeks.",
    content:
      "Most construction company websites take 5-8 weeks depending on scope. A standard site with project portfolio and lead generation runs 5-6 weeks. Sites with extensive project databases, CRM integration, investor portals, or off-the-plan sales features typically take 6-8 weeks. We provide a detailed timeline during our initial consultation.",
  },
  {
    title: "Can we show project progress to existing clients?",
    summary:
      "Yes. RAVENCI builds password-protected client portals where homeowners or investors can view construction progress photos, milestone updates, and project timelines specific to their build.",
    content:
      "Yes. We can build password-protected client portals where homeowners or investors see construction progress photos, milestone updates, and project timelines specific to their build. You upload progress photos through the CMS and the client gets notified. It builds trust and reduces 'how is my build going?' phone calls.",
  },
  {
    title: "Do you help with Google Maps and local search visibility?",
    summary:
      "Yes. RAVENCI optimises your Google Business Profile, builds suburb-specific landing pages, implements construction schema markup, and targets high-intent local searches like 'builder near me' and 'custom home builder brisbane'.",
    content:
      "Yes. We optimise your Google Business Profile with the right categories and service areas, build suburb-specific landing pages that target local searches, implement construction business schema markup, and target high-intent keywords like 'builder near me', 'custom home builder brisbane', and 'renovation specialist [suburb]'. Most construction clients see local visibility improvements within 3-4 months.",
  },
  {
    title: "Can you display our QBCC licence and insurance details?",
    summary:
      "Yes. RAVENCI prominently displays your QBCC licence number, insurance details, certifications, and safety records. These trust signals are critical for Queensland construction businesses.",
    content:
      "Absolutely. We prominently display your QBCC licence number with a verification link, public liability and professional indemnity details, WorkCover information, and any specialist certifications. These trust signals are critical in Queensland's construction industry and we position them where prospects look for them.",
  },
  {
    title: "What about the 2032 Olympics opportunity?",
    summary:
      "Brisbane's construction sector is booming ahead of 2032. A professional digital presence positions you to win infrastructure, venue, accommodation, and urban renewal contracts flowing from Olympic preparation.",
    content:
      "Brisbane's construction sector is experiencing significant growth ahead of the 2032 Olympics. Infrastructure projects, venue construction, accommodation builds, and urban renewal work are all flowing. A professional digital presence with capability statements, safety records, and project portfolios positions you to be found by larger contractors and government agencies allocating this work.",
  },
  {
    title: "Do you provide ongoing support after launch?",
    summary:
      "Yes. All construction websites include 30 days of post-launch support. Ongoing retainer packages from $275/month cover hosting, security, portfolio updates, and SEO.",
    content:
      "Every project includes 30 days of post-launch support for bug fixes and adjustments. After that, our retainer packages start at $275/month covering hosting, security monitoring, CMS updates, and minor content changes. Most construction clients use the retainer hours for adding new project case studies and seasonal content updates.",
  },
];

export default function ConstructionPage() {
  const industryTestimonials = getTestimonialsForIndustry("construction");

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
                name: "Construction Websites",
                item: "https://ravenci.solutions/construction",
              },
            ],
          }),
        }}
      />
      {/* Hero */}
      <section
        className={`content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 min-h-[250px] bg-white`}
      >
        <article className={`max-w-2xl col-span-12 flex flex-col gap-2`}>
          <Breadcrumbs items={[{ label: "Construction Websites" }]} />
          <h1 className={`mt-2 text-4xl md:text-5xl lg:text-h1 font-medium`}>
            Websites Built for Builders
          </h1>
          <h2
            className={`max-w-2xl text-2xl md:text-3xl lg:text-h2 font-light`}
            style={{ lineHeight: "2.25rem" }}
          >
            Project portfolios, lead generation, and a digital presence that
            wins work, built for construction companies and property developers
            across Brisbane and Southeast Queensland
          </h2>
          <p className={`mt-6 max-w-2xl text-neutral-500/80`}>
            RAVENCI Solutions builds websites for construction companies and
            property developers in Brisbane. From $4,950, we deliver project
            portfolio showcases, lead generation systems, heavy image
            optimisation, QBCC licence display, client progress portals, and
            local SEO that targets high-intent searches. 85+ PageSpeed
            guaranteed with 25+ years of experience.
          </p>
        </article>
      </section>

      {/* Social proof bar */}
      <section
        className={`content-section py-12 px-5 sm:px-20 xl:px-36 bg-ravenci-primary text-white`}
      >
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center`}
        >
          <div>
            <p className={`text-4xl md:text-5xl font-bold`}>20+</p>
            <p className={`mt-2 text-sm text-white/80 font-light`}>
              Years Experience
            </p>
          </div>
          <div>
            <p className={`text-4xl md:text-5xl font-bold`}>75+</p>
            <p className={`mt-2 text-sm text-white/80 font-light`}>
              Australian Businesses
            </p>
          </div>
          <div>
            <p className={`text-4xl md:text-5xl font-bold`}>450+</p>
            <p className={`mt-2 text-sm text-white/80 font-light`}>
              Projects Delivered
            </p>
          </div>
          <div>
            <p className={`text-4xl md:text-5xl font-bold`}>85+</p>
            <p className={`mt-2 text-sm text-white/80 font-light`}>
              PageSpeed Score
            </p>
          </div>
        </div>
      </section>

      {/* Two-column features */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 bg-white`}>
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 space-y-14 bg-neutral-200/50`}
        >
          <article className={`max-w-lg`}>
            <h3 className={`mb-8 font-serif text-h3 font-bold`}>
              What Construction Companies Need
            </h3>
            <ul className={`flex flex-col gap-8`}>
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <IconCircleCheckFilled
                    className="text-ravenci-primary flex-shrink-0"
                    size={24}
                  />
                  <p className={`text-neutral-500/80`}>
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

        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark`}
        >
          <article className={`max-w-lg`}>
            <h3 className={`font-serif text-h3 font-bold text-white`}>
              Why Choose RAVENCI for Construction?
            </h3>
            <div className={`my-4 text-neutral-400/90`}>
              Your builds speak for themselves on-site. Your website should do
              the same online.
            </div>

            <ul className={`flex flex-col gap-4 mb-6 text-neutral-400/90`}>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white flex-shrink-0`}
                />
                25+ years building digital platforms for Australian businesses
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white flex-shrink-0`}
                />
                Brisbane-based. We know the local market and the 2032 opportunity
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white flex-shrink-0`}
                />
                Portfolio sites that load fast despite heavy imagery
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white flex-shrink-0`}
                />
                CRM integration so leads flow straight into your pipeline
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white flex-shrink-0`}
                />
                Ongoing support. We don&apos;t disappear after launch
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white flex-shrink-0`}
                />
                85+ PageSpeed score guaranteed
              </li>
            </ul>

            <p className={`mb-4 text-neutral-400/90`}>
              In construction, your reputation is built project by project. Your
              website should showcase that track record with the same quality
              you put into your builds.
            </p>

            <p className={`mb-8 text-neutral-400/90`}>
              With Brisbane&apos;s construction sector booming ahead of the 2032
              Olympics, having a professional digital presence isn&apos;t
              optional. It&apos;s how you win the next project.
            </p>

            <div className={`text-white`}>
              <PriceButton
                price={"4,950"}
                link={`/launch-your-vision`}
                frequency={""}
                includeFrom={true}
                callToAction={`Construction Website`}
                subCallToAction={`Request a proposal`}
              />
            </div>
          </article>
        </section>
      </div>

      {/* Business Types */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-white`}
      >
        <h3 className={`mb-4 font-serif text-h3 font-bold text-center`}>
          Built for Every Type of Builder
        </h3>
        <p className={`mb-12 text-center text-neutral-500/80 max-w-2xl mx-auto`}>
          Whether you build custom homes or high-rise towers, we build websites
          tailored to how your specific business wins work.
        </p>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto`}
        >
          {businessTypes.map((type, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-neutral-200 hover:border-ravenci-primary/30 transition-colors"
            >
              <h4 className="font-bold text-ravenci-dark mb-2">{type.title}</h4>
              <p className="text-sm text-neutral-500/80">{type.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-neutral-50`}
      >
        <h3 className={`mb-4 font-serif text-h3 font-bold text-center`}>
          Integrations We Work With
        </h3>
        <p className={`mb-12 text-center text-neutral-500/80 max-w-2xl mx-auto`}>
          Your website connects to the project management, CRM, and listing
          platforms you already use. Leads flow in, data stays in sync, and
          nothing gets double-handled.
        </p>
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto`}
        >
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="p-4 text-center rounded-lg border border-neutral-200 bg-white"
            >
              <p className="font-bold text-sm text-ravenci-dark">
                {integration.name}
              </p>
              <p className="mt-1 text-xs text-neutral-400">
                {integration.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Keywords Section */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark`}
      >
        <h3
          className={`mb-4 font-serif text-h3 font-bold text-white text-center`}
        >
          We Target the Searches That Win You Work
        </h3>
        <p
          className={`mb-12 text-center text-neutral-400/90 max-w-2xl mx-auto`}
        >
          Construction businesses get found through specific, high-intent local
          searches. We build pages and content targeting the exact terms your
          ideal clients type into Google.
        </p>
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto`}>
          {seoKeywords.map((keyword, index) => (
            <div
              key={index}
              className="px-4 py-3 text-center rounded-lg border border-neutral-700 bg-neutral-800/50"
            >
              <p className="text-sm text-neutral-300">{keyword}</p>
            </div>
          ))}
        </div>
        <p className={`mt-8 text-center text-sm text-neutral-500`}>
          These are examples. We research the specific terms your competitors
          rank for and build a strategy to outperform them.
        </p>
      </section>

      {/* Testimonial */}
      {industryTestimonials[0] && (
        <TestimonialsSingle
          testimonial={{
            content: industryTestimonials[0].content,
            author: industryTestimonials[0].author,
            role: industryTestimonials[0].role,
            company: industryTestimonials[0].company,
            image: industryTestimonials[0].image || null,
          }}
          extraClassNames={`content-section bg-ravenci-dark`}
        />
      )}

      {/* Process */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-white`}
      >
        <h3 className={`mb-12 font-serif text-h3 font-bold text-center`}>
          How We Work with Construction Clients
        </h3>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto`}>
          {[
            {
              step: "01",
              title: "Discovery",
              description:
                "We learn your business, your target clients, and how you currently win work. Site visits welcome.",
            },
            {
              step: "02",
              title: "Structure & Design",
              description:
                "Portfolio layout, lead flow mapping, and content structure designed to convert the prospects you actually want.",
            },
            {
              step: "03",
              title: "Build & Optimise",
              description:
                "Image-heavy pages that still load in under 2 seconds. CRM connected. SEO baked in from day one.",
            },
            {
              step: "04",
              title: "Launch & Grow",
              description:
                "Staff training on the CMS, SEO handover document, and ongoing support to keep adding projects as you finish them.",
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <p className="text-4xl font-bold text-ravenci-primary/30">
                {item.step}
              </p>
              <h4 className="mt-2 font-bold text-ravenci-dark">{item.title}</h4>
              <p className="mt-2 text-sm text-neutral-500/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What Can Affect Pricing */}
      <section
        className={`content-section py-16 px-5 sm:px-20 xl:px-36 bg-neutral-50`}
      >
        <h3 className={`mb-8 font-serif text-h3 font-bold text-center`}>
          What Can Affect Pricing
        </h3>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto`}>
          {[
            "Number of project case studies to set up initially",
            "CRM or project management software integration",
            "Client progress portal with login access",
            "Property developer features (off-plan, investor packs)",
            "Video and drone footage embedding and hosting",
            "Multi-location or multi-division setup",
            "Tender document management system",
            "Content migration from an existing website",
            "Professional photography or copywriting",
            "Ongoing SEO and suburb-specific landing pages",
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

      {/* FAQ */}
      <section
        className={`content-section py-16 px-6 md:px-10 flex flex-col items-center justify-center gap-3 bg-white`}
      >
        <h2 className={`font-serif text-h3`}>Construction Website FAQs</h2>
        <Accordion titleClassName={`py-6 text-lg`} items={faqItems} />
      </section>

      {/* CTA */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 flex flex-col items-center text-center bg-ravenci-primary text-white`}
      >
        <h2 className={`mb-4 text-3xl md:text-4xl font-medium`}>
          Ready to Build a Website That Wins Projects?
        </h2>
        <p className={`mb-10 max-w-md text-white/80`}>
          Let&apos;s build a digital presence that matches the quality of your
          work. Start with a free consultation.
        </p>
        <Link
          href={`/launch-your-vision`}
          className={`group relative px-8 py-3 grid place-content-center bg-white rounded-full text-ravenci-dark hover:text-white transition-all duration-300 ease-in-out`}
        >
          <span className={`z-20`}>Launch Your Vision</span>
          <div
            className={`absolute top-0 bottom-full group-hover:bottom-0 left-0 right-0 bg-ravenci-dark z-0 transition-all duration-500 ease-in-out`}
          ></div>
          <div
            className={`absolute top-0 bottom-0 left-0 right-0 rounded-full border-2 border-white z-10`}
          ></div>
        </Link>
      </section>

      {/* Footer spacer */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 grid grid-cols-5 gap-10 min-h-[150px] bg-white`}
      ></section>

      {/* Mobile sticky CTA */}
      <StickyCTA
        link="/launch-your-vision"
        startingPrice={4950}
        label="Request a Proposal"
      />

      {/* Service JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Construction Website Design",
            name: "Construction & Property Developer Website Design Brisbane",
            description:
              "Websites built for builders. Project portfolios, lead generation, QBCC licence display, mobile-friendly design for on-site teams, 85+ PageSpeed guaranteed. From $4,950.",
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
              name: "Construction Website Packages",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Construction Website",
                  price: "4950",
                  priceCurrency: "AUD",
                  description:
                    "Custom construction website with project portfolio, lead generation, QBCC licence display, image optimisation, and 85+ PageSpeed score.",
                },
              ],
            },
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
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.title,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.summary || item.content,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
