﻿import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import PriceButton from "@/components/price-button";
import Accordion from "@/components/accordion";
import StickyCTA from "@/components/sticky-cta";

export const metadata = {
  title: "Business Design Solutions - RAVENCI Solutions",
  description:
    "Professional branding and graphic design services. From logos to vehicle wraps, create a cohesive brand identity that stands out.",
};

export default function BusinessDesignPage() {
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
          <p
            className={`my-6 font-poppins font-light leading-8 text-ravenci-light-gray`}
          >
            "Richard went ABOVE and beyond for my request. Quality was amazing
            and his efforts to satisfy my extra needs (he fitted it to a damn
            guitar!) Pure talent. Thankyou sir"
          </p>
          <h3 className={`font-poppins text-2xl font-light text-neutral-100`}>
            <span className={`font-bold`}>Timothy</span> O'Donnell
          </h3>
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
                price={1980}
                link={`/quote?service=design-essentials`}
                frequency={""}
                includeFrom={true}
                callToAction={`Brand Essentials`}
                subCallToAction={`Professional foundation for your business`}
              />

              <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
                <p className="text-sm text-yellow-200">
                  ⚡ Limited: We only take on 15 Brand Essentials projects per
                  quarter for personalised attention
                </p>
              </div>
            </div>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              2. Marketing Materials Suite
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
    <li>Folder or portfolio design</li>
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
                price={3960}
                link={`/quote?service=design-marketing`}
                frequency={""}
                includeFrom={true}
                callToAction={`Marketing Materials Suite`}
                subCallToAction={`Complete marketing toolkit`}
              />

              <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
                <p className="text-sm text-yellow-200">
                  ⚡ Limited: We only take on 8 Marketing Suite projects per
                  quarter
                </p>
              </div>
            </div>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              3. Signage
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              Turn your vehicles and premises into powerful marketing tools.
              Professional signage and vehicle graphics that build brand
              recognition and attract customers wherever you go.
            </p>

            <div className={`mb-16 text-white`}>
              <Accordion
                titleClassName={`py-3 px-3 mb-2 text-lg bg-white text-neutral-900`}
                items={[
                  {
                    title: `What's Included`,
                    content: `
<p class="mt-3 text-neutral-100">Vehicle Graphics</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Full vehicle wrap design (any vehicle type)</li>
    <li>Partial wrap or decal options</li>
    <li>Vehicle mockups for approval</li>
    <li>Installation-ready vector files</li>
    <li>Print specifications and guidelines</li>
    <li>Installer liaison and support</li>
    <li>(Printing and installation fees not included)</li>
</ul>
<p class="mt-5 text-neutral-100">Business Signage</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Shopfront signage design</li>
    <li>Reception or office wall graphics</li>
    <li>Window graphics and decals</li>
    <li>Outdoor banner designs</li>
    <li>Wayfinding and directional signage</li>
    <li>A-frame or sidewalk sign designs</li>
</ul>
<p class="mt-5 text-neutral-100">Project Management</p>
<ul class="mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Site survey coordination (if required)</li>
    <li>Installer recommendations</li>
    <li>Print vendor liaison</li>
    <li>Installation oversight</li>
    <li>4-6 weeks delivery</li>
    <li>2 rounds of major revisions</li>
    <li>Council approval assistance (if required)</li>
    <li>Maintenance and replacement planning</li>
</ul>
`,
                  },
                ]}
              />

              <PriceButton
                price={5940}
                link={`/quote?service=design-signage`}
                frequency={""}
                includeFrom={true}
                callToAction={`Signage & Vehicle Wraps`}
                subCallToAction={`Mobile marketing that works 24/7`}
              />

              <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
                <p className="text-sm text-yellow-200">
                  ⚡ Limited: We only take on 4 Signage projects per quarter for
                  detailed attention
                </p>
              </div>
            </div>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              3. Vehicle Wraps
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              Turn your vehicles and premises into powerful marketing tools.
              Professional signage and vehicle graphics that build brand
              recognition and attract customers wherever you go.
            </p>

            <div className={`mb-16 text-white`}>
              <Accordion
                titleClassName={`py-3 px-3 mb-2 text-lg bg-white text-neutral-900`}
                items={[
                  {
                    title: `What's Included`,
                    content: `
<p class="mt-3 text-neutral-100">Vehicle Graphics</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Full vehicle wrap design (any vehicle type)</li>
    <li>Partial wrap or decal options</li>
    <li>Vehicle mockups for approval</li>
    <li>Installation-ready vector files</li>
    <li>Print specifications and guidelines</li>
    <li>Installer liaison and support</li>
    <li>(Printing and installation fees not included)</li>
</ul>
<p class="mt-5 text-neutral-100">Business Signage</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Shopfront signage design</li>
    <li>Reception or office wall graphics</li>
    <li>Window graphics and decals</li>
    <li>Outdoor banner designs</li>
    <li>Wayfinding and directional signage</li>
    <li>A-frame or sidewalk sign designs</li>
</ul>
<p class="mt-5 text-neutral-100">Project Management</p>
<ul class="mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Site survey coordination (if required)</li>
    <li>Installer recommendations</li>
    <li>Print vendor liaison</li>
    <li>Installation oversight</li>
    <li>4-6 weeks delivery</li>
    <li>2 rounds of major revisions</li>
    <li>Council approval assistance (if required)</li>
    <li>Maintenance and replacement planning</li>
</ul>
`,
                  },
                ]}
              />

              <PriceButton
                price={5940}
                link={`/quote?service=design-signage`}
                frequency={""}
                includeFrom={true}
                callToAction={`Signage & Vehicle Wraps`}
                subCallToAction={`Mobile marketing that works 24/7`}
              />

              <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
                <p className="text-sm text-yellow-200">
                  ⚡ Limited: We only take on 4 Signage projects per quarter for
                  detailed attention
                </p>
              </div>
            </div>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              4. Complete Brand Transformation
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              The ultimate branding package for businesses serious about market
              leadership. Complete brand strategy, identity design, and
              implementation across all touchpoints. Transform how customers
              perceive and interact with your business.
            </p>

            <div className={`mb-16 text-white`}>
              <Accordion
                titleClassName={`py-3 px-3 mb-2 text-lg bg-white text-neutral-900`}
                items={[
                  {
                    title: `What's Included`,
                    content: `
<p class="mt-3 text-neutral-100">Brand Strategy</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Comprehensive brand audit and research</li>
    <li>Competitor analysis and positioning</li>
    <li>Target audience profiling</li>
    <li>Brand messaging and value proposition</li>
    <li>Brand personality and voice definition</li>
    <li>Strategic brand roadmap</li>
</ul>
<p class="mt-5 text-neutral-100">Visual Identity</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Complete logo system (primary, secondary, icons)</li>
    <li>Comprehensive brand guidelines (20+ pages)</li>
    <li>Extended color palette system</li>
    <li>Typography hierarchy and system</li>
    <li>Photography style guidelines</li>
    <li>Graphic elements and patterns</li>
    <li>Brand applications showcase</li>
</ul>
<p class="mt-5 text-neutral-100">Complete Implementation</p>
<ul class="mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>All items from Marketing Materials Suite</li>
    <li>Vehicle graphics or signage design</li>
    <li>Packaging design (if applicable)</li>
    <li>Trade show materials</li>
    <li>Uniform or apparel design</li>
    <li>Website design concepts (integration ready)</li>
    <li>Social media brand kit</li>
    <li>Brand implementation training</li>
    <li>6-month brand consultation included</li>
    <li>8-12 weeks total delivery</li>
    <li>Unlimited revisions during process</li>
    <li>Full brand ownership and rights</li>
</ul>
`,
                  },
                ]}
              />

              <PriceButton
                price={12900}
                link={`/quote?service=design-transformation`}
                frequency={""}
                includeFrom={true}
                callToAction={`Complete Brand Transformation`}
                subCallToAction={`Become the premium choice in your industry`}
              />

              <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
                <p className="text-sm text-yellow-200">
                  ⚡ Exclusive: We only take on 2 Complete Brand Transformations
                  per quarter
                </p>
              </div>
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
              content: `Brand Essentials: 2 weeks. Marketing Materials: 3-4 weeks. Signage & Vehicle Wraps: 4-6 weeks. Complete Brand Transformation: 8-12 weeks. We provide regular updates and involve you in every decision.`,
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
        link="/quote?service=business-design"
        startingPrice={1980}
        priceNote=""
      />
    </main>
  );
}
