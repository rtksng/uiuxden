import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import knowledgerblack from "../../assets/Knowledgerblack.svg";
import kd from "../../assets/kd.png";
import stackBg from "../../assets/stackbg.png";
import Footer from "../../components/Footer";
import ElymentsUnderstand from "../../assets/elyments-understand-banner.png";
import kl from "../../assets/kl.png";
import rightBar from "../../assets/rightbar.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ElymentsMainBanner from "../../assets/elyments-main-banner.png";
import rightLongArrow from "../../assets/right-long-arrow.svg";
import Midconnector from "../../assets/mid-connector.png";
import MidconnectorRotated from "../../assets/rotated-mid-connector.png";
import Newschumacher from "../../assets/new-schumacher-mobile.png";
import "swiper/css";
import "swiper/css/pagination";
import ElymentsSolution from "../../assets/elyments-solution.png";
import { useRef, useState } from "react";
import GoodbyeBanner from "../../assets/goodbye-banner.png";
import EnvisioningFirst from "../../assets/envisioning-first-banner.png";
import EnvisioningSecond from "../../assets/envisioning-second-banner.png";
import EnvisioningThird from "../../assets/envisioning-three-banner.png";
import EnvisioningFourth from "../../assets/envisioning-fourth-banner.png";
import ExpandMainBanner from "../../assets/expand-main-banner.png";

import ExpandLeftFirstAbsolute from "../../assets/expand-left-first-absolute.png";
import ExpandLeftSecondAbsolute from "../../assets/expand-left-second-absolute.png";
import ExpandLeftThirdAbsolute from "../../assets/expand-left-third-absolute.png";
import ExpandLeftFourthAbsolute from "../../assets/expand-left-fourth-absolute.png";
import ExpandRightFirstAbsolute from "../../assets/expand-right-first-absolute.png";
import ExpandRightSecondAbsolute from "../../assets/expand-right-second-absolute.png";
import ExpandRightThirdAbsolute from "../../assets/expand-right-third-absolute.png";





import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion";

import { useEffect } from "react";




const Elyments = () => {
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
            <Navbar />
            <div
                className={`fixed top-0 left-0 w-full z-[120] transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"
                    }`} >
                <Navbar />
            </div>
            <div className="relative h-[70vh] sm:h-[45vh] lg:h-[100vh] green-linear">
                <Container>
                    <div className="text-center pt-[80px] sm:pt-[120px] 2xl:pt-[170px] flex flex-col items-center">
                        {/* <img src={VoltLogo} alt="logo" width={250} className="mx-auto w-[100px] sm:w-[250px]" /> */}
                        <h1 className="text-[34px] sm:text-[48px] lg:text-[66px]  2xl:text-[90px] text-black  font-semibold mb-base">
                            Private. Indian. Simple.
                            Call and Chat with elymentsTM
                        </h1>
                    </div>

                    <div className="sm:absolute bottom-5 left-2  2xl:left-9 text-center sm:text-start mt-3 sm:mt-0 ">
                        <div className="xl:flex xl:items-center">
                            <img src={rightLongArrow} alt="arrow" width={50} className="hidden sm:block xl:mx-auto" />
                            <div className="ml-3">
                                <h6 className="text-[14px] sm:text-[16px] xl:text-[18px] text-black font-normal">
                                    Home | Casestudy
                                </h6>
                                <h6 className="text-[14px] sm:text-[16px] xl:text-[18px] text-black font-normal">
                                    Elyments
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
                    src={ElymentsMainBanner}
                    alt="KD Graphic"
                    className="absolute inset-0 -top-[70px] sm:-top-[160px] lg:-top-[220px] 2xl:-top-[280px] max-w-[300px] sm:max-w-[500px] lg:max-w-[900px] 2xl:max-w-[1034px] mx-auto"
                />
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-center mx-auto max-w-[1350px] pt-[130px] sm:pt-[200px] lg:pt-[426px] pb-[30px] lg:pb-[84px]">
                    Developed in India, elyments is a message and voice over application. The communication platform allows users to make calls and chat with their contacts while addressing the current privacy concerns of the users in India. Making messaging and calling a secure and accessible experience for all users, elyments is all set to cater to the evolving needs of modern customers in today’s digital landscape.
                </p>
            </section>

            <section className="py-[50px] sm:py-[100px] 2xl:py-[150px]">
                <Container>
                    <div className="grid grid-cols-2 gap-20 mt-[70px]">
                        <div className="col-span-2 lg:col-span-1 self-center">
                            <div>
                                <div className="text-[16px] sm:text-[18px] font-semibold text-secondary-light2">
                                    ELYMENTS
                                </div>
                                <div className="text-[32px] 2xl:text-[40px] font-semibold  mt-1 2xl:mt-4 mb-5 2xl:mb-8 ">
                                    Understanding the pain points
                                </div>
                                <h6>
                                    Let’s take a glance at the major pain points of users while using Whatsapp!
                                </h6>
                                <ul>
                                    <li>
                                        <p className="text-lg 2xl:text-xl font-medium text-primary-dark2 sm:w-[90%] mb-4">
                                            WhatsApp is battling trust issues amongst users soon after it updated its privacy policy under which the platform would share some user data with the parent company, Facebook, and other group firms, and the backlash risks thwarting its ambitions in its biggest market, i.e., India.
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-lg 2xl:text-xl font-medium text-primary-dark2 sm:w-[90%] mb-4">
                                            Users now have to share their number in case they want to add someone and communicate.
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-lg 2xl:text-xl font-medium text-primary-dark2 sm:w-[90%] mb-4">
                                            Absence of multilingual support, Whatsapp is currently available in one language- English, which is not understood by all.
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-lg 2xl:text-xl font-medium text-primary-dark2 sm:w-[90%] mb-4">
                                            One can forward a message to a maximum of 5 contacts at one time.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                            <img src={ElymentsUnderstand} alt="image" />
                        </div>
                    </div>
                </Container>
            </section>

            <section className="problem2-section">
                <Container>
                <div>
                                <h6>
                                    PART 1
                                </h6>
                                <div className="text-[20px] sm:text-[24px] lg:text-[32px] 2xl:text-[40px] font-semibold  mt-1 2xl:mt-4 mb-5 2xl:mb-8">
                                    Identifying the users based on their age group.
                                </div>
                                <div className="text-[16px] sm:text-[18px] font-semibold text-secondary-light2">
                                    Dividing users based on multiple parameters
                                </div>

                                <p className="text-base lg:text-lg 2xl:text-xl font-medium ">
                                    The navigational structure of the Schumacher Homes was found to be overly complicated. Users consistently reported difficulty locating essential pages, most notably the Process page, which is crucial for understanding our building procedures and services. This page contains vital information that helps users navigate the home-building journey, yet it remains buried within a complex and unintuitive menu system.
                                </p>

                            </div>
                </Container>
            </section>

            <section>
                <Container>
                    <div className="flex ">
                        <div className="flex justify-end">
                            <div className="grid grid-cols-10 ">
                                <div className="col-span-12 sm:col-span-6 xl:col-span-3 md:p-5 p-3  relative ">
                                    <div className="flex">
                                        <div className="text-primary-dark2">
                                            <h2 className=" text-[24px] md:text-[60px] font-semibold md:leading-10">
                                                The
                                            </h2>
                                            <h2 className=" text-[24px] md:text-[80px] font-semibold md:leading-20">
                                                Ideation
                                            </h2>
                                            <p className="text-secondary-dark  mt-3 text-lg md:text-2xl">
                                                Considering all these parameters,
                                                we emphasize on:
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-2 md:p-5 p-3  relative ">
                                    <div className="flex">
                                        <div className="text-primary-dark2 flex pt-[70px]">
                                            <div className="min-w-[34px]">
                                                <h2 className="text-xl  md:text-3xl font-semibold md:leading-10">
                                                    1
                                                </h2>
                                            </div>
                                            <p className="text-secondary-dark text-base md:text-xl font-normal  ">
                                                Introducing multi-lingual support so that more people join the community and communicate
                                                in their preferred language.
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
                                <div className="col-span-12 sm:col-span-6 xl:col-span-2 md:p-5 p-3  relative ">
                                    <div className="flex">
                                        <div className="text-primary-dark2 flex pt-[70px]">
                                            <div className="min-w-[34px]">
                                                <h2 className="text-xl  md:text-3xl font-semibold md:leading-10">
                                                    2
                                                </h2>
                                            </div>
                                            <p className="text-secondary-dark text-base md:text-xl font-normal  ">
                                                Usage of icons and/or text wherever possible to convey better communication about
                                                functionalities. (For eg;  keeping text and icon in the bottom navigation together)
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
                                <div className="col-span-12 sm:col-span-6 xl:col-span-2 md:p-5 p-3  relative hidden xl:block relative  bg-grey-bottom-gradient ">
                                    <div className="flex  ">
                                        <div className="text-primary-dark2 flex pt-[70px]">
                                            <div className="min-w-[34px]">
                                                <h2 className="text-xl  md:text-3xl font-semibold md:leading-10">
                                                    3
                                                </h2>
                                            </div>
                                            <p className="text-secondary-dark text-base md:text-xl font-normal  ">
                                                Introduction of bottom navigation, as research shows people find the functionalities
                                                easier to use when divided under different sections with bottom navigation.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-span-1 "></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-10 xl:border-t-[1px] xl:border-t-primary-dark2">

                        <div className=" col-span-12 sm:col-span-6 xl:col-span-2 md:p-5 p-3  relative h-full bg-grey-top-gradient">
                            <div className="flex  ">
                                <div className="text-primary-dark2 flex">
                                    <div className="min-w-[34px]">
                                        <h2 className="text-xl  md:text-3xl font-semibold md:leading-10">
                                            4
                                        </h2>
                                    </div>
                                    <p className="text-secondary-dark text-base md:text-xl font-normal  ">
                                        Keeping the user experience similar to the apps the elderly people use the most.
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
                        <div className=" col-span-12 sm:col-span-6 xl:col-span-2 md:p-5 p-3  relative h-full">
                            <div className="flex">
                                <div className="text-primary-dark2 flex">
                                    <div className="min-w-[34px]">
                                        <h2 className="text-xl  md:text-3xl font-semibold md:leading-10">
                                            5
                                        </h2>
                                    </div>
                                    <p className="text-secondary-dark text-base md:text-xl font-normal  ">
                                        Keeping the basic features segregated and ensure easy navigation .

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
                        <div className=" col-span-12 sm:col-span-6 xl:col-span-2 md:p-5 p-3  relative h-full bg-grey-top-gradient">
                            <div className="flex  ">
                                <div className="text-primary-dark2 flex">
                                    <div className="min-w-[34px]">
                                        <h2 className="text-xl  md:text-3xl font-semibold md:leading-10">
                                            6
                                        </h2>
                                    </div>
                                    <p className="text-secondary-dark text-base md:text-xl font-normal  ">
                                        Giving full privacy to the user about their data, including their phone number.
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
                        <div className=" col-span-12 sm:col-span-6 xl:col-span-2 md:p-4 p-3  relative h-full">
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
                        <div className=" col-span-12 sm:col-span-6 xl:col-span-2 md:p-5 p-3 relative h-full">
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
                    </div>
                </Container>
            </section>



            <section className="py-[50px] sm:py-[100px] 2xl:py-[150px]">
                <Container>
                    <div className="grid grid-cols-2 gap-20 mt-[70px]">
                        <div className="col-span-2 lg:col-span-1 self-center">
                            <div>
                                <div className="text-[16px] sm:text-[18px] font-normal text-secondary-light2">
                                    ELYMENTS
                                </div>
                                <div className="text-[32px] 2xl:text-[40px] font-semibold  mt-1 2xl:mt-4 mb-5 2xl:mb-8 ">
                                    The Solution
                                </div>
                                <p className="text-lg 2xl:text-xl font-medium text-primary-dark2 sm:w-[90%] mb-4">
                                    With the rapid customers losing trust in WhatsApp due to privacy concerns with their personal data, we at UIUXDen developed elyments- India’s very own app that solves all the purposes perfectly! elyments provides clear and unambiguous guidelines related to the privacy policy and never shares user data with any third party. Not just this, the user’s data is entirely stored within India and never shared outside the country.

                                </p>
                                <p className="text-lg 2xl:text-xl font-medium text-primary-dark2 sm:w-[90%] mb-4">
                                    Elyments make it possible for users to chat and call with a person without sharing their phone number, which wasn’t possible otherwise. Users can now choose their own unique username and can add other users over elyments using the same, without sharing their phone numbers. This further ensures minimized crimes and fraudulent activities, fewer spam, and maintaining privacy throughout the user journey.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                            <img src={ElymentsSolution} alt="image" />
                        </div>
                    </div>
                </Container>
            </section>
            <section className="pt-[50px] sm:pt-[100px] 2xl:pt-[150px] text-center bg-grey-top-gradient">
                <Container>
                    <h3 className="text-center text-black text-[32px] sm:text-[48px] xl:text-[84px] font-semibold ">
                        Expand Your Network
                    </h3>
                    <h4 className="text-center text-black text-[28px] sm:text-[40px] xl:text-[60px] font-normal mb-9  2xl:mb-[50px]">
                        in a few click
                    </h4>
                    <p className="text-center text-black text-[16px] sm:text-[18px] xl:text-[24px] font-normal mb-3 2xl:mb-6">
                        elyments come in 10 different languages, thus connecting more users and also increasing the user base. It also makes it easy for people who are more comfortable in their regional language, hence making it more user-friendly.
                    </p>
                    <p className="text-center text-black text-[16px] sm:text-[18px] xl:text-[24px] font-normal">
                        elyments allow users to add upto 300 members in a group, which can extend upto 10,000. This will help large business owners and groups that have a lot of members, some business owners add their potential customers in one group to forward their products, instead of
                        sending it to multiple groups, they can send it to one group now.
                    </p>
                    <div className="pt-[190px]  flex justify-center">
                        <div className=" relative">
                            <img src={ExpandMainBanner} alt="image" className="mx-auto" />


                            <img src={ExpandLeftFirstAbsolute} alt="image" className="absolute -bottom-[7px] -left-[177px]" />
                            <img src={ExpandLeftSecondAbsolute} alt="image" className="absolute bottom-[30%] -left-[277px]" />
                            <img src={ExpandLeftThirdAbsolute} alt="image" className="absolute top-[20%] -left-[80px]" />
                            <img src={ExpandLeftFourthAbsolute} alt="image" className="absolute -top-[20%] -left-[150px]" />
                            <img src={ExpandRightFirstAbsolute} alt="image" className="absolute bottom-[15%] -right-[200px]" />
                            <img src={ExpandRightSecondAbsolute} alt="image" className="absolute top-[25%] -right-[150px]" />
                            <img src={ExpandRightThirdAbsolute} alt="image" className="absolute -top-[10%] right-[50px]" />
                        </div>


                    </div>
                </Container>
            </section>

            <section className="py-[50px] sm:py-[80px] 2xl:py-[110px]">
                <Container>
                    <div className="px-[130px]">
                        <div className="grid grid-cols-2 gap-10">

                            <div className="col-span-2 lg:col-span-1">
                                <img src={GoodbyeBanner} alt="image" />
                            </div>
                            <div className="col-span-2 lg:col-span-1 self-center">
                                <div>

                                    <div className="text-[32px] 2xl:text-[40px] font-semibold  mt-1 2xl:mt-4 mb-4 2xl:mb-6  2xl:w-[65%]">
                                        Say goodbye to
                                        spams!
                                    </div>
                                    <p className="text-lg 2xl:text-xl font-medium text-primary-dark2 sm:w-[90%] mb-4">
                                        With the growing spam and malicious activities in recent times, elyments is all set to cater to all the security concerns of the users. Elyments support system works around the clock to make sure and verify the messages that are reported as spam. Once any message
                                        is reported as spam by a minimum of 50 users, elyments team verifies the same and takes action accordingly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>


            <section>
                <Container>

                    <div className="px-[130px]">

                        <h2 className="text-center text-black text-[28px] sm:text-[40px] xl:text-[60px] font-semibold mb-6 2xl:mb-9">
                            Envisioning the future scope!
                        </h2>
                        <p className="text-center text-xl font-medium text-primary-dark2  text-lg 2xl:text-xl font-medium text-primary-dark2 mb-7  2xl:mb-[150px]">
                            Elyments has a long way to go in the times to come- ensuring innovative, user-centric, and modern functionalities that users simply love! Here’s
                            what the users can expect from elyments in the future!
                        </p>
                        <div className="grid grid-cols-12 gap-0  items-center lg:py-[100px] ">
                            <div className="col-span-12 sm:col-span-4 order-last md:order-first">
                                <div className="flex items-center justify-center sm:justify-start relative">
                                    <img src={EnvisioningFirst} alt="image" className="w-[60%] sm:w-auto absolute top-0 bottom-0 m-auto -right-9 " />
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
                                            <p >
                                                Although the “delete your message for everyone” is beneficial in multiple ways, but some users aren’t happy as they want that the
                                                receiver should not know that a message has been deleted. Since this was a debatable topic among the users we were doing the survey with,
                                            </p>

                                        </div>
                                        <div className="col-span-4 lg:col-span-2">

                                            <p className="">
                                                we decided to do an Instagram poll on the same.
                                                Based on the user response, we have decided to add the editfeature in the upcoming times. It will be a user improvised way of sending the correct message without re-typing.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-0  items-center lg:py-[100px] ">

                            <div className="col-span-12 sm:col-span-7 lg:col-span-6 ">
                                <div className="bg-secondary-dark2 rounded-3xl text-base lg:text-lg 2xl:text-xl font-medium text-primary-dark2 text-white mx-auto">
                                    <div className="grid grid-cols-4 items-start gap-4 p-[25px] lg:p-[50px]">
                                        <div className="col-span-4 lg:col-span-2">

                                            <p>
                                                We are introducing a new feature that lets users choose which chat media files are saved to their device's gallery. In each chat's details section, users will see an option called “Save to Camera Roll” or a similar setting. When this option is enabled, photos, videos, and other shared files from the chat will be saved automatically.
                                            </p>
                                        </div>
                                        <div className="col-span-4 lg:col-span-2">

                                            <p className="">
                                                If users prefer not to save media from specific chats, they can turn this option off. This helps manage storage, maintain privacy, and keep the media library organized. The setting can be customized for each chat based on user preferences.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1 lg:col-span-2 hidden sm:block">
                                <div className="flex items-center justify-center">
                                    <img src={MidconnectorRotated} alt="image" />
                                </div>
                            </div>

                            <div className="col-span-12 sm:col-span-4 ">
                                <div className="flex items-center justify-center sm:justify-start relative">
                                    <img src={EnvisioningSecond} alt="image" className="w-[60%] sm:w-auto absolute top-0 bottom-0 m-auto -left-9 " />
                                </div>
                            </div>

                        </div>
                        <div className="grid grid-cols-12 gap-0  items-center lg:py-[100px] ">
                            <div className="col-span-12 sm:col-span-4 order-last md:order-first">
                                <div className="flex items-center justify-center sm:justify-start relative">
                                    <img src={EnvisioningThird} alt="image" className="w-[60%] sm:w-auto absolute top-0 bottom-0 m-auto -right-9" />
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

                                            <p>
                                                To make it easier for users to see when their contacts are online, Elyments is introducing a simple and intuitive indicator. In the upcoming update, a green oval will appear next to the contact’s username or profile picture, indicating that the person is currently online and available.
                                            </p>
                                        </div>
                                        <div className="col-span-4 lg:col-span-2">

                                            <p className="">
                                                This visual cue will be prominently displayed across relevant sections like chat lists, contact details, and search results, ensuring users can quickly identify active contacts. The feature aims to enhance real-time communication by making the online status more visible and accessible at a glance, creating a smoother and more connected user experience.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-0  items-center lg:py-[100px] ">

                            <div className="col-span-12 sm:col-span-7 lg:col-span-6 ">
                                <div className="bg-secondary-dark2 rounded-3xl text-base lg:text-lg 2xl:text-xl font-medium text-primary-dark2 text-white mx-auto">
                                    <div className="grid grid-cols-4 items-start gap-4 p-[25px] lg:p-[50px]">
                                        <div className="col-span-4 lg:col-span-2">

                                            <p>
                                                To help users stay organized and never miss important messages, Elyments is introducing a feature that separates unread chats from all other conversations. Whether users are managing business groups, individual chats, family groups, or client conversations, unread messages will be clearly segmented for easy access.
                                            </p>
                                        </div>
                                        <div className="col-span-4 lg:col-span-2">

                                            <p className="">
                                                This dedicated section will display all unread chats at the top or in a separate tab, ensuring users can quickly catch up on pending messages without scrolling through the entire chat list. By keeping important conversations visible and well-organized, this feature enhances productivity and simplifies chat management for both personal and professional communication.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1 lg:col-span-2 hidden sm:block">
                                <div className="flex items-center justify-center">
                                    <img src={MidconnectorRotated} alt="image" />
                                </div>
                            </div>

                            <div className="col-span-12 sm:col-span-4 ">
                                <div className="flex items-center justify-center sm:justify-start relative">
                                    <img src={EnvisioningFourth} alt="image" className="w-[60%] sm:w-auto absolute top-0 bottom-0 m-auto -left-9" />
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

export default Elyments;


