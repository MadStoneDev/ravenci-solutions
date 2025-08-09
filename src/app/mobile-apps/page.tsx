import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import PriceButton from "@/components/price-button";
import Accordion from "@/components/accordion";

export const metadata = {
  title: "Mobile App Development - RAVENCI Solutions",
  description:
    "Custom mobile app design and development for iOS and Android. Transform your business idea into a powerful mobile application.",
};

export default function MobileAppPage() {
  const features = [
    {
      title: "Cross-Platform Development",
      description:
        "Apps that work perfectly on both iOS and Android devices from a single codebase",
    },
    {
      title: "Custom UI/UX Design",
      description:
        "Intuitive interfaces designed specifically for mobile user behavior and expectations",
    },
    {
      title: "Performance Optimized",
      description:
        "Fast, responsive apps that provide smooth user experiences across all devices",
    },
    {
      title: "Offline Functionality",
      description:
        "Apps that work even when users don't have internet connectivity",
    },
    {
      title: "Push Notifications",
      description:
        "Keep users engaged with targeted, timely notifications and updates",
    },
    {
      title: "Backend Integration",
      description:
        "Seamless connection to databases, APIs, and third-party services",
    },
    {
      title: "App Store Optimization",
      description:
        "Optimized listings to help your app get discovered and downloaded",
    },
    {
      title: "Analytics & Tracking",
      description:
        "Built-in analytics to understand user behavior and app performance",
    },
    {
      title: "Security Features",
      description:
        "Enterprise-grade security to protect user data and business information",
    },
  ];

  const addons = [
    {
      title: "Advanced Features",
      description:
        "GPS tracking, camera integration, AR/VR capabilities, payments",
    },
    {
      title: "Admin Dashboard",
      description: "Web-based control panel to manage app content and users",
    },
    {
      title: "Multi-language Support",
      description: "Reach global audiences with localized app experiences",
    },
    {
      title: "Social Media Integration",
      description:
        "Login with Facebook/Google, sharing capabilities, social feeds",
    },
    {
      title: "E-commerce Features",
      description: "Shopping cart, payment processing, inventory management",
    },
    {
      title: "Real-time Features",
      description: "Live chat, messaging, real-time updates and notifications",
    },
    {
      title: "API Development",
      description:
        "Custom APIs to connect your app with existing business systems",
    },
    {
      title: "App Store Submission",
      description: "Complete App Store and Google Play submission process",
    },
    {
      title: "Maintenance Plans",
      description: "Ongoing updates, bug fixes, and feature enhancements",
    },
    {
      title: "Marketing Assets",
      description:
        "App screenshots, promotional videos, and marketing materials",
    },
  ];

  return (
    <main className={`flex flex-col`}>
      <section
        className={`content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 min-h-[250px] bg-white`}
      >
        <article className={`col-span-12 flex flex-col`}>
          <h1 className={`text-4xl md:text-5xl lg:text-h1 font-medium`}>
            Turn Your Idea Into an App!
          </h1>
          <h2
            className={`max-w-4xl text-2xl md:text-3xl lg:text-h2 font-light`}
          >
            Custom mobile apps that users love and businesses profit from
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
            Trusted by 25+ Australian businesses to build apps that actually get
            used daily
          </h3>
          <p
            className={`my-6 font-poppins font-light leading-8 text-ravenci-light-gray`}
          >
            "RAVENCI built our service booking app that now processes $50K+
            monthly in transactions. The app is intuitive, fast, and our
            customers love using it. Best investment we've made for our business
            growth."
          </p>
          <h3 className={`font-poppins text-2xl font-light text-neutral-100`}>
            <span className={`font-bold`}>James</span> Rodriguez, CEO
          </h3>
        </div>
      </section>

      <div className={`grid grid-cols-1 lg:grid-cols-2 bg-white`}>
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark`}
        >
          <article className={`max-w-lg`}>
            <h3 className={`font-serif text-h3 font-bold text-white`}>
              Tired of App Development Horror Stories?
            </h3>
            <p className={`my-4 text-neutral-400/90`}>
              Stop dealing with:
              <ul className={`mt-4 flex flex-col gap-2`}>
                <li>- Developers who disappear mid-project</li>
                <li>- Apps that crash constantly or run slowly</li>
                <li>- Budgets that balloon from $20K to $100K+</li>
                <li>- Apps that nobody wants to use</li>
                <li>- Rejection from App Store due to poor quality</li>
              </ul>
            </p>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              Why Choose RAVENCI Over Other App Developers?
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
                Brisbane-based vs offshore development teams
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                User-focused design vs feature-heavy complexity
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Ongoing support vs build-and-abandon approach
              </li>
            </ul>
            <p className={`mb-4 text-neutral-400/90`}>
              Mobile apps are powerful business tools when built right. They can
              increase customer engagement, streamline operations, and create
              new revenue streams for your business.
            </p>
            <p className={`mb-4 text-neutral-400/90`}>
              We offer three app development packages designed for different
              business needs and complexity levels.
            </p>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              1. Simple Business App
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              Perfect for businesses wanting to enhance customer experience with
              a straightforward mobile app. Ideal for service bookings, company
              information, contact forms, and basic business functionality.
            </p>
            <div className={`mb-16 text-white`}>
              <Accordion
                titleClassName={`py-3 px-3 mb-2 text-lg bg-white text-neutral-900`}
                items={[
                  {
                    title: `What's Included`,
                    content: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Custom app design (iOS and Android)</li>
    <li>5-8 core screens/pages</li>
    <li>Contact forms and business information</li>
    <li>Push notifications setup</li>
    <li>Basic offline functionality</li>
    <li>App store optimization (ASO)</li>
    <li>Google Analytics integration</li>
    <li>Social media sharing</li>
    <li>Simple backend for content updates</li>
    <li>Basic user authentication</li>
    <li>Testing on multiple devices</li>
    <li>App store submission guidance</li>
    <li>2 rounds of revisions</li>
    <li>8-10 weeks delivery</li>
    <li>1 month post-launch support</li>
    <li>Source code ownership</li>
</ul>
`,
                  },
                ]}
              />
              <PriceButton
                price={15900}
                link={`/quote?service=app-simple`}
                frequency={""}
                includeFrom={true}
                callToAction={`Simple Business App`}
                subCallToAction={`Get your business in customers' pockets`}
              />

              <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
                <p className="text-sm text-yellow-200">
                  ⚡ Limited: We only take on 6 Simple App projects per quarter
                </p>
              </div>
            </div>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              2. Feature-Rich Business App
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              For businesses ready to transform operations with advanced app
              functionality. Includes booking systems, user accounts, payment
              processing, and custom business logic that sets you apart from
              competitors.
            </p>

            <div className={`mb-16 text-white`}>
              <Accordion
                titleClassName={`py-3 px-3 mb-2 text-lg bg-white text-neutral-900`}
                items={[
                  {
                    title: `What's Included`,
                    content: `
<p class="mt-3 text-neutral-100">Core App Features</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Custom app design (iOS and Android)</li>
    <li>10-15 screens with advanced functionality</li>
    <li>User registration and profile management</li>
    <li>Advanced offline capabilities</li>
    <li>Push notification campaigns</li>
    <li>In-app messaging or chat</li>
    <li>Photo/video upload and gallery</li>
    <li>Location services and maps integration</li>
</ul>
<p class="mt-5 text-neutral-100">Business Features</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Booking/appointment system</li>
    <li>Payment processing integration</li>
    <li>Custom business workflows</li>
    <li>Admin dashboard for management</li>
    <li>Advanced analytics and reporting</li>
    <li>Social media login integration</li>
    <li>Email notifications and automation</li>
</ul>
<p class="mt-5 text-neutral-100">Development & Support</p>
<ul class="mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Comprehensive backend development</li>
    <li>API development for future integrations</li>
    <li>Extensive testing and QA</li>
    <li>App store submission assistance</li>
    <li>3 rounds of revisions</li>
    <li>12-16 weeks delivery</li>
    <li>3 months post-launch support</li>
    <li>Training for app management</li>
    <li>Full source code and documentation</li>
</ul>
`,
                  },
                ]}
              />

              <PriceButton
                price={28900}
                link={`/quote?service=app-feature-rich`}
                frequency={""}
                includeFrom={true}
                callToAction={`Feature-Rich Business App`}
                subCallToAction={`Transform how customers interact with your business`}
              />

              <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
                <p className="text-sm text-yellow-200">
                  ⚡ Limited: We only take on 4 Feature-Rich App projects per
                  quarter
                </p>
              </div>
            </div>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              3. Enterprise Mobile Platform
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              The ultimate mobile solution for businesses serious about digital
              transformation. Custom-built platforms with advanced integrations,
              scalable architecture, and enterprise-grade security. Perfect for
              companies looking to disrupt their industry.
            </p>

            <div className={`mb-16 text-white`}>
              <Accordion
                titleClassName={`py-3 px-3 mb-2 text-lg bg-white text-neutral-900`}
                items={[
                  {
                    title: `What's Included`,
                    content: `
<p class="mt-3 text-neutral-100">Advanced App Development</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Custom mobile platform (iOS and Android)</li>
    <li>Unlimited screens and functionality</li>
    <li>Advanced UI/UX with custom animations</li>
    <li>Real-time features and live updates</li>
    <li>Multi-language and multi-currency support</li>
    <li>Advanced security and encryption</li>
    <li>Offline-first architecture</li>
    <li>Custom integrations with existing systems</li>
</ul>
<p class="mt-5 text-neutral-100">Backend & Infrastructure</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Scalable cloud infrastructure setup</li>
    <li>Custom API development</li>
    <li>Database design and optimization</li>
    <li>Third-party system integrations</li>
    <li>Advanced analytics and business intelligence</li>
    <li>Automated backup and disaster recovery</li>
    <li>Performance monitoring and alerts</li>
</ul>
<p class="mt-5 text-neutral-100">Enterprise Support</p>
<ul class="mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Comprehensive admin dashboard</li>
    <li>Advanced user management and permissions</li>
    <li>White-label options available</li>
    <li>App store submission and management</li>
    <li>Unlimited revisions during development</li>
    <li>16-24 weeks delivery</li>
    <li>6 months post-launch support</li>
    <li>Team training and documentation</li>
    <li>Ongoing maintenance plans available</li>
    <li>Future enhancement roadmap</li>
</ul>
`,
                  },
                ]}
              />

              <PriceButton
                price={59900}
                link={`/quote?service=app-enterprise`}
                frequency={""}
                includeFrom={true}
                callToAction={`Enterprise Mobile Platform`}
                subCallToAction={`Lead your industry with cutting-edge technology`}
              />

              <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
                <p className="text-sm text-yellow-200">
                  ⚡ Exclusive: We only take on 2 Enterprise Platform projects
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
        <h2 className={`font-serif text-h3`}>
          App Development Questions Answered
        </h2>
        <Accordion
          titleClassName={`py-6 text-lg`}
          items={[
            {
              title: `How long does app development typically take?`,
              content: `Simple Business App: 8-10 weeks. Feature-Rich Business App: 12-16 weeks. Enterprise Mobile Platform: 16-24 weeks. Timeline includes design, development, testing, and app store submission preparation.`,
            },
            {
              title: `Will my app work on both iPhone and Android?`,
              content: `Yes, all our apps are built using cross-platform technology that ensures your app works perfectly on both iOS and Android devices, saving you time and money compared to building separate native apps.`,
            },
            {
              title: `What happens after the app is launched?`,
              content: `We provide post-launch support ranging from 1-6 months depending on your package. This includes bug fixes, minor updates, and guidance on app store optimization. We also offer ongoing maintenance plans.`,
            },
            {
              title: `Can you integrate with our existing business systems?`,
              content: `Absolutely. Our Feature-Rich and Enterprise packages include custom API development to connect your app with existing CRM, inventory, accounting, or other business systems you currently use.`,
            },
            {
              title: `How much does it cost to maintain an app after launch?`,
              content: `Maintenance typically costs 15-20% of the original development cost annually. This covers updates for new OS versions, security patches, minor feature additions, and ongoing support.`,
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
