import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaBlockProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  className?: string;
};

function CtaBlock({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  className,
}: CtaBlockProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.07] bg-surface/60 px-8 py-12 text-center md:px-14 md:py-16",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(79_140_255/0.14),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgb(124_92_255/0.1),transparent_45%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(255 255 255 / 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(255 255 255 / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-2xl space-y-5">
        {eyebrow ? (
          <p className="text-[0.75rem] font-medium tracking-[0.18em] text-accent-blue uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-heading-xl text-balance text-foreground md:text-[2.5rem]">
          {title}
        </h2>
        <p className="text-body-lg mx-auto max-w-xl text-balance text-text-secondary">
          {description}
        </p>
        <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
          <Button asChild size="lg" className="group min-w-[11.5rem]">
            <Link href={primary.href}>
              {primary.label}
              <ArrowRight
                className="size-4 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </Button>
          {secondary ? (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group min-w-[11.5rem] border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
            >
              <Link href={secondary.href}>
                {secondary.label}
                <ArrowUpRight
                  className="size-4 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </Link>
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export { CtaBlock, type CtaBlockProps };
