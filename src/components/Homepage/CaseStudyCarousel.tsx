import Container from "../Container";
import schumacherLogo from "../../assets/schumacher.svg";
import knowledgerLogo from "../../assets/knowledger-logo.svg";
import voltjourneyLogo from "../../assets/volt-journey-logo.svg";
import elymentsLogo from "../../assets/elyments-logo.svg";
import schumacherBg2 from "../../assets/SchumacherBg2.png";
import knowledgerBg2 from "../../assets/knowledgerBg2.png";
import voltjourneyBg2 from "../../assets/volt-journeyBg2.png";
import elymentsBg2 from "../../assets/elymentsBg2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const slidesData = [
  {
    title:
      "Schumacher Homes' Three-Decade Journey to Perfecting a Seamless Process",
    logo: schumacherLogo,
    buttontext: 'Schumacher',
    description:
      "For over 30 years, Schumacher Homes has perfected a clear and exciting process for building homes.",
    buttonLabel: "View Case Study",
    bgImage: schumacherBg2,
    casestudylink: 'schumacher',
  },
  {
    title:
      "Knowledger- Blockchain-Powered Learning Management System (LMS)",
    logo: knowledgerLogo,
    buttontext: 'Knowledger',
    description:
      "Building a blockchain-powered LMS for secure, scalable, and cost-effective education.",
    buttonLabel: "View Case Study",
    bgImage: knowledgerBg2,
    casestudylink: 'knowledger-case-study',
  },
  {
    title:
      "Volt Journey- Optimizing Electric Freight with a Unified Ecosystem",
    logo: voltjourneyLogo,
    buttontext: 'Volt Journey',
    description:
      "Volt Journey streamlines electric freight management, optimizing charging slots to reduce wait times and speed up deliveries.",
    buttonLabel: "View Case Study",
    bgImage: voltjourneyBg2,
    casestudylink: 'voltjourney',
  },
  {
    title:
      "Elyments- India’s Secure Communication Revolution",
    logo: elymentsLogo,
    buttontext: 'Elyments',
    description:
      "Developed in India, Elyments offers private messaging and calls, blending security with accessibility to meet the digital needs of Indian users.",
    buttonLabel: "View Case Study",
    bgImage: elymentsBg2,
    casestudylink: 'elyments-case-study',
  },

];
const classNames = ["slide-one", "slide-two", "slide-three", "slide-four"];

const CaseStudyCarousel = () => {
  return (
    <Container>
      <div className="mx-auto carouselStudy ">
        <Swiper
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index} className={`slide ${classNames[index]}`}>
              <div>
                <div className="flex md:items-center items-start flex-col md:flex-row md:justify-between gap-5">
                  <h2 className="2xl:text-[60px] xl:text-[40px] text-[24px] sm:text-[36px] font-semibold 2xl:max-w-[800px] max-w-[600px] text-primary-dark2">
                    {slide.title}
                  </h2>
                  <img src={slide.logo} alt="logo" className=" max-w-[200px] 2xl:max-w-[200px]" />
                </div>
                <div className="grid grid-cols-12 xl:mt-12 mt-6 gap-6">
                  <div className="xl:col-span-8 col-span-12 custom-box innerItem relative p-2 sm:p-8 xl:px-[52px] xl:py-[54px] bg-[#EBFDDD] xl:bg-transparent">
                    <div className="xl:text-[20px] 2xl:text-[30px] font-semibold border inline-block border-black rounded-full px-6 py-3 text-primary-dark2">
                      {slide.buttontext}
                    </div>
                    <p className=" sm:max-w-[440px] xl:max-w-[500px] innertext text-2xl font-semibold mt-4 xl:mt-8 text-primary-dark2">
                      {slide.description}
                    </p>

                    <Link

                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      to={slide.casestudylink}

                    >
                      <button className="bg-secondary-light3 xl:absolute mt-5 xl:mt-0 left-0 bottom-0 xl:px-[90px]  2xl:py-[50px] xl:py-[30px] text-xl p-5 xl:text-[26px] 2xl:text-[32px] font-semibold rounded-[38px] text-primary-dark2">

                        {slide.buttonLabel}
                      </button>
                    </Link>

                  </div>
                  <div className="xl:col-span-4 col-span-12 hidden xl:block">
                    <img
                      src={slide.bgImage}
                      alt="background"
                      className="h-full"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};
export default CaseStudyCarousel;
