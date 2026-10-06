import { Hero } from "@/components/sections/Hero";
import { CapabilityFlow } from "@/components/sections/CapabilityFlow";
import { ServiceCarousel3D } from "@/components/sections/ServiceCarousel3D";
import { CorePillars } from "@/components/sections/CorePillars";
import { WhyCareNura } from "@/components/sections/WhyCareNura";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { SecondaryCapabilities } from "@/components/sections/SecondaryCapabilities";
import { TechStack } from "@/components/sections/TechStack";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CapabilityFlow />
      <ServiceCarousel3D />
      <CorePillars />
      <WhyCareNura />
      <FeaturedWork />
      <SecondaryCapabilities />
      <TechStack />
      <FinalCTA />
    </>
  );
}
