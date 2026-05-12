"use client";

import { motion } from "framer-motion";
import { Cpu, GitBranch, Smartphone, Layers } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "AI-Powered Product Development",
    desc: "Custom software and mobile apps with AI at the core — not bolted on as an afterthought. We build products that learn, automate, and scale with your business.",
  },
  {
    icon: GitBranch,
    title: "Workflow Automation",
    desc: "We map your manual, repetitive processes and replace them with intelligent pipelines that save time and cut operational cost. From data entry to customer ops — we automate what slows you down.",
  },
  {
    icon: Smartphone,
    title: "Mobile & Web Applications",
    desc: "Native and cross-platform apps for iOS, Android, and web — built to perform under real load, with clean UX your users will actually enjoy. We've shipped for clients across fitness, faith, and enterprise sectors.",
  },
  {
    icon: Layers,
    title: "Design + Development, End-to-End",
    desc: "UI/UX design, branding, and frontend — all in-house. No third-party handoffs, no briefing gaps, no \"that's not our job.\" One team owns the full product, start to finish.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="services" className="w-full bg-[#f5f5f5e8] py-12 border-t-[1.5px] border-dashed border-black/20">
      <div className="max-w-6xl mx-auto px-6 text-black border-r-[1.5px] border-l-[1.5px] border-dashed border-black/20">
        <div className="max-w-6xl mx-auto px-6 py-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl subheader-text font-bold mb-4 text-black text-balance">
              What We Build
            </h2>
            <p className="text-md normal-text text-black/60 leading-relaxed">
              End-to-end capability — from AI product development to design — one team, no handoff gaps.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E3767B]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#E3767B]" />
                  </div>
                  <h3 className="font-semibold text-lg text-black mb-2 subheader-text">
                    {service.title}
                  </h3>
                  <p className="text-black/60 text-sm normal-text leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-10">
            <a
              href="https://calendly.com/inspiringlife"
              target="_blank"
              rel="noopener noreferrer"
              className="price-button-bg shadow-xl text-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl normal-text"
            >
              Book a Discovery Call →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
