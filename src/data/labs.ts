// Labs: products Richard has built, as proof of range (README §2).
// Populated from each project's real README/package.json. Two entries
// (TheJury, JustTerms) shipped with boilerplate READMEs, so their one-liners
// are left for Richard rather than invented. Statuses are conservative
// (mostly "wip") unless a README clearly stated live/deployed.

export type LabStatus = "live" | "beta" | "wip";

export interface LabProject {
  name: string;
  /** External URL, or "" until confirmed. */
  url: string;
  oneLiner: string;
  stack: string[];
  /** One short paragraph on the interesting technical part. Not shown on the
   *  card yet; kept for a future detail view. */
  problemSolved: string;
  status: LabStatus;
  screenshot?: string;
}

export const LAB_PROJECTS: LabProject[] = [
  {
    name: "JustSent",
    url: "https://justsent.app",
    oneLiner:
      "The fastest way to move a file from one device or person to another. Send by short code or link, with no signup needed to receive.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "Cloudflare R2", "Stripe"],
    problemSolved:
      "Files and shares are decoupled: one physical R2 object backs many grants, so re-sharing a file into many rooms needs zero re-upload. Bytes never touch my servers, the client uploads straight to presigned R2 URLs. The differentiator is persistent real-time rooms with presence, per-person download receipts and a message thread.",
    status: "live",
  },
  {
    name: "QRmory",
    url: "",
    oneLiner:
      "A dynamic QR code generator for small businesses. Restyle, print and repoint your codes without reprinting, with scan analytics and hosted content like menus, vCards and link pages.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "Paddle", "Cloudflare R2"],
    problemSolved:
      "Dynamic codes can be repointed without reprinting. Single-source config files (gating, QR render, styles, industry data) keep every surface in agreement, and one shared Creator component powers both the app and the homepage.",
    status: "live",
  },
  {
    name: "Just Cases",
    url: "",
    oneLiner:
      "A case study builder for service professionals. Branded before-and-after case studies with password protection, PDF export and view analytics.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "Tiptap", "Cloudflare R2", "Stripe"],
    problemSolved:
      "Case studies use interactive before-and-after comparison sliders, served on clean per-user subdomains via wildcard DNS. Each is password-protectable with auto-generated passwords, exportable to PDF, and tracked with view analytics so the author sees when a customer opens it.",
    status: "wip",
  },
  {
    name: "Download Ledger",
    url: "https://downloadledger.ravenci.solutions",
    oneLiner:
      "A WordPress plugin that counts downloads of your media-library files exactly and server-side, where the numbers can't be faked.",
    stack: ["WordPress", "PHP", "React", "Freemius"],
    problemSolved:
      "Downloads are counted server-side with the media library as the single source of truth. Pro adds real at-rest protection: gated files are moved into a denied directory so the raw URL can't bypass the gate, plus CSV formula-injection hardening and privacy-friendly IP hashing with a daily-rotating salt.",
    status: "wip",
  },
  {
    name: "RankRiot",
    url: "",
    oneLiner:
      "An SEO site-audit tool that crawls your site, scores its technical and on-page issues, and combines that with your own Google Search Console data.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "Puppeteer", "Express"],
    problemSolved:
      "Two repos share one database: a self-hosted Express and Puppeteer crawler computes every score once at scan completion and persists it, while the frontend only ever reads. The wedge is owning the on-site audit plus the customer's first-party Search Console data, rather than rebuilding a web-scale index.",
    status: "wip",
  },
  {
    name: "RAVENCI Builder",
    url: "https://ravencibuilder.com",
    oneLiner:
      "A front-end visual page builder for WordPress. Build pages and posts with no HTML, CSS or PHP.",
    stack: ["WordPress", "Vue", "TypeScript", "PHP", "Vite"],
    problemSolved:
      "Each element is a wrapper plus sub-components, and the builder adds only the minimal markup needed to render, aiming for lighter output than other page builders. One unified options system runs across every element.",
    status: "wip",
  },
  {
    name: "JustNoted",
    url: "",
    oneLiner: "A fast markdown note-taking app.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "Milkdown"],
    problemSolved: "",
    status: "wip",
  },
  {
    name: "TheJury",
    url: "",
    oneLiner: "[PLACEHOLDER: one-line description]",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "Stripe"],
    problemSolved: "",
    status: "wip",
  },
  {
    name: "JustTerms",
    url: "",
    oneLiner: "[PLACEHOLDER: one-line description]",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "PocketBase", "Stripe"],
    problemSolved: "",
    status: "wip",
  },
];
