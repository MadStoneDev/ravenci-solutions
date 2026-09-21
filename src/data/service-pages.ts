// Data model for the data-driven service template (BRIEF §8).
// Props: name, outcome, included[], pricingAnchor, relatedWork[], faq[],
// ctaVariant — plus an optional process timeline and SEO/JSON-LD fields.
// Copy follows design/DECISIONS.md: genuine copy only, WCAG 2.1 AA, "from
// three weeks" framing, no invented figures.

export interface CtaLink {
  label: string;
  href: string;
}

export interface PricingAnchor {
  /** e.g. "FROM", "QUOTED ON SCOPE". */
  fromLabel: string;
  /** e.g. "$7,500". Omit when quoted on scope. */
  price?: string;
  note?: string;
  ticks: string[];
}

export interface IncludedItem {
  title: string;
  description: string;
}

export interface ProcessStep {
  when: string;
  title: string;
  description: string;
}

export interface RelatedWorkItem {
  href: string;
  category: string;
  title: string;
  blurb: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceSchemaOffer {
  name: string;
  price: string;
  description: string;
}

export interface ServicePageData {
  slug: string;
  breadcrumbLabel: string;
  /** hero h1 */
  name: string;
  /** hero lead */
  outcome: string;
  /** supporting body under the lead */
  supporting?: string;
  heroCtas: { primary: CtaLink; secondary?: CtaLink };
  pricingAnchor: PricingAnchor;
  included: IncludedItem[];
  process?: { heading: string; steps: ProcessStep[] };
  relatedWork?: RelatedWorkItem[];
  faq: ServiceFaq[];
  closingCta: {
    heading: string;
    body: string;
    primary: CtaLink;
    secondary?: CtaLink;
  };
  /** Mobile sticky CTA. */
  sticky: { label: string; href: string; startingPrice?: number };
  // SEO
  metaTitle: string;
  metaDescription: string;
  /** Optional Service schema offers for JSON-LD. */
  schema?: { serviceType: string; offers?: ServiceSchemaOffer[] };
}

export const WEB_DEVELOPMENT: ServicePageData = {
  slug: "web-development",
  breadcrumbLabel: "Website Design & Development",
  name: "Website Design & Development",
  outcome:
    "One senior developer designs it around your business and hand-builds it. The whole website, not just the look.",
  supporting:
    "Your site is a structure. It carries load — traffic, content, integrations, five years of edits by people who aren't developers. I build it so it holds.",
  heroCtas: {
    primary: { label: "Request a proposal", href: "/launch-your-vision" },
    secondary: { label: "What's included", href: "#included" },
  },
  pricingAnchor: {
    fromLabel: "FROM",
    price: "$7,500",
    note: "Scoped and fixed before we start. Custom sites from $10,000, eCommerce from $12,000.",
    ticks: [
      "85+ PageSpeed guaranteed",
      "You own the code and content",
      "Tailored video training included",
    ],
  },
  included: [
    {
      title: "Responsive design",
      description:
        "Drawn mobile-first and tested on real devices, not just a browser resize.",
    },
    {
      title: "A CMS you'll actually use",
      description:
        "My own block system. Edit any page without a developer and without breaking the layout.",
    },
    {
      title: "Performance optimisation",
      description:
        "Core Web Vitals handled in the build, not patched by a caching plugin afterwards.",
    },
    {
      title: "SEO built in",
      description:
        "Structure, markup and schema done at build time so the content has somewhere to land.",
    },
    {
      title: "Accessibility to WCAG 2.1 AA",
      description:
        "Keyboard navigation, real contrast, proper labels. Increasingly a legal question, not a nice-to-have.",
    },
    {
      title: "Video training, made for you",
      description:
        "Recorded against your site, not a generic tutorial. So you're not dependent on me.",
    },
    {
      title: "Analytics and Search Console",
      description:
        "Configured and verified, in accounts you own, before launch day.",
    },
    {
      title: "SSL and a secure launch",
      description:
        "Certificates, redirects and a migration plan so you don't lose rankings on the switch.",
    },
    {
      title: "Revision rounds",
      description:
        "Written into every project. Changing your mind at design stage is the cheap time to do it.",
    },
  ],
  process: {
    heading: "From three weeks, depending on scope. Here's where the time goes.",
    steps: [
      { when: "WK 1", title: "Discovery", description: "Goals, audience, competitors, scope." },
      { when: "WK 1–2", title: "Strategy", description: "Architecture, user flows, platform call." },
      { when: "WK 2–3", title: "Design", description: "Wireframes, then full visuals you sign off." },
      { when: "WK 3–5", title: "Build", description: "Clean code, CMS, integrations, content." },
      { when: "LAUNCH", title: "Test & launch", description: "Devices, performance, accessibility, go live." },
      { when: "ONGOING", title: "Support", description: "Hosting, patching, changes, reporting." },
    ],
  },
  relatedWork: [
    {
      href: "/case-studies/peninsula-homes",
      category: "Construction",
      title: "Peninsula Homes",
      blurb: "Custom WordPress build for a bespoke home builder.",
    },
    {
      href: "/case-studies/nikita-morell",
      category: "Professional services",
      title: "Nikita Morell",
      blurb: "A copywriter for architects, with a site to match the writing.",
    },
    {
      href: "/case-studies/sac-consulting",
      category: "Professional services",
      title: "SAC Consulting",
      blurb: "A workplace culture consultancy that needed authority, fast.",
    },
  ],
  faq: [
    {
      question: "How long does a typical website take to build?",
      answer:
        "A foundation site takes about three weeks, a growth site four to six, and a premium brand and web project ten to fourteen. The variable is almost always content, not code.",
    },
    {
      question: "What if I am not happy with the result?",
      answer:
        "You sign off the design before I write any code, and revision rounds are written into every project. Nothing gets built that you have not already seen and approved.",
    },
    {
      question: "Can I update the website myself after it launches?",
      answer:
        "Yes, and you will want to. I build on my own block system so you can edit any page without breaking the layout, and every project includes video training recorded against your actual site.",
    },
    {
      question: "What makes this more expensive than a $999 website?",
      answer:
        "A $999 site is one page, no revisions, and a template you will be rebuilding inside two years. You are not buying pages. You are buying a business asset that keeps working after launch day.",
    },
    {
      question: "Do you handle hosting and domains too?",
      answer:
        "I do. Managed hosting starts at $39 a month with SSL, daily backups and monitoring, and I manage domains and DNS as part of it. One invoice, one person to call.",
    },
  ],
  closingCta: {
    heading: "Tell me the problem. I'll take it from there.",
    body: "Two minutes of questions and I'll come back with a scoped, fixed price and a timeline. No obligation, no sales sequence.",
    primary: { label: "Launch your vision", href: "/launch-your-vision" },
  },
  sticky: { label: "Request a proposal", href: "/launch-your-vision", startingPrice: 7500 },
  metaTitle: "Custom Website Design Brisbane, Built to Last | RAVENCI",
  metaDescription:
    "Custom websites for established Brisbane businesses. Fast, owned by you, still working in five years. No templates, no plugin clutter. From $7,500.",
  schema: {
    serviceType: "Website Design & Development",
    offers: [
      {
        name: "Business Website",
        price: "7500",
        description:
          "Custom responsive design up to 5 pages with CMS, CRM integration, SEO, and 85+ PageSpeed score.",
      },
      {
        name: "Custom Website",
        price: "10000",
        description:
          "Fully custom design and development up to 12 pages with brand identity, advanced CMS, integrations, and structured data.",
      },
      {
        name: "eCommerce",
        price: "12000",
        description:
          "Custom Shopify or BigCommerce store with product catalogue setup, payment and shipping integration.",
      },
    ],
  },
};

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  "web-development": WEB_DEVELOPMENT,
};
