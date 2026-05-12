'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ComparisonRow {
  feature: string;
  ilt: string;
  freelancer: string;
  agency: string;
  iltPositive?: boolean;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: 'AI-native development',
    ilt: '✓ Built in from day one',
    freelancer: '✗ Rarely',
    agency: '✗ Often outsourced',
    iltPositive: true,
  },
  {
    feature: 'End-to-end (design + dev)',
    ilt: '✓ One team owns it all',
    freelancer: '✗ Design or dev, not both',
    agency: '~ Sometimes',
  },
  {
    feature: 'Fixed price, no surprises',
    ilt: '✓ Scoped before we start',
    freelancer: '✗ Scope creep is common',
    agency: '✗ Change orders add up',
  },
  {
    feature: 'Senior team on your project',
    ilt: '✓ Always',
    freelancer: '~ Depends on who you hire',
    agency: '✗ Often junior-heavy',
  },
  {
    feature: 'Availability & communication',
    ilt: '✓ Direct access, always',
    freelancer: '~ Varies',
    agency: '✗ Account managers buffer you',
  },
  {
    feature: 'Scalability',
    ilt: '✓ Flex up or down easily',
    freelancer: '✗ Capacity limited',
    agency: '✓ Possible, at a cost',
  },
  {
    feature: 'Start time',
    ilt: '✓ This week',
    freelancer: '~ Days to negotiate',
    agency: '✗ Weeks of onboarding',
  },
];

const WhyChooseUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="comparison"
      className="w-full bg-[#f5f5f5e8] py-12 border-t-[1.5px] border-dashed border-black/20"
    >
      <div className="max-w-6xl mx-auto px-6 border-r-[1.5px] border-l-[1.5px] border-dashed border-black/20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-4xl md:text-5xl subheader-text font-bold text-black mb-4 text-balance">
            Why Choose iLT?
          </h2>
          <p className="text-black/60 text-md normal-text leading-relaxed">
            Here&apos;s how we compare — honestly.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-3xl shadow-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-sm text-left font-semibold text-black border-b border-gray-100 bg-gray-50 rounded-tl-3xl w-1/4">
                  Feature
                </th>
                {/* iLT column — highlighted */}
                <th className="p-4 text-sm text-left font-semibold text-black border-b border-gray-100 bg-[#E3767B]/8 border-x-2 border-[#E3767B]/20">
                  <span className="text-[#E3767B]">InspiringLife (iLT)</span>
                </th>
                <th className="p-4 text-sm text-left font-semibold text-black border-b border-gray-100 bg-white">
                  Freelancer
                </th>
                <th className="p-4 text-sm text-left font-semibold text-black border-b border-gray-100 bg-white rounded-tr-3xl">
                  Large Agency
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-50 transition-all duration-700 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: isVisible ? `${index * 80}ms` : '0ms' }}
                >
                  <td className="p-4 text-left text-black bg-gray-50 normal-text text-sm font-medium">
                    {row.feature}
                  </td>
                  <td className="p-4 text-left normal-text text-sm bg-[#E3767B]/5 border-x-2 border-[#E3767B]/15 text-black font-medium">
                    {row.ilt}
                  </td>
                  <td className="p-4 text-left text-black/60 bg-white normal-text text-sm">
                    {row.freelancer}
                  </td>
                  <td className="p-4 text-left text-black/60 bg-white normal-text text-sm">
                    {row.agency}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
