# Home — Launch Checklist

**Route:** `/` · **Source:** `src/app/page.tsx` (+ `src/components/hero-build.tsx`, `src/components/stack-story.tsx`, `src/components/platform-selector.tsx`, `src/components/visibility-check-form.tsx`, `src/data/case-studies.ts`, `src/lib/pagespeed.ts`) · **Purpose:** Primary landing page — the whole-stack pitch, work, proof, pricing teaser and free visibility-check lead form.

Screenshots (if present): `dod-screens/desktop-1440/{light,dark}/home.png`, `dod-screens/mobile-390/{light,dark}/home.png`

## Content
- [ ] Hero H1 reads exactly: "Websites engineered to still be working in five years."
- [ ] Hero subcopy: "Designed, developed, hosted, secured, optimised and maintained. One engineer, one number to call, accountable for the whole stack."
- [ ] Hero CTA "Start a project" → `/launch-your-vision`
- [ ] Hero CTA "Free visibility check" → `#visibility-check` (in-page anchor to the form section)
- [ ] Hero claim line: "From $7,500 · 85+ PageSpeed, guaranteed · Brisbane"
- [ ] HeroBuild animated blueprint card renders finished state under reduced-motion (counts LCP 0.9s / 85+ PageSpeed / WCAG 2.1 AA); it is `aria-hidden` so meaning lives in the hero text
- [ ] Trust strip lists partners: "Shopify Partner", "BigCommerce Partner", "Synergy Wholesale Partner" (spellings exact)
- [ ] Trust strip: "5.0 from Google reviews" and "Since 2018"
- [ ] Stack-story section label "The whole stack", H2 "One person, the whole stack."
- [ ] Stack-story intro: "Most agencies hand you off... I do all six steps, so nothing falls between them."
- [ ] 6 stack steps present with copy: 01 Design, 02 Build, 03 Host (from $39/mo, 99.9% uptime), 04 Secure, 05 Optimise (SEO/AEO/GEO), 06 Maintain (retainer from $249/mo)
- [ ] Stack-story closing line: "Built once. Built properly. Still working in five years."
- [ ] Platform selector H2: "Right tool for the business, not the agency."
- [ ] Platform option 01 "A content site people read" → WordPress + RAVENCI Builder — FROM $7,500
- [ ] Platform option 02 "An online store" → Shopify, or BigCommerce for big catalogues — FROM $12,000
- [ ] Platform option 03 "A custom app or client portal" → Next.js 15, React + Postgres — QUOTED ON SCOPE
- [ ] Platform option 04 "I already have a design" → Build-only — QUOTED ON PAGES
- [ ] Platform selector CTA "Get a recommendation" → `/launch-your-vision`
- [ ] Industries H2: "I know your software before you name it."
- [ ] Industry card Construction (chips Procore, Xero, Tender portal) → `/construction`
- [ ] Industry card Healthcare (chips HotDoc, Cliniko, AHPRA-aware) → `/healthcare`
- [ ] Industry card eCommerce (chips Shopify, BigCommerce, B2B portal) → `/ecommerce`
- [ ] Selected work H2: "Built for Australian businesses. Measured after launch."
- [ ] Featured work: GoingDark — "+38.5% Purchases" → `/case-studies/goingdark` (one-word GoingDark)
- [ ] Featured work: Peninsula Homes — "80% Work from referrals" → `/case-studies/peninsula-homes`
- [ ] ⚠️ Verify Peninsula "80% Work from referrals" metric — it comes from the excerpt, not from the case study's own results metrics (2 yrs / 94 / 0.8s); confirm the 80% figure is accurate and current
- [ ] Featured work: Nikita Morell (no metric shown) → `/case-studies/nikita-morell`
- [ ] Compact work: Covenant Security — "Brand identity, print, vehicle signage" → `/case-studies/covenant-security-solutions`
- [ ] Compact work: SAC Consulting — "Web development" → `/case-studies/sac-consulting`
- [ ] Compact work: Cadeaurable — "Branding, stationery, eCommerce" → `/case-studies/cadeaurable`
- [ ] "All case studies" link → `/case-studies`
- [ ] Work thumbnails pull `cardImage`/`featuredImage` from case-studies data (via `WorkThumb`)
- [ ] Proof section (dark, `id="pricing"`): live PageSpeed score circle renders from `getHomepagePageSpeed()`
- [ ] ⚠️ Confirm live PageSpeed fetch returns a real score ≥ 85 at launch; headline "This site scores {score}. Your site will score 85+ or I keep working." must read correctly (and degrade cleanly if score is null)
- [ ] Proof copy: "Not a target. A written guarantee on every build. Performance is a structural decision..."
- [ ] Comparison table has 6 rows across RAVENCI / Typical agency / DIY builder: person building it; 85+ PageSpeed in writing; you own code/content/domain; hosting from $39/mo; plugin clutter (15 to 30 plugins); still working in five years
- [ ] Pricing summary line: "Custom sites from $7,500 / eCommerce from $12,000 / maintenance from $249/mo"
- [ ] "See full pricing" link → `/pricing`
- [ ] Testimonial 1: Geoff Beisler · Green Earth Trees (labelled "5.0 · Google review"), quote begins "I could not recommend Richard more highly..."
- [ ] Testimonial 2: Adam Bisset · Covenant Security Solutions (labelled "Client"), quote begins "Our brand new startup is launching with the best possible website..."
- [ ] Founder note: "RH" avatar, "Richard Haddad", "Founder · RAVENCI Solutions"
- [ ] Founder copy: "I trained as a structural engineer... Ten years in steel detailing and structural drafting..." and "building for the web for 25 years and running RAVENCI from Brisbane since 2018"
- [ ] ⚠️ Founder note says "building for the web for 25 years"; About/case-studies stats say "25+ years" — confirm the plain "25 years" is intended here
- [ ] "More about how I work" link → `/about`
- [ ] Visibility check (dark) H2: "Can Google and AI actually find you?"
- [ ] Visibility check 3 bullets: Technical SEO and Core Web Vitals; How AI assistants describe your business; What your three nearest competitors are doing
- [ ] Visibility check form fields render: Your name, Email, Business name, Website URL, "What are you after?" (optional select), submit "Get my free report"
- [ ] Form success state message: "I'll review your website and send your free visibility report within two business days."
- [ ] Form footnote: "Sent by me, usually within a business day. No mailing list, no follow-up sequence. Protected by reCAPTCHA."
- [ ] Accent purple is RAVENCI Purple #8E1A80 only (metric text, chips, table highlight)

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
- [ ] Meta title & description accurate ("Custom Website Design Brisbane | RAVENCI Solutions"; description mentions "A structural engineer's approach, built properly, still working in five years.")
- [ ] Breadcrumbs correct (if present) — none on home

## Notes
- Pinned scroll-story on the stack section is desktop + motion-on only; SSR/mobile/reduced-motion render the full stacked list. Confirm all six steps are visible statically.
- The Proof section anchor is `id="pricing"` and the visibility form anchor is `id="visibility-check"`; the stack section is `id="process"`.
