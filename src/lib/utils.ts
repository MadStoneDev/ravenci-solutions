import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Register the project's custom font-size utilities (defined in tailwind.config
// theme.fontSize) so tailwind-merge treats them as font sizes, not colours.
// Without this it strips e.g. `text-label-sm` when a `text-<colour>` follows in
// the same cn(), silently falling the element back to the 16px default.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display-xl",
            "display-l",
            "display-m",
            "heading-m",
            "heading-s",
            "lead",
            "body",
            "small",
            "metric",
            "label",
            "label-sm",
            "h1",
            "h2",
            "h3",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
