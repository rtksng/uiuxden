import { useEffect, useState } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import rightLongArrow from "../assets/right-long-arrow.svg";
import Design_Logo from "../assets/design_ logo.png";
import { VelocityScroll } from "../components/DesignVelocity";
import VisionImg from "../assets/visionimg.png";
import BarGraph from "../assets/bargraph.png";
import MobileCarousel from "../assets/mobile-carouselimg.png";
import ClunkyBg from "../assets/clunkybg.png";
import CaseStudyCarousel from "../components/Homepage/CaseStudyCarousel";
import Footer from "../components/Footer";
import Button from '../components/Button';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SVGAnimation from "../components/StrokeAnimation";



const UIDesign = () => {
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
      <div className="creativity-banner relative h-[55vh] md:h-[56vh] lg:h-[100vh] dark:bg-[#000] green-linear pb-[40px] md:pb-[60px]">
        <Container>
          <div className="text-center pt-[80px]  sm:pt-[120px] 2xl:pt-[170px] flex flex-col items-center">
            <h1 className="text-[34px] sm:text-[48px] max-w-[1100px] lg:text-[66px] 2xl:text-[90px] text-black leading-tight font-semibold mb-base">
              Where Creativity Meets Functionality
            </h1>
            <div className="mt-[20px] lg:mt-[80px] xl:mt-[20px]">
              <img src={Design_Logo} alt={"UIDesign"} className="max-w-[80%] md:max-w-[100%] lg:max-w-[80%] xl:max-w-[100%] mx-auto" />
            </div>
          </div>

          <div className="lg:absolute bottom-5 left-2 2xl:left-9 text-center lg:text-start mt-[30px] md:mt-[80px] sm:mt-[40px] ">
            <div className="xl:flex xl:items-center">
              <img
                src={rightLongArrow}
                alt="arrow"
                width={50}
                className="hidden lg:block xl:mx-auto"
              />
              <div className="ml-3">
                <h6 className="text-[14px] sm:text-[16px] xl:text-[18px] text-black font-normal">
                  Home | UI Design
                </h6>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <section className="bg-gradient-fill2 py-4">
        <VelocityScroll
          point1="Aesthetics"
          point2="Intuitiveness"
          point3="Consistency"
          point4="Clarity"
          point5="Usability"
          default_velocity={2}
          className="font-display text-center flex gap-[126px] !text-2xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        />
      </section>

      <section>
        <Container>
          <div className="vision-outer grid xl:grid-cols-2 gap-20 2xl:mt-[158px] mt-10 sm:mt-16 lg:pb-[70px]">
            <div className="2xl:col-span-1  self-center">
              <div>
                <div className="text-[18px] font-semibold text-black">
                  Innovate
                </div>
                <div className=" text-[24px] 2xl:text-[60px] leading-[72px] font-semibold 2xl:mb-6 md:leading-[45px] lg:leading-[72px]">
                  Your Vision,
                  Our Design Expertise
                </div>
                <p className="text-xl font-medium mb-5">
                  We specialize in user-centric designs that elevate brands. Combining creativity with technical skill, our team crafts intuitive, visually stunning interfaces that drive engagement and conversions.
                </p>
                <Button variant='primary' className="lg:mt-[30px] md:mt-[10px] py-[14px]">
                  Claim Free Design Review
                </Button>
              </div>
            </div>
            <div className="col-span-1 hidden xl:block">
              <img src={VisionImg} alt="image" />
            </div>
          </div>
        </Container>
      </section>

      <section className="transformation-bg mt-[40px] lg:mt-[0] pt-[80px] lg:pt-[100px] relative">
        <img src={ClunkyBg} alt="image" className="transformation-img absolute" />
        <Container>
          <h6 className="text-[24px] md:text-[47px] 2xl:text-[60px] leading-[40px] lg:leading-[90px] md:leading-[80px] font-semibold 2xl:mb-6 text-center text-white relative ui-heading">
            From <span className="animationStroke">
              <SVGAnimation nameOfClass="svg-container clunky" />
              Clunky to Clean:
            </span> See the UI<br></br> Transformation!
          </h6>
          <div className="ux-audit-insights-slider-wrapper">
            <Swiper
              pagination={pagination}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div>
                  <img src={MobileCarousel} alt={"UIDesign"} className="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src={MobileCarousel} alt={"UIDesign"} className="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src={MobileCarousel} alt={"UIDesign"} className="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </section>

      <section className="pt-[40px] lg:pt-[100px]">
        <Container>
          <div>
            <div className="brand-outer">
            <h6 className=" text-[28px] 2xl:text-[60px] leading-[35px] lg:leading-[50px] 2xl:mb-6 text-center">
              Why Most
            </h6>
            <h6 className=" text-[28px] 2xl:text-[60px] leading-[35px] lg:leading-[50px] font-semibold 2xl:mb-6 text-center">
              Brands Fails ?
            </h6>
            </div>
            <img src={BarGraph} alt="image" />
          </div>
        </Container>
      </section>


      <Container>
        <section className="path-sec lg:pt-[80px] mt-[80px] hidden lg-[block]">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-4 lg:col-span-4 ps-5">
              <h2 className="text-white lg:text-[44px] leading-[56px] font-semibold w-[47%]">For Every problem there is a Solution</h2>
              <Button variant='secondary' className="mt-[25px] py-[14px] px-[14px] text-white border-white">
                Get UX Expert Now
              </Button>
            </div>
            <div className="col-span-12 sm:col-span-8 lg:col-span-8 ps-3">
              <h2 className="text-white lg:text-[44px] leading-[56px] font-semibold mb-3">The Path To Wining Ui<br></br> Experience</h2>
            </div>

          </div>
        </section>
      </Container>

      <div className="2xl:mt-[150px] 2xl:mt-[50px] xl:mb-[50px] xl:mt-[80px] mt-10 lg:mt-20">
        <CaseStudyCarousel />
      </div>

      <div className="hide-sec">
        <Footer />
      </div>

    </main>
  );
};

export default UIDesign;
