import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const ImageStack = ({ collegeImages, currentImageIndex, imageStackRef }) => {
  return (
    <div
      ref={imageStackRef}
      className="relative h-full flex items-center justify-center"
    >
      <div className="relative w-full max-w-lg h-[80%]">
        <AnimatePresence>
          {collegeImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
              initial={{
                opacity: index === currentImageIndex ? 1 : 0.5,
                scale:
                  index === currentImageIndex
                    ? 1
                    : 0.95 - (currentImageIndex - index) * 0.05,
                x:
                  index === currentImageIndex
                    ? 0
                    : (currentImageIndex - index) * 20,
                y:
                  index === currentImageIndex
                    ? 0
                    : (currentImageIndex - index) * 20,
                zIndex:
                  collegeImages.length - Math.abs(currentImageIndex - index),
              }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0.5,
                scale:
                  index === currentImageIndex
                    ? 1
                    : 0.95 - (currentImageIndex - index) * 0.05,
                x:
                  index === currentImageIndex
                    ? 0
                    : (currentImageIndex - index) * 20,
                y:
                  index === currentImageIndex
                    ? 0
                    : (currentImageIndex - index) * 20,
                zIndex:
                  collegeImages.length - Math.abs(currentImageIndex - index),
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{
                display:
                  index >= currentImageIndex - 1 && index <= currentImageIndex
                    ? "block"
                    : "none",
              }}
            >
              <Image
                src={image}
                alt={`College Festival ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              {index === currentImageIndex && (
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                  {index + 1} / {collegeImages.length}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-60" />
        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-yellow-500 rounded-full opacity-80" />
        <div className="absolute top-1/2 -right-8 w-4 h-4 bg-yellow-300 rounded-full opacity-40" />
      </div>
    </div>
  );
};
