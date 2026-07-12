import Link from "next/link";

import { BrandLogo } from "@/components/brand";
import { Newsletter } from "@/components/forms/newsletter";
import { BackToTop } from "@/components/layout/back-to-top";
import { Container } from "@/components/layout/container";
import { SocialLinks } from "@/components/social/social-links";
import {
  CONTACT_EMAIL,
  FOOTER_NAVIGATION,
  SITE_NAME,
  SITE_SHORT_DESCRIPTION,
  SITE_VERSION,
} from "@/constants/site";
import { FadeIn } from "@/features/home/sections/introduction/motion";
import { cn } from "@/lib/utils";

function FooterLinkGroup({
  title,
  items,
  showPlanned = false,
}: {
  title: string;
  items: { id: string; label: string; href: string; status?: string }[];
  /** When true, planned items render as disabled future slots */
  showPlanned?: boolean;
}) {
  const visible = items.filter(
    (item) => item.status !== "planned" || showPlanned,
  );

  if (!visible.length) return null;

  return (
    <div>
      <p className="mb-4 text-[0.6875rem] font-medium tracking-[0.14em] text-text-muted uppercase">
        {title}
      </p>
      <ul className="space-y-2.5">
        {visible.map((item) => {
          const planned = item.status === "planned";
          return (
            <li key={item.id}>
              {planned ? (
                <span
                  className="inline-flex items-center gap-2 text-sm text-text-muted/70"
                  aria-disabled="true"
                >
                  {item.label}
                  <span className="rounded-full border border-white/[0.06] px-1.5 py-px text-[0.625rem] tracking-wide text-text-muted/60 uppercase">
                    Soon
                  </span>
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm text-text-secondary transition-colors hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * Premium editorial footer — four columns + newsletter + back-to-top.
 */
function Footer({ className }: { className?: string }) {
  const year = new Date().getFullYear();

  return (
    <>
      <footer
        className={cn(
          "relative overflow-hidden border-t border-white/[0.06]",
          className,
        )}
        data-newsletter-ready={FOOTER_NAVIGATION.newsletterReady || undefined}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute bottom-[-30%] left-1/2 h-[20rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(79_140_255/0.08),transparent_65%)] blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgb(255 255 255 / 0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgb(255 255 255 / 0.03) 1px, transparent 1px)
              `,
              backgroundSize: "64px 64px",
              maskImage: "linear-gradient(to bottom, black, transparent 85%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black, transparent 85%)",
            }}
          />
        </div>

        <Container className="relative py-16 md:py-20 lg:py-24">
          <FadeIn>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
              {/* Column 1 — Brand */}
              <div className="space-y-5 lg:col-span-4">
                <Link
                  href="/"
                  className="inline-flex focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
                  aria-label={`${SITE_NAME} home`}
                >
                  <BrandLogo
                    variant="full"
                    height={64}
                    className="max-w-[11rem]"
                  />
                </Link>
                <p className="max-w-sm text-sm leading-relaxed text-text-secondary">
                  {SITE_SHORT_DESCRIPTION}
                </p>
                {FOOTER_NAVIGATION.newsletterReady ? (
                  <Newsletter className="max-w-md pt-2" />
                ) : null}
              </div>

              {/* Column 2 — Company */}
              <div className="lg:col-span-2">
                <FooterLinkGroup
                  title="Company"
                  items={FOOTER_NAVIGATION.company}
                />
              </div>

              {/* Column 3 — Resources */}
              <div className="lg:col-span-3">
                <FooterLinkGroup
                  title="Resources"
                  items={FOOTER_NAVIGATION.resources}
                  showPlanned
                />
              </div>

              {/* Column 4 — Contact */}
              <div className="space-y-5 lg:col-span-3">
                <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-text-muted uppercase">
                  Contact
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="block text-sm text-foreground transition-colors hover:text-accent-blue focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  {CONTACT_EMAIL}
                </a>
                <div>
                  <p className="mb-3 text-[0.6875rem] font-medium tracking-[0.12em] text-text-muted uppercase">
                    Social
                  </p>
                  <SocialLinks
                    size="sm"
                    include={["github", "linkedin", "instagram"]}
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Bottom bar */}
          <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.06] pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
              <p className="text-[0.75rem] text-text-muted">
                © {year} {SITE_NAME}. All rights reserved.
              </p>
              <span className="hidden text-text-muted/40 sm:inline" aria-hidden>
                ·
              </span>
              <p className="text-[0.75rem] text-text-muted">
                Made with{" "}
                <span className="text-danger" aria-label="love">
                  ❤
                </span>{" "}
                by {SITE_NAME}
              </p>
            </div>
            <p className="font-mono text-[0.6875rem] tracking-wide text-text-muted/70">
              v{SITE_VERSION}
            </p>
          </div>
        </Container>
      </footer>
      <BackToTop />
    </>
  );
}

export { Footer };
