# Managed Web (Website Maintenance) — Launch Checklist

**Route:** `/website-maintenance` · **Source:** `src/app/website-maintenance/page.tsx`, `src/components/service-page.tsx`, `src/data/service-pages.ts` (`MANAGED_WEB`) · **Purpose:** Sell bundled hosting + ongoing maintenance so sites stay fast and secure.

Screenshots (if present): `dod-screens/desktop-1440/{light,dark}/svc-website-maintenance.png`, `dod-screens/mobile-390/{light,dark}/svc-website-maintenance.png`

## Content
- [ ] H1 reads exactly "Managed Web"; breadcrumb label "Managed Web"; SectionLabel "01 / Service"
- [ ] Lead: "I host, secure and look after your website so it stays fast, online and out of your hands."
- [ ] Supporting: "Since October 2024 I only host sites that are on ongoing maintenance, so hosting and care come together. That's why my sites stay fast and secure instead of quietly rotting."
- [ ] Confirm the "Since October 2024" policy line matches the identical notice on `/web-hosting` ("As of October, 2024...")
- [ ] Hero primary CTA "Get started" → `/launch-your-vision`; secondary "What's covered" → `#included`
- [ ] Pricing anchor: "FROM $39/mo" + note "Hosting from $39/mo. Hosting plus maintenance from $269/mo. One-off tidy-up $495."
- [ ] Pricing anchor ticks: "99.9% uptime", "Daily backups with quick restore", "24/7 monitoring, Brisbane-based support"
- [ ] Included (02) all 8 items: Managed cloud hosting, SSL and secure setup, Daily backups, Security monitoring and patching, Uptime monitoring, Performance checks, Content and link checks, Support and monthly reports (2-hour response in business hours)
- [ ] No Process section (MANAGED_WEB has no `process`) — confirm section 03 absent; no Related work (none defined) — confirm 04 absent; FAQ still labelled "05"
- [ ] FAQ (05) all 5 Q&As present, incl. "Is maintenance really necessary?"; phone "07 3106 1836" → `tel:+61731061836`
- [ ] Closing CTA (dark) heading "Want it handled?" primary "Get started" → `/launch-your-vision`
- [ ] Sticky CTA: "Get managed" → `/launch-your-vision`, starting price $39
- [ ] JSON-LD Service schema offers: Managed hosting $39 / Hosting + maintenance $269 / Monthly maintenance $249 / One-off tidy-up $495
- [ ] ⚠️ Price consistency: hero pricing note lists "Hosting plus maintenance from $269/mo" and "One-off tidy-up $495" but the JSON-LD also lists a "Monthly maintenance $249" offer not surfaced in the visible copy — confirm all four prices ($39 / $269 / $249 / $495) are current and intended
- [ ] All prices reconcile with `/web-hosting` ($39/mo) and any pricing page

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
- [ ] Meta title & description accurate — title "Managed Web | RAVENCI Solutions"; description lists "$39/mo, or hosting plus maintenance from $269/mo"
- [ ] Breadcrumbs correct (if present) — Home / Managed Web

## Notes
-
