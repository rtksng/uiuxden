import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import herobg from "../assets/portfoliobg.png";
import Container from "../components/Container";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const tabs = [
    { id: "projects", label: "UX Design" },
    { id: "about", label: "Web UI" },
    { id: "services", label: "Mobile UI" },
    { id: "team", label: "Graphics" },
    { id: "contact", label: "Video & Motion Graphics" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "projects":
        return <div>Here are some of our best projects.</div>;
      case "about":
        return <div>Learn more about our journey and mission.</div>;
      case "services":
        return (
          <div>Discover the services we offer to help your business grow.</div>
        );
      case "team":
        return <div>Meet our talented and passionate team.</div>;
      case "contact":
        return <div>Get in touch with us for inquiries or collaborations.</div>;
      default:
        return null;
    }
  };

  return (
    <main>
      <section className="h-screen gradientHeroBg relative">
        <Navbar />
        <h1 className="text-center text-[90px] max-w-[1180px] mx-auto font-semibold leading-[128.5%] my-24">
          Your business deserves a unique approach
        </h1>
        <div className="absolute inset-x-0 bottom-0 flex justify-center items-center">
          <img src={herobg} alt="image" />
        </div>
      </section>

      <div>
        <div className="tabs mt-40 tabbg   h-24">
          <Container  className="h-full">
            <div className="flex justify-between items-center gap-4 h-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={` text-[30px] font-semibold ${
                    activeTab === tab.id
                      ? " text-secondary-light2"
                      : " text-gray-400"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </Container>
        </div>
        <Container>
          <div className="mt-10">{renderContent()}</div>
        </Container>
      </div>
      <Footer />
    </main>
  );
};

export default Portfolio;
