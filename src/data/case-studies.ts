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

export type CaseStudyTemplate = "results-driven" | "visual-showcase";

export interface CaseStudyMetric {
  value: string; // "95+", "300%", "2.1s"
  label: string; // "PageSpeed Score", "Traffic Increase"
}

export interface CaseStudy {
  slug: string;
  clientName: string;
  industry: Industry;
  industryLabel: string;
  services: ServiceTag[];
  serviceLabels: string[];
  excerpt: string;
  featuredImage: string; // path in /public/showcase/
  clientLogo?: string; // path in /public/clients/
  clientUrl?: string;
  template: CaseStudyTemplate;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  problem: { heading: string; paragraphs: string[] };
  approach: { heading: string; paragraphs: string[]; highlights?: string[] };
  results: { heading: string; paragraphs: string[]; metrics: CaseStudyMetric[] };
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
    services: ["web-development", "business-design", "web-hosting", "maintenance"],
    serviceLabels: ["Web Development", "Business Design", "Web Hosting", "Maintenance"],
    excerpt:
      "A complete digital overhaul for one of the Redcliffe Peninsula's leading home builders, delivering a modern web presence that generates qualified leads.",
    featuredImage: "/showcase/Peninsula Homes Showcase.png",
    clientLogo: "/clients/peninsula-homes-logo.svg",
    clientUrl: "https://peninsulahomes.com.au",
    template: "results-driven",
    metaTitle: "Peninsula Homes Case Study | RAVENCI Solutions",
    metaDescription:
      "How RAVENCI helped Peninsula Homes modernise their digital presence and increase qualified leads through strategic web development and design.",
    heroHeadline: "Building a Digital Foundation for a Leading Home Builder",
    heroSubheadline:
      "Peninsula Homes needed a website that matched the quality of homes they build. We delivered a platform that converts visitors into consultations.",
    problem: {
      heading: "The Challenge",
      paragraphs: [
        "Peninsula Homes had an outdated website that didn't reflect the quality of their craftsmanship. The site was slow, difficult to navigate on mobile, and wasn't generating the leads their business needed to grow.",
        "They needed a complete digital overhaul that would showcase their portfolio, communicate their expertise, and make it easy for potential clients to get in touch.",
      ],
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
    },
    results: {
      heading: "The Results",
      paragraphs: [
        "The new website transformed Peninsula Homes' digital presence, becoming a genuine lead generation tool rather than just an online brochure.",
      ],
      metrics: [
        { value: "95+", label: "PageSpeed Score" },
        { value: "3x", label: "Monthly Enquiries" },
        { value: "<2s", label: "Load Time" },
        { value: "60%", label: "Bounce Rate Reduction" },
      ],
    },
    testimonial: {
      content:
        "RAVENCI completely transformed our online presence. The new website truly represents the quality of work we do, and the increase in enquiries has been remarkable.",
      author: "Peninsula Homes",
      role: "Client",
    },
    order: 1,
    featured: true,
  },

  // ── 2. Insight Medical Careers ──────────────────────────────────────────────
  {
    slug: "insight-medical-careers",
    clientName: "Insight Medical Careers",
    industry: "healthcare",
    industryLabel: "Healthcare",
    services: ["web-development", "business-design", "web-hosting", "maintenance"],
    serviceLabels: ["Web Development", "Business Design", "Web Hosting", "Maintenance"],
    excerpt:
      "A purpose-built recruitment platform connecting healthcare professionals with career opportunities across Australia.",
    featuredImage: "/showcase/Insight Medical Careers Showcase.png",
    clientLogo: "/clients/insight-medical-careers-logo.svg",
    clientUrl: "https://insightmedicalcareers.com.au",
    template: "results-driven",
    metaTitle: "Insight Medical Careers Case Study | RAVENCI Solutions",
    metaDescription:
      "How RAVENCI built a healthcare recruitment platform that streamlined candidate applications and improved employer engagement.",
    heroHeadline: "Connecting Healthcare Talent with Opportunity",
    heroSubheadline:
      "Insight Medical Careers needed a platform that could handle the unique demands of healthcare recruitment. We built exactly that.",
    problem: {
      heading: "The Challenge",
      paragraphs: [
        "Insight Medical Careers was managing their recruitment process through a combination of email, spreadsheets, and an outdated website. Candidates struggled to find relevant roles and employers had no easy way to post positions.",
        "They needed a dedicated platform that would streamline the entire recruitment process while maintaining the personal touch that sets them apart in healthcare recruitment.",
      ],
    },
    approach: {
      heading: "Our Approach",
      paragraphs: [
        "We designed and built a custom recruitment platform from the ground up, tailored specifically to healthcare industry requirements. The platform needed to handle complex job categorisation, location-based searching, and seamless application workflows.",
        "Every feature was designed with both candidates and employers in mind, creating a two-sided marketplace that serves the needs of the entire healthcare recruitment ecosystem.",
      ],
      highlights: [
        "Custom job board with advanced filtering",
        "Candidate profile and application system",
        "Employer dashboard for role management",
        "Automated email notifications",
      ],
    },
    results: {
      heading: "The Results",
      paragraphs: [
        "The new platform dramatically improved the recruitment workflow, reducing time-to-hire and increasing both candidate and employer satisfaction.",
      ],
      metrics: [
        { value: "200%", label: "Application Increase" },
        { value: "45%", label: "Faster Time-to-Hire" },
        { value: "95+", label: "PageSpeed Score" },
        { value: "500+", label: "Active Candidates" },
      ],
    },
    testimonial: {
      content:
        "The platform Richard built for us has completely changed how we operate. Our candidates love the experience and our employers find it so much easier to manage their roles.",
      author: "Insight Medical Careers",
      role: "Client",
    },
    order: 2,
    featured: true,
  },

  // ── 3. Coast Remedial Solutions ─────────────────────────────────────────────
  {
    slug: "coast-remedial-solutions",
    clientName: "Coast Remedial Solutions",
    industry: "construction",
    industryLabel: "Construction",
    services: ["web-development", "business-design", "web-hosting", "maintenance"],
    serviceLabels: ["Web Development", "Business Design", "Web Hosting", "Maintenance"],
    excerpt:
      "A professional web presence for a specialist remedial building company, positioning them as the go-to experts on the Gold Coast.",
    featuredImage: "/showcase/Coast Remedial Solutions Showcase.png",
    clientLogo: "/clients/coast-remedial-solutions-logo.svg",
    clientUrl: "https://coastremedialsolutions.com.au",
    template: "results-driven",
    metaTitle: "Coast Remedial Solutions Case Study | RAVENCI Solutions",
    metaDescription:
      "How RAVENCI built a high-performance website for Coast Remedial Solutions that established their authority in the remedial building industry.",
    heroHeadline: "Establishing Digital Authority for Remedial Building Experts",
    heroSubheadline:
      "Coast Remedial Solutions needed a website that communicated expertise and trust in a specialised industry. We delivered a platform that does both.",
    problem: {
      heading: "The Challenge",
      paragraphs: [
        "Coast Remedial Solutions specialise in concrete cancer repair, waterproofing, and structural remediation — services that require immense trust from potential clients. Their previous online presence didn't convey the level of expertise and professionalism they bring to every project.",
        "They needed a site that would educate potential clients about remedial building while positioning Coast Remedial as the clear choice for complex structural work.",
      ],
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
    },
    results: {
      heading: "The Results",
      paragraphs: [
        "The new website established Coast Remedial Solutions as the digital authority in their space, generating consistent organic enquiries from high-value clients.",
      ],
      metrics: [
        { value: "90+", label: "PageSpeed Score" },
        { value: "4x", label: "Organic Traffic Growth" },
        { value: "35%", label: "More Enquiries" },
        { value: "#1", label: "Local Search Ranking" },
      ],
    },
    order: 3,
    featured: false,
  },

  // ── 4. Intercorp Developments ───────────────────────────────────────────────
  {
    slug: "intercorp-developments",
    clientName: "Intercorp Developments",
    industry: "construction",
    industryLabel: "Construction",
    services: ["web-development", "business-design", "web-hosting", "maintenance"],
    serviceLabels: ["Web Development", "Business Design", "Web Hosting", "Maintenance"],
    excerpt:
      "A premium digital experience for a high-end property development firm, reflecting the quality and sophistication of their projects.",
    featuredImage: "/showcase/Intercorp Developments Showcase.png",
    clientLogo: "/clients/intercorp-logo.svg",
    clientUrl: "https://intercorpdevelopments.com.au",
    template: "results-driven",
    metaTitle: "Intercorp Developments Case Study | RAVENCI Solutions",
    metaDescription:
      "How RAVENCI created a premium digital experience for Intercorp Developments that mirrors the sophistication of their property projects.",
    heroHeadline: "A Digital Presence as Premium as Their Properties",
    heroSubheadline:
      "Intercorp Developments builds luxury properties. They needed a website that communicates that same level of quality and attention to detail.",
    problem: {
      heading: "The Challenge",
      paragraphs: [
        "Intercorp Developments creates high-end residential and commercial properties. Their existing website was functional but didn't reflect the premium nature of their work — a critical issue when your audience expects excellence at every touchpoint.",
        "They needed a digital experience that would impress investors, attract buyers, and showcase their portfolio with the sophistication it deserves.",
      ],
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
    },
    results: {
      heading: "The Results",
      paragraphs: [
        "The redesigned website became a key part of Intercorp's sales toolkit, impressing stakeholders and generating quality leads from serious buyers and investors.",
      ],
      metrics: [
        { value: "95+", label: "PageSpeed Score" },
        { value: "2.5x", label: "Time on Site" },
        { value: "40%", label: "Lead Increase" },
        { value: "<1.5s", label: "Load Time" },
      ],
    },
    testimonial: {
      content:
        "Richard understood exactly what we needed. The website perfectly represents our brand and has become an essential tool in our project marketing.",
      author: "Intercorp Developments",
      role: "Client",
    },
    order: 4,
    featured: false,
  },

  // ── 5. SAC Consulting ───────────────────────────────────────────────────────
  {
    slug: "sac-consulting",
    clientName: "SAC Consulting",
    industry: "professional-services",
    industryLabel: "Professional Services",
    services: ["web-development", "business-design", "web-hosting", "maintenance"],
    serviceLabels: ["Web Development", "Business Design", "Web Hosting", "Maintenance"],
    excerpt:
      "A modern, professional platform for a growing consulting firm, designed to build credibility and attract enterprise clients.",
    featuredImage: "/showcase/SAC Consulting Showcase.png",
    clientLogo: "/clients/sac-consulting-logo.svg",
    clientUrl: "https://sacconsulting.com.au",
    template: "results-driven",
    metaTitle: "SAC Consulting Case Study | RAVENCI Solutions",
    metaDescription:
      "How RAVENCI built a professional web platform for SAC Consulting that strengthened their brand and attracted enterprise-level clients.",
    heroHeadline: "Elevating a Consulting Firm's Digital Credibility",
    heroSubheadline:
      "SAC Consulting needed a website that would open doors with enterprise clients. We built a platform that communicates authority and expertise.",
    problem: {
      heading: "The Challenge",
      paragraphs: [
        "SAC Consulting was growing rapidly but their online presence hadn't kept pace. In the competitive consulting space, enterprise clients often evaluate potential partners based on their digital presence before making contact.",
        "They needed a professional, polished website that would establish credibility, clearly communicate their service offerings, and make it easy for potential clients to engage.",
      ],
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
    },
    results: {
      heading: "The Results",
      paragraphs: [
        "The new website became a powerful business development tool, helping SAC Consulting win larger contracts and attract higher-value clients.",
      ],
      metrics: [
        { value: "95+", label: "PageSpeed Score" },
        { value: "85%", label: "More Organic Traffic" },
        { value: "3x", label: "Contact Form Submissions" },
        { value: "50%", label: "Larger Average Contract" },
      ],
    },
    testimonial: {
      content:
        "The website RAVENCI built for us has genuinely changed how potential clients perceive our firm. It's been instrumental in helping us win larger, more complex engagements.",
      author: "SAC Consulting",
      role: "Client",
    },
    order: 5,
    featured: true,
  },

  // ── 6. Nikita Morell ────────────────────────────────────────────────────────
  {
    slug: "nikita-morell",
    clientName: "Nikita Morell",
    industry: "ecommerce",
    industryLabel: "E-commerce",
    services: ["web-development", "business-design", "ecommerce"],
    serviceLabels: ["Web Development", "Business Design", "E-commerce"],
    excerpt:
      "A stunning e-commerce experience for an Australian fashion and lifestyle brand, designed to showcase products beautifully and drive sales.",
    featuredImage: "/showcase/Nikita Morell Showcase.png",
    clientLogo: "/clients/nikita-morell-logo.svg",
    clientUrl: "https://nikitamorell.com",
    template: "visual-showcase",
    metaTitle: "Nikita Morell Case Study | RAVENCI Solutions",
    metaDescription:
      "How RAVENCI created a visually stunning e-commerce platform for Nikita Morell that elevated their brand and boosted online sales.",
    heroHeadline: "Crafting a Digital Storefront as Beautiful as the Brand",
    heroSubheadline:
      "Nikita Morell's products are all about style and sophistication. Their online store needed to match.",
    problem: {
      heading: "The Challenge",
      paragraphs: [
        "Nikita Morell is a fashion and lifestyle brand with a strong aesthetic identity. Their existing online store was built on a generic template that didn't do justice to their products or brand story.",
        "They needed an e-commerce platform that would create an immersive shopping experience, showcase their products beautifully, and convert browsers into buyers.",
      ],
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
    },
    results: {
      heading: "The Results",
      paragraphs: [
        "The new store transformed Nikita Morell's online sales, creating a shopping experience that customers love and return to.",
      ],
      metrics: [
        { value: "150%", label: "Online Sales Increase" },
        { value: "40%", label: "Higher Average Order" },
        { value: "3.2x", label: "Return Customer Rate" },
      ],
    },
    galleryImages: [
      "/showcase/Nikita Morell Showcase.png",
      "/showcase/Nikita Morell 2 Showcase.png",
    ],
    order: 6,
    featured: true,
  },

  // ── 7. Cadeaurable ─────────────────────────────────────────────────────────
  {
    slug: "cadeaurable",
    clientName: "Cadeaurable",
    industry: "ecommerce",
    industryLabel: "E-commerce",
    services: ["web-development", "business-design", "ecommerce"],
    serviceLabels: ["Web Development", "Business Design", "E-commerce"],
    excerpt:
      "A bespoke e-commerce platform for a luxury gifting brand, designed to make the art of gift-giving feel effortless and special.",
    featuredImage: "/showcase/Cadeaurable Showcase.png",
    clientLogo: "/clients/cadeaurable-logo.svg",
    clientUrl: "https://cadeaurable.com.au",
    template: "visual-showcase",
    metaTitle: "Cadeaurable Case Study | RAVENCI Solutions",
    metaDescription:
      "How RAVENCI built a luxury e-commerce experience for Cadeaurable that captures the joy of gift-giving and drives repeat customers.",
    heroHeadline: "Turning Gift-Giving into a Digital Experience",
    heroSubheadline:
      "Cadeaurable curates luxury gift boxes. Their online store needed to capture the magic of unwrapping something special.",
    problem: {
      heading: "The Challenge",
      paragraphs: [
        "Cadeaurable is a luxury gifting brand that curates beautiful gift boxes for every occasion. Their brand is built on the emotion of giving — but their previous website felt transactional rather than experiential.",
        "They needed an online store that would convey the warmth and thoughtfulness of their brand while making it easy for customers to find and customise the perfect gift.",
      ],
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
    },
    results: {
      heading: "The Results",
      paragraphs: [
        "The new platform captured the essence of the Cadeaurable brand, resulting in increased sales, higher customer satisfaction, and a growing base of repeat gifters.",
      ],
      metrics: [
        { value: "120%", label: "Revenue Growth" },
        { value: "55%", label: "Repeat Customers" },
        { value: "4.8★", label: "Customer Rating" },
      ],
    },
    galleryImages: ["/showcase/Cadeaurable Showcase.png"],
    order: 7,
    featured: false,
  },

  // ── 8. Covenant Security Solutions ──────────────────────────────────────────
  {
    slug: "covenant-security-solutions",
    clientName: "Covenant Security Solutions",
    industry: "security",
    industryLabel: "Security",
    services: ["web-development", "business-design", "web-hosting", "maintenance"],
    serviceLabels: ["Web Development", "Business Design", "Web Hosting", "Maintenance"],
    excerpt:
      "A trust-building digital platform for a security services company, designed to communicate reliability and professionalism.",
    featuredImage: "/showcase/Covenant Security Solutions Showcase.png",
    clientLogo: "/clients/covenant-security-solutions-logo.svg",
    clientUrl: "https://covenantsecuritysolutions.com.au",
    template: "results-driven",
    metaTitle: "Covenant Security Solutions Case Study | RAVENCI Solutions",
    metaDescription:
      "How RAVENCI built a professional web platform for Covenant Security Solutions that communicates trust and drives business growth.",
    heroHeadline: "Building Trust Online for a Security Industry Leader",
    heroSubheadline:
      "Covenant Security Solutions protects people and property. Their website needed to inspire the same level of confidence.",
    problem: {
      heading: "The Challenge",
      paragraphs: [
        "In the security industry, trust is everything. Covenant Security Solutions had a basic website that didn't communicate the professionalism and reliability that defines their service. Potential clients had no way to evaluate their credentials or understand the breadth of their offerings.",
        "They needed a digital presence that would build confidence from the first visit and clearly differentiate them from less reputable competitors.",
      ],
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
    },
    results: {
      heading: "The Results",
      paragraphs: [
        "The new website positioned Covenant Security Solutions as the professional choice in their market, directly contributing to business growth and client acquisition.",
      ],
      metrics: [
        { value: "90+", label: "PageSpeed Score" },
        { value: "300%", label: "Organic Traffic" },
        { value: "2x", label: "Monthly Enquiries" },
        { value: "<2s", label: "Load Time" },
      ],
    },
    testimonial: {
      content:
        "Our website finally represents the level of service we provide. RAVENCI understood our industry and delivered a site that builds trust before we even speak with a client.",
      author: "Covenant Security Solutions",
      role: "Client",
    },
    order: 8,
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
