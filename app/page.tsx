import { SmoothScroll } from "@/components/SmoothScroll";
import { Preloader } from "@/components/Preloader";
import { Banner } from "@/components/Banner";
import { FloatingCta } from "@/components/Nav";
import { HeroDark } from "@/components/HeroDark";
import { Temoignage } from "@/components/Temoignage";
import { Hero } from "@/components/Hero";
import { Method } from "@/components/Method";
import { Pillars } from "@/components/Pillars";
import { Team } from "@/components/Team";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <Banner />
      <FloatingCta />
      <main>
        <HeroDark />
        <Temoignage />
        <Hero />
        <Method />
        <Pillars />
        <Team />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
