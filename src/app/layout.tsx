import type { Metadata } from "next";

import { Lexend } from "next/font/google";

import "./globals.css";
import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";

const lexend = Lexend({
    variable: "--font-lexend",
    subsets: ['latin'],
})

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
      <body className={`${lexend.variable} antialiased`}>
        <MainNavigation />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
