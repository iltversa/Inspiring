// components/LogoCarousel.jsx
import styles from "../LogoCarousel.module.css";

const logos = [
  "/img/archrival.png",
  "/img/continental.png.webp",
  "/img/drAanaCabeca.png",
  "/img/harting.png",
  "/img/versaclimber.png",
  "/img/lincolnBerean.png.webp",
];

export default function LogoCarousel() {
  return (
    <div className={`max-w-6xl mx-auto border-dashed border-b-[1.5px] border-t-[1.5px] border-black/20 ${styles.carouselWrapper}`} style={{marginTop:"4%", marginBottom:"4%"}}>
      <div className={styles.carousel}>
        {/* Duplicate logos for seamless loop */}
        {[...logos, ...logos].map((logo, idx) => (
          <div className={styles.logo} key={idx}>
            <img src={logo} alt={`Logo ${idx}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
