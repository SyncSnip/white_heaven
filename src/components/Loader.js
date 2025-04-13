// components/Loader.js
"use client";
import { motion } from "framer-motion";

const Loader = ({ onComplete }) => {
  // White screen animation variants (slides in from left)
  const screenVariants = {
    initial: { width: "0%", x: 0 },
    animate: {
      width: "100%",
      x: 0,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
    exit: { width: "100%", x: "100%", transition: { duration: 0.5 } },
  };

  // First logo animation variants (fade out)
  const logoVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 0, transition: { delay: 1, duration: 0.5 } },
  };

  // Second logo animation variants (fade in)
  const secondLogoVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 1, duration: 0.5 } },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      initial="initial"
      animate="animate"
      exit="exit"
      onAnimationComplete={onComplete}
    >
      {/* White Screen (slides from left) */}
      <motion.div
        className="absolute top-0 left-0 h-full bg-white z-10"
        variants={screenVariants}
      />

      {/* Logo Container */}
      <div className="relative w-[80%] max-w-[300px] sm:max-w-[400px] h-auto z-20">
        {/* First Logo */}
        <motion.div variants={logoVariants} className="absolute inset-0">
          <img
            src="/logoonblack.png" // First logo
            alt="Logo"
            className="w-full h-auto object-contain"
            onError={() => console.error("Failed to load /logoonblack.png")}
          />
        </motion.div>
        {/* Second Logo */}
        <motion.div variants={secondLogoVariants} className="absolute inset-0">
          <img
            src="/logoWhiteHeaven.png" // Second logo
            alt="Second Logo"
            className="w-full h-auto object-contain"
            onError={() => console.error("Failed to load /logoWhiteHeaven.png")}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
