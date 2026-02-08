import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import MicrosoftClarity from "@/components/metrics-microsoft-clarity";

import "./globals.css";

import { Lexend, Playfair_Display } from "next/font/google";

import MainFooter from "@/components/main-footer";
import MainNavigation from "@/components/main-navigation";
import SpinningCircleText from "@/components/spinning-circle-text";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ravenci.solutions"),
  title:
    "RAVENCI Solutions | Digital Development & Design | Brisbane, Australia",
  description:
    "Innovative and expert solutions to a digital tomorrow - RAVENCI is an Australian website and app development" +
    " agency based in Brisbane, Queensland.",
  openGraph: {
    title:
      "RAVENCI Solutions | Digital Development & Design | Brisbane, Australia",
    description:
      "Innovative and expert solutions to a digital tomorrow - RAVENCI is an Australian website and app development" +
      " agency based in Brisbane, Queensland.",
    url: "https://ravenci.solutions",
    siteName: "RAVENCI Solutions",
    images: [
      {
        url: "/og-image.jpg", // Replace with your image path once created
        width: 1200,
        height: 630,
        alt: "RAVENCI Solutions - Digital Development & Design Agency Brisbane",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "RAVENCI Solutions | Digital Development & Design | Brisbane, Australia",
    description:
      "Innovative and expert solutions to a digital tomorrow - RAVENCI is an Australian website and app development" +
      " agency based in Brisbane, Queensland.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "RAVENCI Solutions",
    alternateName: "RAVENCI",
    url: "https://ravenci.solutions",
    logo: "https://ravenci.solutions/ravenci-logo.svg",
    image: "https://ravenci.solutions/og-image.jpg",
    description:
      "Premium web development and digital design agency in Brisbane, Australia. 20+ years of experience building high-performance websites for established businesses.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brisbane",
      addressRegion: "QLD",
      addressCountry: "AU",
    },
    telephone: "+61731061836",
    priceRange: "$$$$",
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    serviceType: [
      "Web Development",
      "Website Design",
      "Business Design",
      "Web Hosting",
      "Website Maintenance",
      "SEO",
    ],
    foundingDate: "2018",
    knowsAbout: [
      "Web Development",
      "Next.js",
      "React",
      "WordPress",
      "E-commerce",
      "UI/UX Design",
      "SEO",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <GoogleAnalytics gaId={`G-8TL2E4F9CH`} />
      <GoogleTagManager gtmId={`GTM-K6S8KCK5`} />

      <body
        className={`relative ${lexend.variable} ${playfairDisplay.variable} antialiased`}
      >
        <MainNavigation />
        {children}
        <MainFooter />

        <SpinningCircleText text={"Book Now · Free Consultation · "} />

        <MicrosoftClarity />
      </body>
    </html>
  );
}
