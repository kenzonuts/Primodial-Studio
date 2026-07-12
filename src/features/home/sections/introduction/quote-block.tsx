import { cn } from "@/lib/utils";

type QuoteBlockProps = {
  quote: string;
  attribution?: string;
  eyebrow?: string;
  className?: string;
};

function QuoteBlock({
  quote,
  attribution,
  eyebrow,
  className,
}: QuoteBlockProps) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-transparent px-8 py-10 md:px-12 md:py-14",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgb(79_140_255/0.18),transparent_70%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 left-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgb(124_92_255/0.14),transparent_70%)] blur-2xl"
      />

      {eyebrow ? (
        <p className="relative mb-6 text-[0.75rem] font-medium tracking-[0.18em] text-accent-blue uppercase">
          {eyebrow}
        </p>
      ) : null}

      <blockquote className="relative">
        <p className="max-w-3xl text-2xl font-semibold tracking-tight text-balance text-foreground sm:text-3xl md:text-[2.25rem] md:leading-[1.25]">
          “{quote}”
        </p>
      </blockquote>

      {attribution ? (
        <figcaption className="relative mt-8 text-sm text-text-secondary">
          — {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}

export { QuoteBlock, type QuoteBlockProps };
