import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import PriceButton from "@/components/price-button";
import Accordion from "@/components/accordion";
import StickyCTA from "@/components/sticky-cta";
import { getTestimonialsForPage } from "@/data/testimonials";

export const metadata = {
  title: "Business Design Solutions - RAVENCI Solutions",
  description:
    "Professional branding and graphic design services. From logos to vehicle wraps, create a cohesive brand identity that stands out.",
};

export default function BusinessDesignPage() {
  const testimonials = getTestimonialsForPage("business-design");
  const features = [
    {
      title: "Brand Consistency",
      description:
        "All designs follow your brand guidelines for a cohesive professional look",
    },
    {
      title: "Print-Ready Files",
      description:
        "High-resolution files ready for professional printing in multiple formats",
    },
    {
      title: "Vector Graphics",
      description:
        "Scalable designs that look crisp at any size, from business cards to billboards",
    },
    {
      title: "Brand Guidelines",
      description:
        "Comprehensive style guide to maintain consistency across all materials",
    },
    {
      title: "Multiple Concepts",
      description:
        "Several design options to choose from, ensuring you get exactly what you want",
    },
    {
      title: "Unlimited Revisions",
      description:
        "We'll refine your designs until they perfectly represent your business",
    },
    {
      title: "Fast Turnaround",
      description:
        "Quick delivery times without compromising on quality or attention to detail",
    },
    {
      title: "Professional Quality",
      description:
        "Designs that compete with the biggest brands in your industry",
    },
    {
      title: "File Ownership",
      description:
        "You own all design files and can use them however you need for your business",
    },
  ];

  const addons = [
    {
      title: "Rush Delivery",
      description: "Get your designs completed in half the standard time",
    },
    {
      title: "Additional Concepts",
      description: "More design options to choose from for complex projects",
    },
    {
      title: "3D Mockups",
      description: "See how your designs will look in real-world applications",
    },
    {
      title: "Animation Services",
      description: "Bring your logos and graphics to life with motion design",
    },
    {
      title: "Trade Show Materials",
      description: "Banners, pull-up stands, and booth graphics for events",
    },
    {
      title: "Packaging Design",
      description: "Product packaging that sells and protects your brand",
    },
    {
      title: "Digital Assets",
      description: "Social media templates, email signatures, and web graphics",
    },
    {
      title: "Brand Photography Direction",
      description:
        "Style guides for consistent photography across all channels",
    },
    {
      title: "Copywriting Integration",
      description: "Compelling text that works seamlessly with your designs",
    },
    {
      title: "Brand Training",
      description: "Teach your team how to maintain brand consistency",
    },
  ];

  return (
    <main className={`flex flex-col`}>
      <section
        className={`content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 min-h-[250px] bg-white`}
      >
        <article className={`col-span-12 flex flex-col`}>
          <h1 className={`text-4xl md:text-5xl lg:text-h1 font-medium`}>
            Design That Sells Your Story!
          </h1>
          <h2
            className={`max-w-4xl text-2xl md:text-3xl lg:text-h2 font-light`}
          >
            Professional branding and graphic design that builds trust and
            drives sales
          </h2>
        </article>
      </section>

      <section
        className={`p-10 flex flex-col items-center gap-3 bg-ravenci-primary text-white text-center`}
      >
        <div className={`max-w-lg`}>
          <h3
            className={`pb-6 border-b border-white/20 font-serif font-medium text-xl`}
          >
            Trusted by 40+ Australian businesses to create brands that command
            premium prices
          </h3>
          {testimonials[0] && (
            <>
              <p
                className={`my-6 font-poppins font-light leading-8 text-ravenci-light-gray`}
              >
                &ldquo;{testimonials[0].content}&rdquo;
              </p>
              <h3 className={`font-poppins text-2xl font-light text-neutral-100`}>
                <span className={`font-bold`}>
                  {testimonials[0].author.split(" ")[0]}
                </span>{" "}
                {testimonials[0].author.split(" ").slice(1).join(" ")}
              </h3>
            </>
          )}
        </div>
      </section>

      <div className={`grid grid-cols-1 lg:grid-cols-2 bg-white`}>
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 space-y-14 bg-neutral-200/50`}
        >
          <article className={`max-w-lg`}>
            <h3 className={`mb-8 font-serif text-h3 font-bold`}>
              What's Included with Every Design
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

          <article className={`max-w-lg`}>
            <h3 className={`mb-8 font-serif text-h3 font-bold`}>
              Additional Services Available
            </h3>
            <ul className={`flex flex-col gap-8`}>
              {addons.map((addon, index) => (
                <li key={index} className="flex items-start gap-2">
                  <IconCircleCheckFilled
                    className="text-ravenci-primary flex-shrink-0"
                    size={24}
                  />
                  <p className={`text-neutral-500/80`}>
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

        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark`}
        >
          <article className={`max-w-lg`}>
            <h3 className={`font-serif text-h3 font-bold text-white`}>
              Tired of Looking Like Amateur Hour?
            </h3>
            <div className={`my-4 text-neutral-400/90`}>
              Stop losing customers because of:
              <ul className={`mt-4 flex flex-col gap-2`}>
                <li>- Generic logos that look like everyone else's</li>
                <li>- Inconsistent branding across different materials</li>
                <li>- DIY designs that scream "budget business"</li>
                <li>- Marketing materials that fail to convert</li>
                <li>
                  - Brand identity that doesn't reflect your premium service
                </li>
              </ul>
            </div>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              Why Choose RAVENCI Over Other Designers?
            </h3>
            <ul className={`flex flex-col gap-4 mb-6 text-neutral-400/90`}>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Strategic design vs pretty pictures that don't sell
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Complete brand systems vs one-off logo design
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Brisbane-based vs overseas design factories
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Business-focused approach vs artistic experimentation
              </li>
            </ul>
            <p className={`mb-4 text-neutral-400/90`}>
              Great design isn't just about looking good - it's about building
              trust, commanding premium prices, and making your business look
              established and professional.
            </p>
            <p className={`mb-4 text-neutral-400/90`}>
              We offer four comprehensive design packages, each tailored to
              different business needs and budgets.
            </p>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              1. Brand Essentials
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              Perfect for startups and small businesses who need the
              fundamentals to look professional. Get the core brand elements
              that every business needs to compete in today's market.
            </p>
            <div className={`mb-16 text-white`}>
              <Accordion
                titleClassName={`py-3 px-3 mb-2 text-lg bg-white text-neutral-900`}
                items={[
                  {
                    title: `What's Included`,
                    content: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Custom logo design (3 initial concepts)</li>
    <li>Brand color palette</li>
    <li>Typography selection</li>
    <li>Business card design (double-sided)</li>
    <li>Letterhead design</li>
    <li>Email signature template</li>
    <li>Brand guidelines (PDF)</li>
    <li>Social media profile images</li>
    <li>6 weeks delivery</li>
    <li>3 revisions included</li>
    <li>All files in industry standard formats</li>
</ul>
`,
                  },
                ]}
              />
              <PriceButton
                price={"2,490"}
                link={`/launch-your-vision`}
                frequency={""}
                includeFrom={true}
                callToAction={`Brand Essentials`}
                subCallToAction={`Request a proposal`}
              />

              <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
                <p className="text-sm text-yellow-200">
                  ⚡ Limited: We only take on 8 Brand Essentials projects per
                  quarter for personalised attention
                </p>
              </div>
            </div>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              2. Marketing Materials
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              For established businesses ready to scale their marketing efforts.
              Get all the professional materials you need to compete with
              industry leaders and attract premium clients.
            </p>

            <div className={`mb-16 text-white`}>
              <Accordion
                titleClassName={`py-3 px-3 mb-2 text-lg bg-white text-neutral-900`}
                items={[
                  {
                    title: `What's Included`,
                    content: `
<p class="mt-3 text-neutral-100">Brand Foundation</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Logo design or refinement (if needed)</li>
    <li>Extended brand guidelines (PDF)</li>
    <li>Brand color palette</li>
    <li>Typography system</li>
</ul>
<p class="mt-5 text-neutral-100">Print Materials</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Business card design (2 concepts)</li>
    <li>Business card printing (1000 QTY)</li>
    <li>Letterhead design</li>
    <li>A4 flyer or brochure design</li>
    <li>Invoice/quote template design</li>
</ul>
<p class="mt-5 text-neutral-100">Digital Assets</p>
<ul class="mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Email signature templates (3 variations)</li>
    <li>Social media profile images</li>
    <li>8 weeks delivery</li>
    <li>2 rounds of revisions per item</li>
    <li>All files in industry standard formats</li>
</ul>
`,
                  },
                ]}
              />

              <PriceButton
                price={"4,590"}
                link={`/launch-your-vision`}
                frequency={""}
                includeFrom={true}
                callToAction={`Marketing Materials Suite`}
                subCallToAction={`Request a proposal`}
              />

              <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
                <p className="text-sm text-yellow-200">
                  ⚡ Limited: We only take on 5 Marketing Suite projects per
                  quarter
                </p>
              </div>
            </div>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              3. Signage
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              Shopfront signs, reception wall graphics, window graphics, and
              outdoor banners. Wayfinding signage and directional signage.
              A-frame or sidewalk signs. We can also help you with installation
              and maintenance.
            </p>

            <div className={`mb-16 text-white`}>
              <PriceButton
                price={175}
                link={`/launch-your-vision`}
                frequency={""}
                includeFrom={true}
                callToAction={`Premium Signage`}
                subCallToAction={`Get in touch for a tailored quote`}
              />
            </div>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              4. Vehicle Wraps
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              One of the best marketing tools for your business is vehicle
              wraps. Whether you need a partial or full vehicle wrap for a
              sedan, ute, van or buse, get in touch. We can help with
              installation and maintenance also.
            </p>

            <div className={`mb-16 text-white`}>
              <PriceButton
                price={350}
                link={`launch-your-vision`}
                frequency={""}
                includeFrom={true}
                callToAction={`Signage & Vehicle Wraps`}
                subCallToAction={`Mobile marketing that works 24/7`}
              />
            </div>
          </article>
        </section>
      </div>

      <section
        className={`content-section py-16 px-6 md:px-10 flex flex-col items-center justify-center gap-3 bg-white`}
      >
        <h2 className={`font-serif text-h3`}>Design Questions Answered</h2>
        <Accordion
          titleClassName={`py-6 text-lg`}
          items={[
            {
              title: `How long does design work typically take?`,
              content: `Brand Essentials: 2 weeks. Marketing Materials: 3-4 weeks. Signage & Vehicle Wraps: 4-6 weeks. We provide regular updates and involve you in every decision.`,
            },
            {
              title: `What if I don't like the initial concepts?`,
              content: `We include multiple revisions with every package. Our aim is that our designs perfectly capture your vision and business goals.`,
            },
            {
              title: `Do you handle printing and installation?`,
              content: `Though we do not personally handle printing, we do, however, work closely with trusted local suppliers and installers that we have collaborated with for near a decade.`,
            },
            {
              title: `Can you work with our existing brand guidelines?`,
              content: `Absolutely. We can work within existing brand guidelines or help evolve and strengthen your current brand identity. We'll assess what's working and what needs improvement.`,
            },
            {
              title: `What file formats do we receive?`,
              content: `Our designs and print-ready files are provide in industry standard formats. Where applicable, you will receive source web-ready files in PNG and JPG, and print-ready files in PDF and SVG versions. Everything is organised and labeled for easy use.`,
            },
          ]}
        />
      </section>

      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 grid grid-cols-5 gap-10 min-h-[150px] bg-white`}
      ></section>

      {/* Mobile sticky CTA */}
      <StickyCTA
        link="/launch-your-vision"
        startingPrice={2490}
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
                name: "How long does design work typically take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Brand Essentials: 2 weeks. Marketing Materials: 3-4 weeks. Signage & Vehicle Wraps: 4-6 weeks. We provide regular updates and involve you in every decision.",
                },
              },
              {
                "@type": "Question",
                name: "What if I don't like the initial concepts?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We include multiple revisions with every package. Our aim is that our designs perfectly capture your vision and business goals.",
                },
              },
              {
                "@type": "Question",
                name: "Do you handle printing and installation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Though we do not personally handle printing, we do work closely with trusted local suppliers and installers that we have collaborated with for near a decade.",
                },
              },
              {
                "@type": "Question",
                name: "Can you work with our existing brand guidelines?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. We can work within existing brand guidelines or help evolve and strengthen your current brand identity. We'll assess what's working and what needs improvement.",
                },
              },
              {
                "@type": "Question",
                name: "What file formats do we receive?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our designs and print-ready files are provided in industry standard formats. Where applicable, you will receive source web-ready files in PNG and JPG, and print-ready files in PDF and SVG versions.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
