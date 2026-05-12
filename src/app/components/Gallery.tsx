// components/Gallery.tsx
import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
  type?: string;
};

const images: GalleryImage[] = [
  { src: "/img/Bitmap.png", alt: "Coworking 2" },
  { src: "/img/Bitmap_1.png", alt: "Coworking 2" },
  { src: "/img/Bitmap_2.png", alt: "Coworking 2" },
  { src: "/img/Bitmap_3.png", alt: "Coworking 2" },
  { src: "/img/Bitmap_4.png", alt: "Coworking 2" },
  // { src: "/img/Bitmap_5.png", alt: "Knowledge 1" },
  // { src: "/img/Bitmap_6.png", alt: "Knowledge 1" },
  // { src: "/img/Bitmap_7.png", alt: "Knowledge 1" },
  // { src: "/img/Bitmap_8.png", alt: "Knowledge 1" },
];

export default function Gallery() {
  return (
    <section id="work" className="w-full bg-[#f5f5f5e8] py-12">
      <div className="max-w-6xl mx-auto px-6 text-center border-black/20 border-r-[1.5px] border-l-[1.5px] border-dashed">
        <div className="border-black/20 border-b-[1.5px] border-dashed mb-4">
          <div className="w-1/2 max-w-sm mx-auto mb-4">
            <h2 className="text-black text-md normal-text mt-2">
              Still confused about us
            </h2>
            <div className="text-4xl text-black md:text-md subheader-text font-bold mb-4">
              <p>See our work</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 text-center border-gray-300 border-dashed">
          <div className="grid md:grid-cols-2 gap-6">
            {images.map((img, i) => (
              <div
                key={i}
                className={`relative group overflow-hidden rounded-3xl shadow-lg ${i === 4 ? "md:col-span-2" : ""
                  }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={900}
                  height={500}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition duration-500">
                  <button className="px-6 py-2 bg-white text-black text-sm rounded-full shadow hover:bg-gray-100">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>


  );
}
