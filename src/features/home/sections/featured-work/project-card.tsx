"use client";

import Link from "next/link";
import {
  useCallback,
  useState,
  type FocusEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { CoverPlaceholder } from "@/features/home/sections/featured-work/cover-placeholder";
import { ProjectStatusBadge } from "@/features/home/sections/featured-work/project-status-badge";
import { TechBadge } from "@/features/home/sections/featured-work/tech-badge";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { Project } from "@/types/portfolio";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

function ProjectCard({ project, className }: ProjectCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [spot, setSpot] = useState({ x: 50, y: 35 });

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

  const href = project.href ?? `/work/${project.slug}`;
  const categoryLabel =
    project.category.charAt(0).toUpperCase() + project.category.slice(1);

  return (
    <article
      className={cn("group relative h-full", className)}
      data-project={project.slug}
      data-case-study-ready={project.caseStudyReady || undefined}
      data-live-url={project.liveUrl || undefined}
      data-github={project.githubUrl || undefined}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onPointerMove={onPointerMove}
      onFocus={(event: FocusEvent<HTMLElement>) => {
        if (event.currentTarget.contains(event.target)) setHovered(true);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setHovered(false);
        }
      }}
    >
      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-surface/40 transition-[transform,border-color,background-color,box-shadow] duration-[var(--duration-normal)] ease-[var(--ease-out)]",
          "hover:-translate-y-1.5 hover:border-white/15 hover:bg-surface-elevated/65 hover:shadow-[0_24px_60px_rgb(0_0_0/0.45),0_0_40px_rgb(79_140_255/0.08)]",
          "focus-within:-translate-y-1.5 focus-within:border-white/15 focus-within:shadow-[0_24px_60px_rgb(0_0_0/0.45),0_0_40px_rgb(79_140_255/0.08)]",
        )}
      >
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 transition-opacity duration-[var(--duration-normal)]",
            hovered && "opacity-100",
          )}
          style={{
            background: `radial-gradient(380px circle at ${spot.x}% ${spot.y}%, rgb(79 140 255 / 0.12), transparent 50%)`,
          }}
        />

        <div className="relative overflow-hidden">
          {project.coverImage ? (
            // Real images mount here via next/image when assets exist
            <div
              className={cn(
                "aspect-[16/10] bg-cover bg-center transition-transform duration-700",
                hovered && !prefersReducedMotion && "scale-[1.04]",
              )}
              style={{ backgroundImage: `url(${project.coverImage})` }}
              role="img"
              aria-label={`${project.title} cover`}
            />
          ) : (
            <CoverPlaceholder
              title={project.title}
              zoomed={hovered && !prefersReducedMotion}
              accent={
                project.filters.includes("ai")
                  ? "purple"
                  : project.filters.includes("roblox")
                    ? "blue"
                    : "mixed"
              }
            />
          )}
          <div className="absolute top-3 left-3 z-20">
            <ProjectStatusBadge status={project.status} />
          </div>
        </div>

        <div className="relative z-10 flex flex-1 flex-col p-5 md:p-6">
          <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-text-muted uppercase">
            {categoryLabel}
          </p>
          <h3 className="mt-2 text-[1.0625rem] font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-[0.875rem] leading-relaxed text-text-secondary">
            {project.summary}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>

          <div className="mt-auto pt-5">
            <Link
              href={href}
              className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-foreground transition-colors hover:text-accent-blue focus-visible:rounded-sm focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
              aria-label={`Learn more about ${project.title}`}
            >
              Learn more
              <motion.span
                aria-hidden
                animate={
                  prefersReducedMotion
                    ? undefined
                    : hovered
                      ? { x: 3, y: -2 }
                      : { x: 0, y: 0 }
                }
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <ArrowUpRight className="size-3.5" />
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export { ProjectCard, type ProjectCardProps };
