"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Globe, Award } from "lucide-react";
import LogoCarousel from "./LogoCarousel";

export default function Hero() {
  return (
    <div className="border-dashed border-b-[1.5px] border-black/20">
      <header className="header-hero border-b-[1.5px] border-dashed border-black/20">
        <div
          className="content relative pt-32 pb-16 text-center max-w-6xl mx-auto px-6 border-dashed border-l-[1.5px] border-r-[1.5px] border-black/20"
          style={{ marginTop: "4%" }}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center mb-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 border border-dashed border-black/20 rounded-full px-4 py-1">
              AI-First Development Studio
            </span>
          </div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl mx-auto header-text text-black text-balance">
              We Build AI-Powered Products
              <br />
              For Ambitious Businesses
            </h1>

            <p className="mt-5 text-black/70 text-base normal-text max-w-[560px] mx-auto leading-relaxed text-pretty">
              From intelligent software to workflow automation — iLT is the development partner for companies that want to move fast, ship right, and stay ahead of the curve.
            </p>
          </motion.div>

          {/* CTA Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/inspiringlife"
              target="_blank"
              rel="noopener noreferrer"
              className="teal-button-bg shadow-xl text-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl normal-text"
            >
              Book a Discovery Call →
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#work");
                if (target) {
                  const top = target.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
              className="text-sm text-black/60 hover:text-black transition-colors duration-300 normal-text underline underline-offset-4"
            >
              See Our Work ↓
            </a>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-black/60 normal-text"
          >
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#E3767B]" />
              120+ Projects Delivered
            </span>
            <span className="hidden sm:block text-black/20">|</span>
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E3767B]" />
              10 Years of Expertise
            </span>
            <span className="hidden sm:block text-black/20">|</span>
            <span className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#E3767B]" />
              Clients in 30+ Countries
            </span>
          </motion.div>
        </div>
      </header>

      {/* Logo Carousel directly below hero */}
      <LogoCarousel />
    </div>
  );
}
