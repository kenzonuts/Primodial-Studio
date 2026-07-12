"use client";

import { PROCESS_STEPS } from "@/features/home/sections/process/constants";
import { ProcessCard } from "@/features/home/sections/process/process-card";
import {
  Stagger,
  StaggerItem,
} from "@/features/home/sections/introduction/motion";
import { cn } from "@/lib/utils";

type ProcessGridProps = {
  className?: string;
};

function ProcessGrid({ className }: ProcessGridProps) {
  return (
    <Stagger className={cn(className)}>
      <ol className="grid list-none grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {PROCESS_STEPS.map((step, index) => (
          <StaggerItem key={step.id} className="relative h-full">
            <li className="h-full">
              <ProcessCard step={step} />
            </li>
            {/* Animated connector — desktop/tablet only between cards */}
            {index < PROCESS_STEPS.length - 1 ? (
              <div
                aria-hidden
                className={cn(
                  "pointer-events-none absolute top-1/2 -right-2.5 z-20 hidden h-px w-5 -translate-y-1/2 md:block",
                  // Hide connector at end of each row
                  (index + 1) % 2 === 0 && "md:hidden xl:block",
                  (index + 1) % 3 === 0 && "xl:hidden",
                )}
              >
                <div className="h-px w-full bg-gradient-to-r from-accent-blue/50 via-accent-purple/40 to-transparent" />
                <span className="absolute top-1/2 right-0 size-1 -translate-y-1/2 rounded-full bg-accent-blue/70 shadow-[0_0_8px_rgb(79_140_255/0.6)]" />
              </div>
            ) : null}
          </StaggerItem>
        ))}
      </ol>
    </Stagger>
  );
}

export { ProcessGrid, type ProcessGridProps };
