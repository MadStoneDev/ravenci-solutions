"use client";

import { useState, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { IconSearch, IconCheck } from "@tabler/icons-react";

import { trackLead } from "@/lib/analytics";

const FIELD =
  "h-12 w-full rounded-sm border border-input/60 bg-background px-3.5 text-body text-foreground outline-none transition-colors focus:border-accent";
const LABEL = "mb-1.5 block font-mono text-label-sm uppercase text-muted-foreground";

export default function VisibilityCheckForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    websiteUrl: "",
    intent: "",
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

        trackLead("visibility-check");
        setStatus("success");
        setFormData({ name: "", email: "", businessName: "", websiteUrl: "", intent: "" });
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
      <div className="flex flex-col items-center rounded-sm border border-border bg-card p-10 text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-accent text-accent">
          <IconCheck size={28} />
        </div>
        <h3 className="text-heading-s text-foreground">Request received</h3>
        <p className="mt-2 max-w-md text-small text-muted-foreground">
          I&apos;ll review your website and send your free visibility report within
          two business days. Keep an eye on your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-sm border border-border bg-card p-6 md:p-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="vc-name" className={LABEL}>Your name</label>
          <input
            id="vc-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
            placeholder="Jane Whitlock"
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="vc-email" className={LABEL}>Email</label>
          <input
            id="vc-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
            placeholder="jane@company.com.au"
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="vc-business" className={LABEL}>Business name</label>
          <input
            id="vc-business"
            type="text"
            required
            value={formData.businessName}
            onChange={(e) => setFormData((p) => ({ ...p, businessName: e.target.value }))}
            placeholder="Whitlock Constructions"
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="vc-website" className={LABEL}>Website URL</label>
          <input
            id="vc-website"
            type="url"
            required
            value={formData.websiteUrl}
            onChange={(e) => setFormData((p) => ({ ...p, websiteUrl: e.target.value }))}
            placeholder="https://"
            className={FIELD}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="vc-intent" className={LABEL}>What are you after? (optional)</label>
        <select
          id="vc-intent"
          value={formData.intent}
          onChange={(e) => setFormData((p) => ({ ...p, intent: e.target.value }))}
          className={`${FIELD} appearance-none`}
        >
          <option value="">Pick the closest match (optional)</option>
          <option value="rebuild">Considering a rebuild</option>
          <option value="fix-issues">Wanting to fix specific issues</option>
          <option value="comparing">Comparing agencies for a future project</option>
          <option value="exploring">Just exploring how my site looks</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      {status === "error" && (
        <div className="mt-4 rounded-sm border border-destructive/40 bg-destructive/10 p-3">
          <p className="text-small text-destructive">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-accent px-6 text-sm font-semibold text-accent-foreground transition-all duration-fast hover:bg-accent/90 disabled:opacity-50"
      >
        {status === "loading" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-accent-foreground border-t-transparent" />
            Sending...
          </>
        ) : (
          <>
            <IconSearch size={18} aria-hidden />
            Get my free report
          </>
        )}
      </button>

      <p className="mt-3 text-small text-muted-foreground">
        Sent by me, usually within a business day. No mailing list, no follow-up
        sequence. Protected by reCAPTCHA.
      </p>
    </form>
  );
}
