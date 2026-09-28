# How to Choose a Web Designer in Brisbane — Launch Checklist

**Route:** `/how-to-choose-a-web-designer-in-brisbane` · **Source:** `src/app/how-to-choose-a-web-designer-in-brisbane/page.tsx` · **Purpose:** Buyer's guide — 10 questions to ask, red/green flags, Brisbane-specific factors, and a self-applied RAVENCI scorecard.

Screenshots: not captured (page not in routes.ts)

## Content
- [ ] H1 "How to Choose a Web Designer in Brisbane in 2026"; sub "Ten questions to ask, the red flags to spot, and how to compare quotes properly."
- [ ] The Ten Essential Questions render (01–10) each with a "What to listen for" answer (ownership, 12-month total cost, platform choice, case studies, maintenance, revisions, timeline, post-launch support, exit, who does the work)
- [ ] Red Flags (6) and Green Flags (6) render in two columns
- [ ] Brisbane-Specific Factors (6) render (local SEO, .com.au/auDA, time zone, AU hosting/data residency, Privacy Act & Consumer Law, real Brisbane references)
- [ ] RAVENCI scorecard (10 answers) renders, including:
  - [ ] Platforms: Custom Next.js, WordPress, Shopify, BigCommerce, GoHighLevel, Plasmic, Strapi + Shopify/BigCommerce/Synergy Wholesale Partner
  - [ ] Maintenance $249/mo (security, plugins, backups, monitoring, 1 hr monthly work)
  - [ ] Timelines: Brochure 4 wks · eCommerce Template 4–5 wks · Custom 6–8 wks · eCommerce Custom 8–10 wks · Healthcare/Construction 5–8 wks
  - [ ] Post-launch: 30 days bug fixes; retainer packages from $350/mo
- [ ] "Read Next" internal cross-links: `/cost-of-a-website-in-brisbane`, `/wordpress-vs-shopify-vs-custom`, `/brisbane-website-audit`
- [ ] FAQ accordion (8 Q&As) renders, including 2026 hourly-rate ranges ($80–$250+/hr)
- [ ] CTA (closing) — "Launch Your Vision" → `/launch-your-vision`; "See My Case Studies" → `/case-studies`
- [ ] ⚠️ Scorecard says "Richard (founder, 25+ years)". Other RAVENCI materials describe 20+ years' experience. Confirm the correct figure and make it consistent site-wide.
- [ ] ⚠️ Scorecard names specific case studies as proof: "Peninsula Homes, Coast Remedial, Intercorp Developments, SAC Consulting and others". Verify each is a real, published, live case study (the surrounding copy tells buyers to demand named, verifiable work — this list must itself be verifiable). Cross-check exact spellings against the case-studies data.
- [ ] ⚠️ Scorecard makes absolute claims: "I've never had a client unable to leave" and "I've never had a contested handover." Confirm these are literally true before publishing.

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
- [ ] All internal links resolve
- [ ] External links open the right target
- [ ] Meta title & description accurate
- [ ] Breadcrumbs correct (if present)

## Notes
- JSON-LD present: BreadcrumbList, Article (2026-04-22), FAQPage.
- Not in `tests/dod/routes.ts` — no automated screenshots. Capture manually if launch review needs visuals; two sections (Ten Questions, RAVENCI scorecard, closing CTA) force `dark`.
- Timeline and retainer figures ($350/mo floor) should reconcile with the retainer-packages page and current pricing.
