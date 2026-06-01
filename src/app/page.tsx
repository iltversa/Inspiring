"use client";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import FaqSection from "./components/FaqSection";
import LevelUpSection from "./components/LevelUpSection";
import Footer from "./components/Footer";
import TestimonialCard from "./components/Testimonials";
import FeaturesSection from "./components/FeaturesSection";
import Gallery from "./components/Gallery";

export default function HeaderSection() {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <ServicesSection />
      <Gallery />
      <TestimonialCard />
      <WhyChooseUs />
      <FaqSection />
      <LevelUpSection />
      <Footer />
    </div>
  );
}
