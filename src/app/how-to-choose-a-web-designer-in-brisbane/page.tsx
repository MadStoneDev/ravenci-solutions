import type { Metadata } from "next";
import Link from "next/link";

import { IconCheck, IconAlertTriangle, IconX } from "@tabler/icons-react";

import Accordion from "@/components/accordion";
import Breadcrumbs from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title:
    "How to Choose a Web Designer in Brisbane: 10 Questions to Ask in 2026 | RAVENCI Solutions",
  description:
    "The 10 questions every Brisbane business should ask before choosing a web designer. Red flags, green flags, how to compare quotes, and what 'good' actually looks like in 2026.",
  openGraph: {
    title:
      "How to Choose a Web Designer in Brisbane: 10 Questions to Ask in 2026",
    description:
      "Brisbane web designer selection guide for 2026. Ten essential questions, red and green flags, and how to compare quotes properly.",
    type: "article",
  },
  alternates: { canonical: "/how-to-choose-a-web-designer-in-brisbane" },
};

const questions = [
  {
    number: "01",
    question: "Who owns the code, content, domain and hosting at the end?",
    rightAnswer:
      "You should own everything end-to-end — domain registered in your name, code in a repository you can access, content exportable, and hosting transferable to any provider. Anything less is a long-term lock-in trap.",
  },
  {
    number: "02",
    question: "What's the realistic 12-month total cost?",
    rightAnswer:
      "A clear figure that includes build, hosting, maintenance, plugin licences, and any platform fees. If a quote can't be reduced to one annual number, fees are hidden in the fine print.",
  },
  {
    number: "03",
    question: "Which platform do you recommend for my business, and why?",
    rightAnswer:
      "A specific platform recommendation tied to your business needs (content, e-commerce, performance, integrations) — not a one-size-fits-all 'we always use X.' Reputable agencies build on multiple platforms.",
  },
  {
    number: "04",
    question: "Can I see 3 case studies from businesses like mine?",
    rightAnswer:
      "Real case studies with named businesses, the problem solved, the platform used, and ideally measurable results. Vague portfolio shots don't count.",
  },
  {
    number: "05",
    question: "What does ongoing maintenance cover and what does it cost?",
    rightAnswer:
      "A specific monthly fee, what's included (security updates, plugin updates, backups, content tweaks, performance monitoring), the response time for issues, and whether it's optional or required.",
  },
  {
    number: "06",
    question: "How many revision rounds are included? Beyond that, what's the cost?",
    rightAnswer:
      "A specific number (typically 2 – 3 rounds for design, 1 – 2 for development) and a clear hourly or per-change rate beyond that. Vague 'we'll work with you until you're happy' usually means scope creep arguments later.",
  },
  {
    number: "07",
    question: "What's the timeline from kickoff to launch?",
    rightAnswer:
      "A specific week-by-week schedule with milestones (discovery, design, build, content, QA, launch). Realistic small-business sites take 4 – 14 weeks depending on scope.",
  },
  {
    number: "08",
    question: "What support do you offer after launch, and for how long?",
    rightAnswer:
      "A defined support window after launch (typically 30 – 90 days for bug fixes), plus an ongoing support arrangement (maintenance plan, retainer, or hourly). 'We're always around' isn't a support contract.",
  },
  {
    number: "09",
    question: "What happens if I want to leave, or you stop trading?",
    rightAnswer:
      "An exit process that includes handover of code, content, and access to your hosting and domain. Bonus points for documentation. This question often surfaces lock-in arrangements that aren't otherwise visible.",
  },
  {
    number: "10",
    question: "Who's actually going to be doing the work?",
    rightAnswer:
      "A named developer or designer, not 'our team' or an offshore agency. For small businesses, founder-led or small-team agencies typically deliver better than larger ones because the senior person is actually building the site.",
  },
];

const redFlags = [
  {
    flag: "No fixed price or vague quote",
    detail:
      "A reputable agency can give you a tight range or fixed price after a 30-minute discovery call. 'It depends, let's start and see' often becomes a mid-project re-quote.",
  },
  {
    flag: "Only one platform regardless of your needs",
    detail:
      "If every quote out of an agency is for the same platform, they're recommending what's easy for them to build — not what's right for your business.",
  },
  {
    flag: "Vague or no portfolio",
    detail:
      "If they can't show you live, named work for businesses like yours, the work either doesn't exist or wasn't theirs.",
  },
  {
    flag: "Refusal to give you ongoing access to code or hosting",
    detail:
      "Industry-standard practice is full client ownership. Refusal here is a deliberate lock-in tactic that costs you money to escape.",
  },
  {
    flag: "Pricing dramatically below market",
    detail:
      "If three quotes come in around $10,000 and one comes in at $2,500, that quote is either using a template you could buy yourself or cutting corners on QA, performance, or support.",
  },
  {
    flag: "No discussion of SEO, accessibility or performance up front",
    detail:
      "These should be in the proposal, not a 'phase 2' add-on. Adding them later costs 3 – 5x what building them in costs.",
  },
];

const greenFlags = [
  {
    flag: "Recommends what's right for you, even if it's less profitable for them",
    detail:
      "An agency that says 'WordPress is the right answer for your situation, not custom Next.js' even though the latter would be more profitable for them — that's the agency to hire.",
  },
  {
    flag: "Transparent about the 12-month total cost from the start",
    detail:
      "Build cost, hosting, maintenance, plugin licences, platform fees, all on one page. No surprises in month three.",
  },
  {
    flag: "Has built on multiple platforms",
    detail:
      "Demonstrates they've made platform decisions based on business needs, not their own comfort. Look for case studies across WordPress, Shopify, custom builds.",
  },
  {
    flag: "Talks about your business, not their tech",
    detail:
      "The first 30 minutes of the discovery call should be about your customers, your goals, and your team — not about how amazing their stack is.",
  },
  {
    flag: "Provides realistic timelines, not 'we can have it next week'",
    detail:
      "Anyone promising a quality custom build in under 3 weeks is either mis-scoping or planning to use a template. Realistic small-business sites take 4 – 14 weeks.",
  },
  {
    flag: "Explains trade-offs in plain English",
    detail:
      "If they can't explain why a decision is being made without using jargon, either they don't understand it or they're hiding something. Good agencies translate; bad ones obfuscate.",
  },
];

const brisbaneSpecifics = [
  {
    factor: "Local SEO knowledge",
    detail:
      "Brisbane-specific SEO understanding matters: Google Business Profile optimisation, Brisbane suburb targeting, local schema markup, and AU-relevant directory presence (Yellow Pages, Hotfrog, True Local). An overseas agency typically misses these.",
  },
  {
    factor: ".com.au domain familiarity",
    detail:
      "Australian businesses generally benefit from .com.au domains (auDA registration). Familiarity with Synergy Wholesale, Crazy Domains, Netregistry and the auDA process saves headaches.",
  },
  {
    factor: "Time zone overlap",
    detail:
      "Brisbane time zone overlap with your team's working hours matters when something breaks. Offshore agencies in opposite time zones often mean 24+ hour response times even on urgent issues.",
  },
  {
    factor: "AU hosting and data residency",
    detail:
      "For sites handling personal information (healthcare, professional services, education), Australian-hosted infrastructure is often preferred or required. A Brisbane agency with Sydney/Melbourne data centre options has the conversation easily.",
  },
  {
    factor: "Australian Privacy Act and Consumer Law awareness",
    detail:
      "Understanding of Australian privacy obligations (APPs, Notifiable Data Breaches), Consumer Law disclosure requirements, and state-specific legislation (e.g. Vic Health Records Act) matters for any compliant build.",
  },
  {
    factor: "Real Brisbane references and presence",
    detail:
      "An agency with named Brisbane clients you can verify, ideally in your industry, beats one with a generic interstate or overseas portfolio. Local references can be cross-checked.",
  },
];

const ravenciScorecard = [
  {
    question: "Who owns everything?",
    answer:
      "You do. Domain, code, content, hosting — all transferable, no lock-in. We&apos;ve never had a client unable to leave.",
  },
  {
    question: "12-month total cost transparent?",
    answer:
      "Yes — every proposal includes the 12-month total covering build, hosting, maintenance, and any platform fees. One number.",
  },
  {
    question: "Which platforms?",
    answer:
      "Custom Next.js, WordPress, Shopify, BigCommerce, GoHighLevel, Plasmic and Strapi. We're a Shopify Partner, BigCommerce Partner, and Synergy Wholesale Partner.",
  },
  {
    question: "Case studies?",
    answer:
      "See our published case studies — Peninsula Homes, Coast Remedial, Intercorp Developments, SAC Consulting and others, with platforms used and results.",
  },
  {
    question: "Maintenance details?",
    answer:
      "$249/mo covers security updates, plugin updates, backups, performance monitoring, and 1 hour of monthly content/dev work. Hosting + maintenance bundle available.",
  },
  {
    question: "Revision rounds?",
    answer:
      "2 – 3 design rounds and 1 – 2 development rounds included by default, varying by package. Additional rounds are quoted per scope.",
  },
  {
    question: "Timeline?",
    answer:
      "Foundation Website: 3 weeks. Growth Website: 4-6 weeks. Premium Brand & Web: 10-14 weeks. Healthcare and Construction sites typically 5-8 weeks.",
  },
  {
    question: "Post-launch support?",
    answer:
      "30 days of post-launch bug fixes included. Ongoing maintenance plan or retainer packages from $490/mo for ongoing dev/design work.",
  },
  {
    question: "What if you leave or we stop trading?",
    answer:
      "We document every project for handover. You always have access to your code, content, hosting, and domain. We've never had a contested handover.",
  },
  {
    question: "Who actually does the work?",
    answer:
      "Richard (founder, 20+ years) leads every project, supported by a trusted network of specialists (copywriters, photographers, brand designers, senior developers) brought in when projects need them.",
  },
];

const faqItems = [
  {
    title: "How do I compare quotes from different Brisbane web designers?",
    summary:
      "Compare on 12-month total cost (not just build cost), platform recommendation, included revisions, post-launch support terms, ongoing maintenance pricing, and ownership of code/content/domain. Don't compare like-for-like build prices in isolation — they hide most of the actual cost.",
    content:
      "Comparing Brisbane web designer quotes properly means looking past the build price to the 12-month total cost of ownership. Build cost is typically only 50 – 70% of year-one investment. Compare on: build cost, hosting (per month), maintenance (per month), included plugin licences, included revisions, post-launch support window, response time SLAs, ownership of code/content/domain at the end, and platform recommendation logic. Quotes that look identical on build price can differ by $5,000+ in year one once these are factored in. Always ask for quotes to be reformatted to a single 12-month total cost figure for fair comparison.",
  },
  {
    title: "Should I hire a Brisbane web designer or someone overseas?",
    summary:
      "For small business websites under $15,000, a local Brisbane agency typically delivers better outcomes due to time zone overlap, AU-specific SEO and compliance knowledge, and easier communication. For larger projects ($25k+) where pricing pressure matters more, blended or offshore arrangements can work.",
    content:
      "For most small business websites under about $15,000, a Brisbane or Australian agency typically delivers better outcomes than an offshore alternative. Reasons: time zone overlap (you can actually talk to your developer when something breaks), AU-specific SEO knowledge (Google Business Profile, .com.au domain handling, local schema), AU compliance awareness (Privacy Act, Consumer Law, AHPRA where relevant), and easier communication around scope and revisions. For larger projects ($25k+) where pricing pressure matters more, blended onshore-offshore arrangements can work — typically with a local lead managing offshore developers — but you give up some of the responsiveness of fully-local teams.",
  },
  {
    title: "What questions should I ask a web designer before hiring them?",
    summary:
      "The 10 essentials: who owns everything afterwards, 12-month total cost, platform recommendation logic, case studies, maintenance terms, revision rounds, timeline, post-launch support, exit process, and who actually does the work. Vague answers to any of these are a red flag.",
    content:
      "The ten questions every Brisbane business should ask before signing: 1) Who owns the code, content, domain and hosting at the end? 2) What's the realistic 12-month total cost? 3) Which platform do you recommend for my business and why? 4) Can I see 3 case studies from businesses like mine? 5) What does ongoing maintenance cover and what does it cost? 6) How many revision rounds are included? 7) What's the timeline from kickoff to launch? 8) What support do you offer after launch? 9) What happens if I want to leave, or you stop trading? 10) Who's actually going to be doing the work? Vague answers to any of these are a red flag — the questions exist precisely because each one surfaces a common pattern of bad agency behaviour.",
  },
  {
    title: "How can I tell if a web designer's portfolio is actually their work?",
    summary:
      "Ask for the live URL of every portfolio piece, the year it was built, and the platform used. Then check the source code — the build pattern usually matches across an agency's real work. If they can't or won't share live URLs, the work isn't theirs.",
    content:
      "Ask for the live URL of every portfolio piece, the year it was built, and the platform used. Cross-check by visiting the live sites and looking at the source code — agencies tend to have recognisable build patterns across their real work (consistent component structure, similar performance profiles, shared technical choices). If they can only show screenshots or refuse to share live URLs, the work likely isn't theirs. Another tell: ask 'who was the lead developer on this project?' If they can't name a person, the work was probably done by an offshore subcontractor or freelancer who has since moved on.",
  },
  {
    title: "How long should it take a Brisbane web designer to quote?",
    summary:
      "After a 30 – 60 minute discovery call, a fixed price or tight range should land within 3 – 5 business days for standard small business sites. Custom or complex projects may take 1 – 2 weeks. Anything longer than 2 weeks suggests the agency isn't prioritising your project.",
    content:
      "After a 30 to 60 minute discovery call, a reputable Brisbane agency should provide a fixed price or tight pricing range within 3 to 5 business days for standard small business websites. Custom or complex projects (web apps, multi-location sites, deep integrations) may take 1 to 2 weeks because they need scoping work. Anything longer than 2 weeks usually signals that either the agency isn't prioritising your project, or they're waiting on a freelancer's availability quote rather than knowing the answer themselves. Quotes should always specify what is and isn't included so you're not comparing apples and oranges.",
  },
  {
    title: "Is the cheapest Brisbane web design quote always the worst choice?",
    summary:
      "Not always — but quotes dramatically below the others usually mean a template build, junior developer, offshore work, or corners cut on SEO, performance, or post-launch support. Compare on what's included and the 12-month total cost, not just the build price.",
    content:
      "Not always. Sometimes a cheaper quote is genuinely a better-fit small agency or freelancer with lower overheads. But a quote dramatically below the others typically means one of: a template-based build presented as custom, a junior developer doing the work, offshore subcontracting without disclosure, or corners cut on SEO, performance optimisation, accessibility, or post-launch support. To distinguish, compare on what's actually included rather than just the headline price. Cheapest is fine if the quote includes the same scope as more expensive options. Cheapest is dangerous if the comparison reveals missing pieces that you'll pay for separately later.",
  },
  {
    title: "Should I get a fixed price or hourly quote?",
    summary:
      "For typical small business websites with defined scope, fixed price is usually better — it transfers the scope-estimation risk to the agency. Hourly arrangements suit ongoing development work where scope is genuinely unknown. Beware fixed-price quotes that exclude common items like content production, integrations, or revisions.",
    content:
      "For typical small business websites with defined scope, fixed price is usually the better arrangement — it transfers scope estimation risk from you to the agency. The agency takes the bet that they understand the work; you get certainty about cost. Hourly arrangements suit ongoing development work, web applications where scope is genuinely unknown, or post-launch retainer arrangements. Beware fixed-price quotes that exclude common items like content production, integrations beyond a basic level, or post-launch revisions — those exclusions become out-of-scope invoices later. Read the inclusions and exclusions carefully before signing anything.",
  },
  {
    title: "What's a fair hourly rate for a Brisbane web designer?",
    summary:
      "Brisbane freelance designers and developers typically charge $80 – $150/hr in 2026. Small agencies $120 – $180/hr. Larger agencies $180 – $250+/hr. Hourly retainer rates from established agencies are often discounted ($120 – $160/hr) compared to ad-hoc work.",
    content:
      "Fair hourly rates for Brisbane web designers and developers in 2026: freelance designers and developers typically charge $80 to $150/hr depending on experience and specialisation. Small agencies (1 – 5 people) charge $120 to $180/hr. Larger Brisbane agencies (10+ people) charge $180 to $250+/hr. Senior specialists in high-demand niches (Next.js performance, headless commerce, conversion optimisation) command the higher end of these ranges. Hourly retainer rates from established agencies are often discounted ($120 to $160/hr) compared to ad-hoc work, because the agency gets predictable revenue and you get priority scheduling. Anything dramatically below $80/hr in 2026 signals either junior, offshore, or stretched-too-thin work.",
  },
];

export default function HowToChooseWebDesignerPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 bg-white">
        <article className="max-w-3xl flex flex-col gap-2">
          <Breadcrumbs
            items={[{ label: "How to Choose a Web Designer in Brisbane" }]}
          />
          <span className="mt-2 text-xs font-medium tracking-wider uppercase text-ravenci-primary">
            Brisbane Web Designer Guide — 2026
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-h1 font-medium">
            How to Choose a Web Designer in Brisbane in 2026
          </h1>
          <h2 className="max-w-2xl text-2xl md:text-3xl lg:text-h2 font-light">
            Ten questions to ask, the red flags to spot, and how to compare
            quotes properly
          </h2>
          <p className="mt-6 max-w-2xl text-neutral-500/80">
            Choosing a Brisbane web designer in 2026 comes down to ten
            questions: who owns everything afterwards, the 12-month total cost,
            which platform and why, real case studies, maintenance terms,
            revision rounds, timeline, post-launch support, exit process, and
            who actually does the work. This guide walks through each question
            with the answer to look for — plus the red and green flags
            separating reputable agencies from the rest.
          </p>
        </article>
      </section>

      {/* The 10 questions */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-ravenci-dark text-white">
        <h3 className="mb-4 font-serif text-h3 font-bold">
          The Ten Essential Questions
        </h3>
        <p className="mb-10 max-w-2xl text-neutral-400">
          Ask these in your discovery call. Vague or evasive answers to any
          one are typically a sign of pattern problems across the engagement.
        </p>
        <div className="space-y-4">
          {questions.map((q, index) => (
            <div
              key={index}
              className="p-5 md:p-6 bg-white/5 border border-white/10 rounded-lg"
            >
              <div className="flex items-start gap-4 mb-3">
                <span className="font-serif text-2xl md:text-3xl font-bold text-ravenci-primary">
                  {q.number}
                </span>
                <h4 className="text-lg md:text-xl font-bold text-white pt-1">
                  {q.question}
                </h4>
              </div>
              <p className="ml-12 text-sm text-neutral-300 leading-relaxed">
                <span className="font-bold text-white">What to listen for:</span>{" "}
                {q.rightAnswer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Red flags / Green flags */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-neutral-200/50">
        <h3 className="mb-10 font-serif text-h3 font-bold">
          Red Flags &amp; Green Flags
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Red flags */}
          <div>
            <h4 className="mb-6 text-xl font-bold text-red-700 flex items-center gap-2">
              <IconAlertTriangle size={24} /> Red Flags
            </h4>
            <div className="space-y-4">
              {redFlags.map((item, index) => (
                <div
                  key={index}
                  className="p-5 bg-white rounded-lg border-l-4 border-red-500"
                >
                  <div className="flex items-start gap-2 mb-2">
                    <IconX
                      size={18}
                      className="p-0.5 bg-red-500 rounded-full text-white flex-shrink-0 mt-0.5"
                    />
                    <h5 className="font-bold text-ravenci-dark text-sm">
                      {item.flag}
                    </h5>
                  </div>
                  <p className="ml-7 text-sm text-neutral-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Green flags */}
          <div>
            <h4 className="mb-6 text-xl font-bold text-green-700 flex items-center gap-2">
              <IconCheck size={24} /> Green Flags
            </h4>
            <div className="space-y-4">
              {greenFlags.map((item, index) => (
                <div
                  key={index}
                  className="p-5 bg-white rounded-lg border-l-4 border-green-500"
                >
                  <div className="flex items-start gap-2 mb-2">
                    <IconCheck
                      size={18}
                      className="p-0.5 bg-green-600 rounded-full text-white flex-shrink-0 mt-0.5"
                    />
                    <h5 className="font-bold text-ravenci-dark text-sm">
                      {item.flag}
                    </h5>
                  </div>
                  <p className="ml-7 text-sm text-neutral-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brisbane-specific factors */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-white">
        <h3 className="mb-4 font-serif text-h3 font-bold">
          Brisbane-Specific Factors That Matter
        </h3>
        <p className="mb-10 max-w-2xl text-neutral-500/80">
          Six things a local Brisbane agency typically does better than an
          interstate or overseas alternative — and that often justify the
          local-versus-offshore price difference.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {brisbaneSpecifics.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-neutral-100/60 rounded-lg border border-neutral-200/70"
            >
              <h4 className="mb-2 font-bold text-ravenci-dark">
                {item.factor}
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RAVENCI scorecard */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-ravenci-primary text-white">
        <div className="max-w-4xl">
          <h3 className="mb-4 font-serif text-h3 font-bold">
            How RAVENCI Answers Each of the Ten Questions
          </h3>
          <p className="mb-10 max-w-2xl text-white/85 leading-relaxed">
            We&apos;ll do the same exercise on ourselves. Here&apos;s how we
            answer each of the ten questions above. Use this as a benchmark for
            comparing other quotes.
          </p>
          <div className="space-y-4">
            {ravenciScorecard.map((item, index) => (
              <div
                key={index}
                className="p-5 bg-white/10 border border-white/15 rounded-lg"
              >
                <h4 className="mb-2 text-sm font-bold text-white">
                  {item.question}
                </h4>
                <p className="text-sm text-white/90 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link CTAs */}
      <section className="content-section py-16 px-5 sm:px-20 xl:px-36 bg-neutral-200/50">
        <div className="max-w-3xl">
          <h3 className="mb-6 font-serif text-h3 font-bold">
            Read Next
          </h3>
          <div className="space-y-4 text-neutral-600 leading-relaxed">
            <p>
              <Link
                href="/cost-of-a-website-in-brisbane"
                className="text-ravenci-primary font-bold hover:underline"
              >
                How Much Does a Website Cost in Brisbane in 2026?
              </Link>{" "}
              — Real pricing per tier, what affects cost, and the hidden
              ongoing fees most agencies don&apos;t mention in proposals.
            </p>
            <p>
              <Link
                href="/wordpress-vs-shopify-vs-custom"
                className="text-ravenci-primary font-bold hover:underline"
              >
                WordPress vs Shopify vs Custom Next.js
              </Link>{" "}
              — Honest comparison from an agency that builds on all three.
            </p>
            <p>
              <Link
                href="/brisbane-website-audit"
                className="text-ravenci-primary font-bold hover:underline"
              >
                We Audited 50 Brisbane Business Websites
              </Link>{" "}
              — 72% scored below 50 on Google PageSpeed. See where the typical
              Brisbane site falls short.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-section py-20 px-5 sm:px-20 xl:px-36 flex flex-col items-center text-center bg-white">
        <h2 className="mb-4 text-3xl md:text-4xl font-medium">
          Ready to Have That Discovery Call?
        </h2>
        <p className="mb-10 max-w-lg text-neutral-500/80">
          Tell us about your business in 2 minutes. We&apos;ll come back with
          a tailored proposal — and we&apos;ll happily answer all ten of these
          questions before you commit to anything.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/launch-your-vision"
            className="px-8 py-3 grid place-content-center bg-ravenci-primary rounded-full text-white hover:bg-ravenci-primary/85 transition-colors duration-300"
          >
            Launch Your Vision
          </Link>
          <Link
            href="/case-studies"
            className="px-8 py-3 grid place-content-center border-2 border-ravenci-dark rounded-full text-ravenci-dark hover:bg-ravenci-dark hover:text-white transition-colors duration-300"
          >
            See Our Case Studies
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
                name: "How to Choose a Web Designer in Brisbane",
                item: "https://ravenci.solutions/how-to-choose-a-web-designer-in-brisbane",
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
            headline:
              "How to Choose a Web Designer in Brisbane: 10 Questions to Ask in 2026",
            description:
              "The 10 questions every Brisbane business should ask before choosing a web designer. Red flags, green flags, how to compare quotes, and what 'good' actually looks like.",
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
              "@id": "https://ravenci.solutions/how-to-choose-a-web-designer-in-brisbane",
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
