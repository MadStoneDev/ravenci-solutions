# Naming & Terminology Map — "development" → "design" reframe

**Companion to `repositioning-audit.md` §7.4.** Purpose: capture every "design / designer / development / developer" occurrence across the ICP surface, each tagged **CHANGE**, **REPHRASE**, or **KEEP**, so the reframe is consistent and nothing accurate gets over-corrected. **Nothing here is applied to site code** — this is a review-ready change set.

**Rule:** lead with "design" (the word buyers search) on ICP marketing-site labels/titles; keep "development/engineering" as the *build-quality* language in the body and as the *primary* language on genuinely technical pages. Honesty guardrail: you deliver the whole website, so "website design" is accurate; where a design partner did the visual design, keep the credit.

**URL note:** changing a **label** (nav text, breadcrumb, heading) does *not* require changing the **URL**. You can relabel the nav item to "Website Design" while the route stays `/web-development`. A slug rename (`/web-development` → `/web-design`) is optional and, if done, must be a single 301 with all ~10 internal links updated — treat as a separate tidy-up, not part of this pass.

---

## Section 1 — CHANGE → "design" (service naming / findability) · **do these**

| Priority | Location (file:line) | Current | Proposed | Why |
|---|---|---|---|---|
| **P1** | `components/main-navigation.tsx:51` | nav label `Web Development` | `Website Design` | Primary nav label; anchor text buyers + Google see. URL can stay `/web-development`. |
| **P1** | `components/main-navigation.tsx:293` | `Web Development` (mobile nav) | `Website Design` | Same label, mobile menu — keep in sync. |
| **P1** | `components/main-footer.tsx:38` | `Business Website Development` | `Website Design` | Footer service link label. |
| **P1** | `app/web-development/page.tsx:12,18` | title `Web Development \| RAVENCI Solutions` | `Custom Website Design Brisbane, Built to Last \| RAVENCI` | The page ranks pos 4.4 for "design" queries but the snippet says "Development" — the mismatch costs the click (Phase 2.3 / §7.3). |
| **P1** | `app/web-development/page.tsx:14,20` | desc "Custom web development in Brisbane. Modern, responsive…" | "Custom websites for established Brisbane businesses — fast, owned by you, still working in five years. No templates, no plugin clutter. From $7,500." | §7.3 — lead with differentiator + pre-qualify on price. |
| **P1** | `app/page.tsx:23,28` | home title `Custom Web Development Brisbane \| RAVENCI Solutions` | `Custom Website Design Brisbane \| RAVENCI Solutions` | Home meta title = biggest single impression driver; match the searched word. (Keep the "structural engineer's approach" in the *description* — that's differentiation, and "development" there is accurate craft language: `page.tsx:24,29` **KEEP**.) |
| **P2** | `app/web-development/page.tsx:148,161` | breadcrumb/name `Web Development` | `Website Design` | On-page breadcrumb + JSON-LD breadcrumb name. |
| **P2** | `app/web-development/page.tsx:641,642` | schema `serviceType: "Web Development"`, `name: "Website Development"` | `serviceType: "Website Design & Development"`, `name: "Custom Website Design & Development"` | Schema.org serviceType is free text; "design & development" is the accurate umbrella and captures both queries. |
| **P2** | `app/web-development/page.tsx:662` | schema `Web Development Packages` | `Website Design Packages` | Offer-catalog name. |
| **P2** | `app/page.tsx:447` | home schema ListItem `Web Development` | `Website Design` | Keep in sync with nav label. |
| **P2** | `app/about/page.tsx:350` | "founder-led **web development** studio…" | "founder-led **website design and development** studio…" | Accurate umbrella; About is where you can spell out both. |
| **P2** | `app/about/page.tsx:369` | offer `"Web Development"` | `"Website Design & Development"` | hasOfferCatalog item. (`:373 "UI/UX Design"` already fine — **KEEP**.) |
| **P3** | `app/web-development/page.tsx:590` | H2 `Development Questions Answered` | `Common Website Questions` | Minor heading polish. |

---

## Section 2 — REPHRASE → "designed & built" (integrated honesty) · optional polish

Low priority; body copy where "development" reads slightly off once the label is "design." Keeps the honest "design *and* build" framing.

| Location | Current | Proposed |
|---|---|---|
| `web-development/page.tsx:269` | "The **web development process** should never be overwhelming…" | "The **website design process** should never be overwhelming…" |
| `web-development/page.tsx:275` | "four tiers of **development services**, each designed…" | "four tiers of **website design**, each built around…" |
| `web-development/page.tsx:610,726` | "What makes your **development** different from cheaper options?" | "What makes your **websites** different from cheaper options?" |
| `web-development/page.tsx:611,612,729` | "professional **development practices**" | "professional **build standards**" |

---

## Section 3 — KEEP (accurate — do NOT change) · guardrail against over-correcting

| Location(s) | Text | Why keep |
|---|---|---|
| `app/web-apps/page.tsx`, `app/mobile-apps/page.tsx` (titles/H1s, e.g. `mobile-apps:10 "Mobile App Development"`) | "…App Development" | The software/app buyer genuinely searches "development." Accurate + correctly targeted. **Leave entirely.** |
| `construction/page.tsx:40,101,135,154,156,158,177,260,265,581,673` | "**property developer(s)**", "developers, architects" | This is your **audience/client type**, not your service. Changing it would be wrong and would break the copy's meaning. |
| `web-development/page.tsx:364,365` | "**Intercorp Developments**" | A client company **name**. Never touch. |
| `web-development:174,227,236,606,607,721`; `construction:149,151`; `page.tsx:193,222,265` | "developer disappearing", "without a developer", "no developer required", "Why Choose RAVENCI Over Other Developers?" | Reassurance/industry language — accurate and a *benefit* statement. Keep. |
| `about/page.tsx:138` | "structural engineer **turned web developer**" | Richard's factual bio. Keep (or "designer and developer" if you prefer — optional). |
| `web-development:31,405,425,427,446,451`; `healthcare:53,103,279,413,559`; `construction:539,541`; `page.tsx:206-212` | "Responsive Design", "Mobile-First Design", "Custom design and development", "Structure & Design", the home "Design" service block | "Design" used as craft/attribute — already correct and honest. Keep. |
| `main-navigation.tsx:53` / `main-footer.tsx:56` | nav/footer "**Business Design**" | Genuinely the brand-identity service (distinct from the website). Keep. Having "Website Design" + "Business Design" in nav is clear, not confusing. |

---

## Section 4 — Already correct (no action) · confirms the surface is small

- `healthcare/page.tsx:692,693` — schema already `"Healthcare Website Design"` / `"Medical & Healthcare Website Design Brisbane"`. ✅
- `construction/page.tsx:672,673` — schema already `"Construction Website Design"` / `"Construction & Property Developer Website Design Brisbane"`. ✅
- Healthcare & Construction meta **titles** already say "…Websites Brisbane" (not "development"). ✅
- `how-to-choose-a-web-designer-in-brisbane` — already on "designer" language, a supporting asset. ✅

**Implication:** the reframe is genuinely small — the `/web-development` page + nav/footer label + homepage meta title carry almost all of it. Do Section 1 (P1 first) for the real win; Section 2 is polish; Sections 3–4 are guardrails.

---

## Suggested sequence
1. **P1 rows** (nav label, footer label, `/web-development` title+desc, home title) — the findability win, low risk, no URL change.
2. **P2 rows** (breadcrumb + schema + about) — consistency so the site doesn't read half-renamed.
3. **P3 + Section 2** — body-copy polish when convenient.
4. **Optional later:** slug rename `/web-development` → `/web-design` via one 301 + update the ~10 internal links — only if the tidy URL matters.

*Nothing above is applied. On your go-ahead I can turn Section 1 (and/or 2) into the actual edits.*
