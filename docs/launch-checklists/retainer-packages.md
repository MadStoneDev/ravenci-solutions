# Retainer Packages — Launch Checklist

**Route:** `/retainer-packages` · **Source:** `src/app/retainer-packages/page.tsx` (+ `src/components/pricing-cards.tsx`, `src/components/proof-cluster.tsx`, `src/components/sticky-cta.tsx`, `src/data/testimonials.ts`) · **Purpose:** Sells the four monthly care/retainer tiers as an alternative to hiring in-house.

Screenshots (if present): `dod-screens/desktop-1440/{light,dark}/retainer-packages.png`, `dod-screens/mobile-390/{light,dark}/retainer-packages.png`

## Content
- [ ] Breadcrumbs: Retainer Packages
- [ ] Section label "Retainer Packages", H1: "Your Dedicated Digital Partner"
- [ ] Lead: "Ongoing development, design, and strategy, without the overhead of hiring."
- [ ] Intro para: "For established Australian businesses that want ongoing digital support... Tell me the priorities. I'll take it from there."
- [ ] Social proof H2: "Trusted by Brisbane businesses for ongoing digital partnership" with testimonial (Geoff Beisler, from `getTestimonialsForPage("retainer-packages")`)
- [ ] ⚠️ Social-proof figcaption prints `testimonials[0].role` only — Geoff Beisler has no `role` (his field is `company: "Green Earth Trees"`), so only the name shows and the company is omitted; confirm that's intended or switch to show company
- [ ] Problem section H2 "The Problem with Project-by-Project Work" with 5 bullets (freelancers who disappear; stagnant sites; surprise invoices; juggling vendors; lost momentum)
- [ ] "Why a Retainer Beats Hiring In-House": Growth Partner "$36,000/year" vs full-time "$80,000 to $100,000/year" before super/leave/equipment/training + 4 checkmark benefits
- [ ] "Why Choose a Retainer" list (7 features): Hosting & Maintenance Included; Dedicated Monthly Hours; Flexible Allocation; Priority Support; Consistent Progress; Cost Predictability; No Lock-In on Website Care
- [ ] Showcase "Some of My Retainer Clients": Covenant Security (`/showcase-images/Client - Covenant Security.png`) and GoingDark (`/showcase-images/Client - GoingDark.png`) — GoingDark one word
- [ ] Pricing cards (dark) H2 "Choose Your Retainer" — 4 tiers via `PricingCards`
- [ ] Tier "1. Website Care" $350/mo — up to 1 hour of edits, no minimum commitment, overage $165/hr
- [ ] Tier "2. eCommerce Care" $750/mo — 3 hours/month, Shopify/BigCommerce/WooCommerce, 24-hour response, 1 month rollover, 3-month minimum, overage $165/hr
- [ ] Tier "3. Growth Essentials" $1,800/mo — 8 hours/month, monthly strategy call, 1 month rollover, 3-month minimum, overage $155/hr
- [ ] Tier "4. Growth Partner" $3,000/mo — 15 hours/month, same-day support, bi-weekly calls, monthly CRO review, 2 months rollover, 15% off project work, overage $155/hr
- [ ] Investment ROI section H2 "A Retainer That Pays for Itself" with cards: "$36k per year" (Growth Partner), "$80 to 100k per year" (full-time hire), "Full skill set" (Dev, design, SEO, content)
- [ ] "What Can Affect Which Tier You Need" — 8 factors listed
- [ ] Related Services (3): Website Design → `/web-development`; Website Maintenance → `/website-maintenance`; SEO & Content → `/seo-and-content`
- [ ] FAQ H2 "Frequently Asked Questions" — 5 items (what work; unused hours/rollover; Website Care vs Growth; change tiers; more hours/overage)
- [ ] Overage rates stated consistently: $165/hr (Website Care & eCommerce Care), $155/hr (Growth Essentials & Growth Partner)
- [ ] Closing CTA H2 "Ready to bring me on board?" + ProofCluster + "Book a Strategy Call" button → `/launch-your-vision`
- [ ] Mobile StickyCTA: label "Book a Strategy Call", starting price $350 → `/launch-your-vision`
- [ ] JSON-LD: BreadcrumbList + Product (4 Offers, AUD) + FAQPage present; Product image `og/retainer-packages.png` — verify OG image exists
- [ ] Accent metrics use RAVENCI Purple #8E1A80 only (e.g. "$36k", "$80 to 100k")

## Design & responsive (DoD §11)
- [ ] 390px: layout correct, no horizontal scroll
- [ ] 1440px: layout correct
- [ ] Light theme correct
- [ ] Dark theme correct — purple only as fill/mark; text is paper, never purple on charcoal
- [ ] Keyboard-navigable, focus always visible (pricing-card accordions + FAQ operable)
- [ ] Reduced-motion: final state shown
- [ ] No purple background / gradient / hard shadow
- [ ] Images via next/image (showcase images use next/image with width/height)
- [ ] PageSpeed ≥ 85 mobile

## Links & meta
- [ ] All internal links resolve (related services + CTAs)
- [ ] External links open the right target (Google reviews link in ProofCluster)
- [ ] Meta title & description accurate ("Retainer Packages | RAVENCI Solutions"; description mentions "founder-led studio backed by a specialist network")
- [ ] Breadcrumbs correct (if present) — Retainer Packages (also mirrored in BreadcrumbList JSON-LD)

## Notes
- Two-column problem/why-choose block stacks on mobile; verify the dark/light split reads correctly at 390px.
- Pricing-card accordion HTML is authored inline (`accordionContent`) with `text-neutral-400/90` — confirm it reads correctly against the dark card and isn't a hard-coded colour that breaks the theme token rule.
