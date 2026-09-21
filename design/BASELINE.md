# Performance baseline — ravenci.solutions (pre-redesign)

Per README §1.1, every later step is measured against this. Measured
**2026-09-21** via the PageSpeed Insights API (Lighthouse, server-side) with the
project's `PAGESPEED_API_KEY`. Mobile = Moto G Power / slow-4G throttling (harsh
but the number the guarantee is judged on); desktop unthrottled.

## Scores

| Page | Strategy | Perf | A11y | Best-Pr | SEO | LCP | CLS | TBT | FCP |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `/` | **Mobile** | **84** | 90 | 92 | 100 | 2.4 s | 0.008 | 410 ms | 1.2 s |
| `/` | Desktop | 100 | 91 | 92 | 100 | 0.6 s | 0.006 | 40 ms | 0.3 s |
| `/web-development` (service) | **Mobile** | **71** | 95 | 92 | 100 | 1.7 s | 0 | 1,400 ms | 1.1 s |
| `/case-studies/goingdark` (case) | **Mobile** | **54** | 95 | 92 | 100 | 10.2 s | 0 | 160 ms | 9.0 s |
| `/healthcare` (industry) | **Mobile** | **36** | 95 | 92 | 100 | 10.3 s | 0 | 890 ms | 9.3 s |

## Headline findings

- **The 85+ PageSpeed guarantee is not being met on mobile.** Homepage is **84**
  (one point under its own printed promise); the service page is 71, the case
  study 54, the industry page 36. Desktop homepage is a clean 100. This is the
  single most important thing the redesign has to fix — the guarantee is public
  copy on the site.
- **CLS is excellent everywhere** (≤0.008). Layout stability is not the problem;
  the redesign must not regress it (watch font swap + hero assembly).
- **A11y 90–95, Best-Practices 92, SEO 100** across the board — solid starting
  point; the redesign should push A11y to 100 (WCAG work in BRIEF §6).

## Biggest contributors to fix

- **Case study & industry pages: ~9 s FCP / ~10 s LCP on mobile.** Something is
  render-blocking / very heavy above the fold (large unoptimised imagery and/or
  client JS). These are the worst offenders and the highest-ROI fixes — the
  data-driven templates (BRIEF §8) are where this gets rebuilt.
- **Service page: 1,400 ms TBT.** Main-thread JS blocking; the restyle should
  shed client components / third-party weight where it can.
- **Homepage mobile LCP 2.4 s + TBT 410 ms.** Removing the hero `<video>` and its
  raster poster (README §4 / BRIEF §5.1) and moving to the SVG `HeroBuild` should
  claw back the point needed to clear 85, provided Tier B stays dynamically
  imported.

## Budget rule (DoD §5)
Each redesigned page must land **PageSpeed mobile ≥ 85** and **not below** its
figure above. In practice: homepage ≥ 85 (from 84), service ≥ 85 (from 71), and
the case/industry templates need the largest gains (from 54 / 36).

## Method notes
- Re-run any page: `runPagespeed?url=<page>&strategy=mobile&category=PERFORMANCE&…&key=$PAGESPEED_API_KEY`.
- Same API feeds the live homepage gauge (README §4) — fetch server-side, cache
  ~24 h, show best-of-last-3, never client-side.
