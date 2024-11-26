import Navbar from "../components/Navbar";
import DrivenDesign from "../components/Homepage/DrivenDesign";
import Features from "../components/Homepage/Features";
import Rating from "../components/Homepage/Rating";
import Process from "../components/Homepage/Process";
const Home = () => {
  return (
    <main>
      <Navbar />
      <DrivenDesign />
      <Features />
      <Rating />
      <Process />
    </main>
  );
};

export default Home;
