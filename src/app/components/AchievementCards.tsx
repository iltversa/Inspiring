"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
type PeekabooCardProps = {
  title: string,
  desc: string,
  img: string,
  type: string
}
type animateCards = {
  img: string,
  hovered: boolean
}
export default function AchievementsSection() {
  const cards = [
    {
      title: "120+ Projects Delivered",
      desc: "Helping businesses across various industries achieve their goals.",
      img: "/img/art-1.jpg",
      type: "peekaboo", // animation type 1
    },
    {
      title: "10 Years of Expertise",
      desc: "Bringing seasoned expertise to every project we take on.",
      img: "/img/art-2.jpg",
      type: "floating", // animation type 2
    },
    {
      title: "30+ Countries Served",
      desc: "So they can reinvest where it matters the most.",
      img: "/img/art-3.jpg",
      type: "wave", // animation type 3
    },
    // {
    //   title: "$2M+ in Value Generated for Clients",
    //   desc: "Helping clients achieve significant ROI through our solutions.",
    //   img: "/img/art-4.jpg",
    //   type: "peekaboo", // animation type 1
    // }
  ];

  return (
      <motion.section
      id="achievements"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full bg-[#f5f5f5e8] py-12d border-t-[1.5px] border-dashed border-black/20"
          >
      <div className="max-w-6xl mx-auto px-6 text-center text-black border-r-[1.5px] border-l-[1.5px] border-dashed border-black/20">
        <div className="max-w-6xl mx-auto px-6 py-6 border-dashed border-b-[1.5px] border-black/20">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto ">
              <div className="w-1/2 max-w-sm mx-auto mb-10">
                <h2 className="text-4xl md:text-md subheader-text font-bold mb-4">
                  Our Achievement
                </h2>
                <div className="text-md max-w-md mx-auto normal-text text-black">
                  <p>Trusted by clients worldwide, we deliver digital products that elevate experiences.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.map((card, i) => (
                <AnimatedCard key={i} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
      </motion.section>
  );
}

// === Animated Card Component ===
function AnimatedCard({ title, desc, img, type }: PeekabooCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center w-72 h-[360px] p-2 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 cursor-pointer overflow-hidden group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top animation area */}
      <div className="relative w-full h-[200px] flex items-center bg-gray-100 justify-center overflow-visible rounded-2xl">
        {type === "peekaboo" && <PeekabooAnim img={img} hovered={hovered} />}
        {type === "floating" && <FloatingTextAnim img={img} hovered={hovered} />}
        {type === "wave" && <WaveAnim img={img} hovered={hovered} />}
      </div>

      {/* Bottom text area */}
      <div className="text-center space-y-1 mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-500 text-sm">{desc}</p>
      </div>
    </div>
  );
}

/* === Animation Variants === */

// 1️⃣ Peekaboo Animation (center image shrinks, sides appear)
function PeekabooAnim({ img, hovered }: animateCards) {
  return (
    <div className="relative w-32 h-32 flex justify-center items-center">
      <motion.div
        className="absolute"
        initial={{ x: -40, opacity: 0 }}
        animate={hovered ? { x: -80, opacity: 1 } : { x: -40, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <Image src={img} width={60} height={60} alt="left" />
      </motion.div>

      <motion.div
        className="absolute"
        initial={{ x: 40, opacity: 0 }}
        animate={hovered ? { x: 80, opacity: 1 } : { x: 40, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <Image src={img} width={60} height={60} alt="right" />
      </motion.div>

      <motion.div
        animate={hovered ? { scale: 0.8 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <Image src={img} width={100} height={100} alt="center" />
      </motion.div>
    </div>
  );
}

function FloatingTextAnim({ img, hovered }: animateCards) {

  const hoverTexts = [
    "Creative",
    "Design",
    "Branding",
    "Experience",
    "Flow",
  ];

  return (
    <div
      className="relative w-48 h-48 flex items-center justify-center overflow-hidden"
    >
      {/* Center image */}
      <motion.div
        animate={hovered ? { scale: 0.8, opacity: 0.4 } : { scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 250, damping: 18 }}
        className="z-10"
      >
        <Image
          src={img}
          width={120}
          height={120}
          alt="center-img"
          className="rounded-xl select-none pointer-events-none"
        />
      </motion.div>

      {/* Random appearing texts on hover */}
      {hovered &&
        hoverTexts.map((text, i) => (
          <motion.span
            key={i}
            className="absolute text-xs font-light text-gray-700 z-20"
            style={{
              top: `${Math.random() * 70 + 10}%`, // random Y pos
              left: `${Math.random() * 70 + 10}%`, // random X pos
              transform: "translate(-50%, -50%)",
              whiteSpace: "nowrap",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            {text}
          </motion.span>
        ))}
    </div>
  );
}
// 3️⃣ Wave Animation (subtle left-right wiggle)
function WaveAnim({ img, hovered }: animateCards) {
  return (
    <motion.div
      className="relative w-36 h-36"
      animate={hovered ? { rotate: [0, 5, -5, 0] } : { rotate: 0 }}
      transition={{
        duration: 1.2,
        repeat: hovered ? Infinity : 0,
        ease: "easeInOut",
      }}
    >
      <Image src={img} width={130} height={130} alt="wave" />
    </motion.div>
  );
}
