import Link from "next/link";
import StickyCTA from "@/components/sticky-cta";

import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import Accordion from "@/components/accordion";
import Breadcrumbs from "@/components/breadcrumbs";
import { getTestimonialsForPage } from "@/data/testimonials";

export const metadata = {
  title: "Retainer Packages | RAVENCI Solutions",
  description:
    "Monthly retainer packages for ongoing web development, design, and strategy in Brisbane. From $275/mo. Your dedicated digital team without the overhead of hiring.",
  alternates: { canonical: "/retainer-packages" },
  openGraph: {
    title: "Retainer Packages",
    description:
      "Monthly retainer packages for ongoing web development, design, and strategy in Brisbane. From $275/mo. Your dedicated digital team without the overhead of hiring.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RetainerPackagesPage() {
  const testimonials = getTestimonialsForPage("retainer-packages");
  const features = [
    {
      title: "Hosting & Maintenance Included",
      description:
        "Every retainer includes managed cloud hosting, security, backups, and updates. No separate bills",
    },
    {
      title: "Dedicated Monthly Hours",
      description:
        "Guaranteed development and design time reserved just for you, every month",
    },
    {
      title: "Flexible Allocation",
      description:
        "Use your hours for dev, design, content, or strategy, whatever you need most that month",
    },
    {
      title: "Priority Support",
      description:
        "Retainer clients always come first. Faster response times and direct access to your developer",
    },
    {
      title: "Consistent Progress",
      description:
        "Your website improves every month instead of sitting stagnant between projects",
    },
    {
      title: "Cost Predictability",
      description:
        "One monthly invoice covers everything. No surprise quotes or scope negotiations",
    },
    {
      title: "No Lock-In on Starter",
      description:
        "Our entry-level tier has no minimum commitment. Pay monthly, cancel anytime",
    },
  ];

  const tiers = [
    {
      name: "Business Website",
      price: 275,
      hours: 1,
      includes: [
        "Managed cloud hosting included",
        "Security monitoring, backups & updates",
        "Plugin and CMS updates",
        "Uptime monitoring",
        "Email support, 48-hour response",
        "Minor content edits (text and images)",
        "Monthly performance check",
        "No minimum commitment, cancel anytime",
        "Overage rate: $165/hr",
      ],
    },
    {
      name: "eCommerce",
      price: 650,
      hours: 3,
      includes: [
        "Everything in Business Website, plus:",
        "3 hours of development or design work",
        "Product catalog maintenance support",
        "eCommerce platform updates (Shopify/BigCommerce/WooCommerce)",
        "Payment gateway and shipping monitoring",
        "Monthly performance audit (speed & Core Web Vitals)",
        "Basic SEO monitoring",
        "24-hour support response",
        "1 month hour rollover",
        "3-month minimum commitment",
        "Overage rate: $165/hr",
      ],
    },
    {
      name: "SMB Full Service",
      price: 2800,
      hours: 15,
      includes: [
        "Everything in eCommerce, plus:",
        "15 hours of development and design work",
        "On-call priority support (same business day)",
        "Bi-weekly 30-minute strategy calls",
        "Monthly performance audit + analytics review",
        "Full SEO with keyword tracking",
        "Monthly CRO review",
        "Content updates and page creation",
        "2 months hour rollover",
        "15% off additional project work",
        "3-month minimum commitment",
        "Overage rate: $155/hr",
      ],
    },
  ];

  const faqItems = [
    {
      title: "What kind of work can I use retainer hours for?",
      summary:
        "Anything digital: new pages, design tweaks, feature development, content updates, landing pages, email templates, and performance optimisation. Your hours are fully flexible each month.",
      content:
        "Anything digital. New pages, design tweaks, feature development, content updates, landing pages, email templates, performance optimisation, whatever matters most to your business that month. Your hours are fully flexible.",
    },
    {
      title: "How do unused hours work?",
      summary:
        "Business Website tier has no development hours. eCommerce hours roll over for 1 month, SMB Full Service for 2 months. RAVENCI tracks your balance and helps plan usage.",
      content:
        "It depends on your tier. The Business Website tier covers maintenance only with no dev hours. eCommerce hours roll over for 1 month, and SMB Full Service hours roll over for 2 months. We'll always let you know your balance and help you plan usage.",
    },
    {
      title:
        "What's the difference between a retainer and your maintenance plan?",
      summary:
        "Maintenance covers updates, backups, and security monitoring. A retainer includes all of that plus dedicated hours for active development, design, content, and strategy work.",
      content:
        "Maintenance keeps things running: updates, backups, security monitoring. A retainer includes all of that plus dedicated hours for active development, design, content, and strategy. Maintenance keeps things running. A retainer keeps things moving forward.",
    },
    {
      title: "Can I change tiers?",
      content:
        "Yes. You can upgrade at any time and the change takes effect on your next billing cycle. Downgrades are available at the end of your current commitment period.",
    },
    {
      title: "What if I need more hours in a month?",
      summary:
        "Additional hours are billed at your tier's overage rate ($165/hr for Business and eCommerce, $155/hr for SMB Full Service). RAVENCI always confirms before doing any work beyond your included hours.",
      content:
        "No problem. Additional hours are billed at your tier's overage rate ($165/hr for Business and eCommerce, $155/hr for SMB Full Service). We'll always confirm before doing any work beyond your included hours.",
    },
  ];

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
                name: "Retainer Packages",
                item: "https://ravenci.solutions/retainer-packages",
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section
        className={`content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 min-h-[250px] bg-white`}
      >
        <article className={`col-span-12 flex flex-col`}>
          <Breadcrumbs items={[{ label: "Retainer Packages" }]} />
          <h1 className={`mt-4 text-4xl md:text-5xl lg:text-h1 font-medium`}>
            Your Dedicated Digital Team
          </h1>
          <h2
            className={`max-w-4xl text-2xl md:text-3xl lg:text-h2 font-light`}
          >
            Ongoing development, design, and strategy, without the overhead of
            hiring
          </h2>
          <p className={`mt-6 max-w-2xl text-neutral-500/80`}>
            For Australian businesses that want a digital team without the
            overhead of hiring one. Monthly packages from $275, with hosting,
            maintenance, and dedicated time for development, design, content
            and SEO, used however your business needs it that month. Tell us
            the priorities. We&apos;ll take it from there.
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
              <h3 className={`font-sans text-2xl font-light text-neutral-100`}>
                <span className={`font-bold`}>
                  {testimonials[0].author.split(" ")[0]}
                </span>{" "}
                {testimonials[0].author.split(" ").slice(1).join(" ")}
              </h3>
              {testimonials[0].role && (
                <p className="mt-1 text-sm text-white/60">
                  {testimonials[0].role}
                </p>
              )}
            </>
          )}
        </div>
      </section>

      {/* Two-Column Section */}
      <div className={`grid grid-cols-1 lg:grid-cols-2`}>
        {/* Left Column — Dark: Pain Points + Why a Retainer Beats Hiring */}
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark`}
        >
          <article className={`max-w-lg`}>
            <h2 className={`font-serif text-h3 font-bold text-white`}>
              The Problem with Project-by-Project Work
            </h2>
            <div className={`my-4 text-neutral-400/90`}>
              Common frustrations we hear from businesses:
              <ul className={`mt-4 flex flex-col gap-2`}>
                <li>- Freelancers who disappear between projects</li>
                <li>- Websites that sit stagnant for months after launch</li>
                <li>- Surprise invoices every time you need a small change</li>
                <li>- Juggling multiple vendors for dev, design, and SEO</li>
                <li>- Losing momentum because you can&apos;t get things done fast enough</li>
              </ul>
            </div>

            <h2
              className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}
            >
              Why a Retainer Beats Hiring In-House
            </h2>
            <p className={`mb-6 text-neutral-400/90`}>
              Our SMB Full Service retainer costs{" "}
              <span className={`text-white font-bold`}>$33,600/year</span>, a
              full-time hire costs{" "}
              <span className={`text-white font-bold`}>$80,000-$100,000/year</span>{" "}
              before super, leave, equipment, and training.
            </p>
            <ul className={`flex flex-col gap-4 mb-6 text-neutral-400/90`}>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />
                No recruitment costs, onboarding, or HR overhead
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Access to a full team (dev, design, SEO, content), not just one
                person
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Scale up or down as your business needs change
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />
                No sick days, no annual leave, no gaps in coverage
              </li>
            </ul>
            <p className={`mb-4 text-neutral-400/90`}>
              A retainer gives you a dedicated digital team that knows your
              business inside and out. No onboarding every time, no context
              switching, no lost momentum.
            </p>
            <p className={`text-neutral-400/90`}>
              That&apos;s how we approach it at RAVENCI. To make it even simpler for
              you, we offer three tiers of retainer packages, each designed to
              meet your specific needs.
            </p>
          </article>
        </section>

        {/* Right Column — Light: Features Checklist */}
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-white`}
        >
          <article className={`max-w-lg`}>
            <h2 className={`mb-8 font-serif text-h3 font-bold`}>
              Why Choose a Retainer
            </h2>
            <ul className={`flex flex-col gap-8`}>
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <IconCircleCheckFilled
                    className="text-ravenci-primary flex-shrink-0"
                    size={24}
                  />
                  <p className={`text-neutral-600`}>
                    <span className="font-bold text-ravenci-dark">
                      {feature.title}:
                    </span>{" "}
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>

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
          </article>
        </section>
      </div>

      {/* Full-Width Pricing Section */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark`}
      >
        <h2
          className={`mb-12 font-serif text-h3 font-bold text-white text-center`}
        >
          Choose Your Retainer
        </h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}
        >
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-neutral-800/50 rounded-xl p-8 border border-neutral-700`}
            >
              <h4 className={`font-serif text-xl font-bold text-white`}>
                {tier.name}
              </h4>
              <p className={`mt-2 text-sm text-neutral-400/90`}>
                {tier.hours} hours/month
              </p>

              <Accordion
                titleClassName={`py-3 px-4 mb-2 text-base rounded-lg border border-neutral-600 bg-neutral-800 text-white hover:border-ravenci-primary hover:bg-ravenci-primary/20 transition-colors`}
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

              <Link
                href={`/launch-your-vision`}
                className={`group/cta mt-8 block text-center rounded-xl border border-neutral-600 hover:border-white hover:bg-white p-6 transition-colors`}
              >
                <span
                  className={`text-4xl font-bold text-white group-hover/cta:text-ravenci-dark transition-colors`}
                >
                  ${tier.price.toLocaleString()}
                  <span className={`text-base font-normal`}>/mo.</span>
                </span>
                <p
                  className={`mt-3 text-sm font-medium text-white group-hover/cta:text-ravenci-dark transition-colors`}
                >
                  Book a strategy call &rarr;
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className="content-section py-12 px-5 sm:px-20 xl:px-36 bg-neutral-50">
        <h2 className="mb-8 font-serif text-h3 font-bold text-center">Related Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { name: "Web Development", href: "/web-development", description: "Custom websites built to perform" },
            { name: "Website Maintenance", href: "/website-maintenance", description: "Keep your site secure and up to date" },
            { name: "SEO & Content", href: "/seo-and-content", description: "Get found by the right customers" },
          ].map((service) => (
            <Link key={service.href} href={service.href} className="p-6 rounded-xl border border-neutral-200 bg-white hover:border-ravenci-primary/30 transition-colors text-center">
              <h3 className="font-bold text-ravenci-dark mb-2">{service.name}</h3>
              <p className="text-sm text-neutral-500">{service.description}</p>
            </Link>
          ))}
        </div>
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

      {/* Footer Spacer */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 grid grid-cols-5 gap-10 min-h-[150px] bg-white`}
      ></section>

      {/* Sticky CTA for Mobile */}
      <StickyCTA
        link="/launch-your-vision"
        startingPrice={275}
        label="Book a Strategy Call"
      />

      {/* Product JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "RAVENCI Retainer Packages",
            description:
              "Monthly retainer packages for ongoing web development, design, and strategy. Includes hosting, maintenance, and dedicated development hours.",
            brand: {
              "@type": "Organization",
              name: "RAVENCI Solutions",
            },
            offers: tiers.map((tier) => ({
              "@type": "Offer",
              name: `${tier.name} Retainer`,
              price: tier.price,
              priceCurrency: "AUD",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: tier.price,
                priceCurrency: "AUD",
                billingDuration: "P1M",
              },
              availability: "https://schema.org/InStock",
              url: "https://ravenci.solutions/retainer-packages",
            })),
          }),
        }}
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
