import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { CheckCircle, Star } from "lucide-react";

const Price = () => {

    const [toggled, setToggled] = useState(false);
    const [toggledForWhite, setToggledForWhite] = useState(false);

    return (
        <section
            id="pricing"
            className="w-full bg-[#f5f5f5e8] py-12d border-t-[1.5px] border-dashed border-black/20">
            <div className="max-w-6xl mx-auto px-6 text-center text-black border-r-[1.5px] border-l-[1.5px] border-dashed border-black/20">
                <div className="max-w-6xl mx-auto px-6 py-6">
                    <div className="max-w-6xl mx-auto">
                        {/* Header Section */}
                        <div className="max-w-4xl mx-auto">
                            <div className="max-w-sm mx-auto mb-10">
                                <h2 className="text-4xl md:text-md subheader-text font-bold mb-4">
                                    No Contract, No Surprises
                                </h2>
                                <div className="text-md max-w-md mx-auto normal-text text-black">
                                    <p>Consistent Pricing and Value Each Month, with the Flexibility to Cancel Anytime</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* First Card */}
                            <motion.div
                                className={`relative p-3 rounded-4xl shadow-xl border transition-all duration-500
          ${toggled ? "bg-black border-gray-800" : "bg-black"}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="p-3 mb-2 rounded-4xl shadow-xl border transition-all duration-500 bg-white/10" style={{
                                    borderColor: "rgba(255, 255, 255, 0.1)",
                                    borderLeftWidth: "1px",
                                    borderRightWidth: "1px",
                                    borderStyle: "solid",
                                    borderTopWidth: "1px",
                                    borderRadius: "32px",
                                    opacity: "100%"
                                }}>
                                    {/* Top-right icon */}
                                    <div className="absolute top-10 left-6">
                                        {toggled ? (
                                            <Star className="w-6 h-6 text-green-500 text-sm animate-bounce" />
                                        ) : (
                                            <CheckCircle className="w-6 h-6 text-gray-400 animate-bounce" />
                                        )}
                                    </div>

                                    {/* Header + Toggle */}
                                    <div className="flex justify-between items-center mb-4 mt-6">
                                        <h2 className={'text-xl mt-4 font-bold'}>
                                            {toggled ? (
                                                <p className='text-2xl font-medium text-white'>Retainer Boost</p>
                                            ) : (
                                                <p className='text-2xl font-medium text-white'>Retainer</p>
                                            )}
                                        </h2>
                                        <button
                                            onClick={() => setToggled(!toggled)}
                                            className={`w-12 h-6 rounded-full transition-colors duration-300
              ${toggled ? "bg-green-500" : "bg-gray-400"}`}
                                        >
                                            <div
                                                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform
                ${toggled ? "translate-x-6" : "translate-x-0"}`}
                                            ></div>
                                        </button>
                                    </div>

                                    {/* Middle rounded background section */}
                                    <div style={{ background: "linear-gradient(179.999997deg, rgba(235, 230, 230, 0.03) 3.563133%, rgba(255, 255, 255, 0.05) 100%)" }}
                                     className={`p-1 rounded-xl mb-2 text-md text-white`}>
                                        <p className="text-[16px]">
                                            {toggled
                                                ? "Best suited for growing companies or agencies that require ongoing and fast design support."
                                                : "Ideal for ongoing design support with one active request at a time."}
                                        </p>
                                    </div>
                                    {/* Divider */}
                                    <hr className="border-gray-300 my-4" />

                                    {/* Features */}
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-start text-sm">
                                            {toggled ? (
                                                <> <span className="text-green-500 text-sm mr-2">•</span>
                                                    <span className="text-green-700 text-sm">2 Active request at a time
                                                    </span>
                                                </>
                                            ) : (
                                                <> <span className="text-green-500 text-sm mr-2">•</span>
                                                    <span className="text-gray-400 text-sm">Wireframes</span>
                                                </>
                                            )}
                                        </li>
                                        <li className="flex items-start text-sm">
                                            {toggled ? (<> <span className="text-green-500 text-sm mr-2">•</span>
                                                <span className="text-green-700 text-sm">3X Senior designer
                                                </span></>) : (
                                                <> <span className="text-green-500 text-sm mr-2">•</span>
                                                    <span className="text-gray-400 text-sm">Designer</span>
                                                </>
                                            )}
                                        </li>
                                        <li className="flex items-start text-sm">
                                            <span className="text-green-500 text-sm mr-2">•</span>
                                            <span className="text-gray-400 text-sm">Desktop, Tablet, Mobile Responsive Design</span>
                                        </li>
                                        <li className="flex items-start text-sm">
                                            <span className="text-green-500 text-sm mr-2">•</span>
                                            <span className="text-gray-400 text-sm">Brand Consistency</span>
                                        </li>
                                        <li className="flex items-start text-sm">
                                            <span className="text-green-500 text-sm mr-2">•</span>
                                            <span className="text-gray-400 text-sm">Figma File</span>
                                        </li>
                                        <li className="flex items-start text-sm">
                                            <span className="text-green-500 text-sm mr-2">•</span>
                                            <span className="text-gray-400 text-sm">Updates every 48 hours</span>
                                        </li>
                                        <li className="flex items-start text-sm">
                                            <span className="text-green-500 text-sm mr-2">•</span>
                                            <span className="text-gray-400 text-sm">2X Revision</span>
                                        </li>
                                        <li className="flex items-start text-sm">
                                            <span className="text-green-500 text-sm mr-2">•</span>
                                            <span className="text-gray-400 text-sm">+$400 For Each Extra Page</span>
                                        </li>
                                        <li className="flex items-start text-sm">
                                            <span className="text-green-500 text-sm mr-2">•</span>
                                            <span className="text-gray-400 text-sm">Website development (Fizmer) +2x</span>
                                        </li>
                                    </ul>
                                </div>
                                {/* Price */}
                                <div className="mb-4 px-2 flex items-center space-x-2">
                                    {toggled ? (
                                        <h3 className="text-xl text-white">$6199</h3>

                                    ) : (
                                        <h3 className="text-xl text-white">$9499</h3>

                                    )}
                                    <p className="text-sm text-gray-600">/per month</p>
                                </div>

                                {/* Bottom Buttons */}
                                <div className="flex space-x-4 mt-6 mt-4 py-4 px-10">
                                    {/* Book a Call */}
                                    <button
                                        style={{ letterSpacing: "-0.04em" }}
                                        className="price-button-bg flex-1 py-3 rounded-full text-white text-sm font-light text-center shadow-xl transition-all duration-300"
                                    >
                                        <a
                                            href="#pricing"
                                            className="relative inline-flex items-center justify-center text-sm font-small px-4 py-1.5 min-w-[140px] transition-all duration-500 overflow-hidden group text-white normal-text whitespace-nowrap"
                                            style={{ letterSpacing: "-0.03em", transform: "translateY(0)" }}
                                            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                                            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                                        >
                                            {/* Default text */}
                                            <span className="transition-all duration-500 group-hover:-translate-y-1 group-hover:opacity-0 inline-block whitespace-nowrap">
                                                Book a call
                                            </span>

                                            {/* Hover text */}
                                            <span className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 opacity-0 font-light whitespace-nowrap group-hover:opacity-100">
                                                We&apos;ll be there
                                            </span>
                                        </a>
                                    </button>

                                    {/* Connect on Telegram */}
                                    <button
                                        style={{
                                            letterSpacing: "-0.04em",
                                            background:
                                                "linear-gradient(179.999997deg, rgba(235, 230, 230, 0.03) 3.563133%, rgba(255, 255, 255, 0.05) 100%)",
                                        }}
                                        className="flex-1 py-3 rounded-full bg-white text-white text-sm font-light text-center shadow-xl transition-all duration-300 border-white/20 border"
                                    >
                                        <a
                                            href="#pricing"
                                            className="relative shadow-xl shadow-black/20 inline-flex items-center justify-center text-sm font-small px-4 py-1.5 rounded-full min-w-[140px] transition-all duration-500 overflow-hidden group text-white/20 normal-text whitespace-nowrap"
                                            style={{ letterSpacing: "-0.03em", transform: "translateY(0)" }}
                                            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                                            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                                        >
                                            {/* Default text */}
                                            <span className="transition-all text-white duration-500 group-hover:-translate-y-1 group-hover:opacity-0 inline-block whitespace-nowrap">
                                                Connect on Telegram
                                            </span>

                                            {/* Hover text */}
                                            <span className="absolute text-white left-1/2 -translate-x-1/2 transition-all duration-500 opacity-0 font-light whitespace-nowrap group-hover:opacity-100">
                                                This will be a quick chat
                                            </span>
                                        </a>
                                    </button>
                                </div>


                            </motion.div>

                            {/* Second Card - Example */}
                            <motion.div
                                className={`relative p-3 rounded-4xl shadow-xl transition-all bg-white duration-500`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="p-3 mb-2 rounded-4xl border transition-all duration-500 bg-gray-300/20" style={{
                                    borderColor: "rgba(255, 255, 255, 0.1)",
                                    borderLeftWidth: "1px",
                                    borderRightWidth: "1px",
                                    borderStyle: "solid",
                                    borderTopWidth: "1px",
                                    borderRadius: "32px",
                                    opacity: "100%"
                                }}>
                                    {/* Top-right icon */}
                                    <div className="absolute top-10 left-6">
                                        {toggledForWhite ? (
                                            <Star className="w-6 h-6 text-green-500 text-sm animate-bounce" />
                                        ) : (
                                            <CheckCircle className="w-6 h-6 text-gray-400 animate-bounce" />
                                        )}
                                    </div>

                                    {/* Header + Toggle */}
                                    <div className="flex justify-between items-center mb-2 mt-6">
                                        <h2 className={'text-xl font-bold mt-4'}>
                                            {toggledForWhite ? (
                                                <p className='text-2xl font-medium text-black'>Landing page Design + Dev</p>
                                            ) : (
                                                <p className='text-2xl font-medium text-black'>Landing page Design</p>
                                            )}
                                        </h2>

                                    </div>

                                    {/* Middle rounded background section */}
                                    <div className={`p-1 rounded-xl ${toggledForWhite ? "bg-green-50 text-green-600" : "bg-gray-200 text-gray-700"}`}>
                                        <p className="text-md">
                                            {toggledForWhite
                                                ? "Ideal for ongoing design support with one active request at a time."
                                                : "You have activated the Retainer plan! Unlimited requests, priority support."}
                                        </p>
                                    </div>
                                    {/* Divider */}
                                    <hr className="border-gray-300 my-4" />

                                    {/* Features */}
                                    <ul className="space-y-3 mb-4">
                                        <li className="flex items-start text-sm fixed">
                                            {toggledForWhite ? (
                                                <> <span className="text-green-500 text-sm mr-2">•</span>
                                                    <span className="text-green-700 text-sm">2 Active request at a time
                                                    </span>
                                                </>
                                            ) : (
                                                 <> <span className="text-green-500 text-sm mr-2">•</span>
                                                    <span className="text-gray-700 text-sm">Wireframes</span>
                                                </>
                                            )}
                                        </li>
                                        <li className="flex items-start text-sm">
                                            {toggledForWhite ? (
                                                <> <span className="text-green-500 text-sm mr-2">•</span>
                                                    <span className="text-gray-700 text-sm">Designer</span>
                                                </>
                                            ) : (
                                                <> <span className="text-green-500 text-sm mr-2">•</span>
                                                <span className="text-green-700 text-sm">3X Senior designer
                                                </span>
                                                </>
                                            )}
                                        </li>
                                        <li className="flex items-start text-sm">
                                            <span className="text-green-500 text-sm mr-2">•</span>
                                            <span className="text-gray-700 text-sm">Desktop, Tablet, Mobile Responsive Design</span>
                                        </li>
                                        <li className="flex items-start text-sm">
                                            <span className="text-green-500 text-sm mr-2">•</span>
                                            <span className="text-gray-700 text-sm">Brand Consistency</span>
                                        </li>
                                        <li className="flex items-start text-sm">
                                            <span className="text-green-500 text-sm mr-2">•</span>
                                            <span className="text-gray-700 text-sm">Figma File</span>
                                        </li>
                                        <li className="flex items-start text-sm">
                                            <span className="text-green-500 text-sm mr-2">•</span>
                                            <span className="text-gray-700 text-sm">Updates every 48 hours</span>
                                        </li>
                                        <li className="flex items-start text-sm">
                                            <span className="text-green-500 text-sm mr-2">•</span>
                                            <span className="text-gray-700 text-sm">2X Revision</span>
                                        </li>
                                        <li className="flex items-start text-sm">
                                            <span className="text-green-500 text-sm mr-2">•</span>
                                            <span className="text-gray-700 text-sm">+$400 For Each Extra Page</span>
                                        </li>
                                        <li className="flex items-start text-sm">
                                            <span className="text-green-500 tex-sm mr-2">•</span>
                                            <span className="text-gray-700 tex-sm">Website development (Fizmer) +2x</span>
                                        </li>
                                    </ul>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => setToggledForWhite(!toggledForWhite)}
                                            className={`w-12 h-6 rounded-full transition-colors duration-300
              ${toggledForWhite ? "bg-green-500" : "bg-gray-400"}`}
                                        >
                                            <div
                                                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform
                ${toggledForWhite ? "translate-x-6" : "translate-x-0"}`}
                                            ></div>
                                        </button>
                                        <h3 className={'text-sm text-gray-700'}>Website Development</h3>
                                    </div>
                                </div>
                                {/* Price */}
                                <div className="mb-2 flex items-center px-2 space-x-2">
                                    {toggledForWhite ? (
                                        <h3 className="text-xl text-black">$9499</h3>
                                    ) : (
                                        <h3 className="text-xl text-black">$6199</h3>
                                    )}
                                    <p className="text-sm text-gray-600">/per month</p>
                                </div>

                                {/* Bottom Buttons */}
                                <div className="flex space-x-4 mt-4 py-4 px-10">
                                    {/* Book a Call */}
                                    <button
                                        style={{
                                            letterSpacing: "-0.04em",
                                        }}
                                        className="price-button-bg flex-1 py-3 rounded-full text-white text-sm font-light text-center shadow-xl transition-all duration-300"
                                    >
                                        <a
                                            href="#pricing"
                                            className="relative inline-flex items-center justify-center text-sm font-small px-5 py-1.5 min-w-[140px] transition-all duration-500 overflow-hidden group text-white normal-text whitespace-nowrap"
                                            style={{
                                                letterSpacing: "-0.03em",
                                                transform: "translateY(0)",
                                            }}
                                            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
                                            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                                        >
                                            {/* Default text */}
                                            <span className="transition-all duration-500 group-hover:-translate-y-2 group-hover:opacity-0 inline-block whitespace-nowrap">
                                                Book a call    </span>

                                            {/* Hover text */}
                                            <span className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 opacity-0 group-hover:opacity-100 font-light whitespace-nowrap">
                                                We&apos;ll be there    </span>
                                        </a>
                                    </button>
                                    {/* Connect on Telegram */}
                                    <button
                                        style={{
                                            letterSpacing: "-0.04em",
                                            background:
                                                "linear-gradient(179.999997deg, rgba(235, 230, 230, 0.03) 3.563133%, rgba(255, 255, 255, 0.05) 100%)",
                                        }}
                                        className="flex-1 py-1.5 rounded-full bg-white text-black text-sm font-light text-center shadow-xl transition-all duration-300 border-black border"
                                    >
                                        <a
                                            href="#pricing"
                                            className="relative shadow-black/20 inline-flex items-center justify-center text-sm font-small px-5 py-1.5 min-w-[140px] transition-all duration-500 overflow-hidden group text-black normal-text whitespace-nowrap"
                                            style={{
                                                letterSpacing: "-0.03em",
                                                transform: "translateY(0)",
                                            }}
                                            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
                                            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                                        >
                                            {/* Default text */}
                                            <span className="transition-all duration-500 group-hover:-translate-y-2 group-hover:opacity-0 inline-block whitespace-nowrap">
                                                Connect on Telegram
                                            </span>

                                            {/* Hover text */}
                                            <span className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 opacity-0 group-hover:opacity-100 font-light whitespace-nowrap">
                                                This will be a quick chat
                                            </span>
                                        </a>
                                    </button>
                                </div>

                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Price;