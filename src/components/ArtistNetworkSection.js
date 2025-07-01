import { motion } from "framer-motion";
import {SectionHeader} from "./SectionHeader";
import {Card} from "./Card";

export const ArtistNetworkSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="artist-network"
      className="min-h-screen flex items-center justify-center bg-white pb-20"
    >
      <motion.div
        className="flex flex-col items-center justify-center h-full p-6 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <SectionHeader title="ARTIST NETWORK" highlightColor="bg-yellow-300" />
        <div className="grid md:grid-cols-2 gap-8 w-full mt-6">
          <Card
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-yellow-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <circle cx="4" cy="4" r="2" />
                <circle cx="20" cy="4" r="2" />
                <circle cx="4" cy="20" r="2" />
                <circle cx="20" cy="20" r="2" />
                <line x1="12" y1="12" x2="4" y2="4" />
                <line x1="12" y1="12" x2="20" y2="4" />
                <line x1="12" y1="12" x2="4" y2="20" />
                <line x1="12" y1="12" x2="20" y2="20" />
              </svg>
            }
            title="EXTENSIVE NETWORK"
            description={[
              "We have cultivated an extensive network of diverse artists spanning various genres, ensuring that we can cater to the unique preferences of our clients and audiences.",
              "Our network includes musicians, DJs, bands, Hip-Hop, Rappers, Indie artists and Influencers, allowing us to curate diverse and captivating entertainment experiences.",
            ]}
            highlightColor="yellow"
          />
          <Card
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-yellow-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <circle cx="12" cy="16" r="2" />
                <path d="M10 20c0-1.1.9-2 2-2s2 .9 2 2" />
              </svg>
            }
            title="EXPERTISE IN ARTIST MATCHING"
            description={[
              "With our expertise in entertainment curation, we excel in matching artists with appropriate events and audiences, ensuring seamless integration and maximum impact.",
              "We understand the importance of aligning the artist's style, energy, and vibe with the event's theme and objectives, creating cohesive and memorable experiences.",
            ]}
            highlightColor="yellow"
          />
        </div>
      </motion.div>
    </section>
  );
};
