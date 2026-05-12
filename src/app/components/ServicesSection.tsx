import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Website Design", imgLeft: "/img/accom-1.jpg", imgRight: "/img/cowork-2.jpg" },
  { title: "Mobile App Design", imgLeft: "/img/accom-1.jpg", imgRight: "/img/cowork-2.jpg" },
  { title: "Framer and Webflow Development (No-Code)", imgLeft: "/img/cowork-2.jpg", imgRight: "/img/cowork-2.jpg" },
  { title: "Social Media Graphics", imgLeft: "/img/accom-1.jpg", imgRight: "/img/cowork-2.jpg" },
  { title: "Pitch Decks", imgLeft: "/img/accom-1.jpg", imgRight: "/img/cowork-2.jpg" },
  { title: "Branding", imgLeft: "/img/cowork-2.jpg", imgRight: "/img/accom-1.jpg" },
  { title: "Business Cards", imgLeft: "/img/accom-1.jpg", imgRight: "/img/cowork-2.jpg" },
  { title: "Logos", imgLeft: "/img/cowork-2.jpg", imgRight: "/img/accom-1.jpg" },
  { title: "Packaging", imgLeft: "/img/cowork-2.jpg", imgRight: "/img/accom-1.jpg" },
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState<{ index: number; side: "left" | "right" } | null>(null);

  return (
    <section className="w-full bg-[#f5f5f5e8] py-12 border-black/20 border border-dashed">
      <div className="max-w-6xl mx-auto px-6 text-center border-r-[1.5px] border-l-[1.5px] border-dashed border-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="w-1/2 max-w-sm mx-auto mb-4">
            <h2 className="text-3xl md:text-md subheader-text font-bold mb-4 text-black">
              We are here to Serve...
            </h2>
            <div className="text-md normal-text text-black max-sm mx-auto">
              <p>Stop stressing yourself in finding out the perfect person for a particular design needs</p>
            </div>
          </div>
        </div>

        <p className="text-black text-sm normal-text border-t-[1.5px] border-dashed border-black/20 pt-4 mb-4">
          Tip: Hover on the images
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 border-t-[1.5px] border-dashed border-black/20 pt-6">
  {services.map((service, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="relative flex flex-col items-center group cursor-pointer border-t-[1.5px] border-l-[1.5px] border-dashed border-black/20 p-4"
    >
      {/* Image styled like cards */}
      <div className="relative w-60 h-20 flex justify-center items-end gap-2">
        {/* Left image */}
        <div className="w-50 h-20 overflow-hidden rounded-md shadow-md transform -rotate-5 origin-bottom transition-transform duration-300 cursor-pointer">
          <img
            src={service.imgLeft}
            alt={`${service.title} left`}
            className="w-full h-full object-cover"
            onMouseEnter={() => setHovered({ index: i, side: "left" })}
            onMouseLeave={() => setHovered(null)}
          />
        </div>

        {/* Right image */}
        <div className="w-50 h-20 overflow-hidden rounded-md shadow-md transform rotate-5 origin-bottom transition-transform duration-300 cursor-pointer">
          <img
            src={service.imgRight}
            alt={`${service.title} right`}
            className="w-full h-full object-cover"
            onMouseEnter={() => setHovered({ index: i, side: "right" })}
            onMouseLeave={() => setHovered(null)}
          />
        </div>
      </div>

      <h3 className="mt-3 text-gray-600 text-sm normal-text text-center">{service.title}</h3>

      {/* Hover Tooltip */}
      {hovered?.index === i && (
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 bg-white p-2 rounded-lg shadow-xl border-[1.5px] border-black/20 z-50">
          <img
            src={hovered.side === "left" ? service.imgLeft : service.imgRight}
            alt={`${service.title} preview`}
            className="w-40 h-28 object-cover rounded-md"
          />
        </div>
      )}
    </motion.div>
  ))}
</div>


        <p className="text-gray-600 border-t-[1.5px] border-black/20 border-dashed text-sm normal-text mt-5">
          That’s not it we do even{" "}
          <span style={{ fontWeight: "500" }} className="font-bold normal-text text-black text-lg">
            More...
          </span>
        </p>
      </div>
    </section>
  );
}
