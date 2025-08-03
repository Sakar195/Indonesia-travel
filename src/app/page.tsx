import { DestinationSection } from "@/components/DestinationSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import HiddenGems from "@/components/HiddenGems";
import { TravelSection } from "@/components/TravelSection";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Header />
      <HeroSection />
      <DestinationSection />
      <HiddenGems />
      <TravelSection />
    </main>
  );
}
