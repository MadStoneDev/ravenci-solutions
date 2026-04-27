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
    featuredImage: "/showcase-images/covenant-security-solutions/full-page.png",
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
        "/showcase-images/covenant-security-solutions/stationery.jpg",
      ],
    },
    features: [
      {
        title: "A brand that earns the door",
        description:
          "Security is sold on trust, and trust starts with how a company looks before anyone has spoken to you. We built the identity around credibility — confident gold against charcoal, strong typographic hierarchy, photography of the actual work and not stock. The same language carries across every touchpoint: van, jobsite window sticker, business card, website, welcome pack.",
        images: [
          "/showcase-images/covenant-security-solutions/brand-vehicle.jpg",
          "/showcase-images/covenant-security-solutions/brand-window-sticker.jpg",
        ],
      },
      {
        title: "Real faces on every visit",
        description:
          "Security is a relationship business. The hero on every visit randomly shows either Adam or Jason — the same two faces who'll quote your job, install your system and pick up the phone when something needs attention. No stock photo, no anonymous corporate team page. The actual humans, on the front page, every time.",
        image: "/showcase-images/covenant-security-solutions/random-hero.mp4",
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
          "Most builders would reach for WooCommerce or Shopify to put a pricer on a service page — and inherit hundreds of kilobytes of cart code, payment integrations and admin overhead the business doesn't actually need. We built a custom pricer for the CCTV page: pick how many cameras you want, see the price update on the fly, send through a quote request in one step. No cart, no checkout, no plugin tax slowing the page down. The right tool for the actual job.",
        image: "/showcase-images/covenant-security-solutions/cctv-pricer.mp4",
      },
      {
        title: "Welcome packs that finish the job",
        description:
          "Once a system goes in, the customer needs to actually use it. We designed printed welcome guides — system overview, walkthrough, who to call when something needs attention — that get handed over at install. Same brand, same finish as everything else they touch. The handover doesn't feel done until the customer feels confident.",
        images: [
          "/showcase-images/covenant-security-solutions/welcome-pack-cover.jpg",
          "/showcase-images/covenant-security-solutions/welcome-pack-inside.jpg",
          "/showcase-images/covenant-security-solutions/design-guide.jpg",
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
      "/showcase-images/covenant-security-solutions/website-home.png",
      "/showcase-images/covenant-security-solutions/website-services.png",
      "/showcase-images/covenant-security-solutions/website-about.png",
      "/showcase-images/covenant-security-solutions/website-contact.png",
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
