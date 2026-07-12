import * as React from "react";

import { SectionShell } from "@/components/layout/section-shell";
import { Split } from "@/components/layout/split";
import type { SectionShellProps } from "@/components/layout/section-shell";

type ContactLayoutProps = Omit<SectionShellProps, "children"> & {
  form: React.ReactNode;
  details: React.ReactNode;
  faq?: React.ReactNode;
};

/**
 * Contact page frame — form + company details, optional FAQ.
 */
function ContactLayout({
  form,
  details,
  faq,
  ...sectionProps
}: ContactLayoutProps) {
  return (
    <>
      <SectionShell data-template="contact" {...sectionProps}>
        <Split ratio="7/5" gap={12}>
          <div>{form}</div>
          <div>{details}</div>
        </Split>
      </SectionShell>
      {faq}
    </>
  );
}

export { ContactLayout, type ContactLayoutProps };
