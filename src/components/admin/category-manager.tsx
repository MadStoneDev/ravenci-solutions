"use client";

import { useState, useTransition } from "react";
import { IconPlus, IconTrash, IconPencil } from "@tabler/icons-react";

import type { Category } from "@/lib/admin-categories";
import {
  createCategory,
  renameCategory,
  deleteCategory,
} from "@/app/admin/_actions/categories";

export function CategoryManager({
  initial,
}: {
  initial: Category[];
}) {
  const [cats, setCats] = useState<Category[]>(initial);
  const [name, setName] = useState("");
  const [error, setError] = useState<string>();
  const [, start] = useTransition();

  function add() {
    const trimmed = name.trim();
    if (!trimmed) return;
    setError(undefined);
    start(async () => {
      const res = await createCategory(trimmed);
      if (res.ok && res.item) {
        setCats((p) => [...p, res.item!].sort((a, b) => a.name.localeCompare(b.name)));
        setName("");
      } else setError(res.error);
    });
  }

  function rename(cat: Category) {
    const next = prompt("Rename category", cat.name);
    if (next == null || next.trim() === cat.name) return;
    start(async () => {
      const res = await renameCategory(cat.id, next);
      if (res.ok)
        setCats((p) =>
          p
            .map((c) => (c.id === cat.id ? { ...c, name: next.trim() } : c))
            .sort((a, b) => a.name.localeCompare(b.name)),
        );
      else setError(res.error);
    });
  }

  function remove(cat: Category) {
    if (!confirm(`Delete “${cat.name}”? Articles keep the label; it just leaves this list.`))
      return;
    start(async () => {
      const res = await deleteCategory(cat.id);
      if (res.ok) setCats((p) => p.filter((c) => c.id !== cat.id));
      else setError(res.error);
    });
  }

  return (
    <div className="max-w-lg space-y-4">
      <div className="flex gap-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          placeholder="New category"
          className="h-10 flex-1 rounded-sm border border-input/25 bg-card px-3 text-small text-foreground outline-none focus:border-accent"
        />
        <button
          type="button"
          onClick={add}
          className="inline-flex h-10 items-center gap-1 rounded-sm bg-accent px-3 text-small font-medium text-accent-foreground hover:opacity-90"
        >
          <IconPlus className="h-4 w-4" /> Add
        </button>
      </div>

      {error && (
        <p className="rounded-sm border border-destructive/30 bg-destructive/10 px-3 py-2 text-small text-destructive">
          {error}
        </p>
      )}

      {cats.length === 0 ? (
        <p className="rounded-sm border border-dashed border-border p-8 text-center text-small text-muted-foreground">
          No categories yet.
        </p>
      ) : (
        <ul className="divide-y divide-border rounded-sm border border-border bg-card">
          {cats.map((c) => (
            <li key={c.id} className="flex items-center justify-between px-4 py-2.5">
              <span className="text-body text-foreground">{c.name}</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => rename(c)}
                  aria-label={`Rename ${c.name}`}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <IconPencil className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => remove(c)}
                  aria-label={`Delete ${c.name}`}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <IconTrash className="h-4 w-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
