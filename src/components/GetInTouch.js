import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

export const GetInTouch = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.15,
      rotate: 8,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const emailVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const socialLinks = [
    {
      href: "https://www.instagram.com/whiteheavenent/",
      icon: <FaInstagram className="h-6 w-6" />,
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/whiteheavenentertainments",
      icon: <FaFacebook className="h-6 w-6" />,
      label: "Facebook",
    },
    {
      href: "https://www.youtube.com/@Whiteheavenentertainments1",
      icon: <FaYoutube className="h-6 w-6" />,
      label: "YouTube",
    },
    {
      href: "https://in.linkedin.com/company/white-heaven-entertainments",
      icon: <FaLinkedin className="h-6 w-6" />,
      label: "LinkedIn",
    },
  ];

  return (
    <motion.section
      id="get-in-touch"
      className="relative bg-gradient-to-br from-[#f6f7f7] via-white to-slate-100 py-24 px-6 md:px-10 flex flex-col items-center justify-center text-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-100 via-white to-transparent opacity-30 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto z-10">
        <motion.p
          className="text-2xl md:text-4xl font-extrabold text-gray-800 leading-relaxed mb-10 tracking-tight"
          variants={childVariants}
        >
          “No idea is too wild. No brief is too bold. Let’s connect and create.”
        </motion.p>

        <motion.a
          href="mailto:info@whiteheavenentertainments.in"
          className="inline-block text-lg md:text-xl font-medium text-gray-800 hover:text-indigo-600 transition duration-300 mb-12 underline underline-offset-4 decoration-indigo-300 hover:decoration-2"
          variants={emailVariants}
          whileHover="hover"
          aria-label="Email White Heaven Entertainments"
        >
          info@whiteheavenentertainments.in
        </motion.a>

        <motion.div
          className="mt-6 flex justify-center flex-wrap gap-6"
          variants={childVariants}
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-white bg-white hover:bg-indigo-600 p-4 rounded-full shadow-md transition-all duration-300"
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
