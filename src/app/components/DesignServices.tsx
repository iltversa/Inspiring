// components/ServiceCardsFlip.jsx
'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const ServiceCardsFlip = () => {
  const cards = [
    {
      id: 1,
      title: "Resource Constraints",
      problem: "Internal design teams may be understaffed or lack the specific skills needed for certain projects.",
      solution: "InspiringLife's subscription model offers high-quality design services at a fraction of the cost of hiring an in-house team, making it a cost-effective solution for clients."
    },
    {
      id: 2,
      title: "Managing Workloads",
      problem: "Internal teams might struggle with managing workloads, especially during peak periods or when handling multiple projects simultaneously.",
      solution: "InspiringLife provides scalable design resources that can handle fluctuating workloads efficiently."
    },
    {
      id: 3,
      title: "Quality Consistency",
      problem: "Maintaining consistent design quality across different projects and team members can be challenging.",
      solution: "InspiringLife ensures consistent high-quality output through standardized processes and expert designers."
    },
    {
      id: 4,
      title: "Quality Consistency",
      problem: "Maintaining consistent design quality across different projects and team members can be challenging.",
      solution: "InspiringLife ensures consistent high-quality output through standardized processes and expert designers."
    },
    {
      id: 5,
      title: "Quality Consistency",
      problem: "Maintaining consistent design quality across different projects and team members can be challenging.",
      solution: "InspiringLife ensures consistent high-quality output through standardized processes and expert designers."
    },
    {
      id: 6,
      title: "Quality Consistency",
      problem: "Maintaining consistent design quality across different projects and team members can be challenging.",
      solution: "InspiringLife ensures consistent high-quality output through standardized processes and expert designers."
    }
  ];
      const sectionRef = useRef<HTMLDivElement>(null);
      const [isVisible, setIsVisible] = React.useState(false);
   useEffect(() => {
          const observer = new IntersectionObserver(
              ([entry]) => {
                  if (entry.isIntersecting) {
                      setIsVisible(true);
                  }
              },
              {
                  threshold: 0.1,
                  rootMargin: '0px 0px -50px 0px'
              }
          );
  
          if (sectionRef.current) {
              observer.observe(sectionRef.current);
          }
  
          return () => {
              if (sectionRef.current) {
                  observer.unobserve(sectionRef.current);
              }
          };
      }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#f5f5f5e8] py-1s2 border-black/20 border border-dashed">
      <div className="max-w-6xl mx-auto text-center border-r-[1.5px] border-l-[1.5px] border-dashed border-black/20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-1/2 max-w-sm mx-auto mb-4 mt-4">
            <h2 className="text-4xl md:text-md subheader-text font-bold mb-4 text-black">
              What&apos;s holding you back from choosing us, considering we&apos;ve already addressed these issues?
            </h2>
          </div>
        </div>
        <div className="border-dashed border-b-[1.5px] border-black/20 mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-4 md:px-6">
  {cards.map((card, idx) => (
    <motion.div
      key={card.id}
      className="group h-60 relative cursor-pointer perspective"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.15 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="relative h-full w-full rounded-4xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front of card */}
        <div className="absolute inset-0 h-full w-full rounded-4xl bg-white border-[1.5px] border-dashed border-black/20 p-4 text-black [backface-visibility:hidden] overflow-hidden">
          <div className="flex flex-col h-full text-left">
            <h3 className="font-semibold text-base md:text-lg text-black mb-1">
              {card.id}. {card.title}
            </h3>
            <div className="bg-gray-100 mb-2 p-2 rounded-full flex items-center justify-center">
              <span className="text-black text-sm">Problem</span>
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-gray-700 normal-text text-sm leading-relaxed px-2 py-2">
                {card.problem.substring(0, 100)}...
              </p>
            </div>
            <div className="mt-3 text-gray-400 text-sm pt-2 mb-2 flex items-center justify-center">
              Hover to flip
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 h-full w-full rounded-4xl bg-black border-[1.5px] border-dashed border-black/20 p-4 text-black [backface-visibility:hidden] overflow-hidden [transform:rotateY(180deg)]">
          <div className="flex flex-col h-full text-left">
            <div className="bg-gray-900 p-2 rounded-full flex items-center justify-center">
              <span className="text-gray-500 text-sm">Solution</span>
            </div>
            <p className="text-gray-200 leading-relaxed px-2 mt-4 text-sm">
              {card.solution}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</div>

      </div>
      </div>
    </section>
  );
};

export default ServiceCardsFlip;