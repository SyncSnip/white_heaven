import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

export const AboutSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white"
    >
      <motion.div
        className="flex flex-col items-center justify-center h-full p-6 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <SectionHeader title="About Us" highlightColor="bg-yellow-300" />
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div className="bg-[#f6f7f7] p-6 rounded-lg shadow-sm md:col-span-2">
            <p className="text-slate-600 mb-4">
              White Heaven Entertainments Pvt. Ltd. is a leading live
              entertainment and artist programming company that has been
              redefining the experience of events since 2013.
            </p>
            <p className="text-slate-600">
              From stadium-sized spectacles to intimate cultural showcases, we
              specialize in end-to-end curation, arena production design, and
              seamless execution of shows.
            </p>
            <p className="text-slate-600">
              Our universe spans across music, art, comedy, storytelling, and
              beyond — collaborating with top-tier talent and creating unique
              experiences tailored for every audience and moment.
            </p>
            <p className="text-slate-600">
              Whether it's a headline concert, a multi-genre festival, or a
              visual production that lights up the night, we design moments that
              echo long after the lights go down.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
