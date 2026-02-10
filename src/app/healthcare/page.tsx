import Link from "next/link";

import {
  IconCheck,
  IconCircleCheckFilled,
} from "@tabler/icons-react";

import Accordion from "@/components/accordion";
import PriceButton from "@/components/price-button";
import TestimonialsSingle from "@/components/testimonials-single";
import { getTestimonialsForIndustry } from "@/data/testimonials";

export const metadata = {
  title: "Medical & Healthcare Website Design Brisbane | RAVENCI Solutions",
  description:
    "Websites for healthcare professionals. Patient portals, online booking, privacy compliance, NDIS-ready — built by a Brisbane team with 20+ years experience.",
};

const features = [
  {
    title: "Online Booking Integration",
    description:
      "Let patients book appointments directly from your website, reducing phone calls and admin overhead",
  },
  {
    title: "Patient Portal Ready",
    description:
      "Secure patient-facing areas for forms, results, and communication — built with privacy in mind",
  },
  {
    title: "Privacy & Compliance",
    description:
      "Australian Privacy Principles (APPs) considered from day one. SSL, secure forms, and data handling best practices",
  },
  {
    title: "NDIS Provider Friendly",
    description:
      "Clear service listings, pricing transparency, and accessibility features that NDIS participants expect",
  },
  {
    title: "Mobile-First Design",
    description:
      "Patients search on their phones. Your site will be fast, clear, and easy to navigate on every device",
  },
  {
    title: "Multi-Location Support",
    description:
      "Multiple clinics or practices? We build sites that handle multiple locations with individual pages, maps, and contact details",
  },
  {
    title: "Practitioner Profiles",
    description:
      "Showcase your team with professional bios, qualifications, and areas of specialisation",
  },
  {
    title: "SEO for Healthcare",
    description:
      "Targeted local SEO so patients searching for your services in Brisbane and surrounds find you first",
  },
];

const faqItems = [
  {
    title: "How do you handle patient privacy and compliance?",
    content:
      "We build with the Australian Privacy Principles (APPs) in mind. All forms use SSL encryption, we implement secure data handling practices, and we can integrate with compliant third-party systems for patient data storage. While we're not legal advisors, we ensure the technical foundations support your compliance requirements.",
  },
  {
    title: "Can you integrate with our practice management software?",
    content:
      "Yes. We regularly work with popular practice management systems and booking platforms including Cliniko, Halaxy, HotDoc, and HealthEngine. If your system offers an API or embed option, we can integrate it into your website.",
  },
  {
    title: "Do you build NDIS provider websites?",
    content:
      "Absolutely. NDIS provider sites need clear service descriptions, transparent pricing, accessibility compliance, and easy navigation. We build sites that help participants and plan managers find and understand your services quickly.",
  },
  {
    title: "Can you handle multi-location practices?",
    content:
      "Yes. We build multi-location sites with individual location pages, embedded maps, separate contact details, and location-specific SEO. Patients can easily find their nearest clinic and see relevant practitioners.",
  },
  {
    title: "How long does a healthcare website take to build?",
    content:
      "Most healthcare websites take 4-8 weeks depending on complexity. A straightforward practice site with booking integration runs 4-5 weeks. Sites with patient portals, multiple locations, or custom integrations typically take 6-8 weeks. We provide a detailed timeline during our initial consultation.",
  },
];

export default function HealthcarePage() {
  const industryTestimonials = getTestimonialsForIndustry("healthcare");

  return (
    <main className={`flex flex-col`}>
      {/* Hero */}
      <section
        className={`content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 min-h-[250px] bg-white`}
      >
        <article className={`col-span-12 flex flex-col`}>
          <h1 className={`text-4xl md:text-5xl lg:text-h1 font-medium`}>
            Websites for Healthcare Professionals
          </h1>
          <h2
            className={`max-w-4xl text-2xl md:text-3xl lg:text-h2 font-light`}
          >
            Patient-focused, privacy-aware digital platforms built for medical
            practices, allied health, and NDIS providers across Brisbane
          </h2>
        </article>
      </section>

      {/* Social proof bar */}
      <section
        className={`p-10 flex flex-col items-center gap-3 bg-ravenci-primary text-white text-center`}
      >
        <div className={`max-w-2xl`}>
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8`}
          >
            <div>
              <p className={`text-3xl font-bold`}>20+</p>
              <p className={`mt-1 text-sm text-white/70`}>Years Experience</p>
            </div>
            <div>
              <p className={`text-3xl font-bold`}>Healthcare</p>
              <p className={`mt-1 text-sm text-white/70`}>Clients Served</p>
            </div>
            <div>
              <p className={`text-3xl font-bold`}>95+</p>
              <p className={`mt-1 text-sm text-white/70`}>PageSpeed Score</p>
            </div>
            <div>
              <p className={`text-3xl font-bold`}>Privacy</p>
              <p className={`mt-1 text-sm text-white/70`}>Aware Builds</p>
            </div>
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
              What Healthcare Providers Need
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
              Why Choose RAVENCI for Healthcare?
            </h3>
            <div className={`my-4 text-neutral-400/90`}>
              Your patients trust you with their health. They should be able to
              trust your website too.
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
                Brisbane-based — local support, local understanding
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white flex-shrink-0`}
                />
                Privacy-first approach built into every project
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white flex-shrink-0`}
                />
                Ongoing maintenance and support post-launch
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
              We understand that healthcare websites aren't just marketing
              tools — they're how patients find you, book with you, and build
              trust in your practice before they walk through the door.
            </p>

            <p className={`mb-8 text-neutral-400/90`}>
              That's why every healthcare site we build prioritises clarity,
              speed, and privacy alongside a professional design that reflects
              the quality of care you provide.
            </p>

            <div className={`text-white`}>
              <PriceButton
                price={"5,000"}
                link={`/launch-your-vision`}
                frequency={""}
                includeFrom={true}
                callToAction={`Healthcare Website`}
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
        <h2 className={`font-serif text-h3`}>Healthcare Website FAQs</h2>
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
          Ready to Modernise Your Practice?
        </h2>
        <p className={`mb-10 max-w-md text-white/80`}>
          Let's build a website that works as hard as your team does. Start with
          a free consultation.
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
                text: item.content,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
