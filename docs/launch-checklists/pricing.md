# Pricing — Launch Checklist

**Route:** `/pricing` · **Source:** `src/app/pricing/page.tsx` (+ `src/components/proof-cluster.tsx`, `src/components/sticky-cta.tsx`, `src/data/testimonials.ts`) · **Purpose:** Transparent starting-price list across every service, with a value argument and lead CTA.

Screenshots (if present): `dod-screens/desktop-1440/{light,dark}/pricing.png`, `dod-screens/mobile-390/{light,dark}/pricing.png`

## Content
- [ ] Breadcrumbs: Pricing
- [ ] Section label "Pricing", H1: "Clear pricing, scoped up front"
- [ ] Lead: "No surprises. You know the starting point before I ever get on a call..."
- [ ] Dark value section H2: "Why a RAVENCI site costs more than a $999 one"
- [ ] Value copy present: "$999" one-page argument + "The sites I built five years ago are still fast, still ranking, still untouched." + "Tell me the problem, I'll take it from there."
- [ ] Group Websites (→ `/web-development`): Business Website from $7,500; Custom Website from $10,000; eCommerce from $12,000; Custom eCommerce from $18,000
- [ ] Group Branding (→ `/business-design`): Logo + Guidelines from $3,500; Full Brand Identity from $10,000; Premium Signage "Get a quote"; Vehicle Wraps "Get a quote"
- [ ] Group SEO & Content (→ `/seo-and-content`): Standard SEO from $1,750/mo; eCommerce SEO + Campaigns from $2,250/mo; Copywriting from $390/page
- [ ] Group Care Plans (→ `/retainer-packages`): Website Care $350/mo; eCommerce Care $750/mo; Growth Essentials $1,800/mo; Growth Partner $3,000/mo
- [ ] Group Maintenance (→ `/website-maintenance`): Monthly Maintenance $249/mo; One-Off Maintenance $495
- [ ] Group Hosting (→ `/web-hosting`): Managed Hosting from $39/mo
- [ ] Each group's "See details" link → its href resolves
- [ ] Hourly note: "Additional work outside a project or plan is billed at $165/hr, and I always confirm before doing anything beyond what's agreed."
- [ ] Cost-guide link "Read the Brisbane website cost guide" → `/cost-of-a-website-in-brisbane`
- [ ] Dark CTA H2 "Tell me what you need" with "Launch Your Vision" button → `/launch-your-vision`
- [ ] ProofCluster present (Geoff Beisler testimonial): "5.0 from 11 Google reviews" link → https://g.page/r/CTttHG3mMzZ_EAI/review, "85+ PageSpeed guarantee", partner badges (Shopify/BigCommerce/Synergy Wholesale)
- [ ] Mobile StickyCTA: label "Request a Proposal", starting price $7,500 → `/launch-your-vision`
- [ ] All prices match Care Plans / Maintenance / Hosting figures used on the retainer & home pages (cross-page consistency: $350/$750/$1,800/$3,000, $249/mo, $39/mo)
- [ ] Accent prices use RAVENCI Purple #8E1A80 only

## Design & responsive (DoD §11)
- [ ] 390px: layout correct, no horizontal scroll
- [ ] 1440px: layout correct
- [ ] Light theme correct
- [ ] Dark theme correct — purple only as fill/mark; text is paper, never purple on charcoal
- [ ] Keyboard-navigable, focus always visible
- [ ] Reduced-motion: final state shown
- [ ] No purple background / gradient / hard shadow
- [ ] Images via next/image (page is text only)
- [ ] PageSpeed ≥ 85 mobile

## Links & meta
- [ ] All internal links resolve (6 group hrefs + cost guide + CTAs)
- [ ] External links open the right target (Google reviews link in ProofCluster)
- [ ] Meta title & description accurate ("Pricing | RAVENCI Solutions"; description lists "$7,500 / $12,000 / branding from $3,500 / hosting from $39/mo")
- [ ] Breadcrumbs correct (if present) — Pricing

## Notes
- StickyCTA only appears on mobile; verify it doesn't overlap the footer CTA.
