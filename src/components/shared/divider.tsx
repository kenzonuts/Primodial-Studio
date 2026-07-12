import * as React from "react";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type DividerProps = React.ComponentProps<typeof Separator> & {
  label?: React.ReactNode;
};

function Divider({ label, className, ...props }: DividerProps) {
  if (!label) {
    return <Separator className={className} {...props} />;
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Separator {...props} />
      <span className="text-caption shrink-0 text-text-secondary">{label}</span>
      <Separator {...props} />
    </div>
  );
}

export { Divider, type DividerProps };
