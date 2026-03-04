import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | RAVENCI Solutions",
  description:
    "RAVENCI Solutions is committed to making our website accessible to everyone, including people with disabilities. Learn about our accessibility efforts.",
};

export default function AccessibilityStatementPage() {
  return (
    <section>
      <article
        className="content-section py-32 px-5 sm:px-20 xl:px-36 flex flex-col bg-ravenci-dark text-white"
      >
        <h1 className="text-4xl md:text-5xl lg:text-h1 font-medium">
          Accessibility Statement
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-h2 font-light">
          Our commitment to an inclusive web
        </h2>
      </article>

      <article
        className="content-section py-20 px-5 sm:px-20 xl:px-36 pb-16 lg:pb-32 bg-white"
      >
        <div className="col-span-12 lg:col-span-8 flex flex-col justify-center gap-5 max-w-3xl">
          <p>
            RAVENCI Solutions is committed to ensuring our website is accessible
            to everyone, including people with disabilities. We continuously
            work to improve the user experience for all visitors and apply the
            relevant accessibility standards.
          </p>

          <h3 className="mt-4 text-xl font-bold">Standards We Follow</h3>
          <p>
            We aim to conform to the Web Content Accessibility Guidelines (WCAG)
            2.1 at Level AA. These guidelines explain how to make web content
            more accessible to people with a wide range of disabilities,
            including visual, auditory, physical, speech, cognitive, language,
            learning, and neurological disabilities.
          </p>

          <h3 className="mt-4 text-xl font-bold">What We Do</h3>
          <ul className="pl-5 list-disc space-y-2">
            <li>
              Use semantic HTML to ensure content is structured and meaningful
              for assistive technologies
            </li>
            <li>
              Provide alternative text for images so screen readers can describe
              visual content
            </li>
            <li>
              Ensure sufficient colour contrast between text and backgrounds
            </li>
            <li>
              Support keyboard navigation across all interactive elements
            </li>
            <li>
              Use ARIA labels and roles where native HTML elements are not
              sufficient
            </li>
            <li>
              Design responsive layouts that work across different screen sizes
              and zoom levels
            </li>
            <li>
              Avoid content that flashes or blinks in ways that may cause
              seizures
            </li>
          </ul>

          <h3 className="mt-4 text-xl font-bold">Third-Party Content</h3>
          <p>
            Our website may include content from third-party services (such as
            embedded videos, maps, or analytics tools). While we strive to
            ensure these meet accessibility standards, we cannot guarantee full
            compliance for content controlled by external providers.
          </p>

          <h3 className="mt-4 text-xl font-bold">Ongoing Improvements</h3>
          <p>
            Accessibility is an ongoing effort. We regularly review our website
            and make updates to improve usability. As web standards evolve, we
            update our practices to reflect current best practices.
          </p>

          <h3 className="mt-4 text-xl font-bold">Feedback</h3>
          <p>
            If you experience any difficulty accessing our website or have
            suggestions for improvement, we want to hear from you. Please
            contact us:
          </p>
          <ul className="pl-5 list-disc space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:hello@ravenci.solutions"
                className="text-ravenci-primary"
              >
                hello@ravenci.solutions
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+61731061836" className="text-ravenci-primary">
                (07) 3106 1836
              </a>
            </li>
          </ul>
          <p>
            We take accessibility feedback seriously and will do our best to
            respond within 2 business days.
          </p>

          <p className="mt-8 text-sm text-neutral-400">
            This statement was last updated on 4 March 2026.
          </p>
        </div>
      </article>
    </section>
  );
}
