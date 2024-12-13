import Navbar from "../components/Navbar";
import paulSchumacherDark from "../assets/schumacher-dark.svg";
import SchumacherHeader from "../assets/schumacher-header-img.png";
import rightLongArrow from "../assets/right-long-arrow.svg";
import problemOne from "../assets/problem1-banner.png";
import VoltMainBanner from "../assets/volt-main-banner.png";
import ConclusionBanner from "../assets/conclusion-banner.png";
import IncreasedIcon from "../assets/increased-revenues-icon.svg";
import ReducedIcon from "../assets/reduced-operating-icon.svg";
import ImprovedIcon from "../assets/improved-customer-icon.svg";
import AiChatbotBanner from "../assets/ai-chatbot-banner.png";
import VoltLogo from "../assets/volt-journey-logo.png";
import EmpoweringBanner from "../assets/empowering-banner-img.png";


import Review from "../components/Homepage/Review";
import Footer from "../components/Footer";
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion";
import banner from "../assets/banner.jpg";
import CaseStudyCarousel from "../components/Homepage/CaseStudyCarousel";
import { useEffect, useState } from "react";
import { VelocityScroll } from "../components/Velocity";
import UserAnimation from "../components/Homepage/UserAnimation";
import Container from "../components/Container";
import { Link } from "react-router-dom";

const Voltjourney = () => {


    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [addTransitionClass, setAddTransitionClass] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const imageOpacity = useTransform(scrollY, [0, 700], [1, 0]);
    const imageScale = useTransform(scrollY, [0, 700], [1, 3]);

    const paragraphScale = useTransform(scrollY, [0, 200], [0.8, 1]);
    const paragraphOpacity = useTransform(scrollY, [0, 200], [0, 1]);

    const textTranslateY = useTransform(scrollY, [0, 700], [25, -200]);
    const textScale = useTransform(scrollY, [0, 700], [1, 1.5]);
    const textOpacity = useTransform(scrollY, [0, 900, 950], [1, 1, 0]);
    useMotionValueEvent(textOpacity, "change", (latest) => {
        if (latest === 0) {
            setAddTransitionClass(true);
        } else if (latest === 1) {
            setAddTransitionClass(false);
        }
    });


    return (
        <main>
            <div
                className={`fixed top-0 left-0 w-full z-[120] transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"
                    }`} >
                <Navbar />
            </div>
            <div className="relative h-[100vh] green-linear ">
                <Container>
                    <div className="text-center pt-[120px] 2xl:pt-[170px] flex flex-col items-center">
                        <img src={VoltLogo} alt="logo" width={250} className="mx-auto" />
                        <h1 className="text-[66px]  2xl:text-[90px] text-black  font-semibold mb-base">
                            A Seamless Ecosystem for Electric Freight Management
                        </h1>
                    </div>
                    <div className="absolute bottom-5 left-2  2xl:left-9 ">
                        <div className="flex items-center">
                            <img src={rightLongArrow} alt="arrow" width={50} className="mx-auto" />
                            <div className="ml-3">
                                <h6 className="text-[18px] text-black font-normal">
                                    Home | Casestudy
                                </h6>
                                <h6 className="text-[18px] text-black font-normal">
                                    Volt Journey
                                </h6>
                            </div>
                        </div>
                    </div>

                    {/* <div className="absolute bottom-[-40%] left-0 right-0 w-[60%] m-auto z-[9]" >
                        <img src={SchumacherHeader} alt="schumacherlogo" className="mx-auto" />
                    </div> */}
                </Container>
            </div>
            <section className="pHighLightBg relative">
                <img
                    src={VoltMainBanner}
                    alt="KD Graphic"
                    className="absolute inset-0 -top-[220px] 2xl:-top-[280px] max-w-[900px] 2xl:max-w-[1034px] mx-auto"
                />
                <p className="text-2xl font-semibold text-center mx-auto max-w-[1350px] pt-[426px] pb-[84px]">
                    Volt Journey is a software product that facilitates the management of electric freights. It allows carriers to optimize the booking of charging slots, reducing wait time at charging stations and delivery time. It also allows facility managers to manage their operations and revenues by providing advance information about carriers that are going to arrive at the charging station. Additionally, it helps facility managers to manage their electricity demand by connecting them to the electricity provider.
                </p>
            </section>

            <section>
                <h3 className="text-center text-[60px] font-semibold">
                    Benefits for Carriers
                </h3>
                <Container>
                    <div className="grid grid-cols-12 gap-6 mt-[50px] 2xl:mt-[78px]">

                        <div className="col-span-6 2xl:col-span-3">
                            <div className="carrier-benefit-card py-[60px] px-[30px] h-full">
                                <h5 className="text-[30px] font-semibold max-w-[90%] text-primary-dark2">
                                    Optimize Charging Slot Booking
                                </h5>
                                <p className="text-[22px] text-primary-dark2">
                                    Volt Journey allows carriers to book charging slots in advance, ensuring that they have a place to charge their vehicles when they arrive at the charging station. This reduces wait time and delivery time, improving efficiency & profitability.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-6 2xl:col-span-3">
                            <div className="kcbg py-[60px] px-[30px] h-full">
                                <h5 className="text-[30px] font-semibold max-w-[80%] text-primary-dark2 ">
                                    Reduced Emissions
                                </h5>
                                <p className="text-[22px] text-primary-dark2 ">
                                    Electric freights produce zero emissions, which helps carriers to reduce their environmental impact. Volt Journey can help carriers to track their emissions & identify opportunities to reduce them further.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-6 2xl:col-span-3">
                            <div className="kcbg py-[60px] px-[30px] h-full">
                                <h5 className="text-[30px] font-semibold max-w-[90%] text-primary-dark2">
                                    Improved Compliance
                                </h5>
                                <p className="text-[22px] text-primary-dark2">
                                    Volt Journey can help carriers to comply with regulations related to electric freights. For example, it can track the charging status of vehicles & ensure that they are properly charged before they are put back on the road.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-6 2xl:col-span-3">
                            <div className="kcbg py-[60px] px-[30px] h-full">
                                <h5 className="text-[30px] font-semibold max-w-[90%]  text-primary-dark2">
                                    DAI Based Lane Recommendations
                                </h5>
                                <p className="text-[22px] text-primary-dark2">
                                    Volt Journey uses advanced AI to recommend the most profitable and efficient lanes for carriers, maximizing revenue and minimizing transit times. Our insights enhance operational efficiency, keeping carriers competitive and productive.
                                </p>
                            </div>
                        </div>

                    </div>
                </Container>
            </section>


            <section className="pt-[100px]">
                <h3 className="text-center text-[60px] font-semibold">
                    Empowering Sustainable Freight Mobility
                </h3>

                <Container>
                    <div className="w-[65%] mx-auto">
                        <img
                            src={EmpoweringBanner}
                            alt="KD Graphic"
                            className="max-w-[900px] 2xl:max-w-[1034px] mx-auto mt-[30px] 2xl:mt-[90px]"
                        />
                        <div className="border-[1px] mt-9  border-solid border-primary-dark3 rounded-2xl py-[22px] px-[48px]">
                            <p className="text-lg font-semibold text-center mx-auto text-primary-dark5 ">
                                The only Platform that Volt Journey’s Frictionless <span className="text-primary-dark4">Sustainable Freight Mobility</span>  through coordinated flow of information between carriers, charging network operators and utilities
                            </p>
                        </div>
                    </div>

                </Container>
            </section>

            <section className="py-[100px] 2xl:py-[150px]">
                <Container>
                    <div className="grid grid-cols-2 gap-20 mt-[70px]">
                        <div className="col-span-1 self-center">
                            <div>
                                <div className="text-[18px] font-semibold text-secondary-light2">
                                    FEATURE RECOMMENDATION
                                </div>
                                <div className="text-[32px] 2xl:text-[40px] font-semibold  mt-1 2xl:mt-4 mb-5 2xl:mb-8 ">
                                    AI Chatbot
                                </div>
                                <p className="text-lg 2xl:text-xl font-medium text-primary-dark2 w-[90%] mb-4">
                                    Volt Journey's intelligent chatbot revolutionizes logistics management by enabling seamless communication and coordination among stakeholders. It leverages advanced AI technology to optimize resource management and ensure operational harmony.
                                </p>
                                <p className="text-lg 2xl:text-xl font-medium text-primary-dark2 w-[90%] mb-4">
                                    By facilitating real-time decision-making, the chatbot helps carriers and operators stay agile and responsive. It streamlines scheduling, reducing delays and improving efficiency across the supply chain.
                                </p>
                                <p className="text-lg 2xl:text-xl font-medium text-primary-dark2 w-[90%]">
                                    This innovative solution enhances logistics performance by providing actionable insights and fostering collaboration. With Volt Journey's chatbot, stakeholders can operate more effectively, improve productivity, and maintain a competitive edge in the dynamic logistics industry.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <img src={AiChatbotBanner} alt="image" />
                        </div>
                    </div>
                </Container>
            </section>

            <section className="problem2-section text-white py-[100px]">
                <Container>
                    <h3 className="text-center text-[60px] font-semibold ">
                        Benefits for Facility Managers
                    </h3>
                    <div className="grid grid-cols-12 gap-10  items-start py-[100px] 2xl:py-[130px]  ">
                        <div className="col-span-4">
                            <img src={IncreasedIcon} alt="image" />
                            <h5 className="text-[40px] font-semibold pt-[32px] pb-[14px]">
                                Increased Revenues
                            </h5>
                            <p className="text-[20px] ">
                                Volt Journey can help facility managers to increase their revenues by providing them with advance information about carriers that are going to arrive at the charging station. This allows them to optimize their pricing and maximize occupancy rates.
                            </p>
                        </div>
                        <div className="col-span-4">
                            <img src={ReducedIcon} alt="image" />
                            <h5 className="text-[40px] font-semibold pt-[32px] pb-[14px]">
                                Reduced Operating Costs
                            </h5>
                            <p className="text-[20px] ">
                                Volt Journey can help facility managers to reduce their operating costs by optimizing the use of electricity. For example, it can help them to identify the most efficient charging times and to stagger the arrival of carriers to avoid peak demand.
                            </p>
                        </div>
                        <div className="col-span-4">
                            <img src={ImprovedIcon} alt="image" />
                            <h5 className="text-[40px] font-semibold pt-[32px] pb-[14px]">
                                Improved Customer Service
                            </h5>
                            <p className="text-[20px] ">
                                Volt Journey can help facility managers to improve customer service by providing carriers with real-time information about the status of their charging slots. This helps carriers to plan their routes and arrival times more effectively.
                            </p>
                        </div>

                    </div>
                </Container>
            </section>

            <section className="py-[100px]">
                <h3 className="text-center text-[60px] font-semibold ">
                    Benefits for Utilities
                </h3>
                <Container>
                    <div className="grid grid-cols-12 gap-6 mt-[50px] 2xl:mt-[78px]">


                        <div className="col-span-4">
                            <div className="benefit-utilities-card py-[60px] ps-[40px] pe-[85px] h-full">
                                <h5 className="text-[30px] font-semibold text-primary-dark2">
                                    Increased Demand for Electricity
                                </h5>
                                <p className="text-[22px] text-primary-dark2">
                                    Volt Journey can help utilities to improve grid management by providing them with real-time information about the demand for electricity at charging stations. This helps utilities to ensure that the grid is able to meet demand and to avoid blackouts.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="benefit-utilities-card py-[60px] ps-[40px] pe-[85px] h-full">
                                <h5 className="text-[30px] font-semibold text-primary-dark2">
                                    Improved Grid Management
                                </h5>
                                <p className="text-[22px] text-primary-dark2">
                                    Volt Journey can help utilities to improve grid management by providing them with real-time information about the demand for electricity at charging stations. This helps utilities to ensure that the grid is able to meet demand and to avoid blackouts.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="benefit-utilities-card py-[60px] ps-[40px] pe-[85px] h-full">
                                <h5 className="text-[30px] font-semibold text-primary-dark2">
                                    Reduced Emissions
                                </h5>
                                <p className="text-[22px] text-primary-dark2">
                                    Volt Journey  can help utilities to reduce emissions by providing carriers with access to electric freights. This can help utilities to meet their environmental targets and to improve air quality.
                                </p>
                            </div>
                        </div>


                    </div>
                </Container>
            </section>

            <section className="py-[100px] 2xl:py-[100px]">
                <Container>
                    <div className="grid grid-cols-2 gap-20">
                        <div className="col-span-1 self-center">
                            <div>
                                <div className="text-[18px] font-semibold text-secondary-light2">
                                    Volt Journey
                                </div>
                                <div className="text-[32px] 2xl:text-[40px] font-semibold  mt-1 2xl:mt-4 mb-5 2xl:mb-8 ">
                                    Conclusion
                                </div>
                                <p className="text-lg 2xl:text-xl font-medium text-primary-dark2 w-[90%] mb-4">
                                    Volt Journey is a cutting-edge software solution designed to empower carriers, facility managers, and utilities to manage electric freight operations more effectively. By integrating advanced AI and data-driven insights, it addresses key challenges in electric freight management.
                                </p>
                                <p className="text-lg 2xl:text-xl font-medium text-primary-dark2 w-[90%] mb-4">
                                    The platform helps reduce carbon emissions, promoting sustainable practices in the logistics industry. It enhances operational efficiency by streamlining processes and optimizing routes tailored to electric vehicles.
                                </p>
                                <p className="text-lg 2xl:text-xl font-medium text-primary-dark2 w-[90%]">
                                    Volt Journey also boosts profitability by minimizing energy costs and improving resource utilization. With its robust features, it ensures seamless coordination, real-time decision-making, and enhanced performance, enabling stakeholders to lead in a competitive and eco-conscious market.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <img src={ConclusionBanner} alt="image" />
                        </div>
                    </div>
                </Container>
            </section>


            <Footer />

        </main>
    );
};

export default Voltjourney;
