import * as React from "react";

import { SectionShell } from "@/components/layout/section-shell";
import { Stack } from "@/components/layout/stack";
import type { SectionShellProps } from "@/components/layout/section-shell";

type CtaLayoutProps = Omit<SectionShellProps, "children" | "action"> & {
  actions?: React.ReactNode;
  children?: React.ReactNode;
};

/**
 * Conversion band — centered title + actions.
 */
function CtaLayout({
  actions,
  children,
  align = "center",
  ...sectionProps
}: CtaLayoutProps) {
  return (
    <SectionShell
      data-template="cta"
      align={align}
      action={actions}
      {...sectionProps}
    >
      {children ? <Stack gap={4}>{children}</Stack> : null}
    </SectionShell>
  );
}

export { CtaLayout, type CtaLayoutProps };
