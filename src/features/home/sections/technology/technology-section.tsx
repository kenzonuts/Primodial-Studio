"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/features/home/sections/introduction/motion";
import { TECHNOLOGY_SECTION_COPY } from "@/features/home/sections/technology/constants";
import { TechnologyGrid } from "@/features/home/sections/technology/technology-grid";
import { cn } from "@/lib/utils";

type TechnologySectionProps = {
  className?: string;
};

function TechnologySection({ className }: TechnologySectionProps) {
  return (
    <section
      id="technology"
      data-section="technology"
      aria-labelledby="technology-heading"
      className={cn("relative overflow-hidden", className)}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-[12%] left-[-8%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgb(124_92_255/0.08),transparent_70%)] blur-3xl" />
        <div className="absolute right-[-10%] bottom-[8%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgb(79_140_255/0.07),transparent_70%)] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(255 255 255 / 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(255 255 255 / 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-[30%] right-[18%] h-px w-28 bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />
        <div className="absolute bottom-[35%] left-[14%] h-px w-20 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      </div>

      <Container className="relative py-20 md:py-28 lg:py-32">
        <FadeIn>
          <header className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-5 text-[0.75rem] font-medium tracking-[0.18em] text-accent-blue uppercase">
              {TECHNOLOGY_SECTION_COPY.eyebrow}
            </p>
            <h2
              id="technology-heading"
              className="text-heading-xl text-balance text-foreground md:text-[2.5rem] md:leading-[1.15]"
            >
              {TECHNOLOGY_SECTION_COPY.headline}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-[1.0625rem] sm:leading-7">
              {TECHNOLOGY_SECTION_COPY.description}
            </p>
          </header>
        </FadeIn>

        <TechnologyGrid />
      </Container>
    </section>
  );
}

export { TechnologySection };
