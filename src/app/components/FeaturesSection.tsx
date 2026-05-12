"use client";

import { motion } from "framer-motion";
import {
  Bike,
  Coffee,
  Laptop,
  Wifi,
  Users,
  Beer,
} from "lucide-react";

const features = [
  {
    icon: Bike,
    title: "Custom Software & Web Development",
    desc: "Building scalable, secure web & backend systems tailored to your business logic.",
  },
  {
    icon: Coffee,
    title: "Mobile & Cross-platform Apps",
    desc: "Native and hybrid apps (iOS, Android, cross-platform) with seamless UX.",
  },
  {
    icon: Laptop,
    title: "Digital Media & Content Platforms",
    desc: "Content management systems, streaming platforms, media delivery, etc",
    label: "New",
  },
  {
    icon: Wifi,
    title: "Long-term Partnerships & Tech Advisory",
    desc: "Ongoing support, roadmap planning, architecture audits, cloud migrations, DevOps.",
  },
  {
    icon: Users,
    title: "Meeting Spaces",
    desc: "Combine blocks from a range of categories to build pages that are rich in visual style and interactivity",
  },
  {
    icon: Beer,
    title: "Regular Events",
    desc: "Including the premium Icons Mind icon kit, Stack features a highly diverse set of icons suitable for all purposes.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-[#f5f5f5e8] py-1f2">
      <div className="max-w-6xl mx-auto px-6 text-center text-black border-r-[1.5px] border-l-[1.5px] border-dashed border-black/20">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto">
              <div className="max-w-sm mx-auto mb-10">
                <h2 className="text-4xl md:text-md subheader-text font-bold mb-4">
                  Benefit of InspiringLife
                </h2>
                <div className="text-md normal-text text-black">
                  <p>We do things a little differently, here&apos;s a quick overview of just a few of our unique offerings.</p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div
              style={{ width: "calc(100% + 40px)" }}
              className="px-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-center border-dashed border-t border-gray-300 pt-10"
            >
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    className="relative border-dashed border-r border-b border-gray-300 px-4 py-4"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.15 }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {/* Floating Icon */}
                    <motion.div
                      className="flex justify-center mb-4"
                      animate={
                        idx % 3 === 0
                          ? { y: [0, -8, 0], rotate: [0, 15, 0] }          // Float + small rotation
                          : idx % 3 === 1
                            ? { y: [0, -6, 0], scale: [1, 1.2, 1] }       // Float + pulse
                            : { y: [0, -4, 0], rotate: [0, -10, 0], scale: [1, 0.9, 1] } // Float + subtle rotate + shrink
                      }
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                        delay: idx * 0.2, // staggered start
                      }}
                    >
                      <Icon className="w-8 h-8 text-gray-400" />
                    </motion.div>

                    <h3 className="font-semibold text-base md:text-lg text-black mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-black text-sm normal-text">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex items-center justify-center mb-4">
              <div className="mt-8">
                <button
                  className="price-button-bg shadow-xl text-white psx-10 pys-3 rounded-full transition-all duration-300 relative overflow-hidden min-w-[50px]" style={{ letterSpacing: "-0.04em" }}
                >
                  <a
                    href="#pricing"
                    className="relative inline-flex items-center normal-text justify-center text-white text-sm font-small px-3 py-3 rounded-full min-w-[50px] transition-all duration-500 overflow-hidden group"
                  >
                    {/* Default text */}
                    <span className="transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-gray-400 group-hover:opacity-0">
                      View Plans and Pricing
                    </span>

                    {/* Hover text */}
                    <span className="absolute transition-all duration-500 opacity-0 group-hover:opacity-100 font-light">
                      Let&apos;s Go →
                    </span>
                  </a>

                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
