"use server";

import { requireUser } from "@/lib/admin-auth";
import { fetchCategories, type Category } from "@/lib/admin-categories";

export async function listCategories(): Promise<Category[]> {
  const { pb } = await requireUser();
  return fetchCategories(pb);
}

export async function createCategory(
  name: string,
): Promise<{ ok: boolean; item?: Category; error?: string }> {
  const { pb } = await requireUser();
  const trimmed = name.trim();
  if (!trimmed) return { ok: false, error: "Enter a name." };
  try {
    const rec = await pb.collection("categories").create({ name: trimmed });
    return { ok: true, item: { id: rec.id, name: rec.name as string } };
  } catch (e) {
    const err = e as { response?: { data?: Record<string, unknown> } };
    if (err.response?.data && "name" in err.response.data) {
      return { ok: false, error: "That category already exists." };
    }
    return { ok: false, error: "Could not add." };
  }
}

export async function renameCategory(
  id: string,
  name: string,
): Promise<{ ok: boolean; error?: string }> {
  const { pb } = await requireUser();
  const trimmed = name.trim();
  if (!trimmed) return { ok: false, error: "Enter a name." };
  try {
    await pb.collection("categories").update(id, { name: trimmed });
    return { ok: true };
  } catch {
    return { ok: false, error: "Could not rename (name may be taken)." };
  }
}

export async function deleteCategory(
  id: string,
): Promise<{ ok: boolean; error?: string }> {
  const { pb } = await requireUser();
  try {
    await pb.collection("categories").delete(id);
    return { ok: true };
  } catch {
    return { ok: false, error: "Could not delete." };
  }
}
