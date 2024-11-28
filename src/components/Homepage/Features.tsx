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
  <div className="col-span-4">
    <Link to={link}>
      <div className="p-7 mask-card">
        <div className="flex justify-between items-start w-calc-minus-80">
          <div>
            <h4 className="text-[22px] leading-none mb-2 font-semibold text-primary-dark2">
              {title}
            </h4>
            <h6 className="text-primary-dark2 text-base max-w-[215px]">
              {description}
            </h6>
          </div>
          <img src={tiltarrow} alt="arrow"/>
        </div>
        <img src={imgSrc} alt={title} className="mt-5 rounded-[20px] w-full" />
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
      link: "/usability-testing",
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
      <section className="mt-[250px]">
        <h2 className="text-[60px] font-semibold max-w-6xl mx-auto text-center">
          User Experiences that Inspire Customers to Stay Connected with Your
          Brand
        </h2>
        <div className="grid grid-cols-12 mt-[140px] gap-[50px]">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Features;
