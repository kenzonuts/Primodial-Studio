"use client";

import Link from "next/link";

import { PRIMARY_NAVIGATION } from "@/constants/navigation";
import { cn } from "@/lib/utils";

type DesktopNavProps = {
  className?: string;
  onOpenMegaMenu?: (id: string) => void;
};

/**
 * Desktop primary navigation — mega-menu ready via item.megaMenu.
 */
function DesktopNav({ className, onOpenMegaMenu }: DesktopNavProps) {
  return (
    <nav
      className={cn("hidden items-center gap-6 lg:flex", className)}
      aria-label="Primary"
    >
      {PRIMARY_NAVIGATION.items.map((item) => {
        const hasMega = Boolean(item.megaMenu?.length);

        return (
          <Link
            key={item.id}
            href={item.href}
            className="text-label text-text-secondary transition-colors hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
            aria-haspopup={hasMega ? "menu" : undefined}
            onMouseEnter={() => {
              if (hasMega) onOpenMegaMenu?.(item.id);
            }}
            onFocus={() => {
              if (hasMega) onOpenMegaMenu?.(item.id);
            }}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export { DesktopNav, type DesktopNavProps };
