/// <reference path="../pb_data/types.d.ts" />

/**
 * Articles CMS hooks (run inside PocketBase on the Coolify instance).
 *
 * 1. publish-due cron: every 5 min, flip scheduled articles whose time has
 *    passed to published, then revalidate the public site.
 * 2. after create/update/delete: revalidate so publishes and edits show on the
 *    live site without a Next.js redeploy.
 *
 * Config (PocketBase env):
 *   REVALIDATE_URL     e.g. https://ravenci.solutions/api/revalidate
 *   REVALIDATE_SECRET  must match the Next.js REVALIDATE_SECRET
 */

function pingRevalidate(slug) {
  const url = $os.getenv("REVALIDATE_URL");
  const secret = $os.getenv("REVALIDATE_SECRET");
  if (!url || !secret) return;
  try {
    $http.send({
      url: url,
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-revalidate-secret": secret,
      },
      body: JSON.stringify({ slug: slug || "" }),
      timeout: 10,
    });
  } catch (err) {
    console.log("revalidate ping failed:", err);
  }
}

// 1. Auto-publish scheduled articles whose time has come.
cronAdd("publish-due", "*/5 * * * *", () => {
  const now = new Date().toISOString().replace("T", " ").replace("Z", ".000Z");
  const due = $app.findRecordsByFilter(
    "articles",
    'status = "scheduled" && scheduleDate <= {:now}',
    "-scheduleDate",
    200,
    0,
    { now: now },
  );
  due.forEach((rec) => {
    rec.set("status", "published");
    if (!rec.getString("publishedAt")) {
      rec.set("publishedAt", rec.getString("scheduleDate"));
    }
    $app.save(rec);
    pingRevalidate(rec.getString("slug"));
  });
});

// 2. Revalidate on any article change.
onRecordAfterCreateSuccess((e) => {
  pingRevalidate(e.record.getString("slug"));
  e.next();
}, "articles");

onRecordAfterUpdateSuccess((e) => {
  pingRevalidate(e.record.getString("slug"));
  e.next();
}, "articles");

onRecordAfterDeleteSuccess((e) => {
  pingRevalidate(e.record.getString("slug"));
  e.next();
}, "articles");
