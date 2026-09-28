# Gated Audit Report (template) — Launch Checklist

**Route:** `/audit/[token]` · **Source:** `src/app/audit/[token]/page.tsx` (data: `src/lib/audits.ts`) · **Purpose:** Token-gated, per-client visibility audit report — printable to PDF, linked from the report email.

Screenshots: not captured (page not in routes.ts)

> **Token-gated:** each report lives at a private `/audit/<token>` URL. Only audits with `status === "published"` render; drafts and unknown tokens `notFound()` (404). `robots: index:false, follow:false`. Test with a real published token, not a placeholder.

## Content
- [ ] Unknown/draft token 404s (verify a draft token does NOT render); published token renders the report
- [ ] Metadata title `"{clientBusiness}, Visibility Audit | RAVENCI Solutions"`, description references `conductedDate`; unknown token title "Audit Not Found"
- [ ] Cover header: SectionLabel "Visibility Audit · Prepared for {clientBusiness}", `headline`, `clientWebsite`, "Prepared by RAVENCI Solutions / Brisbane, Australia · ravenci.solutions", "Conducted {conductedDate}", "Overall score {overallScore}/100"
- [ ] Optional `specialMessage` block renders (accent left-border) when present, with whitespace preserved
- [ ] Category Scores: horizontal bars per category, width = score%, accent fill, score number shown; verify bars clamp sensibly for very low scores (min width 4%)
- [ ] Findings by Category: each category shows label, score badge "/100", summary, "What we found" list (alert-triangle icons), "Recommendations" list (check icons); empty lists are hidden
- [ ] Optional MDX narrative body (`audit.content`) renders via MDXRemote when non-empty
- [ ] "Where We'd Start" priority-actions numbered list renders when present
- [ ] CTA "Want a hand fixing any of this?" — copy tells client to reply to the report email; contact block shows Website ravenci.solutions, Phone 07 3106 1836, hello@ravenci.solutions
- [ ] CTA button "Talk to RAVENCI About Your Project" → `/launch-your-vision` (hidden in print via `.no-print`)
- [ ] Footer: "© {year} RAVENCI Solutions · Visibility audit prepared for {clientBusiness} on {conductedDate}"
- [ ] Print/PDF: floating PrintButton works; `@page` A4 with margins; `.no-print` elements hidden; page breaks before "Findings by Category" and "Where We'd Start"; check a real print/save-as-PDF renders cleanly (white background, link URLs stripped)
- [ ] ⚠️ All report content is per-client data from `src/lib/audits.ts` — spot-check a real published audit for genuine, specific findings (no template filler, no leftover sample copy, correct client name/URL/scores)
- [ ] Voice is plain first-person where narrative ("I'll come back with options"); no self-praise

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
- Page renders its own `<main>` with a hardcoded print stylesheet; no site breadcrumbs (intentional — it's a standalone deliverable).
- `generateStaticParams` prerenders only published audits; `dynamicParams = true` allows new published tokens at runtime.
- Score bars and category cards are the reusable template surface under test, not any one client's numbers.
