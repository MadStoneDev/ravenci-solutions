"use client";

import { ReactNode, useState } from "react";

import { IconPlus, IconMinus } from "@tabler/icons-react";

interface AccordionItem {
  title: string;
  content: string | ReactNode;
}

const Accordion = ({ items }: { items: AccordionItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl">
      {items.map((item, index) => (
        <div key={index} className="border-b border-white/50 overflow-hidden">
          <button
            onClick={() => toggleItem(index)}
            className={`relative py-6 flex justify-between items-center w-full`}
            aria-expanded={openIndex === index}
          >
            <span className="text-2xl text-left">{item.title}</span>
            <IconPlus
              className={`absolute top-1/2 -translate-y-1/2 right-0 ${
                openIndex === index ? "rotate-180 opacity-0" : "opacity-100"
              } transition-all duration-300 ease-in-out`}
              size={20}
            />

            <IconMinus
              className={`absolute top-1/2 -translate-y-1/2 right-0 ${
                openIndex === index
                  ? "rotate-0 opacity-100"
                  : "-rotate-180 opacity-0"
              } transition-all duration-300 ease-in-out`}
              size={20}
            />
          </button>

          <div
            className={`h-fit ${
              openIndex === index
                ? "max-h-[999px] opacity-100"
                : "max-h-0 opacity-0"
            } transition-all duration-700 ease-in-out overflow-hidden`}
          >
            <div className={`pb-5 font-light`}>
              {typeof item.content === "string" ? (
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              ) : (
                item.content
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
