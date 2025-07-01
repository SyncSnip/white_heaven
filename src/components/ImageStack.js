import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const ImageStack = ({ collegeImages, currentImageIndex }) => {
  return (
    <div className="relative h-full flex items-center justify-center">
      <div className="relative w-[80%] max-w-md sm:max-w-lg h-[50vh] sm:h-[60vh] md:h-[70vh]">
        <AnimatePresence>
          {collegeImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 rounded-xl overflow-hidden shadow-lg"
              initial={{
                opacity: index === currentImageIndex ? 1 : 0.5,
                y:
                  index < currentImageIndex
                    ? -80
                    : index > currentImageIndex
                    ? 80
                    : 0,
                scale: index === currentImageIndex ? 1 : 0.9,
                zIndex:
                  collegeImages.length - Math.abs(currentImageIndex - index),
              }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0.5,
                y:
                  index < currentImageIndex
                    ? -80
                    : index > currentImageIndex
                    ? 80
                    : 0,
                scale: index === currentImageIndex ? 1 : 0.9,
                zIndex:
                  collegeImages.length - Math.abs(currentImageIndex - index),
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{
                display:
                  index === currentImageIndex ||
                  index === currentImageIndex - 1 ||
                  index === currentImageIndex + 1
                    ? "block"
                    : "none", // Explicitly include first image
              }}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              {index === currentImageIndex && (
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-xl p-4 sm:p-5 rounded-xl shadow-xl ">
                  <h3 className="text-lg sm:text-xl font-semibold text-white drop-shadow-md text-center">
                    {image.title}
                  </h3>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
        <div className="absolute -top-3 -left-3 w-6 h-6 bg-yellow-400 rounded-full opacity-60" />
        <div className="absolute -bottom-3 -right-3 w-5 h-5 bg-yellow-500 rounded-full opacity-80" />
        <div className="absolute top-1/2 -right-6 w-4 h-4 bg-yellow-300 rounded-full opacity-40" />
      </div>
    </div>
  );
};
