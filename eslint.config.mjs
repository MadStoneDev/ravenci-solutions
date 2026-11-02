import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Typographic-only rule: unescaped ' and " render fine in JSX prose and
      // this fires across hundreds of lines of genuine copy. Not worth it.
      "react/no-unescaped-entities": "off",
      // New React-Compiler-aware hooks rules. The patterns they flag here
      // (reading matchMedia / localStorage on mount, closing a menu on route
      // change) are intentional, so surface them as warnings, not blockers.
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/immutability": "warn",
    },
  },
  {
    // Build/tooling configs legitimately use CommonJS require() (e.g. Tailwind
    // plugins). Allow it there without loosening the rule for app code.
    files: ["**/*.config.{js,cjs,mjs,ts}"],
    rules: { "@typescript-eslint/no-require-imports": "off" },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Project-specific: the design/ working folder is served as static review
    // files and is already excluded from tsc; keep it out of lint too.
    "design/**",
    // PocketBase-generated hooks and migrations (vendor output, not our code).
    "pocketbase/**",
  ]),
]);

export default eslintConfig;
