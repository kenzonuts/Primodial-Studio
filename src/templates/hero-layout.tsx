import * as React from "react";

import { Container } from "@/components/layout/container";
import { Stack } from "@/components/layout/stack";
import { Wrapper } from "@/components/layout/wrapper";
import { cn } from "@/lib/utils";

type HeroLayoutProps = {
  children: React.ReactNode;
  media?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  /** Full viewport height hero frame */
  fullHeight?: boolean;
};

/**
 * Hero page frame — brand-first composition slot.
 * Does not impose visual decoration; only structure.
 */
function HeroLayout({
  children,
  media,
  className,
  contentClassName,
  fullHeight = true,
}: HeroLayoutProps) {
  return (
    <Wrapper
      as="section"
      data-template="hero"
      className={cn(
        "relative overflow-hidden",
        fullHeight && "min-h-[100dvh]",
        className,
      )}
    >
      {media ? (
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          {media}
        </div>
      ) : null}
      <Container
        size="xl"
        className={cn(
          "relative flex flex-col justify-center py-24 md:py-32",
          fullHeight && "min-h-[100dvh]",
          contentClassName,
        )}
      >
        <Stack gap={6} className="max-w-3xl">
          {children}
        </Stack>
      </Container>
    </Wrapper>
  );
}

export { HeroLayout, type HeroLayoutProps };
