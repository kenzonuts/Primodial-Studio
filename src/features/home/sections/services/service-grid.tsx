"use client";

import { Grid } from "@/components/layout/grid";
import {
  Stagger,
  StaggerItem,
} from "@/features/home/sections/introduction/motion";
import { ServiceCard } from "@/features/home/sections/services/service-card";
import type { ServiceCardModel } from "@/features/home/sections/services/constants";
import { cn } from "@/lib/utils";

type ServiceGridProps = {
  services: ServiceCardModel[];
  className?: string;
};

function ServiceGrid({ services, className }: ServiceGridProps) {
  return (
    <Stagger className={cn(className)}>
      <Grid cols={1} colsMd={2} colsLg={3} gap={5}>
        {services.map((service) => (
          <StaggerItem key={service.id} className="h-full">
            <ServiceCard service={service} />
          </StaggerItem>
        ))}
      </Grid>
    </Stagger>
  );
}

export { ServiceGrid, type ServiceGridProps };
