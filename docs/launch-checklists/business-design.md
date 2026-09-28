# Branding & Brand Identity (Business Design) — Launch Checklist

**Route:** `/business-design` · **Source:** `src/app/business-design/page.tsx` (bespoke legacy-styled page), `src/components/pricing-cards.tsx`, `src/components/proof-cluster.tsx`, `src/data/testimonials.ts` · **Purpose:** Sell branding / graphic design packages (logo → full identity → signage → vehicle wraps).

Screenshots (if present): `dod-screens/desktop-1440/{light,dark}/svc-business-design.png`, `dod-screens/mobile-390/{light,dark}/svc-business-design.png`

## Content
- [ ] Breadcrumb "Branding"; H1 "Professional Branding That Builds Trust"; H2 "Professional branding and graphic design that builds trust and drives sales"
- [ ] ⚠️ H1 and H2 both say "builds trust" — near-duplicate wording; consider tightening the hero
- [ ] Hero intro paragraph: "...Logo and guidelines from $3,500, full brand identity systems from $10,000, plus signage and vehicle wraps. Brisbane-based. 25+ years."
- [ ] Confirm "25+ years" claim (reconcile with other pages / memory: 20+ years experience)
- [ ] Social proof bar (purple): "Trusted by 75+ Australian businesses to build brands that stand out"
- [ ] Verify "75+ Australian businesses" claim before launch
- [ ] Testimonial (first match for "business-design" is Timothy O'Donnell): "Richard went ABOVE and beyond for my request. Quality was amazing and his efforts to satisfy my extra needs (he fitted it to a damn guitar!) Pure talent. Thankyou sir" — author shown (no role/company)
- [ ] ⚠️ Testimonial contains casual/rough phrasing ("Pure talent. Thankyou sir", missing comma) — genuine quote, but confirm it's the strongest one to lead the branding page with
- [ ] Left dark column: "Your Brand Deserves Better" (5 pain-point bullets) + "Why Choose RAVENCI Over Other Designers?" (4 ticks) + intro to "four comprehensive design packages"
- [ ] Right column "What's Included with Every Design" — all 9 features present (Brand Consistency, Print-Ready Files, Vector Graphics, Brand Guidelines, Multiple Concepts, Unlimited Revisions, Fast Turnaround, Professional Quality, File Ownership)
- [ ] ⚠️ "Unlimited Revisions" feature contradicts the package details below, which cap revisions ("3 revisions included" / "2 rounds of revisions per item"); reconcile the claim
- [ ] "Additional Services Available" add-ons grid — all 10 present (Rush Delivery, Additional Concepts, 3D Mockups, Animation Services, Trade Show Materials, Packaging Design, Digital Assets, Brand Photography Direction, Copywriting Integration, Brand Training)
- [ ] "Some of My Recent Work" showcase (3 images): Covenant Security, Coast Remedial Solutions, Cadeaurable (confirm images exist in `/showcase-images/`)
- [ ] Pricing "Choose Your Package" (PricingCards) — 4 tiers with exact names/prices: "1. Logo + Guidelines" $3,500; "2. Full Brand Identity" $10,000; "3. Premium Signage" "Get a quote"; "4. Vehicle Wraps" "Get a quote"; each accordion's included list renders
- [ ] Tier 1 detail check: "3 initial concepts", "6 weeks delivery", "3 revisions included"
- [ ] Tier 2 detail check: "Business card printing (1000 QTY)", "8 weeks delivery", "2 rounds of revisions per item"
- [ ] ⚠️ Investment/ROI section stats: "$1.92 per day" (Logo+Guidelines/5yr), "$5.48 per day" (Full Identity/5yr), and "5 to 10x trust factor" — the "5 to 10x trust factor" is a decorative/invented metric with no source; memory says strip meaningless metrics. Remove or replace with a real number
- [ ] ROI copy: "$3,500 brand identity that helps you win even one extra client a month at $1,000 per job pays for itself in under four months" — confirm this framing is acceptable (hypothetical, not a claimed result)
- [ ] "What Can Affect Pricing" — 10 factors listed + "Hourly rate for additional work: $165/hr" (confirm rate is current)
- [ ] Related Services: Website Design → `/web-development`, SEO & Content → `/seo-and-content`, Retainer Packages → `/retainer-packages`
- [ ] FAQ "Design Questions Answered" — all 5 Q&As present (delivery times, revisions, printing/installation, existing guidelines, file formats)
- [ ] Proof near CTA: ProofCluster with Timothy O'Donnell testimonial, "5.0 from 11 Google reviews", "85+ PageSpeed guarantee", partner badges
- [ ] Sticky CTA: "Request a Proposal" → `/launch-your-vision`, starting price $3,500
- [ ] JSON-LD: BreadcrumbList + Service (Branding, 4 offers) + FAQPage present; offer prices match visible ($3,500 / $10,000 / signage + wraps quote-only)
- [ ] ⚠️ This page uses the OLD design system (`bg-ravenci-primary`, `bg-ravenci-dark`, `font-serif`, `text-h1/h2/h3`, `content-section`, `pt-32`), not the redesign tokens used by the templated service pages. It will look inconsistent with the rest of the site and needs a design pass. Confirm `ravenci-primary` resolves to RAVENCI Purple #8E1A80 only (no retired #D57ACA)

## Design & responsive (DoD §11)
- [ ] 390px: layout correct, no horizontal scroll
- [ ] 1440px: layout correct
- [ ] Light theme correct
- [ ] Dark theme correct — purple only as fill/mark; text is paper, never purple on charcoal
- [ ] Keyboard-navigable, focus always visible
- [ ] Reduced-motion: final state shown
- [ ] No purple background / gradient / hard shadow  ⚠️ hero social-proof bar uses a full purple background (`bg-ravenci-primary`) and showcase cards use a `bg-gradient-to-t from-black/70` overlay — review against this rule
- [ ] Images via next/image
- [ ] PageSpeed ≥ 85 mobile

## Links & meta
- [ ] All internal links resolve
- [ ] External links open the right target
- [ ] Meta title & description accurate — title "Branding & Brand Identity Brisbane | RAVENCI"
- [ ] Breadcrumbs correct (if present) — Home / Branding

## Notes
-
