import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";

import { Lexend } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import MicrosoftClarity from "@/components/metrics-microsoft-clarity";

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
  return (
    <html lang="en">
      <GoogleAnalytics gaId={`G-8TL2E4F9CH`} />
      <GoogleTagManager gtmId={`GTM-K6S8KCK5`} />
      <body className={`relative ${lexend.variable} antialiased`}>
        <MainNavigation />
        {children}
        <MainFooter />

        <SpinningCircleText />

        <MicrosoftClarity />
      </body>
    </html>
  );
}
