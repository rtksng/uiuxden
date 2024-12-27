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
    <section className="casestudy xl:mt-[192px] sm:mt-15 mt-10 bg-neutral-900 xl:bg-transparent px-3">
      <div className="xl:pt-[160px] xl:pb-[78px] py-10 sm:py-20">
        <h2 className="xl:text-[60px] text-[24px] sm:text-[48px] text-white text-center font-semibold">
          We love to make{" "}
          <span className="animationStroke">
            <SVGAnimation height={120} width={222} /> things{" "}
          </span>{" "}
          easy
        </h2>
        <div className="grid grid-cols-12 xl:mt-[140px] mt-10 gap-5 sm:gap-[46px] xl:px-[100px] 2xl:px-[240px]">
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
                  <img src={study.imgSrc} alt={study.altText} width={250} />
                  <p className="text-white text-center text-[22px] mt-[100px]">
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
