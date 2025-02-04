import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Process from "../components/Homepage/Process";
import CaseStudyCarousel from "../components/Homepage/CaseStudyCarousel";
import Rating from "../components/Homepage/Rating";
import Container from "../components/Container";
import futureimg from "../assets/future.png";
import aboutimg1 from "../assets/aboutimg1.png";
import { Link } from "react-router-dom";
import SVGAnimation from "../components/StrokeAnimation";
import Tabs from "../components/Tabs";
const About = () => {

  const tabData = [
    {
      id: 1,
      label: "Our Future Focus",
      sublabel: "(Vision)",
      content: `1 To be the world's leading and most trusted <span class="font-semibold"> human experience design </span> company, delivering innovative and impactful solutions.`
    },
    {
      id: 2,
      label: "Driven by Purpose",
      sublabel: "(Mission)",
      content: `2 To be the world's leading and most trusted <span class="font-semibold"> human experience design </span> company, delivering innovative and impactful solutions.`
    },
    {
      id: 3,
      label: "What We Stand For",
      sublabel: "(Values)",
      content: `3 To be the world's leading and most trusted <span class="font-semibold"> human experience design </span> company, delivering innovative and impactful solutions.`
    },
  ];
  return (
    <main className="aboutPage">
      <Navbar />
      <section className="flex justify-center items-center h-screen pt-[100px]">
        <Container>
          <div className="grid grid-cols-12">
            <div className="md:col-span-8 col-span-12 2xl:block flex items-center">
              <h1 className="font-semibold text-[24px] sm:text-[38px] lg:text-[48px] xl:text-[70px] 2xl:text-[90px]">
                Creating Exceptional Products, Shaping a Better Future
              </h1>
            </div>
            <div className="md:col-span-4 col-span-12 self-center mt-8">
              <img src={futureimg} alt="image" className="mx-auto" />
            </div>  
          </div>
        </Container>
      </section>
      <Container>
        <div className="md:gap-16 grid grid-cols-12">
          <div className="md:col-span-7 col-span-12 self-center">
            <h3 className="font-semibold text-[24px] sm:text-[32px] lg:text-[40px]">
              Driving creativity and innovation to shape a better future for
              ourselves, our partners, and communities around the world.
            </h3>
            <div className="md:gap-20 grid grid-cols-1 md:grid-cols-2 mt-5 sm:mt-10">
              <p className="font-medium text-base sm:text-lg mb-5 md:mb-0">
                Are you among the millions seeking design inspiration? We help
                businesses showcase their brand with the best-themed designs,
                enhancing portfolio sections to drive engagement—regardless of
                your profession. As an innovative brand, we combine simplicity
                with sophistication to create impactful visual experiences
                tailored to your needs.
              </p>
              <p className="font-medium text-base sm:text-lg">
                At UI/UX Den, we craft engaging design patterns led by top
                design professionals. We focus on creating visually compelling
                designs that enhance your business’s online presence. Our
                dedicated team works 24/7 to bring your ideas to life. With
                years of experience, we design memorable online experiences that
                attract and retain customers.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-4 md:mt-0 md:justify-end md:col-span-5 col-span-12 self-center">
            <Link to="">
              <img src={aboutimg1} alt="image" />
            </Link>
          </div>
        </div>
      </Container>
      <div className="mx-auto mt-[100px] md:mt-[200px] max-w-[1792px] h-auto lg:h-[800px] text-white commitment">
        <Container>
          <div className="pt-[60px] lg:pt-[90px]">
            <h4 className="font-semibold text-[24px] text-center text-white sm:text-[48px] xl:text-[60px]">
              Our Commitment to <span className="animationStroke"><SVGAnimation nameOfClass="svg-container aboutus" />Excellence</span>
            </h4>
            <Tabs tabs={tabData} autoSwitchInterval={5000} />
          </div>
        </Container>
      </div>
      <Process />
      <Rating />
      <div className="mt-10 md:mt-20 lg:mt-24">
        <h4 className="font-semibold text-[24px] text-center text-black sm:text-[48px] xl:text-[60px] mb-36">
          We love to make <span className="animationStroke"><SVGAnimation nameOfClass="svg-container" />things</span> easy
        </h4>
        <CaseStudyCarousel />
      </div>
      <Footer />
    </main>
  );
};

export default About;
