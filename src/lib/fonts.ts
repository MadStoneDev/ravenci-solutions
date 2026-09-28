// src/lib/fonts.ts
// Two families, no serif. Both self-hosted by next/font — no Google Fonts
// network request at runtime, which is part of holding the 85+ PageSpeed line.

import { Archivo, JetBrains_Mono } from "next/font/google";

export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-archivo",
  // Generates a size-adjusted fallback so the swap doesn't shift layout.
  adjustFontFallback: true,
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  adjustFontFallback: true,
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

/* app/layout.tsx
 *
 * import { archivo, jetbrainsMono } from "@/lib/fonts";
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html lang="en-AU" className={`${archivo.variable} ${jetbrainsMono.variable}`}>
 *       <body className="font-sans">{children}</body>
 *     </html>
 *   );
 * }
 */
