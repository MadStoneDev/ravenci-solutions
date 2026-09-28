# Quick Support — Launch Checklist

**Route:** `/quick-support` · **Source:** `src/app/quick-support/page.tsx` · **Purpose:** Remote-support landing page embedding a GetScreen.me widget for screen-sharing sessions (existing clients).

Screenshots (if present): `dod-screens/desktop-1440/{light,dark}/quick-support.png`, `dod-screens/mobile-390/{light,dark}/quick-support.png`

## Content
- [ ] Breadcrumb "Quick Support"; SectionLabel "Remote support session"; H1 "Quick Support"
- [ ] Intro copy: "Need a hand? Use the widget below to start a remote support session. Once connected, I can see your screen and help you sort things out in real time." — plain first-person voice
- [ ] GetScreen.me iframe loads and renders the connect widget (400×400, bordered)
- [ ] Reassurance line: "This session is private and secure. Screen sharing ends the moment you close the connection."
- [ ] ⚠️ GetScreen.me invite token is hard-coded in the page source (`token=PU8So02pAnH7GCk5fx0rx6RRQYLXHDuI`). Confirm this token is current/valid and that a public token in the client bundle is acceptable
- [ ] Verify the widget actually initiates a session end-to-end (external service dependency)
- [ ] Page is `robots: index:false, follow:false` — confirm it should stay out of search
- [ ] No placeholders/TODOs; no self-praise

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
- No `next/image` usage (page has no images — the only media is the external iframe); that DoD item is N/A here.
- The iframe is a third-party origin (getscreen.me); confirm it renders on both themes and doesn't cause layout shift or horizontal scroll at 390px (fixed 400px max-width).
