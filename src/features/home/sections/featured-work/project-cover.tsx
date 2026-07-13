"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

type ProjectCoverProps = {
  src: string;
  alt: string;
  className?: string;
  /** Prefer contain for wide showcase mockups so nothing is clipped. */
  fit?: "contain" | "cover";
  zoomed?: boolean;
  sizes?: string;
  priority?: boolean;
};

/**
 * Portfolio cover media — contain keeps full showcase frames visible.
 */
function ProjectCover({
  src,
  alt,
  className,
  fit = "contain",
  zoomed = false,
  sizes = "(max-width: 1024px) 100vw, 60vw",
  priority = false,
}: ProjectCoverProps) {
  return (
    <div className={cn("relative overflow-hidden bg-[#07090c]", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn(
          "transition-transform duration-700",
          fit === "contain"
            ? "object-contain object-center"
            : "object-cover object-center",
          zoomed && "scale-[1.03]",
        )}
      />
    </div>
  );
}

export { ProjectCover, type ProjectCoverProps };
