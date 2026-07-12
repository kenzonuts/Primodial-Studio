import type { LucideIcon } from "lucide-react";

import { Text } from "@/components/typography";
import { Icon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";

type EmptyStateProps = {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

function EmptyState({
  icon,
  title,
  description,
  action,
  children,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 px-6 py-16 text-center",
        className,
      )}
    >
      {icon ? (
        <div className="flex size-12 items-center justify-center rounded-full bg-surface-elevated text-text-secondary">
          <Icon icon={icon} size="lg" />
        </div>
      ) : null}
      <div className="space-y-2">
        <Text as="h2" variant="heading-sm">
          {title}
        </Text>
        {description ? (
          <Text as="p" variant="body-sm" muted>
            {description}
          </Text>
        ) : null}
      </div>
      {(action ?? children) ? (
        <div className="pt-2">{action ?? children}</div>
      ) : null}
    </div>
  );
}

export { EmptyState, type EmptyStateProps };
