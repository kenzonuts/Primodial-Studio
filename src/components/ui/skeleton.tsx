import { cn } from "@/lib/utils";

type SkeletonProps = React.ComponentProps<"div"> & {
  rounded?: boolean;
};

function Skeleton({ className, rounded = true, ...props }: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "animate-pulse bg-skeleton",
        rounded && "rounded-md",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton, type SkeletonProps };
