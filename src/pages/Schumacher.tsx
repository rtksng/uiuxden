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

                    {/* <div className="absolute bottom-[-40%] left-0 right-0 w-[60%] m-auto z-[9]" >
                        <img src={SchumacherHeader} alt="schumacherlogo" className="mx-auto" />
                    </div> */}
                </Container>
            </div>

            <section className="pHighLightBg relative">
                <img
                    src={SchumacherHeader}
                    alt="KD Graphic"
                    className="absolute inset-0 -top-[300px] max-w-[1034px] mx-auto"
                />


                <p className="text-2xl font-semibold text-center mx-auto max-w-[1350px] pt-[426px] pb-[84px]">
                    For over 30 years, Schumacher Homes has perfected a clear and exciting process for building homes. They are committed to making the experience enjoyable, simple, and hassle-free. Schumacher Homes focuses on customer satisfaction, guiding you through each step with expertise and care to bring your vision to life.
                </p>
            </section>

            <section>
                <Container>
                    <div className="grid grid-cols-12 gap-6 mt-[78px]">
                        <div className="col-span-4">
                            <div className="mask-card-schumacher py-[60px] px-[40px] h-full">
                                <h5 className="text-[30px] font-semibold max-w-[150px]">
                                    PLATFORM
                                </h5>
                                <p className="text-[22px] ">
                                    Mobile first approach
                                </p>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="mask-card-schumacher py-[60px] px-[40px] h-full">
                                <h5 className="text-[30px] font-semibold max-w-[150px]">
                                    DELIVERABLE
                                </h5>
                                <p className="text-[22px] ">
                                    UX research, competitor analysis, Wireframes and UI on Figma.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="mask-card-schumacher py-[60px] px-[40px] h-full">
                                <h5 className="text-[30px] font-semibold max-w-[150px]">
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

            <section className="py-[150px]">
                <h3 className="text-center text-[60px] font-semibold">
                    Problem statements with Our Solutions
                </h3>
                <Container>
                    <div className="grid grid-cols-2 gap-20 mt-[70px]">
                        <div className="col-span-1 self-center">
                            <div>
                                <div className="text-[18px] font-semibold text-secondary-light2">
                                    PROBLEM 1
                                </div>
                                <div className="text-[40px] font-semibold mt-4 mb-8">
                                    Users didn’t fully understand what Schumacher Homes is about due to the lack of information on the main homepage.
                                </div>
                                <p className="text-xl font-medium">
                                    The homepage of the Schumacher Homes website currently features only a hero section with a video. There are no additional sections present on the homepage. This lack of content might limit the user's ability to quickly access other important information or features of the site, potentially impacting the overall user experience. Basically they wanted us to recreate the homepage and process page.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <img src={problemOne} alt="image" />
                        </div>
                    </div>
                    <div className="mt-[100px]">
                        <div className="text-[18px] font-semibold text-secondary-light2">
                            SOLUTION
                        </div>
                        <div className="text-[40px] font-semibold mt-4 mb-8">
                            What we did for this Problem
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-20  items-end pb-[140px]">
                        <div className="col-span-1 self-start">
                            <div>


                                <div className="grid grid-cols-5 items-start gap-4 ">
                                    <div className="col-span-3">
                                        <p className="text-xl font-medium">
                                            The homepage of the Schumacher Homes website currently features only a hero section with a video. There are no additional sections present on the homepage. This lack of content might limit the user's ability to quickly access other important information or features of the site, potentially impacting the overall user experience. Basically they wanted us to recreate the homepage and process page.
                                        </p>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="text-xl font-medium">
                                            Our current navigation structure needs to be expanded to include these crucial sections. Additionally, competitors clearly communicated their value propositions on the homepage, something we need to emulate to highlight what sets us apart and the benefits we offer to our users.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="relative">
                                <img src={SolutionOne} alt="image" />
                                <img src={SolutionTwo} alt="image" className="absolute top-[77%] right-[87%]" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-3 mt-[100px] items-center py-[140px]">
                        <div className="col-span-4">
                            <div className="flex items-center">
                                <img src={Newschumacher} alt="image" />
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex items-center justify-center">
                                <img src={Midconnector} alt="image" />
                            </div>
                        </div>
                        <div className="col-span-5 ">
                            <div className="bg-secondary-dark2 rounded-3xl text-xl font-medium text-white mx-auto">
                                <div className="grid grid-cols-4 items-start gap-4 p-[50px]">
                                    <div className="col-span-2">
                                        <p className="mb-4">
                                            Based on our competitor analysis, we created a detailed plan for the homepage, highlighting all key sections and ensuring easy navigation. We sent this plan to the client and, after receiving approval, developed wireframes to visually map out the layout.
                                        </p>
                                        <p>
                                            Next, we designed the user interface (UI), focusing on a modern and attractive look. We
                                        </p>
                                    </div>
                                    <div className="col-span-2">
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
                    <div className="grid grid-cols-2 gap-20  items-end justify-content-center pt-[150px] pb-[300px] mt-[100px]  border-dashed border-b-2 border-[rgba(255,255,255,0.20)] text-white ">
                        <div className="col-span-1 self-start">
                            <div>

                                <div className="text-[18px] font-semibold text-secondary-light2">
                                    PROBLEM 2
                                </div>
                                <div className="text-[40px] font-semibold mt-4 mb-8">
                                    Difficulty in Accessing Key Information Due to Overly Complex Navigation.
                                </div>
                                <p className="text-xl font-medium">
                                    The navigational structure of the Schumacher Homes was found to be overly complicated. Users consistently reported difficulty locating essential pages, most notably the Process page, which is crucial for understanding our building procedures and services. This page contains vital information that helps users navigate the home-building journey, yet it remains buried within a complex and unintuitive menu system.
                                </p>

                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="relative">
                                <img src={Problemtwobanner} alt="image" />
                                <img src={Problemtwobannerabsolute} alt="image" className="absolute top-[77%] right-[87%]" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-20  items-center py-[130px]  ">
                        <div className="col-span-1"></div>

                        <div className="col-span-6">
                            <div className="address-content-wrapper w-100 text-white ">
                                <div className="text-[40px] font-semibold mt-4 mb-8">
                                    How we addressed this issue.                                </div>
                                <p className="text-xl font-medium">
                                    After reviewing Schumacher's website navigation and layout, we found it caused significant confusion among users. To tackle this issue, we analyzed real user data research to understand the extent of the problem. Based on what we learned, we provided recommendations to the client and then developed wireframes and UI designs that follow the best practices in user-friendly design.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="relative">
                                <img src={AddressedIssue} alt="image" />
                            </div>
                        </div>
                        <div className="col-span-1"></div>

                    </div>
                </Container>
            </section>

            <section className="pt-[140px]">
                <Container>


                    <div className="grid grid-cols-2 gap-20  items-end pb-[140px]">
                        <div className="col-span-1 self-start">
                            <div>



                                <div className="text-[18px] font-semibold text-secondary-light2">
                                    PROBLEM 3
                                </div>
                                <div className="text-[40px] font-semibold mt-4 mb-8">
                                    Enhancing the Process Screen with Detailed Information
                                </div>




                                <p className="text-xl font-medium">

                                    The client requested a redesign of the Process screen to incorporate more detailed information. The aim was to provide users with a clearer and more comprehensive understanding of the procedures involved. By expanding the content and improving the layout, the redesigned screen will offer a more informative and user-friendly experience, ensuring that all necessary details are easily accessible and clearly presented.
                                </p>


                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="relative">
                                <img src={ProblemthreeBanner} alt="image" />
                                <img src={ProblemthreeBannerAbsolute} alt="image" className="absolute top-[60%] right-[40%]" />
                            </div>
                        </div>
                    </div>


                    <div className="grid grid-cols-12 gap-0 mt-[100px] items-center py-[140px]">
                        <div className="col-span-12">
                            <div className="text-[40px] font-semibold mt-4 mb-8 text-center">
                                Our approach to solving this problem.
                            </div>
                        </div>

                        <div className="col-span-5">
                            <div className="flex items-center justify-end">
                                <img src={SolutionthreeBanner} alt="image" />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex items-center justify-center">
                                <img src={Midconnector} alt="image" />
                            </div>
                        </div>
                        <div className="col-span-6 ">
                            <div className="bg-secondary-dark2 rounded-3xl text-xl font-medium text-white mx-auto">
                                <div className="grid grid-cols-4 items-start gap-4 p-[50px]">
                                    <div className="col-span-2">
                                        <p >
                                            We conducted a thorough competitor analysis of the Process screen using the websites provided by the client. This analysis allowed us to identify best practices and effective design elements used by competitors. Based on these insights, we formulated detailed recommendations for enhancing the client's Process screen.
                                        </p>
                                    </div>
                                    <div className="col-span-2">
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
