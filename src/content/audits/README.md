# Visibility Audits — Workflow

This folder holds one MDX file per client audit. The file is the source of
truth: filename = URL token, frontmatter = structured data, body = optional
narrative.

The audits loader (`src/lib/audits.ts`) only reads `.mdx` files, so this
README and any other notes can live here without being treated as an audit.

## Creating a new audit

1. **Generate a token.** Random 8-16 chars, used in the filename and the URL.

   ```bash
   openssl rand -hex 8
   # => 7f3a9c2b1d4e5f6a
   ```

   Pair it with a slug for sanity:
   `sarah-acme-2026-05-7f3a9c2b1d4e5f6a.mdx`

2. **Copy the example.** Use `example-acme-corp-d4f7g.mdx` as the starting
   point. Every field in the frontmatter is required *except* `specialMessage`
   and the body content below the closing `---`.

3. **Fill in the data.**

   - `token` — must match the filename (without `.mdx`)
   - `status` — leave as `draft` until you're ready to send
   - Client info — `clientName`, `clientBusiness`, `clientEmail`,
     `clientWebsite`
   - `conductedDate` — ISO format, `YYYY-MM-DD`
   - `overallScore` — 0–100, your headline figure
   - `headline` — one-sentence summary that becomes the report's H1
   - `specialMessage` (optional) — short personal note shown above the
     category scores. Use the `|` block syntax for multi-line.
   - `categories` — five category objects, each with `id`, `label`, `score`,
     `summary`, `findings[]`, `recommendations[]`. The IDs in the example
     (`performance`, `seo`, `mobile`, `security`, `accessibility`) are the
     conventional five but you can rename or reorder.
   - `priorityActions` — three or four next-step items, ordered.

4. **Optional narrative body.** Anything after the closing `---` renders as
   Markdown/MDX between the optional category content and the priority
   actions. Use it for client-specific context that doesn't fit the structured
   blocks. Delete the section entirely if you don't need it.

5. **Preview locally.** Run `npm run dev` and visit
   `http://localhost:3377/audit/[token]`. Confirm the report renders, scores
   look right, the print stylesheet works (Cmd/Ctrl+P).

6. **Commit and push.** Coolify deploys, and the URL goes live.

## Sending the report email

The visibility-check route auto-sends an acknowledgement email when the lead
submits the form. The audit report itself is sent manually after you've
completed the audit MDX:

```bash
curl -X POST \
  -H "x-admin-token: $ADMIN_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"token":"sarah-acme-2026-05-7f3a9c2b1d4e5f6a"}' \
  https://ravenci.solutions/api/admin/send-audit-report
```

The endpoint reads the MDX file, sends a templated email to `clientEmail`
with a link to the report URL, and returns confirmation. Email body includes
a soft prompt to reply with timeline + budget — that's the qualification
hook.

For convenience, you can save this as a shell script (`bin/send-audit.sh`):

```bash
#!/usr/bin/env bash
set -e
TOKEN="$1"
if [ -z "$TOKEN" ]; then
  echo "Usage: bin/send-audit.sh <audit-token>"
  exit 1
fi
curl -X POST \
  -H "x-admin-token: $ADMIN_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"token\":\"$TOKEN\"}" \
  https://ravenci.solutions/api/admin/send-audit-report
```

## Required env vars

- `ADMIN_API_TOKEN` — used to authenticate the send-audit-report endpoint.
  Generate with `openssl rand -hex 32`. Set in `.env.local` for dev and in
  Coolify for production.
- `MAILERSEND_API_KEY` — for the actual email delivery. Already set.
- `NEXT_PUBLIC_BASE_URL` — used to build the report URL in the email. Already
  set.

## Privacy notes

- Audit MDX files contain client PII (email, business details, audit
  findings). The repo is private — keep it that way.
- The `/audit/[token]` page is `noindex` and `Disallow:`-ed in robots.txt, so
  it won't be indexed by search engines or AI crawlers.
- The token in the URL is the only access control. A long random token (8+
  hex chars) is unguessable in practice. If a token is ever leaked, rename
  the file to a new token and resend.

## Where this is going

The MDX-and-curl workflow is intentional for now: simple, version-controlled,
zero infra. The eventual admin UI at `/admin/audits` (when it's built) will:

1. Generate the token automatically
2. Provide form-based editing of the frontmatter
3. Save as draft (writes the MDX file)
4. Publish + send (writes the file and POSTs to
   `/api/admin/send-audit-report` — the same endpoint above)

Because the data layer doesn't change, every audit you create now will
continue to work after the admin UI ships.
