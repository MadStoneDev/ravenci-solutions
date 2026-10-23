"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconFileText,
  IconPhoto,
  IconTag,
  IconExternalLink,
  IconSettings,
  IconLogout,
} from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import { logout } from "@/app/admin/login/actions";

interface NavItem {
  href: string;
  label: string;
  icon: typeof IconFileText;
  count?: number;
  external?: boolean;
}

export function AdminSidebar({
  user,
  articleCount,
}: {
  user: { name?: string; email: string };
  articleCount: number;
}) {
  const pathname = usePathname();

  const content: NavItem[] = [
    {
      href: "/admin/articles",
      label: "Articles",
      icon: IconFileText,
      count: articleCount,
    },
    { href: "/admin/media", label: "Media", icon: IconPhoto },
    { href: "/admin/categories", label: "Categories", icon: IconTag },
  ];
  const site: NavItem[] = [
    {
      href: "https://ravenci.solutions/articles",
      label: "View live site",
      icon: IconExternalLink,
      external: true,
    },
    { href: "/admin/settings", label: "Settings", icon: IconSettings },
  ];

  const initials = (user.name ?? user.email)
    .split(/[\s@.]+/)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <nav
      aria-label="Admin"
      className="flex w-full shrink-0 flex-col gap-7 border-b border-border p-4 md:h-screen md:w-[240px] md:border-b-0 md:border-r md:p-6 md:sticky md:top-0"
    >
      <div className="flex items-center gap-2">
        <span className="text-heading-s font-bold tracking-tight text-foreground">
          RAVENCI
        </span>
        <span className="rounded-sm border border-border px-1.5 py-0.5 font-mono text-label-sm text-muted-foreground">
          Admin
        </span>
      </div>

      <NavGroup label="Content" items={content} pathname={pathname} />
      <NavGroup label="Site" items={site} pathname={pathname} />

      <div className="mt-auto flex items-center gap-3 border-t border-border pt-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent font-mono text-label-sm text-accent-foreground">
          {initials}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-small font-medium text-foreground">
            {user.name ?? "Owner"}
          </p>
          <p className="truncate text-label-sm text-muted-foreground">Owner</p>
        </div>
        <form action={logout}>
          <button
            type="submit"
            aria-label="Sign out"
            className="rounded-sm p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <IconLogout className="h-4 w-4" />
          </button>
        </form>
      </div>
    </nav>
  );
}

function NavGroup({
  label,
  items,
  pathname,
}: {
  label: string;
  items: NavItem[];
  pathname: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="px-2 font-mono text-label-sm text-muted-foreground">
        {label}
      </span>
      {items.map((item) => {
        const active =
          !item.external &&
          (pathname === item.href || pathname.startsWith(item.href + "/"));
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex items-center gap-2.5 rounded-sm px-2 py-1.5 text-small transition-colors",
              active
                ? "bg-foreground text-background"
                : "text-subtle hover:bg-muted",
            )}
          >
            <Icon className="h-[18px] w-[18px] shrink-0" />
            <span className="flex-1">{item.label}</span>
            {typeof item.count === "number" && (
              <span
                className={cn(
                  "font-mono text-label-sm",
                  active ? "text-background/70" : "text-muted-foreground",
                )}
              >
                {item.count}
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
