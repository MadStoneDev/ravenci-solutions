# Website Design & Development — Launch Checklist

**Route:** `/web-development` · **Source:** `src/app/web-development/page.tsx`, `src/components/service-page.tsx`, `src/data/service-pages.ts` (`WEB_DEVELOPMENT`) · **Purpose:** Sell custom, hand-built websites for established Brisbane businesses.

Screenshots (if present): `dod-screens/desktop-1440/{light,dark}/svc-web-development.png`, `dod-screens/mobile-390/{light,dark}/svc-web-development.png`

## Content
- [ ] Breadcrumb + SectionLabel "01 / Service" render; H1 reads exactly "Website Design & Development"
- [ ] Lead reads: "One senior developer designs it around your business and hand-builds it. The whole website, not just the look."
- [ ] Supporting line present: "Your site has to carry real load: traffic, content, integrations, and years of edits by people who aren't developers. I build it to handle all of that."
- [ ] Hero primary CTA "Request a proposal" → `/launch-your-vision`
- [ ] Hero secondary CTA "What's included" → `#included` (scrolls to Included section)
- [ ] Pricing anchor shows "FROM $7,500" with note: "Scoped and fixed before we start. Custom sites from $10,000, eCommerce from $12,000."
- [ ] Pricing anchor ticks: "85+ PageSpeed guaranteed", "You own the code and content", "Tailored video training included"
- [ ] Verify the "85+ PageSpeed guaranteed" claim is one Richard stands behind (repeated across the site)
- [ ] "Included in every build" section (02) lists all 9 items with correct titles + copy: Responsive design, A CMS you'll actually use, Performance optimisation, SEO built in, Accessibility to WCAG 2.1 AA, Video training made for you, Analytics and Search Console, SSL and a secure launch, Revision rounds
- [ ] Process section (03, dark) heading: "First look in about three weeks. Then feedback, final touches, and live." with the 6 steps: Design sign-off, Development, First look, Feedback, Final touches, Go live
- [ ] Related work (04) shows 3 cards: Peninsula Homes (Construction) → `/case-studies/peninsula-homes`, Nikita Morell (Professional services) → `/case-studies/nikita-morell`, SAC Consulting (Professional services) → `/case-studies/sac-consulting`; each pulls a real card/featured image via `getCaseStudyBySlug`
- [ ] "All case studies" link → `/case-studies`
- [ ] Related-work images actually resolve for all 3 slugs (confirm each case study exists and has cardImage/featuredImage)
- [ ] FAQ (05) shows all 5 Q&As; phone link "07 3106 1836" → `tel:+61731061836`
- [ ] FAQ claim check: "Managed hosting starts at $39 a month" — matches Managed Web / hosting pages ($39/mo)
- [ ] FAQ claim check: foundation ~3 weeks, growth 4–6 weeks, premium 10–14 weeks timelines are accurate
- [ ] Closing CTA (dark) heading "Tell me the problem. I'll take it from there." + body; primary "Launch your vision" → `/launch-your-vision` (no secondary)
- [ ] Sticky CTA (mobile): "Request a proposal" → `/launch-your-vision`, starting price $7,500
- [ ] JSON-LD: BreadcrumbList, FAQPage, and Service schema with 3 offers (Business Website $7,500 / Custom Website $10,000 / eCommerce $12,000) all present and prices consistent with visible copy
- [ ] Voice check: first-person, plain, no AI-tells or self-praise — copy reads as Richard

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
- [ ] Meta title & description accurate — title "Custom Website Design Brisbane, Built to Last | RAVENCI"; description ends "From $7,500."
- [ ] Breadcrumbs correct (if present) — Home / Website Design & Development

## Notes
-
