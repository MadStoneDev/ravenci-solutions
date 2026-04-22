import type { Metadata } from "next";
import Link from "next/link";

import { IconCheck, IconAlertCircle } from "@tabler/icons-react";

import Accordion from "@/components/accordion";
import Breadcrumbs from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title:
    "How Much Does a Website Cost in Brisbane in 2026? | RAVENCI Solutions",
  description:
    "Brisbane website costs in 2026 typically range from $1,500 (template) to $25,000+ (custom premium). Real pricing per tier, what affects cost, and the hidden ongoing fees most agencies don't mention.",
  openGraph: {
    title: "How Much Does a Website Cost in Brisbane in 2026?",
    description:
      "Real Brisbane website pricing for 2026 — from template builds to premium custom Next.js. What's included, what affects cost, and the hidden fees.",
    type: "article",
  },
  alternates: { canonical: "/cost-of-a-website-in-brisbane" },
};

const headlineStats = [
  {
    stat: "$1,500",
    label: "Cheapest realistic Brisbane website (template-based, agency-built)",
  },
  {
    stat: "$7,500",
    label: "Typical mid-market custom website for a small Australian business",
  },
  {
    stat: "$15k+",
    label: "Premium custom Next.js or branded build for established businesses",
  },
];

const pricingTiers = [
  {
    tier: "DIY Builders",
    price: "$0 – $50/mo",
    annual: "≈ $360 – $600/yr",
    timeline: "Weekend",
    bestFor:
      "Hobby sites, personal portfolios, ultra-early-stage testing of an idea",
    whatYouGet: [
      "Wix, Squarespace, GoDaddy, Webflow templates",
      "Drag-and-drop editor, no developer needed",
      "Generic templates and stock imagery",
      "Limited SEO control, locked into platform",
    ],
    hiddenCosts: [
      "Premium templates ($60 – $300)",
      "Plugin/app subscriptions ($10 – $50/mo each)",
      "Custom domain (~$20/yr)",
      "Time cost — typically 30–60 hours of your time",
    ],
    severity: "low",
  },
  {
    tier: "Template-Based Agency",
    price: "$1,500 – $5,000",
    annual: "Plus $300 – $600/yr",
    timeline: "1 – 4 weeks",
    bestFor:
      "Sole traders, micro-businesses, tradies who need a presence fast",
    whatYouGet: [
      "Pre-made theme customised with your branding",
      "5 – 10 pages of standard content",
      "Basic on-page SEO setup",
      "Mobile-responsive design",
    ],
    hiddenCosts: [
      "Theme licence renewals ($60 – $200/yr)",
      "Premium plugins ($300 – $800/yr)",
      "Stock photography ($150 – $500)",
      "Customisation requests post-launch",
    ],
    severity: "low",
  },
  {
    tier: "Standard Small Business",
    price: "$5,000 – $10,000",
    annual: "Plus $300 – $600/yr",
    timeline: "4 – 8 weeks",
    bestFor:
      "Established small businesses, professional services, growing brands",
    whatYouGet: [
      "Custom design (not a template)",
      "Built on WordPress, Shopify, or similar CMS",
      "10 – 20 pages with strategic content structure",
      "Proper SEO foundations (schema, meta, sitemap)",
      "Contact forms, basic integrations (Mailchimp, Calendly)",
    ],
    hiddenCosts: [
      "Premium theme/plugin licences",
      "Copywriting if not provided ($200 – $500/page)",
      "Professional photography ($800 – $2,500)",
      "Ongoing maintenance plan ($200 – $400/mo)",
    ],
    severity: "medium",
  },
  {
    tier: "Custom Premium Build",
    price: "$10,000 – $25,000",
    annual: "Plus $400 – $800/yr",
    timeline: "8 – 14 weeks",
    bestFor:
      "Established businesses ready to invest in performance, brand and conversions",
    whatYouGet: [
      "Custom Next.js, headless CMS, or premium WordPress build",
      "Editorial-grade design, motion, and copywriting",
      "85+ PageSpeed scores, sub-2s load times",
      "Comprehensive SEO + structured data + AEO setup",
      "CRM, booking, and payment integrations",
      "Bespoke imagery and brand alignment",
    ],
    hiddenCosts: [
      "Brand identity work if needed ($2,500 – $7,500)",
      "Custom photography or illustration",
      "Ongoing maintenance + hosting ($300 – $600/mo)",
      "Future feature additions",
    ],
    severity: "premium",
  },
  {
    tier: "Enterprise & Web Apps",
    price: "$25,000 – $100,000+",
    annual: "Custom infrastructure",
    timeline: "12 weeks – 6+ months",
    bestFor:
      "Mid-to-large businesses, multi-brand portfolios, custom platforms, web applications",
    whatYouGet: [
      "Full discovery, UX research, prototyping",
      "Custom application development (web or mobile)",
      "Enterprise CMS, multi-region hosting, advanced analytics",
      "Compliance work (privacy, accessibility, industry-specific)",
      "Dedicated project team",
    ],
    hiddenCosts: [
      "Cloud infrastructure ($200 – $2,000/mo+)",
      "Third-party API costs",
      "Ongoing development retainer",
      "Compliance audits and reviews",
    ],
    severity: "premium",
  },
];

const costFactors = [
  {
    factor: "Number of pages",
    detail:
      "More pages mean more design, copy, and QA work. A 5-page site can cost half what a 20-page site costs.",
  },
  {
    factor: "Custom vs template design",
    detail:
      "A bespoke design easily doubles the cost of a template build. The trade-off: it's distinctive, faster to load, and easier to evolve.",
  },
  {
    factor: "E-commerce functionality",
    detail:
      "Selling products adds payment integration, inventory, shipping logic, and tax handling. Expect $3,000+ on top of a content site for basic e-commerce, $10,000+ for complex catalogues.",
  },
  {
    factor: "Third-party integrations",
    detail:
      "CRM (HubSpot, Pipedrive), booking systems (Calendly, Cliniko), email (Mailchimp, Klaviyo), and payment platforms each add setup time. Allow $300 – $1,500 per integration.",
  },
  {
    factor: "Content readiness",
    detail:
      "If you supply finalised copy and imagery, you save thousands. Professional copywriting runs $200 – $500 per page. Photography $800 – $2,500 per shoot.",
  },
  {
    factor: "Animation, motion and interactions",
    detail:
      "Scroll-triggered animations, kinetic typography and 3D elements add 20 – 40% to design budgets but lift perceived value substantially.",
  },
  {
    factor: "SEO and structured data setup",
    detail:
      "A site built without proper SEO foundations costs $2,000 – $5,000 to retrofit. Done at build, it's hours not weeks.",
  },
  {
    factor: "Migration from an existing site",
    detail:
      "Moving 50+ pages of content, redirecting old URLs, and preserving SEO authority typically adds $1,500 – $5,000 to a project.",
  },
  {
    factor: "Timeline pressure",
    detail:
      "Rush projects (under 3 weeks) often carry a 20 – 30% premium. Standard 6 – 8 week timelines run cleanest.",
  },
];

const ongoingCosts = [
  {
    item: "Hosting",
    range: "$30 – $50/mo",
    note: "Managed hosting with SSL, backups, and Australian-based support. Cheaper shared hosting exists ($5 – $15/mo) but performs poorly.",
  },
  {
    item: "Maintenance plan",
    range: "$200 – $500/mo",
    note: "Updates, security patches, content edits, performance monitoring. Without this, sites drift into vulnerability and bitrot within 6 – 12 months.",
  },
  {
    item: "Domain renewal",
    range: "$15 – $50/yr",
    note: ".com.au domains, registered through reputable Australian registrars.",
  },
  {
    item: "SSL certificate",
    range: "Free – $200/yr",
    note: "Most hosts now bundle Let's Encrypt SSL free. Premium SSL only needed for specific compliance scenarios.",
  },
  {
    item: "Premium WordPress plugins",
    range: "$300 – $800/yr",
    note: "If your build uses WordPress with paid plugins (forms, SEO, security, page builder), licence renewals stack up.",
  },
  {
    item: "Email marketing platform",
    range: "$0 – $300+/mo",
    note: "Mailchimp, Klaviyo, ActiveCampaign — pricing scales with subscriber count.",
  },
];

const faqItems = [
  {
    title: "How much does a basic website cost in Brisbane?",
    summary:
      "A basic small-business website built by a Brisbane agency typically costs $1,500 to $5,000 for a template-based build, or $5,000 to $10,000 for a properly customised CMS build with strategic SEO and integrations.",
    content:
      "A basic small-business website built by a Brisbane agency typically costs $1,500 to $5,000 for a template-based build, or $5,000 to $10,000 for a properly customised build on WordPress, Shopify, or a similar CMS. The lower end gets you a functional site with stock components. The higher end gets you a strategic build with proper SEO foundations, real custom design, and integrations that actually work for your business. Sites built by genuine specialists rather than generalist freelancers tend to sit at $7,500 and up — the saving on the cheaper end is usually paid back in lost SEO, bad performance, or rebuild costs within 18 months.",
  },
  {
    title: "Is it cheaper to use Wix or hire a developer?",
    summary:
      "Wix or Squarespace looks cheaper upfront ($30/mo) but typically costs you 30 – 60 hours of your own time and limits future SEO, performance, and customisation. For most businesses, an agency-built site recovers the cost difference within 12 months through better conversions and time saved.",
    content:
      "Wix, Squarespace, and similar DIY platforms appear cheaper upfront — typically $20 to $50 per month plus your own time. The real cost is in the 30 to 60 hours you'll spend learning the platform and building the site yourself, plus the long-term ceiling on SEO, performance, and customisation. For a one-person hobby or testing an idea, DIY is fine. For a business that wants the website to actually generate leads, an agency-built site usually recovers the price difference within 12 months through better conversions, faster load times, and time you didn't spend fighting templates. Search engines also tend to rank custom-built sites higher than generic templates.",
  },
  {
    title: "Why do website costs vary so much in Brisbane?",
    summary:
      "Costs vary because 'a website' covers everything from a $50/mo Wix template to a $50,000 custom platform. The four biggest cost drivers are: custom vs template design, number of pages, integrations needed, and whether you supply finalised content or need it written.",
    content:
      "Costs vary because 'a website' covers an enormous range — from a $50/month Wix template to a $50,000 custom platform with payments, bookings, and CRM integration. The four biggest variables are custom versus template design, the number of pages, the integrations required (CRM, booking, payments, email), and whether you supply finalised content and imagery or need them produced from scratch. Two quotes that look identical on paper can differ by $5,000 because one includes copywriting, photography, and three integrations while the other expects you to provide all of that yourself.",
  },
  {
    title: "Are there hidden costs after the website launches?",
    summary:
      "Yes — most websites have ongoing costs of $300 – $800/month covering hosting, maintenance, plugin renewals, domain registration, and email marketing platforms. Reputable agencies disclose these upfront. Cheap quotes often don't.",
    content:
      "Yes. Most websites carry ongoing costs of $300 to $800 per month covering hosting ($30 – $50/mo), a maintenance plan ($200 – $500/mo for updates and security), domain renewal ($15 – $50/yr), premium plugin licences if applicable ($300 – $800/yr), and any email marketing platform you use. Reputable agencies disclose all of these upfront in proposals. Cheap quotes often hide them — a $2,000 build that needs $400/month to keep running costs $6,800 in year one, not $2,000. Always ask for a 12-month total cost of ownership figure when comparing quotes.",
  },
  {
    title: "How long does it take to build a Brisbane website?",
    summary:
      "Template builds: 1 – 4 weeks. Standard small business sites: 4 – 8 weeks. Custom premium builds: 8 – 14 weeks. Web apps and large platforms: 12 weeks to 6 months. Rush jobs typically add a 20 – 30% premium.",
    content:
      "Timelines depend on scope. Template-based builds take 1 to 4 weeks. Standard small business sites with custom design and a CMS run 4 to 8 weeks. Custom premium builds with bespoke design, motion, and integrations take 8 to 14 weeks. Web apps and larger platforms run 12 weeks to 6 months. The biggest delays are rarely on the build side — they're usually content readiness (waiting on copy or imagery) and stakeholder review cycles. Rush projects under 3 weeks typically carry a 20 to 30% premium and reduce design quality, so plan ahead where possible.",
  },
  {
    title: "Do I need to pay for hosting separately?",
    summary:
      "Yes — hosting is almost always billed separately and ongoing. Expect $30 – $50/month for managed Australian hosting. Some agencies (RAVENCI included) bundle hosting with maintenance for a small discount.",
    content:
      "Yes. Hosting is almost always a separate, ongoing cost rather than a one-off fee. Managed hosting on Australian or Australia-region infrastructure runs around $30 to $50 per month for a typical small business site. Cheaper offshore shared hosting exists ($5 to $15/month) but performs noticeably worse and creates support headaches. Many Brisbane agencies (RAVENCI included) bundle hosting with a maintenance plan for a small discount, which is usually the cleanest way to budget — one monthly invoice covers everything.",
  },
  {
    title: "What should be included in a Brisbane website quote?",
    summary:
      "A proper quote should specify: number of pages, design scope (custom vs template), CMS/platform, integrations included, content responsibilities, SEO setup, hosting and maintenance terms, revision rounds, timeline, and ongoing costs.",
    content:
      "A reputable Brisbane web agency quote should specify the number of pages, the design scope (custom or template), the CMS or platform being used, every integration included by name, who's responsible for content (writing, photography, video), the SEO setup included, hosting and maintenance terms after launch, the number of revision rounds covered, the timeline, and the realistic 12-month total cost of ownership. If a quote is a single-line item with no breakdown, ask for one. Vague quotes are how scope creep starts and how clients end up surprised by invoices three months in.",
  },
  {
    title: "How do I budget for a website project?",
    summary:
      "Add 15 – 20% to the quoted build price for content production, copywriting, and photography. Add 12 months of hosting and maintenance to get the true year-one cost. Hold back a 10% contingency for changes during build.",
    content:
      "Three rules of thumb for accurate budgeting. First, add 15 to 20% to the quoted build price to cover content production — copywriting, photography, video, and stock assets. Most build quotes assume you supply this. Second, add 12 months of hosting and maintenance ($300 to $600/month for a typical small business site) to get the true year-one cost. Third, hold back a 10% contingency for in-flight changes — every project surfaces things you didn't think of in the brief. A $10,000 build typically becomes a $14,000 to $16,000 first-year investment when content, hosting, maintenance, and contingency are factored in. Better to know that upfront than to discover it in month three.",
  },
];

export default function BrisbaneWebsiteCostPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 bg-white">
        <article className="max-w-3xl flex flex-col gap-2">
          <Breadcrumbs items={[{ label: "Cost of a Website in Brisbane" }]} />
          <span className="mt-2 text-xs font-medium tracking-wider uppercase text-ravenci-primary">
            Brisbane Website Pricing — 2026
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-h1 font-medium">
            How Much Does a Website Cost in Brisbane in 2026?
          </h1>
          <h2 className="max-w-2xl text-2xl md:text-3xl lg:text-h2 font-light">
            Real pricing for every tier — and the hidden ongoing fees most
            agencies don&apos;t mention
          </h2>
          <p className="mt-6 max-w-2xl text-neutral-500/80">
            A custom website in Brisbane typically costs between{" "}
            <strong className="text-ravenci-dark">$1,500 and $25,000</strong> in
            2026 depending on complexity. Template-based agency builds start
            around $1,500. Standard small business sites run $5,000 – $10,000.
            Custom Next.js or premium branded builds reach $15,000 – $25,000+.
            Hosting and maintenance add $300 – $600 per month. This guide breaks
            down what you actually get at each price point, what affects the
            quote, and the ongoing costs nobody mentions in the proposal.
          </p>
        </article>
      </section>

      {/* Headline numbers */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-ravenci-dark text-white">
        <h3 className="mb-10 font-serif text-h3 font-bold">
          Brisbane Website Costs at a Glance
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {headlineStats.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white/5 border border-white/10 rounded-lg"
            >
              <p className="text-4xl md:text-5xl font-bold text-ravenci-primary mb-3">
                {item.stat}
              </p>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-neutral-400 max-w-2xl">
          Pricing reflects 2026 Brisbane market rates for agency-built websites.
          DIY platforms (Wix, Squarespace) sit below this range. Enterprise web
          applications sit well above.
        </p>
      </section>

      {/* Pricing tiers */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-neutral-200/50">
        <h3 className="mb-4 font-serif text-h3 font-bold">
          The Five Pricing Tiers, Honestly Compared
        </h3>
        <p className="mb-10 max-w-2xl text-neutral-500/80">
          Most Brisbane websites fall into one of five tiers. Here&apos;s
          what&apos;s included at each price point, what&apos;s typically
          missing, and the ongoing costs to factor in.
        </p>
        <div className="space-y-6">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-white rounded-lg border border-neutral-200"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 pb-6 border-b border-neutral-200">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-ravenci-dark mb-1">
                    {tier.tier}
                  </h4>
                  <p className="text-sm text-neutral-500">
                    Best for: {tier.bestFor}
                  </p>
                </div>
                <div className="md:text-right">
                  <p
                    className={`text-2xl md:text-3xl font-bold ${
                      tier.severity === "premium"
                        ? "text-ravenci-primary"
                        : "text-ravenci-dark"
                    }`}
                  >
                    {tier.price}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    {tier.annual} · Build time: {tier.timeline}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="mb-3 text-sm font-bold text-ravenci-dark">
                    What you get:
                  </p>
                  <ul className="space-y-2">
                    {tier.whatYouGet.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <IconCheck
                          size={18}
                          className="p-0.5 bg-ravenci-primary rounded-full text-white flex-shrink-0 mt-0.5"
                        />
                        <span className="text-neutral-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3 text-sm font-bold text-ravenci-dark">
                    Watch out for:
                  </p>
                  <ul className="space-y-2">
                    {tier.hiddenCosts.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <IconAlertCircle
                          size={18}
                          className="text-yellow-600 flex-shrink-0 mt-0.5"
                        />
                        <span className="text-neutral-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What affects cost */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-white">
        <h3 className="mb-4 font-serif text-h3 font-bold">
          The Nine Factors That Affect a Brisbane Website Quote
        </h3>
        <p className="mb-10 max-w-2xl text-neutral-500/80">
          Two quotes for the same business can differ by $5,000 or more.
          Here&apos;s why — and what to ask about when comparing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {costFactors.map((factor, index) => (
            <div
              key={index}
              className="p-6 bg-neutral-100/60 rounded-lg border border-neutral-200/70"
            >
              <h4 className="mb-2 font-bold text-ravenci-dark">
                {factor.factor}
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {factor.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Hidden ongoing costs */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-ravenci-primary text-white">
        <div className="max-w-4xl">
          <h3 className="mb-4 font-serif text-h3 font-bold">
            The Ongoing Costs Nobody Mentions in the Proposal
          </h3>
          <p className="mb-10 text-white/85 max-w-2xl leading-relaxed">
            Most build quotes describe the one-off project cost. The 12-month
            total cost of ownership is usually 1.5 to 2 times higher once you
            factor in hosting, maintenance, plugins, and platforms. Here&apos;s
            what to budget for.
          </p>
          <div className="space-y-4">
            {ongoingCosts.map((cost, index) => (
              <div
                key={index}
                className="p-5 bg-white/10 border border-white/15 rounded-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h4 className="font-bold text-white">{cost.item}</h4>
                  <span className="text-sm font-bold text-ravenci-light-gray">
                    {cost.range}
                  </span>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  {cost.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RAVENCI positioning */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-neutral-200/50">
        <div className="max-w-3xl">
          <h3 className="mb-6 font-serif text-h3 font-bold">
            Where RAVENCI Fits in This Market
          </h3>
          <div className="space-y-4 text-neutral-600 leading-relaxed">
            <p>
              RAVENCI Solutions builds custom websites in Brisbane across the
              standard small business through custom premium tiers. Our
              Foundation Website starts at <strong>$3,490</strong> for
              single-page builds, our Growth Website runs from{" "}
              <strong>$7,490</strong> for 8-page custom CMS builds, and our
              Premium Brand &amp; Web package starts at{" "}
              <strong>$14,990</strong> for businesses investing in long-term
              digital presence.
            </p>
            <p>
              We work primarily with Custom Next.js (for performance-critical
              builds), WordPress (for content-heavy sites), Shopify and
              BigCommerce (for e-commerce), and Plasmic and Strapi when the
              project needs a visual builder or headless CMS. As Shopify,
              BigCommerce, and Synergy Wholesale Partners we get better pricing
              on platforms and infrastructure that we pass through to clients.
            </p>
            <p>
              Hosting runs <strong>$39/mo</strong>, maintenance{" "}
              <strong>$249/mo</strong>, with a bundled discount when you take
              both. There are no hidden plugin renewal surprises and no
              lock-in.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/web-development"
              className="px-6 py-3 grid place-content-center bg-ravenci-dark rounded-full text-white hover:bg-ravenci-primary transition-colors duration-300"
            >
              See Our Web Development Packages
            </Link>
            <Link
              href="/launch-your-vision"
              className="px-6 py-3 grid place-content-center border-2 border-ravenci-dark rounded-full text-ravenci-dark hover:bg-ravenci-dark hover:text-white transition-colors duration-300"
            >
              Get a Tailored Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Key takeaways */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-ravenci-dark text-white">
        <div className="max-w-3xl">
          <h3 className="mb-8 font-serif text-h3 font-bold">Key Takeaways</h3>
          <div className="space-y-6 text-white/90 leading-relaxed">
            <div>
              <h4 className="mb-2 text-lg font-bold text-white">
                1. Most Brisbane SMB websites should budget $5,000 – $15,000
              </h4>
              <p>
                The sweet spot for an established small business is the standard
                small business or custom premium tier. Below $5,000 you&apos;re
                in template territory with limited future flexibility. Above
                $25,000 you&apos;re paying for things most SMBs don&apos;t need
                yet.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-bold text-white">
                2. Year-one cost is 1.5 – 2x the build quote
              </h4>
              <p>
                A $10,000 build with content production, hosting, maintenance,
                and a 10% contingency lands at $14,000 – $16,000 in year one.
                Budget accordingly so you&apos;re not surprised in month three.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-bold text-white">
                3. Cheap quotes are usually expensive within 18 months
              </h4>
              <p>
                Sites built without proper SEO, performance, and maintenance
                foundations typically need a $3,000 – $7,000 fix or rebuild
                within 18 months. The cheapest quote in your inbox is rarely the
                cheapest quote over 24 months.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-bold text-white">
                4. The platform should match the business, not the agency
              </h4>
              <p>
                If an agency only quotes one platform regardless of your needs,
                that&apos;s a red flag. WordPress suits content-heavy sites.
                Shopify and BigCommerce suit e-commerce. Custom Next.js suits
                performance-critical builds. The right answer depends on your
                business, not the agency&apos;s comfort zone.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-bold text-white">
                5. Always get a 12-month total cost figure
              </h4>
              <p>
                Reputable Brisbane agencies will give you a clear year-one
                figure including hosting, maintenance, and any platform fees.
                If a quote can&apos;t be reduced to a single annual number, the
                fees are probably hidden in fine print.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-section py-20 px-5 sm:px-20 xl:px-36 flex flex-col items-center text-center bg-white">
        <h2 className="mb-4 text-3xl md:text-4xl font-medium">
          Get a Real Quote, Not a Guess
        </h2>
        <p className="mb-10 max-w-lg text-neutral-500/80">
          Tell us about your project in 2 minutes. We&apos;ll send back a
          tailored estimate with the platform, scope and 12-month total cost
          clearly laid out — no sales calls required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/launch-your-vision"
            className="px-8 py-3 grid place-content-center bg-ravenci-primary rounded-full text-white hover:bg-ravenci-primary/85 transition-colors duration-300"
          >
            Launch Your Vision
          </Link>
          <Link
            href="/web-development"
            className="px-8 py-3 grid place-content-center border-2 border-ravenci-dark rounded-full text-ravenci-dark hover:bg-ravenci-dark hover:text-white transition-colors duration-300"
          >
            See Pricing Packages
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="content-section py-16 px-6 md:px-10 flex flex-col items-center justify-center gap-3 bg-neutral-100">
        <h2 className="font-serif text-h3">Frequently Asked Questions</h2>
        <Accordion titleClassName="py-6 text-lg" items={faqItems} />
      </section>

      {/* Spacer */}
      <section className="content-section py-12 px-5 sm:px-20 xl:px-36 grid grid-cols-5 gap-10 min-h-[80px] bg-neutral-100" />

      {/* BreadcrumbList JSON-LD */}
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
                name: "Cost of a Website in Brisbane",
                item: "https://ravenci.solutions/cost-of-a-website-in-brisbane",
              },
            ],
          }),
        }}
      />

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How Much Does a Website Cost in Brisbane in 2026?",
            description:
              "Brisbane website costs in 2026 typically range from $1,500 (template) to $25,000+ (custom premium). Real pricing per tier, what affects cost, and the hidden ongoing fees most agencies don't mention.",
            author: {
              "@type": "Organization",
              name: "RAVENCI Solutions",
              url: "https://ravenci.solutions",
            },
            publisher: {
              "@type": "Organization",
              name: "RAVENCI Solutions",
              logo: {
                "@type": "ImageObject",
                url: "https://ravenci.solutions/ravenci-logo.svg",
              },
            },
            datePublished: "2026-04-22",
            dateModified: "2026-04-22",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://ravenci.solutions/cost-of-a-website-in-brisbane",
            },
          }),
        }}
      />

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.title,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.summary || item.content,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
