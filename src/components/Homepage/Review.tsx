import horigreen from "../../assets/horigreen.png";
import SVGAnimation from "../StrokeAnimation";
import Button from "../Button";

const Review = () => {
  return (
    <section className="lg:mt-[154px] mt-10">
      <h2 className="text-center lg:text-[60px] text-[24px] md:text-[32px] font-semibold">
        Words from UIUX den <span className="animationStroke"><SVGAnimation height={110} width={252} /> Minds </span>
      </h2>
      <div className="grid grid-cols-3 lg:mt-[84px] mt-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="sm:col-span-1 col-span-12 group relative overflow-hidden rounded-lg"
          >
            <img
              src={`src/assets/review_${index}.png`}
              alt={`review_img_${index}`}
              className="w-full h-full object-cover"
            />
            <div
              className=" reviewcardbg bg-secondary-light3 2xl:bg-transparent absolute inset-x-0 bottom-0 2xl:top-[20%] py-5 xL:py-10 top-0   2xl:pt-[110px] 2xl:pb-[82px] px-3 xl:px-10
              translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
            >
              <div className="flex items-center gap-4">
                <h6 className="text-lg font-semibold">UX Resesarch</h6>
                <img src={horigreen} alt="line" width={215} />
              </div>
              <h2 className="2x:text-[32px] text-2xl font-semibold mt-2">
                Can User Testing Help You Reduce Product Cycles?
              </h2>
              <p className="text-neutral-600 2xl:mt-[50px] 2xl:leading-7">
                Get an in-depth analysis of what’s working well and what’s
                broken on your product. Get an in-depth analysis of what’s
                working. Get an in-depth analysis of what’s working well and
                what’s broken on your product. Get an in-depth analysis of
                what’s working.
              </p>
              <div className="flex items-center flex-wrap justify-between mt-6 2xl:mt-12">
                <Button
                  variant="primary"
                  className="!hover:bg-transparent px-[30px]"
                >
                  Read More
                </Button>
                <div className="flex items-center gap-3">
                  <small className="text-neutral-600 font-sm font-medium">
                    by Surbhi Sood
                  </small>
                  <img
                    src={`src/assets/review_${index}.png`}
                    alt="user"
                    className="rounded-full w-[60px] h-[60px] border-secondary-light border-[3px]"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
