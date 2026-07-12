"use client";

import { Container } from "@/components/layout/container";
import { Split } from "@/components/layout/split";
import { ABOUT_COPY } from "@/features/home/sections/introduction/constants";
import { FadeIn } from "@/features/home/sections/introduction/motion";

function AboutIntro() {
  return (
    <Container>
      <FadeIn>
        <div className="max-w-3xl">
          <p className="mb-5 text-[0.75rem] font-medium tracking-[0.18em] text-accent-blue uppercase">
            {ABOUT_COPY.eyebrow}
          </p>
          <h2
            id="about-heading"
            className="text-display-md text-balance text-foreground sm:text-[2.75rem] lg:text-[3.25rem]"
          >
            {ABOUT_COPY.headline}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-[1.0625rem] sm:leading-7">
            {ABOUT_COPY.description}
          </p>
        </div>
      </FadeIn>

      <div
        aria-hidden
        className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent md:mt-16"
      />
    </Container>
  );
}

function MissionVision() {
  return (
    <Container>
      <Split ratio="1/1" gap={12} className="items-start">
        <FadeIn delay={0.05}>
          <article className="space-y-4 border-l border-accent-blue/40 pl-6">
            <p className="text-[0.75rem] font-medium tracking-[0.16em] text-accent-blue uppercase">
              {ABOUT_COPY.mission.eyebrow}
            </p>
            <h3 className="text-heading-lg text-balance text-foreground">
              {ABOUT_COPY.mission.title}
            </h3>
            <p className="text-body-md max-w-md leading-relaxed text-text-secondary">
              {ABOUT_COPY.mission.body}
            </p>
          </article>
        </FadeIn>

        <FadeIn delay={0.12}>
          <article className="space-y-4 border-l border-accent-purple/40 pl-6 lg:mt-10">
            <p className="text-[0.75rem] font-medium tracking-[0.16em] text-accent-purple uppercase">
              {ABOUT_COPY.vision.eyebrow}
            </p>
            <h3 className="text-heading-lg text-balance text-foreground">
              {ABOUT_COPY.vision.title}
            </h3>
            <p className="text-body-md max-w-md leading-relaxed text-text-secondary">
              {ABOUT_COPY.vision.body}
            </p>
          </article>
        </FadeIn>
      </Split>
    </Container>
  );
}

export { AboutIntro, MissionVision };
