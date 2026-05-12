import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export default function FAQSection() {
  // Instead of single ID, store multiple open ones
  const [openIds, setOpenIds] = useState<number[]>([1]); // 1st question open by default

  const handleToggle = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id) // close if already open
        : [...prev, id] // open if closed
    );
  };

  return (
    <section id="faqs" className="w-full bg-[#f5f5f5e8] py-12">
      <div className="max-w-6xl mx-auto px-6 text-center border-black/20 border-x-[1.5px] border-dashed">
        <div className="border-black/20 border-b-[1.5px] border-dashed mb-4">
          <div className="max-w-sm mx-auto mb-4">
            <h2 className="text-4xl font-bold mb-4 text-black">
              Frequently Asked Questions
            </h2>
            <h3 className="text-md text-black mx-auto">
              We Get It—Curiosity Leads to Success! Got questions? That’s a great sign.
            </h3>
          </div>
        </div>
      </div>

      {/* FAQ Bubbles */}
      <motion.div
        className="max-w-xl mx-auto text-center flex flex-col py-2 gap-4 px-10 border-black/20 border-x-[1.5px] border-b-[1.5px] border-dashed"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {faqs.map((faq) => (
          <div key={faq.id} className="w-full">
            {/* Question bubble */}
            <div className="flex justify-end items-center gap-2">
              <motion.button
                layout
                onClick={() => handleToggle(faq.id)}
                className={`w-8 h-8 rounded-full border border-dashed border-black/20 flex items-center justify-center transition-all duration-300 ${
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

              <div className="bg-white border border-dashed border-black/20 px-4 py-2 rounded-full flex items-center justify-center max-w-[70%] text-black text-sm">
                <span>{faq.q}</span>
              </div>
            </div>

            {/* Answer bubble */}
            <AnimatePresence>
              {openIds.includes(faq.id) && (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col justify-start mt-3 items-start"
                >
                  <div className="max-w-[70%] bg-white border border-dashed border-black/20 rounded-tr-xl rounded-tl-xl rounded-br-xl p-3 shadow-sm text-black text-sm leading-relaxed">
                    <p>{faq.a}</p>
                  </div>

                  <img
                    src="/img/art-1.jpg"
                    alt="profile"
                    className="w-8 h-8 rounded-full mt-2 ml-2 border border-black/20"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

// Example Data
const faqs = [
  { id: 1, q: "How does it work?", a: "We connect you with top experts instantly." },
  { id: 2, q: "Can I cancel anytime?", a: "Yes, there are no lock-ins or hidden fees." },
  { id: 3, q: "Do you offer refunds?", a: "Absolutely, within 14 days of purchase." },
];
