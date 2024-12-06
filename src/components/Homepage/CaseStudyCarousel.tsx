import Container from "../Container";
import schumacherLogo from "../../assets/schumacher.svg";
import schumacherBg2 from "../../assets/SchumacherBg2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
const CaseStudyCarousel = () => {
  return (
    <Container>
      <section className="max-screen-1600 mx-auto my-[150px] carouselStudy">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-[60px] font-semibold max-w-[800px]">
                  Schumacher Homes' Three-Decade Journey to Perfecting a
                  Seamless Process
                </h2>
                <img src={schumacherLogo} alt="logo" />
              </div>
              <div className="grid grid-cols-12 mt-12 gap-6">
                <div className="col-span-8 innerItem relative px-[52px] py-[54px]">
                  <div className="text-[30px] font-semibold border inline-block border-black rounded-full px-6 py-3">
                    Schumacher
                  </div>
                  <p className="max-w-[500px] text-2xl font-semibold mt-8">
                    For over 30 years, Schumacher Homes has perfected a clear
                    and exciting process for building homes.{" "}
                  </p>
                  <button className="bg-secondary-light3 absolute left-0 bottom-0 px-[114px] py-[50px] text-[32px] font-semibold rounded-[38px]">
                    View Case Study
                  </button>
                </div>
                <div className="col-span-4">
                  <img src={schumacherBg2} alt="image" className="h-full" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-[60px] font-semibold max-w-[800px]">
                  Schumacher Homes' Three-Decade Journey to Perfecting a
                  Seamless Process
                </h2>
                <img src={schumacherLogo} alt="logo" />
              </div>
              <div className="grid grid-cols-12 mt-12 gap-6">
                <div className="col-span-8 innerItem relative px-[52px] py-[54px]">
                  <div className="text-[30px] font-semibold border inline-block border-black rounded-full px-6 py-3">
                    Schumacher
                  </div>
                  <p className="max-w-[500px] text-2xl font-semibold mt-8">
                    For over 30 years, Schumacher Homes has perfected a clear
                    and exciting process for building homes.{" "}
                  </p>
                  <button className="bg-secondary-light3 absolute left-0 bottom-0 px-[114px] py-[50px] text-[32px] font-semibold rounded-[38px]">
                    View Case Study
                  </button>
                </div>
                <div className="col-span-4">
                  <img src={schumacherBg2} alt="image" className="h-full" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-[60px] font-semibold max-w-[800px]">
                  Schumacher Homes' Three-Decade Journey to Perfecting a
                  Seamless Process
                </h2>
                <img src={schumacherLogo} alt="logo" />
              </div>
              <div className="grid grid-cols-12 mt-12 gap-6">
                <div className="col-span-8 innerItem relative px-[52px] py-[54px]">
                  <div className="text-[30px] font-semibold border inline-block border-black rounded-full px-6 py-3">
                    Schumacher
                  </div>
                  <p className="max-w-[500px] text-2xl font-semibold mt-8">
                    For over 30 years, Schumacher Homes has perfected a clear
                    and exciting process for building homes.{" "}
                  </p>
                  <button className="bg-secondary-light3 absolute left-0 bottom-0 px-[114px] py-[50px] text-[32px] font-semibold rounded-[38px]">
                    View Case Study
                  </button>
                </div>
                <div className="col-span-4">
                  <img src={schumacherBg2} alt="image" className="h-full" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </Container>
  );
};

export default CaseStudyCarousel;
