"use client";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const tags = [
  "Branding",
  "Landing Page",
  "Contact Page need to update",
  "Pitch deck urgent",
  "Logo",
];

export default function LevelUpSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 0.5; // Adjust speed (lower = slower)
    const scrollWidth = scrollContainer.scrollWidth / 2;

    const animate = () => {
      scrollAmount += speed;
      if (scrollAmount >= scrollWidth) scrollAmount = 0;
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);
  return (
    <>
    <div className="border-t border-black/20 border-dashed"></div>
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center justify-center bg-black text-white py-24 rounded-3xl mt-20 mx-4"
    >
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl text-center mb-10 subheading-text">
        If you scrolled this far,&nbsp;
        <span className="text-white/80">It’s time to LEVEL UP</span>
      </h2>

      {/* Glowing button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.97 }}
        className="relative px-8 py-3 rounded-full price-button-bg border-gray-700 text-white font-medium shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]"
      >
        ✦ Join the Elite Club
      </motion.button>

      {/* Tag section */}
      <div className="w-full mt-16 bg-[#111] rounded-2xl p-6 flex flex-col items-center">
        <p className="text-sm text-gray-400 mb-6">
          Trust me we are good at this :)
        </p>
        {/* Scrolling tags */}
        <div
        ref={scrollRef}
        className="relative flex overflow-hidden whitespace-nowrap max-w-5xl mx-auto"
      >
        {/* Duplicate list for seamless loop */}
        <div className="flex shrink-0 gap-3 pr-6">
          {tags.concat(tags).map((tag, i) => (
            <span
              key={i}
              className="text-sm border border-gray-700 rounded-full px-4 py-1 bg-black/50 text-gray-300 whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      </div>
    </motion.section>
    </>
  );
}
