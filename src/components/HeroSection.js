
"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Loader from "./Loader";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services Offered", href: "#services" },
    { name: "College Festivals", href: "#college-festivals" },
    { name: "Music Festivals", href: "#music-festivals" },
    { name: "Collaborations", href: "#collaborations" },
    { name: "Audience Reach", href: "#audience-reach" },
    { name: "Artist Network", href: "#artist-network" },
    { name: "Expertise", href: "#expertise" },
    { name: "Audience Reach", href: "#audience-reach" },
    { name: "Highlights", href: "#highlights" },
  ];

  // Animation variants
  const menuVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.1,
      },
    },
  };

  const contentVariants = {
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const linkVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (window.innerWidth >= 768) {
      setIsContentOpen(!isContentOpen);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
      setIsContentOpen(false);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="relative bg-[#f6f7f7]">
        <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <button onClick={() => scrollToSection("home")}>
                <Image
                  src="/navLogo.png"
                  width={120}
                  height={40}
                  className="md:w-32 w-24"
                  alt="Logo"
                />
              </button>
              <button
                onClick={openMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                className="text-gray-800 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Right Sidebar Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed top-0 right-0 h-full md:w-1/2 w-full bg-[#f6f7f7] text-gray-700 z-50 shadow-2xl"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="flex flex-col md:ml-20 ml-5 justify-center h-full space-y-4">
                {navLinks.map((link, i) => (
                  <motion.div key={link.name} variants={linkVariants}>
                    <button
                      onClick={() => scrollToSection(link.href.substring(1))}
                      className="space-x-4"
                    >
                      <span className="py-2.5 px-4 rounded-full text-xs text-gray-700 opacity-35">
                        {i < 9 ? `0${i + 1}` : i + 1}
                      </span>
                      <span className="md:text-xl text-lg font-semibold hover:text-gray-300 transition-colors cursor-pointer">
                        {link.name}
                      </span>
                    </button>
                  </motion.div>
                ))}
              </div>
              <button
                onClick={openMenu}
                className="absolute top-8 right-8 text-gray-700 hover:text-gray-900 cursor-pointer"
              >
                <svg
                  className="h-10 w-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Left Content Panel */}
        <AnimatePresence>
          {isContentOpen && (
            <motion.div
              className="fixed top-0 left-0 h-full w-1/2 md:block hidden bg-gradient-to-b bg-white text-gray-800 z-50 shadow-2xl"
              initial="closed"
              animate="open"
              exit="closed"
              variants={contentVariants}
            >
              <div className="flex flex-col items-center justify-center h-full p-6">
                <Image
                  width={100}
                  height={100}
                  src="/logoWhiteHeaven.png"
                  className="w-[50%] h-auto"
                  alt="Logo"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center pt-20"
        >
          <div className="flex flex-col items-center justify-center h-full p-6">
            <motion.img
              src="/logoWhiteHeaven.png"
              className="md:w-[30%]"
              alt="Logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.p
              className="text-center w-[80%] md:w-[50%] mt-4 text-sm md:text-md text-slate-600 opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              India’s premier show architects — from campus arenas to mega
              stages, we bring experiences to life.
            </motion.p>
          </div>
        </section>

        {/* About Section */}
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
            <motion.div className="relative mb-12" variants={titleVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 relative z-10">
                About Us
              </h2>
              <div className="absolute -bottom-3 left-0 w-full h-3 bg-yellow-300 opacity-50 z-0"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div className="bg-[#f6f7f7] p-6 rounded-lg shadow-sm md:col-span-2">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Our Approach
                </h3>
                <p className="text-slate-600 mb-4">
                  White Heaven Entertainments Pvt. Ltd. is a leading live
                  entertainment and artist programming company that has been
                  redefining the experience of events since 2013 .
                </p>
                <p className="text-slate-600">
                  From stadium-sized spectacles to intimate cultural showcases ,
                  we specialize in end-to-end curation , arena production design
                  , and seamless execution of shows .
                </p>
                <p className="text-slate-600">
                  From stadium-sized spectacles to intimate cultural showcases ,
                  we specialize in end-to-end curation , arena production design
                  , and seamless execution of shows . Our universe spans across
                  music, art, comedy, storytelling, and beyond — collaborating
                  with top-tier talent and creating unique experiences tailored
                  for every audience and moment.
                </p>
                <p className="text-slate-600">
                  Whether it’s a headline concert , a multi-genre festival , or
                  a visual production that lights up the night, we design
                  moments that echo long after the lights go down.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services Offered Section */}
        <section
          id="services"
          className="min-h-screen flex items-center justify-center bg-[#f6f7f7] pb-20"
        >
          <motion.div
            className="flex flex-col items-center justify-center h-full p-6 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <motion.div className="relative mb-12" variants={titleVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 relative z-10">
                What Do We Do?
              </h2>
              <div className="absolute -bottom-3 left-0 w-full h-3 bg-green-300 opacity-50 z-0"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 w-full mt-6">
              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center transform transition-all duration-300 hover:shadow-md hover:-translate-y-2">
                <div className="bg-green-100 p-4 rounded-full mb-4">
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
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  ARTIST CURATION
                </h3>
                <p className="text-slate-600 text-center">
                  We collaborate with a diverse range of talented artists across
                  various genres to bring exceptional performances to our
                  clients. Our extensive network includes musicians, performers,
                  DJs, and other entertainment professionals.
                </p>
                <div className="mt-6 w-16 h-1 bg-green-300 rounded"></div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center transform transition-all duration-300 hover:shadow-md hover:-translate-y-2">
                <div className="bg-green-100 p-4 rounded-full mb-4">
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
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  EVENT PROGRAMMING
                </h3>
                <p className="text-slate-600 text-center">
                  Our team specializes in creating customized event programs
                  tailored to the unique preferences and objectives of our
                  clients. From concept development to execution, we handle
                  every aspect of the programming process.
                </p>
                <div className="mt-6 w-16 h-1 bg-green-300 rounded"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 w-full mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="bg-green-100 p-3 rounded-full mb-3">
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
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">
                  College Festivals
                </h3>
                <p className="text-slate-600 text-center text-sm">
                  Campus-wide celebrations featuring top artists and engaging
                  activities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="bg-green-100 p-3 rounded-full mb-3">
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
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">
                  Music Festivals
                </h3>
                <p className="text-slate-600 text-center text-sm">
                  Multi-artist performances that create unforgettable musical
                  experiences.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="bg-green-100 p-3 rounded-full mb-3">
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
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">
                  Corporate Events
                </h3>
                <p className="text-slate-600 text-center text-sm">
                  Professional entertainment solutions for business functions
                  and celebrations.
                </p>
              </div>
            </div>

            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-sm md:text-md text-slate-600 opacity-80 w-full md:w-2/3 mx-auto">
                We cater to a diverse range of events, including college
                festivals and music festivals, ensuring that each experience is
                memorable and impactful. Our dedicated team works tirelessly to
                deliver exceptional entertainment that exceeds expectations.
              </p>
              <button className="mt-8 px-8 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors">
                Contact Us Today
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* College Festivals Section */}
        <section
          id="college-festivals"
          className="min-h-screen flex items-center justify-center bg-white py-20"
        >
          <motion.div
            className="flex flex-col items-center justify-center h-full p-6 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <motion.div className="relative mb-12" variants={titleVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 relative z-10">
                College Festivals
              </h2>
              <div className="absolute -bottom-3 left-0 w-full h-3 bg-yellow-300 opacity-50 z-0"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-2xl md:text-3xl font-light text-gray-700 mb-8 leading-relaxed">
                  We have curated over{" "}
                  <span className="font-bold text-yellow-600">
                    1000+ college festivals
                  </span>
                  , creating vibrant experiences that resonate with young
                  audiences and leave a lasting impression on campuses
                  nationwide.
                </p>

                <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Success Stories
                  </h3>
                  <p className="text-gray-600 italic">
                    &quot;White Heaven transformed our college fest into a
                    national-level event with their artist curation and flawless
                    execution.&quot;
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    - IIT Bombay Fest Committee
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/testImage.png"
                    alt="College Festival"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/testImage.png"
                    alt="College Festival"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md col-span-2">
                  <Image
                    src="/testImage.png"
                    alt="College Festival"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Music Festivals Section */}
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
            <motion.div className="relative mb-12" variants={titleVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 relative z-10">
                Music Festivals
              </h2>
              <div className="absolute -bottom-3 left-0 w-full h-3 bg-purple-300 opacity-50 z-0"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="grid grid-cols-3 gap-4">
                  <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/testImage.png"
                      alt="Music Festival"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/testImage.png"
                      alt="Music Festival"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/testImage.png"
                      alt="Music Festival"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg shadow-md col-span-2">
                    <Image
                      src="/testImage.png"
                      alt="Music Festival"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/testImage.png"
                      alt="Music Festival"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <p className="text-2xl md:text-3xl font-light text-gray-700 mb-8 leading-relaxed">
                  Our team has organized more than{" "}
                  <span className="font-bold text-purple-600">
                    500 music festivals
                  </span>
                  , bringing together music enthusiasts from diverse backgrounds
                  to celebrate the universal language of music.
                </p>

                <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Featured Event
                  </h3>
                  <p className="text-gray-600 italic">
                    &quot;The production quality and artist lineup for our
                    annual EDM festival exceeded all expectations.&quot;
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    - Sunburn Festival Team
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Notable Collaborations Section */}
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
            <motion.div className="relative mb-12" variants={titleVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 relative z-10">
                Notable Collaborations
              </h2>
              <div className="absolute -bottom-3 left-0 w-full h-3 bg-blue-300 opacity-50 z-0"></div>
            </motion.div>

            <p className="text-2xl md:text-3xl font-light text-gray-700 mb-12 text-center  max-w-4xl mx-auto">
              Our success is further amplified by our collaborations with
              high-profile events and clients, solidifying our position as a
              trusted partner in the industry.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              {[
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
                {
                  img: "/testImage.png",
                  name: "Red Bull",
                  desc: "Campus Event Series",
                },
                {
                  img: "/testImage.png",
                  name: "Amazon Prime",
                  desc: "Concert Series Producer",
                },
              ].map((item, index) => (
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
                &quot;Working with White Heaven elevated our brand presence at
                college festivals nationwide. Their understanding of youth
                culture is unmatched.&quot;
              </p>
              <p className="text-gray-500 text-sm mt-4 text-center">
                - Red Bull Marketing Team
              </p>
            </div>
          </motion.div>
        </section>

        {/* Audience Reach Section */}
        <section
          id="audience-reach"
          className="min-h-screen flex items-center justify-center bg-[#f6f7f7] py-20"
        >
          <motion.div
            className="flex flex-col items-center justify-center h-full p-6 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <motion.div className="relative mb-12" variants={titleVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 relative z-10">
                Audience Reach
              </h2>
              <div className="absolute -bottom-3 left-0 w-full h-3 bg-green-300 opacity-50 z-0"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-2xl md:text-3xl font-light text-gray-700 mb-8 leading-relaxed">
                  Our events have attracted over{" "}
                  <span className="font-bold text-green-600">
                    20 lakh people
                  </span>
                  , creating memorable moments for audiences across demographics
                  and geographies.
                </p>

                <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Success Stories
                  </h3>
                  <p className="text-gray-600 italic">
                    &quot;The footfall at our festival doubled after partnering
                    with White Heaven for artist bookings and promotions.&quot;
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    - NH7 Weekender Organizers
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/testImage.png"
                    alt="Audience"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/testImage.png"
                    alt="Audience"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/testImage.png"
                    alt="Audience"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                  <div className="absolute inset-0 bg-green-600/10 flex items-center justify-center p-6">
                    <div className="text-center">
                      <span className="text-4xl font-bold text-gray-700 block">
                        20L+
                      </span>
                      <span className="text-gray-700">Audience Reached</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Artist Network Section */}
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
            <motion.div className="relative mb-12" variants={titleVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 relative z-10">
                ARTIST NETWORK
              </h2>
              <div className="absolute -bottom-3 left-0 w-full h-3 bg-yellow-300 opacity-50 z-0"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 w-full mt-6">
              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center transform transition-all duration-300 hover:shadow-md hover:-translate-y-2">
                <div className="bg-yellow-100 p-4 rounded-full mb-4">
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
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  EXTENSIVE NETWORK
                </h3>
                <p className="text-slate-600 text-center">
                  We have cultivated an extensive network of diverse artists
                  spanning various genres, ensuring that we can cater to the
                  unique preferences of our clients and audiences.
                </p>
                <p className="text-slate-600 text-center">
                  Our network includes musicians, DJs, bands, Hip-Hop, Rappers,
                  Indie artists and Influencers, allowing us to curate diverse
                  and captivating entertainment experiences.
                </p>
                <div className="mt-6 w-16 h-1 bg-yellow-300 rounded"></div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center transform transition-all duration-300 hover:shadow-md hover:-translate-y-2">
                <div className="bg-yellow-100 p-4 rounded-full mb-4">
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
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  EXPERTISE IN ARTIST MATCHING
                </h3>
                <p className="text-slate-600 text-center">
                  With our expertise in entertainment curation, we excel in
                  matching artists with appropriate events and audiences,
                  ensuring seamless integration and maximum impact.
                </p>
                <p className="text-slate-600 text-center">
                  We understand the importance of aligning the artist&apos;s
                  style, energy, and vibe with the event&apos;s theme and
                  objectives, creating cohesive and memorable experiences.
                </p>
                <div className="mt-6 w-16 h-1 bg-yellow-300 rounded"></div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Expertise Section */}
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
            <motion.div className="relative mb-12" variants={titleVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 relative z-10">
                EXPERTISE
              </h2>
              <div className="absolute -bottom-3 left-0 w-full h-3 bg-green-300 opacity-50 z-0"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 w-full mt-6">
              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center transform transition-all duration-300 hover:shadow-md hover:-translate-y-2">
                <div className="bg-green-100 p-4 rounded-full mb-4">
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
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  DEEP UNDERSTANDING OF PREFERENCES
                </h3>
                <p className="text-slate-600 text-center">
                  Our team possesses a deep understanding of music and
                  entertainment preferences, keeping abreast of the latest
                  trends and emerging talents in the industry
                </p>
                <p className="text-slate-600 text-center">
                  We leverage this knowledge to curate innovative and engaging
                  entertainment solutions that resonate with our clients and
                  captivate our audiences.
                </p>
                <div className="mt-6 w-16 h-1 bg-green-300 rounded"></div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center transform transition-all duration-300 hover:shadow-md hover:-translate-y-2">
                <div className="bg-green-100 p-4 rounded-full mb-4">
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
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  PREVIOUS COLLABORATIONS
                </h3>
                <p className="text-slate-600 text-center">
                  Our track record of successful collaborations with renowned
                  artists speaks volumes about our expertise and credibility in
                  the industry. Some of our notable collaborations include
                  [Sunidhi Chauhan, Shreya Ghosal, Amit Trivedi, Dhvani
                  Bhanushali, Sukhwinder Singh, Krsna, Trap, Ravator], & many
                  more where we have collaborated to create unforgettable
                  performances and experiences
                </p>

                <div className="mt-6 w-16 h-1 bg-green-300 rounded"></div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Highlights Section */}
        <section
          id="highlights"
          className="min-h-screen flex items-center justify-center bg-white py-20"
        >
          <motion.div
            className="flex flex-col items-center justify-center h-full p-6 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <motion.div className="relative mb-12" variants={titleVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 relative z-10">
                Our Impact in Numbers
              </h2>
              <div className="absolute -bottom-3 left-0 w-full h-3 bg-blue-300 opacity-50 z-0"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 w-full">
              <div className="bg-[#f6f7f7] p-8 rounded-xl text-center">
                <div className="text-5xl font-bold text-blue-600 mb-4">58+</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Colleges Partnered
                </h3>
                <p className="text-gray-600">
                  Working with premier institutions across the country
                </p>
              </div>

              <div className="bg-[#f6f7f7] p-8 rounded-xl text-center">
                <div className="text-5xl font-bold text-blue-600 mb-4">80+</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Festivals Organized
                </h3>
                <p className="text-gray-600">
                  Creating unforgettable experiences for students
                </p>
              </div>

              <div className="bg-[#f6f7f7] p-8 rounded-xl text-center">
                <div className="text-5xl font-bold text-blue-600 mb-4">
                  1.5M+
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Audience Reach
                </h3>
                <p className="text-gray-600">
                  Engaging young audiences nationwide
                </p>
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8 w-full">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Age Groups Reached
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    <span>18-20 Age group</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    <span>22-24 Age group</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    <span>24-27 Age Group</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Why Brands Choose Us
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Proven track record in successful brand activations
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Strong network with top colleges and universities
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Deep understanding of youth culture and trends
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Comprehensive marketing and branding solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <Image
                  width={100}
                  height={100}
                  src="/logoonblack.png"
                  alt="White Heaven Logo"
                  className="h-24 w-auto  mb-4"
                />
                <p className="text-sm text-gray-400">
                  Delivering unforgettable entertainment experiences since 2013
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h4 className="font-semibold mb-2">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
              <p>
                © {new Date().getFullYear()} White Heaven Entertainments Pvt.
                Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
