import { cn } from "@/lib/utils";

type CoverPlaceholderProps = {
  title: string;
  accent?: "blue" | "purple" | "mixed";
  className?: string;
  zoomed?: boolean;
};

/**
 * Editorial cover placeholder until real imagery ships.
 * Keeps aspect ratio reserved to avoid CLS.
 */
function CoverPlaceholder({
  title,
  accent = "mixed",
  className,
  zoomed,
}: CoverPlaceholderProps) {
  const glow =
    accent === "blue"
      ? "rgb(79 140 255 / 0.28)"
      : accent === "purple"
        ? "rgb(124 92 255 / 0.28)"
        : "rgb(79 140 255 / 0.22)";

  return (
    <div
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden bg-surface-secondary",
        className,
      )}
      aria-hidden
    >
      <div
        className={cn(
          "absolute inset-0 transition-transform duration-700 ease-[var(--ease-out)]",
          zoomed && "scale-[1.04]",
        )}
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, ${glow}, transparent 55%),
            radial-gradient(ellipse at 80% 70%, rgb(124 92 255 / 0.16), transparent 50%),
            linear-gradient(160deg, #111111 0%, #0a0a0a 45%, #12141a 100%)
          `,
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      <div className="absolute right-4 bottom-4 left-4">
        <p className="truncate text-[0.6875rem] tracking-[0.16em] text-white/35 uppercase">
          {title}
        </p>
      </div>
    </div>
  );
}

export { CoverPlaceholder, type CoverPlaceholderProps };
