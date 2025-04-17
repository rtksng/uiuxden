import Navbar from "../components/Navbar";
import rightLongArrow from "../assets/right-long-arrow.svg";
import Container from "../components/Container";
import { useEffect, useState } from "react";
import HumanCentered from "../assets/sustainability/webdesign-img.png";
import DYKImg from "../assets/sustainability/DYK-img.png";
import CalculateSusImg from "../assets/sustainability/calculate-image.png";
import Footer from "../components/Footer";
import "swiper/css";
import "swiper/css/pagination";
import SVGAnimation from "../components/StrokeAnimation";
import Heroimage from "../assets/sustainability/hero-secimg.png";
import Tabs from "../components/Tabs2";
import ReachArrows from "../assets/reachus-arrows.svg";


const Sustainable = () => {
    const tabData = [
        {
            id: 1,
            label: "HTTP Requests",
            sublabel: "",
            heading: `Minimize HTTP Requests`,
            subheading: `Each HTTP request requires a round trip to the server, consuming energy.`,
            boxHeading: `Best Practices`,
            listItems: ["Combine multiple CSS files into one", "Use CSS sprites for multiple small images", "Implement lazy loading for non-critical resources"],
            box2Heading: `Impacts`,
            listItems2: ["Reducing HTTP requests by 50% can lower page load energy consumption by up to 30%."],


        },

        {
            id: 2,
            label: "Images & Media",
            sublabel: "",
            heading: `Minimize Images & Media`,
            subheading: `Each Images & Media requires a round trip to the server, consuming energy.`,
            boxHeading: `Best Practices`,
            listItems: ["Combine multiple CSS files into one", "Use CSS sprites for multiple small images", "Implement lazy loading for non-critical resources"],
            box2Heading: `Impacts`,
            listItems2: ["Reducing Images & Medias by 50% can lower page load energy consumption by up to 30%."],


        },

        {
            id: 3,
            label: "CSS &JavaScript",
            sublabel: "",
            heading: `Minimize CSS &JavaScript`,
            subheading: `Each CSS &JavaScript requires a round trip to the server, consuming energy.`,
            boxHeading: `Best Practices`,
            listItems: ["Combine multiple CSS files into one", "Use CSS sprites for multiple small images", "Implement lazy loading for non-critical resources"],
            box2Heading: `Impacts`,
            listItems2: ["Reducing CSS &JavaScripts by 50% can lower page load energy consumption by up to 30%."],


        },
        {
            id: 4,
            label: "Architecture",
            sublabel: "",
            heading: `Minimize Architecture`,
            subheading: `Each Architecture requires a round trip to the server, consuming energy.`,
            boxHeading: `Best Practices`,
            listItems: ["Combine multiple CSS files into one", "Use CSS sprites for multiple small images", "Implement lazy loading for non-critical resources"],
            box2Heading: `Impacts`,
            listItems2: ["Reducing Architectures by 50% can lower page load energy consumption by up to 30%."],


        },

    ];

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
        <main className="custom-sutainable">
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
                            Designing a Greener Web
                        </h1>
                    </div>



                    <div className="flex flex-wrap justify-center items-center gap-4 xl:gap-6 w-full mt-4 sm:mt-[50px] lg:mt-[80px] xl:mt-[40px] 2xl:mt-[50px] ">
                        <img
                            src={Heroimage}
                            className=" max-w-[90%] sm:max-w-[66%] h-auto"
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
                        <div className="col-span-12 xl:col-span-7 ">
                            <h5 className="text-[24px] text-center xl:text-start sm:text-[42px] 2xl:text-[60px] font-semibold 2xl:mr-[100px] text-primary-dark2">
                                What Is {""}
                                <span className="animationStroke w-fit h-fit inline-block mx-1">
                                    <SVGAnimation nameOfClass="svg-container pl-4 human-centered" />
                                    Sustainable
                                </span>{" "}
                                Web Design?
                        \
                            </h5>
                            <p className="text-[18px] text-center xl:text-start sm:text-[18px]font-medium text-primary-dark2 mt-4 xl:mt-8 xl:pe-5 xl:me-5">
                                Sustainable web design focuses on optimizing resources, reducing energy consumption, and lowering the environmental impact of digital products. By adopting eco-friendly practices, designers can create efficient, high-performing websites with a minimal carbon footprint.
                            </p>
                            <div className="flex flex-wrap md:flex-nowrap justify-center xl:justify-start gap-[50px] mb-12 xl:mb-0 mt-[50px]">
                                <div className="sus-wd-boxes max-w-[224px] p-[35px] pr-[20px] py-[24px]">
                                    <p className="text-xl text-[#1A1A1A] mb-[10px]">
                                        Reduced Energy
                                        Use
                                    </p>
                                    <p className="text-[#1A1A1A]">
                                        Leaner code and optimized design lower server demands, reducing the energy needed to serve your website.
                                    </p>
                                </div>

                                <div className="sus-wd-boxes max-w-[224px] p-[35px] pr-[20px] py-[24px]">
                                    <p className="text-xl text-[#1A1A1A] mb-[10px]">
                                        Improved User
                                        Experience
                                    </p>
                                    <p className="text-[#1A1A1A]">
                                        Faster load times and streamlined performance create a better experience for your visitors.
                                    </p>
                                </div>
                                <div className="sus-wd-boxes max-w-[224px] p-[35px] pr-[20px] py-[24px]">
                                    <p className="text-xl text-[#1A1A1A] mb-[10px]">
                                        Positive
                                        Environmental
                                        Impact
                                    </p>
                                    <p className="text-[#1A1A1A]">
                                        Lower carbon emissions and a smaller digital footprint contribute to a healthier planet.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-5">
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
                        <h1 className="text-[34px] md:text-[42px] 2xl:text-[60px] max-w-[1250px]  text-white  font-semibold mb-base">
                            Understanding Digital Carbon Footprint
                        </h1>

                        <p className="text-[18px] text-[#fff] text-center max-w-[880px] mx-auto 2xl:text-[18px] font-medium mt-4 xl:mt-8 ">
                            Did you know that websites contribute a significant share to global energy consumption? Every digital interaction—from browsing to streaming— requires energy, and inefficient websites can generate unnecessary
                            carbon emissions.
                        </p>
                    </div>
                    <div className="flex footprint-boxes gap-[30px] items-start">
                        {/* --- Box 1 --- */}
                        <div className="dcf-custom-box max-w-[376px] min-h-[460px] max-h-[460px]  p-[20px]">
                            <div className="svg-box border border-opacity-100 mx-[20px] mt-[30px] mb-[24px] border-white  w-[40px] h-[40px] flex items-center justify-center">
                                <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.7051 15.0379C14.209 15.0379 12.9967 16.2501 12.9967 17.7462V20.9962C12.9967 22.4923 14.209 23.7046 15.7051 23.7046C17.2012 23.7046 18.4134 22.4923 18.4134 20.9962V17.7462C18.4134 16.2501 17.2012 15.0379 15.7051 15.0379ZM16.6801 20.9962C16.6801 21.5336 16.2424 21.9712 15.7051 21.9712C15.1678 21.9712 14.7301 21.5336 14.7301 20.9962V17.7462C14.7301 17.2089 15.1678 16.7712 15.7051 16.7712C16.2424 16.7712 16.6801 17.2089 16.6801 17.7462V20.9962ZM8.229 17.7831V20.9637C8.229 21.4826 8.619 21.9355 9.13683 21.9701C9.542 21.9972 9.90058 21.7751 10.0718 21.4415C10.2148 21.162 10.5148 20.9984 10.829 20.9984C11.4855 20.9984 11.9004 21.6993 11.5906 22.2778C11.1421 23.1131 10.2668 23.6861 9.25708 23.7046C7.73933 23.7338 6.49783 22.4544 6.49783 20.9366V17.8101C6.49783 16.2924 7.73933 15.0141 9.25708 15.0422C10.2668 15.0617 11.1421 15.6337 11.5906 16.469C11.9015 17.0475 11.4855 17.7484 10.829 17.7484C10.5148 17.7484 10.2148 17.5848 10.0718 17.3053C9.90058 16.9716 9.54308 16.7485 9.13683 16.7756C8.619 16.8102 8.229 17.2631 8.229 17.782V17.7831ZM21.6634 25.5105H23.1216C23.5127 25.5105 23.8301 25.8279 23.8301 26.219V26.2461C23.8301 26.6371 23.5127 26.9546 23.1216 26.9546H20.2052C19.8142 26.9546 19.4967 26.6371 19.4967 26.2461C19.4967 24.6146 22.386 23.7046 22.386 22.6212C22.386 22.215 22.0502 21.8867 21.6418 21.8997C21.3731 21.9073 21.1467 22.0698 21.0286 22.2962C21.0232 22.3071 21.0177 22.3222 21.0123 22.3417C20.9138 22.7144 20.5877 22.9831 20.202 22.9831C19.7968 22.9831 19.4827 22.6234 19.5444 22.2226C19.5466 22.2096 19.5487 22.1976 19.5509 22.1879C19.7611 21.2346 20.5779 20.4914 21.5854 20.4556C22.8183 20.4123 23.8312 21.3981 23.8312 22.6212C23.8312 24.1628 22.2863 24.9406 21.6634 25.5105ZM25.9967 14.4962C25.9967 16.0346 25.5645 17.5328 24.7466 18.8285C24.427 19.3344 23.7575 19.485 23.2527 19.1665C22.7467 18.8469 22.5951 18.1774 22.9147 17.6715C23.5138 16.7225 23.8312 15.624 23.8312 14.4962C23.8312 11.6633 21.8183 9.2063 19.0461 8.65272C18.0082 8.4458 17.1557 7.78497 16.7083 6.8403C15.4277 4.13847 12.5721 2.69438 9.594 3.23388C6.98642 3.71163 4.86092 5.87722 4.42542 8.50105C4.29325 9.2973 4.30192 10.0925 4.45142 10.8638C4.65942 11.9352 4.25967 13.0825 3.40817 13.8571C2.61842 14.5742 2.16667 15.5969 2.16667 16.6629C2.16667 17.9304 2.79717 19.1101 3.85342 19.8165C4.34958 20.1501 4.48392 20.8229 4.15025 21.3201C3.8155 21.8206 3.13733 21.9474 2.64658 21.617C0.989083 20.5076 0 18.6551 0 16.6629C0 14.9881 0.710667 13.3815 1.95108 12.2537C2.24683 11.9851 2.38983 11.6113 2.32592 11.2776C2.12658 10.2528 2.11467 9.19872 2.29017 8.1468C2.87842 4.58372 5.65717 1.75297 9.20183 1.10405C13.0932 0.389051 16.9834 2.3683 18.6648 5.91188C18.8164 6.23255 19.1089 6.4568 19.4686 6.5283C23.2516 7.2823 25.9967 10.6331 25.9967 14.4951V14.4962Z" fill="url(#paint0_linear_3917_2077)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_3917_2077" x1="14.8418" y1="0.958984" x2="13.7291" y2="42.5538" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#9FF8BE" />
                                            <stop offset="0.484375" stop-color="#EAFFE2" />
                                            <stop offset="1" stop-color="#F8EDBA" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <p className="text-[#FFFFFF] text-[30px] px-[20px] font-semibold relative pb-[24px] mb-[24px] after:w-[100%] after:h-[1px] after:bg-white after:absolute after:bottom-0 after:left-0">
                                Global Carbon Emissions
                            </p>
                            <p className="text-white text-lg px-[20px]">
                                The internet contributes 4% of global carbon emissions, and this is rising due to higher data consumption and energy-intensive technologies like streaming and cloud computing.
                            </p>
                        </div>
                        {/* --- Box 2 --- */}
                        <div className="dcf-custom-box max-w-[376px] min-h-[460px] max-h-[460px] mt-[50px] p-[20px]">
                            <div className="svg-box border border-opacity-100 mx-[20px] mt-[30px] mb-[24px] border-white  w-[40px] h-[40px] flex items-center justify-center">
                                <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.9193 0.0380859H5.7526C4.31654 0.0398061 2.93979 0.611041 1.92434 1.62649C0.908893 2.64194 0.337658 4.01869 0.335938 5.45475L0.335938 18.4548C0.337658 19.8908 0.908893 21.2676 1.92434 22.283C2.93979 23.2985 4.31654 23.8697 5.7526 23.8714H20.9193C22.3553 23.8697 23.7321 23.2985 24.7475 22.283C25.763 21.2676 26.3342 19.8908 26.3359 18.4548V5.45475C26.3342 4.01869 25.763 2.64194 24.7475 1.62649C23.7321 0.611041 22.3553 0.0398061 20.9193 0.0380859ZM5.7526 2.20475H20.9193C21.7812 2.20475 22.6079 2.54716 23.2174 3.15666C23.8269 3.76615 24.1693 4.5928 24.1693 5.45475V6.53809H2.5026V5.45475C2.5026 4.5928 2.84501 3.76615 3.45451 3.15666C4.064 2.54716 4.89065 2.20475 5.7526 2.20475ZM20.9193 21.7048H5.7526C4.89065 21.7048 4.064 21.3623 3.45451 20.7529C2.84501 20.1434 2.5026 19.3167 2.5026 18.4548V8.70475H24.1693V18.4548C24.1693 19.3167 23.8269 20.1434 23.2174 20.7529C22.6079 21.3623 21.7812 21.7048 20.9193 21.7048ZM20.9193 13.0381C20.9193 13.3254 20.8051 13.601 20.602 13.8041C20.3988 14.0073 20.1233 14.1214 19.8359 14.1214H6.83594C6.54862 14.1214 6.27307 14.0073 6.06991 13.8041C5.86674 13.601 5.7526 13.3254 5.7526 13.0381C5.7526 12.7508 5.86674 12.4752 6.06991 12.2721C6.27307 12.0689 6.54862 11.9548 6.83594 11.9548H19.8359C20.1233 11.9548 20.3988 12.0689 20.602 12.2721C20.8051 12.4752 20.9193 12.7508 20.9193 13.0381ZM16.5859 17.3714C16.5859 17.6587 16.4718 17.9343 16.2686 18.1375C16.0655 18.3406 15.7899 18.4548 15.5026 18.4548H6.83594C6.54862 18.4548 6.27307 18.3406 6.06991 18.1375C5.86674 17.9343 5.7526 17.6587 5.7526 17.3714C5.7526 17.0841 5.86674 16.8086 6.06991 16.6054C6.27307 16.4022 6.54862 16.2881 6.83594 16.2881H15.5026C15.7899 16.2881 16.0655 16.4022 16.2686 16.6054C16.4718 16.8086 16.5859 17.0841 16.5859 17.3714ZM3.58594 4.37142C3.58594 4.15716 3.64947 3.94771 3.76851 3.76955C3.88755 3.5914 4.05674 3.45254 4.2547 3.37055C4.45265 3.28855 4.67047 3.2671 4.88062 3.3089C5.09076 3.3507 5.2838 3.45388 5.4353 3.60539C5.58681 3.75689 5.68999 3.94993 5.73179 4.16007C5.77359 4.37022 5.75214 4.58804 5.67014 4.78599C5.58815 4.98395 5.44929 5.15314 5.27114 5.27218C5.09299 5.39122 4.88353 5.45475 4.66927 5.45475C4.38195 5.45475 4.1064 5.34062 3.90324 5.13745C3.70007 4.93429 3.58594 4.65874 3.58594 4.37142ZM6.83594 4.37142C6.83594 4.15716 6.89947 3.94771 7.01851 3.76955C7.13755 3.5914 7.30674 3.45254 7.5047 3.37055C7.70265 3.28855 7.92047 3.2671 8.13062 3.3089C8.34076 3.3507 8.5338 3.45388 8.6853 3.60539C8.83681 3.75689 8.93999 3.94993 8.98179 4.16007C9.02359 4.37022 9.00214 4.58804 8.92014 4.78599C8.83815 4.98395 8.69929 5.15314 8.52114 5.27218C8.34299 5.39122 8.13353 5.45475 7.91927 5.45475C7.63195 5.45475 7.3564 5.34062 7.15324 5.13745C6.95007 4.93429 6.83594 4.65874 6.83594 4.37142ZM10.0859 4.37142C10.0859 4.15716 10.1495 3.94771 10.2685 3.76955C10.3876 3.5914 10.5567 3.45254 10.7547 3.37055C10.9527 3.28855 11.1705 3.2671 11.3806 3.3089C11.5908 3.3507 11.7838 3.45388 11.9353 3.60539C12.0868 3.75689 12.19 3.94993 12.2318 4.16007C12.2736 4.37022 12.2521 4.58804 12.1701 4.78599C12.0881 4.98395 11.9493 5.15314 11.7711 5.27218C11.593 5.39122 11.3835 5.45475 11.1693 5.45475C10.882 5.45475 10.6064 5.34062 10.4032 5.13745C10.2001 4.93429 10.0859 4.65874 10.0859 4.37142Z" fill="url(#paint0_linear_3917_2132)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_3917_2132" x1="15.1796" y1="0.038086" x2="14.2443" y2="38.1775" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#9FF8BE" />
                                            <stop offset="0.484375" stop-color="#EAFFE2" />
                                            <stop offset="1" stop-color="#F8EDBA" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                            </div>
                            <p className="text-[#FFFFFF] text-[30px] px-[20px] font-semibold relative pb-[24px] mb-[24px] after:w-[100%] after:h-[1px] after:bg-white after:absolute after:bottom-0 after:left-0">
                                CO₂ Per Page
                                View
                            </p>
                            <p className="text-white text-lg px-[20px]">
                                On average, a single webpage load generates up to 1.76 grams of CO₂, adding to the environmental impact of internet usage, especially with heavy media and complex scripts.
                            </p>
                        </div>
                        {/* --- Box 3 --- */}
                        <div className="dcf-custom-box max-w-[376px] min-h-[460px] max-h-[460px] p-[20px]">
                            <div className="svg-box border border-opacity-100 mx-[20px] mt-[30px] mb-[24px] border-white  w-[40px] h-[40px] flex items-center justify-center">
                                <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.9062 0.716797V9.9082H15.6211V23.6191H14.0977V14.4785H8.00391V23.6191H6.48047V17.5254H1.91016V23.6191H0.335938V25.1426H23.2383V23.6191H21.7148V9.9082H19.4297V5.28711H26.3359L23.2383 3.00195L26.3359 0.716797H17.9062Z" fill="url(#paint0_linear_3917_2136)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_3917_2136" x1="15.1796" y1="0.716797" x2="14.1973" y2="39.8031" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#9FF8BE" />
                                            <stop offset="0.484375" stop-color="#EAFFE2" />
                                            <stop offset="1" stop-color="#F8EDBA" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                            </div>
                            <p className="text-[#FFFFFF] text-[30px] px-[20px] font-semibold relative pb-[24px] mb-[24px] after:w-[100%] after:h-[1px] after:bg-white after:absolute after:bottom-0 after:left-0">
                                Energy Consumption of Streaming
                            </p>
                            <p className="text-white text-lg px-[20px]">
                                Video streaming makes up 60% of internet traffic, driving significant carbon emissions, especially with non-renewable energy.
                            </p>
                        </div>
                        {/* --- Box 4 --- */}
                        <div className="dcf-custom-box max-w-[376px] min-h-[460px] max-h-[460px] mt-[50px] p-[20px]">
                            <div className="svg-box border border-opacity-100 mx-[20px] mt-[30px] mb-[24px] border-white  w-[40px] h-[40px] flex items-center justify-center">
                                <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.9364 11.4441C23.9364 13.0789 23.4135 14.5998 22.9093 16.071C22.3895 17.5822 21.853 19.1444 21.853 20.8842V23.1635C21.853 25.2543 20.2175 26.9551 18.207 26.9551C17.4403 26.9551 16.6976 26.7037 16.059 26.2271C15.5923 25.8793 15.484 25.2023 15.8204 24.7148C16.1548 24.2284 16.8049 24.1157 17.2747 24.4667C17.4705 24.614 17.7934 24.7884 18.208 24.7884C19.0695 24.7884 19.7706 24.0594 19.7706 23.1635V20.8842C19.7706 18.7695 20.3967 16.9485 20.9477 15.3419C21.4134 13.9845 21.854 12.7029 21.854 11.4431C21.854 9.86032 21.2675 9.62091 19.2498 9.62091C18.0101 9.67074 16.8361 8.69142 15.7725 8.53759C15.4079 8.53759 14.5621 8.65351 14.5621 9.73357C14.5621 10.4106 15.11 11.078 15.7454 11.8515C15.9861 12.145 16.2319 12.4451 16.4601 12.7571C16.808 13.2338 16.7194 13.913 16.2621 14.2748C15.8048 14.6378 15.1496 14.5457 14.8027 14.069C14.5985 13.7884 14.3777 13.5209 14.162 13.2587C13.3735 12.2978 12.4807 11.2091 12.4807 9.73357C12.4807 7.52686 14.1381 6.37096 15.7746 6.37096C16.9663 6.32329 18.1674 7.36003 19.2518 7.45428C20.655 7.45428 23.9395 7.45428 23.9395 11.4431L23.9364 11.4441ZM19.3664 5.44147C20.0029 5.42305 20.5154 4.50982 20.5113 3.40158C20.5071 2.29335 19.9883 1.63144 19.3529 1.64986C18.7164 1.66828 18.2039 2.35943 18.208 3.46767C18.2122 4.5759 18.731 5.4588 19.3675 5.44039L19.3664 5.44147ZM22.3301 6.9137C22.878 6.89745 23.3187 6.11529 23.3155 5.16523C23.3124 4.21516 22.8655 3.64858 22.3176 3.66375C21.7696 3.68 21.328 4.27257 21.3321 5.22156C21.3363 6.17054 21.7821 6.92995 22.3301 6.9137ZM24.3375 6.37204C23.9739 6.38287 23.6812 6.7772 23.6833 7.41094C23.6854 8.04468 23.9822 8.54843 24.3458 8.53868C24.7094 8.52893 25.0021 8.00677 25 7.37303C24.9979 6.73929 24.701 6.36121 24.3375 6.37204ZM11.4578 13.4136V16.6636C11.4578 18.1596 10.2921 19.3719 8.85349 19.3719C7.41489 19.3719 6.24922 18.1596 6.24922 16.6636V13.4136C6.24922 11.9175 7.41489 10.7053 8.85349 10.7053C10.2921 10.7053 11.4578 11.9175 11.4578 13.4136ZM9.79103 13.4136C9.79103 12.8763 9.37018 12.4386 8.85349 12.4386C8.3368 12.4386 7.91595 12.8763 7.91595 13.4136V16.6636C7.91595 17.2009 8.3368 17.6385 8.85349 17.6385C9.37018 17.6385 9.79103 17.2009 9.79103 16.6636V13.4136ZM2.5376 12.444C2.9272 12.417 3.27201 12.6401 3.4366 12.9738C3.57411 13.2533 3.86266 13.4169 4.16476 13.4169C4.79603 13.4169 5.19501 12.7159 4.89708 12.1375C4.46581 11.3022 3.62411 10.7291 2.65323 10.7107C1.1938 10.6815 0 11.9609 0 13.4786V16.6051C0 18.1228 1.1938 19.4011 2.65323 19.3729C3.62411 19.3534 4.46581 18.7814 4.89708 17.9462C5.19605 17.3677 4.79603 16.6668 4.16476 16.6668C3.86266 16.6668 3.57411 16.8304 3.4366 17.1099C3.27201 17.4435 2.92825 17.6667 2.5376 17.6385C2.03967 17.6039 1.66465 17.1511 1.66465 16.6321V13.4515C1.66465 12.9326 2.03967 12.4798 2.5376 12.4451V12.444ZM16.6663 21.9133V21.8862C16.6663 21.4952 16.3611 21.1777 15.985 21.1777H14.5829C15.1819 20.6079 16.6663 19.8301 16.6663 18.2885C16.6663 17.0655 15.6923 16.0797 14.5068 16.123C13.537 16.1587 12.7526 16.9019 12.5505 17.8552C12.5484 17.865 12.5464 17.8769 12.5443 17.8899C12.4849 18.2896 12.787 18.6504 13.1766 18.6504C13.5474 18.6504 13.861 18.3828 13.9558 18.009C13.961 17.9895 13.9662 17.9744 13.9714 17.9635C14.085 17.736 14.3027 17.5746 14.561 17.567C14.9548 17.5551 15.2767 17.8823 15.2767 18.2885C15.2767 19.3719 12.4984 20.2818 12.4984 21.9133C12.4984 22.3044 12.8037 22.6218 13.1797 22.6218H15.984C16.3601 22.6218 16.6653 22.3044 16.6653 21.9133H16.6663ZM12.4984 6.90612C13.4933 6.78479 14.1735 5.27897 14.0183 3.54242C13.8631 1.80586 12.962 0.844954 11.9672 0.965202C10.9723 1.08545 10.2608 2.2446 10.4161 3.98116C10.5713 5.71772 11.5036 7.02745 12.4984 6.90612ZM16.2413 4.74706C16.8778 4.72865 17.3903 3.81541 17.3861 2.70718C17.382 1.59894 16.8632 0.937036 16.2278 0.955453C15.5913 0.973869 15.0787 1.66503 15.0829 2.77326C15.0871 3.88149 15.6059 4.7644 16.2423 4.74598L16.2413 4.74706Z" fill="url(#paint0_linear_3917_2140)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_3917_2140" x1="14.2727" y1="0.955078" x2="13.1154" y2="42.5545" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#9FF8BE" />
                                            <stop offset="0.484375" stop-color="#EAFFE2" />
                                            <stop offset="1" stop-color="#F8EDBA" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                            </div>
                            <p className="text-[#FFFFFF] text-[30px] px-[20px] font-semibold relative pb-[24px] mb-[24px] after:w-[100%] after:h-[1px] after:bg-white after:absolute after:bottom-0 after:left-0">
                                Potential
                                Reduction
                            </p>
                            <p className="text-white text-lg px-[20px]">
                                Optimizing code can reduce website carbon output by up to 80% by decreasing server load, improving efficiency, and lowering emissions.
                            </p>
                        </div>
                    </div>


                </Container>
            </div>


            {/* ------- Do You know ------- */}

            <div className="py-8 lg:py-20 xl:pt-[120px] 2xl:pb-[140px] custom-dynsec">
                <Container>
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 xl:col-span-7 ">
                            <h5 className="text-[24px] xl:text-start text-center md:text-start sm:text-[42px] 2xl:text-[60px] font-semibold text-primary-dark2">
                                Do you {""}
                                <span className="animationStroke w-fit h-fit inline-block mx-1">
                                    <SVGAnimation nameOfClass="svg-container pl-4 human-centered" />
                                    Know?
                                </span>{" "}
                            </h5>
                            <div className="flex justify-center md:justify-start mb-[30px] md:mb-0 gap-5 mt-4 lg:mt-8">
                                <div className="img-box hidden md:block">
                                    <img src={ReachArrows} alt="Arrows" className="hidden" />
                                    <svg width="36" height="420" viewBox="0 0 36 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 0.217773L1 8.46777L1 19.1481C1 25.8078 5.53706 31.611 12 33.2178V33.2178V33.2178C5.38571 35.6844 1 42.0007 1 49.06L1 57.9678V115.093V128.333C1 135.521 5.34681 141.996 12 144.718V144.718V144.718C5.50551 146.489 1 152.388 1 159.12V198.218V238.115C1 245.304 5.34681 251.778 12 254.5V254.5V254.5C5.34681 257.222 1 263.697 1 270.885L1 289.332L1 307.555L1 324" stroke="#1A1A1A" />
                                        <path d="M1 316.875V350.115C1 357.304 5.34681 363.778 12 366.5V366.5V366.5C5.50551 368.271 1 374.17 1 380.902V420" stroke="#1A1A1A" />
                                        <path d="M35.3868 33.2178L32.5 30.331L29.6132 33.2178L32.5 36.1045L35.3868 33.2178ZM12 33.7178H32.5V32.7178H12V33.7178Z" fill="#1A1A1A" />
                                        <path d="M35.3868 144.718L32.5 141.831L29.6132 144.718L32.5 147.605L35.3868 144.718ZM12 145.218H32.5V144.218H12V145.218Z" fill="#1A1A1A" />
                                        <path d="M35.3868 254.503L32.5 251.616L29.6132 254.503L32.5 257.39L35.3868 254.503ZM12 255.003H32.5V254.003H12V255.003Z" fill="#1A1A1A" />
                                        <path d="M35.3868 366L32.5 363.113L29.6132 366L32.5 368.887L35.3868 366ZM12 366.5H32.5V365.5H12V366.5Z" fill="#1A1A1A" />
                                    </svg>

                                </div>
                                <div className="list-box mt-5">
                                    <div className="2xl:max-w-[70%] mb-5">
                                        <p className="text-xl font-medium mb-4 text-center md:text-start">
                                            Streaming's Environmental Impact
                                        </p>
                                        <p className="text-[#1A1A1A] text-center md:text-start">
                                            Streaming video accounts for over 60% of all internet traffic and related emissions.
                                        </p>
                                    </div>
                                    <div className="2xl:max-w-[70%] mb-5">
                                        <p className="text-xl font-medium mb-4 text-center md:text-start">
                                            Data Centers' Growing Energy Consumption
                                        </p>
                                        <p className="text-[#1A1A1A] text-center md:text-start">
                                            Data centers use 1% of global electricity, projected to rise to 3-8% by 2030.
                                        </p>
                                    </div>
                                    <div className="2xl:max-w-[70%] mb-5">
                                        <p className="text-xl font-medium mb-4 text-center md:text-start">
                                            Website CO₂ Emissions
                                        </p>
                                        <p className="text-[#1A1A1A] text-center md:text-start">
                                            A website with 10,000 monthly views generates about 211 kg of CO₂ yearly.
                                        </p>
                                    </div>
                                    <div className="2xl:max-w-[70%]">
                                        <p className="text-xl font-medium mb-4 text-center md:text-start">
                                            Growing Web Page Size
                                        </p>
                                        <p className="text-[#1A1A1A] text-center md:text-start">
                                            The average web page size has grown from 500KB in 2010 to over 2MB in 2023.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-5">
                            <img
                                src={DYKImg}
                                alt="Image"
                                className="xl:pl-8 max-w-[80%] md:max-w-[60%] lg:max-w-full mx-auto xl:mx-0"
                            />
                        </div>
                    </div>
                </Container>
            </div>

            <div className="mx-auto mt-9 sm:mt-[100px] lg:mt-[50px] 2xl:mt-[200px] max-w-[1792px] h-auto lg:h-[970px] text-white sus-optimization">
                <Container>
                    <div className="pt-[60px] lg:pt-[90px]">
                        <h4 className="font-semibold text-[24px] text-center text-white sm:text-[48px] xl:text-[60px] mb-[30px]">
                            Why Code  {" "}
                            <span className="animationStroke">
                                <SVGAnimation nameOfClass="svg-container pl-4 human-centered" />
                                Optimization
                            </span>
                            {" "}
                            Matters
                        </h4>
                        <p className="max-w-[770px] mx-auto text-center text-lg">
                            Optimized code isn't just about faster websites—it's a critical step in reducing energy consumption. Every line of unnecessary code translates into wasted processing power and increased emissions.
                        </p>
                        <Tabs tabs={tabData} autoSwitchInterval={5000} />
                    </div>
                </Container>
            </div>

            <div className="py-8 lg:py-20 xl:pt-[120px] xl:pb-[140px] custom-dynsec">
                <Container>
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 xl:col-span-8 ">
                            <h5 className="text-[24px] mb-[24px] xl:text-start sm:text-[42px] 2xl:text-[60px] font-semibold text-primary-dark2">
                                How Sustainable Is Your Website?
                            </h5>

                            <div className="max-w-[100%] mb-[30px] md:mb-0 md:max-w-[320px]">
                                <p className="border-t border-[#1A1A1A] py-[30px] relative before:border-[8px] before:border-[#1A1A1A] before:border-r-transparent before:border-t-transparent before:border-b-transparent  before:absolute before:-top-[7px] font-semibold">
                                    Is Your Website Energy Efficient?
                                </p>
                                <p className="border-t border-[#1A1A1A] py-[30px] relative before:border-[8px] before:border-[#1A1A1A] before:border-r-transparent before:border-t-transparent before:border-b-transparent  before:absolute before:-top-[7px] font-semibold">
                                    What Is Your Website's Carbon Footprint?
                                </p>
                                <p className="border-t border-[#1A1A1A] py-[30px] relative before:border-[8px] before:border-[#1A1A1A] before:border-r-transparent before:border-t-transparent before:border-b-transparent  before:absolute before:-top-[7px] font-semibold">
                                    Is Your Hosting Powered by Renewables?
                                </p>
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-4">
                            <img
                                src={CalculateSusImg}
                                alt="Image"
                                className="xl:pl-8 max-w-[80%] md:max-w-[60%] lg:max-w-full mx-auto xl:mx-0"
                            />
                        </div>
                    </div>
                </Container>
            </div>

            <Footer consultData={consultData} />
        </main>
    );
};

export default Sustainable;
