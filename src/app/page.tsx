import { SiteHeader } from "@/components/navigation";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { HeroSection } from "@/features/home/sections/hero";
import { AboutSection } from "@/features/home/sections/introduction";
import { ServicesSection } from "@/features/home/sections/services";
import { PortfolioSection } from "@/features/home/sections/featured-work";
import { ProcessSection } from "@/features/home/sections/process";
import { TechnologySection } from "@/features/home/sections/technology";
import { WhyUsSection } from "@/features/home/sections/why-us";
import { FaqSection } from "@/features/home/sections/faq";
import { FAQ_ITEMS } from "@/features/home/sections/faq/constants";
import { FinalCtaSection } from "@/features/home/sections/cta";
import { ContactSection } from "@/features/home/sections/contact";
import { getBreadcrumbJsonLd, getFaqPageJsonLd } from "@/lib/seo";

/**
 * Homepage — full narrative through final conversion (CTA + Contact).
 */
export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([{ name: "Home", path: "/" }]),
          getFaqPageJsonLd(
            FAQ_ITEMS.map((item) => ({
              question: item.question,
              answer: item.answer,
            })),
          ),
        ]}
      />
      <SiteHeader transparentOverHero />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <TechnologySection />
        <WhyUsSection />
        <FaqSection />
        <FinalCtaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
