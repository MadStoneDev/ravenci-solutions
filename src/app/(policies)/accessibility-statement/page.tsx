import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import { Metadata } from "next";

import Breadcrumbs from "@/components/breadcrumbs";
import SectionLabel from "@/components/section-label";

const SECTION = "px-5 py-14 md:px-12 md:py-20 lg:px-20";

export const metadata: Metadata = {
  title: "Accessibility Statement | RAVENCI Solutions",
  description:
    "How RAVENCI Solutions works to keep ravenci.solutions accessible, the standards followed, and how to report an accessibility issue.",
  openGraph: {
    ...OG_DEFAULTS,
    title: "Accessibility Statement | RAVENCI Solutions",
    description:
      "How RAVENCI Solutions works to keep ravenci.solutions accessible, the standards followed, and how to report an accessibility issue.",
    url: "/accessibility-statement",
    type: "website",
  },
  twitter: { ...TWITTER_DEFAULTS },
  alternates: { canonical: "/accessibility-statement" },
};

export default function AccessibilityStatementPage() {
  return (
    <main className="flex flex-col">
      <section className="px-5 pt-5 pb-10 md:px-12 md:pt-10 md:pb-20 lg:px-20 border-b border-border">
        <Breadcrumbs items={[{ label: "Accessibility Statement" }]} className="mb-5 md:mb-10" />
        <div className="flex max-w-3xl flex-col gap-4">
          <SectionLabel label="Legal" tick />
          <h1 className="text-display-l text-foreground">
            Accessibility Statement
          </h1>
          <p className="text-lead text-muted-foreground">
            My commitment to an inclusive web.
          </p>
        </div>
      </section>

      <section className={SECTION}>
        <div className="flex max-w-prose flex-col gap-5 text-body text-muted-foreground">
          <p>
            I want my website to work for everyone, including people with
            disabilities. I keep working to improve the experience for all
            visitors and to apply the relevant accessibility standards.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            Standards I follow
          </h3>
          <p>
            I aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at
            Level AA. These guidelines explain how to make web content more
            accessible to people with a wide range of disabilities, including
            visual, auditory, physical, speech, cognitive, language, learning and
            neurological disabilities.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">What I do</h3>
          <ul className="pl-5 list-disc space-y-2">
            <li>
              Use semantic HTML so content is structured and meaningful for
              assistive technologies
            </li>
            <li>
              Provide alternative text for images so screen readers can describe
              visual content
            </li>
            <li>Keep sufficient colour contrast between text and backgrounds</li>
            <li>Support keyboard navigation across all interactive elements</li>
            <li>
              Use ARIA labels and roles where native HTML elements are not enough
            </li>
            <li>
              Design responsive layouts that work across different screen sizes
              and zoom levels
            </li>
            <li>
              Avoid content that flashes or blinks in ways that may cause seizures
            </li>
          </ul>

          <h3 className="mt-4 text-heading-s text-foreground">
            Third-party content
          </h3>
          <p>
            My website may include content from third-party services (such as
            embedded videos, maps or analytics tools). I do my best to make sure
            these meet accessibility standards, but I cannot guarantee full
            compliance for content controlled by others.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">
            Ongoing improvements
          </h3>
          <p>
            Accessibility is an ongoing effort. I review the website regularly and
            make updates to improve usability. As web standards evolve, I update
            my practices to match.
          </p>

          <h3 className="mt-4 text-heading-s text-foreground">Feedback</h3>
          <p>
            If you have trouble using any part of my website, or you have a
            suggestion, I want to hear from you. Please get in touch:
          </p>
          <ul className="pl-5 list-disc space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:hello@ravenci.solutions"
                className="text-accent hover:underline"
              >
                hello@ravenci.solutions
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+61731061836" className="text-accent hover:underline">
                (07) 3106 1836
              </a>
            </li>
          </ul>
          <p>
            I take accessibility feedback seriously and will do my best to respond
            within 2 business days.
          </p>

          <p className="mt-8 text-small text-muted-foreground">
            This statement was last updated on 9 November 2026.
          </p>
        </div>
      </section>
    </main>
  );
}
