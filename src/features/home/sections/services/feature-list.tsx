import { cn } from "@/lib/utils";

type FeatureListProps = {
  features: string[];
  className?: string;
};

function FeatureList({ features, className }: FeatureListProps) {
  return (
    <ul className={cn("space-y-2", className)} role="list">
      {features.map((feature) => (
        <li
          key={feature}
          className="flex items-start gap-2.5 text-[0.8125rem] leading-relaxed text-text-secondary"
        >
          <span
            className="mt-1.5 size-1 shrink-0 rounded-full bg-accent-blue/70"
            aria-hidden
          />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

export { FeatureList, type FeatureListProps };
