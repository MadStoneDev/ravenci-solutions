import type { Config } from "tailwindcss";

/**
 * RAVENCI — Tailwind 3.4 config fragment.
 * Merge into your existing config; don't replace it wholesale.
 * Everything here reads from the CSS custom properties in tokens/globals.css.
 */
const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "5rem" }, // 20px mobile, 80px desktop
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
        // Purple lives here and nowhere else.
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
      },

      borderRadius: {
        none: "var(--radius-none)",
        sm: "var(--radius)",
        DEFAULT: "var(--radius)",
        md: "var(--radius-md)",
      },

      boxShadow: {
        none: "var(--shadow-0)",
        1: "var(--shadow-1)",
        2: "var(--shadow-2)",
      },

      fontFamily: {
        // Wired up in tokens/fonts.ts
        sans: ["var(--font-archivo)", "Helvetica Neue", "Arial", "sans-serif"],
        mono: [
          "var(--font-jetbrains-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },

      /**
       * Type scale. [size, { lineHeight, letterSpacing, fontWeight }]
       * display-* clamp between mobile and 1440.
       */
      fontSize: {
        "display-xl": [
          "clamp(2.375rem, 1.2rem + 4.2vw, 4.25rem)", // 38 -> 68
          { lineHeight: "1.02", letterSpacing: "-0.035em", fontWeight: "700" },
        ],
        "display-l": [
          "clamp(1.875rem, 1.1rem + 2.6vw, 2.875rem)", // 30 -> 46
          { lineHeight: "1.06", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        "display-m": [
          "clamp(1.625rem, 1.2rem + 1.5vw, 2.125rem)", // 26 -> 34
          { lineHeight: "1.12", letterSpacing: "-0.025em", fontWeight: "700" },
        ],
        "heading-m": [
          "1.625rem",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "heading-s": [
          "1.25rem",
          { lineHeight: "1.25", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        lead: ["1.1875rem", { lineHeight: "1.55" }],
        body: ["1rem", { lineHeight: "1.65" }],
        small: ["0.875rem", { lineHeight: "1.55" }],
        metric: [
          "clamp(2.125rem, 1rem + 3.4vw, 3.875rem)", // 34 -> 62
          { lineHeight: "1", letterSpacing: "-0.04em", fontWeight: "700" },
        ],
        // Mono section labels: 01 / BUILD
        label: [
          "0.6875rem",
          { lineHeight: "1", letterSpacing: "0.14em", fontWeight: "500" },
        ],
        "label-sm": [
          "0.625rem",
          { lineHeight: "1", letterSpacing: "0.12em", fontWeight: "500" },
        ],
      },

      spacing: {
        "section-y": "6rem", // 96px desktop; use py-14 (56px) below lg
        gutter: "1.5rem", // 24px, the 12-col gutter
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
        measure: "34rem", // 544px, ~68ch for body copy in columns
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
