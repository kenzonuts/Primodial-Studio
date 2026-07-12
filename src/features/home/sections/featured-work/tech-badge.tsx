import { cn } from "@/lib/utils";

type TechBadgeProps = {
  label: string;
  className?: string;
};

function TechBadge({ label, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[0.6875rem] font-medium tracking-tight text-text-secondary transition-[border-color,background-color,color,transform] duration-[var(--duration-fast)] group-hover:border-white/15 group-hover:bg-white/[0.05] group-hover:text-foreground",
        className,
      )}
    >
      {label}
    </span>
  );
}

export { TechBadge, type TechBadgeProps };
