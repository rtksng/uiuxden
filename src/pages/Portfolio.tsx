import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import herobg from "../assets/portfoliobg.png";
import rysonate from "../assets/rysonate.png";

import rysonateSlider from "../assets/portfolio/Rysonate-sidebar-full.jpg";
import webEightSlider from "../assets/portfolio/web-eight-slider.jpg";
import webFourSlider from "../assets/portfolio/web-four-slider.jpg";
import webOneSlider from "../assets/portfolio/web-one-slider.jpg";
import mobFiveSlider from "../assets/portfolio/mob-five-slider.jpg";
import webSevenSlider from "../assets/portfolio/web-seven-slider.jpg";
import kpSlider from "../assets/portfolio/kp-slider.jpg";
import webFiveSlider from "../assets/portfolio/web-five-slider.jpg";
import websixSlider from "../assets/portfolio/web-six-slider.jpg";
import webthreeSlider from "../assets/portfolio/web-three-slider.jpg";
import webtwoSlider from "../assets/portfolio/web-two-slider.jpg";
import mobsevenSlider from "../assets/portfolio/mob-seven-slider.jpg";
import mobthreeSlider from "../assets/portfolio/mob-three-slider.jpg";
import moboneSlider from "../assets/portfolio/mob-one-slider.jpg";
import mobtwoSlider from "../assets/portfolio/mob-two-slider.jpg";
import mobfourSlider from "../assets/portfolio/mob-four-slider.jpg";
import mobsixSlider from "../assets/portfolio/mob-six-slider.jpg";


import bannerLeftImg from "../assets/portfolio/banner-leftside.png";
import bannerMidImg from "../assets/portfolio/banner-midmob.png";
import bannerRightImg from "../assets/portfolio/banner-rightside.png";


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
import rightLongArrow from "../assets/right-long-arrow.svg";
import type { FC } from "react";

type Tab = {
  id: string;
  label: string;
};

type Project = {
  img: string;
  title: string;
  downloads: string;
  sliderimg: string;
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
  const [modalActive, setModalActive] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalActive(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalActive(false);
    setTimeout(() => setSelectedProject(null), 300);
    document.body.style.overflow = "auto";
  };

  const renderContent = (activeTab: string) => {
    if (activeTab === "web") {
      const projects: Project[] = [
        { img: rysonate, title: "Rysonate", downloads: "50K", sliderimg: rysonateSlider },
        { img: kp, title: "Knowledger", downloads: "510K", sliderimg: kpSlider },
        { img: web1, title: "Aymakan", downloads: "50K", sliderimg: webOneSlider },
        { img: web2, title: "Leads AI", downloads: "520K", sliderimg: webtwoSlider },
        { img: web3, title: "E-Commerce", downloads: "550K", sliderimg: webthreeSlider },
        { img: web4, title: "The Point Resort", downloads: "507K", sliderimg: webFourSlider },
        { img: web5, title: "SN Group", downloads: "520K", sliderimg: webFiveSlider },
        { img: web6, title: "Fan Bucs", downloads: "530K", sliderimg: websixSlider },
        { img: web7, title: "Ateliers London", downloads: "550K", sliderimg: webSevenSlider },
        { img: web8, title: "Cerebrum", downloads: "5033K", sliderimg: webEightSlider },
      ];
      return (
        <div className="grid grid-cols-12 gap-6 sm:gap-12 space-y-8 sm:space-y-0">
          {projects.map(({ img, title, downloads, sliderimg }, idx) => (
            <div
              key={idx}
              className="lg:col-span-4 col-span-12 sm:col-span-6 openModal custom-openModal"
              onClick={() => openModal({ img, title, downloads, sliderimg })}
            >
              <div className="overflow-hidden rounded-[12px]">
                <img src={img} alt={title} className="sm:w-full rounded-xl thumbnail-img" />
              </div>
              <div className="md:mt-8 mt-3 flex items-center flex-wrap gap-4 md:gap-6">
                <div className="w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] 2xl:w-20 2xl:h-20 rounded-full border border-gray-300 flex items-center justify-center">
                  <img src={logop} alt="logo" />
                </div>
                <div>
                  <h6 className="text-[24px] 2xl:text-[30px] font-semibold">
                    {title}
                  </h6>
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
        { img: rysonate, title: "Rysonate", downloads: "50K", sliderimg: rysonateSlider },
        { img: mob1, title: "Elements", downloads: "510K", sliderimg: moboneSlider },
        { img: mob2, title: "Bylocl", downloads: "50K", sliderimg: mobtwoSlider },
        { img: mob3, title: "Beauty Home Service", downloads: "520K", sliderimg: mobthreeSlider },
        { img: mob4, title: "Cere Rides", downloads: "550K", sliderimg: mobfourSlider },
        { img: mob5, title: "Metaland", downloads: "507K", sliderimg: mobFiveSlider },
        { img: mob6, title: "Venevibe", downloads: "520K", sliderimg: mobsixSlider },
        { img: mob7, title: "Traveljinni", downloads: "530K", sliderimg: mobsevenSlider },
        { img: mob8, title: "Doe", downloads: "550K", sliderimg: rysonateSlider },
      ];
      return (
        <div className="grid grid-cols-12 gap-6 sm:gap-12 space-y-8 sm:space-y-0">
          {projects.map(({ img, title, downloads, sliderimg }, idx) => (
            <div
              key={idx}
              className="lg:col-span-4 col-span-12 sm:col-span-6 openModal custommob-modal"
              onClick={() => openModal({ img, title, downloads, sliderimg })}
            >
              <div className="overflow-hidden rounded-[12px]">
                <img src={img} alt={title} className="sm:w-full rounded-xl" />
              </div>
              <div className="md:mt-8 mt-3 flex flex-wrap items-center gap-4 md:gap-6">
                <div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center">
                  <img src={logop} alt="logo" />
                </div>
                <div>
                  <h6 className="text-[24px] sm:text-[30px] font-semibold">{title}</h6>
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
      <section className="h-[50vh] sm:h-[40vh] lg:h-[62vh] xl:h-screen gradientHeroBg relative flex items-center justify-center sm:block">
        <Container>
          <h1 className="text-center text-[32px] sm:text-[38px] lg:text-[48px] 2xl:text-[90px] max-w-[1180px] mx-auto font-semibold leading-[128.5%] sm:py-[108px] pb-[110px]">
            Your business deserves a unique approach
          </h1>
          <div className="absolute inset-x-0 bottom-0 flex justify-center items-center">
            {/* <img src={herobg} alt="background" className="w-[70%] sm:w-[58%] lg:w-[50%] 2xl:w-[48%]" /> */}
            <div className="flex items-end justify-center">
              <div className="leftside-img -mr-[15%] max-w-[320px] 2xl:max-w-full">
                <img src={bannerLeftImg} alt="Banner image" />
              </div>
              <div className="midmob-img relative z-10 max-w-[320px] 2xl:max-w-full">
                <img src={bannerMidImg} alt="Banner image" />
              </div>
              <div className="rightside-img -ml-[15%] max-w-[320px] 2xl:max-w-full">
                <img src={bannerRightImg} alt="Banner image" />
              </div>
            </div>
          </div>
          {/* <div className="lg:absolute bottom-5 left-2  2xl:left-9 text-center lg:text-start mt-3 sm:mt-8 xl:mt-0 ">
            <div className="xl:flex xl:items-center">
              <img
                src={rightLongArrow}
                alt="arrow"
                width={50}
                className="hidden lg:block xl:mx-auto"
              />
              <div className="ml-3">
                <h6 className="text-[14px] sm:text-[16px] xl:text-[18px] text-black font-normal">
                  Home | Porfolio
                </h6>
              </div>
            </div>
          </div> */}
        </Container>
      </section>

      <div className="tabs 2xl:mt-10 sm:mt-20 tabbg h-20 sm:h-24">
        <Container className="h-full">
          <div className="h-full overflow-x-auto overflow-y-hidden">
            <div className="flex sm:justify-between items-center gap-10  h-full w-[1046px] xl:w-full mx-auto">
              {tabs.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`text-[24px] sm:text-[30px] font-semibold ${activeTab === id ? "text-secondary-light2" : "text-gray-400"
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="my-10">{renderContent(activeTab)}</div>
      </Container>

      <div
        className={`fixed inset-0 z-[999]  bg-black bg-opacity-50 transition-all duration-300  ${modalActive ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <div className={` relative  h-[100vh]  flex items-start justify-end  ${modalActive ? " translate-x-0 visible" : " translate-x-full invisible "
          }`}>

          <button
            className="text-white bg-primary-dark2 py-1 px-3 rounded-[5px] absolute top-6 left-[30px] sm:left-[280px] text-2xl"
            onClick={closeModal}
          >
            X
          </button>

          <div className={`transition-all duration-500 bg-white p-5 sm:p-11 rounded-xl shadow-lg w-[calc(100%-50px)] sm:w-[calc(100%-300px)] custommodal-fullimg overflow-auto h-full ${modalActive ? 'active' : 'no-underline'}`}>
            {selectedProject && (
              <>
                <h2 className="text-2xl font-semibold mt-4">{selectedProject.title}</h2>
                <p className="text-lg text-gray-700">{selectedProject.downloads} Downloads</p>
                <img
                  src={selectedProject.sliderimg}
                  alt={selectedProject.title}
                  className={`w-full rounded-xl`}
                />
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Portfolio;
