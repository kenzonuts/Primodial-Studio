"use client";

import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  type LucideIcon,
} from "lucide-react";

import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/constants/site";
import { cn } from "@/lib/utils";

type SocialPlatform = {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon | "x" | "behance" | "dribbble" | "discord";
  external?: boolean;
};

const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: "github",
    label: "GitHub",
    href: SOCIAL_LINKS.github,
    icon: Github,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: SOCIAL_LINKS.linkedin,
    icon: Linkedin,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: SOCIAL_LINKS.instagram,
    icon: Instagram,
  },
  {
    id: "x",
    label: "X",
    href: SOCIAL_LINKS.x,
    icon: "x",
  },
  {
    id: "behance",
    label: "Behance",
    href: SOCIAL_LINKS.behance,
    icon: "behance",
  },
  {
    id: "dribbble",
    label: "Dribbble",
    href: SOCIAL_LINKS.dribbble,
    icon: "dribbble",
  },
  {
    id: "discord",
    label: "Discord",
    href: SOCIAL_LINKS.discord,
    icon: "discord",
  },
  {
    id: "email",
    label: "Email",
    href: `mailto:${CONTACT_EMAIL}`,
    icon: Mail,
    external: false,
  },
];

function SocialGlyph({
  icon,
  className,
}: {
  icon: SocialPlatform["icon"];
  className?: string;
}) {
  if (typeof icon !== "string") {
    const Icon = icon;
    return <Icon className={cn("size-4", className)} aria-hidden />;
  }

  if (icon === "x") {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-4", className)} aria-hidden>
        <path
          fill="currentColor"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        />
      </svg>
    );
  }

  if (icon === "behance") {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-4", className)} aria-hidden>
        <path
          fill="currentColor"
          d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.04 3-5.101 3-3.074 0-5.354-1.987-5.354-5.207 0-3.096 2.2-5.293 5.414-5.293 3.029 0 4.516 1.833 4.92 3.515.182.726.273 1.934-.306 1.934H15.78c.136 1.977 1.47 2.623 2.835 2.623.957 0 1.912-.44 2.41-1.45l1.701.878zM15.995 11h4.581c-.156-1.303-1.114-1.99-2.277-1.99-1.25 0-2.04.777-2.304 1.99zM2.037 12.833H6.6c.99 0 1.813-.4 1.813-1.348 0-.95-.823-1.35-1.813-1.35H2.037v2.698zM9.377 14.855c0-2.254-1.6-3.822-4.162-3.822H0v9.93h2.04v-3.476h2.82c2.296 0 4.517-1.15 4.517-3.632z"
        />
      </svg>
    );
  }

  if (icon === "dribbble") {
    return (
      <svg viewBox="0 0 24 24" className={cn("size-4", className)} aria-hidden>
        <path
          fill="currentColor"
          d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm7.98 6.91a10.06 10.06 0 0 1 1.5 5.34c-.22-.05-2.41-.49-4.62-.21-.1-.23-.19-.47-.29-.71a21.4 21.4 0 0 0-.72-1.54c2.52-1.03 3.67-2.5 4.13-2.88zM12 1.92c2.4 0 4.6.87 6.3 2.31-.4.43-1.5 1.82-3.91 2.75A33.3 33.3 0 0 0 10.5 2.7c.48-.48 1.42-.78 1.5-.78zm-2.36.99c.1.02 2.3 4.63 3.24 7.1-4.09 1.09-7.7 1.07-8.11 1.06A10.1 10.1 0 0 1 9.64 2.91zM1.93 12.07v-.27c.4.01 4.86.06 9.47-1.3.27.52.52 1.05.75 1.58-.12.03-.24.07-.35.1-4.78 1.54-7.32 5.78-7.53 6.13a10.07 10.07 0 0 1-2.34-6.24zm10.07 10c-2.22 0-4.25-.75-5.87-2.01.17-.35 2.1-4.07 7.12-5.8.02 0 .04-.01.06-.01a35.2 35.2 0 0 1 1.94 6.9A9.96 9.96 0 0 1 12 22.07zm4.57-1.46a33.5 33.5 0 0 0-1.76-6.5c2.1-.33 3.95.21 4.18.28a10.1 10.1 0 0 1-2.42 6.22z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={cn("size-4", className)} aria-hidden>
      <path
        fill="currentColor"
        d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
      />
    </svg>
  );
}

type SocialLinksProps = {
  className?: string;
  size?: "sm" | "md";
  /** Limit which platforms to show (by id). Defaults to all. */
  include?: string[];
};

/**
 * Premium social icon buttons — expandable via SOCIAL_LINKS + SOCIAL_PLATFORMS.
 */
function SocialLinks({ className, size = "md", include }: SocialLinksProps) {
  const platforms = include
    ? SOCIAL_PLATFORMS.filter((p) => include.includes(p.id))
    : SOCIAL_PLATFORMS;

  return (
    <ul
      className={cn("flex flex-wrap items-center gap-2", className)}
      aria-label="Social links"
    >
      {platforms.map((platform) => {
        const isExternal =
          platform.external !== false && !platform.href.startsWith("mailto:");
        return (
          <li key={platform.id}>
            <a
              href={platform.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={platform.label}
              className={cn(
                "group inline-flex items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-text-secondary transition-[color,background-color,border-color,box-shadow,transform] duration-[var(--duration-fast)] ease-[var(--ease-out)] hover:border-white/15 hover:bg-white/[0.06] hover:text-foreground hover:shadow-[0_0_20px_rgb(79_140_255/0.12)] focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none active:scale-[0.96]",
                size === "sm" ? "size-9" : "size-10",
              )}
            >
              <SocialGlyph
                icon={platform.icon}
                className="transition-transform duration-[var(--duration-fast)] group-hover:scale-110"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export { SocialLinks, SOCIAL_PLATFORMS };
export type { SocialPlatform };
