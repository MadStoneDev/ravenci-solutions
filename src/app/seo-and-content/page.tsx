import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import PriceButton from "@/components/price-button";
import Accordion from "@/components/accordion";

export const metadata = {
  title: "SEO and Content Services - RAVENCI Solutions",
  description:
    "Professional SEO and copywriting services that drive traffic and convert visitors. Get found by customers and turn them into sales.",
};

export default function SEOContentPage() {
  const features = [
    {
      title: "Keyword Research",
      description:
        "In-depth analysis to find the keywords your customers actually search for",
    },
    {
      title: "On-Page Optimization",
      description:
        "Technical SEO improvements that help search engines understand your content",
    },
    {
      title: "Content Strategy",
      description:
        "Strategic content planning that attracts your ideal customers and builds authority",
    },
    {
      title: "Conversion-Focused Copy",
      description:
        "Persuasive writing that turns website visitors into paying customers",
    },
    {
      title: "Local SEO",
      description:
        "Optimization for local searches to dominate your geographic market",
    },
    {
      title: "Performance Tracking",
      description:
        "Detailed reporting on rankings, traffic, and conversion improvements",
    },
    {
      title: "Competitor Analysis",
      description:
        "Understanding what works in your industry and how to outperform competitors",
    },
    {
      title: "Brand Voice Development",
      description:
        "Consistent messaging that reflects your brand personality and values",
    },
    {
      title: "Long-term Results",
      description:
        "Sustainable strategies that build lasting search engine visibility",
    },
  ];

  const addons = [
    {
      title: "Google Ads Copy",
      description:
        "High-converting ad copy for Google Ads and social media campaigns",
    },
    {
      title: "Email Marketing",
      description:
        "Newsletter content and email automation sequences that sell",
    },
    {
      title: "Social Media Content",
      description: "Engaging posts and captions for all major social platforms",
    },
    {
      title: "Video Script Writing",
      description:
        "Scripts for promotional videos, explainers, and social content",
    },
    {
      title: "Press Release Writing",
      description:
        "Professional press releases for media coverage and backlinks",
    },
    {
      title: "Technical SEO Audit",
      description:
        "Comprehensive technical analysis and optimization recommendations",
    },
    {
      title: "Link Building",
      description:
        "High-quality backlink acquisition from relevant, authoritative sites",
    },
    {
      title: "Content Refresh",
      description:
        "Updating and optimizing existing content for better performance",
    },
    {
      title: "Multilingual SEO",
      description:
        "SEO and content optimization for multiple languages and regions",
    },
    {
      title: "E-commerce SEO",
      description:
        "Specialized optimization for online stores and product pages",
    },
  ];

  return (
    <main className={`flex flex-col`}>
      <section
        className={`content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 min-h-[250px] bg-white`}
      >
        <article className={`col-span-12 flex flex-col`}>
          <h1 className={`text-4xl md:text-5xl lg:text-h1 font-medium`}>
            Get Found. Get Customers!
          </h1>
          <h2
            className={`max-w-4xl text-2xl md:text-3xl lg:text-h2 font-light`}
          >
            SEO and content that drives traffic and converts visitors into
            customers
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
            Trusted by 60+ Australian businesses to dominate search results and
            convert visitors
          </h3>
          <p
            className={`my-6 font-poppins font-light leading-8 text-ravenci-light-gray`}
          >
            "RAVENCI's SEO and content work has been transformational. We went
            from page 3 to ranking #1 for our main keywords. Our organic traffic
            has increased 300% and leads have tripled. Best ROI of any marketing
            we've done."
          </p>
          <h3 className={`font-poppins text-2xl font-light text-neutral-100`}>
            <span className={`font-bold`}>Lisa</span> Parker, Marketing Manager
          </h3>
        </div>
      </section>

      <div className={`grid grid-cols-1 lg:grid-cols-2 bg-white`}>
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 space-y-14 bg-neutral-200/50`}
        >
          <article className={`max-w-lg`}>
            <h3 className={`mb-8 font-serif text-h3 font-bold`}>
              What's Included with Every Project
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
              Tired of Being Invisible Online?
            </h3>
            <p className={`my-4 text-neutral-400/90`}>
              Stop losing customers to competitors because of:
              <ul className={`mt-4 flex flex-col gap-2`}>
                <li>- Website traffic that never converts to sales</li>
                <li>- Being buried on page 2+ of Google search results</li>
                <li>- Content that reads like it was written by robots</li>
                <li>- SEO agencies that promise results but deliver reports</li>
                <li>- Marketing copy that fails to persuade and convert</li>
              </ul>
            </p>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              Why Choose RAVENCI for SEO and Content?
            </h3>
            <ul className={`flex flex-col gap-4 mb-6 text-neutral-400/90`}>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Results-focused approach vs vanity metrics and reports
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Australian market expertise vs generic global strategies
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Conversion-focused content vs keyword-stuffed articles
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white`}
                />
                Long-term partnership vs one-off projects
              </li>
            </ul>
            <p className={`mb-4 text-neutral-400/90`}>
              Great SEO and content work together to not just drive traffic, but
              to attract the right customers and convert them into sales. It's
              about being found by people ready to buy.
            </p>
            <p className={`mb-4 text-neutral-400/90`}>
              We offer four specialized packages designed for different business
              goals and budgets.
            </p>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              1. SEO Foundation
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              Perfect for businesses starting their SEO journey or needing to
              fix fundamental issues. Get the technical groundwork and initial
              content needed to start ranking in search results.
            </p>
            <div className={`mb-16 text-white`}>
              <Accordion
                titleClassName={`py-3 px-3 mb-2 text-lg bg-white text-neutral-900`}
                items={[
                  {
                    title: `What's Included`,
                    content: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Comprehensive SEO audit and analysis</li>
    <li>Keyword research (50+ target keywords)</li>
    <li>On-page optimization for 10-15 pages</li>
    <li>Technical SEO fixes and improvements</li>
    <li>Google Business Profile optimization</li>
    <li>Basic local SEO setup</li>
    <li>Meta titles and descriptions for all pages</li>
    <li>Internal linking strategy</li>
    <li>Google Analytics and Search Console setup</li>
    <li>Content optimization recommendations</li>
    <li>Monthly ranking and traffic reports</li>
    <li>3 months of monitoring and adjustments</li>
    <li>SEO strategy document</li>
    <li>6-8 weeks initial delivery</li>
</ul>
`,
                  },
                ]}
              />
              <PriceButton
                price={2490}
                link={`/quote?service=seo-foundation`}
                frequency={""}
                includeFrom={true}
                callToAction={`SEO Foundation`}
                subCallToAction={`Start ranking and getting found`}
              />

              <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
                <p className="text-sm text-yellow-200">
                  ⚡ Limited: We only take on 10 SEO Foundation projects per
                  quarter
                </p>
              </div>
            </div>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              2. Content Marketing Package
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              For businesses ready to dominate their market with high-quality
              content that ranks well and converts visitors. Includes
              comprehensive content creation and ongoing SEO optimization.
            </p>

            <div className={`mb-16 text-white`}>
              <Accordion
                titleClassName={`py-3 px-3 mb-2 text-lg bg-white text-neutral-900`}
                items={[
                  {
                    title: `What's Included`,
                    content: `
<p class="mt-3 text-neutral-100">SEO & Strategy</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Advanced keyword research (100+ keywords)</li>
    <li>Competitor content analysis</li>
    <li>Content strategy and editorial calendar</li>
    <li>On-page optimization for 20+ pages</li>
    <li>Technical SEO improvements</li>
    <li>Local SEO optimization</li>
    <li>Schema markup implementation</li>
</ul>
<p class="mt-5 text-neutral-100">Content Creation</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>8 high-quality blog posts/articles per month</li>
    <li>Website copy optimization (10-15 pages)</li>
    <li>Service/product page copywriting</li>
    <li>Landing page copy for key campaigns</li>
    <li>FAQ and about page content</li>
    <li>Call-to-action optimization</li>
</ul>
<p class="mt-5 text-neutral-100">Ongoing Optimization</p>
<ul class="mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Monthly performance analysis and reporting</li>
    <li>Content performance optimization</li>
    <li>Keyword ranking monitoring</li>
    <li>Conversion rate tracking and improvement</li>
    <li>6 months of ongoing optimization</li>
    <li>Monthly strategy calls</li>
    <li>Content refresh and updates</li>
    <li>Team training on content best practices</li>
</ul>
`,
                  },
                ]}
              />

              <PriceButton
                price={4980}
                link={`/quote?service=content-marketing`}
                frequency={"mo."}
                includeFrom={true}
                callToAction={`Content Marketing Package`}
                subCallToAction={`Dominate search results and convert traffic`}
              />

              <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
                <p className="text-sm text-yellow-200">
                  ⚡ Limited: We only take on 5 Content Marketing clients per
                  quarter
                </p>
              </div>
            </div>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              3. Enterprise SEO & Content
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              The ultimate solution for businesses serious about dominating
              their industry online. Comprehensive SEO, content marketing, and
              conversion optimization that positions you as the market leader.
            </p>

            <div className={`mb-16 text-white`}>
              <Accordion
                titleClassName={`py-3 px-3 mb-2 text-lg bg-white text-neutral-900`}
                items={[
                  {
                    title: `What's Included`,
                    content: `
<p class="mt-3 text-neutral-100">Advanced SEO & Technical</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Enterprise-level SEO audit and strategy</li>
    <li>Advanced keyword research (500+ keywords)</li>
    <li>Technical SEO overhaul</li>
    <li>Site architecture optimization</li>
    <li>Advanced local and national SEO</li>
    <li>Link building and PR outreach</li>
    <li>Conversion rate optimization</li>
    <li>Advanced tracking and analytics setup</li>
</ul>
<p class="mt-5 text-neutral-100">Comprehensive Content</p>
<ul class="list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>12 high-quality articles/posts per month</li>
    <li>Complete website copywriting overhaul</li>
    <li>Sales page and landing page copy</li>
    <li>Email marketing content and sequences</li>
    <li>Case studies and success stories</li>
    <li>White papers and industry guides</li>
    <li>Video scripts and multimedia content</li>
    <li>Social media content strategy</li>
</ul>
<p class="mt-5 text-neutral-100">Strategic Partnership</p>
<ul class="mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Dedicated account manager</li>
    <li>Monthly strategy sessions</li>
    <li>Quarterly business reviews</li>
    <li>Advanced reporting and insights</li>
    <li>Competitor monitoring and analysis</li>
    <li>Brand voice development and guidelines</li>
    <li>Team training and workshops</li>
    <li>12 months of optimization and growth</li>
    <li>Priority support and consultation</li>
</ul>
`,
                  },
                ]}
              />

              <PriceButton
                price={8950}
                link={`/quote?service=enterprise-seo`}
                frequency={"mo."}
                includeFrom={true}
                callToAction={`Enterprise SEO & Content`}
                subCallToAction={`Become the dominant authority in your industry`}
              />

              <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
                <p className="text-sm text-yellow-200">
                  ⚡ Exclusive: We only take on 3 Enterprise SEO clients per
                  quarter
                </p>
              </div>
            </div>

            <h3 className={`mt-8 mb-4 font-serif text-h3 font-bold text-white`}>
              4. Copywriting Only
            </h3>
            <p className={`mb-4 text-neutral-400/90`}>
              For businesses that need high-converting copy without the full SEO
              package. Perfect for sales pages, marketing materials, and website
              content that persuades and converts.
            </p>

            <div className={`mb-16 text-white`}>
              <Accordion
                titleClassName={`py-3 px-3 mb-2 text-lg bg-white text-neutral-900`}
                items={[
                  {
                    title: `What's Included`,
                    content: `
<ul class="pt-3 mb-1 list-disc list-inside indent-3 text-neutral-400/90 space-y-1.5">
    <li>Target audience and messaging research</li>
    <li>Brand voice and tone development</li>
    <li>Complete website copywriting (up to 15 pages)</li>
    <li>Sales page or landing page copy</li>
    <li>Service/product descriptions</li>
    <li>About page and company story</li>
    <li>Call-to-action optimization</li>
    <li>Email sequences (welcome, nurture, sales)</li>
    <li>Marketing brochure or flyer copy</li>
    <li>Social media bio and descriptions</li>
    <li>2 rounds of revisions</li>
    <li>Conversion optimization recommendations</li>
    <li>Style guide for future content</li>
    <li>4-6 weeks delivery</li>
</ul>
`,
                  },
                ]}
              />

              <PriceButton
                price={3480}
                link={`/quote?service=copywriting-only`}
                frequency={""}
                includeFrom={true}
                callToAction={`Copywriting Only`}
                subCallToAction={`Words that sell and convert`}
              />

              <div className="mt-4 p-3 bg-yellow-100/10 border border-yellow-300/20 rounded-lg">
                <p className="text-sm text-yellow-200">
                  ⚡ Limited: We only take on 8 Copywriting projects per quarter
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
          SEO & Content Questions Answered
        </h2>
        <Accordion
          titleClassName={`py-6 text-lg`}
          items={[
            {
              title: `How long does it take to see SEO results?`,
              content: `Most businesses start seeing improvements in 3-6 months, with significant results typically occurring within 6-12 months. SEO is a long-term strategy that builds momentum over time, but the results are sustainable and compound.`,
            },
            {
              title: `Do you guarantee specific rankings or traffic increases?`,
              content: `While we can't guarantee specific rankings (no ethical SEO company can), we do guarantee measurable improvements in search visibility, traffic quality, and conversion rates based on our proven strategies and track record.`,
            },
            {
              title: `Can you work with our existing marketing team?`,
              content: `Absolutely. We collaborate seamlessly with in-house teams, providing training, guidelines, and ongoing support. We can work as an extension of your team or provide strategic oversight for your marketing efforts.`,
            },
            {
              title: `What industries do you specialize in?`,
              content: `We work with businesses across all industries, with particular expertise in professional services, healthcare, retail, and B2B companies. Our strategies are customized for your specific industry and target audience.`,
            },
            {
              title: `How do you measure success and ROI?`,
              content: `We track meaningful metrics including organic traffic growth, keyword rankings, conversion rates, and ultimately, revenue generated from organic search. You'll receive detailed monthly reports showing your return on investment.`,
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
