// HomePage.jsx
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
import { ArtistBooking } from "@/components/ArtistBookings";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [collegeFestivalsIndex, setCollegeFestivalsIndex] = useState(0); // For CollegeFestivalsSection
  const [artistBookingIndexbollywood, setArtistBookingIndexbollywood] = useState(0); // For ArtistBooking
  const [artistBookingIndexDj, setArtistBookingIndexDj] = useState(0); // For ArtistBooking
  const [comedy, setComedy] = useState(0); // For ArtistBooking
  const [bands, setBands] = useState(0); // For ArtistBooking
  const [spokenArt, setSpokenArt] = useState(0); // For ArtistBooking
  const [singerSongWrites, setSingerSongWriters] = useState(0); // For ArtistBooking

  const collegeFestivalsRef = useRef(null);
  const artistBookingbollywoodRef = useRef(null);
  const artistBookingDjRef = useRef(null);
  const artistBookingComdeyRed = useRef(null);
  const artistBookingBrandsRef = useRef(null);
  const artistBookingSpokenArtRef = useRef(null);
  const artistBookingSingerSongWriterRef = useRef(null);

  const collegeImages = [
    { src: "/collegefestival1.jpg", title: "Dhruva - IIM Trichy" },
    { src: "/collegefestival2.jpg", title: "GL Bajaj - Mohan Sisters 1" },
    { src: "/collegefestival3.jpg", title: "Kshitij - IIT Kharagpur - Krsna" },
    { src: "/collegefestival4.jpg", title: "Pravega - IISC Bangalore - Amit Trivedi" },
    { src: "/collegefestival5.jpg", title: "Blithchron - IIT GandhiNagar - Antara Mitra" },
    { src: "/collegefestival6.jpg", title: "Rhapsody - IISC Bangalore - Shreya Ghoshal 4" },
    { src: "/collegefestival7.JPEG", title: "GL Bajaj - Shreya Ghoshal" },
  ];

  const artistImagesbollywood = [
    { src: "/artist1.jpg", title: "Artist - Arijit Singh" },
    { src: "/artist2.jpg", title: "Artist - AR Rahman" },
    { src: "/artist3.jpg", title: "Artist - Anuv Jain" },
    { src: "/artist4.jpg", title: "Artist - Diljit Dosanjh" },
  ];
  const artistImagesDj = [
    { src: "/artist1.jpg", title: "Artist - Arijit Singh" },
    { src: "/artist2.jpg", title: "Artist - AR Rahman" },
    { src: "/artist3.jpg", title: "Artist - Anuv Jain" },
    { src: "/artist4.jpg", title: "Artist - Diljit Dosanjh" },
  ];
  const artistImagesComedy = [
    { src: "/artist1.jpg", title: "Artist - Arijit Singh" },
    { src: "/artist2.jpg", title: "Artist - AR Rahman" },
    { src: "/artist3.jpg", title: "Artist - Anuv Jain" },
    { src: "/artist4.jpg", title: "Artist - Diljit Dosanjh" },
  ];
  const artistImagesBands = [
    { src: "/artist1.jpg", title: "Artist - Arijit Singh" },
    { src: "/artist2.jpg", title: "Artist - AR Rahman" },
    { src: "/artist3.jpg", title: "Artist - Anuv Jain" },
    { src: "/artist4.jpg", title: "Artist - Diljit Dosanjh" },
  ];
  const artistImagesSpokenArt = [
    { src: "/artist1.jpg", title: "Artist - Arijit Singh" },
    { src: "/artist2.jpg", title: "Artist - AR Rahman" },
    { src: "/artist3.jpg", title: "Artist - Anuv Jain" },
    { src: "/artist4.jpg", title: "Artist - Diljit Dosanjh" },
  ];
  const artistImagesSingerSongwriters = [
    { src: "/artist1.jpg", title: "Artist - Arijit Singh" },
    { src: "/artist2.jpg", title: "Artist - AR Rahman" },
    { src: "/artist3.jpg", title: "Artist - Anuv Jain" },
    { src: "/artist4.jpg", title: "Artist - Diljit Dosanjh" },
  ];


  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services Offered", href: "#services" },
    { name: "College Festivals", href: "#college-festivals" },
    { name: "Artist Booking", href: "#artist-booking" },
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
      // Handle CollegeFestivalsSection
      if (collegeFestivalsRef.current) {
        const section = collegeFestivalsRef.current;
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isInView = rect.top <= windowHeight && rect.bottom >= 0;

        if (isInView && window.innerWidth >= 768) {
          const sectionHeight = section.offsetHeight;
          const scrollProgress = Math.max(
            0,
            Math.min(1, -rect.top / (sectionHeight - windowHeight))
          );
          const newImageIndex = Math.min(
            collegeImages.length - 1,
            Math.floor(scrollProgress * collegeImages.length)
          );
          setCollegeFestivalsIndex(newImageIndex);
        } else if (rect.top > windowHeight) {
          setCollegeFestivalsIndex(0);
        }
      }

      // Handle ArtistBookingBollywood
      if (artistBookingbollywoodRef.current) {
        const section = artistBookingbollywoodRef.current;
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isInView = rect.top <= windowHeight && rect.bottom >= 0;

        if (isInView && window.innerWidth >= 768) {
          const sectionHeight = section.offsetHeight;
          const scrollProgress = Math.max(
            0,
            Math.min(1, -rect.top / (sectionHeight - windowHeight))
          );
          const newImageIndex = Math.min(
            artistImagesbollywood.length - 1,
            Math.floor(scrollProgress * artistImagesbollywood.length)
          );
          setArtistBookingIndexbollywood(newImageIndex);
        } else if (rect.top > windowHeight) {
          setArtistBookingIndexbollywood(0);
        }
      }
      // Handle ArtistBookingDj
      if (artistBookingDjRef.current) {
        const section = artistBookingDjRef.current;
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isInView = rect.top <= windowHeight && rect.bottom >= 0;

        if (isInView && window.innerWidth >= 768) {
          const sectionHeight = section.offsetHeight;
          const scrollProgress = Math.max(
            0,
            Math.min(1, -rect.top / (sectionHeight - windowHeight))
          );
          const newImageIndex = Math.min(
            artistImagesDj.length - 1,
            Math.floor(scrollProgress * artistImagesDj.length)
          );
          artistBookingIndexDj(newImageIndex);
        } else if (rect.top > windowHeight) {
          artistBookingIndexDj(0);
        }
      }
      // Handle ArtistBooking
      if (artistBookingbollywoodRef.current) {
        const section = artistBookingbollywoodRef.current;
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isInView = rect.top <= windowHeight && rect.bottom >= 0;

        if (isInView && window.innerWidth >= 768) {
          const sectionHeight = section.offsetHeight;
          const scrollProgress = Math.max(
            0,
            Math.min(1, -rect.top / (sectionHeight - windowHeight))
          );
          const newImageIndex = Math.min(
            artistImagesbollywood.length - 1,
            Math.floor(scrollProgress * artistImagesbollywood.length)
          );
          setArtistBookingIndexbollywood(newImageIndex);
        } else if (rect.top > windowHeight) {
          setArtistBookingIndexbollywood(0);
        }
      }
      // Handle ArtistBooking
      if (artistBookingbollywoodRef.current) {
        const section = artistBookingbollywoodRef.current;
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isInView = rect.top <= windowHeight && rect.bottom >= 0;

        if (isInView && window.innerWidth >= 768) {
          const sectionHeight = section.offsetHeight;
          const scrollProgress = Math.max(
            0,
            Math.min(1, -rect.top / (sectionHeight - windowHeight))
          );
          const newImageIndex = Math.min(
            artistImagesbollywood.length - 1,
            Math.floor(scrollProgress * artistImagesbollywood.length)
          );
          setArtistBookingIndexbollywood(newImageIndex);
        } else if (rect.top > windowHeight) {
          setArtistBookingIndexbollywood(0);
        }
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 50);
    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [collegeImages.length, artistImagesbollywood.length, artistImagesDj.length, artistImagesDj.length]);

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
          sectionRef={collegeFestivalsRef}
          collegeImages={collegeImages}
          currentImageIndex={collegeFestivalsIndex}
          setCurrentImageIndex={setCollegeFestivalsIndex}
        />

        <ArtistBooking
          sectionRef={artistBookingbollywoodRef}
          Topic={"Bollywood Artists"}
          Description={
            "Feel the magic of the mainstream with Bollywood’s biggest voices — from soulful serenades to high-energy hits, we bring the stars that make you dance, sing, and scream with joy."
          }
          images={artistImagesbollywood}
          currentImageIndex={artistBookingIndexbollywood}
          setCurrentImageIndex={setArtistBookingIndexbollywood}
          imagePositionType={2}
        />
        <ArtistBooking
          sectionRef={artistBookingDjRef}
          images={artistImagesDj}
          Topic={"DJ"}
          Description={
            "Turn the volume up and the lights down — whether it's EDM, commercial, or desi beats, our DJs know exactly how to keep the crowd on its feet till sunrise."
          }
          currentImageIndex={artistBookingIndexDj}
          setCurrentImageIndex={setArtistBookingIndexDj}
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