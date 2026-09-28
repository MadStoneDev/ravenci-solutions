# Construction Industry Page — Launch Checklist

**Route:** `/construction` · **Source:** `src/app/construction/page.tsx`, `src/data/industry-pages.ts` (`CONSTRUCTION`), `src/components/industry-page.tsx` · **Purpose:** Sell websites to Brisbane / SEQ builders and property developers, leaning on Richard's construction background.

Screenshots (if present): `dod-screens/desktop-1440/{light,dark}/ind-construction.png`, `dod-screens/mobile-390/{light,dark}/ind-construction.png`

## Content
- [ ] Hero H1 reads "Websites built for builders and developers"
- [ ] Hero intro leads with the real credential: "I spent ten years in steel detailing and structural drafting, with a structural engineering degree behind that, before I built websites" — confirm this is accurate and how Richard wants it stated
- [ ] Intro closes with "From $7,500, 85+ PageSpeed guaranteed" (matches the May 2026 $7.5k floor)
- [ ] Primary CTA button "Start a project" → `/launch-your-vision`
- [ ] Secondary hero CTA "See the work" → `#work` anchor (only renders because case studies exist)
- [ ] Breadcrumb + section label "Industry / Construction" present
- [ ] Pains section "The problems I hear, every time" — 4 cards: "Your site looks smaller than you are", "Heavy project galleries slow everything down", "Your trust signals are buried" (QBCC licence/insurance/certifications), "Nothing talks to anything"
- [ ] Solutions (dark section) — 3 cards: "Project showcases", "Client and tender portals", "Capability statements that download"
- [ ] Integrations row: PROCORE, BUILDERTREND, COCONSTRUCT, XERO, MYOB, HUBSPOT, DEPUTY — all genuinely supported/integratable; confirm none are aspirational
- [ ] `[YOUR SYSTEM]` chip renders as an intentional dashed placeholder (not a leftover TODO) — confirm it reads to visitors as "and your system", not a bug
- [ ] Related case-study cards (3): Peninsula Homes ("still scores 94 on PageSpeed two years on"), Coast Remedial Solutions, DIRT — verify each blurb/claim
- [ ] "DIRT" rendered in all caps everywhere (brand spelling rule)
- [ ] Peninsula Homes PageSpeed claim "94" matches the case study data (results metric = 94) ✓ cross-check
- [ ] Stats band: "25+ Years in digital", "10 Years in steel detailing & drafting", "85+ PageSpeed, guaranteed" (accent)
- [ ] ⚠️ Stat "25+ Years in digital" — memory notes Richard as "20+ years experience". Confirm 25+ is the number he wants used (site-wide consistency)
- [ ] "10 Years in steel detailing & drafting" reconciles with the intro's "ten years" (5yr steel detailing + 5yr structural drafting) — confirm wording matches how he describes it
- [ ] Closing CTA (dark): heading "Let's get your projects online properly." + body asking for current site + three proudest jobs
- [ ] Closing CTA primary "Start a project" → `/launch-your-vision`; secondary "Free visibility check" → `/#visibility-check`
- [ ] No decorative/invented metrics; every number (25+, 10, 85+, 94, $7,500) is genuine
- [ ] No corny self-praise or AI-tells in copy (voice matches Richard's articles)
- [ ] ⚠️ Case-study card links to `/case-studies/coast-remedial-solutions`, but that case study is `hidden: true` in `src/data/case-studies.ts` ("Live site is no longer the RAVENCI build; ... not publicly listed") and is excluded from `getAllSlugs()` / `generateStaticParams`. A public industry page linking to a hidden/unlisted case study is a contradiction — the link may 404 under static export and undermines the "not publicly listed" intent. Remove the card or un-hide the study.
- [ ] JSON-LD: Service schema serviceType "Construction Website Design", offer price 7500 AUD, and BreadcrumbList emit correctly

## Design & responsive (DoD §11)
- [ ] 390px: layout correct, no horizontal scroll
- [ ] 1440px: layout correct
- [ ] Light theme correct
- [ ] Dark theme correct — purple only as fill/mark; text is paper, never purple on charcoal
- [ ] Keyboard-navigable, focus always visible
- [ ] Reduced-motion: final state shown
- [ ] No purple background / gradient / hard shadow
- [ ] Images via next/image
- [ ] PageSpeed ≥ 85 mobile

## Links & meta
- [ ] All internal links resolve (`/launch-your-vision`, `/#visibility-check`, `#work`, 3 case-study hrefs)
- [ ] External links open the right target (none on this page besides case-study internal links)
- [ ] Meta title "Construction Websites Brisbane | RAVENCI Solutions" & description accurate (mentions QBCC, 85+ PageSpeed, From $7,500)
- [ ] Breadcrumbs correct (Home / Construction)

## Notes
-
