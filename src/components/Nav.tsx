import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoMark from "../assets/logo-text.png";
import { GRADIENT_BG } from "../utils/theme";

const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <nav className="sticky top-0 z-50 bg-base-100/90 backdrop-blur border-b border-base-300">
      <div className="max-w-7xl lg:max-w-[85%] md:max-w-[95%] sm:max-w-[97%] mx-auto flex items-center justify-between px-4 py-3">

        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>


        <div className="flex items-center gap-2 lg:flex-none flex-1 justify-center lg:justify-start">
          <img src={LogoMark} alt="DevStack" className="h-7 w-auto sm:h-8 sm:w-auto object-contain" />

        </div>


        <ul className="hidden lg:flex gap-8 font-medium">
          {navLinks.map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:text-primary transition-colors"
            >
              {link}
            </li>
          ))}
        </ul>


        <div className="flex items-center gap-0 sm:gap-2">
          <button className="btn rounded-full bg-transparent border-none font-semibold hover:text-primary transition-colors">
            Sign In
          </button>
          <button
            className={`btn btn-sm sm:btn-md rounded-full text-white border-none ${GRADIENT_BG}`}
          >
            Sign Up
          </button>
        </div>
      </div>


      {isMenuOpen && (
        <ul className="lg:hidden flex flex-col gap-3 px-4 pb-4 font-medium border-t border-base-300 pt-3">
          {navLinks.map((link) => (
            <li key={link} onClick={() => setIsMenuOpen(false)} className="cursor-pointer">
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;

