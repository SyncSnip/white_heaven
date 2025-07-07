
// Sidebar.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const Sidebar = ({ isMenuOpen, openMenu, scrollToSection, navLinks }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut", staggerChildren: 0.1 },
    },
  };

  const linkVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  const dropdownVariants = {
    closed: { height: 0, opacity: 0, transition: { duration: 0.3 } },
    open: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
  };

  const toggleDropdown = (linkName) => {
    setOpenDropdown(openDropdown === linkName ? null : linkName);
  };

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="fixed top-0 right-0 h-full md:w-1/2 w-full bg-[#f6f7f7] text-gray-700 z-50 shadow-2xl"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <div className="flex flex-col md:ml-20 ml-5 justify-center h-full space-y-4">
            {navLinks.map((link, i) => (
              <motion.div key={link.name} variants={linkVariants}>
                <div className="flex flex-col">
                  <button
                    onClick={() =>
                      link.subLinks
                        ? toggleDropdown(link.name)
                        : scrollToSection(link.href.substring(1))
                    }
                    className="flex items-center space-x-4"
                  >
                    {/* <span className="py-2.5 px-4 rounded-full text-xs text-gray-700 opacity-35">
                      {i < 9 ? `0${i + 1}` : i + 1}
                    </span> */}
                    <span className="md:text-xl text-lg font-semibold hover:text-gray-300 transition-colors cursor-pointer">
                      {link.name}
                    </span>
                    {link.subLinks && (
                      <svg
                        className={`h-5 w-5 transform transition-transform cursor-pointer ${
                          openDropdown === link.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </button>
                  {link.subLinks && (
                    <AnimatePresence>
                      {openDropdown === link.name && (
                        <motion.div
                          className="ml-12 mt-2 space-y-2"
                          variants={dropdownVariants}
                          initial="closed"
                          animate="open"
                          exit="closed"
                        >
                          {link.subLinks.map((subLink, subIndex) => (
                            <motion.button
                              key={subLink.name}
                              variants={linkVariants}
                              onClick={() => scrollToSection(subLink.href.substring(1))}
                              className="flex items-center space-x-4"
                            >
                              {/* <span className="py-1.5 px-3 rounded-full text-xs text-gray-700 opacity-35">
                                {i < 9 ? `0${i + 1}.${subIndex + 1}` : `${i + 1}.${subIndex + 1}`}
                              </span> */}
                              <span className="text-md font-medium hover:text-gray-300 transition-colors cursor-pointer">
                                {subLink.name}
                              </span>
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <button
            onClick={openMenu}
            className="absolute top-8 right-8 text-gray-700 hover:text-gray-900 cursor-pointer"
          >
            <svg
              className="h-10 w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};