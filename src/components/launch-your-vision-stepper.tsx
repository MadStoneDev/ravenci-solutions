"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { useState } from "react";
import Link from "next/link";

import {
  IconArrowRight,
  IconArrowLeft,
  IconCheck,
  IconCalendar,
  IconLoader2,
} from "@tabler/icons-react";

// Replace with your real Calendly URL when set up.
// Can also be set via NEXT_PUBLIC_CALENDLY_URL env var.
const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/ravenci-solutions/discovery-call";

const HIGH_BUDGET_VALUES = ["$10k – $25k", "$25k – $50k", "$50k+"];

type ProjectType =
  | "Business website"
  | "E-commerce store"
  | "Web application"
  | "Mobile app"
  | "Branding refresh"
  | "Hosting + maintenance only"
  | "Not sure yet";

type Stage =
  | "Starting from scratch"
  | "Need a rebuild"
  | "Have a brief or wireframes"
  | "Just exploring options";

type Timeline =
  | "ASAP (within 1 month)"
  | "1 – 3 months"
  | "3 – 6 months"
  | "Just researching for now";

type Budget =
  | "Under $5k"
  | "$5k – $10k"
  | "$10k – $25k"
  | "$25k – $50k"
  | "$50k+"
  | "Prefer not to say";

interface FormState {
  projectType: ProjectType | "";
  stage: Stage | "";
  timeline: Timeline | "";
  budget: Budget | "";
  businessName: string;
  websiteUrl: string;
  description: string;
  name: string;
  email: string;
  phone: string;
}

const PROJECT_TYPE_OPTIONS: ProjectType[] = [
  "Business website",
  "E-commerce store",
  "Web application",
  "Mobile app",
  "Branding refresh",
  "Hosting + maintenance only",
  "Not sure yet",
];

const STAGE_OPTIONS: Stage[] = [
  "Starting from scratch",
  "Need a rebuild",
  "Have a brief or wireframes",
  "Just exploring options",
];

const TIMELINE_OPTIONS: Timeline[] = [
  "ASAP (within 1 month)",
  "1 – 3 months",
  "3 – 6 months",
  "Just researching for now",
];

const BUDGET_OPTIONS: Budget[] = [
  "Under $5k",
  "$5k – $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k+",
  "Prefer not to say",
];

const TOTAL_STEPS = 6;

export default function LaunchYourVisionStepper() {
  const [step, setStep] = useState(1);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [form, setForm] = useState<FormState>({
    projectType: "",
    stage: "",
    timeline: "",
    budget: "",
    businessName: "",
    websiteUrl: "",
    description: "",
    name: "",
    email: "",
    phone: "",
  });

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return form.projectType !== "";
      case 2:
        return form.stage !== "";
      case 3:
        return form.timeline !== "";
      case 4:
        return true; // budget is optional
      case 5:
        return form.businessName.trim() !== "" && form.description.trim() !== "";
      case 6:
        return form.name.trim() !== "" && /\S+@\S+\.\S+/.test(form.email);
      default:
        return false;
    }
  };

  const next = () => {
    if (step < TOTAL_STEPS) setStep(step + 1);
  };

  const back = () => {
    if (step > 1) setStep(step - 1);
  };

  const submit = async () => {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/launch-your-vision", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          budget: form.budget || "Not specified",
          // Build a structured message for the existing email template
          message: [
            `PROJECT TYPE: ${form.projectType}`,
            `STAGE: ${form.stage}`,
            `TIMELINE: ${form.timeline}`,
            `BUDGET: ${form.budget || "Not specified"}`,
            ``,
            `BUSINESS: ${form.businessName}`,
            form.websiteUrl ? `WEBSITE: ${form.websiteUrl}` : null,
            ``,
            `DESCRIPTION:`,
            form.description,
            ``,
            `CONTACT: ${form.name}`,
            `EMAIL: ${form.email}`,
            form.phone ? `PHONE: ${form.phone}` : null,
          ]
            .filter(Boolean)
            .join("\n"),
          // Pass through structured fields for richer template handling later
          projectType: form.projectType,
          stage: form.stage,
          timeline: form.timeline,
          businessName: form.businessName,
          websiteUrl: form.websiteUrl,
          description: form.description,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Submission failed");
      }

      sendGTMEvent({
        event: "lead_form_submit",
        category: "Launch Your Vision",
        action: "Stepper Submit",
        label: form.projectType,
        value: form.budget,
        status: "success",
      });

      setSubmitStatus("success");
    } catch (e) {
      sendGTMEvent({
        event: "lead_form_submit",
        category: "Launch Your Vision",
        action: "Stepper Submit",
        status: "error",
        error_message: e instanceof Error ? e.message : "Unknown error",
      });
      setSubmitStatus("error");
      setErrorMessage(e instanceof Error ? e.message : "Submission failed");
    }
  };

  // ─── SUCCESS STATE ─────────────────────────────────────────────────────────
  if (submitStatus === "success") {
    const isHighBudget = HIGH_BUDGET_VALUES.includes(form.budget);
    const isHostingOnly = form.projectType === "Hosting + maintenance only";

    return (
      <div className="mt-12 max-w-2xl">
        <div className="p-8 md:p-10 bg-white border border-neutral-200 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-ravenci-primary flex items-center justify-center">
              <IconCheck size={22} className="text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-ravenci-dark">
              Thanks, {form.name.split(" ")[0]}.
            </h3>
          </div>
          <p className="text-neutral-600 leading-relaxed">
            We&apos;ve received your enquiry and will respond within 24 hours
            (typically much faster) with a tailored proposal for your{" "}
            <strong className="text-ravenci-dark">
              {form.projectType.toLowerCase()}
            </strong>{" "}
            project.
          </p>

          {isHighBudget && (
            <div className="mt-8 p-5 bg-ravenci-primary/5 border border-ravenci-primary/20 rounded-lg">
              <div className="flex items-start gap-3 mb-2">
                <IconCalendar
                  size={22}
                  className="text-ravenci-primary flex-shrink-0 mt-0.5"
                />
                <h4 className="font-bold text-ravenci-dark">
                  Want to fast-track?
                </h4>
              </div>
              <p className="ml-8 text-sm text-neutral-600 mb-4 leading-relaxed">
                For projects in your range we offer a free 30-minute discovery
                call. Pick a time that works for you.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-8 inline-flex items-center gap-2 px-5 py-2.5 bg-ravenci-primary text-white rounded-full hover:bg-ravenci-primary/85 transition-colors text-sm"
              >
                Book a Discovery Call
                <IconArrowRight size={16} />
              </a>
            </div>
          )}

          {isHostingOnly && (
            <div className="mt-8 p-5 bg-neutral-100 border border-neutral-200 rounded-lg">
              <h4 className="font-bold text-ravenci-dark mb-2">
                Faster path for hosting + maintenance
              </h4>
              <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                Hosting and maintenance are also available via our self-serve
                checkout — same pricing, instant setup.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-ravenci-dark text-white rounded-full hover:bg-ravenci-primary transition-colors text-sm"
              >
                Go to Self-Serve Quote
                <IconArrowRight size={16} />
              </Link>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-neutral-200">
            <p className="text-xs text-neutral-500">
              Confirmation sent to{" "}
              <span className="font-medium text-neutral-700">{form.email}</span>.
              Check your spam folder if it doesn&apos;t arrive within 5 minutes.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ─── ERROR STATE ───────────────────────────────────────────────────────────
  if (submitStatus === "error") {
    return (
      <div className="mt-12 max-w-2xl p-6 bg-red-50 border border-red-200 rounded-lg">
        <h3 className="font-bold text-red-700 mb-2">Something went wrong</h3>
        <p className="text-sm text-red-600 mb-4">
          {errorMessage ||
            "We couldn't send your enquiry. Please try again or email us directly."}
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setSubmitStatus("idle")}
            className="px-4 py-2 bg-red-600 text-white rounded-full text-sm hover:bg-red-700 transition-colors"
          >
            Try again
          </button>
          <a
            href="mailto:hello@ravenci.solutions"
            className="px-4 py-2 border border-red-300 text-red-700 rounded-full text-sm hover:bg-red-100 transition-colors"
          >
            Email us directly
          </a>
        </div>
      </div>
    );
  }

  // ─── STEPPER UI ────────────────────────────────────────────────────────────
  const progressPct = (step / TOTAL_STEPS) * 100;

  return (
    <div className="mt-10 md:mt-12 w-full max-w-3xl">
      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium tracking-widest uppercase text-ravenci-primary">
            Step {step} of {TOTAL_STEPS}
          </span>
          <span className="text-xs text-neutral-500">
            ~2 minutes total
          </span>
        </div>
        <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-ravenci-primary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Step content */}
      <div className="min-h-[400px]">
        {/* Step 1 — Project type */}
        {step === 1 && (
          <Step
            label="What are you looking to build?"
            sublabel="Pick the closest match — we'll figure out the details together."
          >
            <ChoiceGrid
              options={PROJECT_TYPE_OPTIONS}
              value={form.projectType}
              onChange={(v) => update("projectType", v as ProjectType)}
            />
          </Step>
        )}

        {/* Step 2 — Stage */}
        {step === 2 && (
          <Step
            label="What stage are you at?"
            sublabel="Helps us understand where to start the conversation."
          >
            <ChoiceGrid
              options={STAGE_OPTIONS}
              value={form.stage}
              onChange={(v) => update("stage", v as Stage)}
            />
          </Step>
        )}

        {/* Step 3 — Timeline */}
        {step === 3 && (
          <Step
            label="When do you need it?"
            sublabel="Realistic timelines help us scope properly."
          >
            <ChoiceGrid
              options={TIMELINE_OPTIONS}
              value={form.timeline}
              onChange={(v) => update("timeline", v as Timeline)}
            />
          </Step>
        )}

        {/* Step 4 — Budget (optional) */}
        {step === 4 && (
          <Step
            label="What's your budget range?"
            sublabel="Optional — but it helps us recommend the right approach. No pressure."
          >
            <ChoiceGrid
              options={BUDGET_OPTIONS}
              value={form.budget}
              onChange={(v) => update("budget", v as Budget)}
            />
            <button
              type="button"
              onClick={() => {
                update("budget", "");
                next();
              }}
              className="mt-6 text-sm text-neutral-500 hover:text-ravenci-primary transition-colors"
            >
              Skip this step →
            </button>
          </Step>
        )}

        {/* Step 5 — Business info */}
        {step === 5 && (
          <Step
            label="Tell us about your business"
            sublabel="A few quick details to make our response useful."
          >
            <div className="flex flex-col gap-6">
              <Field
                label="Business name *"
                value={form.businessName}
                onChange={(v) => update("businessName", v)}
                placeholder="e.g. Peninsula Homes"
              />
              <Field
                label="Existing website (optional)"
                value={form.websiteUrl}
                onChange={(v) => update("websiteUrl", v)}
                placeholder="https://yourbusiness.com.au"
                type="url"
              />
              <Field
                label="Briefly, what do you need? *"
                value={form.description}
                onChange={(v) => update("description", v)}
                placeholder="A few sentences about the project, your customers, and what success looks like."
                textarea
              />
            </div>
          </Step>
        )}

        {/* Step 6 — Contact */}
        {step === 6 && (
          <Step
            label="How can we reach you?"
            sublabel="We'll respond within 24 hours, usually faster."
          >
            <div className="flex flex-col gap-6">
              <Field
                label="Your name *"
                value={form.name}
                onChange={(v) => update("name", v)}
                placeholder="First and last name"
              />
              <Field
                label="Email *"
                value={form.email}
                onChange={(v) => update("email", v)}
                placeholder="you@yourbusiness.com.au"
                type="email"
              />
              <Field
                label="Phone (optional)"
                value={form.phone}
                onChange={(v) => update("phone", v)}
                placeholder="0400 000 000"
                type="tel"
              />
              <p className="text-xs text-neutral-500 leading-relaxed mt-2">
                By submitting, you agree to be contacted by RAVENCI Solutions
                about your enquiry. We never share your details with third
                parties. See our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-ravenci-primary hover:underline"
                >
                  privacy policy
                </Link>
                .
              </p>
            </div>
          </Step>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="mt-10 pt-6 border-t border-neutral-200 flex items-center justify-between">
        <button
          type="button"
          onClick={back}
          disabled={step === 1}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-neutral-600 hover:text-ravenci-dark disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <IconArrowLeft size={16} />
          Back
        </button>

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={next}
            disabled={!canProceed()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-ravenci-primary text-white rounded-full hover:bg-ravenci-primary/85 disabled:bg-neutral-300 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <IconArrowRight size={16} />
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={!canProceed() || submitStatus === "loading"}
            className="inline-flex items-center gap-2 px-6 py-3 bg-ravenci-primary text-white rounded-full hover:bg-ravenci-primary/85 disabled:bg-neutral-300 disabled:cursor-not-allowed transition-colors"
          >
            {submitStatus === "loading" ? (
              <>
                <IconLoader2 size={16} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Enquiry
                <IconArrowRight size={16} />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

// ─── HELPER COMPONENTS ────────────────────────────────────────────────────────

function Step({
  label,
  sublabel,
  children,
}: {
  label: string;
  sublabel?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-medium text-ravenci-dark">
        {label}
      </h3>
      {sublabel && (
        <p className="mt-2 text-neutral-500 text-sm md:text-base">{sublabel}</p>
      )}
      <div className="mt-8">{children}</div>
    </div>
  );
}

function ChoiceGrid({
  options,
  value,
  onChange,
}: {
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {options.map((option) => {
        const selected = value === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`text-left p-4 md:p-5 rounded-lg border-2 transition-all duration-200 ${
              selected
                ? "border-ravenci-primary bg-ravenci-primary/5"
                : "border-neutral-200 bg-white hover:border-neutral-400"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <span
                className={`font-medium ${
                  selected ? "text-ravenci-primary" : "text-ravenci-dark"
                }`}
              >
                {option}
              </span>
              {selected && (
                <IconCheck
                  size={20}
                  className="text-ravenci-primary flex-shrink-0"
                />
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  textarea = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-ravenci-dark">
        {label}
      </label>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={4}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-ravenci-primary focus:ring-1 focus:ring-ravenci-primary resize-y"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-ravenci-primary focus:ring-1 focus:ring-ravenci-primary"
        />
      )}
    </div>
  );
}
