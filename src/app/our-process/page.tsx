import Link from "next/link";

import {
  IconSearch,
  IconBulb,
  IconPalette,
  IconCode,
  IconRocket,
  IconHeartHandshake,
  IconCircleCheckFilled,
} from "@tabler/icons-react";

import Accordion from "@/components/accordion";

export const metadata = {
  title: "Our Process — The RAVENCI Method | RAVENCI Solutions",
  description:
    "Discover how RAVENCI Solutions in Brisbane delivers results. Our 6-step process takes your project from discovery to launch and beyond — with 20+ years of experience behind every decision.",
};

const steps = [
  {
    number: "01",
    name: "Discovery & Consultation",
    icon: IconSearch,
    description:
      "Every great project starts with understanding. We dig into your business goals, target audience, competitors, and existing digital presence to build a complete picture before writing a single line of code.",
    highlights: [
      "In-depth business and audience analysis",
      "Competitor and market research",
      "Technical requirements gathering",
      "Clear project scope and timeline",
    ],
  },
  {
    number: "02",
    name: "Strategy & Planning",
    icon: IconBulb,
    description:
      "With a solid understanding of your needs, we map out the entire project. Information architecture, user journeys, technology choices, and content strategy — all planned before design begins.",
    highlights: [
      "Site architecture and user flow mapping",
      "Technology and platform selection",
      "Content strategy and SEO planning",
      "Detailed project roadmap with milestones",
    ],
  },
  {
    number: "03",
    name: "Design & Prototyping",
    icon: IconPalette,
    description:
      "We create wireframes and visual designs that bring your brand to life. You'll see exactly how your site will look and feel before development starts — no surprises.",
    highlights: [
      "Wireframes for layout and structure",
      "High-fidelity visual designs",
      "Mobile-first responsive layouts",
      "Design review and revision rounds",
    ],
  },
  {
    number: "04",
    name: "Development & Build",
    icon: IconCode,
    description:
      "This is where it all comes together. Clean, performant code built to modern standards. We develop with speed, accessibility, and SEO baked in from the start — not bolted on after.",
    highlights: [
      "Clean, maintainable code",
      "85+ Google PageSpeed guaranteed",
      "SEO-optimised structure and markup",
      "CMS setup with user training",
    ],
  },
  {
    number: "05",
    name: "Testing & Launch",
    icon: IconRocket,
    description:
      "Before anything goes live, we test across devices, browsers, and screen sizes. Performance audits, accessibility checks, and final client review ensure a flawless launch.",
    highlights: [
      "Cross-browser and device testing",
      "Performance and speed audits",
      "Accessibility compliance checks",
      "Guided launch and go-live support",
    ],
  },
  {
    number: "06",
    name: "Ongoing Support & Growth",
    icon: IconHeartHandshake,
    description:
      "Launch day is just the beginning. We provide ongoing maintenance, security updates, performance monitoring, and strategic guidance to keep your site working as hard as you do.",
    highlights: [
      "Proactive maintenance and security updates",
      "Performance monitoring and reporting",
      "Content updates and feature enhancements",
      "Strategic growth recommendations",
    ],
  },
];

const faqItems = [
  {
    title: "How long does the full process take?",
    content:
      "Timelines vary by project scope. A Foundation Website typically takes 3 weeks. A Growth Website runs 4-6 weeks. Premium Brand & Web projects take 10-14 weeks. We provide a detailed timeline during the Strategy & Planning phase and keep you updated at every milestone.",
  },
  {
    title: "What do I need to provide to get started?",
    content:
      "We'll guide you through everything during Discovery. At minimum, we need an understanding of your business goals and target audience. If you have existing branding, content, or design preferences, that helps too — but it's not required. We can handle content and design from scratch.",
  },
  {
    title: "How involved do I need to be during the process?",
    content:
      "As involved as you'd like to be. Some clients prefer detailed collaboration at every step; others prefer to review at key milestones. At minimum, we'll need your input during Discovery, design review, and final approval before launch.",
  },
  {
    title: "What happens if I want changes mid-project?",
    content:
      "Every package includes revision rounds at the design and development stages. If your requirements change significantly, we'll discuss scope adjustments transparently — no hidden fees or surprises.",
  },
  {
    title: "Do you work with businesses outside Brisbane?",
    content:
      "Absolutely. While we're based in Brisbane and love working with local businesses, our process works seamlessly for remote clients across Australia and internationally. Video calls and screen sharing keep communication clear.",
  },
];

export default function OurProcessPage() {
  return (
    <main className={`flex flex-col`}>
      {/* Hero */}
      <section
        className={`content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 min-h-[250px] bg-white`}
      >
        <article className={`col-span-12 flex flex-col`}>
          <h1 className={`text-4xl md:text-5xl lg:text-h1 font-medium`}>
            How We Bring Your Vision to Life
          </h1>
          <h2
            className={`max-w-4xl text-2xl md:text-3xl lg:text-h2 font-light`}
          >
            A proven 6-step process refined over 20+ years of delivering digital
            platforms that work
          </h2>
        </article>
      </section>

      {/* Intro bar */}
      <section
        className={`p-10 flex flex-col items-center gap-3 bg-ravenci-primary text-white text-center`}
      >
        <div className={`max-w-lg`}>
          <h3
            className={`font-serif font-medium text-xl`}
          >
            Great websites aren't accidents. They're the result of careful
            planning, clear communication, and disciplined execution — every
            single time.
          </h3>
        </div>
      </section>

      {/* The 6 Steps */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-white`}
      >
        <div className={`max-w-4xl mx-auto flex flex-col gap-20`}>
          {steps.map((step) => (
            <article
              key={step.number}
              className={`grid grid-cols-12 gap-6 md:gap-10 items-start`}
            >
              <div
                className={`col-span-12 md:col-span-2 flex md:flex-col items-center md:items-start gap-4`}
              >
                <div
                  className={`w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-ravenci-primary/10`}
                >
                  <step.icon size={28} className={`text-ravenci-primary`} />
                </div>
                <span
                  className={`text-sm font-bold text-ravenci-primary tracking-widest`}
                >
                  STEP {step.number}
                </span>
              </div>

              <div className={`col-span-12 md:col-span-10`}>
                <h3 className={`mb-4 font-serif text-2xl md:text-h3 font-bold`}>
                  {step.name}
                </h3>
                <p className={`mb-6 text-neutral-500/80`}>
                  {step.description}
                </p>
                <ul className={`flex flex-col gap-3`}>
                  {step.highlights.map((highlight, i) => (
                    <li key={i} className={`flex items-start gap-2`}>
                      <IconCircleCheckFilled
                        className={`text-ravenci-primary flex-shrink-0`}
                        size={20}
                      />
                      <span className={`text-neutral-600`}>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why Process Matters */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark text-white`}
      >
        <div className={`max-w-4xl mx-auto text-center`}>
          <h2 className={`mb-12 text-3xl md:text-4xl font-medium`}>
            Why Process Matters
          </h2>
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-10`}
          >
            <div>
              <p className={`text-4xl md:text-5xl font-bold text-ravenci-primary`}>
                20+
              </p>
              <p className={`mt-2 text-neutral-400`}>
                Years of Digital Experience
              </p>
            </div>
            <div>
              <p className={`text-4xl md:text-5xl font-bold text-ravenci-primary`}>
                50+
              </p>
              <p className={`mt-2 text-neutral-400`}>
                Projects Delivered
              </p>
            </div>
            <div>
              <p className={`text-4xl md:text-5xl font-bold text-ravenci-primary`}>
                95+
              </p>
              <p className={`mt-2 text-neutral-400`}>
                Average PageSpeed Score
              </p>
            </div>
          </div>
          <p className={`mt-12 max-w-2xl mx-auto text-neutral-400`}>
            A consistent, proven process is why we deliver results every time —
            not by luck, but by design. Every step exists because two decades of
            experience taught us what works.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        className={`content-section py-16 px-6 md:px-10 flex flex-col items-center justify-center gap-3 bg-white`}
      >
        <h2 className={`font-serif text-h3`}>Process Questions Answered</h2>
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
          Ready to Start?
        </h2>
        <p className={`mb-10 max-w-md text-white/80`}>
          Let's talk about your project. The first step is always a
          conversation.
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
