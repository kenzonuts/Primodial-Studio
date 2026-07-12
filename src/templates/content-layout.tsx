import * as React from "react";

import { SectionShell } from "@/components/layout/section-shell";
import { Stack } from "@/components/layout/stack";
import type { SectionShellProps } from "@/components/layout/section-shell";

type ContentLayoutProps = Omit<SectionShellProps, "children"> & {
  children: React.ReactNode;
  aside?: React.ReactNode;
};

/**
 * Standard content page frame with optional aside.
 */
function ContentLayout({
  children,
  aside,
  ...sectionProps
}: ContentLayoutProps) {
  return (
    <SectionShell data-template="content" {...sectionProps}>
      {aside ? (
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <Stack gap={6}>{children}</Stack>
          <aside className="lg:pt-1">{aside}</aside>
        </div>
      ) : (
        <Stack gap={6} className="max-w-prose">
          {children}
        </Stack>
      )}
    </SectionShell>
  );
}

export { ContentLayout, type ContentLayoutProps };
