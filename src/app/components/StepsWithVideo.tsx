import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function StepsWithVideo() {
  const [activeStep, setActiveStep] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.src = steps[activeStep].video;
      video.play();
    }
  }, [activeStep]);

  return (
    <section className="border-dashed border-b-[1.5px] border-black/20 flex justify-center">
      <div className="max-w-6xl mx-auto w-full border-dashed border-x-[1.5px] border-black/20">
        
        {/* Heading */}
        <div className="max-w-sm mx-auto mb-14 text-center">
          <h2 className="text-4xl font-bold mb-4 text-black">
            How simple it can be to get your Projects Done
          </h2>
          <p className="text-md text-black mx-auto">
            Just step away from those traditional old methods of hiring plus managing and see for yourself
          </p>
        </div>

        {/* Content Grid */}
        <div className="py-6 px-4 grid md:grid-cols-2 gap-10 items-stretch">
          
          {/* LEFT: Fixed Video Box */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-black/10 min-h-[340px] flex items-center justify-center">
            {/* Absolute video layer prevents layout jump */}
            <motion.video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
              key={steps[activeStep].id}
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* RIGHT: Steps (Fixed Height) */}
          <div className="space-y-6 min-h-[340px] flex flex-col justify-center">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                whileHover={{
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`p-5 rounded-xl border cursor-pointer ${
                  activeStep === i
                    ? "bg-white shadow-lg border-gray-100"
                    : "bg-gray-100 border-gray-300"
                }`}
                onMouseEnter={() => setActiveStep(i)}
              >
                <h4 className="font-semibold text-base md:text-lg text-black mb-1">
                  Step {step.id}
                </h4>
                <h4 className="font-semibold text-sm text-black">
                  {step.title}
                </h4>
                <p className="text-gray-700 text-sm mt-1">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Example steps data
const steps = [
  {
    id: 1,
    title: "Plan your project",
    desc: "Define milestones and deliverables with clarity.",
    video: "/video/edu.mp4",
  },
  {
    id: 2,
    title: "Assign your team",
    desc: "Pick the right people and set up roles.",
    video: "/video/business.mp4",
  },
  {
    id: 3,
    title: "Track your progress",
    desc: "Get updates in real-time with complete transparency.",
    video: "/video/collab.mp4",
  },
];
