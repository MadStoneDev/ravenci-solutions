// Data model for the data-driven industry template (BRIEF §8).
// Props: industry, headline, pains[], integrations[], caseStudies[],
// testimonial, cta, plus solutions[], stats[] and SEO/schema.
// Genuine copy only, WCAG 2.1 AA, RAVENCI Purple only, no em dashes.

export interface IndustryPain {
  title: string;
  description: string;
}
export interface IndustrySolution {
  title: string;
  description: string;
}
export interface IndustryCaseStudy {
  href: string;
  category: string;
  title: string;
  blurb: string;
}
export interface IndustryStat {
  value: string;
  label: string;
  accent?: boolean;
}
export interface IndustryFaq {
  question: string;
  /** Plain text, or a string with inline HTML (e.g. an <a>) for the rendered
   * answer. Any markup is stripped for the FAQPage JSON-LD text. */
  answer: string;
}
export interface IndustryPageData {
  slug: string;
  industryLabel: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  /** Optional extra hero paragraphs rendered under the lead intro. */
  introExtra?: string[];
  /** Optional per-page overrides for section headings that otherwise use the
   * template defaults ("The problems I hear, every time", the "Built for how
   * X runs" line, "Built for this industry", "Common questions"). */
  headings?: { pains?: string; solutions?: string; caseStudies?: string; faq?: string };
  pains: IndustryPain[];
  solutions: IndustrySolution[];
  integrations: string[];
  /** Optional lead-in line rendered above the integration chips. */
  integrationsNote?: string;
  caseStudies?: IndustryCaseStudy[];
  testimonial?: { content: string; author: string; role?: string };
  stats?: IndustryStat[];
  faq?: IndustryFaq[];
  cta: {
    heading: string;
    body: string;
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
  /** Optional Service schema name. Falls back to metaTitle when unset. */
  serviceName?: string;
  schema?: { serviceType: string; offers?: { name: string; price: string; description: string }[] };
}

const CTA_SECONDARY = { label: "Free visibility check", href: "/#visibility-check" };

export const CONSTRUCTION: IndustryPageData = {
  slug: "construction",
  industryLabel: "Construction",
  metaTitle: "Website Design for Builders & Developers, Brisbane | RAVENCI",
  metaDescription:
    "Websites for Brisbane builders and developers, by someone who spent 14 years in construction. Fast project galleries, QBCC licence up front. From $7,500.",
  headline: "Websites for Brisbane builders and developers",
  intro:
    "Before I built websites for a living, I spent 14 years in construction. Five on site, labouring, painting, landscaping and rendering. Four in steel detailing. Five in structural drafting. Somewhere in there I picked up a civil engineering degree too.",
  introExtra: [
    "So I know what a builder's week looks like, and I know your website isn't what you want to be thinking about. It should just do its job: show off your work, make you look as established as you are, and bring in the right enquiries. That's what I build for builders, developers and trades in Brisbane, South East Queensland and right across Australia.",
    "From $7,500, with 85+ on Google's PageSpeed test guaranteed.",
  ],
  headings: {
    pains: "What builders and developers tell me about their websites",
    solutions: "What I build for construction companies",
    caseStudies: "Websites and branding I've done for construction businesses",
    faq: "Questions builders ask me",
  },
  pains: [
    { title: "Your website makes you look smaller than you are", description: "You're winning bigger jobs than your website is selling. Councils, architects and developers look you up before they ever call. If your site is slow and dated, your best work looks ordinary right when it matters most." },
    { title: "Your project photos are slowing everything down", description: "Construction photos are huge. Done wrong, they drag every page down and people leave before the gallery even loads. I compress them, load them as people scroll and serve them properly, so the site stays fast and your work still looks sharp." },
    { title: "Nobody can find your QBCC licence", description: "Clients want to see your licence, insurance and certifications before they trust you with a build. On most builder websites they're buried in the footer or missing altogether. I put them where people actually look." },
    { title: "Every enquiry gets typed in twice", description: "Leads come in by email, get copied into a spreadsheet or CRM, then copied again into your project software. I connect your website to the tools you already use, so enquiries land where they need to without the double handling." },
  ],
  solutions: [
    { title: "Project galleries", description: "Your portfolio is your best salesperson. I build galleries that load fast, show the work at full quality and are organised the way clients actually browse, by project type or location." },
    { title: "Client and tender portals", description: "Password-protected areas where clients can check progress and download documents, so \"how's my build going?\" stops being a phone call." },
    { title: "Capability statements", description: "Your capability statement and certifications as clean, current downloads, not a PDF from three years ago. (I design those too, by the way.)" },
  ],
  integrationsNote: "I can connect your site to the software you already run, like:",
  integrations: ["PROCORE", "BUILDERTREND", "COCONSTRUCT", "XERO", "MYOB", "HUBSPOT", "DEPUTY", "[YOUR SYSTEM]"],
  caseStudies: [
    { href: "/case-studies/peninsula-homes", category: "Bespoke homes", title: "Peninsula Homes", blurb: "A Sydney Northern Beaches builder of bespoke, energy-efficient homes. A custom WordPress site that's still fast two years on." },
    { href: "/case-studies/coast-remedial-solutions", category: "Remedial building", title: "Coast Remedial Solutions", blurb: "Branding, a capability statement and business cards for Gold Coast remedial building specialists." },
    { href: "/case-studies/dirt", category: "Construction branding", title: "DIRT", blurb: "A branding agency that helps construction and property firms win bids. I look after their website and SEO." },
  ],
  stats: [
    { value: "25+", label: "Years building websites" },
    { value: "14", label: "Years in construction" },
    { value: "85+", label: "PageSpeed, guaranteed", accent: true },
  ],
  faq: [
    {
      question: "Do you build websites for trades as well as builders?",
      answer:
        "Yes. Builders, developers, engineers, and trades like electricians and security installers. The size of the business doesn't matter much. What matters is that your website shows the quality of your work.",
    },
    {
      question: "Does my QBCC licence need to be on my website?",
      answer:
        "Yes. The QBCC requires your name and QBCC licence number (or your company's name and licence number) on your advertising, and websites are specifically included. So are your Facebook page, directory listings, vehicle signage and business cards. I'll make sure it's on your site where people will actually see it, not tucked away somewhere it only technically counts.",
    },
    {
      question: "Can you build a portal for our clients or subcontractors?",
      answer:
        "Yes. A simple client area can be part of a website build. Bigger platforms with logins, roles and job tracking start from $35,000. I'll tell you honestly which one you actually need.",
    },
    {
      question: "How much does a website for a builder cost?",
      answer:
        'Most builder websites I do start at $7,500 for a WordPress site you can edit yourself, or $10,000 for a custom build with integrations. My <a href="/cost-of-a-website-in-brisbane" class="text-accent hover:underline">Brisbane website cost guide</a> breaks down the rest.',
    },
  ],
  cta: {
    heading: "Let's get your projects online properly.",
    body: "Send me your current site and the three jobs you're proudest of. I'll come back with what I'd change and what it costs.",
    primary: { label: "Start a project", href: "/launch-your-vision" },
    secondary: CTA_SECONDARY,
  },
  serviceName: "Website design for builders and developers in Brisbane",
  schema: {
    serviceType: "Construction Website Design",
    offers: [{ name: "Construction Website", price: "7500", description: "Project portfolios, lead generation, QBCC licence display, mobile-friendly design, 85+ PageSpeed guaranteed." }],
  },
};

export const HEALTHCARE: IndustryPageData = {
  slug: "healthcare",
  industryLabel: "Healthcare",
  metaTitle: "Healthcare Websites Brisbane | RAVENCI Solutions",
  metaDescription:
    "Websites for Brisbane healthcare practices. Online booking, patient privacy, NDIS-ready, Cliniko and HotDoc integration, AHPRA-aware. From $7,500.",
  headline: "Websites for healthcare practices",
  intro:
    "Your patients look you up before they book, and a slow or dated site quietly tells them the practice is behind. I build fast, privacy-aware sites for Brisbane medical practices, allied health and NDIS providers that take bookings through the tools you already run, and handle AHPRA advertising rules and patient privacy properly from day one. From $7,500, 85+ PageSpeed guaranteed.",
  pains: [
    { title: "A dated site loses patients before they book", description: "Patients judge the practice by the website. A slow or clumsy one sends them to the next result before they ever call." },
    { title: "The phone never stops", description: "Bookings, forms and results handled by phone bury your front desk. I wire online booking into the tools you already run so the admin drops." },
    { title: "Patient privacy is a real exposure", description: "The Australian Privacy Principles apply from day one. SSL, secure forms and proper data handling are built in, not bolted on." },
    { title: "NDIS participants expect transparency", description: "Clear service listings, pricing transparency and accessibility features that NDIS participants look for, done properly." },
  ],
  solutions: [
    { title: "Booking that fits your tools", description: "Online booking wired into HotDoc, Cliniko, Halaxy or whatever you already run, so it reduces calls instead of adding another system." },
    { title: "Patient portals and secure forms", description: "Encrypted intake forms and secure areas so patients handle forms and results online, safely." },
    { title: "AHPRA-aware, accessible content", description: "Copy and claims structured around AHPRA advertising rules, and built to WCAG 2.1 AA so every patient can use it." },
  ],
  integrations: ["CLINIKO", "HALAXY", "HOTDOC", "HEALTHENGINE", "NOOKAL", "BEST PRACTICE", "COVIU", "[YOUR SYSTEM]"],
  stats: [
    { value: "25+", label: "Years in digital" },
    { value: "75+", label: "Australian businesses" },
    { value: "85+", label: "PageSpeed, guaranteed", accent: true },
  ],
  cta: {
    heading: "Ready to modernise your practice?",
    body: "Tell me about your practice and the tools you use. I'll come back with what I'd build and what it costs.",
    primary: { label: "Start a project", href: "/launch-your-vision" },
    secondary: CTA_SECONDARY,
  },
  schema: {
    serviceType: "Healthcare Website Design",
    offers: [{ name: "Healthcare Website", price: "7500", description: "Patient portals, online booking, privacy compliance, NDIS-ready, telehealth integration." }],
  },
};

export const PROFESSIONAL_SERVICES: IndustryPageData = {
  slug: "professional-services",
  industryLabel: "Professional Services",
  metaTitle: "Professional Services Website Design Brisbane | RAVENCI",
  metaDescription:
    "Website design for Brisbane accountants, lawyers and advisers. Look as established as you are, protect your rankings, and stay compliant. From $7,500.",
  headline: "Websites for professional services firms",
  intro:
    "Your clients choose you on reputation, and your website should back that up, not quietly undercut it. I build credibility-first sites for Brisbane accountants, bookkeepers, lawyers, financial advisers and consultants, with careful migrations that protect your rankings and content structured around your advertising obligations. One senior developer, you own everything, no lock-in. From $7,500, 85+ PageSpeed guaranteed.",
  pains: [
    { title: "You look smaller than you are", description: "A dated or clumsy site chips away at your reputation, quietly costing you the better enquiries before they ever reach you." },
    { title: "A rebuild can cost you your rankings", description: "Redirect mapping and careful migration carry across the search positions you've spent years earning, instead of losing them on launch day." },
    { title: "Advertising compliance is a real risk", description: "Copy and claims structured with your advertising obligations in mind, so marketing never puts your registration or standing at risk." },
    { title: "Plugin-heavy sites decay", description: "Built on clean foundations, not a stack of plugins that rots, so the site stays fast and keeps ranking years after launch." },
  ],
  solutions: [
    { title: "Credibility-first design", description: "A site built for peer firms, not startups, that reads as considered and senior to the clients you actually want." },
    { title: "Ranking-safe migration", description: "Careful redirect mapping so the rankings you've earned move to the new site instead of vanishing." },
    { title: "Compliance-aware content and secure intake", description: "Content structured around TPB, ASIC and Law Society advertising rules, with encrypted enquiry forms that route straight to you." },
  ],
  integrations: ["XERO", "MYOB", "IGNITION", "HUBSPOT", "XPLAN", "LEAP", "ACTIONSTEP", "DOCUSIGN", "[YOUR SYSTEM]"],
  caseStudies: [
    { href: "/case-studies/sac-consulting", category: "Workplace culture", title: "SAC Consulting", blurb: "A workplace culture consultancy that needed authority, fast." },
    { href: "/case-studies/nikita-morell", category: "Copywriting", title: "Nikita Morell", blurb: "A copywriter writing exclusively for architects, with a site to match." },
  ],
  stats: [
    { value: "25+", label: "Years in digital" },
    { value: "75+", label: "Australian businesses" },
    { value: "85+", label: "PageSpeed, guaranteed", accent: true },
  ],
  cta: {
    heading: "Ready for a website that matches your reputation?",
    body: "Send me your current site. I'll come back with what I'd change, how I'd protect your rankings, and what it costs.",
    primary: { label: "Start a project", href: "/launch-your-vision" },
    secondary: CTA_SECONDARY,
  },
  schema: {
    serviceType: "Professional Services Website Design",
    offers: [
      { name: "Professional Services Website", price: "7500", description: "Credibility-first design, ranking-safe migration, compliance-aware content, secure intake forms." },
      { name: "Custom Firm Platform", price: "10000", description: "Multiple offices, client portals and secure logins, practice management and CRM integration." },
    ],
  },
};

export const INDUSTRY_PAGES: Record<string, IndustryPageData> = {
  construction: CONSTRUCTION,
  healthcare: HEALTHCARE,
  "professional-services": PROFESSIONAL_SERVICES,
};
