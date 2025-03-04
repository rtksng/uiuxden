import React from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import tiltarrow from "../../assets/tiltarrow.svg";
import uxstrategy from "../../assets/uxstrategy.png";
import Consultancy from "../../assets/Consultancy.png";
import Accessibility from "../../assets/Accessibility.png";
import UXAudit from "../../assets/UXAudit.png";
import Sprints from "../../assets/Sprints.png";
import ProductBranding from "../../assets/ProductBranding.png";
import UIDesign from "../../assets/UIDesign.png";
import SoftwareDevelopment from "../../assets/SoftwareDevelopment.png";
import SVGAnimation from "../StrokeAnimation";
import WebDevelopment from "../../assets/WebDevelopment.png";
interface Feature {
  title: string;
  description: string;
  imgSrc: string;
  link: string;
}

const FeatureCard: React.FC<Feature> = ({
  title,
  description,
  imgSrc,
  link,
}) => (
  <div className="col-span-12 sm:col-span-6 lg:col-span-4 border rounded-3xl md:border-0 md:rounded-none">
    <Link
      to={link}
      target="_blank"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <div className="mask-card min-h-[340px]">
        <div className="md:p-7 p-4 inner-content">
          <div className="flex justify-between items-start md:w-calc-minus-80">
            <div>
              <h4 className="text-[22px] leading-none mb-2 font-semibold text-primary-dark2">
                {title}
              </h4>
              <h6 className="text-primary-dark2 text-base md:max-w-[215px]">
                {description}
              </h6>
            </div>
            <img src={tiltarrow} alt="arrow" />
          </div>
          <img
            src={imgSrc}
            alt={title}
            className="mt-5 rounded-[20px] w-full"
          />
        </div>
      </div>
    </Link>
  </div>
);

const Features = () => {
  const features = [
    {
      title: "UX Strategy",
      description: "Crafting a Vision for User-Centered Success",
      imgSrc: uxstrategy,
      link: "/ux-strategy",
    },
    {
      title: "UX Consultancy",
      description: "Guidance to Elevate Your Product",
      imgSrc: Consultancy,
      link: "/design-thinking",
    },
    {
      title: "Accessibility",
      description: "Weaving Inclusive Designs for Everyone",
      imgSrc: Accessibility,
      link: "/user-research",
    },
    {
      title: "Product UX Audit",
      description: "Evaluating and Enhancing User Journeys",
      imgSrc: UXAudit,
      link: "/prototyping",
    },
    {
      title: "Design Sprints",
      description: "The rapid focused process to Solve Complex Problems.",
      imgSrc: Sprints,
      link: "/design-sprint",
    },
    {
      title: "Product Branding",
      description: "Building Brands that Resonate with Users",
      imgSrc: ProductBranding,
      link: "/information-architecture",
    },
    {
      title: "UI Design",
      description: "WIntuitive Interface for Seamless Experiences",
      imgSrc: UIDesign,
      link: "/interaction-design",
    },
    {
      title: "Software Development",
      description: "Transforming Ideas into Reliable Solutions.",
      imgSrc: SoftwareDevelopment,
      link: "/content-strategy",
    },
    {
      title: "Web Development",
      description: "Creating Engaging and Functional Solutions.",
      imgSrc: WebDevelopment,
      link: "/visual-design",
    },
  ];

  return (
    <Container>
      <section className="2xl:mt-[100px] xl:mt-[60px] mt-10 sm:mt-16 sm:px-3 text-primary-dark2">
        <h2 className="2xl:text-[60px] xl:text-[40px] md:text-4xl text-2xl mb-10 lg:mb-0 font-semibold  2xl:max-w-6xl mx-auto text-center !leading-[128.5%]">
          User Experiences that{" "}
          <span className="animationStroke feature">
            <SVGAnimation height={120} width={222} /> Inspire{" "}
          </span>{" "}  
          Customers to Stay Connected with Your Brand
        </h2>
        <div className="grid grid-cols-12 2xl:mt-[140px] xl:mt-[70px] lg:mt-[50px] sm:gap-[50px] gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Features;
