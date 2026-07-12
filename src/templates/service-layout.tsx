import * as React from "react";

import { SectionShell } from "@/components/layout/section-shell";
import { Stack } from "@/components/layout/stack";
import type { SectionShellProps } from "@/components/layout/section-shell";
import { SERVICE_PAGE_SECTIONS } from "@/types/service";

type ServiceLayoutProps = {
  hero: React.ReactNode;
  overview?: React.ReactNode;
  benefits?: React.ReactNode;
  process?: React.ReactNode;
  technology?: React.ReactNode;
  faq?: React.ReactNode;
  cta?: React.ReactNode;
};

type ServiceBlockProps = Omit<SectionShellProps, "children"> & {
  children: React.ReactNode;
};

function ServiceBlock({ children, ...props }: ServiceBlockProps) {
  return (
    <SectionShell {...props}>
      <Stack gap={8}>{children}</Stack>
    </SectionShell>
  );
}

/**
 * Service detail page architecture — ordered slots match IA.
 */
function ServiceLayout({
  hero,
  overview,
  benefits,
  process,
  technology,
  faq,
  cta,
}: ServiceLayoutProps) {
  return (
    <div
      data-template="service"
      data-sections={SERVICE_PAGE_SECTIONS.join(",")}
    >
      {hero}
      {overview}
      {benefits}
      {process}
      {technology}
      {faq}
      {cta}
    </div>
  );
}

export { ServiceLayout, ServiceBlock, type ServiceLayoutProps };
