import { motion } from "framer-motion";
import Image from "next/image";

export const Navbar = ({ scrollToSection, openMenu, isMenuOpen }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => scrollToSection("home")}>
            <Image
              src="/navLogo.png"
              width={120}
              height={40}
              className="md:w-32 w-24"
              alt="Logo"
            />
          </button>
          <button
            onClick={openMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="text-gray-800 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
