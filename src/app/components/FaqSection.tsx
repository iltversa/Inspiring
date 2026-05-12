"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    id: 1,
    q: "What kinds of companies do you work with?",
    a: "Primarily US and global businesses — startups, scale-ups, and established companies who need a reliable development partner. We've worked with fitness brands, sports agencies, nonprofits, and faith organisations. If you have a real problem and want it solved well, we're a good fit.",
  },
  {
    id: 2,
    q: "Do you only build AI products, or do you do traditional development too?",
    a: "Both. AI is now part of how we approach every product — even \"traditional\" apps benefit from intelligent automation, smarter search, or AI-assisted workflows. But if you need a clean mobile app or web platform without AI complexity, we build that too.",
  },
  {
    id: 3,
    q: "How does pricing work?",
    a: "Every project is scoped and priced before we start. No retainers with vague deliverables, no hourly billing surprises. You'll know exactly what you're getting and what it costs before any work begins.",
  },
  {
    id: 4,
    q: "How quickly can you start?",
    a: "Typically within the same week as your discovery call, depending on current capacity. We'll let you know upfront if there's a wait.",
  },
  {
    id: 5,
    q: "What does the discovery call actually involve?",
    a: "It's a 30-minute conversation — we ask about your business, the problem you're trying to solve, and what success looks like for you. No pitch deck, no pressure. You'll leave with clarity on whether we're the right fit.",
  },
];

export default function FAQSection() {
  const [openIds, setOpenIds] = useState<number[]>([1]);

  const handleToggle = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faqs" className="w-full bg-[#f5f5f5e8] py-12 border-t-[1.5px] border-dashed border-black/20">
      <div className="max-w-6xl mx-auto px-6 border-black/20 border-x-[1.5px] border-dashed">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 border-black/20 border-b-[1.5px] border-dashed pb-6">
          <h2 className="text-4xl md:text-5xl subheader-text font-bold text-black mb-3 text-balance">
            Common Questions
          </h2>
        </div>

        {/* FAQ Bubbles */}
        <motion.div
          className="max-w-xl mx-auto flex flex-col py-2 gap-4 px-4 md:px-10 border-black/20 border-x-[1.5px] border-b-[1.5px] border-dashed"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {faqs.map((faq) => (
            <div key={faq.id} className="w-full">
              {/* Question bubble */}
              <div className="flex justify-end items-center gap-2">
                <motion.button
                  layout
                  onClick={() => handleToggle(faq.id)}
                  aria-expanded={openIds.includes(faq.id)}
                  className={`w-8 h-8 rounded-full border border-dashed border-black/20 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                    openIds.includes(faq.id)
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-gray-100"
                  }`}
                >
                  <motion.span
                    animate={{ rotate: openIds.includes(faq.id) ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Plus
                      size={16}
                      className={`transition-colors ${
                        openIds.includes(faq.id) ? "text-white" : "text-black"
                      }`}
                    />
                  </motion.span>
                </motion.button>

                <div className="bg-white border border-dashed border-black/20 px-4 py-2 rounded-full flex items-center max-w-[80%] text-black text-sm normal-text">
                  <span>{faq.q}</span>
                </div>
              </div>

              {/* Answer bubble */}
              <AnimatePresence>
                {openIds.includes(faq.id) && (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col justify-start mt-3 items-start"
                  >
                    <div className="max-w-[85%] bg-white border border-dashed border-black/20 rounded-tr-xl rounded-tl-xl rounded-br-xl p-4 shadow-sm text-black/70 text-sm leading-relaxed normal-text">
                      <p>{faq.a}</p>
                    </div>
                    <img
                      src="/img/art-1.jpg"
                      alt="iLT team"
                      className="w-8 h-8 rounded-full mt-2 ml-2 border border-black/20 object-cover"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
