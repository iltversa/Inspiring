"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

function Particles({ count = 200 }) {
  const mesh = useRef();
  const [mouse, setMouse] = useState(new THREE.Vector3(0, 0, 0));
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = Math.random() * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const pos = mesh.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      let x = pos[i * 3];
      let y = pos[i * 3 + 1];
      let z = pos[i * 3 + 2];

      // Falling effect on scroll
      pos[i * 3 + 1] -= 0.02;

      // Reset if off-screen
      if (y < -5) pos[i * 3 + 1] = 5 + Math.random() * 2;

      // Attraction to mouse
      const dx = mouse.x - x;
      const dy = mouse.y - y;
      const dz = mouse.z - z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (dist < 1.5) {
        pos[i * 3] += dx * 0.03;
        pos[i * 3 + 1] += dy * 0.03;
        pos[i * 3 + 2] += dz * 0.03;
      }
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points
      ref={mesh}
      onPointerMove={(e) => {
        setMouse(e.point);
      }}
    >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#ffffff" />
    </points>
  );
}

export default function InteractiveParticlesSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    
    <section className="relative h-[90vh] max-w-6xl mx-auto px-6  bg-black rounded-2xl flex flex-col items-center justify-center overflow-hidden text-center mt-20 mb-20">
      {/* Canvas for particles */}
      <Canvas camera={{ position: [0, 0, 7] }}>
        <ambientLight intensity={0.5} />
        <Particles count={250} scrollY={scrollY} />
      </Canvas>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        <h2 className="text-5xl font-bold mb-4">Pause or Cancel Anytime</h2>
        <p className="text-md max-w-xl px-10 mb-10 leading-snug text-gray-300">
          Don&apos;t commit to a Designer you&apos;ve gotta pay even when there&apos;s no
          work to give them. Oh heck no!
        </p>
        <button className="price-button-bg shadow-xl text-white psx-10 pys-3 rounded-full transition-all duration-300 relative overflow-hidden min-w-[50px]" style={{ letterSpacing: "-0.04em" }}>
          <a
            href="#pricing"
            className="relative shadow-xl shadow-black/20 inline-flex items-center justify-center text-sm font-small px-3 py-3 rounded-full min-w-[50px] transition-all duration-500 overflow-hidden group text-white  normal-text"
            style={{
              letterSpacing: "-0.03em",
              // backgroundColor: "#E3767B",
              transform: "translateY(0)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            {/* Default text */}
            <span className="transition-all duration-500 group-hover:-translate-y-2 group-hover:opacity-0 inline-block">
              View Plans and Pricing
            </span>

            {/* Hover text */}
            <span className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 opacity-0 group-hover:opacity-100 font-light">
              Get Started
            </span>
          </a>
        </button>
      </div>
    </section>
  );
}
