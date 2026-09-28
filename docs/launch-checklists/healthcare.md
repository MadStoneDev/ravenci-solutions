# Healthcare Industry Page — Launch Checklist

**Route:** `/healthcare` · **Source:** `src/app/healthcare/page.tsx`, `src/data/industry-pages.ts` (`HEALTHCARE`), `src/components/industry-page.tsx` · **Purpose:** Sell websites to Brisbane medical practices, allied health and NDIS providers (booking, privacy, AHPRA-aware).

Screenshots (if present): `dod-screens/desktop-1440/{light,dark}/ind-healthcare.png`, `dod-screens/mobile-390/{light,dark}/ind-healthcare.png`

## Content
- [ ] Hero H1 reads "Websites for healthcare practices"
- [ ] Hero intro leads with the patient's experience ("Your patients look you up before they book...") not the tech stack — matches the client-first voice rule
- [ ] Intro closes with "From $7,500, 85+ PageSpeed guaranteed"
- [ ] Primary CTA "Start a project" → `/launch-your-vision`
- [ ] No "See the work" secondary CTA (correct — HEALTHCARE has no `caseStudies`, so the button and the `#work` section are intentionally absent)
- [ ] Breadcrumb + section label "Industry / Healthcare" present
- [ ] Pains section "The problems I hear, every time" — 4 cards: "A dated site loses patients before they book", "The phone never stops", "Patient privacy is a real exposure" (Australian Privacy Principles), "NDIS participants expect transparency"
- [ ] Solutions (dark) — 3 cards: "Booking that fits your tools", "Patient portals and secure forms", "AHPRA-aware, accessible content" (WCAG 2.1 AA)
- [ ] Integrations row: CLINIKO, HALAXY, HOTDOC, HEALTHENGINE, NOOKAL, BEST PRACTICE, COVIU — all genuine, supported Australian practice/booking tools; confirm each integration is real
- [ ] `[YOUR SYSTEM]` chip renders as an intentional dashed placeholder, not a leftover TODO
- [ ] No related case-studies section, no stats-driven testimonial (none defined) — confirm the page still feels complete without proof cards (⚠️ note: this industry has no case study to point to; the proof gap is visible here)
- [ ] Stats band: "25+ Years in digital", "75+ Australian businesses", "85+ PageSpeed, guaranteed" (accent)
- [ ] ⚠️ Stat "25+ Years in digital" vs memory "20+ years experience" — confirm the number
- [ ] ⚠️ Stat "75+ Australian businesses" — memory notes ~100 unique clients / 467 projects since 2018. Confirm 75+ is the genuine, defensible figure Richard wants public
- [ ] AHPRA claims are framed as "AHPRA-aware" / "structured around AHPRA advertising rules" — never as legal guarantees (compliance is client's advisor's call)
- [ ] Closing CTA (dark): heading "Ready to modernise your practice?" + body; primary "Start a project" → `/launch-your-vision`; secondary "Free visibility check" → `/#visibility-check`
- [ ] No decorative/invented metrics; no corny self-praise or AI-tells
- [ ] JSON-LD: Service schema serviceType "Healthcare Website Design", offer price 7500 AUD, BreadcrumbList emit correctly
- [ ] Cross-link consistency: the deep guide at `/medical-practice-website-requirements` links back here; confirm both pages agree on tool names and the $7,500 floor

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
- [ ] All internal links resolve (`/launch-your-vision`, `/#visibility-check`)
- [ ] External links open the right target (none on this page)
- [ ] Meta title "Healthcare Websites Brisbane | RAVENCI Solutions" & description accurate (booking, privacy, NDIS-ready, Cliniko/HotDoc, AHPRA-aware, From $7,500)
- [ ] Breadcrumbs correct (Home / Healthcare)

## Notes
-
