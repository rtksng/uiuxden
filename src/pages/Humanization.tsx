import Navbar from "../components/Navbar";
import rightLongArrow from "../assets/right-long-arrow.svg";
import rightBar from "../assets/rightbar.png";
import Container from "../components/Container";
import { useEffect, useState } from "react";
import HumanCentered from "../assets/humanization/human-centered-banner.png";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SVGAnimation from "../components/StrokeAnimation";
import ClunkyBg from "../assets/clunkybg.png";
import TransformingSliderFirst from "../assets/humanization/human-cetered-first-slide.png";
import Heroimage from "../assets/humanization/hero-main-banner.png";
import Empathy from "../assets/humanization/empathy-icon.svg";
import Emothional from "../assets/humanization/emothional-icon.svg";
import Engaging from "../assets/humanization/engaging-icon.svg";
import Adaptability from "../assets/humanization/adaptability-icon.svg";
import CaseStudyCarousel from "../components/Homepage/CaseStudyCarousel";
import { Link } from "react-router-dom";

const Humanization = () => {
    const consultData = {
        heading: "Ready to Elevate Your",
        subheading: "User",
        boldsubheading: "Experience?",
        buttonText: "Schedule a Consultation",
    };

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const pagination = {
        clickable: true,
        renderBullet: (index: number, className: string) => {
            return `<span class="${className}">${index + 1}</span>`;
        },
    };

    return (
        <main>
            <Navbar />
            <div
                className={`fixed top-0 left-0 w-full z-[120] transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"
                    }`}
            ></div>
            <Navbar />

            <div className="relative h-[auto] lg:h-[84vh] xl:h-[100vh] green-linear py-12">
                <Container>
                    <div className="text-center pt-[80px] sm:pt-[100px] xl:pt-[90px] flex flex-col items-center">
                        <h1 className="text-[34px] sm:text-[48px] max-w-[1400px] lg:text-[46px] xl:text-[56px]  2xl:text-[90px] text-black  font-semibold mb-base">
                            UIUXDen, Designing for Humans, Not Just Users
                        </h1>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-4 xl:gap-6 w-full mt-4 sm:mt-[50px] lg:mt-[80px] xl:mt-[40px] 2xl:mt-[50px] ">
                        <img
                            src={Heroimage}
                            className=" max-w-[90%] sm:max-w-[46%] xl:max-w-[43%] h-auto"
                        />
                    </div>

                    <div className="lg:absolute bottom-5 left-2  2xl:left-9 text-center lg:text-start mt-3 sm:mt-8 xl:mt-0 ">
                        <div className="xl:flex xl:items-center">
                            <img
                                src={rightLongArrow}
                                alt="arrow"
                                width={50}
                                className="hidden lg:block xl:mx-auto"
                            />
                            <div className="ml-3">
                                <h6 className="text-[14px] sm:text-[16px] xl:text-[18px] text-black font-normal">
                                    Home | Humanization
                                </h6>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="py-8 lg:py-20 xl:pt-[120px] xl:pb-[140px]">
                <Container>
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 xl:col-span-7 xl:col-span-7 ">
                            <h5 className=" text-center xl:text-start text-[24px] sm:text-[42px] 2xl:text-[60px] font-semibold 2xl:mr-[100px] text-primary-dark2">
                                HumanizeUX Believes in the Power of{""}
                                <span className="animationStroke w-fit h-fit inline-block mx-1">
                                    <SVGAnimation nameOfClass="svg-container pl-4 human-centered" />{" "}
                                    Human-Centered{" "}
                                </span>{" "}       Design
                            </h5>
                            <p className="text-[18px] text-center xl:text-start sm:text-[24px] 2xl:text-[28px] font-medium text-primary-dark2 mt-4 xl:mt-8 ">
                                At UIUX den, we believe that great design goes beyond aesthetics—it’s about creating experiences that feel intuitive, meaningful, and deeply human. Our UI/UX services are built on the principle of humanization, putting people at the heart of every interaction, interface, and innovation.
                            </p>
                            <div className="flex justify-center xl:justify-start mb-6 xl:mb-0">
                                <Button
                                    variant="primary"
                                    className="border !px-5 2xl:!px-[24px] !py-3 2xl:!py-[18px] text-sm 2xl:text-base border-primary-dark2 mt-5 xl:mt-[70px]  !ring-0 text-primary-dark2 hover:text-primary-dark2 rounded-full">
                                    Learn More About Our Philosophy
                                </Button>
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-5 xl:col-span-5">
                            <img
                                src={HumanCentered}
                                alt="Image"
                                className="xl:pl-8 max-w-[80%] md:max-w-[60%] lg:max-w-full mx-auto xl:mx-0"
                            />
                        </div>

                    </div>
                </Container>
            </div>

            <div className="bg-[#2D2D2D] py-12 2xl:pt-[80px] 2xl:pb-[150px]">
                <Container>
                    <div className="sm:text-center flex flex-col items-center mb-7 sm:mb-20 text-white">
                        <h1 className="text-[24px] sm:text-[42px] 2xl:text-[60px] max-w-[1250px]  text-white  font-semibold mb-base">
                            UIUXDen Unlocks the Full Potential of{""} <br />
                            <span className="animationStroke w-fit h-fit inline-block mx-1">
                                <SVGAnimation nameOfClass="svg-container pl-4 potential-human" />{" "}
                                Human{" "}
                            </span>{" "}-Centered Design
                        </h1>
                    </div>
                    <div className="border-b border-t border-white py-4 xl:py-9 ">
                        <div className="grid grid-cols-12 gap-4 lg:gap-[40px] items-center ">
                            <div className="col-span-12 lg:col-span-7  xl:col-span-8 ">
                                <div className="lg:flex items-center gap-10">
                                    <img
                                        src={Empathy}
                                        className="w-[60px] 2xl:w-[89px] h-auto mb-2 lg:mb-0 "
                                        alt="bar"
                                    />
                                    <h5 className="text-[20px] sm:text-[24px] 2xl:text-[30px] text-white font-semibold">
                                        Designing with Empathy
                                    </h5>
                                </div>

                            </div>

                            <div className="col-span-12 lg:col-span-5  xl:col-span-4 2xl:col-span-3 ">
                                <p className="text-[18px] text-white font-normal">
                                    We conduct user research to understand real needs, behaviors, and emotions.
                                </p>
                            </div>
                        </div>


                    </div>

                    <div className="border-b border-t border-white py-4 xl:py-9 ">
                        <div className="grid grid-cols-12  gap-4 lg:gap-[40px] items-center ">
                            <div className="col-span-12 lg:col-span-7  xl:col-span-8 ">
                                <div className="lg:flex items-center gap-10">
                                    <img
                                        src={Emothional}
                                        className="w-[60px] 2xl:w-[89px] h-auto mb-2 lg:mb-0 "
                                        alt="bar"
                                    />
                                    <h5 className="text-[20px] sm:text-[24px] 2xl:text-[30px] text-white font-semibold">
                                        Emotional & Inclusive Design
                                    </h5>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-5  xl:col-span-4 2xl:col-span-3 ">
                                <p className="text-[18px] text-white font-normal">
                                    Ensuring accessibility, diversity, and an emotional connection in every interaction.
                                </p>
                            </div>
                        </div>


                    </div>
                    <div className="border-b border-t border-white py-4 xl:py-9 ">
                        <div className="grid grid-cols-12  gap-4 lg:gap-[40px] items-center ">
                            <div className="col-span-12 lg:col-span-7  xl:col-span-8 ">
                                <div className="lg:flex items-center gap-10">
                                    <img
                                        src={Engaging}
                                        className="w-[60px] 2xl:w-[89px] h-auto mb-2 lg:mb-0 "
                                        alt="bar"
                                    />
                                    <h5 className="text-[20px] sm:text-[24px] 2xl:text-[30px] text-white font-semibold">
                                        Engaging Micro-Interactions
                                    </h5>
                                </div>

                            </div>

                            <div className="col-span-12 lg:col-span-5  xl:col-span-4 2xl:col-span-3 ">
                                <p className="text-[18px] text-white font-normal">
                                    Adding subtle animations and feedback to make experiences feel lively.
                                </p>
                            </div>
                        </div>


                    </div>
                    <div className="border-b border-t border-white py-4 xl:py-9 ">
                        <div className="grid grid-cols-12 gap-4 lg:gap-[40px] items-center ">
                            <div className="col-span-12 lg:col-span-7  xl:col-span-8 ">
                                <div className="lg:flex items-center gap-10">
                                    <img
                                        src={Adaptability}
                                        className="w-[60px] 2xl:w-[89px] h-auto mb-2 lg:mb-0 "
                                        alt="bar"
                                    />
                                    <h5 className="text-[20px] sm:text-[24px] 2xl:text-[30px] text-white font-semibold">
                                        Personalization & Adaptability
                                    </h5>
                                </div>

                            </div>

                            <div className="col-span-12 lg:col-span-5  xl:col-span-4 2xl:col-span-3 ">
                                <p className="text-[18px] text-white font-normal">
                                    Leveraging AI and user data to create tailored digital experiences.
                                </p>
                            </div>
                        </div>


                    </div>
                    <div className="flex justify-center mt-4 sm:mt-9 2xl:mt-[72px]">
                        <Link
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}
                            to={"/contact-us"}
                        >
                            <Button
                                variant="secondary"
                                className="border !px-5 2xl:!px-[24px] !py-3 2xl:!py-[18px] text-sm 2xl:text-base border-white sm:mt-5 md:mt-0  !ring-0 white hover:text-primary-dark2 rounded-full text-white" >
                                Consult Us Now
                            </Button>
                        </Link>

                    </div>


                </Container>
            </div>

            <section className="py-10 lg:py-20 2xl:py-[100px]">
                <Container>
                    <div className="grid grid-cols-12 xl:grid-cols-12 mb-4 lg:mb-8 2xl:mb-[70px]">
                        <div className=" col-span-12 sm:col-span-10 xl:col-span-10">
                            <h2 className=" text-[24px] sm:text-[42px] 2xl:text-[84px] font-semibold text-primary-dark2">
                                Why Humanization Matters?
                            </h2>
                        </div>
                        <div className=" hidden xl:block col-span-1">
                        </div>
                    </div>

                    <div className="grid xl:hidden grid-cols-12 xl:grid-cols-10">
                        <div className="col-span-12 sm:col-span-6  p-3 sm:p-6 xl:p-[30px] ">
                            <div className="text-primary-dark2 ">
                                <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                    User Engagement
                                </h5>
                                <p className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                    Personalizing interactions fosters deeper connections, making users feel valued and understood, ultimately increasing engagement and retention.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6  p-3 sm:p-6 xl:p-[30px] ">
                            <div className="text-primary-dark2 ">
                                <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                    Retention & Loyalty
                                </h5>
                                <p className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                    Human-centered experiences create authenticity, strengthening relationships and encouraging long-term trust between brands and their audience.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6  p-3 sm:p-6 xl:p-[30px] ">
                            <div className="text-primary-dark2 ">
                                <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                    Improves Decision-Making
                                </h5>
                                <p className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                    Understanding human emotions and behaviors allows businesses to design solutions that truly resonate with their users, leading to more effective decision-making.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6  p-3 sm:p-6 xl:p-[30px] ">
                            <div className="text-primary-dark2 ">
                                <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                    Drives Meaningful Innovation
                                </h5>
                                <p className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                    Humanization fuels innovation by focusing on real needs, ensuring that products and services deliver genuine value and impact in people’s lives.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden xl:grid grid-cols-12 ">
                        <div className=" block col-span-12 sm:col-span-6 xl:col-span-3 p-3 sm:p-6 xl:p-[30px] relative">
                            <div className="text-primary-dark2 ">
                                <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                    User Engagement
                                </h5>
                                <p className="text-primary-dark2 text-base md:text-[16px] font-normal mt-2 xl:mt-4">
                                    Personalizing interactions fosters deeper connections, making users feel valued and understood, ultimately increasing engagement and retention.
                                </p>
                            </div>
                            <div>
                                <img
                                    src={rightBar}
                                    className="h-full  absolute right-0 bottom-0 hidden xl:block "
                                    alt="bar"
                                />
                            </div>
                        </div>
                        <div className="block col-span-12 sm:col-span-6 xl:col-span-3 p-3 sm:p-6 xl:p-[30px] relative">
                            <div className="text-primary-dark2 ">
                                <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                    Retention & Loyalty
                                </h5>
                                <p className="text-primary-dark2 text-base md:text-[16px] font-normal mt-2 xl:mt-4">
                                    Human-centered experiences create authenticity, strengthening relationships and encouraging long-term trust between brands and their audience.
                                </p>
                            </div>
                            <div>
                                <img
                                    src={rightBar}
                                    className="h-full  absolute right-0 bottom-0 hidden xl:block"
                                    alt="bar"
                                />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 xl:col-span-3 p-3 sm:p-6 xl:p-[30px] relative block bg-grey-top-gradient ">
                            <div className="flex  ">
                                <div className="text-primary-dark2 ">
                                    <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                        Improves Decision-Making
                                    </h5>
                                    <p className="text-primary-dark2 text-base md:text-[16px] font-normal mt-2 xl:mt-4">
                                        Understanding human emotions and behaviors allows businesses to design solutions that truly resonate with their users, leading to more effective decision-making.
                                    </p>
                                </div>
                                <div>
                                    <img
                                        src={rightBar}
                                        className="h-full absolute right-0 top-0 hidden xl:block"
                                        alt="bar"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="block col-span-12 sm:col-span-6 xl:col-span-3 p-3 sm:p-6 xl:p-[30px] relative ">
                            <div className="text-primary-dark2 ">
                                <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                    Drives Meaningful Innovation
                                </h5>
                                <p className="text-primary-dark2 text-base md:text-[16px] font-normal mt-2 xl:mt-4">
                                    Humanization fuels innovation by focusing on real needs, ensuring that products and services deliver genuine value and impact in people’s lives.
                                </p>
                            </div>
                            <div>
                                <img
                                    src={rightBar}
                                    className="h-full  absolute right-0 bottom-0 hidden xl:block "
                                    alt="bar"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="transformation-bg mt-[40px] lg:mt-[0] pt-[80px] lg:pt-[100px] relative">
                <img src={ClunkyBg} alt="image" className="transformation-img absolute" />
                <Container>
                    <h6 className="text-[24px] sm:text-[42px] 2xl:text-[60px] leading-[40px] sm:leading-[65px] lg:leading-[90px] font-semibold 2xl:mb-6 text-center text-white relative ui-heading 2xl:w-[80%] mx-auto">
                        Transforming{"  "}
                        <span className="animationStroke w-fit h-fit inline-block mx-1">
                            <SVGAnimation nameOfClass="svg-container pl-4 experiences" />{" "}
                            Experiences{" "}
                        </span>{" "}  The Impact of Human-Centered Design
                    </h6>
                    <div className="ux-audit-insights-slider-wrapper">
                        <Swiper
                            pagination={pagination}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div>
                                    <img src={TransformingSliderFirst} alt={"UIDesign"} className="mx-auto max-w-[70%]" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={TransformingSliderFirst} alt={"UIDesign"} className="mx-auto max-w-[70%]" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={TransformingSliderFirst} alt={"UIDesign"} className="mx-auto max-w-[70%]" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Container>
            </section>

            <div className=" my-9 2xl:my-[100px] xl:my-[80px]">
                <CaseStudyCarousel />
            </div>
            <Footer consultData={consultData} />
        </main>
    );
};

export default Humanization;
