"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "text-button inline-flex shrink-0 items-center justify-center gap-2 rounded-md whitespace-nowrap transition-[color,background-color,border-color,box-shadow,transform,opacity] duration-[var(--duration-fast)] ease-[var(--ease-out)] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary-hover",
        secondary:
          "border border-border bg-surface-elevated text-foreground hover:border-border-strong hover:bg-surface",
        outline:
          "border border-border bg-transparent text-foreground hover:border-border-strong hover:bg-surface",
        ghost: "text-foreground hover:bg-surface-elevated",
        danger:
          "bg-danger text-danger-foreground shadow-sm hover:bg-danger/90 focus-visible:ring-danger/40",
        link: "text-accent-blue underline-offset-4 hover:text-accent-blue-hover hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "size-10",
        "icon-sm": "size-9",
        "icon-lg": "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
  };

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  isLoading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";
  const isDisabled = Boolean(disabled || isLoading);
  const showLoading = isLoading && !asChild;

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-loading={showLoading || undefined}
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isDisabled}
      aria-busy={showLoading || undefined}
      {...props}
    >
      {showLoading ? (
        <>
          <Loader2 className="size-4 animate-spin" aria-hidden />
          <span>{children}</span>
        </>
      ) : (
        children
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
