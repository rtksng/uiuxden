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
      <section className="gradientHeroBg h-screen">
        <Navbar />
        <div>
          <h1 className="text-center text-[90px]  max-w-[1380px] mx-auto font-semibold leading-[128.5%] my-[90px]">
            UIUX den creates product strategy in creative way.
          </h1>
          <div className="flex justify-center">
            <img src={uxsheader} alt="header_image" />
          </div>
        </div>
      </section>
      <section className="my-24">
        <Container>
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-6">
              <h2 className="text-[60px] font-semibold">
                Empowering vision with a bold strategy for impactful ideas.
              </h2>
              <ul className="list-disc">
                {items.map((item, index) => (
                  <li key={index}>
                    <Link
                      to=""
                      className="py-5 border-b-[1px] border-neutral-300 inline-block"
                    >
                      <div className="flex justify-between items-center gap-[94px]">
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
            <div className="col-span-6">
              <img src={strategyBg} alt="strategies" />
            </div>
          </div>
        </Container>
      </section>
      <section>
        <div className="bg-neutral-800 text-white pt-24 pb-[60px]">
          <Container>
            <div className="flex justify-center">
              <img src={onlyLogo} alt="logo" />
            </div>
            <h4 className="text-[60px] text-center font-semibold mt-6">
              Capabilities that make us standout
            </h4>
            <div className="grid grid-cols-5 h-[340px] mt-36 gap-[30px]">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className={`space-y-8 ${index % 2 !== 0 ? "self-end" : ""}`}
                >
                  <img src={capability.icon} alt="icon" />
                  <h5 className="font-semibold text-[30px] linearCapabilities">
                    {capability.title}
                  </h5>
                  <p className="text-lg">{capability.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-44">
              <div className="chart p-10">
                <div className="text-center text-[30px] font-semibold">
                  After UIUXDen’s involvement
                </div>
                <div className="grid grid-cols-2 mt-24 gap-10">
                  <div className=" p-8 border-gray-500 border-[1px] rounded-3xl relative">
                    <div className="absolute bg-secondary-light px-4 py-[6px] rounded-lg -top-5">
                      Before
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-[22px] font-semibold ">
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
                          <div className="h-[186px] w-[78px] mx-auto bg-secondary-light3 bar mb-4"></div>
                          <div className="label font-semibold text-center">
                            Disorganized Structure
                          </div>
                        </div>
                        <div className="data ">
                          <div className="value font-semibold text-center mb-2">
                            40%
                          </div>
                          <div className="h-[110px] w-[78px] mx-auto bg-secondary-light3 bar mb-4"></div>
                          <div className="label font-semibold text-center">
                            Visual Design
                          </div>
                        </div>
                        <div className="data ">
                          <div className="value font-semibold text-center mb-2">
                            30%
                          </div>
                          <div className="h-[90px] w-[78px] mx-auto bg-secondary-light3 bar mb-4"></div>
                          <div className="label font-semibold text-center">
                            Inclusive Design
                          </div>
                        </div>
                        <div className="data ">
                          <div className="value font-semibold text-center mb-2">
                            65%
                          </div>
                          <div className="h-[165px] w-[78px] mx-auto bg-secondary-light3 bar mb-4"></div>
                          <div className="label font-semibold text-center">
                            Bounce Rate
                          </div>
                        </div>
                        <div className="data ">
                          <div className="value font-semibold text-center mb-2">
                            20%
                          </div>
                          <div className="h-[60px] w-[78px] mx-auto bg-secondary-light3 bar mb-4"></div>
                          <div className="label font-semibold text-center">
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
