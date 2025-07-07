import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { ImageStack } from "./ImageStack";
import { useEffect, useState } from "react";

export const ArtistBooking = ({
  sectionRef,
  images,
  currentImageIndex,
  setCurrentImageIndex,
  Topic,
  Description,
  imagePositionType = 1, // default to right
  showSideTitle = false,
}) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderMobileLayout = () => (
    <div className="py-12 px-4 flex flex-col items-center justify-center bg-white space-y-10">
      {/* Horizontal "Artist Booking" label for mobile */}
      <div className="text-gray-300 text-2xl font-light tracking-widest uppercase text-center">
        Artist Booking
      </div>

      {/* Image section */}
      <ImageStack
        collegeImages={images}
        currentImageIndex={currentImageIndex}
        isMobile={isMobile}
        setCurrentImageIndex={setCurrentImageIndex}
      />

      {/* Text content */}
      <div className="text-center max-w-2xl">
        <SectionHeader title={Topic} highlightColor="bg-blue-300" />
        <p className="text-base sm:text-lg font-light text-gray-700 leading-relaxed mt-6">
          {Description}
        </p>
      </div>
    </div>
  );

  const renderDesktopLayout = () => {
    const isImageLeft = imagePositionType === 2;

    return (
      <div className="sticky top-0 h-screen flex items-center justify-center bg-white">
        <motion.div
          className="relative flex items-center justify-center h-full p-6 max-w-7xl mx-auto w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          {/* Vertical text – positioned based on imagePositionType */}

          {showSideTitle && (
            <div
              className={`
                        absolute top-1/2 -translate-y-1/2 transform -rotate-90 origin-center
                        text-gray-300 text-3xl font-light tracking-widest uppercase
                        hidden lg:block
                        ${
                          isImageLeft
                            ? "right-0 translate-x-full"
                            : "left-0 -translate-x-full"
                        }
                    `}
            >
              Artist Booking
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full w-full">
            {isImageLeft && (
              <ImageStack
                collegeImages={images}
                currentImageIndex={currentImageIndex}
                isMobile={isMobile}
                setCurrentImageIndex={setCurrentImageIndex}
              />
            )}
            <div className="flex flex-col justify-center min-h-[300px] h-full">
              <SectionHeader title={Topic} highlightColor="bg-blue-300" />
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-700 leading-relaxed mt-6">
                {Description}
              </p>
            </div>
            {!isImageLeft && (
              <ImageStack
                collegeImages={images}
                currentImageIndex={currentImageIndex}
                isMobile={isMobile}
                setCurrentImageIndex={setCurrentImageIndex}
              />
            )}
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: isMobile ? "auto" : `${images.length * 100}vh` }}
    >
      {isMobile ? renderMobileLayout() : renderDesktopLayout()}
    </section>
  );
};
