"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { NAVIGATION, SITE_NAME } from "@/constants/site";
import { useUIStore } from "@/stores";

function Navbar() {
  const isMobileNavOpen = useUIStore((state) => state.isMobileNavOpen);
  const toggleMobileNav = useUIStore((state) => state.toggleMobileNav);
  const setMobileNavOpen = useUIStore((state) => state.setMobileNavOpen);
  const contactLink = NAVIGATION.find((item) => item.label === "Contact");

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--glass-border)] bg-glass backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-heading-sm text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          {SITE_NAME}
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-label text-text-secondary transition-colors hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {contactLink ? (
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href={contactLink.href}>Start a project</Link>
          </Button>
        ) : null}
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="md:hidden"
          onClick={toggleMobileNav}
          aria-expanded={isMobileNavOpen}
          aria-controls="mobile-navigation"
          aria-label={
            isMobileNavOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          {isMobileNavOpen ? <X aria-hidden /> : <Menu aria-hidden />}
        </Button>
      </Container>
      {isMobileNavOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-[var(--glass-border)] md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            <nav className="flex flex-col" aria-label="Mobile primary">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-body-md rounded-md px-3 py-2 text-text-secondary transition-colors hover:bg-surface-elevated hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
                  onClick={() => setMobileNavOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            {contactLink ? (
              <Button asChild className="mt-3">
                <Link
                  href={contactLink.href}
                  onClick={() => setMobileNavOpen(false)}
                >
                  Start a project
                </Link>
              </Button>
            ) : null}
          </Container>
        </div>
      ) : null}
    </header>
  );
}

export { Navbar };
