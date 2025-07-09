import girl from "../../assets/girl.svg";
import girlfill from "../../assets/girlfill.svg";
import boy from "../../assets/boy.svg";
import boyfill from "../../assets/boyfill.svg";
import girl2 from "../../assets/girl2.svg";
import girl2fill from "../../assets/girl2fill.svg";
import teacher from "../../assets/teacher.svg";
import teacherfill from "../../assets/teacherfill.svg";
import { useEffect, useState } from "react";
import Container from "../Container";
import { AnimatePresence, motion } from "framer-motion";
const UserAnimation = () => {
  const [showQuestion, setShowQuestion] = useState(true);
  const [showAnswerOne, setShowAnswerOne] = useState(false);
  const [showAnswerTwo, setShowAnswerTwo] = useState(false);
  const [showAnswerThree, setShowAnswerThree] = useState(false);

  useEffect(() => {
    const runSequence = () => {
      setShowQuestion(true);

      const timers: number[] = [];

      timers.push(setTimeout(() => setShowAnswerOne(true), 400));
      timers.push(setTimeout(() => setShowAnswerOne(false), 1600));
      timers.push(setTimeout(() => setShowAnswerTwo(true), 1600));
      timers.push(setTimeout(() => setShowAnswerTwo(false), 2500));
      timers.push(setTimeout(() => setShowAnswerThree(true), 2500));
      timers.push(setTimeout(() => setShowAnswerThree(false), 3500));
      timers.push(setTimeout(() => setShowQuestion(false), 3500));

      setTimeout(() => {
        timers.forEach((timer) => clearTimeout(timer));
        setShowAnswerOne(false);
        setShowAnswerTwo(false);
        setShowAnswerThree(false);
      }, 3500);

      return timers;
    };

    runSequence();

    const intervalId = setInterval(runSequence, 3500);

    return () => clearInterval(intervalId);
  }, []);



  return (
    <section className="homepagehero-animation">
      <Container>
        <div className="flex justify-between items-end max-w-4xl 2xl:max-w-6xl mx-auto">
          <div className="flex gap-3">
            <div className="relative">
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
                    className="w-80 answers answerTwo absolute -top-20 -right-20 2xl:right-24 rounded-xl 2xl:rounded-br-none font-semibold text-lg bg-primary-dark4 flex items-center justify-center px-4 py-2 text-white"
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
                    className="w-80 answers answerOne absolute -top-20 -right-20 2xl:right-28 rounded-xl 2xl:rounded-br-none font-semibold text-lg bg-primary-dark4 flex items-center justify-center px-4 py-2 text-white"
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
                    className="w-80 answers answerThree absolute -top-20 -right-20 2xl:-right-50 rounded-xl 2xl:rounded-bl-none font-semibold text-lg bg-primary-dark4 flex items-center justify-center px-4 py-2 text-white"
                  >
                    Use a fade effect at the end of the text, with no explicit
                    button.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="relative teacherbox">
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
                  className="w-80 question absolute -top-16 -right-40 rounded-xl rounded-bl-none font-semibold text-lg bg-black/80 flex items-center justify-center px-4 py-2 text-white"
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
  );
};

export default UserAnimation;
