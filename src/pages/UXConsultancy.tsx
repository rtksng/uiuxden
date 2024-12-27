import Navbar from "../components/Navbar";
import rightLongArrow from "../assets/right-long-arrow.svg";
import Container from "../components/Container";
import { useEffect, useState } from "react";
import ReachUs from "../assets/uxconsult-reachusimg.png"
import ReachArrows from "../assets/reachus-arrows.svg"
import BannerImg from "../assets/uxconsultancy-bannerimg.svg"
import Footer from "../components/Footer";
const UXConsultancy = () => {

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
            <div className={`fixed top-0 left-0 w-full z-[120] transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"
                }`} >
            </div>
            <Navbar />

            {/* ---------- Banner Section ---------- */}
            <div className="relative h-[auto] lg:h-[100vh] green-linear py-12">
                <Container>
                    <div className="text-center pt-[80px]  sm:pt-[120px] 2xl:pt-[170px] flex flex-col items-center">
                        <h1 className="text-[34px] sm:text-[48px] max-w-[1400px] lg:text-[66px]  2xl:text-[90px] text-black  font-semibold mb-base">
                            UIUXDen, Discover new business opportunities.
                        </h1>
                    </div>

                    <div className="lg:absolute bottom-5 left-2  2xl:left-9 text-center lg:text-start mt-3 sm:mt-0 ">
                        <div className="xl:flex xl:items-center">
                            <img src={rightLongArrow} alt="arrow" width={50} className="hidden lg:block xl:mx-auto" />
                            <div className="ml-3">
                                <h6 className="text-[14px] sm:text-[16px] xl:text-[18px] text-black font-normal">
                                    Home | UX Consultancy
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center flex-wrap items-center mt-5">
                        <img src={BannerImg} alt="banner image" className='md:max-w-[70%] lg:max-w-full'/>
                    </div>


                </Container>
            </div>

            {/* --------- Budget Friendly Section --------- */}
            <div className="py-8 lg:py-20">
                <Container>
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-7 xl:col-span-6 pr-20 mb-8 mlg:mb-0">
                            <p className='text-[24px] text-center md:text-start md:text-[60px] font-semibold'>
                                Reach your full potential
                                with creative UIUXDen
                            </p>

                            <div className="flex gap-5 mt-4 lg:mt-8">
                                <div className="img-box hidden md:block">
                                    <img src={ReachArrows} alt="Arrows" className='hidden' />
                                    <svg className='w-[28px] lg:w-[36px] lg:h-[344px]' viewBox="0 0 36 344" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 0L1 8.25L1 18.9303C1 25.59 5.53706 31.3932 12 33V33V33C5.38571 35.4667 1 41.783 1 48.8422L1 57.75V114.875V128.115C1 135.304 5.34681 141.778 12 144.5V144.5V144.5C5.50551 146.271 1 152.17 1 158.902V198V237.898C1 245.086 5.34681 251.561 12 254.282V254.282V254.282C5.34681 257.004 1 263.479 1 270.667L1 289.114L1 307.337L1 343.782" stroke="black" />
                                        <path d="M35.3868 33L32.5 30.1132L29.6132 33L32.5 35.8868L35.3868 33ZM12 33.5H32.5V32.5H12V33.5Z" fill="black" />
                                        <path d="M35.3868 144.5L32.5 141.613L29.6132 144.5L32.5 147.387L35.3868 144.5ZM12 145H32.5V144H12V145Z" fill="black" />
                                        <path d="M35.3868 254.285L32.5 251.398L29.6132 254.285L32.5 257.172L35.3868 254.285ZM12 254.785H32.5V253.785H12V254.785Z" fill="black" />
                                    </svg>
                                </div>
                                <div className="list-box mt-5">
                                    <div className="2xl:max-w-[70%] mb-3">
                                        <p className='text-xl font-medium mb-4 text-center md:text-start'>
                                            Create exceptional user experiences
                                        </p>
                                        <p className='text-[#767676] text-center md:text-start'>
                                            In order to craft a plan for how to get somewhere, you first have to know where you’re going and why.
                                        </p>
                                    </div>
                                    <div className="2xl:max-w-[70%] mb-3">
                                        <p className='text-xl font-medium mb-4 text-center md:text-start'>
                                            Improve the UX maturity of your company
                                        </p>
                                        <p className='text-[#767676] text-center md:text-start'>
                                            A UX consultant can evaluate your business needs and address them through UX recommendations
                                        </p>
                                    </div>
                                    <div className="2xl:max-w-[70%]">
                                        <p className='text-xl font-medium mb-4 text-center md:text-start'>
                                            Increase ROI
                                        </p>
                                        <p className='text-[#767676] text-center md:text-start'>
                                            UX Advisory & Consulting helps you outrun the competition by providing expert advice and support
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-span-12 lg:col-span-5 xl:col-span-6">
                            <img src={ReachUs} alt="Image" className='mx-auto max-w-[70%] lg:max-w-full' />
                        </div>
                    </div>
                </Container>

            </div>

            <Footer />
        </main>


    )
}

export default UXConsultancy
