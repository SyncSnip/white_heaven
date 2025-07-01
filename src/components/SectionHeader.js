// src/components/SectionHeader.jsx
import { motion } from "framer-motion";

export const SectionHeader = ({ title, highlightColor }) => {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div className="relative mb-12" variants={titleVariants}>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 relative z-10">
        {title}
      </h2>
      <div
        className={`absolute -bottom-3 left-0 w-full h-3 ${highlightColor} opacity-50 z-0`}
      ></div>
    </motion.div>
  );
};
