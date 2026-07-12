import { cn } from "@/lib/utils";

type HighlightStatProps = {
  label: string;
  value: string;
  note?: string;
  className?: string;
};

/**
 * Studio highlight metric — supports placeholder values like "—".
 */
function HighlightStat({ label, value, note, className }: HighlightStatProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/70 bg-surface/50 px-5 py-6 transition-[border-color,background-color] duration-[var(--duration-normal)] hover:border-border-strong hover:bg-surface-elevated/70",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent opacity-0 transition-opacity duration-[var(--duration-normal)] group-hover:opacity-100"
      />
      <p className="text-caption tracking-wide text-text-muted uppercase">
        {label}
      </p>
      <p
        className="mt-3 text-3xl font-bold tracking-tight text-foreground tabular-nums md:text-4xl"
        aria-label={
          value === "—" ? `${label}: to be announced` : `${label}: ${value}`
        }
      >
        {value}
      </p>
      {note ? (
        <p className="mt-2 text-[0.75rem] text-text-muted">{note}</p>
      ) : null}
    </div>
  );
}

export { HighlightStat, type HighlightStatProps };
