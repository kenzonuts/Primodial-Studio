import { SiteHeader } from "@/components/navigation";
import { HeroSection } from "@/features/home/sections/hero";
import { AboutSection } from "@/features/home/sections/introduction";
import { ServicesSection } from "@/features/home/sections/services";
import { PortfolioSection } from "@/features/home/sections/featured-work";
import { ProcessSection } from "@/features/home/sections/process";
import { TechnologySection } from "@/features/home/sections/technology";

/**
 * Homepage — through Process + Technology.
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
      </main>
    </>
  );
}
