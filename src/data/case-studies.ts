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
   * If true, every non-video item in this feature renders with the
   * auto-scrolling ScrollingScreenshot component instead of a static
   * image. Use for full-length page screenshots; videos still render
   * as autoplay-loop-muted regardless.
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
  /**
   * Override the default 60-second scroll cycle for this case study.
   * Taller pages need longer durations to maintain the same visual pace.
   * Rule of thumb: if the page is 2× as tall as a typical one, double it.
   */
  featuredImageScrollDuration?: number;
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
    /** Optional badge overlaid on the image — e.g. "Old Site" / "Before" */
    imageLabel?: string;
  };
  approach: {
    heading: string;
    paragraphs: string[];
    highlights?: string[];
    image?: string;
    images?: string[]; // multiple screenshots (premium template)
    /** Optional badge overlaid on the image — e.g. "PageSpeed Result" */
    imageLabel?: string;
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
  {
    slug: "dirt",
    clientName: "DIRT",
    industry: "other",
    industryLabel: "Technology",
    services: ["web-development"],
    serviceLabels: ["Web Development"],
    excerpt:
      "A branding agency that builds brands to win bids in construction and property — fresh positioning and \"grounded, gutsy, impossible to ignore\" identity work for an industry where most competitors sound and look the same.",
    featuredImage: "/showcase-images/dirt/full-page.jpg",
    featuredImageScroll: true,
    featuredImageScrollDuration: 120, // page is much taller than typical
    clientLogo: "/clients/dirt-logo.svg",
    clientUrl: "https://thedirtagency.com",
    template: "premium",
    metaTitle: "DIRT Case Study | RAVENCI Solutions",
    metaDescription:
      "DIRT — a brand-new branding agency for construction, property and AEC firms — needed a site that matched their refusal to be beige. Modern, interactive, custom-coded on Plasmic with no subscription stack.",
    heroHeadline: "Built to Match a Brand That Doesn't Blend In",
    heroSubheadline:
      "A brand-new construction-and-property branding agency needed a site that matched the attitude — modern, interactive, unmistakably theirs. Built on Plasmic with custom-coded interactions and AI features wired straight to the model, so DIRT pays for what they use, not for another subscription on top.",

    year: 2026,
    techStack: [
      "Next.js",
      "Plasmic",
      "Anthropic API",
      "ActiveCampaign",
      "ClickUp",
      "Google Analytics",
    ],
    collaborators: [
      { role: "Development", name: "RAVENCI Solutions" },
      {
        role: "Design",
        name: "The Other Design Co.",
        url: "https://www.theotherdesign.co/",
      },
    ],

    problem: {
      heading: "The Challenge",
      paragraphs: [
        "Nikita launched DIRT to do branding for an industry where most agencies sound and look the same — construction, AEC software, property and building materials. The work is bold by design: positioning, messaging, identity, websites and sales assets that refuse to be beige.",
        "The site needed to do for DIRT what DIRT does for its clients — refuse to blend in. Modern, interactive, unmistakably theirs. Plus a CMS Nikita could run herself, and a couple of planned AI features she'd been told she'd need a tool like Lovable to build.",
      ],
    },
    approach: {
      heading: "Our Approach",
      paragraphs: [
        "Nikita is also the founder of Nikita Morell, the only copywriter writing exclusively for architects — a site we've maintained for her for the better part of five years. When DIRT was ready to launch, she came back to us. The brief was open: modern, unique, intuitive, and the development should make all of that work while staying out of the way.",
        "Her first instinct was to step away from WordPress and build on Framer, with Lovable layered on for the AI features. Both would have worked, but both came with subscription overhead she didn't actually need. We suggested Plasmic instead — same visual editing freedom, free at the tier she required, and far more room to build the custom components DIRT's design called for. And rather than wrap the AI features in another middleware subscription, we built them ourselves so DIRT pays the AI provider (Anthropic) directly for what they use, full stop.",
        "From there it was modular components for everything. Every section on the site is a reusable block Nikita can add, remove or reorder herself. The design plays with the brand metaphor — dirt, building, construction — through scroll-reactive interactions that bring the personality to life without slowing the page down.",
      ],
      highlights: [
        "Custom components on Plasmic — Nikita edits everything herself, no developer needed",
        "AI features built directly to Anthropic — no middleware subscription on top",
        "Fully modular layout — every block is reusable on any page",
        "Scroll-reactive interactions that play with the brand metaphor",
        "Five years of trust between RAVENCI and Nikita made the platform decisions easy",
      ],
      image: "/showcase-images/dirt/dirt-pagespeed.jpg",
    },
    features: [
      {
        title: "A Header That Rises From the Dirt",
        description:
          "The site's first interaction puts the brand front and centre — the word \"DIRT\" literally rises out of a pile of dirt as the page loads. The kind of touch that signals from the first second that this isn't a typical agency site.",
        image: "/showcase-images/dirt/dirt-header.mp4",
      },
      {
        title: "A Building That Crumbles With Every Selection",
        description:
          "Pick from a checklist of services and an animated building reacts in real time — crumbling more with each item selected, regardless of the order. The count holds steady even as visitors toggle items on and off, so the interaction stays smooth instead of glitching out.",
        image: "/showcase-images/dirt/dirt-crumbling-building.mp4",
      },
      {
        title: "A Slider That Fills With Dirt as You Pull",
        description:
          "Visitors can drag a slider and watch dirt physically fill in alongside it — turning a normally boring numeric input into something visitors actually play with. Small detail; reflects the brand attitude exactly.",
        image: "/showcase-images/dirt/dirt-slider.mp4",
      },
      {
        title: "A Block System Nikita Can Build With",
        description:
          "Every section on the site is a reusable, modular block. Nikita can add, remove, or reorder them on any page without touching code — and the components handle whatever combination she throws at them. The site grows with the business instead of locking it into the launch-day layout.",
        image: "/showcase-images/dirt/dirt-plasmic-dashboard.jpg",
      },
    ],
    results: {
      heading: "The Results",
      paragraphs: [
        "DIRT launched in April 2026 — recently enough that traffic and conversion analytics are still building (we'll update this in a month with the full picture). The performance side is settled though: 97 on PageSpeed, 100 on best practices, fast on every device. Traffic is strong from day one and the responses have been consistently positive — Nikita's getting the kind of attention DIRT was built to attract.",
        "The bigger story is the foundation underneath. Plasmic at the free tier covers everything Nikita needs. AI features call the model directly, so the only ongoing AI cost is what gets used. The modular component system means as DIRT grows, the site grows with it. No subscription creep, no platform lock-in, no developer required for the everyday changes.",
      ],
      metrics: [
        { value: "97", label: "PageSpeed Performance" },
        { value: "100", label: "Best Practices" },
      ],
    },
    galleryImages: [
      "/showcase-images/dirt/dirt-home-hero.jpg",
      "/showcase-images/dirt/dirt-home-framework.jpg",
      "/showcase-images/dirt/dirt-signs.jpg",
      "/showcase-images/dirt/dirt-about-header.jpg",
      "/showcase-images/dirt/dirt-about-nikita.jpg",
      "/showcase-images/dirt/dirt-footer.jpg",
    ],
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
  {
    slug: "goingdark",
    clientName: "GoingDark",
    industry: "ecommerce",
    industryLabel: "E-commerce",
    services: ["web-development", "ecommerce", "seo-and-content"],
    serviceLabels: ["Web Development", "Shopify", "SEO"],
    excerpt:
      "An Australian thermal and night vision retailer for serious hunters — pairing carefully chosen gear from Pulsar, HikMicro, PARD and Nocpix with the kind of expert guidance you can't get from a big-box store.",
    featuredImage: "/showcase-images/goingdark/full-page.png",
    featuredImageScroll: true,
    clientLogo: "/clients/going-dark-logo.svg",
    clientUrl: "https://goingdark.com.au",
    template: "premium",
    metaTitle: "GoingDark Case Study | RAVENCI Solutions",
    metaDescription:
      "GoingDark inherited a sluggish BigCommerce store from previous owners. We migrated them to a clean Shopify build, fixed the SEO mess, and the trajectory turned around — purchaser rate up 38.5% in three months.",
    heroHeadline: "An Inherited Store, Rebuilt Properly",
    heroSubheadline:
      "An Australian thermal and night vision retailer inherited a sluggish BigCommerce store from previous owners — and the technical debt that came with it. We migrated them to a clean Shopify build, fixed the SEO foundations, and the numbers turned around within months.",

    year: 2025,
    techStack: ["Shopify", "Liquid", "JavaScript"],
    collaborators: [
      { role: "Design & Development", name: "RAVENCI Solutions" },
    ],

    problem: {
      heading: "The Challenge",
      paragraphs: [
        "Jo's GoingDark inherited its BigCommerce store from the previous owners — along with years of technical debt that came with it. Multiple developers had each done their own thing over time. The result was the classic mess: clashing implementations, doubled-up work, gaps where there should have been care. Hundreds of links went to 404 pages. Images had no alt text. The blog hadn't been updated in months.",
        "GoingDark came to us via a few Facebook recommendations, originally for minor fixes. As we started working through the list, the bigger picture came into focus — the SEO foundations were full of loopholes the previous teams hadn't seen or hadn't fixed. The conversation with Jo shifted from \"fix the small stuff\" to \"maybe it's time to rebuild properly\".",
      ],
      image: "/showcase-images/goingdark/goingdark-old-site.png",
      imageLabel: "Old Site",
    },
    approach: {
      heading: "Our Approach",
      paragraphs: [
        "After a long phone call with Jo about the pros and cons, we decided to migrate from BigCommerce to Shopify. BigCommerce has its own strengths — but for the way Jo runs the store day to day, Shopify's user-friendliness was going to make their life easier. Rebuild rather than patch.",
        "We chose a paid Shopify theme as the foundation — a deliberate decision that saved GoingDark thousands compared to a fully custom build. Then we customised it to suit how they actually sell: niche, expertise-driven, with the kind of personality a generic theme would never have on its own.",
        "Alongside the rebuild we cleaned up the SEO mess — fixed the 404s, added alt text to every product image, restructured pages so search engines could actually understand what GoingDark sells. The bigger ongoing conversation has been about positioning: helping Jo see that competing in a niche means standing out, not copying what bigger players do.",
      ],
      highlights: [
        "Migrated from cluttered inherited BigCommerce to a clean Shopify build",
        "Paid theme customised for GoingDark's expert voice — saved thousands vs full custom",
        "Hundreds of 404s fixed, missing alt text added, content restructured for search",
        "Logo refreshed where the inherited files were low-res and rough",
        "Ongoing strategic input — pushing for differentiation, not imitation",
      ],
      image: "/showcase-images/goingdark/goingdark-shopify-dashboard.png",
    },
    features: [
      {
        title: "A Homepage That Leads With Expertise, Not the Sale",
        description:
          "Most thermal and night vision sites push product first and trust second. GoingDark's homepage flips that — making the curated, expert-led approach visible before the catalogue. Visitors get a sense of why they should buy here, not just what's for sale.",
        image: "/showcase-images/goingdark/goingdark-home-hero.png",
      },
      {
        title: "Brand-Led Browsing for Buyers Who Know What They Want",
        description:
          "Hunters often shop by brand — they trust Pulsar, they're loyal to HikMicro, they've been told PARD is the right call. The brands section surfaces brand-led navigation right on the home page, so buyers can jump straight to the gear they're after instead of scrolling through a generic catalogue.",
        image: "/showcase-images/goingdark/goingdark-brand-pages.mp4",
      },
      {
        title: "Product Pages Built for Serious Comparison",
        description:
          "Hunters spending $4,000 on a thermal scope want to weigh options, not just look at one. The product views are built around comparison — specs, prices and features visible side by side, instead of buried in tabs across multiple pages.",
        image: "/showcase-images/goingdark/goingdark-product-compare.png",
      },
    ],
    results: {
      heading: "The Results",
      paragraphs: [
        "GoingDark relaunched on Shopify on 27 January 2025. By April — three months in — the trajectory had clearly turned around. Purchaser rate grew 38.5%. Organic search traffic grew 12.5%. Average session duration jumped 57% — visitors are spending dramatically more time on the site than they were before.",
        "The harder shift has been ongoing: pushing back gently when Jo's tempted to copy what bigger competitors are doing. In a niche category like night vision, the brand that stands out wins. We're still working with GoingDark monthly on that, alongside the SEO foundation we rebuilt during migration.",
      ],
      metrics: [
        { value: "+38.5%", label: "Purchaser Rate" },
        { value: "+12.5%", label: "Organic Search" },
        { value: "+57%", label: "Session Duration" },
      ],
    },
    galleryImages: [
      "/showcase-images/goingdark/goingdark-home-brands.png",
      "/showcase-images/goingdark/goingdark-about-hero.png",
      "/showcase-images/goingdark/goingdark-about-what-we-stand-for.png",
    ],
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
      image: "/showcase-images/peninsula-homes/peninsula-homes-old-site.jpg",
      imageLabel: "Old Site",
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
      image: "/showcase-images/peninsula-homes/peninsula-homes-pagespeed.jpg",
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
      "/showcase-images/peninsula-homes/peninsula-homes-home-hero.jpg",
      "/showcase-images/peninsula-homes/peninsula-homes-home-about.jpg",
      "/showcase-images/peninsula-homes/peninsula-homes-home-more-about-us.jpg",
      "/showcase-images/peninsula-homes/peninsula-homes-home-recent-projects.jpg",
      "/showcase-images/peninsula-homes/peninsula-homes-menu.jpg",
      "/showcase-images/peninsula-homes/peninsula-homes-info-pack.jpg",
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
      "Brand Identity",
      "Print & Stationery",
      "Vehicle & Window Signage",
      "Web Development",
      "Web Maintenance",
    ],
    excerpt:
      "Brisbane security specialists installing alarms, CCTV, access control and intercoms for homes and businesses from Hervey Bay down to the Gold Coast. Adam and Jason built Covenant from a list of trusted contacts and a reputation for getting it right — and were booked a month or two in advance within their first year of trading.",
    featuredImage: "/showcase-images/covenant-security-solutions/full-page-alternative.png",
    featuredImageScroll: true,
    clientLogo: "/clients/covenant-security-solutions-logo.svg",
    clientUrl: "https://covenantsecurity.com.au",
    template: "premium",
    metaTitle: "Covenant Security Solutions Case Study | RAVENCI Solutions",
    metaDescription:
      "Brand, print, signage and website for a new Brisbane security company — delivered in four weeks. Booked a month or two ahead inside their first year of trading.",
    heroHeadline: "Building Trust Online for a Security Industry Leader",
    heroSubheadline:
      "Adam and Jason were starting fresh — no logo, no website, no print, no signage, no time. We delivered the full identity, print run, vehicle stickers, window signage and a custom WordPress site inside four weeks so they could start trading immediately. Within their first year they were booked one to two months in advance.",

    year: 2024,
    timeline: "4 weeks",
    techStack: ["WordPress", "JavaScript", "PHP"],
    collaborators: [
      { role: "Brand, Print, Signage & Web", name: "RAVENCI Solutions" },
    ],

    problem: {
      heading: "Starting from zero, with people already calling",
      paragraphs: [
        "Adam and Jason came to me through church when they were standing up Covenant from scratch. They had a name, a vague idea that they wanted gold somewhere in the brand, a list of past clients who knew and trusted them, and a problem: those past clients had already had their cameras installed. They might call again for an upgrade, a repair or a new property, but to keep a fresh diary full, Covenant had to look like a real, established company from day one.",
        "They needed everything — logo, brand, business cards, vehicle stickers, window stickers, a website that ranked, print collateral — and they needed it fast. Every week without a working presence was a week of warm leads going cold or going to a competitor with a slicker shopfront.",
      ],
    },
    approach: {
      heading: "Branding, print, signage, website — delivered in four weeks",
      paragraphs: [
        "We started with the brand. They wanted gold, but there are a hundred ways gold can go wrong in security — gaudy, costume-jewellery, cheap. We landed on a confident deep gold against charcoal, with strong typography that signals competence first and warmth second. The same language carried through every customer touchpoint: business cards, letterheads, vehicle decals, the window stickers we'd later install at every job, and the website itself.",
        "The website is custom WordPress with a dedicated page for each thing they actually do — alarms, CCTV, access control, intercoms — written in language a homeowner or property manager can scan in thirty seconds. Trust signals up front: real photography, real names, accreditations, a real Brisbane phone number that goes to Adam.",
        "Print and signage went in parallel with development. When the printers quoted five business days on the business cards and vehicle stickers, I drove out and picked them up myself the next day. Everything was on the road and on the wall by the four-week mark.",
      ],
      highlights: [
        "Brand identity — logo, colour, typography",
        "Custom WordPress site, per-service pages",
        "Business cards and stationery",
        "Vehicle decals + per-job window stickers",
        "Welcome packages with system-use guides",
        "Ongoing maintenance and updates",
      ],
      images: [
        "/showcase-images/covenant-security-solutions/covenant-security-solutions-moodboard.jpg",
        "/showcase-images/covenant-security-solutions/covenant-security-solutions-business-cards.jpg",
        "coming-soon", // Stationery — letterhead / invoice / envelope shot
      ],
    },
    features: [
      {
        title: "A brand that earns the door",
        description:
          "Security is sold on trust, and trust starts with how a company looks before anyone has spoken to you. We built the identity around credibility — confident gold against charcoal, strong typographic hierarchy, photography of the actual work and not stock. The same language carries across every touchpoint: van, jobsite window sticker, business card, website, welcome pack.",
        images: [
          "coming-soon", // Vehicle decals — van with Covenant decals
          "coming-soon", // Window sticker on a finished install
        ],
      },
      {
        title: "Real faces on every visit",
        description:
          "Security is a relationship business. The hero on every visit randomly shows either Adam or Jason — the same two faces who'll quote your job, install your system and pick up the phone when something needs attention. No stock photo, no anonymous corporate team page. The actual humans, on the front page, every time.",
        image: "/showcase-images/covenant-security-solutions/covenant-security-solutions-random-hero.mp4",
      },
      {
        title: "Service pages that match how people search",
        description:
          "Alarms, CCTV, intercoms, access control — each major service gets its own page with its own depth. A homeowner Googling 'alarm system Brisbane' lands on the alarms page; a body corporate researching intercom systems lands on something written for them. No catch-all 'services' page that forces every visitor to wade through everything.",
        imageScroll: true,
        images: [
          "/showcase-images/covenant-security-solutions/covenant-security-solutions-alarms.jpg",
          "/showcase-images/covenant-security-solutions/covenant-security-solutions-cctv.jpg",
          "/showcase-images/covenant-security-solutions/covenant-security-solutions-intercoms.jpg",
        ],
      },
      {
        title: "On-the-fly camera pricer — without dragging in an ecommerce platform",
        description:
          "Covenant needed visitors to be able to see roughly what a CCTV install would cost based on how many cameras they wanted, then send through a quote request in the same step. The off-the-shelf path would've been WooCommerce or Shopify — but Covenant doesn't sell cameras online, they install them on-site, and that path would've meant inheriting hundreds of kilobytes of cart code, payment integrations and admin overhead they don't actually need. So we built the pricer custom: pick a camera count, see the price update on the fly, send through a quote request in one click. No cart, no checkout, no plugin tax on page load.",
        image: "/showcase-images/covenant-security-solutions/covenant-security-solutions-cctv-pricer.mp4",
      },
      {
        title: "Welcome packs that finish the job",
        description:
          "Once a system goes in, the customer needs to actually use it. We designed printed welcome guides — system overview, walkthrough, who to call when something needs attention — that get handed over at install. Same brand, same finish as everything else they touch. The handover doesn't feel done until the customer feels confident.",
        images: [
          "coming-soon", // Welcome pack cover — printed pack front
          "coming-soon", // Welcome pack interior spread — open page
          "coming-soon", // Printed design guide cover or spread
        ],
      },
    ],
    results: {
      heading: "Booked out within a year — without paid ads doing the heavy lifting",
      paragraphs: [
        "Word of mouth and organic search did most of the work. The site ranked early for Brisbane-area security searches across multiple terms — Covenant came back at or near the top for 'best Brisbane security alarm companies' across multiple AI summaries and search results — and friends, family and prospective clients regularly commented on how the site looked next to the competition.",
        "There was a stretch where Covenant tried Google Ads. I'd advised against it — Ads tend to favour established sites with established conversion data, not new businesses still finding their rhythm — but their Google rep pushed for it and Covenant ran a campaign that spent a lot for very little return. The honest read is that the rep should've asked the right questions first: what's the budget, what's the business situation, what's the goal, what stage of the business are we in? A more experienced rep would've looked at a brand-new company and given appropriate advice. Instead, Covenant paid for the lesson.",
        "They shut the campaign off and, on a friend's recommendation that I encouraged, switched to Facebook Ads where I designed the creative — that's where the real return came from. Combined with Adam's account management, Jason's install work and the steady flow of word-of-mouth referrals, they were booked a month or two in advance within their first year of trading.",
        "Two years in, they're still booked deep. Council enquiries are starting to come in. Hervey Bay and Gold Coast jobs sit alongside Brisbane work. The brand and site we built in four weeks is still doing the job.",
      ],
      metrics: [
        { value: "4 wks", label: "Brand to launch" },
        { value: "1-2 mo", label: "Lead time, year one" },
      ],
    },
    galleryImages: [
      "/showcase-images/covenant-security-solutions/covenant-security-solutions-services-intercoms.jpg",
      "/showcase-images/covenant-security-solutions/covenant-security-solutions-smart-intercoms-block.jpg",
      "/showcase-images/covenant-security-solutions/covenant-security-solutions-about-family.jpg",
      "/showcase-images/covenant-security-solutions/covenant-security-solutions-contact-page.jpg",
      "/showcase-images/covenant-security-solutions/covenant-security-solutions-quote.jpg",
      "/showcase-images/covenant-security-solutions/covenant-security-solutions-newsletter-and-footer.jpg",
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
      "Australian workplace culture consultancy preventing sexual harassment and transforming how organisations operate. Skye Charry leads the practice — background in law, gender equity and 'boots on the ground' leadership capability — running bespoke workshops for organisations of every size, in-person or online, anywhere in the country.",
    featuredImage: "/showcase-images/sac-consulting/full-page.jpg",
    featuredImageScroll: true,
    clientLogo: "/clients/sac-consulting-logo.svg",
    clientUrl: "https://sacconsulting.com.au",
    template: "premium",
    metaTitle: "SAC Consulting Case Study | RAVENCI Solutions",
    metaDescription:
      "WordPress + Divi build for Skye Charry's national workplace culture practice — premium, podcast-led, built in one month with The Design Order on brand and design.",
    heroHeadline: "A platform built to travel with Skye",
    heroSubheadline:
      "Skye Charry runs SAC Consulting — workplace culture, sexual harassment prevention, gender equity. She's on the road most weeks, running tailored workshops for organisations across Australia. We built her the WordPress platform that carries the work: premium, podcast-led, and shipped in one month, in collaboration with The Design Order who handled the brand and design.",

    year: 2023,
    timeline: "1 month",
    techStack: ["WordPress", "Divi Builder", "Owl Carousel", "JavaScript", "PHP"],
    collaborators: [
      { role: "Brand & Design", name: "The Design Order" },
      { role: "Development", name: "RAVENCI Solutions" },
    ],

    problem: {
      heading: "The website needed to keep up with the work",
      paragraphs: [
        "Skye Charry's work is hands-on. She runs tailored workshops for organisations across Australia — from one-off sessions to multi-day programmes, in-person or online — preventing workplace sexual harassment, building healthier cultures, and translating law and policy into something a workforce can actually act on. Her old site, sitting on a previous domain from her solo practice days, wasn't carrying that work anymore.",
        "The rebrand to SAC Consulting was the opportunity to put a website in place that finally matched what she does on the ground: premium, polished, national in feel, and with the podcast pushed to the front so the asset she invests so much energy into actually drives reach.",
        "Zoe at The Design Order brought me in for the build. She'd designed the brand and the site; my job was to translate the design into something interactive, intuitive and fast — without compromising any of the premium feel — and to retire the old domain cleanly the day SAC Consulting went live.",
      ],
      image: "/showcase-images/sac-consulting/sac-consulting-old-site.jpg",
      imageLabel: "Old Site",
    },
    approach: {
      heading: "Built in a month, owned by Skye after that",
      paragraphs: [
        "We built on WordPress with Divi Builder. Divi gave Skye the room to keep updating content herself once the site was live — workshops change, podcast episodes ship every few weeks, blog posts go up — without coming back to me for every tweak. Custom JavaScript handled the bits Divi wouldn't natively, and PHP filled in the rest.",
        "The site went out the door at the one-month mark. SAC Consulting launched as a single cohesive presence: workshops, podcast, contact and bookings all under the new brand, all on one domain.",
      ],
      highlights: [
        "WordPress + Divi Builder for ongoing content control",
        "Owl Carousel + grid hybrid for responsive feature blocks",
        "Skye's podcast given prominence throughout",
        "One-month build to launch",
      ],
    },
    features: [
      {
        title: "Skye's podcast, front and centre",
        description:
          "On the old solo site the podcast was a quiet sidebar. On SAC Consulting it leads. Episodes are highlighted on the homepage, the podcast page is purpose-built for audio discovery, and listening is one click from anywhere on the site. For a consultant whose authority is built on speaking and writing, the podcast is the lead magnet — and it deserved the architecture to show it.",
        image: "/showcase-images/Client - SAC Consulting - Podcast.png",
      },
      {
        title: "Responsive design and development that actually feels right at every size",
        description:
          "The brief was a premium experience across every device — not just \"works on mobile\". That meant going beyond what Divi handles natively: bespoke breakpoints for the brand layouts, custom JavaScript to switch feature blocks between a desktop grid and a mobile-friendly Owl Carousel without a flash or layout jump, and an auto-scrolling reviews carousel that behaves the same way on a phone as it does on a 27\" screen. A lot of the work sits underneath what the visitor sees — but it's the part that keeps the design feeling intentional at every size.",
        images: [
          "/showcase-images/sac-consulting/sac-consulting-responsive-design.jpg",
          "/showcase-images/sac-consulting/sac-consulting-brands.jpg",
          "/showcase-images/sac-consulting/sac-consulting-reviews.mp4",
        ],
      },
    ],
    results: {
      heading: "A platform that matches how Skye actually works",
      paragraphs: [
        "Skye is on the road most weeks. The podcast keeps shipping. The workshops keep evolving. The site holds all of it together — and reads the same whether someone lands on it in Perth, Hobart or right next door in Brisbane.",
        "It's a much smoother and more modern presence than what came before. It looks the part for the service Skye delivers to organisations across the country, and it gives the podcast — her biggest authority lever — the prominence it needed to keep building reach.",
      ],
    },
    galleryImages: [
      "/showcase-images/Client - SAC Consulting.png",
      "/showcase-images/sac-consulting/sac-consulting-past-projects.jpg",
      "/showcase-images/sac-consulting/sac-consulting-newsletter-sign-up.jpg",
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
      "Solo copywriter writing exclusively for architects — and as far as I'm concerned, no one's better at what she does. Engaging, creative, down-to-earth writing that gets read end-to-end before it gets put down. Architects who want to sound human (and win the projects they actually want) hire Nikita.",
    featuredImage: "/showcase-images/nikita-morell/full-page.jpg",
    featuredImageScroll: true,
    clientLogo: "/clients/nikita-morell-logo.svg",
    clientUrl: "https://nikitamorell.com",
    template: "premium",
    metaTitle: "Nikita Morell Case Study | RAVENCI Solutions",
    metaDescription:
      "Pixel-perfect WordPress build for Nikita Morell — copywriter exclusively for architects. Four-week turnaround, identical to The Design Order's design, and the build that started a long-term partnership with TDO.",
    heroHeadline: "Built exactly as designed, in four weeks",
    heroSubheadline:
      "Nikita Morell writes copy exclusively for architects. She'd had The Design Order rebrand her site; what she needed was a developer who'd build it to spec, on budget, on time. Four weeks later it went live identical to the design — and her designer rang me asking to work on the next project together.",

    year: 2023,
    timeline: "4 weeks",
    techStack: ["WordPress", "Divi Builder", "JavaScript", "PHP", "LocalStorage"],
    collaborators: [
      { role: "Brand & Design", name: "The Design Order" },
      { role: "Development", name: "RAVENCI Solutions" },
    ],

    problem: {
      heading: "A copywriter who needed her website to match her writing",
      paragraphs: [
        "Nikita Morell writes copy exclusively for architects. Just architects. And as far as copywriting goes, I haven't met anyone better — I can't open one of her email newsletters and put it down before I'm finished. Engaging, creative, fun, down-to-earth. The kind of writing that makes architects pick up the phone.",
        "She'd had her brand and site rebuilt by The Design Order in Brisbane and was searching online for a developer to bring it to life. I was recommended to her. We talked. I quoted — at the high end of what she'd budgeted for. She thought about it and came back with: \"I will bite the bullet.\"",
        "Four weeks. Build the new site faithfully to the design. Make sure she could keep editing it herself afterwards.",
      ],
      image: "/showcase-images/nikita-morell/old-site.jpg",
      imageLabel: "Old Site",
    },
    approach: {
      heading: "Pixel-perfect to the design — no \"similar to\"",
      paragraphs: [
        "WordPress with Divi Builder. Divi gave Nikita the room to keep updating content herself once the site was live — she ships a lot of writing, and she shouldn't have to come back to me every time a new article goes up. Custom JavaScript and PHP handled anything Divi wouldn't natively do.",
        "The build had to translate The Design Order's design exactly. After launch, Zoe from TDO rang me. She said developers always tell her they'll build a design \"similar\" — and there are always differences. This time the build matched. She asked if we could work together on more projects. We've now done five-plus, SAC Consulting included.",
        "Four weeks from start to live. On budget. On spec.",
      ],
      highlights: [
        "WordPress + Divi Builder, owner-editable post-launch",
        "Pixel-perfect translation of The Design Order's design",
        "Custom JavaScript + PHP for the bits Divi wouldn't do",
        "Custom \"Watch This\" video gate (LocalStorage with expiry)",
        "Four-week build to launch",
      ],
    },
    features: [
      {
        title: "Pixel-perfect to the design",
        description:
          "Nikita and TDO needed to know the live site would behave the way the design said it would, no surprises after launch. Spacing, typography, motion, every detail — translated from the design comp into the build without drift. Four weeks of careful translation, and the site matched the spec end to end.",
        image: "/showcase-images/nikita-morell/nikita-morell-only-high-paid.jpg",
      },
      {
        title: "\"Watch This\" — videos gated by newsletter, not by login",
        description:
          "Nikita has a library of free videos she shares — but only with people who've subscribed to her newsletter. The brief: prompt visitors to subscribe before watching, then leave them alone afterwards. The off-the-shelf plugins kept re-prompting on every page load, even seconds after subscribing. We stored the unlock in LocalStorage with an expiry instead — subscribe once, the prompt doesn't come back until the expiry runs down. Free access for anyone on the list, no login wall, no repeat re-prompts.",
        image: "/showcase-images/nikita-morell/nikita-morell-watch-this.jpg",
      },
      {
        title: "Owned by Nikita, edited by Nikita",
        description:
          "Nikita is a writer. She ships words constantly — articles, newsletter previews, course updates, case work. The site had to let her run that without phoning me every time. Divi gives her the visual editor; the structure underneath stays consistent so what she edits doesn't accidentally break what she doesn't. She still edits her own content, years later.",
        image: "/showcase-images/nikita-morell/nikita-morell-copywriting.jpg",
      },
      {
        title: "A second site for her client library — Next.js, Notion, and ActiveCampaign",
        description:
          "Nikita has a deep library of resources she'd built up in Notion over the years and wanted to share with her paying clients — but only with her paying clients. The off-the-shelf options either cost too much or wanted her to migrate her content out of Notion and into a separate platform. So we built her a side site, lightweight by design. Next.js reads her Notion library directly via the API and surfaces it in a clean viewer — no migration, no double-handling, she keeps editing in Notion exactly like she always has. Auth runs through ActiveCampaign: a client signs up, ActiveCampaign subscribes them and stores a generated password in a custom field, encrypted but lightweight. No separate user database, no auth-as-a-service subscription, no plugin tax. Live for over a year. Still humming.",
        image: "/showcase-images/nikita-morell/nikita-morell-library-login.jpg",
      },
    ],
    results: {
      heading: "Four weeks, on spec, on budget — and a designer asking to work together again",
      paragraphs: [
        "The site went live in the four weeks Nikita gave me, faithful to the design, within the budget she'd \"bitten the bullet\" on. She was thrilled. We've kept working together since — a custom client-resource library has been live for over a year on a separate Next.js + Notion + ActiveCampaign stack, and we have a new project together right now with DIRT.",
        "The bigger story for me was The Design Order. Zoe's call after launch — \"I want to work with you on more projects\" — was the start of a long-term partnership. Five-plus projects together since, SAC Consulting among them.",
        "Three years on, the site is still humming. Best Practices and SEO sit at 100 in PageSpeed; First Contentful Paint at 0.8s, Largest Contentful Paint at 1.0s on the dot — fast for a WordPress + Divi site. Performance sits at 85, not 90+ — and that's the honest cost of the platform choice. Divi gives Nikita the visual editor she needs to keep updating the site herself, but it adds weight that no amount of optimisation will fully remove. For a writer whose business depends on shipping content constantly, the trade is the right one.",
        "These days I'm also looking after Nikita's site from an AI-visibility angle — making sure her work shows up in the AI models when architects ask them about copywriters. The site that was built to be discoverable by Google is now being tuned to be discoverable by ChatGPT, Claude, and the rest.",
      ],
      metrics: [
        { value: "100", label: "PageSpeed SEO" },
        { value: "100", label: "Best Practices" },
        { value: "1.0s", label: "Largest Contentful Paint" },
      ],
    },
    galleryImages: [
      "/showcase-images/nikita-morell/nikita-morell-services-block.jpg",
      "/showcase-images/nikita-morell/nikita-morell-word-shop.jpg",
      "/showcase-images/nikita-morell/nikita-morell-site-smart.jpg",
      "/showcase-images/nikita-morell/nikita-morell-reviews.jpg",
      "/showcase-images/nikita-morell/nikita-morell-footer.jpg",
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
      "Personalised laser-cut event decor and custom gifts — engraved wedding signage, cake toppers, tags, keepsakes — designed and made in Brisbane by Micha Haddad. She ships across Australia and to the US and Canada via Etsy, and a lot of her customers won't trust their custom work to anyone else.",
    featuredImage: "/showcase-images/Client - Cadeaurable.png",
    clientLogo: "/clients/cadeaurable-logo.svg",
    clientUrl: "https://cadeaurable.com.au",
    template: "premium",
    metaTitle: "Cadeaurable Case Study | RAVENCI Solutions",
    metaDescription:
      "Two weeks from nothing to a live BigCommerce store for Cadeaurable — Micha Haddad's solo Brisbane laser-cutting business. Personalisation built in from day one, no plugin stack required.",
    heroHeadline: "Two weeks from nothing to a live store — with personalisation built in",
    heroSubheadline:
      "Cadeaurable is Micha Haddad's solo Brisbane workshop — laser-cut wedding signage, cake toppers, tags, gifts. Every order is custom: choice of material, colour, design and engraving text. We picked BigCommerce because every product needed that level of personalisation out of the gate, and got from nothing to a live store in two weeks.",

    year: 2022,
    timeline: "2 weeks",
    techStack: ["BigCommerce", "Custom Theme", "JavaScript", "PHP", "eCommerce"],
    collaborators: [
      { role: "Brand, Design & Development", name: "RAVENCI Solutions" },
    ],

    problem: {
      heading: "Brand new business, two weeks, every product needs configuring",
      paragraphs: [
        "Cadeaurable is run by Micha Haddad — solo, from a Brisbane workshop, designing and making personalised laser-cut decor and gifts. Wedding signage, cake toppers, name tags, keepsakes — engraved and cut to whatever the customer specifies. Material (wood or acrylic), colour if acrylic, design variant, engraving text. Every single order is custom.",
        "When Micha decided to launch, the timeline was tight: two weeks from nothing to a live store. (Full disclosure — Micha is also my wife. Cadeaurable was the project where I got to be both husband and developer.) The platform decision had to be right the first time. Deep product personalisation wasn't a nice-to-have we could bolt on later; it was the minimum viable product.",
      ],
    },
    approach: {
      heading: "BigCommerce, brand and storefront — in two weeks",
      paragraphs: [
        "Shopify is the obvious default for a new ecommerce business — and for most stores it's a fine choice. But Shopify's product personalisation is shallow out of the box: anything beyond a colour-and-size variant means buying a paid app, sometimes several. For a store where every product has wood-vs-acrylic, a colour selection, a design variant and engraving text, that quickly becomes three or four monthly subscriptions stacked on top of the platform fee — each with its own admin, its own performance hit on every product page.",
        "BigCommerce includes deep variants, customer-input fields and custom options natively. We could build the store Micha actually needed without inheriting a subscription tower on top of it.",
        "We started on a stock BigCommerce theme and quickly hit its limits — layout decisions baked into the theme that didn't suit the personalisation flow, performance overhead from features Cadeaurable didn't use. With the budget tight, the cleaner path was to build a custom theme from scratch instead of fighting the stock one. That's what shipped: a bespoke theme on BigCommerce, sized to exactly what the store needed and nothing it didn't.",
        "Brand identity, stationery, packaging direction and the storefront all went out the door at the two-week mark. Australia-only at launch — that was the immediate market and Micha wanted to nail it before opening up. As her Etsy presence grew and US and Canadian orders started coming through, we extended shipping internationally without rebuilding anything underneath.",
      ],
      highlights: [
        "BigCommerce — deep product personalisation built in, no app stack",
        "Custom theme, built from scratch instead of fighting a stock one",
        "Brand identity, stationery and packaging direction",
        "Two-week build from nothing to live store",
        "Australia-only at launch; US + Canada added with Etsy expansion",
        "WhatsApp direct to Micha — not a chat widget, not an AI",
      ],
      image: "/showcase-images/cadeaurable/cadeaurable-custom-theme.jpg",
    },
    features: [
      {
        title: "BigCommerce instead of Shopify — because every product needs configuring",
        description:
          "Shopify is the default suggestion for a new store, and for most stores it suits. But its product personalisation is shallow out of the box — anything past a basic colour-and-size variant requires a paid app on top of the platform fee. Personalisation-heavy stores often end up running three or four of them, each with its own subscription and its own performance hit on every product page. BigCommerce includes deep variants, customer-input fields and custom options natively. For Cadeaurable — where every order has wood-vs-acrylic, colour, design variant and engraving text — that meant launching with the right configuration without inheriting a stack of monthly subscriptions before the first sale.",
        image: "/showcase-images/cadeaurable/cadeaurable-customisations.jpg",
      },
      {
        title: "A product page that asks the right questions in the right order",
        description:
          "On a Cadeaurable product page, the customer picks the piece, then walks through the choices that change what actually gets made: material, colour if relevant, design variant, engraving text. Each choice surfaces as the previous one's been made — no overwhelming wall of options, no requirement to fill out fields you don't care about. Built natively on BigCommerce's product variant and custom-field system, no extra plugin.",
        image: "/showcase-images/cadeaurable/cadeaurable-product-page.jpg",
      },
      {
        title: "WhatsApp direct to Micha — not a chat widget, not an AI",
        description:
          "Every Cadeaurable order is custom — the customer wants their venue spelled correctly, the right colour to match a flower arrangement, the right material to suit the table setting. We wired the storefront's chat through WhatsApp directly to Micha rather than running a generic web chat widget or an AI agent. Slower in the abstract, but the conversation lives on the customer's phone after the order, the answers come from the person actually making the product, and customers regularly note the response time in their reviews.",
        image: "/showcase-images/cadeaurable/cadeaurable-whatsapp.jpg",
      },
    ],
    results: {
      heading: "A store that's still running on its original platform — and growing",
      paragraphs: [
        "Cadeaurable launched on schedule: two weeks from brief to live store. Australia-only at first; once Micha's Etsy presence grew and international orders started coming, we extended shipping to the US and Canada without touching the underlying platform.",
        "The reviews tell the story Micha cares about most. Customers note how quickly she responds in chat, how helpful she is when they're working out what'll suit their event, how much they trust the work. Many of them come back for the next event, the next gift, the next custom piece — the kind of repeat business a custom maker actually depends on.",
        "The platform choice has paid for itself in what hasn't been spent: no app subscriptions stacked on top of the BigCommerce fee, no plugin tax slowing down product pages, no third-party tools to maintain or migrate off when they get too expensive or get acquired.",
      ],
    },
    galleryImages: [
      "/showcase-images/Client - Cadeaurable.png",
      "/showcase-images/cadeaurable/cadeaurable-product-gallery.jpg",
      "coming-soon", // Category page
      "coming-soon", // Checkout
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
