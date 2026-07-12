import * as React from "react";

import { cn } from "@/lib/utils";
import type { GridColumns } from "@/types/layout";

type GridProps = React.ComponentProps<"div"> & {
  cols?: GridColumns;
  colsMd?: GridColumns;
  colsLg?: GridColumns;
  gap?: 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
};

const colsMap: Record<GridColumns, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  6: "grid-cols-6",
  12: "grid-cols-12",
};

const colsMdMap: Record<GridColumns, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  6: "md:grid-cols-6",
  12: "md:grid-cols-12",
};

const colsLgMap: Record<GridColumns, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  6: "lg:grid-cols-6",
  12: "lg:grid-cols-12",
};

const gapMap: Record<NonNullable<GridProps["gap"]>, string> = {
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
};

/**
 * Responsive grid aligned to the 12-column system.
 * Default: 1 → 2 (md) → 3 (lg) for card collections.
 */
function Grid({
  cols = 1,
  colsMd = 2,
  colsLg = 3,
  gap = 6,
  className,
  ...props
}: GridProps) {
  return (
    <div
      className={cn(
        "grid",
        colsMap[cols],
        colsMdMap[colsMd],
        colsLgMap[colsLg],
        gapMap[gap],
        className,
      )}
      {...props}
    />
  );
}

export { Grid, type GridProps };
