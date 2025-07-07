import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

export const CollaborationsSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const collaborations = [
    {
      img: "/testImage.png",
      name: "MTV India",
      desc: "Music Awards Production Partner",
    },
    {
      img: "/testImage.png",
      name: "VH1",
      desc: "Supersonic Festival Curators",
    },
    { img: "/testImage.png", name: "Red Bull", desc: "Campus Event Series" },
    {
      img: "/testImage.png",
      name: "Amazon Prime",
      desc: "Concert Series Producer",
    },
  ];

  return (
    <section
      id="collaborations"
      className="min-h-screen flex items-center justify-center bg-white py-20"
    >
      <motion.div
        className="flex flex-col items-center justify-center h-full p-6 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <SectionHeader title="Why Choose Us?" highlightColor="bg-blue-300" />
        <p className="text-2xl md:text-3xl font-light text-gray-700 mb-12 text-center max-w-4xl mx-auto">
          Our success is further amplified by our collaborations with
          high-profile events and clients, solidifying our position as a trusted
          partner in the industry.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {collaborations.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-[#f6f7f7] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 bg-blue-50 p-8 rounded-xl max-w-4xl w-full">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Success Stories
          </h3>
          <p className="text-gray-600 text-center">
            &quot;Working with White Heaven elevated our brand presence at college
            festivals nationwide. Their understanding of youth culture is
            unmatched.&quot;
          </p>
          <p className="text-gray-500 text-sm mt-4 text-center">
            - Red Bull Marketing Team
          </p>
        </div>
      </motion.div>
    </section>
  );
};
