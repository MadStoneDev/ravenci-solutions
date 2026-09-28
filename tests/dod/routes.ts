// The routes the DoD sweep visits. Static pages are listed in full; the two
// templated routes (case-studies/[slug], articles/[slug]) get a representative
// instance each — the template is the thing under test, not every row.
//
// When you want the exhaustive sweep, generate the [slug] entries from the data
// files (src/data/case-studies.ts, src/content/articles) instead of this sample.

export type Route = { path: string; name: string };

export const ROUTES: Route[] = [
  // ── Priority tier: money + traffic pages ──────────────────────────────────
  { path: "/", name: "home" }, // HeroBuild + StackStory + PlatformSelector live here
  { path: "/pricing", name: "pricing" },
  { path: "/launch-your-vision", name: "launch-your-vision" },
  { path: "/quote", name: "quote" },
  { path: "/retainer-packages", name: "retainer-packages" },
  { path: "/web-development", name: "svc-web-development" },
  { path: "/ecommerce", name: "svc-ecommerce" },
  { path: "/business-design", name: "svc-business-design" },
  { path: "/seo-and-content", name: "svc-seo-and-content" },
  { path: "/web-hosting", name: "svc-web-hosting" },
  { path: "/website-maintenance", name: "svc-website-maintenance" },
  { path: "/about", name: "about" },
  { path: "/our-process", name: "our-process" },
  { path: "/case-studies", name: "case-studies-index" },
  { path: "/labs", name: "labs" },

  // ── Templated routes: one representative instance each ─────────────────────
  { path: "/case-studies/dirt", name: "tmpl-case-study" },
  { path: "/articles/10-point-website-launch-checklist", name: "tmpl-article" },

  // ── Industry template (these are top-level routes) ─────────────────────────
  { path: "/construction", name: "ind-construction" },
  { path: "/healthcare", name: "ind-healthcare" },
  { path: "/professional-services", name: "ind-professional-services" },

  // ── Secondary tier ────────────────────────────────────────────────────────
  { path: "/build-only", name: "build-only" },
  { path: "/quick-support", name: "quick-support" },
  { path: "/free-audit", name: "free-audit" },
  { path: "/brisbane-website-audit", name: "brisbane-website-audit" },
  { path: "/custom-vs-template", name: "custom-vs-template" },
  { path: "/cost-of-a-website-in-brisbane", name: "cost-of-a-website" },
];

// Both themes render for real now: dark follows prefers-color-scheme. The
// harness emulates that media feature per theme. Set DOD_THEMES=light to skip dark.
export const THEMES = (process.env.DOD_THEMES ?? "light,dark").split(",") as Array<
  "light" | "dark"
>;
