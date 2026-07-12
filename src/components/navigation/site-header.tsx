"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/layout/container";
import { DesktopNav } from "@/components/navigation/desktop-nav";
import { MegaMenu } from "@/components/navigation/mega-menu";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { ThemeToggle } from "@/components/navigation/theme-toggle";
import { Button } from "@/components/ui/button";
import { PRIMARY_NAVIGATION } from "@/constants/navigation";
import { SITE_NAME } from "@/constants/site";
import { useNavbarVisibility } from "@/hooks/use-navbar-visibility";
import { useUIStore } from "@/stores";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  transparentOverHero?: boolean;
};

function SiteHeader({ transparentOverHero = true }: SiteHeaderProps) {
  const pathname = usePathname();
  const { isSolid, isHidden } = useNavbarVisibility();
  const isMobileNavOpen = useUIStore((state) => state.isMobileNavOpen);
  const toggleMobileNav = useUIStore((state) => state.toggleMobileNav);
  const setMobileNavOpen = useUIStore((state) => state.setMobileNavOpen);
  const [megaMenuId, setMegaMenuId] = useState<string | null>(null);

  useEffect(() => {
    setMobileNavOpen(false);
    setMegaMenuId(null);
  }, [pathname, setMobileNavOpen]);

  useEffect(() => {
    if (!isMobileNavOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileNavOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileNavOpen, setMobileNavOpen]);

  const solid =
    !transparentOverHero || isSolid || isMobileNavOpen || Boolean(megaMenuId);

  return (
    <header
      data-navbar
      data-solid={solid || undefined}
      data-hidden={isHidden || undefined}
      className={cn(
        "relative sticky top-0 z-50 transition-[transform,background-color,border-color,backdrop-filter] duration-[var(--duration-normal)] ease-[var(--ease-out)]",
        isHidden && !isMobileNavOpen && "-translate-y-full",
        solid
          ? "border-b border-border/50 bg-background/75 shadow-[0_1px_0_0_rgb(255_255_255/0.03)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2 focus-visible:rounded-md focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
          aria-label={`${SITE_NAME} home`}
        >
          <span
            className="size-2 rounded-full bg-accent-blue shadow-[0_0_12px_rgb(79_140_255/0.65)] transition-transform duration-[var(--duration-fast)] group-hover:scale-110"
            aria-hidden
          />
          <span className="text-sm font-semibold tracking-tight text-foreground md:text-[0.9375rem]">
            {SITE_NAME}
          </span>
        </Link>

        <DesktopNav onOpenMegaMenu={setMegaMenuId} />

        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
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
