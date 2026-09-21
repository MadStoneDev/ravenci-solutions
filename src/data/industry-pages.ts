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
export interface IndustryPageData {
  slug: string;
  industryLabel: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  pains: IndustryPain[];
  solutions: IndustrySolution[];
  integrations: string[];
  caseStudies?: IndustryCaseStudy[];
  testimonial?: { content: string; author: string; role?: string };
  stats?: IndustryStat[];
  cta: {
    heading: string;
    body: string;
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
  schema?: { serviceType: string; offers?: { name: string; price: string; description: string }[] };
}

const CTA_SECONDARY = { label: "Free visibility check", href: "/#visibility-check" };

export const CONSTRUCTION: IndustryPageData = {
  slug: "construction",
  industryLabel: "Construction",
  metaTitle: "Construction Websites Brisbane | RAVENCI Solutions",
  metaDescription:
    "Websites for Brisbane builders and property developers. Project portfolios, lead generation, QBCC licence display, 85+ PageSpeed guaranteed. From $7,500.",
  headline: "Websites built for builders and developers",
  intro:
    "I spent ten years in steel detailing and structural drafting, with a structural engineering degree behind that, before I built websites. I know how builders and developers actually work. I build fast sites for Brisbane and Southeast Queensland firms that show the work at its best, hold up under heavy project galleries, display your QBCC licence, and rank for the searches that turn into jobs. From $7,500, 85+ PageSpeed guaranteed.",
  pains: [
    { title: "Your site looks smaller than you are", description: "You're winning bigger work than your website is selling. A slow, dated site makes premium work look ordinary, right when clients are judging you on your last projects." },
    { title: "Heavy project galleries slow everything down", description: "Construction photos are huge, and done wrong they drag every page down. I compress, lazy-load and serve them properly so the site stays fast at 85+ PageSpeed." },
    { title: "Your trust signals are buried", description: "Prospects want your QBCC licence, insurance and certifications up front. I put them where people actually look." },
    { title: "Nothing talks to anything", description: "Enquiries get re-typed between your inbox, your CRM and your project tools. I connect them so leads flow through without double handling." },
  ],
  solutions: [
    { title: "Project showcases", description: "Portfolios that load instantly and show the work at full quality, organised the way clients actually browse." },
    { title: "Client and tender portals", description: "Password-protected areas for project progress, documents and tenders, so 'how's my build going' stops being a phone call." },
    { title: "Capability statements that download", description: "Your capability statement and certifications available as clean, current downloads, not a PDF from three years ago." },
  ],
  integrations: ["PROCORE", "BUILDERTREND", "COCONSTRUCT", "XERO", "MYOB", "HUBSPOT", "DEPUTY", "[YOUR SYSTEM]"],
  caseStudies: [
    { href: "/case-studies/peninsula-homes", category: "Bespoke homes", title: "Peninsula Homes", blurb: "A Northern Beaches builder whose site still scores 94 on PageSpeed two years on." },
    { href: "/case-studies/coast-remedial-solutions", category: "Remedial building", title: "Coast Remedial Solutions", blurb: "Gold Coast remedial specialists across residential, commercial and industrial work." },
    { href: "/case-studies/dirt", category: "Construction branding", title: "DIRT", blurb: "A branding agency built to help construction and property firms win bids." },
  ],
  stats: [
    { value: "25+", label: "Years in digital" },
    { value: "10", label: "Years in steel detailing & drafting" },
    { value: "85+", label: "PageSpeed, guaranteed", accent: true },
  ],
  cta: {
    heading: "Let's get your projects online properly.",
    body: "Send me your current site and the three jobs you're proudest of. I'll come back with what I'd change and what it costs.",
    primary: { label: "Start a project", href: "/launch-your-vision" },
    secondary: CTA_SECONDARY,
  },
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
