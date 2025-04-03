
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import Container from "./Container";
import Button from "./Button";
import logo from "../assets/logo.svg";
import { CgMenuRightAlt } from "react-icons/cg";

const NavLinks: React.FC<{ isMobile?: boolean; onClick?: () => void }> = ({
  isMobile,
  onClick,
}) => (
  <motion.ul
    className={`${isMobile
      ? "flex flex-col items-start px-8 py-2 space-y-10 bg-secondary-light2 text-white h-[60%] sm:h-full justify-center"
      : "hidden xl:flex items-center space-x-6"
      } font-semibold xl:font-normal`}
    initial={{ opacity: 0, x: isMobile ? -100 : 0 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: isMobile ? -100 : 0 }}
    transition={{ duration: 0.3 }}
  >
    {["UX Services +", "Portfolio +", "Blogs", "Contact", "Our Store"].map(
      (link, idx) => (
        <li
          key={idx}
          className="hover:text-black text-primary-dark hover:font-semibold font-medium transition-all text-2xl xl:text-base whitespace-nowrap"
          onClick={onClick}
        >
          <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to={idx === 1 ? "/portfolio" : idx === 2 ? "/blog-list" : idx === 3 ? "/contact-us" : ""}
          >
            {link}
          </Link>
        </li>
      )
    )}
  </motion.ul>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div
      className={`custom-navbar fixed top-0 left-0 w-full z-[120] transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
    >
      <Container>
        <nav className="flex items-center justify-between py-3 xl:py-2 relative z-50">
          {/* Logo */}
          <Link to="/" className="z-50">
            <img
              src={logo}
              alt="UIUXden Logo"
              className="max-w-[120px] sm:max-w-[150px]"
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden w-10 h-10 flex items-center justify-center rounded-full text-gray-900 hover:bg-gray-100 z-50 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IoClose size={24} /> : <CgMenuRightAlt size={24} />}
          </button>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isSearchOpen ? 0.5 : 1 }}
            transition={{ duration: 0.3 }}
            className="hidden xl:block"
          >
            <NavLinks />
          </motion.div>

          {/* Search and Button */}
          <div className="hidden xl:flex items-center space-x-8">
            <div className="flex items-center gap-3">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.input
                    type="text"
                    placeholder="Search..."
                    className="w-64 pe-3 ps-6 h-12 2xl:h-16 py-1 text-sm border rounded-full focus:ring-gray-300"
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
            <Button className="nav-button hidden sm:block" variant="primary">
              Let's talk
            </Button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="fixed inset-0 bg-secondary-light2 z-40"
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-full flex flex-col pt-20">
                  <NavLinks isMobile onClick={toggleMenu} />
                  <div className="px-8 mt-8">
                    <Button
                      className="w-full"
                      variant="primary"
                      onClick={toggleMenu}
                    >
                      Let's talk
                    </Button>
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
