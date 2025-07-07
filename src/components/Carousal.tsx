import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextStep = () => {
    setActiveIndex((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setActiveIndex((prev) => (prev - 1 + steps.length) % steps.length);
  };

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
      {/* Arrows (only on small screens) */}
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
            className={`
              transition-all duration-1000 ease-in-out 
              ${!isActive ? "hidden md:block" : ""}
            `}
          >
            {/* Card Content */}
            <div
              className={`
                absolute transition-all duration-700 ease-in-out
                ${isActive
                  ? "opacity-100 scale-100 z-10 translate-x-[-130px] translate-y-[-260px]"
                  : "opacity-0 scale-[.10] z-0 translate-x-[-110px] translate-y-[-125px]"}
              `}
            >
              <div className="w-[300px]">
                <div className="relative">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full object-cover rounded-xl mb-4"
                  />
                  <a
                    target="_blank"
                    href={step.url}
                    className="w-[80px] h-[80px] bg-contactus-gradient flex items-center justify-center rounded-full border-[6px] border-[#2D2D2D] absolute top-[-15px] right-[-30px]"
                  >
                    <svg
                      width="42"
                      height="26"
                      viewBox="0 0 42 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.14581 21.0324L15.5638 25.6408C16.2654 25.924 17.0622 25.5853 17.3453 24.8859C17.6283 24.1866 17.2909 23.3901 16.5893 23.1069L5.1713 18.4985C4.9442 18.4069 4.73703 18.2879 4.54899 18.1471L40.5781 2.87939C41.2746 2.58422 41.5987 1.78351 41.3031 1.08793C41.1557 0.741028 40.8812 0.485786 40.5564 0.354702C40.2316 0.223618 39.8566 0.216694 39.5092 0.3639L3.48011 15.6316C3.50889 15.4001 3.56766 15.1673 3.65944 14.9405L8.27415 3.53809C8.55718 2.83873 8.2198 2.04226 7.51822 1.7591C6.81665 1.47594 6.01984 1.81464 5.73681 2.51399L1.1221 13.9165C-0.00901143 16.7113 1.34712 19.9028 4.14581 21.0324Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </div>
                <h3 className="text-[20px] text-white font-bold">
                  {step.title}
                </h3>
                <p className="font-normal text-white mt-[12px]">
                  {step.description}
                </p>  
              </div>
            </div>

            {/* Circle Placeholder - Hidden on small screens */}
            <div
              className={`
                absolute transition-all duration-700 ease-in-out hidden md:flex
                ${!isActive ? "opacity-100 scale-100 z-5" : "opacity-0 scale-75 z-0"}
              `}
            >
              <div className="w-14 h-14 text-white text-[20px] font-medium flex items-center justify-center">
                {0}
                {index + 1}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
