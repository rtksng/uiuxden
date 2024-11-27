import Navbar from "../components/Navbar";
import DrivenDesign from "../components/Homepage/DrivenDesign";
import Features from "../components/Homepage/Features";
import Rating from "../components/Homepage/Rating";
import Process from "../components/Homepage/Process";
import CaseStudy from "../components/Homepage/CaseStudy";
import Review from "../components/Homepage/Review";
import { motion, useScroll, useTransform } from "framer-motion";
import banner from "../assets/banner.jpg";
import girl from "../assets/girl.svg";
import girlfill from "../assets/girlfill.svg";
import Container from "../components/Container";
const Home = () => {
  const { scrollY } = useScroll();

  const imageOpacity = useTransform(scrollY, [0, 700], [1, 0]);
  const imageScale = useTransform(scrollY, [0, 700], [1, 3]);

  const paragraphScale = useTransform(scrollY, [0, 200], [0.8, 1]);
  const paragraphOpacity = useTransform(scrollY, [0, 200], [0, 1]);

  const textTranslateY = useTransform(scrollY, [0, 700], [25, -200]);
  const textScale = useTransform(scrollY, [0, 700], [1, 1.5]);
  const textOpacity = useTransform(scrollY, [0, 1000, 1050], [1, 1, 0]);

  return (
    <main>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="relative h-[150vh]">
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-40"
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

      <div>
        <section>
          <Container>
            <img src={girl} alt="girl" />
          </Container>
        </section>
        <DrivenDesign />
        <Features />
        <Rating />
        <Process />
        <CaseStudy />
        <Review />
      </div>
    </main>
  );
};

export default Home;
