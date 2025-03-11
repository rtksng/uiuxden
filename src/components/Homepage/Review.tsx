import horigreen from "../../assets/horigreen.png";
import SVGAnimation from "../StrokeAnimation";
import Button from "../Button";
import image1 from "../../assets/review_0.png";
import image2 from "../../assets/review_1.png";
import image3 from "../../assets/review_2.png";
import Container from "../Container";
const images = [image1, image2, image3];

const Review = () => {
  return (
    <>
      <Container>
        <section className="2xl:mt-[154px] mt-10 uxres-sec">
          <h2 className="text-center 2xl:text-[60px] text-[28px] md:text-[36px] xl:text-[40px] font-semibold text-primary-dark2">
            Words from UIUX den{" "}
            <span className="animationStroke ">
              <SVGAnimation height={110} width={252} /> Minds{" "}
            </span>
          </h2>

        </section>
      </Container>
      <div className="grid grid-cols-12 lg:grid-cols-3 gap-2 xl:gap-0 2xl:mt-[84px] xl:mt-[50px] mt-6 words-mind-card-wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className=" lg:col-span-1 sm:col-span-6 col-span-12  place-content-center overflow-hidden"
          >
            <div className=" h-[400px] lg:h-[500px] 2xl:h-[764px] group bg-gray-500 relative">
              <img
                src={image}
                alt={`review_img_${index}`}
                className=" relative w-full object-cover h-full mix-blend-luminosity xl:mix-blend-normal group-hover:mix-blend-luminosity"
              />

              {/* <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-bold">
              </div> */}

              {/* <div className="hidden group-hover:block absolute bottom-0 w-full content-overlay pt-[70px] 2xl:pt-[100px] px-[30px] pb-[80px] xl:min-h-[300px] 2xl:min-h-[400px] text-primary-dark2"> */}

              <div className=" h-[85%] lg:h-[75%] xl:h-0  2xl:group-hover:h-[500px] xl:group-hover:h-[400px] group-hover:h-[auto] absolute bottom-0 w-full content-overlay pt-[40px] xl:pt-[0px] group-hover:pt-[40px] 2xl:group-hover:pt-[100px] px-[24px] xl:px-[30px] group-hover:pb-[80px] text-primary-dark2 duration-300 ease-out transition-all">

                <div className="flex items-center gap-4">
                  <h6 className="text-lg font-semibold">UX Research</h6>
                  <img src={horigreen} alt="line" width={215} className="hidden xl:block" />
                </div>
                <h2 className="2xl:text-3xl text-xl font-semibold mt-2">
                  Can User Testing Help You Reduce Product Cycles?
                </h2>
                <p className="text-primary-dark2 mt-3 2xl:mt-[50px] 2xl:leading-7">
                  Get an in-depth analysis of what’s working well and what’s
                  broken on your product. Get an in-depth analysis of what’s
                  working.
                </p>

                <div className="flex items-center flex-wrap justify-between mt-6 2xl:mt-12">
                  <Button
                    variant="primary"
                    className="!hover:bg-transparent py-[10px] 2xl:py-4 px-4 xl:px-[20px] 2xl:px-[30px] mr-auto"
                  >
                    Read More
                  </Button>

                  <div className="flex items-center gap-3 ml-auto">
                    <small className="text-primary-dark2 font-sm font-medium">
                      by Surbhi Sood
                    </small>
                    <img
                      src={image}
                      alt="user"
                      className="rounded-full w-[60px] h-[60px] border-secondary-light border-[3px]"
                    />
                  </div>
                </div>
              </div>
            </div>


            {/* <div className=" bg-secondary-light3   py-5  px-3 xl:px-5 ">
                <div className="flex items-center gap-4">
                  <h6 className="text-lg font-semibold">UX Research</h6>
                  <img src={horigreen} alt="line" width={215} />
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src={image}
                    alt="user"
                    className="rounded-full w-[60px] h-[60px] border-secondary-light border-[3px]"
                  />
                  <small className="text-neutral-600 font-sm font-medium">
                    by Surbhi Sood
                  </small>
                </div>
                <h2 className="2xl:text-3xl text-xl font-semibold mt-2">
                  Can User Testing Help You Reduce Product Cycles?
                </h2>
                <p className="text-neutral-800 mt-3 2xl:mt-[50px] 2xl:leading-7">
                  Get an in-depth analysis of what’s working well and what’s
                  broken on your product. Get an in-depth analysis of what’s
                  working.
                </p>
                <div className="flex items-center flex-wrap justify-between mt-6 2xl:mt-12">
                  <Button
                    variant="primary"
                    className="!hover:bg-transparent py-[10px] 2xl:py-4 px-[20px] 2xl:px-[30px]"
                  >
                    Read More
                  </Button>
                </div>
              </div> */}
          </div>
        ))}
      </div>
    </>

  );
};

export default Review;
