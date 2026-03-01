import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import MicrosoftClarity from "@/components/metrics-microsoft-clarity";

import "./globals.css";

import { Lexend, Playfair_Display } from "next/font/google";

import MainFooter from "@/components/main-footer";
import MainNavigation from "@/components/main-navigation";
import SpinningCircleText from "@/components/spinning-circle-text";
import ReCaptchaProvider from "@/components/recaptcha-provider";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ravenci.solutions"),
  title:
    "RAVENCI Solutions | Digital Development & Design | Brisbane, Australia",
  description:
    "RAVENCI Solutions is a Brisbane-based web development and design agency with 20+ years of experience. Custom Next.js and WordPress websites from $3,490. Hosting, maintenance, and retainer packages for Australian businesses.",
  openGraph: {
    title:
      "RAVENCI Solutions | Digital Development & Design | Brisbane, Australia",
    description:
      "RAVENCI Solutions is a Brisbane-based web development and design agency with 20+ years of experience. Custom Next.js and WordPress websites from $3,490. Hosting, maintenance, and retainer packages for Australian businesses.",
    url: "https://ravenci.solutions",
    siteName: "RAVENCI Solutions",
    images: [
      {
        url: "/og-image.jpg",
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
      "RAVENCI Solutions is a Brisbane-based web development and design agency with 20+ years of experience. Custom websites from $3,490.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdOrganization = {
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
    founder: {
      "@type": "Person",
      name: "Richard Haddad",
      jobTitle: "Founder",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      ratingCount: "6",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Geoff Beisler" },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "I could not recommend Richard more highly. His knowledge is remarkable, his professionalism exceptional, and the way he completely sorted my issues, quickly, effortlessly was simply brilliant.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Adam Bisset" },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Richard is the absolute best at what he does. Our brand new startup is launching with the best possible website I could have imagined.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Danni Green" },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Eleven out of ten for an amazing service! Richard goes above and beyond to ensure all the i's are dotted and t's are crossed.",
      },
    ],
  };

  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "RAVENCI Solutions",
    url: "https://ravenci.solutions",
    telephone: "+61731061836",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brisbane",
      addressRegion: "QLD",
      postalCode: "4000",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -27.4698,
      longitude: 153.0251,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    priceRange: "$$$$",
    image: "https://ravenci.solutions/og-image.jpg",
    sameAs: ["https://www.linkedin.com/company/91459779/"],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdLocalBusiness),
          }}
        />
        <meta name="geo.region" content="AU-QLD" />
        <meta name="geo.placename" content="Brisbane" />
      </head>
      <GoogleAnalytics gaId={`G-8TL2E4F9CH`} />
      <GoogleTagManager gtmId={`GTM-K6S8KCK5`} />

      <body
        className={`relative ${lexend.variable} ${playfairDisplay.variable} antialiased`}
      >
        <ReCaptchaProvider>
          <MainNavigation />
          {children}
          <MainFooter />

          <SpinningCircleText text={"Book Now · Free Consultation · "} />
        </ReCaptchaProvider>

        <MicrosoftClarity />
      </body>
    </html>
  );
}
