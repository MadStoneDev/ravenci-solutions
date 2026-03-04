import Link from "next/link";

import {
  IconCheck,
  IconCircleCheckFilled,
} from "@tabler/icons-react";

import Accordion from "@/components/accordion";
import Breadcrumbs from "@/components/breadcrumbs";
import PriceButton from "@/components/price-button";
import TestimonialsSingle from "@/components/testimonials-single";
import { getTestimonialsForIndustry } from "@/data/testimonials";

export const metadata = {
  title:
    "Construction & Property Developer Website Design Brisbane | RAVENCI Solutions",
  description:
    "Websites built for builders. Project portfolios, lead generation, mobile-friendly design for on-site teams — by a Brisbane team with 20+ years experience.",
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
    title: "Heavy Image Handling",
    description:
      "Construction sites generate huge photos. We optimise and compress imagery so your portfolio loads in seconds, not minutes",
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
];

const faqItems = [
  {
    title: "Can you build a project portfolio that we can update ourselves?",
    summary:
      "Yes. RAVENCI sets up an easy-to-use CMS where your team can add projects, upload photos, update progress, and archive completed builds without a developer. Training is included.",
    content:
      "Yes. We set up an easy-to-use content management system where your team can add new projects, upload photos, update progress, and archive completed builds — no developer required. We provide training as part of the handover.",
  },
  {
    title: "Do you work with property developers too?",
    summary:
      "Yes. RAVENCI builds property developer websites with off-the-plan sales pages, project timelines, investor information, and real estate platform integration, tailored to the development lifecycle.",
    content:
      "Absolutely. Property developer sites have different needs — off-the-plan sales pages, project timelines, investor information, and integration with real estate platforms. We build sites tailored to the development lifecycle.",
  },
  {
    title: "Our project photos are huge. Will that slow the site down?",
    summary:
      "No. RAVENCI uses automatic compression, responsive image sizing, lazy loading, and modern formats like WebP. Your portfolio loads fast with a guaranteed 80+ PageSpeed score.",
    content:
      "No. We implement advanced image optimisation including automatic compression, responsive image sizing, lazy loading, and modern formats like WebP. Your portfolio will look sharp and load fast — we guarantee 80+ PageSpeed scores.",
  },
  {
    title: "Can you integrate with our CRM or project management tools?",
    summary:
      "Yes. RAVENCI integrates with most CRM systems offering an API, including HubSpot, Salesforce, and industry-specific tools. Lead form submissions flow directly into your existing pipeline.",
    content:
      "We can integrate with most CRM systems that offer an API — including HubSpot, Salesforce, and industry-specific tools. Lead form submissions can flow directly into your existing pipeline.",
  },
  {
    title: "How long does a construction website take to build?",
    summary:
      "Most construction websites take 5-8 weeks. A standard site with portfolio and lead generation runs 5-6 weeks. Sites with extensive databases, CRM integration, or custom features take 6-8 weeks.",
    content:
      "Most construction company websites take 5-8 weeks depending on the scope. A standard site with project portfolio and lead generation runs 5-6 weeks. Sites with extensive project databases, CRM integration, or custom features typically take 6-8 weeks.",
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
            wins work — built for construction companies and property developers
            across Brisbane
          </h2>
          <p className={`mt-6 max-w-2xl text-neutral-500/80`}>
            RAVENCI Solutions builds websites for construction companies and
            property developers in Brisbane. From $8,000, we deliver project
            portfolio showcases, lead generation forms, heavy image
            optimisation, and local SEO. 80+ PageSpeed guaranteed with 20+ years
            of experience.
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
            <p className={`text-4xl md:text-5xl font-bold`}>30+</p>
            <p className={`mt-2 text-sm text-white/80 font-light`}>
              Businesses Served
            </p>
          </div>
          <div>
            <p className={`text-4xl md:text-5xl font-bold`}>80+</p>
            <p className={`mt-2 text-sm text-white/80 font-light`}>
              PageSpeed Score
            </p>
          </div>
          <div>
            <p className={`text-4xl md:text-5xl font-bold`}>100%</p>
            <p className={`mt-2 text-sm text-white/80 font-light`}>
              Australian Owned
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
                20+ years building digital platforms for Australian businesses
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white flex-shrink-0`}
                />
                Brisbane-based — we know the local market
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
                Ongoing support — we don't disappear after launch
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white flex-shrink-0`}
                />
                80+ PageSpeed score guaranteed
              </li>
            </ul>

            <p className={`mb-4 text-neutral-400/90`}>
              In construction, your reputation is built project by project. Your
              website should showcase that track record with the same quality
              you put into your builds.
            </p>

            <p className={`mb-8 text-neutral-400/90`}>
              With Brisbane's construction sector booming ahead of the 2032
              Olympics, having a professional digital presence isn't optional —
              it's how you win the next project.
            </p>

            <div className={`text-white`}>
              <PriceButton
                price={"8,000"}
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

      {/* FAQ */}
      <section
        className={`content-section py-16 px-6 md:px-10 flex flex-col items-center justify-center gap-3 bg-white`}
      >
        <h2 className={`font-serif text-h3`}>Construction Website FAQs</h2>
        <Accordion
          titleClassName={`py-6 text-lg`}
          items={faqItems}
        />
      </section>

      {/* CTA */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 flex flex-col items-center text-center bg-ravenci-primary text-white`}
      >
        <h2 className={`mb-4 text-3xl md:text-4xl font-medium`}>
          Ready to Build a Website That Wins Projects?
        </h2>
        <p className={`mb-10 max-w-md text-white/80`}>
          Let's build a digital presence that matches the quality of your work.
          Start with a free consultation.
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
              "Websites built for builders. Project portfolios, lead generation, mobile-friendly design for on-site teams — by a Brisbane team with 20+ years experience.",
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
                  price: "8000",
                  priceCurrency: "AUD",
                  description:
                    "Custom construction website with project portfolio, lead generation, mobile-friendly design, and 80+ PageSpeed score.",
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
