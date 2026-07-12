"use client";

import { Clock, Mail, MapPin, Timer } from "lucide-react";

import { Container } from "@/components/layout/container";
import { SocialLinks } from "@/components/social/social-links";
import { ContactForm } from "@/features/home/sections/contact/contact-form";
import { CONTACT_SECTION_COPY } from "@/features/home/sections/contact/constants";
import {
  FadeIn,
  Stagger,
  StaggerItem,
} from "@/features/home/sections/introduction/motion";
import { cn } from "@/lib/utils";

type ContactSectionProps = {
  className?: string;
};

function ContactSection({ className }: ContactSectionProps) {
  const meta = [
    {
      icon: Mail,
      label: "Business email",
      value: CONTACT_SECTION_COPY.email,
      href: `mailto:${CONTACT_SECTION_COPY.email}`,
    },
    {
      icon: MapPin,
      label: CONTACT_SECTION_COPY.location.label,
      value: CONTACT_SECTION_COPY.location.value,
      note: CONTACT_SECTION_COPY.location.note,
    },
    {
      icon: Clock,
      label: CONTACT_SECTION_COPY.hours.label,
      value: CONTACT_SECTION_COPY.hours.value,
    },
    {
      icon: Timer,
      label: CONTACT_SECTION_COPY.response.label,
      value: CONTACT_SECTION_COPY.response.value,
    },
  ] as const;

  return (
    <section
      id="contact"
      data-section="contact"
      aria-labelledby="contact-heading"
      className={cn("relative overflow-hidden", className)}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-[10%] left-[-12%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgb(79_140_255/0.1),transparent_70%)] blur-3xl" />
        <div className="absolute right-[-10%] bottom-[5%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgb(124_92_255/0.08),transparent_70%)] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(255 255 255 / 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(255 255 255 / 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Elegant divider into contact */}
      <div
        aria-hidden
        className="relative mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/12 to-transparent"
      />

      <Container className="relative py-20 md:py-28 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <header className="mb-10 max-w-md">
              <p className="mb-5 text-[0.75rem] font-medium tracking-[0.18em] text-accent-blue uppercase">
                {CONTACT_SECTION_COPY.eyebrow}
              </p>
              <h2
                id="contact-heading"
                className="text-heading-xl text-balance text-foreground md:text-[2.5rem] md:leading-[1.15]"
              >
                {CONTACT_SECTION_COPY.headline}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-text-secondary sm:text-[1.0625rem] sm:leading-7">
                {CONTACT_SECTION_COPY.description}
              </p>
            </header>

            <Stagger className="space-y-5">
              {meta.map((item) => (
                <StaggerItem key={item.label}>
                  <div className="flex gap-3">
                    <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-accent-blue">
                      <item.icon className="size-4" aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[0.6875rem] font-medium tracking-[0.12em] text-text-muted uppercase">
                        {item.label}
                      </p>
                      {"href" in item && item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block text-sm text-foreground transition-colors hover:text-accent-blue focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm text-foreground">
                          {item.value}
                        </p>
                      )}
                      {"note" in item && item.note ? (
                        <p className="mt-0.5 text-[0.75rem] text-text-muted">
                          {item.note}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="mt-10">
              <p className="mb-3 text-[0.6875rem] font-medium tracking-[0.12em] text-text-muted uppercase">
                Connect
              </p>
              <SocialLinks />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-surface/40 p-6 shadow-[0_24px_80px_rgb(0_0_0/0.28)] backdrop-blur-sm md:p-8 lg:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(ellipse_at_top_right,rgb(79_140_255/0.06),transparent_50%)]"
              />
              <div className="relative">
                <ContactForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

export { ContactSection };
