import * as React from "react";

import { cn } from "@/lib/utils";
import type { SplitRatio } from "@/types/layout";

type SplitProps = React.ComponentProps<"div"> & {
  ratio?: SplitRatio;
  reverse?: boolean;
  gap?: 4 | 6 | 8 | 10 | 12 | 16;
};

const ratioMap: Record<SplitRatio, string> = {
  "1/1": "lg:grid-cols-2",
  "5/7": "lg:grid-cols-[5fr_7fr]",
  "7/5": "lg:grid-cols-[7fr_5fr]",
  "4/8": "lg:grid-cols-[4fr_8fr]",
  "8/4": "lg:grid-cols-[8fr_4fr]",
};

const gapMap: Record<NonNullable<SplitProps["gap"]>, string> = {
  4: "gap-4",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
  16: "gap-16",
};

/**
 * Two-pane layout — stacks on mobile, splits from laptop up.
 */
function Split({
  ratio = "1/1",
  reverse = false,
  gap = 10,
  className,
  children,
  ...props
}: SplitProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 items-center",
        ratioMap[ratio],
        gapMap[gap],
        reverse &&
          "[&>*:first-child]:order-2 lg:[&>*:first-child]:order-1 [&>*:last-child]:order-1 lg:[&>*:last-child]:order-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Split, type SplitProps };
