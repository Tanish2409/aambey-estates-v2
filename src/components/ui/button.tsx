import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition duration-300 ease-out active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        gold: "bg-accent text-accent-foreground shadow-[0_18px_45px_-30px_hsl(var(--accent))] hover:bg-accent/90",
        outline: "border border-input bg-background/70 text-foreground hover:bg-secondary",
        inverse:
          "border border-primary-foreground/25 bg-primary/20 text-primary-foreground hover:bg-primary-foreground/10",
      },
      size: { default: "h-11 px-5", lg: "h-12 px-7", sm: "h-9 px-4" },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
