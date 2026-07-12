import Link from "next/link";

import { Container } from "@/components/layout/container";
import { CONTACT_EMAIL, NAVIGATION, SITE_NAME } from "@/constants/site";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <div className="space-y-2">
            <p className="text-heading-sm">{SITE_NAME}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-body-sm text-text-secondary transition-colors hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
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
        </div>
        <p className="text-caption text-text-muted">
          © {year} {SITE_NAME}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export { Footer };
