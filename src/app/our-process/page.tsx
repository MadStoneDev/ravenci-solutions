import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
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
import Breadcrumbs from "@/components/breadcrumbs";
import SectionLabel from "@/components/section-label";
import { Button } from "@/components/ui/button";

const SECTION = "px-5 py-14 md:px-12 md:py-20 lg:px-20";

export const metadata = {
  title: "My Process | RAVENCI Solutions",
  description:
    "How RAVENCI in Brisbane delivers results: my 6-step process from discovery to launch and beyond, with 25+ years of experience behind every decision.",
  openGraph: {
    ...OG_DEFAULTS,
    title: "My Process | RAVENCI Solutions",
    description:
      "How RAVENCI in Brisbane delivers results: my 6-step process from discovery to launch and beyond, with 25+ years of experience behind every decision.",
    url: "/our-process",
    type: "website" as const,
  },
  twitter: { ...TWITTER_DEFAULTS },
  alternates: { canonical: "/our-process" },
};

const steps = [
  {
    number: "01",
    name: "Discovery & Consultation",
    icon: IconSearch,
    description:
      "Every great project starts with understanding. I dig into your business goals, target audience, competitors, and existing digital presence to build a complete picture before writing a single line of code.",
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
      "With a solid understanding of your needs, I map out the entire project. Information architecture, user journeys, technology choices, and content strategy, all planned before design begins.",
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
      "I create wireframes and visual designs that bring your brand to life. You'll see exactly how your site will look and feel before development starts. No surprises.",
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
      "This is where it all comes together. Clean, performant code built to modern standards. I develop with speed, accessibility, and SEO built in from the start, not bolted on after.",
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
      "Before anything goes live, I test across devices, browsers, and screen sizes. Performance audits, accessibility checks, and final client review ensure a flawless launch.",
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
      "Launch day is just the beginning. I provide ongoing maintenance, security updates, performance monitoring, and strategic guidance to keep your site performing and up to date.",
    highlights: [
      "Proactive maintenance and security updates",
      "Performance monitoring and reporting",
      "Content updates and feature enhancements",
      "Strategic growth recommendations",
    ],
  },
];

const stats = [
  { value: "25+", label: "Years of digital experience" },
  { value: "467", label: "Projects delivered" },
  { value: "85+", label: "PageSpeed guaranteed" },
];

const faqItems = [
  {
    title: "How long does the full process take?",
    summary:
      "Foundation websites take 3 weeks, Growth websites 4-6 weeks, and Premium Brand & Web projects 10-14 weeks. A detailed timeline is provided during the Strategy & Planning phase.",
    content:
      "Timelines vary by project scope. A Foundation Website typically takes 3 weeks. A Growth Website runs 4 to 6 weeks. Premium Brand & Web projects take 10 to 14 weeks. I provide a detailed timeline during the Strategy & Planning phase and keep you updated at every milestone.",
  },
  {
    title: "What do I need to provide to get started?",
    summary:
      "At minimum, an understanding of your business goals and target audience. Existing branding, content, or design preferences help but aren't required. RAVENCI can handle content and design from scratch.",
    content:
      "I'll guide you through everything during Discovery. At minimum, I need an understanding of your business goals and target audience. If you have existing branding, content, or design preferences, that helps too, but it's not required. I can handle content and design from scratch.",
  },
  {
    title: "How involved do I need to be during the process?",
    summary:
      "As involved as you prefer. Some clients collaborate at every step; others review at key milestones. At minimum, your input is needed during Discovery, design review, and final pre-launch approval.",
    content:
      "As involved as you'd like to be. Some clients prefer detailed collaboration at every step; others prefer to review at key milestones. At minimum, I'll need your input during Discovery, design review, and final approval before launch.",
  },
  {
    title: "What happens if I want changes mid-project?",
    summary:
      "Every RAVENCI package includes revision rounds at design and development stages. If requirements change significantly, scope adjustments are discussed transparently with no hidden fees.",
    content:
      "Every package includes revision rounds at the design and development stages. If your requirements change significantly, I'll discuss scope adjustments transparently. No hidden fees or surprises.",
  },
  {
    title: "Do you work with businesses outside Brisbane?",
    summary:
      "Yes. While RAVENCI is Brisbane-based, the process works just as well for remote clients across Australia and internationally via video calls and screen sharing.",
    content:
      "Absolutely. While I'm based in Brisbane and love working with local businesses, my process works just as well for remote clients across Australia and internationally. Video calls and screen sharing keep communication clear.",
  },
];

export default function OurProcessPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="flex max-w-3xl flex-col gap-4">
          <Breadcrumbs items={[{ label: "My Process" }]} />
          <SectionLabel label="My Process" tick />
          <h1 className="text-display-l text-foreground">
            How I bring your vision to life
          </h1>
          <p className="text-lead text-muted-foreground">
            My proven 6-step process, refined over 25+ years of delivering
            digital products and platforms that work.
          </p>
          <p className="text-body text-muted-foreground">
            RAVENCI&apos;s web development process follows six steps: Discovery,
            Strategy, Design, Development, Testing, and Ongoing Support.
            Foundation websites take 3 weeks, Growth websites 4 to 6 weeks, and
            Premium Brand & Web projects 10 to 14 weeks. Every project includes
            revision rounds and 85+ PageSpeed guaranteed.
          </p>
        </div>
      </section>

      {/* Intro statement */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-heading-m text-foreground">
            Great websites aren&apos;t accidents. They&apos;re the result of
            careful planning, clear communication, and disciplined execution.
            Every single time.
          </h2>
        </div>
      </section>

      {/* The 6 Steps */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="mb-10 flex flex-col gap-3">
          <SectionLabel index="01" label="The steps" />
          <h2 className="text-display-m text-foreground">
            Six steps, start to launch and beyond
          </h2>
        </div>
        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          {steps.map((step) => (
            <article
              key={step.number}
              className="grid grid-cols-1 gap-6 rounded-sm border border-border bg-card p-6 md:grid-cols-12 md:gap-10 md:p-8"
            >
              <div className="flex items-center gap-4 md:col-span-3 md:flex-col md:items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-border">
                  <step.icon size={26} className="text-accent" aria-hidden />
                </div>
                <span className="font-mono text-label uppercase text-muted-foreground">
                  Step {step.number}
                </span>
              </div>

              <div className="md:col-span-9">
                <h3 className="mb-3 text-heading-s text-foreground">
                  {step.name}
                </h3>
                <p className="mb-6 text-body text-muted-foreground">
                  {step.description}
                </p>
                <ul className="flex flex-col gap-3">
                  {step.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <IconCircleCheckFilled
                        className="mt-0.5 shrink-0 text-accent"
                        size={18}
                        aria-hidden
                      />
                      <span className="text-body text-muted-foreground">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why Process Matters (dark) */}
      <section
        className={`dark bg-background text-foreground ${SECTION} border-b border-white/10`}
      >
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel index="02" label="Why process matters" tone="muted" />
          <h2 className="mt-3 text-display-m text-foreground">
            Results by design, not by luck
          </h2>
          <dl className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <dt className="sr-only">{s.label}</dt>
                <dd className="tnum text-metric text-foreground">{s.value}</dd>
                <p className="text-small text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </dl>
          <p className="mx-auto mt-12 max-w-2xl text-body text-muted-foreground">
            A consistent, proven process is why I deliver results every time,
            not by luck, but by design. Every step exists because 25+ years of
            experience taught me what works.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex flex-col gap-3">
            <SectionLabel index="03" label="Questions" />
            <h2 className="text-display-m text-foreground">
              Process questions answered
            </h2>
          </div>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* Closing CTA (dark) */}
      <section className={`dark bg-background text-foreground ${SECTION}`}>
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-display-m text-foreground">Ready to start?</h2>
            <p className="mt-4 text-body text-muted-foreground">
              Let&apos;s talk about your project. The first step is always a
              conversation.
            </p>
          </div>
          <Button asChild size="lg" variant="primary">
            <Link href="/launch-your-vision">Launch your vision</Link>
          </Button>
        </div>
      </section>

      {/* HowTo JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How RAVENCI Builds a Custom Website",
            description:
              "RAVENCI's proven 6-step web development process: Discovery, Strategy, Design, Development, Testing, and Ongoing Support.",
            totalTime: "P14W",
            step: steps.map((step, index) => ({
              "@type": "HowToStep",
              position: index + 1,
              name: step.name,
              text: step.description,
            })),
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
                text: item.content,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
