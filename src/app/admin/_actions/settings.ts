"use server";

import PocketBase from "pocketbase";

import { requireUser, setAuthCookie } from "@/lib/admin-auth";
import { POCKETBASE_URL } from "@/lib/pocketbase";

export interface SettingsState {
  ok?: boolean;
  error?: string;
  message?: string;
}

export async function changePassword(
  _prev: SettingsState,
  formData: FormData,
): Promise<SettingsState> {
  const { pb, user } = await requireUser();
  const oldPassword = String(formData.get("oldPassword") ?? "");
  const newPassword = String(formData.get("newPassword") ?? "");
  const confirm = String(formData.get("confirm") ?? "");

  if (newPassword.length < 8) {
    return { error: "New password must be at least 8 characters." };
  }
  if (newPassword !== confirm) {
    return { error: "New passwords don't match." };
  }

  try {
    await pb.collection("users").update(user.id, {
      oldPassword,
      password: newPassword,
      passwordConfirm: newPassword,
    });
  } catch {
    return { error: "Couldn't change it — check your current password." };
  }

  // Changing the password invalidates existing tokens; re-auth and refresh the cookie.
  try {
    const fresh = new PocketBase(POCKETBASE_URL);
    await fresh.collection("users").authWithPassword(user.email, newPassword);
    await setAuthCookie(fresh);
  } catch {
    // If re-auth fails the next navigation will bounce to login; not fatal.
  }

  return { ok: true, message: "Password changed." };
}
