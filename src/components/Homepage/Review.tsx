import React from "react";
import horigreen from "../../assets/horigreen.png";
import Button from "../Button";
const Review = () => {
  return (
    <section className="mt-[154px]">
      <h2 className="text-center text-[60px] font-semibold">
        Words from UIUX den Minds
      </h2>
      <div className="grid grid-cols-3 mt-[84px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="col-span-1 group relative overflow-hidden rounded-lg"
          >
            <img
              src={`src/assets/review_${index}.png`}
              alt={`review_img_${index}`}
              className="w-full h-full object-cover"
            />
            <div
              className=" reviewcardbg absolute inset-x-0 bottom-0 top-[185px]    pt-[110px] pb-[82px] px-10
              translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
            >
              <div className="flex items-center gap-4">
                <h6 className="text-lg font-semibold">UX Resesarch</h6>
                <img src={horigreen} alt="line" width={215} />
              </div>
              <h2 className="text-[32px] font-semibold mt-2">
                Can User Testing Help You Reduce Product Cycles?
              </h2>
              <p className="text-neutral-600 mt-[50px] leading-7">
                Get an in-depth analysis of what’s working well and what’s
                broken on your product. Get an in-depth analysis of what’s
                working. Get an in-depth analysis of what’s working well and
                what’s broken on your product. Get an in-depth analysis of
                what’s working. Get an in-depth analysis of what’s working well
                and what’s broken on your product. Get an in-depth analysis of
                what’s working.
              </p>
              <div className="flex items-center justify-between mt-12">
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
