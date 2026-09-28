import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// RAVENCI button. Sentence-case font-sans labels (mono is for eyebrows only),
// 3px radius, 44px min height. Focus is handled globally in globals.css
// (2px ring, 3px offset) so we don't redeclare it here. Purple appears only on
// the `accent` variant — never as a section background.
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans text-sm font-medium transition-all duration-fast ease-standard disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Default CTA fill (charcoal on paper, inverts under .dark).
        primary: "bg-foreground text-background font-semibold hover:bg-foreground/90",
        default: "bg-foreground text-background font-semibold hover:bg-foreground/90",
        // The one place a purple fill is allowed, with a 12% hover halo.
        accent:
          "bg-accent text-accent-foreground font-semibold hover:bg-accent/90 hover:shadow-[0_0_0_3px_hsl(var(--accent)/0.12)]",
        // Outline / secondary.
        secondary:
          "border border-foreground/25 bg-transparent text-foreground hover:bg-muted",
        outline:
          "border border-foreground/25 bg-transparent text-foreground hover:bg-muted",
        // Text-link style; pairs with a trailing → arrow at call sites.
        ghost: "bg-transparent text-accent font-semibold hover:bg-muted",
        link: "bg-transparent text-accent underline-offset-4 hover:underline",
        destructive:
          "bg-destructive text-destructive-foreground font-semibold hover:bg-destructive/90",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-10 px-4",
        lg: "h-12 px-6 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
