import { SiteHeader } from "@/components/navigation";
import { HeroSection } from "@/features/home/sections/hero";

/**
 * Homepage — hero + navigation only (remaining sections ship in later phases).
 */
export default function HomePage() {
  return (
    <>
      <SiteHeader transparentOverHero />
      <main id="main-content">
        <HeroSection />
        {/* Anchor target for hero scroll indicator — next sections mount here later */}
        <div id="after-hero" className="h-px w-full" aria-hidden />
      </main>
    </>
  );
}
