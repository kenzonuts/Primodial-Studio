import * as React from "react";

import { Grid } from "@/components/layout/grid";
import { SectionShell } from "@/components/layout/section-shell";
import type { SectionShellProps } from "@/components/layout/section-shell";

type PortfolioLayoutProps = Omit<SectionShellProps, "children"> & {
  children: React.ReactNode;
  /** Index grid vs single case study body */
  variant?: "index" | "case-study";
};

/**
 * Portfolio index / case study structural frame.
 */
function PortfolioLayout({
  children,
  variant = "index",
  ...sectionProps
}: PortfolioLayoutProps) {
  return (
    <SectionShell data-template="portfolio" {...sectionProps}>
      {variant === "index" ? (
        <Grid cols={1} colsMd={2} colsLg={3} gap={6}>
          {children}
        </Grid>
      ) : (
        <div className="mx-auto max-w-4xl space-y-12">{children}</div>
      )}
    </SectionShell>
  );
}

export { PortfolioLayout, type PortfolioLayoutProps };
