"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { PRIMARY_NAVIGATION } from "@/constants/navigation";
import { cn } from "@/lib/utils";

type DesktopNavProps = {
  className?: string;
  onOpenMegaMenu?: (id: string) => void;
};

function DesktopNav({ className, onOpenMegaMenu }: DesktopNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn("hidden items-center gap-1 lg:flex", className)}
      aria-label="Primary"
    >
      {PRIMARY_NAVIGATION.items.map((item) => {
        const hasMega = Boolean(item.megaMenu?.length);
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.id}
            href={item.href}
            className={cn(
              "rounded-md px-3 py-2 text-[0.8125rem] font-medium tracking-tight transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none",
              isActive
                ? "text-foreground"
                : "text-text-secondary hover:text-foreground",
            )}
            aria-current={isActive ? "page" : undefined}
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
