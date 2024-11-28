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
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import banner from "../assets/banner.jpg";
import girl from "../assets/girl.svg";
import girlfill from "../assets/girlfill.svg";
import Container from "../components/Container";
import boy from "../assets/boy.svg";
import boyfill from "../assets/boyfill.svg";
import girl2 from "../assets/girl2.svg";
import girl2fill from "../assets/girl2fill.svg";
import teacher from "../assets/teacher.svg";
import teacherfill from "../assets/teacherfill.svg";
import { useEffect, useState } from "react";
import { VelocityScroll } from "../components/Velocity";
const Home = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showQuestion, setShowQuestion] = useState(true);
  const [showAnswerOne, setShowAnswerOne] = useState(false);
  const [showAnswerTwo, setShowAnswerTwo] = useState(false);
  const [showAnswerThree, setShowAnswerThree] = useState(false);

  useEffect(() => {
    const runSequence = () => {
      setShowQuestion(true);

      const timers: number[] = [];

      timers.push(setTimeout(() => setShowAnswerOne(true), 3000));
      timers.push(setTimeout(() => setShowAnswerOne(false), 6000));
      timers.push(setTimeout(() => setShowAnswerTwo(true), 6000));
      timers.push(setTimeout(() => setShowAnswerTwo(false), 9000));
      timers.push(setTimeout(() => setShowAnswerThree(true), 9000));
      timers.push(setTimeout(() => setShowAnswerThree(false), 12000));
      timers.push(setTimeout(() => setShowQuestion(false), 12000));

      setTimeout(() => {
        timers.forEach((timer) => clearTimeout(timer));
        setShowAnswerOne(false);
        setShowAnswerTwo(false);
        setShowAnswerThree(false);
      }, 12000);

      return timers;
    };

    runSequence();

    const intervalId = setInterval(runSequence, 14000);

    return () => clearInterval(intervalId);
  }, []);

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

  return (
    <main>
      <div
        className={`fixed top-0 left-0 w-full z-[120] transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
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

      <div className="relative z-[100] questionsection">
        <section>
          <Container>
            <div className="flex justify-between items-end max-w-6xl mx-auto">
              <div className="flex gap-3">
                {/* Answer One */}
                 {/* Answer Three */}
                 <div className="relative ">
                  <img
                    src={boy}
                    alt="boy"
                    className={`block transition-opacity duration-500 ease-in-out ${
                      showAnswerTwo ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <img
                    src={boyfill}
                    alt="boy fill"
                    className={`absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${
                      showAnswerTwo ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <AnimatePresence>
                    {showAnswerTwo && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="w-80 answerTwo absolute -top-20 right-24 rounded-xl rounded-br-none font-semibold text-lg bg-primary-dark4 flex items-center justify-center px-4 py-2 text-white"
                      >
                        Limit the number of lines displayed and reveal more on
                        hover.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="relative group">
                  <img
                    src={girl}
                    alt="girl"
                    className={`block transition-opacity duration-500 ease-in-out ${
                      showAnswerOne ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <img
                    src={girlfill}
                    alt="girl fill"
                    className={`absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${
                      showAnswerOne ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <AnimatePresence>
                    {showAnswerOne && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="w-80 answerOne absolute -top-20 right-28 rounded-xl rounded-br-none font-semibold text-lg bg-primary-dark4 flex items-center justify-center px-4 py-2 text-white"
                      >
                        Show an ellipsis with a “Read more” button to expand.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Answer Two */}
                <div className="relative group">
                  <img
                    src={girl2}
                    alt="girl"
                    className={`block transition-opacity duration-500 ease-in-out ${
                      showAnswerThree ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <img
                    src={girl2fill}
                    alt="girl fill"
                    className={`absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${
                      showAnswerThree ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <AnimatePresence>
                    {showAnswerThree && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="w-80 answerThree absolute -top-20 right-24 rounded-xl rounded-br-none font-semibold text-lg bg-primary-dark4 flex items-center justify-center px-4 py-2 text-white"
                      >
                        Use a fade effect at the end of the text, with no
                        explicit button.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

               
              </div>

              <div className="relative ">
                <img
                  src={teacher}
                  alt="teacher"
                  className={`block transition-opacity duration-500 ease-in-out ${
                    showQuestion ? "opacity-0" : "opacity-100"
                  }`}
                />
                <img
                  src={teacherfill}
                  alt="teacher fill"
                  className={`absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${
                    showQuestion ? "opacity-100" : "opacity-0"
                  }`}
                />
                <AnimatePresence>
                  {showQuestion && (
                    <motion.div
                      className="w-80 question absolute -top-16 -right-40 rounded-xl rounded-bl-none font-semibold text-lg bg-primary-dark4 flex items-center justify-center px-4 py-2 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                    >
                      How should long text content be truncated in a list item?
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Container>
        </section>
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
        <Review />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
