"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const CLARITY_ID = process.env.NEXT_PUBLIC_MICROSOFT_CLARITY;

const MicrosoftClarity = () => {
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

  if (!CLARITY_ID || !consentGranted) return null;

  return (
    <Script
      id="microsoft-clarity-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${CLARITY_ID}");
                `,
      }}
    />
  );
};

export default MicrosoftClarity;
