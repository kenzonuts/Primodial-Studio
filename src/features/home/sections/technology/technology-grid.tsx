"use client";

import { Grid } from "@/components/layout/grid";
import {
  Stagger,
  StaggerItem,
} from "@/features/home/sections/introduction/motion";
import { TECH_CATEGORIES } from "@/features/home/sections/technology/constants";
import { TechnologyCard } from "@/features/home/sections/technology/technology-card";
import { cn } from "@/lib/utils";

type TechnologyGridProps = {
  className?: string;
};

function TechnologyGrid({ className }: TechnologyGridProps) {
  return (
    <Stagger className={cn(className)}>
      <Grid cols={1} colsMd={2} colsLg={3} gap={5}>
        {TECH_CATEGORIES.map((category) => (
          <StaggerItem key={category.id} className="h-full">
            <TechnologyCard category={category} />
          </StaggerItem>
        ))}
      </Grid>
    </Stagger>
  );
}

export { TechnologyGrid, type TechnologyGridProps };
