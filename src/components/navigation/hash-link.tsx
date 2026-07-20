"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

import { useSmoothScroll } from "@/components/providers/smooth-scroll-provider";

type HashLinkProps = ComponentProps<typeof Link>;

function getHash(href: HashLinkProps["href"]): string | null {
  const value = typeof href === "string" ? href : (href.pathname ?? "");
  const hashIndex = value.indexOf("#");
  if (hashIndex === -1) return null;
  const hash = value.slice(hashIndex);
  return hash.length > 1 ? hash : null;
}

/**
 * Same-page hash navigation that works with Lenis (Next Link alone won't scroll).
 */
function HashLink({ href, onClick, ...props }: HashLinkProps) {
  const { scrollTo } = useSmoothScroll();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    const hash = getHash(href);
    if (!hash) return;

    const target = document.querySelector(hash);
    if (!(target instanceof HTMLElement)) return;

    event.preventDefault();
    window.history.pushState(null, "", `/${hash}`);
    scrollTo(target, { offset: -112 });
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}

export { HashLink, type HashLinkProps };
