# Medical Practice Website Requirements Guide — Launch Checklist

**Route:** `/medical-practice-website-requirements` · **Source:** `src/app/medical-practice-website-requirements/page.tsx` · **Purpose:** Long-form SEO/authority guide on what Australian medical practice websites need in 2026 (AHPRA, privacy, integrations, patient essentials), funnelling to the `/healthcare` service page.

Screenshots: not captured (page not in routes.ts)

## Content
- [ ] Hero H1 "What Australian Medical Practice Websites Need in 2026"; lead "AHPRA-aware. Privacy-compliant. Patient-friendly."
- [ ] Hero intro names the five areas (AHPRA advertising guidelines, Australian Privacy Principles, online booking, accessibility, patient-facing essentials)
- [ ] Section label "Healthcare Web Design, 2026" present
- [ ] Section 01 "AHPRA Advertising Compliance Essentials" — 5 items: no clinical testimonials (s.133 National Law), no misleading/deceptive claims, no guarantees of cure/outcome, appropriate titles & qualifications, practitioner-vs-practice content distinction
- [ ] AHPRA disclaimer paragraph present: "This is general guidance, not legal advice..." with link to AHPRA published advertising resources
- [ ] Section 02 "Privacy Act & Patient Data Handling" — 5 items (APP-compliant privacy policy, cookie/tracking consent, secure form handling, Health Records Act Vic/ACT/NSW, Notifiable Data Breach awareness)
- [ ] Section 03 "Practice Management & Booking Integrations" — 8 tools: HotDoc, HealthEngine, Cliniko, Best Practice, MedicalDirector, Halaxy, AllReady, Coviu / Doxy.me — confirm each is a genuine, correctly-described Australian tool
- [ ] ⚠️ Integration-name consistency: this guide lists MedicalDirector, AllReady and Doxy.me, but the `/healthcare` page integrations list does not include them (and healthcare lists NOOKAL, which this guide omits). Confirm the two pages are intentionally scoped, not accidentally divergent
- [ ] Section 04 "Patient-Facing Essentials" — 8 items (booking above the fold, hours/address/parking/transport, practitioner profiles, bulk-billing/fees, new-patient info, telehealth, services/conditions, accessibility)
- [ ] Section 05 "Six Common Mistakes" — 6 numbered items (clinical testimonials, mobile-broken booking, no/generic privacy policy, unchecked AHPRA registration, slow site, broken PM integration)
- [ ] "Common mistakes" copy is first-person from audits ("The most common AHPRA breach I see...", "I've audited practice sites where...") — genuine, in Richard's voice, no AI-tells
- [ ] Section 06 "How RAVENCI Builds Healthcare Websites" — states every healthcare project includes AHPRA-aware structure, Privacy Act compliance, booking integration, WCAG accessibility, 85+ PageSpeed; and that Richard works alongside the client's legal/compliance advisor for final AHPRA sign-off (no compliance guarantee claimed)
- [ ] Section 06 in-body links: `/healthcare` and `/cost-of-a-website-in-brisbane` resolve
- [ ] Section 07 FAQ accordion — 8 Q&As; verify pricing claims are honest: "$5,000 to $15,000" build, "$500 to $2,000" integration, "$15,000 to $30,000+" complex, "$300 to $600/month" hosting/maintenance, "$8,000 to $20,000" year one
- [ ] ⚠️ FAQ pricing ("$5,000 to $15,000") sits below the current $7,500 project floor from the May 2026 pricing restructure. Confirm the guide's price ranges are reconciled with the current floors so a lead isn't quoted sub-floor numbers
- [ ] Cost/timeline figures (4-6 weeks standard, 6-10 weeks complex, +1-2 weeks compliance review) are genuine, not invented
- [ ] CTA (dark): heading "Building or Replacing Your Practice Website?"; primary "Launch Your Vision" → `/launch-your-vision`; secondary "See Healthcare Packages" → `/healthcare`
- [ ] No decorative/invented stats; no corny self-praise; brand spellings exact
- [ ] JSON-LD: BreadcrumbList, Article (datePublished/dateModified 2026-04-22), and FAQPage (built from `faqItems`) all emit correctly
- [ ] ⚠️ Article JSON-LD author is Organization "RAVENCI Solutions"; the guide is written first-person as Richard. Confirm the intended author attribution (Organization vs Person "Richard")

## Design & responsive (DoD §11)
- [ ] 390px: layout correct, no horizontal scroll
- [ ] 1440px: layout correct
- [ ] Light theme correct
- [ ] Dark theme correct — purple only as fill/mark; text is paper, never purple on charcoal (page uses several `dark` sections + accent check icons)
- [ ] Keyboard-navigable, focus always visible (FAQ accordion operable by keyboard, aria state correct)
- [ ] Reduced-motion: final state shown (accordion expand/collapse)
- [ ] No purple background / gradient / hard shadow
- [ ] Images via next/image (page is icon/text only — confirm no raw `<img>` slips in)
- [ ] PageSpeed ≥ 85 mobile

## Links & meta
- [ ] All internal links resolve (`/healthcare` ×2, `/cost-of-a-website-in-brisbane`, `/launch-your-vision`)
- [ ] External link opens the right target (AHPRA advertising resources, `target="_blank" rel="noopener noreferrer"`)
- [ ] Meta title "Medical Practice Website Guide | RAVENCI Solutions" & description accurate; canonical `/medical-practice-website-requirements`
- [ ] Breadcrumbs correct (Home / Medical Practice Website Requirements)

## Notes
- Page is not included in `tests/dod/routes.ts`, so no DoD screenshots exist. Consider adding it to the sweep if it's launch-facing.
