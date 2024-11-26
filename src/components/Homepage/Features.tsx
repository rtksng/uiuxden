import React from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import tiltarrow from "../../assets/tiltarrow.svg";
import uxstrategy from "../../assets/uxstrategy.png";
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
            <h6 className="text-primary-dark2 text-base max-w-[181px]">
              {description}
            </h6>
          </div>
          <img src={tiltarrow} alt="arrow" />
        </div>
        <img src={imgSrc} alt={title} className="mt-5 rounded-[20px]" />
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
      title: "Design Thinking",
      description: "Innovative Solutions through Creative Thinking",
      imgSrc: uxstrategy,
      link: "/design-thinking",
    },
    {
      title: "User Research",
      description: "Understanding User Needs for Better Design",
      imgSrc: uxstrategy,
      link: "/user-research",
    },
    {
      title: "Prototyping",
      description: "Bringing Ideas to Life with Interactive Models",
      imgSrc: uxstrategy,
      link: "/prototyping",
    },
    {
      title: "Usability Testing",
      description: "Ensuring Seamless User Experiences",
      imgSrc: uxstrategy,
      link: "/usability-testing",
    },
    {
      title: "Information Architecture",
      description: "Structuring Information for Accessibility",
      imgSrc: uxstrategy,
      link: "/information-architecture",
    },
    {
      title: "Interaction Design",
      description: "Designing Engaging and Intuitive Interfaces",
      imgSrc: uxstrategy,
      link: "/interaction-design",
    },
    {
      title: "Content Strategy",
      description: "Creating Content that Resonates",
      imgSrc: uxstrategy,
      link: "/content-strategy",
    },
    {
      title: "Visual Design",
      description: "Crafting Aesthetic and Functional Visuals",
      imgSrc: uxstrategy,
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
