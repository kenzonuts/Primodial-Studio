"use client";

import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { STUDIO_HIGHLIGHTS } from "@/features/home/sections/introduction/constants";
import { HighlightStat } from "@/features/home/sections/introduction/highlight-stat";
import {
  FadeIn,
  Stagger,
  StaggerItem,
} from "@/features/home/sections/introduction/motion";

function AboutHighlights() {
  return (
    <Container>
      <FadeIn>
        <div className="mb-10 max-w-2xl md:mb-12">
          <p className="mb-3 text-[0.75rem] font-medium tracking-[0.18em] text-accent-blue uppercase">
            Studio Highlights
          </p>
          <h3 className="text-heading-xl text-balance text-foreground">
            A snapshot of the studio—updated as we grow.
          </h3>
          <p className="text-body-md mt-3 max-w-xl text-text-secondary">
            Metrics appear here once verified. Placeholders keep the layout
            honest until then.
          </p>
        </div>
      </FadeIn>

      <Stagger>
        <Grid cols={2} colsMd={4} colsLg={4} gap={4}>
          {STUDIO_HIGHLIGHTS.map((item) => (
            <StaggerItem key={item.id}>
              <HighlightStat
                label={item.label}
                value={item.value}
                note={item.note}
              />
            </StaggerItem>
          ))}
        </Grid>
      </Stagger>
    </Container>
  );
}

export { AboutHighlights };
