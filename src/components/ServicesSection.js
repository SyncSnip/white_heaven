import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Card } from "./Card";

export const ServicesSection = ({ scrollToSection }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="what-do-we-do"
      className="min-h-screen flex items-center justify-center bg-[#f6f7f7] py-12"
    >
      <motion.div
        className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <SectionHeader title="What Do We Do?" highlightColor="bg-green-300" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-6">
          <Card
            icon={
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                />
              </svg>
            }
            link="#college-festivals"
            scrollToSection={scrollToSection}
            title="College Fests"
            description="India's most influential campuses — IITs, IIMs, NITs and leading private universities."
            highlightColor="green"
          />
          <Card
            icon={
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            }
            link="#artistbooking"
            scrollToSection={scrollToSection}
            title="Artist Bookings"
            description="From homegrown indie sensations and Bollywood stars to globally followed DJs, find the perfect artists to match your vibe and make your event a huge, unforgettable hit."
            highlightColor="green"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
          <Card
            icon={
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                />
              </svg>
            }
            link="#eventproduction"
            scrollToSection={scrollToSection}
            title="Event Production"
            description="From creative concepts to smooth execution, making sure your event truly stands out!"
            highlightColor="green"
          />
          <Card
            icon={
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
            link="#music-festivals"
            scrollToSection={scrollToSection}
            title="Music Festivals"
            description="Epic nights filled with huge artists, good vibes, and pure musical magic!"
            highlightColor="green"
          />
          <Card
            icon={
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            }
            scrollToSection={scrollToSection}
            title="Corporate Events"
            description="Celebrate milestones, connect teams, and create lasting memories in a unique way!"
            highlightColor="green"
          />
        </div>
      </motion.div>
    </section>
  );
};
