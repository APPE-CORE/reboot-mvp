import HeroReboot from "@/components/sections/HeroReboot";
import ManifestoReboot from "@/components/sections/ManifestoReboot";
import ExperienceReboot from "@/components/sections/ExperienceReboot";
import CollectionsReboot from "@/components/sections/CollectionsReboot";
import FomoReboot from "@/components/sections/FomoReboot";
import LogisticsReboot from "@/components/sections/LogisticsReboot";
import FloatingCTA from "@/components/ui/FloatingCTA";
import Chatbot from "@/components/ui/Chatbot";

export default function RebootPage() {
  return (
    <main className="bg-[#000000] min-h-screen relative pb-32">
      <HeroReboot />
      <ManifestoReboot />
      <ExperienceReboot />
      <CollectionsReboot />
      <FomoReboot />
      <LogisticsReboot />
      
      <FloatingCTA />
      <Chatbot />
    </main>
  );
}