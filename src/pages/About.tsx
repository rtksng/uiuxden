import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Process from "../components/Homepage/Process";
import CaseStudyCarousel from "../components/Homepage/CaseStudyCarousel";
import Rating from "../components/Homepage/Rating";
import Container from "../components/Container";
import futureimg from "../assets/future.png";
import aboutimg1 from "../assets/aboutimg1.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <main>
      <Navbar />
      <Container>
        <section className="h-screen flex items-center justify-center">
          <div className="grid grid-cols-12">
            <div className="col-span-8">
              <h1 className="text-[24px] sm:text-[38px] lg:text-[48px] 2xl:text-[90px] font-semibold">
                Creating Exceptional Products, Shaping a Better Future
              </h1>
            </div>
            <div className="col-span-4 self-center">
              <img src={futureimg} alt="image" />
            </div>
          </div>
        </section>
      </Container>
      <Container>
        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-7 self-center">
            <h3 className="text-[24px] sm:text-[32px] lg:text-[40px] font-semibold">
              Driving creativity and innovation to shape a better future for
              ourselves, our partners, and communities around the world.
            </h3>
            <div className="grid grid-cols-2 mt-5 sm:mt-10 md:gap-20">
              <p className="text-base sm:text-lg font-medium">
                Are you among the millions seeking design inspiration? We help
                businesses showcase their brand with the best-themed designs,
                enhancing portfolio sections to drive engagement—regardless of
                your profession. As an innovative brand, we combine simplicity
                with sophistication to create impactful visual experiences
                tailored to your needs.
              </p>
              <p className="text-base sm:text-lg font-medium">
                At UI/UX Den, we craft engaging design patterns led by top
                design professionals. We focus on creating visually compelling
                designs that enhance your business’s online presence. Our
                dedicated team works 24/7 to bring your ideas to life. With
                years of experience, we design memorable online experiences that
                attract and retain customers.
              </p>
            </div>
          </div>
          <div className="col-span-5 self-center flex justify-end">
            <Link to="">
              <img src={aboutimg1} alt="image" />
            </Link>
          </div>
        </div>
      </Container>
        <div>
          <Container>

          </Container>
        </div>
      <Process />
      <Rating />
      <div className="lg:mt-24 mt-10 md:mt-20">
        <CaseStudyCarousel />
      </div>
      <Footer />
    </main>
  );
};

export default About;
