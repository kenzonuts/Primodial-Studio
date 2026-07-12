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

import { FeatureList } from "@/features/home/sections/services/feature-list";
import { ServiceIcon } from "@/features/home/sections/services/service-icon";
import type { ServiceCardModel } from "@/features/home/sections/services/constants";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  service: ServiceCardModel;
  className?: string;
};

function ServiceCard({ service, className }: ServiceCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [spot, setSpot] = useState({ x: 50, y: 40 });

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

  const activate = () => setHovered(true);
  const deactivate = () => setHovered(false);

  const onFocus = (event: FocusEvent<HTMLElement>) => {
    if (event.currentTarget.contains(event.target)) activate();
  };

  return (
    <article
      className={cn("group relative h-full", className)}
      data-service={service.slug}
      data-has-image={Boolean(service.image) || undefined}
      data-has-video={Boolean(service.video) || undefined}
      data-case-study={service.caseStudyHref || undefined}
      onPointerEnter={activate}
      onPointerLeave={deactivate}
      onPointerMove={onPointerMove}
      onFocus={onFocus}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          deactivate();
        }
      }}
    >
      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-surface/45 p-6 transition-[transform,border-color,background-color,box-shadow] duration-[var(--duration-normal)] ease-[var(--ease-out)]",
          "hover:-translate-y-1.5 hover:border-white/15 hover:bg-surface-elevated/70 hover:shadow-[0_20px_50px_rgb(0_0_0/0.45),0_0_40px_rgb(79_140_255/0.08)]",
          "focus-within:-translate-y-1.5 focus-within:border-white/15 focus-within:bg-surface-elevated/70 focus-within:shadow-[0_20px_50px_rgb(0_0_0/0.45),0_0_40px_rgb(79_140_255/0.08)]",
        )}
      >
        {/* Gradient border glow */}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-[var(--duration-normal)]",
            hovered && "opacity-100",
          )}
          style={{
            background: `radial-gradient(420px circle at ${spot.x}% ${spot.y}%, rgb(79 140 255 / 0.14), transparent 45%)`,
          }}
        />

        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-px rounded-[15px] opacity-0 transition-opacity duration-[var(--duration-normal)]",
            hovered && "opacity-100",
          )}
          style={{
            background:
              "linear-gradient(135deg, rgb(79 140 255 / 0.35), transparent 40%, transparent 60%, rgb(124 92 255 / 0.25))",
            padding: 1,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        <div className="relative z-10 flex flex-1 flex-col">
          <div className="mb-5 flex items-start justify-between gap-3">
            <ServiceIcon icon={service.icon} hovered={hovered} />
            <span className="text-[0.6875rem] font-medium tracking-[0.14em] text-text-muted uppercase">
              {service.category}
            </span>
          </div>

          <h3 className="text-[1.125rem] font-semibold tracking-tight text-foreground">
            {service.title}
          </h3>
          <p className="mt-2 text-[0.875rem] leading-relaxed text-text-secondary">
            {service.description}
          </p>

          <div className="mt-5 flex-1">
            <FeatureList features={service.features} />
          </div>

          {/* Future media slot — architecture reserved */}
          {service.image || service.video ? (
            <div className="mt-5 overflow-hidden rounded-xl border border-border/60">
              {/* Media mounts here when assets exist */}
            </div>
          ) : null}

          {service.technologies?.length ? (
            <p className="mt-4 text-[0.6875rem] text-text-muted">
              {service.technologies.join(" · ")}
            </p>
          ) : null}

          <div className="mt-6 pt-1">
            <Link
              href={service.href}
              className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-foreground transition-colors hover:text-accent-blue focus-visible:rounded-sm focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
              aria-label={`Learn more about ${service.title}`}
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

export { ServiceCard, type ServiceCardProps };
