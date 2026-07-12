"use client";

import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import {
  ABOUT_COPY,
  ABOUT_FEATURES,
} from "@/features/home/sections/introduction/constants";
import { FeatureCard } from "@/features/home/sections/introduction/feature-card";
import {
  FadeIn,
  Stagger,
  StaggerItem,
} from "@/features/home/sections/introduction/motion";

function AboutWhy() {
  return (
    <Container>
      <FadeIn>
        <div className="mb-10 max-w-2xl md:mb-12">
          <p className="mb-3 text-[0.75rem] font-medium tracking-[0.18em] text-accent-blue uppercase">
            {ABOUT_COPY.why.eyebrow}
          </p>
          <h3 className="text-heading-xl text-balance text-foreground">
            {ABOUT_COPY.why.title}
          </h3>
          <p className="text-body-md mt-4 max-w-xl leading-relaxed text-text-secondary">
            {ABOUT_COPY.why.description}
          </p>
        </div>
      </FadeIn>

      <Stagger>
        <Grid cols={1} colsMd={2} colsLg={3} gap={4}>
          {ABOUT_FEATURES.map((feature) => (
            <StaggerItem key={feature.id}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </StaggerItem>
          ))}
        </Grid>
      </Stagger>
    </Container>
  );
}

export { AboutWhy };
