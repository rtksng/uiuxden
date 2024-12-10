import React, { useState } from "react";
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
  <ul
    className={`${
      isMobile
        ? "flex flex-col items-start px-8 py-2 space-y-10 bg-secondary-light2 text-white h-full justify-center"
        : "hidden md:flex items-center space-x-6 "
    } font-semibold md:font-normal`}
  >
    {["UX Services +", "Portfolio +", "Blogs", "Contact", "Our Store"].map(
      (link, idx) => (
        <li
          key={idx}
          className="hover:text-black hover:font-semibold transition-all  text-2xl md:text-base"
          onClick={onClick}
        >
          <Link to={idx === 1 ? "/portfolio" : ""}>{link}</Link>
        </li>
      )
    )}
  </ul>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <Container>
      <nav className="flex items-center justify-between py-5 lg:py-2 relative z-50">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="UIUXden Logo" className="max-w-[150px]" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden w-10 h-10 border flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100"
          onClick={toggleMenu}
        >
          <CgMenuRightAlt size={24} />
        </button>

        {/* Desktop Navigation */}
        <NavLinks />
        <div className="hidden lg:flex items-center space-x-8">
          {isSearchOpen && (
            <input
              type="text"
              placeholder="Search..."
              className="w-64 pe-3 ps-6 py-1 text-sm border rounded-full focus:ring-gray-300"
            />
          )}
          <button
            onClick={() => setIsSearchOpen((prev) => !prev)}
            className="p-4 rounded-full text-gray-500 hover:bg-gray-100"
          >
            <CiSearch size={32} />
          </button>
          <Button variant="primary">Let’s talk</Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-white shadow-md z-40"
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button
                className="absolute top-4 right-4 text-white"
                onClick={toggleMenu}
              >
                <IoClose color="#fff" size={32} />
              </button>
              <NavLinks isMobile onClick={toggleMenu} />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </Container>
  );
};

export default Navbar;
