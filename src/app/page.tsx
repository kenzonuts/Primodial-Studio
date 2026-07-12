import { SiteHeader } from "@/components/navigation";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/features/home/sections/hero";
import { AboutSection } from "@/features/home/sections/introduction";
import { ServicesSection } from "@/features/home/sections/services";
import { PortfolioSection } from "@/features/home/sections/featured-work";
import { ProcessSection } from "@/features/home/sections/process";
import { TechnologySection } from "@/features/home/sections/technology";
import { WhyUsSection } from "@/features/home/sections/why-us";
import { FaqSection } from "@/features/home/sections/faq";
import { FinalCtaSection } from "@/features/home/sections/cta";
import { ContactSection } from "@/features/home/sections/contact";

/**
 * Homepage — full narrative through final conversion (CTA + Contact).
 */
export default function HomePage() {
  return (
    <>
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
