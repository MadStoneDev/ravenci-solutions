"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("ravenci-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
    if (consent === "accepted") {
      window.gtag?.("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        analytics_storage: "granted",
      });
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("ravenci-cookie-consent", "accepted");
    setVisible(false);
    window.gtag?.("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted",
    });
    window.dispatchEvent(new Event("ravenci:consent-accepted"));
  };

  const handleDecline = () => {
    localStorage.setItem("ravenci-cookie-consent", "declined");
    setVisible(false);
    window.gtag?.("consent", "update", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="dark fixed bottom-0 left-0 right-0 z-[60]"
    >
      <div className="mx-4 mb-4 max-w-xl rounded-sm border border-border bg-card p-5 text-foreground shadow-2 md:mx-8 md:mb-6 md:p-6">
        <p className="text-small leading-relaxed text-muted-foreground">
          I use cookies and similar tools (Google Analytics, Microsoft Clarity)
          to understand how visitors use my site and to improve your experience.
          No personal data is sold.{" "}
          <Link href="/privacy-policy" className="text-accent hover:underline">
            Privacy Policy
          </Link>
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button type="button" variant="primary" size="sm" onClick={handleAccept}>
            Accept
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={handleDecline}
          >
            Essential only
          </Button>
        </div>
      </div>
    </div>
  );
}
