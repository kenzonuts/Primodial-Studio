"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/features/home/sections/introduction/motion";
import {
  HOME_SERVICES,
  SERVICES_SECTION_COPY,
} from "@/features/home/sections/services/constants";
import { ServiceGrid } from "@/features/home/sections/services/service-grid";
import { cn } from "@/lib/utils";

type ServicesSectionProps = {
  className?: string;
};

function ServicesSection({ className }: ServicesSectionProps) {
  return (
    <section
      id="services"
      data-section="services"
      aria-labelledby="services-heading"
      className={cn("relative overflow-hidden", className)}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-[8%] right-[-8%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgb(79_140_255/0.09),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[10%] left-[-10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgb(124_92_255/0.07),transparent_70%)] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.22]"
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
          className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container className="relative py-20 md:py-28 lg:py-32">
        <FadeIn>
          <header className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-5 text-[0.75rem] font-medium tracking-[0.18em] text-accent-blue uppercase">
              {SERVICES_SECTION_COPY.eyebrow}
            </p>
            <h2
              id="services-heading"
              className="text-heading-xl text-balance text-foreground md:text-[2.5rem] md:leading-[1.15]"
            >
              {SERVICES_SECTION_COPY.headline}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-[1.0625rem] sm:leading-7">
              {SERVICES_SECTION_COPY.description}
            </p>
          </header>
        </FadeIn>

        <ServiceGrid services={HOME_SERVICES} />

        <FadeIn delay={0.1} className="mt-12 flex justify-center md:mt-16">
          <Button asChild variant="outline" size="lg" className="group">
            <Link href={SERVICES_SECTION_COPY.ctaHref}>
              {SERVICES_SECTION_COPY.ctaLabel}
              <ArrowRight
                className="size-4 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}

export { ServicesSection };
