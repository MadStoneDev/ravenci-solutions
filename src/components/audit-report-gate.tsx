"use client";

import { useState } from "react";
import Link from "next/link";

import {
  IconDownload,
  IconCheck,
  IconLoader2,
  IconArrowRight,
} from "@tabler/icons-react";

export default function AuditReportGate() {
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
      const res = await fetch("/api/audit-report-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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
      <div className="max-w-2xl mx-auto p-8 md:p-10 bg-white border border-neutral-200 rounded-lg text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ravenci-primary mb-4">
          <IconCheck size={24} className="text-white" />
        </div>
        <h3 className="text-2xl font-medium text-ravenci-dark mb-2">
          Report ready, {form.name.split(" ")[0]}.
        </h3>
        <p className="text-neutral-600 mb-6 leading-relaxed">
          We&apos;ve also sent a copy to{" "}
          <strong className="text-ravenci-dark">{form.email}</strong>. Save it
          as a PDF or print directly from the report page.
        </p>
        <Link
          href="/brisbane-website-audit/report"
          className="inline-flex items-center gap-2 px-6 py-3 bg-ravenci-primary text-white rounded-full hover:bg-ravenci-primary/85 transition-colors"
        >
          Open the Full Report
          <IconArrowRight size={18} />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 md:p-8 bg-white border border-neutral-200 rounded-lg">
      <div className="flex items-start gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-ravenci-primary/10 flex items-center justify-center flex-shrink-0">
          <IconDownload size={20} className="text-ravenci-primary" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-medium text-ravenci-dark">
            Get the Full Report
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            All 50 sites, every category, every recommendation — in a printable
            PDF you can share with your team.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="audit-name"
              className="block text-sm font-medium text-neutral-700 mb-1"
            >
              Your name
            </label>
            <input
              id="audit-name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="First and last name"
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-ravenci-primary focus:ring-1 focus:ring-ravenci-primary"
            />
          </div>
          <div>
            <label
              htmlFor="audit-email"
              className="block text-sm font-medium text-neutral-700 mb-1"
            >
              Email
            </label>
            <input
              id="audit-email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@yourbusiness.com.au"
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-ravenci-primary focus:ring-1 focus:ring-ravenci-primary"
            />
          </div>
        </div>

        {status === "error" && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="self-start inline-flex items-center gap-2 px-6 py-3 bg-ravenci-primary text-white rounded-full hover:bg-ravenci-primary/85 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {status === "loading" ? (
            <>
              <IconLoader2 size={18} className="animate-spin" />
              Preparing report...
            </>
          ) : (
            <>
              <IconDownload size={18} />
              Get the Report
            </>
          )}
        </button>

        <p className="text-xs text-neutral-500 leading-relaxed mt-1">
          We&apos;ll only use your email to send the report and occasional
          related insights. No spam, unsubscribe anytime. See our{" "}
          <Link
            href="/privacy-policy"
            className="text-ravenci-primary hover:underline"
          >
            privacy policy
          </Link>
          .
        </p>
      </form>
    </div>
  );
}
