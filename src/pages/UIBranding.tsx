import Navbar from "../components/Navbar";
import rightLongArrow from "../assets/right-long-arrow.svg";
import HolisticIcon1 from "../assets/holistic-icon-1.svg";
import HolisticIcon2 from "../assets/holistic-icon-2.svg";
import HolisticIcon3 from "../assets/holistic-icon-3.svg";
import Container from "../components/Container";
import { useEffect, useState } from "react";
import BrandCarries from "../assets/ui-brand-carries-banner.png";
import ReachArrows from "../assets/reachus-arrows.svg";
import BannerImg from "../assets/uxconsultancy-bannerimg.svg";
import SVGAnimation from "../components/StrokeAnimation";
import Footer from "../components/Footer";
import Button from "../components/Button";
import CreatingIcon from "../assets/creating-icon.svg";
import EnhancingIcon from "../assets/enhancing-icon.svg";
import InnovatingIcon from "../assets/innovating-icon.svg";
import AlignmentIcon from "../assets/alignment-icon.svg";
import TurningBanner from "../assets/turning-obstacle-banner-img.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Sketch from "../assets/ui-branding-main-banner-sketch.png";
import final from "../assets/ui-branding-main-banner-final.png";
import present from "../assets/ui-branding-main-banner-present.png";
import design from "../assets/ui-branding-main-banner-design.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const UXAudit = () => {
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
    return (
        <main>
            <Navbar />
            <div
                className={`fixed top-0 left-0 w-full z-[120] transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"
                    }`}
            ></div>
            <Navbar />

            <div className="relative h-[auto] sm:h-[50vh] lg:h-[70vh] xl:h-[100vh] green-linear py-12">
                <Container>
                    <div className="text-center pt-[80px] xl:pt-[90px]  2xl:pt-[120px]  flex flex-col items-center">
                        <h1 className="text-[34px] sm:text-[48px] max-w-[1400px] lg:text-[46px] xl:text-[56px]  2xl:text-[90px] text-black  font-semibold mb-base">
                            UIUXDen, help to build trust
                            though visual interface.
                        </h1>

                    </div>
                    <div className="grid grid-cols-12 w-full mt-4 sm:mt-20 xl:mt-[40px] 2xl:mt-[90px]">
                        <div className="col-span-3">
                            <img
                                src={Sketch}
                                alt="arrow"
                                width={50}
                                className="mx-auto w-[50%]"
                            />
                            <p className="text-[14px] sm:text-[20px] text-primary-dark2 font-semibold text-center mt-4">
                                Sketch
                            </p>
                        </div>
                        <div className="col-span-3">
                            <img
                                src={design}
                                alt="arrow"
                                width={50}
                                className="mx-auto w-[50%]"
                            />
                            <p className="text-[14px] sm:text-[20px] text-primary-dark2 font-semibold text-center mt-4">
                                Design
                            </p>
                        </div>
                        <div className="col-span-3">
                            <img
                                src={present}
                                alt="arrow"
                                width={50}
                                className="mx-auto w-[50%]"
                            />
                            <p className="text-[14px] sm:text-[20px] text-primary-dark2 font-semibold text-center mt-4">
                                Present
                            </p>
                        </div>
                        <div className="col-span-3">
                            <div className="h-full flex justify-content-center sm:items-center p-5 pb-10 pt-0 sm:p-0">
                                <img
                                    src={final}
                                    alt="arrow"
                                    className="mx-auto sm:w-[60%]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:absolute bottom-5 left-2  2xl:left-9 text-center lg:text-start mt-3 sm:mt-[60px]  xl:mt-0 ">
                        <div className="xl:flex xl:items-center">
                            <img
                                src={rightLongArrow}
                                alt="arrow"
                                width={50}
                                className="hidden lg:block xl:mx-auto"
                            />
                            <div className="ml-3">
                                <h6 className="text-[14px] sm:text-[16px] xl:text-[18px] text-black font-normal">
                                    Home | UI Branding
                                </h6>
                            </div>

                        </div>
                    </div>
                </Container>
            </div>

            <div className="py-8 lg:py-20">
                <Container>
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-7 xl:col-span-6 xl:pr-20 mb-8 mlg:mb-0">
                            <p className="text-[24px] text-center lg:text-start sm:text-[42px] xl:text-[60px]  font-semibold">
                                UIUXDen, carries the spirit, purpose, values, and the pride of your brand in everything we do.
                            </p>
                            <div className="flex justify-center lg:justify-start">
                                <Button
                                    variant="secondary"
                                    className="border !px-5 2xl:!px-[24px] !py-3 2xl:!py-[18px] text-sm 2xl:text-base border-primary-dark2 sm:mt-5 lg:mt-[70px]  !ring-0 text-primary-dark2 hover:text-primary-dark2 rounded-full">
                                    Consult Us Now
                                </Button>
                            </div>

                        </div>

                        <div className="col-span-12 lg:col-span-5 xl:col-span-6">
                            <img
                                src={BrandCarries}
                                alt="Image"
                                className="mx-auto max-w-[80%] md:max-w-[60%] lg:max-w-full"
                            />
                        </div>
                    </div>
                </Container>
            </div>

            {/* ---------- holistic Section ---------- */}
            <div className="bg-[#2D2D2D] py-12 2xl:pt-[80px] 2xl:pb-[150px]">
                <Container>
                    <div className="sm:text-center flex flex-col items-center mb-7 sm:mb-20 text-white">
                        <h1 className="text-[34px] md:text-[42px] lg:text-[60px] max-w-[1250px]  text-white  font-semibold mb-base">
                            The UIUXDen is {"  "}
                            <span className="animationStroke w-fit h-fit inline-block mx-1">
                                <SVGAnimation nameOfClass="svg-container pl-4 holistic" />{" "}
                                deeply{" "}
                            </span>{" "}
                            involved in driving your brand
                        </h1>
                    </div>

                    <div className="grid grid-cols-12 gap-y-6 sm:gap-[40px]">
                        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                            <div className="lg:mt-[70px]">
                                <img
                                    src={CreatingIcon}
                                    className="w-[50px] sm:w-auto"
                                    alt="image"
                                />

                                <h5 className="text-[20px] sm:text-[24px] lg:text-[30px] font-semibold pt-[16px] sm:pt-[38px] pb-[18px] text-white">
                                    Creating a Unique and Memorable Brand Identity
                                </h5>
                                <p className="text-[18px] font-normal text-white">
                                    UIUXDen specializes in building design systems that reflect your brand's personality and values. From logos to color schemes, we ensure your brand is cohesive and instantly recognizable across all platforms.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                            <img
                                src={EnhancingIcon}
                                className="w-[50px] sm:w-auto"
                                alt="image"
                            />

                            <h5 className="text-[20px] sm:text-[24px] lg:text-[30px] font-semibold pt-[16px] sm:pt-[38px] pb-[18px] text-white">
                                Enhancing User Engagement Through Thoughtful Design
                            </h5>
                            <p className="text-[18px] font-normal text-white">
                                Our user-focused designs simplify journeys and eliminate friction, creating seamless experiences. We craft captivating interfaces that engage users and drive conversions for your digital platforms.
                            </p>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                            <div className="lg:mt-[70px]">
                                <img
                                    src={InnovatingIcon}
                                    className="w-[50px] sm:w-auto"
                                    alt="image"
                                />

                                <h5 className="text-[20px] sm:text-[24px] lg:text-[30px] font-semibold pt-[16px] sm:pt-[38px] pb-[18px] text-white">
                                    Innovating with
                                    the Latest Technologies
                                </h5>
                                <p className="text-[18px] font-normal text-white">
                                    By leveraging tools like AI, we create interactive and immersive experiences. These innovations help your brand stay modern, relevant, and ahead of industry trends.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                            <img
                                src={AlignmentIcon}
                                className="w-[50px] sm:w-auto"
                                alt="image"
                            />

                            <h5 className="text-[20px] sm:text-[24px] lg:text-[30px] font-semibold pt-[16px] sm:pt-[38px] pb-[18px] text-white">
                                Aligning Design
                                with Business
                                Goals
                            </h5>
                            <p className="text-[18px] font-normal text-white">
                                We align every design decision with your business objectives to deliver measurable results. Our strategic, research-driven approach ensures your brand achieves both visual and business success.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="py-8 sm:py-16 xl:py-20">
                <Container>
                    <div className="sm:text-center flex flex-col items-center mb-5 sm:mb-20 text-primary-dark2">
                        <h1 className="text-[34px] md:text-[42px] lg:text-[60px] max-w-[1250px]  font-semibold mb-base">
                            Turning Obstacles into  {"  "}
                            <span className="animationStroke w-fit h-fit inline-block">
                                <SVGAnimation nameOfClass="svg-container opportunities" />{" "}
                                Opportunities{" "}
                            </span>{" "}
                        </h1>
                    </div>

                    <div className="mx-auto carouselStudy ">
                        <Swiper
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide >
                                <div>
                                    <div className="relative">
                                        <div className="grid grid-cols-12 gap-[30px] 2xl:gap-0">
                                            <div className="col-span-12 lg:col-span-5">
                                                <div className="border border-[#1a1a1a] rounded-[32px] p-5 sm:p-[30px] 2xl:p-10 ">
                                                    <h3 className="text-primary-dark2 text-[40px] sm:text-[60px] font-semibold ">
                                                        250+
                                                    </h3>
                                                    <h6 className="text-primary-dark2 text-[28px] font-semibold mt-2 mb-7">
                                                        Successful Projects
                                                    </h6>
                                                    <p className="text-primary-dark2 text-[20px] font-normal ">
                                                        With 250+ successful UI branding projects, we create visually compelling and user-focused designs that elevate brands effortlessly.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-span-12 lg:col-span-7 ">
                                                <img
                                                    src={TurningBanner}
                                                    alt="Image"
                                                    className="mx-auto max-w-[80%] lg:max-w-[60%] lg:max-w-full pr-3"
                                                />

                                            </div>
                                        </div>
                                        <div className="xl:absolute bottom-0 p-[30px] 2xl:p-10 rounded-[32px] bg-secondary-dark2 xl:w-[62%]">
                                            <p className="text-white text-[26px] font-normal sm:w-[73%] mb-4">
                                                We help businesses solve problems and achieve their goals with smart, creative solutions that fit their brand
                                            </p>
                                            <FaArrowRightLong size={20} className="text-white" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div>
                                    <div className="relative">
                                        <div className="grid grid-cols-12 gap-[30px] 2xl:gap-0">
                                            <div className="col-span-12 lg:col-span-5">
                                                <div className="border border-[#1a1a1a] rounded-[32px] p-5 sm:p-[30px] 2xl:p-10 ">
                                                    <h3 className="text-primary-dark2 text-[40px] sm:text-[60px] font-semibold ">
                                                        250+
                                                    </h3>
                                                    <h6 className="text-primary-dark2 text-[28px] font-semibold mt-2 mb-7">
                                                        Successful Projects
                                                    </h6>
                                                    <p className="text-primary-dark2 text-[20px] font-normal ">
                                                        With 250+ successful UI branding projects, we create visually compelling and user-focused designs that elevate brands effortlessly.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-span-12 lg:col-span-7 ">
                                                <img
                                                    src={TurningBanner}
                                                    alt="Image"
                                                    className="mx-auto max-w-[80%] lg:max-w-[60%] lg:max-w-full pr-3"
                                                />

                                            </div>
                                        </div>
                                        <div className="xl:absolute bottom-0 p-[30px] 2xl:p-10 rounded-[32px] bg-secondary-dark2 xl:w-[62%]">
                                            <p className="text-white text-[26px] font-normal sm:w-[73%] mb-4">
                                                We help businesses solve problems and achieve their goals with smart, creative solutions that fit their brand
                                            </p>
                                            <FaArrowRightLong size={20} className="text-white" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div>
                                    <div className="relative">
                                        <div className="grid grid-cols-12 gap-[30px] 2xl:gap-0">
                                            <div className="col-span-12 lg:col-span-5">
                                                <div className="border border-[#1a1a1a] rounded-[32px] p-5 sm:p-[30px] 2xl:p-10 ">
                                                    <h3 className="text-primary-dark2 text-[40px] sm:text-[60px] font-semibold ">
                                                        250+
                                                    </h3>
                                                    <h6 className="text-primary-dark2 text-[28px] font-semibold mt-2 mb-7">
                                                        Successful Projects
                                                    </h6>
                                                    <p className="text-primary-dark2 text-[20px] font-normal ">
                                                        With 250+ successful UI branding projects, we create visually compelling and user-focused designs that elevate brands effortlessly.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-span-12 lg:col-span-7 ">
                                                <img
                                                    src={TurningBanner}
                                                    alt="Image"
                                                    className="mx-auto max-w-[80%] lg:max-w-[60%] lg:max-w-full pr-3"
                                                />

                                            </div>
                                        </div>
                                        <div className="xl:absolute bottom-0 p-[30px] 2xl:p-10 rounded-[32px] bg-secondary-dark2 xl:w-[62%]">
                                            <p className="text-white text-[26px] font-normal sm:w-[73%] mb-4">
                                                We help businesses solve problems and achieve their goals with smart, creative solutions that fit their brand
                                            </p>
                                            <FaArrowRightLong size={20} className="text-white" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </Container>
            </div>
            <Footer consultData={consultData} />
        </main>
    );
};

export default UXAudit;
