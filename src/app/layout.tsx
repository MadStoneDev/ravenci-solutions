import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import MicrosoftClarity from "@/components/metrics-microsoft-clarity";

import "./globals.css";

import { Lexend, Playfair_Display } from "next/font/google";

import MainFooter from "@/components/main-footer";
import MainNavigation from "@/components/main-navigation";
import SpinningCircleText from "@/components/spinning-circle-text";
import ReCaptchaProvider from "@/components/recaptcha-provider";
import CookieConsent from "@/components/cookie-consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

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
  icons: {
    icon: "/favicon.ico",
  },
  title:
    "RAVENCI Solutions | Digital Development & Design | Brisbane, Australia",
  description:
    "RAVENCI Solutions is a Brisbane-based web development and design agency with 25+ years of experience. Custom Next.js and WordPress websites from $4,950. Hosting, maintenance, and retainer packages for Australian businesses.",
  openGraph: {
    title:
      "RAVENCI Solutions | Digital Development & Design | Brisbane, Australia",
    description:
      "RAVENCI Solutions is a Brisbane-based web development and design agency with 25+ years of experience. Custom Next.js and WordPress websites from $4,950. Hosting, maintenance, and retainer packages for Australian businesses.",
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
      "RAVENCI Solutions is a Brisbane-based web development and design agency with 25+ years of experience. Custom websites from $4,950.",
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
      "Premium web development and digital design agency in Brisbane, Australia. 25+ years of experience building high-performance websites for established businesses.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brisbane",
      addressRegion: "QLD",
      postalCode: "4000",
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
        <meta name="geo.region" content="AU-QLD" />
        <meta name="geo.placename" content="Brisbane" />
      </head>
      <body
        className={`relative ${lexend.variable} ${playfairDisplay.variable} antialiased`}
      >
        {/* Consent default — denied until user accepts. Must run before
            GA/GTM so trackers respect the signal. */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied'});`}
        </Script>
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
        {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}

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
