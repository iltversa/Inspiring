"use client";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import FaqSection from "./components/FaqSection";
import LevelUpSection from "./components/LevelUpSection";
import Footer from "./components/Footer";
import AchievementCards from "./components/AchievementCards";
import TestimonialCard from "./components/Testimonials";
import FeaturesSection from "./components/FeaturesSection";
import Gallery from "./components/Gallery";

export default function HeaderSection() {
  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md border-dashed border-b-[1.5px] border-black/20">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3 border-dashed border-l-[1.5px] border-r-[1.5px] border-black/20">
          {/* Logo */}
          <div style={{ width: "40%" }} className="flex-shrink-0">
            <img
              style={{ width: "40%" }}
              src="img/InspringLogo-Transparent.png"
              loading="lazy"
              alt="InspiringLife Technologies logo"
              className="image"
            />
          </div>

          {/* Nav + CTA grouped together */}
          <div className="flex items-center gap-6">
            <ul className="hidden md:flex items-center gap-6 text-gray-400 font-small">
              {[
                { href: "#work", label: "Our Work" },
                { href: "#services", label: "Services" },
                { href: "#comparison", label: "About" },
                { href: "#faqs", label: "Contact" },
              ].map((item, i) => (
                <li key={i} className="relative group">
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(item.href);
                      const offset = 80;
                      if (target) {
                        const top =
                          target.getBoundingClientRect().top +
                          window.scrollY -
                          offset;
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

            {/* Availability badge */}
            <div className="hidden md:flex items-center gap-1.5 border border-dashed border-black/20 rounded-full px-3 py-1">
              <span
                className="w-2 h-2 rounded-full bg-green-500"
                style={{
                  animation: "glow 1.5s ease-in-out infinite",
                }}
              ></span>
              <style jsx>{`
                @keyframes glow {
                  0%,
                  100% {
                    box-shadow: 0 0 0px #22c55e;
                    opacity: 0.8;
                  }
                  50% {
                    box-shadow: 0 0 8px 4px #22c55e;
                    opacity: 1;
                  }
                }
              `}</style>
              <span
                style={{ fontSize: "x-small", fontWeight: 500 }}
                className="text-black whitespace-nowrap"
              >
                Available for New Projects
              </span>
            </div>

            {/* Primary CTA */}
            <a
              href="https://calendly.com/inspiringlife"
              target="_blank"
              rel="noopener noreferrer"
              className="price-button-bg shadow-xl text-white text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 hover:-translate-y-0.5 normal-text whitespace-nowrap"
              style={{ letterSpacing: "-0.03em" }}
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <AchievementCards />
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
