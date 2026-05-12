"use client";
import { motion } from "framer-motion";

export default function LevelUpSection() {
  return (
    <>
      <div className="border-t border-black/20 border-dashed"></div>
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative flex flex-col items-center justify-center text-center bg-black text-white py-24 rounded-3xl mt-12 mx-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold subheader-text text-white text-balance max-w-2xl mx-auto mb-4 px-4">
          Ready to Build Something That Actually Works?
        </h2>
        <p className="text-white/60 normal-text text-base max-w-md mx-auto mb-8 leading-relaxed px-4">
          We&apos;re currently accepting new projects. Book a 30-minute discovery call — no commitment, just clarity.
        </p>
        <motion.a
          href="https://calendly.com/inspiringlife"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="price-button-bg px-8 py-3 rounded-full text-white text-sm font-medium normal-text shadow-[0_0_20px_rgba(227,118,123,0.4)] transition-all hover:shadow-[0_0_40px_rgba(227,118,123,0.6)]"
        >
          Book a Discovery Call →
        </motion.a>
        <p className="mt-4 text-white/30 text-xs normal-text">
          Typically respond within 24 hours
        </p>
      </motion.section>
    </>
  );
}
