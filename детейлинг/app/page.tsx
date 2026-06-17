import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/sections/CTASection";
import { PortfolioPreviewSection } from "@/components/sections/PortfolioPreviewSection";
import { ServicesScrollSection } from "@/components/sections/ServicesScrollSection";
import { WhyAuraSection } from "@/components/sections/WhyAuraSection";
import { Timeline } from "@/components/Timeline";
import { process } from "@/data/content";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesScrollSection />
      <WhyAuraSection />
      <PortfolioPreviewSection />
      <Timeline steps={process.steps} title={process.title} />
      <CTASection />
    </>
  );
}
