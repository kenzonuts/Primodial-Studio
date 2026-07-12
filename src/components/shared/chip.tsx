import * as React from "react";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const chipVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-border bg-surface-elevated text-foreground",
        blue: "border-accent-blue/30 bg-accent-blue/15 text-accent-blue",
        purple:
          "border-accent-purple/30 bg-accent-purple/15 text-accent-purple",
        success: "border-success/30 bg-success/15 text-success",
        warning: "border-warning/30 bg-warning/15 text-warning",
        danger: "border-danger/30 bg-danger/15 text-danger",
        outline: "border-border bg-transparent text-text-secondary",
      },
      size: {
        sm: "text-caption h-6 px-2",
        md: "text-label h-8 px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

type ChipProps = React.ComponentProps<"span"> &
  VariantProps<typeof chipVariants> & {
    onRemove?: () => void;
    removeLabel?: string;
  };

function Chip({
  className,
  variant,
  size,
  onRemove,
  removeLabel = "Remove",
  children,
  ...props
}: ChipProps) {
  return (
    <span className={cn(chipVariants({ variant, size }), className)} {...props}>
      {children}
      {onRemove ? (
        <button
          type="button"
          className="ml-0.5 inline-flex size-4 items-center justify-center rounded-full transition-colors hover:bg-foreground/10 focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
          onClick={onRemove}
          aria-label={removeLabel}
        >
          <X className="size-3" aria-hidden />
        </button>
      ) : null}
    </span>
  );
}

export { Chip, chipVariants, type ChipProps };
