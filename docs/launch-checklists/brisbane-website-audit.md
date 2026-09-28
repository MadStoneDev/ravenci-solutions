# Brisbane Website Audit — Launch Checklist

**Route:** `/brisbane-website-audit` · **Source:** `src/app/brisbane-website-audit/page.tsx` (data: `src/data/brisbane-audit.ts`, form: `src/components/audit-report-gate.tsx`) · **Purpose:** Original-research landing page presenting the audit of 50 Brisbane business websites, gating a downloadable PDF report.

Screenshots (if present): `dod-screens/desktop-1440/{light,dark}/brisbane-website-audit.png`, `dod-screens/mobile-390/{light,dark}/brisbane-website-audit.png`

## Content
- [ ] H1 reads "I audited 50 Brisbane business websites"; sub "The results were worse than I expected."
- [ ] Hero intro claims: 50 randomly selected sites, 7 industries, Jan–Feb 2026, average mobile PageSpeed 38/100
- [ ] Headline stats grid (10 stats) reads correctly: 72% below 50 PageSpeed mobile · 64% no structured data · 58% slower than 4s mobile · 46% missing/duplicate meta · 42% SSL issues · 38% failed accessibility · 34% outdated CMS · 28% no mobile nav · 22% broken links/404s · 18% no analytics
- [ ] RAVENCI counters render on the two flagged stats: "RAVENCI: 100% have SSL" (42% stat) and "RAVENCI: 100% have analytics" (18% stat)
- [ ] Category breakdown scores: Performance 38/100 (RAVENCI 87) · SEO 42/100 (RAVENCI 92) · Mobile Usability 51/100 · Security 55/100 (RAVENCI 100) · Accessibility 44/100 (RAVENCI 87)
- [ ] Industry bars: Trades & Construction 31 (12 sites) · Healthcare 41 (8) · Professional Services 44 (10) · Hospitality 36 (7) · Retail 39 (6) · Real Estate 47 (4) · Education 52 (3) — no industry averages above 52
- [ ] Five key takeaways render (speed, AI-search invisibility, security, accessibility, low bar)
- [ ] "About this research" FAQ (accordion): selection method, tools used (PageSpeed Insights, Lighthouse, Screaming Frog, WAVE, SSL Labs, Observatory by Mozilla), anonymity, self-check
- [ ] CTA — form "Get the report" → POST `/api/audit-report-request` (name + email, reCAPTCHA v3); success links to `/brisbane-website-audit/report`
- [ ] CTA — "Free Visibility Check" → `/launch-your-vision`
- [ ] CTA — "See my website design packages" → `/web-development`
- [ ] Brand spellings correct in RAVENCI sample notes: DIRT (all caps), GoingDark (one word)
- [ ] ⚠️ Voice/attribution inconsistency: H1 and body are first person ("I audited"), but Article JSON-LD `headline` is "We Audited 50 Brisbane Business Websites: Here's What We Found" and its `description` uses "RAVENCI Solutions audited". Pick one voice — Richard's standard is first person.
- [ ] ⚠️ Verify the audit is genuine original research: 50 sites, dates Jan–Feb 2026, and every percentage must be a real measured result, not illustrative. This page is the site's flagship proof asset — invented stats here are a credibility risk.
- [ ] ⚠️ Verify the RAVENCI comparison averages (Performance 87, SEO 92, Security 100, Accessibility 87) are real PageSpeed/audit measurements from the named case studies (Peninsula Homes, DIRT, GoingDark, Cadeaurable, Nikita Morell), not estimates. Security shows 100/100 with no sample size in the data.

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
- Three JSON-LD blocks present: BreadcrumbList, Article, FAQPage. The Article block is the source of the "We" voice mismatch above.
- Two stat sections and both CTAs render inside `dark`-forced sections; the dark-theme checks apply in both light and dark OS settings.
