"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "VersaClimber App",
    client: "Heart Rate Inc., USA",
    description:
      "Cross-platform mobile application for a leading fitness equipment brand — iOS, Android, and web, built to spec and shipped on schedule.",
    tag1: "Fitness Tech",
    tag2: "Mobile App",
    bg: "bg-gradient-to-br from-gray-800 to-gray-900",
    accent: "text-[#E3767B]",
  },
  {
    name: "Community Platform",
    client: "LincolnBerean, USA",
    description:
      "Custom mobile app for one of Nebraska's largest churches — built to connect thousands of members through events, content, and community tools.",
    tag1: "Faith",
    tag2: "Mobile App",
    bg: "bg-gradient-to-br from-slate-700 to-slate-900",
    accent: "text-blue-400",
  },
  {
    name: "Brand & Digital Presence",
    client: "Archrival, USA",
    description:
      "Full digital build for a top sports marketing agency — web development, design systems, and ongoing technical partnership.",
    tag1: "Sports Marketing",
    tag2: "Web",
    bg: "bg-gradient-to-br from-zinc-700 to-zinc-900",
    accent: "text-blue-400",
  },
];

export default function Gallery() {
  return (
    <section id="work" className="w-full bg-[#f5f5f5e8] py-12 border-t-[1.5px] border-dashed border-black/20">
      <div className="max-w-6xl mx-auto px-6 border-black/20 border-r-[1.5px] border-l-[1.5px] border-dashed">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 border-black/20 border-b-[1.5px] border-dashed pb-6">
          <h2 className="text-4xl md:text-5xl subheader-text font-bold text-black mb-3 text-balance">
            Work We&apos;re Proud Of
          </h2>
          <p className="text-black/60 text-md normal-text leading-relaxed">
            Real products, real clients, real outcomes.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className={`group relative overflow-hidden rounded-3xl shadow-lg ${project.bg} min-h-[320px] flex flex-col justify-end p-7 cursor-pointer`}
            >
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 rounded-3xl" />

              {/* Tags */}
              <div className="flex gap-2 mb-4 relative z-10">
                <span className="text-xs text-white/60 border border-white/20 rounded-full px-3 py-0.5 normal-text">
                  {project.tag1}
                </span>
                <span className="text-xs text-white/60 border border-white/20 rounded-full px-3 py-0.5 normal-text">
                  {project.tag2}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className={`text-xs font-semibold uppercase tracking-wider mb-1 normal-text ${project.accent}`}>
                  {project.client}
                </p>
                <h3 className="text-xl font-bold text-white mb-2 subheader-text">
                  {project.name}
                </h3>
                <p className="text-white/60 text-sm normal-text leading-relaxed mb-5">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm text-white border border-white/20 rounded-full px-4 py-1.5 hover:bg-white/10 transition-all duration-300 normal-text"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
