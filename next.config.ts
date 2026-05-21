import type { NextConfig } from "next";

// CSP allowlist for everything this site actually loads. Tightened later
// is easier than debugging a broken site, so favour explicit hosts over
// wildcards where practical.
const isDev = process.env.NODE_ENV === "development";
const csp = [
  "default-src 'self'",
  // 'unsafe-inline' is required for Next.js inline hydration scripts and
  // the JSON-LD blocks. Replace with nonces via middleware later if you
  // want an A+ on securityheaders.com.
  // 'unsafe-eval' is required in dev for Next.js Fast Refresh (HMR).
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://www.clarity.ms https://*.clarity.ms https://www.google.com https://www.gstatic.com https://js.stripe.com https://*.stripe.com https://assets.calendly.com`,
  // Tailwind/CSS-in-JS injects inline styles.
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.googletagmanager.com https://*.clarity.ms https://c.bing.com https://www.google.com https://api.stripe.com https://*.upstash.io https://getscreen.me",
  "frame-src https://js.stripe.com https://www.google.com https://*.calendly.com https://getscreen.me",
  "media-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ["**/node_modules", "**/.git", "**/.next"],
      };
    }
    return config;
  },
};

export default nextConfig;
