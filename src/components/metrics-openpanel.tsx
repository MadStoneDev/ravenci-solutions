"use client";

import { OpenPanelComponent } from "@openpanel/nextjs";
import { useEffect, useState } from "react";

const OPENPANEL_CLIENT_ID = process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID;

const OpenPanel = () => {
  const [consentGranted, setConsentGranted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("ravenci-cookie-consent") === "accepted") {
      setConsentGranted(true);
    }
    const onAccept = () => setConsentGranted(true);
    window.addEventListener("ravenci:consent-accepted", onAccept);
    return () =>
      window.removeEventListener("ravenci:consent-accepted", onAccept);
  }, []);

  if (!OPENPANEL_CLIENT_ID || !consentGranted) return null;

  // Route the script and events through our own /api/op proxy so ad blockers
  // can't block them. The proxy is defined in src/app/api/op/[...op]/route.ts.
  return (
    <OpenPanelComponent
      clientId={OPENPANEL_CLIENT_ID}
      apiUrl="/api/op"
      scriptUrl="/api/op/op1.js"
      trackScreenViews
      trackOutgoingLinks
      trackAttributes
    />
  );
};

export default OpenPanel;
