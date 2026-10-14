import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import Link from "next/link";

import {
  IconSearch,
  IconBulb,
  IconPalette,
  IconCode,
  IconRocket,
  IconHeartHandshake,
  IconCheck,
  IconMessage,
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
    url: "/process",
    type: "website" as const,
  },
  twitter: { ...TWITTER_DEFAULTS },
  alternates: { canonical: "/process" },
};

const steps = [
  {
    number: "01",
    name: "The Chat",
    icon: IconMessage,
    description:
      "I learn about your business, hear you out and find out what you're after. I spend an hour or so with you," +
      " just having a conversation about you and your business.",
    highlights: [
      "Your goals, your customers and your competitors",
      "What's working now and what isn't",
      "Your budget and timeline, upfront",
    ],
  },
  {
    number: "02",
    name: "The Proposal",
    icon: IconBulb,
    description:
      "After chewing on my notes from our conversation, I come back with a strategy and a price. It's based on" +
      " what your business actually needs, which isn't always what you came in asking for. If I think you need an" +
      " adjusted scope or a different approach to better reach your goal, this is where I'll tell you.",
    highlights: [
      "A clear scope so you know what you're getting",
      "A fixed price with an itemised quote",
      "A planned timeline",
    ],
  },
  {
    number: "03",
    name: "The Work",
    icon: IconCode,
    description:
      "After you've signed off on the proposal, I get to designing, developing or both. If I'm designing, you will" +
      " need to greenlight the work before I build it. Once the work is in development, I give you a" +
      " link to the staging website so you can see it away from your final domain.",
    highlights: [
      "Design signed off before development starts",
      "Built to suit your business, not a template",
      "A first look on a private staging link",
    ],
  },
  {
    number: "04",
    name: "The Feedback",
    icon: IconPalette,
    description:
      "With the link to the staging site, you review the work and come back to me with feedback. I then make the" +
      " changes. We generally go through two rounds of this. Meanwhile, I'm testing your site across various devices" +
      " and browsers so nothing surprises us on launch day.",
    highlights: [
      "Feedback and revisions",
      "Tested on real devices and browsers",
      "Speed, accessibility and responsiveness checked",
    ],
  },
  {
    number: "05",
    name: "The Launch",
    icon: IconRocket,
    description:
      "This is the most exciting part of the process! You won't need to be nervous, though, because leading up to" +
      " launch day, I'll help you prepare for it with advice on how to market and share your new website, what to look" +
      " out for and also what to expect.",
    highlights: [
      "Launch and redirects handled for you",
      "SEO foundations set up so Google can find you",
      "You get to show off your shiny new website",
    ],
  },
  {
    number: "06",
    name: "The Aftercare",
    icon: IconHeartHandshake,
    description:
      "In the first month, I record the tutorials on your live site so you know how to edit the" +
      " content yourself. Hosting and maintenance are also free this month. After that, it's up to you. Stay on a" +
      " monthly plan, or hire me on a retainer, or take your site elsewhere. The site is yours.",
    highlights: [
      "Video tutorials recorded just for you",
      "One free month of hosting and maintenance",
      "Website Care if you want ongoing changes and priority support",
    ],
  },
];

const faqItems = [
  {
    title: "How long does it take?",
    summary:
      "It depends on the project. A business website usually takes 3 to 6 weeks, a custom website 6 to 10, and an online store 8 to 12. You'll get a timeline with the proposal.",
    content:
      "It depends on what we're building. A business website usually takes 3 to 6 weeks, a custom website 6 to 10 weeks, and an online store 8 to 12. Bigger stores and web apps take longer. Either way, you'll get a planned timeline with the proposal, so you know before we start.",
  },
  {
    title: "What do I need to have ready?",
    summary:
      "Just a good idea of your business and who your customers are. Branding, content and design ideas help, but I can handle those too.",
    content:
      "Not much. I'll mostly need to know your business and who your customers are, which is why we start with a" +
      " chat. If you already have" +
      " branding, content or a design in mind, great. If not, I can take care of those as well.",
  },
  {
    title: "How involved do I need to be?",
    summary:
      "As much as you like. At minimum, I'll need you for The Chat, signing off the proposal and design, and your feedback before launch.",
    content:
      "As much or as little as you like. Some clients want to see everything, others just want the key moments. At minimum, I'll need you for The Chat, signing off on the proposal and design, and your feedback on the staging site before we launch.",
  },
  {
    title: "What if I want changes partway through?",
    summary:
      "Two rounds of feedback are included. If you want something outside the agreed scope, I'll quote it first and only go ahead once you're happy.",
    content:
      "Two rounds of feedback are built in, so changes are expected. If you want something that's outside what we agreed in the proposal, I'll tell you what it'll cost before I do anything. You won't get a surprise bill.",
  },
  {
    title: "How does payment work?",
    summary:
      "Generally 50% to start, 25% when you see the first version, and 25% before launch. Bigger projects can be staged differently.",
    content:
      "Generally it's 50% to start, 25% when you see the first version on the staging site, and the final 25% before launch. Larger projects can be broken up differently to suit.",
  },
  {
    title: "Do you work with businesses outside Brisbane?",
    summary:
      "Yes. I work with businesses all over Australia, from Sydney to the Gold Coast, over video calls.",
    content:
      "Yes. I'm based in Brisbane and love meeting people face to face, but I work with businesses all over Australia, from Sydney's Northern Beaches to the Gold Coast. Video calls and screen sharing work just as well.",
  },
];

export default function OurProcessPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="px-5 pt-5 pb-10 md:px-12 md:pt-10 md:pb-20 lg:px-20 border-b border-border">
        <Breadcrumbs
          items={[{ label: "My Process" }]}
          className="mb-5 md:mb-10"
        />
        <div className="flex max-w-3xl flex-col gap-4">
          <SectionLabel label="My Process" tick />
          <h1 className="text-display-l text-foreground">
            What working with me looks like
          </h1>
          <p className="text-lead text-muted-foreground">
            Over the years of running RAVENCI, I've refined the way I run
            projects. I've learned along the way from the good and the bad, and
            I've come up with a process that just makes sense.
          </p>
          <p className="text-lead text-muted-foreground">
            With six straightforward steps from first contact to delivery and
            beyond, this process works for my clients, and also for me as a
            business owner.
          </p>
        </div>
      </section>

      {/* Intro statement */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-heading-m text-foreground">
            The longer you've been doing something, the smarter you should get
            at doing it.
          </h2>
        </div>
      </section>

      {/* The 6 Steps */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="mb-10 flex flex-col gap-3">
          <SectionLabel index="01" label="The steps" />
          <h2 className="text-display-m text-foreground">
            Straightforward and methodical
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
                      <IconCheck
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
          <SectionLabel
            index="02"
            label="The Point of the Process"
            tone="muted"
          />
          <h2 className="mt-3 text-display-m text-foreground">
            No surprises. That's it.
          </h2>
          <p className="mx-auto mt-10 max-w-2xl text-body text-muted-foreground">
            This process didn't happen by accident. After 8 years of running
            RAVENCI, developing websites and working on digital projects, I've
            realised that having a process gives you confidence in knowing what
            to expect, and helps me stay on top of what comes next.
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
