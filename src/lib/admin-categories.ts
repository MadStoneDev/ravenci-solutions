import "server-only";

import type PocketBase from "pocketbase";

export interface Category {
  id: string;
  name: string;
}

export async function fetchCategories(pb: PocketBase): Promise<Category[]> {
  const recs = await pb
    .collection("categories")
    .getFullList<{ id: string; name: string }>({ sort: "name" });
  return recs.map((r) => ({ id: r.id, name: r.name }));
}
