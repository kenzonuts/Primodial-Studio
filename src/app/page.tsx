import { SiteHeader } from "@/components/navigation";
import { HeroSection } from "@/features/home/sections/hero";
import { AboutSection } from "@/features/home/sections/introduction";
import { ServicesSection } from "@/features/home/sections/services";

/**
 * Homepage — Hero + About + Services (remaining sections ship later).
 */
export default function HomePage() {
  return (
    <>
      <SiteHeader transparentOverHero />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
      </main>
    </>
  );
}
