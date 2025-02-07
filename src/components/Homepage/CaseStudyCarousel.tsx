import Container from "../Container";
import schumacherLogo from "../../assets/schumacher.svg";
import schumacherBg2 from "../../assets/SchumacherBg2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const slidesData = Array(3).fill({
  title:
    "Schumacher Homes' Three-Decade Journey to Perfecting a Seamless Process",
  logo: schumacherLogo,
  description:
    "For over 30 years, Schumacher Homes has perfected a clear and exciting process for building homes.",
  buttonLabel: "View Case Study",
  bgImage: schumacherBg2,
});

const CaseStudyCarousel = () => {
  return (
    <Container>
      <section className="max-screen-1600 mx-auto carouselStudy ">
        <Swiper
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div>
                <div className="flex lg:items-center items-start flex-col lg:flex-row lg:justify-between gap-5">
                  <h2 className="2xl:text-[60px] xl:text-[50px] text-[24px] sm:text-[42px] font-semibold max-w-[800px]">
                    {slide.title}
                  </h2>
                  <img src={slide.logo} alt="logo" className=" max-w-[200px] md:max-w-full " />
                </div>
                <div className="grid grid-cols-12 xl:mt-12 mt-6 gap-6">
                  <div className="2xl:col-span-8 col-span-12 innerItem relative p-2 sm:p-8 xl:px-[52px] xl:py-[54px] bg-[#EBFDDD] xl:bg-transparent">
                    <div className="xl:text-[30px] font-semibold border inline-block border-black rounded-full px-6 py-3">
                      Schumacher
                    </div>
                    <p className="xl:max-w-[500px] text-2xl font-semibold mt-4 xl:mt-8">
                      {slide.description}
                    </p>
                    <button className="bg-secondary-light3 xl:absolute mt-5 xl:mt-0 left-0 bottom-0 2xl:px-[114px] xl:px-[90px]  2xl:py-[50px] xl:py-[30px] text-xl p-5 xl:text-[26px] 2xl:text-[32px] font-semibold rounded-[38px]">
                      {slide.buttonLabel}
                    </button>
                  </div>
                  <div className="2xl:col-span-4 col-span-12 hidden 2xl:block">
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
      </section>
    </Container>
  );
};

export default CaseStudyCarousel;
