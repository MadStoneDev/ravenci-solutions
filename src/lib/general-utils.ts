import { RefObject } from "react";

type Ref = RefObject<HTMLAnchorElement | HTMLButtonElement | null>;

export const checkOverlappingElements = (
  fixedRefs: Ref[],
  sectionClass: string,
  bgClass: string[],
) => {
  const sections = document.getElementsByClassName(sectionClass);

  return fixedRefs.map((ref) => {
    if (!ref.current) return false;
    const elementRect = ref.current.getBoundingClientRect();

    for (const section of sections) {
      const sectionRect = section.getBoundingClientRect();

      if (sectionRect.bottom < elementRect.top) continue;

      if (
        sectionRect.top <= elementRect.bottom &&
        sectionRect.bottom >= elementRect.top
      )
        return bgClass.some((thisClass) =>
          section.classList.contains(thisClass),
        );

      if (sectionRect.top > elementRect.bottom) break;
    }

    return false;
  });
};
