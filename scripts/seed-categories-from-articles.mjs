#!/usr/bin/env node
/**
 * Seed the `categories` collection from the distinct category labels already
 * used across articles. Idempotent (skips ones that exist).
 *
 * Usage:
 *   POCKETBASE_URL=https://cms.ravenci.solutions \
 *   PB_ADMIN_EMAIL=you@example.com PB_ADMIN_PASSWORD=... \
 *   node scripts/seed-categories-from-articles.mjs
 */
import PocketBase from "pocketbase";

const URL = process.env.POCKETBASE_URL;
const EMAIL = process.env.PB_ADMIN_EMAIL;
const PASSWORD = process.env.PB_ADMIN_PASSWORD;

if (!URL || !EMAIL || !PASSWORD) {
  console.error("Missing env: POCKETBASE_URL, PB_ADMIN_EMAIL, PB_ADMIN_PASSWORD.");
  process.exit(1);
}

const pb = new PocketBase(URL);
pb.autoCancellation(false);
await pb.collection("_superusers").authWithPassword(EMAIL, PASSWORD);

const articles = await pb.collection("articles").getFullList();
const names = new Set();
for (const a of articles) {
  const cats = Array.isArray(a.categories) ? a.categories : [];
  for (const c of cats) if (c) names.add(String(c).trim());
}

const existing = new Set(
  (await pb.collection("categories").getFullList()).map((c) => c.name),
);

let created = 0;
for (const name of names) {
  if (existing.has(name)) {
    console.log(`exists   ${name}`);
    continue;
  }
  try {
    await pb.collection("categories").create({ name });
    console.log(`created  ${name}`);
    created++;
  } catch (e) {
    console.warn(`skip     ${name} (${e?.message ?? e})`);
  }
}
console.log(`\nDone. ${created} new categor${created === 1 ? "y" : "ies"} added.`);
