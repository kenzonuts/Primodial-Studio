"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/features/home/sections/introduction/motion";
import { PROCESS_SECTION_COPY } from "@/features/home/sections/process/constants";
import { ProcessGrid } from "@/features/home/sections/process/process-grid";
import { cn } from "@/lib/utils";

type ProcessSectionProps = {
  className?: string;
};

function ProcessSection({ className }: ProcessSectionProps) {
  return (
    <section
      id="process"
      data-section="process"
      aria-labelledby="process-heading"
      className={cn("relative overflow-hidden", className)}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-[15%] right-[-8%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgb(79_140_255/0.08),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[10%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgb(124_92_255/0.06),transparent_70%)] blur-3xl" />
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
        {/* Floating decorative lines */}
        <div className="absolute top-[22%] left-[8%] h-px w-24 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="absolute right-[12%] bottom-[28%] h-px w-32 bg-gradient-to-r from-transparent via-accent-blue/25 to-transparent" />
      </div>

      <Container className="relative py-20 md:py-28 lg:py-32">
        <FadeIn>
          <header className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-5 text-[0.75rem] font-medium tracking-[0.18em] text-accent-blue uppercase">
              {PROCESS_SECTION_COPY.eyebrow}
            </p>
            <h2
              id="process-heading"
              className="text-heading-xl text-balance text-foreground md:text-[2.5rem] md:leading-[1.15]"
            >
              {PROCESS_SECTION_COPY.headline}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-[1.0625rem] sm:leading-7">
              {PROCESS_SECTION_COPY.description}
            </p>
          </header>
        </FadeIn>

        <ProcessGrid />
      </Container>
    </section>
  );
}

export { ProcessSection };
