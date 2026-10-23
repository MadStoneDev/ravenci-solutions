import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * A printable tick-box checklist. Authored in MDX either as:
 *   <Checklist items={["First thing", "Second thing"]} />
 * or with a markdown list as children:
 *   <Checklist>
 *   - First thing
 *   - Second thing
 *   </Checklist>
 * The children form renders the list restyled with square tick boxes.
 */
export function Checklist({
  items,
  children,
  className,
}: {
  items?: string[];
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "my-6 rounded-sm border border-border bg-card p-5",
        // Restyle any nested markdown list into tick boxes (children form).
        "[&_ul]:m-0 [&_ul]:list-none [&_ul]:space-y-2.5 [&_ul]:pl-0",
        "[&_li]:relative [&_li]:pl-8 [&_li]:text-body [&_li]:leading-relaxed [&_li]:text-subtle",
        "[&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-0.5 [&_li]:before:h-5 [&_li]:before:w-5 [&_li]:before:rounded-[3px] [&_li]:before:border [&_li]:before:border-border [&_li]:before:content-['']",
        className,
      )}
    >
      {items && items.length > 0 ? (
        <ul className="m-0 list-none space-y-2.5 pl-0">
          {items.map((item, i) => (
            <li
              key={i}
              className="relative pl-8 text-body leading-relaxed text-subtle before:absolute before:left-0 before:top-0.5 before:h-5 before:w-5 before:rounded-[3px] before:border before:border-border before:content-['']"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        children
      )}
    </div>
  );
}

export default Checklist;
