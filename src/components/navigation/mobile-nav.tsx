"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/navigation/theme-toggle";
import { Button } from "@/components/ui/button";
import { PRIMARY_NAVIGATION } from "@/constants/navigation";
import { useUIStore } from "@/stores";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  className?: string;
};

function MobileNav({ className }: MobileNavProps) {
  const pathname = usePathname();
  const isOpen = useUIStore((state) => state.isMobileNavOpen);
  const setMobileNavOpen = useUIStore((state) => state.setMobileNavOpen);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation"
      className={cn(
        "border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden",
        className,
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <nav className="flex flex-col px-5 py-4" aria-label="Mobile primary">
        {PRIMARY_NAVIGATION.items.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-3 text-base transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none",
                isActive
                  ? "bg-surface-elevated text-foreground"
                  : "text-text-secondary hover:bg-surface-elevated hover:text-foreground",
              )}
              aria-current={isActive ? "page" : undefined}
              onClick={() => setMobileNavOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}

        <div className="mt-3 flex items-center justify-between border-t border-border/60 px-1 pt-4">
          <span className="text-caption text-text-muted">Appearance</span>
          <ThemeToggle />
        </div>

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
