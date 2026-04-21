import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import MicrosoftClarity from "@/components/metrics-microsoft-clarity";

import "./globals.css";

import { Lexend, Playfair_Display } from "next/font/google";

import MainFooter from "@/components/main-footer";
import MainNavigation from "@/components/main-navigation";
import SpinningCircleText from "@/components/spinning-circle-text";
import ReCaptchaProvider from "@/components/recaptcha-provider";
import CookieConsent from "@/components/cookie-consent";

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

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "RAVENCI Solutions",
    url: "https://ravenci.solutions",
    publisher: {
      "@type": "Organization",
      name: "RAVENCI Solutions",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://ravenci.solutions/articles?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const jsonLdVideo = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "RAVENCI Solutions — Digital Development & Design",
    description:
      "See how RAVENCI Solutions delivers high-performance custom websites for Australian businesses. 20+ years of experience, 85+ PageSpeed guaranteed.",
    thumbnailUrl: "https://ravenci.solutions/og-image.jpg",
    uploadDate: "2024-01-01",
    contentUrl: "https://ravenci.solutions/ravenci-promo.mp4",
    publisher: {
      "@type": "Organization",
      name: "RAVENCI Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://ravenci.solutions/ravenci-logo.svg",
      },
    },
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
    <html lang="en-AU">
      <head>
        <link rel="alternate" hrefLang="en-au" href="https://ravenci.solutions" />
        <link rel="alternate" hrefLang="x-default" href="https://ravenci.solutions" />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebSite),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdVideo),
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-ravenci-primary focus:text-white focus:rounded-md focus:outline-none"
        >
          Skip to main content
        </a>
        <ReCaptchaProvider>
          <MainNavigation />
          <div id="main-content">{children}</div>
          <MainFooter />

          <SpinningCircleText text={"Book Now · Free Consultation · "} />
        </ReCaptchaProvider>

        <MicrosoftClarity />
        <CookieConsent />
      </body>
    </html>
  );
}
