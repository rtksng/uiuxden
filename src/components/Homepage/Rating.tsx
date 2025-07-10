import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper"; // ✅ Import Swiper type
import Container from "../Container";
import Arrow from "../Arrow2Animation";
import { FaStar } from "react-icons/fa";
import upwork from "../../assets/upwork.png";
import google from "../../assets/google.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Rating = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null); // ✅ Properly typed

  const reviews = [
    {
      name: "Gilbert Miles",
      rating: "4 out of 5.0",
      stars: 4,
      text: "Procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some great pleasure.",
    },
    {
      name: "Gilbert Miles",
      rating: "4 out of 5.0",
      stars: 4,
      text: "Procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some great pleasure.",
    },
    {
      name: "Gilbert Miles",
      rating: "4 out of 5.0",
      stars: 4,
      text: "Procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some great pleasure.",
    },
    {
      name: "John Doe",
      rating: "5 out of 5.0",
      stars: 5,
      text: "Excellent service! I would highly recommend it to others.",
    },
    {
      name: "Jane Smith",
      rating: "3 out of 5.0",
      stars: 3,
      text: "Good, but there's room for improvement in some areas.",
    },
  ];

  return (
    <section className="2xl:mt-[180px] xl:mt-[50px] mt-10 sm:mt-16">
      <div className="bg-[#2D2D2D] 2xl:py-[160px] xl:py-[50px] py-5 lg:py-10">
        <Container>
          <div className="grid grid-cols-12">
            {/* Left Column - User Images and Title */}
            <div className="md:col-span-6 col-span-12 self-center">
              <h2 className="max-w-[450px] text-3xl md:text-[40px] leading-[128.5%] text-white font-semibold">
                Flexible solution for all kinds of business
              </h2>
              <div className="flex items-center 2xl:mt-[100px] xl:mt-[50px] mt-10 gap-[18px] min-h-[150px]">
                <div className="flex items-center 2xl:-space-x-12 -space-x-8">
                  {reviews.map((_, idx) => (
                    <span
                      key={idx}
                      onClick={() => {
                        setActiveIndex(idx);
                        swiperRef.current?.slideToLoop(idx); // ✅ Click logic
                      }}
                      className={`cursor-pointer rounded-full overflow-hidden user-box user-${idx + 1
                        } ${activeIndex === idx
                          ? "2xl:w-[110px] 2xl:h-[110px] h-[100px] w-[100px] scale-110 active"
                          : "border-white 2xl:w-[100px] 2xl:h-[100px] h-20 w-20 border-[3px]"
                        } transition-all duration-300 ease-in-out`}
                    >
                      <span className="userImage"></span>
                    </span>
                  ))}
                </div>
                <Arrow />
              </div>
            </div>

            {/* Right Column - Review Swiper */}
            <div className="md:col-span-6 col-span-12 mt-10 lg:mt-0">
              <Swiper
                modules={[Autoplay]}
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onActiveIndexChange={(swiper) => {
                  setActiveIndex(swiper.realIndex);
                }}
              >
                {reviews.map((review, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="bg-[#222222] rounded-[20px] m-[4px]">
                      <div className="flex flex-wrap items-center justify-between border-b-[1px] p-4 2xl:p-[60px] xl:p-[20px] border-primary-dark">
                        <div>
                          <h6 className="2xl:text-lg text-white font-semibold tracking-widest">
                            REVIEW RATING
                          </h6>
                          <div className="flex mt-[18px] gap-[1px]">
                            {Array(review.stars)
                              .fill(0)
                              .map((_, i) => (
                                <FaStar key={i} color="#D9A95C" className="w-5 h-5 2xl:w-8 2xl:h-8" />
                              ))}
                          </div>
                        </div>
                        <div className="flex items-center flex-wrap justify-between sm:gap-[40px]">
                          <img src={upwork} className="w-[100px] 2xl:w-[140px]" alt="upwork" />
                          <img src={google} className="w-[80px] 2xl:w-[100px]" alt="google" />
                        </div>
                      </div>
                      <div className="p-4 2xl:p-[60px] xl:p-[20px]">
                        <h6 className="text-[20px] text-primary-dark4 font-semibold">
                          {review.name}
                        </h6>
                        <small className="mt-2 text-white font-sm font-semibold">
                          {review.rating}
                        </small>
                        <p className="mt-3 text-white/80 leading-relaxed">
                          {review.text}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Rating;
