import Navbar from "../components/Navbar";
import paulSchumacherDark from "../assets/schumacher-dark.svg";
import SchumacherHeader from "../assets/schumacher-header-img.png";
import rightLongArrow from "../assets/right-long-arrow.svg";
import problemOne from "../assets/problem1-banner.png";
import SolutionOne from "../assets/solution-img1.png";
import SolutionTwo from "../assets/solution-img2.png";
import Midconnector from "../assets/mid-connector.png";
import Newschumacher from "../assets/new-schumacher-mobile.png";
import Problemtwobanner from "../assets/problem2-banner1.png";
import Problemtwobannerabsolute from "../assets/problem2-banner2.png";
import AddressedIssue from "../assets/addressedissue-banner.png";
import ProblemthreeBanner from "../assets/problem3-banner.png";
import ProblemthreeBannerAbsolute from "../assets/problem3-absolute.png";
import SolutionthreeBanner from "../assets/solution3-banner.png";

import Footer from "../components/Footer";
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion";
import CaseStudyCarousel from "../components/Homepage/CaseStudyCarousel";
import { useEffect, useState } from "react";
import Container from "../components/Container";

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



            <div className="relative  h-[45vh] lg:h-[100vh] green-linear ">
                <Container>
                    <div className="text-center pt-[76px] sm:pt-[90px] lg:pt-[120px] 2xl:pt-[170px] flex flex-col items-center">
                        <img src={paulSchumacherDark} alt="schumacherlogo" className="mx-auto w-[100px] sm:w-[250px]" />
                        <h1 className="text-[34px] sm:text-[48px] lg:text-[66px]  2xl:text-[90px] text-black  font-semibold mb-base">
                            Building Dream Homes
                        </h1>
                        <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] 2xl:text-[32px] text-primary-dark font-medium sm:w-[70%]">
                            <span className="text-primary-dark4">
                                Schumacher Homes'
                            </span>
                            Three-Decade Journey to Perfecting a Seamless Process
                        </h3>
                    </div>
                    
                    <div className="sm:absolute bottom-5 left-2  2xl:left-9 text-center sm:text-start mt-3 sm:mt-0 ">
                        <div className="xl:flex xl:items-center">
                            <img src={rightLongArrow} alt="arrow" width={50} className="hidden sm:block xl:mx-auto" />
                            <div className="xl:ml-3">
                                <h6 className="text-[14px] sm:text-[16px] xl:text-[18px] text-black font-normal">
                                    Home | Casestudy
                                </h6>
                                <h6 className="text-[14px] sm:text-[16px] xl:text-[18px] text-black font-normal">
                                    Schumacher Homes
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
                    src={SchumacherHeader}
                    alt="KD Graphic"
                    className="absolute inset-0 -top-[70px] sm:-top-[160px] lg:-top-[220px] 2xl:-top-[280px] max-w-[300px] sm:max-w-[500px] lg:max-w-[900px] 2xl:max-w-[1034px] mx-auto"
                />
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-center mx-auto max-w-[1350px] pt-[130px] sm:pt-[200px] lg:pt-[426px] pb-[30px] lg:pb-[84px]">
                    For over 30 years, Schumacher Homes has perfected a clear and exciting process for building homes. They are committed to making the experience enjoyable, simple, and hassle-free. Schumacher Homes focuses on customer satisfaction, guiding you through each step with expertise and care to bring your vision to life.
                </p>
            </section>

            <section>
                <Container>
                    <div className="grid grid-cols-12 gap-6 mt-[30px] lg:mt-[78px] justify-content-center">
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <div className="mask-card-schumacher p-[32px] sm:py-[60px] sm:px-[40px] h-full">
                                <h5 className="text-[26px] sm:text-[30px] font-semibold max-w-[150px]">
                                    PLATFORM
                                </h5>
                                <p className="text-[22px] ">
                                    Mobile first approach
                                </p>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <div className="mask-card-schumacher p-[32px] sm:py-[60px] sm:px-[40px] h-full">
                                <h5 className="text-[26px] sm:text-[30px] font-semibold max-w-[150px]">
                                    DELIVERABLE
                                </h5>
                                <p className="text-[22px] ">
                                    UX research, competitor analysis, Wireframes and UI on Figma.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <div className="mask-card-schumacher p-[32px] sm:py-[60px] sm:px-[40px] h-full">
                                <h5 className="text-[26px] sm:text-[30px] font-semibold max-w-[150px]">
                                    CLIENT
                                </h5>
                                <p className="text-[22px] ">
                                    schumacherhomes.com
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-[100px] 2xl:py-[150px]">

                <Container>
                    <h3 className="lg:text-center text-[30px] sm:text-[42px] lg:text-[50px] 2xl:text-[60px] font-semibold">
                        Problem statements with Our Solutions
                    </h3>
                    <div className="grid grid-cols-2 gap-10 lg:gap-20 mt-[30px] lg:mt-[70px]">
                        <div className="col-span-2 lg:col-span-1 self-center">
                            <div>
                                <div className="text-[16px] sm:text-[18px] font-semibold text-secondary-light2">
                                    PROBLEM 1
                                </div>
                                <div className="text-[20px] sm:text-[24px] lg:text-[32px] 2xl:text-[40px] font-semibold  mt-1 2xl:mt-4 mb-5 2xl:mb-8 ">
                                    Users didn’t fully understand what Schumacher Homes is about due to the lack of information on the main homepage.
                                </div>
                                <p className="text-base lg:text-lg 2xl:text-xl font-medium text-primary-dark2 w-[90%]">
                                    The homepage of the Schumacher Homes website currently features only a hero section with a video. There are no additional sections present on the homepage. This lack of content might limit the user's ability to quickly access other important information or features of the site, potentially impacting the overall user experience. Basically they wanted us to recreate the homepage and process page.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                            <img src={problemOne} alt="image" />
                        </div>
                    </div>
                    <div className=" mt-[50px] sm:mt-[100px]">
                        <div className="text-[16px] sm:text-[18px] font-semibold text-secondary-light2">
                            SOLUTION
                        </div>
                        <div className="text-[20px] sm:text-[24px] lg:text-[32px] 2xl:text-[40px] font-semibold  mt-1 2xl:mt-4 mb-5 2xl:mb-8">
                            What we did for this Problem
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-10 lg:gap-20  items-end pb-[140px]">
                        <div className="col-span-2 lg:col-span-1 self-start">
                            <div>
                                <div className="grid grid-cols-12 items-start gap-5  2xl:gap-10 ">
                                    <div className="col-span-12 sm:col-span-7 2xl:col-span-6">
                                        <p className="text-base lg:text-lg 2xl:text-xl font-medium text-primary-dark2">
                                            The client provided us with links to competitor websites, which we used to conduct a comprehensive competitor analysis. Through this analysis, we identified several important sections that are currently missing from our homepage. Based on our findings, we have presented a series of recommendations to the client to enhance the homepage’s UI/UX  Our analysis revealed that competitor websites featured intuitive and comprehensive navigation menus, making it easy for users to find key information quickly. .
                                        </p>
                                    </div>
                                    <div className="col-span-12 sm:col-span-5 2xl:col-span-6">
                                        <p className="text-base lg:text-lg 2xl:text-xl font-medium text-primary-dark2">
                                            Our current navigation structure needs to be expanded to include these crucial sections. Additionally, competitors clearly communicated their value propositions on the homepage, something we need to emulate to highlight what sets us apart and the benefits we offer to our users.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-span-2 lg:col-span-1">
                            <div className="relative w-[70%] sm:w-auto mx-auto sm:mx-0">
                                <img src={SolutionOne} alt="image" />
                                <img src={SolutionTwo} alt="image" className="absolute top-[80%]  2xl:top-[80%] right-[40px] sm:right-[10px]  lg:right-[50%] 2xl:right-[87%]" />
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-12 gap-3 sm:mt-[120px] 2xl:mt-[100px] items-center pt-[70px] pb-0 2xl:py-[140px] ">
                        <div className="col-span-12 sm:col-span-4 order-last md:order-first">
                            <div className="flex items-center justify-center sm:justify-start">
                                <img src={Newschumacher} alt="image" className="w-[60%] sm:w-auto " />
                            </div>
                        </div>
                        <div className="col-span-1 lg:col-span-2 hidden sm:block">
                            <div className="flex items-center justify-center">
                                <img src={Midconnector} alt="image" />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-7 lg:col-span-6 ">
                            <div className="bg-secondary-dark2 rounded-3xl text-base lg:text-lg 2xl:text-xl font-medium text-primary-dark2 text-white mx-auto">
                                <div className="grid grid-cols-4 items-start gap-4 p-[25px] lg:p-[50px]">
                                    <div className="col-span-4 lg:col-span-2">
                                        <p className="mb-4">
                                            Based on our competitor analysis, we created a detailed plan for the homepage, highlighting all key sections and ensuring easy navigation. We sent this plan to the client and, after receiving approval, developed wireframes to visually map out the layout.
                                        </p>
                                        <p>
                                            Next, we designed the user interface (UI), focusing on a modern and attractive look. We
                                        </p>
                                    </div>
                                    <div className="col-span-4 lg:col-span-2">
                                        <p className="mb-4">
                                            carefully chose colors, fonts, and images to make the homepage engaging and user-friendly.
                                        </p>
                                        <p className="">
                                            The final result is a well-structured, visually appealing homepage that clearly communicates our client's value and enhances the user experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="problem2-section">
                <Container>
                    <div className="grid grid-cols-2 gap-10 lg:gap-20  items-center justify-content-center pt-[50px] lg:pt-[100px] 2xl:pt-[150px] pb-[100px] sm:pb-[200px] lg:pb-[300px] 2xl:mt-[0px]  border-dashed border-b-2 border-[rgba(255,255,255,0.20)] text-white ">
                        <div className="col-span-2 lg:col-span-1 ">
                            <div>
                                <div className="text-[16px] sm:text-[18px] font-semibold text-secondary-light2">
                                    PROBLEM 2
                                </div>
                                <div className="text-[20px] sm:text-[24px] lg:text-[32px] 2xl:text-[40px] font-semibold  mt-1 2xl:mt-4 mb-5 2xl:mb-8">
                                    Difficulty in Accessing Key Information Due to Overly Complex Navigation.
                                </div>
                                <p className="text-base lg:text-lg 2xl:text-xl font-medium ">
                                    The navigational structure of the Schumacher Homes was found to be overly complicated. Users consistently reported difficulty locating essential pages, most notably the Process page, which is crucial for understanding our building procedures and services. This page contains vital information that helps users navigate the home-building journey, yet it remains buried within a complex and unintuitive menu system.
                                </p>

                            </div>
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                            <div className="relative ">
                                <img src={Problemtwobanner} alt="image" />
                                <img src={Problemtwobannerabsolute} alt="image" className="absolute top-[60%]  lg:top-[77%] right-[10px] lg:right-[87%]" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 sm:gap-10 lg:gap-20  items-center  py-[50px] lg:py-[100px] 2xl:py-[130px]  ">
                        <div className="col-span-1 hidden lg:block"></div>

                        <div className="col-span-12 sm:col-span-8 lg:col-span-6">
                            <div className="address-content-wrapper w-100 text-white p-5  sm:py-9 sm:px-9 lg:py-[40px] lg:px-[50px] 2xl:pt-[100px] 2xl:pr-[60px] 2xl:pb-[70px] 2xl:pl-[45px] ">
                                <div className="text-[20px] sm:text-[24px] lg:text-[32px] 2xl:text-[40px] font-semibold  mt-1 2xl:mt-4 mb-5 2xl:mb-8">
                                    How we addressed this issue.                                </div>
                                <p className="text-base lg:text-lg 2xl:text-xl font-medium ">
                                    After reviewing Schumacher's website navigation and layout, we found it caused significant confusion among users. To tackle this issue, we analyzed real user data research to understand the extent of the problem. Based on what we learned, we provided recommendations to the client and then developed wireframes and UI designs that follow the best practices in user-friendly design.
                                </p>
                            </div>
                        </div>

                        <div className="col-span-12 sm:col-span-4">
                            <div className="relative w-[60%] sm:w-auto mx-auto sm:mx-0 pt-5 sm:pt-0">
                                <img src={AddressedIssue} alt="image" />
                            </div>
                        </div>

                        <div className="lg:col-span-1 hidden lg:block"></div>
                    </div>
                </Container>
            </section>

            <section className=" pt-[50px] lg:pt-[140px]">
                <Container>
                    <div className="grid grid-cols-2 gap-10 lg:gap-20  items-end pb-[140px]">
                        <div className="col-span-2 lg:col-span-1 self-start">
                            <div>
                                <div className="text-[16px] sm:text-[18px] font-semibold text-secondary-light2">
                                    PROBLEM 3
                                </div>
                                <div className="text-[20px] sm:text-[24px] lg:text-[32px] 2xl:text-[40px] font-semibold  mt-1 2xl:mt-4 mb-5 2xl:mb-8">
                                    Enhancing the Process Screen with Detailed Information
                                </div>
                                <p className="text-base lg:text-lg 2xl:text-xl font-medium text-primary-dark2">
                                    The client requested a redesign of the Process screen to incorporate more detailed information. The aim was to provide users with a clearer and more comprehensive understanding of the procedures involved. By expanding the content and improving the layout, the redesigned screen will offer a more informative and user-friendly experience, ensuring that all necessary details are easily accessible and clearly presented.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                            <div className="relative">
                                <img src={ProblemthreeBanner} alt="image" />
                                <img src={ProblemthreeBannerAbsolute} alt="image" className="absolute top-[60%] right-[10px] lg:right-[40%]" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-0 lg:mt-[80px] items-center sm:py-[70px] 2xl:py-[140px]">
                        <div className="col-span-12">
                            <div className="text-[20px] sm:text-[24px] lg:text-[32px] 2xl:text-[40px] font-semibold mt-4 mb-4 sm:mb-9 lg:mb-[90px] text-center">
                                Our approach to solving this problem.
                            </div>
                        </div>

                        <div className="col-span-12 sm:col-span-4 lg:col-span-5">
                            <div className="flex items-center justify-end">
                                <img src={SolutionthreeBanner} alt="image" className="w-[60%] sm:w-auto mx-auto sm:mx-0 pt-5 sm:pt-0" />
                            </div>
                        </div>
                        <div className="col-span-1 hidden sm:block">
                            <div className="flex items-center justify-center">
                                <img src={Midconnector} alt="image" />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-7 lg:col-span-6 ">
                            <div className="bg-secondary-dark2 rounded-3xl text-base lg:text-lg 2xl:text-xl font-medium text-primary-dark2 text-white mx-auto mt-5 sm:mt-0">
                                <div className="grid grid-cols-4 items-start gap-1 lg:gap-6 p-[25px] lg:p-[50px]">
                                    <div className="col-span-4 lg:col-span-2">
                                        <p >
                                            We conducted a thorough competitor analysis of the Process screen using the websites provided by the client. This analysis allowed us to identify best practices and effective design elements used by competitors. Based on these insights, we formulated detailed recommendations for enhancing the client's Process screen.
                                        </p>
                                    </div>
                                    <div className="col-span-4 lg:col-span-2">
                                        <p >
                                            After presenting and discussing these recommendations with the client, we moved forward with developing wireframes to map out the improved structure. Finally, we created comprehensive UI designs that incorporated our findings, ensuring a more intuitive and user-friendly experience for visitors.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <Footer />

        </main>
    );
};

export default Schumacher;
