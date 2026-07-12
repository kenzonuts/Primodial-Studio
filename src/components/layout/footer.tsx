import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Stack } from "@/components/layout/stack";
import { Text } from "@/components/typography";
import {
  CONTACT_EMAIL,
  FOOTER_NAVIGATION,
  SITE_NAME,
  SOCIAL_LINKS,
} from "@/constants/site";

function FooterLinkGroup({
  title,
  items,
}: {
  title: string;
  items: { id: string; label: string; href: string; status?: string }[];
}) {
  const liveItems = items.filter((item) => item.status !== "planned");

  if (!liveItems.length) return null;

  return (
    <Stack gap={3}>
      <Text as="p" variant="label" className="text-foreground">
        {title}
      </Text>
      <ul className="space-y-2">
        {liveItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="text-body-sm text-text-secondary transition-colors hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </Stack>
  );
}

/**
 * Site footer — IA structure (company, work, services, resources, legal, social).
 * Newsletter slot reserved via FOOTER_NAVIGATION.newsletterReady.
 */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border py-12 md:py-16"
      data-newsletter-ready={FOOTER_NAVIGATION.newsletterReady || undefined}
    >
      <Container className="space-y-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <Stack gap={3} className="sm:col-span-2 lg:col-span-2">
            <Text as="p" variant="heading-sm">
              {SITE_NAME}
            </Text>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-body-sm text-text-secondary transition-colors hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="flex gap-4 pt-2">
              {Object.entries(SOCIAL_LINKS).map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-caption text-text-muted capitalize transition-colors hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  {name}
                </a>
              ))}
            </div>
          </Stack>

          <FooterLinkGroup title="Company" items={FOOTER_NAVIGATION.company} />
          <FooterLinkGroup title="Work" items={FOOTER_NAVIGATION.work} />
          <FooterLinkGroup
            title="Services"
            items={FOOTER_NAVIGATION.services}
          />
          <FooterLinkGroup
            title="Resources"
            items={FOOTER_NAVIGATION.resources}
          />
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <Text as="p" variant="caption" className="text-text-muted">
            © {year} {SITE_NAME}. All rights reserved.
          </Text>
          <nav className="flex gap-4" aria-label="Legal">
            {FOOTER_NAVIGATION.legal.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-caption text-text-muted transition-colors hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
