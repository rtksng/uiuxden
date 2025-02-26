import { Link } from "react-router-dom";
import knowledger from "../../assets/knowledger.svg";
import paulSchumacher from "../../assets/paulSchumacher.svg";
import SVGAnimation from "../StrokeAnimation";
import Volt from "../../assets/Volt.svg";

const caseStudies = [
  {
    link: "/knowledger-case-study",
    imgSrc: knowledger,
    altText: "Knowledger logo",
    description:
      "Driving a user research to understand user behaviour of teens on Instagram",
  },
  {
    link: "/schumacher",
    imgSrc: paulSchumacher,
    altText: "Paul Schumacher logo",
    description:
      "Driving a user research to understand user behaviour of teens on Instagram",
  },
  {
    link: "/voltjourney",
    imgSrc: Volt,
    altText: "Volt logo",
    description:
      "Driving a user research to understand user behaviour of teens on Instagram",
  },
];

const CaseStudy = () => {
  return (
    <section className="casestudy 2xl:mt-[192px] lg:mt-[0] xl:mt-[50px] sm:mt-15 mt-10 bg-neutral-900 xl:bg-transparent px-3">
      <div className="xl:pt-[100px] 2xl:pt-[160px] lg:pt-[60px] xl:pb-[60px] py-10 lg:py-20">
        <h2 className="2xl:text-[60px] xl:text-[40px] text-[28px] md:text-[36px] text-white text-center font-semibold">
          We love to make{" "}
          <span className="animationStroke casestudy">
            <SVGAnimation height={120} width={222} /> things{" "}
          </span>{" "}
          easy
        </h2>
        <div className="grid grid-cols-12 2xl:mt-[140px] lg:mt-[50px] xl:mt-[70px] mt-10 gap-5 sm:gap-[46px] xl:px-[100px] 2xl:px-[240px]">
          {caseStudies.map((study, index) => (
            <Link
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              to={study.link}
              key={index}
              className="lg:col-span-4 sm:col-span-6 col-span-12"
            >
              <div className="itemcase flex flex-col items-center justify-center">
                <div className="flex flex-col max-w-[330px] justify-center items-center">
                  <img src={study.imgSrc} alt={study.altText} className="w-[180px] 2xl:w-[250px]" />
                  <p className="text-white text-center  2xl:text-[22px] 2xl:mt-[100px] mt-[40px]">
                    {study.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
