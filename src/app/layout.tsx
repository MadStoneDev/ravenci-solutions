import type { Metadata } from "next";

import { Lexend } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";
import SpinningCircleText from "@/components/spinning-circle-text";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "RAVENCI Solutions | Digital Development & Design | Brisbane, Australia",
  description:
    "Innovative and expert solutions to a digital tomorrow - Ravenci is an Australian website and app development agency based in Brisbane, Queensland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const size = 112; // w-28 = 28 * 4 = 112px
  const padding = 10;
  const radius = (size - padding * 2) / 2;
  const center = size / 2;

  // Create a complete circle path:
  // Move to center point, then create a full circle using two arcs
  const pathD = `
    M ${center},${padding}
    A ${radius},${radius} 0 1 1 ${center},${size - padding}
    A ${radius},${radius} 0 1 1 ${center},${padding}`;

  return (
    <html lang="en">
      <GoogleAnalytics gaId={`G-8TL2E4F9CH`} />
      <body className={`relative ${lexend.variable} antialiased`}>
        <MainNavigation />
        {children}
        <MainFooter />

        <SpinningCircleText />
      </body>
    </html>
  );
}
