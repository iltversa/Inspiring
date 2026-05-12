"use client";

import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <>
      {/* SECTION: FITNESS TECH CALLOUT */}
      <section className="w-full py-12 border-t-[1.5px] border-dashed border-black/20">
        <div className="max-w-6xl mx-auto px-6 border-r-[1.5px] border-l-[1.5px] border-dashed border-black/20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm"
          >
            {/* Label */}
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E3767B] mb-4 block">
              Vertical Expertise
            </span>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left: Copy */}
              <div>
                <h2 className="text-3xl md:text-4xl subheader-text font-bold text-black mb-4 text-balance">
                  We Know Fitness Tech
                </h2>
                <p className="text-black/60 text-sm normal-text leading-relaxed mb-6">
                  VersaClimber — one of the most respected names in high-performance fitness equipment — trusted iLT to build their cross-platform app. We delivered on a tight timeline, across iOS, Android, and web, without a single hiccup.
                </p>
                <p className="text-black/60 text-sm normal-text leading-relaxed mb-8">
                  If your business is in fitness, health, wearables, or sports performance — you&apos;re talking to a team that&apos;s already shipped in your industry.
                </p>
                <a
                  href="https://calendly.com/inspiringlife"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="price-button-bg shadow-xl text-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl normal-text inline-block"
                >
                  Book a Discovery Call →
                </a>
              </div>

              {/* Right: Quote + Logo */}
              <div className="flex flex-col gap-6">
                <blockquote className="border-l-2 border-[#E3767B] pl-5">
                  <p className="text-black/70 text-sm normal-text leading-relaxed italic">
                    &ldquo;I loved how iLT took the time to understand our needs and helped us create a universal app tailored to our specific requirements, running seamlessly on all platforms.&rdquo;
                  </p>
                  <footer className="mt-3 text-xs text-black/50 normal-text">
                    — Shane Schieffer, Tech Head, VersaClimber
                  </footer>
                </blockquote>

                <div>
                  <img
                    src="/img/versaclimber.png"
                    alt="VersaClimber logo"
                    style={{ width: "120px" }}
                    className="object-contain opacity-80"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION: HOW IT WORKS */}
      <section className="w-full py-12 border-t-[1.5px] border-dashed border-black/20">
        <div className="max-w-6xl mx-auto px-6 border-r-[1.5px] border-l-[1.5px] border-dashed border-black/20">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl subheader-text font-bold text-black mb-4 text-balance">
              How Simple It Is to Get Started
            </h2>
            <p className="text-black/60 text-md normal-text leading-relaxed">
              No long procurement cycles. No mysterious timelines. Just clarity from day one.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
                viewport={{ once: true, amount: 0.4 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative"
              >
                <div className="text-5xl font-extrabold text-gray-100 header-text select-none mb-3 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 subheader-text">
                  {step.title}
                </h3>
                <p className="text-black/60 text-sm normal-text leading-relaxed">
                  {step.desc}
                </p>
                {/* Connector line on desktop */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 -right-3 w-6 border-t-2 border-dashed border-gray-200 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const steps = [
  {
    title: "Discovery Call",
    desc: "We spend 30 minutes understanding your business, your problem, and your goals. No pitch. Just the right questions.",
  },
  {
    title: "Proposal + Roadmap",
    desc: "You receive a clear scope, timeline, and fixed price within 48 hours. No hidden costs, no vague estimates.",
  },
  {
    title: "Build + Ship",
    desc: "We execute with full transparency — regular updates, a shared project view, and direct access to the team building your product.",
  },
];
