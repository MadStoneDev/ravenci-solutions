# Case Studies (index) — Launch Checklist

**Route:** `/case-studies` · **Source:** `src/app/case-studies/page.tsx` (+ `src/components/case-study-card.tsx`, `src/data/case-studies.ts`) · **Purpose:** Portfolio index — one card per visible case study, with stats strip and CTA.

Screenshots (if present): `dod-screens/desktop-1440/{light,dark}/case-studies-index.png`, `dod-screens/mobile-390/{light,dark}/case-studies-index.png`

## Content
- [ ] Breadcrumbs: Case Studies
- [ ] Section label "Selected work", H1: "The work speaks for itself"
- [ ] Lead: "What I've built for Australian businesses, and the results they got."
- [ ] Stats strip: "25+" Years in digital, "75+" Australian businesses, "467" Projects delivered, "85+" PageSpeed guaranteed
- [ ] ⚠️ Same "75+ Australian businesses" figure as About page — keep consistent and confirm it's the real number
- [ ] Grid renders exactly 7 visible case studies (via `getAllCaseStudies()`, sorted by `order`, `hidden` excluded):
- [ ] DIRT (Technology) → `/case-studies/dirt` — "DIRT" all caps
- [ ] GoingDark (E-commerce) → `/case-studies/goingdark` — one word
- [ ] Peninsula Homes (Construction) → `/case-studies/peninsula-homes`
- [ ] Covenant Security Solutions (Security) → `/case-studies/covenant-security-solutions`
- [ ] SAC Consulting (Professional Services) → `/case-studies/sac-consulting`
- [ ] Nikita Morell (Professional Services) → `/case-studies/nikita-morell`
- [ ] Cadeaurable (E-commerce) → `/case-studies/cadeaurable`
- [ ] ⚠️ NNAccountability must NOT appear (intentionally `hidden: true`) — confirm it is absent from the grid, JSON-LD ItemList, and any related listings
- [ ] ⚠️ Coast Remedial Solutions must NOT appear either (also `hidden: true`) — confirm absent
- [ ] Each card shows: industryLabel (accent), clientName, 3-line-clamped excerpt, up to 3 service-label chips, "View case study" link
- [ ] Card images load via next/image using `cardImage` (fallback `featuredImage`) — spot-check no broken/`coming-soon` images in the index thumbnails
- [ ] Closing CTA (dark) H2 "Ready to start your project?" with "Start a project" button → `/launch-your-vision`
- [ ] JSON-LD: CollectionPage + ItemList (ItemList reflects only the 7 visible studies)
- [ ] Accent labels use RAVENCI Purple #8E1A80 only

## Design & responsive (DoD §11)
- [ ] 390px: layout correct, no horizontal scroll
- [ ] 1440px: layout correct
- [ ] Light theme correct
- [ ] Dark theme correct — purple only as fill/mark; text is paper, never purple on charcoal
- [ ] Keyboard-navigable, focus always visible (each card is a single link)
- [ ] Reduced-motion: final state shown (card hover-scale only)
- [ ] No purple background / gradient / hard shadow
- [ ] Images via next/image (first 3 cards get `priority`)
- [ ] PageSpeed ≥ 85 mobile

## Links & meta
- [ ] All internal links resolve (7 case-study links + CTA)
- [ ] External links open the right target (none on index)
- [ ] Meta title & description accurate ("Case Studies | RAVENCI Solutions"; description mentions "real results from real businesses")
- [ ] Breadcrumbs correct (if present) — Case Studies

## Notes
- Detail pages for hidden studies still resolve on direct URL by design (draft sharing); only the listing must exclude them.
