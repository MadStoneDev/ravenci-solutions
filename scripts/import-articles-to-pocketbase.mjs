#!/usr/bin/env node
/**
 * One-off(ish) importer: src/content/articles/*.mdx -> PocketBase `articles`.
 *
 * Idempotent: upserts by slug, so it is safe to re-run. Featured images are read
 * from public/<featuredImage.src> and uploaded to the record's file field.
 *
 * Usage (env can come from .env.local):
 *   POCKETBASE_URL=http://127.0.0.1:8090 \
 *   PB_ADMIN_EMAIL=you@example.com PB_ADMIN_PASSWORD=... \
 *   node scripts/import-articles-to-pocketbase.mjs
 *
 * Keep the .mdx files in git until the import is verified in production.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import PocketBase from "pocketbase";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const ARTICLES_DIR = path.join(ROOT, "src/content/articles");
const PUBLIC_DIR = path.join(ROOT, "public");

const URL = process.env.POCKETBASE_URL;
const EMAIL = process.env.PB_ADMIN_EMAIL;
const PASSWORD = process.env.PB_ADMIN_PASSWORD;

if (!URL || !EMAIL || !PASSWORD) {
  console.error(
    "Missing env: POCKETBASE_URL, PB_ADMIN_EMAIL, PB_ADMIN_PASSWORD are all required.",
  );
  process.exit(1);
}

const MIME = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

async function main() {
  const pb = new PocketBase(URL);
  pb.autoCancellation(false);
  await pb.collection("_superusers").authWithPassword(EMAIL, PASSWORD);

  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".mdx"));

  console.log(`Found ${files.length} .mdx files.\n`);

  for (const file of files) {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    const fm = data;

    const form = new FormData();
    form.set("title", fm.title ?? "");
    // The live site derives the slug from the FILENAME and ignores the
    // frontmatter `slug:` field, so we do the same here (some files have a
    // stale/copy-pasted frontmatter slug).
    form.set("slug", slug);
    form.set("excerpt", fm.excerpt ?? "");
    form.set("content", content.trim());
    form.set("featuredImageAlt", fm.featuredImage?.alt ?? "");
    if (fm.featuredImage?.width)
      form.set("featuredImageWidth", String(fm.featuredImage.width));
    if (fm.featuredImage?.height)
      form.set("featuredImageHeight", String(fm.featuredImage.height));
    form.set("author", fm.author ?? "Richard");
    form.set("categories", JSON.stringify(fm.categories ?? []));
    form.set("metaTitle", fm.seo?.metaTitle ?? "");
    form.set("metaDescription", fm.seo?.metaDescription ?? "");
    form.set("metaKeywords", fm.seo?.metaKeywords ?? "");
    // Existing MDX articles are all live.
    form.set("status", "published");
    if (fm.scheduleDate) form.set("scheduleDate", fm.scheduleDate);
    if (fm.publishedAt) form.set("publishedAt", fm.publishedAt);
    if (fm.updatedAt) form.set("contentUpdatedAt", fm.updatedAt);

    // Attach the featured image file (unless the record already has one).
    let existing = null;
    try {
      existing = await pb
        .collection("articles")
        .getFirstListItem(`slug = ${JSON.stringify(slug)}`);
    } catch {
      existing = null;
    }

    const imgSrc = fm.featuredImage?.src; // e.g. /articles/foo.jpg
    const needsImage = imgSrc && !(existing && existing.featuredImage);
    if (needsImage) {
      const imgPath = path.join(PUBLIC_DIR, imgSrc.replace(/^\//, ""));
      if (fs.existsSync(imgPath)) {
        const buf = fs.readFileSync(imgPath);
        const ext = path.extname(imgPath).toLowerCase();
        const blob = new Blob([buf], {
          type: MIME[ext] ?? "application/octet-stream",
        });
        form.set("featuredImage", blob, path.basename(imgPath));
      } else {
        console.warn(`  ! image not found: ${imgPath}`);
      }
    }

    if (existing) {
      await pb.collection("articles").update(existing.id, form);
      console.log(`updated  ${slug}`);
    } else {
      await pb.collection("articles").create(form);
      console.log(`created  ${slug}`);
    }
  }

  const total = await pb
    .collection("articles")
    .getList(1, 1, { skipTotal: false });
  console.log(`\nDone. ${total.totalItems} article(s) in PocketBase.`);
}

main().catch((err) => {
  console.error("\nImport failed:", err?.message ?? err);
  if (err?.response) console.error(JSON.stringify(err.response, null, 2));
  process.exit(1);
});
