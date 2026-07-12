"use client";

import { Container } from "@/components/layout/container";
import { ABOUT_COPY } from "@/features/home/sections/introduction/constants";
import { FadeIn } from "@/features/home/sections/introduction/motion";
import { QuoteBlock } from "@/features/home/sections/introduction/quote-block";

function AboutPhilosophy() {
  return (
    <Container>
      <FadeIn y={28}>
        <QuoteBlock
          eyebrow={ABOUT_COPY.philosophy.eyebrow}
          quote={ABOUT_COPY.philosophy.quote}
          attribution={ABOUT_COPY.philosophy.attribution}
        />
      </FadeIn>
    </Container>
  );
}

export { AboutPhilosophy };
