import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lexend", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      fontSize: {
        h1: ["4rem", { lineHeight: "5rem" }],
        h2: ["2rem", { lineHeight: "2rem" }],
        h3: ["1.5rem", { lineHeight: "2rem" }],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        ravenci: {
          dark: "#1b1b1b",
          primary: "#7f1670",
        },
      },
      animation: {
        "infinite-scrolling-slow": "infinite-scrolling 40s linear infinite",
        "infinite-scrolling-normal": "infinite-scrolling 30s linear infinite",
        "infinite-scrolling-fast": "infinite-scrolling 20s linear infinite",
      },
      keyframes: {
        "infinite-scrolling": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-50%)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
