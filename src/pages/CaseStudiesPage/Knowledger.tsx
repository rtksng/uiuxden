import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
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
import { useRef } from "react";
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



const Knowledger = () => (
  <main>
    <section className="h-screen knowledger">
      <Navbar />
      <div className="flex flex-col items-center mt-[115px] text-center">
        <img src={knowledgerblack} alt="Knowledger Logo" />
        <h1 className="text-[90px] font-semibold -mt-5">
          Learning Management System
        </h1>
        <p className="max-w-[1320px] text-[32px] font-medium mt-9">
          A Blockchain-based Learning Management System providing a secure,
          scalable, and cost-effective educational platform leveraging
          blockchain technology.
        </p>
      </div>
    </section>

    <section className="pHighLightBg relative">
      <img
        src={kd}
        alt="KD Graphic"
        className="absolute inset-0 -top-[300px] max-w-[1034px] mx-auto"
      />
      <p className="text-2xl font-semibold text-center mx-auto max-w-[1350px] pt-[426px] pb-[84px]">
        The development of a blockchain-based Learning Management System (LMS)
        aims to create a secure, scalable, and cost-effective educational
        platform. By leveraging blockchain technology, the system ensures data
        security through decentralized storage and enhances scalability to
        handle a large number of users and content. This approach also reduces
        costs by eliminating intermediaries and automating processes with smart
        contracts, making education more efficient and accessible.
      </p>
    </section>

    <section>
      <h3 className="text-center text-[60px] font-semibold">
        Project Highlights
      </h3>
      <Container>
        <div className="grid grid-cols-12 gap-6 mt-[78px]">
          {highlights.map((item, index) => (
            <div key={index} className="col-span-3">
              <div className="kcbg py-[60px] px-[40px]">
                <h5 className="text-[30px] font-semibold max-w-[150px]">
                  {item.title}
                </h5>
                <p className="text-[22px] ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
    
    <section className="mt-[70px]">
      <h3 className="text-center text-[60px] font-semibold">
        Technology Stack
      </h3>
      <Container>
        <div className="grid grid-cols-2 gap-[68px] mt-[70px]">
          <div className="col-span-1 self-center">
            {techStack.map((item) => (
              <div key={item.id} className="flex gap-5 items-center">
                <div className="p-5 text-[28px] text-neutral-500 font-semibold">
                  {item.id}
                </div>
                <div className="text-[32px] font-semibold">{item.title}:</div>
                <div className="flex gap-3">
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
          <div className="col-span-1">
            <img src={stackBg} alt="image" />
          </div>
        </div>
        <div className="mt-[128px] max-w-[1248px] mx-auto ">
          <div className="grid grid-cols-2 gap-[76px]">
            {executionData.map((section, index) => (
              <div key={index} className="col-span-1">
                <h5 className="text-[40px] font-semibold">{section.title}</h5>
                <div className="py-[50px] px-[40px] rounded-2xl bg-primary-dark h-[487px] mt-8">
                  <div className="text-[32px] font-semibold text-secondary-light2">
                    {section.methodology}
                  </div>
                  <ul>
                    {section.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-[22px] text-white py-3 border-b border-neutral-600"
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
        <div className="mt-[140px]">
          <h3 className="text-center text-[60px] font-semibold">
            Project Overview
          </h3>
          <p className="max-w-[1000px] mx-auto text-2xl text-center mt-12">
            The project aims to provide a blockchain-based educational platform
            addressing key issues in the education sector:
          </p>
          <div className="relative">
            <div className="flex justify-center mt-12">
              <img src={kl} alt="image" />
            </div>
            <div className="py-[20px] px-[50px] rounded-3xl projectItem w-[504px] absolute -top-1 -left-2">
              <h4 className="text-[32px] font-bold">Data Security:</h4>
              <p className="text-[22px] mt-3">
                Ensuring secure storage and sharing of academic records and
                credentials.
              </p>
            </div>
            <div className="py-[20px] px-[50px] rounded-3xl projectItem w-[504px] absolute top-[310px] left-12">
              <h4 className="text-[32px] font-bold">Scalability: </h4>
              <p className="text-[22px] mt-3">
                Handling large-scale educational content and user interactions.
              </p>
            </div>
            <div className="py-[20px] px-[50px] rounded-3xl projectItem w-[504px] absolute top-14 -right-14">
              <h4 className="text-[32px] font-bold">Cost Efficiency: </h4>
              <p className="text-[22px] mt-3">
                Reducing operational costs through smart contracts and
                decentralized applications.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <h3 className="text-center text-[60px] font-semibold mt-[192px] mb-[133px]">
          Key Features
        </h3>
        <div className="flex ">
          <div className="flex justify-end">
            <div className="grid grid-cols-12 ">
              <div className="col-span-5 px-10 py-8 relative ">
                <div className="flex">
                  <div className="text-primary-dark2">
                    <h2 className="mt-3  text-[30px] font-semibold leading-10">
                      Admin Panel
                    </h2>
                    <p className="text-neutral-600 mt-3 text-[22px]">
                      The platform offers super admin and admin access to manage
                      teachers, students, and sellers. Administrators can use a
                      dashboard to view statistics, manage courses, and generate
                      reports efficiently.
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src={rightBar}
                    className="h-[290px] absolute right-0 bottom-0"
                    alt="bar"
                  />
                </div>
              </div>
              <div className="col-span-4 px-10 py-8 relative ">
                <div className="flex  ">
                  <div className="text-primary-dark2">
                    <h2 className="mt-3  text-[30px] font-semibold leading-10">
                      Student Application
                    </h2>
                    <p className="text-neutral-600 mt-3 text-[22px]">
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
                    className="h-[290px] absolute -right-[4px] bottom-0"
                    alt="bar"
                  />
                </div>
              </div>
              <div className="col-span-3  relative  bg-gradient-fill3"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 border-t-[1px] border-t-primary-dark2">
          <div className="col-span-3 px-10 py-8 relative h-full bg-gradient-fill4">
            <div>
              <img
                src={rightBar}
                className="h-[290px] absolute -right-[4px]  top-0"
                alt="bar"
              />
            </div>
          </div>

          <div className="col-span-4 px-10 py-8 relative h-full">
            <div className="flex  ">
              <div className="text-primary-dark2">
                <h2 className="mt-3  text-[30px] font-semibold leading-10">
                  Teacher Application
                </h2>
                <p className="text-neutral-600 mt-3 text-[22px]">
                  The platform includes a registration and verification process,
                  allows course creation, management, and monetization through
                  NFTs, and provides a wallet for managing W-tokens and
                  V-tokens.
                </p>
              </div>
            </div>
            <div>
              <img
                src={rightBar}
                className="h-[290px] absolute right-0 top-0"
                alt="bar"
              />
            </div>
          </div>
          <div className="col-span-5 px-10 py-8 relative h-full">
            <div className="flex">
              <div className="text-primary-dark2">
                <h2 className="mt-3  text-[30px] font-semibold leading-10">
                  Knowledger Marketplace
                </h2>
                <p className="text-neutral-600 mt-3 text-[22px]">
                  The platform enables buying and selling goods through NFTs,
                  includes an auction feature for product bidding, and offers
                  parental support for partial payments using V-tokens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <section className="mt-40">
        <div className="h-[328px] bg-primary-dark ">
          <h3 className="text-center text-[60px] font-semibold text-white pt-[72px]">
            Our Work
          </h3>
        </div>
        <Swiper
     
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={3}
      spaceBetween={20}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
  
      className="my-swiper"
    >
      {/* Define slides manually */}
      <SwiperSlide>
        <div className="slide-content">Item 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">Item 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">Item 3</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">Item 4</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">Item 5</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">Item 6</div>
      </SwiperSlide>
    </Swiper>
      </section>
      <Container>
        <div className="grid grid-cols-2 gap-20 mt-[158px]">
          <div className="col-span-1 self-center">
            <div>
              <div className="text-[18px] font-semibold text-secondary-light2">
                KNOWLEDGER
              </div>
              <div className="text-[40px] font-semibold mt-4 mb-8">
                Results & Impact
              </div>
              <p className="text-xl font-medium">
                The blockchain LMS project by MoogleLabs is set to revolutionize
                the education sector by providing a secure, scalable, and
                cost-effective platform for lifelong learning. The integration
                of blockchain technology ensures data security, while the
                NFT-based course model and token economy provide innovative ways
                for teachers and students to interact and benefit from the
                platform.
              </p>
            </div>
            <div className="mt-[98px]">
              <div className="text-[18px] font-semibold text-secondary-light2">
                KNOWLEDGER
              </div>
              <div className="text-[40px] font-semibold mt-4 mb-8">
                Conclusion
              </div>
              <p className="text-xl font-medium">
                MoogleLabs successfully developed a comprehensive
                blockchain-based LMS for Seasia Group of Companies, addressing
                critical issues in the education sector and offering innovative
                solutions for data security, scalability, and cost management.
                The project highlights MoogleLabs' expertise in leveraging
                cutting-edge technologies to deliver transformative digital
                experiences.
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <img src={cbg} alt="image" />
          </div>
        </div>
      </Container>
      <Footer />
    </section>
  </main>
);

export default Knowledger;
