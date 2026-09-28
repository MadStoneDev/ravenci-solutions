# Privacy Policy — Launch Checklist

**Route:** `/privacy-policy` · **Source:** `src/app/(policies)/privacy-policy/page.tsx` · **Purpose:** Policy page covering how RAVENCI collects, uses, and protects personal information.

Screenshots: not captured (page not in routes.ts)

## Content
- [ ] Business name correct: "RAVENCI" / "RAVENCI Solutions"; site URL `https://ravenci.solutions/`
- [ ] Contact block correct: "RAVENCI Team", email `hello@ravenci.solutions`
- [ ] Effective / last-updated dates present
- [ ] No placeholder / TODO / lorem text
- [ ] ⚠️ Last updated "14 April 2021" — over 5 years stale for a 2026 launch. Review and refresh the date and content before launch.
- [ ] ⚠️ Body references "our Cookie Policy" ("Please refer to our Cookie Policy for more information") — confirm a Cookie Policy page actually exists and links to it, or remove the reference (currently it is plain text, not a link).
- [ ] ⚠️ `mailto:` links contain a stray space (`mailto: hello@ravenci.solutions`) — trim so the mail client opens with a clean address.
- [ ] ⚠️ No ABN or registered business address shown. Confirm whether the AU Privacy Act policy should state the ABN / entity details; add if required.
- [ ] ⚠️ Boilerplate check: policy states it may collect "date of birth" and "payment details" and frames children's privacy at "under 13" (US-style). Confirm these match what the site actually collects and Australian norms (Privacy Act / APPs), rather than leaving generic template wording.

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
- Route group `(policies)` does not appear in the URL; page renders at `/privacy-policy`.
- Content reads as a generic WebsitePolicies-style template — worth a legal/business pass to make it RAVENCI- and Australia-specific before launch.
