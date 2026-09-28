# Build Only — Launch Checklist

**Route:** `/build-only` · **Source:** `src/app/build-only/page.tsx`, `src/components/service-page.tsx`, data: `BUILD_ONLY` in `src/data/service-pages.ts` · **Purpose:** Service page for "have a design, I'll build it" — funnels to the enquiry form, no on-page form.

Screenshots (if present): `dod-screens/desktop-1440/{light,dark}/build-only.png`, `dod-screens/mobile-390/{light,dark}/build-only.png`

## Content
- [ ] Breadcrumb "Have a design? I'll build it"; H1 "Have a design? I'll build it"
- [ ] Outcome line about building the designer's work exactly, on the right platform, with the same performance guarantee
- [ ] Supporting line about accepting Figma / XD / flat PDF
- [ ] Hero CTAs: primary "Send me the design" → `/launch-your-vision`; secondary "What's included" → `#included`
- [ ] Pricing anchor: label "QUOTED ON PAGES" (no dollar figure), note about pricing on page count + platform, ticks: "Pixel-accurate to your design", "85+ PageSpeed guaranteed", "White-label if you're an agency"
- [ ] ⚠️ Verify the "85+ PageSpeed guaranteed" claim (hero tick + Included item) is one Richard stands behind contractually — it appears here and in `#included` as a guarantee
- [ ] Included grid: 9 items (Pixel-accurate build, The right platform, A CMS you'll actually use, Performance optimisation, Accessibility to WCAG 2.1 AA, Responsive across devices, Video training, White-label option, Revision rounds) — all copy plain, no self-praise
- [ ] Process (dark section): heading "First look in about three weeks..." + 6 steps (Send the design → Development → First look → Feedback → Final touches → Go live)
- [ ] Related work cards render for Peninsula Homes, Nikita Morell, SAC Consulting with images pulled from case-study data (all three slugs exist and resolve)
- [ ] FAQ accordion: 5 Q&As (design formats, exact match, platform, white-label, timeline); "Ring me 07 3106 1836" tel link works
- [ ] Closing CTA (dark): "Got the design? Send it through." → primary "Send me the design" → `/launch-your-vision`
- [ ] Sticky CTA "Send me the design" → `/launch-your-vision`
- [ ] JSON-LD emitted: BreadcrumbList, FAQPage, Service (serviceType "Website Development (build from a provided design)")
- [ ] Copy matches Richard's plain first-person voice; no AI-tells, no placeholders/TODOs

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
- Shared `ServicePage` component — layout fixes here affect every service page.
- Related-work images come from `getCaseStudyBySlug`; verify each case study has a `cardImage`/`featuredImage` so cards aren't blank.
