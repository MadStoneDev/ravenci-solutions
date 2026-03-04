import Link from "next/link";
import PriceButton from "@/components/price-button";
import StickyCTA from "@/components/sticky-cta";

import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import Accordion from "@/components/accordion";
import { getTestimonialsForPage } from "@/data/testimonials";

export const metadata = {
  title: "Retainer Packages — Ongoing Digital Partnership | RAVENCI Solutions",
  description:
    "Monthly retainer packages for ongoing web development, design, and strategy in Brisbane. From $490/mo. Your dedicated digital team without the overhead of hiring.",
};

export default function RetainerPackagesPage() {
  const testimonials = getTestimonialsForPage("retainer-packages");
  const features = [
    {
      title: "Hosting & Maintenance Included",
      description:
        "Every retainer includes managed cloud hosting, security, backups, and updates — no separate bills",
    },
    {
      title: "Dedicated Monthly Hours",
      description:
        "Guaranteed development and design time reserved just for you, every month",
    },
    {
      title: "Flexible Allocation",
      description:
        "Use your hours for dev, design, content, or strategy — whatever you need most that month",
    },
    {
      title: "Priority Support",
      description:
        "Retainer clients always come first — faster response times and direct access to your developer",
    },
    {
      title: "Consistent Progress",
      description:
        "Your website improves every month instead of sitting stagnant between projects",
    },
    {
      title: "Cost Predictability",
      description:
        "One monthly invoice covers everything — no surprise quotes or scope negotiations",
    },
    {
      title: "No Lock-In on Starter",
      description:
        "Our entry-level tier has no minimum commitment — pay monthly, cancel anytime",
    },
  ];

  const tiers = [
    {
      name: "Starter",
      price: 490,
      hours: 2,
      includes: [
        "2 hours of development or design work",
        "Managed cloud hosting included",
        "Security monitoring, backups & updates",
        "Email support — 48-hour response",
        "No hour rollover",
        "Overage rate: $175/hr",
        "No minimum commitment — cancel anytime",
      ],
      cap: 12,
    },
    {
      name: "Growth",
      price: 990,
      hours: 5,
      includes: [
        "5 hours of development or design work",
        "Everything in Starter, plus:",
        "Monthly 30-minute strategy call",
        "Monthly performance audit (speed & Core Web Vitals)",
        "Basic SEO monitoring",
        "24-hour support response",
        "1 month hour rollover",
        "10% off additional project work",
        "Overage rate: $165/hr",
        "3-month minimum commitment",
      ],
      cap: 8,
    },
    {
      name: "Partner",
      price: 1990,
      hours: 12,
      includes: [
        "12 hours of development or design work",
        "Everything in Growth, plus:",
        "Bi-weekly 30-minute strategy calls",
        "Monthly performance audit + analytics review",
        "Full SEO with keyword tracking",
        "Monthly CRO review",
        "Same business day support response",
        "2 months hour rollover",
        "15% off additional project work",
        "Overage rate: $155/hr",
        "3-month minimum commitment",
      ],
      cap: 5,
    },
    {
      name: "Scale",
      price: 3490,
      hours: 25,
      includes: [
        "25 hours of development or design work",
        "Everything in Partner, plus:",
        "Weekly 30-minute strategy calls",
        "Monthly performance audit + comprehensive analytics review",
        "Comprehensive SEO with link building",
        "Full CRO: heatmaps, A/B testing, form optimisation",
        "4-hour support response (1hr for critical issues)",
        "3 months hour rollover",
        "20% off additional project work",
        "Overage rate: $145/hr",
        "6-month minimum commitment",
      ],
      cap: 3,
    },
  ];

  const faqItems = [
    {
      title: "What kind of work can I use retainer hours for?",
      summary:
        "Anything digital: new pages, design tweaks, feature development, content updates, landing pages, email templates, and performance optimisation. Your hours are fully flexible each month.",
      content:
        "Anything digital. New pages, design tweaks, feature development, content updates, landing pages, email templates, performance optimisation — whatever moves the needle for your business that month. Your hours are fully flexible.",
    },
    {
      title: "How do unused hours work?",
      summary:
        "Starter hours don't roll over. Growth hours roll over for 1 month, Partner for 2 months, and Scale for 3 months. RAVENCI tracks your balance and helps plan usage.",
      content:
        "It depends on your tier. Starter hours don't roll over. Growth hours roll over for 1 month, Partner for 2 months, and Scale for 3 months. We'll always let you know your balance and help you plan usage.",
    },
    {
      title:
        "What's the difference between a retainer and your maintenance plan?",
      summary:
        "Maintenance covers updates, backups, and security monitoring. A retainer includes all of that plus dedicated hours for active development, design, content, and strategy work.",
      content:
        "Maintenance keeps things running — updates, backups, security monitoring. A retainer includes all of that plus dedicated hours for active development, design, content, and strategy. Think of maintenance as protection, and a retainer as progress.",
    },
    {
      title: "Can I change tiers?",
      content:
        "Yes. You can upgrade at any time and the change takes effect on your next billing cycle. Downgrades are available at the end of your current commitment period.",
    },
    {
      title: "What if I need more hours in a month?",
      summary:
        "Additional hours are billed at your tier's discounted overage rate. RAVENCI always confirms before doing any work beyond your included hours — no surprise charges.",
      content:
        "No problem. Additional hours are billed at your tier's overage rate, which is discounted from our standard rate. We'll always confirm before doing any work beyond your included hours.",
    },
  ];

  return (
    <main className={`flex flex-col`}>
      {/* Hero */}
      <section
        className={`content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 min-h-[250px] bg-white`}
      >
        <article className={`max-w-2xl col-span-12 flex flex-col gap-2`}>
          <h1 className={`text-4xl md:text-5xl lg:text-h1 font-medium`}>
            Your Dedicated Digital Team
          </h1>
          <h2
            className={`max-w-2xl text-2xl md:text-3xl lg:text-h2 font-light`}
            style={{ lineHeight: "2.25rem" }}
          >
            Ongoing development, design, and strategy — without the overhead of
            hiring
          </h2>
          <p className={`mt-6 max-w-2xl text-neutral-500/80`}>
            RAVENCI Solutions offers monthly retainer packages from $490/month in
            Brisbane. Four tiers: Starter (2hrs), Growth (5hrs), Partner
            (12hrs), and Scale (25hrs). Includes hosting, maintenance, dedicated
            development hours, and strategy calls. Flexible allocation across
            dev, design, content, and SEO.
          </p>
        </article>
      </section>

      {/* Social Proof Bar */}
      <section
        className={`p-10 flex flex-col items-center gap-3 bg-ravenci-primary text-white text-center`}
      >
        <div className={`max-w-lg`}>
          <h3
            className={`pb-6 border-b border-white/20 font-serif font-medium text-xl`}
          >
            Trusted by Brisbane businesses for ongoing digital partnership
          </h3>
          {testimonials[0] && (
            <>
              <p
                className={`my-6 font-sans font-light leading-8 text-ravenci-light-gray`}
              >
                &ldquo;{testimonials[0].content}&rdquo;
              </p>
              <h3
                className={`font-sans text-2xl font-light text-neutral-100`}
              >
                <span className={`font-bold`}>
                  {testimonials[0].author.split(" ")[0]}
                </span>{" "}
                {testimonials[0].author.split(" ").slice(1).join(" ")}
              </h3>
            </>
          )}
        </div>
      </section>

      {/* Two-Column Grid */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 bg-white`}>
        {/* Left Column — Why Choose a Retainer */}
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-neutral-200/50`}
        >
          <article className={`max-w-lg`}>
            <h3 className={`mb-8 font-serif text-h3 font-bold`}>
              Why Choose a Retainer
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

          <Link
            href={`/launch-your-vision`}
            className={`mt-12 p-2 flex items-center gap-6 bg-ravenci-primary rounded-xl hover:scale-105 text-center transition-all duration-300 ease-in-out`}
          >
            <div className={`flex flex-col items-center w-full`}>
              <span
                className={`font-bold text-base text-white text-center uppercase transition-all duration-300 ease-in-out`}
              >
                Not sure which tier? Let&apos;s talk
              </span>
              <span
                className={`text-sm text-white/60 text-center transition-all duration-300 ease-in-out`}
              >
                Book a free strategy call
              </span>
            </div>
          </Link>
        </section>

        {/* Right Column — Tiers */}
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark`}
        >
          <article className={`max-w-lg flex flex-col gap-12`}>
            {tiers.map((tier) => (
              <div key={tier.name}>
                <h3
                  className={`font-serif text-h3 font-bold text-white`}
                >
                  {tier.name}
                </h3>
                <p className={`mt-2 text-neutral-400/90`}>
                  {tier.hours} hours of dedicated work per month
                </p>

                <Accordion
                  titleClassName={`py-4 text-sm text-white/80`}
                  items={[
                    {
                      title: "What's Included",
                      content: (
                        <ul className="flex flex-col gap-2 text-sm text-neutral-400/90">
                          {tier.includes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <IconCheck
                                size={16}
                                className="mt-0.5 text-ravenci-primary flex-shrink-0"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      ),
                    },
                  ]}
                />

                <PriceButton
                  price={tier.price}
                  frequency={"mo."}
                  fromText={""}
                  includeFrom={false}
                  callToAction={`Book a Strategy Call`}
                  subCallToAction={`Start your ${tier.name} retainer`}
                  link={`/launch-your-vision`}
                  className="!mt-4"
                />

                <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
                  <p className="text-sm text-yellow-200">
                    ⚡ Limited to {tier.cap} clients — ensures dedicated
                    attention for every partner
                  </p>
                </div>
              </div>
            ))}
          </article>
        </section>
      </div>

      {/* Comparison Section */}
      <section
        className={`content-section py-16 px-5 sm:px-20 xl:px-36 bg-ravenci-primary`}
      >
        <article className={`mx-auto max-w-xl`}>
          <h3
            className={`mb-6 font-serif text-h3 font-bold text-white text-center`}
          >
            Why a Retainer Beats Hiring In-House
          </h3>
          <p className={`mb-8 text-center text-neutral-50/70`}>
            Our Scale retainer costs{" "}
            <span className={`text-white font-bold`}>$41,880/year</span> — a
            full-time hire costs{" "}
            <span className={`text-white font-bold`}>$80,000–$100,000/year</span>{" "}
            before super, leave, equipment, and training.
          </p>
          <ul className={`flex flex-col gap-4`}>
            <li className={`flex gap-2 text-white`}>
              <IconCheck
                size={24}
                className={`p-1 bg-white rounded-full text-ravenci-primary flex-shrink-0`}
              />{" "}
              No recruitment costs, onboarding, or HR overhead
            </li>
            <li className={`flex gap-2 text-white`}>
              <IconCheck
                size={24}
                className={`p-1 bg-white rounded-full text-ravenci-primary flex-shrink-0`}
              />{" "}
              Access to a full team — dev, design, SEO, content — not just one
              person
            </li>
            <li className={`flex gap-2 text-white`}>
              <IconCheck
                size={24}
                className={`p-1 bg-white rounded-full text-ravenci-primary flex-shrink-0`}
              />{" "}
              Scale up or down as your business needs change
            </li>
            <li className={`flex gap-2 text-white`}>
              <IconCheck
                size={24}
                className={`p-1 bg-white rounded-full text-ravenci-primary flex-shrink-0`}
              />{" "}
              No sick days, no annual leave, no gaps in coverage
            </li>
          </ul>
        </article>
      </section>

      {/* FAQ Section */}
      <section
        className={`content-section py-16 px-6 md:px-10 flex flex-col items-center justify-center gap-3 bg-white`}
      >
        <h2 className={`font-serif text-h3`}>Frequently Asked Questions</h2>
        <Accordion
          titleClassName={`py-6 text-lg`}
          items={faqItems}
        />
      </section>

      {/* Spacer */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 grid grid-cols-5 gap-10 min-h-[150px] bg-white`}
      ></section>

      {/* StickyCTA */}
      <StickyCTA
        link="/launch-your-vision"
        startingPrice={490}
        label="Book a Strategy Call"
      />

      {/* FAQ JSON-LD Schema */}
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
