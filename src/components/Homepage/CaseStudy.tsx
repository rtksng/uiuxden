import { Link } from "react-router-dom";
import knowledger from "../../assets/knowledger.svg";
import paulSchumacher from "../../assets/paulSchumacher.svg";
import Volt from "../../assets/Volt.svg";

const CaseStudy = () => {
  return (
    <section className="casestudy lg:mt-[192px] sm:mt-15 mt-10 ">
      <div className="pt-[160px] pb-[78px]">
        <h2 className="text-[60px] text-white text-center font-semibold">
          We love to make things easy
        </h2>
        <div className="grid grid-cols-3 mt-[140px] gap-[46px] px-[300px]">
          <Link to="/knowledger-case-study" className="col-span-1">
            <div className="itemcase flex flex-col items-center justify-center">
              <div className="flex flex-col max-w-[330px] justify-center items-center">
                <img src={knowledger} alt="Knowledger logo" width={250} />
                <p className="text-white text-center text-[22px] mt-[100px]">
                  Driving a user research to understand user behaviour of teens
                  on Instagram
                </p>
              </div>
            </div>
          </Link>
          <div className="col-span-1">
            <div className="itemcase flex flex-col items-center justify-center">
              <div className="flex flex-col max-w-[330px] justify-center items-center">
                <img src={paulSchumacher} alt="Knowledger logo" width={250} />
                <p className="text-white text-center text-[22px] mt-[100px]">
                  Driving a user research to understand user behaviour of teens
                  on Instagram
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="itemcase flex flex-col items-center justify-center">
              <div className="flex flex-col max-w-[330px] justify-center items-center">
                <img src={Volt} alt="Knowledger logo" width={250} />
                <p className="text-white text-center text-[22px] mt-[100px]">
                  Driving a user research to understand user behaviour of teens
                  on Instagram
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
