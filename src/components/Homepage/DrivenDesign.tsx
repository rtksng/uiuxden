import Container from "../Container";
import wave1 from "../../assets/wave1.svg";
import figjam from "../../assets/figjam.png";
import bravo from "../../assets/bravo.png";
import uxpilot from "../../assets/uxpilot.svg";
import locofy from "../../assets/locofy.svg";
import stark from "../../assets/stark.svg";
const DrivenDesign = () => {
  return (
    <section className="xl:mt-[200px] sm:mt-16 mt-10 max-w-full">
      <Container>
        <div className="grid grid-cols-12 relative gap-3">
          <div className="xl:col-span-5  col-span-12 self-center">
            <h3 className="lg:text-6xl md:text-4xl text-3xl font-semibold">
              AI-Powered Design
            </h3>
            <h2 className="lg:text-[90px] md:text-5xl text-4xl font-semibold lg:mt-3">
              Accelerators{" "}
            </h2>
            <p className="lg:text-[28px] md:2xl text-lg text-secondary-dark md:mt-8 lg:leading-10">
              Our design team uses the power of cutting-edge AI tools to deliver
              smarter, faster, and frictionless UX solutions. AI tools enhance
              our creative process, ensuring every design is optimized for
              usability and user satisfaction.
            </p>
          </div>
          <div className="absolute left-[32%] top-[13%] hidden xl:block">
            <img src={wave1} alt="wave" />
          </div>
          <div className="xl:col-span-7 col-span-12">
            <div className="lg:flex justify-center xl:justify-end">
              <div>
                <div className="grid grid-cols-12 border-gradient-b">
                  <div className="col-span-6 lg:col-span-4 flex items-center justify-center  lg:w-[240px] h-20 lg:h-[195px] relative ">
                    <img
                      className="max-w-[100px] lg:max-w-[150px]  "
                      src={bravo}
                      alt="bravo"
                    />
                  </div>
                  <div className="col-span-6 lg:col-span-4 bg-gradient-fill hidden lg:flex items-center justify-center  lg:w-[240px] h-20 lg:h-[195px]  relative "></div>
                  <div className="col-span-6 lg:col-span-4 flex items-center justify-center  lg:w-[240px] h-20 lg:h-[195px] relative   ">
                    {" "}
                    <img
                      className="max-w-[100px] lg:max-w-[150px]  "
                      src={locofy}
                      alt="locofy"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 border-gradient-b">
                  <div className="col-span-6 lg:col-span-4 hidden lg:flex items-center justify-center  lg:w-[240px] h-20 lg:h-[195px] relative border-gradient-b "></div>
                  <div className="col-span-12 lg:col-span-4  flex items-center justify-center lg:w-[240px] h-20 lg:h-[195px] relative border-gradient-b ">
                    {" "}
                    <img
                      className="max-w-[100px] lg:max-w-[150px]  "
                      src={figjam}
                      alt="figjam"
                    />
                  </div>
                  <div className="col-span-6 lg:col-span-4 hidden lg:flex items-center justify-center  lg:w-[240px] h-20 lg:h-[195px] relative border-gradient-b bg-gradient-fill-lr"></div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="lg:col-span-4 col-span-6 flex items-center justify-center lg:w-[240px] h-20 lg:h-[195px]">
                    {" "}
                    <img
                      className="max-w-[100px] lg:max-w-[150px]  "
                      src={stark}
                      alt="stark"
                    />
                  </div>
                  <div className="col-span-4 hidden lg:flex items-center justify-center  lg:w-[240px] h-20 lg:h-[195px] "></div>
                  <div className="lg:col-span-4 col-span-6 flex items-center justify-center  lg:w-[240px] h-20 lg:h-[195px]  ">
                    {" "}
                    <img
                      className="max-w-[100px] lg:max-w-[150px]  "
                      src={uxpilot}
                      alt="uxpilot"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DrivenDesign;
