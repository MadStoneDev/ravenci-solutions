"use client";

import { useState } from "react";
import Link from "next/link";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import {
  IconDownload,
  IconCheck,
  IconArrowRight,
} from "@tabler/icons-react";

const FIELD =
  "h-12 w-full rounded-sm border border-input/60 bg-background px-3.5 text-body text-foreground outline-none transition-colors focus:border-accent";
const LABEL = "mb-1.5 block font-mono text-label-sm uppercase text-muted-foreground";

export default function AuditReportGate() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const recaptchaToken = executeRecaptcha
        ? await executeRecaptcha("audit_report_request")
        : "";

      const res = await fetch("/api/audit-report-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptchaToken }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Submission failed");
      }
      setStatus("success");
    } catch (e) {
      setStatus("error");
      setErrorMessage(e instanceof Error ? e.message : "Submission failed");
    }
  };

  if (status === "success") {
    return (
      <div className="mx-auto max-w-2xl rounded-sm border border-border bg-card p-8 text-center md:p-10">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent text-accent">
          <IconCheck size={24} />
        </div>
        <h3 className="text-heading-s text-foreground">
          Report ready, {form.name.split(" ")[0]}.
        </h3>
        <p className="mt-2 text-body text-muted-foreground">
          I&apos;ve also sent a copy to{" "}
          <strong className="text-foreground">{form.email}</strong>. Save it as
          a PDF or print directly from the report page.
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/brisbane-website-audit/report"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-accent px-6 text-sm font-semibold text-accent-foreground transition-all duration-fast hover:bg-accent/90"
          >
            Open the full report
            <IconArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl rounded-sm border border-border bg-card p-6 md:p-8">
      <div className="mb-6 flex items-start gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-accent text-accent">
          <IconDownload size={20} />
        </div>
        <div>
          <h3 className="text-heading-s text-foreground">
            Get the full report
          </h3>
          <p className="mt-1 text-small text-muted-foreground">
            All 50 sites, every category, every recommendation, in a printable
            PDF you can share with your team.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="audit-name" className={LABEL}>
              Your name
            </label>
            <input
              id="audit-name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="First and last name"
              className={FIELD}
            />
          </div>
          <div>
            <label htmlFor="audit-email" className={LABEL}>
              Email
            </label>
            <input
              id="audit-email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@yourbusiness.com.au"
              className={FIELD}
            />
          </div>
        </div>

        {status === "error" && (
          <div className="rounded-sm border border-destructive/40 bg-destructive/10 p-3">
            <p className="text-small text-destructive">{errorMessage}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-accent px-6 text-sm font-semibold text-accent-foreground transition-all duration-fast hover:bg-accent/90 disabled:opacity-50"
        >
          {status === "loading" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-accent-foreground border-t-transparent" />
              Preparing report...
            </>
          ) : (
            <>
              <IconDownload size={18} />
              Get the report
            </>
          )}
        </button>

        <p className="mt-1 text-small text-muted-foreground">
          I&apos;ll only use your email to send the report and occasional
          related insights. No spam, unsubscribe anytime. See the{" "}
          <Link href="/privacy-policy" className="text-accent hover:underline">
            privacy policy
          </Link>
          .
        </p>
      </form>
    </div>
  );
}
