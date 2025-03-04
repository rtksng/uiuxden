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
// import { LuDribbble } from "react-icons/lu";
import { SiBehance } from "react-icons/si";
import Container from "./Container";
import Button from "./Button";
import Consult from "./Consult";
import Logowhite from "../assets/logo-white.svg";

const Footer: React.FC<{
  consultData?: {
    heading: string;
    subheading: string;
    boldsubheading: string;
    buttonText: string;
  };
}> = ({ consultData }) => (
  <>
    {/* <Consult
      heading={consultData?.heading}
      subheading={consultData?.subheading}
      boldsubheading={consultData?.boldsubheading}
      buttonText={consultData?.buttonText}
    /> */}
    <footer>
      <div className="bg-secondary-dark2">
        <Container>
          <div className="grid grid-cols-12 py-5 gap-5 2xl:py-10 ">
            <div className="col-span-12  md:flex md:justify-center items-center gap-6 lg:flex-wrap my-5 2xl:my-0">
              <p className="text-white text-center md:text-end text-xl 2xl:text-[28px] font-medium 2xl:text-end">
                Unlock Your Product’s Potential with a Free Audit
              </p>
              <div className="flex justify-center">
                <button
                  className="text-[#1A1A1A] !px-5 2xl:!px-[60px] !py-3 2xl:!py-[24px] text-sm 2xl:text-[22px] mt-5 md:mt-0 !ring-0 rounded-full bg-contactus-gradient font-medium">
                  Consult Us Now
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-radial-gradient md:pt-16 pt-8 relative">
        <Container>
          <div className="flex flex-col sm:flex-row flex-wrap sm:justify-between">
            <div className="inline-block mb-5 sm:mb-8 sm:w-[30%] lg:w-[40%] sm:pr-8 lg:pr-[90px]">
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
                <p className="text-[#1A1A1A] text-xl 2xl:text-2xl font-semibold my-4 sm:mt-[50px] sm:mb-[30px] ">
                  Book a strategy for your business with our UX experts directly.
                </p>
                <div className="flex justify-start">
                  <Button
                    variant="secondary"
                    className="border !px-5 2xl:!px-[24px] !py-3 2xl:!py-[18px] text-sm 2xl:text-base border-primary-dark2 sm:mt-5 md:mt-0  !ring-0 text-primary-dark2 hover:text-primary-dark2 rounded-full">
                    Get UX Expert Now
                  </Button>
                </div>
              </div>
            </div>
            <div className=" sm:mb-8 sm:w-[70%] lg:w-[60%] flex flex-col sm:flex-row flex-wrap sm:justify-between lg:gap-8">
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
                          to={generatePath(title, link)}
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
    </footer>
  </>
);

const getLinks = (section: string): string[] => {
  const links: { [key: string]: string[] } = {
    Services: [
      "Product UX Audit",
      "Design Sprints",
      "UX Consultancy",
      "Accessibility",
      "UX Strategy",
      "UI Branding",
    ],
    Links: [
      "About Agency",
      "Latest News & Blog",
      "Meet The Team",
      "Popular Services",
      "Testimonials",
      "Need a Career?",
    ],
    Special: [
      "Market Place",
      "Brands",
      "NFT Design",
      "Admin Theme",
      "Website Theme",
      "App Theme",
    ],
    About: ["About", "Leadership", "Blogs", "Contact us", "Help", "Privacy"],
  };
  return links[section] || [];
};

const generatePath = (title: string, link: string) => {
  const cleanedTitle = title
    .trim()
    .toLowerCase()
    .replace(/^\/|\/$/g, "");
  const cleanedLink = link
    .trim()
    .toLowerCase()
    .replace(/^\/|\/$/g, "");
  if (cleanedTitle === cleanedLink) {
    return `/${cleanedLink}`;
  }

  return `/${cleanedTitle}/${cleanedLink}`;
};

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
