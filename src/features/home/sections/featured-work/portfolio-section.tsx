"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/features/home/sections/introduction/motion";
import {
  filterProjects,
  getFeaturedProject,
  HOME_PROJECTS,
  PORTFOLIO_SECTION_COPY,
} from "@/features/home/sections/featured-work/constants";
import { FeaturedProject } from "@/features/home/sections/featured-work/featured-project";
import { FilterChips } from "@/features/home/sections/featured-work/filter-chips";
import { PortfolioGrid } from "@/features/home/sections/featured-work/portfolio-grid";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { ProjectFilter } from "@/types/portfolio";
import { cn } from "@/lib/utils";

type PortfolioSectionProps = {
  className?: string;
};

function PortfolioSection({ className }: PortfolioSectionProps) {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const prefersReducedMotion = usePrefersReducedMotion();

  const featured = useMemo(() => getFeaturedProject(HOME_PROJECTS), []);

  const filtered = useMemo(
    () => filterProjects(HOME_PROJECTS, filter),
    [filter],
  );

  const featuredVisible = Boolean(
    featured && (filter === "all" || featured.filters.includes(filter)),
  );

  const gridProjects = useMemo(() => {
    if (featuredVisible && featured) {
      return filtered.filter((project) => project.id !== featured.id);
    }
    return filtered;
  }, [featured, featuredVisible, filtered]);

  return (
    <section
      id="portfolio"
      data-section="featured-work"
      aria-labelledby="portfolio-heading"
      className={cn("relative overflow-hidden", className)}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-[10%] left-[-8%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgb(79_140_255/0.08),transparent_70%)] blur-3xl" />
        <div className="absolute right-[-10%] bottom-[15%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgb(124_92_255/0.07),transparent_70%)] blur-3xl" />
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
      </div>

      <Container className="relative py-20 md:py-28 lg:py-32">
        <FadeIn>
          <header className="mb-10 max-w-2xl md:mb-12">
            <p className="mb-5 text-[0.75rem] font-medium tracking-[0.18em] text-accent-blue uppercase">
              {PORTFOLIO_SECTION_COPY.eyebrow}
            </p>
            <h2
              id="portfolio-heading"
              className="text-heading-xl text-balance text-foreground md:text-[2.5rem] md:leading-[1.15]"
            >
              {PORTFOLIO_SECTION_COPY.headline}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-[1.0625rem] sm:leading-7">
              {PORTFOLIO_SECTION_COPY.description}
            </p>
          </header>
        </FadeIn>

        <FadeIn delay={0.06}>
          <FilterChips
            active={filter}
            onChange={setFilter}
            className="mb-10 md:mb-12"
          />
        </FadeIn>

        <div className="space-y-8 md:space-y-10">
          <AnimatePresence mode="wait">
            {featuredVisible && featured ? (
              <motion.div
                key={`featured-${filter}-${featured.id}`}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <FeaturedProject project={featured} />
              </motion.div>
            ) : null}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`grid-${filter}`}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <PortfolioGrid projects={gridProjects} />
            </motion.div>
          </AnimatePresence>
        </div>

        <FadeIn delay={0.08} className="mt-12 flex justify-center md:mt-16">
          <Button asChild variant="outline" size="lg" className="group">
            <Link href={PORTFOLIO_SECTION_COPY.ctaHref}>
              {PORTFOLIO_SECTION_COPY.ctaLabel}
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

export { PortfolioSection };
