# Web Apps & Client Portals — Launch Checklist

**Route:** `/web-apps` · **Source:** `src/app/web-apps/page.tsx`, `src/components/service-page.tsx`, `src/data/service-pages.ts` (`WEB_APPS`) · **Purpose:** Sell custom business software / client portals that replace spreadsheets.

Screenshots: not captured (page not in tests/dod/routes.ts)

## Content
- [ ] H1 reads exactly "Web Apps & Client Portals"; breadcrumb label "Web Apps & Client Portals"; SectionLabel "01 / Service"
- [ ] Lead: "I replace the spreadsheets and duplicate systems eating your team's time with custom software built around how your business actually works."
- [ ] Supporting: "Logins, roles, job tracking, document handover, and integrations with the CRM, booking, accounting or industry software you already run."
- [ ] Hero primary CTA "Request a proposal" → `/launch-your-vision`; secondary "What's included" → `#included`
- [ ] Pricing anchor: "FROM $35,000" + note "Priced from a floor and scoped to what you need. Business platforms from $55,000, enterprise builds from $75,000."
- [ ] Pricing anchor ticks: "Fixed pricing, no scope creep", "Built to scale from startup to enterprise", "Brisbane-based, Australian business understanding"
- [ ] Included (02) all 8 items: Custom workflow design, Real-time data, Team collaboration, Automated reporting, Talks to your existing tools (Xero, CRM, booking), Works on every device, Your data properly protected, Grows with you
- [ ] Process (03, dark) heading "How a build runs." + note (single-purpose 6–8wk, platform 12–16wk) + 6 steps: Process analysis, Build, First look, Feedback, Testing, Launch and training
- [ ] Related work (04): Covenant Security (Security) → `/case-studies/covenant-security-solutions`; Nikita Morell (Professional services) → `/case-studies/nikita-morell`; Cadeaurable (eCommerce) → `/case-studies/cadeaurable`
- [ ] Confirm the 3 related case studies exist and images resolve (esp. `covenant-security-solutions` slug)
- [ ] "All case studies" link → `/case-studies`
- [ ] FAQ (05) all 5 Q&As present; integrations named (Xero, QuickBooks, CRM) genuinely supported; phone "07 3106 1836" → `tel:+61731061836`
- [ ] Closing CTA (dark) heading "Tell me what's slowing your team down." primary "Start a project" → `/launch-your-vision`
- [ ] Sticky CTA: "Request a proposal" → `/launch-your-vision`, starting price $35,000
- [ ] JSON-LD Service schema present (serviceType "Web App Development", no offers array)
- [ ] Voice check: plain first-person, no AI-tells or self-praise
- [ ] ⚠️ Meta title is just "Web App Development | RAVENCI Solutions" — no Brisbane/location keyword, unlike the other service pages; consider aligning for SEO consistency

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
- [ ] Meta title & description accurate — title "Web App Development | RAVENCI Solutions"
- [ ] Breadcrumbs correct (if present) — Home / Web Apps & Client Portals

## Notes
- Page is not in `tests/dod/routes.ts`, so no DoD screenshots are captured. Add it to routes.ts if it should be part of the sweep.
