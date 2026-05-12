import React from "react";
import { testimonials } from "../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


export default function TestimonialsCarousel() {
    return (
        <div style={{ backgroundColor: "#f5f5f5e8" }} className="relative w-full flex justify-center px-2 py-10 sm:py-10 md:px-10 sm:px-6 md:px-8">
            <div className="relative w-full max-w-3xl overflow-hidden">
                {/* Fade edges */}
                <div className="pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#f5f5f5e8] to-transparent z-20"></div>
                <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#f5f5f5e8] to-transparent z-20"></div>
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    slidesPerView="auto"
                    spaceBetween={20}
                    loop={true}
                    freeMode={true}
                    speed={5000} // controls continuous scroll speed
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                    allowTouchMove={false} // optional - disable manual drag
                    className="py-10 w-full !overflow-visible"
                >

                    {testimonials.concat(testimonials).map((item, index) => (
                        <SwiperSlide
                            key={`${item.id}-${index}`} // 👈 makes each key unique
                            className="!w-[85%] sm:!w-[90%] md:!w-[340px] lg:!w-[360px] flex justify-center"
                        >
                            <div className="max-w-md mx-auto relative overflow-visible">
                                {/* card wrapper with hover grow + overlap */}
                                <div className="group relative transform transition-all duration-500 hover:scale-105 hover:z-20">
                                    <div className="rounded-3xl bg-white transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-200 overflow-hidden">
                                        {/* Top images area with border + hover color effect */}
                                        <div className="p-3">
                                            <div className="rounded-2xl bg-white"> {/* outer round border */}
                                                <div className="rounded-xl bg-gray-400/50 p-4 transition-colors duration-500 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-blue-300">
                                                    <div className="flex items-center justify-center gap-6 h-44">
                                                        {item.images.map((src, i) => (
                                                            <img
                                                                key={i}
                                                                src={src}
                                                                alt={`${item.author} image ${i}`}
                                                                className="w-30 rounded-lg shadow-md object-cover"
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Quote */}
                                        <div className="px-6">
                                            <div className="px-6 py-4 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl bg-gray-100 text-gray-600 text-sm leading-relaxed normal-text justify-start max-w-[80%]">
                                                <p>{item.quote}</p>
                                            </div></div>

                                        {/* Reply bubble
                                        {item.reply && (
                                            <div className="px-6 py-2 flex justify-end">
                                                <div className="group inline-block max-w-[75%]">
                                                    <div className="px-4 py-2 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl bg-gray-300 text-gray-700 text-sm transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                                                        {item.reply.text}
                                                        {item.reply.from && (
                                                            <span className="ml-2 text-sm font-normal">{item.reply.from}</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
 */}

                                        {/* Footer */}
                                        <div className="px-10 py-6 flex items-center gap-3">
                                            <img
                                                src={item.avatar ?? "/img/avatar-placeholder.png"}
                                                alt={item.author}
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                            <div>
                                                <p className="text-sm font-semibold text-gray-800">{item.author}</p>
                                                {item.role && <p className="text-sm text-gray-500">{item.role}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="custom-pagination flex justify-center mt-6"></div>
                </Swiper>
            </div>
        </div>

    );
}

