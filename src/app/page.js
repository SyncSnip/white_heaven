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
import { GetInTouch } from "@/components/GetInTouch";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [collegeFestivalsIndex, setCollegeFestivalsIndex] = useState(0);
  const [artistBookingIndexBollywood, setArtistBookingIndexBollywood] = useState(0);
  const [artistBookingIndexDj, setArtistBookingIndexDj] = useState(0);
  const [artistBookingIndexComedy, setArtistBookingIndexComedy] = useState(0);
  const [artistBookingIndexBands, setArtistBookingIndexBands] = useState(0);
  const [artistBookingIndexSpokenArt, setArtistBookingIndexSpokenArt] = useState(0);
  const [artistBookingIndexSingerSongwriters, setArtistBookingIndexSingerSongwriters] = useState(0);

  const collegeFestivalsRef = useRef(null);
  const artistBookingBollywoodRef = useRef(null);
  const artistBookingDjRef = useRef(null);
  const artistBookingComedyRef = useRef(null);
  const artistBookingBandsRef = useRef(null);
  const artistBookingSpokenArtRef = useRef(null);
  const artistBookingSingerSongwritersRef = useRef(null);

  const collegeImages = [
    { src: "/collegefestival1.jpg", title: "Dhruva - IIM Trichy" },
    { src: "/collegefestival2.jpg", title: "GL Bajaj - Mohan Sisters 1" },
    { src: "/collegefestival3.jpg", title: "Kshitij - IIT Kharagpur - Krsna" },
    { src: "/collegefestival4.jpg", title: "Pravega - IISC Bangalore - Amit Trivedi" },
    { src: "/collegefestival5.jpg", title: "Blithchron - IIT GandhiNagar - Antara Mitra" },
    { src: "/collegefestival6.jpg", title: "Rhapsody - IISC Bangalore - Shreya Ghoshal 4" },
    { src: "/collegefestival7.JPEG", title: "GL Bajaj - Shreya Ghoshal" },
  ];

  const artistImagesBollywood = [
    { src: "/artist1.jpg", title: "Artist - Arijit Singh" },
    { src: "/artist2.jpg", title: "Artist - AR Rahman" },
    { src: "/artist3.jpg", title: "Artist - Anuv Jain" },
    { src: "/artist4.jpg", title: "Artist - Diljit Dosanjh" },
  ];

  const artistImagesDj = [
    { src: "/dj1.jpg", title: "DJ - Artist 1" },
    { src: "/dj2.jpg", title: "DJ - Artist 2" },
    { src: "/dj3.jpg", title: "DJ - Artist 3" },
    { src: "/dj4.jpg", title: "DJ - Artist 4" },
  ];

  const artistImagesComedy = [
    { src: "/comedy1.jpg", title: "Comedian - Artist 1" },
    { src: "/comedy2.jpg", title: "Comedian - Artist 2" },
    { src: "/comedy3.jpg", title: "Comedian - Artist 3" },
    { src: "/comedy4.jpg", title: "Comedian - Artist 4" },
    { src: "/comedy5.jpg", title: "Comedian - Artist 5" },
  ];

  const artistImagesBands = [
    { src: "/band1.jpg", title: "Band - Artist 1" },
    { src: "/band2.jpg", title: "Band - Artist 2" },
    { src: "/band3.jpg", title: "Band - Artist 3" },
    { src: "/band4.jpg", title: "Band - Artist 4" },
    { src: "/band5.jpg", title: "Band - Artist 5" },
  ];

  const artistImagesSpokenArt = [
    { src: "/spokenart1.jpg", title: "Spoken Art - Artist 1" },
    { src: "/spokenart2.jpg", title: "Spoken Art - Artist 2" },
    { src: "/spokenart3.jpg", title: "Spoken Art - Artist 3" },
  ];

  const artistImagesSingerSongwriters = [
    { src: "/singersongwriter1.jpg", title: "Singer-Songwriter - Artist 1" },
    { src: "/singersongwriter2.jpg", title: "Singer-Songwriter - Artist 2" },
    { src: "/singersongwriter3.jpg", title: "Singer-Songwriter - Artist 3" },
    { src: "/singersongwriter4.jpg", title: "Singer-Songwriter - Artist 4" },
    { src: "/singersongwriter5.jpg", title: "Singer-Songwriter - Artist 5" },
  ];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services Offered", href: "#services" },
  { name: "College Festivals", href: "#college-festivals" },
  {
    name: "Artist Booking",
    href: "#artist-booking-bollywood",
    subLinks: [
      { name: "Bollywood", href: "#artist-booking-bollywood" },
      { name: "DJ", href: "#artist-booking-dj" },
      { name: "Comedy", href: "#artist-booking-comedy" },
      { name: "Bands", href: "#artist-booking-bands" },
      { name: "Spoken Art", href: "#artist-booking-spoken-art" },
      { name: "Singer-Songwriters", href: "#artist-booking-singer-songwriters" },
    ],
  },
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
      const windowHeight = window.innerHeight;

      // Handle CollegeFestivalsSection
      if (collegeFestivalsRef.current) {
        const section = collegeFestivalsRef.current;
        const rect = section.getBoundingClientRect();
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

      // Handle ArtistBooking Bollywood
      if (artistBookingBollywoodRef.current) {
        const section = artistBookingBollywoodRef.current;
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= windowHeight && rect.bottom >= 0;

        if (isInView && window.innerWidth >= 768) {
          const sectionHeight = section.offsetHeight;
          const scrollProgress = Math.max(
            0,
            Math.min(1, -rect.top / (sectionHeight - windowHeight))
          );
          const newImageIndex = Math.min(
            artistImagesBollywood.length - 1,
            Math.floor(scrollProgress * artistImagesBollywood.length)
          );
          setArtistBookingIndexBollywood(newImageIndex);
        } else if (rect.top > windowHeight) {
          setArtistBookingIndexBollywood(0);
        }
      }

      // Handle ArtistBooking DJ
      if (artistBookingDjRef.current) {
        const section = artistBookingDjRef.current;
        const rect = section.getBoundingClientRect();
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
          setArtistBookingIndexDj(newImageIndex);
        } else if (rect.top > windowHeight) {
          setArtistBookingIndexDj(0);
        }
      }

      // Handle ArtistBooking Comedy
      if (artistBookingComedyRef.current) {
        const section = artistBookingComedyRef.current;
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= windowHeight && rect.bottom >= 0;

        if (isInView && window.innerWidth >= 768) {
          const sectionHeight = section.offsetHeight;
          const scrollProgress = Math.max(
            0,
            Math.min(1, -rect.top / (sectionHeight - windowHeight))
          );
          const newImageIndex = Math.min(
            artistImagesComedy.length - 1,
            Math.floor(scrollProgress * artistImagesComedy.length)
          );
          setArtistBookingIndexComedy(newImageIndex);
        } else if (rect.top > windowHeight) {
          setArtistBookingIndexComedy(0);
        }
      }

      // Handle ArtistBooking Bands
      if (artistBookingBandsRef.current) {
        const section = artistBookingBandsRef.current;
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= windowHeight && rect.bottom >= 0;

        if (isInView && window.innerWidth >= 768) {
          const sectionHeight = section.offsetHeight;
          const scrollProgress = Math.max(
            0,
            Math.min(1, -rect.top / (sectionHeight - windowHeight))
          );
          const newImageIndex = Math.min(
            artistImagesBands.length - 1,
            Math.floor(scrollProgress * artistImagesBands.length)
          );
          setArtistBookingIndexBands(newImageIndex);
        } else if (rect.top > windowHeight) {
          setArtistBookingIndexBands(0);
        }
      }

      // Handle ArtistBooking Spoken Art
      if (artistBookingSpokenArtRef.current) {
        const section = artistBookingSpokenArtRef.current;
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= windowHeight && rect.bottom >= 0;

        if (isInView && window.innerWidth >= 768) {
          const sectionHeight = section.offsetHeight;
          const scrollProgress = Math.max(
            0,
            Math.min(1, -rect.top / (sectionHeight - windowHeight))
          );
          const newImageIndex = Math.min(
            artistImagesSpokenArt.length - 1,
            Math.floor(scrollProgress * artistImagesSpokenArt.length)
          );
          setArtistBookingIndexSpokenArt(newImageIndex);
        } else if (rect.top > windowHeight) {
          setArtistBookingIndexSpokenArt(0);
        }
      }

      // Handle ArtistBooking Singer-Songwriters
      if (artistBookingSingerSongwritersRef.current) {
        const section = artistBookingSingerSongwritersRef.current;
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= windowHeight && rect.bottom >= 0;

        if (isInView && window.innerWidth >= 768) {
          const sectionHeight = section.offsetHeight;
          const scrollProgress = Math.max(
            0,
            Math.min(1, -rect.top / (sectionHeight - windowHeight))
          );
          const newImageIndex = Math.min(
            artistImagesSingerSongwriters.length - 1,
            Math.floor(scrollProgress * artistImagesSingerSongwriters.length)
          );
          setArtistBookingIndexSingerSongwriters(newImageIndex);
        } else if (rect.top > windowHeight) {
          setArtistBookingIndexSingerSongwriters(0);
        }
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 50);
    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [
    collegeImages.length,
    artistImagesBollywood.length,
    artistImagesDj.length,
    artistImagesComedy.length,
    artistImagesBands.length,
    artistImagesSpokenArt.length,
    artistImagesSingerSongwriters.length,
  ]);

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
          sectionRef={artistBookingBollywoodRef}
          id="artist-booking-bollywood"
          Topic="Bollywood Artists"
          Description="Feel the magic of the mainstream with Bollywood’s biggest voices — from soulful serenades to high-energy hits, we bring the stars that make you dance, sing, and scream with joy."
          images={artistImagesBollywood}
          currentImageIndex={artistBookingIndexBollywood}
          setCurrentImageIndex={setArtistBookingIndexBollywood}
          imagePositionType={2}
        />
        <ArtistBooking
          sectionRef={artistBookingDjRef}
          id="artist-booking-dj"
          Topic="DJ"
          Description="Turn the volume up and the lights down — whether it's EDM, commercial, or desi beats, our DJs know exactly how to keep the crowd on its feet till sunrise."
          images={artistImagesDj}
          currentImageIndex={artistBookingIndexDj}
          setCurrentImageIndex={setArtistBookingIndexDj}
          imagePositionType={1}
        />
        <ArtistBooking
          sectionRef={artistBookingComedyRef}
          id="artist-booking-comedy"
          Topic="Comedy"
          Description="Tired of lectures and lab reports? India’s top comics are here to turn your fest into a laugh riot. Wit, roast, or relatable chaos — we’ve got it all."
          images={artistImagesComedy}
          currentImageIndex={artistBookingIndexComedy}
          setCurrentImageIndex={setArtistBookingIndexComedy}
          imagePositionType={1}
        />
        <ArtistBooking
          sectionRef={artistBookingBandsRef}
          id="artist-booking-bands"
          Topic="Bands"
          Description="If you're craving something real, raw, and ridiculously good — India’s freshest indie bands will hit you with tunes that feel both new and nostalgic."
          images={artistImagesBands}
          currentImageIndex={artistBookingIndexBands}
          setCurrentImageIndex={setArtistBookingIndexBands}
          imagePositionType={2}
        />
        <ArtistBooking
          sectionRef={artistBookingSpokenArtRef}
          id="artist-booking-spoken-art"
          Topic="Spoken Art"
          Description="Not into loud beats? We’ve got artists who speak to your soul. From poetry to storytelling, experience performances that stay with you long after the mic drops."
          images={artistImagesSpokenArt}
          currentImageIndex={artistBookingIndexSpokenArt}
          setCurrentImageIndex={setArtistBookingIndexSpokenArt}
          imagePositionType={1}
        />
        <ArtistBooking
          sectionRef={artistBookingSingerSongwritersRef}
          id="artist-booking-singer-songwriters"
          Topic="Singer-Songwriters"
          Description="Stripped-down sets, honest lyrics, and pure vibes. Perfect for evenings that call for quiet magic and a crowd that listens."
          images={artistImagesSingerSongwriters}
          currentImageIndex={artistBookingIndexSingerSongwriters}
          setCurrentImageIndex={setArtistBookingIndexSingerSongwriters}
          imagePositionType={2}
        />
        <MusicFestivalsSection />
        <CollaborationsSection />
        <ArtistNetworkSection />
        <ExpertiseSection />
        <GetInTouch />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;