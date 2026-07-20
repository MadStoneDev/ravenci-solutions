import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import Link from "next/link";

import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";

import Accordion from "@/components/accordion";
import Breadcrumbs from "@/components/breadcrumbs";
import PriceButton from "@/components/price-button";
import StickyCTA from "@/components/sticky-cta";
import TestimonialsSingle from "@/components/testimonials-single";
import { getTestimonialsForIndustry } from "@/data/testimonials";
import ProofCluster from "@/components/proof-cluster";

export const metadata = {
  title: "Professional Services Website Design Brisbane | RAVENCI",
  description:
    "Website design for Brisbane accountants, bookkeepers, lawyers, financial advisers, and consultants. Look as established as you already are, keep your rankings through a rebuild, and stay compliant. From $7,500.",
  alternates: { canonical: "/professional-services" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Professional Services Website Design Brisbane | RAVENCI",
    description:
      "Website design for Brisbane accountants, bookkeepers, lawyers, financial advisers, and consultants. Look as established as you already are, keep your rankings through a rebuild, and stay compliant. From $7,500.",
    url: "/professional-services",
    type: "website",
  },
  twitter: {
    ...TWITTER_DEFAULTS,
  },
};

const features = [
  {
    title: "Credibility-First Design",
    description:
      "Prospects judge your firm on how it looks before they read a word. Your site will carry the authority your reputation has already earned",
  },
  {
    title: "Look as Established as You Are",
    description:
      "A portfolio built for peer firms, not startups. The result reads as considered, senior, and trustworthy to the clients you actually want",
  },
  {
    title: "Your Rankings Survive the Rebuild",
    description:
      "Redirect mapping and careful migration so the search positions you have spent years earning carry across to the new site instead of vanishing",
  },
  {
    title: "Compliance-Aware Content",
    description:
      "Copy and claims structured with your advertising obligations in mind, so marketing never puts your registration or practising standing at risk",
  },
  {
    title: "Team and Expertise Profiles",
    description:
      "Present your partners, advisers, and specialists with the qualifications, memberships, and focus areas that win considered enquiries",
  },
  {
    title: "Fast Now, Fast in Three Years",
    description:
      "Built on clean foundations, not a stack of plugins that decays. Your site stays quick and keeps ranking long after launch",
  },
  {
    title: "Secure Enquiry and Intake Forms",
    description:
      "Encrypted forms that route straight to your inbox or practice system, so sensitive client detail is handled properly from the first contact",
  },
  {
    title: "Local SEO for Firms",
    description:
      "Targeted local search so decision makers looking for an accountant, adviser, or lawyer in Brisbane find your firm ahead of the field",
  },
  {
    title: "You Own It, No Lock-In",
    description:
      "The site, the domain, the hosting, and the code are yours. Leave whenever you like. We earn the relationship, we do not trap it",
  },
  {
    title: "One Senior Developer",
    description:
      "You deal with the person who builds the site and owns the outcome. No account managers, no offshore handoffs, no lost detail",
  },
];

const firmTypes = [
  {
    title: "Accounting and Tax Firms",
    description:
      "Service pages for advisory, tax, and compliance work, partner profiles, client login links to your portal, and enquiry forms that qualify the work you want",
  },
  {
    title: "Bookkeeping and BAS Agents",
    description:
      "Clear service and pricing structure, registered agent details, software specialisations, and content written with Tax Practitioners Board advertising rules in mind",
  },
  {
    title: "Law Firms and Legal Practices",
    description:
      "Practice-area landing pages, solicitor profiles with admission details, confidential enquiry handling, and copy that respects Law Society advertising conduct rules",
  },
  {
    title: "Financial Advisers and Planners",
    description:
      "Adviser profiles with authorisation detail, service explanations that hold up against ASIC RG 234, and careful handling of restricted terms under section 923A",
  },
  {
    title: "Business and Management Consultants",
    description:
      "Case-led service pages, credibility signals for corporate buyers, thought-leadership publishing, and lead capture built for a longer considered sale",
  },
  {
    title: "Mortgage and Finance Brokers",
    description:
      "Lender panel and accreditation display, calculators and enquiry tools, review integration, and local pages that reach borrowers searching in your area",
  },
];

const integrations = [
  { name: "Xero", description: "Accounting and invoicing" },
  { name: "MYOB", description: "Accounting and payroll" },
  { name: "Ignition", description: "Proposals and engagement" },
  { name: "Calendly", description: "Consultation booking" },
  { name: "HubSpot", description: "CRM and lead management" },
  { name: "XPLAN", description: "Financial planning software" },
  { name: "LEAP", description: "Legal practice management" },
  { name: "Actionstep", description: "Legal practice management" },
  { name: "DocuSign", description: "Secure document signing" },
  { name: "Mailchimp", description: "Newsletters and updates" },
];

const compliancePoints = [
  {
    title: "TPB Advertising Rules",
    description:
      "For registered tax and BAS agents, we structure claims and service descriptions so your marketing sits within the Tax Practitioners Board Code of Conduct",
  },
  {
    title: "ASIC RG 234",
    description:
      "For financial advice, content is shaped with the good practice guidance on advertising financial products and services in Regulatory Guide 234 in mind",
  },
  {
    title: "Corporations Act Section 923A",
    description:
      "Restricted terms such as independent, impartial, and unbiased are handled carefully, so advisers do not use them where the law does not allow",
  },
  {
    title: "Law Society Advertising Conduct",
    description:
      "For legal practices, we keep testimonials, comparative claims, and specialist wording aligned with the advertising conduct rules that apply to solicitors",
  },
  {
    title: "Testimonials and Reviews",
    description:
      "Reviews are presented in the way your profession permits, avoiding prohibited endorsements while still showing the trust clients place in you",
  },
  {
    title: "Secure Handling of Enquiries",
    description:
      "SSL across the site, encrypted form submissions, and routing that keeps confidential client information out of insecure inboxes and third-party stores",
  },
];

const faqItems = [
  {
    title: "Will rebuilding our site hurt our Google rankings?",
    summary:
      "Not when it is done properly. RAVENCI maps every existing URL to its new location, preserves the content Google already values, and migrates carefully so the rankings you have built up carry across to the new site.",
    content:
      "This is the most common fear among established firms, and it is a fair one. A careless rebuild can wipe out years of search visibility. We prevent that by auditing your current pages, mapping every existing URL to its new location with proper redirects, preserving the content Google already ranks, and keeping your site structure sound. The goal is a site that looks and performs better while holding onto the search positions you have earned. Where there is room, we aim to improve them.",
  },
  {
    title: "Do you understand the advertising rules for our profession?",
    summary:
      "Yes. We build with the relevant frameworks in mind, including Tax Practitioners Board rules for registered tax and BAS agents, ASIC RG 234 and section 923A for financial advisers, and Law Society advertising conduct rules for legal firms. We are not your legal advisers, but compliance is considered from day one.",
    content:
      "Yes. Professional services carry advertising obligations that most web studios never think about. We build with them in mind: Tax Practitioners Board rules for registered tax and BAS agents, ASIC Regulatory Guide 234 and the restricted terms under Corporations Act section 923A for financial advisers, and Law Society advertising conduct rules for solicitors. We treat compliance as risk reduction, structuring claims, testimonials, and terminology so your marketing supports your standing rather than threatening it. We are not your legal or compliance advisers, so final sign-off stays with you, but you will not be starting from a site that ignores the rules.",
  },
  {
    title: "Can you make an established firm look as credible as it actually is?",
    summary:
      "Yes. That is the point of the work. We design for peer firms, not startups, so the finished site reads as senior, considered, and trustworthy to the clients and referrers you want, matching the reputation you have already built.",
    content:
      "Yes, and it is the core of what we do here. Many firms come to us because their site makes them look smaller or less established than they are, which quietly costs them the better enquiries. We design for the standard your peers set, not the loud startup look. The result is measured, professional, and confident, so a prospect who arrives from a referral or a search sees a firm that matches the reputation that sent them there.",
  },
  {
    title: "Do we own the website, or are we locked in?",
    summary:
      "You own everything. The domain, the hosting account, the content, and the code are all yours. There is no proprietary platform you cannot leave and no lock-in. If you ever move on, you take the site with you.",
    content:
      "You own all of it. The domain stays in your name, the hosting account is yours, and the code and content belong to you. We do not build on a closed platform that holds you hostage, and we do not bury your site in a system only we can touch. If you ever decide to work with someone else, you can take everything with you. We would rather keep your business by doing good work than by making it hard to leave.",
  },
  {
    title: "Who actually does the work?",
    summary:
      "One senior developer with more than 25 years of experience. You deal directly with the person building your site and owning the outcome. No account managers in between and no offshore handoffs.",
    content:
      "One senior developer, start to finish. You talk directly to the person who designs, builds, and is accountable for your site, someone with more than 25 years of experience. There is no account manager relaying messages, no junior learning on your project, and no offshore team you never meet. When something needs attention, you speak to the person who can actually fix it. That continuity is why professional firms tend to stay with us for years.",
  },
  {
    title: "Can you integrate our practice management and booking tools?",
    summary:
      "Yes. RAVENCI can integrate the tools professional firms rely on, such as Xero, MYOB, Ignition, Calendly, HubSpot, XPLAN, LEAP, Actionstep, and DocuSign. Any system with an API or embed option can be connected.",
    content:
      "Yes. We can connect your site to the tools professional firms run, such as Xero, MYOB, Ignition, Calendly, HubSpot, XPLAN, LEAP, Actionstep, and DocuSign. The usual setup is a booking or enquiry flow on your site that feeds straight into your calendar, CRM, or practice system, so nothing gets rekeyed by hand. If a platform offers an API or an embed, we can almost always integrate it.",
  },
  {
    title: "How long does a professional services website take to build?",
    summary:
      "Most professional services sites take 6 to 8 weeks. A focused firm site runs closer to 6 weeks, while sites with heavier content, migrations, or integrations take toward 8 weeks. You get a clear timeline before we start.",
    content:
      "Most professional services websites take 6 to 8 weeks depending on scope. A focused firm site with a handful of service pages and profiles runs closer to 6 weeks. Sites with substantial content, a careful migration from an existing site, or several integrations run toward 8 weeks. We give you a clear timeline at the start and keep you updated as we go, so there are no surprises.",
  },
  {
    title: "Can you migrate content from our existing site?",
    summary:
      "Yes. We migrate your existing content, restructure it where it helps, and preserve the pages Google already ranks while redirecting old URLs to their new homes so nothing gets lost.",
    content:
      "Yes. We move your existing content across, tidy and restructure it where that improves clarity, and keep the pages that already earn you search traffic. Old URLs are redirected to their new locations so visitors and Google both land in the right place. If your current content needs a refresh, we can rewrite it with your compliance obligations in mind as part of the project.",
  },
  {
    title: "Do you provide ongoing support after launch?",
    summary:
      "Yes. Every project includes 30 days of post-launch support. After that, retainer packages from $350 per month cover hosting, security, updates, and content changes, so your site stays fast and current for years.",
    content:
      "Every project includes 30 days of post-launch support for adjustments and fixes. After that, our retainer packages start at $350 per month and cover hosting, security monitoring, updates, and content changes. Because our sites are built to stay fast and keep ranking, most firms use their retainer hours for new service pages, adviser or partner updates, and seasonal content rather than for firefighting.",
  },
  {
    title: "Is price the main thing that sets you apart?",
    summary:
      "No. Firms choose us for reputation, senior ownership of the work, compliance fluency, and sites that stay fast and ranking for years. Price matters, but it is rarely the deciding factor for the clients we work best with.",
    content:
      "No, and honestly the firms we work best with do not choose on price alone. They choose on reputation, on dealing directly with one senior developer who owns the outcome, on a genuine understanding of their compliance obligations, and on a site that will still be fast and ranking in a few years. We are not the cheapest option, and we are not trying to be. We are the option that protects a reputation you have spent years building.",
  },
];

export default function ProfessionalServicesPage() {
  const industryTestimonials = getTestimonialsForIndustry(
    "professional-services",
  );

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
                name: "Professional Services Websites",
                item: "https://ravenci.solutions/professional-services",
              },
            ],
          }),
        }}
      />
      {/* Hero */}
      <section
        className={`content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 min-h-[250px] bg-white`}
      >
        <article className={`max-w-2xl col-span-12 flex flex-col gap-2`}>
          <Breadcrumbs items={[{ label: "Professional Services Websites" }]} />
          <h1 className={`mt-2 text-4xl md:text-5xl lg:text-h1 font-medium`}>
            Websites for Professional Services Firms
          </h1>
          <h2
            className={`max-w-2xl text-2xl md:text-3xl lg:text-h2 font-light`}
            style={{ lineHeight: "2.25rem" }}
          >
            Your clients choose you on reputation. Your website should back that
            up, not quietly undercut it, for accountants, bookkeepers, lawyers,
            financial advisers, and consultants across Brisbane
          </h2>
          <p className={`mt-6 max-w-2xl text-neutral-500/80`}>
            RAVENCI Solutions builds websites for professional services firms in
            Brisbane. From $7,500, we deliver credibility-first design, careful
            migrations that protect your rankings, compliance-aware content, and
            a site that stays fast and ranking for years. You work with one
            senior developer who owns the outcome, you own everything at the
            end, and there is no lock-in. 25+ years of experience. 85+ PageSpeed
            guaranteed.
          </p>
        </article>
      </section>

      {/* Social proof bar */}
      <section
        className={`content-section py-12 px-5 sm:px-20 xl:px-36 bg-ravenci-primary text-white`}
      >
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center`}
        >
          <div>
            <p className={`text-4xl md:text-5xl font-bold`}>25+</p>
            <p className={`mt-2 text-sm text-white/80 font-light`}>
              Years Experience
            </p>
          </div>
          <div>
            <p className={`text-4xl md:text-5xl font-bold`}>75+</p>
            <p className={`mt-2 text-sm text-white/80 font-light`}>
              Australian Businesses
            </p>
          </div>
          <div>
            <p className={`text-4xl md:text-5xl font-bold`}>467</p>
            <p className={`mt-2 text-sm text-white/80 font-light`}>
              Projects Delivered
            </p>
          </div>
          <div>
            <p className={`text-4xl md:text-5xl font-bold`}>85+</p>
            <p className={`mt-2 text-sm text-white/80 font-light`}>
              PageSpeed Guaranteed
            </p>
          </div>
        </div>
      </section>

      {/* Two-column features */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 bg-white`}>
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 space-y-14 bg-neutral-50`}
        >
          <article className={`max-w-lg`}>
            <h2 className={`mb-8 font-serif text-h3 font-bold`}>
              What Established Firms Need
            </h2>
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
            <h2 className={`font-serif text-h3 font-bold text-white`}>
              Why Choose RAVENCI for Professional Services?
            </h2>
            <div className={`my-4 text-neutral-400/90`}>
              Your clients trust you with their money, their business, and their
              legal standing. Your website should earn that same trust before
              they ever call.
            </div>

            <ul className={`flex flex-col gap-4 mb-6 text-neutral-400/90`}>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white flex-shrink-0`}
                />
                25+ years building digital platforms for Australian businesses
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white flex-shrink-0`}
                />
                One senior developer who owns the outcome, start to finish
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white flex-shrink-0`}
                />
                Rankings protected through the rebuild, not gambled with
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white flex-shrink-0`}
                />
                Compliance fluency across TPB, ASIC, and Law Society rules
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white flex-shrink-0`}
                />
                You own everything. No proprietary platform, no lock-in
              </li>
              <li className={`flex gap-2`}>
                <IconCheck
                  size={24}
                  className={`p-1 bg-ravenci-primary rounded-full text-white flex-shrink-0`}
                />
                85+ PageSpeed score guaranteed, and it stays fast for years
              </li>
            </ul>

            <p className={`mb-4 text-neutral-400/90`}>
              An established firm has one thing to protect above all else: its
              reputation. A dated or clumsy website chips away at it, quietly
              making you look smaller than you are and costing you the better
              enquiries before they ever reach you.
            </p>

            <p className={`mb-8 text-neutral-400/90`}>
              We build sites that read as senior, considered, and trustworthy,
              carry your search rankings safely through the rebuild, and hold up
              against the advertising rules your profession lives by.
            </p>

            <div className={`text-white`}>
              <PriceButton
                price={"7,500"}
                link={`/launch-your-vision`}
                frequency={""}
                includeFrom={true}
                callToAction={`Professional Services Website`}
                subCallToAction={`Request a proposal`}
              />
            </div>
          </article>
        </section>
      </div>

      {/* Firm Types */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-white`}
      >
        <h2 className={`mb-4 font-serif text-h3 font-bold text-center`}>
          Built for Every Kind of Firm
        </h2>
        <p className={`mb-12 text-center text-neutral-500/80 max-w-2xl mx-auto`}>
          Whether you advise on tax, money, or the law, we build a site tailored
          to how your firm earns trust and wins the clients you want.
        </p>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto`}
        >
          {firmTypes.map((type, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-neutral-200 hover:border-ravenci-primary/30 transition-colors"
            >
              <h4 className="font-bold text-ravenci-dark mb-2">{type.title}</h4>
              <p className="text-sm text-neutral-500/80">{type.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-neutral-50`}
      >
        <h2 className={`mb-4 font-serif text-h3 font-bold text-center`}>
          Integrations We Work With
        </h2>
        <p className={`mb-12 text-center text-neutral-500/80 max-w-2xl mx-auto`}>
          Your website connects to the practice, accounting, and CRM tools your
          firm already runs. Enquiries flow straight in, and nothing gets
          rekeyed by hand.
        </p>
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto`}
        >
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="p-4 text-center rounded-lg border border-neutral-200 bg-white"
            >
              <p className="font-bold text-sm text-ravenci-dark">
                {integration.name}
              </p>
              <p className="mt-1 text-xs text-neutral-400">
                {integration.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance & Risk */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark`}
      >
        <h2
          className={`mb-4 font-serif text-h3 font-bold text-white text-center`}
        >
          Compliance Fluency, Built In
        </h2>
        <p className={`mb-12 text-center text-neutral-400/90 max-w-2xl mx-auto`}>
          Professional firms carry advertising obligations most web studios
          never think about. We treat compliance as risk reduction, structuring
          your site so marketing supports your standing rather than threatening
          it.
        </p>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto`}
        >
          {compliancePoints.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-neutral-700 bg-neutral-800/50"
            >
              <h4 className="font-bold text-white text-sm mb-2">
                {point.title}
              </h4>
              <p className="text-sm text-neutral-400/90">{point.description}</p>
            </div>
          ))}
        </div>
        <p className={`mt-8 text-center text-sm text-neutral-500`}>
          We are not your legal or compliance advisers. We provide technical and
          content implementation that supports your obligations. Final sign-off
          against your professional standards stays with you.
        </p>
      </section>

      {/* Testimonial */}
      {industryTestimonials[0] && (
        <TestimonialsSingle
          testimonial={{
            content: industryTestimonials[0].content,
            author: industryTestimonials[0].author,
            role: industryTestimonials[0].role,
            company: industryTestimonials[0].company,
            image: industryTestimonials[0].image || null,
          }}
          extraClassNames={`content-section bg-ravenci-dark`}
        />
      )}

      {/* Process */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-white`}
      >
        <h2 className={`mb-12 font-serif text-h3 font-bold text-center`}>
          How We Work with Professional Firms
        </h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto`}
        >
          {[
            {
              step: "01",
              title: "Discovery",
              description:
                "We learn your firm, your ideal clients, and the reputation your site needs to live up to.",
            },
            {
              step: "02",
              title: "Structure and Compliance Review",
              description:
                "Content structure and claims reviewed against your advertising obligations before any build begins.",
            },
            {
              step: "03",
              title: "Build and Migrate",
              description:
                "Your site is built on clean foundations, with old URLs redirected so your rankings carry across intact.",
            },
            {
              step: "04",
              title: "Launch and Support",
              description:
                "Handover, training, and ongoing support so your site stays fast, current, and ranking for years.",
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <p className="text-4xl font-bold text-ravenci-primary/30">
                {item.step}
              </p>
              <h4 className="mt-2 font-bold text-ravenci-dark">{item.title}</h4>
              <p className="mt-2 text-sm text-neutral-500/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-white`}
      >
        <h2 className={`mb-4 font-serif text-h3 font-bold text-center`}>
          Straightforward, Honest Pricing
        </h2>
        <p className={`mb-12 text-center text-neutral-500/80 max-w-2xl mx-auto`}>
          Two clear starting points, priced on the outcome you need. No padded
          packages and no hidden platform fees. You own everything we build.
        </p>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto`}
        >
          <div className="flex flex-col p-8 rounded-xl border border-neutral-200 bg-neutral-50">
            <h3 className="font-bold text-ravenci-dark text-lg">
              Professional Services Website
            </h3>
            <p className="mt-2 text-neutral-500/80 text-sm">
              A credible, fast, compliance-aware site for a firm that needs to
              look as established as it already is.
            </p>
            <p className="mt-6 font-serif text-4xl font-bold text-ravenci-dark">
              From $7,500
            </p>
            <ul className="mt-6 flex flex-col gap-3 text-sm text-neutral-600">
              {[
                "Credibility-first design and copy",
                "Service pages and team profiles",
                "Careful migration that protects your rankings",
                "Secure enquiry and intake forms",
                "Local SEO and 85+ PageSpeed guaranteed",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <IconCircleCheckFilled
                    className="text-ravenci-primary flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 text-ravenci-dark">
              <PriceButton
                price={"7,500"}
                link={`/launch-your-vision`}
                frequency={""}
                includeFrom={true}
                callToAction={`Professional Services Website`}
                subCallToAction={`Request a proposal`}
              />
            </div>
          </div>

          <div className="flex flex-col p-8 rounded-xl border border-ravenci-primary/40 bg-neutral-50">
            <h3 className="font-bold text-ravenci-dark text-lg">
              Custom Firm Platform
            </h3>
            <p className="mt-2 text-neutral-500/80 text-sm">
              For larger firms with multiple offices, heavier content, portals,
              or deeper integrations into your practice systems.
            </p>
            <p className="mt-6 font-serif text-4xl font-bold text-ravenci-dark">
              From $10,000
            </p>
            <ul className="mt-6 flex flex-col gap-3 text-sm text-neutral-600">
              {[
                "Everything in the standard website",
                "Multiple offices or divisions",
                "Client portals and secure logins",
                "Practice management and CRM integration",
                "Content strategy and thought-leadership publishing",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <IconCircleCheckFilled
                    className="text-ravenci-primary flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 text-ravenci-dark">
              <PriceButton
                price={"10,000"}
                link={`/launch-your-vision`}
                frequency={""}
                includeFrom={true}
                callToAction={`Custom Firm Platform`}
                subCallToAction={`Request a proposal`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Can Affect Pricing */}
      <section
        className={`content-section py-16 px-5 sm:px-20 xl:px-36 bg-neutral-50`}
      >
        <h2 className={`mb-8 font-serif text-h3 font-bold text-center`}>
          What Can Affect Pricing
        </h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto`}
        >
          {[
            "Number of service pages and adviser or partner profiles",
            "Migration and redirect mapping from a large existing site",
            "Practice management, accounting, or CRM integration",
            "Client portal with secure login access",
            "Multiple offices or divisions with their own pages",
            "Compliance-aware copywriting across your services",
            "Thought-leadership and article publishing setup",
            "Booking and enquiry flows connected to your systems",
            "Photography and profile imagery",
            "Ongoing SEO and content strategy",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <IconCircleCheckFilled
                className="text-neutral-400 flex-shrink-0 mt-0.5"
                size={18}
              />
              <p className="text-neutral-600 text-sm">{item}</p>
            </div>
          ))}
        </div>
        <p className={`mt-8 text-center text-sm text-neutral-400`}>
          Hourly rate for additional work: $165/hr
        </p>
      </section>

      {/* Related Services */}
      <section className="content-section py-12 px-5 sm:px-20 xl:px-36 bg-neutral-50">
        <h2 className="mb-8 font-serif text-h3 font-bold text-center">
          Related Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              name: "Website Design",
              href: "/web-development",
              description: "Custom websites for any industry",
            },
            {
              name: "Website Maintenance",
              href: "/website-maintenance",
              description: "Keep your site fast, secure, and current",
            },
            {
              name: "SEO & Content",
              href: "/seo-and-content",
              description: "Reach the clients searching for your firm",
            },
          ].map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="p-6 rounded-xl border border-neutral-200 bg-white hover:border-ravenci-primary/30 transition-colors text-center"
            >
              <h3 className="font-bold text-ravenci-dark mb-2">
                {service.name}
              </h3>
              <p className="text-sm text-neutral-500">{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        className={`content-section py-16 px-6 md:px-10 flex flex-col items-center justify-center gap-3 bg-white`}
      >
        <h2 className={`font-serif text-h3`}>
          Professional Services Website FAQs
        </h2>
        <Accordion titleClassName={`py-6 text-lg`} items={faqItems} />
      </section>

      {/* CTA */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 flex flex-col items-center text-center bg-ravenci-primary text-white`}
      >
        <h2 className={`mb-4 text-3xl md:text-4xl font-medium`}>
          Ready for a Website That Matches Your Reputation?
        </h2>
        <p className={`mb-10 max-w-md text-white/80`}>
          Let&apos;s build a site your clients trust from the first click,
          without risking the rankings you have earned. Start with a free
          consultation.
        </p>
        <Link
          href={`/launch-your-vision`}
          className={`group relative px-8 py-3 grid place-content-center bg-white rounded-full text-ravenci-dark hover:text-white transition-all duration-300 ease-in-out`}
        >
          <span className={`z-20`}>Launch Your Vision</span>
          <div
            className={`absolute top-0 bottom-full group-hover:bottom-0 left-0 right-0 bg-ravenci-dark z-0 transition-all duration-500 ease-in-out`}
          ></div>
          <div
            className={`absolute top-0 bottom-0 left-0 right-0 rounded-full border-2 border-white z-10`}
          ></div>
        </Link>
      </section>

      {/* Footer spacer */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 grid grid-cols-5 gap-10 min-h-[150px] bg-white`}
      ></section>

      {/* Proof near the CTA */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-neutral-50">
        <ProofCluster testimonial={industryTestimonials[0]} />
      </section>

      {/* Mobile sticky CTA */}
      <StickyCTA
        link="/launch-your-vision"
        startingPrice={7500}
        label="Request a Proposal"
      />

      {/* Service JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Professional Services Website Design",
            name: "Professional Services Website Design Brisbane",
            description:
              "Website design for accountants, bookkeepers, lawyers, financial advisers, and consultants. Credibility-first design, ranking-safe migrations, compliance-aware content, one senior developer, and no lock-in. From $7,500.",
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
              name: "Professional Services Website Packages",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Professional Services Website",
                  price: "7500",
                  priceCurrency: "AUD",
                  description:
                    "Credibility-first website with service pages, team profiles, ranking-safe migration, secure enquiry forms, compliance-aware content, and 85+ PageSpeed score.",
                },
                {
                  "@type": "Offer",
                  name: "Custom Firm Platform",
                  price: "10000",
                  priceCurrency: "AUD",
                  description:
                    "Larger website for multi-office firms with client portals, secure logins, practice management and CRM integration, and content strategy.",
                },
              ],
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
