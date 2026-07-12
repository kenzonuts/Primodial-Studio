"use client";

import {
  useCallback,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/features/home/sections/introduction/motion";
import { FINAL_CTA_COPY } from "@/features/home/sections/cta/constants";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type Ripple = { id: number; x: number; y: number };

function useRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const reducedMotion = usePrefersReducedMotion();
  const idRef = useRef(0);

  const onPointerDown = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (reducedMotion) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const id = ++idRef.current;
      setRipples((prev) => [
        ...prev,
        { id, x: event.clientX - rect.left, y: event.clientY - rect.top },
      ]);
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    },
    [reducedMotion],
  );

  return { ripples, onPointerDown };
}

function RippleLayer({ ripples }: { ripples: Ripple[] }) {
  return (
    <>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          aria-hidden
          className="pointer-events-none absolute z-[5] size-3 animate-[cta-ripple_0.6s_ease-out_forwards] rounded-full bg-white/35"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </>
  );
}

function CtaPrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const { ripples, onPointerDown } = useRipple();

  return (
    <Button
      asChild
      size="lg"
      className="group relative min-w-[12rem] overflow-hidden shadow-[0_0_28px_rgb(255_255_255/0.08)] transition-[box-shadow,transform] duration-[var(--duration-fast)] hover:shadow-[0_0_36px_rgb(79_140_255/0.22)] focus-visible:shadow-[0_0_36px_rgb(79_140_255/0.28)]"
    >
      <Link href={href} onPointerDown={onPointerDown} className="relative">
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />
        <RippleLayer ripples={ripples} />
      </Link>
    </Button>
  );
}

function CtaSecondaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const { ripples, onPointerDown } = useRipple();

  return (
    <Button
      asChild
      size="lg"
      variant="outline"
      className="group relative min-w-[12rem] overflow-hidden border-white/10 bg-white/[0.02] transition-[box-shadow,background-color,border-color] duration-[var(--duration-fast)] hover:bg-white/[0.05] hover:shadow-[0_0_24px_rgb(124_92_255/0.14)] focus-visible:shadow-[0_0_24px_rgb(124_92_255/0.2)]"
    >
      <Link href={href} onPointerDown={onPointerDown} className="relative">
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
        <RippleLayer ripples={ripples} />
      </Link>
    </Button>
  );
}

type FinalCtaSectionProps = {
  className?: string;
};

function FinalCtaSection({ className }: FinalCtaSectionProps) {
  return (
    <section
      id="start-a-project"
      data-section="cta"
      aria-labelledby="final-cta-heading"
      className={cn("relative overflow-hidden", className)}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] left-1/2 h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(79_140_255/0.16),transparent_65%)] blur-3xl" />
        <div className="absolute right-[5%] bottom-[-20%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgb(124_92_255/0.12),transparent_70%)] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(255 255 255 / 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(255 255 255 / 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 75%)",
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
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-white/[0.08] bg-surface/50 px-8 py-14 text-center shadow-[0_30px_80px_rgb(0_0_0/0.35)] md:px-16 md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(79_140_255/0.14),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgb(124_92_255/0.1),transparent_50%)]"
            />

            <div className="relative space-y-6">
              <p className="text-[0.75rem] font-medium tracking-[0.18em] text-accent-blue uppercase">
                {FINAL_CTA_COPY.eyebrow}
              </p>
              <h2
                id="final-cta-heading"
                className="text-heading-xl text-balance text-foreground md:text-[2.75rem] md:leading-[1.12]"
              >
                {FINAL_CTA_COPY.headline}
              </h2>
              <p className="mx-auto max-w-xl text-base leading-relaxed text-text-secondary sm:text-[1.0625rem] sm:leading-7">
                {FINAL_CTA_COPY.description}
              </p>

              <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
                <CtaPrimaryButton href={FINAL_CTA_COPY.primary.href}>
                  {FINAL_CTA_COPY.primary.label}
                  <ArrowRight
                    className="size-4 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </CtaPrimaryButton>
                <CtaSecondaryButton href={FINAL_CTA_COPY.secondary.href}>
                  <Calendar className="size-4" aria-hidden />
                  {FINAL_CTA_COPY.secondary.label}
                </CtaSecondaryButton>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export { FinalCtaSection };
