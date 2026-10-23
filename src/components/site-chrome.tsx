"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Renders the public site chrome (nav + footer) around the page, except under
 * /admin which has its own full-screen shell. Done client-side with usePathname
 * so every public route stays statically rendered (reading headers() in the root
 * layout would force the whole site to render dynamically).
 */
export default function SiteChrome({
  nav,
  footer,
  children,
}: {
  nav: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      {nav}
      <div id="main-content" className="pt-16 md:pt-[76px]">
        {children}
      </div>
      {footer}
    </>
  );
}
