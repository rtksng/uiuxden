import React, { useState } from "react";
import Container from "./Container";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import Button from "./Button";
const NavLinks: React.FC<{ isMobile?: boolean }> = ({ isMobile }) => (
  <ul
    className={`${
      isMobile
        ? "flex flex-col items-start px-4 py-2 space-y-4"
        : "hidden md:flex items-center space-x-6"
    } text-gray-700`}
  >
    <li>
      <Link to="">UX Services +</Link>
    </li>
    <li>
      <Link to="">Portfolio +</Link>
    </li>
    <li>
      <Link to="">Blogs</Link>
    </li>
    <li>
      <Link to="">Contact</Link>
    </li>
    <li>
      <Link to="">Our Store</Link>
    </li>
  </ul>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <Container>
      <nav className="flex items-center justify-between py-2  lg:py-9  ">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="UIUXden Logo" />
        </div>

        <button
          className="md:hidden flex items-center justify-center w-8 h-8 border rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <NavLinks />
        <div className="flex items-center space-x-8">
          <div className="flex gap-2">
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search..."
                className=" w-32 md:w-64 pe-3 ps-6 py-1 text-sm border rounded-full focus:outline-none focus:ring focus:ring-gray-300 transition-all"
              />
            )}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="flex items-center justify-center transitioin-all p-4  rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <CiSearch size={32} />
            </button>
          </div>

          <Button variant="primary">Let’s talk</Button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-14 left-0 w-full bg-white shadow-md md:hidden">
            <NavLinks isMobile />
          </div>
        )}
      </nav>
    </Container>
  );
};

export default Navbar;
