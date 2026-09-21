# RAVENCI — site redesign implementation brief

For Claude Code, working in the existing `ravenci.solutions` Next.js 15 App Router /
React 19 / Tailwind 3.4 codebase.

Visual reference: the ten artboards in `reference/`. They are static HTML — a
faithful picture of the intended result, not code to copy. Read the relevant
artboard before building a page, then build it with the real components.

---

## 0. Read this first

**Positioning.** RAVENCI is moving from "someone who builds websites" to
**"the engineer who builds, hosts, secures, optimises and runs your entire web
presence."** Everything on the site should make a construction or medical
business owner think *this person can clearly build anything, and I'd trust
them with our site.*

The site is itself the proof. If a section is slow, janky, inaccessible or
fussy, it argues against the pitch. That is the whole reason for the
constraints in §6.

**Audience.** Established Australian SMBs, $7.5k–$50k+ builds plus retainers.
Construction (developers, builders, architects, engineering firms) and
healthcare (practices, clinics, allied health, medical recruiters) first;
professional services and Shopify/BigCommerce brands second. They are business
owners and practice managers, not designers. They care about reliability, clear
pricing, accountability, and someone who answers the phone.

**Voice.** First person. Plain. Confident. Short sentences. Australian English.
Concrete over abstract. No agency jargon. Two lines carry over from the current
site and should be reused verbatim:

> Built once. Built properly. Still working in five years.

> Right tool for the business, not the agency.

---

## 1. What to install

| File | Goes to | Note |
|---|---|---|
| `tokens/globals.css` | `src/app/globals.css` | Merge the `@layer base` blocks into what's there; don't clobber existing resets. |
| `tokens/tailwind.config.ts` | `tailwind.config.ts` | Merge `theme.extend`. Keep any existing content globs and plugins. |
| `tokens/fonts.ts` | `src/lib/fonts.ts` | Wire the two variables onto `<html>` in the root layout. |
| `tokens/motion.ts` | `src/lib/motion.ts` | Only the three Tier B components import this. |

Then delete, in this order, as pages are migrated:

- the hard-offset / neo-brutalist card shadow utility and every use of it
- full-bleed purple section backgrounds (`bg-purple-*` on a `<section>`)
- any purple gradient, glassmorphism or blob background
- autoplaying testimonial sliders
- the hero `<video>` and its raster poster

---

## 2. Colour discipline (the rule most likely to get broken)

Purple is `--accent` and nothing else. It appears as: interactive states, hover
glows, the raven mark, one hero accent, focus rings, small data highlights, and
the numerals on metrics. It must sit **well under 5% of any viewport**, and it
is **never** a section background and **never** a gradient.

Dark sections are `--background` in `.dark` (`#0F0F12`), not black. Light
sections are paper (`#F6F5F2`). Depth comes from hairline borders
(`border-border`), one-step background changes (`bg-muted`), and at most
`shadow-2`.

Contrast, already checked: `--muted-foreground` is 6.6:1 on paper and 6.1:1 on
charcoal; `--accent` is 7.2:1 on paper; the dark-theme accent is 8.0:1 on
charcoal. If you introduce a new colour pair, verify it before shipping it.

---

## 3. Information architecture

**Primary nav:** Services (dropdown) · Industries (Construction, Healthcare,
eCommerce) · Work · Process · Pricing · About · persistent **Start a project**.
**Secondary (footer):** Articles · Labs.

**Services** — reframed as one package, not a menu:

| Route | Page title (keep for search intent) | Positioning |
|---|---|---|
| `/services/web-development` | Website Design & Development | Engineering, not decoration |
| `/services/ecommerce` | eCommerce | Shopify, BigCommerce, headless, B2B/wholesale portals |
| `/services/web-apps` | Web Apps & Client Portals | Custom tools; CRM, booking, accounting, industry software |
| `/services/build-only` | Have a design? I'll build it | Build-only on the platform that suits |
| `/services/managed-web` | Managed Web | Hosting, security, backups, domains, maintenance, retainers |
| `/services/seo` | SEO / AEO / GEO | Found by Google, quoted correctly by AI |

Pricing stays visible and up front, everywhere it's relevant: **custom sites
from $7,500 · eCommerce from $12,000 · maintenance from $249/mo**. Full table in
`reference/ServicesOverview.dc.html`.

---

## 4. Component inventory

Build these as reusable components with variants. Where an equivalent already
exists in the codebase, restyle it rather than adding a parallel one.

### 4.1 New or substantially reworked

| Component | Variants / props | Reference artboard |
|---|---|---|
| `SiteHeader` | `theme: "light" \| "dark"`, services dropdown, persistent CTA | all |
| `SiteFooter` | full sitemap, phones, LinkedIn, DesignRush, legal, email capture | `Main` |
| `SectionLabel` | `index: string`, `label: string` — renders `01 / BUILD` in mono | all |
| `Button` | `primary \| secondary \| accent \| ghost \| disabled`, min 44px height | `DesignSystem` |
| `MetricsBar` | `items: {value, label}[]`, counts up once on first view (Tier A) | `DesignSystem` |
| `ComparisonTable` | 4 cols desktop / 3 cols mobile, rows stagger in on scroll | `Main`, `HomeMobile` |
| `PricingCard` | `default \| emphasised` | `DesignSystem` |
| `CaseCard` | hover swaps desktop → mobile device preview; touch shows both at rest | `Main` |
| `Testimonial` | single quote, shown **once per site** — no carousel | `DesignSystem` |
| `Accordion` | real `<button aria-expanded>`, 220ms height, icon rotates | `ServiceWebDev` |
| `Breadcrumbs` | | `ServiceWebDev` |
| `StickyCta` | mobile; appears after hero, hides over footer, above cookie banner, respects safe-area inset | `HomeMobile` |
| `PageSpeedGauge` | Tier A CSS counter; value from the PSI API, cached | `Main` |
| `IndustryCard` | `{sector, headline, line, integrations[]}` | `Main` |
| `PlatformSelector` | **Tier B** — see §5.3 | `Main` |
| `StackStory` | **Tier B** — see §5.2 | `Main` |
| `HeroBuild` | **Tier B** — see §5.1 | `Main` |
| `RouteLoading` | hairline progress bar under nav + raven at 40% + `sr-only` "Loading page" | `DesignSystem` |
| `CardSkeleton` | opacity pulse only, 1.6s — no shimmer sweep | `DesignSystem` |
| `CookieConsent` | "Essential only" / "Accept", restyled | `DesignSystem` |

### 4.2 Restyle only — logic, validation and submission untouched

- Visibility check form (name, email, business name, website URL, optional intent select)
- Launch Your Vision multi-step stepper
- Quoting / checkout component
- Audit report gate
- Footer email capture

Take the new field heights (44–48px), mono labels, focus rings, button variants
and stepper progress rail. Change nothing below the presentation layer.

---

## 5. Tier B interactions — the only three

Everything else is Tier A: CSS-only reveals, marquees, hover/focus
micro-interactions, comparison rows. Tailwind utilities plus
`animation-timeline: view()` with a plain transition fallback. Zero JS.

Tier B is Framer Motion, dynamically imported, gated on `useReducedMotion()`.
**Do not use Framer Motion anywhere else on the site.**

### 5.1 Hero build moment — `HeroBuild`

Replaces the current hero video. DOM/SVG only, no raster, no `<video>`. It is
the LCP element, so the assembled state must be the server-rendered markup and
the animation plays from there.

**On mount.** The blueprint assembles:

1. Frame outline draws via `stroke-dashoffset`, 400ms
2. Header bar, hero text blocks, dashed image frame, then the three cards —
   fade + rise 8px, staggered 60ms, in DOM order
3. Dimension lines and mono labels last

Total 1.1s, `EASE.standard`. Starts after first paint.

**Idle.** Cursor parallax. Pointer position maps to ±6px translate on the
dashed frame, ±3px on the card row, ±2px on the outline.
`SPRING.parallax` (damping 30, stiffness 120). On `pointer: coarse`, a 4s
ambient drift instead.

**States.** `initial` (flat) → `assembling` → `idle`. Reduced motion renders
assembled, no parallax, no drift.

### 5.2 Pinned stack story — `StackStory`

The core repositioning section: design → build → host → secure → optimise →
maintain, each with a concrete deliverable.

Pins for 6 × 100vh of scroll. Left column fixed; six step rows advance with
scroll progress.

- **Active row:** full-opacity text, purple index, 7% purple row tint
- **Inactive:** 55% opacity
- Progress rail fills 0→100%, counter reads `01/06` → `06/06`
- Row transition 320ms `EASE.standard`; rail tracks scroll directly, no easing
- Steps snap on cross, they do not crossfade

Scroll-linked via `useScroll` + `useTransform`. **No scroll hijacking** — the
user's scroll speed is the only input.

**States.** before-pin → pinned 01..06 → released. Reduced motion **and** any
viewport under 1024px: no pin, all six rows stacked at full opacity, rail shows
`06/06`.

### 5.3 Platform selector — `PlatformSelector`

Four options: content site / online store / custom app / "I already have a
design". Panel morphs to the recommended stack with a one-line reason.

- Selection moves a shared `layoutId` pill behind the active button,
  `SPRING.pill` (damping 26)
- Panel: current stack name and reason crossfade out 120ms; new content fades
  in +8px over 200ms; the three spec lines stagger 50ms
- Panel height animates to the new content height — it must never jump

**Keyboard.** Arrow keys move between options (roving tabindex), Enter/Space
selects, focus ring always visible. **Touch.** The option row scrolls
horizontally; tap selects.

Selection persists in the URL hash so a recommendation can be linked.

Reduced motion: content swaps instantly, pill jumps, height is not animated.

Content for all four states is in `reference/Main.dc.html`, in the
`<script type="text/x-dc">` block at the bottom — the `DATA` object.

---

## 6. Non-negotiable constraints

**Performance.** 85+ Google PageSpeed is a public guarantee printed on the site.
Hero must not depend on a raster poster. All images through `next/image`. Tier B
bundles dynamically imported. Fonts self-hosted via `next/font` with `swap` and
`adjustFontFallback`. If a change costs more than a couple of PageSpeed points,
it doesn't ship.

**Accessibility — WCAG 2.2 AA.**

- Real `<button>`, `<a href>`, `<input>` + `<label>`. Never `role` or `onClick`
  on a div or span.
- Visible focus on everything: 2px `--ring`, 3px offset, both themes.
- Every icon meaning has a text equivalent; icon-only buttons get `aria-label`.
- Checks and crosses in the comparison table are SVG **with text labels** —
  "Always", "Guaranteed", "Rarely" — not colour or glyph alone.
- Keep the existing `sr-only` loading text.
- Reduced-motion fallbacks on every animation, Tier A included.

**Mobile-first.** Every interactive element has a touch equivalent. Nothing is
hover-only. Test at 390px.

**Imagery.** No stock photography. Device mockups of real client work, line-art,
blueprint motifs, typographic composition. The engineering motif — dimension
lines, tick marks, section labels like `01 / Build` — stays subtle; it nods to
the structural engineering background, it doesn't shout about it.

**Avoid.** Purple gradients. Glassmorphism. Particle backgrounds. Floating 3D
blobs. Autoplaying testimonial sliders. Hard-offset drop shadows. Inter, Roboto,
Arial.

---

## 7. Homepage section order

Reference: `reference/Main.dc.html` (desktop), `reference/HomeMobile.dc.html`
(390px).

1. **Hero** — "Websites engineered to still be working in five years." Subline
   covers the full package. CTAs: *Start a project* / *Free visibility check*.
   `HeroBuild` (§5.1).
2. **Trust strip** — Shopify Partner, BigCommerce Partner, Synergy Wholesale
   Partner, 5.0 Google rating, Since 2018, 25+ years.
3. **One person, the whole stack** — `StackStory` (§5.2). The core section.
4. **Platform selector** — `PlatformSelector` (§5.3).
5. **Industries** — three large cards. Construction: project showcases, tender
   portals, Procore/Xero. Healthcare: HotDoc/Cliniko/Halaxy, patient portals,
   AHPRA-aware content. eCommerce: Shopify/BigCommerce, B2B portals.
6. **Selected work** — 4–6 case studies, device previews, one metric each.
7. **Proof** — 85+ PageSpeed guarantee with live gauge, plus `ComparisonTable`.
8. **Testimonials** — each appearing once.
9. **Founder note** — short, first person, engineering background stated plainly.
10. **Visibility check form** — the lead magnet. Restyle only.
11. **Footer** — full sitemap, phones, Brisbane, LinkedIn, DesignRush, legal,
    email capture.

---

## 8. Templates — all data-driven

### Case study — one template, three variants

Consumes the existing typed case study model: `slug`, `industry`, service tags,
`templateVariant`, `metrics`, `features`. One layout system, three treatments:

| `templateVariant` | Use when | Reference |
|---|---|---|
| `"results"` | Hard numbers exist. Metrics bar leads, directly under the hero; results section carries a chart. | `CaseResults.dc.html` |
| `"visual"` | The work is the argument. Media leads, metrics optional and low on the page. | `CaseVisual.dc.html` |
| `"premium"` | Brand-led, high-value engagements. Editorial pacing, 120px gutters, testimonial carries a section alone. | `CasePremium.dc.html` |

Shared shell in all three: breadcrumbs → hero (title, industry, service tags) →
media → challenge / approach → what I built → results or quote → project details
(client, industry, platform, services) → next case study → CTA → footer.

### Industry page — one template

Props: `industry`, `headline`, `pains[]`, `integrations[]`, `caseStudies[]`,
`testimonial`, `cta`. Mocked as Construction in
`reference/IndustryConstruction.dc.html`. Healthcare and eCommerce are the same
template with different data.

### Service page — one template

Props: `name`, `outcome`, `included[]`, `pricingAnchor`, `relatedWork[]`,
`faq[]`, `ctaVariant`. Mocked as Web Development in
`reference/ServiceWebDev.dc.html`. The FAQ is the `Accordion` component.

### Article

Restyle the existing MDX layout. 680px prose measure, sticky contents rail left,
sticky lead-magnet card right, related articles below. Reference:
`reference/Article.dc.html`.

---

## 9. Content Richard still has to supply

These are marked as visible placeholders in the artboards. Do **not** invent
values for them.

| Placeholder | Where | What's needed |
|---|---|---|
| `[SCORE]` | homepage proof section, gauge and headline | Live PageSpeed Insights score for the site. Fetch server-side, cache ~24h, fall back to the last good value. Copy reads: "This site scores X; yours will score 85+ or I keep working." |
| Second homepage testimonial | homepage §8 | A full quote + name + company. Geoff Beisler / Green Earth Trees is already used for the first. |
| Construction testimonial | industry page | A construction-client quote. Must not be reused from the homepage. |
| Nikita Morell quote | `CasePremium` | On the premium variant the quote carries the whole section — it needs to be real and specific. |
| Peninsula Homes second metric | `CaseVisual` | One more real figure, or drop the slot. |
| Integration list | industry pages | Confirm which of Procore / Xero / MYOB / Deputy / HubSpot / SharePoint / DocuSign are genuinely supported before listing them. |

---

## 10. Suggested build order

1. Tokens, fonts, Tailwind config. Verify both themes render and focus rings appear.
2. `SiteHeader`, `SiteFooter`, `SectionLabel`, `Button`, `Breadcrumbs`,
   `Accordion`, `RouteLoading`, `CookieConsent`. Ship these across existing
   pages first — the site improves before any new page exists.
3. Service template + the six service pages. Highest search value, lowest risk.
4. Case study template and its three variants against the real data model.
5. Industry template; Construction first, then Healthcare and eCommerce.
6. Article restyle.
7. Homepage Tier A sections: trust strip, industries, work, proof, comparison
   table, testimonials, founder note, form restyle.
8. Tier B, last, one at a time, measuring PageSpeed after each:
   `HeroBuild` → `StackStory` → `PlatformSelector`.

---

## 11. Definition of done, per page

- [ ] Renders correctly at 390px and 1440px
- [ ] Light and dark themes both correct
- [ ] Keyboard-navigable end to end, focus always visible
- [ ] `prefers-reduced-motion` renders final state, nothing hidden
- [ ] No purple background, gradient or hard-offset shadow
- [ ] All images through `next/image`, hero has no raster dependency
- [ ] PageSpeed ≥ 85 mobile
- [ ] No placeholder from §9 left visible in production
