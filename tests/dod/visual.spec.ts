import { test } from "@playwright/test";
import { ROUTES, THEMES } from "./routes";
import { forceTheme, settle } from "./helpers";

// §11: "Renders correctly at 390px and 1440px" + "Light and dark themes both
// correct". This spec doesn't judge correctness — it produces a full-page
// screenshot of every route × theme so you can scan them as a contact sheet.
// The viewport (390 vs 1440) comes from the Playwright project.
//
// Output: dod-screens/<viewport>/<theme>/<name>.png
// (Kept OUTSIDE Playwright's test-results/ dir, which it auto-cleans each run.)

// Heavy routes (long MDX articles) can exceed the 30s default on their first
// dev-mode compile; give navigation + capture room.
test.describe.configure({ timeout: 90_000 });

for (const theme of THEMES) {
  for (const route of ROUTES) {
    test(`shot ${route.name} [${theme}]`, async ({ page }, testInfo) => {
      await forceTheme(page, theme);
      const res = await page.goto(route.path, { waitUntil: "domcontentloaded" });
      // Fail loudly on a broken route rather than screenshotting an error page.
      if (res && res.status() >= 400) {
        throw new Error(`${route.path} returned HTTP ${res.status()}`);
      }
      await settle(page);
      const viewport = testInfo.project.name;
      await page.screenshot({
        path: `dod-screens/${viewport}/${theme}/${route.name}.png`,
        fullPage: true,
      });
    });
  }
}
