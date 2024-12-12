import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CaseStudyCarousel from "../../components/Homepage/CaseStudyCarousel";
import uxsheader from "../../assets/uxsheader.png";
import { GoArrowUpRight } from "react-icons/go";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import strategyBg from "../../assets/strategyBg.png";
import onlyLogo from "../../assets/onlyLogo.svg";
import userHeart from "../../assets/userHeart.svg";
import brain from "../../assets/brain.svg";
import plantinhand from "../../assets/PlantInHand.svg";
import ux from "../../assets/ux.svg";
import divider from "../../assets/divider.svg";
import { motion } from "framer-motion";
import { LuArrowDown } from "react-icons/lu";
const UXStrategy = () => {
  const items = [
    {
      title: "Vision or statement(s) of intent",
      description:
        "Every journey starts with a vision. We help define goals, ensuring every step aligns with product mission.",
    },
    {
      title: "Goals and measures",
      description:
        "Metrics that matter. We track progress with KPIs customize objective, turning data into decisions.",
    },
    {
      title: "Plan",
      description:
        "From concept to reality, we bridge the gap. Our planning process is designed to bring clarity, structure, and momentum to vision.",
    },
    {
      title: "Ideate",
      description:
        "Think, Create, and Innovate. Our experts craft ideas to stand out and resonate with audience.",
    },
  ];
  const capabilities = [
    {
      icon: userHeart,
      title: "Understanding customer desirability",
      description:
        "We don’t just design products, we decode human desires. Our empathy approach doesn’t just solve problems - it creates emotional connections.",
    },
    {
      icon: brain,
      title: "Innovation Without Boundaries",
      description:
        "We push the limits of innovation and creativity to make better products.",
    },
    {
      icon: plantinhand,
      title: "Sustainable Design Ecosystem",
      description:
        "Our approach goes beyond digital. We create solutions and educate to minimize digital carbon footprint.",
    },
    {
      icon: ux,
      title: "Seamless User Experience",
      description:
        "We craft user journeys that are smooth, enjoyable, intuitive, and reducing friction.",
    },
    {
      icon: divider,
      title: "Adaptive Business Pivoting",
      description:
        "We help businesses pivot seamlessly to adapt to emerging trends and market shifts.",
    },
  ];

  return (
    <main>
      <Navbar />
      <section className="gradientHeroBg h-screen flex items-center justify-center px-3">
        <div>
          <h1 className="text-center text-[24px] sm:text-[38px] lg:text-[48px] 2xl:text-[90px]  max-w-[1380px] mx-auto font-semibold leading-[128.5%] 2xl:py-[90px]">
            UIUX den creates product strategy in creative way.
          </h1>
          <div className="flex justify-center mt-5 sm:mt-10 lg:mt-20">
            <img src={uxsheader} alt="header_image" />
          </div>
        </div>
      </section>
      <section className="2xl:my-24 my-10 sm:my-16 lg:my-20">
        <Container>
          <div className="grid grid-cols-12 lg:gap-24">
            <div className="lg:col-span-6 col-span-12">
              <h2 className="xl:text-[60px] text-[32px] sm:text-[48px] font-semibold">
                Empowering vision with a bold strategy for impactful ideas.
              </h2>
              <ul className="list-disc">
                {items.map((item, index) => (
                  <li key={index}>
                    <Link
                      to=""
                      className="py-5 border-b-[1px] border-neutral-300 inline-block"
                    >
                      <div className="flex flex-wrap lg:flex-nowrap  justify-between items-center 2xl:gap-[94px]">
                        <div>
                          <div className="text-[20px] font-medium">
                            {item.title}
                          </div>
                          <p className="mt-3 text-neutral-500">
                            {item.description}
                          </p>
                        </div>
                        <GoArrowUpRight size={48} />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6 col-span-12 hidden lg:block">
              <img src={strategyBg} alt="strategies" />
            </div>
          </div>
        </Container>
      </section>
      <section>
        <div className="bg-neutral-800 text-white pt-5 pb-5 xl:pt-24 xl:pb-[60px]">
          <Container>
            <div className="flex justify-center">
              <img src={onlyLogo} alt="logo" />
            </div>
            <h4 className="xl:text-[60px] text-[32px] sm:text-[48px] text-center font-semibold mt-6">
              Capabilities that make us standout
            </h4>
            <div className="grid  xl:grid-cols-5 xl:h-[340px] xl:mt-36 mt-8 sm:mt-8 md:mt-16 gap-[30px]">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className={`xl:space-y-8 space-y-2 ${
                    index % 2 !== 0 ? "xl:self-end" : ""
                  }`}
                >
                  <img src={capability.icon} alt="icon" />
                  <h5 className="font-semibold text-[24px] sm:text-[30px] linearCapabilities">
                    {capability.title}
                  </h5>
                  <p className="text-lg">{capability.description}</p>
                </div>
              ))}
            </div>
            <div className="2xl:mt-44 mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24">
              <div className="chart 2xl:p-10 ">
                <div className="text-center text-[30px] font-semibold">
                  After UIUXDen’s involvement
                </div>
                <div className="grid 2xl:grid-cols-2 md:mt-24 mt-10 gap-10">
                  <div className=" py-3 md:px-4 xl:p-5 2xl:p-8 md:border-gray-500 md:border-[1px] rounded-3xl relative">
                    <div className="absolute bg-secondary-light px-4 py-[6px] rounded-lg -top-5">
                      Before
                    </div>
                    <div className="flex justify-between items-center mt-4 md:mt-0">
                      <div className="text-[18px[ sm:text-[22px] font-semibold ">
                        Limited Growth Potential
                      </div>
                      <div className="allOverValue border p-2  rounded-lg font-semibold flex items-center gap-2">
                        <LuArrowDown className="text-red-400" />
                        70%
                      </div>
                    </div>
                    <div className="mt-10">
                      <div className="grid grid-cols-5 items-end">
                        <div className="data ">
                          <div className="value font-semibold text-center mb-2">
                            70%
                          </div>
                          <div className="h-[186px] w-8 sm:w-12 md:w-[78px] mx-auto bg-secondary-light3 bar mb-4"></div>
                          <div className="label font-semibold text-center text-xs -rotate-45 md:text-base md:-rotate-0 h-10 mt-10 md:mt-0">
                            Disorganized Structure
                          </div>
                        </div>
                        <div className="data ">
                          <div className="value font-semibold text-center mb-2 ">
                            40%
                          </div>
                          <div className="h-[110px] w-8 sm:w-12 md:w-[78px] mx-auto bg-secondary-light3 bar mb-4"></div>
                          <div className="label font-semibold text-center text-xs -rotate-45 md:text-base md:-rotate-0 h-10 mt-10 md:mt-0">
                            Visual Design
                          </div>
                        </div>
                        <div className="data ">
                          <div className="value font-semibold text-center mb-2 ">
                            30%
                          </div>
                          <div className="h-[90px] w-8 sm:w-12 md:w-[78px] mx-auto bg-secondary-light3 bar mb-4"></div>
                          <div className="label font-semibold text-center text-xs -rotate-45 md:text-base md:-rotate-0 h-10 mt-10 md:mt-0">
                            Inclusive Design
                          </div>
                        </div>
                        <div className="data ">
                          <div className="value font-semibold text-center mb-2">
                            65%
                          </div>
                          <div className="h-[165px] w-8 sm:w-12 md:w-[78px] mx-auto bg-secondary-light3 bar mb-4"></div>
                          <div className="label font-semibold text-center text-xs -rotate-45 md:text-base md:-rotate-0 h-10 mt-10 md:mt-0">
                            Bounce Rate
                          </div>
                        </div>
                        <div className="data ">
                          <div className="value font-semibold text-center mb-2">
                            20%
                          </div>
                          <div className="h-[60px] w-8 sm:w-12 md:w-[78px] mx-auto bg-secondary-light3 bar mb-4"></div>
                          <div className="label font-semibold text-center text-xs -rotate-45 md:text-base md:-rotate-0 h-10 mt-10 md:mt-0">
                            Revenue
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <div className="mt-24">
        <CaseStudyCarousel />
      </div>
      <Footer />
    </main>
  );
};

export default UXStrategy;
