# Terms and Conditions — Launch Checklist

**Route:** `/terms-and-conditions` · **Source:** `src/app/(policies)/terms-and-conditions/page.tsx` · **Purpose:** Policy page — Terms of Service governing use of ravenci.solutions and RAVENCI's services.

Screenshots: not captured (page not in routes.ts)

## Content
- [ ] Business name correct: "RAVENCI"; site URL `https://ravenci.solutions`
- [ ] Contact block correct: "RAVENCI Team", email `hello@ravenci.solutions`
- [ ] Last-updated date present
- [ ] No placeholder / TODO / lorem text
- [ ] Governing law section present (laws of Australia)
- [ ] ⚠️ Last updated "14 April 2021" — over 5 years stale for a 2026 launch. Review and refresh before launch.
- [ ] ⚠️ `mailto:` link contains a stray space (`mailto: hello@ravenci.solutions`) — trim so the mail client opens with a clean address.
- [ ] ⚠️ Governing Law wording is vague: "the laws of Australia" then "the exclusive jurisdiction of the courts in that State or location" — "that State" has no antecedent. Confirm the intended jurisdiction (e.g. Queensland) and tighten.
- [ ] ⚠️ No ABN / registered entity details. Confirm whether the Terms should identify the trading entity and ABN; add if required.

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
- Route group `(policies)` does not appear in the URL; page renders at `/terms-and-conditions`.
- Content reads as a generic template — worth a legal pass to make it RAVENCI- and Queensland/Australia-specific before launch.
