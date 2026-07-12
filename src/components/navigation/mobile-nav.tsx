"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PRIMARY_NAVIGATION } from "@/constants/navigation";
import { useUIStore } from "@/stores";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  className?: string;
};

/**
 * Mobile navigation panel — architecture shell with a11y hooks.
 */
function MobileNav({ className }: MobileNavProps) {
  const isOpen = useUIStore((state) => state.isMobileNavOpen);
  const setMobileNavOpen = useUIStore((state) => state.setMobileNavOpen);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation"
      className={cn(
        "border-t border-border/60 bg-background lg:hidden",
        className,
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <nav className="flex flex-col px-5 py-4" aria-label="Mobile primary">
        {PRIMARY_NAVIGATION.items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="text-body-md rounded-md px-3 py-3 text-text-secondary transition-colors hover:bg-surface-elevated hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
            onClick={() => setMobileNavOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Button asChild className="mt-4">
          <Link
            href={PRIMARY_NAVIGATION.cta.href}
            onClick={() => setMobileNavOpen(false)}
          >
            {PRIMARY_NAVIGATION.cta.label}
          </Link>
        </Button>
      </nav>
    </div>
  );
}

export { MobileNav, type MobileNavProps };
