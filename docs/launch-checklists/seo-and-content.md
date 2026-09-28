# SEO / AEO / GEO — Launch Checklist

**Route:** `/seo-and-content` · **Source:** `src/app/seo-and-content/page.tsx`, `src/components/service-page.tsx`, `src/data/service-pages.ts` (`SEO_CONTENT`) · **Purpose:** Sell SEO + content retainers focused on leads/sales, plus AI-answer visibility.

Screenshots (if present): `dod-screens/desktop-1440/{light,dark}/svc-seo-and-content.png`, `dod-screens/mobile-390/{light,dark}/svc-seo-and-content.png`

## Content
- [ ] H1 reads exactly "SEO / AEO / GEO"; SectionLabel "01 / Service"
- [ ] Lead: "I make sure the right customers can find you when they search, and that the answer they get is yours."
- [ ] Supporting: "Technical SEO, content and local presence for Google, plus the structured data that helps AI assistants quote you correctly when buyers ask them instead."
- [ ] Hero primary CTA "Request a proposal" → `/launch-your-vision`; secondary "What's included" → `#included`
- [ ] Pricing anchor: "FROM $1,750/mo" + note "Standard SEO retainer. eCommerce SEO and campaigns from $2,250/mo. Copywriting from $390 per page."
- [ ] Pricing anchor ticks: "I focus on leads and sales, not just traffic", "Transparent AUD pricing, clear scopes", "Content written for your customers first"
- [ ] Included (02) all 8 items: Technical SEO, Keyword research (up to 50 terms), On-page optimisation (up to 8 pages/mo), Content strategy and articles (2/mo), Local SEO (incl. Google Business Profile), Structured data, Conversion-focused copy, Monthly reporting and strategy call
- [ ] No Process section on this page (SEO_CONTENT has no `process`) — confirm section 03 is absent and numbering (04 Related work, 05 Questions) still reads correctly
- [ ] Related work (04): single card — GoingDark (eCommerce) → `/case-studies/goingdark` — blurb "Fixed hundreds of 404s, added alt text and restructured pages. Organic search up 12.5% three months after relaunch."
- [ ] Verify the "Organic search up 12.5% three months after relaunch" figure against the GoingDark case study (real number)
- [ ] "All case studies" link → `/case-studies`
- [ ] FAQ (05) all 5 Q&As present, including "No ethical SEO provider can guarantee rankings" — good honest framing; phone "07 3106 1836" → `tel:+61731061836`
- [ ] Closing CTA (dark) heading "Want to get found?" primary "Start a project" → `/launch-your-vision`
- [ ] Sticky CTA: "Request a proposal" → `/launch-your-vision`, starting price $1,750
- [ ] JSON-LD Service schema offers: Standard SEO $1,750 / eCommerce SEO + Campaigns $2,250 / Copywriting $390 — consistent with page copy
- [ ] Voice check: plain first-person, no guarantee hype, no AI-tells

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
- [ ] Meta title & description accurate — title "SEO & Content Services | RAVENCI Solutions"; description mentions "ethical link building" (confirm this is a service actually offered)
- [ ] Breadcrumbs correct (if present) — Home / SEO / AEO / GEO

## Notes
-
