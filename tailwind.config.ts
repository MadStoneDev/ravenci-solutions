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
      },
      fontSize: {
        h1: ["4rem", { lineHeight: "5rem" }],
        h2: ["2rem", { lineHeight: "2rem" }],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        ravenci: {
          dark: "#1b1b1b",
          primary: "#7f1670",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
