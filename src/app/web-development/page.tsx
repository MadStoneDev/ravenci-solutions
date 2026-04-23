import Image from "next/image";
import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import Accordion from "@/components/accordion";
import Breadcrumbs from "@/components/breadcrumbs";
import PricingCards from "@/components/pricing-cards";
import StickyCTA from "@/components/sticky-cta";
import { getTestimonialsForPage } from "@/data/testimonials";

export const metadata = {
  title: "Website Development - RAVENCI Solutions",
  description:
    "Custom web development in Brisbane. Modern, responsive websites built for performance and designed to convert visitors into customers. From $3,490.",
  alternates: { canonical: "/web-development" },
};

export default function WebHostingDevelopmentPage() {
  const testimonials = getTestimonialsForPage("web-development");
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
    {
      title: "SSL Certificate",
      description: "Free SSL Certificate when you choose to host with RAVENCI",
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
                name: "Web Development",
                item: "https://ravenci.solutions/web-development",
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
          <Breadcrumbs items={[{ label: "Web Development" }]} />
          <h1 className={`mt-4 text-4xl md:text-5xl lg:text-h1 font-medium`}>
            Build it Right From the Get-Go!
          </h1>
          <h2
            className={`max-w-4xl text-2xl md:text-3xl lg:text-h2 font-light`}
          >
            Professional websites that convert visitors into customers
          </h2>
          <p className={`mt-6 max-w-2xl text-neutral-500/80`}>
            For Australian businesses ready to replace the site they have with
            one that actually performs. Built properly the first time so it&apos;s
            still working in five years — no plugin clutter, no surprise
            subscriptions, no developer disappearing on you. From $3,490 for a
            foundation build to $14,990 for a full brand and web package, plus
            ongoing support. Brisbane-based. 20+ years.
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
            Trusted by 75+ Australian businesses to build websites that actually
            work
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

      {/* Two-Column Section (Rebalanced) */}
      <div className={`grid grid-cols-1 lg:grid-cols-2`}>
        {/* Left Column — Dark: Pain Points + Why Choose + Intro */}
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark`}
        >
          <article className={`max-w-lg`}>
            <h3 className={`font-serif text-h3 font-bold text-white`}>
              Tired of Web Development Nightmares?
            </h3>
            <div className={`my-4 text-neutral-400/90`}>
              Stop dealing with:
              <ul className={`mt-4 flex flex-col gap-2`}>
                <li>- Developers who disappear after launch</li>
                <li>- Websites that look nothing like what you wanted</li>
                <li>- Sites that don't work on mobile devices</li>
                <li>- Hidden costs and endless revision charges</li>
                <li>- Technical jargon instead of clear communication</li>
              </ul>
            </div>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              Why Choose RAVENCI Over Other Developers?
            </h3>
            <ul className={`flex flex-col gap-4 mb-6 text-neutral-400/90`}>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Fixed pricing vs endless scope creep
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Brisbane-based vs offshore development
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Ongoing support vs build-and-abandon
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`flex-shrink-0 p-1 bg-ravenci-primary rounded-full text-white`}
                />
                85+ PageSpeed guaranteed vs "we'll make it pretty"
              </li>
            </ul>
            <p className={`mb-4 text-neutral-400/90`}>
              The web development process should never be overwhelming for you.
              It should respect your vision and bring it to life in a way that
              simply gets out of the way.
            </p>
            <p className={`text-neutral-400/90`}>
              That's how we approach it at RAVENCI. To make it even simpler for
              you, we offer three tiers of development services, each designed
              to meet your specific needs.
            </p>
          </article>
        </section>

        {/* Right Column — Light: Features */}
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-white`}
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
                  <p className={`text-neutral-600`}>
                    <span className="font-bold text-ravenci-dark">
                      {feature.title}:
                    </span>{" "}
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </div>

      {/* Full-Width Add-ons Section */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-neutral-50`}
      >
        <h3 className={`mb-10 font-serif text-h3 font-bold text-center`}>
          Plenty of Add-ons to Suit Your Needs
        </h3>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto`}
        >
          {addons.map((addon, index) => (
            <div key={index} className="flex items-start gap-2">
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
            </div>
          ))}
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 px-5 sm:px-20 xl:px-36 bg-white">
        <h3 className="mb-10 font-serif text-h3 font-bold text-center">
          Some of Our Recent Work
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Peninsula Homes",
              image: "/showcase-images/Client - Peninsula Homes.png",
            },
            {
              name: "SAC Consulting",
              image: "/showcase-images/Client - SAC Consulting.png",
            },
            {
              name: "Nikita Morell",
              image: "/showcase-images/Client - Nikita Morell.png",
            },
            {
              name: "Covenant Security",
              image: "/showcase-images/Client - Covenant Security.png",
            },
            {
              name: "Coast Remedial Solutions",
              image: "/showcase-images/Client - Coast Remedial Solutions.png",
            },
            {
              name: "Intercorp Developments",
              image: "/showcase-images/Client - Intercorp Developments.png",
            },
          ].map((project) => (
            <div
              key={project.name}
              className="group relative overflow-hidden rounded-xl"
            >
              <Image
                src={project.image}
                alt={`${project.name} website by RAVENCI`}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10">
                <p className="text-sm font-medium text-white">{project.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full-Width Pricing Section */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark`}
      >
        <h3
          className={`mb-12 font-serif text-h3 font-bold text-white text-center`}
        >
          Choose Your Package
        </h3>
        <PricingCards
          tiers={[
            {
              name: "1. Foundation Website",
              price: "3,490",
              description:
                "The most basic option for any business looking to get their foot in the door. A simple and quick way to get your website up and running, with a focus on performance and accessibility.",
              accordionContent: `
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
</ul>`,
            },
            {
              name: "2. Growth Website",
              price: "7,490",
              description:
                "Already have your design sorted? Have your website built just right. Whether you've worked with a designer, have existing brand guidelines, or know exactly what you want — we will turn your vision into a high-performing, professional website.",
              accordionContent: `
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
</ul>`,
            },
            {
              name: "3. Premium Brand & Web",
              price: "14,990",
              description:
                "A complete transformation for businesses who want it all. Starting from scratch or need a complete rebrand? We will create your entire brand identity from the ground up, then design and build a stunning website that brings it all together.",
              accordionContent: `
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
</ul>`,
            },
          ]}
        />
      </section>

      {/* FAQ Section */}
      <section
        className={`content-section py-16 px-6 md:px-10 flex flex-col items-center justify-center gap-3 bg-white`}
      >
        <h2 className={`font-serif text-h3`}>Development Questions Answered</h2>
        <Accordion
          titleClassName={`py-6 text-lg`}
          items={[
            {
              title: `How long does a typical website take to build?`,
              summary: `Foundation websites take 3 weeks, Growth websites 4-6 weeks, and Premium Brand & Web packages 10-14 weeks. RAVENCI provides regular progress updates throughout every project.`,
              content: `Foundation Website: 3 weeks. Growth Website: 4-6 weeks. Premium Brand & Web: 10-14 weeks total (4 weeks branding + 3-4 weeks design + 4-6 weeks development). We stick to these timelines and provide regular progress updates.`,
            },
            {
              title: `What if I'm not happy with the result?`,
              summary: `Every RAVENCI package includes multiple revision rounds. We guarantee the website matches your vision and won't consider the project complete until you're 100% satisfied.`,
              content: `We guarantee your website will match your vision. Each package includes multiple revision rounds, and we won't consider the project complete until you're 100% satisfied.`,
            },
            {
              title: `Can I update the website myself after it's built?`,
              summary: `Yes. RAVENCI builds on user-friendly CMS platforms and provides training so you can update content, add blog posts, and make changes without needing a developer.`,
              content: `Absolutely. We build on user-friendly CMS platforms and provide training so you can easily update content, add blog posts, and make basic changes without needing a developer.`,
            },
            {
              title: `What makes your development different from cheaper options?`,
              summary: `RAVENCI guarantees 85+ PageSpeed scores, provides ongoing support, uses professional development practices, and is Brisbane-based. Cheap developers often create slow, problematic sites that cost more to fix later.`,
              content: `We guarantee 85+ PageSpeed scores, provide ongoing support, use professional development practices, and we're local to Brisbane. Cheap developers often create slow, problematic sites that cost more to fix later.`,
            },
            {
              title: `Do you handle the domain and hosting setup?`,
              summary: `Yes. All RAVENCI packages include one year of free domain registration and full hosting setup. RAVENCI hosting is recommended for optimal performance, but other quality hosts are supported.`,
              content: `Yes, all packages include 1 year free domain registration and we can handle hosting setup. We recommend our own hosting for optimal performance, but can work with other quality hosts if needed.`,
            },
          ]}
        />
      </section>

      {/* Footer Spacer */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 grid grid-cols-5 gap-10 min-h-[150px] bg-white`}
      ></section>

      {/* Sticky CTA for Mobile */}
      <StickyCTA
        link="/launch-your-vision"
        startingPrice={3490}
        label="Request a Proposal"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Web Development",
            name: "Website Development",
            description:
              "Custom web development in Brisbane. Modern, responsive websites built for performance and designed to convert visitors into customers. From $3,490.",
            provider: {
              "@type": "ProfessionalService",
              name: "RAVENCI Solutions",
              url: "https://ravenci.solutions",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Brisbane",
                addressRegion: "QLD",
                addressCountry: "AU",
              },
            },
            areaServed: {
              "@type": "Country",
              name: "Australia",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Web Development Packages",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Foundation Website",
                  price: "3490",
                  priceCurrency: "AUD",
                  description:
                    "Custom single-page design with CMS setup, SEO, and 85+ PageSpeed score. 3 weeks delivery.",
                },
                {
                  "@type": "Offer",
                  name: "Growth Website",
                  price: "7490",
                  priceCurrency: "AUD",
                  description:
                    "Multi-page custom website up to 8 pages with advanced CMS, blog setup, and goal tracking. 4-6 weeks delivery.",
                },
                {
                  "@type": "Offer",
                  name: "Premium Brand & Web",
                  price: "14990",
                  priceCurrency: "AUD",
                  description:
                    "Complete brand identity plus multi-page custom website. Logo, style guide, wireframes, UX design, and full development. 10-14 weeks delivery.",
                },
              ],
            },
          }),
        }}
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
                name: "How long does a typical website take to build?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Foundation websites take 3 weeks, Growth websites 4-6 weeks, and Premium Brand & Web packages 10-14 weeks. RAVENCI provides regular progress updates throughout every project.",
                },
              },
              {
                "@type": "Question",
                name: "What if I'm not happy with the result?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Every RAVENCI package includes multiple revision rounds. We guarantee the website matches your vision and won't consider the project complete until you're 100% satisfied.",
                },
              },
              {
                "@type": "Question",
                name: "Can I update the website myself after it's built?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. RAVENCI builds on user-friendly CMS platforms and provides training so you can update content, add blog posts, and make changes without needing a developer.",
                },
              },
              {
                "@type": "Question",
                name: "What makes your development different from cheaper options?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RAVENCI guarantees 85+ PageSpeed scores, provides ongoing support, uses professional development practices, and is Brisbane-based. Cheap developers often create slow, problematic sites that cost more to fix later.",
                },
              },
              {
                "@type": "Question",
                name: "Do you handle the domain and hosting setup?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. All RAVENCI packages include one year of free domain registration and full hosting setup. RAVENCI hosting is recommended for optimal performance, but other quality hosts are supported.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
