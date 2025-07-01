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
  const [isImageStackActive, setIsImageStackActive] = useState(false);

  const sectionRef = useRef(null);
  const imageStackRef = useRef(null);

  const collegeImages = [
    "/testImage.png",
    "/testImage.png",
    "/testImage.png",
    "/testImage.png",
    "/testImage.png",
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
    { name: "Audience Reach", href: "#audience-reach" },
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

      const isInView = rect.top <= windowHeight && rect.bottom >= 0;

      if (isInView) {
        setIsImageStackActive(true);

        const sectionHeight = section.offsetHeight;
        const scrollProgress = Math.max(
          0,
          Math.min(
            1,
            (windowHeight - rect.top) / (sectionHeight + windowHeight)
          )
        );

        const imageProgress = scrollProgress * collegeImages.length;
        const newImageIndex = Math.min(
          collegeImages.length - 1,
          Math.floor(imageProgress)
        );

        if (newImageIndex !== currentImageIndex) {
          setCurrentImageIndex(newImageIndex);
        }
      } else {
        setIsImageStackActive(false);
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      document.body.style.overflow = "auto";
    };
  }, [currentImageIndex, collegeImages.length]);

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
        <ArtistNetworkSection/>
        <ExpertiseSection />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
