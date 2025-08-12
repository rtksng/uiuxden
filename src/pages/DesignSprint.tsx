import Navbar from "../components/Navbar";
import rightLongArrow from "../assets/right-long-arrow.svg";
import Container from "../components/Container";
import { useEffect, useState } from "react";
import SVGAnimation from "../components/StrokeAnimation";
import BudgetImg from "../assets/budget-friendly-img.png";
// import CriticalIMG from "../assets/critical-img.png";
import humanThinkImg1 from "../assets/design-sprint/human-think-img-1.png";
import humanThinkImg2 from "../assets/design-sprint/human-think-img-2.png";
import humanThinkImg3 from "../assets/design-sprint/human-think-img-3.png";
import humanThinkImg4 from "../assets/design-sprint/human-think-img-4.png";
import humanThinkImg5 from "../assets/design-sprint/human-think-img-5.png";
import humanThinkImg6 from "../assets/design-sprint/human-think-img-6.png";

import Carousal from "../components/Carousal";
import Footer from "../components/Footer";

const consultData = {
  heading: "Ready to Elevate Your",
  subheading: "User",
  boldsubheading: "Experience?",
  buttonText: "Schedule a Consultation",
};
const DesignSprint = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main>
      <Navbar />
      <div className={`fixed top-0 left-0 w-full z-[120] transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >

      </div>

      {/* ---------- Banner Section ---------- */}
      <div className="relative h-[auto] lg:h-[100vh] green-linear">
        <Container>
          <div className="text-center pt-[80px]  sm:pt-[120px]  2xl:pt-[170px] flex flex-col items-center">
            <h1 className="text-[34px] lg:text-[48px] max-w-[1100px] xl:text-[56px] 2xl:text-[90px] text-black font-semibold mb-base leading-[1.1]">
              UIUXDen takes deep dive into design sprints to get better
              solutions
            </h1>
          </div>

          {/* <div className="lg:absolute bottom-5 left-2  2xl:left-9 text-center lg:text-start mt-3 sm:mt-0 ">
            <div className="xl:flex xl:items-center">
              <img
                src={rightLongArrow}
                alt="arrow"
                width={50}
                className="hidden lg:block xl:mx-auto"
              />
              <div className="lg:ml-3 pt-4 lg:pt-0 mb-5">
                <h6 className="text-[14px] sm:text-[16px] xl:text-[18px] text-black font-normal">
                  Home | Design Sprint
                </h6>
              </div>
            </div>
          </div> */}

          <div className="flex justify-center flex-wrap items-center mt-8 mt-lg-0 pt:5 lg:pt-10 xl:scale-[.9] 2xl:scale-[1]">
            {/* ------- Box 1 -------- */}
            <div className="lg:w-[30%] mb-10 xl:mb-0 xl:w-[20%]">
              <div className="datebox pl-[77px] relative">
                <div className="absolute left-0 top-0">
                  <div className="relative flex items-center justify-center pb-2">
                    <div className="flex items-center justify-center ">
                      <svg
                        width="58"
                        height="186"
                        viewBox="0 0 58 186"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="185.5"
                          width="185"
                          height="57"
                          rx="28.5"
                          transform="rotate(-90 0.5 185.5)"
                          stroke="black"
                          stroke-dasharray="1 10"
                        />
                      </svg>

                      <span className="font-semibold text-xl -rotate-90 text-center absolute">
                        Mon
                      </span>
                    </div>
                    <span className="absolute -right-[20px]">
                      <svg
                        width="32"
                        height="12"
                        viewBox="0 0 32 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.0512 6.97656L31.0512 11.7501L31.0512 0.203058L21.0512 4.97656L21.0512 6.97656ZM22.0512 4.97656L0.595703 4.97656L0.595703 6.97656L22.0512 6.97656L22.0512 4.97656Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <p className="text-center text-xl font-semibold w-[178px] h-[178px] p-6 rounded-full flex items-center justify-center border-black border">
                  Make a map & choose a target
                </p>
              </div>
            </div>

            {/* ------- Box 2 -------- */}
            <div className="lg:w-[30%] mb-10 xl:mb-0 xl:w-[20%] pl-3">
              <div className="datebox pl-[77px] relative">
                <div className="absolute left-0 top-0">
                  <div className="relative flex items-center justify-center pb-2">
                    <div className="flex items-center justify-center ">
                      <svg
                        width="58"
                        height="186"
                        viewBox="0 0 58 186"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="185.5"
                          width="185"
                          height="57"
                          rx="28.5"
                          transform="rotate(-90 0.5 185.5)"
                          stroke="black"
                          stroke-dasharray="1 10"
                        />
                      </svg>

                      <span className="font-semibold text-xl -rotate-90 text-center absolute">
                        Tue
                      </span>
                    </div>
                    <span className="absolute -right-[20px]">
                      <svg
                        width="32"
                        height="12"
                        viewBox="0 0 32 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.0512 6.97656L31.0512 11.7501L31.0512 0.203058L21.0512 4.97656L21.0512 6.97656ZM22.0512 4.97656L0.595703 4.97656L0.595703 6.97656L22.0512 6.97656L22.0512 4.97656Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <p className="text-center text-xl font-semibold w-[178px] h-[178px] p-6 rounded-full flex items-center justify-center border-black border">
                  Sketch Completing solutions
                </p>
              </div>
            </div>

            {/* ------- Box 3 -------- */}
            <div className="lg:w-[30%] mb-10 xl:mb-0 xl:w-[20%] pl-3">
              <div className="datebox pl-[77px] relative">
                <div className="absolute left-0 top-0">
                  <div className="relative flex items-center justify-center pb-2">
                    <div className="flex items-center justify-center ">
                      <svg
                        width="58"
                        height="186"
                        viewBox="0 0 58 186"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="185.5"
                          width="185"
                          height="57"
                          rx="28.5"
                          transform="rotate(-90 0.5 185.5)"
                          stroke="black"
                          stroke-dasharray="1 10"
                        />
                      </svg>

                      <span className="font-semibold text-xl -rotate-90 text-center absolute">
                        Wed
                      </span>
                    </div>
                    <span className="absolute -right-[20px]">
                      <svg
                        width="32"
                        height="12"
                        viewBox="0 0 32 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.0512 6.97656L31.0512 11.7501L31.0512 0.203058L21.0512 4.97656L21.0512 6.97656ZM22.0512 4.97656L0.595703 4.97656L0.595703 6.97656L22.0512 6.97656L22.0512 4.97656Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <p className="text-center text-xl font-semibold w-[178px] h-[178px] p-6 rounded-full flex items-center justify-center border-black border">
                  Decide on the best
                </p>
              </div>
            </div>

            {/* ------- Box 4 -------- */}
            <div className="lg:w-[30%] mb-10 xl:mb-0 xl:w-[20%] pl-3">
              <div className="datebox pl-[77px] relative">
                <div className="absolute left-0 top-0">
                  <div className="relative flex items-center justify-center pb-2">
                    <div className="flex items-center justify-center ">
                      <svg
                        width="58"
                        height="186"
                        viewBox="0 0 58 186"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="185.5"
                          width="185"
                          height="57"
                          rx="28.5"
                          transform="rotate(-90 0.5 185.5)"
                          stroke="black"
                          stroke-dasharray="1 10"
                        />
                      </svg>

                      <span className="font-semibold text-xl -rotate-90 text-center absolute">
                        Thur
                      </span>
                    </div>
                    <span className="absolute -right-[20px]">
                      <svg
                        width="32"
                        height="12"
                        viewBox="0 0 32 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.0512 6.97656L31.0512 11.7501L31.0512 0.203058L21.0512 4.97656L21.0512 6.97656ZM22.0512 4.97656L0.595703 4.97656L0.595703 6.97656L22.0512 6.97656L22.0512 4.97656Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <p className="text-center text-xl font-semibold w-[178px] h-[178px] p-6 rounded-full flex items-center justify-center border-black border">
                  Build a realistic prototype
                </p>
              </div>
            </div>

            {/* ------- Box 5 -------- */}
            <div className="lg:w-[30%] mb-10 xl:mb-0 xl:w-[20%] pl-3">
              <div className="datebox pl-[77px] relative">
                <div className="absolute left-0 top-0">
                  <div className="relative flex items-center justify-center pb-2">
                    <div className="flex items-center justify-center ">
                      <svg
                        width="58"
                        height="186"
                        viewBox="0 0 58 186"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="185.5"
                          width="185"
                          height="57"
                          rx="28.5"
                          transform="rotate(-90 0.5 185.5)"
                          stroke="black"
                          stroke-dasharray="1 10"
                        />
                      </svg>

                      <span className="font-semibold text-xl -rotate-90 text-center absolute">
                        Fri
                      </span>
                    </div>
                    <span className="absolute -right-[20px]">
                      <svg
                        width="32"
                        height="12"
                        viewBox="0 0 32 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.0512 6.97656L31.0512 11.7501L31.0512 0.203058L21.0512 4.97656L21.0512 6.97656ZM22.0512 4.97656L0.595703 4.97656L0.595703 6.97656L22.0512 6.97656L22.0512 4.97656Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <p className="text-center text-xl font-semibold w-[178px] h-[178px] p-6 rounded-full flex items-center justify-center border-black border">
                  Test with target customers
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* --------- Budget Friendly Section --------- */}
      <div className="py-20 buget-section">
        <Container>
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-7 xl:col-span-6">
              <p className="text-[34px] text-center lg:text-start md:text-[42px] xl:text-[50px] 2xl:text-[60px] font-semibold leading-snug ">
                Our one intense week is enough to make a better product which{" "}
                <span className="animationStroke design-sprint w-fit h-fit inline-block">
                  <SVGAnimation nameOfClass="svg-container pl-4 aboutus" />
                  stands out
                </span>{" "}
                in the market
              </p>

              <div className="grid upperbox-sec grid-cols-12 gap-5 mt-10 xlC:mt-20">
                {/* --- Box 1 --- */}
                <div className="col-span-4 w-full sm:w-auto">
                  <div className="standout-box relative">
                    <p className="text-lg lg:text-xl ">
                      Distraction-free environment
                    </p>
                  </div>
                </div>

                {/* --- Box 2 --- */}
                <div className="col-span-4 w-full sm:w-auto">
                  <div className="standout-box relative">
                    <p className="text-lg lg:text-xl">
                      Collaborative Workshops
                    </p>
                  </div>
                </div>

                {/* --- Box 3 --- */}
                <div className="col-span-4 w-full sm:w-auto">
                  <div className="standout-box relative">
                    <p className="text-lg lg:text-xl">
                      Align towards a common goal
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 xl:col-span-6 mt-10 lg:mt-0">
              <img src={BudgetImg} alt="Image" className="mx-auto" />
            </div>
          </div>
        </Container>
      </div>

      {/* ---------- Critical Section ------------- */}

      <div className="py-20 bg-[#2D2D2D] critical-section">
        <Container>
          <h2 className="text-[34px] lg:text-[48px] mx-auto max-w-[1100px] xl:text-[56px] 2xl:text-[60px] text-white leading-tight font-semibold text-center">
            UIUXDen, follow one by one process for answering{" "}
            <span className="animationStroke critical w-fit h-fit inline-block">
              <SVGAnimation nameOfClass="svg-container pl-4 aboutus" />
              critical
            </span>{" "}
            business solutions
          </h2>
          <p className="text-center text-white py-4 text-2xl font-semibold ">
            Creating product from scratch, or already digital existence
          </p>


          <div className="flex justify-center mt-10">
            <Carousal />
            {/* <img src={CriticalIMG} alt="Image" /> */}
          </div>
        </Container>
      </div>

      {/* ---------- Specialists Section ------------- */}
      <div className="custom-specialistsec relative overflow-hidden py-[50px] md:py-[100px] lg:py-[150px]">
        <div className="bg-circle"></div>
        <Container>
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6 xl:col-span-7 pr-0 mb-10 lg:mb-0 lg:pr-10 ">
              <h2 className="text-[34px] lg:text-[48px] xl:text-[56px] 2xl:text-[60px] text-[#1A1A1A] font-semibold">
                UIUXDen’s, one intense week is enough to make a better product to outstand in the market
              </h2>
            </div>

            <div className="col-span-12 lg:col-span-6 xl:col-span-5 specialistsec-wrapper relative">

              <div className="specialistsec-boxoutter">
                <div className="specialistsec-box flex gap-[25px] flex-col sm:flex-row">
                  <div className="star-boxoutter flex flex-col justify-center items-center">
                    <div className="star-box flex items-center justify-center">
                      <svg width="164" height="86" viewBox="0 0 164 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 62L14.6803 70.3109L23.4127 70.2918L16.3368 75.4091L19.0534 83.7082L12 78.56L4.94658 83.7082L7.66318 75.4091L0.587322 70.2918L9.3197 70.3109L12 62Z" fill="black" />
                        <path d="M26.8564 24L35.4919 31.8097L45.5625 25.9661L40.8035 36.5923L49.4731 44.3642L37.8964 43.1218L33.184 53.7688L30.7881 42.3747L19.206 41.183L29.3021 35.3834L26.8564 24Z" fill="black" />
                        <path d="M82 0L86.4672 13.8515L101.021 13.8197L89.228 22.3485L93.7557 36.1803L82 27.6L70.2443 36.1803L74.772 22.3485L62.9789 13.8197L77.5328 13.8515L82 0Z" fill="black" />
                        <path d="M152 62L149.32 70.3109L140.587 70.2918L147.663 75.4091L144.947 83.7082L152 78.56L159.053 83.7082L156.337 75.4091L163.413 70.2918L154.68 70.3109L152 62Z" fill="black" />
                        <path d="M137.144 24L128.508 31.8097L118.438 25.9661L123.196 36.5923L114.527 44.3642L126.104 43.1218L130.816 53.7688L133.212 42.3747L144.794 41.183L134.698 35.3834L137.144 24Z" fill="black" />
                      </svg>
                    </div>
                    <p className="text-[60px] font-semibold text-center">
                      40+
                    </p>
                    <p className="font-semibold text-center uppercase">
                      Specialists
                    </p>
                  </div>
                  <div className="content-box">
                    <p className="text-[25px] font-semibold text-[#1A1A1A]">
                      What happens after a
                      Design Sprint?
                    </p>
                    <p className="py-[35px] font-semibold border-b-[3px] border-black relative before:border-[8px] before:border-black before:absolute before:border-t-transparent before:border-l-transparent before:border-b-transparent before:right-0 before:bottom-[-8px]">
                      Running an iteration sprint
                    </p>
                    <p className="py-[35px] font-semibold border-b-[3px] border-black relative before:border-[8px] before:border-black before:absolute before:border-t-transparent before:border-l-transparent before:border-b-transparent before:right-0 before:bottom-[-8px]">
                      Running an iteration sprint
                    </p>
                    <p className="py-[35px] font-semibold">
                      Running an iteration sprint
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <div className="human-thinksec pt-[50px] md:pt-[80px] xl:pt-[150px]">
          <Container>
            <p className="text-[34px] lg:text-[48px] xl:text-[56px] 2xl:text-[60px] text-[#1A1A1A] font-semibold text-center max-w-[1240px] mx-auto mb-[20px] md:mb-[100px] sm:leading-[50px] lg:leading-[80px] leading-[40px]">
              UIUXDen, facilitating ideation sessions
              involves an understanding of human thinking and mental model
            </p>
          </Container>
          <div className="humanthinkimage-sec flex">
            <div className="image-box">
              <img src={humanThinkImg1} alt="Image" />
            </div>

            <div className="image-box md:mt-[10%]">
              <img src={humanThinkImg2} alt="Image" />
            </div>
            <div className="image-box">
              <img src={humanThinkImg3} alt="Image" />
            </div>
            <div className="image-box md:mt-[10%]">
              <img src={humanThinkImg4} alt="Image" />
            </div>
            <div className="image-box">
              <img src={humanThinkImg5} alt="Image" />
            </div>
            <div className="image-box md:mt-[10%]">
              <img src={humanThinkImg6} alt="Image" />
            </div>
          </div>
        </div>

      </div>

      <Footer consultData={consultData} />
    </main>
  );
};

export default DesignSprint;
