# Article Template — Launch Checklist

**Route:** `/articles/[slug]` · **Source:** `src/app/articles/[slug]/page.tsx`, `src/lib/articles.ts`, `src/content/articles/*.mdx`, `src/lib/mdx-components.tsx` · **Purpose:** Dynamic MDX article template. Content varies per `.mdx` entry — review the TEMPLATE/layout, then spot-check each article.

Screenshots (if present): `dod-screens/desktop-1440/{light,dark}/tmpl-article.png`, `dod-screens/mobile-390/{light,dark}/tmpl-article.png` (representative instance: `/articles/10-point-website-launch-checklist`)

Articles present: `10-point-website-launch-checklist`, `the-hidden-costs-of-diy-website-builders-why-easy-isn-t-always-economical`, `three-factors-that-drive-customer-choice-over-having-the-best`. Note: `getAllArticles()` filters out any article whose `scheduleDate` is in the future — confirm no intended article is hidden by an unreached schedule date.

## Content
### Template-level (verify once on the layout)
- [ ] Breadcrumb (Articles / title) renders
- [ ] First category renders as section label above the H1; H1 = `article.title`
- [ ] Byline row: "By {author}", published date (`en-AU` long format), and computed "{n} min read" (words ÷ 200)
- [ ] Featured image renders via `next/image` with `priority` when `featuredImage` present; alt falls back to title
- [ ] MDX body renders through `mdxComponents` — confirm headings, lists, links, blockquotes, images and the `- [ ]` checklist items style correctly
- [ ] "Related reading" aside renders up to 2 related articles (shared-category then recency); links resolve
- [ ] Lead-magnet aside "See how you show up" / "Free visibility check" → `/#visibility-check` renders and sticks on desktop
- [ ] JSON-LD Article (author = Person, publisher = RAVENCI) and BreadcrumbList emit; `datePublished`/`dateModified` populated
- [ ] Article-not-found path returns `notFound()` with the fallback metadata title

### Per-instance (check on every article)
- [ ] Copy is in Richard's plain, first-person, story-driven voice (he is the voice standard); no AI-tells, no corny self-praise
- [ ] Author is "Richard" (or intended author) and matches frontmatter
- [ ] No placeholder/Lorem/TODO text; every claim and number is genuine
- [ ] Brand and client spellings exact where mentioned (GoingDark one word, DIRT caps, NNAccountability)
- [ ] Internal links in body resolve (e.g. `10-point-website-launch-checklist` links to `/launch-your-vision` and `/website-maintenance`); external links go to the right target
- [ ] Featured image file exists and loads (e.g. `/articles/startup-black-side.jpg`); alt text is descriptive
- [ ] Meta title (`{metaTitle} | RAVENCI Solutions`), description, keywords and canonical `/articles/<slug>` correct
- [ ] OG/Twitter image = `featuredImage.src` with correct width/height/alt
- [ ] Published/updated dates are real and sensible; read-time looks right for the length
- [ ] Categories are accurate (drive related-article matching)

## Design & responsive (DoD §11)
- [ ] 390px: layout correct, no horizontal scroll (aside stacks under article)
- [ ] 1440px: layout correct (article + sticky aside side by side)
- [ ] Light theme correct
- [ ] Dark theme correct — purple only as fill/mark; text is paper, never purple on charcoal
- [ ] Keyboard-navigable, focus always visible
- [ ] Reduced-motion: final state shown
- [ ] No purple background / gradient / hard shadow
- [ ] Images via next/image (featured + any in-body images)
- [ ] PageSpeed ≥ 85 mobile

## Links & meta
- [ ] All internal links resolve (`/articles`, related-article slugs, `/#visibility-check`, in-body links)
- [ ] External links open the right target
- [ ] Meta title & description accurate per article
- [ ] Breadcrumbs correct (Home / Articles / title)

## Notes
-
