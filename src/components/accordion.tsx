"use client";

import { ReactNode, useId, useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";

interface AccordionItem {
  title: string;
  content: string | ReactNode;
  /** Short version used for FAQPage JSON-LD only; not rendered visually. */
  summary?: string;
}

const Accordion = ({
  items,
  titleClassName,
}: {
  items: AccordionItem[];
  titleClassName?: string;
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="w-full max-w-2xl">
      {items.map((item, index) => {
        const open = openIndex === index;
        const btnId = `${baseId}-btn-${index}`;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div key={index} className="border-b border-border">
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className={`flex w-full items-center justify-between gap-4 py-5 text-left text-heading-s text-foreground ${titleClassName ?? ""}`}
              >
                <span>{item.title}</span>
                <IconChevronDown
                  size={20}
                  aria-hidden
                  className={`shrink-0 text-accent transition-transform duration-base ease-standard ${open ? "rotate-180" : ""}`}
                />
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!open}
              className="overflow-hidden pb-5 text-body text-subtle"
            >
              {typeof item.content === "string" ? (
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              ) : (
                item.content
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
