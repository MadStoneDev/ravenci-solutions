import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import PriceButton from "@/components/price-button";
import Accordion from "@/components/accordion";

export const metadata = {
  title: "Web App Development - RAVENCI Solutions",
  description:
    "Custom web application development. Build powerful platforms, dashboards, and tools that streamline your business operations.",
};

export default function WebAppPage() {
  const features = [
    {
      title: "Custom Functionality",
      description:
        "Tailored features that solve your specific business challenges and workflows",
    },
    {
      title: "Cloud-Based Architecture",
      description:
        "Scalable, secure applications that work from anywhere with internet access",
    },
    {
      title: "Real-Time Features",
      description:
        "Live updates, notifications, and collaborative features for team productivity",
    },
    {
      title: "Database Integration",
      description:
        "Sophisticated data management and reporting capabilities for informed decisions",
    },
    {
      title: "User Management",
      description:
        "Advanced user roles, permissions, and authentication systems",
    },
    {
      title: "API Integration",
      description:
        "Seamless connection with existing business tools and third-party services",
    },
    {
      title: "Responsive Design",
      description:
        "Applications that work perfectly on desktop, tablet, and mobile devices",
    },
    {
      title: "Performance Optimized",
      description:
        "Fast-loading applications built for efficiency and user satisfaction",
    },
    {
      title: "Security First",
      description:
        "Enterprise-grade security measures to protect sensitive business data",
    },
  ];

  const addons = [
    {
      title: "Advanced Analytics",
      description:
        "Custom dashboards, reporting, and business intelligence features",
    },
    {
      title: "Workflow Automation",
      description: "Automate repetitive tasks and business processes",
    },
    {
      title: "Payment Processing",
      description: "Secure payment gateways and subscription management",
    },
    {
      title: "Document Management",
      description:
        "File upload, storage, versioning, and collaboration features",
    },
    {
      title: "Communication Tools",
      description:
        "Built-in messaging, notifications, and collaboration features",
    },
    {
      title: "Third-Party Integrations",
      description:
        "Connect with CRM, accounting, email marketing, and other tools",
    },
    {
      title: "Mobile App Version",
      description: "Companion mobile apps for your web application",
    },
    {
      title: "Multi-Tenant Architecture",
      description: "Serve multiple clients or departments from one application",
    },
    {
      title: "Advanced Security",
      description:
        "Two-factor authentication, encryption, and compliance features",
    },
    {
      title: "Custom Integrations",
      description:
        "Bespoke connections to legacy systems and specialized tools",
    },
  ];

  return (
    <main className={`flex flex-col`}>
      <section
        className={`content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 min-h-[250px] bg-white`}
      >
        <article className={`col-span-12 flex flex-col`}>
          <h1 className={`text-4xl md:text-5xl lg:text-h1 font-medium`}>
            Build the Platform You Need!
          </h1>
          <h2
            className={`max-w-4xl text-2xl md:text-3xl lg:text-h2 font-light`}
          >
            Custom web applications that streamline operations and drive growth
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
            Trusted by 30+ Australian businesses to build platforms that
            transform operations
          </h3>
          <p
            className={`my-6 font-poppins font-light leading-8 text-ravenci-light-gray`}
          >
            "RAVENCI built our custom project management platform that has
            revolutionized how we work. What used to take hours now takes
            minutes. Our team productivity has increased 60% and clients love
            the transparency."
          </p>
          <h3 className={`font-poppins text-2xl font-light text-neutral-100`}>
            <span className={`font-bold`}>Michael</span> Chen, Operations
            Director
          </h3>
        </div>
      </section>

      <div className={`grid grid-cols-1 lg:grid-cols-2 bg-white`}>
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 space-y-14 bg-neutral-200/50`}
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

          <article className={`max-w-lg`}>
            <h3 className={`mb-8 font-serif text-h3 font-bold`}>
              Advanced Features Available
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
              Stuck with Systems That Don't Work?
            </h3>
            <p className={`my-4 text-neutral-400/90`}>
              Stop struggling with:
              <ul className={`mt-4 flex flex-col gap-2`}>
                <li>
                  - Multiple disconnected tools that don't talk to each other
                </li>
                <li>- Manual processes that waste hours every day</li>
                <li>- Off-the-shelf software that doesn't fit your workflow</li>
                <li>- Data scattered across spreadsheets and systems</li>
                <li>- Processes that break down as your business grows</li>
              </ul>
            </p>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              Why Choose RAVENCI for Web App Development?
            </h3>
            <ul className={`flex flex-col gap-4 mb-6 text-neutral-400/90`}>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Business-focused solutions vs technical showcases
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Scalable architecture vs quick fixes that break
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                User-friendly design vs complex enterprise software
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Ongoing partnership vs build-and-abandon approach
              </li>
            </ul>
            <p className={`mb-4 text-neutral-400/90`}>
              Custom web applications are game-changers for businesses ready to
              optimize operations, improve customer experience, and gain
              competitive advantages through technology.
            </p>
            <p className={`mb-4 text-neutral-400/90`}>
              We offer three web application packages designed for different
              complexity levels and business requirements.
            </p>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              1. Business Dashboard
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              Perfect for businesses needing centralized data management and
              reporting. Ideal for customer management, inventory tracking,
              project monitoring, or any process that requires organized data
              and user-friendly interfaces.
            </p>
            <div className={`mb-16 text-white`}>
              <Accordion
                titleClassName={`py-3 px-3 mb-2 text-lg bg-white text-neutral-900`}
                items={[
                  {
                    title: `What's Included`,
                    content: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Custom dashboard design and development</li>
    <li>5-10 core features/modules</li>
    <li>User authentication and basic roles</li>
    <li>Database design and setup</li>
    <li>Data import/export functionality</li>
    <li>Basic reporting and analytics</li>
    <li>Responsive design for all devices</li>
    <li>Search and filtering capabilities</li>
    <li>Email notifications</li>
    <li>Basic API for future integrations</li>
    <li>Admin panel for content management</li>
    <li>Security measures and data backup</li>
    <li>2 rounds of revisions</li>
    <li>8-12 weeks delivery</li>
    <li>1 month post-launch support</li>
    <li>Training for key users</li>
</ul>
`,
                  },
                ]}
              />
              <PriceButton
                price={18900}
                link={`/quote?service=webapp-dashboard`}
                frequency={""}
                includeFrom={true}
                callToAction={`Business Dashboard`}
                subCallToAction={`Centralize and streamline your operations`}
              />

              <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
                <p className="text-sm text-yellow-200">
                  ⚡ Limited: We only take on 8 Business Dashboard projects per
                  quarter
                </p>
              </div>
            </div>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              2. Custom Business Platform
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              For businesses ready to transform operations with comprehensive
              web applications. Includes advanced workflows, integrations,
              automation, and all the features needed to replace multiple
              existing tools.
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
    <li>Comprehensive web application development</li>
    <li>15-25 feature modules/sections</li>
    <li>Advanced user management and permissions</li>
    <li>Complex workflow automation</li>
    <li>Real-time notifications and updates</li>
    <li>Advanced reporting and analytics</li>
    <li>Document management and file sharing</li>
    <li>Communication tools and messaging</li>
</ul>
<p class="mt-5 text-neutral-100">Integration & Automation</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Third-party API integrations</li>
    <li>Payment processing integration</li>
    <li>Email automation and templates</li>
    <li>Calendar and scheduling features</li>
    <li>Advanced search and filtering</li>
    <li>Data import/export tools</li>
    <li>Backup and disaster recovery</li>
</ul>
<p class="mt-5 text-neutral-100">Development & Support</p>
<ul class="mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Scalable cloud infrastructure</li>
    <li>Performance optimization</li>
    <li>Security auditing and compliance</li>
    <li>Comprehensive admin dashboard</li>
    <li>3 rounds of revisions</li>
    <li>16-20 weeks delivery</li>
    <li>3 months post-launch support</li>
    <li>Team training and documentation</li>
    <li>Future enhancement planning</li>
</ul>
`,
                  },
                ]}
              />

              <PriceButton
                price={39900}
                link={`/quote?service=webapp-platform`}
                frequency={""}
                includeFrom={true}
                callToAction={`Custom Business Platform`}
                subCallToAction={`Replace multiple tools with one powerful system`}
              />

              <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
                <p className="text-sm text-yellow-200">
                  ⚡ Limited: We only take on 4 Custom Platform projects per
                  quarter
                </p>
              </div>
            </div>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              3. Enterprise Web Application
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              The ultimate solution for businesses requiring enterprise-grade
              applications with advanced features, high scalability, and complex
              integrations. Perfect for companies looking to gain significant
              competitive advantages through technology.
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
    <li>Large-scale web application architecture</li>
    <li>Unlimited features and functionality</li>
    <li>Multi-tenant or white-label capabilities</li>
    <li>Advanced user hierarchy and permissions</li>
    <li>Real-time collaboration tools</li>
    <li>Advanced analytics and business intelligence</li>
    <li>Custom workflow engine</li>
    <li>API-first architecture for maximum flexibility</li>
</ul>
<p class="mt-5 text-neutral-100">Infrastructure & Integrations</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Enterprise cloud infrastructure setup</li>
    <li>Advanced security and compliance features</li>
    <li>Legacy system integrations</li>
    <li>Custom API development</li>
    <li>Advanced performance optimization</li>
    <li>Automated testing and deployment</li>
                        <li>Load balancing and scalability planning</li>
                </ul>
<p class="mt-5 text-neutral-100">Enterprise Support & Management</p>
<ul class="mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Comprehensive project management</li>
    <li>Dedicated development team</li>
    <li>Advanced monitoring and alerting</li>
    <li>Disaster recovery and business continuity</li>
    <li>Unlimited revisions during development</li>
    <li>20-30 weeks delivery</li>
    <li>6 months post-launch support</li>
    <li>Executive training and change management</li>
    <li>Long-term technology roadmap</li>
    <li>Ongoing maintenance and enhancement plans</li>
</ul>
`,
                  },
                ]}
              />

              <PriceButton
                price={79900}
                link={`/quote?service=webapp-enterprise`}
                frequency={""}
                includeFrom={true}
                callToAction={`Enterprise Web Application`}
                subCallToAction={`Transform your industry with cutting-edge technology`}
              />

              <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
                <p className="text-sm text-yellow-200">
                  ⚡ Exclusive: We only take on 2 Enterprise Application
                  projects per quarter
                </p>
              </div>
            </div>
          </article>
        </section>
      </div>

      <section
        className={`content-section py-16 px-6 md:px-10 flex flex-col items-center justify-center gap-3 bg-white`}
      >
        <h2 className={`font-serif text-h3`}>
          Web App Development Questions Answered
        </h2>
        <Accordion
          titleClassName={`py-6 text-lg`}
          items={[
            {
              title: `How long does web app development typically take?`,
              content: `Business Dashboard: 8-12 weeks. Custom Business Platform: 16-20 weeks. Enterprise Web Application: 20-30 weeks. Timeline includes planning, design, development, testing, and deployment.`,
            },
            {
              title: `Can the web app integrate with our existing systems?`,
              content: `Absolutely. All our packages include API integration capabilities. We can connect your web app with existing CRM, accounting, inventory, or any other business systems you currently use.`,
            },
            {
              title: `Will our team be able to manage the application after launch?`,
              content: `Yes. We build user-friendly admin panels and provide comprehensive training. You'll be able to manage users, update content, generate reports, and handle day-to-day operations without technical knowledge.`,
            },
            {
              title: `How do you handle data security and backups?`,
              content: `We implement enterprise-grade security measures including encryption, secure authentication, and regular security audits. All data is automatically backed up daily with disaster recovery procedures in place.`,
            },
            {
              title: `What ongoing support do you provide?`,
              content: `We provide 1-6 months of post-launch support depending on your package, including bug fixes, minor updates, and user support. We also offer ongoing maintenance plans for continued development and support.`,
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
