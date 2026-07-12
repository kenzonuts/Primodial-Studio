import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/typography";
import { cn } from "@/lib/utils";

type StatTrend = "up" | "down" | "neutral";

type StatCardProps = {
  label: string;
  value: React.ReactNode;
  delta?: React.ReactNode;
  trend?: StatTrend;
  description?: string;
  variant?: "default" | "glass";
  className?: string;
};

const trendIcons = {
  up: ArrowUpRight,
  down: ArrowDownRight,
  neutral: Minus,
} as const;

function StatCard({
  label,
  value,
  delta,
  trend = "neutral",
  description,
  variant = "default",
  className,
}: StatCardProps) {
  const TrendIcon = trendIcons[trend];

  return (
    <Card variant={variant} className={cn("gap-4", className)}>
      <CardContent className="space-y-3">
        <Text as="p" variant="label" muted>
          {label}
        </Text>
        <div className="flex flex-wrap items-baseline gap-2">
          <Text as="p" variant="heading-xl">
            {value}
          </Text>
          {delta ? (
            <span
              className={cn(
                "text-caption inline-flex items-center gap-1 font-medium",
                trend === "up" && "text-success",
                trend === "down" && "text-danger",
                trend === "neutral" && "text-text-secondary",
              )}
            >
              <TrendIcon className="size-3.5" aria-hidden />
              {delta}
            </span>
          ) : null}
        </div>
        {description ? (
          <Text as="p" variant="body-sm" muted>
            {description}
          </Text>
        ) : null}
      </CardContent>
    </Card>
  );
}

export { StatCard, type StatCardProps, type StatTrend };
