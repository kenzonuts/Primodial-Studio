import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const tagVariants = cva(
  "text-caption inline-flex items-center rounded-md px-1.5 py-0.5 font-medium",
  {
    variants: {
      variant: {
        default: "bg-surface-elevated text-foreground",
        muted: "bg-surface text-text-secondary",
        accent: "bg-accent-blue/15 text-accent-blue",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type TagProps = React.ComponentProps<"span"> & VariantProps<typeof tagVariants>;

function Tag({ className, variant, ...props }: TagProps) {
  return (
    <span className={cn(tagVariants({ variant }), className)} {...props} />
  );
}

export { Tag, tagVariants, type TagProps };
