import { defineConfig, devices } from "@playwright/test";

// DoD harness (BRIEF §11). Drives the real dev server and checks the
// browser-only criteria: renders at 390 and 1440, both themes, keyboard focus
// always visible, reduced-motion shows the final state. PageSpeed (§11's last
// line) is a separate Lighthouse run, not part of this config.
//
// Run:  npm run dod          (all checks)
//       npm run dod:visual   (screenshots -> test-results/dod-screens/)
//       npm run dod:a11y     (focus + reduced-motion assertions)

const PORT = 3377;

export default defineConfig({
  testDir: "./tests/dod",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  // Report lives outside test-results/ so it never clears the screenshots there.
  reporter: [["list"], ["html", { outputFolder: "playwright-report", open: "never" }]],
  use: {
    baseURL: `http://localhost:${PORT}`,
    // Deterministic screenshots: no animation mid-capture.
    screenshot: "off",
  },
  // Two shapes cover §11's "390px and 1440px".
  projects: [
    { name: "mobile-390", use: { ...devices["Desktop Chrome"], viewport: { width: 390, height: 844 } } },
    { name: "desktop-1440", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } } },
  ],
  // Reuse a running dev server if you already have one; otherwise start it.
  webServer: {
    command: "npm run dev",
    url: `http://localhost:${PORT}`,
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
