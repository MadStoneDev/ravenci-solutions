import Link from "next/link";

import { Button } from "@/components/ui/button";
import SectionLabel from "@/components/section-label";

export default function AuditNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 md:px-12 lg:px-20">
      <div className="max-w-md text-center">
        <SectionLabel label="Audit not found" className="justify-center" />
        <h1 className="mt-4 text-display-m text-foreground">
          We can&apos;t find that report
        </h1>
        <p className="mt-4 text-body text-muted-foreground">
          The link may have expired or been mistyped. If you were expecting an
          audit and can&apos;t find the original email, get in touch and
          we&apos;ll resend the link.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" variant="primary">
            <Link href="/">Back to RAVENCI</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/free-audit">Request a new audit</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
