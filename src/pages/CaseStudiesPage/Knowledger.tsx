import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import knowledgerblack from "../../assets/Knowledgerblack.svg";
import kd from "../../assets/kd.png";
import stackBg from "../../assets/stackbg.png";
import Footer from "../../components/Footer";
import cbg from "../../assets/cbg.png";
import kl from "../../assets/kl.png";
import rightBar from "../../assets/rightbar.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import klogin from "../../assets/klogin.png";
import { useState } from "react";
import SVGAnimation from "../../components/StrokeAnimation";
import laptop from "../../assets/laptop.png";
const highlights = [
  {
    title: "Blockchain Integration",
    description:
      "The project incorporates Ethereum blockchain to enhance data security, scalability, and cost management.",
  },
  {
    title: "NFT-based Courses",
    description:
      "Students can purchase subject-specific NFTs to access courses, take exams, and receive certifications.",
  },
  {
    title: "Token Economy",
    description:
      "The platform uses W-tokens and V-tokens for course creation rewards and student achievements.",
  },
  {
    title: "Decentralized Marketplace",
    description: "A marketplace for buying and selling goods through NFTs.",
  },
];
const techStack = [
  { id: "01", title: "Backend", tools: ["Node.js"] },
  { id: "02", title: "Frontend", tools: ["React"] },
  { id: "03", title: "Mobile Application", tools: ["React Native"] },
  { id: "04", title: "Database", tools: ["PostgreSQL"] },
  {
    id: "05",
    title: "CI/CD Tools",
    tools: ["GIT/Bitbucket/GITLAB", "CircleCI/Jenkins", "Docker"],
  },
  { id: "06", title: "Cloud Infrastructure", tools: ["AWS"] },
];
const executionData = [
  {
    title: "Execution Approach",
    methodology: "Agile Methodology",
    points: [
      {
        heading: "Daily Scrum Meetings",
        description: "Define product backlog and prioritize sprint items.",
      },
      {
        heading: "Sprint Planning",
        description: "Regular progress updates and issue tracking.",
      },
      {
        heading: "QA and Testing",
        description: "Parallel definition of test cases and sprint reviews.",
      },
    ],
  },
  {
    title: "Project Management",
    methodology: "Tools and Communication",
    points: [
      {
        heading: "PMS: ",
        description: "Basecamp for project coordination & resource management.",
      },
      {
        heading: "Communication",
        description: "Regular progress updates and issue tracking.",
      },
      {
        heading: "Reporting",
        description: "Weekly / biweekly progress reports and meeting minutes",
      },
    ],
  },
];

const Knowledger = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    const totalSlides = swiper.slides.length;
    const visibleSlides = Math.floor(swiper.params.slidesPerView);
    const centerSlide = Math.floor(visibleSlides / 2);
    const calculatedCenterIndex =
      (swiper.realIndex + centerSlide) % totalSlides;
    setCenterIndex(calculatedCenterIndex);
  };
  return (
    <main className="overflow-hidden">
      <Navbar />
      <section className="h-screen flex items-center justify-center xl:block knowledger ">
        <div className="flex flex-col items-center xl:pt-[115px] text-center px-3">
          <img
            src={knowledgerblack}
            alt="Knowledger Logo"
            className="max-w-[150px] md:max-w-[300px] xl:max-w-full"
          />
          <h1 className="xl:text-[90px] md:text-[42px] text-[28px] font-semibold -md:mt-5">
            Learning Management System
          </h1>
          <p className="max-w-[1320px] md:text-[28px] xl:text-[32px] font-medium lg:mt-9 mt-4">
            A Blockchain-based Learning Management System providing a secure,
            scalable, and cost-effective educational platform leveraging
            blockchain technology.
          </p>
        </div>
      </section>

      <section className="pHighLightBg relative px-3">
        <img
          src={kd}
          alt="KD Graphic"
          className="lg:absolute -top-[150px] inset-0 xl:top-[-300px] xl:max-w-[1034px] md:max-w-3xl mx-auto"
        />
        <p className="xl:text-2xl text-base text-start font-semibold md:text-center mx-auto xl:max-w-[1350px] lg:pt-[400px] 2xl:pt-[426px] pb-5 sm:pb-10  xl:pb-[84px]">
          The development of a blockchain-based Learning Management System (LMS)
          aims to create a secure, scalable, and cost-effective educational
          platform. By leveraging blockchain technology, the system ensures data
          security through decentralized storage and enhances scalability to``
          handle a large number of users and content. This approach also reduces
          costs by eliminating intermediaries and automating processes with
          smart contracts, making education more efficient and accessible.
        </p>
      </section>

      <section>
        <h3 className="text-center xl:text-[60px] text-[32px] sm:text-[48px] font-semibold">
          Project <span className="animationStroke"><SVGAnimation nameOfClass="svg-container knowledger" />Highlights</span>
        </h3>
        <Container>
          <div className="grid grid-cols-12 gap-6 xl:mt-[78px] md:mt-10 mt-5">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="xl:col-span-4 2xl:col-span-3 col-span-12 sm:col-span-6"
              >
                <div className="kcbg sm:py-[60px] sm:px-[40px] p-4">
                  <h5 className="sm:text-[30px] text-[24px] font-semibold max-w-[150px]">
                    {item.title}
                  </h5>
                  <p className="sm:text-[22px] text-[16px] ">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="md:mt-[70px] mt-8 sm:mt-16">
        <h3 className="text-center xl:text-[60px] text-[32px] sm:text-[48px] font-semibold">
          Technology <span className="animationStroke"><SVGAnimation nameOfClass="svg-container knowledger2" />Stack</span>
        </h3>
        <Container>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-[68px] md:mt-[70px] mt-8 sm:mt-16">
            <div className="xl:col-span-1 self-center">
              {techStack.map((item) => (
                <div
                  key={item.id}
                  className="flex space-y-4 xl:space-y-0 flex-wrap xl:gap-5 gap-2 items-center"
                >
                  <div className="md:p-5 p-2 text-[24px] md:text-[28px] text-neutral-500 font-semibold">
                    {item.id}
                  </div>
                  <div className="md:text-[32px] text-[24px] font-semibold">
                    {item.title}:
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {item.tools.map((tool, index) => (
                      <div
                        key={index}
                        className="text-secondary-light2 px-5 py-2.5 rounded-full border-[1px] font-bold border-neutral-200"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="xl:col-span-1 hidden xl:block">
              <img src={stackBg} alt="image" />
            </div>
          </div>
          <div className="lg:mt-[128px] mt-8 md:mt-16 max-w-[1248px] mx-auto ">
            <div className="grid md:grid-cols-2 gap-10 md:gap-[76px]">
              {executionData.map((section, index) => (
                <div key={index} className="col-span-1">
                  <h5 className="text-[24px] md:first-line:text-[40px] font-semibold">
                    {section.title}
                  </h5>
                  <div className="md:py-[50px] md:px-[40px] p-4 rounded-2xl bg-primary-dark lg:h-[487px] mt-4 md:mt-8">
                    <div className="text-[24px] md:text-[32px] font-semibold text-secondary-light2">
                      {section.methodology}
                    </div>
                    <ul>
                      {section.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="md:text-[22px] text-white py-3 border-b border-neutral-600"
                        >
                          <div className="font-bold">{point.heading}: </div>
                          <p>{point.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
        <Container>
          <div className="mt-10 sm:mt-16 xl:mt-[140px]">
            <h3 className="text-center xl:text-[60px] text-[32px] sm:text-[48px] font-semibold">
              Project <span className="animationStroke"><SVGAnimation nameOfClass="svg-container knowledger" />Overview</span>
            </h3>
            <p className="max-w-[1000px] mx-auto md:text-2xl text-center mt-4 md:mt-12">
              The project aims to provide a blockchain-based educational
              platform addressing key issues in the education sector:
            </p>
            <div className="relative space-y-5">
              <div className=" justify-center mt-12 hidden xl:flex">
                <img src={kl} alt="image" />
              </div>
              <FeatureCard
                title="Data Security:"
                description="Ensuring secure storage and sharing of academic records and credentials."
                className="-top-1 -left-2"
              />
              <FeatureCard
                title="Scalability:"
                description="Handling large-scale educational content and user interactions."
                className="top-[310px] left-12"
              />
              <FeatureCard
                title="Cost Efficiency:"
                description="Reducing operational costs through smart contracts and decentralized applications."
                className="top-14 -right-14"
              />
            </div>
          </div>
        </Container>
        <Container>
          <h3 className="text-center xl:text-[60px] text-[32px] sm:text-[48px] font-semibold xl:mt-[192px]  mt-10 sm:mt-16 xl:mb-[133px]">
            Key <span className="animationStroke"><SVGAnimation nameOfClass="svg-container knowledger3" />Features</span>
          </h3>
          <div className="flex ">
            <div className="flex justify-end">
              <div className="grid grid-cols-12 ">
                <div className="  col-span-12 sm:col-span-6 xl:col-span-5 md:px-10 md:py-8 p-3 relative ">
                  <div className="flex">
                    <div className="text-primary-dark2">
                      <h2 className="mt-3  text-[24px] md:text-[30px] font-semibold md:leading-10">
                        Admin Panel
                      </h2>
                      <p className="text-neutral-600 mt-3 md:text-[22px]">
                        The platform offers super admin and admin access to
                        manage teachers, students, and sellers. Administrators
                        can use a dashboard to view statistics, manage courses,
                        and generate reports efficiently.
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src={rightBar}
                      className="h-[290px] absolute right-0 bottom-0 hidden xl:block"
                      alt="bar"
                    />
                  </div>
                </div>
                <div className="  col-span-12 sm:col-span-6 xl:col-span-4 md:px-10 md:py-8 p-3 relative ">
                  <div className="flex  ">
                    <div className="text-primary-dark2">
                      <h2 className="mt-3  text-[24px] md:text-[30px] font-semibold md:leading-10">
                        Student Application
                      </h2>
                      <p className="text-neutral-600 mt-3 md:text-[22px]">
                        Users can register and purchase NFTs for course access,
                        manage their courses, engage with interactive learning
                        materials, and take exams. Upon course completion, they
                        can earn V-tokens and badges.
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src={rightBar}
                      className="h-[290px] absolute -right-[4px] bottom-0 hidden xl:block"
                      alt="bar"
                    />
                  </div>
                </div>
                <div className="col-span-3 hidden xl:block relative  bg-gradient-fill3"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 xl:border-t-[1px] xl:border-t-primary-dark2">
            <div className="col-span-3  hidden xl:block md:px-10 md:py-8 p-3 relative h-full bg-gradient-fill4">
              <div>
                <img
                  src={rightBar}
                  className="h-[290px] absolute -right-[4px]  top-0"
                  alt="bar"
                />
              </div>
            </div>

            <div className=" col-span-12 sm:col-span-6 xl:col-span-4 md:px-10 md:py-8 p-3 relative h-full">
              <div className="flex  ">
                <div className="text-primary-dark2">
                  <h2 className="mt-3  text-[24px] md:text-[30px] font-semibold md:leading-10">
                    Teacher Application
                  </h2>
                  <p className="text-neutral-600 mt-3 md:text-[22px]">
                    The platform includes a registration and verification
                    process, allows course creation, management, and
                    monetization through NFTs, and provides a wallet for
                    managing W-tokens and V-tokens.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={rightBar}
                  className="h-[290px] absolute right-0 top-0 hidden xl:block"
                  alt="bar"
                />
              </div>
            </div>
            <div className=" col-span-12 sm:col-span-6 xl:col-span-5 md:px-10 md:py-8 p-3 relative h-full">
              <div className="flex">
                <div className="text-primary-dark2">
                  <h2 className="mt-3  text-[24px] md:text-[30px] font-semibold md:leading-10">
                    Knowledger Marketplace
                  </h2>
                  <p className="text-neutral-600 mt-3 md:text-[22px]">
                    The platform enables buying and selling goods through NFTs,
                    includes an auction feature for product bidding, and offers
                    parental support for partial payments using V-tokens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <section className="mt-40 relative ">
          <div className="h-[328px] bg-primary-dark ">
            <h3 className="text-center text-[60px] font-semibold text-white pt-[72px]">
              Our <span className="animationStroke"><SVGAnimation nameOfClass="svg-container knowledger4" />Work</span>
            </h3>
          </div>
          <div className="absolute custom-leptopimg inset-0 z-40 ">
            <img src={laptop} alt="laptop" className="leptop-image" />
          </div>
          <div>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={3}
              spaceBetween={60}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="my-swiper custom-knowledger mt-24 relative z-50"
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => handleSlideChange(swiper)}
            >
              {slidesContent.map((content, index) => {
                let slideClass = "";
                let slideClassOutter = ""
                if (index === centerIndex) {
                  slideClass = "active-slide";
                  slideClassOutter = "active-slideoutter";
                } else if (
                  index ===
                  (centerIndex - 1 + slidesContent.length) %
                  slidesContent.length
                ) {
                  slideClass = "other-slide";
                  slideClassOutter = "overflow-hidden";
                } else if (index === (centerIndex + 1) % slidesContent.length) {
                  slideClass = "other-slide";
                  slideClassOutter = "overflow-hidden";

                }

                return (
                  <SwiperSlide
                    className={`flex items-center ${slideClassOutter}`}
                    key={index}
                  >
                    <div className={`slide-content ${slideClass}`}>
                      {content}
                    </div>
                  </SwiperSlide>
                );
              })}

            </Swiper>
          </div>
        </section>
        <Container>
          <div className="grid 2xl:grid-cols-2 gap-20 2xl:mt-[158px] mt-10 sm:mt-16">
            <div className="2xl:col-span-1  self-center">
              <div>
                <div className="text-[18px] font-semibold text-secondary-light2">
                  KNOWLEDGER
                </div>
                <div className=" text-[24px] 2xl:text-[40px] font-semibold 2xl:mt-4 2xl:mb-8">
                  Results & Impact
                </div>
                <p className="text-xl font-medium">
                  The blockchain LMS project by MoogleLabs is set to
                  revolutionize the education sector by providing a secure,
                  scalable, and cost-effective platform for lifelong learning.
                  The integration of blockchain technology ensures data
                  security, while the NFT-based course model and token economy
                  provide innovative ways for teachers and students to interact
                  and benefit from the platform.
                </p>
              </div>
              <div className="2xl:mt-[98px] mt-10">
                <div className="text-[18px] font-semibold text-secondary-light2">
                  KNOWLEDGER
                </div>
                <div className=" text-[24px] 2xl:text-[40px] font-semibold 2xl:mt-4 2xl:mb-8">
                  Conclusion
                </div>
                <p className="text-xl font-medium">
                  MoogleLabs successfully developed a comprehensive
                  blockchain-based LMS for Seasia Group of Companies, addressing
                  critical issues in the education sector and offering
                  innovative solutions for data security, scalability, and cost
                  management. The project highlights MoogleLabs' expertise in
                  leveraging cutting-edge technologies to deliver transformative
                  digital experiences.
                </p>
              </div>
            </div>
            <div className="col-span-1 hidden 2xl:block">
              <img src={cbg} alt="image" />
            </div>
          </div>
        </Container>
        <Footer />
      </section>
    </main>
  );
};

export default Knowledger;

const FeatureCard = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => (
  <div
    className={`md:py-[20px] md:px-[50px] md:rounded-3xl rounded-lg p-4 projectItem md:w-[504px] mx-auto xl:absolute ${className}`}
  >
    <h4 className="md:text-[32px] font-bold">{title}</h4>
    <p className="md:text-[22px] mt-3">{description}</p>
  </div>
);

const slidesContent = [
  <div className="content-box">
    <img src={klogin} className="max-w-full" alt="dashboard_image" />
  </div>,
  <div className="content-box">
    <img src={klogin} className="max-w-full" alt="dashboard_image" />
  </div>,
  <div className="content-box">
    <img src={klogin} className="max-w-full" alt="dashboard_image" />
  </div>,
  <div className="content-box">
    <img src={klogin} className="max-w-full" alt="dashboard_image" />
  </div>,
  <div className="content-box">
    <img src={klogin} className="max-w-full" alt="dashboard_image" />
  </div>,
  <div className="content-box">
    <img src={klogin} className="max-w-full" alt="dashboard_image" />
  </div>,
];
