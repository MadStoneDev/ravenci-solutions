# Launch checklists — page by page

Tick-off lists for reviewing every page before the redesign goes fully live.
One file per page. Each file has three blocks: **Content** (specific to that
page), **Design & responsive** (the DoD §11 items, same on every page), and
**Links & meta**.

How to use: open a page in the browser (`npm run dev`, then the route), open its
checklist beside it, and work down the boxes. Screenshots for each page are in
`dod-screens/<viewport>/<theme>/<name>.png` if you'd rather scan them.

## Issues flagged while building these checklists (fix or confirm before launch)

Found by reading every page's source. Each links to the page checklist that has the detail. Tick as resolved.

### Correctness — things that are broken or contradictory
- [ ] **`/construction` links to a hidden case study.** Card → `/case-studies/coast-remedial-solutions`, which is `hidden: true`, so it likely 404s. Remove the card or un-hide. → [construction.md](construction.md)
- [ ] **Labs page reads the wrong data file.** `src/app/labs/page.tsx` imports `src/data/labs.ts`, NOT `lab-projects.ts` (which is dead code, imported nowhere). JustReel lives only in the dead file and never renders. Add JustReel to `labs.ts` if wanted; delete `lab-projects.ts`. → [labs.md](labs.md)
- [ ] **Labs: TheJury & JustTerms have empty `url`** → render as dead cards with no destination. → [labs.md](labs.md)
- [ ] **`business-design` & `mobile-apps` still use the OLD design system** with full **purple background** sections (`bg-ravenci-primary` = #8E1A80) — violates the "no purple background" DoD rule and looks inconsistent with the redesign. → [business-design.md](business-design.md), [mobile-apps.md](mobile-apps.md)
- [ ] **Quote → installment-plan copy is unreachable.** `/quote/success` has a full payment-plan branch, but the configurator only ever sends "Pay Now." Dead copy or missing option. → [quote-success.md](quote-success.md)
- [ ] **Backup add-ons contradict themselves** — description says "You do not need this if hosting with RAVENCI" on a paid add-on. → [quote.md](quote.md)
- [ ] **Launch-your-vision still offers "Mobile app"** as a project type — conflicts with dropping mobile apps. → [launch-your-vision.md](launch-your-vision.md)
- [ ] **Calendly CTA is a placeholder** (`calendly.com/ravenci`, no env var set) on the high-budget success path. → [launch-your-vision.md](launch-your-vision.md)
- [ ] **`business-design`: "Unlimited Revisions"** contradicts the package detail below it ("3 revisions"). → [business-design.md](business-design.md)
- [ ] **`web-hosting` typo:** "...in minutes. In minutes, not days" (duplicated). → [web-hosting.md](web-hosting.md)

### Content accuracy & consistency — confirm the real number/wording
- [ ] **Years of experience is inconsistent:** "25 years" (home founder note), "25+ years" (about, case-studies, industry stats), "25+" (how-to-choose) vs your "20+ years." Pick one. → [home.md](home.md), [about.md](about.md)
- [ ] **"75+ Australian businesses"** (about, case-studies, business-design, web-hosting, industries) — confirm that's the figure you want public (vs ~100 clients / 467 projects). → [about.md](about.md)
- [ ] **Pricing below the $7,500 floor:** medical-practice guide FAQ quotes "$5,000–$15,000." Also reconcile scattered prices ($39 / $249 / $269 / $495 / $10k vs $9.5k mid-tier) against the pricing restructure. → [medical-practice-website-requirements.md](medical-practice-website-requirements.md), [pricing.md](pricing.md)
- [ ] **Peninsula "80% Work from referrals"** (home) comes from the excerpt, not the case study's metrics — verify. → [home.md](home.md)
- [ ] **Audit stats must be verified genuine** — the 50-site Brisbane audit is your flagship proof; every % and the RAVENCI comparison averages need to be real measurements. → [brisbane-website-audit.md](brisbane-website-audit.md)
- [ ] **Voice slips to "we"** on quote/success and the audit pages — your standard is first-person "I." → [quote-success.md](quote-success.md), [brisbane-website-audit.md](brisbane-website-audit.md)
- [ ] **Decorative/invented metrics:** business-design "5–10x trust factor"; custom-vs-template "4x return"; how-to-choose absolute claims ("never had a contested handover"). → [business-design.md](business-design.md), [custom-vs-template.md](custom-vs-template.md)
- [ ] **free-audit:** turnaround inconsistent on one page ("2–3 days" / "two days" / "one day"); name drift ("audit" vs "visibility report"). → [free-audit.md](free-audit.md)
- [ ] **our-process package names** (Foundation/Growth/Premium) don't match Pricing tier names. → [our-process.md](our-process.md)
- [ ] **web-apps meta title** lacks a Brisbane/location keyword unlike other service pages. → [web-apps.md](web-apps.md)

### Housekeeping
- [ ] **Privacy & Terms pages last updated April 2021** — stale, US-generic template wording, stray space in `mailto:`, no ABN/entity details. → [privacy-policy.md](privacy-policy.md), [terms-and-conditions.md](terms-and-conditions.md)
- [ ] **quick-support:** GetScreen.me invite token hard-coded in client source — confirm it's current and OK to expose. → [quick-support.md](quick-support.md)
- [ ] **"coming-soon" placeholder images** in several case-study galleries — confirm they don't render as broken frames. → [tmpl-case-study.md](tmpl-case-study.md)
- [ ] **retainer-packages:** Geoff Beisler's company is silently dropped (renders `role`, which he doesn't have). → [retainer-packages.md](retainer-packages.md)

## The DoD §11 bar (every page must pass)

- [ ] Renders correctly at **390px** (phone) — no horizontal scroll
- [ ] Renders correctly at **1440px** (desktop)
- [ ] **Light theme** correct
- [ ] **Dark theme** correct — purple only as a fill or mark, text is paper (never purple text on charcoal)
- [ ] **Keyboard-navigable** end to end, focus always visible
- [ ] **Reduced-motion**: final state shown, nothing hidden
- [ ] No purple background, gradient, or hard-offset shadow
- [ ] All images through `next/image`
- [ ] **PageSpeed ≥ 85** mobile

The harness already checks focus, reduced-motion, dark-contrast and renders
automatically: `npm run dod`. PageSpeed is still a manual check per page.

## Standing content rules (apply on every page)

- [ ] Genuine copy only — no invented numbers, no placeholder left visible
- [ ] No AI-tells, no corny self-praise ("clever", "smart", "most developers would…")
- [ ] Matches Richard's plain, first-person voice (the articles are the standard)
- [ ] Case studies lead with the **client's** business, not the tech stack
- [ ] Brand spellings exact: **GoingDark** (one word), **DIRT** (caps), **NNAccountability**
- [ ] RAVENCI Purple **#8E1A80** only (no other purple, no #D57ACA)

## Pages

_Status: ⬜ not started · 🔶 in review · ✅ done_

| Status | Page | Route | Checklist |
|---|---|---|---|
| ⬜ | Home | `/` | [home.md](home.md) |
| ⬜ | About | `/about` | [about.md](about.md) |
| ⬜ | Our Process | `/our-process` | [our-process.md](our-process.md) |
| ⬜ | Pricing | `/pricing` | [pricing.md](pricing.md) |
| ⬜ | Retainer Packages | `/retainer-packages` | [retainer-packages.md](retainer-packages.md) |
| ⬜ | Case Studies (index) | `/case-studies` | [case-studies.md](case-studies.md) |
| ⬜ | Labs | `/labs` | [labs.md](labs.md) |
| ⬜ | Web Development | `/web-development` | [web-development.md](web-development.md) |
| ⬜ | eCommerce | `/ecommerce` | [ecommerce.md](ecommerce.md) |
| ⬜ | Business Design | `/business-design` | [business-design.md](business-design.md) |
| ⬜ | SEO & Content | `/seo-and-content` | [seo-and-content.md](seo-and-content.md) |
| ⬜ | Web Hosting | `/web-hosting` | [web-hosting.md](web-hosting.md) |
| ⬜ | Website Maintenance | `/website-maintenance` | [website-maintenance.md](website-maintenance.md) |
| ⬜ | Mobile Apps | `/mobile-apps` | [mobile-apps.md](mobile-apps.md) |
| ⬜ | Web Apps | `/web-apps` | [web-apps.md](web-apps.md) |
| ⬜ | Construction (industry) | `/construction` | [construction.md](construction.md) |
| ⬜ | Healthcare (industry) | `/healthcare` | [healthcare.md](healthcare.md) |
| ⬜ | Professional Services (industry) | `/professional-services` | [professional-services.md](professional-services.md) |
| ⬜ | Case Study template | `/case-studies/[slug]` | [tmpl-case-study.md](tmpl-case-study.md) |
| ⬜ | Article template | `/articles/[slug]` | [tmpl-article.md](tmpl-article.md) |
| ⬜ | Medical Practice Requirements | `/medical-practice-website-requirements` | [medical-practice-website-requirements.md](medical-practice-website-requirements.md) |
| ⬜ | Launch Your Vision | `/launch-your-vision` | [launch-your-vision.md](launch-your-vision.md) |
| ⬜ | Quote | `/quote` | [quote.md](quote.md) |
| ⬜ | Quote Success | `/quote/success` | [quote-success.md](quote-success.md) |
| ⬜ | Build Only | `/build-only` | [build-only.md](build-only.md) |
| ⬜ | Quick Support | `/quick-support` | [quick-support.md](quick-support.md) |
| ⬜ | Free Audit | `/free-audit` | [free-audit.md](free-audit.md) |
| ⬜ | Gated Audit | `/audit/[token]` | [tmpl-audit.md](tmpl-audit.md) |
| ⬜ | Brisbane Website Audit | `/brisbane-website-audit` | [brisbane-website-audit.md](brisbane-website-audit.md) |
| ⬜ | Brisbane Audit Report | `/brisbane-website-audit/report` | [brisbane-website-audit-report.md](brisbane-website-audit-report.md) |
| ⬜ | Cost of a Website in Brisbane | `/cost-of-a-website-in-brisbane` | [cost-of-a-website-in-brisbane.md](cost-of-a-website-in-brisbane.md) |
| ⬜ | Custom vs Template | `/custom-vs-template` | [custom-vs-template.md](custom-vs-template.md) |
| ⬜ | How to Choose a Web Designer | `/how-to-choose-a-web-designer-in-brisbane` | [how-to-choose-a-web-designer-in-brisbane.md](how-to-choose-a-web-designer-in-brisbane.md) |
| ⬜ | WordPress vs Shopify vs Custom | `/wordpress-vs-shopify-vs-custom` | [wordpress-vs-shopify-vs-custom.md](wordpress-vs-shopify-vs-custom.md) |
| ⬜ | Accessibility Statement | `/accessibility-statement` | [accessibility-statement.md](accessibility-statement.md) |
| ⬜ | Privacy Policy | `/privacy-policy` | [privacy-policy.md](privacy-policy.md) |
| ⬜ | Terms & Conditions | `/terms-and-conditions` | [terms-and-conditions.md](terms-and-conditions.md) |
