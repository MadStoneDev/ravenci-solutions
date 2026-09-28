# Launch Your Vision — Launch Checklist

**Route:** `/launch-your-vision` · **Source:** `src/app/launch-your-vision/page.tsx`, `src/components/launch-your-vision-stepper.tsx` · **Purpose:** Six-step project-enquiry stepper that emails Richard a structured brief and returns a tailored proposal.

Screenshots (if present): `dod-screens/desktop-1440/{light,dark}/launch-your-vision.png`, `dod-screens/mobile-390/{light,dark}/launch-your-vision.png`

## Content
- [ ] Breadcrumb reads "Launch Your Vision"; SectionLabel "Start a project"; H1 "Launch Your Vision"; lead "Two minutes. I'll come back with a tailored proposal."
- [ ] Progress bar shows "Step N of 6" and "~2 minutes total"; bar fill uses accent (purple) and animates
- [ ] Step 1 "What are you looking to build?" — options: Business website, E-commerce store, Web application, Mobile app, Branding refresh, Hosting + maintenance only, Not sure yet (single-select; required to proceed)
- [ ] ⚠️ Step 1 still offers "Mobile app" as a project type — positioning/pricing restructure drops mobile apps. Confirm this option should stay, or remove it
- [ ] Step 2 "What stage are you at?" — Starting from scratch / Need a rebuild / Have a brief or wireframes / Just exploring options (required)
- [ ] Step 3 "When do you need it?" — ASAP (within 1 month) / 1 to 3 months / 3 to 6 months / Just researching for now (required)
- [ ] Step 4 "What's your budget range?" — Under $5k / $5k to $10k / $10k to $25k / $25k to $50k / $50k+ / Prefer not to say — optional, with a working "Skip this step" link
- [ ] Step 5 "Tell me about your business" — Business name * (required), Existing website (optional, url), "Briefly, what do you need?" * (required textarea)
- [ ] Step 6 "How can I reach you?" — Your name * (required), Email * (required, regex-validated), Phone (optional); consent line linking to `/privacy-policy`
- [ ] "Back" disabled on step 1; "Next" disabled until the step's required fields pass; final button reads "Send Enquiry"
- [ ] Submit posts to `/api/launch-your-vision` with a reCAPTCHA v3 token (action `launch_your_vision`) and both a structured `message` string and discrete fields
- [ ] Verify required-field gating: cannot advance past step 5 without business name + description; cannot submit step 6 without a valid-looking email
- [ ] Loading state shows spinner + "Sending..."; button disabled during submit
- [ ] Success state greets by first name ("Thanks, {firstName}."), promises a reply within 24 hours, echoes the project type, and confirms email sent to the entered address (with spam-folder note)
- [ ] Success + high budget ($10k–$25k / $25k–$50k / $50k+): "Want to fast-track?" panel with a "Book a Discovery Call" button
- [ ] ⚠️ Discovery-call link falls back to `https://calendly.com/ravenci` (no `NEXT_PUBLIC_CALENDLY_URL` set in repo) — confirm this is Richard's real Calendly, or set the env var before launch
- [ ] Success + "Hosting + maintenance only": panel links to `/quote` ("Go to Self-Serve Quote")
- [ ] Error state shows message, "Try again" (returns to form) and "Email me directly" (`mailto:hello@ravenci.solutions`)
- [ ] GTM `lead_form_submit` event fires on success and error
- [ ] Copy is plain first-person, no self-praise, no placeholders/TODOs

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
- reCAPTCHA is optional in code (`executeRecaptcha ? ... : ""`) — confirm the provider is mounted in production so a token is actually sent.
- No choice-button focus ring is defined explicitly; verify keyboard focus is visible on the option grid.
