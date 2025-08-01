import { DestinationSection } from "@/components/DestinationSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TravelSection } from "@/components/TravelSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <DestinationSection />
      <TravelSection />
    </main>
  );
}
