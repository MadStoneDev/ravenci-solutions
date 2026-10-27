import { requireUser } from "@/lib/admin-auth";
import { AdminSidebar } from "@/components/admin/sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pb, user } = await requireUser();
  let articleCount = 0;
  try {
    const res = await pb.collection("articles").getList(1, 1);
    articleCount = res.totalItems;
  } catch {
    articleCount = 0;
  }

  return (
    <div className="flex h-dvh flex-col overflow-hidden md:flex-row">
      <AdminSidebar user={user} articleCount={articleCount} />
      {/* Scrolls for normal pages; the editor fills it with h-full and scrolls
          internally instead. min-h-0 lets this shrink below its content. */}
      <div className="min-h-0 min-w-0 flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
