"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
      className={`fixed bottom-0 left-0 right-0 z-[60] transform transition-transform duration-500 ease-in-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-4 mb-4 md:mx-8 md:mb-6 p-5 md:p-6 bg-ravenci-dark border border-neutral-700 rounded-lg shadow-2xl max-w-xl">
        <p className="text-sm text-neutral-300 leading-relaxed">
          We use cookies and similar tools (Google Analytics, Microsoft Clarity)
          to understand how visitors use our site and to improve your experience.
          No personal data is sold.{" "}
          <Link
            href="/privacy-policy"
            className="text-ravenci-primary hover:underline"
          >
            Privacy Policy
          </Link>
        </p>
        <div className="mt-4 flex items-center gap-3">
          <button
            type="button"
            onClick={handleAccept}
            className="px-5 py-2 text-sm font-medium bg-ravenci-primary hover:bg-ravenci-primary/85 text-white rounded-full transition-colors duration-300"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={handleDecline}
            className="px-5 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
