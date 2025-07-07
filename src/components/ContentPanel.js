import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const ContentPanel = ({ isContentOpen }) => {
  const contentVariants = {
    closed: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      {isContentOpen && (
        <motion.div
          className="fixed top-0 left-0 h-full w-1/2 md:block hidden bg-gradient-to-b bg-white text-gray-800 z-50 shadow-2xl"
          initial="closed"
          animate="open"
          exit="closed"
          variants={contentVariants}
        >
          <div className="flex flex-col items-center justify-center h-full p-6">
            <Image
              src="/whe.png"
              alt="Logo"
              width={400} // try larger value
              height={400}
              className="w-[50%] h-auto"
              priority
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
