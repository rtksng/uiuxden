import Container from "../Container";
import wave1 from "../../assets/wave1.svg";
import figjam from "../../assets/figjam.png";
import bravo from "../../assets/bravo.png";
import uxpilot from "../../assets/uxpilot.svg";
import locofy from "../../assets/locofy.svg";
import stark from "../../assets/stark.svg";
const DrivenDesign = () => {
  return (
    <section className="mt-[200px]">
      <Container>
        <div className="grid grid-cols-12 relative">
          <div className="col-span-4 self-center">
            <h3 className="text-[60px] font-semibold">AI-Powered Design</h3>
            <h2 className="text-[84px] font-semibold">Accelerators </h2>
            <p className="text-[28px] text-secondary-dark mt-8">
              Our design team uses the power of cutting-edge AI tools to deliver
              smarter, faster, and frictionless UX solutions. AI tools enhance
              our creative process, ensuring every design is optimized for
              usability and user satisfaction.
            </p>
          </div>
          <div className="absolute left-[32%] top-[10%]">
            <img src={wave1} alt="wave" />
          </div>
          <div className="col-span-8">
            <div className="flex justify-end">
              <div>
                <div className="grid grid-cols-3 border-gradient-b">
                  <div className="col-span-1 flex items-center justify-center  w-[240px] h-[195px] relative ">
                    <img width={150} src={bravo} alt="bravo" />
                  </div>
                  <div className="col-span-1 bg-gradient-fill flex items-center justify-center  w-[240px] h-[195px] relative "></div>
                  <div className="col-span-1 flex items-center justify-center  w-[240px] h-[195px] relative   ">
                    {" "}
                    <img width={150} src={locofy} alt="locofy" />
                  </div>
                </div>
                <div className="grid grid-cols-3 border-gradient-b">
                  <div className="col-span-1 flex items-center justify-center  w-[240px] h-[195px] relative border-gradient-b "></div>
                  <div className="col-span-1  flex items-center justify-center w-[240px] h-[195px] relative border-gradient-b ">
                    {" "}
                    <img width={150} src={figjam} alt="figjam" />
                  </div>
                  <div className="col-span-1 flex items-center justify-center  w-[240px] h-[195px] relative border-gradient-b bg-gradient-fill-lr"></div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="col-span-1 flex items-center justify-center  w-[240px] h-[195px]">
                    {" "}
                    <img width={150} src={stark} alt="stark" />
                  </div>
                  <div className="col-span-1 flex items-center justify-center  w-[240px] h-[195px] "></div>
                  <div className="col-span-1 flex items-center justify-center  w-[240px] h-[195px]  ">
                    {" "}
                    <img width={150} src={uxpilot} alt="uxpilot" />
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
