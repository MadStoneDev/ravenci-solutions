import { Page } from "@playwright/test";

// Drive the theme the same way a real visitor does: dark follows the OS
// setting (prefers-color-scheme), so we emulate that media feature rather than
// touching any class. Matches the pure-CSS activation in globals.css.
export async function forceTheme(page: Page, theme: "light" | "dark") {
  await page.emulateMedia({ colorScheme: theme });
}

// Let the page settle: fonts loaded, network idle, and any Tier A CSS
// animations given a beat to reach their resting frame before we screenshot.
export async function settle(page: Page) {
  await page.waitForLoadState("networkidle").catch(() => {});
  await page.evaluate(() => document.fonts?.ready).catch(() => {});
  await page.waitForTimeout(400);
}
