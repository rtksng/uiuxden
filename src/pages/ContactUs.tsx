import Navbar from "../components/Navbar";
import Container from "../components/Container";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
const ContactUS = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main>
      <Navbar />
      <div
        className={`fixed top-0 left-0 w-full z-[120] transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      ></div>
      <Navbar />

      {/* ---------- Banner Section ---------- */}
      <div className="contactus-banner updated-contactus pt-[60px]">
        <Container>
          <div className="lg:h-[370px] flex justify-center items-center">
            <p className="mb-8 md:mb-4 text-[32px] lg:text-[50px] xl:text-[60px] 2xl:text-[80px] text-black text-center font-semibold leading-[unset] 2xl:leading-[115px]">
              Get in touch with us for collaborations, inquiries, or support!
            </p>
          </div>
          <div className="contact-from grid grid-cols-12 gap-8 2xl:gap-14 xl:h-[812px] p-0 h-auto mb-9 mb-xl-0
          ">
            <div className="col-span-12 lg:col-span-8">
              <form
                action="#"
                className="custom-form border-[#eee] border p-[30px] md:p-[50px] rounded-[40px] bg-white"
              >
                <div className="grid grid-cols-12">
                  <div className="col-span-12 sm:col-span-6 px-2 mb-5">
                    <label
                      htmlFor="firstName"
                      className="text-xl font-medium text-[#1A1A1A]"
                    >
                      First Name
                    </label>
                    <div className="relative mt-3">
                      <div className="svg-icon absolute top-[50%] right-[25px] -translate-y-[50%]">
                        <svg
                          width="18"
                          height="24"
                          viewBox="0 0 18 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 12C10.1867 12 11.3467 11.6481 12.3334 10.9888C13.3201 10.3295 14.0892 9.39246 14.5433 8.2961C14.9974 7.19975 15.1162 5.99335 14.8847 4.82946C14.6532 3.66558 14.0818 2.59648 13.2426 1.75736C12.4035 0.918247 11.3344 0.346802 10.1705 0.115291C9.00666 -0.11622 7.80026 0.00259973 6.7039 0.456726C5.60754 0.910851 4.67047 1.67989 4.01118 2.66658C3.35189 3.65328 3 4.81331 3 6C3.00159 7.59081 3.63424 9.11602 4.75911 10.2409C5.88399 11.3658 7.40919 11.9984 9 12ZM9 2C9.79113 2 10.5645 2.2346 11.2223 2.67412C11.8801 3.11365 12.3928 3.73836 12.6955 4.46927C12.9983 5.20017 13.0775 6.00444 12.9231 6.78036C12.7688 7.55629 12.3878 8.26902 11.8284 8.82843C11.269 9.38784 10.5563 9.7688 9.78036 9.92315C9.00444 10.0775 8.20017 9.99827 7.46927 9.69552C6.73836 9.39277 6.11365 8.88008 5.67412 8.22228C5.2346 7.56449 5 6.79113 5 6C5 4.93914 5.42143 3.92172 6.17157 3.17158C6.92172 2.42143 7.93913 2 9 2Z"
                            fill="#393939"
                          />
                          <path
                            d="M9 14C6.61386 14.0026 4.32622 14.9517 2.63896 16.639C0.951708 18.3262 0.00264685 20.6139 0 23C0 23.2652 0.105357 23.5196 0.292893 23.7071C0.48043 23.8946 0.734784 24 1 24C1.26522 24 1.51957 23.8946 1.70711 23.7071C1.89464 23.5196 2 23.2652 2 23C2 21.1435 2.7375 19.363 4.05025 18.0503C5.36301 16.7375 7.14348 16 9 16C10.8565 16 12.637 16.7375 13.9497 18.0503C15.2625 19.363 16 21.1435 16 23C16 23.2652 16.1054 23.5196 16.2929 23.7071C16.4804 23.8946 16.7348 24 17 24C17.2652 24 17.5196 23.8946 17.7071 23.7071C17.8946 23.5196 18 23.2652 18 23C17.9974 20.6139 17.0483 18.3262 15.361 16.639C13.6738 14.9517 11.3861 14.0026 9 14Z"
                            fill="#393939"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full p-4 outline-none border border-[#CBCBCB] rounded-[12px] pr-[60px]"
                        placeholder="Enter your first name"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6 px-2 mb-5">
                    <label
                      htmlFor="lastName"
                      className="text-xl font-medium text-[#1A1A1A]"
                    >
                      Last Name
                    </label>
                    <div className="relative mt-3">
                      <div className="svg-icon absolute top-[50%] right-[25px] -translate-y-[50%]">
                        <svg
                          width="18"
                          height="24"
                          viewBox="0 0 18 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 12C10.1867 12 11.3467 11.6481 12.3334 10.9888C13.3201 10.3295 14.0892 9.39246 14.5433 8.2961C14.9974 7.19975 15.1162 5.99335 14.8847 4.82946C14.6532 3.66558 14.0818 2.59648 13.2426 1.75736C12.4035 0.918247 11.3344 0.346802 10.1705 0.115291C9.00666 -0.11622 7.80026 0.00259973 6.7039 0.456726C5.60754 0.910851 4.67047 1.67989 4.01118 2.66658C3.35189 3.65328 3 4.81331 3 6C3.00159 7.59081 3.63424 9.11602 4.75911 10.2409C5.88399 11.3658 7.40919 11.9984 9 12ZM9 2C9.79113 2 10.5645 2.2346 11.2223 2.67412C11.8801 3.11365 12.3928 3.73836 12.6955 4.46927C12.9983 5.20017 13.0775 6.00444 12.9231 6.78036C12.7688 7.55629 12.3878 8.26902 11.8284 8.82843C11.269 9.38784 10.5563 9.7688 9.78036 9.92315C9.00444 10.0775 8.20017 9.99827 7.46927 9.69552C6.73836 9.39277 6.11365 8.88008 5.67412 8.22228C5.2346 7.56449 5 6.79113 5 6C5 4.93914 5.42143 3.92172 6.17157 3.17158C6.92172 2.42143 7.93913 2 9 2Z"
                            fill="#393939"
                          />
                          <path
                            d="M9 14C6.61386 14.0026 4.32622 14.9517 2.63896 16.639C0.951708 18.3262 0.00264685 20.6139 0 23C0 23.2652 0.105357 23.5196 0.292893 23.7071C0.48043 23.8946 0.734784 24 1 24C1.26522 24 1.51957 23.8946 1.70711 23.7071C1.89464 23.5196 2 23.2652 2 23C2 21.1435 2.7375 19.363 4.05025 18.0503C5.36301 16.7375 7.14348 16 9 16C10.8565 16 12.637 16.7375 13.9497 18.0503C15.2625 19.363 16 21.1435 16 23C16 23.2652 16.1054 23.5196 16.2929 23.7071C16.4804 23.8946 16.7348 24 17 24C17.2652 24 17.5196 23.8946 17.7071 23.7071C17.8946 23.5196 18 23.2652 18 23C17.9974 20.6139 17.0483 18.3262 15.361 16.639C13.6738 14.9517 11.3861 14.0026 9 14Z"
                            fill="#393939"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full p-4 outline-none border border-[#CBCBCB] rounded-[12px] pr-[60px]"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6 px-2 mb-5">
                    <label
                      htmlFor="emailId"
                      className="text-xl font-medium text-[#1A1A1A]"
                    >
                      Email Id
                    </label>
                    <div className="relative mt-3">
                      <div className="svg-icon absolute top-[50%] right-[25px] -translate-y-[50%]">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.0417 0H3.95833C2.9089 0.00129916 1.90282 0.432722 1.16076 1.19963C0.418698 1.96655 0.00125705 3.00633 0 4.09091L0 13.9091C0.00125705 14.9937 0.418698 16.0335 1.16076 16.8004C1.90282 17.5673 2.9089 17.9987 3.95833 18H15.0417C16.0911 17.9987 17.0972 17.5673 17.8392 16.8004C18.5813 16.0335 18.9987 14.9937 19 13.9091V4.09091C18.9987 3.00633 18.5813 1.96655 17.8392 1.19963C17.0972 0.432722 16.0911 0.00129916 15.0417 0ZM3.95833 1.63636H15.0417C15.5157 1.63733 15.9786 1.78488 16.3708 2.06002C16.7631 2.33517 17.0666 2.72532 17.2425 3.18027L11.1799 9.44673C10.7338 9.90598 10.1297 10.1638 9.5 10.1638C8.8703 10.1638 8.26624 9.90598 7.82008 9.44673L1.7575 3.18027C1.93337 2.72532 2.23694 2.33517 2.62916 2.06002C3.02138 1.78488 3.4843 1.63733 3.95833 1.63636ZM15.0417 16.3636H3.95833C3.32844 16.3636 2.72435 16.105 2.27895 15.6447C1.83356 15.1844 1.58333 14.5601 1.58333 13.9091V5.31818L6.70067 10.6036C7.44375 11.3697 8.45045 11.7998 9.5 11.7998C10.5495 11.7998 11.5563 11.3697 12.2993 10.6036L17.4167 5.31818V13.9091C17.4167 14.5601 17.1664 15.1844 16.721 15.6447C16.2756 16.105 15.6716 16.3636 15.0417 16.3636Z"
                            fill="#393939"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="emailId"
                        className="w-full p-4 outline-none border border-[#CBCBCB] rounded-[12px] pr-[60px]"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6 px-2 mb-5">
                    <label
                      htmlFor="lastName"
                      className="text-xl font-medium text-[#1A1A1A]"
                    >
                      Contact Number
                    </label>
                    <div className="relative mt-3">
                      <div className="svg-icon absolute top-[50%] right-[25px] -translate-y-[50%]">
                        <svg
                          width="16"
                          height="23"
                          viewBox="0 0 16 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 23H5C2.243 23 0 20.8505 0 18.2083V4.79167C0 2.14954 2.243 0 5 0H11C13.757 0 16 2.14954 16 4.79167V18.2083C16 20.8505 13.757 23 11 23ZM5 1.91667C3.346 1.91667 2 3.20658 2 4.79167V18.2083C2 19.7934 3.346 21.0833 5 21.0833H11C12.654 21.0833 14 19.7934 14 18.2083V4.79167C14 3.20658 12.654 1.91667 11 1.91667H5ZM10 18.2083C10 17.6793 9.552 17.25 9 17.25H7C6.448 17.25 6 17.6793 6 18.2083C6 18.7373 6.448 19.1667 7 19.1667H9C9.552 19.1667 10 18.7373 10 18.2083Z"
                            fill="#393939"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full p-4 outline-none border border-[#CBCBCB] rounded-[12px] pr-[60px]"
                        placeholder="Enter your contact number"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 px-2 mb-5">
                    <label
                      htmlFor="description"
                      className="text-xl font-medium text-[#1A1A1A]"
                    >
                      Project Description
                    </label>
                    <div className="relative mt-3">
                      <textarea
                        id="description"
                        rows={5}
                        className="w-full  border border-[#CBCBCB] resize-none p-4 outline-none rounded-[12px] pr-[60px]"
                        placeholder="Tell us little about the project "
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-span-12 px-2 mb-5">
                    <p className="text-xl font-medium text-[#1A1A1A]">
                      How can we help?
                    </p>
                    <ul className="flex flex-wrap justify-between items-center mt-5">
                      <li className="relative contactus-checkboxes mb-5">
                        <input
                          type="checkbox"
                          id="webdesign"
                          className="hidden"
                        />
                        <span className="border-2 inline-block absolute top-[50%]  -translate-y-[50%] pointer-events-none border-[#868686] w-[22px] h-[22px] rounded-[5px]"></span>
                        <label
                          htmlFor="webdesign"
                          className="text-lg pl-[28px] text-black font-medium block"
                        >
                          Website design
                        </label>
                      </li>
                      <li className="relative contactus-checkboxes mb-5">
                        <input
                          type="checkbox"
                          id="uxdesign"
                          className="hidden"
                        />
                        <span className="border-2 inline-block absolute top-[50%]  -translate-y-[50%] pointer-events-none border-[#868686] w-[22px] h-[22px] rounded-[5px]"></span>
                        <label
                          htmlFor="uxdesign"
                          className="text-lg pl-[28px] text-black font-medium block"
                        >
                          UX design
                        </label>
                      </li>
                      <li className="relative contactus-checkboxes mb-5">
                        <input
                          type="checkbox"
                          id="userresearch"
                          className="hidden"
                        />
                        <span className="border-2 inline-block absolute top-[50%]  -translate-y-[50%] pointer-events-none border-[#868686] w-[22px] h-[22px] rounded-[5px]"></span> 
                        <label
                          htmlFor="userresearch"
                          className="text-lg pl-[28px] text-black font-medium block"
                        >
                          User research
                        </label>
                      </li>
                      <li className="relative contactus-checkboxes mb-5">
                        <input
                          type="checkbox"
                          id="content"
                          className="hidden"
                        />
                        <span className="border-2 inline-block absolute top-[50%]  -translate-y-[50%] pointer-events-none border-[#868686] w-[22px] h-[22px] rounded-[5px]"></span>
                        <label
                          htmlFor="content"
                          className="text-lg pl-[28px] text-black font-medium block"
                        >
                          Content creation
                        </label>
                      </li>
                      <li className="relative contactus-checkboxes mb-5">
                        <input
                          type="checkbox"
                          id="strategy"
                          className="hidden"
                        />
                        <span className="border-2 inline-block absolute top-[50%]  -translate-y-[50%] pointer-events-none border-[#868686] w-[22px] h-[22px] rounded-[5px]"></span>
                        <label
                          htmlFor="strategy"
                          className="text-lg pl-[28px] text-black font-medium block"
                        >
                          Strategy & Consulting
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-12">
                    <button
                      type="submit"
                      className="bg-[#1A1A1A] p-4 text-2xl text-white font-medium sm:max-w-[200px] w-[100%] ms-auto block rounded-full duration-200 bg-primary-dark2 text-white hover:bg-transparent border-2 border-transparent hover:text-primary-dark hover:border-primary-dark  focus:ring-2 focus:ring-primary-dark"
                    >
                      Let’s talk
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-span-12 lg:col-span-4 flex flex-col justify-center lg:block">
              <div className="border-b border-b-[#818181] contact-rightsec lg:max-h-[410px] lg:h-[100%] rounded-[30px] p-10 xl:p-8 lg:px-6 2xl:px-12">
                <div className=" border-b border-b-[#818181] border-opacity-25 sm:border-opacity-100 pb-5 mb-5">
                  <p className="text-2xl lg:text-[28px] text-white text-center md:text-start font-semibold mb-2 pr-6">
                  Development Office
                  </p>  
                  <p className="text-white  text-opacity-60 sm:text-opacity-100 text-center md:text-start font-medium text-[16px] lg:text-xl pr-6">
                    55 Village Centre Place Suite 307, Mississauga Ontario
                    L4Z1V9 Canada
                  </p>
                </div>
                <div className=" border-b border-b-[#818181] border-opacity-25 sm:border-opacity-100 pb-5 mb-5">
                  <p className="text-2xl lg:text-[28px] text-white text-center md:text-start font-semibold mb-2">
                    Get in touch
                  </p>
                  <p className="text-white  text-opacity-60 sm:text-opacity-100 text-center md:text-start font-medium text-[16px] lg:text-xl">
                    +1 650 754 4091
                  </p>
                </div>
                <div className="">
                  <p className="text-2xl lg:text-[28px] text-white text-center md:text-start font-semibold mb-2">
                    Mail
                  </p>
                  <p className="text-white  text-opacity-60 sm:text-opacity-100 text-center md:text-start font-medium text-[16px] lg:text-xl">
                    sales@uiuxden.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </main>
  );
};

export default ContactUS;
