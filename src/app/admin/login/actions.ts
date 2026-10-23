"use server";

import PocketBase from "pocketbase";
import { redirect } from "next/navigation";

import { POCKETBASE_URL } from "@/lib/pocketbase";
import { setAuthCookie, clearAuthCookie } from "@/lib/admin-auth";

export interface LoginState {
  error?: string;
  otpId?: string;
  email?: string;
}

/** Password sign-in. */
export async function loginWithPassword(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  if (!email || !password) {
    return { error: "Enter your email and password." };
  }

  const pb = new PocketBase(POCKETBASE_URL);
  try {
    await pb.collection("users").authWithPassword(email, password);
  } catch {
    return { error: "Incorrect email or password." };
  }
  await setAuthCookie(pb);
  redirect("/admin/articles");
}

/** Step 1 of OTP: email a one-time code. */
export async function requestOtp(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim();
  if (!email) return { error: "Enter your email first." };

  const pb = new PocketBase(POCKETBASE_URL);
  try {
    const req = await pb.collection("users").requestOTP(email);
    return { otpId: req.otpId, email };
  } catch {
    // Don't reveal whether the address exists.
    return { error: "Could not send a code. Check the address and try again." };
  }
}

/** Step 2 of OTP: exchange the code for a session. */
export async function loginWithOtp(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const otpId = String(formData.get("otpId") ?? "");
  const code = String(formData.get("code") ?? "").trim();
  if (!otpId || !code) return { error: "Enter the code from your email.", otpId };

  const pb = new PocketBase(POCKETBASE_URL);
  try {
    await pb.collection("users").authWithOTP(otpId, code);
  } catch {
    return { error: "That code didn't work. Request a new one.", otpId };
  }
  await setAuthCookie(pb);
  redirect("/admin/articles");
}

export async function logout(): Promise<void> {
  await clearAuthCookie();
  redirect("/admin/login");
}
