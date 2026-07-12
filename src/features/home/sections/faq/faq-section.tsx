"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/features/home/sections/introduction/motion";
import {
  FAQ_ITEMS,
  FAQ_SECTION_COPY,
} from "@/features/home/sections/faq/constants";
import { FaqAccordion } from "@/features/home/sections/faq/faq-accordion";
import { cn } from "@/lib/utils";

type FaqSectionProps = {
  className?: string;
};

function FaqSection({ className }: FaqSectionProps) {
  return (
    <section
      id="faq"
      data-section="faq"
      aria-labelledby="faq-heading"
      className={cn("relative overflow-hidden", className)}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-[20%] right-[-8%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgb(79_140_255/0.06),transparent_70%)] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(255 255 255 / 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(255 255 255 / 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
          }}
        />
      </div>

      <Container className="relative py-20 md:py-28 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 xl:gap-20">
          <FadeIn>
            <header className="max-w-md lg:sticky lg:top-28 lg:self-start">
              <p className="mb-5 text-[0.75rem] font-medium tracking-[0.18em] text-accent-blue uppercase">
                {FAQ_SECTION_COPY.eyebrow}
              </p>
              <h2
                id="faq-heading"
                className="text-heading-xl text-balance text-foreground md:text-[2.25rem] md:leading-[1.2]"
              >
                {FAQ_SECTION_COPY.headline}
              </h2>
              <p className="text-body-md mt-4 leading-relaxed text-text-secondary">
                {FAQ_SECTION_COPY.description}
              </p>
            </header>
          </FadeIn>

          <FadeIn delay={0.08}>
            <FaqAccordion items={FAQ_ITEMS} />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

export { FaqSection };
