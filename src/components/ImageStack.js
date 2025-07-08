import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export const ImageStack = ({ collegeImages, currentImageIndex, isMobile, setCurrentImageIndex }) => {
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const minSwipeDistance = 50; // Minimum swipe distance to trigger navigation
  const carouselRef = useRef(null); // Ref for the carousel container

  // Prevent page scrolling during swipe
  useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault();
    };

    const element = carouselRef.current;
    if (isMobile && element) {
      element.addEventListener("touchmove", preventScroll, { passive: false });
    }

    return () => {
      if (isMobile && element) {
        element.removeEventListener("touchmove", preventScroll);
      }
    };
  }, [isMobile]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = touchStartX.current;
    console.log("Touch Start:", touchStartX.current); // Debugging
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
    console.log("Touch Move:", touchEndX.current); // Debugging
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    console.log("Touch End - Distance:", distance); // Debugging
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      console.log("Left Swipe - Next Image"); // Debugging
      setDirection(1);
      setCurrentImageIndex((prev) =>
        prev === collegeImages.length - 1 ? 0 : prev + 1
      );
    } else if (isRightSwipe) {
      console.log("Right Swipe - Previous Image"); // Debugging
      setDirection(-1);
      setCurrentImageIndex((prev) =>
        prev === 0 ? collegeImages.length - 1 : prev - 1
      );
    }
  };

  if (isMobile) {
    return (
      <div
        ref={carouselRef}
        className="relative w-full max-w-md mx-auto h-[50vh] touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0 rounded-xl overflow-hidden shadow-lg"
            custom={direction}
            initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src={collegeImages[currentImageIndex].src}
              alt={collegeImages[currentImageIndex].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-xl p-4 rounded-xl shadow-xl">
              <h3 className="text-lg font-semibold text-white drop-shadow-md text-center">
                {collegeImages[currentImageIndex].title}
              </h3>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={() => {
            console.log("Previous Button Clicked"); // Debugging
            setDirection(-1);
            setCurrentImageIndex((prev) =>
              prev === 0 ? collegeImages.length - 1 : prev - 1
            );
          }}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md"
          aria-label="Previous image"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            console.log("Next Button Clicked"); // Debugging
            setDirection(1);
            setCurrentImageIndex((prev) =>
              prev === collegeImages.length - 1 ? 0 : prev + 1
            );
          }}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md"
          aria-label="Next image"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    );
  }

  // Original stacked image effect for desktop
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
                    : "none",
              }}
            >
              <Image
                src={image.src}
                alt={image.title || "whiteheaven"}
                fill
                className="object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" /> */}
              {index === currentImageIndex &&  image?.title && (
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-xl p-4 sm:p-5 rounded-xl shadow-xl">
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