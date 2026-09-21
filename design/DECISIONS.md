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
- **Build timeline** — do NOT ship a flat "six weeks, typically." Anchor as
  **"from 3 weeks"** and pair with the honest per-tier ranges already published
  (Foundation ~3 wks · Growth 4–6 · Premium 10–14). Show the WK-by-WK schedule
  as *an example* of a typical build, not a fixed promise. **Confirmed: use
  "from 3 weeks."**
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

## Accuracy — resolved
Richard's qualification is a **Bachelor's Degree in Structural Engineering**.
The live About page's "degree" wording is correct — keep it. Never call it a
"certificate".
