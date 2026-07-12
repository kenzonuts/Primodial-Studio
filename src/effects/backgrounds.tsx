"use client";

import { cn } from "@/lib/utils";

type AuroraProps = {
  className?: string;
  intensity?: "subtle" | "medium";
};

/**
 * GPU-friendly aurora wash — absolute fill, pointer-events none.
 */
function AuroraBackground({ className, intensity = "subtle" }: AuroraProps) {
  const opacity = intensity === "medium" ? 0.18 : 0.1;

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div
        className="absolute top-[-20%] left-[-10%] h-[40rem] w-[40rem] animate-[aurora-drift_18s_ease-in-out_infinite] rounded-full blur-3xl will-change-transform"
        style={{
          background: `radial-gradient(circle, rgb(79 140 255 / ${opacity}), transparent 70%)`,
        }}
      />
      <div
        className="absolute right-[-15%] bottom-[-25%] h-[36rem] w-[36rem] animate-[aurora-drift_22s_ease-in-out_infinite_reverse] rounded-full blur-3xl will-change-transform"
        style={{
          background: `radial-gradient(circle, rgb(124 92 255 / ${opacity * 0.9}), transparent 70%)`,
        }}
      />
      <div
        className="absolute top-[30%] left-[40%] h-[20rem] w-[20rem] animate-[aurora-drift_26s_ease-in-out_infinite] rounded-full blur-3xl will-change-transform"
        style={{
          background: `radial-gradient(circle, rgb(61 220 151 / ${opacity * 0.35}), transparent 70%)`,
        }}
      />
    </div>
  );
}

type GridProps = {
  className?: string;
  size?: number;
  fade?: boolean;
};

function AnimatedGrid({ className, size = 72, fade = true }: GridProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 opacity-[0.18]",
        className,
      )}
      style={{
        backgroundImage: `
          linear-gradient(to right, rgb(255 255 255 / 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(255 255 255 / 0.03) 1px, transparent 1px)
        `,
        backgroundSize: `${size}px ${size}px`,
        maskImage: fade
          ? "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"
          : undefined,
        WebkitMaskImage: fade
          ? "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"
          : undefined,
      }}
    />
  );
}

function NoiseTexture({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay",
        className,
      )}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

function SoftGlow({
  className,
  color = "rgb(79 140 255 / 0.12)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        className,
      )}
      style={{
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
      }}
    />
  );
}

/**
 * Very subtle floating particles — CSS only, max ~12 dots.
 */
function SubtleParticles({ className }: { className?: string }) {
  const dots = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {dots.map((i) => (
        <span
          key={i}
          className="absolute size-0.5 animate-[particle-float_12s_ease-in-out_infinite] rounded-full bg-white/30 will-change-transform"
          style={{
            left: `${8 + ((i * 17) % 84)}%`,
            top: `${12 + ((i * 23) % 76)}%`,
            animationDelay: `${i * 0.7}s`,
            opacity: 0.25 + (i % 3) * 0.1,
          }}
        />
      ))}
    </div>
  );
}

type SpotlightProps = {
  x: number;
  y: number;
  className?: string;
  size?: number;
};

/**
 * Mouse spotlight — pass client coords from parent (rAF-batched).
 */
function MouseSpotlight({ x, y, className, size = 420 }: SpotlightProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div
        className="absolute rounded-full bg-[radial-gradient(circle,rgb(255_255_255/0.07),transparent_65%)] will-change-transform"
        style={{
          width: size,
          height: size,
          transform: `translate3d(${x - size / 2}px, ${y - size / 2}px, 0)`,
        }}
      />
    </div>
  );
}

function AnimatedDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/15 to-transparent",
        className,
      )}
    />
  );
}

function GradientMesh({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 opacity-40 mix-blend-soft-light",
        className,
      )}
      style={{
        backgroundImage: `
          radial-gradient(at 20% 20%, rgb(79 140 255 / 0.15) 0px, transparent 45%),
          radial-gradient(at 80% 10%, rgb(124 92 255 / 0.12) 0px, transparent 40%),
          radial-gradient(at 50% 80%, rgb(61 220 151 / 0.06) 0px, transparent 45%)
        `,
      }}
    />
  );
}

export {
  AuroraBackground,
  AnimatedGrid,
  NoiseTexture,
  SoftGlow,
  SubtleParticles,
  MouseSpotlight,
  AnimatedDivider,
  GradientMesh,
};
