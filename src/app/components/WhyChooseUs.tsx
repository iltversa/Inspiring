'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ComparisonRow {
    feature: string;
    InspiringLife: string | React.ReactNode;
    employees: string | React.ReactNode;
    otherAgencies: string | React.ReactNode;
}

const WhyChooseUs: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const comparisonData: ComparisonRow[] = [
        {
            feature: 'Cost',
            InspiringLife: '✓ $',
            employees: '✗ $$$$ (High Overhead)',
            otherAgencies: '✗ $$'
        },
        {
            feature: 'Senior-Level Designer',
            InspiringLife: '✓ Guaranteed',
            employees: '✗ Hopefully',
            otherAgencies: '✗ Maybe'
        },
        {
            feature: 'Turnaround Time',
            InspiringLife: '✓ 48 hours for most projects',
            employees: '✗ Can take weeks due to other tasks',
            otherAgencies: '✗ Weeks, depending on workload'
        },
        {
            feature: 'Start Time',
            InspiringLife: '✓ Today itself',
            employees: '✗ Weeks to onboard and train',
            otherAgencies: '✗ Days to set up agreements'
        },
        {
            feature: 'Unlimited Revisions',
            InspiringLife: '✓ Yes, we keep working until it\'s perfect',
            employees: '✗ Limited, with extra time constraints',
            otherAgencies: '✗ Limited revisions per project'
        },
        {
            feature: 'Client Portal',
            InspiringLife: '✓ Yes, track progress easily',
            employees: '✗ Internal systems may vary, often less accessible',
            otherAgencies: '✗ No consistent system'
        },
        {
            feature: 'Scalability',
            InspiringLife: '✓ Scale up or down with ease',
            employees: '✓ Possible',
            otherAgencies: '✗ Limited by freelancer\'s capacity'
        }
    ];

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
        <section
            ref={sectionRef}
            id="comparison"
            className="w-full bg-[#f5f5f5e8] py-12d border-t-[1.5px] border-dashed border-black/20">
            <div className="max-w-6xl mx-auto px-6 text-center text-black border-r-[1.5px] border-l-[1.5px] border-dashed border-black/20">
                <div className="max-w-6xl mx-auto px-6 py-6">
                    <div className="max-w-6xl mx-auto">
                        {/* Header Section */}
                        <div className="max-w-4xl mx-auto">
                            <div className="w-1/2 max-w-sm mx-auto mb-10">
                                <h2 className="text-4xl md:text-md subheader-text font-bold mb-4">
                                    Why choose us?
                                </h2>
                                <div className="text-md normal-text text-black max-sm mx-auto">
                                    <p>Check out what InspiringLife offers Vs employees and other agencies. It&apos;s quite a lot!</p>
                                </div>
                            </div>
                        </div>
                        {/* Comparison Table */}
                        <div className="overflow-x-auto bg-white rounded-3xl shadow-lg py-2 px-2">

                            {/* <div className="overflow-x-auto bg-white rounded-3xl shadow-lg"> */}
                            <table className="w-full border-collapse rounded-3xl">
                                {/* Table Header */}
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="p-4 bg-gray-50 rounded-tl-3xl rounded-tr-3xl text-sm text-left font-semibold text-black border-b-2 border-gray-200">
                                            Feature
                                        </th>
                                        <th className="p-4 text-sm bg-white text-left font-semibold text-black border-b-2 border-gray-300">
                                            InspiringLife
                                        </th>
                                        <th className="p-4 text-sm bg-white text-left font-semibold text-black border-b-2 border-gray-200">
                                            Employees
                                        </th>
                                        <th className="p-4 text-sm bg-white text-left font-semibold text-black border-b-2 border-gray-200">
                                            Other Agencies
                                        </th>
                                    </tr>
                                </thead>

                                {/* Table Body with Animation */}
                                <tbody>
                                    {comparisonData.map((row, index) => (
                                        <tr
                                            key={index}
                                            className={`
                    border-b border-gray-100 bg-gray-50 rounded-xl
                    transition-all duration-700 ease-out
                    ${isVisible
                                                    ? 'translate-y-0 opacity-100'
                                                    : 'translate-y-10 opacity-0'
                                                }
                  `}
                                            style={{
                                                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                                            }}
                                        >
                                            <td className="p-4 text-left text-black bg-gray-50 normal-text text-sm">
                                                {row.feature}
                                            </td>
                                            <td className="p-4 text-left text-black bg-white normal-text text-sm">
                                                {row.InspiringLife}
                                            </td>
                                            <td className="p-4 text-left text-black bg-white normal-text text-sm">
                                                {row.employees}
                                            </td>
                                            <td className="p-4 text-left text-black bg-white normal-text text-sm">
                                                {row.otherAgencies}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* </div> */}
                        </div>

                        {/* Footer Note */}
                        <p className="text-black border-t border-gray-300 border-dashed text-sm normal-text mt-5">
                            And here&apos;s come the <span style={{ fontWeight: "500" }} className="font-bold normal-text text-black text-lg">Sauce...</span>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;