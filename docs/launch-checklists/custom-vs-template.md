# Custom vs Template — Launch Checklist

**Route:** `/custom-vs-template` · **Source:** `src/app/custom-vs-template/page.tsx` · **Purpose:** Comparison guide: custom-built websites vs typical agency template builds vs DIY builders, with a 5-year total-cost-of-ownership breakdown.

Screenshots (if present): `dod-screens/desktop-1440/{light,dark}/custom-vs-template.png`, `dod-screens/mobile-390/{light,dark}/custom-vs-template.png`

## Content
- [ ] H1 "Custom Website vs Template"; sub "Which approach pays off for Australian businesses?"
- [ ] Side-by-side comparison table (desktop) / cards (mobile), columns: RAVENCI Custom · Typical Agency · DIY Builder
- [ ] Comparison rows render (8): Design, Performance, SEO, Scalability, Security, Ownership, Ongoing Cost, Time to Launch
- [ ] "The Quick Verdict" three cards: Choose Custom If… / A Typical Agency Works If… / DIY Works If…
- [ ] Total cost of ownership cards: Custom Build $7,500–$12,000 (5-yr total $7,500–$12,000 + hosting) · Typical Agency Build $3,000–$6,000 + rebuild (5-yr $8,500–$18,000) · DIY Builder $20–$80/mo (5-yr $1,800–$7,200 + your time)
- [ ] ROI illustration: "$7,500 over five years, that's $4.10 a day" (math checks: 7500 / 1825 ≈ $4.11)
- [ ] FAQ accordion (5 Q&As) renders; FAQ states custom "start from $7,500 for a Brochure site with CRM"
- [ ] CTA (closing) — "Launch Your Vision" → `/launch-your-vision`; body "Custom websites from $7,500"
- [ ] ⚠️ ROI paragraph makes an unbacked claim: "If it brings in one extra client a month… that's $6,000 a year… A 4x return. Most businesses see more than that." Confirm Richard is comfortable standing behind "Most businesses see more than that" — it reads as an unproven promise and is the kind of illustrative-number claim the brand avoids.
- [ ] ⚠️ Confirm the $7,500 custom floor and "$7,500 for a Brochure site with CRM" match the current pricing page and the other guide pages (cost guide, how-to-choose).
- [ ] Voice check: page is first person ("I break down…", "Many of my clients…") — consistent with Richard's standard; verify no drift into "we".

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
- JSON-LD present: BreadcrumbList, FAQPage (no Article block on this page).
- Comparison table has a horizontal-scroll wrapper (`overflow-x-auto`) on desktop and switches to stacked cards below `lg` — verify the mobile cards at 390px, not the table.
- "Quick Verdict" section forces `dark`.
