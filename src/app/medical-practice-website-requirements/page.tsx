import type { Metadata } from "next";
import Link from "next/link";

import {
  IconCheck,
  IconAlertTriangle,
  IconCircleCheckFilled,
} from "@tabler/icons-react";

import Accordion from "@/components/accordion";
import Breadcrumbs from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title:
    "What Australian Medical Practice Websites Need in 2026 (AHPRA-Aware Guide) | RAVENCI Solutions",
  description:
    "AHPRA advertising compliance, Australian Privacy Principles, practice management integrations, and patient-facing essentials. The 2026 guide for Australian medical practice websites.",
  openGraph: {
    title:
      "What Australian Medical Practice Websites Need in 2026 (AHPRA-Aware Guide)",
    description:
      "AHPRA-aware web design for Australian medical practices. Compliance essentials, integrations, patient experience, and the common mistakes practices make.",
    type: "article",
  },
  alternates: { canonical: "/medical-practice-website-requirements" },
};

const ahpraEssentials = [
  {
    item: "No testimonials about clinical aspects",
    detail:
      "Section 133 of the National Law prohibits testimonials about clinical care from being used in advertising. This applies to written reviews, video testimonials, star ratings about clinical outcomes, and case-study quotes about treatment effectiveness. Reviews about non-clinical aspects (parking, reception, wait times) are generally permitted.",
  },
  {
    item: "No misleading or deceptive claims",
    detail:
      "Claims must be substantiated. Common breaches: claiming to be 'the best' or 'leading' practitioner, suggesting outcomes that aren't typical, before-and-after imagery without consent and disclaimers, or implying clinical superiority over other practitioners.",
  },
  {
    item: "No guarantees of cure or specific outcome",
    detail:
      "Statements like 'guaranteed results' or 'pain-free in one session' are explicitly non-compliant. Use language that describes what's offered rather than promised.",
  },
  {
    item: "Appropriate use of titles and qualifications",
    detail:
      "Practitioners must accurately represent qualifications, registration, and any conditions on registration. Specialist titles can only be used by AHPRA-recognised specialists in that field. Always cross-check what each practitioner is registered to use.",
  },
  {
    item: "Clear distinction between practitioner and practice content",
    detail:
      "Doctor profiles, before/after pages, and condition information are subject to AHPRA advertising guidelines. General information about the practice (hours, location, parking) is not. Structure content so the distinction is unambiguous.",
  },
];

const privacyEssentials = [
  {
    item: "Privacy Policy compliant with the Australian Privacy Principles",
    detail:
      "Required if the practice collects personal information online (which all practice websites do via booking forms, contact forms, or analytics). Must specify what's collected, how it's used, who it's shared with, and how patients can access or correct their information.",
  },
  {
    item: "Cookie and tracking consent",
    detail:
      "Cookie banners are increasingly expected. If using Google Analytics, Meta Pixel, or any tracking, patients should be able to opt out. Healthcare-specific tracking carries higher sensitivity than typical commercial sites.",
  },
  {
    item: "Secure form handling",
    detail:
      "Patient information sent via online forms should be encrypted in transit (TLS/SSL — non-negotiable) and not logged in plaintext. Booking forms that capture symptoms or conditions need extra care around how data is stored and routed.",
  },
  {
    item: "Health Records Act considerations (Vic, ACT, NSW)",
    detail:
      "Some states have additional health-record-specific privacy legislation on top of the federal Privacy Act. Practices in Victoria, ACT, and NSW should review state-specific obligations alongside federal ones.",
  },
  {
    item: "Notifiable Data Breach awareness",
    detail:
      "Healthcare providers handling patient data are subject to the Notifiable Data Breaches scheme. Websites are a common breach vector. Build security and incident response into the project from day one — retrofitting it after a breach is expensive.",
  },
];

const integrations = [
  {
    name: "HotDoc",
    use: "Online booking, recall, telehealth — most widely used in Australian general practice",
  },
  {
    name: "HealthEngine",
    use: "Online booking and patient marketplace presence — strong on patient acquisition",
  },
  {
    name: "Cliniko",
    use: "Practice management and online booking — popular with allied health and specialists",
  },
  {
    name: "Best Practice",
    use: "Practice management software — common in GP clinics for clinical records",
  },
  {
    name: "MedicalDirector",
    use: "Practice management software — alternative to Best Practice in GP clinics",
  },
  {
    name: "Halaxy",
    use: "Practice management — popular with allied health and mental health providers",
  },
  {
    name: "AllReady",
    use: "New-patient onboarding forms and pre-consultation data capture",
  },
  {
    name: "Coviu / Doxy.me",
    use: "Telehealth video consultations — commonly embedded in patient portals",
  },
];

const patientEssentials = [
  {
    title: "Online booking visible above the fold",
    description:
      "The single highest-impact element on a medical practice site. Patients arriving on mobile expect to book an appointment in under 30 seconds. Hide the button and you lose the booking.",
  },
  {
    title: "Hours, address, parking, public transport",
    description:
      "All within one click of the homepage. Bonus points for embedded maps, photos of the entrance for first-time patients, and any after-hours arrangements.",
  },
  {
    title: "Doctor and practitioner profiles",
    description:
      "Each practitioner with photo, qualifications, languages spoken, areas of interest, and AHPRA registration number where appropriate. Helps patients self-match to the right practitioner.",
  },
  {
    title: "Bulk-billing or out-of-pocket fees",
    description:
      "One of the most common reasons patients call to ask before booking. Putting it on the site reduces front-desk call volume and improves patient experience.",
  },
  {
    title: "New-patient information",
    description:
      "What to bring (Medicare card, referral, previous test results, ID), how long the first appointment takes, what forms to fill in beforehand if any.",
  },
  {
    title: "Telehealth availability",
    description:
      "Whether the practice offers video or phone consultations, when, with which practitioners, and how patients access them. Critical post-2024 patient expectation.",
  },
  {
    title: "Services and conditions treated",
    description:
      "Helps SEO and helps patients find the right practice. Frame as 'services offered' rather than 'conditions cured' to stay AHPRA-compliant.",
  },
  {
    title: "Accessibility for older and impaired patients",
    description:
      "WCAG-compliant contrast, scalable text, screen-reader-friendly markup, and 'easy English' versions of key information where appropriate.",
  },
];

const commonMistakes = [
  {
    mistake: "Patient testimonials about clinical care",
    detail:
      "The most common AHPRA breach we see on Australian medical practice sites. Even glowing Google reviews about 'how Dr X cured my back pain' embedded on the website can trigger an AHPRA notification. Display testimonials only about non-clinical aspects (reception, parking, wait times) and consider hiding clinical-aspect Google reviews from website embeds.",
  },
  {
    mistake: "Booking buttons that break on mobile",
    detail:
      "70%+ of patient website visits are now mobile. We've audited practice sites where the 'Book Now' button opens a desktop-only booking widget that doesn't work on phones. Test the booking flow on a real iPhone and Android before launch.",
  },
  {
    mistake: "No privacy policy, or a generic one copied from a template",
    detail:
      "Healthcare websites should have a tailored privacy policy that addresses what patient information is collected, where it's stored (Australian-hosted vs international), who has access, and how patients exercise their access and correction rights. A generic e-commerce template doesn't meet the bar.",
  },
  {
    mistake: "Practitioner profiles with no AHPRA registration check",
    detail:
      "If a practitioner's profile lists qualifications, specialist titles, or areas of practice, those need to be cross-checked against current AHPRA registration. Outdated profiles for departed practitioners are also a frequent issue when staff turnover happens.",
  },
  {
    mistake: "Slow site that loses patients before they book",
    detail:
      "Mobile patients with poor connections abandon sites that take longer than 3 seconds to load. Most Australian practice sites we've audited take 5-8 seconds. Image optimisation, code splitting, and proper hosting fix this.",
  },
  {
    mistake: "Missing or broken integration with practice management software",
    detail:
      "Reception teams end up double-handling bookings made via the website if the integration to HotDoc, HealthEngine, Cliniko or similar isn't properly configured. Test the end-to-end booking flow regularly — it tends to break silently after software updates.",
  },
];

const faqItems = [
  {
    title: "Are patient testimonials really not allowed on my practice website?",
    summary:
      "Testimonials about clinical aspects of care are prohibited under section 133 of the National Law. Reviews about non-clinical aspects (parking, reception, ease of booking) are generally fine. AHPRA's published guidance is the authoritative source — review it before publishing any review content.",
    content:
      "Testimonials about clinical aspects of care are prohibited under section 133 of the Health Practitioner Regulation National Law. This applies to written reviews, video testimonials, before-and-after stories, and case study quotes that describe clinical outcomes. Reviews about non-clinical aspects (parking, reception, ease of booking, wait times) are generally permitted. The line is sometimes nuanced — a review saying 'great practice, easy to book' is fine; the same review with 'and Dr X really helped my chronic pain' added would be a breach. AHPRA's published advertising guidance is the authoritative source. We recommend a compliance review of all testimonial content before publishing.",
  },
  {
    title:
      "Can I have Google reviews embedded on my medical practice website?",
    summary:
      "Risky if those reviews mention clinical care. Many Google reviews about medical practices include clinical content that would breach AHPRA section 133 if displayed on the practice website. Most compliant practices either filter reviews carefully or display ratings/counts without the review text.",
    content:
      "It's risky if those reviews mention clinical care. Many Google reviews about medical practices include clinical content that, when displayed on the practice's own website, would constitute a testimonial about clinical aspects under AHPRA section 133. The practice can't control what patients write on Google, but the practice can choose what to display on its own site. Most compliant practices either filter reviews carefully (only displaying ones about non-clinical aspects), display the star rating and review count without the review text, or simply link to the Google reviews page rather than embedding the content.",
  },
  {
    title: "How much does a medical practice website cost in Australia?",
    summary:
      "Typical Australian medical practice websites cost $5,000 – $15,000 for a properly built site with online booking integration, AHPRA-aware content structure, privacy compliance, and accessibility. Practice management integration setup adds $500 – $2,000 depending on the system.",
    content:
      "Typical Australian medical practice websites cost $5,000 to $15,000 for a properly built site with online booking integration (HotDoc, HealthEngine, or Cliniko), AHPRA-aware content structure, Privacy Act compliance, and basic accessibility. Practice management integration setup typically adds $500 to $2,000 depending on the system and the depth of integration. Multi-location practices, specialist clinics with patient portals, or sites needing custom telehealth flows can run $15,000 to $30,000+. Add ongoing hosting and maintenance ($300 to $600/month) and the realistic year-one investment is $8,000 to $20,000.",
  },
  {
    title: "Which booking system should my practice use?",
    summary:
      "HotDoc is the most widely used in Australian general practice. HealthEngine adds patient-acquisition value. Cliniko is popular with allied health and specialists. Choice depends on your practice type, existing practice management software, and whether you want patient marketplace exposure.",
    content:
      "HotDoc is the most widely used online booking system in Australian general practice — strong integration with major practice management systems and a clean patient experience. HealthEngine adds patient-acquisition value via its directory and patient marketplace, alongside booking. Cliniko is popular with allied health and specialists who want booking and practice management in one product. The right choice depends on your practice type (GP vs specialist vs allied health), what practice management software you already use (Best Practice, MedicalDirector, etc.), and whether you want exposure on a patient-facing marketplace. We typically scope this with practice managers as part of the project discovery.",
  },
  {
    title: "Do I need a privacy policy specific to healthcare?",
    summary:
      "Yes. A generic privacy policy doesn't address healthcare-specific obligations including how patient information is handled, Australian hosting versus international, and state-level health record acts in Victoria, ACT and NSW. A healthcare-tailored policy reduces both compliance and patient-trust risk.",
    content:
      "Yes. A generic privacy policy template — copied from an e-commerce site or pulled off a template generator — doesn't address the specific obligations that apply to healthcare providers handling patient information. A proper medical practice privacy policy should address: what patient information is collected via the website (including via booking, contact forms, and analytics), where it's stored (Australian-hosted versus international, which matters for some patient cohorts), who has access internally and externally, how the practice complies with the Australian Privacy Principles, how patients can request access or correction, and how state-level Health Records Acts in Victoria, ACT, and NSW apply where relevant. We typically work with the practice's existing legal or compliance advisor to draft this rather than writing it ourselves.",
  },
  {
    title: "How long does it take to build a medical practice website?",
    summary:
      "A standard practice site with online booking integration, AHPRA-aware content, and privacy compliance typically takes 4 – 6 weeks. Sites with patient portals, multiple locations, or custom telehealth flows take 6 – 10 weeks. Compliance review adds 1 – 2 weeks.",
    content:
      "A standard medical practice website with online booking integration, AHPRA-aware content structure, and privacy compliance typically takes 4 to 6 weeks from kickoff to launch. Sites with patient portals, multi-location handling, or custom telehealth flows take 6 to 10 weeks. AHPRA compliance review (which we strongly recommend) typically adds 1 to 2 weeks at the end of the project. The biggest delay is usually content readiness — practitioner bios, photography, and condition pages tend to be where projects sit waiting on the practice rather than the developer.",
  },
  {
    title: "Can patients book appointments directly from my website?",
    summary:
      "Yes — typically via integration with HotDoc, HealthEngine, Cliniko or similar. Most patients now expect this. Booking buttons should be visible on every page, work flawlessly on mobile, and feed bookings directly into the practice management system to avoid double-handling.",
    content:
      "Yes — and most Australian patients now expect this. Direct online booking is typically achieved via integration with HotDoc, HealthEngine, Cliniko, or whichever booking platform integrates with your practice management software. The booking button should be visible on every page (not buried in a footer), work flawlessly on mobile (where most patient visits originate), and feed bookings directly into the practice management system so reception isn't double-handling them. We test the end-to-end booking flow on real iOS and Android devices as part of every medical practice build.",
  },
  {
    title:
      "How do I make my practice website compliant with WCAG accessibility?",
    summary:
      "Build with proper semantic HTML, 4.5:1 colour contrast, scalable text, screen-reader-friendly navigation, and alt text on all images. Healthcare audiences include older patients and people with vision, hearing or motor impairments — accessibility is both ethical and practical for patient acquisition.",
    content:
      "Building a WCAG-compliant medical practice website involves several specific things. Use proper semantic HTML so screen readers can navigate. Ensure 4.5:1 colour contrast for body text and 3:1 for large text. Make text scalable up to 200% without breaking layout. Provide alt text on every image. Make every interactive element keyboard-navigable. Add ARIA labels where needed. Provide an accessibility statement page. Test with real screen readers (VoiceOver on Mac/iOS, NVDA on Windows). Healthcare audiences include older patients, vision-impaired and hearing-impaired patients, and people with motor impairments — accessibility is both an ethical baseline and a practical patient-acquisition advantage.",
  },
];

export default function MedicalPracticeRequirementsPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 bg-white">
        <article className="max-w-3xl flex flex-col gap-2">
          <Breadcrumbs
            items={[
              { label: "Medical Practice Website Requirements" },
            ]}
          />
          <span className="mt-2 text-xs font-medium tracking-wider uppercase text-ravenci-primary">
            Healthcare Web Design — 2026
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-h1 font-medium">
            What Australian Medical Practice Websites Need in 2026
          </h1>
          <h2 className="max-w-2xl text-2xl md:text-3xl lg:text-h2 font-light">
            AHPRA-aware. Privacy-compliant. Patient-friendly.
          </h2>
          <p className="mt-6 max-w-2xl text-neutral-500/80">
            Australian medical practice websites in 2026 must address five
            things:{" "}
            <strong className="text-ravenci-dark">AHPRA</strong> advertising
            guidelines, the{" "}
            <strong className="text-ravenci-dark">
              Australian Privacy Principles
            </strong>{" "}
            for patient information, online booking integrated with practice
            management software,{" "}
            <strong className="text-ravenci-dark">accessibility</strong>{" "}
            standards for diverse patient needs, and{" "}
            <strong className="text-ravenci-dark">patient-facing essentials</strong>{" "}
            findable in under 30 seconds. This guide breaks down each area
            with the specific requirements, common mistakes, and how to get it
            right.
          </p>
        </article>
      </section>

      {/* AHPRA essentials */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-ravenci-dark text-white">
        <h3 className="mb-4 font-serif text-h3 font-bold">
          AHPRA Advertising Compliance Essentials
        </h3>
        <p className="mb-10 max-w-2xl text-neutral-400">
          The Health Practitioner Regulation National Law sets specific limits
          on what registered health practitioners can publish in advertising —
          and websites count as advertising. These five areas drive the
          majority of complaints.
        </p>
        <div className="space-y-4">
          {ahpraEssentials.map((item, index) => (
            <div
              key={index}
              className="p-5 md:p-6 bg-white/5 border border-white/10 rounded-lg"
            >
              <div className="flex items-start gap-3 mb-2">
                <IconAlertTriangle
                  size={22}
                  className="text-yellow-400 flex-shrink-0 mt-0.5"
                />
                <h4 className="font-bold text-white">{item.item}</h4>
              </div>
              <p className="ml-9 text-sm text-neutral-300 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-neutral-400 max-w-2xl italic">
          This is general guidance, not legal advice. Final compliance review
          should be conducted by a healthcare-experienced legal or compliance
          professional. AHPRA&apos;s{" "}
          <a
            href="https://www.ahpra.gov.au/publications/advertising-resources.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ravenci-primary hover:underline"
          >
            published advertising resources
          </a>{" "}
          are the authoritative source.
        </p>
      </section>

      {/* Privacy essentials */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-neutral-200/50">
        <h3 className="mb-4 font-serif text-h3 font-bold">
          Privacy Act &amp; Patient Data Handling
        </h3>
        <p className="mb-10 max-w-2xl text-neutral-500/80">
          Healthcare websites collect more sensitive personal information than
          most commercial sites. The Australian Privacy Principles, plus
          state-level health-record legislation, set the baseline.
        </p>
        <div className="space-y-4">
          {privacyEssentials.map((item, index) => (
            <div
              key={index}
              className="p-5 md:p-6 bg-white border border-neutral-200 rounded-lg"
            >
              <div className="flex items-start gap-3 mb-2">
                <IconCircleCheckFilled
                  size={22}
                  className="text-ravenci-primary flex-shrink-0 mt-0.5"
                />
                <h4 className="font-bold text-ravenci-dark">{item.item}</h4>
              </div>
              <p className="ml-9 text-sm text-neutral-600 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Practice management integrations */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-white">
        <h3 className="mb-4 font-serif text-h3 font-bold">
          Practice Management &amp; Booking Integrations
        </h3>
        <p className="mb-10 max-w-2xl text-neutral-500/80">
          Online booking that doesn&apos;t feed into the practice management
          system creates more work for reception, not less. The right
          integration depends on practice type, existing PM software, and
          whether patient marketplace exposure matters.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {integrations.map((int, index) => (
            <div
              key={index}
              className="p-5 bg-neutral-100/60 rounded-lg border border-neutral-200/70"
            >
              <h4 className="font-bold text-ravenci-dark mb-1">{int.name}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {int.use}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Patient-facing essentials */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-ravenci-primary text-white">
        <div className="max-w-4xl">
          <h3 className="mb-4 font-serif text-h3 font-bold">
            Patient-Facing Essentials
          </h3>
          <p className="mb-10 max-w-2xl text-white/85 leading-relaxed">
            What patients actually want when they land on your website on a
            phone, often while feeling unwell. Get these eight right and the
            site does its job.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {patientEssentials.map((item, index) => (
              <div
                key={index}
                className="p-5 bg-white/10 border border-white/15 rounded-lg"
              >
                <div className="flex items-start gap-2 mb-2">
                  <IconCheck
                    size={20}
                    className="p-0.5 bg-white rounded-full text-ravenci-primary flex-shrink-0 mt-0.5"
                  />
                  <h4 className="font-bold text-white">{item.title}</h4>
                </div>
                <p className="ml-7 text-sm text-white/85 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-neutral-200/50">
        <h3 className="mb-4 font-serif text-h3 font-bold">
          Six Common Mistakes on Australian Practice Websites
        </h3>
        <p className="mb-10 max-w-2xl text-neutral-500/80">
          Patterns we see across audits of Australian healthcare websites. Each
          one is fixable — and most are visible to AHPRA, patients, or both.
        </p>
        <div className="space-y-6">
          {commonMistakes.map((m, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg border border-neutral-200"
            >
              <h4 className="mb-2 font-bold text-ravenci-dark">
                {index + 1}. {m.mistake}
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {m.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RAVENCI positioning */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-white">
        <div className="max-w-3xl">
          <h3 className="mb-6 font-serif text-h3 font-bold">
            How RAVENCI Builds Healthcare Websites
          </h3>
          <div className="space-y-4 text-neutral-600 leading-relaxed">
            <p>
              We build healthcare websites for Australian medical practices,
              allied health providers, and specialist clinics. Every healthcare
              project includes AHPRA-aware content structure, Privacy Act
              compliance, online booking integration with HotDoc,
              HealthEngine, Cliniko or your existing platform, accessibility
              built to WCAG standards, and 85+ PageSpeed performance for mobile
              patients.
            </p>
            <p>
              We typically work alongside your existing legal or compliance
              advisor on AHPRA review — we know the patterns to avoid, but
              final sign-off should always come from someone qualified to give
              that opinion.
            </p>
            <p>
              See our{" "}
              <Link
                href="/healthcare"
                className="text-ravenci-primary hover:underline"
              >
                Healthcare Websites
              </Link>{" "}
              page for what we deliver, or our{" "}
              <Link
                href="/cost-of-a-website-in-brisbane"
                className="text-ravenci-primary hover:underline"
              >
                Brisbane website cost guide
              </Link>{" "}
              for honest pricing.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/healthcare"
              className="px-6 py-3 grid place-content-center bg-ravenci-dark rounded-full text-white hover:bg-ravenci-primary transition-colors duration-300"
            >
              See Healthcare Web Development
            </Link>
            <Link
              href="/launch-your-vision"
              className="px-6 py-3 grid place-content-center border-2 border-ravenci-dark rounded-full text-ravenci-dark hover:bg-ravenci-dark hover:text-white transition-colors duration-300"
            >
              Talk to Us About Your Practice
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-section py-20 px-5 sm:px-20 xl:px-36 flex flex-col items-center text-center bg-neutral-100">
        <h2 className="mb-4 text-3xl md:text-4xl font-medium">
          Building or Replacing Your Practice Website?
        </h2>
        <p className="mb-10 max-w-lg text-neutral-500/80">
          Tell us about your practice and we&apos;ll send back a tailored
          proposal covering AHPRA-aware structure, your existing booking and
          PM systems, and realistic timelines.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/launch-your-vision"
            className="px-8 py-3 grid place-content-center bg-ravenci-primary rounded-full text-white hover:bg-ravenci-primary/85 transition-colors duration-300"
          >
            Launch Your Vision
          </Link>
          <Link
            href="/healthcare"
            className="px-8 py-3 grid place-content-center border-2 border-ravenci-dark rounded-full text-ravenci-dark hover:bg-ravenci-dark hover:text-white transition-colors duration-300"
          >
            See Healthcare Packages
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="content-section py-16 px-6 md:px-10 flex flex-col items-center justify-center gap-3 bg-white">
        <h2 className="font-serif text-h3">Frequently Asked Questions</h2>
        <Accordion titleClassName="py-6 text-lg" items={faqItems} />
      </section>

      {/* Spacer */}
      <section className="content-section py-12 px-5 sm:px-20 xl:px-36 grid grid-cols-5 gap-10 min-h-[80px] bg-white" />

      {/* BreadcrumbList JSON-LD */}
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
                name: "Medical Practice Website Requirements",
                item: "https://ravenci.solutions/medical-practice-website-requirements",
              },
            ],
          }),
        }}
      />

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "What Australian Medical Practice Websites Need in 2026 (AHPRA-Aware Guide)",
            description:
              "AHPRA advertising compliance, Australian Privacy Principles, practice management integrations, and patient-facing essentials for Australian medical practice websites.",
            author: {
              "@type": "Organization",
              name: "RAVENCI Solutions",
              url: "https://ravenci.solutions",
            },
            publisher: {
              "@type": "Organization",
              name: "RAVENCI Solutions",
              logo: {
                "@type": "ImageObject",
                url: "https://ravenci.solutions/ravenci-logo.svg",
              },
            },
            datePublished: "2026-04-22",
            dateModified: "2026-04-22",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ravenci.solutions/medical-practice-website-requirements",
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
