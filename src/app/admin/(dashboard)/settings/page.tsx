import { requireUser } from "@/lib/admin-auth";
import { SettingsForm } from "@/components/admin/settings-form";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const { user } = await requireUser();

  return (
    <div className="flex flex-col gap-7 p-6 md:p-10">
      <header className="flex flex-col gap-1">
        <span className="font-mono text-label text-muted-foreground">Admin</span>
        <h1 className="text-display-m text-foreground">Settings</h1>
      </header>
      <SettingsForm email={user.email} name={user.name} />
    </div>
  );
}
