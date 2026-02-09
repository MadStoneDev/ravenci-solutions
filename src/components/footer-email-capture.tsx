"use client";

import { useState } from "react";

export default function FooterEmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/visibility-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Footer signup",
          email,
          businessName: "Not provided",
          websiteUrl: "Not provided",
        }),
      });

      if (!response.ok) throw new Error("Failed to submit");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="mt-12 py-4 px-4 bg-ravenci-primary/20 rounded-lg text-center">
        <p className="text-sm text-green-400">
          Thanks! We&apos;ll be in touch with your visibility report.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-12 pt-6 border-t border-neutral-700">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-white">
            Free AI & Google Visibility Check
          </p>
          <p className="text-xs text-neutral-500">
            Find out how search engines and AI see your business
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="px-3 py-2 bg-neutral-800 border border-neutral-600 rounded-lg text-sm text-white placeholder-neutral-500 focus:ring-1 focus:ring-ravenci-primary focus:border-transparent outline-none w-48"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-4 py-2 bg-ravenci-primary text-white text-sm font-medium rounded-lg hover:bg-ravenci-primary/80 transition-colors disabled:opacity-50"
          >
            {status === "loading" ? "..." : "Get Report"}
          </button>
        </form>
      </div>
      {status === "error" && (
        <p className="mt-2 text-xs text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
