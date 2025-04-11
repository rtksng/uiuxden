import Container from "../Container";
import wave1 from "../../assets/wave1.svg";
import figjam from "../../assets/figjam.png";
import bravo from "../../assets/bravo.png";
import uxpilot from "../../assets/uxpilot.svg";
import locofy from "../../assets/locofy.svg";
import stark from "../../assets/stark.svg";
const DrivenDesign = () => {
  return (
    <section className="2xl:mt-[100px] xl:mt-5 overflow-hidden mt-10 max-w-full text-primary-dark2">
      <Container>
        <div className="grid grid-cols-12 relative gap-3">
          <div className="lg:col-span-6 xl:col-span-5  col-span-12 self-center">
            <h3 className="2xl:text-[40px] xl:text-xl text-lg font-semibold text-center lg:text-start">
              AI-Powered Design
            </h3>
            <h2 className="2xl:text-[60px] md:mt-0 lg:mt-3 xl:text-[40px] text-4xl text-center lg:text-start mb-3 xl:mb-0 font-semibold lg:leading-[1.2]">
              Accelerators{" "}
            </h2>
            <p className="2xl:text-[22px] text-center lg:text-start xl:text-lg text-primary-dark2 2xl:mt-8 xl:mt-4 lg:leading-[1.2] xl:w-[65%]">
              Our design team uses the power of cutting-edge AI tools to deliver
              smarter, faster, and frictionless UX solutions. AI tools enhance
              our creative process, ensuring every design is optimized for
              usability and user satisfaction.
            </p>
          </div>
          <div className="absolute left-[32%] xl:left-[25%] scale-[.7] 2xl:scale-[.9] top-[10px] z-10 2xl:top-[13%] hidden xl:block">
            <img src={wave1} alt="wave" />
          </div>
          <div className="lg:col-span-6 xl:col-span-7 col-span-12">
            <div className="lg:flex justify-center xl:justify-end">
              <div>
                <div className="grid grid-cols-12 border-gradient-b">
                  <div className="col-span-6 lg:col-span-4 flex items-center justify-center  lg:w-[240px] h-20 lg:h-[90px] xl:h-[120px] 2xl:h-[195px] relative ">
                    <img
                      className="max-w-[100px] xl:max-w[100px] 2xl:max-w-[150px]  "
                      src={bravo}
                      alt="bravo"
                    />
                  </div>
                  <div className="col-span-6 lg:col-span-4 bg-gradient-fill hidden lg:flex items-center justify-center  lg:w-[240px] h-20 lg:h-[90px] xl:h-[120px] 2xl:h-[195px]  relative "></div>
                  <div className="col-span-6 lg:col-span-4 flex items-center justify-center  lg:w-[240px] h-20 lg:h-[90px] xl:h-[120px] 2xl:h-[195px] relative   ">
                    {" "}
                    <img
                      className="max-w-[100px] xl:max-w[100px] 2xl:max-w-[150px]  "
                      src={locofy}
                      alt="locofy"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 border-gradient-b">
                  <div className="col-span-6 lg:col-span-4 hidden lg:flex items-center justify-center  lg:w-[240px] h-20 lg:h-[90px] xl:h-[120px] 2xl:h-[195px] relative border-gradient-b "></div>
                  <div className="col-span-12 lg:col-span-4  flex items-center justify-center lg:w-[240px] h-20 lg:h-[90px] xl:h-[120px] 2xl:h-[195px] relative border-gradient-b ">
                    {" "}
                    <img
                      className="max-w-[100px] xl:max-w[100px] 2xl:max-w-[150px]  "
                      src={figjam}
                      alt="figjam"
                    />
                  </div>
                  <div className="col-span-6 lg:col-span-4 hidden lg:flex items-center justify-center  lg:w-[240px] h-20 lg:h-[90px] xl:h-[120px] 2xl:h-[195px] relative border-gradient-b bg-gradient-fill-lr"></div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="lg:col-span-4 col-span-6 flex items-center justify-center lg:w-[240px] h-20 lg:h-[90px] xl:h-[120px] 2xl:h-[195px]">
                    {" "}
                    <img
                      className="max-w-[100px] xl:max-w[100px] 2xl:max-w-[150px]  "
                      src={stark}
                      alt="stark"
                    />
                  </div>
                  <div className="col-span-4 hidden lg:flex items-center justify-center  lg:w-[240px] h-20 lg:h-[90px] xl:h-[120px] 2xl:h-[195px] "></div>
                  <div className="lg:col-span-4 col-span-6 flex items-center justify-center  lg:w-[240px] h-20 lg:h-[90px] xl:h-[120px] 2xl:h-[195px]  ">
                    {" "}
                    <img
                      className="max-w-[100px] xl:max-w[100px] 2xl:max-w-[150px]  "
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
