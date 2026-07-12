import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/navigation";
import { buildMetadata } from "@/lib/seo";
import { CONTACT_EMAIL, SITE_NAME } from "@/constants/site";
import { HOME_SECTIONS } from "@/constants/routes";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: `Terms governing use of the ${SITE_NAME} website and related services.`,
  path: "/terms",
});

/**
 * Launch-ready terms of service — refine with counsel as offerings expand.
 */
export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pt-28 pb-20 md:pt-32 md:pb-28">
        <Container className="max-w-3xl">
          <p className="text-[0.75rem] font-medium tracking-[0.18em] text-accent-blue uppercase">
            Legal
          </p>
          <h1 className="text-heading-xl mt-4 text-foreground">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-text-muted">
            Last updated: July 12, 2026
          </p>

          <div className="mt-10 space-y-8 text-base leading-relaxed text-text-secondary">
            <section className="space-y-3">
              <h2 className="text-heading-sm text-foreground">Agreement</h2>
              <p>
                By accessing this website you agree to these terms. If you do
                not agree, please do not use the site.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-heading-sm text-foreground">
                Website content
              </h2>
              <p>
                Content on this site is provided for general information about{" "}
                {SITE_NAME}. Project work is governed by separate statements of
                work or contracts.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-heading-sm text-foreground">
                Acceptable use
              </h2>
              <p>
                You may not misuse the site, attempt unauthorized access, scrape
                in ways that degrade service, or submit malicious content
                through forms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-heading-sm text-foreground">Disclaimer</h2>
              <p>
                The site is provided “as is” without warranties of uninterrupted
                availability. To the fullest extent permitted by law,{" "}
                {SITE_NAME} is not liable for indirect or consequential damages
                arising from site use.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-heading-sm text-foreground">Contact</h2>
              <p>
                Questions about these terms:{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-foreground underline-offset-2 hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>

            <p>
              <Link
                href={HOME_SECTIONS.home}
                className="text-foreground underline-offset-2 hover:underline"
              >
                ← Back to home
              </Link>
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
