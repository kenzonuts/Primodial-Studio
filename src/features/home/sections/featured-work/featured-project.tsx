"use client";

import Link from "next/link";
import {
  useCallback,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CoverPlaceholder } from "@/features/home/sections/featured-work/cover-placeholder";
import { ProjectStatusBadge } from "@/features/home/sections/featured-work/project-status-badge";
import { TechBadge } from "@/features/home/sections/featured-work/tech-badge";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { Project } from "@/types/portfolio";
import { cn } from "@/lib/utils";

type FeaturedProjectProps = {
  project: Project;
  className?: string;
};

/**
 * Magazine-style featured case study — first project emphasis.
 */
function FeaturedProject({ project, className }: FeaturedProjectProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [spot, setSpot] = useState({ x: 60, y: 40 });
  const href = project.href ?? `/work/${project.slug}`;

  const onPointerMove = useCallback(
    (event: ReactPointerEvent<HTMLElement>) => {
      if (prefersReducedMotion) return;
      const rect = event.currentTarget.getBoundingClientRect();
      setSpot({
        x: ((event.clientX - rect.left) / rect.width) * 100,
        y: ((event.clientY - rect.top) / rect.height) * 100,
      });
    },
    [prefersReducedMotion],
  );

  return (
    <article
      className={cn("group relative", className)}
      data-project={project.slug}
      data-featured
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onPointerMove={onPointerMove}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl border border-border/80 bg-surface/40 transition-[border-color,box-shadow] duration-[var(--duration-normal)] ease-[var(--ease-out)]",
          "hover:border-white/15 hover:shadow-[0_28px_80px_rgb(0_0_0/0.5),0_0_50px_rgb(79_140_255/0.1)]",
          "focus-within:border-white/15 focus-within:shadow-[0_28px_80px_rgb(0_0_0/0.5),0_0_50px_rgb(79_140_255/0.1)]",
        )}
      >
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-[var(--duration-normal)]",
            hovered && "opacity-100",
          )}
          style={{
            background: `radial-gradient(560px circle at ${spot.x}% ${spot.y}%, rgb(79 140 255 / 0.14), transparent 50%)`,
          }}
        />

        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[16rem] overflow-hidden sm:min-h-[20rem] lg:min-h-[28rem]">
            {project.coverImage ? (
              <div
                className={cn(
                  "absolute inset-0 bg-cover bg-center transition-transform duration-700",
                  hovered && !prefersReducedMotion && "scale-[1.04]",
                )}
                style={{ backgroundImage: `url(${project.coverImage})` }}
                role="img"
                aria-label={`${project.title} cover`}
              />
            ) : (
              <CoverPlaceholder
                title={project.title}
                className="absolute inset-0 aspect-auto h-full"
                zoomed={hovered && !prefersReducedMotion}
                accent="blue"
              />
            )}
            <div className="absolute top-4 left-4 z-20">
              <ProjectStatusBadge status={project.status} />
            </div>
          </div>

          <div className="relative z-10 flex flex-col justify-center p-7 sm:p-9 lg:p-10 xl:p-12">
            <p className="text-[0.75rem] font-medium tracking-[0.18em] text-accent-blue uppercase">
              Featured Project
            </p>
            <h3 className="mt-4 text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {project.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-text-secondary">
              {project.summary}
            </p>
            <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-text-secondary">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="group/btn">
                <Link
                  href={href}
                  aria-label={`Learn more about ${project.title}`}
                >
                  Learn more
                  <motion.span
                    aria-hidden
                    animate={
                      prefersReducedMotion
                        ? undefined
                        : hovered
                          ? { x: 2, y: -2 }
                          : { x: 0, y: 0 }
                    }
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ArrowUpRight className="size-4" />
                  </motion.span>
                </Link>
              </Button>
              {project.liveUrl ? (
                <Button asChild variant="outline" size="lg">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo
                  </Link>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export { FeaturedProject, type FeaturedProjectProps };
