import { IconCircleCheckFilled } from "@tabler/icons-react";
import PriceButton from "@/components/price-button";

export default function WebHostingPage() {
  const features = [
    {
      title: "Cloud Hosting",
      description:
        "We serve your website to your visitors from a server closest to them",
    },
    {
      title: "Fully Managed",
      description:
        "We manage your site for you from migration to launch and ongoing support",
    },
    {
      title: "Performance Optimization",
      description:
        "Your site is configured for optimal speed and growth potential",
    },
    {
      title: "Built-in Caching",
      description: "Integrated caching for faster loading times",
    },
    {
      title: "SSL Certificate",
      description: "Keep your site secure and maintain visitor trust",
    },
    {
      title: "Extra Protection",
      description:
        "Ironclad security protecting your site from hacking & unwanted disruptions",
    },
    {
      title: "24/7 Monitoring",
      description: "Continuous monitoring for uptime and performance",
    },
    {
      title: "Automatic Scaling",
      description: "Resources automatically adjust based on your site's needs",
    },
    {
      title: "Daily Backups",
      description:
        "Your site is automatically backed up every day, ensuring your content is always safe",
    },
  ];

  return (
    <main className={`flex flex-col`}>
      <section
        className={`content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 min-h-[250px] bg-white`}
      >
        <article className={`col-span-12 flex flex-col`}>
          <h1 className={`text-4xl md:text-5xl lg:text-h1 font-medium`}>
            Host With Us!
          </h1>
          <h2
            className={`max-w-3xl text-2xl md:text-3xl lg:text-h2 font-light`}
          >
            Modern web hosting that grows with you
          </h2>
        </article>
      </section>

      <div className={`grid grid-cols-1 lg:grid-cols-2 bg-white`}>
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-neutral-200/50`}
        >
          <article className={`max-w-lg`}>
            <h3 className={`mb-8 font-serif text-h3 font-bold`}>
              What's Included with Every Hosting
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
            <p className={`mb-4 text-neutral-400/90`}>
              We believe website hosting shouldn't be complicated. That's it.
              That's our policy.
            </p>
            <p className={`mb-4 text-neutral-400/90`}>
              Instead of asking you to choose between confusing technical
              packages, we provide exactly what your website needs to perform at
              its best. Best bit? Your hosting scales naturally with your
              traffic and performance needs.
            </p>
            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              Cloud-Powered Performance
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              Your website is hosted on advanced cloud infrastructure, meaning
              it's served from multiple locations worldwide. When someone visits
              your site, they connect to the server nearest to them – whether
              they're in London, Tokyo, or Sydney. This means faster loading
              times and a better experience for all your visitors.
            </p>
            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              Fair, Simple Pricing
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              Instead of complex tiers, our hosting scales naturally with your
              website's needs. We start with generous resources that work for
              most businesses, and as your site grows, your hosting grows with
              it – no complicated decisions required. You'll never pay for
              resources you don't need, and we'll proactively let you know if we
              spot opportunities to optimize your site's performance.
            </p>
          </article>

          <PriceButton price={29} frequency={"mo."} />
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
