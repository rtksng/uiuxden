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
    <Container>
      <section className="2xl:mt-[154px] mt-10 uxres-sec">
        <h2 className="text-center 2xl:text-[60px] text-[24px] xl:text-[40px] font-semibold">
          Words from UIUX den{" "}
          <span className="animationStroke ">
            <SVGAnimation height={110} width={252} /> Minds{" "}
          </span>
        </h2>
        <div className="grid grid-cols-3 gap-2 2xl:mt-[84px] xl:mt-[50px] mt-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="sm:col-span-1 col-span-12  rounded-xl overflow-hidden"
            >
              <img
                src={image}
                alt={`review_img_${index}`}
                className="w-full h-[240px] 2xl:h-[300px] object-cover"
              />
              <div className=" bg-secondary-light3   py-5  px-3 xl:px-5 ">
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
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Review;
