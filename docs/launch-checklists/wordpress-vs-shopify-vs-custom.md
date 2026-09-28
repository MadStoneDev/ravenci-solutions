# WordPress vs Shopify vs Custom Next.js — Launch Checklist

**Route:** `/wordpress-vs-shopify-vs-custom` · **Source:** `src/app/wordpress-vs-shopify-vs-custom/page.tsx` · **Purpose:** Platform comparison guide with a feature matrix, per-platform deep dives, a decision framework, common mistakes, and RAVENCI's selection approach.

Screenshots: not captured (page not in routes.ts)

## Content
- [ ] H1 "WordPress vs Shopify vs Custom Next.js"; sub "Which platform is right for your Australian business?"
- [ ] Hero claim: "Choosing the wrong platform can cost $5,000 to $15,000 to fix within 18 months"
- [ ] Quick-comparison matrix (12 rows) renders with Yes/Partial/No cells + text cells:
  - [ ] Build cost row: WP $3,500–$15,000 · Shopify $5,000–$20,000 · Custom $10,000–$50,000+
  - [ ] Monthly platform fee: WP $0 · Shopify $45–$645/mo · Custom $0
  - [ ] Hosting: WP $30–$50/mo · Shopify Included · Custom $30–$80/mo
  - [ ] Vendor lock-in: WP No · Shopify Yes · Custom No
- [ ] Three platform deep-dives render (choose-when / avoid-when / real costs / use cases) for WordPress, Shopify, Custom Next.js
- [ ] Five-Minute Decision Framework: 6 scenarios each with a platform answer + reason
- [ ] Five Common Platform Mistakes render
- [ ] "How RAVENCI Picks": builds on Custom Next.js, WordPress, Shopify + BigCommerce, Plasmic, Strapi; Shopify Partner / BigCommerce Partner / Synergy Wholesale Partner
- [ ] In-body links: `/cost-of-a-website-in-brisbane` ("Brisbane website cost guide"), `/web-development` ("web development packages")
- [ ] FAQ accordion (8 Q&As) renders, incl. 3-year cost comparison and Webflow/Wix/Squarespace + WooCommerce answers
- [ ] CTA — "Get a Platform Recommendation" → `/launch-your-vision`; "See Website Design Packages" → `/web-development`
- [ ] CTA (closing) — "Launch Your Vision" → `/launch-your-vision`; "See Pricing Guide" → `/cost-of-a-website-in-brisbane`
- [ ] Voice check: first person throughout ("Most agencies skip the 'avoid' section. I don't.") — consistent with Richard's standard
- [ ] ⚠️ Confirm the AU cost/fee ranges and the "$5,000 to $15,000 to fix within 18 months" figure are real, defensible numbers (Shopify plan span $45–$645/mo, transaction 0.5–2%, etc.), and that the 3-year totals in the first FAQ ("WordPress ~$15,000, Shopify $30,000+, Custom Next.js $20,000") are consistent with the tier costs shown elsewhere on the page.

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
- Not in `tests/dod/routes.ts` — no automated screenshots; capture manually if needed. Deep-dives section and closing CTA force `dark`.
- The comparison matrix uses a single `overflow-x-auto` table for all breakpoints (no separate mobile card layout) — check carefully at 390px that the table scrolls rather than breaking the page width.
