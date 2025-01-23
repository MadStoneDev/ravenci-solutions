import type { Metadata } from "next";

import { Lexend } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

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
  return (
    <html lang="en">
      <GoogleAnalytics gaId={`G-8TL2E4F9CH`} />
      <body className={`relative ${lexend.variable} antialiased`}>
        <MainNavigation />
        {children}
        <MainFooter />

        <SpinningCircleText />

        <Script id={`clarity-script`} strategy={`afterInteractive`}>
          {`(function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "py6lstoq0x");`}
        </Script>
      </body>
    </html>
  );
}
