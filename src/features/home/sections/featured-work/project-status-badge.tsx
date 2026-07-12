import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/types/portfolio";

const STATUS_LABEL: Record<ProjectStatus, string> = {
  published: "Published",
  draft: "Draft",
  archived: "Archived",
  "in-progress": "In Progress",
  shipped: "Shipped",
};

type ProjectStatusBadgeProps = {
  status: ProjectStatus;
  className?: string;
};

function ProjectStatusBadge({ status, className }: ProjectStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-black/30 px-2.5 py-1 text-[0.625rem] font-medium tracking-[0.12em] text-text-secondary uppercase backdrop-blur-sm",
        className,
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          status === "shipped" || status === "published"
            ? "bg-success"
            : status === "in-progress"
              ? "bg-accent-blue"
              : "bg-text-muted",
        )}
        aria-hidden
      />
      {STATUS_LABEL[status]}
    </span>
  );
}

export { ProjectStatusBadge, type ProjectStatusBadgeProps };
