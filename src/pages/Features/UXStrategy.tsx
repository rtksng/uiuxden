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
      <section className="gradientHeroBg h-[50vh] sm:h-[40vh] lg:h-[62vh] xl:h-screen flex items-center justify-center px-3">
        <div>
          <h1 className="text-center text-[24px] sm:text-[38px] lg:text-[48px] 2xl:text-[90px]  lg:max-w-[1380px] mx-auto font-semibold leading-[128.5%] 2xl:py-[60px] md:max-w-[70%]">
            UIUX den creates product strategy in creative way.
          </h1>
          <div className="flex justify-center mt-5 sm:mt-10 lg:mt-20">
            <img src={uxsheader} alt="header_image"className="w-[70%] sm:w-[58%] lg:w-[50%] 2xl:w-[48%]" />
          </div>
        </div>
      </section>
      <section className="2xl:my-24 my-10 sm:my-16 lg:my-20">
        <Container>
          <div className="grid grid-cols-12 lg:gap-24">
            <div className="lg:col-span-6 col-span-12">
              <h2 className="xl:text-[60px] text-[32px] sm:text-[48px] font-semibold leading-[1.2]">
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
                        {/* <GoArrowUpRight size={48} /> */}
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
                  className={`xl:space-y-4 space-y-2 ${index % 2 !== 0 ? "xl:self-end" : ""
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
              <div className="chart 2xl:p-10 !h-auto ">
                <div className="text-center text-[30px] font-semibold">
                  After UIUXDen’s involvement
                </div>
                <div className="grid 2xl:grid-cols-2 md:mt-24 mt-10 gap-10">
                  <div
                    className="py-3 min-h-[422px] md:px-4 xl:p-5 2xl:p-8 md:border-gray-500 md:border-[1px] rounded-3xl relative" >
                    <div
                      className="absolute bg-secondary-light px-4 py-[6px] rounded-lg -top-5">
                      Before
                    </div>
                    <div className="flex justify-between items-center mt-4 md:mt-0">
                      <div
                        className="text-[18px[ sm:text-[22px] font-semibold ">
                        Limited Growth Potential
                      </div>
                      <div
                        className="allOverValue border p-2  rounded-lg font-semibold flex items-center gap-2">
                        <LuArrowDown className="text-red-400" />
                        70%
                      </div>
                    </div>
                    <div className="mt-10">
                      <div className="grid grid-cols-5 items-end">
                        {/* ----- bar 1 ---- */}
                        <div className="data ">
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.2,
                              delay: 0.8,
                              ease: "easeInOut"
                            }}
                            className="value font-semibold text-center mb-2">
                            70%
                          </motion.div>
                          <div className="flex items-end">
                            <div className="h-[186px] w-1 sm:w-12 md:w-[1px] opacity-0 bar mb-4"></div>
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              whileInView={{ opacity: 1, height: 186 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.5,
                                ease: "easeInOut"
                              }}
                              className="h-[186px] w-8 sm:w-12 md:w-[78px] mx-auto bg-secondary-light3 bar md:mb-4">

                            </motion.div>
                          </div>
                          <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 0,
                              ease: "easeInOut"
                            }}
                            className="label font-semibold text-center text-xs !-rotate-45 md:text-base md:!-rotate-0 h-10 mt-10 md:mt-0">
                            Disorganized Structure
                          </motion.div>
                        </div>
                        {/* ----- bar 2 ---- */}
                        <div className="data ">
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.2,
                              delay: 1.4,
                              ease: "easeInOut"
                            }}
                            className="value font-semibold text-center mb-2 ">
                            40%
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            whileInView={{ opacity: 1, height: 110 }}
                            transition={{
                              duration: 0.3,
                              delay: 1.2,
                              ease: "easeInOut"
                            }}
                            className="h-[110px] w-8 sm:w-12 md:w-[78px] mx-auto bg-secondary-light3 bar mb-4"></motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 1,
                              ease: "easeInOut"
                            }}
                            className="label font-semibold text-center text-xs !-rotate-45 md:text-base md:!-rotate-0 h-10 mt-10 md:mt-0">
                            Visual Design
                          </motion.div>
                        </div>
                        {/* ----- bar 3 ---- */}
                        <div className="data ">
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.2,
                              delay: 2,
                              ease: "easeInOut"
                            }}
                            className="value font-semibold text-center mb-2 ">
                            30%
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            whileInView={{ opacity: 1, height: 90 }}
                            transition={{
                              duration: 0.3,
                              delay: 1.8,
                              ease: "easeInOut"
                            }}
                            className="h-[90px] w-8 sm:w-12 md:w-[78px] mx-auto bg-secondary-light3 bar mb-4"></motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 1.6,
                              ease: "easeInOut"
                            }}
                            className="label font-semibold text-center text-xs !-rotate-45 md:text-base md:!-rotate-0 h-10 mt-10 md:mt-0">
                            Inclusive Design
                          </motion.div>
                        </div>
                        {/* ----- bar 4 ---- */}
                        <div className="data ">
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.2,
                              delay: 2.6,
                              ease: "easeInOut"
                            }}
                            className="value font-semibold text-center mb-2">
                            65%
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            whileInView={{ opacity: 1, height: 165 }}
                            transition={{
                              duration: 0.3,
                              delay: 2.4,
                              ease: "easeInOut"
                            }}
                            className="h-[165px] w-8 sm:w-12 md:w-[78px] mx-auto bg-secondary-light3 bar mb-4"></motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 2.2,
                              ease: "easeInOut"
                            }}
                            className="label font-semibold text-center text-xs !-rotate-45 md:text-base md:!-rotate-0 h-10 mt-10 md:mt-0">
                            Bounce Rate
                          </motion.div>
                        </div>
                        {/* ----- bar 5 ---- */}
                        <div className="data ">
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.2,
                              delay: 3.2,
                              ease: "easeInOut"
                            }}
                            className="value font-semibold text-center mb-2">
                            20%
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            whileInView={{ opacity: 1, height: 60 }}
                            transition={{
                              duration: 0.3,
                              delay: 3,
                              ease: "easeInOut"
                            }}
                            className="h-[60px] w-8 sm:w-12 md:w-[78px] mx-auto bg-secondary-light3 bar mb-4"></motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 2.8,
                              ease: "easeInOut"
                            }}
                            className="label font-semibold text-center text-xs !-rotate-45 md:text-base md:!-rotate-0 h-10 mt-10 md:mt-0">
                            Revenue
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* --------------------- 2 ------------------ */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 3.4,
                      ease: "easeInOut"
                    }}
                    className="py-3 min-h-[422px] md:px-4 xl:p-5 2xl:p-8 md:border-gray-500 md:border-[1px] rounded-3xl relative" >
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 3.6,
                        ease: "easeInOut"
                      }}
                      className="absolute bg-secondary-light px-4 py-[6px] rounded-lg -top-5">
                      After
                    </motion.div>
                    <div className="flex justify-between items-center mt-4 md:mt-0">
                      <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 3.8,
                          ease: "easeInOut"
                        }}
                        className="text-[18px[ sm:text-[22px] font-semibold ">
                        Transformative Results with UIUXDen
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 3.8,
                          ease: "easeInOut"
                        }}
                        className="allOverValue border p-2  rounded-lg font-semibold flex items-center gap-2">
                        <LuArrowDown className="text-green-400 rotate-180" />
                        85%
                      </motion.div>
                    </div>
                    <div className="mt-10">
                      <div className="grid grid-cols-5 items-end">
                        {/* ----- bar 1 ---- */}
                        <div className="data ">
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.2,
                              delay: 4.4,
                              ease: "easeInOut"
                            }}
                            className="value font-semibold text-center mb-2">
                            20%
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            whileInView={{ opacity: 1, height: 42 }}
                            transition={{
                              duration: 0.3,
                              delay: 4.2,
                              ease: "easeInOut"
                            }}
                            className="h-[42px] w-8 sm:w-12 md:w-[78px] mx-auto bg-secondary-light3 bar mb-4">

                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 4,
                              ease: "easeInOut"
                            }}
                            className="label font-semibold text-center text-xs !-rotate-45 md:text-base md:!-rotate-0 h-10 mt-10 md:mt-0">
                            Disorganized Structure
                          </motion.div>
                        </div>
                        {/* ----- bar 2 ---- */}
                        <div className="data ">
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.2,
                              delay: 5,
                              ease: "easeInOut"
                            }}
                            className="value font-semibold text-center mb-2 ">
                            90%
                          </motion.div>
                          <div className="flex items-end">
                            <div className="h-[222px] w-1 sm:w-12 md:w-[1px] opacity-0 bar mb-4"></div>
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              whileInView={{ opacity: 1, height: 222 }}
                              transition={{
                                duration: 0.3,
                                delay: 4.8,
                                ease: "easeInOut"
                              }}
                              className="h-[222px] w-8 sm:w-12 md:w-[78px] mx-auto bg-secondary-light3 bar md:mb-4"></motion.div>
                          </div>
                          <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 4.6,
                              ease: "easeInOut"
                            }}
                            className="label font-semibold text-center text-xs !-rotate-45 md:text-base md:!-rotate-0 h-10 mt-10 md:mt-0">
                            Visual Design
                          </motion.div>
                        </div>
                        {/* ----- bar 3 ---- */}
                        <div className="data ">
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.2,
                              delay: 5.6,
                              ease: "easeInOut"
                            }}
                            className="value font-semibold text-center mb-2 ">
                            85%
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            whileInView={{ opacity: 1, height: 204 }}
                            transition={{
                              duration: 0.3,
                              delay: 5.4,
                              ease: "easeInOut"
                            }}
                            className="h-[204x] w-8 sm:w-12 md:w-[78px] mx-auto bg-secondary-light3 bar mb-4"></motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 5.2,
                              ease: "easeInOut"
                            }}
                            className="label font-semibold text-center text-xs !-rotate-45 md:text-base md:!-rotate-0 h-10 mt-10 md:mt-0">
                            Inclusive Design
                          </motion.div>
                        </div>
                        {/* ----- bar 4 ---- */}
                        <div className="data ">
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.2,
                              delay: 6.2,
                              ease: "easeInOut"
                            }}
                            className="value font-semibold text-center mb-2">
                            25%
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            whileInView={{ opacity: 1, height: 56 }}
                            transition={{
                              duration: 0.3,
                              delay: 6,
                              ease: "easeInOut"
                            }}
                            className="h-[56px] w-8 sm:w-12 md:w-[78px] mx-auto bg-secondary-light3 bar mb-4"></motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 5.8,
                              ease: "easeInOut"
                            }}
                            className="label font-semibold text-center text-xs !-rotate-45 md:text-base md:!-rotate-0 h-10 mt-10 md:mt-0">
                            Bounce Rate
                          </motion.div>
                        </div>
                        {/* ----- bar 5 ---- */}
                        <div className="data ">
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.2,
                              delay: 6.8,
                              ease: "easeInOut"
                            }}
                            className="value font-semibold text-center mb-2">
                            70%
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            whileInView={{ opacity: 1, height: 186 }}
                            transition={{
                              duration: 0.3,
                              delay: 6.6,
                              ease: "easeInOut"
                            }}
                            className="h-[186px] w-8 sm:w-12 md:w-[78px] mx-auto bg-secondary-light3 bar mb-4"></motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 6.4,
                              ease: "easeInOut"
                            }}
                            className="label font-semibold text-center text-xs !-rotate-45 md:text-base md:!-rotate-0 h-10 mt-10 md:mt-0">
                            Revenue
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

              </div>
            </div>
          </Container>
        </div>
      </section>
      <div className="lg:mt-24 mt-10 md:mt-20">
        <CaseStudyCarousel />
      </div>
      <Footer />
    </main>
  );
};

export default UXStrategy;
