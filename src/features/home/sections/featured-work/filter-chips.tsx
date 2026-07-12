"use client";

import { PORTFOLIO_FILTERS } from "@/features/home/sections/featured-work/constants";
import type { ProjectFilter } from "@/types/portfolio";
import { cn } from "@/lib/utils";

type FilterChipsProps = {
  active: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
  className?: string;
};

function FilterChips({ active, onChange, className }: FilterChipsProps) {
  return (
    <div
      className={cn("flex flex-wrap gap-2", className)}
      role="tablist"
      aria-label="Filter projects by category"
    >
      {PORTFOLIO_FILTERS.map((filter) => {
        const isActive = active === filter.id;

        return (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter.id)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-[0.75rem] font-medium tracking-tight transition-[color,background-color,border-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-out)] focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none",
              isActive
                ? "border-white/20 bg-white text-background shadow-sm"
                : "border-border/80 bg-transparent text-text-secondary hover:border-border-strong hover:bg-surface-elevated hover:text-foreground",
            )}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}

export { FilterChips, type FilterChipsProps };
