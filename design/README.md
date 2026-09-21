# RAVENCI redesign — export for Claude Code

Drop this folder anywhere inside the `ravenci.solutions` repo (e.g. `design/`),
then point Claude Code at it:

```
Read design/BRIEF.md and implement the RAVENCI redesign.
Start with section 10, step 1.
```

## Contents

```
BRIEF.md                    The implementation brief. Start here.
tokens/
  globals.css               Colour, geometry, elevation and motion tokens,
                            light + dark, plus Tier A CSS animations and the
                            reduced-motion block.
  tailwind.config.ts        theme.extend fragment reading those tokens.
  fonts.ts                  next/font setup for Archivo + JetBrains Mono.
  motion.ts                 Easing, duration and spring constants for the
                            three Tier B components.
reference/
  canvas.json               Artboard layout + the three Tier B spec notes.
  DesignSystem.dc.html      Tokens, type scale, motion tiers, components.
  Main.dc.html              Homepage, desktop 1440.
  HomeMobile.dc.html        Homepage, mobile 390.
  ServicesOverview.dc.html  Services overview + full pricing.
  ServiceWebDev.dc.html     Service template (Web Development).
  IndustryConstruction.dc.html  Industry template (Construction).
  Article.dc.html           Article layout.
  CaseResults.dc.html       Case study, variant A — results-driven.
  CaseVisual.dc.html        Case study, variant B — visual showcase.
  CasePremium.dc.html       Case study, variant C — premium.
```

## About the reference files

They're plain HTML and open in any browser. They are a **picture of the
intended result**, not source to copy:

- Styles are inline and values are literal hex, because they came out of a
  design canvas. The real build uses the tokens in `tokens/`.
- They carry an `<x-dc>` wrapper and a trailing `<script type="text/x-dc">`
  block from the canvas format. Ignore both — except in `Main.dc.html` and
  `ServiceWebDev.dc.html`, where that script holds the real content for the
  platform selector and the FAQ.
- Device mockups are drawn as blocks. They're slots for `next/image`
  screenshots of real client work.
- Anything in `[SQUARE BRACKETS]` is a placeholder Richard still has to fill.
  See BRIEF.md §9.

The live canvas, which is easier to read than the raw files, is the "RAVENCI —
site redesign" artifact in Richard's Claude artifact gallery.
