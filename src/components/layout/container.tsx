import * as React from "react";

import { cn } from "@/lib/utils";

const containerSizes = {
  sm: "max-w-(--container-sm)",
  md: "max-w-(--container-md)",
  lg: "max-w-(--container-lg)",
  xl: "max-w-(--container-xl)",
  "2xl": "max-w-(--container-2xl)",
  prose: "max-w-(--container-prose)",
  full: "max-w-none",
} as const;

type ContainerSize = keyof typeof containerSizes;

type ContainerProps = React.ComponentProps<"div"> & {
  size?: ContainerSize;
};

function Container({ size = "xl", className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-(--container-padding-mobile) md:px-(--container-padding-tablet) xl:px-(--container-padding-desktop)",
        containerSizes[size],
        className,
      )}
      {...props}
    />
  );
}

export { Container, type ContainerProps, type ContainerSize };
