import { motion } from "framer-motion";
import {SectionHeader} from "./SectionHeader";
import {ImageStack} from "./ImageStack";

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
          className="flex items-center justify-center h-full p-6 max-w-7xl mx-auto w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center h-full w-full">
            <div className="flex flex-col justify-center h-full">
              <SectionHeader
                title="College Festivals"
                highlightColor="bg-yellow-300"
              />
              <div className="space-y-8">
                <p className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed">
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
                <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Our Expertise
                  </h3>
                  <p className="text-gray-600">
                    From intimate campus gatherings to massive inter-college
                    festivals, we bring the perfect blend of artists, production
                    quality, and unforgettable experiences to every event.
                  </p>
                </div>
                <div className="flex space-x-2">
                  {collegeImages.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-8 rounded-full transition-all duration-300 ${
                        index <= currentImageIndex
                          ? "bg-yellow-500"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
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
