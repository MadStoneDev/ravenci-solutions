import type { ReactNode } from "react";
import {
  IconInfoCircle,
  IconBulb,
  IconAlertTriangle,
} from "@tabler/icons-react";

import { cn } from "@/lib/utils";

type CalloutType = "note" | "tip" | "warning";

const STYLES: Record<
  CalloutType,
  { wrap: string; icon: string; Icon: typeof IconInfoCircle; label: string }
> = {
  note: {
    wrap: "border-border bg-muted/40",
    icon: "text-muted-foreground",
    Icon: IconInfoCircle,
    label: "Note",
  },
  tip: {
    wrap: "border-accent/30 bg-accent/5",
    icon: "text-accent",
    Icon: IconBulb,
    label: "Tip",
  },
  warning: {
    wrap: "border-warning/40 bg-warning/10",
    icon: "text-warning",
    Icon: IconAlertTriangle,
    label: "Warning",
  },
};

export function Callout({
  type = "note",
  children,
}: {
  type?: CalloutType;
  children?: ReactNode;
}) {
  const s = STYLES[type] ?? STYLES.note;
  const { Icon } = s;

  return (
    <div
      className={cn("my-6 flex gap-3 rounded-sm border p-4", s.wrap)}
      role="note"
    >
      <Icon
        className={cn("mt-0.5 h-5 w-5 shrink-0", s.icon)}
        aria-hidden
        stroke={1.75}
      />
      <div className="min-w-0 text-body leading-relaxed text-subtle [&>*:last-child]:mb-0 [&>p]:mb-3">
        {children}
      </div>
    </div>
  );
}

export default Callout;
