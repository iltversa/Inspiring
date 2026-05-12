"use client";
import FeaturesSection from "./components/FeaturesSection";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import LogoCarousel from "./components/LogoCarousel";
import StepsWithVideo from "./components/StepsWithVideo";
import TestimonialCard from "./components/Testimonials";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ServiceCards from "./components/DesignServices";
import FaqSection from "./components/FaqSection";
import Price from "./components/Price";
import LevelUpSection from "./components/LevelUpSection";
import Footer from "./components/Footer";
import AchievementCards from "./components/AchievementCards";
// import InteractiveParticlesSection from "./components/InteractiveParticlesSection";
// import FullWidthImageSlider from "./components/FullWidthImageSlider";

export default function HeaderSection() {

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md border-dashed border-b-[1.5px] border-black/20">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-2 border-dashed border-l-[1.5px] border-r-[1.5px] border-black/20">
          {/* Logo */}
          <div style={{ width: "40%" }} className="flex-shrink-0">
            <img style={{ width: "40%" }} src="img/InspringLogo-Transparent.png" loading="lazy" alt="company-logo" className="image" />
          </div>

          {/* Nav + CTA grouped together */}
          <div className="flex items-center space-x-6">
            <ul className="hidden md:flex space-x-6 text-gray-400 font-small">
              {[
                { href: "#achievements", label: "Achievements" },
                { href: "#work", label: "Our Work" },
                { href: "#comparison", label: "Comparison" },
                { href: "#faqs", label: "FAQs" },
              ].map((item, i) => (
                <li key={i} className="relative group">
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(item.href);
                      const offset = 80; // height of your fixed navbar
                      if (target) {
                        const top = target.getBoundingClientRect().top + window.scrollY - offset;
                        window.scrollTo({ top, behavior: "smooth" });
                      }
                    }}
                    className="text-sm text-gray-500 transition-all duration-300 group-hover:text-black group-hover:-translate-y-1 inline-block"
                  >
                    {item.label}
                    <span className="absolute left-1/2 bottom-[-6px] w-1.5 h-1.5 rounded-full bg-black scale-0 group-hover:scale-100 transition-transform duration-300 -translate-x-1/2"></span>
                  </a>

                </li>
              ))}
            </ul>

            {/* Slim CTA */}
            <button className="price-button-bg shadow-xl text-white psx-10 pys-3 rounded-full transition-all duration-300 relative overflow-hidden min-w-[50px]" style={{ letterSpacing: "-0.04em" }}>
              <a
                href="#pricing"
                className="relative shadow-xl shadow-black/20 inline-flex items-center justify-center text-sm font-small px-3 py-3 rounded-full min-w-[50px] transition-all duration-500 overflow-hidden group text-white  normal-text"
                style={{
                  letterSpacing: "-0.03em",
                  // backgroundColor: "#E3767B",
                  transform: "translateY(0)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                {/* Default text */}
                <span className="transition-all duration-500 group-hover:-translate-y-2 group-hover:opacity-0 inline-block">
                  View Plans and Pricing
                </span>

                {/* Hover text */}
                <span className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 opacity-0 group-hover:opacity-100 font-light">
                  Get Started
                </span>
              </a>
            </button>
          </div>
        </div>
      </nav>
      <Hero />
      <AchievementCards />
      <TestimonialCard />
      <LogoCarousel />
      <FeaturesSection />
      <StepsWithVideo />
      <ServicesSection />
      <Gallery />
      <WhyChooseUs />
      {/* <InteractiveParticlesSection /> */}
      <Price />
      {/* <FullWidthImageSlider /> */}
      <ServiceCards />
      <FaqSection />
      <LevelUpSection />
      <Footer />
    </div>

  );
}
