import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import PriceButton from "@/components/price-button";
import Accordion from "@/components/accordion";

export const metadata = {
  title: "Website Hosting Solutions - RAVENCI Solutions",
  description:
    "Lightning-fast cloud hosting with servers worldwide. Serve your website to visitors everywhere, backed by 24/7 monitoring and ironclad security.",
};

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
            Eleven out of ten for an amazing service! Richard goes above and
            beyond to ensure all the i's are dotted and t's are crossed.
          </p>
          <p
            className={`my-6 font-poppins font-light leading-8 text-ravenci-light-gray`}
          >
            I highly recommend Richard to any business looking for a website or
            a designer looking to partner with a highly-skilled and experienced
            developer. You will be in good hands!
          </p>
          <h3 className={`font-poppins text-2xl font-light text-neutral-100`}>
            <span className={`font-bold`}>Danni</span> Green
          </h3>
        </div>
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
            <h3 className={`font-serif text-h3 font-bold text-white`}>
              Tired of Hosting Headaches?
            </h3>
            <p className={`my-4 text-neutral-400/90`}>Stop dealing with:</p>
            <ul className={`flex flex-col gap-2 mt-2 text-neutral-400/90`}>
              <li>- Websites that crash during high traffic</li>
              <li>- Slow loading times that lose customers</li>
              <li>- Complex hosting panels you can't understand</li>
              <li>- Surprise overage charges and hidden fees</li>
              <li>- Offshore support that can't relate to you</li>
            </ul>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              Why Choose RAVENCI Over Other Hosts?
            </h3>
            <ul className={`flex flex-col gap-4 mb-6 text-neutral-400/90`}>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Brisbane-based support vs offshore call centers
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                All-inclusive pricing vs hidden fees and charges
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Automatic scaling vs manual upgrades
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Built for business vs hobby-focused hosting
              </li>
            </ul>
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

          <PriceButton
            price={29}
            frequency={"mo."}
            link={`/quote?service=web-hosting`}
            callToAction={`All-in-One Hosting`}
            subCallToAction={`Stay secure. Stay performant. Stay online.`}
          />

          <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
            <p className="text-sm text-yellow-200">
              ⚡ Limited: We only accept 15 new hosting clients per month to
              allow for smooth migrations and ensure our high service standards
            </p>
          </div>
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
              title: `How is this different from cheap hosting like Bluehost?`,
              content: `Our hosting uses enterprise-grade cloud infrastructure with automatic scaling, not overcrowded shared servers. You get dedicated resources, Brisbane-based support, and performance optimization that cheap hosts can't match. Plus everything is included - SSL, backups, security - no extra charges.`,
            },
            {
              title: `What if my traffic suddenly spikes?`,
              content: `Our cloud hosting automatically scales to handle traffic spikes without your site crashing. Our servers grow with your traffic so you never have to worry about any downtime. Compare this to shared hosting where traffic spikes can take your site offline.`,
            },
            {
              title: `Do you migrate my existing website?`,
              content: `Yes, we handle the complete migration from your current host though extra charges may apply. Your site will be faster and more secure from day one, and we'll make sure nothing breaks in the process.`,
            },
            {
              title: `What's included in the $29/month price?`,
              content: `Everything: cloud hosting, SSL certificate, daily backups, security monitoring, automatic scaling, and Brisbane-based support. No hidden fees, no surprise charges, no complex add-ons to buy.`,
            },
            {
              title: `Can I host my website elsewhere and still get your other services?`,
              content: `While we prefer to host sites we maintain to guarantee optimal performance and security, we can work with other quality hosts. However, our hosting + maintenance bundles offer the best value and performance since everything is optimized to work together.`,
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
