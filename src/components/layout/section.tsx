import * as React from "react";

import { Container, type ContainerSize } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const sectionSpacing = {
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-20",
  xl: "py-20 md:py-24",
} as const;

type SectionSpacing = keyof typeof sectionSpacing;

type SectionWrapperProps = React.ComponentProps<"section"> & {
  spacing?: SectionSpacing;
  containerSize?: ContainerSize;
  containerClassName?: string;
};

function SectionWrapper({
  spacing = "lg",
  containerSize = "xl",
  containerClassName,
  className,
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <section className={cn(sectionSpacing[spacing], className)} {...props}>
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}

export { SectionWrapper, type SectionSpacing, type SectionWrapperProps };
