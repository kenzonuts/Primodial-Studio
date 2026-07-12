"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/layout/container";
import { DesktopNav } from "@/components/navigation/desktop-nav";
import { MegaMenu } from "@/components/navigation/mega-menu";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { Button } from "@/components/ui/button";
import { PRIMARY_NAVIGATION } from "@/constants/navigation";
import { SITE_NAME } from "@/constants/site";
import { useNavbarVisibility } from "@/hooks/use-navbar-visibility";
import { useUIStore } from "@/stores";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  transparentOverHero?: boolean;
};

/**
 * Site header architecture:
 * sticky · transparent→solid · hide/reveal on scroll · mega-menu · mobile.
 * Utility slots (theme/search/lang/dashboard) reserved via utilities flags.
 */
function SiteHeader({ transparentOverHero = true }: SiteHeaderProps) {
  const { isSolid, isHidden } = useNavbarVisibility();
  const isMobileNavOpen = useUIStore((state) => state.isMobileNavOpen);
  const toggleMobileNav = useUIStore((state) => state.toggleMobileNav);
  const [megaMenuId, setMegaMenuId] = useState<string | null>(null);

  const solid =
    !transparentOverHero || isSolid || isMobileNavOpen || Boolean(megaMenuId);

  return (
    <header
      data-navbar
      data-solid={solid || undefined}
      data-hidden={isHidden || undefined}
      data-utilities={JSON.stringify(PRIMARY_NAVIGATION.utilities)}
      className={cn(
        "relative sticky top-0 z-40 transition-[transform,background-color,border-color,backdrop-filter] duration-[var(--duration-normal)] ease-[var(--ease-out)]",
        isHidden && !isMobileNavOpen && "-translate-y-full",
        solid
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-heading-sm text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          {SITE_NAME}
        </Link>

        <DesktopNav onOpenMegaMenu={setMegaMenuId} />

        <div className="flex items-center gap-2">
          <div
            className="hidden items-center gap-1 lg:flex"
            data-nav-utilities
            aria-hidden
          />
          <Button asChild size="sm" className="hidden lg:inline-flex">
            <Link href={PRIMARY_NAVIGATION.cta.href}>
              {PRIMARY_NAVIGATION.cta.label}
            </Link>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className="lg:hidden"
            onClick={toggleMobileNav}
            aria-expanded={isMobileNavOpen}
            aria-controls="mobile-navigation"
            aria-label={
              isMobileNavOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            {isMobileNavOpen ? <X aria-hidden /> : <Menu aria-hidden />}
          </Button>
        </div>
      </Container>

      <MegaMenu activeId={megaMenuId} onClose={() => setMegaMenuId(null)} />
      <MobileNav />
    </header>
  );
}

export { SiteHeader, type SiteHeaderProps };
