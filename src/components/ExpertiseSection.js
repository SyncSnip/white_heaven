import { motion } from "framer-motion";
import {SectionHeader} from "./SectionHeader";
import {Card} from "./Card";

export const ExpertiseSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="expertise"
      className="min-h-screen flex items-center justify-center bg-[#f6f7f7] pb-20"
    >
      <motion.div
        className="flex flex-col items-center justify-center h-full p-6 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <SectionHeader title="EXPERTISE" highlightColor="bg-green-300" />
        <div className="grid md:grid-cols-2 gap-8 w-full mt-6">
          <Card
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-green-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 3a4 4 0 0 0-4 4v1a4 4 0 0 0 0 8v1a4 4 0 0 0 4 4" />
                <path d="M16 3a4 4 0 0 1 4 4v1a4 4 0 0 1 0 8v1a4 4 0 0 1-4 4" />
                <path d="M12 13.5l-1.2-1.2a2.1 2.1 0 0 1 0-3 2.1 2.1 0 0 1 3 0 2.1 2.1 0 0 1 0 3L12 13.5z" />
              </svg>
            }
            title="DEEP UNDERSTANDING OF PREFERENCES"
            description={[
              "Our team possesses a deep understanding of music and entertainment preferences, keeping abreast of the latest trends and emerging talents in the industry.",
              "We leverage this knowledge to curate innovative and engaging entertainment solutions that resonate with our clients and captivate our audiences.",
            ]}
            highlightColor="green"
          />
          <Card
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-green-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="8" cy="8" r="5" />
                <circle cx="16" cy="8" r="5" />
                <path d="M9 8h6M15 8l-2 2 2 2" />
              </svg>
            }
            title="PREVIOUS COLLABORATIONS"
            description="Our track record of successful collaborations with renowned artists speaks volumes about our expertise and credibility in the industry. Some of our notable collaborations include [Sunidhi Chauhan, Shreya Ghosal, Amit Trivedi, Dhvani Bhanushali, Sukhwinder Singh, Krsna, Trap, Ravator], & many more where we have collaborated to create unforgettable performances and experiences."
            highlightColor="green"
          />
        </div>
      </motion.div>
    </section>
  );
};
