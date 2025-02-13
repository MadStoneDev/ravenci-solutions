import { IconCircleCheckFilled } from "@tabler/icons-react";
import PriceButton from "@/components/price-button";
import Link from "next/link";

export const metadata = {
  title: "Website Maintenance Solutions - RAVENCI Solutions",
  description:
    "Updates, security, backups, and optimization in the one maintenance package. Keep your website running smoothly" +
    " with RAVENCI.",
};

export default function WebMaintenancePage() {
  const features = [
    {
      title: "Regular Updates",
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
            Keep your website running smoothly
          </h2>
        </article>
      </section>

      <div className={`grid grid-cols-1 lg:grid-cols-2 bg-white`}>
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-neutral-200/50`}
        >
          <article className={`max-w-lg`}>
            <h3 className={`mb-8 font-serif text-h3 font-bold`}>
              What's Included with Maintenance
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
            <p className={`mb-4 text-neutral-400/90`}>
              With spam and malware getting worse year after year, your website
              needs regular care and attention to stay secure and perform at its
              best.
            </p>
            <p className={`mb-4 text-neutral-400/90`}>
              That's where we come in. From updates, security, and performance,
              we can handle everything to make sure your website performing
              optimally.
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
            price={169}
            frequency={"mo."}
            includeFrom={false}
            callToAction={`Keep your site healthy`}
            subCallToAction={`Sign Up Now`}
          />

          <PriceButton
            price={450}
            frequency={""}
            includeFrom={false}
            callToAction={`One-off maintenance`}
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
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 grid grid-cols-5 gap-10 min-h-[150px] bg-white`}
      ></section>
    </main>
  );
}
