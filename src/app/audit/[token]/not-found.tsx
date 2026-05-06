import Link from "next/link";

export default function AuditNotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-ravenci-primary">
          Audit not found
        </p>
        <h1 className="mt-4 text-3xl font-medium text-ravenci-dark">
          We can&apos;t find that report
        </h1>
        <p className="mt-4 text-neutral-600 leading-relaxed">
          The link may have expired or been mistyped. If you were expecting an
          audit and can&apos;t find the original email, get in touch and
          we&apos;ll resend the link.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-5 py-2.5 bg-ravenci-dark text-white rounded-full hover:bg-ravenci-primary transition-colors text-sm"
          >
            Back to RAVENCI
          </Link>
          <Link
            href="/free-audit"
            className="px-5 py-2.5 bg-white text-ravenci-dark border border-neutral-300 rounded-full hover:bg-neutral-100 transition-colors text-sm"
          >
            Request a new audit
          </Link>
        </div>
      </div>
    </main>
  );
}
