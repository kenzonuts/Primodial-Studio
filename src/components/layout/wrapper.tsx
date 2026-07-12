import * as React from "react";

import { cn } from "@/lib/utils";

type WrapperProps = React.ComponentProps<"div"> & {
  as?: "div" | "section" | "main" | "aside" | "article";
  bleed?: boolean;
};

/**
 * Full-bleed layout context — backgrounds, clips, and section shells.
 */
function Wrapper({
  as: Comp = "div",
  bleed = false,
  className,
  ...props
}: WrapperProps) {
  return (
    <Comp
      className={cn(
        "relative w-full",
        bleed && "right-1/2 left-1/2 -mr-[50vw] -ml-[50vw] w-screen",
        className,
      )}
      {...props}
    />
  );
}

export { Wrapper, type WrapperProps };
