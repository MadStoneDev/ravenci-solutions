# Professional Services Industry Page — Launch Checklist

**Route:** `/professional-services` · **Source:** `src/app/professional-services/page.tsx`, `src/data/industry-pages.ts` (`PROFESSIONAL_SERVICES`), `src/components/industry-page.tsx` · **Purpose:** Sell websites to Brisbane accountants, bookkeepers, lawyers, financial advisers and consultants (credibility, ranking-safe migration, compliance).

Screenshots (if present): `dod-screens/desktop-1440/{light,dark}/ind-professional-services.png`, `dod-screens/mobile-390/{light,dark}/ind-professional-services.png`

## Content
- [ ] Hero H1 reads "Websites for professional services firms"
- [ ] Hero intro leads with the client's reputation ("Your clients choose you on reputation...") not the tech — matches client-first voice
- [ ] Intro states the differentiator plainly: "One senior developer, you own everything, no lock-in" (matches positioning: long-term solutions vs plugin-clutter)
- [ ] Intro closes with "From $7,500, 85+ PageSpeed guaranteed"
- [ ] Primary CTA "Start a project" → `/launch-your-vision`; secondary hero CTA "See the work" → `#work` (renders because case studies exist)
- [ ] Breadcrumb + section label "Industry / Professional Services" present
- [ ] Pains section — 4 cards: "You look smaller than you are", "A rebuild can cost you your rankings", "Advertising compliance is a real risk", "Plugin-heavy sites decay"
- [ ] Solutions (dark) — 3 cards: "Credibility-first design", "Ranking-safe migration", "Compliance-aware content and secure intake" (references TPB, ASIC, Law Society advertising rules)
- [ ] Integrations row: XERO, MYOB, IGNITION, HUBSPOT, XPLAN, LEAP, ACTIONSTEP, DOCUSIGN — all genuine professional-services/accounting/legal tools; confirm each is real
- [ ] `[YOUR SYSTEM]` chip renders as an intentional dashed placeholder, not a leftover TODO
- [ ] Related case-study cards (2): SAC Consulting ("A workplace culture consultancy that needed authority, fast") and Nikita Morell ("A copywriter writing exclusively for architects, with a site to match") — both verify against case study data; both are NOT hidden (correct to list)
- [ ] "Built for this industry" section heading + "Professional Services work" label
- [ ] Stats band: "25+ Years in digital", "75+ Australian businesses", "85+ PageSpeed, guaranteed" (accent)
- [ ] ⚠️ Stat "25+ Years in digital" vs memory "20+ years experience" — confirm the number
- [ ] ⚠️ Stat "75+ Australian businesses" vs memory ~100 unique clients — confirm the defensible figure
- [ ] Compliance framed as "structured with your advertising obligations in mind" — never a guarantee
- [ ] Closing CTA (dark): heading "Ready for a website that matches your reputation?" + body offering a review of current site and ranking protection; primary "Start a project" → `/launch-your-vision`; secondary "Free visibility check" → `/#visibility-check`
- [ ] No decorative/invented metrics; no corny self-praise or AI-tells
- [ ] JSON-LD: Service schema serviceType "Professional Services Website Design", TWO offers (7500 "Professional Services Website" + 10000 "Custom Firm Platform"), BreadcrumbList emit correctly — confirm the $10k tier is a real offering (aligns with pricing restructure)

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
- [ ] All internal links resolve (`/launch-your-vision`, `/#visibility-check`, `#work`, `/case-studies/sac-consulting`, `/case-studies/nikita-morell`)
- [ ] External links open the right target (none on this page)
- [ ] Meta title "Professional Services Website Design Brisbane | RAVENCI" & description accurate (accountants, lawyers, advisers, rankings, compliance, From $7,500)
- [ ] Breadcrumbs correct (Home / Professional Services)

## Notes
-
