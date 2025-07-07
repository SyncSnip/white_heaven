import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

export const AboutSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-50"
    >
      <motion.div
        className="flex flex-col items-center justify-center h-full p-6 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <SectionHeader title="About Us" highlightColor="bg-yellow-300" />
        <div className="bg-white p-8 mt-8 rounded-2xl shadow-xl w-full">
          <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
            <p>
              <strong className="text-slate-900 font-semibold">
                White Heaven Entertainments Pvt. Ltd.
              </strong>{" "}
              is a premier live entertainment and artist programming company
              that has been revolutionizing the event experience since{" "}
              <span className="font-medium text-black">2013</span>.
            </p>

            <p>
              From{" "}
              <span className="text-yellow-500 font-medium">
                stadium-sized spectacles
              </span>{" "}
              to intimate cultural showcases, we deliver{" "}
              <span className="font-medium">end-to-end curation</span>,
              immersive{" "}
              <span className="font-medium">arena production design</span>, and
              flawless show execution.
            </p>

            <p>
              Our vibrant universe includes{" "}
              <span className="font-semibold text-indigo-600">music</span>,{" "}
              <span className="font-semibold text-pink-500">art</span>,{" "}
              <span className="font-semibold text-green-600">comedy</span>,{" "}
              <span className="font-semibold text-blue-500">storytelling</span>,
              and more — working with top-tier talent to craft unforgettable
              audience experiences.
            </p>

            <p>
              Whether it&apos;s a{" "}
              <span className="text-black font-medium">headline concert</span>,
              a{" "}
              <span className="text-black font-medium">
                multi-genre festival
              </span>
              , or a stunning{" "}
              <span className="text-black font-medium">visual production</span>,
              we create moments that echo long after the lights fade.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
