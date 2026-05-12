// components/FullWidthImageSlider.js
import { useEffect, useState } from "react";

const images = [
  "/img/accom-1.jpg",
  "/img/accom-2.jpg",
  "/img/accom-3.jpg",
  "/img/accom-4.jpg",
];

export default function FullWidthImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: "#f5f5f5e8" }} className="relative w-full flex justify-center px-2 py-s5 sm:py-10 md:px-10 sm:px-6 md:px-8">
      <div className="relative w-full max-w-xl overflow-hidden">
        <section className="rounded-4xl" style={{ width: "100%", height:"100%", overflow: "hidden" }}>
          <img
            src={images[currentIndex]}
            alt="Slider Image"
            style={{
          width: "100%",
          height: "auto",
          display: "block",
          transition: "opacity 1s ease-in-out",
        }}
      />
    </section>
      </div>
      </div>
  );
}
