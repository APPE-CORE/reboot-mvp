import HeroReboot from "@/components/sections/HeroReboot";
import ManifestoReboot from "@/components/sections/ManifestoReboot";
import ExperienceReboot from "@/components/sections/ExperienceReboot";
import CollectionsReboot from "@/components/sections/CollectionsReboot";
import FomoReboot from "@/components/sections/FomoReboot";
import LogisticsReboot from "@/components/sections/LogisticsReboot";
import FaqReboot from "@/components/sections/FaqReboot";
import FloatingCTA from "@/components/ui/FloatingCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden antialiased relative">
      <HeroReboot />
      <ManifestoReboot />
      <ExperienceReboot />
      <CollectionsReboot />
      <FomoReboot />
      <LogisticsReboot />
      <FaqReboot />
      
      {/* Activation du CTA global sur la Landing Page */}
      <FloatingCTA />
    </main>
  );
}