# Brisbane Website Audit — Full Report (Printable) — Launch Checklist

**Route:** `/brisbane-website-audit/report` · **Source:** `src/app/brisbane-website-audit/report/page.tsx` (data: `src/data/brisbane-audit.ts`, print button: `src/components/print-button.tsx`) · **Purpose:** Printable / save-as-PDF version of the audit, the gated downloadable behind the landing-page form.

Screenshots: not captured (page not in routes.ts)

## Content
- [ ] Cover: "Original research · January to February 2026", H1 "We audited 50 Brisbane business websites"
- [ ] Cover meta blocks: Published by RAVENCI Solutions, "Brisbane, Australia · ravenci.solutions"; Sample size "50 websites", "7 industries"
- [ ] Executive summary numbers: average mobile PageSpeed 38/100, 72% below 50, 64% no structured data, 42% SSL issues
- [ ] Headline numbers grid renders all 10 audit stats (same data as landing page)
- [ ] Category-by-category breakdown with per-category avg + recommendations (Performance 38, SEO 42, Mobile 51, Security 55, Accessibility 44)
- [ ] Performance-by-industry bars render (7 industries, scores 31–52)
- [ ] Key takeaways (5) render as numbered list
- [ ] Methodology section renders the audit FAQ items (selection, tools, anonymity, self-check)
- [ ] About RAVENCI: "467 projects for Australian businesses since 2018", stack (Custom Next.js, WordPress, Shopify, BigCommerce, GoHighLevel, Plasmic, Strapi), partner claims (Shopify Partner, BigCommerce Partner, Synergy Wholesale Partner)
- [ ] Business contact block: Website ravenci.solutions · Phone 07 3106 1836 · Brisbane, AU · hello@ravenci.solutions
- [ ] Footer: "© {current year} RAVENCI Solutions · Brisbane Business Website Audit 2026 · Published 2026-03-04"
- [ ] CTA — "Talk to RAVENCI about your project" → `/launch-your-vision` (hidden in print via `.no-print`)
- [ ] Floating controls: Print button + "Back to summary" → `/brisbane-website-audit` (hidden in print)
- [ ] Print stylesheet: A4 page, page breaks, `.no-print` hidden — verify a real print/PDF export looks clean
- [ ] ⚠️ Voice: report uses "We audited" (org voice) whereas the public landing page H1 is first person "I audited". Confirm which voice is intended and make the two pages consistent.
- [ ] ⚠️ The "467 projects since 2018" and the three Partner claims must be current and accurate (they render in the downloadable PDF clients keep).
- [ ] ⚠️ `robots: { index: false, follow: false }` is set — confirm this is intended (report is meant to be non-indexed; landing page is canonical). Correct as designed, just confirm before launch.

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
- No Breadcrumbs component on this page (navigation is the floating "Back to summary" link) — the Breadcrumbs meta item above is N/A.
- Not in `tests/dod/routes.ts`, so the DoD sweep does not screenshot it. If launch review needs visuals, capture manually and also test an actual browser "Save as PDF".
- Footer year comes from `new Date().getFullYear()` — dynamic, will read 2026 at launch.
