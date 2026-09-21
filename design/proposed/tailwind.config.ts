import type { Config } from "tailwindcss";

/**
 * RAVENCI — RECONCILED tailwind.config.ts  (PROPOSAL — not yet applied)
 * Base = design/tokens/tailwind.config.ts, merged with the existing config.
 *
 *   [NEW]     from the redesign token layer
 *   [LEGACY]  kept so existing pages compile; remove once grep shows 0 uses
 *   [OVERRIDE] README §3 / §1.2 mandated change
 */
const config: Config = {
  darkMode: ["class"],
  // [NEW] broad glob — covers app, components, pages and content mdx
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "5rem" }, // 20px / 80px
      screens: { "2xl": "1440px" },
    },
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        subtle: "hsl(var(--subtle-foreground) / <alpha-value>)",
        // Purple lives here (and, via the legacy alias below, nowhere new).
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        border: "hsl(var(--border) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        // [OVERRIDE §1.2] input restored to colours; alpha via utility (border-input/20)
        input: "hsl(var(--input) / <alpha-value>)",

        /* [LEGACY] shadcn primary/secondary — only ui/button.tsx. Remove with it. */
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },

        /* [LEGACY + OVERRIDE §3] Alias the old brand names to the new tokens so
           the 461 `ravenci-primary` / 323 `ravenci-dark` uses instantly adopt
           the new palette (retiring #7F1670) while class names stay valid.
           Migrate to accent/foreground per page, then delete this block. */
        ravenci: {
          dark: "hsl(var(--foreground) / <alpha-value>)",
          primary: "hsl(var(--accent) / <alpha-value>)",
        },
      },

      borderRadius: {
        none: "var(--radius-none)",
        sm: "var(--radius)",
        DEFAULT: "var(--radius)",
        md: "var(--radius-md)",
        // lg / xl / full remain from Tailwind defaults (rounded-lg == 0.5rem,
        // matching the old --radius, so existing rounded-lg/full are unaffected)
      },

      boxShadow: {
        none: "var(--shadow-0)",
        1: "var(--shadow-1)",
        2: "var(--shadow-2)",
      },

      fontFamily: {
        sans: ["var(--font-archivo)", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        /* [LEGACY] Playfair — 182 `font-serif` uses across 30 files. Keep until
           those pages are migrated, then remove Playfair from fonts + this line. */
        serif: ["Playfair Display", "serif"],
      },

      fontSize: {
        "display-xl": ["clamp(2.375rem, 1.2rem + 4.2vw, 4.25rem)", { lineHeight: "1.02", letterSpacing: "-0.035em", fontWeight: "700" }],
        "display-l": ["clamp(1.875rem, 1.1rem + 2.6vw, 2.875rem)", { lineHeight: "1.06", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-m": ["clamp(1.625rem, 1.2rem + 1.5vw, 2.125rem)", { lineHeight: "1.12", letterSpacing: "-0.025em", fontWeight: "700" }],
        "heading-m": ["1.625rem", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "heading-s": ["1.25rem", { lineHeight: "1.25", letterSpacing: "-0.02em", fontWeight: "600" }],
        lead: ["1.1875rem", { lineHeight: "1.55" }],
        body: ["1rem", { lineHeight: "1.65" }],
        small: ["0.875rem", { lineHeight: "1.55" }],
        metric: ["clamp(2.125rem, 1rem + 3.4vw, 3.875rem)", { lineHeight: "1", letterSpacing: "-0.04em", fontWeight: "700" }],
        /* [OVERRIDE §3] mono label floor raised to 12px / 11px */
        label: ["0.75rem", { lineHeight: "1", letterSpacing: "0.14em", fontWeight: "500" }],
        "label-sm": ["0.6875rem", { lineHeight: "1", letterSpacing: "0.12em", fontWeight: "500" }],

        /* [LEGACY] h1/h2/h3 — 211 uses. Remove once migrated to display-*/heading-*. */
        h1: ["4rem", { lineHeight: "5rem" }],
        h2: ["2rem", { lineHeight: "2rem" }],
        h3: ["1.5rem", { lineHeight: "2rem" }],
      },

      spacing: {
        "section-y": "6rem",
        gutter: "1.5rem",
      },

      transitionTimingFunction: {
        standard: "var(--ease-standard)",
        exit: "var(--ease-exit)",
        spring: "var(--ease-spring)",
      },
      transitionDuration: {
        fast: "var(--dur-fast)",
        base: "var(--dur-base)",
        slow: "var(--dur-slow)",
        story: "var(--dur-story)",
      },

      maxWidth: {
        prose: "42.5rem", // 680px article measure
        measure: "34rem",
      },

      /* [LEGACY] logo-panel marquee (animate-infinite-scrolling-*, 1 file).
         New rv-marquee replaces it when logo-panel is restyled; remove then. */
      animation: {
        "infinite-scrolling-slow": "infinite-scrolling 40s linear infinite",
        "infinite-scrolling-normal": "infinite-scrolling 30s linear infinite",
        "infinite-scrolling-fast": "infinite-scrolling 20s linear infinite",
      },
      keyframes: {
        "infinite-scrolling": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
