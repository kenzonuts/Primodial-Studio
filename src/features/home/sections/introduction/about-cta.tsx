"use client";

import { Container } from "@/components/layout/container";
import { ABOUT_COPY } from "@/features/home/sections/introduction/constants";
import { CtaBlock } from "@/features/home/sections/introduction/cta-block";
import { FadeIn } from "@/features/home/sections/introduction/motion";

function AboutCta() {
  return (
    <Container>
      <FadeIn y={24}>
        <CtaBlock
          eyebrow={ABOUT_COPY.cta.eyebrow}
          title={ABOUT_COPY.cta.title}
          description={ABOUT_COPY.cta.description}
          primary={ABOUT_COPY.cta.primary}
          secondary={ABOUT_COPY.cta.secondary}
        />
      </FadeIn>
    </Container>
  );
}

export { AboutCta };
