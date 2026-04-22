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

export type CaseStudyTemplate = "results-driven" | "visual-showcase" | "premium";

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
  image?: string; // single screenshot (legacy/results-driven template)
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
  // ── 1. Peninsula Homes ──────────────────────────────────────────────────────
  {
    slug: "peninsula-homes",
    clientName: "Peninsula Homes",
    industry: "construction",
    industryLabel: "Construction",
    services: [
      "web-development",
      "business-design",
      "web-hosting",
      "maintenance",
    ],
    serviceLabels: ["Web Development", "Web Hosting", "Maintenance"],
    excerpt:
      "A complete digital overhaul for one of the Redcliffe Peninsula's leading home builders, delivering a modern web presence that generates qualified leads.",
    featuredImage: "/showcase-images/Client - Peninsula Homes.png",
    clientLogo: "/clients/peninsula-homes-logo.svg",
    clientUrl: "https://peninsulahomes.com.au",
    template: "premium",
    metaTitle: "Peninsula Homes Case Study | RAVENCI Solutions",
    metaDescription:
      "How RAVENCI helped Peninsula Homes modernise their digital presence and increase qualified leads through strategic web development and design.",
    heroHeadline: "Building a Digital Foundation for a Leading Home Builder",
    heroSubheadline:
      "Peninsula Homes needed a website that matched the quality of homes they build. We delivered a platform that converts visitors into consultations.",

    // Project metadata
    year: 2024,
    timeline: "6 weeks",
    techStack: ["WordPress", "Divi Builder", "Cloudways"],
    collaborators: [
      { role: "Development", name: "RAVENCI Solutions" },
      { role: "Design", name: "The Design Order" },
    ],

    problem: {
      heading: "The Challenge",
      paragraphs: [
        "Peninsula Homes had an outdated website that didn't reflect the quality of their craftsmanship. The site was slow, difficult to navigate on mobile, and wasn't generating the leads their business needed to grow.",
        "They needed a complete digital overhaul that would showcase their portfolio, communicate their expertise, and make it easy for potential clients to get in touch.",
      ],
      // Drop screenshots into /public/showcase-images/peninsula-homes/ then list here.
      // Falls back to the single `image` below until populated.
      // images: [
      //   "/showcase-images/peninsula-homes/old-site-1.png",
      //   "/showcase-images/peninsula-homes/old-site-2.png",
      // ],
      image: "/showcase-images/Client - Peninsula Homes.png",
    },
    approach: {
      heading: "Our Approach",
      paragraphs: [
        "We started with a thorough discovery phase, understanding Peninsula Homes' ideal clients and the journey from initial enquiry to signed contract. This informed every design and development decision.",
        "The new site was built on a modern stack with a focus on speed, SEO, and mobile-first design. We created a portfolio showcase system that lets their work speak for itself.",
      ],
      highlights: [
        "Mobile-first responsive design",
        "Portfolio showcase with project filtering",
        "Integrated enquiry forms with CRM connection",
        "SEO-optimised content structure",
      ],
      // images: [
      //   "/showcase-images/peninsula-homes/wireframe.png",
      //   "/showcase-images/peninsula-homes/design-system.png",
      // ],
      image: "/showcase-images/Client - Peninsula Homes.png",
    },
    features: [
      {
        title: "Portfolio Showcase System",
        description:
          "A filterable project gallery that lets Peninsula Homes' craftsmanship speak for itself, with high-resolution imagery and detailed project breakdowns.",
        // images: [
        //   "/showcase-images/peninsula-homes/portfolio-grid.png",
        //   "/showcase-images/peninsula-homes/portfolio-detail.png",
        // ],
        image: "/showcase-images/Client - Peninsula Homes.png",
      },
      {
        title: "Lead Generation Forms",
        description:
          "Strategically placed enquiry forms connected to their CRM, making it effortless for potential clients to start a conversation.",
        // images: [
        //   "/showcase-images/peninsula-homes/contact-form.png",
        //   "/showcase-images/peninsula-homes/inline-cta.png",
        // ],
        image: "/showcase-images/Client - Peninsula Homes.png",
      },
      {
        title: "Mobile-First Experience",
        description:
          "Designed for the way people actually browse — on their phones. Every page is optimised for touch navigation and fast load times on mobile networks.",
        // images: [
        //   "/showcase-images/peninsula-homes/mobile-home.png",
        //   "/showcase-images/peninsula-homes/mobile-portfolio.png",
        // ],
        image: "/showcase-images/Client - Peninsula Homes.png",
      },
    ],
    results: {
      heading: "The Results",
      paragraphs: [
        "The new website transformed Peninsula Homes' digital presence, becoming a genuine lead generation tool rather than just an online brochure. Performance, mobile experience, and lead-capture mechanics were rebuilt from the ground up.",
      ],
      metrics: [
        { value: "90+", label: "Google PageSpeed" },
        { value: "< 2s", label: "Page Load Time" },
      ],
    },
    galleryImages: [
      "/showcase-images/Client - Peninsula Homes.png",
      "/showcase-images/Client - Peninsula Homes.png",
    ],
    order: 1,
    featured: true,
  },

  // ── 2. Coast Remedial Solutions ─────────────────────────────────────────────
  {
    slug: "coast-remedial-solutions",
    clientName: "Coast Remedial Solutions",
    industry: "construction",
    industryLabel: "Construction",
    services: [
      "web-development",
      "business-design",
      "web-hosting",
      "maintenance",
    ],
    serviceLabels: [
      "Web Development",
      "Business Design",
      "Web Hosting",
      "Maintenance",
    ],
    excerpt:
      "A professional web presence for a specialist remedial building company, positioning them as the go-to experts on the Gold Coast.",
    featuredImage: "/showcase-images/Client - Coast Remedial Solutions.png",
    clientLogo: "/clients/coast-remedial-solutions-logo.svg",
    clientUrl: "https://coastremedialsolutions.com.au",
    template: "premium",
    metaTitle: "Coast Remedial Solutions Case Study | RAVENCI Solutions",
    metaDescription:
      "How RAVENCI built a high-performance website for Coast Remedial Solutions that established their authority in the remedial building industry.",
    heroHeadline:
      "Establishing Digital Authority for Remedial Building Experts",
    heroSubheadline:
      "Coast Remedial Solutions needed a website that communicated expertise and trust in a specialised industry. We delivered a platform that does both.",

    year: 2024,
    timeline: "5 weeks",
    techStack: ["WordPress", "Elementor", "cPanel", "Cloudflare"],
    collaborators: [
      { role: "Design & Development", name: "RAVENCI Solutions" },
    ],

    problem: {
      heading: "The Challenge",
      paragraphs: [
        "Coast Remedial Solutions specialise in concrete cancer repair, waterproofing, and structural remediation — services that require immense trust from potential clients. Their previous online presence didn't convey the level of expertise and professionalism they bring to every project.",
        "They needed a site that would educate potential clients about remedial building while positioning Coast Remedial as the clear choice for complex structural work.",
      ],
      image: "/showcase-images/Client - Coast Remedial Solutions.png",
    },
    approach: {
      heading: "Our Approach",
      paragraphs: [
        "We focused on building trust through content and design. The site structure was planned around the key services, with detailed information that helps property managers and strata committees understand what remedial building involves.",
        "The visual design uses strong imagery and a professional colour palette that conveys reliability and structural strength — perfectly aligned with their brand.",
      ],
      highlights: [
        "Service-focused content architecture",
        "Before-and-after project galleries",
        "Strata and property manager focused content",
        "Mobile-optimised for on-site referrals",
      ],
      image: "/showcase-images/Client - Coast Remedial Solutions.png",
    },
    features: [
      {
        title: "Service-Focused Architecture",
        description:
          "Detailed service pages that educate property managers on remedial building processes, building trust before the first conversation.",
        image: "/showcase-images/Client - Coast Remedial Solutions.png",
      },
      {
        title: "Before-and-After Galleries",
        description:
          "Visual proof of their expertise through project galleries that show the transformation from damaged structures to restored buildings.",
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
        "The new website established Coast Remedial Solutions as the digital authority in their space, generating consistent organic enquiries from high-value clients.",
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
    order: 2,
    featured: false,
  },

  // ── 3. Intercorp Developments ───────────────────────────────────────────────
  {
    slug: "intercorp-developments",
    clientName: "Intercorp Developments",
    industry: "construction",
    industryLabel: "Construction",
    services: [
      "web-development",
      "business-design",
      "web-hosting",
      "maintenance",
    ],
    serviceLabels: [
      "Web Development",
      "Business Design",
      "Web Hosting",
      "Maintenance",
    ],
    excerpt:
      "A premium digital experience for a high-end property development firm, reflecting the quality and sophistication of their projects.",
    featuredImage: "/showcase-images/Client - Intercorp Developments.png",
    clientLogo: "/clients/intercorp-logo.svg",
    clientUrl: "https://intercorpdevelopments.com.au",
    template: "premium",
    metaTitle: "Intercorp Developments Case Study | RAVENCI Solutions",
    metaDescription:
      "How RAVENCI created a premium digital experience for Intercorp Developments that mirrors the sophistication of their property projects.",
    heroHeadline: "A Digital Presence as Premium as Their Properties",
    heroSubheadline:
      "Intercorp Developments builds luxury properties. They needed a website that communicates that same level of quality and attention to detail.",

    year: 2024,
    timeline: "6 weeks",
    techStack: ["WordPress", "Elementor", "cPanel", "Cloudflare"],
    collaborators: [
      { role: "Design & Development", name: "RAVENCI Solutions" },
    ],

    problem: {
      heading: "The Challenge",
      paragraphs: [
        "Intercorp Developments creates high-end residential and commercial properties. Their existing website was functional but didn't reflect the premium nature of their work — a critical issue when your audience expects excellence at every touchpoint.",
        "They needed a digital experience that would impress investors, attract buyers, and showcase their portfolio with the sophistication it deserves.",
      ],
      image: "/showcase-images/Client - Intercorp Developments.png",
    },
    approach: {
      heading: "Our Approach",
      paragraphs: [
        "We took a design-led approach, creating an immersive visual experience that lets Intercorp's projects take centre stage. Clean layouts, generous whitespace, and high-impact imagery work together to convey luxury and professionalism.",
        "The development focused on performance and smooth interactions, ensuring the premium feel extends to every click and scroll.",
      ],
      highlights: [
        "Premium design with cinematic project showcases",
        "Smooth scroll animations and transitions",
        "Investor-focused content sections",
        "High-performance image optimisation",
      ],
      image: "/showcase-images/Client - Intercorp Developments.png",
    },
    features: [
      {
        title: "Cinematic Project Showcases",
        description:
          "Full-bleed imagery and smooth transitions create an immersive experience that lets the quality of Intercorp's developments shine through.",
        image: "/showcase-images/Client - Intercorp Developments.png",
      },
      {
        title: "Investor-Focused Content",
        description:
          "Dedicated sections for investors with project details, timelines, and returns — designed to build confidence and drive enquiries from serious buyers.",
        image: "/showcase-images/Client - Intercorp Developments.png",
      },
      {
        title: "Performance-Optimised Imagery",
        description:
          "High-resolution project photos served at optimal sizes for every device, ensuring the premium feel doesn't come at the cost of load times.",
        image: "/showcase-images/Client - Intercorp Developments.png",
      },
    ],
    results: {
      heading: "The Results",
      paragraphs: [
        "The redesigned website became a key part of Intercorp's sales toolkit, impressing stakeholders and generating quality leads from serious buyers and investors.",
      ],
      metrics: [{ value: "85+", label: "Google PageSpeed" }],
    },
    galleryImages: [
      "/showcase-images/Client - Intercorp Developments.png",
      "/showcase-images/Client - Intercorp Developments.png",
    ],
    order: 3,
    featured: false,
  },

  // ── 4. SAC Consulting ───────────────────────────────────────────────────────
  {
    slug: "sac-consulting",
    clientName: "SAC Consulting",
    industry: "professional-services",
    industryLabel: "Professional Services",
    services: [
      "web-development",
      "business-design",
      "web-hosting",
      "maintenance",
    ],
    serviceLabels: [
      "Web Development",
      "Business Design",
      "Web Hosting",
      "Maintenance",
    ],
    excerpt:
      "A modern, professional platform for a growing consulting firm, designed to build credibility and attract enterprise clients.",
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
    techStack: ["WordPress", "Elementor", "cPanel", "Cloudflare"],
    collaborators: [
      { role: "Design & Development", name: "RAVENCI Solutions" },
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
    order: 4,
    featured: true,
  },

  // ── 5. Nikita Morell ────────────────────────────────────────────────────────
  {
    slug: "nikita-morell",
    clientName: "Nikita Morell",
    industry: "ecommerce",
    industryLabel: "E-commerce",
    services: ["web-development", "business-design", "ecommerce"],
    serviceLabels: ["Web Development", "Business Design", "E-commerce"],
    excerpt:
      "A stunning e-commerce experience for an Australian fashion and lifestyle brand, designed to showcase products beautifully and drive sales.",
    featuredImage: "/showcase-images/Client - Nikita Morell.png",
    clientLogo: "/clients/nikita-morell-logo.svg",
    clientUrl: "https://nikitamorell.com",
    template: "premium",
    metaTitle: "Nikita Morell Case Study | RAVENCI Solutions",
    metaDescription:
      "How RAVENCI created a visually stunning e-commerce platform for Nikita Morell that elevated their brand and boosted online sales.",
    heroHeadline: "Crafting a Digital Storefront as Beautiful as the Brand",
    heroSubheadline:
      "Nikita Morell's products are all about style and sophistication. Their online store needed to match.",

    year: 2023,
    timeline: "10 weeks",
    techStack: ["Shopify", "Liquid", "Custom Theme", "Cloudflare"],
    collaborators: [
      { role: "Design & Development", name: "RAVENCI Solutions" },
    ],

    problem: {
      heading: "The Challenge",
      paragraphs: [
        "Nikita Morell is a fashion and lifestyle brand with a strong aesthetic identity. Their existing online store was built on a generic template that didn't do justice to their products or brand story.",
        "They needed an e-commerce platform that would create an immersive shopping experience, showcase their products beautifully, and convert browsers into buyers.",
      ],
      image: "/showcase-images/Client - Nikita Morell.png",
    },
    approach: {
      heading: "Our Approach",
      paragraphs: [
        "We designed a visually rich e-commerce experience that puts the products front and centre. Large imagery, elegant typography, and thoughtful whitespace create a premium shopping environment that reflects the brand's aesthetic.",
        "The development focused on smooth shopping flows, fast page loads, and a checkout process that minimises friction — because in e-commerce, every extra second costs sales.",
      ],
      highlights: [
        "Visually-led product showcase design",
        "Streamlined checkout experience",
        "Brand story integration throughout",
        "Mobile-first shopping optimisation",
      ],
      image: "/showcase-images/Client - Nikita Morell - Wordshop.png",
    },
    features: [
      {
        title: "Product-First Showcase",
        description:
          "Large imagery, elegant typography, and thoughtful whitespace create a premium shopping environment that lets the products shine.",
        image: "/showcase-images/Client - Nikita Morell.png",
      },
      {
        title: "Streamlined Checkout",
        description:
          "A friction-free checkout process optimised for mobile shoppers, because in e-commerce every extra second costs sales.",
        image: "/showcase-images/Client - Nikita Morell - Wordshop.png",
      },
      {
        title: "Brand Story Integration",
        description:
          "The brand's story is woven throughout the shopping experience, turning casual browsers into loyal customers who connect with the Nikita Morell identity.",
        image: "/showcase-images/Client - Nikita Morell.png",
      },
    ],
    results: {
      heading: "The Results",
      paragraphs: [
        "The new store transformed Nikita Morell's online sales, creating a shopping experience that customers love and return to.",
      ],
      metrics: [{ value: "85+", label: "Google PageSpeed" }],
    },
    galleryImages: [
      "/showcase-images/Client - Nikita Morell.png",
      "/showcase-images/Client - Nikita Morell - Wordshop.png",
    ],
    order: 5,
    featured: true,
  },

  // ── 6. Cadeaurable ─────────────────────────────────────────────────────────
  {
    slug: "cadeaurable",
    clientName: "Cadeaurable",
    industry: "ecommerce",
    industryLabel: "E-commerce",
    services: ["web-development", "business-design", "ecommerce"],
    serviceLabels: ["Web Development", "Business Design", "E-commerce"],
    excerpt:
      "A bespoke e-commerce platform for a luxury gifting brand, designed to make the art of gift-giving feel effortless and special.",
    featuredImage: "/showcase-images/Client - Cadeaurable.png",
    clientLogo: "/clients/cadeaurable-logo.svg",
    clientUrl: "https://cadeaurable.com.au",
    template: "premium",
    metaTitle: "Cadeaurable Case Study | RAVENCI Solutions",
    metaDescription:
      "How RAVENCI built a luxury e-commerce experience for Cadeaurable that captures the joy of gift-giving and drives repeat customers.",
    heroHeadline: "Turning Gift-Giving into a Digital Experience",
    heroSubheadline:
      "Cadeaurable curates luxury gift boxes. Their online store needed to capture the magic of unwrapping something special.",

    year: 2022,
    timeline: "8 weeks",
    techStack: ["Shopify", "Liquid", "Custom Theme"],
    collaborators: [
      { role: "Design & Development", name: "RAVENCI Solutions" },
    ],

    problem: {
      heading: "The Challenge",
      paragraphs: [
        "Cadeaurable is a luxury gifting brand that curates beautiful gift boxes for every occasion. Their brand is built on the emotion of giving — but their previous website felt transactional rather than experiential.",
        "They needed an online store that would convey the warmth and thoughtfulness of their brand while making it easy for customers to find and customise the perfect gift.",
      ],
      image: "/showcase-images/Client - Cadeaurable.png",
    },
    approach: {
      heading: "Our Approach",
      paragraphs: [
        "We designed an experience centred around emotion and discovery. Warm colours, elegant product photography, and storytelling elements guide visitors through the gift selection process, making them feel like they're choosing something truly special.",
        "The platform includes intuitive filtering by occasion, recipient, and price point, making it effortless to find the right gift box.",
      ],
      highlights: [
        "Emotion-driven design language",
        "Occasion and recipient based filtering",
        "Gift customisation workflows",
        "Storytelling product pages",
      ],
      image: "/showcase-images/Client - Cadeaurable.png",
    },
    features: [
      {
        title: "Emotion-Driven Design",
        description:
          "Warm colours, elegant photography, and storytelling elements create an experience that captures the joy of giving a thoughtful gift.",
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
        "The new platform captured the essence of the Cadeaurable brand, resulting in increased sales, higher customer satisfaction, and a growing base of repeat gifters.",
      ],
      metrics: [{ value: "85+", label: "Google PageSpeed" }],
    },
    galleryImages: [
      "/showcase-images/Client - Cadeaurable.png",
      "/showcase-images/Client - Cadeaurable.png",
    ],
    order: 6,
    featured: false,
  },

  // ── 7. Covenant Security Solutions ──────────────────────────────────────────
  {
    slug: "covenant-security-solutions",
    clientName: "Covenant Security Solutions",
    industry: "security",
    industryLabel: "Security",
    services: [
      "web-development",
      "business-design",
      "web-hosting",
      "maintenance",
    ],
    serviceLabels: [
      "Web Development",
      "Business Design",
      "Web Hosting",
      "Maintenance",
    ],
    excerpt:
      "A trust-building digital platform for a security services company, designed to communicate reliability and professionalism.",
    featuredImage: "/showcase-images/Client - Covenant Security.png",
    clientLogo: "/clients/covenant-security-solutions-logo.svg",
    clientUrl: "https://covenantsecuritysolutions.com.au",
    template: "premium",
    metaTitle: "Covenant Security Solutions Case Study | RAVENCI Solutions",
    metaDescription:
      "How RAVENCI built a professional web platform for Covenant Security Solutions that communicates trust and drives business growth.",
    heroHeadline: "Building Trust Online for a Security Industry Leader",
    heroSubheadline:
      "Covenant Security Solutions protects people and property. Their website needed to inspire the same level of confidence.",

    year: 2024,
    timeline: "5 weeks",
    techStack: ["WordPress", "Elementor", "cPanel", "Cloudflare"],
    collaborators: [
      { role: "Design & Development", name: "RAVENCI Solutions" },
    ],

    problem: {
      heading: "The Challenge",
      paragraphs: [
        "In the security industry, trust is everything. Covenant Security Solutions had a basic website that didn't communicate the professionalism and reliability that defines their service. Potential clients had no way to evaluate their credentials or understand the breadth of their offerings.",
        "They needed a digital presence that would build confidence from the first visit and clearly differentiate them from less reputable competitors.",
      ],
      image: "/showcase-images/Client - Covenant Security.png",
    },
    approach: {
      heading: "Our Approach",
      paragraphs: [
        "We built a site around the pillars of trust: credentials, experience, and social proof. The design uses strong, confident visuals and a structured layout that communicates professionalism and attention to detail.",
        "Key service pages were developed with detailed information that helps potential clients understand exactly what Covenant offers, reducing the friction between website visit and enquiry.",
      ],
      highlights: [
        "Trust-focused design with credentials prominent",
        "Detailed service breakdowns for each offering",
        "Client testimonials and case references",
        "Quick-response enquiry system",
      ],
      image: "/showcase-images/Client - Covenant Security.png",
    },
    features: [
      {
        title: "Trust-First Design",
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
      {
        title: "Quick-Response Enquiry System",
        description:
          "Streamlined contact forms and prominent call-to-action buttons reduce the friction between interest and enquiry.",
        image: "/showcase-images/Client - Covenant Security.png",
      },
    ],
    results: {
      heading: "The Results",
      paragraphs: [
        "The new website positioned Covenant Security Solutions as the professional choice in their market, directly contributing to business growth and client acquisition.",
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
    order: 7,
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
