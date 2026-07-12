"use client";

import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { QuoteBlock } from "@/features/home/sections/introduction/quote-block";
import {
  FadeIn,
  Stagger,
  StaggerItem,
} from "@/features/home/sections/introduction/motion";
import {
  COMPANY_VALUES,
  TRUST_QUOTE,
  VALUES_COPY,
  WHY_FEATURES,
  WHY_US_COPY,
} from "@/features/home/sections/why-us/constants";
import { TrustValueCard } from "@/features/home/sections/why-us/trust-value-card";
import { WhyFeatureCard } from "@/features/home/sections/why-us/why-feature-card";
import { cn } from "@/lib/utils";

type WhyUsSectionProps = {
  className?: string;
};

function WhyUsSection({ className }: WhyUsSectionProps) {
  return (
    <section
      id="why-us"
      data-section="why-us"
      aria-labelledby="why-us-heading"
      className={cn("relative overflow-hidden", className)}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-[8%] left-[-10%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgb(79_140_255/0.07),transparent_70%)] blur-3xl" />
        <div className="absolute right-[-8%] bottom-[20%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgb(124_92_255/0.06),transparent_70%)] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(255 255 255 / 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(255 255 255 / 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
          }}
        />
      </div>

      <div className="relative space-y-24 py-20 md:space-y-28 md:py-28 lg:space-y-32 lg:py-32">
        {/* Why Us */}
        <Container>
          <FadeIn>
            <header className="mb-12 max-w-2xl md:mb-14">
              <p className="mb-5 text-[0.75rem] font-medium tracking-[0.18em] text-accent-blue uppercase">
                {WHY_US_COPY.eyebrow}
              </p>
              <h2
                id="why-us-heading"
                className="text-heading-xl text-balance text-foreground md:text-[2.5rem] md:leading-[1.15]"
              >
                {WHY_US_COPY.headline}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-[1.0625rem] sm:leading-7">
                {WHY_US_COPY.description}
              </p>
            </header>
          </FadeIn>

          <Stagger>
            <Grid cols={1} colsMd={2} colsLg={3} gap={5}>
              {WHY_FEATURES.map((feature) => (
                <StaggerItem key={feature.id} className="h-full">
                  <WhyFeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                </StaggerItem>
              ))}
            </Grid>
          </Stagger>
        </Container>

        {/* Values */}
        <Container id="values" data-section="values">
          <FadeIn>
            <header className="mb-12 max-w-2xl md:mb-14">
              <p className="mb-5 text-[0.75rem] font-medium tracking-[0.18em] text-accent-blue uppercase">
                {VALUES_COPY.eyebrow}
              </p>
              <h2 className="text-heading-xl text-balance text-foreground md:text-[2.25rem] md:leading-[1.2]">
                {VALUES_COPY.headline}
              </h2>
              <p className="text-body-md mt-4 max-w-xl leading-relaxed text-text-secondary">
                {VALUES_COPY.description}
              </p>
            </header>
          </FadeIn>

          <Stagger>
            <Grid cols={1} colsMd={2} colsLg={4} gap={5}>
              {COMPANY_VALUES.map((value) => (
                <StaggerItem key={value.id} className="h-full">
                  <TrustValueCard
                    icon={value.icon}
                    title={value.title}
                    description={value.description}
                  />
                </StaggerItem>
              ))}
            </Grid>
          </Stagger>
        </Container>

        {/* Trust quote */}
        <Container>
          <FadeIn y={28}>
            <QuoteBlock
              eyebrow={TRUST_QUOTE.eyebrow}
              quote={TRUST_QUOTE.quote}
              attribution={TRUST_QUOTE.attribution}
            />
          </FadeIn>
        </Container>
      </div>
    </section>
  );
}

export { WhyUsSection };
