"use client";

import { Grid } from "@/components/layout/grid";
import {
  Stagger,
  StaggerItem,
} from "@/features/home/sections/introduction/motion";
import { ProjectCard } from "@/features/home/sections/featured-work/project-card";
import type { Project } from "@/types/portfolio";
import { cn } from "@/lib/utils";

type PortfolioGridProps = {
  projects: Project[];
  className?: string;
};

function PortfolioGrid({ projects, className }: PortfolioGridProps) {
  if (!projects.length) {
    return (
      <p className="text-body-md py-12 text-center text-text-secondary">
        No projects in this category yet.
      </p>
    );
  }

  return (
    <Stagger
      className={cn(className)}
      key={projects.map((p) => p.id).join("-")}
    >
      <Grid cols={1} colsMd={2} colsLg={3} gap={5}>
        {projects.map((project) => (
          <StaggerItem key={project.id} className="h-full">
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </Grid>
    </Stagger>
  );
}

export { PortfolioGrid, type PortfolioGridProps };
