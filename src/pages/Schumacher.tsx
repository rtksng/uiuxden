import Navbar from "../components/Navbar";
import paulSchumacherDark from "../assets/schumacher-dark.svg";
import SchumacherHeader from "../assets/schumacher-header-img.png";
import rightLongArrow from "../assets/right-long-arrow.svg";
import checkedLinesBg from "../assets/checked-lines-bg.png";
import DrivenDesign from "../components/Homepage/DrivenDesign";
import Features from "../components/Homepage/Features";
import Rating from "../components/Homepage/Rating";
import Process from "../components/Homepage/Process";
import CaseStudy from "../components/Homepage/CaseStudy";
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

const Schumacher = () => {


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
                    }`}
            >
                <Navbar />
            </div>



            <div className="relative h-[100vh] green-linear ">
                <Container>
                    <div className="text-center pt-[200px] flex flex-col items-center">
                        <img src={paulSchumacherDark} alt="schumacherlogo" width={250} className="mx-auto" />
                        <h1 className="text-[90px] text-black font-semibold mb-base">
                            Building Dream Homes
                        </h1>
                        <h3 className="text-[32px] text-primary-dark font-medium w-[70%]">
                            <span className="text-primary-dark4">
                                Schumacher Homes'
                            </span>
                            Three-Decade Journey to Perfecting a Seamless Process
                        </h3>
                    </div>
                    <div className="absolute bottom-5 left-9 ">
                        <div className="flex items-center">
                            <img src={rightLongArrow} alt="arrow" width={50} className="mx-auto" />
                            <div className="ml-3">
                                <h6 className="text-[18px] text-black font-normal">
                                    Home | Casestudy
                                </h6>
                                <h6 className="text-[18px] text-black font-normal">
                                    Schumacher Homes
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-[-40%] left-0 right-0 w-[60%] m-auto z-[9]" >
                        <img src={SchumacherHeader} alt="schumacherlogo" className="mx-auto" />
                    </div>
                </Container>
            </div>


            <div className="relative h-[100vh] checked-lines  flex justify-center items-end py-[90px] text-center">
                <Container>
                    <h6 className="text-[25px] text-black font-semibold mt-[60px] ">
                        For over 30 years, Schumacher Homes has perfected a clear and exciting process for building homes. They are committed to making the experience enjoyable, simple, and hassle-free. Schumacher Homes focuses on customer satisfaction, guiding you through each step with expertise and care to bring your vision to life.
                    </h6>
                    <div className="grid  grid-cols-3 gap-[70px] mt-[100px]">
                        <Link to={""} >
                            <div className="py-[70px] px-[55px] mask-card-schumacher h-full flex flex-col justify-center items-center mx-auto  ">


                                <h2 className="text-[30px] text-primary-dark2 font-semibold mb-2">
                                    PLATFORM
                                </h2>
                                <p className="text-[22px] text-primary-dark2 font-normal">
                                    Mobile first approach
                                </p>

                                {/* <img src={tiltarrow} alt="arrow"/> */}
                            </div>
                            {/* <img src={imgSrc} alt={title} className="mt-5 rounded-[20px] w-full" /> */}

                        </Link>

                        <Link to={""} >
                            <div className="py-[70px] px-[55px] mask-card-schumacher h-full flex flex-col justify-center items-center mx-auto ">


                                <h2 className="text-[30px] text-primary-dark2 font-semibold mb-2">
                                    DELIVERABLE
                                </h2>
                                <p className="text-[22px] text-primary-dark2 font-normal">
                                    UX research, competitor analysis, Wireframes and UI on Figma.
                                </p>

                                {/* <img src={tiltarrow} alt="arrow"/> */}
                            </div>
                            {/* <img src={imgSrc} alt={title} className="mt-5 rounded-[20px] w-full" /> */}

                        </Link>
                        <Link to={""} >
                            <div className="py-[70px] px-[55px] mask-card-schumacher h-full flex flex-col justify-center items-center mx-auto  ">


                                <h2 className="text-[30px] text-primary-dark2 font-semibold mb-2">
                                    CLIENT
                                </h2>
                                <p className="text-[22px] text-primary-dark2 font-normal">
                                    schumacherhomes.com
                                </p>

                                {/* <img src={tiltarrow} alt="arrow"/> */}

                                {/* <img src={imgSrc} alt={title} className="mt-5 rounded-[20px] w-full" /> */}
                            </div>
                        </Link>


                    </div>
                </Container>

            </div>

        </main>
    );
};

export default Schumacher;
