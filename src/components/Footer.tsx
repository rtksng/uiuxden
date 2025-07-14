import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaPinterest,
  FaMedium,
} from "react-icons/fa6";
import { PiDribbbleLogoFill } from "react-icons/pi";
import { SiBehance } from "react-icons/si";
import Container from "./Container";
import Button from "./Button";

const Footer: React.FC<{
  consultData?: {
    heading: string;
    subheading: string;
    boldsubheading: string;
    buttonText: string;
  };
}> = () => (
  <>
    {/* <Consult
      heading={consultData?.heading}
      subheading={consultData?.subheading}
      boldsubheading={consultData?.boldsubheading}
      buttonText={consultData?.buttonText}
    /> */}
    <footer className="custom-footersec">
      <div className="bg-secondary-dark2">
        <Container>
          <div className="grid grid-cols-12 py-5 gap-5 2xl:py-10 ">
            <div className="col-span-12  md:flex md:justify-center items-center gap-6 lg:flex-wrap my-5 2xl:my-0">
              <p className="text-white text-center md:text-end text-xl 2xl:text-[28px] font-medium 2xl:text-end">
                Unlock Your Product’s Potential with a Free Audit
              </p>
              <div className="flex justify-center">
                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  to={"/contact-us"}
                >
                  <Button
                    variant="secondary"
                    className=" gradient-btn border !px-5 2xl:!px-[46px] !py-3 2xl:!py-[20px] !font-semibold text-sm 2xl:text-base border-white mt-5 md:mt-0  !ring-0 text-white hover:text-primary-dark2 rounded-full"
                  >
                    Consult Us Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="gradient-sec md:pt-16 pt-8 relative">
        <Container>
          <div className="flex flex-col sm:flex-row flex-wrap sm:justify-between">
            <div className="inline-block mb-5 sm:mb-8 sm:w-[30%] lg:w-[35%] sm:pr-8 lg:pr-[90px]">
              <div className="">
                <Link to="/" className="z-50">
                  <img
                    src={logo}
                    alt="UIUXden Logo"
                    className="max-w-[120px] sm:max-w-[150px]"
                  />
                </Link>
              </div>
              <div>
                <p className="text-[#1A1A1A] text-[18px] font-semibold my-4 sm:mt-[50px] sm:mb-[30px] ">
                  Book a strategy for your business with our UX experts directly.
                </p>
                <div className="flex justify-start">
                  <Link
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    to={"/contact-us"}
                  >
                    <Button
                      variant="secondary"
                      className="border !px-5 2xl:!px-[24px] !py-3 2xl:!py-[18px] text-sm 2xl:text-base border-primary-dark2 sm:mt-5 md:mt-0  !ring-0 text-primary-dark2 hover:text-primary-dark2 rounded-full" >
                      Get UX Expert Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className=" sm:mb-8 sm:w-[70%] lg:w-[65%] flex flex-wrap sm:justify-between ">

              <div className="inline-block mb-8 w-[100%] sm:w-[50%] sm:border-r border-[#A2C5A3] border-solid">
                <p className="text-primary-dark2 font-semibold text-[26px] mb-3 sm:mb-4">
                  Services
                </p>
                <div className="w-[100%] flex">
                  <ul className=" space-y-2 sm:space-y-4 w-[50%] ">
                    <li className="text-primary-dark2 text-[14px]">
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        to={'/humanization'}
                      >
                        Humanization
                      </Link>
                    </li>
                    <li className="text-primary-dark2 text-[14px]">
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        to={'/ui-design'}
                      >
                        UI Design
                      </Link>
                    </li>
                    <li className="text-primary-dark2 text-[14px]">
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        to={'/ux-strategy'}
                      >
                        UX Strategy
                      </Link>
                    </li>
                    <li className="text-primary-dark2 text-[14px]">
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        to={'/ui-branding'}
                      >
                        Product Branding
                      </Link>
                    </li>
                  </ul>
                  <ul className=" space-y-2 sm:space-y-4 w-[50%]">
                    <li className="text-primary-dark2 text-[14px]">
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        to={'/sustainable'}
                      >
                        Sustainable UI/UX
                      </Link>
                    </li>
                    <li className="text-primary-dark2 text-[14px]">
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        to={'/design-sprint'}
                      >
                        Design Sprints
                      </Link>
                    </li>
                    <li className="text-primary-dark2 text-[14px]">
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        to={'/ux-audit'}
                      >
                        Product UX Audit
                      </Link>
                    </li>
                    <li className="text-primary-dark2 text-[14px]">
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        to={'/ux-consultancy'}
                      >
                        UX Consultancy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="inline-block mb-8 w-[100%] sm:w-[50%] sm:ps-20">
                <p className="text-primary-dark2 font-semibold text-[26px] mb-3 sm:mb-4">
                  More Links
                </p>
                <div className="w-[100%] flex">
                  <ul className=" space-y-2 sm:space-y-4 w-[50%] ">
                    <li className="text-primary-dark2 text-[14px]">
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        to={'/about'}
                      >
                        About
                      </Link>
                    </li>
                    <li className="text-primary-dark2 text-[14px]">
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        to={'/blog-list'}
                      >
                        Blogs
                      </Link>
                    </li>
                    <li className="text-primary-dark2 text-[14px]">
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        to={''}
                      >
                        Case Studies
                      </Link>
                    </li>
                  </ul>
                  <ul className=" space-y-2 sm:space-y-4 w-[50%] ">
                    <li className="text-primary-dark2 text-[14px]">

                      <a
                        href="https://www.uiuxden.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-inherit"
                      >
                        Store
                      </a>


                    </li>
                    <li className="text-primary-dark2 text-[14px]">
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        to={'/contact-us'}
                      >
                        Contact Us
                      </Link>
                    </li>

                    <li className="text-primary-dark2 text-[14px]">
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        to={''}
                      >
                        Privacy Policy
                      </Link>
                    </li>

                  </ul>
                </div>

              </div>
            </div>















            {/* <div className=" sm:mb-8 sm:w-[70%] lg:w-[65%] flex flex-col sm:flex-row flex-wrap sm:justify-between lg:gap-8">
              {["Services", "Links", "Special", "About"].map((title, idx) => (
                <div key={idx} className="inline-block mb-8">
                  <p className="text-primary-dark2 font-semibold text-[26px] mb-3 sm:mb-4">
                    {title}
                  </p>
                  <ul className=" space-y-2 sm:space-y-4">
                    {getLinks(title).map((link, i) => (
                      <li key={i} className="text-primary-dark2">
                        <Link
                          onClick={() => {
                            window.scrollTo(0, 0);
                          }}
                          to={link}
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div> */}



          </div>
        </Container>
        <div className="py-5  border-t border-black w-full">
          <Container>
            <div className="flex justify-between items-center flex-wrap gap-4">
              <p className="text-[14px] text-primary-dark2">
                All rights reserved by UIUX DEN. 2025
              </p>
              <div className="flex flex-wrap gap-4">
                {getSocialLinks().map(({ Icon, url, color }, i) => (
                  <Link
                    key={i}
                    to={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[44px] h-[44px] p-[10px] bg-white rounded-[10px] flex justify-content-center items-center"
                  >
                    <Icon size={32} style={{ color }} />
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </footer >
  </>
);

const getSocialLinks = () => [
  { Icon: FaTwitter, url: "https://twitter.com", color: "#1EA1F2" },
  { Icon: FaFacebook, url: "https://facebook.com", color: "#0062E0" },
  { Icon: FaLinkedin, url: "https://linkedin.com", color: "#0A66C2" },
  { Icon: FaInstagram, url: "https://instagram.com", color: "#E1306C" },
  { Icon: PiDribbbleLogoFill, url: "https://dribbble.com", color: "#C32361" },
  { Icon: SiBehance, url: "https://behance.net", color: "#191919" },
  { Icon: FaPinterest, url: "https://pinterest.com", color: "#BB0F23" },
  { Icon: FaMedium, url: "https://medium.com", color: "#000000" },
];

export default Footer;
