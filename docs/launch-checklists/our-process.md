# My Process — Launch Checklist

**Route:** `/our-process` · **Source:** `src/app/our-process/page.tsx` (+ `src/components/accordion.tsx`, `src/components/breadcrumbs.tsx`) · **Purpose:** Explains the 6-step delivery process, timelines and FAQs to build confidence before enquiry.

Screenshots (if present): `dod-screens/desktop-1440/{light,dark}/our-process.png`, `dod-screens/mobile-390/{light,dark}/our-process.png`

## Content
- [ ] Breadcrumbs: My Process
- [ ] Section label "My Process", H1: "How I bring your vision to life"
- [ ] Lead: "My proven 6-step process, refined over 25+ years of delivering digital products and platforms that work."
- [ ] Intro body para lists steps + timelines: "Foundation websites take 3 weeks, Growth websites 4 to 6 weeks, and Premium Brand & Web projects 10 to 14 weeks. Every project includes revision rounds and 85+ PageSpeed guaranteed."
- [ ] ⚠️ Verify package names "Foundation / Growth / Premium Brand & Web" (and their 3wk / 4–6wk / 10–14wk timelines) still match the current offering — the Pricing page uses different tier names (Business Website / Custom Website / eCommerce); confirm they're consistent post-pricing-restructure
- [ ] Intro statement H2: "Great websites aren't accidents. They're the result of careful planning, clear communication, and disciplined execution. Every single time."
- [ ] Steps H2: "Six steps, start to launch and beyond"
- [ ] Step 01 Discovery & Consultation (4 highlights incl. "Clear project scope and timeline")
- [ ] Step 02 Strategy & Planning (4 highlights incl. "Technology and platform selection")
- [ ] Step 03 Design & Prototyping (4 highlights incl. "Mobile-first responsive layouts")
- [ ] Step 04 Development & Build (highlights incl. "85+ Google PageSpeed guaranteed", "CMS setup with user training")
- [ ] Step 05 Testing & Launch (4 highlights incl. "Accessibility compliance checks")
- [ ] Step 06 Ongoing Support & Growth (4 highlights incl. "Proactive maintenance and security updates")
- [ ] Dark "Why process matters" H2: "Results by design, not by luck"
- [ ] Stats row (dark): "25+" Years of digital experience, "467" Projects delivered, "85+" PageSpeed guaranteed
- [ ] Closing dark para: "A consistent, proven process is why I deliver results every time, not by luck, but by design..."
- [ ] FAQ H2 "Process questions answered" with 5 accordion items: full-process time; what to provide; how involved; changes mid-project; work outside Brisbane
- [ ] FAQ timeline answer matches intro (Foundation 3 weeks / Growth 4–6 weeks / Premium 10–14 weeks)
- [ ] Closing CTA H2 "Ready to start?" with "Launch your vision" button → `/launch-your-vision`
- [ ] JSON-LD: HowTo (totalTime P14W, 6 steps) + FAQPage present
- [ ] Step icons / check icons use accent RAVENCI Purple #8E1A80 only

## Design & responsive (DoD §11)
- [ ] 390px: layout correct, no horizontal scroll
- [ ] 1440px: layout correct
- [ ] Light theme correct
- [ ] Dark theme correct — purple only as fill/mark; text is paper, never purple on charcoal
- [ ] Keyboard-navigable, focus always visible (accordion toggles reachable/operable)
- [ ] Reduced-motion: final state shown
- [ ] No purple background / gradient / hard shadow
- [ ] Images via next/image (page is icon/text only — no raster images)
- [ ] PageSpeed ≥ 85 mobile

## Links & meta
- [ ] All internal links resolve
- [ ] External links open the right target (none on page)
- [ ] Meta title & description accurate ("My Process | RAVENCI Solutions"; description mentions "my 6-step process from discovery to launch and beyond")
- [ ] Breadcrumbs correct (if present) — My Process

## Notes
- FAQ answers ("summary" vs "content") — the accordion renders one of these; confirm the visible text matches expectations and no draft/placeholder copy shows.
