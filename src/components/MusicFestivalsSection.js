import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

export const MusicFestivalsSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="music-festivals"
      className="min-h-screen flex items-center justify-center bg-[#f6f7f7] py-20"
    >
      <motion.div
        className="flex flex-col items-center justify-center h-full p-6 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <SectionHeader title="Music Festivals" highlightColor="bg-purple-300" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className={`relative aspect-square overflow-hidden rounded-lg shadow-md ${
                    index === 4 ? "col-span-2" : ""
                  }`}
                >
                  <Image
                    src="/testImage.png"
                    alt="Music Festival"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-2xl md:text-3xl font-light text-gray-700 mb-8 leading-relaxed">
              Our team has organized more than{" "}
              <span className="font-bold text-purple-600">
                500 music festivals
              </span>
              , bringing together music enthusiasts from diverse backgrounds to
              celebrate the universal language of music.
            </p>
            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Featured Event
              </h3>
              <p className="text-gray-600 italic">
                &quot;The production quality and artist lineup for our annual
                EDM festival exceeded all expectations.&quot;
              </p>
              <p className="text-gray-500 text-sm mt-2">
                - Sunburn Festival Team
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
