import { SiteHeader } from "@/components/navigation";
import { HeroSection } from "@/features/home/sections/hero";
import { AboutSection } from "@/features/home/sections/introduction";

/**
 * Homepage — Hero + About (remaining sections ship in later phases).
 */
export default function HomePage() {
  return (
    <>
      <SiteHeader transparentOverHero />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
      </main>
    </>
  );
}
