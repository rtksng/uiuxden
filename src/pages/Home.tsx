import Navbar from "../components/Navbar";
import DrivenDesign from "../components/Homepage/DrivenDesign";
import Features from "../components/Homepage/Features";
import Rating from "../components/Homepage/Rating";
import Process from "../components/Homepage/Process";
import CaseStudy from "../components/Homepage/CaseStudy";
import Review from "../components/Homepage/Review";
import Footer from "../components/Footer";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import banner from "../assets/banner.jpg";
import CaseStudyCarousel from "../components/Homepage/CaseStudyCarousel";
import { useEffect, useState } from "react";
import { VelocityScroll } from "../components/Velocity";
import UserAnimation from "../components/Homepage/UserAnimation";
const Home = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [addTransitionClass, setAddTransitionClass] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const imageOpacity = useTransform(scrollY, [0, 700], [1, 0]);
  const imageScale = useTransform(scrollY, [0, 700], [1, 3]);

  const paragraphScale = useTransform(scrollY, [0, 200], [0.8, 1]);
  const paragraphOpacity = useTransform(scrollY, [0, 200], [0, 1]);

  const textTranslateY = useTransform(scrollY, [0, 700], [25, -200]);
  const textScale = useTransform(scrollY, [0, 700], [1, 1.5]);
  const textOpacity = useTransform(scrollY, [0, 900, 950], [1, 1, 0]);
  useMotionValueEvent(textOpacity, "change", (latest) => {
    if (latest === 0) {
      setAddTransitionClass(true);
    } else if (latest === 1) {
      setAddTransitionClass(false);
    }
  });
  return (
    <main>
      <div
        className={`fixed top-0 left-0 w-full z-[120] transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"
          }`}
      >
        <Navbar />
      </div>

      <div className="relative h-[150vh]">
        <motion.div
          className={`fixed inset-0 flex items-center justify-center z-40 ${addTransitionClass ? "transition-all" : ""
            }`}
          style={{
            translateY: textTranslateY,
            scale: textScale,
            opacity: textOpacity,
          }}
        >
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-center leading-relaxed">
              Humanize <br />
              <span className="font-normal">Your Product</span>
            </h1>
            <motion.p
              className="text-2xl font-medium mt-5"
              style={{
                scale: paragraphScale,
                opacity: paragraphOpacity,
              }}
            >
              with our in-depth{" "}
              <span className="text-secondary-light2 underline underline-offset-8">
                research oriented
              </span>{" "}
              design program
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="fixed inset-0 w-full h-screen overflow-hidden z-0"
          style={{ opacity: imageOpacity, scale: imageScale }}
        >
          <img
            src={banner}
            alt="Sample"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="relative z-[100] questionsection">
        <UserAnimation />
        <section className="bg-gradient-fill2 py-4">
          <VelocityScroll
            point1="UI Design"
            point2="UX Reserach"
            point3="UX Stretegy"
            point4="UX Audit"
            point5="Content Stretegy"
            default_velocity={2}
            className="font-display text-center flex gap-[126px] !text-2xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
          />
        </section>
        <DrivenDesign />
        <Features />
        <Rating />
        <Process />
        <CaseStudy />
        <div className="my-[150px]">
          <CaseStudyCarousel />
        </div>
        <Review />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
