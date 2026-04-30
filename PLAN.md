# RAVENCI Solutions — Project Plan

Living plan for ongoing work on the RAVENCI Solutions site.
Mirror of the Claude Code task list so it's visible without Claude Code.

_Last updated: 2026-04-30_

---

## Pending — to do

### Phase 2: Specialist network + partner badges
**Status:** Waiting on Richard
Three to four specialist names + roles to add to the about page so the
"network" claim has visible substance. Would land alongside the existing
team/credibility content.

### Drop in remaining coming-soon media as client photos arrive
**Status:** Waiting on client photos
Several case studies have coming-soon placeholder tiles waiting on real assets.
- **Covenant** — 6 slots: stationery, vehicle decals, window sticker, welcome pack cover, welcome pack interior, design guide
- **SAC Consulting** — a few feature/approach images
- **Cadeaurable** — tall full-page.png for the scroller hero, plus category page + checkout for the gallery
- **Nikita Morell** — fully wired, no slots left
- **Peninsula / DIRT / GoingDark / Coast Remedial / NNAccountability** — fully wired

### NNAccountability: un-hide case study + swap clientUrl on launch
**Status:** Waiting on site launch at nnaccountability.com.au
When the site goes live:
1. Set `hidden: false` on the case study entry
2. Swap `clientUrl` from `nnaccountability.ravenci.solutions` to `nnaccountability.com.au`
3. Replace `timeline: "In progress"` with the real "X weeks"
4. Update the results section to reflect launch state instead of "currently in staging"
5. Add real PageSpeed metrics if available

### Coast Remedial: decide hidden long-term vs delete
**Status:** Decision pending
Currently marked hidden because the live site has been rebuilt by another team.
Either is defensible:
- **Keep hidden** — preserves the case study as a record of the original 2024 build, accessible via direct URL only
- **Delete entirely** — removes from data file, frees up the slot in numbering

### Set NEXT_PUBLIC_CALENDLY_URL env var
**Status:** Admin task
Placeholder is wired into the codebase but the env var still needs the real
Calendly booking URL set in production. Without it, calendar-booking CTAs
fall back to placeholder behaviour.

### Set up Covenant /about Cloudflare redirect rule
**Status:** Admin task on Covenant's Cloudflare account
Documented in an earlier conversation; never implemented. Apply the rule
so the redirect lands cleanly.

### Backfill testimonials on case studies
**Status:** Lower priority, ongoing
- **Peninsula, DIRT, GoingDark** — have testimonial slots in the data but no quotes wired
- **Covenant, SAC, Nikita, Cadeaurable, Coast Remedial, NNAccountability** — don't have testimonial slots at all

Lowest-friction approach: ask each client by email for permission to use
something they've already said about the work in past correspondence.
Even a single 1-2 sentence retroactive quote per case study would
noticeably strengthen the page.

### Clean up pre-session uncommitted working tree noise
**Status:** Maintenance, but worth doing soon
~96 files in the working tree are marked "modified" — most are CRLF/LF
line-ending differences and IDE state files (`.idea/*`,
`.claude/settings.local.json`) carried over from before the April 2026
case-study deep-dive session. A few are real in-progress changes that
committed code now depends on (we hit two latent build failures on this
during deploys: `pricing-cards.tsx` and `getTestimonialByID`).

Worth a sweep: commit the real work, revert the noise. Until this is
reconciled, every push risks surfacing another missing-import error.

### Revisit "more case studies vs deepen current 7" decision
**Status:** Strategic check-in, no urgency
Currently sitting at 7 publicly-listed case studies (plus 2 hidden).
Earlier discussion landed on deepening over widening for now.
Worth revisiting if:
- A specific industry vertical becomes a sales focus (e.g. medical, legal,
  real estate) and you'd want a representative example for that vertical
- A current project produces an unusually strong outcome worth dedicated
  airtime
- A service line that doesn't have a case study yet (pure SEO/content
  engagement, GoHighLevel/Strapi work, pure maintenance retainer) becomes
  a focus

---

## Done — for reference

### Phase 1 — Stats consistency pass
Standardised all stats across the site to real numbers; bumped the
PageSpeed promise to reflect actual delivery.

### Phase 3 — Platforms section on homepage
Added the Platforms section to the homepage, expanding TAM positioning.

### Phase 4 — Multi-step Launch Your Vision form
Replaced the single contact form with a multi-step Launch Your Vision
stepper.

### Phase 5 — Cornerstone pages (4 AEO pages)
Built four AEO-optimised cornerstone pages: Brisbane website cost,
WordPress vs Shopify vs custom, medical practice website requirements,
how to choose a Brisbane web designer.

### Phase 6 — Pilot case study redesign (Peninsula Homes)
Built the premium case-study template, switched Peninsula Homes to it
as the pilot.

### Phase 7 — Visual refresh (typography + neo-brutalist accents)
Editorial hero typography refresh + neo-brutalist accent classes.

### Phase 8 — Founder voice homepage rewrite
Rewrote the homepage hero and supporting sections in Richard's founder
voice; updated founder quote attribution.

### Phase 9 — Brisbane audit PDF lead magnet
Added gated downloadable report for the Brisbane website audit.

### Roll premium template across remaining case studies
Migrated all case studies to the premium template structure.

### Build /labs side projects section
Created the `/labs` section for side projects, with JustReel as the
initial entry.

### Build integration/all-phases branch
Bundled all the multi-branch work into a single integration branch
for review and merge to main. Branch since deleted post-merge.

### Voice rewrite pass — 25 audit items in Richard's voice
Sweep through 25 audit-flagged items, rewriting copy in founder voice.

### Deep-dive case study rewrites (9 case studies)
All nine case studies rewritten in founder voice with real context
from Q&A sessions:
- Peninsula Homes, DIRT, GoingDark — published, fully wired with real metrics + media
- Covenant Security, SAC Consulting, Nikita Morell, Cadeaurable — published, mostly wired (some `coming-soon` slots remain)
- NNAccountability — written, hidden until launch
- Coast Remedial Solutions — written, hidden (decision pending)

Pre-launch tidy: hide-from-listings system added to the data type;
private-conversation quotes removed; wife disclosure removed from
Cadeaurable per Richard's call.

### Build standalone /free-audit landing page
Dedicated, indexable landing page using the same VisibilityCheckForm as
the homepage CTA, wrapped in a fuller landing-page narrative (5-category
breakdown, 50-business research stats, 3-step process, FAQ, final CTA).
Sitemap entry at priority 0.9.

### Reconcile AUDIT-PLAN.md and AUDIT-2026-03-01.md with what shipped
Decided to delete both stale planning docs in favour of this PLAN.md
as the single living source of truth.

---

## Conventions

- **Task list source of truth:** Claude Code's internal task list (manipulated
  via TaskCreate / TaskUpdate). This PLAN.md is a manually-mirrored copy.
- **When in doubt about current state:** ask Claude Code in the project for
  a fresh status snapshot.
- **Branch model:** working directly on `main`. Feature branches deleted
  after merge.
