import * as React from "react";

import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/shared/section-title";
import { cn } from "@/lib/utils";
import type { SectionAnimationHook } from "@/types/section";

type SectionShellProps = React.ComponentProps<"section"> & {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  action?: React.ReactNode;
  align?: "left" | "center";
  spacing?: "sm" | "md" | "lg" | "xl";
  containerSize?: React.ComponentProps<typeof Container>["size"];
  animation?: SectionAnimationHook;
  headerClassName?: string;
  contentClassName?: string;
};

const spacingMap = {
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-20",
  xl: "py-20 md:py-24",
} as const;

/**
 * Canonical section shell implementing the IA section contract.
 * Content areas are structural only — no decorative UI.
 */
function SectionShell({
  id,
  eyebrow,
  title,
  subtitle,
  description,
  action,
  align = "left",
  spacing = "lg",
  containerSize = "xl",
  animation = "none",
  className,
  headerClassName,
  contentClassName,
  children,
  ...props
}: SectionShellProps) {
  const descriptionText = description ?? subtitle;

  return (
    <section
      id={id}
      data-section={id}
      data-animate={animation === "none" ? undefined : animation}
      className={cn(spacingMap[spacing], className)}
      {...props}
    >
      <Container size={containerSize}>
        {title ? (
          <div
            className={cn(
              "mb-10 md:mb-14",
              align === "center" && "mx-auto",
              headerClassName,
            )}
          >
            <SectionTitle
              eyebrow={eyebrow}
              title={title}
              description={descriptionText}
              align={align}
            />
            {action ? (
              <div
                className={cn(
                  "mt-6",
                  align === "center" && "flex justify-center",
                )}
              >
                {action}
              </div>
            ) : null}
          </div>
        ) : null}
        <div className={contentClassName}>{children}</div>
      </Container>
    </section>
  );
}

export { SectionShell, type SectionShellProps };
