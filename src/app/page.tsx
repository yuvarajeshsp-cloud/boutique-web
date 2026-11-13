import { Hero } from "@/components/Hero";
import { SixMoods } from "@/components/SixMoods";
import { TryTheLook } from "@/components/TryTheLook";
import { PickASilk } from "@/components/PickASilk";
import { TheRack } from "@/components/TheRack";
import { MuseFilm, MuseReels } from "@/components/Muse";
import { Bridal } from "@/components/Bridal";
import { Footer, ShortlistSection } from "@/components/Shortlist";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <SixMoods />
      <TryTheLook />
      <PickASilk />
      <TheRack />
      <MuseFilm />
      <MuseReels />
      <Bridal />
      <ShortlistSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
