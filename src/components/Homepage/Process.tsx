import React from "react";
import Container from "../Container";
import { TbReportAnalytics } from "react-icons/tb";
import rightBar from "../../assets/rightbar.png";
import process1 from "../../assets/process1.svg";
import process2 from "../../assets/process2.svg";
import process3 from "../../assets/process3.svg";
import process4 from "../../assets/process4.svg";
import process5 from "../../assets/process5.svg";
import process6 from "../../assets/process6.svg";
import process7 from "../../assets/process7.svg";
import process8 from "../../assets/process8.svg";
const Process = () => {
  return (
    <section className="mt-[200px]">
      <Container>
        <div className="flex items-end justify-between">
          <div className="max-w-[400px] p-5 relative bottom-16">
            <h5 className="text-[60px] font-semibold leading-none">Our</h5>{" "}
            <h2 className="text-[85px] font-semibold">Process</h2>
            <p className="text-neutral-600 text-2xl">
              Our process ensures your vision becomes a seamless reality.
            </p>
          </div>
          <div className="grid grid-flow-col auto-cols-max me-24">
            <div className="w-[320px] p-5 relative h-full">
              <div className="flex  ">
                <div className="text-[30px] font-semibold text-primary-dark2 pe-5">
                  1
                </div>
                <div className="text-primary-dark2">
                  <img src={process1} alt="Icon" />
                  <h2 className="mt-3  text-[30px] font-semibold leading-10">
                    Requirement Gathering
                  </h2>
                  <p className="text-neutral-600 mt-3">
                    Client vision is our top priority. We ask, listen, to understand what matters most.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={rightBar}
                  className="h-[290px] absolute right-0 bottom-0"
                  alt="bar"
                />
              </div>
            </div>
            <div className="w-[320px] p-5 relative h-full">
              <div className="flex  ">
                <div className="text-[30px] font-semibold text-primary-dark2 pe-5">
                  2
                </div>
                <div className="text-primary-dark2">
                  <img src={process2} alt="Icon" />
                  <h2 className="mt-3  text-[30px] font-semibold leading-10">
                    Brainstorming
                  </h2>
                  <p className="text-neutral-600 mt-3">
                    Great ideas start here. Together we unleash possibilities and turn challenges into opportunities.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={rightBar}
                  className="h-[290px] absolute right-0 bottom-0"
                  alt="bar"
                />
              </div>
            </div>
            <div className="w-[320px] p-5 relative h-full">
              <div className="flex  ">
                <div className="text-[30px] font-semibold text-primary-dark2 pe-5">
                  3
                </div>
                <div className="text-primary-dark2">
                  <img src={process3} alt="Icon" />
                  <h2 className="mt-3  text-[30px] font-semibold leading-10">
                    UX Strategy
                    & Design
                  </h2>
                  <p className="text-neutral-600 mt-3">
                    We map the journey, avoid the potholes, anticipate the bumps to ensure no one gets lost.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={rightBar}
                  className="h-[290px] absolute right-0 bottom-0"
                  alt="bar"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-flow-col auto-cols-max border-t-[1px] border-t-primary-dark2">
          <div className="max-w-[320px] p-5  h-full relative">
            <div className="flex">
              <div className="text-[30px] font-semibold text-primary-dark2 pe-5">
                4
              </div>
              <div className="text-primary-dark2">
                <img src={process4} alt="Icon" />
                <h2 className="mt-3  text-[30px] font-semibold leading-10">
                  UI Design
                </h2>
                <p className="text-neutral-600 mt-3">
                  Craft stunning, intuitive, and user friendly interfaces that don’t just look good - they feel good.
                </p>
              </div>
            </div>
            <div>
              <img
                src={rightBar}
                className="h-[290px] absolute right-0 top-0"
                alt="bar"
              />
            </div>
          </div>
          <div className="max-w-[320px] p-5  h-full relative">
            <div className="flex">
              <div className="text-[30px] font-semibold text-primary-dark2 pe-5">
                5
              </div>
              <div className="text-primary-dark2">
                <img src={process5} alt="Icon" />
                <h2 className="mt-3  text-[30px] font-semibold leading-10">
                  Prototyping
                </h2>
                <p className="text-neutral-600 mt-3">
                  Bringing ideas to life with interactive prototypes to see product before launch.
                </p>
              </div>
            </div>
            <div>
              <img
                src={rightBar}
                className="h-[290px] absolute right-0 top-0"
                alt="bar"
              />
            </div>
          </div>
          <div className="max-w-[320px] p-5  h-full relative">
            <div className="flex">
              <div className="text-[30px] font-semibold text-primary-dark2 pe-5">
                6
              </div>
              <div className="text-primary-dark2">
                <img src={process6} alt="Icon" />
                <h2 className="mt-3  text-[30px] font-semibold leading-10">
                  Development
                </h2>
                <p className="text-neutral-600 mt-3">
                  Our code warriors transform design into robust, scalable solutions that perform seamlessly.
                </p>
              </div>
            </div>
            <div>
              <img
                src={rightBar}
                className="h-[290px] absolute right-0 top-0"
                alt="bar"
              />
            </div>
          </div>
          <div className="max-w-[320px] p-5  h-full relative">
            <div className="flex">
              <div className="text-[30px] font-semibold text-primary-dark2 pe-5">
                7
              </div>
              <div className="text-primary-dark2">
                <img src={process7} alt="Icon" />
                <h2 className="mt-3  text-[30px] font-semibold leading-10">
                  Deployment
                </h2>
                <p className="text-neutral-600 mt-3">
                  Launch day is just the start. We ensure everything runs smoothly.
                </p>
              </div>
            </div>
            <div>
              <img
                src={rightBar}
                className="h-[290px] absolute right-0 top-0"
                alt="bar"
              />
            </div>
          </div>
          <div className="max-w-[320px] p-5  h-full relative">
            <div className="flex">
              <div className="text-[30px] font-semibold text-primary-dark2 pe-5">
                8
              </div>
              <div className="text-primary-dark2">
                <img src={process8} alt="Icon" />
                <h2 className="mt-3  text-[30px] font-semibold leading-10">
                  Maintenance
                </h2>
                <p className="text-neutral-600 mt-3">
                  Continuous improvement matters. We keep products updated, secure, and evolving with users’ needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Process;
