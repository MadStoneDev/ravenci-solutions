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
  /** Optional per-page overrides for section headings that otherwise use the
   * template defaults ("Included in every build", "Built this way",
   * "Common questions"). Set only where a page needs its own wording. */
  headings?: { included?: string; relatedWork?: string; faq?: string };
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
  /** Optional Service schema name. Falls back to the hero `name` when unset. */
  serviceName?: string;
  /** Optional Service schema offers for JSON-LD. */
  schema?: { serviceType: string; offers?: ServiceSchemaOffer[] };
}

export const WEB_DEVELOPMENT: ServicePageData = {
  slug: "web-development",
  breadcrumbLabel: "Website Design & Development",
  name: "Web design and development in Brisbane",
  outcome:
    "I design your website around your business, then I build it by hand. Not a template with your logo dropped in. The whole thing, from the layout you see to the code underneath it.",
  supporting:
    "I'm based in Brisbane and work with businesses here and right across Australia, mostly builders, clinics and professional firms. Your site has to handle real traffic, the tools you already use, and years of edits by people who aren't developers. That's what I build it for.",
  heroCtas: {
    primary: { label: "Request a proposal", href: "/launch-your-vision" },
    secondary: { label: "What's included", href: "#included" },
  },
  pricingAnchor: {
    fromLabel: "FROM",
    price: "$7,500",
    note: "Every project is scoped and priced before we start. WordPress sites from $7,500, custom builds from $10,000 and online stores from $12,000.",
    ticks: [
      "85+ PageSpeed guaranteed",
      "You own the code and content",
      "Tailored video training included",
    ],
  },
  headings: {
    included: "What's included in every website I build",
    relatedWork: "Websites I've built for Australian businesses",
    faq: "Questions about getting a website built",
  },
  included: [
    {
      title: "Built for phones first",
      description:
        "Most of your customers will see your site on their phone before anything else. I design for that and test on real devices, not just a shrunk-down browser window.",
    },
    {
      title: "A CMS you'll actually use",
      description:
        "The CMS is the part where you edit your content. Mine is my own block system, RAVENCI Builder, so you can change any page yourself without calling me and without wrecking the layout.",
    },
    {
      title: "Speed, guaranteed",
      description:
        "85+ on Google's PageSpeed test. I build it fast from the start rather than patching it with a caching plugin afterwards.",
    },
    {
      title: "SEO from day one",
      description:
        "Page structure, schema (code that tells Google and AI what your business does) and local signals for Brisbane searches, all set up while I build. Not bolted on later.",
    },
    {
      title: "Accessible to WCAG 2.1 AA",
      description:
        "Keyboard navigation, readable contrast and proper labels. It's good for your customers, and more and more it's expected of Australian businesses.",
    },
    {
      title: "Training videos for your site",
      description:
        "I record them on your actual website, so you're not trying to translate a generic tutorial. I don't want you dependent on me.",
    },
    {
      title: "Analytics and Search Console",
      description:
        "Set up and verified before launch, in accounts you own.",
    },
    {
      title: "A safe launch",
      description:
        "SSL (the padlock next to your web address), redirects from your old pages and a migration plan, so you don't lose the Google rankings you've already earned.",
    },
    {
      title: "Revision rounds",
      description:
        "Built into every project. The design stage is the best time to change your mind, so I'd rather you do it then.",
    },
  ],
  process: {
    heading: "How your website gets built",
    note: "Once you've signed off the design, I start building. Around three weeks in, you'll see your site on a private staging link (a hidden copy only you and I can see). We go through two rounds of feedback, I polish it, and it goes live. Bigger sites take longer, and I'll tell you exactly how long in the proposal so there are no surprises.",
    steps: [
      {
        title: "Design sign-off",
        description: "We lock in the design before I write any code. Already have a design? We start here.",
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
        description: "Two rounds. You tell me what to change, I change it.",
      },
      {
        title: "Final touches",
        description: "Speed, accessibility and testing across phones, tablets and browsers.",
      },
      {
        title: "Go live",
        description: "Launch day, then hosting, updates and support for as long as you want it.",
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
      question: "How long does it take to build a website?",
      answer:
        "A WordPress business site usually takes three to six weeks. A custom build with integrations takes six to ten, and an online store eight to twelve. Honestly, what slows most projects down isn't the code. It's waiting on content. The sooner you have your words and photos ready, the sooner you launch.",
    },
    {
      question: "What if I'm not happy with the result?",
      answer:
        "You sign off the design before I write a single line of code, and revision rounds are built into every project. Nothing gets built that you haven't already seen and approved. And if something still isn't right, tell me. I'd rather fix it than have you put up with it.",
    },
    {
      question: "Can I update the website myself after it launches?",
      answer:
        "Yes, and I want you to. My block system lets you edit any page without breaking the layout, and I record training videos on your actual site so you know exactly how.",
    },
    {
      question: "Why does it cost more than a $999 website?",
      answer:
        "Because with a $999 website, you usually end up paying twice. It's often one page, no revisions, and a template you'll be replacing within two years. I build sites to still be doing their job five years from now.",
    },
    {
      question: "Do you work with businesses outside Brisbane?",
      answer:
        "Yes. I'm in Brisbane, but I've built sites for businesses in Sydney, on the Gold Coast and across Australia. Video calls work fine, and if you're local, I'm happy to meet in person.",
    },
    {
      question: "Do you handle hosting and domains too?",
      answer:
        "I do. Hosting and maintenance together is $269 a month and covers SSL, daily backups, updates, security and monitoring. I can look after your domain and DNS too. One invoice, one person to call.",
    },
  ],
  closingCta: {
    heading: "Tell me the problem. I'll take it from there.",
    body: "Two minutes of questions and I'll come back with a scoped, fixed price and a timeline. No obligation, no sales sequence.",
    primary: { label: "Launch your vision", href: "/launch-your-vision" },
  },
  sticky: { label: "Request a proposal", href: "/launch-your-vision", startingPrice: 7500 },
  metaTitle: "Web Design & Development Brisbane | RAVENCI Solutions",
  metaDescription:
    "Brisbane web design and development by one developer. Custom-built, owned by you, easy to edit and still fast in five years. From $7,500.",
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
    { question: "Do you handle ongoing store management?", answer: "I train your team to handle daily operations: orders, product updates, promotions. For ongoing platform support, my Hosting & Website Care plans cover maintenance, updates and performance monitoring. Most eCommerce clients add a plan after launch." },
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
  name: "Custom web apps and client portals, built in Brisbane",
  outcome:
    "I replace the spreadsheets and duplicate systems eating your team's time with software built around how your business actually works.",
  supporting:
    "Software is what I love building most. Alongside client work, I build and run my own products, including a file-sharing app, a QR code platform, a note-taking app, and RankRiot, the site crawler I use for SEO audits. Before RAVENCI, I built a document control system for the engineering firm I worked at, to speed up the team's day-to-day work. Logins, roles, job tracking, document handover, and integrations with the software you already run: that's the kind of thing I build.",
  heroCtas: {
    primary: { label: "Request a proposal", href: "/launch-your-vision" },
    secondary: { label: "What's included", href: "#included" },
  },
  pricingAnchor: {
    fromLabel: "FROM",
    price: "$35,000",
    note: "Priced from a floor and scoped to what you need. Business platforms from $55,000, enterprise builds from $75,000.",
    ticks: [
      "Fixed price, scoped upfront",
      "Built to grow with your business",
      "Brisbane-based, with Australian hosting available",
    ],
  },
  headings: {
    included: "What's included in every web app I build",
    relatedWork: "Custom software and integrations I've built",
    faq: "Questions about custom web apps",
  },
  included: [
    { title: "Custom workflow design", description: "Built specifically for how your business operates, not bent around someone else's software." },
    { title: "Real-time data", description: "Make decisions on current information, not yesterday's reports." },
    { title: "Team collaboration", description: "Everyone works from the same information, with role-based access." },
    { title: "Automated reporting", description: "Insights generated automatically instead of manual number crunching." },
    { title: "Talks to your existing tools", description: "Connects to Xero, your CRM and your booking system so data flows automatically instead of being re-typed three times." },
    { title: "Works on every device", description: "Your team uses it on the desktop, on the road, on a phone. Same data, same experience." },
    { title: "Your data, properly protected", description: "Encrypted connections, secure logins, and the permissions structure your industry expects." },
    { title: "Grows with you", description: "Built so you can add users, features and data over time without starting again. You shouldn't outgrow it the year after I hand it over." },
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
    { question: "Have you built software like this before?", answer: 'Yes, and not just for clients. I build and run my own software products, so I deal with the same things you will: real users, logins, payments, bugs at inconvenient hours, and features people keep asking for. You can see some of them on my <a href="/labs" class="text-accent hover:underline">Labs page</a>.' },
    { question: "What if our needs change as we grow?", answer: "I build everything with scale in mind, so the architecture handles more users, data and features over time. I also offer ongoing development to add features as the business evolves." },
    { question: "How do you handle data security and backups?", answer: "Everyone gets access to only what they need, through secure logins and role-based permissions. Data is backed up, and for businesses that need it, like healthcare or government work, it's kept on Australian servers. I'll talk you through exactly where your data lives and who can see it before anything is built." },
    { question: "What return can we expect from a custom app?", answer: "Most clients are after saved time, fewer manual errors, and faster decisions from better information. I scope each build around the specific problems costing you money, so the return is tied to what it actually fixes for you." },
    { question: "Do I really need a custom app, or is there software that already does this?", answer: "Sometimes there is, and if so I'll tell you. Custom software makes sense when off-the-shelf tools force you to work around them, or when you're paying for five systems that don't talk to each other. If an existing product does the job, you're better off with that, and I'd rather say so upfront than build something you don't need." },
  ],
  closingCta: {
    heading: "Tell me what's slowing your team down.",
    body: "Walk me through the process that's eating your time and I'll come back with a scoped, fixed price and a timeline. No obligation.",
    primary: { label: "Start a project", href: "/launch-your-vision" },
  },
  sticky: { label: "Request a proposal", href: "/launch-your-vision", startingPrice: 35000 },
  metaTitle: "Custom Web App & Software Development Brisbane | RAVENCI",
  metaDescription:
    "Custom web apps, client portals and business software, built in Brisbane. Replace spreadsheets and double handling with software that fits how you work. From $35,000.",
  serviceName: "Custom web app and software development in Brisbane",
  schema: { serviceType: "Web App Development" },
};

export const MANAGED_WEB: ServicePageData = {
  slug: "website-maintenance",
  breadcrumbLabel: "Hosting & Website Care",
  name: "Website hosting, maintenance and care in Brisbane",
  outcome:
    "I host, secure and look after your website so it stays fast, online and out of your hands.",
  supporting:
    "Since October 2024 I only host sites that are being maintained, whether by me or another reputable provider. That's why my sites stay fast and secure instead of quietly rotting.",
  heroCtas: {
    primary: { label: "Get started", href: "/launch-your-vision" },
    secondary: { label: "What's covered", href: "#included" },
  },
  pricingAnchor: {
    fromLabel: "PRICING",
    price: "$39/mo",
    note: "Hosting $39/mo, Maintenance $239/mo, Hosting + Maintenance $269/mo. Website Care (design and dev time) is separate, priced on request.",
    ticks: [
      "99.9% uptime",
      "Daily backups with quick restore",
      "24/7 monitoring, Brisbane-based support",
    ],
  },
  included: [
    { title: "Managed cloud hosting", description: "Fast, reliable cloud servers so your site loads quickly for your customers, with room to handle a busy day. If your data needs to stay in Australia, your site stays on Australian servers." },
    { title: "SSL and secure setup", description: "Encrypted connection, secure setup, and the lock icon your customers expect to see." },
    { title: "Daily backups", description: "Backed up daily with quick restore points, so if anything ever goes wrong it's back the way it was yesterday in minutes." },
    { title: "Security monitoring and patching", description: "Continuous scans against malware and vulnerabilities, plus software, plugin and theme updates to keep everything current." },
    { title: "Uptime monitoring", description: "24/7 monitoring, so if something goes wrong at 3am I know about it before your customers do." },
    { title: "Performance checks", description: "Regular optimisation of speed, database and overall performance so pages keep loading instantly." },
    { title: "Content and link checks", description: "Regular checks of forms, links and content across browsers and devices to make sure everything works." },
    { title: "Support and monthly reports", description: "Support from me, here in Brisbane, that you can reach directly, issues looked at by the next business day, and a monthly report of the work I did. (Priority turnaround is a Website Care thing.)" },
  ],
  headings: {
    faq: "Questions about website maintenance",
  },
  faq: [
    { question: "What's included?", answer: "Cloud hosting, SSL, daily backups, security monitoring and patching, uptime monitoring, performance checks, and Brisbane-based support. Running an online store adds $180/mo to Maintenance or Hosting + Maintenance." },
    { question: "What's the difference between maintenance and Website Care?", answer: "Maintenance keeps a site running: updates, security, backups, hosting. Website Care is a block of my time each month for design, development and content, with priority when you need something done. Most sites want maintenance; Website Care is for sites that keep changing." },
    { question: "Can I host elsewhere and still get maintenance?", answer: "Yes. Maintenance is $239/mo for a site hosted somewhere else. I'd rather host what I maintain so it's all in one place, but I don't insist on it." },
    { question: "What if my site goes down or traffic spikes?", answer: "I monitor your site around the clock, so I usually know it's down before you do. Issues are looked at by the next business day, or faster on a Website Care plan. And hosting is set up to cope with a busy day, so a spike in traffic shouldn't take your site down." },
    { question: "Do you migrate my existing website?", answer: "Yes. I handle the full move from your current host, including your files, database, email settings and DNS, so you don't have to touch any of it. Simple sites are usually straightforward. Bigger or messier ones can take more work, and if so I'll quote it upfront before I start. And if you ever decide to move on from me, I'll help with that too. It's your website." },
    { question: "Is maintenance really necessary?", answer: "An unmaintained site is a soft target. Outdated plugins and no backups are how sites get hacked or go down, and fixing a breach or rebuilding after one costs far more than keeping it maintained, on top of the sales you lose while it's offline." },
    { question: "Do you look after websites you didn't build?", answer: "Yes. A lot of the sites I maintain started that way. Before taking one on, I'll have a look at what's under the hood, so we both know what we're dealing with: outdated plugins, a theme nobody's updated in years, or something that's held together with sticky tape. I'll tell you honestly what it needs." },
  ],
  closingCta: {
    heading: "Want it handled?",
    body: "Tell me about your site and I'll set up hosting and maintenance that keeps it fast, secure and online. One invoice, one person to call.",
    primary: { label: "Get started", href: "/launch-your-vision" },
  },
  sticky: { label: "Get covered", href: "/launch-your-vision", startingPrice: 39 },
  metaTitle: "Website Maintenance & Hosting Brisbane | RAVENCI Solutions",
  metaDescription:
    "Website maintenance and hosting in Brisbane. Hosting $39/mo, maintenance $239/mo, both $269/mo. Updates, security, daily backups and monitoring. Cancel any time.",
  serviceName: "Website maintenance and hosting in Brisbane",
  schema: {
    serviceType: "Website Hosting & Maintenance",
    offers: [
      { name: "Hosting", price: "39", description: "Standalone cloud hosting with SSL, daily backups, security monitoring and Brisbane-based support, for sites maintained by another reputable provider. Billed monthly." },
      { name: "Maintenance", price: "239", description: "Updates, security, daily backups and monitoring for a site hosted elsewhere, billed monthly." },
      { name: "Hosting + Maintenance", price: "269", description: "Hosting and maintenance together: updates, security, daily backups, monitoring and small fixes. Billed monthly." },
      { name: "Website Care: Cover", price: "320", description: "2 hours a month of design, development or content work with priority support. Hosting and maintenance not included." },
      { name: "Website Care: Growth", price: "1200", description: "8 hours a month for new pages, features and content with priority support. Hosting and maintenance not included." },
      { name: "Website Care: Partner", price: "2800", description: "20 hours a month across design, development and content, two-hour response and a monthly planning call. Hosting and maintenance not included." },
    ],
  },
};

export const SEO_CONTENT: ServicePageData = {
  slug: "seo-and-content",
  breadcrumbLabel: "SEO / AEO / GEO",
  name: "SEO for Brisbane businesses, on Google and in AI answers",
  outcome:
    "Your customers are searching for what you do. Some type it into Google. More and more are asking ChatGPT, Gemini or Google's AI instead. I make sure they find you either way, and that what they're told about you is actually right.",
  supporting:
    "SEO gets you found on Google. AEO (answer engine optimisation) and GEO (generative engine optimisation) are the newer names for getting found, and quoted correctly, by AI assistants. Different acronyms, same goal: the right people finding you. I do all three for businesses in Brisbane and across Australia.",
  heroCtas: {
    primary: { label: "Request a proposal", href: "/launch-your-vision" },
    secondary: { label: "What's included", href: "#included" },
  },
  pricingAnchor: {
    fromLabel: "FROM",
    price: "$1,750/mo",
    note: "Standard SEO from $1,750/mo. eCommerce SEO and campaigns from $2,250/mo. Copywriting from $390 per page. Billed monthly, cancel any time.",
    ticks: [
      "Leads and sales, not just traffic",
      "Clear monthly pricing in AUD",
      "Written for your customers first",
    ],
  },
  headings: {
    included: "What's included in my monthly SEO plans",
    relatedWork: "SEO results for Australian businesses",
    faq: "Questions about SEO and AI search",
  },
  included: [
    { title: "Technical SEO", description: "I make sure Google can actually read your site: what's indexed, what's broken and what's slowing it down. I check it with RankRiot, a site crawler I built myself." },
    { title: "Keyword research", description: "Finding the words your customers actually use, not the ones your industry uses. They're often not the same." },
    { title: "On-page improvements", description: "Titles, headings, content and internal links on your key pages, improved month by month." },
    { title: "New content", description: "Pages or articles written or improved each month, aimed at the questions your customers are actually asking." },
    { title: "Local SEO", description: "Your Google Business Profile looked after, and your site set up to win searches in Brisbane and the areas you serve." },
    { title: "AI visibility tracking", description: "I track how ChatGPT, Gemini and Google's AI describe your business, and work on what they get wrong." },
    { title: "Structured data", description: "Schema (code that tells search engines and AI what your business is and does) on your key pages." },
    { title: "Monthly report", description: "What I did, what changed in your rankings, traffic and enquiries, and what's next. In plain English." },
  ],
  relatedWork: [
    { href: "/case-studies/goingdark", category: "eCommerce", title: "GoingDark", blurb: "Fixed hundreds of 404s, added alt text and restructured pages. Organic search up 12.5% three months after relaunch." },
  ],
  faq: [
    { question: "What's the difference between SEO, AEO and GEO?", answer: "Honestly, less than the acronyms suggest. SEO is getting found on search engines like Google. AEO and GEO are about getting found, and described correctly, by AI tools like ChatGPT and Google's AI Overviews. They mostly rely on the same things: a site that's easy to read, content that answers real questions, and a business other sites talk about. I do them together because they work together." },
    { question: "How long does it take to see results?", answer: "Usually three to six months before you notice a real difference, and longer in competitive markets. Anyone promising page one in a few weeks is either guessing or about to do something that gets you penalised later." },
    { question: "Do you guarantee rankings?", answer: "No, and be wary of anyone who does. Nobody controls Google. What I can promise is honest work done every month, and reporting that shows you exactly what changed." },
    { question: "Can you work alongside our marketing team?", answer: "Yes. I'm happy to fit in with an in-house team or another agency, whether that's handling the technical side, writing content, or training your people to do more of it themselves." },
    { question: "What industries do you work with?", answer: "Mostly construction, healthcare and professional services, plus online stores. I build websites for these industries too, so I understand how their customers search." },
    { question: "Do I have to sign a contract?", answer: "No. SEO plans are billed monthly and you can cancel any time. If I'm not earning my place, you shouldn't have to keep paying me." },
  ],
  closingCta: {
    heading: "Want to get found?",
    body: "Tell me about your business and who you're trying to reach, and I'll come back with a scope and a fixed monthly price.",
    primary: { label: "Start a project", href: "/launch-your-vision" },
  },
  sticky: { label: "Request a proposal", href: "/launch-your-vision", startingPrice: 1750 },
  metaTitle: "SEO Services Brisbane, for Google and AI Search | RAVENCI",
  metaDescription:
    "SEO, AEO and GEO for Brisbane businesses. Get found on Google and described correctly by ChatGPT and Google's AI. From $1,750/mo, cancel any time.",
  serviceName: "SEO services in Brisbane",
  schema: {
    serviceType: "SEO & Content",
    offers: [
      { name: "Standard SEO", price: "1750", description: "Ongoing SEO with technical fixes, on-page optimisation, content and monthly reporting." },
      { name: "eCommerce SEO + Campaigns", price: "2250", description: "SEO and campaign strategy for online stores: product pages, category structure, feeds and conversion tracking." },
      { name: "Copywriting", price: "390", description: "Professional website copy as a standalone service, per page." },
    ],
  },
};

export const BRANDING: ServicePageData = {
  slug: "business-design",
  breadcrumbLabel: "Branding",
  name: "Business branding and logo design in Brisbane",
  outcome:
    "Your brand is what makes a customer trust you before you've said a word. It's the logo on your quote, the sign out the front and the ute in the car park.",
  supporting:
    "I have a Diploma of Graphic Design, and I've been designing brands for Brisbane and Queensland businesses alongside their websites for years. That's the part most people don't think about: when the same person designs your brand and builds your website, they actually match. Logos and guidelines, full identity systems, signage and vehicle wraps.",
  heroCtas: {
    primary: { label: "Request a proposal", href: "/launch-your-vision" },
    secondary: { label: "What's included", href: "#included" },
  },
  pricingAnchor: {
    fromLabel: "FROM",
    price: "$3,500",
    note: "Logo and guidelines from $3,500. Full brand identity from $10,000. Signage and vehicle wraps quoted on scope.",
    ticks: [
      "You own every file",
      "Several concepts, revisions included",
      "Print-ready for suppliers I trust",
    ],
  },
  headings: {
    included: "What you get with your branding",
    relatedWork: "Branding I've done for Queensland businesses",
    faq: "Questions about branding",
  },
  included: [
    {
      title: "Logo and visual identity",
      description:
        "A custom logo, with several concepts to choose from, plus the colours and fonts that hold the whole brand together.",
    },
    {
      title: "Brand guidelines",
      description:
        "A simple guide that keeps your brand consistent as you grow, whoever ends up using it. Your sign writer, your printer, or the new admin person making a flyer in Canva.",
    },
    {
      title: "Print-ready stationery",
      description:
        "Business cards, letterhead, email signatures, and quote and invoice templates, all designed to match.",
    },
    {
      title: "Signage",
      description:
        "Shopfront, reception and window graphics, banners, wayfinding and A-frames, with installation coordinated for you.",
    },
    {
      title: "Vehicle wraps",
      description:
        "Partial or full wraps for cars, utes, vans and buses. Honestly, one of the best ongoing bits of marketing you'll ever pay for. It works every time you drive somewhere.",
    },
    {
      title: "Print and install handled",
      description:
        "Printing and installation coordinated through trusted local suppliers and installers I've worked with over the years. You deal with me, not three different businesses.",
    },
    {
      title: "Files in standard formats",
      description:
        "Web-ready PNG and JPG, print-ready PDF and SVG, organised and labelled. They're yours to use however you need.",
    },
    {
      title: "Works with what you have",
      description:
        "Starting from scratch or refreshing an existing brand, I work out what's already pulling its weight and build from there.",
    },
  ],
  process: {
    heading: "From first concepts to final files.",
    note: "Logo and guidelines run about six weeks, a full brand identity about eight, and signage or vehicle wraps four to six. You're in on every decision, and I keep you updated the whole way through.",
    steps: [
      { title: "Brief", description: "We go through your business, your customers, and where the brand has to work hardest." },
      { title: "Concepts", description: "You see several directions, not one take-it-or-leave-it option." },
      { title: "Refinement", description: "We narrow it down and refine, with revisions built in until it's right." },
      { title: "Delivery", description: "Final files in every format you need, organised and yours to keep." },
    ],
  },
  relatedWork: [
    { href: "/case-studies/covenant-security-solutions", category: "Security", title: "Covenant Security", blurb: "Brand identity, print and vehicle signage for a new Brisbane security firm." },
    { href: "/case-studies/cadeaurable", category: "eCommerce", title: "Cadeaurable", blurb: "Branding, stationery and packaging for a Brisbane personalised-gifts maker, right through to her online store." },
    { href: "/case-studies/coast-remedial-solutions", category: "Construction", title: "Coast Remedial Solutions", blurb: "Brand identity and a capability statement for Gold Coast remedial building specialists." },
  ],
  faq: [
    {
      question: "How long does branding take?",
      answer:
        "Logo and guidelines take about six weeks, a full brand identity about eight, and signage or vehicle wraps four to six. I keep you updated the whole way and involve you in every decision.",
    },
    {
      question: "What if I don't like the first concepts?",
      answer:
        "That's what revisions are for. I show you several directions up front, not one take-it-or-leave-it option, and we refine until it genuinely feels like your business.",
    },
    {
      question: "Can you design our website to match the new brand?",
      answer:
        'Yes, and that\'s really where it pays off. Because I design brands and <a href="/web-development" class="text-accent hover:underline">build websites</a>, your logo, colours and fonts carry straight through to the site instead of getting lost in translation between a designer and a developer.',
    },
    {
      question: "Do you handle printing and installation?",
      answer:
        "I don't print in-house, but I work with local suppliers and installers I've used for close to a decade, and I coordinate the whole thing so you don't have to.",
    },
    {
      question: "Can you work with our existing brand?",
      answer:
        "Yes. I can work within your current guidelines or help refresh them, once I've worked out what's already doing its job and what isn't.",
    },
    {
      question: "What files do we get?",
      answer:
        "Web-ready PNG and JPG, print-ready PDF and SVG, all organised and labelled. You own every file.",
    },
  ],
  closingCta: {
    heading: "Tell me what your brand needs to do.",
    body: "Send through where your brand is now and where it needs to get to, and I'll come back with a scope and a fixed price. No obligation.",
    primary: { label: "Start a project", href: "/launch-your-vision" },
  },
  sticky: { label: "Request a proposal", href: "/launch-your-vision", startingPrice: 3500 },
  metaTitle: "Branding & Logo Design Brisbane | RAVENCI Solutions",
  metaDescription:
    "Business branding and logo design in Brisbane. Logos, brand guidelines, signage and vehicle wraps, from the person who builds your website too. From $3,500.",
  serviceName: "Branding and brand identity design in Brisbane",
  schema: {
    serviceType: "Branding",
    offers: [
      { name: "Logo + Guidelines", price: "3500", description: "Custom logo with several concepts, brand colour palette, typography, core stationery, and a brand guidelines PDF." },
      { name: "Full Brand Identity", price: "10000", description: "A complete brand system: logo, extended guidelines, print materials, and digital assets." },
    ],
  },
};

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  "web-development": WEB_DEVELOPMENT,
  "build-only": BUILD_ONLY,
  ecommerce: ECOMMERCE,
  "web-apps": WEB_APPS,
  "business-design": BRANDING,
  "website-maintenance": MANAGED_WEB,
  "seo-and-content": SEO_CONTENT,
};
