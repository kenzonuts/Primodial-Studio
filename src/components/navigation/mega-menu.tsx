"use client";

import Link from "next/link";

import { PRIMARY_NAVIGATION } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import type { MegaMenuColumn } from "@/types/navigation";

type MegaMenuProps = {
  activeId: string | null;
  onClose: () => void;
  className?: string;
};

function getColumns(activeId: string | null): MegaMenuColumn[] {
  if (!activeId) return [];
  const item = PRIMARY_NAVIGATION.items.find((entry) => entry.id === activeId);
  return item?.megaMenu ?? [];
}

/**
 * Mega menu panel — ready for Services (and future Resources).
 * Renders only when columns exist for the active nav id.
 */
function MegaMenu({ activeId, onClose, className }: MegaMenuProps) {
  const columns = getColumns(activeId);

  if (!columns.length) return null;

  return (
    <div
      className={cn(
        "absolute inset-x-0 top-full border-b border-border/60 bg-surface/95 backdrop-blur-xl",
        className,
      )}
      role="menu"
      aria-label="Services menu"
      onMouseLeave={onClose}
    >
      <div className="mx-auto grid max-w-(--container-xl) gap-8 px-(--container-padding-mobile) py-8 md:grid-cols-3 md:px-(--container-padding-tablet) xl:px-(--container-padding-desktop)">
        {columns.map((column) => (
          <div key={column.id} className="space-y-3">
            <p className="text-caption tracking-wide text-text-muted uppercase">
              {column.title}
            </p>
            <ul className="space-y-1">
              {column.items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    role="menuitem"
                    className="text-body-sm block rounded-md px-2 py-2 text-text-secondary transition-colors hover:bg-surface-elevated hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export { MegaMenu, type MegaMenuProps };
