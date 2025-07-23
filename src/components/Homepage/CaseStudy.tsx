import { Link } from "react-router-dom";
import knowledger from "../../assets/knowledger.svg";
import paulSchumacher from "../../assets/paulSchumacher.svg";
import SVGAnimation from "../StrokeAnimation";
import Volt from "../../assets/Volt.svg";
import arrow from "../../assets/right-tillted-icon.svg";
import Elements from "../../assets/elyments.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Container from '../Container';
import * as motion from "motion/react-client";
import 'swiper/css';


const caseStudies = [
  {
    link: "/knowledger-case-study",
    imgSrc: knowledger,
    altText: "Knowledger logo",
    description:
      "Driving a user research to understand user behaviour of teens on Instagram",
  },
  {
    link: "/schumacher",
    imgSrc: paulSchumacher,
    altText: "Paul Schumacher logo",
    description:
      "Driving a user research to understand user behaviour of teens on Instagram",
  },
  {
    link: "/voltjourney",
    imgSrc: Volt,
    altText: "Volt logo",
    description:
      "Driving a user research to understand user behaviour of teens on Instagram",
  },
  {
    link: "/elyments-case-study",
    imgSrc: Elements,
    altText: "elyments logo",
    description:
      "Driving a user research to understand user behaviour of teens on Instagram",
  },
];

const CaseStudy = () => {

  return (
    <section className="casestudy 2xl:mt-[192px] lg:mt-[0] xl:mt-[50px] sm:mt-15 mt-10 bg-neutral-900 xl:bg-transparent px-3">
      <Container>
        <div className="xl:pt-[100px] 2xl:pt-[160px] lg:pt-[60px] xl:pb-[20px] py-10 lg:py-20">
          <h2 className="2xl:text-[60px] xl:text-[40px] text-[28px] md:text-[36px] text-white text-center font-semibold">
            We love to make{" "}
            <span className="animationStroke casestudy !bg-none">
              <SVGAnimation height={120} width={222} /> things{" "}
            </span>{" "}
            easy
          </h2>

          <div className="2xl:mt-[90px] lg:mt-[50px] xl:mt-[70px] mt-10 sm:w-[90%] 2xl:w-[100%] mx-auto lg:sm:px-[160px] px-3px-[0]">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                576: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {caseStudies.map((study, index) => (
                <SwiperSlide>   <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  to={study.link}
                  key={index}
                  className="sm:col-span-4 col-span-12"
                >
                  <div className="itemcase h-auto max-h-[380px] flex flex-col items-center justify-center relative">
                    <div className="flex flex-col max-w-[330px] justify-center items-center">
                      <img src={arrow} alt="icon" className="absolute top-[20px] right-[20px]" />
                      <div className="min-h-[100px] max-w-[160px] flex items-center justify-center">
                        <motion.img src={study.imgSrc}
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01],
                          }}
                          viewport={{ once: true, amount: 0.2 }}
                          alt={study.altText} className="w-[180px] 2xl:w-[250px]"
                        />
                      </div>
                      <p className="text-white text-center  2xl:text-[22px] ">
                        {study.description}
                      </p>
                    </div>
                  </div>
                </Link></SwiperSlide>
              ))}

              {
                /* <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide> */
              }
            </Swiper>
          </div>
        </div>
      </Container>


    </section>
  );
};

export default CaseStudy;
