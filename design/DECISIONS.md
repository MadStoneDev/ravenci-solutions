# Redesign — content & claims decisions (Richard's rulings, §1.3)

Source of truth for copy during the build. The artboards use placeholders and,
in places, invented values; **where they disagree with the live site, the site
wins.** Genuine copy only — never illustrative/example figures, never dummy
names. No AI-tells anywhere (see repo voice standard).

## Conflicts — resolved to the live site's values

| Item | Ship this (site truth) | Not this (artboard) |
|---|---|---|
| GoingDark — +12.5% | **Organic search traffic** grew 12.5% | ~~conversion rate~~ |
| GoingDark — +57% | **Average session duration** jumped 57% | ~~organic sessions~~ |
| GoingDark — +38.5% | **Purchaser rate** up 38.5% (matches) | — |
| GoingDark — platform | Inherited a sluggish **BigCommerce** store; **migrated to Shopify**, launched Shopify **27 Jan 2025** | ~~"took over an existing Shopify store"~~ |
| Accessibility claim | **WCAG 2.1 AA** (public copy) | ~~WCAG 2.2 AA~~ — see note |

*WCAG note:* public copy stays **2.1 AA** (site truth). The new component layer
(visible focus, 44px targets, reduced-motion) actually meets the 2.2 additions,
so we *can* upgrade the public claim to 2.2 AA after the redesign — only if
Richard confirms he wants to. Build to 2.2 criteria regardless (harmless).

## New claims — confirmed / corrected

- **"10 years in steel detailing & drafting"** — ✅ TRUE. Richard's real
  background: **Bachelor's Degree in Structural Engineering** + industry work as
  an engineer, then **5 years in steel detailing during uni**, then **5 years in
  structural drafting** after. Frame it accurately, e.g. "five years detailing
  steel, five drafting structures" — a decade, not a vague boast.
- **Peninsula Homes memberships** — ❌ NOT HIA. They are members of the
  **Master Builders Association (MBA)** and **Master Builders Green Living**.
  Replace the "HIA Member" tag with these two.
- **Build timeline** — "from 3 weeks" is a **floor, sign-off to live**, NOT a
  fixed weekly schedule. Meaning (Richard, 2026-09-21): when the **design is
  already provided** and the site is **smaller**, he can build and launch in
  about 3 weeks; it **scales up** with the size of the site and whether he's
  doing the design too. Do NOT present a rigid "WK1 discovery / WK2 strategy /
  WK3 design…" grid — it contradicts the floor. Present the stages (discovery/
  design compress or drop when design is provided) with the honest "from 3
  weeks, scales with size" framing; exact timeline scoped with the fixed price.
  **Canonical stages (Richard's words):** design sign-off → development → first
  look (~3 weeks) → two rounds of feedback → final touches → go live. The
  "3 weeks" is the **first-look** milestone, not go-live.
- **Video training included** — ✅ TRUE. Richard provides training videos for
  every site he builds — any CMS, and even custom builds. Safe to claim; frame
  as "training videos for your site, whatever it's built on."
- **GoingDark methodology line** — keep it conservative/defensible. Use the
  site's real framing (relaunched on Shopify 27 Jan 2025; results by ~April,
  three months in). Do **not** assert a specific "Shopify Analytics + GA4, 90
  days vs prior 90" source/window unless it's genuinely how the numbers were
  measured. Nothing suspicious.
- **Illustrative figures** ("$40M projects", "seven-figure build", "$4,000
  buyer") — ❌ remove. Genuine copy only; no example numbers.

## Placeholders — fill from live site data, never dummy

- **2nd homepage testimonial / construction testimonial** — use real quotes from
  `src/data/testimonials.ts` / case studies. Confirmed real: Geoff Beisler
  (Green Earth Trees), Adam **Bisset** (Covenant Security). Artboard's "Adam
  Bloor / Interserv" is fake — do not use. Each testimonial appears once site-wide.
- **Nikita Morell quote (CasePremium), Peninsula 2nd metric** — use the real
  value if it exists in the data; if it genuinely doesn't exist yet, leave a
  clearly-labelled placeholder for Richard — never invent one.
- **PageSpeed [SCORE]** — from the live PSI API (Richard adding the key).
- **"[YOUR SYSTEM]" chip** — intentional UI prompt inviting the visitor to name
  their tool; keep as UI copy, not a claim.

## Standing rule (whole build)
Genuine copy only. No AI-tells, no corny self-praise. Match Richard's plain,
first-person voice (his articles are the standard).

**Purple rule (Richard, 2026-09-21):** RAVENCI Purple **#8E1A80** is the ONLY
purple. Never a different purple as a default — the design system's lighter
dark-accent #D57ACA is **retired** (like #7F1670). Tints/opacity are fine for
hover and effects, never as the default colour. Consequence on charcoal: purple
is used as a **fill** (white text on it) or a mark/rule — never as body/link/
label text there, where #8E1A80 wouldn't meet contrast; use paper/muted text
instead. `--accent` = #8E1A80 in both themes.

## Accuracy — resolved
Richard's qualification is a **Bachelor's Degree in Structural Engineering**.
The live About page's "degree" wording is correct — keep it. Never call it a
"certificate".
