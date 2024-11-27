import React from "react";
import Container from "../Container";
import { TbReportAnalytics } from "react-icons/tb";
import rightBar from "../../assets/rightbar.png";
const Process = () => {
  return (
    <section className="mt-[200px]">
      <Container>
        <div className="flex items-center">
          <div className="max-w-[350px]">
            <h5 className="text-[60px] font-semibold leading-none">Our</h5>{" "}
            <h2 className="text-[85px] font-semibold">Process</h2>
            <p className="text-neutral-600 text-2xl">
              Every project is a roller coaster, and each one teaches us
              something invaluable.
            </p>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-4 h-full">
              <div className="flex ps-[18px] pe-[34px] relative">
                <div className="text-[30px] font-semibold text-primary-dark2 pe-5">
                  1
                </div>
                <div className="text-primary-dark2">
                  <TbReportAnalytics size={76} className="-ms-3" />
                  <h2 className="mt-3  text-[30px] font-semibold leading-10">
                    Requirement Gathering
                  </h2>
                  <p className="text-neutral-600 mt-3">
                    Client vision is our top <br /> priority.  We ask, listen, to
                    understand what matters most.
                  </p>
                </div>
                <div >
                  <img src={rightBar} className="max-h-full" alt="bar" />
                </div>
              </div>
            </div>
            <div className="col-span-4 h-full">
              <div className="flex ps-[18px] pe-[34px] relative">
              <div className="absolute right-0 bottom-0 ">
                  <img src={rightBar} className="max-h-full" alt="bar" />
                </div>
                <div className="text-[30px] font-semibold text-primary-dark2 pe-5">
                2
                </div>
                <div className="text-primary-dark2">
                  <TbReportAnalytics size={76} className="-ms-3" />
                  <h2 className="mt-3  text-[30px] font-semibold leading-10">
                  Brainstorming
                  </h2>
                  <p className="text-neutral-600 mt-3">
                  Great ideas start here. Together we unleash possibilities and turn challenges into opportunities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-4 h-full">
              <div className="flex  ps-[18px] pe-[34px] relative">
                
                <div className="text-[30px] font-semibold text-primary-dark2 pe-5">
                3
                </div>
                <div className="text-primary-dark2">
                  <TbReportAnalytics size={76} className="-ms-3" />
                  <h2 className="mt-3  text-[30px] font-semibold leading-10">
                  UX Strategy
                  & Design
                  </h2>
                  <p className="text-neutral-600 mt-3">
                  We map the journey, avoid the potholes, anticipate the bumps to ensure no one gets lost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Process;
