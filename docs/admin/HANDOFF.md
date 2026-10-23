# RAVENCI Articles Admin — build handoff

Design reference: the three `design/*.dc.html` files in this folder (open them in a browser to view the markup; they are static HTML mockups with a little demo logic). Build this into the existing ravenci.solutions Next.js app (App Router, Tailwind, shadcn-style tokens already in `globals.css`).

**Single user** (Richard). **Goal:** list, create, edit, schedule, publish and draft articles with a featured image and MDX support, from a modern block editor.

---

## 0. Backend: PocketBase

Articles move out of `src/content/articles/*.mdx` into **PocketBase** (single Go binary + SQLite), run as its own Coolify service.

- Coolify: use the one-click PocketBase service, or a Dockerfile pinned to an exact PocketBase version (it is pre-1.0; read the changelog before bumping).
- **Persistent volume on `/pb_data` (and `/pb_hooks`)** — without it a redeploy wipes the database and uploads. Turn on PocketBase's built-in scheduled backups (to S3 if available).
- Domain e.g. `cms.ravenci.solutions` (or keep it internal to the Coolify network and only expose it to the Next.js app).
- Next.js talks to it with the official `pocketbase` JS SDK. Env: `POCKETBASE_URL`, `PB_ADMIN_EMAIL` (allowed user), `REVALIDATE_SECRET`.
- Public article pages become dynamic reads from PocketBase with `revalidateTag('articles')` on save; no rebuild needed to publish.
- One-off importer script: read existing `src/content/articles/*.mdx` with gray-matter, upload featured images from `public/articles/`, create records. Keep the MDX files in git as a backup until the import is verified, then delete.

## 1. Data model (PocketBase collection `articles`)

| Field | Type | Notes |
| --- | --- | --- |
| `title` | text | required |
| `slug` | text | required, unique index, pattern `^[a-z0-9-]+$` |
| `excerpt` | text | max ~200 |
| `content` | text (long) | MDX body, no frontmatter |
| `featuredImage` | file | single, jpg/png/webp, max 10 MB, thumbs e.g. `1200x0`, `400x250` |
| `featuredImageAlt` | text | required before publish |
| `featuredImageWidth` / `featuredImageHeight` | number | set on upload (read with sharp) |
| `author` | text | default "Richard" |
| `categories` | json (string array) or relation to a `categories` collection | v1: json |
| `metaTitle`, `metaDescription`, `metaKeywords` | text | |
| `status` | select: `draft`, `scheduled`, `published` | |
| `scheduleDate` | date | UTC go-live time |
| `publishedAt` | date | set when it actually goes live |
| `updatedAt` | date | set on meaningful edits (separate from PB's own `updated`) |

API rules: list/view for the public = `status = "published" && scheduleDate <= @now`; create/update/delete = `@request.auth.id != "" && @request.auth.email = "<owner email>"` (or superuser only). Drafts are never readable without auth.

Displayed date on the site = `publishedAt ?? scheduleDate`. Rewrite `src/lib/articles.ts` to query PocketBase (keep the same exported function names and `Article` shape so the pages barely change; map the image field to `{ src: pb.files.getURL(record, record.featuredImage), alt, width, height }`).

Add the PocketBase host to `images.remotePatterns` in `next.config`.

## 2. Routes

| Route | Screen | Notes |
| --- | --- | --- |
| `/admin/login` | `design/Login.dc.html` | Email + password, email one-time code fallback |
| `/admin` → `/admin/articles` | `design/Main.dc.html` | List with status tabs, search, stats |
| `/admin/articles/new` | `design/Editor.dc.html` | Empty editor |
| `/admin/articles/[slug]` | `design/Editor.dc.html` | Edit existing |
| `/api/admin/*` | — | Server actions or route handlers; all auth-guarded |

Protect everything under `/admin` and `/api/admin` in `middleware.ts`. Add `noindex` to admin layout and exclude `/admin` in `robots.ts`/sitemap.

**Auth (PocketBase):** a `users` auth collection with a single account (registration disabled), or authenticate against `_superusers`. Sign-in screen = email + password, with "Email me a one-time code instead" using PocketBase OTP (configure SMTP in PocketBase settings). No passkeys. Store the PocketBase auth token in an httpOnly, secure, SameSite=Lax cookie (`pb.authStore.exportToCookie`), check it in `middleware.ts`, and use a server-side PocketBase client per request. Enable PocketBase rate limits.

---

## 3. Articles list (`Main.dc.html`)

- Sidebar: Articles (count), Media, Categories, View live site, Settings, user chip. Media/Categories/Settings can be stubs for v1.
- Header: "Writing" label, "Articles" display heading, **New article** (accent button).
- Stat strip: Published / Scheduled / Drafts counts + "Next to go live" (earliest future scheduled).
- Tabs: All · Published · Scheduled · Drafts with counts (URL param `?status=`).
- Search: titles + content, `/` shortcut focuses it.
- Rows: 96×60 thumbnail (dashed placeholder if none), title (links to editor), meta line (category · read time or "edited X ago"), status pill, date + note ("Goes live 9:00 am"), overflow menu (Edit, View, Duplicate, Unpublish, Move to trash).
- Sort: scheduled/published by `scheduleDate` desc, drafts by `updatedAt` desc.
- All times shown in `Australia/Brisbane`.

Status pill colours (light): Published bg `#e7f1ea` text `#1f5c34` dot `#2f7a47`; Scheduled bg `#f5e8f3` text `#7a1670` dot accent; Draft bg `#ebe9e3` text `#45454f` dot `#8a8a93`.

---

## 4. Editor (`Editor.dc.html`)

**Top bar:** back to Articles · status pill · save state ("Saved", "Saving…", "Unpublished changes") · **Blocks / MDX** toggle · Preview · Save draft · primary action whose label depends on status: *Publish* (draft→now), *Schedule* (when a future date is set), *Update article* (already published).

**Writing canvas (max-width 720px):**
- Featured image block at top (upload / replace / remove, shows dimensions).
- Title as large editable heading; byline line below (author · read time · date).
- Block editor. Recommended: **TipTap** (ProseMirror) with a block-handle extension and a `/` slash menu; or BlockNote if you want handles/slash menu out of the box. Requirements:
  - Blocks: Text, Heading (H2/H3), List (bullet/numbered), Quote, Image (upload or pick from media), Code (highlighted), Divider.
  - MDX component blocks: **Callout** (`type`: note/tip/warning), **Checklist**, **Raw MDX** (free JSX). Render as a framed card with a mono `<Component …>` header strip.
  - Hover handle: `+` add block, `⋮⋮` drag to reorder / block menu.
  - Slash menu grouped "Basic" and "Components", keyboard: ↑↓ move, ↵ insert, esc close.
- **MDX mode:** code view of the body only (CodeMirror 6 with markdown/JSX), line numbers, "Valid MDX" / error status (compile with `@mdx-js/mdx` on change, debounced). Frontmatter is never shown here; it comes from the side panel.
- Round-trip: blocks ⇄ MDX via TipTap's markdown serialiser (`tiptap-markdown` or `@tiptap/pm` + remark) with custom handlers for the component blocks. MDX components must be registered in `src/lib/mdx-components.tsx` so the public page renders them (add `Callout`, `Checklist`).
- Autosave drafts every few seconds (debounced) — autosave never changes the live article; only the primary button does.

**Side panel (340–380px):**
1. Publishing: segmented Draft / Scheduled / Published. Scheduled reveals Date + Time (AEST) inputs. Helper text per status:
   - Draft — "Only you can see drafts. Nothing changes on the live site."
   - Scheduled — "Goes live on its own at the time below. The date shown on the article will match."
   - Published — "Live now. Changes stay as a draft until you press Update article."
2. URL: `/articles/` + slug input (auto from title until first publish; then locked with a warning, and changing it creates a redirect).
3. Excerpt: textarea with live character count.
4. Featured image: thumb, filename, dimensions/size, alt text (required before publishing).
5. Categories: chips + add.
6. Search & social: Google result preview, meta title (counter /60), meta description (counter /160), keywords. Counters turn warning colour when over.
7. Footer: published / last updated timestamps, **Move to trash** (destructive, confirm).

Validation before Publish/Schedule: title, slug, excerpt, featured image + alt, metaDescription present; slug unique.

---

## 5. Scheduling + revalidation (PocketBase hooks)

In `pb_hooks/articles.pb.js`:

- `cronAdd("publish-due", "*/5 * * * *", ...)`: find records where `status = "scheduled" && scheduleDate <= now`, set `status = "published"`, `publishedAt = scheduleDate`, save, then POST to `https://ravenci.solutions/api/revalidate` with the secret.
- `onRecordAfterUpdateSuccess` / `onRecordAfterCreateSuccess` / `onRecordAfterDeleteSuccess` for `articles`: POST the same revalidate endpoint (body: slug) so publishes and edits show immediately.

Next.js `app/api/revalidate/route.ts`: check `REVALIDATE_SECRET`, then `revalidateTag('articles')` (and `revalidatePath` for `/articles` and `/articles/[slug]`). Tag all PocketBase fetches with `next: { tags: ['articles'] }`.

## 6. Images

- Featured images upload directly to the record's `featuredImage` file field (multipart via the SDK). Read width/height with `sharp` in the Next.js server action before upload, or in a PocketBase hook.
- Inline body images: a separate `media` collection (file + alt), referenced in MDX by its PocketBase file URL. The editor's Image block uploads there.
- Use PocketBase thumbs for list thumbnails (`?thumb=400x250`).
- Make sure `sharp` is in the Next.js production image.

## 7. Design tokens (match the live site — reuse existing Tailwind tokens)

| Token | Light | Dark |
| --- | --- | --- |
| background | `hsl(45 18% 96%)` ≈ `#f7f6f3` | `hsl(240 9% 6%)` |
| foreground | `hsl(240 9% 6%)` ≈ `#0e0e11` | `hsl(45 18% 96%)` |
| card | `#ffffff` | `hsl(240 10% 10%)` |
| muted | `hsl(45 18% 91%)` ≈ `#ebe9e3` | `hsl(240 11% 15%)` |
| muted-foreground | `hsl(240 5% 37%)` ≈ `#5a5a63` | `hsl(240 5% 62%)` |
| subtle-foreground | `hsl(240 7% 29%)` ≈ `#45454f` | `hsl(240 6% 80%)` |
| border | `hsl(42 14% 86%)` ≈ `#e0ddd6` | `hsl(240 9% 20%)` |
| accent | `hsl(307 69% 33%)` ≈ `#8e1a81` | same |
| destructive | `hsl(2 71% 41%)` | `hsl(2 71% 55%)` |
| warning | `hsl(30 90% 38%)` | `hsl(38 96% 56%)` |

- Type: Archivo (UI/body), JetBrains Mono (labels, slugs, counters, code). Labels: mono, 11–12px, uppercase, `letter-spacing: .14em` (existing `text-label`).
- Headings: existing `text-display-l`, `text-display-m`, `text-heading-m`, `text-heading-s`.
- Radius: `--radius` 3px (`rounded-sm`); popovers 6px. Shadow for menus: `--shadow-2`.
- Motion: `--dur-fast` 120ms, `--ease-standard`.
- The admin should honour the same `prefers-color-scheme` dark tokens as the site (mockups are light only).
- Touch targets ≥ 44px; real `<button>`/`<label>`; icon-only buttons need `aria-label`. Icons: Tabler (already used on the site).

---

## 8. Suggested v1 scope / order

1. Auth + `/admin` guard.
2. PocketBase service on Coolify (volume + backups), `articles` collection, importer, `lib/articles.ts` rewrite.
3. List page.
4. Editor: side panel + MDX mode first (fastest path to usable), then the TipTap block canvas.
5. Image upload.
6. PocketBase hooks for scheduling + revalidation.
7. Media / Categories / Settings pages later.
