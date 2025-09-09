import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import PriceButton from "@/components/price-button";
import Accordion from "@/components/accordion";
import StickyCTA from "@/components/sticky-cta";

export const metadata = {
  title: "SEO & Content Services - RAVENCI Solutions",
  description:
    "SEO and content in Brisbane, Australia that gets you found and converts. Transparent AUD pricing. On-page SEO, content, and ethical link building.",
};

export default function SEOContentPage() {
  const features = [
    {
      title: "Keyword Research",
      description:
        "In-depth analysis to find the keywords your customers actually search for",
    },
    {
      title: "On-Page Optimization",
      description:
        "Technical SEO improvements that help search engines understand your content",
    },
    {
      title: "Content Strategy",
      description:
        "Strategic content planning that attracts your ideal customers and builds authority",
    },
    {
      title: "Conversion-Focused Copy",
      description:
        "Persuasive writing that turns website visitors into paying customers",
    },
    {
      title: "Local SEO",
      description:
        "Optimization for local searches to win in Brisbane and your service areas",
    },
    {
      title: "Performance Tracking",
      description:
        "Clear reporting on rankings, traffic quality, and conversions",
    },
    {
      title: "Competitor Analysis",
      description:
        "Understand what works in your niche and how to outperform competitors",
    },
    {
      title: "Brand Voice Development",
      description:
        "Consistent messaging that reflects your brand personality and values",
    },
    {
      title: "Long-term Results",
      description:
        "Sustainable strategies that build lasting search visibility",
    },
  ];

  const addons = [
    {
      title: "Google Ads Copy",
      description:
        "High-converting ad copy for Google Ads and social campaigns",
    },
    {
      title: "Email Marketing",
      description: "Newsletter content and automations that sell",
    },
    {
      title: "Social Media Content",
      description: "Engaging posts and captions for major platforms",
    },
    {
      title: "Video Script Writing",
      description:
        "Scripts for promotional videos, explainers, and social content",
    },
    {
      title: "Press Release Writing",
      description:
        "Professional press releases for media coverage and backlinks",
    },
    {
      title: "Technical SEO Audit",
      description: "Comprehensive technical analysis and prioritized fixes",
    },
    {
      title: "Link Building",
      description: "Ethical, quality-first backlink acquisition",
    },
    {
      title: "Content Refresh",
      description: "Update and enrich existing content for gains",
    },
    {
      title: "Multilingual SEO",
      description: "SEO and content for multiple languages and regions",
    },
    {
      title: "E-commerce SEO",
      description: "Specialized optimization for online stores",
    },
  ];

  return (
    <main className="flex flex-col">
      <section className="content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 min-h-[250px] bg-white">
        <article className="col-span-12 flex flex-col">
          <h1 className="text-4xl md:text-5xl lg:text-h1 font-medium">
            Get Found. Get Customers.
          </h1>
          <h2 className="max-w-4xl text-2xl md:text-3xl lg:text-h2 font-light">
            SEO & Content in Brisbane that drives high‑intent traffic and
            converts visitors into customers
          </h2>
        </article>
      </section>

      <section className="p-10 flex flex-col items-center gap-3 bg-ravenci-primary text-white text-center">
        <div className="max-w-lg">
          <h3 className="pb-6 border-b border-white/20 font-serif font-medium text-xl">
            Trusted by 60+ Australian businesses to win the right searches and
            convert
          </h3>
          <blockquote className="my-6 font-poppins font-light leading-8 text-ravenci-light-gray">
            {
              "“RAVENCI's SEO and content work has been transformational. We went from page 3 to ranking #1 for our main keywords. Our organic traffic has increased 300% and leads have tripled.”"
            }
          </blockquote>
          <p className="font-poppins text-2xl font-light text-neutral-100">
            <span className="font-bold">Lisa</span> Parker, Marketing Manager
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white">
        <section className="content-section py-20 px-5 sm:px-20 xl:px-36 space-y-14 bg-neutral-200/50">
          <article className="max-w-lg">
            <h3 className="mb-8 font-serif text-h3 font-bold">
              What&apos;s Included with Every Project
            </h3>
            <ul className="flex flex-col gap-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <IconCircleCheckFilled
                    className="text-ravenci-primary flex-shrink-0"
                    size={24}
                  />
                  <p className="text-neutral-500/80">
                    <span className="font-bold text-ravenci-dark">
                      {feature.title}:
                    </span>{" "}
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </article>

          <article className="max-w-lg">
            <h3 className="mb-8 font-serif text-h3 font-bold">
              Additional Services Available
            </h3>
            <ul className="flex flex-col gap-8">
              {addons.map((addon, index) => (
                <li key={index} className="flex items-start gap-2">
                  <IconCircleCheckFilled
                    className="text-ravenci-primary flex-shrink-0"
                    size={24}
                  />
                  <p className="text-neutral-500/80">
                    <span className="font-bold text-ravenci-dark">
                      {addon.title}:
                    </span>{" "}
                    {addon.description}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark">
          <article className="max-w-lg">
            <h3 className="font-serif text-h3 font-bold text-white">
              Tired of Being Invisible Online?
            </h3>
            <p className="my-4 text-neutral-400/90">
              Stop losing customers to competitors because of:
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-neutral-400/90">
              <li>- Website traffic that never converts to sales</li>
              <li>- Being buried on page 2+ of Google search results</li>
              <li>- Thin, off-brand content</li>
              <li>- SEO agencies that promise results but deliver reports</li>
              <li>- Marketing copy that fails to persuade</li>
            </ul>

            <h3 className="mt-8 mb-4 font-serif text-h3 font-bold text-white">
              Why Choose RAVENCI
            </h3>
            <ul className="flex flex-col gap-4 mb-6 text-neutral-400/90">
              <li className="flex gap-2">
                <IconCheck
                  size={24}
                  className="p-1 bg-ravenci-primary rounded-full text-white"
                />
                Results-focused approach vs vanity metrics
              </li>
              <li className="flex gap-2">
                <IconCheck
                  size={24}
                  className="p-1 bg-ravenci-primary rounded-full text-white"
                />
                Brisbane market expertise with transparent AUD pricing
              </li>
              <li className="flex gap-2">
                <IconCheck
                  size={24}
                  className="p-1 bg-ravenci-primary rounded-full text-white"
                />
                Conversion-focused content, not keyword stuffing
              </li>
              <li className="flex gap-2">
                <IconCheck
                  size={24}
                  className="p-1 bg-ravenci-primary rounded-full text-white"
                />
                Clear scopes, capped deliverables, reliable timelines
              </li>
            </ul>

            {/* 1. SEO Foundation (One-off) */}
            <h3 className="mt-8 mb-4 font-serif text-h3 font-bold text-white">
              1. SEO Foundation
            </h3>
            <p className="mb-4 text-neutral-400/90">
              For businesses starting SEO or needing fundamentals fixed. Get the
              technical groundwork and initial content optimization to start
              ranking.
            </p>
            <div className="mb-16 text-white">
              <Accordion
                titleClassName="py-3 px-3 mb-2 text-lg bg-white text-neutral-900"
                items={[
                  {
                    title: "What's Included",
                    content: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
  <li>Comprehensive audit and prioritized roadmap</li>
  <li>Keyword research (up to 50 target terms)</li>
  <li>On-page optimization for up to 10 pages</li>
  <li>Technical fixes batch (crawlability, indexation, sitemaps)</li>
  <li>Google Business Profile optimization</li>
  <li>GA4 and Google Search Console setup</li>
  <li>Internal linking map</li>
  <li>Schema markup for key templates</li>
  <li>Strategy document and handover</li>
  <li>4–6 weeks delivery</li>
</ul>
`,
                  },
                ]}
              />
              <PriceButton
                price={2490}
                link={`/quote?service=seo-foundation`}
                frequency={""}
                includeFrom={true}
                callToAction={`SEO Foundation`}
                subCallToAction={`One-off project, ex GST`}
              />
              <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
                <p className="text-sm text-yellow-200">
                  ⚡ Limited: up to 10 Foundation projects per quarter
                </p>
              </div>
            </div>

            {/* 2. Growth SEO + Content (Setup + Monthly) */}
            <h3 className="mt-8 mb-4 font-serif text-h3 font-bold text-white">
              2. Growth SEO + Content
            </h3>
            <p className="mb-4 text-neutral-400/90">
              Win high‑intent searches and compound gains with consistent
              content and ongoing optimization. Clear caps keep delivery
              predictable for a solo operator.
            </p>
            <div className="mb-16 text-white">
              <Accordion
                titleClassName="py-3 px-3 mb-2 text-lg bg-white text-neutral-900"
                items={[
                  {
                    title: "What's Included",
                    content: `
<p class="mt-3 text-neutral-100">Setup (one-off)</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
  <li>Technical remediation sprint (from Foundation roadmap)</li>
  <li>Editorial calendar (quarterly)</li>
  <li>Measurement plan and dashboards</li>
</ul>
<p class="mt-5 text-neutral-100">Monthly</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
  <li>4 articles/posts per month (1,000–1,500 words)</li>
  <li>2 on‑page refreshes per month</li>
  <li>Ethical link building (budget as add‑on)</li>
  <li>Monthly reporting and strategy call</li>
</ul>
`,
                  },
                ]}
              />
              <PriceButton
                price={1980}
                link={`/quote?service=seo-growth-setup`}
                frequency={""}
                includeFrom={true}
                callToAction={`Setup Fee`}
                subCallToAction={`One-off, ex GST`}
              />
              <PriceButton
                price={4980}
                link={`/quote?service=seo-growth-monthly`}
                frequency={"per month"}
                includeFrom={true}
                callToAction={`Monthly Retainer`}
                subCallToAction={`Content volume capped, ex GST`}
              />
              <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
                <p className="text-sm text-yellow-200">
                  ⚡ Limited: up to 5 Growth retainers per quarter
                </p>
              </div>
            </div>

            {/* 3. Copywriting Only (Project-based) */}
            <h3 className="mt-8 mb-4 font-serif text-h3 font-bold text-white">
              3. Copywriting Only
            </h3>
            <p className="mb-4 text-neutral-400/90">
              High‑converting copy without a full SEO engagement. Scoped for
              fast, focused delivery.
            </p>
            <div className="mb-16 text-white">
              <Accordion
                titleClassName="py-3 px-3 mb-2 text-lg bg-white text-neutral-900"
                items={[
                  {
                    title: "What's Included",
                    content: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
  <li>Audience and messaging discovery</li>
  <li>Brand voice and tone guidance</li>
  <li>Website copy for up to 8 core pages (e.g., Home, About, Services x3, Contact, 2x additional)</li>
  <li>Conversion‑focused CTAs</li>
  <li>Optional add‑ons: sales/landing pages, email sequences</li>
  <li>2 rounds of revisions</li>
  <li>4–6 weeks delivery</li>
</ul>
`,
                  },
                ]}
              />
              <PriceButton
                price={3480}
                link={`/quote?service=copywriting-only`}
                frequency={""}
                includeFrom={true}
                callToAction={`Copywriting Only`}
                subCallToAction={`One-off project, ex GST`}
              />
              <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
                <p className="text-sm text-yellow-200">
                  ⚡ Limited: up to 8 copy projects per quarter
                </p>
              </div>
            </div>
          </article>
        </section>
      </div>

      <section className="content-section py-16 px-6 md:px-10 flex flex-col items-center justify-center gap-3 bg-white">
        <h2 className="font-serif text-h3">SEO & Content Questions Answered</h2>
        <Accordion
          titleClassName="py-6 text-lg"
          items={[
            {
              title: `How long does it take to see SEO results?`,
              content: `Most businesses start seeing improvements in 3–6 months, with significant gains typically within 6–12 months.`,
            },
            {
              title: `Do you guarantee specific rankings or traffic increases?`,
              content: `No ethical SEO provider can guarantee rankings. We guarantee disciplined execution and measurable improvements in visibility, traffic quality, and conversions.`,
            },
            {
              title: `Can you work with our existing marketing team?`,
              content: `Yes. We collaborate seamlessly with in‑house teams, provide training/guidelines, and can act as an extension of your team.`,
            },
            {
              title: `What industries do you specialize in?`,
              content: `We work across industries, with strong experience in professional services, healthcare, retail, and B2B.`,
            },
            {
              title: `How do you measure success and ROI?`,
              content: `We track organic traffic growth, rankings, conversions, and revenue attribution from organic channels.`,
            },
          ].map((i) => ({
            ...i,
            content: `<p class="pt-3 text-neutral-500/90">${i.content}</p>`,
          }))}
        />
      </section>

      {/* JSON-LD FAQ Schema for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does it take to see SEO results?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most businesses start seeing improvements in 3–6 months, with significant gains typically within 6–12 months.",
                },
              },
              {
                "@type": "Question",
                name: "Do you guarantee specific rankings or traffic increases?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No ethical SEO provider can guarantee rankings. We guarantee disciplined execution and measurable improvements in visibility, traffic quality, and conversions.",
                },
              },
              {
                "@type": "Question",
                name: "Can you work with our existing marketing team?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We collaborate seamlessly with in-house teams, provide training/guidelines, and can act as an extension of your team.",
                },
              },
              {
                "@type": "Question",
                name: "What industries do you specialize in?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We work across industries, with strong experience in professional services, healthcare, retail, and B2B.",
                },
              },
              {
                "@type": "Question",
                name: "How do you measure success and ROI?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We track organic traffic growth, rankings, conversions, and revenue attribution from organic channels.",
                },
              },
            ],
          }),
        }}
      />

      {/* Mobile sticky CTA */}
      <StickyCTA link="/quote?service=seo" startingPrice={2490} priceNote="" />
    </main>
  );
}
