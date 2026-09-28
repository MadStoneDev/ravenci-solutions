# Case Study Template — Launch Checklist

**Route:** `/case-studies/[slug]` · **Source:** `src/app/case-studies/[slug]/page.tsx`, `src/components/case-study-layout.tsx`, `src/data/case-studies.ts` · **Purpose:** Dynamic template rendering one case study per slug across three layouts (`results-driven`, `visual-showcase`, `premium`). Content varies per entry — review the TEMPLATE, then spot-check each live instance.

Screenshots (if present): `dod-screens/desktop-1440/{light,dark}/tmpl-case-study.png`, `dod-screens/mobile-390/{light,dark}/tmpl-case-study.png` (representative instance: `/case-studies/dirt`)

Published (non-hidden) slugs to check each instance: `dirt`, `goingdark`, `peninsula-homes`, `covenant-security-solutions`, `sac-consulting`, `nikita-morell`, `cadeaurable`. Hidden (direct-URL only, must NOT be publicly listed): `nnaccountability`, `coast-remedial-solutions`.

## Content
### Template-level (verify once on the layout)
- [ ] Hero renders: breadcrumb (Case Studies / client name), industry label, `heroHeadline` (H1), `heroSubheadline`, service-label chips, and "Visit the site" button only when `clientUrl` exists
- [ ] Hero theme logic correct: dark hero for `results-driven`/`premium`, light hero for `visual-showcase`
- [ ] "The challenge" (01) + "The approach" (02) two-column section renders problem/approach headings, paragraphs, and approach highlights bullets
- [ ] "What I built" (03) feature grid renders for non-`visual-showcase` templates; hidden when `features` empty
- [ ] `results-driven`: metrics band under hero + dark results section with honest `MetricsChart` (bar length scaled to parsed numeric value, no fabricated before/after)
- [ ] `visual-showcase`: gallery grid (first 3 `galleryImages`) + optional metrics band
- [ ] Testimonial section renders only when `testimonial` exists (own dark section for `premium`, inline otherwise)
- [ ] Project details band (Client/Industry/Platform/Services); Client links out via `clientUrl` with `target="_blank" rel="noopener noreferrer"`
- [ ] Closing CTA "Tell me the problem. I'll take it from there." (matches Richard's voice standard) + "Start a project" → `/launch-your-vision` + "Next case study" cycles via `nextOf()`
- [ ] "Next case study" only cycles through non-hidden studies (`getAllCaseStudies()` filters `hidden`) — confirm a hidden study never appears as "next"
- [ ] ⚠️ Hidden studies (`nnaccountability`, `coast-remedial-solutions`) still render on direct URL but must NOT appear in the case-studies index, homepage, sitemap, or related links. Confirm they are absent from all public listings (NNAccountability is intentionally hidden per standing rule)

### Per-instance (check on every published slug)
- [ ] Hero leads with the CLIENT's business and who they serve — NOT the tech stack or "what RAVENCI built" (client-first voice rule). Spot-check `dirt` opens on the agency/its clients, not on Plasmic
- [ ] Client name spelled exactly: `DIRT` (all caps), `GoingDark` (one word), `NNAccountability`
- [ ] Every metric is a real, measured number (e.g. DIRT: 97 PageSpeed, 100 Best Practices, 1.2s LCP; GoingDark: +38.5% purchaser rate, +12.5% organic, +57% session duration) — no invented before/after, no decorative stats
- [ ] Metrics that are still pending are stated honestly (e.g. DIRT: "traffic and conversion analytics are still building") rather than padded
- [ ] Problem / approach / results narrative reads in Richard's plain first-person voice; no AI-tells, no corny self-praise ("clever", "smart", "most developers would...")
- [ ] All media loads: `.mp4/.webm` autoplay-muted-loop videos, scrolling screenshots, and `next/image` stills; no `coming-soon` placeholder images left visible in a public/featured study (⚠️ several studies contain `"coming-soon"` gallery/feature entries — confirm they don't render as broken frames)
- [ ] `clientUrl` "Visit the site" and Client link resolve to the correct live client domain
- [ ] Service-label chips match the actual work delivered
- [ ] Testimonial (where present) is genuine and attributed to a real person/role
- [ ] Meta title/description and OG/Twitter image (`featuredImage`) correct for the slug
- [ ] JSON-LD CreativeWork (`about` = client org + `clientUrl`) and BreadcrumbList emit with correct client name/URL

## Design & responsive (DoD §11)
- [ ] 390px: layout correct, no horizontal scroll
- [ ] 1440px: layout correct
- [ ] Light theme correct
- [ ] Dark theme correct — purple only as fill/mark; text is paper, never purple on charcoal
- [ ] Keyboard-navigable, focus always visible
- [ ] Reduced-motion: final state shown (auto-scroll screenshots and autoplay video respect reduced-motion)
- [ ] No purple background / gradient / hard shadow
- [ ] Images via next/image (video via `<video>` is expected for `.mp4/.webm`)
- [ ] PageSpeed ≥ 85 mobile

## Links & meta
- [ ] All internal links resolve (`/case-studies`, `/launch-your-vision`, next-case-study slug)
- [ ] External links open the right target (`clientUrl`, collaborator URLs — `target="_blank" rel="noopener noreferrer"`)
- [ ] Meta title & description accurate per slug; canonical `/case-studies/<slug>`
- [ ] Breadcrumbs correct (Home / Case Studies / client name)

## Notes
-
