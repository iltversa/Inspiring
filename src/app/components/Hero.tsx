"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, Lock, Infinity } from "lucide-react";
import { ReactTyped } from "react-typed";


export default function Hero() {

    return (
        <div className="border-dashed border-b-[1.5px] border-black/20">
            <header className="header-hero border-b-[1.5px] border-dashed border-black/20">
                <div className="content relative pt-32 pb-16 text-center max-w-6xl mx-auto px-6 border-dashed border-l-[1.5px] border-r-[1.5px] border-black/20"
                    style={{ marginTop: '4%' }} >
                    {/* Status */}
                    <style jsx>
                        {`
                            @keyframes glow {
                                0%, 100% {
                                box-shadow: 0 0 0px #22c55e;
                                opacity: 0.8;
                                }
                                50% {
                                box-shadow: 0 0 8px 4px #22c55e;
                                opacity: 1;
                                }
                            }
                        `}
                    </style>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <span
                            className="w-2 h-2 rounded-full bg-green-500 animate-[glow_1.5s_ease-in-out_infinite]"
                        ></span>
                        <span
                            style={{ fontSize: "x-small", fontWeight: 500 }}
                            className="text-black"
                        >
                            Available for New Projects
                        </span>
                    </div>
                    {/* Heading + Subheading */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl mx-auto header-text text-black">
                            BUILDING TECH <br />
                            THAT{" "}
                            <ReactTyped
                                strings={["Inspires", "Transforms"]}
                                typeSpeed={80}
                                backSpeed={50}
                                backDelay={1500}
                                loop
                                className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400"
                            />
                        </h1>

                        <p className="mt-4 text-black text-base text-md normal-text">
                            We don&apos;t just build software — we solve your core business
                        </p>
                         <p className="text-black text-base text-md normal-text">
                             challenges with innovation, reliability, and purpose.
                        </p>
                    </motion.div>

                    {/* Button */}
                    <div className="mt-8 bg-none">
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
            </header>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.4 }}
                className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-dashed border-r-[1.5px] border-l-[1.5px] border-black/20 gap-6 px-4 py-4 md:px-6"
            >
                {/* Item 1 */}
                <div className="sm:border-r border-dashed border-black/20 flex items-center gap-4">
                    <div className="bg-gray-300 p-3 rounded-xl flex items-center justify-center">
                        <Clock className="w-4 h-4 text-black animate-spin-slow" />
                    </div>
                    <h3 style={{ fontWeight: "500" }} className="normal-text text-sm text-black">48 Hours Delivery</h3>
                </div>

                {/* Item 2 */}
                <div className="sm:border-r border-dashed border-r-[1.5px] border-black/20 flex items-center gap-4">
                    <div className="bg-gray-300 p-3 rounded-xl flex items-center justify-center">
                        <Lock className="w-4 h-4 text-black animate-bounce" />
                    </div>
                    <h3 style={{ fontWeight: "500" }} className="normal-text text-sm text-black">Access to Private Design Portal</h3>
                </div>

                {/* Item 3 */}
                <div className="flex items-center gap-4 border-dashed border-black/20">
                    <div className="bg-gray-300 p-3 rounded-xl flex items-center justify-center">
                        <Infinity className="w-4 h-4 text-black animate-pulse-slow" />
                    </div>
                    <h3 style={{ fontWeight: "500" }} className="normal-text text-sm text-black">Unlimited Design Requests</h3>
                </div>
            </motion.div>
        </div>
    );
}


