/**
 * Brisbane Website Audit data
 * Originally inlined in src/app/brisbane-website-audit/page.tsx
 * Extracted so the printable report page can render the same data.
 */

export interface AuditStat {
  stat: string;
  label: string;
  severity: "critical" | "warning";
  /** Short RAVENCI counterpoint shown below the stat — e.g. "RAVENCI: 100% have SSL". */
  ravenciCounter?: string;
  /** Optional plain-English explanation of how RAVENCI achieves the counter. */
  ravenciCounterNote?: string;
}

export interface AuditCategory {
  category: string;
  score: string;
  detail: string;
  recommendations: string[];
  /** Average score from a sample of RAVENCI case studies, where comparable. */
  ravenciAverage?: string;
  /** How many RAVENCI sites that average is calculated from. */
  ravenciSampleSize?: number;
  /** Plain-English source line for the sample (which case studies). */
  ravenciSampleNote?: string;
}

export interface AuditIndustry {
  industry: string;
  count: number;
  avgScore: number;
}

export interface AuditFAQItem {
  title: string;
  summary: string;
  content: string;
}

export const AUDIT_META = {
  totalSitesAudited: 50,
  conductedDate: "January – February 2026",
  publishedDate: "2026-03-04",
  industries: 7,
};

export const auditStats: AuditStat[] = [
  {
    stat: "72%",
    label: "Scored below 50 on Google PageSpeed (mobile)",
    severity: "critical",
  },
  {
    stat: "64%",
    label: "Had no structured data (schema markup) at all",
    severity: "critical",
  },
  {
    stat: "58%",
    label: "Loaded slower than 4 seconds on mobile",
    severity: "critical",
  },
  {
    stat: "46%",
    label: "Had missing or duplicate meta descriptions",
    severity: "warning",
  },
  {
    stat: "42%",
    label: "Had no SSL certificate or mixed content warnings",
    severity: "warning",
    ravenciCounter: "RAVENCI: 100% have SSL",
    ravenciCounterNote:
      "We host on Cloudways and Coolify — SSL certificates are provisioned and renewed automatically on every site we build.",
  },
  {
    stat: "38%",
    label: "Failed basic accessibility checks (contrast, alt text)",
    severity: "warning",
  },
  {
    stat: "34%",
    label: "Used outdated CMS versions with known vulnerabilities",
    severity: "critical",
  },
  {
    stat: "28%",
    label: "Had no mobile-friendly navigation",
    severity: "warning",
  },
  {
    stat: "22%",
    label: "Had broken links or 404 errors on key pages",
    severity: "warning",
  },
  {
    stat: "18%",
    label: "Had no Google Analytics or any tracking installed",
    severity: "warning",
    ravenciCounter: "RAVENCI: 100% have analytics",
    ravenciCounterNote:
      "Every site we ship has Google Analytics pre-configured — clients walk away with measurement on day one, not as an afterthought.",
  },
];

export const categoryBreakdown: AuditCategory[] = [
  {
    category: "Performance",
    score: "38/100",
    detail:
      "Average mobile PageSpeed score across all 50 sites. Only 14% scored 80 or above. The biggest culprits: unoptimised images, render-blocking scripts, and bloated themes and plugin-heavy builds.",
    recommendations: [
      "Compress and lazy-load images",
      "Remove unused CSS and JavaScript",
      "Use a CDN for static assets",
      "Switch to a modern framework or optimise your theme",
    ],
    ravenciAverage: "87/100",
    ravenciSampleSize: 5,
    ravenciSampleNote:
      "Average across Peninsula Homes, DIRT, GoingDark, Cadeaurable and Nikita Morell.",
  },
  {
    category: "SEO",
    score: "42/100",
    detail:
      "Nearly half had missing meta descriptions, and 64% had zero structured data. Only 12% had proper schema markup for their business type. Most lacked Open Graph tags for social sharing.",
    recommendations: [
      "Add unique meta titles and descriptions to every page",
      "Implement LocalBusiness or ProfessionalService schema",
      "Set up XML sitemap and submit to Google Search Console",
      "Add Open Graph and Twitter Card meta tags",
    ],
    ravenciAverage: "92/100",
    ravenciSampleSize: 3,
    ravenciSampleNote:
      "Average across DIRT, GoingDark and Nikita Morell.",
  },
  {
    category: "Mobile Usability",
    score: "51/100",
    detail:
      "28% had tap targets too small for mobile use. Many had horizontal scrolling issues, text too small to read, or hamburger menus that didn't work properly. Only 36% passed Google's mobile-friendly test with no issues.",
    recommendations: [
      "Design mobile-first, not desktop-first",
      "Ensure tap targets are at least 48px",
      "Test on real devices, not just browser resize",
      "Use responsive images with proper srcset/sizes",
    ],
  },
  {
    category: "Security",
    score: "55/100",
    detail:
      "42% had SSL issues ranging from expired certificates to mixed content. 34% ran outdated CMS versions with known security patches available. Only 20% had security headers like Content-Security-Policy.",
    recommendations: [
      "Install and maintain a valid SSL certificate",
      "Keep CMS, themes, and plugins up to date",
      "Add security headers (CSP, X-Frame-Options, HSTS)",
      "Use strong passwords and two-factor authentication",
    ],
    ravenciAverage: "100/100",
    ravenciSampleNote:
      "All RAVENCI sites are hosted on Cloudways or Coolify with SSL provisioned and renewed automatically, and we keep CMS, plugins and dependencies up to date as part of our active maintenance.",
  },
  {
    category: "Accessibility",
    score: "44/100",
    detail:
      "38% failed basic colour contrast requirements. 52% had images without alt text. Only 8% had proper ARIA labels on interactive elements. None of the 50 sites had an accessibility statement.",
    recommendations: [
      "Ensure 4.5:1 colour contrast ratio for text",
      "Add descriptive alt text to all images",
      "Use semantic HTML and ARIA labels",
      "Add an accessibility statement page",
    ],
    ravenciAverage: "87/100",
    ravenciSampleSize: 3,
    ravenciSampleNote:
      "Average across DIRT, GoingDark and Nikita Morell.",
  },
];

export const industryBreakdown: AuditIndustry[] = [
  { industry: "Trades & Construction", count: 12, avgScore: 31 },
  { industry: "Healthcare & Medical", count: 8, avgScore: 41 },
  { industry: "Professional Services", count: 10, avgScore: 44 },
  { industry: "Hospitality & Food", count: 7, avgScore: 36 },
  { industry: "Retail & E-commerce", count: 6, avgScore: 39 },
  { industry: "Real Estate", count: 4, avgScore: 47 },
  { industry: "Education & Training", count: 3, avgScore: 52 },
];

export const auditFaqItems: AuditFAQItem[] = [
  {
    title: "How were these websites selected?",
    summary:
      "We randomly sampled 50 Brisbane-based businesses across 7 industries using Google Maps and local directories. Selection was weighted by industry representation in the Brisbane market.",
    content:
      "We randomly sampled 50 Brisbane-based businesses across 7 industries using Google Maps and local business directories. The sample was weighted to reflect the approximate industry distribution of small-to-medium businesses in the Brisbane metropolitan area. All audits were conducted between January and February 2026.",
  },
  {
    title: "What tools were used for the audit?",
    summary:
      "Google PageSpeed Insights, Google Lighthouse, Screaming Frog SEO Spider, WAVE accessibility checker, and manual testing on real mobile devices were used for comprehensive analysis.",
    content:
      "We used Google PageSpeed Insights and Lighthouse for performance scoring, Screaming Frog SEO Spider for technical SEO analysis, WAVE for accessibility checking, and manual testing on real iOS and Android devices for mobile usability. Security checks were done using SSL Labs and Observatory by Mozilla.",
  },
  {
    title: "Is my website included in this audit?",
    summary:
      "All audited businesses remain anonymous. This research focuses on aggregate trends and common issues across Brisbane business websites, not individual site reviews.",
    content:
      "All businesses in the audit remain anonymous. We do not publish individual results. This research focuses on aggregate trends and common issues across Brisbane business websites, not naming and shaming specific businesses. If you want to know how your site performs, we offer free visibility checks.",
  },
  {
    title: "How can I check my own website's performance?",
    summary:
      "Use Google PageSpeed Insights (free) for a quick score, or request a free RAVENCI Visibility Check for a comprehensive audit covering speed, SEO, mobile usability, security, and accessibility.",
    content:
      "You can run a quick check using Google PageSpeed Insights (pagespeed.web.dev) for free. For a more comprehensive audit covering speed, SEO, mobile usability, security, and accessibility, we offer a free Visibility Check — just fill out the form on our website.",
  },
];

export const keyTakeaways = [
  {
    title: "Speed is the biggest problem",
    detail:
      "72% of Brisbane business websites scored below 50 on mobile PageSpeed. Google uses Core Web Vitals as a ranking factor — slow sites are actively penalised in search results. Every second of load time costs conversions.",
  },
  {
    title: "Most sites are invisible to AI search",
    detail:
      "64% had no structured data at all. As AI-powered search (Google SGE, ChatGPT, Perplexity) grows, sites without schema markup will not be cited in AI-generated answers. This is the new SEO battleground.",
  },
  {
    title: "Security is being ignored",
    detail:
      "42% had SSL issues and 34% ran outdated CMS versions. These sites are vulnerable to hacking, data breaches, and Google warnings that drive visitors away.",
  },
  {
    title: "Accessibility is an afterthought",
    detail:
      "38% failed basic colour contrast checks. 52% had images without alt text. Zero sites had accessibility statements. This isn't just about compliance — it's about excluding potential customers.",
  },
  {
    title: "The bar is surprisingly low",
    detail:
      "If your website scores 80+ on PageSpeed, has structured data, proper meta tags, and basic accessibility, you're already ahead of the vast majority of Brisbane businesses. The opportunity is enormous.",
  },
];
