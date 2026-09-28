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
  /** Deprecated — kept for call-site compatibility. Colours now come from the
   *  active token palette; wrap in a `dark` scope for charcoal sections. */
  dark?: boolean;
}) {
  void dark;
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-1 text-small text-muted-foreground"
    >
      <Link
        href="/"
        className="transition-colors duration-fast hover:text-accent"
      >
        Home
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1">
          <IconChevronRight size={14} aria-hidden className="text-border" />
          {item.href ? (
            <Link
              href={item.href}
              className="transition-colors duration-fast hover:text-accent"
            >
              {item.label}
            </Link>
          ) : (
            <span aria-current="page" className="font-medium text-foreground">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
