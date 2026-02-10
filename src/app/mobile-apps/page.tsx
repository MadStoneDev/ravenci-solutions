import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import PriceButton from "@/components/price-button";
import Accordion from "@/components/accordion";
import StickyCTA from "@/components/sticky-cta";
import { getTestimonialsForPage } from "@/data/testimonials";

export const metadata = {
  title: "Mobile App Development - RAVENCI Solutions",
  description:
    "iOS and Android apps with React Native, Swift, and Kotlin. Store submission to Apple App Store and Google Play. Brisbane-based, AUD pricing.",
};

export default function MobileAppDevelopmentPage() {
  const testimonials = getTestimonialsForPage("mobile-apps");
  const features = [
    {
      title: "Cross-Platform & Native",
      description:
        "React Native when it fits, Swift/Kotlin for native performance",
    },
    {
      title: "App Store Publishing",
      description:
        "Submission and guidance for Apple App Store and Google Play",
    },
    {
      title: "Modern Architecture",
      description: "TypeScript-first, modular features, clean APIs",
    },
    {
      title: "Authentication & Security",
      description: "Secure auth, permissions, and best-practice data handling",
    },
    {
      title: "Push Notifications",
      description: "FCM/APNs setup and in-app messaging where required",
    },
    {
      title: "Offline-First",
      description: "Local storage and sync strategies for reliability",
    },
    {
      title: "Analytics & Crash Reporting",
      description: "Visibility with metrics and error monitoring",
    },
    {
      title: "CI/CD Pipelines",
      description: "Automated builds, testing, and distribution",
    },
    {
      title: "Scalable Backends",
      description: "Node/Express and Supabase, or tech suited to the project",
    },
  ];

  const addons = [
    {
      title: "Product Design Sprint",
      description: "User flows, wireframes, and UI kits",
    },
    {
      title: "Admin Dashboard",
      description: "Web console for content and users",
    },
    {
      title: "Payments & Subscriptions",
      description: "Stripe, in-app purchases, and renewals",
    },
    {
      title: "ASO & Launch Strategy",
      description: "Store assets, descriptions, and keyword planning",
    },
    {
      title: "Closed Beta / TestFlight",
      description: "Pre-release distribution and feedback cycles",
    },
    {
      title: "Localization",
      description: "Multi-language support and right-to-left layouts",
    },
    {
      title: "Real-time Features",
      description: "Chat, presence, and live updates",
    },
    {
      title: "Integrations",
      description: "Maps, media, camera, barcode, BLE, and more",
    },
    {
      title: "Accessibility",
      description: "Inclusive UX with platform accessibility features",
    },
    {
      title: "Support & Maintenance",
      description: "Update cycles and platform changes handled",
    },
  ];

  return (
    <main className="flex flex-col">
      <section className="content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 min-h-[250px] bg-white">
        <article className="col-span-12 flex flex-col">
          <h1 className="text-4xl md:text-5xl lg:text-h1 font-medium">
            Mobile apps users love to keep
          </h1>
          <h2 className="max-w-4xl text-2xl md:text-3xl lg:text-h2 font-light">
            Built with React Native, Swift, and Kotlin—published to Apple and
            Google stores
          </h2>
        </article>
      </section>

      <section className="p-10 flex flex-col items-center gap-3 bg-ravenci-primary text-white text-center">
        <div className="max-w-lg">
          <h3 className="pb-6 border-b border-white/20 font-serif font-medium text-xl">
            Brisbane-founded apps, built for reliability and growth
          </h3>
          {testimonials[0] && (
            <>
              <p className="my-6 font-poppins font-light leading-8 text-ravenci-light-gray">
                &ldquo;{testimonials[0].content}&rdquo;
              </p>
              <h3 className="font-poppins text-2xl font-light text-neutral-100">
                <span className="font-bold">
                  {testimonials[0].author.split(" ")[0]}
                </span>{" "}
                {testimonials[0].author.split(" ").slice(1).join(" ")}
              </h3>
            </>
          )}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white">
        <section className="content-section py-20 px-5 sm:px-20 xl:px-36 space-y-14 bg-neutral-200/50">
          <article className="max-w-lg">
            <h3 className="mb-8 font-serif text-h3 font-bold">
              What you get with Mobile App Development
            </h3>
            <ul className="flex flex-col gap-8">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <IconCircleCheckFilled
                    className="text-ravenci-primary flex-shrink-0"
                    size={24}
                  />
                  <p className="text-neutral-500/80">
                    <span className="font-bold text-ravenci-dark">
                      {f.title}:
                    </span>{" "}
                    {f.description}
                  </p>
                </li>
              ))}
            </ul>
          </article>

          <article className="max-w-lg">
            <h3 className="mb-8 font-serif text-h3 font-bold">
              Popular Add-ons
            </h3>
            <ul className="flex flex-col gap-8">
              {addons.map((a, i) => (
                <li key={i} className="flex items-start gap-2">
                  <IconCircleCheckFilled
                    className="text-ravenci-primary flex-shrink-0"
                    size={24}
                  />
                  <p className="text-neutral-500/80">
                    <span className="font-bold text-ravenci-dark">
                      {a.title}:
                    </span>{" "}
                    {a.description}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark">
          <article className="max-w-lg">
            <h3 className="font-serif text-h3 font-bold text-white">
              Avoid launch delays and app store rejections
            </h3>
            <div className="my-4 text-neutral-400/90">
              Skip the pain of:
              <ul className="mt-4 flex flex-col gap-2">
                <li>- Unclear roadmaps and missed deadlines</li>
                <li>- Performance issues on key devices</li>
                <li>- Store policy violations and rejections</li>
                <li>- Fragile builds without automated testing</li>
                <li>- “Multi-platform” code that isn’t truly native</li>
              </ul>
            </div>

            <h3 className="mt-8 mb-4 font-serif text-h3 font-bold text-white">
              Why RAVENCI for mobile
            </h3>
            <ul className="flex flex-col gap-4 mb-6 text-neutral-400/90">
              <li className="flex gap-2">
                <IconCheck
                  size={24}
                  className="p-1 bg-ravenci-primary rounded-full text-white"
                />
                React Native, Swift, Kotlin—choose what suits the project
              </li>
              <li className="flex gap-2">
                <IconCheck
                  size={24}
                  className="p-1 bg-ravenci-primary rounded-full text-white"
                />
                Store submissions for Apple and Google included
              </li>
              <li className="flex gap-2">
                <IconCheck
                  size={24}
                  className="p-1 bg-ravenci-primary rounded-full text-white"
                />
                CI/CD and QA baked in for reliable releases
              </li>
              <li className="flex gap-2">
                <IconCheck
                  size={24}
                  className="p-1 bg-ravenci-primary rounded-full text-white"
                />
                Brisbane-based with transparent AUD pricing
              </li>
            </ul>

            <h3 className="mt-8 mb-4 font-serif text-h3 font-bold text-white">
              1. MVP Sprint
            </h3>
            <p className="mb-4 text-neutral-400/90">
              Validate your idea with a store-ready MVP focused on the core user
              journey. Ship fast with confidence.
            </p>
            <div className="mb-16 text-white">
              <Accordion
                titleClassName="py-3 px-3 mb-2 text-lg bg-white text-neutral-900"
                items={[
                  {
                    title: "What's Included",
                    content: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
  <li>React Native app targeting iOS and Android</li>
  <li>Core flows (2-3 key features), onboarding, and auth</li>
  <li>Lightweight backend (Supabase/Express)</li>
  <li>Basic analytics and crash reporting</li>
  <li>App store submissions (Apple & Google)</li>
  <li>6-8 weeks delivery</li>
</ul>
`,
                  },
                ]}
              />
              <PriceButton
                price={"30,000"}
                link={"/launch-your-vision"}
                frequency={""}
                includeFrom={true}
                callToAction={"MVP Sprint"}
                subCallToAction={"Enquire for a tailored proposal"}
              />
            </div>

            <h3 className="mt-8 mb-4 font-serif text-h3 font-bold text-white">
              2. Growth Build
            </h3>
            <p className="mb-4 text-neutral-400/90">
              Scale your product with more features, native modules, and
              stronger reliability for growing user bases.
            </p>
            <div className="mb-16 text-white">
              <Accordion
                titleClassName="py-3 px-3 mb-2 text-lg bg-white text-neutral-900"
                items={[
                  {
                    title: "What's Included",
                    content: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
  <li>Feature build-out with offline-first patterns</li>
  <li>Push notifications and deep linking</li>
  <li>Payments/subscriptions integration</li>
  <li>Automated tests and CI/CD</li>
  <li>10-14 weeks delivery</li>
</ul>
`,
                  },
                ]}
              />
              <PriceButton
                price={"50,000"}
                link={"/launch-your-vision"}
                frequency={""}
                includeFrom={true}
                callToAction={"Growth Build"}
                subCallToAction={"Enquire for a tailored proposal"}
              />
            </div>

            <h3 className="mt-8 mb-4 font-serif text-h3 font-bold text-white">
              3. Enterprise
            </h3>
            <p className="mb-4 text-neutral-400/90">
              Complex integrations, compliance, performance budgets, and ongoing
              release management at scale.
            </p>
            <div className="mb-16 text-white">
              <Accordion
                titleClassName="py-3 px-3 mb-2 text-lg bg-white text-neutral-900"
                items={[
                  {
                    title: "What's Included",
                    content: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
  <li>Custom architecture and native modules</li>
  <li>SSO, MDM, and advanced security</li>
  <li>Observability and performance tuning</li>
  <li>Release trains and multi-env CI/CD</li>
  <li>12-20+ weeks depending on scope</li>
</ul>
`,
                  },
                ]}
              />
              <PriceButton
                price={"75,000"}
                link={"/launch-your-vision"}
                frequency={""}
                includeFrom={true}
                callToAction={"Enterprise"}
                subCallToAction={"Enquire for a tailored proposal"}
              />
            </div>
          </article>
        </section>
      </div>

      <section className="content-section py-16 px-6 md:px-10 flex flex-col items-center justify-center gap-3 bg-white">
        <h2 className="font-serif text-h3">Mobile FAQs</h2>
        <Accordion
          titleClassName="py-6 text-lg"
          items={[
            {
              title: "Can you publish on both Apple and Google stores?",
              content:
                "Yes. We handle submissions, guidelines, and resubmissions if needed.",
            },
            {
              title: "React Native or fully native?",
              content:
                "We use React Native when it’s a great fit and drop to Swift or Kotlin where native performance is required.",
            },
            {
              title: "Do you build the backend too?",
              content:
                "Yes. We frequently use Node/Express and Supabase, but we’ll choose what best suits your project.",
            },
            {
              title: "Will the app be maintained after launch?",
              content:
                "We offer support plans for OS changes, library updates, and new features.",
            },
          ].map((i) => ({
            ...i,
            content: `<p class="pt-3 text-neutral-500/90">${i.content}</p>`,
          }))}
        />
      </section>

      <section className="content-section py-20 px-5 sm:px-20 xl:px-36 grid grid-cols-5 gap-10 min-h-[150px] bg-white"></section>

      {/* Mobile sticky CTA */}
      <StickyCTA
        link="/launch-your-vision"
        startingPrice={30000}
        priceNote=""
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Can you publish on both Apple and Google stores?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We handle submissions, guidelines, and resubmissions if needed.",
                },
              },
              {
                "@type": "Question",
                name: "React Native or fully native?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We use React Native when it's a great fit and drop to Swift or Kotlin where native performance is required.",
                },
              },
              {
                "@type": "Question",
                name: "Do you build the backend too?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We frequently use Node/Express and Supabase, but we'll choose what best suits your project.",
                },
              },
              {
                "@type": "Question",
                name: "Will the app be maintained after launch?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We offer support plans for OS changes, library updates, and new features.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
