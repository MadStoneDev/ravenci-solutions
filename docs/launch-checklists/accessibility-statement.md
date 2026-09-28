# Accessibility Statement — Launch Checklist

**Route:** `/accessibility-statement` · **Source:** `src/app/(policies)/accessibility-statement/page.tsx` · **Purpose:** Policy page stating RAVENCI's accessibility commitment (WCAG 2.1 AA) and feedback contact.

Screenshots: not captured (page not in routes.ts)

## Content
- [ ] Business name correct: "RAVENCI Solutions"
- [ ] Standard cited: WCAG 2.1 Level AA
- [ ] Contact details correct: email `hello@ravenci.solutions` (mailto link), phone (07) 3106 1836 (`tel:+61731061836`)
- [ ] Last-updated line present and reads "4 March 2026"
- [ ] No placeholder / TODO / lorem text
- [ ] No ABN shown on this page (verify none is required here; ABN, if wanted, lives in footer/privacy)

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
- Route group `(policies)` does not appear in the URL; page renders at `/accessibility-statement`.
- The page claims WCAG 2.1 AA conformance — make sure the launched site actually meets the DoD accessibility bar so the statement is truthful.
