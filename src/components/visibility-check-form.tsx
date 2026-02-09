"use client";

import { useState, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { IconSearch, IconCheck } from "@tabler/icons-react";

export default function VisibilityCheckForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    websiteUrl: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus("loading");
      setErrorMessage("");

      try {
        let recaptchaToken = "";
        if (executeRecaptcha) {
          recaptchaToken = await executeRecaptcha("visibility_check");
        }

        const response = await fetch("/api/visibility-check", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, recaptchaToken }),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || "Something went wrong");
        }

        setStatus("success");
        setFormData({ name: "", email: "", businessName: "", websiteUrl: "" });
      } catch (err) {
        setStatus("error");
        setErrorMessage(
          err instanceof Error ? err.message : "Something went wrong. Please try again.",
        );
      }
    },
    [executeRecaptcha, formData],
  );

  if (status === "success") {
    return (
      <div className="py-12 flex flex-col items-center text-center">
        <div className="mb-4 p-3 rounded-full bg-green-100">
          <IconCheck size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">Request Received</h3>
        <p className="text-neutral-600 max-w-md">
          We&apos;ll review your website and send your free visibility report
          within 2 business days. Keep an eye on your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="vc-name" className="block text-sm font-medium text-neutral-700 mb-1">
            Your Name
          </label>
          <input
            id="vc-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            placeholder="Jane Smith"
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-ravenci-primary focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="vc-email" className="block text-sm font-medium text-neutral-700 mb-1">
            Email Address
          </label>
          <input
            id="vc-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            placeholder="jane@example.com"
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-ravenci-primary focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="vc-business" className="block text-sm font-medium text-neutral-700 mb-1">
            Business Name
          </label>
          <input
            id="vc-business"
            type="text"
            required
            value={formData.businessName}
            onChange={(e) => setFormData((prev) => ({ ...prev, businessName: e.target.value }))}
            placeholder="Smith & Co."
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-ravenci-primary focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="vc-website" className="block text-sm font-medium text-neutral-700 mb-1">
            Website URL
          </label>
          <input
            id="vc-website"
            type="url"
            required
            value={formData.websiteUrl}
            onChange={(e) => setFormData((prev) => ({ ...prev, websiteUrl: e.target.value }))}
            placeholder="https://example.com"
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-ravenci-primary focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      {status === "error" && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto px-8 py-3 bg-ravenci-primary text-white font-semibold rounded-lg hover:bg-ravenci-primary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
            Sending...
          </>
        ) : (
          <>
            <IconSearch size={18} />
            Get My Free Report
          </>
        )}
      </button>

      <p className="mt-3 text-xs text-neutral-500">
        No spam, no obligation. We&apos;ll only use your email to send the
        report. Protected by reCAPTCHA.
      </p>
    </form>
  );
}
