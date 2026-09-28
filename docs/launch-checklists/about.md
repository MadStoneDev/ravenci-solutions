# About — Launch Checklist

**Route:** `/about` · **Source:** `src/app/about/page.tsx` (+ `src/data/testimonials.ts`, `src/components/breadcrumbs.tsx`) · **Purpose:** Founder story and credibility — the engineering background, values, ownership/education promises, plus a review and CTA.

Screenshots (if present): `dod-screens/desktop-1440/{light,dark}/about.png`, `dod-screens/mobile-390/{light,dark}/about.png`

## Content
- [ ] Breadcrumbs: About
- [ ] Section label "About", H1: "The engineering behind your website"
- [ ] Lead: "I take the long view on what your website needs to do, and I build it so it still holds up in five years."
- [ ] Stats row: "25+" Years in digital, "75+" Australian businesses, "467" Projects delivered, "85+" PageSpeed guaranteed
- [ ] ⚠️ Verify "75+ Australian businesses" is the number Richard wants public (internal reference notes ~100 unique clients / 467 projects) — genuine number only
- [ ] Story section: "RH" avatar, "Richard Haddad", "Founder · RAVENCI Solutions"
- [ ] Story para 1: "I'm a structural engineer turned web developer... ten years in steel detailing and structural drafting, with a Structural Engineering degree behind that, and a Graphic Design diploma alongside it."
- [ ] Story para: "After 25+ years in the digital space, I founded RAVENCI in Brisbane in 2018..."
- [ ] Story para: "RAVENCI runs as a founder-led studio backed by a network of specialist collaborators."
- [ ] Dark section label "What makes me different", H2: "Built to a standard, not to a deadline"
- [ ] ⚠️ Copy "Most developers and designers come from a purely technical or creative background" — check against the no-self-praise / no "Most developers..." rule; confirm it reads as fact, not a swipe
- [ ] Guarantee line: "That's why I guarantee 85+ Google PageSpeed."
- [ ] Qualifications list (4): "Structural Engineering degree"; "Ten years in steel detailing and structural drafting"; "Graphic Design diploma"; "25+ years digital experience"
- [ ] "You own everything" block: "Your code, your content, your domain. No lock-in, no proprietary systems."
- [ ] "I teach you, too" block: "Every project includes training videos..."
- [ ] Values grid (4): Transparency, Client ownership, Education, Integrity (each with description)
- [ ] "What I stand for" H2 present (section label repeats "What I stand for")
- [ ] Testimonial (dark): Geoff Beisler · Green Earth Trees, labelled "5.0 · Google review", pulled from `getTestimonialByID("geoff-beisler")`
- [ ] Closing CTA H2 "Ready to work with me?" with "Start a project" button → `/launch-your-vision`
- [ ] JSON-LD: AboutPage + Person present (Person `sameAs` LinkedIn https://www.linkedin.com/company/91459779/) — verify LinkedIn URL is correct/live
- [ ] Accent numbers use RAVENCI Purple #8E1A80 only

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
- [ ] External links open the right target (LinkedIn in JSON-LD)
- [ ] Meta title & description accurate ("About | RAVENCI Solutions"; description mentions "25+ years of digital experience, an engineering mindset...")
- [ ] Breadcrumbs correct (if present) — About

## Notes
- No images beyond the "RH" initials avatar; page is text-driven.
