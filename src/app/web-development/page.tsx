import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import PriceButton from "@/components/price-button";
import Accordion from "@/components/accordion";

export const metadata = {
  title: "Website Development - RAVENCI Solutions",
  description:
    "Custom web development with modern, responsive websites. Built for performance and designed to convert visitors into customers.",
};

export default function WebHostingDevelopmentPage() {
  const features = [
    {
      title: "Responsive Design",
      description:
        "Optimised for viewing on desktop, tablet, and mobile devices",
    },
    {
      title: "Easy Management",
      description:
        "Easy-to-use solution so you can update your content without technical knowledge",
    },
    {
      title: "Branding Suitability",
      description:
        "Tailored to look and function as per your brand's and business's needs",
    },
    {
      title: "Performance Optimization",
      description:
        "Fast-loading pages that are optimized for speed and user experience",
    },
    {
      title: "SEO Optimization",
      description:
        "Built-in SEO best practices to help your site rank in search results",
    },
    {
      title: "Google Analytics",
      description:
        "Track your visitors and website performance with integrated analytics",
    },
    {
      title: "Cross-Browser Compatibility",
      description:
        "Your site is tested to work flawlessly across all major browsers",
    },
    {
      title: "Strategic Navigation",
      description:
        "Optimised menu options to help your customers find what they need",
    },
    {
      title: "Contact Forms (if opted for)",
      description:
        "Modern contact forms with spam protection and email notifications",
    },
  ];

  const addons = [
    {
      title: "Extra Pages",
      description:
        "If our service offering doesn't fit the vision for your website, customise it by adding extra pages",
    },
    {
      title: "Portfolio / Gallery",
      description: "Showcase your previous work to support your brand",
    },
    {
      title: "Contact Form + Integration",
      description: "Generate leads from your website with a contact form",
    },
    {
      title: "Cookie Consent Banner",
      description:
        "Stay compliant with privacy laws and build trust with your visitors",
    },
    {
      title: "Professional Copywriting",
      description:
        "Get compelling content that converts visitors into customers",
    },
    {
      title: "SEO Content Optimisation",
      description: "Boost your search rankings with content that Google loves",
    },
    {
      title: "Advanced Blog Setup",
      description:
        "Share your expertise and attract customers with a professional blog",
    },
    {
      title: "Newsletter Signup Forms",
      description:
        "Build your email list and stay connected with your audience",
    },
    {
      title: "Add Facebook Pixel",
      description: "Feed traffic analytics from your website to Facebook",
    },
    {
      title: "Google Business Profile",
      description:
        "Build and optimise your Google Business Profile and link it to your website",
    },
  ];

  return (
    <main className={`flex flex-col`}>
      <section
        className={`content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 min-h-[250px] bg-white`}
      >
        <article className={`col-span-12 flex flex-col`}>
          <h1 className={`text-4xl md:text-5xl lg:text-h1 font-medium`}>
            Build it Right From the Get-Go!
          </h1>
          <h2
            className={`max-w-4xl text-2xl md:text-3xl lg:text-h2 font-light`}
          >
            Professional websites that convert visitors into customers
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
            Trusted by 50+ businesses across Australia to build websites that
            actually work
          </h3>
          <p
            className={`my-6 font-poppins font-light leading-8 text-ravenci-light-gray`}
          >
            "Richard is the absolute best at what he does. Our brand new startup
            is launching with the best possible website I could have imagined.
            He took the time from the very beginning to understand us and our
            business, and he has made our branding and website reflect that and
            represent us perfectly."
          </p>
          <h3 className={`font-poppins text-2xl font-light text-neutral-100`}>
            <span className={`font-bold`}>Adam</span> Bisset
          </h3>
        </div>
      </section>

      <div className={`grid grid-cols-1 lg:grid-cols-2 bg-white`}>
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 space-y-14 bg-neutral-200/50`}
        >
          <article className={`max-w-lg`}>
            <h3 className={`mb-8 font-serif text-h3 font-bold`}>
              What's Included with Every Build
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
              Plenty of Add-ons to Suit Your Needs
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
              Tired of Web Development Nightmares?
            </h3>
            <p className={`my-4 text-neutral-400/90`}>
              Stop dealing with:
              <ul className={`mt-4 flex flex-col gap-2`}>
                <li>- Developers who disappear after launch</li>
                <li>- Websites that look nothing like what you wanted</li>
                <li>- Sites that don't work on mobile devices</li>
                <li>- Hidden costs and endless revision charges</li>
                <li>- Technical jargon instead of clear communication</li>
              </ul>
            </p>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              Why Choose RAVENCI Over Other Developers?
            </h3>
            <ul className={`flex flex-col gap-4 mb-6 text-neutral-400/90`}>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Fixed pricing vs endless scope creep
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Brisbane-based vs offshore development
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Ongoing support vs build-and-abandon
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                85+ PageSpeed guaranteed vs "we'll make it pretty"
              </li>
            </ul>
            <p className={`mb-4 text-neutral-400/90`}>
              The web development process should never be overwhelming for you.
              It should respect your vision and bring it to life in a way that
              simply gets out of the way.
            </p>
            <p className={`mb-4 text-neutral-400/90`}>
              That's how we approach it at RAVENCI. To make it even simpler for
              you, we offer three tiers of development services, each designed
              to meet your specific needs.
            </p>
            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              1. The Single Page Starter
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              This is the most basic option for any business looking to get
              their foot in the door. It's a simple and quick way to get your
              website up and running, with a focus on performance and
              accessibility. Get your business known by search engines like
              Google and Bing with this affordable option.
            </p>
            <div className={`mb-16 text-white`}>
              <Accordion
                titleClassName={`py-3 px-3 mb-2 text-lg bg-white text-neutral-900`}
                items={[
                  {
                    title: `What's Included`,
                    content: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Custom single-page design</li>
    <li>Responsive mobile-optimized layout</li>
    <li>CMS setup (WordPress/other)</li>
    <li>Hero section with call-to-action</li>
    <li>About Us section</li>
    <li>Services/Products overview section</li>
    <li>Team/Testimonials section</li>
    <li>Business Contact details section</li>
    <li>Footer with social media links</li>
    <li>Basic Google Analytics setup</li>
    <li>Basic on-page SEO</li>
    <li>85+ Google PageSpeed score guaranteed</li>
    <li>1 round of revisions</li>
    <li>3 weeks delivery</li>
    <li>Discounted Hosting with RAVENCI</li>
    <li>Discounted Maintenance with RAVENCI</li>
    <li>1 Year Domain Subscription FREE</li>
    <li>1 Year SSL certificate with RAVENCI Hosting FREE</li>
</ul>
`,
                  },
                ]}
              />
              <PriceButton
                price={2480}
                link={`/quote?service=web-dev-single`}
                frequency={""}
                includeFrom={true}
                callToAction={`Single Page Starter`}
                subCallToAction={`Get your foot in the door`}
              />

              <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
                <p className="text-sm text-yellow-200">
                  ⚡ Limited: We only take on 12 new Single Page Starter
                  projects per quarter to ensure quality and timely delivery
                  while still allowing you time for checking and feedback
                </p>
              </div>
            </div>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              2. Custom Development
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              Already have your design sorted? Have your website built just
              right. Whether you've worked with a designer, have existing brand
              guidelines, or know exactly what you want - we will turn your
              vision into a high-performing, professional website. We guarantee
              that your final website will be identical to the one you
              envisioned.
            </p>

            <div className={`mb-16 text-white`}>
              <Accordion
                titleClassName={`py-3 px-3 mb-2 text-lg bg-white text-neutral-900`}
                items={[
                  {
                    title: `What's Included`,
                    content: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Professional responsive build</li>
    <li>Multi-page custom website (up to 8 pages)</li>
    <li>Extra Pages purchasable as add-ons</li>
    <li>Advanced CMS setup with user training</li>
    <li>Homepage with hero section</li>
    <li>About Us page</li>
    <li>Services/Products pages</li>
    <li>Extra Service/Product Pages purchasable as add-ons</li>
    <li>Contact page with integrated contact form</li>
    <li>Basic Blog setup with 3 sample posts</li>
    <li>Navigation menu and footer</li>
    <li>Image optimization and compression</li>
    <li>Advanced Google Analytics with goal tracking</li>
    <li>Basic SEO setup (meta tags, sitemap)</li>
    <li>Social media integration</li>
    <li>85+ Google PageSpeed score guaranteed</li>
    <li>2 rounds of revisions</li>
    <li>4-6 weeks delivery</li>
    <li>Discounted Hosting with RAVENCI</li>
    <li>Discounted Maintenance with RAVENCI</li>
    <li>1 Year Domain Subscription FREE</li>
    <li>1 Year SSL certificate with RAVENCI Hosting FREE</li>
</ul>
`,
                  },
                ]}
              />

              <PriceButton
                price={4960}
                link={`/quote?service=web-dev-custom`}
                frequency={""}
                includeFrom={true}
                callToAction={`Custom Development`}
                subCallToAction={`Bring your vision to life`}
              />

              <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
                <p className="text-sm text-yellow-200">
                  ⚡ Limited: We only take on 6 new Custom Development projects
                  to ensure quality and timely delivery while allowing for
                  feedback and revision rounds
                </p>
              </div>
            </div>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              3. Branding & Development
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              Our Branding & Development option offers a complete transformation
              for businesses who want it all. Starting from scratch or need a
              complete rebrand? This is the perfect solution for you. We will
              create your entire brand identity from the ground up, then design
              and build a stunning website that brings it all together. From
              logo to launch, get everything you need to stand out in the
              market.
            </p>

            <div className={`mb-16 text-white`}>
              <Accordion
                titleClassName={`py-3 px-3 mb-2 text-lg bg-white text-neutral-900`}
                items={[
                  {
                    title: `What's Included`,
                    content: `
<p class="mt-3 text-neutral-100">Branding</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Complete brand identity development</li>
    <li>Custom logo design (3 concepts, 3 revisions)</li>
    <li>Brand color palette</li>
    <li>Typography selection</li>
    <li>Brand style guide document</li>
    <li>Email signature design</li>
    <li>4 weeks delivery</li>
</ul>
<p class="mt-5 text-neutral-100">Website Design</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Custom design faithful to your new branding</li>
    <li>Professional mockups and wireframes</li>
    <li>User experience (UX) optimization</li>
    <li>Responsive design layouts on all devices</li>
    <li>Brand-consistent color schemes and typography</li>
    <li>Custom graphics and visual elements</li>
    <li>Strategic layout for conversion optimization</li>
    <li>2 design concept presentations</li>
    <li>2 rounds of design revisions</li>
    <li>3-4 weeks delivery</li>
    <li>Final design approval before development begins</li>
</ul>
<p class="mt-5 text-neutral-100">Website Development</p>
<ul class="mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Professional responsive build</li>
    <li>Multi-page custom website (up to 8 pages)</li>
    <li>Extra Pages purchasable as add-ons</li>
    <li>Advanced CMS setup with user training</li>
    <li>Homepage with hero section</li>
    <li>About Us page</li>
    <li>Services/Products pages</li>
    <li>Extra Service/Product Pages purchasable as add-ons</li>
    <li>Contact page with integrated contact form</li>
    <li>Basic Blog setup with 3 sample posts</li>
    <li>Navigation menu and footer</li>
    <li>Image optimization and compression</li>
    <li>Advanced Google Analytics with goal tracking</li>
    <li>Basic SEO setup (meta tags, sitemap)</li>
    <li>Social media integration</li>
    <li>85+ Google PageSpeed score guaranteed</li>
    <li>2 rounds of development revisions</li>
    <li>4-6 weeks delivery</li>
    <li>Discounted Hosting with RAVENCI</li>
    <li>Discounted Maintenance with RAVENCI</li>
    <li>1 Year Domain Subscription FREE</li>
    <li>1 Year SSL certificate with RAVENCI Hosting FREE</li>
</ul>
`,
                  },
                ]}
              />

              <PriceButton
                price={9920}
                link={`/quote?service=web-dev-branding`}
                frequency={""}
                includeFrom={true}
                callToAction={`Branding & Development`}
                subCallToAction={`Full Service Solution`}
              />

              <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
                <p className="text-sm text-yellow-200">
                  ⚡ Limited: We only take on 4 new Branding & Development
                  projects per quarter to ensure quality and timely delivery
                  while allowing for feedback, changes and revisions
                </p>
              </div>
            </div>
          </article>
        </section>
      </div>

      <section
        className={`content-section py-16 px-6 md:px-10 flex flex-col items-center justify-center gap-3 bg-white`}
      >
        <h2 className={`font-serif text-h3`}>Development Questions Answered</h2>
        <Accordion
          titleClassName={`py-6 text-lg`}
          items={[
            {
              title: `How long does a typical website take to build?`,
              content: `Single Page Starter: 3 weeks. Custom Development: 4-6 weeks. Branding & Development: 10-14 weeks total (4 weeks branding + 3-4 weeks design + 4-6 weeks development). We stick to these timelines and provide regular progress updates.`,
            },
            {
              title: `What if I'm not happy with the result?`,
              content: `We guarantee your website will match your vision. Each package includes multiple revision rounds, and we won't consider the project complete until you're 100% satisfied.`,
            },
            {
              title: `Can I update the website myself after it's built?`,
              content: `Absolutely. We build on user-friendly CMS platforms and provide training so you can easily update content, add blog posts, and make basic changes without needing a developer.`,
            },
            {
              title: `What makes your development different from cheaper options?`,
              content: `We guarantee 85+ PageSpeed scores, provide ongoing support, use professional development practices, and we're local to Brisbane. Cheap developers often create slow, problematic sites that cost more to fix later.`,
            },
            {
              title: `Do you handle the domain and hosting setup?`,
              content: `Yes, all packages include 1 year free domain registration and we can handle hosting setup. We recommend our own hosting for optimal performance, but can work with other quality hosts if needed.`,
            },
          ]}
        />
      </section>

      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 grid grid-cols-5 gap-10 min-h-[150px] bg-white`}
      ></section>
    </main>
  );
}
