// "use client";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import Loader from "./Loader";

// const HeroSection = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isContentOpen, setIsContentOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Talent", href: "/talent" },
//     { name: "Brands", href: "/brands" },
//     { name: "Strategic Advisory", href: "/strategicadvisory" },
//     { name: "Careers", href: "/careers" },
//     { name: "NewsKiosk", href: "/news" },
//     { name: "CSR", href: "/csr" },
//     { name: "Contact", href: "/contact" }, // Fixed capitalization
//   ];

//   // Animation variants for right navbara
//   const menuVariants = {
//     closed: {
//       x: "100%", // Start off-screen to the right
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeInOut",
//       },
//     },
//     open: {
//       x: 0, // Slide in to position
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeInOut",
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   // Animation variants for left content panel
//   const contentVariants = {
//     closed: {
//       x: "-100%", // Start off-screen to the left
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeInOut",
//       },
//     },
//     open: {
//       x: 0, // Slide in to position
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeInOut",
//       },
//     },
//   };

//   // Animation variants for individual nav links
//   const linkVariants = {
//     closed: { x: 50, opacity: 0 },
//     open: { x: 0, opacity: 1 },
//   };

//   // Animation variants for hero image
//   const imageVariants = {
//     initial: { opacity: 0.3, scale: 0.8 },
//     animate: {
//       opacity: 0.9,
//       scale: 1,
//       transition: {
//         duration: 1.5,
//         ease: "easeOut",
//         repeat: Infinity,
//         repeatType: "reverse",
//       },
//     },
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 900);
//     return () => clearTimeout(timer);
//   }, []);

//   const openMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     if (window.innerWidth >= 768) {
//       setIsContentOpen(!isContentOpen);
//     }
//   };

//   return (
//     <>
//       {isLoading && <Loader />}
//       <div className="relative min-h-screen bg-[#f6f7f7]">
//         <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between items-center h-20">
//               <Link href="/">
//                 <Image
//                   src="/navLogo.png"
//                   width={120}
//                   height={40}
//                   className="md:w-32 w-24" // Fixed Tailwind classes
//                   alt="Logo"
//                 />
//               </Link>
//               <button
//                 onClick={openMenu}
//                 aria-label="Toggle menu"
//                 aria-expanded={isMenuOpen}
//                 className="text-gray-800 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
//               >
//                 <svg
//                   className="h-8 w-8"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d={
//                       isMenuOpen
//                         ? "M6 18L18 6M6 6l12 12"
//                         : "M4 6h16M4 12h16M4 18h16"
//                     }
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </nav>
//         {/* Right Sidebar Menu */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               className="fixed top-0 right-0 h-full md:w-1/2 w-full bg-[#f6f7f7] text-gray-700 z-50 shadow-2xl"
//               initial="closed"
//               animate="open"
//               exit="closed"
//               variants={menuVariants}
//             >
//               <div className="flex flex-col md:ml-20 ml-5 justify-center h-full space-y-8">
//                 {navLinks.map((link, i) => (
//                   <motion.div key={link.name} variants={linkVariants}>
//                     <Link href={link.href} className="space-x-4">
//                       <span className=" py-2.5 px-4 rounded-full text-xs text-gray-700 opacity-35">
//                         0{i + 1}
//                       </span>
//                       <span
//                         className="md:text-2xl text-xl font-semibold hover:text-gray-300 transition-colors cursor-pointer"
//                         onClick={() => openMenu()}
//                       >
//                         {link.name}
//                       </span>
//                     </Link>
//                   </motion.div>
//                 ))}
//               </div>
//               {/* Close Button */}
//               <button
//                 onClick={() => openMenu()}
//                 className="absolute top-8 right-8 text-gray-700 hover:text-gray-900 cursor-pointer"
//               >
//                 <svg
//                   className="h-10 w-10"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//         {/* Left Content Panel */}
//         <AnimatePresence>
//           {isContentOpen && (
//             <motion.div
//               className="fixed top-0 left-0 h-full w-1/2 md:block hidden bg-gradient-to-b bg-white text-gray-800 z-50 shadow-2xl"
//               initial="closed"
//               animate="open"
//               exit="closed"
//               variants={contentVariants}
//             >
//               <div className="flex flex-col items-center justify-center h-full p-6">
//                 <img
//                   src="/logoWhiteHeaven.png"
//                   className="w-[50%]"
//                   alt="Logo"
//                 />
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//         {/* Hero Section */}
//         <div className="flex items-center justify-center min-h-screen">
//           <div className="flex flex-col items-center justify-center h-full p-6">
//             <img
//               src="/logoWhiteHeaven.png"
//               className="md:w-[30%] "
//               alt="Logo"
//             />
//             <span className="text-center  w-[80%] md:w-[50%] mt-4 text-sm md:text-md text-slate-600 opacity-80">
//               White Heaven Entertainments Pvt. Ltd., a premier artist curation
//               and programming company dedicated to delivering unforgettable
//               entertainment experiences since 2013. Our mission is to curate
//               exceptional artists and create immersive events that captivate
//               audiences worldwide.
//             </span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroSection;

// "use client";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import Loader from "./Loader";

// const HomePage = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isContentOpen, setIsContentOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [activeSection, setActiveSection] = useState("home");

//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Promotion & Branding", href: "#promotion" },
//     { name: "Marketing Strategy", href: "#marketing" },
//     { name: "Services Offered", href: "#services" },
//   ];

//   // Animation variants
//   const menuVariants = {
//     closed: {
//       x: "100%",
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeInOut",
//       },
//     },
//     open: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeInOut",
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const contentVariants = {
//     closed: {
//       x: "-100%",
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeInOut",
//       },
//     },
//     open: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeInOut",
//       },
//     },
//   };

//   const linkVariants = {
//     closed: { x: 50, opacity: 0 },
//     open: { x: 0, opacity: 1 },
//   };

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 900);
//     return () => clearTimeout(timer);
//   }, []);

//   const openMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     if (window.innerWidth >= 768) {
//       setIsContentOpen(!isContentOpen);
//     }
//   };

//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setActiveSection(sectionId);
//       setIsMenuOpen(false);
//       setIsContentOpen(false);
//     }
//   };

//   return (
//     <>
//       {isLoading && <Loader />}
//       <div className="relative bg-[#f6f7f7]">
//         <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between items-center h-20">
//               <button onClick={() => scrollToSection("home")}>
//                 <Image
//                   src="/navLogo.png"
//                   width={120}
//                   height={40}
//                   className="md:w-32 w-24"
//                   alt="Logo"
//                 />
//               </button>
//               <button
//                 onClick={openMenu}
//                 aria-label="Toggle menu"
//                 aria-expanded={isMenuOpen}
//                 className="text-gray-800 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
//               >
//                 <svg
//                   className="h-8 w-8"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d={
//                       isMenuOpen
//                         ? "M6 18L18 6M6 6l12 12"
//                         : "M4 6h16M4 12h16M4 18h16"
//                     }
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </nav>

//         {/* Right Sidebar Menu */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               className="fixed top-0 right-0 h-full md:w-1/2 w-full bg-[#f6f7f7] text-gray-700 z-50 shadow-2xl"
//               initial="closed"
//               animate="open"
//               exit="closed"
//               variants={menuVariants}
//             >
//               <div className="flex flex-col md:ml-20 ml-5 justify-center h-full space-y-8">
//                 {navLinks.map((link, i) => (
//                   <motion.div key={link.name} variants={linkVariants}>
//                     <button
//                       onClick={() => scrollToSection(link.href.substring(1))}
//                       className="space-x-4"
//                     >
//                       <span className="py-2.5 px-4 rounded-full text-xs text-gray-700 opacity-35">
//                         0{i + 1}
//                       </span>
//                       <span className="md:text-2xl text-xl font-semibold hover:text-gray-300 transition-colors cursor-pointer">
//                         {link.name}
//                       </span>
//                     </button>
//                   </motion.div>
//                 ))}
//               </div>
//               <button
//                 onClick={openMenu}
//                 className="absolute top-8 right-8 text-gray-700 hover:text-gray-900 cursor-pointer"
//               >
//                 <svg
//                   className="h-10 w-10"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Left Content Panel */}
//         <AnimatePresence>
//           {isContentOpen && (
//             <motion.div
//               className="fixed top-0 left-0 h-full w-1/2 md:block hidden bg-gradient-to-b bg-white text-gray-800 z-50 shadow-2xl"
//               initial="closed"
//               animate="open"
//               exit="closed"
//               variants={contentVariants}
//             >
//               <div className="flex flex-col items-center justify-center h-full p-6">
//                 <img
//                   src="/logoWhiteHeaven.png"
//                   className="w-[50%]"
//                   alt="Logo"
//                 />
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Home Section */}
//         <section
//           id="home"
//           className="min-h-screen flex items-center justify-center pt-20"
//         >
//           <div className="flex flex-col items-center justify-center h-full p-6">
//             <motion.img
//               src="/logoWhiteHeaven.png"
//               className="md:w-[30%]"
//               alt="Logo"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1 }}
//             />
//             <motion.p
//               className="text-center w-[80%] md:w-[50%] mt-4 text-sm md:text-md text-slate-600 opacity-80"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5, duration: 1 }}
//             >
//               White Heaven Entertainments Pvt. Ltd., a premier artist curation
//               and programming company dedicated to delivering unforgettable
//               entertainment experiences since 2013. Our mission is to curate
//               exceptional artists and create immersive events that captivate
//               audiences worldwide.
//             </motion.p>
//           </div>
//         </section>

//         {/* About Section */}
//         <section
//           id="about"
//           className="min-h-screen flex items-center justify-center bg-white"
//         >
//           <motion.div
//             className="flex flex-col items-center justify-center h-full p-6 max-w-4xl mx-auto"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={sectionVariants}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
//               About Us
//             </h2>
//             <p className="text-center text-sm md:text-md text-slate-600 opacity-80 leading-relaxed">
//               White Heaven Entertainments Pvt. Ltd., a premier artist curation
//               and programming company dedicated to delivering unforgettable
//               entertainment experiences since 2013. Our mission is to curate
//               exceptional artists and create immersive events that captivate
//               audiences worldwide.
//             </p>
//           </motion.div>
//         </section>

//         {/* Promotion & Branding Section */}
//         <section
//           id="promotion"
//           className="min-h-screen flex items-center justify-center bg-[#f6f7f7]"
//         >
//           <motion.div
//             className="flex flex-col items-center justify-center h-full p-6 max-w-4xl mx-auto"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={sectionVariants}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
//               Promotion & Branding Strategy
//             </h2>

//             <div className="grid md:grid-cols-2 gap-8 mt-6">
//               <div className="bg-white p-6 rounded-lg shadow-sm">
//                 <h3 className="text-xl font-semibold mb-3">
//                   Targeted Audience Engagement
//                 </h3>
//                 <p className="text-slate-600">
//                   Direct access to the youth demographic through college
//                   festivals.
//                 </p>
//               </div>

//               <div className="bg-white p-6 rounded-lg shadow-sm">
//                 <h3 className="text-xl font-semibold mb-3">Brand Visibility</h3>
//                 <p className="text-slate-600">
//                   Strategic placement of brand logos on event materials
//                   (banners, posters, merchandise).
//                 </p>
//               </div>

//               <div className="bg-white p-6 rounded-lg shadow-sm">
//                 <h3 className="text-xl font-semibold mb-3">
//                   Interactive Booths
//                 </h3>
//                 <p className="text-slate-600">
//                   Engaging brand stalls and experiential zones at event venues.
//                 </p>
//               </div>

//               <div className="bg-white p-6 rounded-lg shadow-sm">
//                 <h3 className="text-xl font-semibold mb-3">
//                   Sampling Opportunities
//                 </h3>
//                 <p className="text-slate-600">
//                   Distribution of free samples to attendees to create a hands-on
//                   brand experience.
//                 </p>
//               </div>

//               <div className="bg-white p-6 rounded-lg shadow-sm">
//                 <h3 className="text-xl font-semibold mb-3">
//                   Social Media Blitz
//                 </h3>
//                 <p className="text-slate-600">
//                   Pre-event, live, and post-event promotions on popular
//                   platforms (Instagram, Facebook).
//                 </p>
//               </div>

//               <div className="bg-white p-6 rounded-lg shadow-sm">
//                 <h3 className="text-xl font-semibold mb-3">
//                   Influencer Partnerships
//                 </h3>
//                 <p className="text-slate-600">
//                   Collaborate with student influencers and artists to amplify
//                   brand messages.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </section>

//         {/* Marketing Strategy Section */}
//         <section
//           id="marketing"
//           className="min-h-screen flex items-center justify-center bg-white"
//         >
//           <motion.div
//             className="flex flex-col items-center justify-center h-full p-6 max-w-4xl mx-auto"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={sectionVariants}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
//               Marketing Strategy
//             </h2>

//             <div className="grid md:grid-cols-2 gap-8 mt-6">
//               <div className="bg-[#f6f7f7] p-6 rounded-lg shadow-sm">
//                 <h3 className="text-xl font-semibold mb-3">
//                   Cross-Platform Campaigns
//                 </h3>
//                 <p className="text-slate-600">
//                   Coordinated efforts across digital, social, and physical
//                   platforms to maximize reach.
//                 </p>
//               </div>

//               <div className="bg-[#f6f7f7] p-6 rounded-lg shadow-sm">
//                 <h3 className="text-xl font-semibold mb-3">Content Creation</h3>
//                 <p className="text-slate-600">
//                   High-quality videos, photos, and stories showcasing the
//                   brand's involvement.
//                 </p>
//               </div>

//               <div className="bg-[#f6f7f7] p-6 rounded-lg shadow-sm">
//                 <h3 className="text-xl font-semibold mb-3">
//                   Real-Time Monitoring
//                 </h3>
//                 <p className="text-slate-600">
//                   Track engagement metrics during the event for immediate
//                   insights.
//                 </p>
//               </div>

//               <div className="bg-[#f6f7f7] p-6 rounded-lg shadow-sm">
//                 <h3 className="text-xl font-semibold mb-3">
//                   Post-Event Reports
//                 </h3>
//                 <p className="text-slate-600">
//                   Comprehensive analysis of campaign performance with actionable
//                   feedback.
//                 </p>
//               </div>

//               <div className="bg-[#f6f7f7] p-6 rounded-lg shadow-sm">
//                 <h3 className="text-xl font-semibold mb-3">
//                   Engagement Programs
//                 </h3>
//                 <p className="text-slate-600">
//                   Launch loyalty programs and contests to foster long-term brand
//                   relationships.
//                 </p>
//               </div>

//               <div className="bg-[#f6f7f7] p-6 rounded-lg shadow-sm">
//                 <h3 className="text-xl font-semibold mb-3">
//                   Sponsorship Packages
//                 </h3>
//                 <p className="text-slate-600">
//                   Tailored sponsorship levels to fit brand needs and budgets.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </section>

//         {/* Services Offered Section */}
//         <section
//           id="services"
//           className="min-h-screen flex items-center justify-center bg-[#f6f7f7] pb-20"
//         >
//           <motion.div
//             className="flex flex-col items-center justify-center h-full p-6 max-w-4xl mx-auto"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={sectionVariants}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
//               Services Offered
//             </h2>

//             <div className="grid md:grid-cols-2 gap-8 w-full mt-6">
//               <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center">
//                 <h3 className="text-xl font-semibold mb-4 text-center">
//                   ARTIST CURATION
//                 </h3>
//                 <p className="text-slate-600 text-center">
//                   We collaborate with a diverse range of talented artists across
//                   various genres to bring exceptional performances to our
//                   clients.
//                 </p>
//               </div>

//               <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center">
//                 <h3 className="text-xl font-semibold mb-4 text-center">
//                   EVENT PROGRAMMING
//                 </h3>
//                 <p className="text-slate-600 text-center">
//                   Our team specializes in creating customized event programs
//                   tailored to the unique preferences and objectives of our
//                   clients.
//                 </p>
//               </div>
//             </div>

//             <motion.div
//               className="mt-16 text-center"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <p className="text-sm md:text-md text-slate-600 opacity-80 w-full md:w-2/3 mx-auto">
//                 We cater to a diverse range of events, including college
//                 festivals and music festivals, ensuring that each experience is
//                 memorable and impactful.
//               </p>
//             </motion.div>
//           </motion.div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default HomePage;
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
    { name: "Promotion & Branding", href: "#promotion" },
    { name: "Marketing Strategy", href: "#marketing" },
    { name: "Services Offered", href: "#services" },
    { name: "College Festivals", href: "#college-festivals" },
    { name: "Music Festivals", href: "#music-festivals" },
    { name: "Collaborations", href: "#collaborations" },
    { name: "Audience Reach", href: "#audience-reach" },
    { name: "Artist Network", href: "#artist-network" },
    { name: "Expertise", href: "#expertise" },
    { name: "Audience Reach", href: "#audience-reach" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Collaborate", href: "#collaborate" },
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
              White Heaven Entertainments Pvt. Ltd., a premier artist curation
              and programming company dedicated to delivering unforgettable
              entertainment experiences since 2013. Our mission is to curate
              exceptional artists and create immersive events that captivate
              audiences worldwide.
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
              <div className="bg-[#f6f7f7] p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Our Story
                </h3>
                <p className="text-slate-600 mb-4">
                  Founded in 2013, White Heaven Entertainments began with a
                  vision to revolutionize the entertainment industry through
                  exceptional artist curation and immersive programming. What
                  started as a passion project has evolved into one of the
                  leading entertainment companies in the region.
                </p>
                <p className="text-slate-600">
                  Our journey has been defined by a relentless pursuit of
                  excellence, bringing together artists and audiences in ways
                  that create lasting memories and powerful connections.
                </p>
              </div>

              <div className="bg-[#f6f7f7] p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Our Vision
                </h3>
                <p className="text-slate-600 mb-4">
                  At White Heaven Entertainments, we envision a world where
                  extraordinary entertainment experiences are accessible to all.
                  We strive to be pioneers in the entertainment industry,
                  setting new standards for artist curation and event
                  programming.
                </p>
                <p className="text-slate-600">
                  Our team of dedicated professionals works tirelessly to bridge
                  the gap between talented artists and discerning audiences,
                  creating magical moments that transcend ordinary
                  entertainment.
                </p>
              </div>

              <div className="bg-[#f6f7f7] p-6 rounded-lg shadow-sm md:col-span-2">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Our Approach
                </h3>
                <p className="text-slate-600 mb-4">
                  We believe in a collaborative approach to entertainment,
                  working closely with clients, artists, and venues to ensure
                  every detail is perfect. Our meticulous planning, attention to
                  detail, and passion for excellence set us apart in the
                  industry.
                </p>
                <p className="text-slate-600">
                  Whether it&apos;s a college festival, corporate event, or
                  music festival, we bring the same level of dedication and
                  creativity to every project, tailoring our services to meet
                  the unique needs and objectives of our clients.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Promotion & Branding Section */}
        <section
          id="promotion"
          className="min-h-screen flex items-center justify-center bg-[#f6f7f7]"
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
                Promotion & Branding
              </h2>
              <div className="absolute -bottom-3 left-0 w-full h-3 bg-purple-300 opacity-50 z-0"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-4 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="bg-purple-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Targeted Audience Engagement
                  </h3>
                  <p className="text-slate-600">
                    Direct access to the youth demographic through college
                    festivals and curated events.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-4 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="bg-purple-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Brand Visibility
                  </h3>
                  <p className="text-slate-600">
                    Strategic placement of brand logos on event materials
                    (banners, posters, merchandise).
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-4 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="bg-purple-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Interactive Booths
                  </h3>
                  <p className="text-slate-600">
                    Engaging brand stalls and experiential zones at event venues
                    for maximum audience interaction.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-4 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="bg-purple-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Sampling Opportunities
                  </h3>
                  <p className="text-slate-600">
                    Distribution of free samples to attendees to create a
                    hands-on brand experience that drives engagement.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-4 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="bg-purple-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Social Media Blitz
                  </h3>
                  <p className="text-slate-600">
                    Pre-event, live, and post-event promotions on popular
                    platforms (Instagram, Facebook) to maximize digital reach.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-4 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="bg-purple-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Influencer Partnerships
                  </h3>
                  <p className="text-slate-600">
                    Collaborate with student influencers and artists to amplify
                    brand messages and increase organic reach.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Marketing Strategy Section */}
        <section
          id="marketing"
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
                Marketing Strategy
              </h2>
              <div className="absolute -bottom-3 left-0 w-full h-3 bg-blue-300 opacity-50 z-0"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div className="bg-[#f6f7f7] p-6 rounded-lg shadow-sm flex items-start space-x-4 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Cross-Platform Campaigns
                  </h3>
                  <p className="text-slate-600">
                    Coordinated efforts across digital, social, and physical
                    platforms to maximize reach and brand visibility.
                  </p>
                </div>
              </div>

              <div className="bg-[#f6f7f7] p-6 rounded-lg shadow-sm flex items-start space-x-4 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Content Creation
                  </h3>
                  <p className="text-slate-600">
                    High-quality videos, photos, and stories showcasing the
                    brand&apos;s involvement and audience engagement.
                  </p>
                </div>
              </div>

              <div className="bg-[#f6f7f7] p-6 rounded-lg shadow-sm flex items-start space-x-4 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Real-Time Monitoring
                  </h3>
                  <p className="text-slate-600">
                    Track engagement metrics during the event for immediate
                    insights and strategic adjustments.
                  </p>
                </div>
              </div>

              <div className="bg-[#f6f7f7] p-6 rounded-lg shadow-sm flex items-start space-x-4 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Post-Event Reports
                  </h3>
                  <p className="text-slate-600">
                    Comprehensive analysis of campaign performance with
                    actionable feedback for future optimization.
                  </p>
                </div>
              </div>

              <div className="bg-[#f6f7f7] p-6 rounded-lg shadow-sm flex items-start space-x-4 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Engagement Programs
                  </h3>
                  <p className="text-slate-600">
                    Launch loyalty programs and contests to foster long-term
                    brand relationships and deeper customer connections.
                  </p>
                </div>
              </div>

              <div className="bg-[#f6f7f7] p-6 rounded-lg shadow-sm flex items-start space-x-4 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Sponsorship Packages
                  </h3>
                  <p className="text-slate-600">
                    Tailored sponsorship levels to fit brand needs and budgets
                    with clear value propositions for each tier.
                  </p>
                </div>
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
                Services Offered
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
                    src="/image1.jpg"
                    alt="College Festival"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/image1.jpg"
                    alt="College Festival"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md col-span-2">
                  <Image
                    src="/image1.jpg"
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
                      src="/image1.jpg"
                      alt="Music Festival"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/image1.jpg"
                      alt="Music Festival"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/image1.jpg"
                      alt="Music Festival"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg shadow-md col-span-2">
                    <Image
                      src="/image1.jpg"
                      alt="Music Festival"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/image1.jpg"
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
                    &quot;The production quality and artist lineup for our annual EDM
                    festival exceeded all expectations.&quot;
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
                  img: "/image1.jpg",
                  name: "MTV India",
                  desc: "Music Awards Production Partner",
                },
                {
                  img: "/image1.jpg",
                  name: "VH1",
                  desc: "Supersonic Festival Curators",
                },
                {
                  img: "/image1.jpg",
                  name: "Red Bull",
                  desc: "Campus Event Series",
                },
                {
                  img: "/image1.jpg",
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
                    &quot;The footfall at our festival doubled after partnering with
                    White Heaven for artist bookings and promotions.&quot;
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    - NH7 Weekender Organizers
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/image1.jpg"
                    alt="Audience"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/image1.jpg"
                    alt="Audience"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/image1.jpg"
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
                  We understand the importance of aligning the artist&apos;s style,
                  energy, and vibe with the event&apos;s theme and objectives,
                  creating cohesive and memorable experiences.
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

        {/* Why Choose Us Section */}
        <section
          id="why-choose-us"
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
                WHY CHOOSE US?
              </h2>
              <div className="absolute -bottom-3 left-0 w-full h-3 bg-amber-300 opacity-50 z-0"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-amber-100 p-3 rounded-full flex-shrink-0">
                      <svg
                        className="w-8 h-8 text-amber-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                        Proven Track Record in
                      </h3>
                      <p className="text-xl text-gray-600">
                        Successful Brand Activations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-amber-100 p-3 rounded-full flex-shrink-0">
                      <svg
                        className="w-8 h-8 text-amber-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                        Strong Network With
                      </h3>
                      <p className="text-xl text-gray-600">
                        Top Colleges and Universities
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#f6f7f7] p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  LAST YEAR&apos;S HIGHLIGHTS
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-700 mb-2">
                      Age Groups Reached
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                        <span>18-20 Age group</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                        <span>22-24 Age group</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                        <span>24-27 Age Group</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-lg font-medium text-gray-700 mb-2">
                      Curated Events
                    </h4>
                    <p className="text-gray-600">
                      58 colleges partnered with us for their events.
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-lg font-medium text-gray-700 mb-2">
                      Organized Festivals
                    </h4>
                    <p className="text-gray-600">
                      Successfully managed more than 80 vibrant college
                      festivals.
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-lg font-medium text-gray-700 mb-2">
                      Visibility
                    </h4>
                    <p className="text-gray-600">
                      Achieved a reach of 1,500,000 (1.5M) local attendees and
                      participants.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Let's Collaborate Section */}
        <section
          id="collaborate"
          className="min-h-screen flex items-center justify-center bg-[#f6f7f7] py-20"
        >
          <motion.div
            className="flex flex-col items-center justify-center h-full p-6 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-12 md:p-16">
                  <motion.div
                    className="relative mb-8"
                    variants={titleVariants}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 relative z-10">
                      Let&apos;s Collaborate!
                    </h2>
                    <div className="absolute -bottom-2 left-0 w-24 h-2 bg-purple-500 z-0"></div>
                  </motion.div>

                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Partner with us to leverage the vibrant energy of college
                    festivals. Amplify your brand&apos;s presence with our innovative
                    and comprehensive marketing strategies.
                  </p>

                  <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-lg font-medium">
                    Get in Touch
                  </button>
                </div>

                <div className="relative min-h-[400px] bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-10">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,0 L100,0 L100,100 L0,100 Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <div className="relative z-10 p-8 text-center">
                    <svg
                      className="w-16 h-16 text-white mx-auto mb-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Ready to Partner?
                    </h3>
                    <p className="text-purple-100 mb-6">
                      We&apos;d love to discuss how we can help amplify your brand
                      through college festivals.
                    </p>
                    <button className="px-6 py-2 bg-white text-purple-600 rounded-full hover:bg-gray-100 transition-colors font-medium">
                      Contact Our Team
                    </button>
                  </div>
                </div>
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
