import Link from "next/link";
import PriceButton from "@/components/price-button";

import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import Accordion from "@/components/accordion";

export const metadata = {
  title: "Website Maintenance Solutions - RAVENCI Solutions",
  description:
    "Updates, security, backups, and optimization in the one maintenance package. Protect your website investment with RAVENCI.",
};

export default function WebMaintenancePage() {
  const features = [
    {
      title: "Digital Insurance",
      description:
        "We keep your website, plugins, and themes updated to ensure compatibility and security",
    },
    {
      title: "Security Monitoring",
      description:
        "Continuous security scans and protection against malware, hacks, and vulnerabilities",
    },
    {
      title: "Performance Checks",
      description:
        "Regular optimization of speed, database, and overall site performance",
    },
    {
      title: "Daily Backups",
      description:
        "Your site is backed up daily with quick restore points if ever needed",
    },
    {
      title: "Uptime Monitoring",
      description:
        "24/7 monitoring ensures your site stays online and performs optimally",
    },
    {
      title: "Technical Support",
      description:
        "Expert support for any issues, changes, or improvements you need",
    },
    {
      title: "Content Updates",
      description:
        "Regular checks of forms, links, and content to ensure everything works correctly",
    },
    {
      title: "Browser Testing",
      description:
        "Regular testing across different browsers and devices to ensure consistent experience",
    },
    {
      title: "Monthly Reports",
      description:
        "Receive monthly maintenance reports outlining the work done and any issues encountered",
    },
  ];

  return (
    <main className={`flex flex-col`}>
      <section
        className={`content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 min-h-[250px] bg-white`}
      >
        <article className={`col-span-12 flex flex-col`}>
          <h1 className={`text-4xl md:text-5xl lg:text-h1 font-medium`}>
            Straight Forward Maintenance
          </h1>
          <h2
            className={`max-w-3xl text-2xl md:text-3xl lg:text-h2 font-light`}
          >
            Protect your website investment
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
            Trusted by over 50 Australian businesses including law firms,
            medical practices and retail stores
          </h3>
          <p
            className={`my-6 font-poppins font-light leading-8 text-ravenci-light-gray`}
          >
            Richard is amazing! He really cares about his work, his customers
            and people in general. The work that he has done for me goes above
            and beyond. Definitely recommend Richard to anyone!
          </p>
          <h3 className={`font-poppins text-2xl font-light text-neutral-100`}>
            <span className={`font-bold`}>Viv</span> Luhrs
          </h3>
        </div>
      </section>

      <div className={`grid grid-cols-1 lg:grid-cols-2 bg-white`}>
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-neutral-200/50`}
        >
          <article className={`max-w-lg`}>
            <h3 className={`mb-8 font-serif text-h3 font-bold`}>
              How We Protect Your Business
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
                Save with Maintenance + Hosting Bundles
              </span>
              <span
                className={`text-sm text-white/60 text-center transition-all duration-300 ease-in-out`}
              >
                Ask us for a tailored quote!
              </span>
            </div>
          </Link>
        </section>
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark`}
        >
          <article className={`max-w-lg`}>
            <h3 className={`font-serif text-h3 font-bold text-white`}>
              Did You Know
            </h3>
            <p className={`my-4 text-neutral-400/90`}>
              Websites face over 40,000 attacks daily and without proper
              maintenance, your website is vulnerable to:
              <ul className={`mt-4 flex flex-col gap-2`}>
                <li>- Security breaches that could be costly to recover</li>
                <li>- Downtime causing loss of sales</li>
                <li>- Slow speeds that drive customers to competitors</li>
                <li>- Outdated plugins creating compatibility issues</li>
              </ul>
            </p>
            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              Why Businesses Choose RAVENCI Over DIY Maintenance:
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              <ul className={`flex flex-col gap-4`}>
                <li className={`flex gap-2`}>
                  <IconCheck
                    size={24}
                    className={`p-1 bg-ravenci-primary rounded-full text-white`}
                  />{" "}
                  Professional monitoring vs hoping nothing breaks
                </li>
                <li className={`flex gap-2`}>
                  <IconCheck
                    size={24}
                    className={`p-1 bg-ravenci-primary rounded-full text-white`}
                  />{" "}
                  2-hour response time vs days of downtime
                </li>
                <li className={`flex gap-2`}>
                  <IconCheck
                    size={24}
                    className={`p-1 bg-ravenci-primary rounded-full text-white`}
                  />{" "}
                  Brisbane-based support vs overseas call centers
                </li>
                <li className={`flex gap-2`}>
                  <IconCheck
                    size={24}
                    className={`p-1 bg-ravenci-primary rounded-full text-white`}
                  />{" "}
                  Proactive updates vs reactive emergency fixes
                </li>
              </ul>
            </p>
            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              Proactive Protection
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              Don't wait for problems to occur. Our maintenance service actively
              monitors your site for security threats, performance issues, and
              needed updates to make sure your website is always available.
            </p>
            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              Comprehensive Care
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              Our ongoing maintenance service ensures your website doesn't fall
              behind. Although we offer one-off maintenance options, we highly
              recommend that you sign up to our ongoing plans instead as it will
              save you time and money in the long run.
            </p>
          </article>

          <PriceButton
            price={195}
            frequency={"mo."}
            fromText={"Starting at"}
            includeFrom={true}
            callToAction={`Protect My Website Now`}
            subCallToAction={`Cheaper than one hour of downtime`}
            link={`/quote?service=monthly-web-maintenance`}
          />

          <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
            <p className="text-sm text-yellow-200">
              ⚡ Limited: We only accept 15 new maintenance subscriptions per
              month to allow for setup and tailored configurations
            </p>
          </div>

          <PriceButton
            price={450}
            frequency={""}
            link={`/quote?service=oneoff-web-maintenance`}
            callToAction={`One-off maintenance`}
            subCallToAction={`Never lose sales to downtime again`}
          />
        </section>
      </div>

      <section
        className={`content-section py-16 px-5 sm:px-20 xl:px-36 bg-ravenci-primary`}
      >
        <article className={`mx-auto max-w-xl`}>
          <p className={`text-center text-neutral-50/70`}>
            Please note:{" "}
            <span className={`text-white`}>As of October, 2024</span>, we no
            longer host websites that are not signed up to reliable ongoing
            maintenance. This does not have to be through RAVENCI, but it must
            be from a reputable provider.
          </p>
        </article>
      </section>

      <section
        className={`content-section py-16 px-6 md:px-10 flex flex-col items-center justify-center gap-3 bg-white`}
      >
        <h2 className={`font-serif text-h3`}>Frequently Asked Questions</h2>
        <Accordion
          titleClassName={`py-6 text-lg`}
          items={[
            {
              title: `Can't I just do this myself?`,
              content: `
You absolutely could, but most business owners don't have 5+ hours monthly for security monitoring, performance optimization, and technical updates. Plus, when something breaks at 2 AM on a weekend, you'll be scrambling to fix it while losing sales. Your time is worth more than $39/hour.
`,
            },
            {
              title: `What if my site goes down?`,
              content: `
We monitor 24/7 and typically restore sites within 2 hours during business hours. Our monitoring catches 95% of issues before they cause downtime. Compare this to DIY maintenance where you might not even know your site is down until a customer tells you.
`,
            },
            {
              title: `Is this really necessary?`,
              content: `
WordPress sites without maintenance are 70% more likely to be hacked. One security breach typically costs $5,000-$15,000 to fix, plus the damage to your reputation. Our maintenance costs less than one emergency website fix per year.
`,
            },
            {
              title: `What makes you different from other providers?`,
              content: `
We're Brisbane-based with local support, not an overseas call center. You get direct access to our team and, if we built your website, you will get direct access to the same developer who built your site. We promise a 2-hour response time during business hours, and proactive monitoring that prevents problems rather than just reacting to them.
`,
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
