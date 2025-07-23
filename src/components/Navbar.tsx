import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";
import Container from "./Container";
import Button from "./Button";
import logo from "../assets/logo.svg";
import Icon from "../assets/icons/Icons";

const NavLinks: React.FC<{ isMobile?: boolean; onClick?: () => void }> = ({
  isMobile,
  onClick,
}) => {
  const [firstLinkActive, setFirstLinkActive] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setFirstLinkActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.ul
      className={`${isMobile
        ? "flex flex-col items-start px-8 py-7 xl:py-2 space-y-7 xl:space-y-10 bg-white text-white h-auto xl:h-full justify-center border border-top"
        : "hidden xl:flex items-center space-x-6"
        } font-semibold xl:font-normal`}
      initial={{ opacity: 0, x: isMobile ? -100 : 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: isMobile ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {["UX Services", "Portfolio", "Blogs", "Contact", "Our Store"].map(
        (link, idx) => (
          <li
            key={idx}
            ref={idx === 0 ? dropdownRef : null}
            className={` w-full xl:w-auto hover:text-black hover:font-bold text-primary-dark font-medium transition-all text-base xl:text-base whitespace-nowrap services-link 
              ${idx === 0
                ? firstLinkActive
                  ? "relative minus pe-5"
                  : "relative plus pe-5"
                : ""
              }`}
            onClick={() => {
              if (idx === 0) {
                setFirstLinkActive((prev) => !prev);
              } else {
                onClick?.(); // close menu for all links except the first one
              }
            }}
          >
            {idx === 0 ? (
              <button
                type="button"
                className="relative inline-block text-left"
              >
                {link}
                <div
                  className={`px-4 xl:px-7 xl:bg-[#fff]  xl:border-[transparent]  xl:rounded-[10px]  xl:sm:left-[50px] xl:top-[60px] w-[100%] xl:w-[750px] xl:shadow-2xl transition-height  xl:transition-transform transform duration-300 xl:duration-500 ease-in-out  xl:absolute ${idx === 0 && firstLinkActive ? " mt-5 xl:mt-0 py-0  xl:p-9 translate-y-0 border-[#EDEDED] " : "h-[0] xl:-translate-y-10 overflow-hidden p-0 border-0"
                    }`}
                >
                  <div className="grid grid-cols-12 gap-4 sm:gap-6">

                    <div className=" sm:col-span-6 xl:col-span-4 col-span-12 flex flex-col gap-6 xl:gap-[36px]">
                      <Link to="/humanization" className="flex gap-[10px] group">
                        <span>
                          <Icon
                            name="humani"
                            color="#393939"
                            className="group-hover:text-[#3ABF88] transition-colors duration-300 w-[20px] xl:w-auto h-[20px] xl:h-auto"
                          />
                        </span>
                        <p className="text-[14px] sm:text-[16px] color-primary-dark font-normal group-hover:text-[#3ABF88] transition-colors duration-300">
                          Humanization
                        </p>
                      </Link>
                      <Link to="/ui-design" className="flex gap-[10px] group">
                        <span>
                          <Icon
                            name="uidesign"
                            color="#393939"
                            className="group-hover:text-[#3ABF88] transition-colors duration-300 w-[20px] xl:w-auto h-[20px] xl:h-auto"
                          />
                        </span>
                        <p className="text-[14px] sm:text-[16px] color-primary-dark font-normal group-hover:text-[#3ABF88] transition-colors duration-300">
                          UI Design
                        </p>
                      </Link>
                      <Link to="/ux-strategy" className="flex gap-[10px] group">
                        <span>
                          <Icon
                            name="uistrategy"
                            color="#393939"
                            className="group-hover:text-[#3ABF88] transition-colors duration-300 w-[20px] xl:w-auto h-[20px] xl:h-auto"
                          />
                        </span>
                        <p className="text-[14px] sm:text-[16px] color-primary-dark font-normal group-hover:text-[#3ABF88] transition-colors duration-300">
                          UX Strategy
                        </p>
                      </Link>
                    </div>

                    <div className=" sm:col-span-6 xl:col-span-4 col-span-12 flex flex-col gap-6 xl:gap-[36px]">
                      <Link to="/ui-branding" className="flex gap-[10px] group">
                        <span>
                          <Icon
                            name="productbranding"
                            color="#393939"
                            className="group-hover:text-[#3ABF88] transition-colors duration-300 w-[20px] xl:w-auto h-[20px] xl:h-auto"
                          />
                        </span>
                        <p className="text-[14px] sm:text-[16px] color-primary-dark font-normal group-hover:text-[#3ABF88] transition-colors duration-300">
                          Product Branding
                        </p>
                      </Link>
                      <Link to="/sustainable" className="flex gap-[10px] group">
                        <span>
                          <Icon
                            name="sustainable"
                            color="#393939"
                            className="group-hover:text-[#3ABF88] transition-colors duration-300 w-[20px] xl:w-auto h-[20px] xl:h-auto"
                          />
                        </span>
                        <p className="text-[14px] sm:text-[16px] color-primary-dark font-normal group-hover:text-[#3ABF88] transition-colors duration-300">
                          Sustainable UI/UX
                        </p>
                      </Link>
                      <Link to="/design-sprint" className="flex gap-[10px] group">
                        <span>
                          <Icon
                            name="designsprint"
                            color="#393939"
                            className="group-hover:text-[#3ABF88] transition-colors duration-300 w-[20px] xl:w-auto h-[20px] xl:h-auto"
                          />
                        </span>
                        <p className="text-[14px] sm:text-[16px] color-primary-dark font-normal group-hover:text-[#3ABF88] transition-colors duration-300">
                          Design Sprints
                        </p>
                      </Link>
                    </div>

                    <div className=" sm:col-span-6 xl:col-span-4 col-span-12 flex flex-col gap-6 xl:gap-[36px]">
                      <Link to="/ux-audit" className="flex gap-[10px] group">
                        <span>
                          <Icon
                            name="uxaudit"
                            color="#393939"
                            className="group-hover:text-[#3ABF88] transition-colors duration-300 w-[20px] xl:w-auto h-[20px] xl:h-auto"
                          />
                        </span>
                        <p className="text-[14px] sm:text-[16px] color-primary-dark font-normal group-hover:text-[#3ABF88] transition-colors duration-300">
                          Product UX Audit
                        </p>
                      </Link>
                      <Link to="/ux-consultancy" className="flex gap-[10px] group">
                        <span>
                          <Icon
                            name="uxconsult"
                            color="#393939"
                            className="group-hover:text-[#3ABF88] transition-colors duration-300 w-[20px] xl:w-auto h-[20px] xl:h-auto"
                          />
                        </span>
                        <p className="text-[14px] sm:text-[16px] color-primary-dark font-normal group-hover:text-[#3ABF88] transition-colors duration-300">
                          UX Consultancy
                        </p>
                      </Link>
                      <Link to="/accessiblity" className="flex gap-[10px] group">
                        <span>
                          <Icon
                            name="accessiblity"
                            color="#393939"
                            className="group-hover:text-[#3ABF88] transition-colors duration-300 w-[20px] xl:w-auto h-[20px] xl:h-auto"
                          />
                        </span>
                        <p className="text-[14px] sm:text-[16px] color-primary-dark font-normal group-hover:text-[#3ABF88] transition-colors duration-300">
                          Accessibility
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </button>
            ) : idx === 4 ? (
              <a
                href="https://www.uiuxden.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit"
              >
                {link}
              </a>
            ) : (
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to={
                  idx === 1
                    ? "/portfolio"
                    : idx === 2
                      ? "/blog-list"
                      : idx === 3
                        ? "/contact-us"
                        : "/"
                }
              >
                {link}
              </Link>
            )}


          </li>
        )
      )}
    </motion.ul>
  );
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className={`custom-navbar fixed top-0 left-0 w-full z-[120] transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
    >
      <Container>
        <nav className="flex items-center justify-between py-3 xl:py-2 relative z-50">
          <Link to="/" className="z-50">
            <img
              src={logo}
              alt="UIUXden Logo"
              className="max-w-[120px] sm:max-w-[150px]"
            />
          </Link>

          <button
            className="xl:hidden w-auto  h-10 flex items-center justify-center rounded-full text-gray-900 hover:bg-gray-100 z-50 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IoClose size={24} /> : <CgMenuRightAlt size={24} />}
          </button>

          <motion.div
            initial={{ opacity: 1 }}
            // animate={{ opacity: isSearchOpen ? 0.5 : 1 }}
            transition={{ duration: 0.3 }}
            className="hidden xl:block"
          >
            <NavLinks />
          </motion.div>

          <div className="hidden xl:flex items-center space-x-8">
            <div className="flex items-center gap-3">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.input
                    type="text"
                    placeholder="Search..."
                    className="w-64 pe-3 ps-6 h-[40px] 2xl:h-[50px] py-1 text-sm border rounded-full focus:outline-[#d6d6d6]"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "16rem", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
              <button
                onClick={() => setIsSearchOpen((prev) => !prev)}
                className="2xl:p-4 p-2 rounded-full text-gray-500 hover:bg-gray-100"
                aria-label="Search"
              >
                <CiSearch size={32} />
              </button>
            </div>
            <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
              <Button className="nav-button hidden sm:block" variant="primary">
                Let's talk
              </Button>
            </Link>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="fixed inset-0 bg-white z-40"
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-full flex flex-col mt-16 xl:mt-20 border-top border-[red]">
                  <NavLinks isMobile onClick={toggleMenu} />
                  <div className="px-8 mt-4 xl:mt-8">
                    <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
                      <Button className="w-full" variant="primary" onClick={toggleMenu}>
                        Let's talk
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
