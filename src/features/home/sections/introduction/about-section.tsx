"use client";

import {
  AboutIntro,
  MissionVision,
} from "@/features/home/sections/introduction/about-intro";
import { AboutValues } from "@/features/home/sections/introduction/about-values";
import { AboutPhilosophy } from "@/features/home/sections/introduction/about-philosophy";
import { AboutHighlights } from "@/features/home/sections/introduction/about-highlights";
import { AboutWhy } from "@/features/home/sections/introduction/about-why";
import { AboutCta } from "@/features/home/sections/introduction/about-cta";
import { cn } from "@/lib/utils";

type AboutSectionProps = {
  className?: string;
};

/**
 * Homepage About block — trust, vision, values, and conversion.
 * Maps to IA section `introduction` (+ why/cta narrative for this phase).
 */
function AboutSection({ className }: AboutSectionProps) {
  return (
    <section
      id="about"
      data-section="introduction"
      aria-labelledby="about-heading"
      className={cn("relative overflow-hidden", className)}
    >
      {/* Ambient atmosphere — lightweight, no media */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-[12%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgb(79_140_255/0.08),transparent_70%)] blur-3xl" />
        <div className="absolute top-[48%] right-[-12%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgb(124_92_255/0.07),transparent_70%)] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.2]"
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

      <div className="relative space-y-20 py-20 md:space-y-28 md:py-28 lg:space-y-32 lg:py-32">
        <AboutIntro />
        <MissionVision />
        <AboutValues />
        <AboutPhilosophy />
        <AboutHighlights />
        <AboutWhy />
        <AboutCta />
      </div>
    </section>
  );
}

export { AboutSection };
