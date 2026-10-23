"use client";

import { useActionState, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  loginWithPassword,
  requestOtp,
  loginWithOtp,
  type LoginState,
} from "./actions";

const INPUT =
  "h-11 w-full rounded-sm border border-input/25 bg-card px-3 text-body text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent";
const LABEL = "font-mono text-label text-muted-foreground";

export default function AdminLoginPage() {
  const [mode, setMode] = useState<"password" | "otp">("password");

  return (
    <main className="flex min-h-screen flex-wrap">
      {/* Brand panel */}
      <section
        aria-hidden
        className="hidden min-h-full flex-1 basis-[420px] flex-col justify-between bg-foreground p-12 text-background md:flex"
      >
        <span className="text-heading-s font-bold tracking-tight">RAVENCI</span>
        <div className="flex flex-col gap-4">
          <span className="font-mono text-label text-background/60">
            Writing desk
          </span>
          <p className="text-display-m">
            Plain notes on web development, SEO, and running a site that lasts.
          </p>
        </div>
        <span className="font-mono text-label text-background/50">
          Built once. Built properly.
        </span>
      </section>

      {/* Form panel */}
      <section className="flex flex-1 basis-[420px] items-center justify-center px-6 py-12">
        <div className="flex w-full max-w-[380px] flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h1 className="text-display-m text-foreground">Sign in</h1>
            <p className="text-small text-muted-foreground">Owner access only.</p>
          </div>

          {mode === "password" ? (
            <PasswordForm onUseOtp={() => setMode("otp")} />
          ) : (
            <OtpForm onUsePassword={() => setMode("password")} />
          )}

          <a
            href="https://ravenci.solutions"
            className="text-small text-accent hover:underline"
          >
            Back to ravenci.solutions
          </a>
        </div>
      </section>
    </main>
  );
}

function FormError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p
      role="alert"
      className="rounded-sm border border-destructive/30 bg-destructive/10 px-3 py-2 text-small text-destructive"
    >
      {message}
    </p>
  );
}

function PasswordForm({ onUseOtp }: { onUseOtp: () => void }) {
  const [state, action, pending] = useActionState<LoginState, FormData>(
    loginWithPassword,
    {},
  );

  return (
    <form action={action} className="flex flex-col gap-4">
      <FormError message={state.error} />
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className={LABEL}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@ravenci.solutions"
          required
          className={INPUT}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="password" className={LABEL}>
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className={INPUT}
        />
      </div>
      <Button type="submit" variant="primary" size="lg" disabled={pending}>
        {pending ? "Signing in…" : "Sign in"}
      </Button>
      <button
        type="button"
        onClick={onUseOtp}
        className="self-start text-small text-accent hover:underline"
      >
        Email me a one-time code instead
      </button>
    </form>
  );
}

function OtpForm({ onUsePassword }: { onUsePassword: () => void }) {
  const [reqState, reqAction, reqPending] = useActionState<LoginState, FormData>(
    requestOtp,
    {},
  );
  const [verifyState, verifyAction, verifyPending] = useActionState<
    LoginState,
    FormData
  >(loginWithOtp, {});

  const sent = Boolean(reqState.otpId);

  if (!sent) {
    return (
      <form action={reqAction} className="flex flex-col gap-4">
        <FormError message={reqState.error} />
        <div className="flex flex-col gap-1.5">
          <label htmlFor="otp-email" className={LABEL}>
            Email
          </label>
          <input
            id="otp-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@ravenci.solutions"
            required
            className={INPUT}
          />
        </div>
        <Button type="submit" variant="primary" size="lg" disabled={reqPending}>
          {reqPending ? "Sending…" : "Email me a code"}
        </Button>
        <button
          type="button"
          onClick={onUsePassword}
          className="self-start text-small text-accent hover:underline"
        >
          Use a password instead
        </button>
      </form>
    );
  }

  return (
    <form action={verifyAction} className="flex flex-col gap-4">
      <FormError message={verifyState.error} />
      <input type="hidden" name="otpId" value={reqState.otpId} />
      <p className="text-small text-muted-foreground">
        We sent a one-time code to{" "}
        <span className="text-foreground">{reqState.email}</span>.
      </p>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="otp-code" className={LABEL}>
          One-time code
        </label>
        <input
          id="otp-code"
          name="code"
          inputMode="numeric"
          autoComplete="one-time-code"
          required
          className={`${INPUT} font-mono tracking-widest`}
        />
      </div>
      <Button type="submit" variant="primary" size="lg" disabled={verifyPending}>
        {verifyPending ? "Signing in…" : "Sign in"}
      </Button>
      <button
        type="button"
        onClick={onUsePassword}
        className="self-start text-small text-accent hover:underline"
      >
        Use a password instead
      </button>
    </form>
  );
}
