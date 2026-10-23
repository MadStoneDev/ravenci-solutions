"use client";

import { useActionState } from "react";

import { changePassword, type SettingsState } from "@/app/admin/_actions/settings";

const INPUT =
  "h-10 w-full rounded-sm border border-input/25 bg-card px-3 text-small text-foreground outline-none focus:border-accent";
const LABEL = "font-mono text-label-sm text-muted-foreground";

export function SettingsForm({
  email,
  name,
}: {
  email: string;
  name?: string;
}) {
  const [state, action, pending] = useActionState<SettingsState, FormData>(
    changePassword,
    {},
  );

  return (
    <div className="max-w-lg space-y-8">
      <section className="space-y-2">
        <h2 className="text-heading-s text-foreground">Account</h2>
        <div className="rounded-sm border border-border bg-card p-4 text-small">
          <p className="text-foreground">{name ?? "Owner"}</p>
          <p className="text-muted-foreground">{email}</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-heading-s text-foreground">Change password</h2>
        <form action={action} className="space-y-3">
          {state.error && (
            <p className="rounded-sm border border-destructive/30 bg-destructive/10 px-3 py-2 text-small text-destructive">
              {state.error}
            </p>
          )}
          {state.ok && state.message && (
            <p className="rounded-sm border border-[#2f7a47]/30 bg-[#e7f1ea] px-3 py-2 text-small text-[#1f5c34] dark:bg-[#15291f] dark:text-[#86cda3]">
              {state.message}
            </p>
          )}
          <div className="space-y-1">
            <label htmlFor="oldPassword" className={LABEL}>
              Current password
            </label>
            <input
              id="oldPassword"
              name="oldPassword"
              type="password"
              autoComplete="current-password"
              required
              className={INPUT}
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="newPassword" className={LABEL}>
              New password
            </label>
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              autoComplete="new-password"
              required
              className={INPUT}
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="confirm" className={LABEL}>
              Confirm new password
            </label>
            <input
              id="confirm"
              name="confirm"
              type="password"
              autoComplete="new-password"
              required
              className={INPUT}
            />
          </div>
          <button
            type="submit"
            disabled={pending}
            className="inline-flex h-10 items-center rounded-sm bg-accent px-4 text-small font-medium text-accent-foreground hover:opacity-90 disabled:opacity-50"
          >
            {pending ? "Saving…" : "Change password"}
          </button>
        </form>
      </section>
    </div>
  );
}
