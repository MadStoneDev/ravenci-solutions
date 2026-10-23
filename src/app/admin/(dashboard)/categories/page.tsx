import { requireUser } from "@/lib/admin-auth";
import { fetchCategories } from "@/lib/admin-categories";
import { CategoryManager } from "@/components/admin/category-manager";

export const dynamic = "force-dynamic";

export default async function CategoriesPage() {
  const { pb } = await requireUser();
  const cats = await fetchCategories(pb);

  return (
    <div className="flex flex-col gap-7 p-6 md:p-10">
      <header className="flex flex-col gap-1">
        <span className="font-mono text-label text-muted-foreground">
          Taxonomy
        </span>
        <h1 className="text-display-m text-foreground">Categories</h1>
        <p className="text-small text-muted-foreground">
          The list the editor suggests from. Articles store their own category
          labels, so removing one here just takes it out of the suggestions.
        </p>
      </header>
      <CategoryManager initial={cats} />
    </div>
  );
}
