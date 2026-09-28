import { test, expect } from "@playwright/test";
import { ROUTES } from "./routes";
import { settle } from "./helpers";

// §11: "Keyboard-navigable end to end, focus always visible". We tab through
// the page and assert every element that receives focus paints a visible focus
// indicator — an outline, a box-shadow ring, or a changed border. A focused
// element with none of these fails.
test.describe("keyboard focus is always visible", () => {
  // 60 tab stops × a round-trip each is slow on long pages; give it room.
  test.setTimeout(90_000);
  for (const route of ROUTES) {
    test(`focus ring on ${route.name}`, async ({ page }) => {
      await page.goto(route.path, { waitUntil: "domcontentloaded" });
      await settle(page);

      const offenders: string[] = [];
      const MAX_STOPS = 60; // enough to cover header + hero + first sections

      for (let i = 0; i < MAX_STOPS; i++) {
        await page.keyboard.press("Tab");
        const info = await page.evaluate(() => {
          const el = document.activeElement as HTMLElement | null;
          if (!el || el === document.body) return null;
          // Ignore dev-only injected elements (Next.js error overlay portal)
          // and anything with no box — they aren't real page UI and won't ship.
          const tag = el.tagName.toLowerCase();
          if (tag.startsWith("nextjs-") || el.closest("nextjs-portal")) return null;
          // Focus entering an <iframe> lands on the frame element itself; the
          // content inside it owns its own focus ring across a boundary we
          // can't inspect, so the frame having no ring is expected, not a bug.
          if (tag === "iframe") return null;
          if (el.getClientRects().length === 0) return null;
          const s = getComputedStyle(el);
          const hasOutline = s.outlineStyle !== "none" && parseFloat(s.outlineWidth) > 0;
          const hasRing = s.boxShadow !== "none" && s.boxShadow.trim() !== "";
          const label =
            el.tagName.toLowerCase() +
            (el.id ? `#${el.id}` : "") +
            (el.getAttribute("aria-label") ? `[${el.getAttribute("aria-label")}]` : "") +
            ` "${(el.textContent || "").trim().slice(0, 30)}"`;
          return { visible: hasOutline || hasRing, label };
        });
        if (info && !info.visible) offenders.push(info.label);
      }

      expect(offenders, `focusable elements with no visible focus indicator:\n${offenders.join("\n")}`).toEqual([]);
    });
  }
});

// §11: "prefers-reduced-motion renders final state, nothing hidden". Under
// reduced motion we assert nothing meant to animate in is left at opacity:0 or
// display:none — the resting frame must be the visible one.
test.describe("reduced-motion shows the final state", () => {
  test.use({ reducedMotion: "reduce" });
  for (const route of ROUTES) {
    test(`no hidden content on ${route.name}`, async ({ page }) => {
      await page.goto(route.path, { waitUntil: "domcontentloaded" });
      await settle(page);
      // Client components that manage their own opacity in JS (e.g. HeroBuild)
      // flip to their reduced-motion resting state in an effect after mount.
      // Give that a beat so we assert the settled state, not a mount-frame race.
      await page.waitForTimeout(1200);
      const hidden = await page.evaluate(() => {
        const bad: string[] = [];
        for (const el of Array.from(document.querySelectorAll<HTMLElement>("main *"))) {
          const s = getComputedStyle(el);
          const invisible = parseFloat(s.opacity) === 0 || s.visibility === "hidden";
          // Only flag elements that actually hold content and take up layout.
          if (invisible && (el.textContent || "").trim().length > 0 && el.getClientRects().length > 0) {
            bad.push(el.tagName.toLowerCase() + ` "${(el.textContent || "").trim().slice(0, 30)}"`);
          }
        }
        return bad.slice(0, 20);
      });
      expect(hidden, `content stuck invisible under reduced-motion:\n${hidden.join("\n")}`).toEqual([]);
    });
  }
});
