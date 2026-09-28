# Free Audit — Launch Checklist

**Route:** `/free-audit` · **Source:** `src/app/free-audit/page.tsx`, `src/components/visibility-check-form.tsx` (data: `src/data/brisbane-audit.ts`) · **Purpose:** Lead-gen landing page offering a free five-category website audit; form emails Richard the details.

Screenshots (if present): `dod-screens/desktop-1440/{light,dark}/free-audit.png`, `dod-screens/mobile-390/{light,dark}/free-audit.png`

## Content
- [ ] Breadcrumb "Free Website Audit"; SectionLabel "Five-category website audit"; H1 "A free website audit for your Brisbane business"
- [ ] Hero lead pulls real numbers from `AUDIT_META`: "50 Brisbane businesses in January to February 2026" (speed, SEO, mobile, accessibility, security); three tick badges (Real human review / Plain-English report / 2 to 3 business days)
- [ ] Form section H2 "Get your audit" with "Four fields, thirty seconds" intro
- [ ] Form fields (all four required): Your name, Email (type=email), Business name, Website URL (type=url); plus optional "What are you after?" select (Considering a rebuild / Wanting to fix specific issues / Comparing agencies / Just exploring / Not sure yet)
- [ ] Submit "Get my free report" posts to `/api/visibility-check` with a reCAPTCHA v3 token (action `visibility_check`)
- [ ] Verify required-field validation: browser blocks submit with any of the four required fields empty or an invalid email/URL
- [ ] Loading state: spinner + "Sending..."; button disabled
- [ ] Success state replaces the form: "Request received" + "I'll review your website and send your free visibility report within two business days."
- [ ] Error state: message shown in a destructive-bordered box; form stays populated for retry
- [ ] Fine print under button: "Sent by me, usually within a business day. No mailing list, no follow-up sequence. Protected by reCAPTCHA."
- [ ] ⚠️ Timeframe is inconsistent across the page: hero badge + "Get your audit" intro + final CTA say "2 to 3 business days", the form success message says "within two business days", and the fine print says "usually within a business day". Pick one promise and make it consistent
- [ ] ⚠️ Naming drift: the page sells a "website audit"/"report", but the form success calls it a "free visibility report" (matching the gated `/audit/[token]` template titled "Visibility Audit"). Confirm whether it's an "audit" or a "visibility report" and align the labels
- [ ] "What I check" section: 5 category cards (Speed & Core Web Vitals, SEO & AI Visibility, Mobile Usability, Accessibility, Security) with real descriptions
- [ ] "Why it matters" dark section pulls `auditStats` (first 6) and `AUDIT_META` (50 sites, 7 industries); link "Read the full audit research" → `/brisbane-website-audit`
- [ ] "How it works" 3 steps; FAQ accordion (5 Q&As) — confirm the "50 Brisbane businesses in 2026" reference stays factual against the research
- [ ] Final CTA (dark) "Ready when you are" button → `#audit-form` (anchor scrolls back to the form)
- [ ] JSON-LD emitted: FAQPage, Service (price 0 AUD, areaServed Brisbane), BreadcrumbList
- [ ] Copy is plain first-person, no self-praise, no placeholders/TODOs; stats are the real audit numbers only

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
- Two sections use the `dark` class regardless of theme (intentional dark bands) — verify purple is fill-only and text stays paper in both OS themes.
- reCAPTCHA token is optional in code; confirm the provider is mounted so a token is sent in production.
