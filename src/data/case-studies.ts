// ─── Types ────────────────────────────────────────────────────────────────────

export type Industry =
  | "healthcare"
  | "construction"
  | "professional-services"
  | "security"
  | "ecommerce"
  | "hospitality"
  | "technology"
  | "other";

export type ServiceTag =
  | "web-development"
  | "business-design"
  | "ecommerce"
  | "web-hosting"
  | "maintenance"
  | "seo-and-content";

export type CaseStudyTemplate =
  | "results-driven"
  | "visual-showcase"
  | "premium";

export interface CaseStudyMetric {
  value: string; // "95+", "300%", "2.1s"
  label: string; // "PageSpeed Score", "Traffic Increase"
}

export interface CaseStudyCollaborator {
  role: string; // "Design", "Photography", "Copywriting"
  name: string; // "Jane Doe"
  url?: string; // link to their site/portfolio
}

export interface CaseStudyFeature {
  title: string; // "Portfolio Showcase System"
  description: string; // what this feature does and why
  image?: string; // single screenshot/video — supports .png/.jpg/.gif/.mp4/.webm
  /**
   * If true and `image` is a single full-length screenshot, renders with
   * the auto-scrolling ScrollingScreenshot component instead of a static
   * image. Has no effect when `images` (array) is used.
   */
  imageScroll?: boolean;
  images?: string[]; // multiple screenshots (premium template)
}

export interface CaseStudy {
  slug: string;
  clientName: string;
  industry: Industry;
  industryLabel: string;
  services: ServiceTag[];
  serviceLabels: string[];
  excerpt: string;
  featuredImage: string; // path in /public/showcase-images/
  /**
   * If true, the featured image is rendered with the ScrollingScreenshot
   * component — it auto-scrolls top → bottom → top inside the existing
   * featured-image frame. Use this when `featuredImage` is a full-length
   * page screenshot rather than a cropped hero shot.
   */
  featuredImageScroll?: boolean;
  clientLogo?: string; // path in /public/clients/
  clientUrl?: string;
  template: CaseStudyTemplate;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;

  // Project metadata
  year?: number; // year completed
  timeline?: string; // e.g. "8 weeks", "3 months"
  techStack?: string[]; // e.g. ["Next.js", "Tailwind CSS", "Vercel"]
  collaborators?: CaseStudyCollaborator[];

  // Narrative sections
  problem: {
    heading: string;
    paragraphs: string[];
    image?: string;
    images?: string[]; // multiple screenshots (premium template)
  };
  approach: {
    heading: string;
    paragraphs: string[];
    highlights?: string[];
    image?: string;
    images?: string[]; // multiple screenshots (premium template)
  };
  results: {
    heading: string;
    paragraphs: string[];
    metrics?: CaseStudyMetric[];
    images?: string[]; // optional results screenshots (premium template)
  };

  // Feature spotlights — 2-4 key features called out individually
  features?: CaseStudyFeature[];

  testimonial?: { content: string; author: string; role?: string };
  galleryImages?: string[];
  order: number;
  featured: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const CASE_STUDIES: CaseStudy[] = [
  // ── 1. DIRT (newest) ────────────────────────────────────────────────────────
  // TODO: Richard to fill in real hero copy, problem/approach/results, screenshots
  {
    slug: "dirt",
    clientName: "DIRT",
    industry: "other",
    industryLabel: "Technology",
    services: ["web-development"],
    serviceLabels: ["Web Development"],
    excerpt:
      "A branding agency that builds brands to win bids in construction and property — fresh positioning and \"grounded, gutsy, impossible to ignore\" identity work for an industry where most competitors sound and look the same.",
    featuredImage: "/showcase-images/Client - The DIRT Agency.png",
    clientLogo: "/clients/dirt-logo.svg",
    clientUrl: "https://thedirtagency.com",
    template: "premium",
    metaTitle: "DIRT Case Study | RAVENCI Solutions",
    metaDescription:
      "How RAVENCI built a modern Next.js + Plasmic site for DIRT with ActiveCampaign, ClickUp and Google Analytics integration.",
    heroHeadline: "A Modern Foundation, Built for Growth",
    heroSubheadline:
      "Custom Next.js with Plasmic visual editing, plus marketing automation and analytics wired in from day one.",

    year: 2026,
    timeline: "TBC",
    techStack: [
      "Next.js",
      "Plasmic",
      "ActiveCampaign",
      "ClickUp",
      "Google Analytics",
    ],
    collaborators: [
      { role: "Development", name: "RAVENCI Solutions" },
      { role: "Design", name: "The Other Design Co." },
    ],

    problem: {
      heading: "The Challenge",
      paragraphs: [
        "TODO: Add the project background — what was DIRT trying to achieve, and what wasn't working before RAVENCI got involved.",
      ],
      image: "/showcase-images/Client - The DIRT Agency.png",
    },
    approach: {
      heading: "Our Approach",
      paragraphs: [
        "TODO: Walk through the build approach — Next.js for performance, Plasmic for in-house content control, and the integration architecture connecting ActiveCampaign, ClickUp and Google Analytics.",
      ],
      highlights: [
        "Custom Next.js for performance",
        "Plasmic for client-managed content",
        "ActiveCampaign for marketing automation",
        "ClickUp project tracking integration",
        "Google Analytics for measurement",
      ],
      image: "/showcase-images/Client - The DIRT Agency.png",
    },
    features: [
      {
        title: "Next.js + Plasmic Architecture",
        description:
          "TODO: What this combination unlocks for the client (speed, flexibility, in-house editing).",
        image: "/showcase-images/Client - The DIRT Agency.png",
      },
      {
        title: "Marketing Automation Wired In",
        description:
          "TODO: How ActiveCampaign integration drives the lead funnel from form submission through nurture.",
        image: "/showcase-images/Client - The DIRT Agency.png",
      },
    ],
    results: {
      heading: "The Results",
      paragraphs: [
        "TODO: Outcomes for DIRT — performance figures, lead generation, time-to-publish improvements, etc.",
      ],
      metrics: [{ value: "90+", label: "Google PageSpeed" }],
    },
    galleryImages: ["/showcase-images/Client - The DIRT Agency.png"],
    order: 1,
    featured: true,
  },

  // ── 2. NNAccountability ─────────────────────────────────────────────────────
  // TODO: Richard to fill in real hero copy, problem/approach/results, screenshots
  {
    slug: "nnaccountability",
    clientName: "NNAccountability",
    industry: "professional-services",
    industryLabel: "Professional Services",
    services: ["web-development", "maintenance"],
    serviceLabels: ["Web Development", "Web Maintenance"],
    excerpt:
      "Not just accountants — trainers, advisors and Xero integration specialists. NNAccountability helps Australian startups, medical practices, NDIS providers and non-profits trade confusion and manual processes for clarity and automation.",
    featuredImage: "/showcase-images/Client - NNAccountability.png",
    clientLogo: "/clients/nnaccountability-logo.svg",
    // Currently on temporary subdomain; migrating to nnaccountability.com.au
    clientUrl: "https://nnaccountability.ravenci.solutions",
    template: "premium",
    metaTitle: "NNAccountability Case Study | RAVENCI Solutions",
    metaDescription:
      "How RAVENCI built and maintains the NNAccountability WordPress website with custom development and ongoing care.",
    heroHeadline: "A Trusted Platform for an Accountability Practice",
    heroSubheadline:
      "Custom WordPress build with PHP and JavaScript fitted to the business — and an ongoing maintenance plan keeping it healthy.",

    year: 2026,
    timeline: "TBC",
    techStack: ["WordPress", "Custom Builder", "JavaScript", "PHP"],
    collaborators: [
      { role: "Development", name: "RAVENCI Solutions" },
      { role: "Design", name: "Studio1 Design" },
    ],

    problem: {
      heading: "The Challenge",
      paragraphs: [
        "TODO: NNAccountability's project background — the brief, what they needed, where they were starting from.",
      ],
      image: "/showcase-images/Client - NNAccountability.png",
    },
    approach: {
      heading: "Our Approach",
      paragraphs: [
        "TODO: How RAVENCI approached the build — design partnership with Studio1 Design, WordPress with custom builder for content control, ongoing maintenance for long-term health.",
      ],
      highlights: [
        "Custom WordPress build, no off-the-shelf theme",
        "Designed in partnership with Studio1 Design",
        "Ongoing maintenance plan for long-term care",
      ],
      image: "/showcase-images/Client - NNAccountability.png",
    },
    results: {
      heading: "The Results",
      paragraphs: [
        "TODO: Outcomes — what the new site enabled for the practice.",
      ],
      metrics: [{ value: "85+", label: "Google PageSpeed" }],
    },
    galleryImages: ["/showcase-images/Client - NNAccountability.png"],
    order: 2,
    featured: true,
  },

  // ── 3. GoingDark ───────────────────────────────────────────────────────────
  // TODO: Richard to fill in real hero copy, problem/approach/results, screenshots
  {
    slug: "goingdark",
    clientName: "GoingDark",
    industry: "ecommerce",
    industryLabel: "E-commerce",
    services: ["web-development", "ecommerce", "seo-and-content"],
    serviceLabels: ["Web Development", "Shopify", "SEO"],
    excerpt:
      "An Australian thermal and night vision retailer for serious hunters — pairing carefully chosen gear from Pulsar, HikMicro, PARD and Nocpix with the kind of expert guidance you can't get from a big-box store.",
    featuredImage: "/showcase-images/Client - GoingDark.png",
    clientLogo: "/clients/going-dark-logo.svg",
    clientUrl: "https://goingdark.com.au",
    template: "premium",
    metaTitle: "Going Dark Case Study | RAVENCI Solutions",
    metaDescription:
      "How RAVENCI built a custom Shopify storefront for Going Dark with bespoke Liquid theme work and ongoing SEO.",
    heroHeadline: "A Custom Shopify Build, Engineered for Search",
    heroSubheadline:
      "Bespoke Liquid theme, JavaScript-driven interactions, and ongoing SEO designed to compound organic traffic over time.",

    year: 2025,
    timeline: "TBC",
    techStack: ["Shopify", "Liquid", "JavaScript", "SEO"],
    collaborators: [
      { role: "Design & Development", name: "RAVENCI Solutions" },
    ],

    problem: {
      heading: "The Challenge",
      paragraphs: [
        "TODO: Going Dark's brief — what they were trying to achieve with the storefront, and why a custom Shopify build was the right call.",
      ],
      image: "/showcase-images/Client - GoingDark.png",
    },
    approach: {
      heading: "Our Approach",
      paragraphs: [
        "TODO: The build approach — Liquid customisation, JavaScript-driven interactions, and the SEO foundations laid alongside the build.",
      ],
      highlights: [
        "Custom Shopify Liquid theme",
        "JavaScript-driven product interactions",
        "SEO foundation built into the architecture",
        "Performance-tuned for mobile shoppers",
      ],
      image: "/showcase-images/Client - GoingDark.png",
    },
    results: {
      heading: "The Results",
      paragraphs: [
        "TODO: Outcomes for Going Dark — search rankings, traffic growth, sales metrics where available.",
      ],
      metrics: [{ value: "85+", label: "Google PageSpeed" }],
    },
    galleryImages: ["/showcase-images/Client - GoingDark.png"],
    order: 3,
    featured: true,
  },

  // ── 4. Peninsula Homes ──────────────────────────────────────────────────────
  {
    slug: "peninsula-homes",
    clientName: "Peninsula Homes",
    industry: "construction",
    industryLabel: "Construction",
    services: ["web-development", "maintenance"],
    serviceLabels: ["Web Development", "Web Maintenance"],
    excerpt:
      "A Sydney Northern Beaches builder designing and building beautiful, environmentally efficient, bespoke homes — with 80% of work coming through referrals from families who've experienced the difference.",
    featuredImage: "/showcase-images/peninsula-homes/full-page.png",
    featuredImageScroll: true,
    clientLogo: "/clients/peninsula-homes-logo.svg",
    clientUrl: "https://peninsulahomes.com.au",
    template: "premium",
    metaTitle: "Peninsula Homes Case Study | RAVENCI Solutions",
    metaDescription:
      "Peninsula Homes — a Sydney Northern Beaches builder of bespoke homes — needed a site that matched the quality of their work and held its 90+ PageSpeed score for years. Two years later, it still does.",
    heroHeadline: "Built to Let the Work Do the Talking",
    heroSubheadline:
      "A Northern Beaches builder of bespoke homes needed their site to do justice to the work — and to keep performing long after launch. Two years on, it scores 90+ on PageSpeed, looks identical to The Design Order's vision, and hasn't missed a step.",

    // Project metadata
    year: 2024,
    timeline: "6 weeks",
    techStack: [
      "WordPress",
      "Zion Builder (RAVENCI-customised)",
      "JavaScript",
      "PHP",
    ],
    collaborators: [
      { role: "Development", name: "RAVENCI Solutions" },
      { role: "Design", name: "The Design Order" },
    ],

    problem: {
      heading: "The Challenge",
      paragraphs: [
        "Peninsula Homes had outgrown their old website. It was dated, slow, and starting to hurt their search rankings. Their SEO consultant set a hard requirement: any rebuild had to score 75+ on Google PageSpeed, and stay there.",
        "They'd hired The Design Order to refresh the brand and were choosing between three developers to build it. The design had to be matched faithfully — no compromises on detail. Whoever they picked also had to be someone they could trust to maintain the site for the long run.",
      ],
      image: "/showcase-images/Client - Peninsula Homes.png",
    },
    approach: {
      heading: "Our Approach",
      paragraphs: [
        "Peninsula Homes came to us through The Design Order, who'd worked with us on three earlier projects. After a video call we got the nod — they said they felt most comfortable with how we'd handle the build and the long-term care.",
        "We chose WordPress for content management, but with a RAVENCI-customised version of Zion Builder rather than the heavier Elementor or Divi alternatives. That single decision did most of the heavy lifting on performance — the finished site scored over 90 on PageSpeed, well clear of the 75 their SEO consultant required.",
        "From there it was a careful pixel-for-pixel build of The Design Order's design, with the more interactive elements (featured projects, the menu, About-page lightboxes) custom-coded so the page weight stayed low and the performance budget intact.",
      ],
      highlights: [
        "Pixel-for-pixel match to The Design Order's design",
        "90+ Google PageSpeed (target was 75)",
        "Custom-coded interactive elements where plugins would have hurt performance",
        "Built to be maintained without breakage — two years on, still untouched",
      ],
      image: "/showcase-images/Client - Peninsula Homes.png",
    },
    features: [
      {
        title: "A Featured-Articles Block That Brings Each Story Forward",
        description:
          "The Design Order wanted the three most-recent blog articles on the home page with a distinctive hover interaction — the featured image and styling on the right swap as visitors move between articles. Rather than reach for a plugin, we built it as a single custom block so it loads instantly without dragging the page down.",
        image: "/showcase-images/peninsula-homes/peninsula-homes-blog-block.mp4",
      },
      {
        title: "A Recent-Projects Block Right on the Home Page",
        description:
          "Peninsula's most recent builds, surfaced at eye-level on the home page — visitors get a sense of the range and quality of the work before they've scrolled. Custom-coded for performance, no off-the-shelf gallery plugin slowing things down.",
        image: "/showcase-images/peninsula-homes/peninsula-homes-recent-projects.mp4",
      },
      {
        title: "A Menu That Knows What Page It's On",
        description:
          "Some pages needed slightly different navigation. Rather than maintain a separate menu for each, the menu reads the current page and adjusts itself automatically. One source of truth, zero per-page configuration to maintain.",
        image: "/showcase-images/peninsula-homes/peninsula-homes-menu.mp4",
      },
      {
        title: "Project Pages That Put the Photography First",
        description:
          "The old site had small images and long copy that fought for attention. The new project pages flip that — large galleries lead, with carefully placed copy that supports rather than competes. Visitors leave with a clear sense of what Peninsula actually builds.",
        image: "/showcase-images/peninsula-homes/peninsula-homes-project-pages.png",
        imageScroll: true,
      },
      {
        title: "About-Page Lightboxes for a Closer Look",
        description:
          "Custom lightbox interactions on the About page let visitors get a closer look at the team and the work without leaving the page. Subtle, fast, and built around the brand's quiet confidence — no off-the-shelf gallery plugin in sight.",
        image: "/showcase-images/peninsula-homes/peninsula-homes-about-us-lightboxes.mp4",
      },
    ],
    results: {
      heading: "The Results",
      paragraphs: [
        "The site launched in 2024 and has been running ever since — same shape, same speed, no degradation. The 90+ PageSpeed score sits well above the 75+ benchmark Peninsula's SEO consultant required, and the build is identical to The Design Order's design.",
        "Peninsula's team adds new projects and updates as required, and the build was engineered so those changes don't break anything. We maintain it monthly. Two years in, it's still doing exactly what it was built to do — letting the work do the talking.",
      ],
      metrics: [
        { value: "90+", label: "Google PageSpeed (target: 75)" },
        { value: "< 2s", label: "Page Load Time" },
      ],
    },
    galleryImages: [
      "/showcase-images/Client - Peninsula Homes.png",
      "/showcase-images/Client - Peninsula Homes.png",
    ],
    order: 4,
    featured: true,
  },

  // ── 5. Covenant Security Solutions ──────────────────────────────────────────
  {
    slug: "covenant-security-solutions",
    clientName: "Covenant Security Solutions",
    industry: "security",
    industryLabel: "Security",
    services: ["business-design", "web-development", "maintenance"],
    serviceLabels: [
      "Branding Design",
      "Stationery Design and Print",
      "Custom Signage",
      "Web Development",
      "Web Maintenance",
    ],
    excerpt:
      "A family-owned Moreton Bay security company that treats every property like their own. Tailored alarms, CCTV, access control and intercoms for Queensland homes and businesses — backed by a hands-on relationship that doesn't end at install.",
    featuredImage: "/showcase-images/Client - Covenant Security.png",
    clientLogo: "/clients/covenant-security-solutions-logo.svg",
    clientUrl: "https://covenantsecurity.com.au",
    template: "premium",
    metaTitle: "Covenant Security Solutions Case Study | RAVENCI Solutions",
    metaDescription:
      "Full brand identity, stationery, signage, custom WordPress build, and ongoing maintenance for Covenant Security Solutions.",
    heroHeadline: "Building Trust Online for a Security Industry Leader",
    heroSubheadline:
      "Full brand identity, stationery and signage, plus a custom WordPress site that communicates the same level of professionalism Covenant brings to every job.",

    year: 2024,
    timeline: "5 weeks",
    techStack: ["WordPress", "Custom Builder", "JavaScript", "PHP"],
    collaborators: [
      { role: "Brand, Design & Development", name: "RAVENCI Solutions" },
    ],

    problem: {
      heading: "The Challenge",
      paragraphs: [
        "In the security industry, trust is everything. Covenant Security Solutions had a basic website that didn't communicate the professionalism and reliability that defines their service. Potential clients had no way to evaluate their credentials or understand the breadth of their offerings.",
        "They needed a complete brand and digital presence that would build confidence from the first visit and clearly differentiate them from less reputable competitors.",
      ],
      image: "/showcase-images/Client - Covenant Security.png",
    },
    approach: {
      heading: "Our Approach",
      paragraphs: [
        "We built a full brand system around the pillars of trust: credentials, experience, and social proof. The brand identity, stationery, and signage all use strong, confident visuals; the website extends that same language across digital touchpoints.",
        "Key service pages were developed with detailed information that helps potential clients understand exactly what Covenant offers, reducing the friction between first impression and enquiry.",
      ],
      highlights: [
        "Brand identity from logo through colour and type",
        "Stationery and print collateral",
        "Custom signage design",
        "Trust-focused website with credentials prominent",
        "Ongoing maintenance plan",
      ],
      image: "/showcase-images/Client - Covenant Security.png",
    },
    features: [
      {
        title: "Brand Identity System",
        description:
          "Logo, colour, typography, and imagery system designed to feel reliable and professional from the first glance.",
        image: "/showcase-images/Client - Covenant Security.png",
      },
      {
        title: "Trust-First Website",
        description:
          "Credentials, licences, and accreditations are prominently displayed throughout the site, building confidence from the very first page.",
        image: "/showcase-images/Client - Covenant Security.png",
      },
      {
        title: "Detailed Service Pages",
        description:
          "Each security service has its own comprehensive page with clear information, helping potential clients understand exactly what Covenant offers.",
        image: "/showcase-images/Client - Covenant Security.png",
      },
    ],
    results: {
      heading: "The Results",
      paragraphs: [
        "The new brand and website positioned Covenant Security Solutions as the professional choice in their market, directly contributing to business growth and client acquisition.",
      ],
      metrics: [
        { value: "90+", label: "Google PageSpeed" },
        { value: "< 2s", label: "Page Load Time" },
      ],
    },
    galleryImages: [
      "/showcase-images/Client - Covenant Security.png",
      "/showcase-images/Client - Covenant Security.png",
    ],
    order: 5,
    featured: false,
  },

  // ── 6. SAC Consulting ───────────────────────────────────────────────────────
  {
    slug: "sac-consulting",
    clientName: "SAC Consulting",
    industry: "professional-services",
    industryLabel: "Professional Services",
    services: ["web-development"],
    serviceLabels: ["Web Development"],
    excerpt:
      "A workplace culture consulting firm building thriving workplaces in Australia's meat, forestry, agriculture, seafood and mining industries — preserving the mateship and humour that make great teams, while addressing the dysfunction that holds them back.",
    featuredImage: "/showcase-images/Client - SAC Consulting.png",
    clientLogo: "/clients/sac-consulting-logo.svg",
    clientUrl: "https://sacconsulting.com.au",
    template: "premium",
    metaTitle: "SAC Consulting Case Study | RAVENCI Solutions",
    metaDescription:
      "How RAVENCI built a professional web platform for SAC Consulting that strengthened their brand and attracted enterprise-level clients.",
    heroHeadline: "Elevating a Consulting Firm's Digital Credibility",
    heroSubheadline:
      "SAC Consulting needed a website that would open doors with enterprise clients. We built a platform that communicates authority and expertise.",

    year: 2023,
    timeline: "8 weeks",
    techStack: ["WordPress", "Custom Builder", "JavaScript", "PHP"],
    collaborators: [
      { role: "Development", name: "RAVENCI Solutions" },
      { role: "Design", name: "The Design Order" },
    ],

    problem: {
      heading: "The Challenge",
      paragraphs: [
        "SAC Consulting was growing rapidly but their online presence hadn't kept pace. In the competitive consulting space, enterprise clients often evaluate potential partners based on their digital presence before making contact.",
        "They needed a professional, polished website that would establish credibility, clearly communicate their service offerings, and make it easy for potential clients to engage.",
      ],
      image: "/showcase-images/Client - SAC Consulting.png",
    },
    approach: {
      heading: "Our Approach",
      paragraphs: [
        "We designed the site around SAC Consulting's key differentiators, creating clear pathways for different client types to find relevant information. The structure guides visitors from understanding the firm's capabilities to taking action.",
        "The visual design strikes the right balance between professional authority and approachability — crucial for a consulting firm that prides itself on building genuine partnerships.",
      ],
      highlights: [
        "Service-led information architecture",
        "Client-type specific content pathways",
        "Case study and credibility sections",
        "Conversion-optimised contact flows",
      ],
      image: "/showcase-images/Client - SAC Consulting.png",
    },
    features: [
      {
        title: "Service-Led Architecture",
        description:
          "Clear pathways for different client types to find relevant information, guiding visitors from understanding capabilities to taking action.",
        image: "/showcase-images/Client - SAC Consulting.png",
      },
      {
        title: "Credibility Sections",
        description:
          "Strategically placed case studies, client logos, and testimonials that build trust before the first conversation happens.",
        image: "/showcase-images/Client - SAC Consulting - Podcast.png",
      },
      {
        title: "Conversion-Optimised Contact",
        description:
          "Multiple contact pathways tailored to different enquiry types, reducing friction between interest and engagement.",
        image: "/showcase-images/Client - SAC Consulting.png",
      },
    ],
    results: {
      heading: "The Results",
      paragraphs: [
        "The new website became a powerful business development tool, helping SAC Consulting win larger contracts and attract higher-value clients.",
      ],
      metrics: [
        { value: "90+", label: "Google PageSpeed" },
        { value: "< 2s", label: "Page Load Time" },
      ],
    },
    galleryImages: [
      "/showcase-images/Client - SAC Consulting.png",
      "/showcase-images/Client - SAC Consulting - Podcast.png",
    ],
    order: 6,
    featured: false,
  },

  // ── 7. Nikita Morell ────────────────────────────────────────────────────────
  {
    slug: "nikita-morell",
    clientName: "Nikita Morell",
    industry: "professional-services",
    industryLabel: "Professional Services",
    services: ["web-development"],
    serviceLabels: ["Web Development"],
    excerpt:
      "The only copywriter in the world writing exclusively for architects. Ten years and 663+ architecture sites studied — helping architects sound more human, less robot, and win the projects they actually want.",
    featuredImage: "/showcase-images/Client - Nikita Morell.png",
    clientLogo: "/clients/nikita-morell-logo.svg",
    clientUrl: "https://nikitamorell.com",
    template: "premium",
    metaTitle: "Nikita Morell Case Study | RAVENCI Solutions",
    metaDescription:
      "How RAVENCI built a custom WordPress site for Nikita Morell that elevated the brand and reflected its premium positioning.",
    heroHeadline: "A Custom WordPress Build for a Premium Brand",
    heroSubheadline:
      "Custom WordPress with Divi Builder, JavaScript, and PHP — designed to put the brand and its work front and centre.",

    year: 2023,
    timeline: "10 weeks",
    techStack: ["WordPress", "Divi Builder", "JavaScript", "PHP"],
    collaborators: [
      { role: "Development", name: "RAVENCI Solutions" },
      { role: "Design", name: "The Design Order" },
    ],

    problem: {
      heading: "The Challenge",
      paragraphs: [
        "Nikita Morell's existing online presence didn't reflect the premium positioning of the brand. The previous site was generic and didn't do justice to the quality of work or the strength of the brand identity.",
        "They needed a custom-built platform that would communicate authority, showcase the work beautifully, and convert browsers into conversations.",
      ],
      image: "/showcase-images/Client - Nikita Morell.png",
    },
    approach: {
      heading: "Our Approach",
      paragraphs: [
        "We worked with The Design Order on a design-led approach that puts the brand and its work front and centre. Large imagery, elegant typography, and thoughtful whitespace create a premium environment.",
        "Development was handled with WordPress and Divi Builder for ongoing in-house content control, with custom PHP and JavaScript where the build needed to break out of theme constraints.",
      ],
      highlights: [
        "Custom WordPress + Divi Builder build",
        "Custom PHP and JavaScript where needed",
        "Visually-led showcase design",
        "Content control handed back to the client",
      ],
      image: "/showcase-images/Client - Nikita Morell - Wordshop.png",
    },
    features: [
      {
        title: "Editorial Showcase Design",
        description:
          "Large imagery, elegant typography, and thoughtful whitespace create a premium environment that lets the brand's work shine.",
        image: "/showcase-images/Client - Nikita Morell.png",
      },
      {
        title: "Custom WordPress Architecture",
        description:
          "Divi Builder for in-house content control, plus custom PHP and JavaScript where the project needed to break out of theme constraints.",
        image: "/showcase-images/Client - Nikita Morell - Wordshop.png",
      },
    ],
    results: {
      heading: "The Results",
      paragraphs: [
        "The new site repositioned Nikita Morell at the premium end of the market and gave the team a platform they can grow into for years to come.",
      ],
      metrics: [{ value: "85+", label: "Google PageSpeed" }],
    },
    galleryImages: [
      "/showcase-images/Client - Nikita Morell.png",
      "/showcase-images/Client - Nikita Morell - Wordshop.png",
    ],
    order: 7,
    featured: false,
  },

  // ── 8. Cadeaurable ─────────────────────────────────────────────────────────
  {
    slug: "cadeaurable",
    clientName: "Cadeaurable",
    industry: "ecommerce",
    industryLabel: "E-commerce",
    services: ["business-design", "web-development", "ecommerce"],
    serviceLabels: [
      "Branding Design",
      "Stationery Design and Print",
      "Web Development",
      "eCommerce",
    ],
    excerpt:
      "An Australian retailer of personalised laser-cut event décor and bespoke gifts — wedding signage, cake toppers, custom labels, and keepsakes for the moments people actually want to remember.",
    featuredImage: "/showcase-images/Client - Cadeaurable.png",
    clientLogo: "/clients/cadeaurable-logo.svg",
    clientUrl: "https://cadeaurable.com.au",
    template: "premium",
    metaTitle: "Cadeaurable Case Study | RAVENCI Solutions",
    metaDescription:
      "Full brand identity, stationery, and a bespoke BigCommerce build for Cadeaurable — luxury gifting from logo to checkout.",
    heroHeadline: "A Brand and Storefront for a Luxury Gifting Business",
    heroSubheadline:
      "Brand identity, stationery and print, plus a custom BigCommerce build that captures the warmth of giving something special.",

    year: 2022,
    timeline: "8 weeks",
    techStack: ["BigCommerce", "JavaScript", "PHP", "eCommerce"],
    collaborators: [
      { role: "Brand, Design & Development", name: "RAVENCI Solutions" },
    ],

    problem: {
      heading: "The Challenge",
      paragraphs: [
        "Cadeaurable is a luxury gifting brand that curates beautiful gift boxes for every occasion. Their brand was built on the emotion of giving — but their previous website felt transactional rather than experiential.",
        "They needed a complete brand system and an online store that would convey the warmth and thoughtfulness of the brand while making it easy for customers to find and customise the perfect gift.",
      ],
      image: "/showcase-images/Client - Cadeaurable.png",
    },
    approach: {
      heading: "Our Approach",
      paragraphs: [
        "We designed a full brand system — logo, colour, typography, packaging, stationery — built around emotion and discovery, then carried that language into a custom BigCommerce storefront.",
        "The platform includes intuitive filtering by occasion, recipient, and price point, making it effortless to find the right gift box.",
      ],
      highlights: [
        "Brand identity and stationery design",
        "Custom BigCommerce storefront",
        "Occasion and recipient based filtering",
        "Gift customisation workflows",
      ],
      image: "/showcase-images/Client - Cadeaurable.png",
    },
    features: [
      {
        title: "Brand Identity System",
        description:
          "Warm colours, elegant photography, and brand stationery that captures the joy of giving a thoughtful gift.",
        image: "/showcase-images/Client - Cadeaurable.png",
      },
      {
        title: "Smart Gift Filtering",
        description:
          "Intuitive filtering by occasion, recipient, and price point makes it effortless for customers to find the perfect gift box.",
        image: "/showcase-images/Client - Cadeaurable.png",
      },
      {
        title: "Gift Customisation Workflow",
        description:
          "A guided customisation experience that lets customers personalise their gift boxes, adding a personal touch to every order.",
        image: "/showcase-images/Client - Cadeaurable.png",
      },
    ],
    results: {
      heading: "The Results",
      paragraphs: [
        "The new brand and platform captured the essence of Cadeaurable, resulting in increased sales, higher customer satisfaction, and a growing base of repeat gifters.",
      ],
      metrics: [{ value: "85+", label: "Google PageSpeed" }],
    },
    galleryImages: [
      "/showcase-images/Client - Cadeaurable.png",
      "/showcase-images/Client - Cadeaurable.png",
    ],
    order: 8,
    featured: false,
  },

  // ── 9. Coast Remedial Solutions ─────────────────────────────────────────────
  {
    slug: "coast-remedial-solutions",
    clientName: "Coast Remedial Solutions",
    industry: "construction",
    industryLabel: "Construction",
    services: ["business-design", "web-development"],
    serviceLabels: [
      "Branding Design",
      "Stationery Design and Print",
      "Digital Design",
      "Web Development",
    ],
    excerpt:
      "A Gold Coast specialist in remedial building work — diagnosing and fixing concrete cancer, structural defects, and waterproofing failures for residential and commercial properties across Queensland's southeast.",
    featuredImage: "/showcase-images/Client - Coast Remedial Solutions.png",
    clientLogo: "/clients/coast-remedial-solutions-logo.svg",
    clientUrl: "https://coastremedialsolutions.com.au",
    template: "premium",
    metaTitle: "Coast Remedial Solutions Case Study | RAVENCI Solutions",
    metaDescription:
      "Full brand identity, stationery, digital design and a custom WordPress site for Coast Remedial Solutions, the Gold Coast's specialist remedial builders.",
    heroHeadline: "A Full Brand and Web Build for Remedial Building Experts",
    heroSubheadline:
      "Brand identity, stationery, digital assets and a custom WordPress build — positioning Coast Remedial Solutions as the trusted specialists they are.",

    year: 2024,
    timeline: "5 weeks",
    techStack: ["WordPress", "Custom Builder"],
    collaborators: [
      { role: "Brand, Design & Development", name: "RAVENCI Solutions" },
    ],

    problem: {
      heading: "The Challenge",
      paragraphs: [
        "Coast Remedial Solutions specialise in concrete cancer repair, waterproofing, and structural remediation — services that require immense trust from potential clients. Their previous brand and online presence didn't convey the level of expertise and professionalism they bring to every project.",
        "They needed a full brand system plus a website that would educate potential clients about remedial building while positioning Coast Remedial as the clear choice for complex structural work.",
      ],
      image: "/showcase-images/Client - Coast Remedial Solutions.png",
    },
    approach: {
      heading: "Our Approach",
      paragraphs: [
        "We rebuilt the brand from the ground up — identity, stationery, and digital assets all working together to communicate reliability and structural strength. The website then carried that brand language across every page.",
        "Site structure was planned around the key services, with detailed information that helps property managers and strata committees understand what remedial building involves.",
      ],
      highlights: [
        "Brand identity and stationery design",
        "Digital design assets",
        "Service-focused content architecture",
        "Strata and property manager focused content",
        "Mobile-optimised for on-site referrals",
      ],
      image: "/showcase-images/Client - Coast Remedial Solutions.png",
    },
    features: [
      {
        title: "Brand Identity System",
        description:
          "Logo, colour, typography and stationery designed to communicate reliability and structural strength — perfectly aligned with what the business actually does.",
        image: "/showcase-images/Client - Coast Remedial Solutions.png",
      },
      {
        title: "Service-Focused Architecture",
        description:
          "Detailed service pages that educate property managers on remedial building processes, building trust before the first conversation.",
        image: "/showcase-images/Client - Coast Remedial Solutions.png",
      },
      {
        title: "Mobile-Optimised for Site Referrals",
        description:
          "Property managers often refer contractors on-site from their phones. The site is optimised for quick access to key information and contact details.",
        image: "/showcase-images/Client - Coast Remedial Solutions.png",
      },
    ],
    results: {
      heading: "The Results",
      paragraphs: [
        "The new brand and website established Coast Remedial Solutions as the digital authority in their space, generating consistent organic enquiries from high-value clients.",
      ],
      metrics: [
        { value: "90+", label: "Google PageSpeed" },
        { value: "< 2s", label: "Page Load Time" },
      ],
    },
    galleryImages: [
      "/showcase-images/Client - Coast Remedial Solutions.png",
      "/showcase-images/Client - Coast Remedial Solutions.png",
    ],
    order: 9,
    featured: false,
  },
];

// ─── Helper Functions ─────────────────────────────────────────────────────────

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}

export function getAllSlugs(): string[] {
  return CASE_STUDIES.map((cs) => cs.slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return CASE_STUDIES.filter((cs) => cs.featured).sort(
    (a, b) => a.order - b.order,
  );
}

export function getAllCaseStudies(): CaseStudy[] {
  return [...CASE_STUDIES].sort((a, b) => a.order - b.order);
}

export function getRelatedCaseStudies(
  currentSlug: string,
  limit: number = 3,
): CaseStudy[] {
  const current = getCaseStudyBySlug(currentSlug);
  if (!current) return [];

  // Prefer same industry, then same services, then featured
  const others = CASE_STUDIES.filter((cs) => cs.slug !== currentSlug);
  const scored = others.map((cs) => {
    let score = 0;
    if (cs.industry === current.industry) score += 3;
    const sharedServices = cs.services.filter((s) =>
      current.services.includes(s),
    ).length;
    score += sharedServices;
    if (cs.featured) score += 1;
    return { cs, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.cs);
}
