import Navbar from "../components/Navbar";
import rightLongArrow from "../assets/right-long-arrow.svg";
import Container from "../components/Container";
import { useEffect, useState } from "react";
import SVGAnimation from "../components/StrokeAnimation";
import BudgetImg from "../assets/budget-friendly-img.png";
import CriticalIMG from "../assets/critical-img.png";
// import CircularProcessCarousel from "../components/CircularProcessCarousel";
import Footer from "../components/Footer";
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
      <div
        className={`fixed top-0 left-0 w-full z-[120] transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      ></div>
      <Navbar />

      {/* ---------- Banner Section ---------- */}
      <div className="relative h-[auto] lg:h-[100vh] green-linear">
        <Container>
          <div className="text-center pt-[80px]  sm:pt-[120px]  2xl:pt-[170px] flex flex-col items-center">
            <h1 className="text-[34px] lg:text-[48px] max-w-[1100px] xl:text-[56px] 2xl:text-[90px] text-black leading-tight font-semibold mb-base">
              UIUXDen takes deep dive into design sprints to get better
              solutions
            </h1>
          </div>

          <div className="lg:absolute bottom-5 left-2  2xl:left-9 text-center lg:text-start mt-3 sm:mt-0 ">
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
          </div>

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

              <div className="grid upperbox-sec grid-cols-12 gap-5 mt-10 lg:mt-20">
                {/* --- Box 1 --- */}
                <div className="col-span-4 ">
                  <div className="standout-box relative">
                    <p className="text-lg lg:text-xl ">
                      Distraction-free environment
                    </p>
                  </div>
                </div>

                {/* --- Box 2 --- */}
                <div className="col-span-4 ">
                  <div className="standout-box relative">
                    <p className="text-lg lg:text-xl">
                      Collaborative Workshops
                    </p>
                  </div>
                </div>

                {/* --- Box 3 --- */}
                <div className="col-span-4 ">
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

          {/* <CircularProcessCarousel /> */}

          <div className="flex justify-center mt-10">
            <img src={CriticalIMG} alt="Image"/>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  );
};

export default DesignSprint;
