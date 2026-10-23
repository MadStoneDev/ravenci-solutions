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
    <div className="flex min-h-screen flex-col md:flex-row">
      <AdminSidebar user={user} articleCount={articleCount} />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
