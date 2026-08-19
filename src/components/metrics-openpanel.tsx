"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const OPENPANEL_CLIENT_ID = process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID;
// Optional — set only when self-hosting OpenPanel (defaults to the cloud API).
const OPENPANEL_API_URL = process.env.NEXT_PUBLIC_OPENPANEL_API_URL;

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

  const initOptions = {
    clientId: OPENPANEL_CLIENT_ID,
    trackScreenViews: true,
    trackOutgoingLinks: true,
    trackAttributes: true,
    ...(OPENPANEL_API_URL ? { apiUrl: OPENPANEL_API_URL } : {}),
  };

  return (
    <>
      <Script
        id="openpanel-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.op=window.op||function(){var n=[];return new Proxy(function(){arguments.length&&n.push([].slice.call(arguments))},{get:function(t,r){return"q"===r?n:function(){n.push([r].concat([].slice.call(arguments)))}},has:function(t,r){return"q"===r}})}();
            window.op('init', ${JSON.stringify(initOptions)});
          `,
        }}
      />
      <Script
        id="openpanel-sdk"
        src="https://openpanel.dev/op1.js"
        strategy="afterInteractive"
        defer
        async
      />
    </>
  );
};

export default OpenPanel;
