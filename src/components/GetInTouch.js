
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

export const GetInTouch = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const linkVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      color: "#9CA3AF",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const emailVariants = {
    hover: {
      scale: 1.05,
      color: "#9CA3AF",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const socialLinks = [
    {
      href: "https://www.instagram.com/whiteheavenent/",
      icon: <FaInstagram className="h-8 w-8" />,
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/whiteheavenentertainments",
      icon: <FaFacebook className="h-8 w-8" />,
      label: "Facebook",
    },
    {
      href: "https://www.youtube.com/@Whiteheavenentertainments1",
      icon: <FaYoutube className="h-8 w-8" />,
      label: "YouTube",
    },
    {
      href: "https://in.linkedin.com/company/white-heaven-entertainments",
      icon: <FaLinkedin className="h-8 w-8" />,
      label: "LinkedIn",
    },
  ];

  return (
    <motion.section
      id="get-in-touch"
      className="relative bg-[#f6f7f7] py-24 px-6 md:px-16 flex flex-col items-center justify-center text-center  overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100/20 to-transparent opacity-50" />
      <div className="relative max-w-5xl mx-auto">
        <motion.p
          className="text-2xl md:text-4xl font-bold text-gray-700 leading-relaxed mb-10 tracking-wide font-cursive"
          variants={childVariants}
        >
          “No idea is too wild. No brief is too bold. Let’s connect and create.”
        </motion.p>
        <motion.a
          href="mailto:info@whiteheavenentertainments.in"
          className="relative text-lg md:text-xl font-semibold text-gray-700 hover:text-gray-300 transition-colors mb-12 block after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-gray-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          variants={emailVariants}
          whileHover="hover"
          aria-label="Email White Heaven Entertainments"
        >
          info@whiteheavenentertainments.in
        </motion.a>
        <motion.div
          className="flex justify-center space-x-10"
          variants={childVariants}
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-300 transition-colors bg-white/50 p-3 rounded-full shadow-md hover:shadow-lg"
              variants={linkVariants}
              whileHover="hover"
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
