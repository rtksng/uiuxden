import Container from "../Container";
import user from "../../assets/user.png";
import curve from "../../assets/curve.svg";
import { FaStar } from "react-icons/fa";
import upwork from "../../assets/upwork.png";
import google from "../../assets/google.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Rating = () => {
  const reviews = [
    {
      name: "Gilbert Miles",
      rating: "4 out of 5.0",
      text: "Procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some great pleasure.",
    },
    {
      name: "Gilbert Miles",
      rating: "4 out of 5.0",
      text: "Procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some great pleasure.",
    },
    {
      name: "Gilbert Miles",
      rating: "4 out of 5.0",
      text: "Procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some great pleasure.",
    },
    {
      name: "Gilbert Miles",
      rating: "4 out of 5.0",
      text: "Procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some great pleasure.",
    },
    {
      name: "Gilbert Miles",
      rating: "4 out of 5.0",
      text: "Procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some great pleasure.",
    },
    // Additional reviews can be added here
  ];

  return (
    <section className="2xl:mt-[180px] xl:mt-[80px] mt-10 sm:mt-16">
      <div className="bg-primary-dark2 2xl:py-[160px] xl:py-[80px] py-10">
        <Container>
          <div className="grid grid-cols-12 ">
            <div className="lg:col-span-6 col-span-12 self-center">
              <h2 className="max-w-[450px] text-3xl md:text-[40px] leading-[128.5%] text-white font-semibold">
                Flexible solution for all kinds of business
              </h2>
              <div className="flex items-center 2xl:mt-[100px] xl:mt-[50px] mt-10 gap-[18px]">
                <div className="flex -sm:space-x-12 -space-x-8">
                  {Array(5)
                    .fill(0)
                    .map((_, idx) => (
                      <img
                        key={idx}
                        src={user}
                        alt="user"
                        className="rounded-full sm:w-[100px] w-20 sm:h-[100px] h-20 border-white border-[3px]"
                      />
                    ))}
                </div>
                <img src={curve} alt="arrow" className="hidden xl:block" />
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12 mt-10 lg:mt-0">
              <Swiper   modules={[Autoplay]} loop autoplay={{ delay: 3000, disableOnInteraction: false }}>
                {reviews.map((review, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="bg-primary-dark3 rounded-[20px] m-[4px]">
                      <div className="flex flex-wrap items-center justify-between border-b-[1px] p-4 2xl:p-[60px] xl:p-[40px] border-primary-dark">
                        <div>
                          <h6 className="text-lg text-white font-semibold tracking-widest">
                            REVIEW RATING
                          </h6>
                          <div className="flex mt-[18px] gap-[1px]">
                            {Array(5)
                              .fill(0)
                              .map((_, idx) => (
                                <FaStar key={idx} color="#D9A95C" size={30} />
                              ))}
                          </div>
                        </div>
                        <div className="flex items-center flex-wrap justify-between sm:gap-[40px]">
                          <img src={upwork} width={140} alt="upwork" />
                          <img src={google} width={100} alt="google" />
                        </div>
                      </div>
                      <div className="p-4 2xl:p-[60px] xl:p-[40px]">
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
