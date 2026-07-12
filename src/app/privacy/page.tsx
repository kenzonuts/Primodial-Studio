import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/navigation";
import { buildMetadata } from "@/lib/seo";
import { CONTACT_EMAIL, SITE_NAME } from "@/constants/site";
import { HOME_SECTIONS } from "@/constants/routes";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects, uses, and protects information on this website.`,
  path: "/privacy",
});

/**
 * Launch-ready privacy policy — keep counsel-reviewed copy here as legal evolves.
 */
export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pt-28 pb-20 md:pt-32 md:pb-28">
        <Container className="max-w-3xl">
          <p className="text-[0.75rem] font-medium tracking-[0.18em] text-accent-blue uppercase">
            Legal
          </p>
          <h1 className="text-heading-xl mt-4 text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-text-muted">
            Last updated: July 12, 2026
          </p>

          <div className="prose-invert mt-10 space-y-8 text-base leading-relaxed text-text-secondary">
            <section className="space-y-3">
              <h2 className="text-heading-sm text-foreground">Overview</h2>
              <p>
                {SITE_NAME} (“we”, “us”) operates this website. This policy
                explains what information we collect, why we collect it, and the
                choices available to you.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-heading-sm text-foreground">
                Information we collect
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Contact details you submit (name, email, company, project
                  details).
                </li>
                <li>Newsletter email addresses when you subscribe.</li>
                <li>
                  Optional analytics data when you consent to analytics cookies.
                </li>
                <li>
                  Technical logs required to operate and secure the site
                  (approximate location via IP, browser type, timestamps).
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-heading-sm text-foreground">
                How we use data
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Respond to project inquiries and schedule consultations.
                </li>
                <li>Send studio updates if you subscribe to the newsletter.</li>
                <li>
                  Improve site performance and reliability when analytics
                  consent is granted.
                </li>
                <li>Maintain security and prevent abuse.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-heading-sm text-foreground">Cookies</h2>
              <p>
                Necessary cookies keep the site functional. Analytics and
                marketing cookies are optional and controlled via the cookie
                preference banner. You can change preferences at any time by
                clearing site data and revisiting the site.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-heading-sm text-foreground">Contact</h2>
              <p>
                Privacy questions:{" "}
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
