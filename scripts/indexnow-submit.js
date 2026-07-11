/**
 * IndexNow bulk submitter for ravenci.solutions
 *
 * Reads the live sitemap.xml (the single source of truth for indexable URLs),
 * extracts every <loc>, and submits them to IndexNow in one bulk request.
 *
 * Usage:
 *   node scripts/indexnow-submit.js            # submit all sitemap URLs
 *   node scripts/indexnow-submit.js --dry-run  # print the payload, don't send
 *
 * Requires Node 18+ (uses global fetch).
 */

const HOST = "ravenci.solutions";
const KEY = "89aac01c942049be98f3f0345eaf3335";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

const dryRun = process.argv.includes("--dry-run");

async function getSitemapUrls() {
  const res = await fetch(SITEMAP_URL, {
    headers: { "User-Agent": "ravenci-indexnow-submitter" },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch sitemap: ${res.status} ${res.statusText}`);
  }
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) =>
    m[1].trim()
  );
  if (urls.length === 0) {
    throw new Error("No <loc> entries found in sitemap.");
  }
  return urls;
}

async function main() {
  const urlList = await getSitemapUrls();

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  console.log(`Found ${urlList.length} URLs in ${SITEMAP_URL}:`);
  for (const u of urlList) console.log(`  ${u}`);

  if (dryRun) {
    console.log("\n--dry-run: not submitting. Payload:");
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  const body = await res.text();
  console.log(`\nIndexNow responded: ${res.status} ${res.statusText}`);
  if (body) console.log(body);

  // IndexNow returns 200 (accepted) or 202 (accepted, pending). Anything else = problem.
  if (res.status !== 200 && res.status !== 202) {
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exitCode = 1;
});
