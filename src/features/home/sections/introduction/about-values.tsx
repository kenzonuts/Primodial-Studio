"use client";

import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { ABOUT_VALUES } from "@/features/home/sections/introduction/constants";
import {
  FadeIn,
  Stagger,
  StaggerItem,
} from "@/features/home/sections/introduction/motion";
import { ValueCard } from "@/features/home/sections/introduction/value-card";

function AboutValues() {
  return (
    <Container>
      <FadeIn>
        <div className="mb-10 max-w-2xl md:mb-12">
          <p className="mb-3 text-[0.75rem] font-medium tracking-[0.18em] text-accent-blue uppercase">
            Core Values
          </p>
          <h3 className="text-heading-xl text-balance text-foreground">
            Principles that guide every engagement.
          </h3>
        </div>
      </FadeIn>

      <Stagger>
        <Grid cols={1} colsMd={2} colsLg={4} gap={5}>
          {ABOUT_VALUES.map((value) => (
            <StaggerItem key={value.id}>
              <ValueCard
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            </StaggerItem>
          ))}
        </Grid>
      </Stagger>
    </Container>
  );
}

export { AboutValues };
