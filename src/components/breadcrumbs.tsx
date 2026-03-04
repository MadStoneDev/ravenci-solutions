import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({
  items,
  dark = false,
}: {
  items: BreadcrumbItem[];
  dark?: boolean;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-1 text-sm ${
        dark ? "text-neutral-400" : "text-neutral-400"
      }`}
    >
      <Link href="/" className="hover:text-ravenci-primary transition-colors duration-200">
        Home
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1">
          <IconChevronRight
            size={14}
            className={dark ? "text-neutral-500" : "text-neutral-300"}
          />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-ravenci-primary transition-colors duration-200"
            >
              {item.label}
            </Link>
          ) : (
            <span
              className={`font-medium ${dark ? "text-white" : "text-ravenci-dark"}`}
            >
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
