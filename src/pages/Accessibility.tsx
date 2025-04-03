import { useEffect, useState } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import rightLongArrow from "../assets/right-long-arrow.svg";
import BarGraph from "../assets/bargraph.png";
import CheckMarkbtn from "../assets/checkmarkbtn.png";
import SeeButton from "../assets/seebutton.png";
import HeerButton from "../assets/hearbtn.png";
import SpeakButton from "../assets/speakbtn.png";
import accessbilityimg from "../assets/accessbilityimg.png";
import VectorImg from "../assets/vectorimg.svg";
import rightBar from "../assets/rightbar.png";
import audit from "../assets/auditsvg.svg";
import UpArrow from "../assets/uproundarrow.png";
import DownArrow from "../assets/downroundarrow.png";
import InclusiveDesign from "../assets/inclusivedesign.svg";
import AssissitiveTechnology from "../assets/assissitivetechnology.svg";
import ColorContrast from "../assets/colorcontrast.svg";
import UserTesting from "../assets/usertesting.svg";
import Footer from "../components/Footer";
import Button from '../components/Button';
import "swiper/css";
import "swiper/css/pagination";
import SVGAnimation from "../components/StrokeAnimation";



const Accessibility = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    { title: "More accessible product?", content: "Tailwind CSS is a utility-first CSS framework for creating custom designs quickly." },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };
  return (
    <main>
      <Navbar />
      <div
        className={`fixed top-0 left-0 w-full z-[120] transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"
          }`}
      ></div>


      {/* ---------- Banner Section ---------- */}
      <div className="relative h-[80vh] lg:h-[100vh] green-linear">
        <Container>
          <div className="text-center pt-[80px]  sm:pt-[120px] 2xl:pt-[170px] flex flex-col items-center">
            <h1 className="text-[34px] sm:text-[48px] max-w-[1160px] lg:text-[66px] 2xl:text-[80px] text-black leading-tight font-semibold mb-base lg:mt-[0] mt-[80px]">
              UIUXDen removes all barriers and provides the benefit of technology for everyone.
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-[80px]">
              <div><img src={CheckMarkbtn} alt="image" className="w-[220px] md:w-[250px] lg:w-[250px] xl:w-[96%]"/></div>
              <div><img src={SeeButton} alt="image" className="w-[220px] md:w-[250px] lg:w-[250px] xl:w-[96%]"/></div>
              <div><img src={HeerButton} alt="image" className="w-[220px] md:w-[250px] lg:w-[250px] xl:w-[96%]"/></div>
              <div><img src={SpeakButton} alt="image" className="w-[220px] md:w-[250px] lg:w-[250px] xl:w-[96%]"/></div>
            </div>
          </div>



          <div className="lg:absolute bottom-5 left-2 2xl:left-9 text-center lg:text-start mt-[30px] md:mt-[80px] sm:mt-[60px]">
            <div className="xl:flex xl:items-center">
              <img
                src={rightLongArrow}
                alt="arrow"
                width={50}
                className="hidden lg:block xl:mx-auto"
              />
              <div className="ml-3">
                <h6 className="text-[14px] sm:text-[16px] xl:text-[18px] text-black font-normal">
                  Home | Accessibility
                </h6>
              </div>
            </div>
          </div>
        </Container>
      </div>


      <section>
        <Container>
          <div className="grid 2xl:grid-cols-2 gap-20 2xl:mt-[158px] mt-10 sm:mt-16 lg:pb-[70px] pb-[70px]">
            <div className="2xl:col-span-1  self-center">
              <div>
                <div className=" text-[30px] 2xl:text-[60px] lg:leading-[72px] leading-[45px] font-semibold 2xl:mb-6 mb-[40px]">
                  Accessibility is primary focus while creating a design for people.
                </div>
                <div className="text-[28px] font-semibold text-black lg:mt-[50px]">
                  Create usable product
                </div>

                <p className="text-[20px] font-normal mb-5 lg:w-[75%] lg:mt-[20px] mt-[10px]">A well-designed product should be intuitive, easy to navigate, and efficient for all users. By focusing on usability, we ensure a seamless experience that enhances engagement and satisfaction.</p>
                <div className="w-[100%] sm:w-[100%] lg:w-[340px] me-auto mt-10">
                  {accordionItems.map((item, index) => (
                    <div key={index} className="mb-2 border-y-2 border-black py-4 px-0">
                      {/* Accordion Header */}
                      <button
                        className="w-full flex justify-between items-center py-4 bg-white-100 hover:bg-white focus:outline-none"
                        onClick={() => toggleAccordion(index)}
                      >
                        <span className="text-[20px] font-medium">{item.title}</span>
                        <span className="text-[24px] font-bold">{openIndex === index ? "-" : "+"}</span>
                      </button>

                      {/* Accordion Content */}
                      {openIndex === index && (
                        <div className="py-2 text-gray-700 bg-white border-0">{item.content}</div>
                      )}
                    </div>
                  ))}
                </div>

                <Button variant='secondary' className="mt-[25px] py-[14px] px-[14px] text-dark border-black">
                  Consult Us Now
                </Button>
              </div>
            </div>
            <div className="col-span-1 hidden 2xl:block">
              <img src={accessbilityimg} alt="image" />
              <div className="flex items-start text-white p-6 w-[534px] h-[126px] rounded-[32px] relative curve-img mt-4">
                {/* Square Icon Box */}
                <div className="w-8 h-8 border border-white rounded-md flex items-center justify-center mr-4 mt-2">
                  {/* Icon (Replace with actual SVG or Icon component) */}
                </div>

                {/* Text Content */}
                <p className="text-2xl font-semibold">
                  People ignore design that<br></br> ignores people
                </p>

                {/* Curved Right Shape */}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#2D2D2D] lg:pt-[100px] pt-[80px] relative">
        <Container>
          <h6 className=" text-[30px] 2xl:text-[56px] lg:leading-[90px] leading-[40px] font-semibold 2xl:mb-6 text-left lg:text-center text-white relative">
            Why Accessibility is <span className="animationStroke">
              <SVGAnimation nameOfClass="svg-container clunky" />
              Non-Negotiable?
            </span>
          </h6>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 pt-[30px] pb-[140px]">
            <div className="flex flex-col items-start justify-center lg:px-6 px-0 lg:mt-[150px]">
              <div className="mb-6 border border-white p-2 rounded-lg">
                <img src={VectorImg} alt="image" />
              </div>

              <div className="text-start max-w-2xl">
                <h2 className="lg:text-[30px] text-[25px] font-bold mb-4 text-white lg:leading-[45px] leading-[40px]">Equal Access<br></br> for All</h2>
                <p className="text-[18px] text-white">
                  Accessibility isn’t just an option—it’s a necessity. Inclusive design makes digital platforms usable for everyone,
                  regardless of their abilities.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center lg:px-6 px-0 mt-[60px] mt:lg-[0]">
              <div className="mb-6 border border-white p-2 rounded-lg">
                <img src={VectorImg} alt="image" />
              </div>

              <div className="text-start max-w-2xl">
                <h2 className="lg:text-[30px] text-[25px] font-bold mb-4 text-white lg:leading-[45px] leading-[40px]">Stay Legally Compliant</h2>
                <p className="text-[18px] text-white">Regulations like <b>WCAG (Web Content Accessibility Guidelines), ADA, and Section 508</b> require businesses to meet accessibility standards. Avoid legal risks by ensuring compliance.</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center lg:px-6 px-0 mt-[60px] lg:mt-[140px]">
              <div className="mb-6 border border-white p-2 rounded-lg">
                <img src={VectorImg} alt="image" />
              </div>

              <div className="text-start max-w-2xl">
                <h2 className="lg:text-[30px] text-[25px] font-bold mb-4 text-white lg:leading-[45px] leading-[40px]">Better UX for Everyone</h2>
                <p className="text-[18px] text-white">An accessible product benefits not only users with disabilities but all users—improving readability, navigation, and ease of use.</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center lg:px-6 px-0 mt-[60px] mt:lg-[0]">
              <div className="mb-6 border border-white p-2 rounded-lg">
                <img src={VectorImg} alt="image" />
              </div>

              <div className="text-start max-w-2xl">
                <h2 className="lg:text-[30px] text-[25px] font-bold mb-4 text-white lg:leading-[45px] leading-[40px]">Boost Business &<br></br> SEO</h2>
                <p className="text-[18px] text-white">
                  Search engines favor accessible websites with proper structure, alt text, and optimized navigation, leading to higher rankings and better engagement.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 lg:py-20 pb-10">
        <Container>
          <h6 className=" text-[24px] 2xl:text-[60px] leading-[50px] 2xl:mb-6 text-left">
            Our Approach:
          </h6>
          <h6 className=" text-[24px] 2xl:text-[60px] leading-[50px] font-bold 2xl:mb-6 text-left">
            Crafting an Inclusive Experience
          </h6>
          <div className="grid xl:grid grid-cols-12 xl:grid-cols-8 mt-[20px] lg:mt-[100px] none-bg-grey-graident">
            <div className=" col-span-12 sm:col-span-6 xl:col-span-2 md:p-5 p-3  relative h-full bg-grey-top-gradient">
              <div className="flex">
                <div className="text-primary-dark2 flex-column p-[20px] lg:p-[40px]">
                  <div className="min-w-[34px]">
                    <h2 className="text-[24px]  md:text-[20px] font-semibold md:leading-[30px]">
                      Accessibility Audit & Compliance Check
                    </h2>
                  </div>
                  <p className="text-secondary-dark text-base md:text-xl font-normal">We evaluate your current design, code, and content to identify accessibility barriers.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={rightBar}
                  className="h-full absolute right-0 top-0 hidden xl:block"
                  alt="bar"
                />
              </div>
            </div>
            <div className=" col-span-12 sm:col-span-6 xl:col-span-2 md:p-5 p-3  relative h-full">
              <div className="flex">
                <div className="text-primary-dark2 flex-column p-[20px] lg:p-[40px]">
                  <div className="min-w-[34px]">
                    <h2 className="text-[24px]  md:text-[20px] font-semibold md:leading-[30px]">
                      Strategic Enhancements & Fixes
                    </h2>
                  </div>
                  <p className="text-secondary-dark text-base md:text-xl font-normal">We implement WCAG-compliant design
                    improvements and ensure a seamless experience for all users.
                  </p>
                </div>
                <div>
                  <img
                    src={rightBar}
                    className="h-full absolute right-0 top-0 hidden xl:block"
                    alt="bar"
                  />
                </div>
              </div>
            </div>
            <div className=" col-span-12 sm:col-span-6 xl:col-span-2 md:p-5 p-3  relative h-full bg-grey-top-gradient">
              <div className="flex">
                <div className="text-primary-dark2 flex-column p-[20px] lg:p-[40px]">
                  <div className="min-w-[34px]">
                    <h2 className="text-[24px]  md:text-[20px] font-semibold md:leading-[30px]">
                      Real-User Testing & Validation
                    </h2>
                  </div>
                  <p className="text-secondary-dark text-base md:text-xl font-normal">We test with assistive technology users to ensure practical usability improvements.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={rightBar}
                  className="h-full absolute right-0 top-0 hidden xl:block"
                  alt="bar"
                />
              </div>
            </div>

            <div className=" col-span-12 sm:col-span-6 xl:col-span-2 md:p-5 p-3  relative h-full">
              <div className="flex">
                <div className="text-primary-dark2 flex-column p-[20px] lg:p-[40px]">
                  <div className="min-w-[34px]">
                    <h2 className="text-[24px]  md:text-[20px] font-semibold md:leading-[30px]">
                      Ongoing Support & Future-Proofing
                    </h2>
                  </div>
                  <p className="text-secondary-dark text-base md:text-xl font-normal">We provide training, updates, and long-term accessibility strategies to keep your platform compliant and inclusive.
                  </p>
                </div>
                <div>
                  <img
                    src={rightBar}
                    className="h-full absolute right-0 top-0 hidden xl:block"
                    alt="bar"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#2D2D2D] lg:pt-[100px] pt-[100px] relative">
        <Container>
          <h6 className=" text-[24px] 2xl:text-[56px] lg:leading-[90px] lg:leading-[40px] font-semibold 2xl:mb-6 text-left lg:text-center text-white relative">
            Reimagining Digital Products for <span className="animationStroke">
              <SVGAnimation nameOfClass="svg-container everyuser" />
              Every User
            </span>
          </h6>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-2 pt-[60px] pb-[100px] mt-[40px] lg:mt-[100px]">
              <div className="py-5 px-5 flex-column audit-box w-[96%] h-[250px] rounded-[40px] border border-[1px] [border-image-source:linear-gradient(180deg,#FFFFFF_0%,#393939_100%)] [border-image-slice:1] relative">
                <img src={UpArrow} alt="image" className="absolute top-[-42px] left-[120px] hidden lg:block" />
                <img src={audit} alt="image" className="w-12 mt-[40px]" />
                <h6 className="text-white mt-4 lg:text-[20px]">Accessibility Audit</h6>
                <p className="text-white">We check your product to make it more accessible to everyone</p>
              </div>
              <div className="py-5 px-5 flex-column audit-box w-[96%] h-[250px] rounded-[40px] border border-[1px] [border-image-source:linear-gradient(180deg,#FFFFFF_0%,#393939_100%)] [border-image-slice:1] lg:mt-[82px] mt-[30px] relative">
              <img src={DownArrow} alt="image" className="absolute bottom-[-42px] left-[120px] hidden lg:block" />
                <img src={InclusiveDesign} alt="image" className="w-12 mt-[40px]" />
                <h6 className="text-white mt-4 lg:text-[20px]">Inclusive Design</h6>
                <p className="text-white">We design products that are easy for all users to use.</p>
              </div>
              <div className="py-5 px-5 flex-column audit-box w-[96%] h-[250px] rounded-[18px] border border-[1px] [border-image-source:linear-gradient(360deg,#FFFFFF_0%,#393939_100%)] [border-image-slice:1] lg:mt-[00px] mt-[30px] relative">
              <img src={UpArrow} alt="image" className="absolute top-[-42px] left-[120px] hidden lg:block" />
                <img src={AssissitiveTechnology} alt="image" className="w-12 mt-[40px]" />
                <h6 className="text-white mt-4 lg:text-[20px]">Assistive Technology</h6>
                <p className="text-white">We add technology to help people with disabilities use products.</p>
              </div>
              <div className="py-5 px-5 flex-column audit-box w-[96%] h-[250px] rounded-[40px] border border-[1px] [border-image-source:linear-gradient(180deg,#FFFFFF_0%,#393939_100%)] [border-image-slice:1] lg:mt-[82px] mt-[30px] relative">
              <img src={DownArrow} alt="image" className="absolute bottom-[-42px] left-[120px] hidden lg:block" />
                <img src={ColorContrast} alt="image" className="w-12 mt-[40px]" />
                <h6 className="text-white mt-4 lg:text-[20px]">Color Contrast</h6>
                <p className="text-white">We make sure colors are easy to see and read.</p>
              </div>
              <div className="py-5 px-5 flex-column audit-box w-[96%] h-[250px] rounded-[18px] border border-[1px] [border-image-source:linear-gradient(360deg,#FFFFFF_0%,#393939_100%)] [border-image-slice:1]">
                <img src={UserTesting} alt="image" className="w-12 mt-[40px]" />
                <h6 className="text-white mt-4 lg:text-[20px]">User Testing</h6>
                <p className="text-white">We check your product to make it more accessible to everyone.</p>
              </div>
          </div>

        </Container>
      </section>


      <div className="hide-sec">
        <Footer />
      </div>

    </main>
  );
};

export default Accessibility;
