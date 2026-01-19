"use client";

import { useState, useEffect } from "react";
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
import { LoadingAnimation } from "@/components/LoadingAnimation";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if already loaded
    if (typeof window !== "undefined" && sessionStorage.getItem("pageLoaded")) {
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <LoadingAnimation onComplete={handleLoadingComplete} />
      {!isLoading && (
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
      )}
    </>
  );
}

