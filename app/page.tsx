import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutUsSection } from "@/components/AboutUsSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { PurityCalculator } from "@/components/PurityCalculator";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <ProcessSection />
      <ServicesSection />
      <AboutUsSection />
      <WhyChooseUs />
      <PurityCalculator />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}

