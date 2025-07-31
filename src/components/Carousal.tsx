import React, { useEffect, useRef, useState } from "react";
import carousalimg1 from "../assets/design-sprint/carousal-image-1.png";
import carousalimg2 from "../assets/design-sprint/carousal-image-2.png";
import carousalimg3 from "../assets/design-sprint/carousal-image-3.png";
import carousalimg4 from "../assets/design-sprint/carousal-image-4.png";
import carousalimg5 from "../assets/design-sprint/carousal-image-5.png";

const steps = [
  {
    title: "Discover",
    description:
      "Together, we explore your business and audience, identifying key challenges and opportunities. This step lays a shared foundation for impactful solutions.",
    image: carousalimg1,
    url: "#",
  },
  {
    title: "Define",
    description:
      "We collaborate to generate innovative ideas, combining your expertise with our creative approach to design tailored solutions.",
    image: carousalimg2,
    url: "#",
  },
  {
    title: "Define",
    description:
      "Working side by side, we narrow down ideas and craft a clear plan that aligns with your vision and goals. Every step is a joint effort to ensure success.",
    image: carousalimg3,
    url: "#",
  },
  {
    title: "Prototype",
    description:
      "We bring our collective ideas to life by building an interactive prototype that represents the solution. It’s the first glimpse of what we’re creating together.",
    image: carousalimg4,
    url: "#",
  },
  {
    title: "Validate",
    description:
      "Through real user testing, we gather feedback to refine the solution. Together, we ensure it’s practical, effective, and ready to make an impact.",
    image: carousalimg5,
    url: "#",
  },
];

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 3000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearTimers();
  }, []);

  const handleManualClick = (index: number) => {
    clearTimers(); 
    setActiveIndex(index);
    timeoutRef.current = setTimeout(() => {
      startAutoSlide(); 
    }, 3500);
  };

  const nextStep = () => handleManualClick((activeIndex + 1) % steps.length);
  const prevStep = () =>
    handleManualClick((activeIndex - 1 + steps.length) % steps.length);

  const getPositionStyle = (index: number) => {
    const total = steps.length;
    const diff = (index - activeIndex + 2 + total) % total;
    const angle = (180 / total) * diff;
    const radius = -360;
    const rad = (angle * Math.PI) / 140;
    const x = Math.cos(rad) * radius - 25;
    const y = Math.sin(rad) * radius * -0.1;

    return {
      transform: `translate(${x}px, ${y}px)`,
      transition: "all 1s cubic-bezier(0.25, 0.8, 0.25, 1)",
      position: "absolute" as const,
      zIndex: index === activeIndex ? 10 : 1,
      top: "50%",
      left: "50%",
      transformOrigin: "center",
      willChange: "transform, opacity",
    };
  };

  return (
    <div className="custom-carousalsec relative w-full h-[610px]">
      {/* Arrows */}
      <button
        onClick={prevStep}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white text-black px-3 py-1 rounded-full md:hidden"
      >
        &#8592;
      </button>
      <button
        onClick={nextStep}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white text-black px-3 py-1 rounded-full md:hidden"
      >
        &#8594;
      </button>

      {steps.map((step, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={index}
            style={getPositionStyle(index)}
            className={`transition-all duration-1000 ease-in-out ${
              !isActive ? "hidden md:block" : ""
            }`}
          >
            <div
              className={`absolute transition-all duration-700 ease-in-out ${
                isActive
                  ? "opacity-100 scale-100 z-10 translate-x-[-130px] translate-y-[-260px]"
                  : "opacity-0 scale-[.10] z-0 translate-x-[-110px] translate-y-[-125px]"
              }`}
            >
              <div className="w-[300px]">
                <div className="relative">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full object-cover rounded-xl mb-4"
                  />
                </div>
                <h3 className="text-[20px] text-white font-bold">
                  {step.title}
                </h3>
                <p className="font-normal text-white mt-[12px]">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Clickable circular number */}
            <div
              onClick={() => handleManualClick(index)}
              style={{ cursor: "pointer" }}
              className={`absolute transition-all duration-700 ease-in-out hidden md:flex ${
                !isActive
                  ? "opacity-100 scale-100 z-5"
                  : "opacity-0 scale-75 z-0"
              }`}
            >
              <div
                className={`w-14 h-14 text-white text-[20px] font-medium flex items-center justify-center ${
                  activeIndex === index ? "scale-110" : ""
                }`}
              >
                0{index + 1}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
