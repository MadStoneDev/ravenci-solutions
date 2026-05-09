import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import Link from "next/link";

import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";

import Accordion from "@/components/accordion";
import Breadcrumbs from "@/components/breadcrumbs";
import PriceButton from "@/components/price-button";
import StickyCTA from "@/components/sticky-cta";
import TestimonialsSingle from "@/components/testimonials-single";
import { getTestimonialsForIndustry } from "@/data/testimonials";

export const metadata = {
  title: "Healthcare Websites Brisbane | RAVENCI Solutions",
  description:
    "Websites for healthcare professionals in Brisbane. Patient portals, online booking, Australian Privacy Principles compliance, NDIS-ready, Cliniko and HotDoc integration. From $4,950.",
  alternates: { canonical: "/healthcare" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Healthcare Websites Brisbane | RAVENCI Solutions",
    description:
      "Websites for healthcare professionals in Brisbane. Patient portals, online booking, Australian Privacy Principles compliance, NDIS-ready, Cliniko and HotDoc integration. From $4,950.",
    url: "/healthcare",
    type: "website",
  },
  twitter: {
    ...TWITTER_DEFAULTS,
  },
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
      "Patients can securely access forms, results, and message your team online, without you having to mail or call them",
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
  {
    title: "Telehealth Integration",
    description:
      "Video consultation booking and access built into your site so patients can see you remotely when needed",
  },
  {
    title: "Accessibility Compliance",
    description:
      "WCAG 2.1 AA standards met by default. Screen reader support, keyboard navigation, and clear contrast for all users",
  },
];

const practiceTypes = [
  {
    title: "General Practices & Medical Centres",
    description:
      "Multi-practitioner sites with individual doctor profiles, bulk billing information, online booking for each GP, and new patient registration forms",
  },
  {
    title: "Dental Practices",
    description:
      "Service-focused sites with treatment pages, before/after galleries, payment plan information, and emergency booking options",
  },
  {
    title: "Physiotherapy & Allied Health",
    description:
      "Condition-specific landing pages, exercise libraries, WorkCover and TAC information, and class/group booking capability",
  },
  {
    title: "Psychology & Mental Health",
    description:
      "Sensitive, accessible design with therapist matching, Medicare rebate information, crisis resources, and secure intake forms",
  },
  {
    title: "Specialist Medical Practices",
    description:
      "Referral pathways, procedure information, pre-operative instructions, and referring doctor portals",
  },
  {
    title: "NDIS Providers & Disability Services",
    description:
      "Transparent pricing tables, service area maps, plan manager information, and easy-read content options for accessibility",
  },
];

const integrations = [
  { name: "Cliniko", description: "Practice management and booking" },
  { name: "Halaxy", description: "Allied health platform" },
  { name: "HotDoc", description: "Patient booking and recalls" },
  { name: "HealthEngine", description: "Booking and reviews" },
  { name: "Nookal", description: "Allied health practice management" },
  { name: "Best Practice", description: "Medical practice software" },
  { name: "Medical Director", description: "Clinical software" },
  { name: "Coviu", description: "Telehealth video consultations" },
  { name: "Stripe / Tyro", description: "Payment processing" },
  { name: "Mailchimp / MailerLite", description: "Patient newsletters" },
];

const compliancePoints = [
  {
    title: "APP 1 - Open and Transparent Management",
    description:
      "Clear privacy policy explaining what data you collect via forms, how it's stored, and who has access",
  },
  {
    title: "APP 6 - Use or Disclosure",
    description:
      "Form data is only sent to your practice email or integrated system. No third-party data sharing without consent",
  },
  {
    title: "APP 11 - Security of Personal Information",
    description:
      "SSL encryption on all pages, secure form submissions, and integration with compliant storage systems",
  },
  {
    title: "WCAG 2.1 AA Accessibility",
    description:
      "Keyboard navigation, screen reader support, sufficient colour contrast, and alt text on all images",
  },
  {
    title: "Cookie Consent & Analytics",
    description:
      "Proper consent management for tracking tools, respecting patient privacy preferences",
  },
];

const faqItems = [
  {
    title: "How do you handle patient privacy and compliance?",
    summary:
      "RAVENCI builds with Australian Privacy Principles (APPs) in mind. All forms use SSL encryption with secure data handling practices and compliant third-party integrations for patient data storage.",
    content:
      "We build with the Australian Privacy Principles (APPs) in mind from the start. All forms use SSL encryption, we implement secure data handling practices, and we integrate with compliant third-party systems for patient data storage. We never store patient health information on the website itself. Contact forms capture only what's needed and route directly to your secure practice management system. While we're not legal advisors, we ensure the technical foundations support your compliance requirements.",
  },
  {
    title: "Can you integrate with our practice management software?",
    summary:
      "Yes. RAVENCI integrates with popular practice management systems including Cliniko, Halaxy, HotDoc, HealthEngine, Nookal, Best Practice, and Medical Director. Any system with an API or embed option can be integrated.",
    content:
      "Yes. We regularly work with Cliniko, Halaxy, HotDoc, HealthEngine, Nookal, Best Practice, and Medical Director. If your system offers an API or embed option, we can integrate it. The most common setup is a booking widget embedded on your site that connects directly to your practice calendar, so availability is always real-time.",
  },
  {
    title: "Do you build NDIS provider websites?",
    summary:
      "Yes. RAVENCI builds NDIS provider websites with clear service descriptions, transparent pricing tables, accessibility compliance, service area maps, and easy navigation for participants, plan managers, and support coordinators.",
    content:
      "Absolutely. NDIS provider sites have specific requirements: transparent pricing tables aligned to NDIS price guides, clear service descriptions with outcomes focus, service area maps, plan manager and support coordinator information, and accessibility compliance so participants with diverse abilities can use the site. We also build easy-read versions of key content where needed.",
  },
  {
    title: "Can you handle multi-location practices?",
    summary:
      "Yes. RAVENCI builds multi-location sites with individual location pages, embedded maps, separate contact details, practitioner filtering by location, and location-specific SEO.",
    content:
      "Yes. We build multi-location sites with individual location pages, embedded maps, separate contact details, and location-specific SEO. Patients can filter practitioners by location, see location-specific services, and book at their preferred clinic. Each location page gets its own structured data for Google Maps visibility.",
  },
  {
    title: "How long does a healthcare website take to build?",
    summary:
      "Most healthcare websites take 4-8 weeks. A standard practice site with booking integration runs 4-5 weeks. Sites with patient portals, multiple locations, or custom integrations typically take 6-8 weeks.",
    content:
      "Most healthcare websites take 4-8 weeks depending on complexity. A straightforward practice site with booking integration runs 4-5 weeks. Sites with patient portals, multiple locations, or custom integrations typically take 6-8 weeks. We provide a detailed timeline during our initial consultation and keep you updated throughout.",
  },
  {
    title: "Do you provide ongoing support after launch?",
    summary:
      "Yes. All healthcare websites include 30 days of post-launch support. Ongoing maintenance and retainer packages are available from $275/month for continued updates, security monitoring, and content changes.",
    content:
      "Every project includes 30 days of post-launch support for bug fixes and adjustments. After that, our retainer packages start at $275/month and cover hosting, security monitoring, CMS updates, and minor content changes. Most healthcare clients opt for ongoing support since compliance requirements and practice information change regularly.",
  },
  {
    title: "Can patients fill out forms online before their appointment?",
    summary:
      "Yes. RAVENCI builds secure patient intake forms, new patient registration forms, health questionnaires, and consent forms that can be completed online and sent directly to your practice management system.",
    content:
      "Yes. We build secure patient intake forms, new patient registration forms, health questionnaires, and consent forms. These can be sent to patients via email before their appointment or accessed from your website. Submissions go directly to your practice management system or a secure inbox, not stored on the website.",
  },
  {
    title: "What about telehealth and video consultations?",
    summary:
      "RAVENCI integrates telehealth platforms like Coviu directly into your website. Patients can book telehealth appointments and access video consultations from their browser without downloading extra software.",
    content:
      "We integrate telehealth platforms like Coviu directly into your website. Patients can book telehealth-specific appointments through your normal booking system, then access the video consultation from their browser. No extra apps to download. The booking flow handles consent and pre-consultation questionnaires automatically.",
  },
  {
    title: "How do you handle SEO for healthcare practices?",
    summary:
      "RAVENCI targets high-intent local searches like 'GP near me' or 'physio Brisbane CBD'. We optimise Google Business Profile, build condition and service pages that rank, and implement medical schema markup for rich results.",
    content:
      "Healthcare SEO targets high-intent local searches: 'GP near me', 'physio Brisbane CBD', 'bulk billing doctor Northside'. We optimise your Google Business Profile, build condition-specific and service-specific pages that rank, implement medical practice schema markup, and ensure your site loads fast enough to satisfy Google's Core Web Vitals. Most practices see improvement within 3-6 months.",
  },
  {
    title: "Do you work with medical marketing compliance?",
    summary:
      "Yes. RAVENCI understands AHPRA advertising guidelines for regulated health professions. We avoid prohibited testimonials, unsubstantiated claims, and ensure all content meets advertising standards for your profession.",
    content:
      "Yes. We understand that regulated health professions have specific advertising rules under AHPRA guidelines. We avoid prohibited testimonials, unsubstantiated claims, and 'before and after' imagery where restricted. Content is written to inform rather than create unreasonable expectations. We work with your compliance team to ensure everything meets your profession's advertising standards.",
  },
];

export default function HealthcarePage() {
  const industryTestimonials = getTestimonialsForIndustry("healthcare");

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
                name: "Healthcare Websites",
                item: "https://ravenci.solutions/healthcare",
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
          <Breadcrumbs items={[{ label: "Healthcare Websites" }]} />
          <h1 className={`mt-2 text-4xl md:text-5xl lg:text-h1 font-medium`}>
            Websites for Healthcare Professionals
          </h1>
          <h2
            className={`max-w-2xl text-2xl md:text-3xl lg:text-h2 font-light`}
            style={{ lineHeight: "2.25rem" }}
          >
            Patient-focused, privacy-aware digital platforms built for medical
            practices, allied health, and NDIS providers across Brisbane
          </h2>
          <p className={`mt-6 max-w-2xl text-neutral-500/80`}>
            RAVENCI Solutions builds websites for healthcare professionals in
            Brisbane. From $4,950, we deliver online booking integration,
            patient portals, NDIS-ready features, telehealth capability, and
            privacy-compliant design. Australian Privacy Principles and AHPRA
            advertising guidelines considered from day one. 25+ years of
            digital experience. 85+ PageSpeed guaranteed.
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
            <p className={`text-4xl md:text-5xl font-bold`}>25+</p>
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
            <h2 className={`mb-8 font-serif text-h3 font-bold`}>
              What Healthcare Providers Need
            </h2>
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
            <h2 className={`font-serif text-h3 font-bold text-white`}>
              Why Choose RAVENCI for Healthcare?
            </h2>
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
                25+ years building digital platforms for Australian businesses
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white flex-shrink-0`}
                />
                Brisbane-based. Local support, local understanding
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
                AHPRA advertising guidelines understood and followed
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
              We understand that healthcare websites aren&apos;t just marketing
              tools. They&apos;re how patients find you, book with you, and
              build trust in your practice before they walk through the door.
            </p>

            <p className={`mb-8 text-neutral-400/90`}>
              That&apos;s why every healthcare site we build prioritises
              clarity, speed, and privacy alongside a professional design that
              reflects the quality of care you provide.
            </p>

            <div className={`text-white`}>
              <PriceButton
                price={"4,950"}
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

      {/* Practice Types */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-white`}
      >
        <h2
          className={`mb-4 font-serif text-h3 font-bold text-center`}
        >
          Built for Every Type of Practice
        </h2>
        <p className={`mb-12 text-center text-neutral-500/80 max-w-2xl mx-auto`}>
          Whether you&apos;re a solo practitioner or a multi-location group, we
          build websites tailored to how your specific practice type operates.
        </p>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto`}
        >
          {practiceTypes.map((type, index) => (
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
        <h2
          className={`mb-4 font-serif text-h3 font-bold text-center`}
        >
          Integrations We Work With
        </h2>
        <p className={`mb-12 text-center text-neutral-500/80 max-w-2xl mx-auto`}>
          Your website connects directly to the tools your practice already
          uses. Real-time availability, automated patient flows, and no
          double-handling of data.
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

      {/* Compliance & Privacy */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark`}
      >
        <h2
          className={`mb-4 font-serif text-h3 font-bold text-white text-center`}
        >
          Privacy & Compliance Built In
        </h2>
        <p
          className={`mb-12 text-center text-neutral-400/90 max-w-2xl mx-auto`}
        >
          Healthcare websites handle sensitive information. We build with
          Australian Privacy Principles in mind from day one, not bolted on as
          an afterthought.
        </p>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto`}>
          {compliancePoints.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-neutral-700 bg-neutral-800/50"
            >
              <h4 className="font-bold text-white text-sm mb-2">
                {point.title}
              </h4>
              <p className="text-sm text-neutral-400/90">{point.description}</p>
            </div>
          ))}
        </div>
        <p className={`mt-8 text-center text-sm text-neutral-500`}>
          We are not legal advisors. We provide technical implementation that
          supports your compliance requirements. Consult your privacy officer
          or legal team for compliance sign-off.
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
        <h2 className={`mb-12 font-serif text-h3 font-bold text-center`}>
          How We Work with Healthcare Clients
        </h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto`}>
          {[
            {
              step: "01",
              title: "Discovery",
              description:
                "We start by understanding your practice and your patients.",
            },
            {
              step: "02",
              title: "Design & Compliance Review",
              description:
                "Wireframes and content structure reviewed against AHPRA guidelines and privacy requirements before build begins.",
            },
            {
              step: "03",
              title: "Build & Integrate",
              description:
                "Your site is built with practice management integrations, booking systems, and patient forms connected end-to-end.",
            },
            {
              step: "04",
              title: "Launch & Support",
              description:
                "Staff training, SEO handover, and ongoing support. Your site improves alongside your practice.",
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
        <h2 className={`mb-8 font-serif text-h3 font-bold text-center`}>
          What Can Affect Pricing
        </h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto`}>
          {[
            "Number of practitioner profiles and service pages",
            "Practice management software integration complexity",
            "Patient portal with secure form submissions",
            "Multi-location setup with location-specific SEO",
            "Telehealth video consultation integration",
            "NDIS pricing tables and service area mapping",
            "Custom intake forms and health questionnaires",
            "Content migration from an existing website",
            "Professional copywriting (AHPRA-compliant)",
            "Ongoing SEO and content strategy",
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
            { name: "Web Development", href: "/web-development", description: "Custom websites for any industry" },
            { name: "Website Maintenance", href: "/website-maintenance", description: "Keep your site secure and compliant" },
            { name: "SEO & Content", href: "/seo-and-content", description: "Reach more patients online" },
          ].map((service) => (
            <Link key={service.href} href={service.href} className="p-6 rounded-xl border border-neutral-200 bg-white hover:border-ravenci-primary/30 transition-colors text-center">
              <h3 className="font-bold text-ravenci-dark mb-2">{service.name}</h3>
              <p className="text-sm text-neutral-500">{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        className={`content-section py-16 px-6 md:px-10 flex flex-col items-center justify-center gap-3 bg-white`}
      >
        <h2 className={`font-serif text-h3`}>Healthcare Website FAQs</h2>
        <Accordion titleClassName={`py-6 text-lg`} items={faqItems} />
      </section>

      {/* CTA */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 flex flex-col items-center text-center bg-ravenci-primary text-white`}
      >
        <h2 className={`mb-4 text-3xl md:text-4xl font-medium`}>
          Ready to Modernise Your Practice?
        </h2>
        <p className={`mb-10 max-w-md text-white/80`}>
          Let&apos;s build a website your patients will trust from the first
          click. Start with a free consultation.
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
            serviceType: "Healthcare Website Design",
            name: "Medical & Healthcare Website Design Brisbane",
            description:
              "Websites for healthcare professionals. Patient portals, online booking, privacy compliance, NDIS-ready, telehealth integration, built by a Brisbane team with 25+ years experience. From $4,950.",
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
              name: "Healthcare Website Packages",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Healthcare Website",
                  price: "4950",
                  priceCurrency: "AUD",
                  description:
                    "Custom healthcare website with online booking integration, patient portal, privacy compliance, NDIS-ready features, telehealth, and 85+ PageSpeed score.",
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
