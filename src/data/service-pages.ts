// Data model for the data-driven service template (BRIEF §8).
// Props: name, outcome, included[], pricingAnchor, relatedWork[], faq[],
// ctaVariant, plus an optional process timeline and SEO/JSON-LD fields.
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
  /** Optional stage tag. When omitted the template shows a 01–NN index. */
  when?: string;
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
  process?: { heading: string; note?: string; steps: ProcessStep[] };
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
    "Your site has to carry real load: traffic, content, integrations, and years of edits by people who aren't developers. I build it to handle all of that.",
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
        "Structure, markup and schema done while the site is built, not bolted on afterwards.",
    },
    {
      title: "Accessibility to WCAG 2.1 AA",
      description:
        "Keyboard navigation, proper contrast, and real labels. It's becoming a legal requirement in Australia.",
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
        "Built into every project. The design stage is the right time to change your mind.",
    },
  ],
  process: {
    heading: "First look in about three weeks. Then feedback, final touches, and live.",
    note: "Once the design's signed off I start building. You'll see the site on a private staging link around three weeks in, then we run two rounds of feedback and the final polish before going live. Bigger sites take longer. I scope the exact timeline with the fixed price, so you know before we start.",
    steps: [
      {
        title: "Design sign-off",
        description: "We lock the design before I write code. Bring your own and we start right here.",
      },
      {
        title: "Development",
        description: "I build the site: clean code, your CMS, integrations and content.",
      },
      {
        title: "First look",
        description: "You see it on a private staging link, around three weeks in.",
      },
      {
        title: "Feedback",
        description: "Two rounds. You review it, I make the changes.",
      },
      {
        title: "Final touches",
        description: "Performance, accessibility and cross-device checks.",
      },
      {
        title: "Go live",
        description: "Launch, then hosting, patching, changes and reporting.",
      },
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
        "A $999 site is one page, no revisions, and a template you'll be replacing inside two years. What I build is meant to still be doing its job years after launch.",
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

export const BUILD_ONLY: ServicePageData = {
  slug: "build-only",
  breadcrumbLabel: "Have a design? I'll build it",
  name: "Have a design? I'll build it",
  outcome:
    "Your designer has done their job. I build it exactly, on whichever platform actually suits it, with the same performance guarantee as a full RAVENCI build.",
  supporting:
    "Bring a Figma file, an XD file, or a flat PDF. You get a hand-built site that matches the design and holds up in the real world, not an approximation stitched together in a page builder.",
  heroCtas: {
    primary: { label: "Send me the design", href: "/launch-your-vision" },
    secondary: { label: "What's included", href: "#included" },
  },
  pricingAnchor: {
    fromLabel: "QUOTED ON PAGES",
    note: "Priced on the number of pages and the platform. I scope it and fix it before we start.",
    ticks: [
      "Pixel-accurate to your design",
      "85+ PageSpeed guaranteed",
      "White-label if you're an agency",
    ],
  },
  included: [
    { title: "Pixel-accurate build", description: "I build to your design exactly, not approximately, down to spacing and states." },
    { title: "The right platform", description: "WordPress, Shopify, or Next.js, whichever actually suits the design and the job." },
    { title: "A CMS you'll actually use", description: "My own block system so you or your client can edit any page without breaking the layout." },
    { title: "Performance optimisation", description: "The same 85+ PageSpeed guarantee as a full build, handled in the code." },
    { title: "Accessibility to WCAG 2.1 AA", description: "Keyboard navigation, proper contrast, and real labels, built in." },
    { title: "Responsive across devices", description: "Built and tested mobile-first on real devices, not just resized in a browser." },
    { title: "Video training, made for you", description: "Recorded against the finished site, so you or your client aren't dependent on me." },
    { title: "White-label option", description: "If you're an agency or a studio, I build under your name and deal with you, not your client." },
    { title: "Revision rounds", description: "Built into the project so we get the build matching the design exactly." },
  ],
  process: {
    heading: "First look in about three weeks. Then feedback, final touches, and live.",
    note: "Because the design is already done, we start at build. For a smaller site you'll see it on a private staging link around three weeks in, then two rounds of feedback and the final polish before going live. Bigger sites take longer. I scope the exact timeline with the fixed price.",
    steps: [
      { title: "Send the design", description: "Figma, XD, or a flat PDF. Anything I can build to accurately." },
      { title: "Development", description: "I build the site to your design, on the platform that suits it." },
      { title: "First look", description: "You see it on a private staging link, around three weeks in for a smaller site." },
      { title: "Feedback", description: "Two rounds. You review it against the design, I make the changes." },
      { title: "Final touches", description: "Performance, accessibility, and cross-device checks." },
      { title: "Go live", description: "Launch, then hosting and support if you want it." },
    ],
  },
  relatedWork: [
    { href: "/case-studies/peninsula-homes", category: "Construction", title: "Peninsula Homes", blurb: "A bespoke home builder's site, built to a considered design." },
    { href: "/case-studies/nikita-morell", category: "Professional services", title: "Nikita Morell", blurb: "A copywriter for architects, with a site to match the writing." },
    { href: "/case-studies/sac-consulting", category: "Professional services", title: "SAC Consulting", blurb: "A workplace culture consultancy that needed authority, fast." },
  ],
  faq: [
    { question: "What design formats do you accept?", answer: "Figma and Adobe XD are ideal because I can pull exact values straight from them. I can also work from a flat PDF or image if that's what you have." },
    { question: "Will the build match the design exactly?", answer: "Yes. I build to the design, not around it. Spacing, states and responsive behaviour all match what you handed over, and the revision rounds are there to get it precise." },
    { question: "What platform will you build it on?", answer: "Whichever suits the design and how the site needs to work. Usually WordPress with my own block system, Shopify for a store, or Next.js when it needs to behave like an application." },
    { question: "Do you work white-label for agencies?", answer: "I do. If you're a design studio or agency, I build under your name and deal with you directly, not your client." },
    { question: "How long does a build take?", answer: "For a smaller site with the design already done, you'll usually see a first look around three weeks in. Larger sites take longer, and I give you the timeline with the fixed price up front." },
  ],
  closingCta: {
    heading: "Got the design? Send it through.",
    body: "Send me the files and the page count and I'll come back with a scoped, fixed price and a timeline. No obligation.",
    primary: { label: "Send me the design", href: "/launch-your-vision" },
  },
  sticky: { label: "Send me the design", href: "/launch-your-vision" },
  metaTitle: "Build From Your Design | Website Development Brisbane | RAVENCI",
  metaDescription:
    "Have a website design ready? I build it exactly, on the platform that suits it, with an 85+ PageSpeed guarantee. Figma, XD or PDF. White-label for agencies.",
  schema: { serviceType: "Website Development (build from a provided design)" },
};

export const ECOMMERCE: ServicePageData = {
  slug: "ecommerce",
  breadcrumbLabel: "eCommerce",
  name: "eCommerce",
  outcome:
    "I build you a Shopify or BigCommerce store that sells, with the product discovery, checkout, shipping logic and inventory sync that turn a good-looking store into one that makes you money.",
  supporting:
    "Certified Shopify and BigCommerce partner. I recommend the platform that fits your operations, catalogue size and growth plans, not the one that's easiest for me.",
  heroCtas: {
    primary: { label: "Request a proposal", href: "/launch-your-vision" },
    secondary: { label: "What's included", href: "#included" },
  },
  pricingAnchor: {
    fromLabel: "FROM",
    price: "$12,000",
    note: "Tell me what you sell and how you operate, and I come back with the right platform, a realistic timeline and a fixed price. Custom eCommerce from $18,000.",
    ticks: [
      "Custom theme and brand design",
      "Checkout configured for Australian buyers",
      "You own the store and the data",
    ],
  },
  included: [
    { title: "Custom theme design", description: "Your store looks and feels like your brand, not a template with your logo dropped in. Designed around how your customers browse and buy." },
    { title: "Product catalogue setup", description: "Variants, collections, filters and search set up so customers find what they want. Up to 100 products included, bulk import for larger catalogues." },
    { title: "Checkout optimisation", description: "Payment gateways, shipping calculators, tax rules and abandoned-cart recovery configured for Australian buyers." },
    { title: "Inventory and fulfilment", description: "Stock synced with your warehouse, POS or 3PL, multi-location support, and automated low-stock alerts." },
    { title: "Analytics and conversion tracking", description: "GA4 with eCommerce events, Meta Pixel and conversion tracking, so you know exactly what drives revenue." },
    { title: "Staff training", description: "Your team trained on order management, product updates and daily operations, so you run the store without calling a developer." },
  ],
  process: {
    heading: "How your store gets built.",
    note: "Once the design's signed off I build the store. A standard build runs about six to eight weeks, with a first look partway through and two rounds of feedback before we go live. Larger or custom stores take longer, and I give you the exact timeline with the fixed price.",
    steps: [
      { title: "Design sign-off", description: "We lock the design and the product structure before I build." },
      { title: "Build the store", description: "Theme, catalogue, checkout, shipping, tax and integrations." },
      { title: "First look", description: "You see the store on a private staging link partway through." },
      { title: "Feedback", description: "Two rounds. You review it, I make the changes." },
      { title: "Final touches", description: "Performance, mobile, and a full test of the buying path." },
      { title: "Go live", description: "Launch, staff training, then hosting and support." },
    ],
  },
  relatedWork: [
    { href: "/case-studies/goingdark", category: "eCommerce", title: "GoingDark", blurb: "Migrated an inherited BigCommerce store to a clean Shopify build. Purchaser rate up 38.5% in three months." },
    { href: "/case-studies/cadeaurable", category: "eCommerce", title: "Cadeaurable", blurb: "Personalised laser-cut gifts, live on BigCommerce with product personalisation built in from day one." },
  ],
  faq: [
    { question: "Which platform should I choose, Shopify or BigCommerce?", answer: "Most product businesses under 5,000 SKUs do best on Shopify. BigCommerce suits larger catalogues, B2B requirements, or businesses that need multi-storefront from one dashboard. I recommend based on your operations, catalogue size and growth plans, not my preference." },
    { question: "Can you migrate my existing store?", answer: "Yes. I migrate products, customers, order history and SEO equity (URL redirects, meta data, structured data). Migrations are scoped and quoted separately based on catalogue size, platform and integration complexity." },
    { question: "How long does an eCommerce build take?", answer: "A standard build takes six to eight weeks. Custom eCommerce with advanced integrations like ERP, multi-channel or custom filtering takes eight to ten weeks or more. I give you regular progress updates and stick to the agreed timeline." },
    { question: "Do you handle ongoing store management?", answer: "I train your team to handle daily operations: orders, product updates, promotions. For ongoing platform support, my Managed Web plans cover maintenance, updates and performance monitoring. Most eCommerce clients add a plan after launch." },
    { question: "What about payments and shipping for Australian businesses?", answer: "I configure Australian payment gateways (Shopify Payments, Stripe, PayPal, Afterpay, Zip), GST calculation, and shipping zones for domestic and international delivery. I also set up Australia Post, Sendle or your preferred carrier for real-time rates." },
  ],
  closingCta: {
    heading: "Tell me about your products. I'll build the store.",
    body: "Send through what you sell and how you operate, and I'll come back with the platform, a timeline and a fixed price. No obligation.",
    primary: { label: "Start a project", href: "/launch-your-vision" },
  },
  sticky: { label: "Request a proposal", href: "/launch-your-vision", startingPrice: 12000 },
  metaTitle: "eCommerce Website Development Brisbane | Shopify & BigCommerce | RAVENCI",
  metaDescription:
    "Custom Shopify and BigCommerce stores for Australian product businesses. Certified partner, 25+ years. eCommerce builds from $12,000. Brisbane-based.",
  schema: {
    serviceType: "eCommerce Website Development",
    offers: [
      { name: "eCommerce Store", price: "12000", description: "Custom Shopify or BigCommerce store with theme design, product catalogue setup, payment and shipping integration." },
      { name: "Custom eCommerce", price: "18000", description: "Large catalogues, custom filtering, multi-channel and ERP integrations for complex stores." },
    ],
  },
};

export const WEB_APPS: ServicePageData = {
  slug: "web-apps",
  breadcrumbLabel: "Web Apps & Client Portals",
  name: "Web Apps & Client Portals",
  outcome:
    "I replace the spreadsheets and duplicate systems eating your team's time with custom software built around how your business actually works.",
  supporting:
    "Logins, roles, job tracking, document handover, and integrations with the CRM, booking, accounting or industry software you already run.",
  heroCtas: {
    primary: { label: "Request a proposal", href: "/launch-your-vision" },
    secondary: { label: "What's included", href: "#included" },
  },
  pricingAnchor: {
    fromLabel: "FROM",
    price: "$35,000",
    note: "Priced from a floor and scoped to what you need. Business platforms from $55,000, enterprise builds from $75,000.",
    ticks: [
      "Fixed pricing, no scope creep",
      "Built to scale from startup to enterprise",
      "Brisbane-based, Australian business understanding",
    ],
  },
  included: [
    { title: "Custom workflow design", description: "Built specifically for how your business operates, not bent around someone else's software." },
    { title: "Real-time data", description: "Make decisions on current information, not yesterday's reports." },
    { title: "Team collaboration", description: "Everyone works from the same information, with role-based access." },
    { title: "Automated reporting", description: "Insights generated automatically instead of manual number crunching." },
    { title: "Talks to your existing tools", description: "Connects to Xero, your CRM and your booking system so data flows automatically instead of being re-typed three times." },
    { title: "Works on every device", description: "Your team uses it on the desktop, on the road, on a phone. Same data, same experience." },
    { title: "Your data, properly protected", description: "Encrypted connections, secure logins, and the permissions structure your industry expects." },
    { title: "Grows with you", description: "Handles ten users or ten thousand without slowing down. You won't outgrow it the year after I ship it." },
  ],
  process: {
    heading: "How a build runs.",
    note: "Every build starts by mapping how you work now and where the bottlenecks are, before any code is written. A single-purpose tool runs about six to eight weeks, a full business platform twelve to sixteen, and a larger enterprise build longer. I scope the exact timeline with the fixed price.",
    steps: [
      { title: "Process analysis", description: "I map your current workflows and find the bottlenecks worth fixing." },
      { title: "Build", description: "Custom software built around how your team actually works." },
      { title: "First look", description: "You see a working version early and use it against real tasks." },
      { title: "Feedback", description: "You review it, I refine it against how the work really happens." },
      { title: "Testing", description: "Security, data, and every workflow checked before launch." },
      { title: "Launch and training", description: "Go live, train your team, then ongoing support." },
    ],
  },
  relatedWork: [
    { href: "/case-studies/covenant-security-solutions", category: "Security", title: "Covenant Security", blurb: "A custom on-the-fly camera pricer, built without an eCommerce platform." },
    { href: "/case-studies/nikita-morell", category: "Professional services", title: "Nikita Morell", blurb: "A second site built on Next.js, Notion and ActiveCampaign." },
    { href: "/case-studies/cadeaurable", category: "eCommerce", title: "Cadeaurable", blurb: "Product personalisation configured from scratch on BigCommerce." },
  ],
  faq: [
    { question: "How do you make sure the app solves our business problems?", answer: "I start every project by mapping your current workflows and finding the bottlenecks. You'll see exactly how the app improves your operations before I write a line of code." },
    { question: "Can it integrate with our existing systems?", answer: "Yes. Every build includes API integration. I commonly connect accounting software like Xero and QuickBooks, CRM systems, and other business tools, so your app works with what you already use." },
    { question: "What if our needs change as we grow?", answer: "I build everything with scale in mind, so the architecture handles more users, data and features over time. I also offer ongoing development to add features as the business evolves." },
    { question: "How do you handle data security and backups?", answer: "The database platforms I use are secure and stable, and they protect your privacy and your customers'. I use cloud hosting close to your users so it's fast as well as safe." },
    { question: "What return can we expect from a custom app?", answer: "Most clients are after saved time, fewer manual errors, and faster decisions from better information. I scope each build around the specific problems costing you money, so the return is tied to what it actually fixes for you." },
  ],
  closingCta: {
    heading: "Tell me what's slowing your team down.",
    body: "Walk me through the process that's eating your time and I'll come back with a scoped, fixed price and a timeline. No obligation.",
    primary: { label: "Start a project", href: "/launch-your-vision" },
  },
  sticky: { label: "Request a proposal", href: "/launch-your-vision", startingPrice: 35000 },
  metaTitle: "Web App Development | RAVENCI Solutions",
  metaDescription:
    "Replace your spreadsheets with software that works. Custom web applications that eliminate manual work and scale with your Brisbane business.",
  schema: { serviceType: "Web App Development" },
};

export const MANAGED_WEB: ServicePageData = {
  slug: "website-maintenance",
  breadcrumbLabel: "Managed Web",
  name: "Managed Web",
  outcome:
    "I host, secure and look after your website so it stays fast, online and out of your hands.",
  supporting:
    "Since October 2024 I only host sites that are on ongoing maintenance, so hosting and care come together. That's why my sites stay fast and secure instead of quietly rotting.",
  heroCtas: {
    primary: { label: "Get started", href: "/launch-your-vision" },
    secondary: { label: "What's covered", href: "#included" },
  },
  pricingAnchor: {
    fromLabel: "FROM",
    price: "$39/mo",
    note: "Hosting from $39/mo. Hosting plus maintenance from $269/mo. One-off tidy-up $495.",
    ticks: [
      "99.9% uptime",
      "Daily backups with quick restore",
      "24/7 monitoring, Brisbane-based support",
    ],
  },
  included: [
    { title: "Managed cloud hosting", description: "Fast servers worldwide so your site loads quickly wherever your visitor is, with automatic scaling when traffic spikes." },
    { title: "SSL and secure setup", description: "Encrypted connection, secure setup, and the lock icon your customers expect to see." },
    { title: "Daily backups", description: "Backed up daily with quick restore points, so if anything ever goes wrong it's back the way it was yesterday in minutes." },
    { title: "Security monitoring and patching", description: "Continuous scans against malware and vulnerabilities, plus software, plugin and theme updates to keep everything current." },
    { title: "Uptime monitoring", description: "24/7 monitoring, so if something goes wrong at 3am I know about it before your customers do." },
    { title: "Performance checks", description: "Regular optimisation of speed, database and overall performance so pages keep loading instantly." },
    { title: "Content and link checks", description: "Regular checks of forms, links and content across browsers and devices to make sure everything works." },
    { title: "Support and monthly reports", description: "Brisbane-based support you can reach directly, a two-hour response during business hours, and a monthly report of the work done." },
  ],
  faq: [
    { question: "What's included?", answer: "Cloud hosting, SSL, daily backups, security monitoring and patching, uptime monitoring, performance checks, and Brisbane-based support. No hidden fees or surprise add-ons." },
    { question: "Can I host elsewhere and still get your other services?", answer: "I prefer to host the sites I maintain so I can guarantee performance and security, but I can work with other quality hosts. The hosting plus maintenance bundle is the best value, because everything's optimised to work together." },
    { question: "What if my site goes down or traffic spikes?", answer: "I monitor 24/7 and usually restore within two hours during business hours. The cloud hosting scales automatically for traffic spikes, so a busy day doesn't take your site down." },
    { question: "Do you migrate my existing website?", answer: "Yes, I handle the full migration from your current host, though extra charges may apply. Your site will be faster and more secure from day one." },
    { question: "Is maintenance really necessary?", answer: "An unmaintained site is a soft target. Outdated plugins and no backups are how sites get hacked or go down, and fixing a breach or rebuilding after one costs far more than keeping it maintained, on top of the sales you lose while it's offline." },
  ],
  closingCta: {
    heading: "Want it handled?",
    body: "Tell me about your site and I'll set up hosting and maintenance that keeps it fast, secure and online. One invoice, one person to call.",
    primary: { label: "Get started", href: "/launch-your-vision" },
  },
  sticky: { label: "Get managed", href: "/launch-your-vision", startingPrice: 39 },
  metaTitle: "Managed Web | RAVENCI Solutions",
  metaDescription:
    "Managed web hosting and maintenance from Brisbane. Hosting, SSL, daily backups, security, uptime monitoring and updates in one package. From $39/mo, or hosting plus maintenance from $269/mo.",
  schema: {
    serviceType: "Managed Web Hosting & Maintenance",
    offers: [
      { name: "Managed hosting", price: "39", description: "Cloud hosting with SSL, daily backups, security monitoring and Brisbane-based support, billed monthly." },
      { name: "Hosting + maintenance", price: "269", description: "Hosting plus ongoing maintenance, updates and monitoring in one monthly package." },
      { name: "Monthly maintenance", price: "249", description: "Ongoing updates, security, backups and performance checks, billed monthly." },
      { name: "One-off tidy-up", price: "495", description: "A one-off round of updates, fixes, plugin tests and security checks." },
    ],
  },
};

export const SEO_CONTENT: ServicePageData = {
  slug: "seo-and-content",
  breadcrumbLabel: "SEO / AEO / GEO",
  name: "SEO / AEO / GEO",
  outcome:
    "I make sure the right customers can find you when they search, and that the answer they get is yours.",
  supporting:
    "Technical SEO, content and local presence for Google, plus the structured data that helps AI assistants quote you correctly when buyers ask them instead.",
  heroCtas: {
    primary: { label: "Request a proposal", href: "/launch-your-vision" },
    secondary: { label: "What's included", href: "#included" },
  },
  pricingAnchor: {
    fromLabel: "FROM",
    price: "$1,750/mo",
    note: "Standard SEO retainer. eCommerce SEO and campaigns from $2,250/mo. Copywriting from $390 per page.",
    ticks: [
      "I focus on leads and sales, not just traffic",
      "Transparent AUD pricing, clear scopes",
      "Content written for your customers first",
    ],
  },
  included: [
    { title: "Technical SEO", description: "I make sure Google can read your site properly: crawlability, indexation and sitemaps sorted so the right pages get found." },
    { title: "Keyword research", description: "In-depth research into the terms your customers actually search for, up to 50 target terms." },
    { title: "On-page optimisation", description: "On-page work across your key pages, up to eight a month, plus internal linking improvements." },
    { title: "Content strategy and articles", description: "Content planning that brings the right customers in, with two articles or posts a month and on-page refreshes." },
    { title: "Local SEO", description: "Optimisation for local searches to win in Brisbane and your service areas, including Google Business Profile." },
    { title: "Structured data", description: "Schema markup on your key templates, so search engines and AI assistants understand exactly what each page is about." },
    { title: "Conversion-focused copy", description: "Website copy written to move visitors towards enquiries and sales, not just to fill the page." },
    { title: "Monthly reporting and strategy call", description: "Clear reporting on rankings, traffic quality and conversions, plus a monthly strategy call." },
  ],
  relatedWork: [
    { href: "/case-studies/goingdark", category: "eCommerce", title: "GoingDark", blurb: "Fixed hundreds of 404s, added alt text and restructured pages. Organic search up 12.5% three months after relaunch." },
  ],
  faq: [
    { question: "How long does it take to see SEO results?", answer: "Most businesses start seeing improvements in three to six months, with significant gains typically within six to twelve. It depends on your competition, domain authority and how consistently the work gets done." },
    { question: "Do you guarantee specific rankings or traffic?", answer: "No ethical SEO provider can guarantee rankings. What I guarantee is disciplined execution and measurable improvements in visibility, traffic quality and conversions." },
    { question: "Can you work with our existing marketing team?", answer: "Yes. I work well alongside in-house teams, provide training and guidelines, and fit in wherever you need me." },
    { question: "What industries do you work with?", answer: "I work across industries, with strong experience in professional services, healthcare, retail and B2B." },
    { question: "How do you measure success and ROI?", answer: "I track organic traffic growth, rankings, conversions, and revenue attributed to organic channels, reported to you every month." },
  ],
  closingCta: {
    heading: "Want to get found?",
    body: "Tell me about your business and who you're trying to reach, and I'll come back with a scope and a fixed monthly price.",
    primary: { label: "Start a project", href: "/launch-your-vision" },
  },
  sticky: { label: "Request a proposal", href: "/launch-your-vision", startingPrice: 1750 },
  metaTitle: "SEO & Content Services | RAVENCI Solutions",
  metaDescription:
    "SEO and content in Brisbane, Australia that gets you found and converts. Transparent AUD pricing. On-page SEO, content, and ethical link building.",
  schema: {
    serviceType: "SEO & Content",
    offers: [
      { name: "Standard SEO", price: "1750", description: "Ongoing SEO with technical fixes, on-page optimisation, content and monthly reporting." },
      { name: "eCommerce SEO + Campaigns", price: "2250", description: "SEO and campaign strategy for online stores: product pages, category structure, feeds and conversion tracking." },
      { name: "Copywriting", price: "390", description: "Professional website copy as a standalone service, per page." },
    ],
  },
};

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  "web-development": WEB_DEVELOPMENT,
  "build-only": BUILD_ONLY,
  ecommerce: ECOMMERCE,
  "web-apps": WEB_APPS,
  "website-maintenance": MANAGED_WEB,
  "seo-and-content": SEO_CONTENT,
};
