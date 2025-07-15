import Navbar from "../components/Navbar";
import rightLongArrow from "../assets/right-long-arrow.svg";
import rightBar from "../assets/rightbar.png";
import Container from "../components/Container";
import { useEffect, useState } from "react";
import Whyaudit from "../assets/why-ux-audit.png";
import InsightSliderImg from "../assets/insights-slider-img.png";
import Footer from "../components/Footer";
import Button from "../components/Button";
import EveryAngleBanner from "../assets/every-angle-banner.svg";
import LeftArrowHalf from "../assets/arrow-down-side.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SVGAnimation from "../components/StrokeAnimation";

const UIBranding = () => {
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

            {/* ---------- Banner Section ---------- */}
            <div className="relative h-[auto] lg:h-[100vh] green-linear py-12">
                <Container>
                    <div className="text-center pt-[80px] sm:pt-[100px] xl:pt-[90px] flex flex-col items-center">
                        <h1 className="text-[34px] sm:text-[48px] max-w-[1400px] lg:text-[46px] xl:text-[56px]  2xl:text-[90px] text-black  font-semibold mb-base md:leading-[1.2] lg:leading-[1.4]">
                            UIUXDen is capable of understanding how users behave with your existing product.
                        </h1>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-4 xl:gap-6 w-full mt-4 sm:mt-[50px] lg:mt-[80px] xl:mt-[40px] 2xl:mt-[50px] ">

                        <div className="border border-primary-dark2 rounded-full w-[160px] h-[160px] xl:w-[200px] xl:h-[200px] flex justify-center items-center text-center relative p-3">
                            <p className="text-primary-dark2 text-[14px] sm:text-[16px] xl:text-[20px] font-semibold ">
                                Define Goals &
                                Gather Data
                            </p>
                            <img src={LeftArrowHalf} alt="arrow" className="hidden xl:block xl:absolute top-[45%] right-[100%]" />
                        </div>

                        <div className="border border-primary-dark2 rounded-full w-[160px] h-[160px] xl:w-[200px] xl:h-[200px] flex justify-center items-center text-center relative p-3">
                            <p className="text-primary-dark2 text-[16px] xl:text-[20px] font-semibold ">
                                Evaluate Usability
                                & Accessibility
                            </p>
                        </div>

                        <div className="border border-primary-dark2 rounded-full w-[160px] h-[160px] xl:w-[200px] xl:h-[200px] flex justify-center items-center text-center relative p-3">
                            <p className="text-primary-dark2 text-[16px] xl:text-[20px] font-semibold ">
                                Benchmark Against
                                Competitors
                            </p>
                        </div>

                        <div className="border border-primary-dark2 rounded-full w-[160px] h-[160px] xl:w-[200px] xl:h-[200px] flex justify-center items-center text-center relative p-3">
                            <p className="text-primary-dark2 text-[16px] xl:text-[20px] font-semibold ">
                                Identify Issues &
                                Prioritize Fixes
                            </p>
                        </div>

                        <div className="border border-primary-dark2 rounded-full w-[160px] h-[160px] xl:w-[200px] xl:h-[200px] flex justify-center items-center text-center relative p-3">
                            <p className="text-primary-dark2 text-[16px] xl:text-[20px] font-semibold ">
                                Provide Actionable
                                Recommendations
                            </p>
                            <img src={LeftArrowHalf} alt="arrow" className="hidden xl:block xl:absolute top-[45%] left-[100%] rotate-180" />
                        </div>

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
                                    Home | UX Audit
                                </h6>
                            </div>

                        </div>
                    </div>

                </Container>
            </div>

            <div className="py-8 lg:py-20 xl:pt-[120px] xl:pb-[140px]">
                <Container>
                    <div className="grid grid-cols-12">

                        <div className="col-span-12 xl:col-span-5 xl:col-span-5">
                            <p className="text-[24px] text-center xl:text-start sm:text-[42px] xl:text-[60px] font-semibold 2xl:mr-[100px] md:mx-[120px] lg:mx-0">
                                Why does every product need a UX audit
                            </p>
                            <div className="flex justify-center xl:justify-start mb-6 xl:mb-0">
                                <Button
                                    variant="primary"
                                    className="border !px-5 2xl:!px-[24px] !py-3 2xl:!py-[18px] text-sm 2xl:text-base border-primary-dark2 sm:mt-5 xl:mt-[70px]  !ring-0 text-primary-dark2 hover:text-primary-dark2 rounded-full">
                                    Let’s talk
                                </Button>
                            </div>

                        </div>
                        <div className="col-span-12 xl:col-span-7 xl:col-span-7">
                            <img
                                src={Whyaudit}
                                alt="Image"
                                className="mx-auto max-w-[80%] md:max-w-[60%] lg:max-w-full"
                            />
                        </div>

                    </div>
                </Container>
            </div>

            <div className="bg-[#2D2D2D] py-12 2xl:pt-[80px] 2xl:pb-[150px]">
                <Container>
                    <div className="sm:text-center flex flex-col items-center mb-7 sm:mb-20 text-white">
                        <h1 className="text-[34px] md:text-[42px] xl:text-[60px] max-w-[1250px]  text-white  font-semibold mb-base">
                            Get a complete picture of how users are interacting with your product from every angle.
                        </h1>
                    </div>

                    <div className="grid grid-cols-12 sm:gap-[40px] ">

                        <div className="col-span-12 sm:col-span-7 xl:col-span-6 xl:pr-[100px] ">
                            <div className="border-b border-white pb-5 mb-7">
                                <h5 className="text-[18px] text-white font-bold">
                                    Heatmaps & Click Tracking
                                </h5>
                                <p className="text-[14px] text-[#9D9D9D] font-normal">
                                    Identify hotspots and areas of user engagement to optimize interactions.
                                </p>
                            </div>
                            <div className="border-b border-white pb-5 mb-7">
                                <h5 className="text-[18px] text-white font-bold">
                                    User Journey Flow
                                </h5>
                                <p className="text-[14px] text-[#9D9D9D] font-normal">
                                    Visualize how users navigate through your product and uncover bottlenecks.                                </p>
                            </div>
                            <div className="border-b border-white pb-5 mb-7">
                                <h5 className="text-[18px] text-white font-bold">
                                    Session Recordings & Behavior Analysis
                                </h5>
                                <p className="text-[14px] text-[#9D9D9D] font-normal">
                                    Watch real-time user interactions to detect usability issues.
                                </p>
                            </div>
                            <div className="border-b border-white pb-5 mb-7">
                                <h5 className="text-[18px] text-white font-bold">
                                    User Feedback & Surveys
                                </h5>
                                <p className="text-[14px] text-[#9D9D9D] font-normal">
                                    Collect direct insights from users to improve satisfaction and usability.
                                </p>
                            </div>
                            <div className=" pb-5 mb-7">
                                <h5 className="text-[18px] text-white font-bold">
                                    Conversion & Drop-Off Analysis
                                </h5>
                                <p className="text-[14px] text-[#9D9D9D] font-normal">
                                    Analyze where users leave and optimize to boost retention.
                                </p>
                            </div>
                        </div>

                        <div className="col-span-12 sm:col-span-5 xl:col-span-6  ">
                            <div className="h-full border border-white rounded-[32px] flex justify-center items-center p-8 xl:p-0">
                                <img
                                    src={EveryAngleBanner}
                                    alt="Image"
                                />
                            </div>
                        </div>

                    </div>
                </Container>
            </div>

            <section className="py-10 xl:py-[100px]">
                <Container>
                    <div className="grid grid-cols-12 xl:grid-cols-12 mb-4 xl:mb-[80px]">
                        <div className="hidden xl:block col-span-1">
                        </div>
                        <div className=" col-span-12 sm:col-span-4 xl:col-span-4">
                            <h2 className=" text-[24px] sm:text-[30px] xl:text-[40px] 2xl:text-[60px] font-semibold text-primary-dark2">
                                Importance of
                            </h2>
                            <h2 className=" text-[32px] sm:text-[47px] xl:text-[65px] 2xl:text-[84px] font-semibold text-primary-dark2">
                                UI/UX Audit
                            </h2>
                        </div>
                        <div className=" col-span-12 sm:col-span-8 xl:col-span-6">
                            <div className="h-full flex justify-center items-center sm:ml-[50px]">
                                <p className="sm:text-[18px] xl:text-[24px] font-medium text-primary-dark2">
                                    UX audit is a data-driven approach that allows you to define actual customers' needs, improve products’ quality, and achieve your desired business goals.
                                </p>
                            </div>
                        </div>
                        <div className=" hidden xl:block col-span-1">
                        </div>
                    </div>

                    <div className="grid xl:hidden grid-cols-12 xl:grid-cols-10">
                        <div className="col-span-12 sm:col-span-6  p-3 sm:p-6 xl:p-[30px] ">
                            <div className="text-primary-dark2 ">
                                <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                    Branding
                                </h5>
                                <ul className="space-y-1 text-primary-dark2 list-disc mt-3 mb-2  ">
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Colour psychology of the brand.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Imagery to reflect the image of the brand.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Logo and Iconography.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6  p-3 sm:p-6 xl:p-[30px] ">
                            <div className="text-primary-dark2 ">
                                <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                    Design & Typography
                                </h5>
                                <ul className="space-y-1 text-primary-dark2 list-disc mt-3 mb-2  ">
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Bad text hierarchy.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Meaningful and easy to interact with design.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Legible and clear text.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6  p-3 sm:p-6 xl:p-[30px] ">
                            <div className="text-primary-dark2 ">
                                <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                    Navigation & Structure
                                </h5>
                                <ul className="space-y-1 text-primary-dark2 list-disc mt-3 mb-2  ">
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Easy layout of a product.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Evaluate the site’s navigation system.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Review the website’s information architecture.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6  p-3 sm:p-6 xl:p-[30px] ">
                            <div className="text-primary-dark2 ">
                                <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                    Usability Evaluation
                                </h5>
                                <ul className="space-y-1 text-primary-dark2 list-disc mt-3 mb-2  ">
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Can new users quickly learn how to use the product?
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Are error messages helpful?
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Are call-to-action buttons noticeable and compelling?
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6  p-3 sm:p-6 xl:p-[30px] ">
                            <div className="text-primary-dark2 ">
                                <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                    User Journey
                                </h5>
                                <ul className="space-y-1 text-primary-dark2 list-disc mt-3 mb-2  ">
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Generate heatmaps.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Redefine the user journey.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Make product more useful and usable.
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6  p-3 sm:p-6 xl:p-[30px] ">
                            <div className="text-primary-dark2 ">
                                <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                    Analytics & Research
                                </h5>
                                <ul className="space-y-1 text-primary-dark2 list-disc mt-3 mb-2  ">
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Website score.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Competitor analysis.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Accessibilities Testing.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6  p-3 sm:p-6 xl:p-[30px] ">
                            <div className="text-primary-dark2 ">
                                <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                    Responsiveness
                                </h5>
                                <ul className="space-y-1 text-primary-dark2 list-disc mt-3 mb-2  ">
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Optimized for different screen sizes.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Check for cross-browser compatibility.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Usability issues on smaller screens.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6  p-3 sm:p-6 xl:p-[30px] ">
                            <div className="text-primary-dark2 ">
                                <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                    Content
                                </h5>
                                <ul className="space-y-1 text-primary-dark2 list-disc mt-3 mb-2  ">
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Clarity and conciseness of the language.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Use of headings and subheadings.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Check overall readability.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6  p-3 sm:p-6 xl:p-[30px] ">
                            <div className="text-primary-dark2 ">
                                <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                    Conclusion
                                </h5>
                                <ul className="space-y-1 text-primary-dark2 list-disc mt-3 mb-2">
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Summary of UX audit.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Recommendations of identified issues.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="hidden xl:grid grid-cols-12 xl:grid-cols-10">
                        <div className=" block col-span-12 sm:col-span-6 xl:col-span-2 p-3 sm:p-6 xl:p-[30px] relative bg-grey-top-gradient">
                            <div className="text-primary-dark2 ">
                                <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                    Branding
                                </h5>
                                <ul className="space-y-1 text-primary-dark2 list-disc mt-3 mb-2  ">
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Colour psychology of the brand.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Imagery to reflect the image of the brand.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Logo and Iconography.
                                    </li>

                                </ul>
                            </div>

                            <div>
                                <img
                                    src={rightBar}
                                    className="h-full  absolute right-0 bottom-0 hidden xl:block "
                                    alt="bar"
                                />
                            </div>
                        </div>
                        <div className="block col-span-12 sm:col-span-6 xl:col-span-2 p-3 sm:p-6 xl:p-[30px] relative">
                            <div className="text-primary-dark2 ">
                                <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                    Design & Typography
                                </h5>
                                <ul className="space-y-1 text-primary-dark2 list-disc mt-3 mb-2  ">
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Bad text hierarchy.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Meaningful and easy to interact with design.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Legible and clear text.
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <img
                                    src={rightBar}
                                    className="h-full  absolute right-0 bottom-0 hidden xl:block"
                                    alt="bar"
                                />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 xl:col-span-2 p-3 sm:p-6 xl:p-[30px] relative block bg-grey-top-gradient ">
                            <div className="flex  ">
                                <div className="text-primary-dark2 ">
                                    <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                        Navigation & Structure
                                    </h5>
                                    <ul className="space-y-1 text-primary-dark2 list-disc mt-3 mb-2  ">
                                        <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                            Easy layout of a product.
                                        </li>
                                        <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                            Evaluate the site’s navigation system.
                                        </li>
                                        <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                            Review the website’s information architecture.
                                        </li>

                                    </ul>
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
                        <div className="block col-span-12 sm:col-span-6 xl:col-span-2 p-3 sm:p-6 xl:p-[30px] relative ">
                            <div className="text-primary-dark2 ">
                                <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                    Usability Evaluation
                                </h5>
                                <ul className="space-y-1 text-primary-dark2 list-disc mt-3 mb-2  ">
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Can new users quickly learn how to use the product?
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Are error messages helpful?
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Are call-to-action buttons noticeable and compelling?
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <img
                                    src={rightBar}
                                    className="h-full  absolute right-0 bottom-0 hidden xl:block "
                                    alt="bar"
                                />
                            </div>
                        </div>
                        <div className="block col-span-12 sm:col-span-6 xl:col-span-2 p-3 sm:p-6 xl:p-[30px] relative bg-grey-top-gradient">
                            <div className="text-primary-dark2 ">
                                <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                    User Journey
                                </h5>
                                <ul className="space-y-1 text-primary-dark2 list-disc mt-3 mb-2  ">
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Generate heatmaps.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Redefine the user journey.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Make product more useful and usable.
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="hidden xl:grid grid-cols-12 xl:grid-cols-10  ">
                        <div className=" col-span-12 sm:col-span-6 xl:col-span-1 md:p-5 p-3  relative h-full">
                        </div>
                        <div className=" col-span-12 sm:col-span-6 xl:col-span-2 p-3 sm:p-6 xl:p-[30px] relative h-full bg-grey-top-gradient">
                            <div className="text-primary-dark2 ">
                                <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                    Analytics & Research
                                </h5>
                                <ul className="space-y-1 text-primary-dark2 list-disc mt-3 mb-2  ">
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Website score.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Competitor analysis.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Accessibilities Testing.
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <img
                                    src={rightBar}
                                    className="h-full absolute right-0 top-0 hidden xl:block"
                                    alt="bar"
                                />
                            </div>
                        </div>
                        <div className=" col-span-12 sm:col-span-6 xl:col-span-2 p-3 sm:p-6 xl:p-[30px] relative h-full">
                            <div className="flex">
                                <div className="text-primary-dark2 ">
                                    <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                        Responsiveness
                                    </h5>
                                    <ul className="space-y-1 text-primary-dark2 list-disc mt-3 mb-2  ">
                                        <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                            Optimized for different screen sizes.
                                        </li>
                                        <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                            Check for cross-browser compatibility.
                                        </li>
                                        <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                            Usability issues on smaller screens.
                                        </li>

                                    </ul>
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
                        <div className=" col-span-12 sm:col-span-6 xl:col-span-2 p-3 sm:p-6 xl:p-[30px] relative h-full bg-grey-top-gradient">
                            <div className="text-primary-dark2 ">
                                <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                    Content
                                </h5>
                                <ul className="space-y-1 text-primary-dark2 list-disc mt-3 mb-2  ">
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Clarity and conciseness of the language.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Use of headings and subheadings.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Check overall readability.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <img
                                    src={rightBar}
                                    className="h-full absolute right-0 top-0 hidden xl:block"
                                    alt="bar"
                                />
                            </div>
                        </div>
                        <div className=" col-span-12 sm:col-span-6 xl:col-span-2 p-3 sm:p-6 xl:p-[30px] relative h-full">
                            <div className="text-primary-dark2 ">
                                <h5 className="text-[20px] font-bold text-primary-dark2 ">
                                    Conclusion
                                </h5>
                                <ul className="space-y-1 text-primary-dark2 list-disc mt-3 mb-2">
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Summary of UX audit.
                                    </li>
                                    <li className="text-primary-dark2 text-base md:text-[16px] font-normal">
                                        Recommendations of identified issues.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className=" col-span-12 sm:col-span-6 xl:col-span-1 md:p-5 p-3  relative h-full">
                        </div>
                    </div>

                    {/* 
                    <div className="grid xl:hidden  grid-cols-12">
                        <div className="col-span-12 sm:col-span-6 xl:col-span-2 md:p-5 p-3 py-5 sm:py-3 sm:min-h-[160px] bg-grey-top-gradient relative ">
                            <div className="flex">
                                <div className="text-primary-dark2 flex">
                                    <div className="min-w-[34px]">
                                        <h2 className="text-xl  md:text-3xl font-semibold md:leading-10">
                                            1
                                        </h2>
                                    </div>
                                    <p className="text-secondary-dark text-base md:text-xl font-normal  ">
                                        Introducing multi-lingual support so that more people join
                                        the community and communicate in their preferred language.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={rightBar}
                                    className="h-full  absolute right-0 bottom-0 hidden xl:block "
                                    alt="bar"
                                />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 xl:col-span-2 md:p-5 p-3  relative py-5 sm:py-3 sm:min-h-[160px] ">
                            <div className="flex">
                                <div className="text-primary-dark2 flex">
                                    <div className="min-w-[34px]">
                                        <h2 className="text-xl  md:text-3xl font-semibold md:leading-10">
                                            2
                                        </h2>
                                    </div>
                                    <p className="text-secondary-dark text-base md:text-xl font-normal  ">
                                        Usage of icons and/or text wherever possible to convey
                                        better communication about functionalities. (For eg;
                                        keeping text and icon in the bottom navigation together)
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={rightBar}
                                    className="h-full  absolute right-0 bottom-0 hidden xl:block"
                                    alt="bar"
                                />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 xl:col-span-2 md:p-5 p-3  relative py-5 sm:py-3 sm:min-h-[160px] bg-grey-top-gradient sm:bg-none  xl:block ">
                            <div className="flex  ">
                                <div className="text-primary-dark2 flex">
                                    <div className="min-w-[34px]">
                                        <h2 className="text-xl  md:text-3xl font-semibold md:leading-10">
                                            3
                                        </h2>
                                    </div>
                                    <p className="text-secondary-dark text-base md:text-xl font-normal  ">
                                        Introduction of bottom navigation, as research shows people
                                        find the functionalities easier to use when divided under
                                        different sections with bottom navigation.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" col-span-12 sm:col-span-6 xl:col-span-2 md:p-5 p-3  relative py-5 sm:py-3 sm:min-h-[160px] sm:bg-grey-top-gradient ">
                            <div className="flex  ">
                                <div className="text-primary-dark2 flex">
                                    <div className="min-w-[34px]">
                                        <h2 className="text-xl  md:text-3xl font-semibold md:leading-10">
                                            4
                                        </h2>
                                    </div>
                                    <p className="text-secondary-dark text-base md:text-xl font-normal  ">
                                        Keeping the user experience similar to the apps the elderly
                                        people use the most.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={rightBar}
                                    className="h-full absolute right-0 top-0 hidden xl:block"
                                    alt="bar"
                                />
                            </div>
                        </div>
                        <div className=" col-span-12 sm:col-span-6 xl:col-span-2 md:p-5 p-3  relative py-5 sm:py-3 sm:min-h-[160px] bg-grey-top-gradient">
                            <div className="flex">
                                <div className="text-primary-dark2 flex">
                                    <div className="min-w-[34px]">
                                        <h2 className="text-xl  md:text-3xl font-semibold md:leading-10">
                                            5
                                        </h2>
                                    </div>
                                    <p className="text-secondary-dark text-base md:text-xl font-normal  ">
                                        Keeping the basic features segregated and ensure easy
                                        navigation .
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
                        <div className=" col-span-12 sm:col-span-6 xl:col-span-2 md:p-5 p-3  relative py-5 sm:py-3 sm:min-h-[160px] ">
                            <div className="flex  ">
                                <div className="text-primary-dark2 flex">
                                    <div className="min-w-[34px]">
                                        <h2 className="text-xl  md:text-3xl font-semibold md:leading-10">
                                            6
                                        </h2>
                                    </div>
                                    <p className="text-secondary-dark text-base md:text-xl font-normal  ">
                                        Giving full privacy to the user about their data, including
                                        their phone number.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={rightBar}
                                    className="h-full absolute right-0 top-0 hidden xl:block"
                                    alt="bar"
                                />
                            </div>
                        </div>
                        <div className=" col-span-12 sm:col-span-6 xl:col-span-2 md:p-4 p-3  relative py-5 sm:py-3 sm:min-h-[160px] bg-grey-top-gradient sm:bg-none">
                            <div className="flex">
                                <div className="text-primary-dark2 flex">
                                    <div className="min-w-[34px]">
                                        <h2 className="text-xl  md:text-3xl font-semibold md:leading-10">
                                            7
                                        </h2>
                                    </div>
                                    <p className="text-secondary-dark text-base md:text-xl font-normal  ">
                                        Reduce spam messages .
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
                        <div className=" col-span-12 sm:col-span-6 xl:col-span-2 md:p-5 p-3 relative py-5 sm:py-3 sm:min-h-[160px] sm:bg-grey-top-gradient">
                            <div className="flex">
                                <div className="text-primary-dark2 flex">
                                    <div className="min-w-[34px]">
                                        <h2 className="text-xl  md:text-3xl font-semibold md:leading-10">
                                            8
                                        </h2>
                                    </div>
                                    <p className="text-secondary-dark text-base md:text-xl font-normal  ">
                                        Ensuring a user-friendly and hassle-free app journey.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </Container>
            </section>
  


            <div className="bg-[#2D2D2D] pt-12 2xl:pt-[80px]">
                <Container>
                    <div className="text-center flex flex-col items-center mb-7 xl:mb-20 text-white">
                        <h1 className="text-[34px] md:text-[42px] lg:text-[60px] max-w-[1250px]  text-white  font-semibold mb-base">
                            Insights are a powerful{"  "}
                            <span className="animationStroke w-fit h-fit inline-block mx-1">
                                <SVGAnimation nameOfClass="svg-container pl-4 resource" />{" "}
                                resource{" "}
                            </span>{" "}  for moving forward in business
                        </h1>
                    </div>

                    <div className="ux-audit-insights-slider-wrapper">
                        <Swiper
                            pagination={pagination}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img
                                    src={InsightSliderImg}
                                    alt="Image"
                                    className="mx-auto max-w-[80%] md:max-w-[90%] lg:max-w-full"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={InsightSliderImg}
                                    alt="Image"
                                    className="mx-auto max-w-[80%] md:max-w-[90%] lg:max-w-full"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={InsightSliderImg}
                                    alt="Image"
                                    className="mx-auto max-w-[80%] md:max-w-[90%] lg:max-w-full"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </Container>
            </div>
            <Footer consultData={consultData} />
        </main>
    );
};

export default UIBranding;
