import HeroReboot from "@/components/sections/HeroReboot";
import ManifestoReboot from "@/components/sections/ManifestoReboot";
import ExperienceReboot from "@/components/sections/ExperienceReboot";
import FomoReboot from "@/components/sections/FomoReboot";
import LogisticsReboot from "@/components/sections/LogisticsReboot";
import FloatingCTA from "@/components/ui/FloatingCTA";

export default function RebootPage() {
  return (
    <main className="bg-[#000000] min-h-screen relative pb-32">
      <HeroReboot />
      <ManifestoReboot />
      <ExperienceReboot />
      <FomoReboot />
      <LogisticsReboot />
      
      <FloatingCTA />
    </main>
  );
}