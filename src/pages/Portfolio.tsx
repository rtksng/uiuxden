import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import herobg from "../assets/portfoliobg.png";
import rysonate from "../assets/rysonate.png";
import logop from "../assets/logop.png";
import kp from "../assets/kp.png";
import web1 from "../assets/web1.jpg";
import web2 from "../assets/web2.png";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.png";
import web5 from "../assets/web5.png";
import web6 from "../assets/web6.png";
import web7 from "../assets/web8.png";
import web8 from "../assets/web9.png";
import mob1 from "../assets/mob1.png";
import mob2 from "../assets/mob2.png";
import mob3 from "../assets/mob3.png";
import mob4 from "../assets/mob4.png";
import mob5 from "../assets/mob5.png";
import mob6 from "../assets/mob6.png";
import mob7 from "../assets/mob7.png";
import mob8 from "../assets/mob8.png";
import type { FC } from "react";

type Tab = {
  id: string;
  label: string;
};

type Project = {
  img: string;
  title: string;
  downloads: string;
};

const tabs: Tab[] = [
  { id: "ux", label: "UX Design" },
  { id: "web", label: "Web UI" },
  { id: "mobile", label: "Mobile UI" },
  { id: "graphics", label: "Graphics" },
  { id: "video", label: "Video & Motion Graphics" },
];

const Portfolio: FC = () => {
  const [activeTab, setActiveTab] = useState<string>("web");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const renderContent = (activeTab: string) => {
    if (activeTab === "web") {
      const projects: Project[] = [
        { img: rysonate, title: "Rysonate", downloads: "50K" },
        { img: kp, title: "Knowledger", downloads: "510K" },
        { img: web1, title: "Aymakan", downloads: "50K" },
        { img: web2, title: "Leads AI", downloads: "520K" },
        { img: web3, title: "E-Commerce", downloads: "550K" },
        { img: web4, title: "The Point Resort", downloads: "507K" },
        { img: web5, title: "SN Group", downloads: "520K" },
        { img: web6, title: "Fan Bucs", downloads: "530K" },
        { img: web7, title: "Ateliers London", downloads: "550K" },
        { img: web8, title: "Cerebrum", downloads: "5033K" },
      ];
      return (
        <div className="grid grid-cols-12 gap-12">
          {projects.map(({ img, title, downloads }, idx) => (
            <div
              key={idx}
              className="col-span-4 openModal"
              onClick={() => openModal({ img, title, downloads })}
            >
              <img src={img} alt={title} className="w-full rounded-xl" />
              <div className="mt-8 flex items-center gap-6">
                <div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center">
                  <img src={logop} alt="logo" />
                </div>
                <div>
                  <h6 className="text-[30px] font-semibold">{title}</h6>
                  <small className="text-lg text-gray-800">
                    {downloads} Download IOS
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
    if (activeTab === "mobile") {
      const projects: Project[] = [
        { img: rysonate, title: "Rysonate", downloads: "50K" },
        { img: mob1, title: "Elements", downloads: "510K" },
        { img: mob2, title: "Bylocl", downloads: "50K" },
        { img: mob3, title: "Beauty Home Service", downloads: "520K" },
        { img: mob4, title: "Cere Rides", downloads: "550K" },
        { img: mob5, title: "Metaland", downloads: "507K" },
        { img: mob6, title: "Venevibe", downloads: "520K" },
        { img: mob7, title: "Traveljinni", downloads: "530K" },
        { img: mob8, title: "Doe", downloads: "550K" },
      ];
      return (
        <div className="grid grid-cols-12 gap-12">
          {projects.map(({ img, title, downloads }, idx) => (
            <div
              key={idx}
              className="col-span-4 openModal"
              onClick={() => openModal({ img, title, downloads })}
            >
              <img src={img} alt={title} className="w-full rounded-xl" />
              <div className="mt-8 flex items-center gap-6">
                <div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center">
                  <img src={logop} alt="logo" />
                </div>
                <div>
                  <h6 className="text-[30px] font-semibold">{title}</h6>
                  <small className="text-lg text-gray-800">
                    {downloads} Download IOS
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <main>
      <Navbar />
      <section className="h-screen gradientHeroBg relative">
        <h1 className="text-center text-[90px] max-w-[1180px] mx-auto font-semibold leading-[128.5%] py-24">
          Your business deserves a unique approach
        </h1>
        <div className="absolute inset-x-0 bottom-0 flex justify-center items-center">
          <img src={herobg} alt="background" />
        </div>
      </section>
      <div className="tabs mt-40 tabbg h-24">
        <Container className="h-full">
          <div className="flex justify-between items-center gap-4 h-full">
            {tabs.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`text-[30px] font-semibold ${
                  activeTab === id ? "text-secondary-light2" : "text-gray-400"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </Container>
      </div>
      <Container>
        <div className="mt-10">{renderContent(activeTab)}</div>
      </Container>
      {selectedProject && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-xl shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={closeModal}
            >
              Close
            </button>
            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              className="w-full rounded-xl"
            />
            <h2 className="text-2xl font-semibold mt-4">
              {selectedProject.title}
            </h2>
            <p className="text-lg text-gray-700">
              {selectedProject.downloads} Downloads
            </p>
          </div>
        </div>
      )}
      <Footer />
    </main>
  );
};

export default Portfolio;
