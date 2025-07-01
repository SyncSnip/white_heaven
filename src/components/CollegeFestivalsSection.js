import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { ImageStack } from "./ImageStack";
import { LogoScroller } from "./LogoScroller";

export const CollegeFestivalsSection = ({
  sectionRef,
  collegeImages,
  currentImageIndex,
}) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      ref={sectionRef}
      id="college-festivals"
      className="relative"
      style={{ height: `${collegeImages.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center bg-white">
        <motion.div
          className="flex items-center justify-center h-full p-4 sm:p-6 max-w-7xl mx-auto w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center h-full w-full">
            {/* Left Content (Sticky) */}
            <div className="flex flex-col justify-center min-h-[300px] h-full">
              <SectionHeader
                title="College Festivals"
                highlightColor="bg-yellow-300"
              />
              <div className="space-y-6 sm:space-y-8">
                <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-700 leading-relaxed">
                  We have curated over{" "}
                  <span className="font-bold text-yellow-600 block">
                    200+ Colleges
                  </span>
                  <span className="font-bold text-yellow-600 block">
                    500+ Fests
                  </span>
                  <span className="font-bold text-yellow-600 block">
                    1000+ Artists
                  </span>
                </p>
                <div className="flex space-x-2">
                  {collegeImages.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-6 sm:w-8 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-yellow-500"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="pt-4 sm:pt-6">
                  <div className="h-20 sm:h-24">
                    <LogoScroller />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content (Image Stack) */}
            <ImageStack
              collegeImages={collegeImages}
              currentImageIndex={currentImageIndex}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
