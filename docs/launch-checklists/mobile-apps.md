# Mobile App Development — Launch Checklist

**Route:** `/mobile-apps` · **Source:** `src/app/mobile-apps/page.tsx` (bespoke legacy-styled page), `src/components/price-button.tsx`, `src/components/proof-cluster.tsx`, `src/data/testimonials.ts` · **Purpose:** Sell iPhone/Android app builds (MVP → Growth → Enterprise).

Screenshots: not captured (page not in tests/dod/routes.ts)

## Content
- [ ] H1 "Mobile apps users love to keep"; H2 "iPhone and Android apps built to be used every day, and to keep working long after the next OS update."
- [ ] No Breadcrumbs component on this page (other service pages have them) — confirm this is intentional
- [ ] Social proof bar (purple) heading: "Brisbane-founded apps, built for reliability and growth"
- [ ] ⚠️ NO testimonial renders on this page — `getTestimonialsForPage("mobile-apps")` returns nothing (no testimonial in `src/data/testimonials.ts` is tagged "mobile-apps"). The hero quote block is empty and the closing ProofCluster shows no client quote. This is a proof gap: either tag a real testimonial for this page or remove the empty quote scaffolding
- [ ] "What you get with Mobile App Development" — all 9 features present (iPhone and Android both, Published to both app stores, Built to last past the next OS update, Login/permissions/data done properly, Push notifications that work, Works without internet, You'll know how it's performing, Releases without surprises, Grows with your users)
- [ ] "Popular Add-ons" — all 10 present (Product Design Sprint, Admin Dashboard, Payments & Subscriptions, ASO & Launch Strategy, Closed Beta / TestFlight, Localisation, Real-time Features, Integrations, Accessibility, Support & Maintenance)
- [ ] Dark column: "Avoid launch delays and app store rejections" (5 pain-point bullets) + "Why RAVENCI for mobile" (4 ticks: React Native/Swift/Kotlin, store submissions, CI/CD and QA, Brisbane-based AUD pricing)
- [ ] ⚠️ Some bullets use curly/smart quotes literally in source (e.g. "“Multi-platform” code that isn't truly native") — confirm they render correctly, not as mojibake
- [ ] Pricing tiers (3), each with an accordion "What's Included" + PriceButton (all → `/launch-your-vision`, sub-CTA "Enquire for a tailored proposal"):
  - [ ] "1. MVP Sprint" — from $30,000; React Native iOS+Android, 2-3 core flows, Supabase/Express backend, app store submissions, 6-8 weeks
  - [ ] "2. Growth Build" — from $50,000; offline-first, push + deep linking, payments/subscriptions, CI/CD, 10-14 weeks
  - [ ] "3. Enterprise" — from $75,000; custom architecture, SSO/MDM, observability, release trains, 12-20+ weeks
- [ ] Related Services: Web Apps → `/web-apps`, Website Design → `/web-development`, Retainer Packages → `/retainer-packages`
- [ ] FAQ "Mobile FAQs" — all 4 Q&As present (both stores, React Native vs native, backend, post-launch maintenance)
- [ ] Proof near CTA: ProofCluster (Google rating + 85+ PageSpeed + partner badges) renders even without a testimonial
- [ ] Sticky CTA: → `/launch-your-vision`, starting price $30,000 (no label prop passed — confirm default label is acceptable)
- [ ] JSON-LD: BreadcrumbList + Service (Mobile App Development) + FAQPage present
- [ ] ⚠️ Strategic: memory (pricing restructure, May 2026) says RAVENCI plans to DROP mobile apps and lead with web + eCommerce. Confirm this page should launch at all, or be unlinked/retired
- [ ] ⚠️ This page uses the OLD design system (`bg-ravenci-primary`, `bg-ravenci-dark`, `font-serif`, `text-h1/h2/h3`, `content-section`, `pt-32`), not the redesign tokens — inconsistent with the templated service pages; needs a design pass if kept

## Design & responsive (DoD §11)
- [ ] 390px: layout correct, no horizontal scroll
- [ ] 1440px: layout correct
- [ ] Light theme correct
- [ ] Dark theme correct — purple only as fill/mark; text is paper, never purple on charcoal
- [ ] Keyboard-navigable, focus always visible
- [ ] Reduced-motion: final state shown
- [ ] No purple background / gradient / hard shadow  ⚠️ social-proof bar uses a full purple background (`bg-ravenci-primary`) — review against this rule
- [ ] Images via next/image  ⚠️ this page renders no `<Image>` / images at all — nothing to check, but confirm the image-free hero is intended
- [ ] PageSpeed ≥ 85 mobile

## Links & meta
- [ ] All internal links resolve
- [ ] External links open the right target
- [ ] Meta title & description accurate — title "Mobile App Development | RAVENCI Solutions"
- [ ] Breadcrumbs correct (if present) — none rendered on-page (only in JSON-LD)

## Notes
- Page is not in `tests/dod/routes.ts`, so no DoD screenshots are captured. Add it to routes.ts if it should be part of the sweep.
