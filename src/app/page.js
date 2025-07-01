"use client";
import { useEffect, useState, useRef } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { ContentPanel } from "@/components/ContentPanel";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/About";
import { ServicesSection } from "@/components/ServicesSection";
import { CollegeFestivalsSection } from "@/components/CollegeFestivalsSection";
import { MusicFestivalsSection } from "@/components/MusicFestivalsSection";
import { CollaborationsSection } from "@/components/CollaborationsSection";
import { ArtistNetworkSection } from "@/components/ArtistNetworkSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { Footer } from "@/components/Footer";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sectionRef = useRef(null);

  const collegeImages = [
    {
      src: "/collegefestival1.jpg",
      title: "(College) - Dhruva - IIM Trichy",
    },
    {
      src: "/collegefestival2.jpg",
      title: "(College) - GL Bajaj - Mohan Sisters 1",
    },
    {
      src: "/collegefestival3.jpg",
      title: "(College) - Kshitij - IIT Kharagpur - Krsna",
    },
    {
      src: "/collegefestival4.jpg",
      title: "(College) - Pravega - IISC Bangalore - Amit Trivedi",
    },
    {
      src: "/collegefestival5.jpg",
      title: "(College) - Blithchron - IIT GandhiNagar - Antara Mitra",
    },
    {
      src: "/collegefestival6.jpg",
      title: "(College) - Rhapsody - IISC Bangalore - Shreya Ghoshal 4 ",
    },
    {
      src: "/collegefestival7.JPEG",
      title: "(College) - GL Bajaj - Shreya Ghoshal",
    },
  ];

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
  ];

  useEffect(() => {
    const throttle = (func, limit) => {
      let lastFunc;
      let lastRan;
      return function (...args) {
        if (!lastRan) {
          func(...args);
          lastRan = Date.now();
        } else {
          clearTimeout(lastFunc);
          lastFunc = setTimeout(() => {
            if (Date.now() - lastRan >= limit) {
              func(...args);
              lastRan = Date.now();
            }
          }, limit);
        }
      };
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if section is in view
      const isInView = rect.top <= windowHeight && rect.bottom >= 0;

      if (isInView) {
        const sectionHeight = section.offsetHeight;
        // Adjust scroll progress to ensure first image is selected at top
        const scrollProgress = Math.max(
          0,
          Math.min(1, -rect.top / (sectionHeight - windowHeight))
        );

        // Map scroll progress to image index
        const newImageIndex = Math.min(
          collegeImages.length - 1,
          Math.floor(scrollProgress * collegeImages.length)
        );

        setCurrentImageIndex(newImageIndex);
      } else if (rect.top > windowHeight) {
        // Ensure first image is shown when section is above viewport
        setCurrentImageIndex(0);
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 50);
    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [collegeImages.length]);

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
        <Navbar
          scrollToSection={scrollToSection}
          openMenu={openMenu}
          isMenuOpen={isMenuOpen}
        />
        <Sidebar
          isMenuOpen={isMenuOpen}
          openMenu={openMenu}
          scrollToSection={scrollToSection}
          navLinks={navLinks}
        />
        <ContentPanel isContentOpen={isContentOpen} />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CollegeFestivalsSection
          sectionRef={sectionRef}
          collegeImages={collegeImages}
          currentImageIndex={currentImageIndex}
        />
        <MusicFestivalsSection />
        <CollaborationsSection />
        <ArtistNetworkSection />
        <ExpertiseSection />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
