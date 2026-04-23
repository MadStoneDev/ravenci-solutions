import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import PriceButton from "@/components/price-button";
import Accordion from "@/components/accordion";
import StickyCTA from "@/components/sticky-cta";
import { getTestimonialsForPage } from "@/data/testimonials";

export const metadata = {
  title: "Web App Development - RAVENCI Solutions",
  description:
    "Stop wrestling with spreadsheets! Custom web applications that eliminate manual work and scale with your Brisbane business.",
};

export default function WebAppPage() {
  const testimonials = getTestimonialsForPage("web-apps");
  const features = [
    {
      title: "Custom Workflow Design",
      description: "Built specifically for how your business actually operates",
    },
    {
      title: "Real-Time Data",
      description:
        "Make decisions based on current information, not yesterday's reports",
    },
    {
      title: "Team Collaboration",
      description:
        "Everyone works from the same information with role-based access",
    },
    {
      title: "Automated Reporting",
      description:
        "Generate insights automatically instead of manual number crunching",
    },
    {
      title: "Talks to Your Existing Tools",
      description:
        "Connects to Xero, your CRM, your booking system — so data flows automatically instead of being re-typed three times",
    },
    {
      title: "Works on Every Device",
      description: "Your team uses it on the desktop, on the road, on a phone — same data, same experience",
    },
    {
      title: "Your Data, Properly Protected",
      description:
        "Encrypted connections, secure logins, and the kind of permissions structure your industry actually expects",
    },
    {
      title: "Grows With You",
      description:
        "Handles 10 users or 10,000 without slowing down. You won't outgrow it the year after we ship it",
    },
    {
      title: "Your Team Will Actually Use It",
      description: "Designed around how the work really happens — not how a generic SaaS thinks it should",
    },
  ];

  return (
    <main className={`flex flex-col`}>
      <section
        className={`content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 min-h-[250px] bg-white`}
      >
        <article className={`col-span-12 flex flex-col`}>
          <h1 className={`text-4xl md:text-5xl lg:text-h1 font-medium`}>
            Stop Wrestling with Spreadsheets!
          </h1>
          <h2
            className={`max-w-4xl text-2xl md:text-3xl lg:text-h2 font-light`}
          >
            Custom web applications that eliminate manual work and scale with
            your business
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
            Trusted by 75+ Australian businesses to build platforms that
            transform operations
          </h3>
          {testimonials[0] && (
            <>
              <p
                className={`my-6 font-sans font-light leading-8 text-ravenci-light-gray`}
              >
                &ldquo;{testimonials[0].content}&rdquo;
              </p>
              <h3 className={`font-sans text-2xl font-light text-neutral-100`}>
                <span className={`font-bold`}>{testimonials[0].author}</span>
              </h3>
            </>
          )}
        </div>
      </section>

      <div className={`grid grid-cols-1 lg:grid-cols-2 bg-white`}>
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-neutral-200/50`}
        >
          <article className={`max-w-lg`}>
            <h3 className={`mb-8 font-serif text-h3 font-bold`}>
              What's Included with Every Platform
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
        </section>

        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark`}
        >
          <article className={`max-w-lg`}>
            <h3 className={`font-serif text-h3 font-bold text-white`}>
              Tired of Business Processes That Don't Work?
            </h3>
            <p className={`my-4 text-neutral-400/90`}>Stop losing money to:</p>
            <ul className={`mt-4 flex flex-col gap-2 text-neutral-400/90`}>
              <li>- Hours lost to manual data entry and duplicate systems</li>
              <li>
                - Important decisions delayed by lack of real-time information
              </li>
              <li>- Team productivity bottlenecked by outdated processes</li>
              <li>
                - Customer service suffering due to fragmented information
              </li>
              <li>- Critical business data scattered across spreadsheets</li>
            </ul>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              Why Choose RAVENCI for Web Applications?
            </h3>
            <ul className={`flex flex-col gap-4 mb-6 text-neutral-400/90`}>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Business-focused solutions that solve real problems
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Built to scale from startup to enterprise without breaking
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Brisbane-based with Australian business understanding
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Fixed pricing with no scope creep or surprise costs
              </li>
            </ul>

            <p className={`mb-4 text-neutral-400/90`}>
              Custom web applications aren't just about technology—they're about
              giving your business a competitive edge through streamlined
              operations and better decision-making.
            </p>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              1. Process Automation Tool
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              Perfect for businesses ready to eliminate 1-2 major manual
              processes. Stop the spreadsheet shuffle and data double-entry
              that's costing you hours every week.
            </p>
            <div className={`mb-16 text-white`}>
              <Accordion
                titleClassName={`py-3 px-3 mb-2 text-lg bg-white text-neutral-900`}
                items={[
                  {
                    title: `What's Included`,
                    content: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Custom workflow analysis and design</li>
    <li>Single-purpose web application (1-2 core processes)</li>
    <li>User management and basic permissions</li>
    <li>Database design and setup</li>
    <li>Data import from existing systems</li>
    <li>Automated email notifications</li>
    <li>Basic reporting dashboard</li>
    <li>Mobile-responsive design</li>
    <li>Integration with 1-2 existing tools</li>
    <li>6-8 weeks delivery</li>
    <li>Team training and handover</li>
    <li>1 month post-launch support</li>
</ul>
`,
                  },
                ]}
              />
              <PriceButton
                price={"25,000"}
                link={`/launch-your-vision`}
                frequency={""}
                includeFrom={true}
                callToAction={`Process Automation Tool`}
                subCallToAction={`Enquire for a tailored proposal`}
              />
            </div>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              2. Business Management Platform
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              For businesses ready to centralize operations with a comprehensive
              system that handles customer management, project tracking, and
              business intelligence.
            </p>

            <div className={`mb-16 text-white`}>
              <Accordion
                titleClassName={`py-3 px-3 mb-2 text-lg bg-white text-neutral-900`}
                items={[
                  {
                    title: `What's Included`,
                    content: `
<p class="mt-3 text-neutral-100">Core Platform Features</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Comprehensive platform development</li>
    <li>Multiple integrated modules (5-8 core features)</li>
    <li>Advanced user roles and permissions</li>
    <li>Customer relationship management</li>
    <li>Project and task management</li>
    <li>Financial tracking and invoicing</li>
    <li>Advanced reporting and analytics</li>
    <li>Document management and file sharing</li>
    <li>Team communication tools</li>
</ul>
<p class="mt-5 text-neutral-100">Integration & Automation</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>API integrations (3-5 systems)</li>
    <li>Automated workflows and notifications</li>
    <li>Calendar and scheduling features</li>
    <li>Advanced search and filtering</li>
    <li>Data import/export tools</li>
    <li>12-16 weeks delivery</li>
    <li>Comprehensive team training</li>
    <li>3 months post-launch support</li>
</ul>
`,
                  },
                ]}
              />

              <PriceButton
                price={"45,000"}
                link={`/launch-your-vision`}
                frequency={""}
                includeFrom={true}
                callToAction={`Business Management Platform`}
                subCallToAction={`Enquire for a tailored proposal`}
              />
            </div>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              3. Enterprise Solution
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              For established businesses requiring complex, multi-department
              systems with advanced features, security, and scalability for
              significant competitive advantage.
            </p>

            <div className={`mb-16 text-white`}>
              <Accordion
                titleClassName={`py-3 px-3 mb-2 text-lg bg-white text-neutral-900`}
                items={[
                  {
                    title: `What's Included`,
                    content: `
<p class="mt-3 text-neutral-100">Enterprise Application Development</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Enterprise-grade application architecture</li>
    <li>Unlimited features and complexity</li>
    <li>Multi-department integration</li>
    <li>Advanced security and compliance</li>
    <li>Custom API development</li>
    <li>Advanced analytics and business intelligence</li>
    <li>Workflow automation engine</li>
    <li>Multi-tenant capabilities</li>
</ul>
<p class="mt-5 text-neutral-100">Infrastructure & Support</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Performance optimization and scaling</li>
    <li>Legacy system integrations</li>
    <li>Dedicated project management</li>
    <li>20-26 weeks delivery</li>
    <li>Executive training and change management</li>
    <li>6 months post-launch support</li>
    <li>Ongoing development roadmap</li>
</ul>
`,
                  },
                ]}
              />

              <PriceButton
                price={"60,000"}
                link={`/launch-your-vision`}
                frequency={""}
                includeFrom={true}
                callToAction={`Enterprise Solution`}
                subCallToAction={`Enquire for a tailored proposal`}
              />
            </div>
          </article>
        </section>
      </div>

      <section
        className={`content-section py-16 px-6 md:px-10 flex flex-col items-center justify-center gap-3 bg-white`}
      >
        <h2 className={`font-serif text-h3`}>Web App Questions Answered</h2>
        <Accordion
          titleClassName={`py-6 text-lg`}
          items={[
            {
              title: `How do you ensure the app actually solves our business problems?`,
              summary: `RAVENCI begins every project with a comprehensive business process analysis, mapping current workflows and identifying bottlenecks. You see exactly how the app improves operations before any code is written.`,
              content: `We start every project with a comprehensive business process analysis. We map your current workflows, identify bottlenecks, and design solutions that eliminate specific pain points. You'll see exactly how the app will improve your operations before we write a single line of code.`,
            },
            {
              title: `Can the application integrate with our existing systems?`,
              summary: `Yes. All RAVENCI packages include API integration capabilities. Common integrations include Xero, QuickBooks, Strapi, Prismic, WordPress, and other business tools for seamless operation with your existing tech stack.`,
              content: `Yes. All our packages include API integration capabilities. We commonly integrate with accounting software (Xero, QuickBooks), CRM systems (Strapi, Prismic, WordPress, etc.), and other business tools. We make sure your app works seamlessly with your existing tech stack.`,
            },
            {
              title: `What if our needs change as we grow?`,
              summary: `All RAVENCI applications are built with scalable architecture that handles increased users, data, and functionality. Ongoing development services are available to add new features as your business evolves.`,
              content: `We build all applications with scalability in mind. The architecture can handle increased users, data, and functionality. We also provide ongoing development services to add new features as your business evolves.`,
            },
            {
              title: `How do you handle data security and backups?`,
              summary: `RAVENCI uses secure, stable database platforms that protect your privacy and your customers' data. Cloud-based hosting ensures users connect to the nearest servers for optimised performance.`,
              content: `The database platforms we use are secure and stable. Most importantly, they protect your privacy and that of your customers. We prioritise cloud-based hosting to make sure that your customers are connecting to servers and data that is closest to them for optimised performance.`,
            },
            {
              title: `What ROI can we expect from a custom web application?`,
              summary: `Most clients see ROI within 6-12 months. Common results include 40-60% reduction in manual work, 25-50% faster reporting, and significantly improved customer service response times.`,
              content: `Most clients see ROI within 6-12 months through time savings, reduced errors, and improved decision-making. Common benefits include 40-60% reduction in manual work, 25-50% faster reporting, and significantly improved customer service response times.`,
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
        startingPrice={25000}
        priceNote="depending on scope"
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
                name: "How do you ensure the app actually solves our business problems?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We start every project with a comprehensive business process analysis. We map your current workflows, identify bottlenecks, and design solutions that eliminate specific pain points. You'll see exactly how the app will improve your operations before we write a single line of code.",
                },
              },
              {
                "@type": "Question",
                name: "Can the application integrate with our existing systems?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. All our packages include API integration capabilities. We commonly integrate with accounting software, CRM systems, and other business tools. We make sure your app works seamlessly with your existing tech stack.",
                },
              },
              {
                "@type": "Question",
                name: "What if our needs change as we grow?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We build all applications with scalability in mind. The architecture can handle increased users, data, and functionality. We also provide ongoing development services to add new features as your business evolves.",
                },
              },
              {
                "@type": "Question",
                name: "How do you handle data security and backups?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The database platforms we use are secure and stable. We prioritise cloud-based hosting to make sure that your customers are connecting to servers and data that is closest to them for optimised performance.",
                },
              },
              {
                "@type": "Question",
                name: "What ROI can we expect from a custom web application?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most clients see ROI within 6-12 months through time savings, reduced errors, and improved decision-making. Common benefits include 40-60% reduction in manual work, 25-50% faster reporting, and significantly improved customer service response times.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
