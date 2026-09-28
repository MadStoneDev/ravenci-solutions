# Labs — Launch Checklist

**Route:** `/labs` · **Source:** `src/app/labs/page.tsx` (+ `src/data/labs.ts`) · **Purpose:** Showcases Richard's own side-project products as proof of range, each linking out to the live app.

Screenshots (if present): `dod-screens/desktop-1440/{light,dark}/labs.png`, `dod-screens/mobile-390/{light,dark}/labs.png`

## Content
- [ ] ⚠️ SOURCE MISMATCH: the page imports `LAB_PROJECTS` from `src/data/labs.ts`, NOT `src/data/lab-projects.ts`. `lab-projects.ts` (which contains JustReel / justreel.app) appears to be a dead/orphaned file and does NOT render on this page. Confirm `labs.ts` is the intended source and delete/ignore `lab-projects.ts` — JustReel does not appear on the live Labs page.
- [ ] Breadcrumbs: Labs
- [ ] Section label "Labs", H1: "Things I've built"
- [ ] Lead: "Products and tools I've built outside of client work. Proof of range, and where I try things before they turn up in a build."
- [ ] Grid renders 8 visible projects (from `labs.ts`, `hidden` excluded → "Just Cases" is hidden and must NOT appear):
- [ ] JustSent — status "Live" — justsent.app — one-liner "The fastest way to move a file from one device or person to another..."
- [ ] QRmory — status "Live" — qrmory.com — "A dynamic QR code generator for small businesses..."
- [ ] Download Ledger — status "In progress" — downloadledger.ravenci.solutions — "A WordPress plugin that counts downloads..."
- [ ] RankRiot — status "Live" — rankriot.app — "An SEO site-audit tool that crawls your site..."
- [ ] RAVENCI Builder — status "In progress" — ravencibuilder.com — "A front-end visual page builder for WordPress..."
- [ ] JustNoted — status "Live" — justnoted.app — "A fast markdown note-taking app."
- [ ] TheJury — status "In progress" — no URL (renders as a non-link card, no "Visit")
- [ ] JustTerms — status "In progress" — no URL (renders as a non-link card, no "Visit")
- [ ] ⚠️ TheJury and JustTerms have `url: ""` so they render with no "Visit" link and no destination — confirm that's intended for launch (they read as coming-soon), or add URLs
- [ ] Status labels map correctly: live→"Live", beta→"Beta", wip→"In progress"
- [ ] Each card with a URL shows "Visit" with an up-right arrow and opens in a new tab (`target="_blank" rel="noopener noreferrer"`)
- [ ] Stack chips render per project (e.g. Next.js, React, TypeScript, Tailwind, Supabase, Stripe, etc.)
- [ ] ⚠️ `labs.ts` header comment claims TheJury/JustTerms one-liners were "left for Richard", but both one-liners are in fact filled in — stale comment only; confirm the one-liner copy is Richard-approved and not placeholder
- [ ] Closing CTA (dark) H2 "Got something like this in mind?" with "Start a project" button → `/launch-your-vision`
- [ ] No JSON-LD on this page (none authored) — confirm that's acceptable
- [ ] "Visit" accent text uses RAVENCI Purple #8E1A80 only

## Design & responsive (DoD §11)
- [ ] 390px: layout correct, no horizontal scroll
- [ ] 1440px: layout correct
- [ ] Light theme correct
- [ ] Dark theme correct — purple only as fill/mark; text is paper, never purple on charcoal
- [ ] Keyboard-navigable, focus always visible (linked cards + non-linked cards distinguishable)
- [ ] Reduced-motion: final state shown (hover border only)
- [ ] No purple background / gradient / hard shadow
- [ ] Images via next/image (grid is text/chip cards — no raster images rendered; `featuredImage`/`screenshot` fields are unused on the card)
- [ ] PageSpeed ≥ 85 mobile

## Links & meta
- [ ] All internal links resolve (CTA → `/launch-your-vision`)
- [ ] External links open the right target: justsent.app, qrmory.com, downloadledger.ravenci.solutions, rankriot.app, ravencibuilder.com, justnoted.app — spot-check each resolves
- [ ] Meta title & description accurate ("Labs | RAVENCI Solutions"; description "Products I've built. Side projects and tools, as proof of range...")
- [ ] Breadcrumbs correct (if present) — Labs

## Notes
- The card renders `p.oneLiner`, `p.status`, `p.stack` and `p.url` only; the `problemSolved`, `screenshot` and `featuredImage` fields are not shown in the grid.
- Brand spellings to keep exact: QRmory, RankRiot, JustSent, JustNoted, TheJury, JustTerms, RAVENCI Builder.
