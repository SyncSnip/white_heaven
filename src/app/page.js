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
import { Footer } from "@/components/Footer";
import { ArtistBooking } from "@/components/ArtistBookings";
import { GetInTouch } from "@/components/GetInTouch";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [collegeFestivalsIndex, setCollegeFestivalsIndex] = useState(0);
  const [artistBookingIndexBollywood, setArtistBookingIndexBollywood] =
    useState(0);
  const [artistBookingIndexDj, setArtistBookingIndexDj] = useState(0);
  const [artistBookingIndexComedy, setArtistBookingIndexComedy] = useState(0);
  const [artistBookingIndexBands, setArtistBookingIndexBands] = useState(0);
  const [artistBookingIndexSpokenArt, setArtistBookingIndexSpokenArt] =
    useState(0);
  const [
    artistBookingIndexSingerSongwriters,
    setArtistBookingIndexSingerSongwriters,
  ] = useState(0);
  const [
    artistBookingIndexEventProduction,
    setArtistBookingIndexEventProduction,
  ] = useState(0);
  const [artistBookingIndexMusicFestival, setArtistBookingIndexMusicFestival] =
    useState(0);

  const collegeFestivalsRef = useRef(null);
  const artistBookingBollywoodRef = useRef(null);
  const artistBookingDjRef = useRef(null);
  const artistBookingComedyRef = useRef(null);
  const artistBookingBandsRef = useRef(null);
  const artistBookingSpokenArtRef = useRef(null);
  const artistBookingSingerSongwritersRef = useRef(null);
  const artistBookingEventProductionRef = useRef(null);
  const artistBookingMusicFestivalRef = useRef(null);

  const collegeImages = [
    { src: "/collegefestival1.jpg", title: "IIM Trichy - Dhruva" },
    { src: "/collegefestival2.jpg", title: "GL Bajaj - Mohan Sisters" },
    { src: "/collegefestival3.jpg", title: "IIT Kharagpur - Kshitij" },
    { src: "/collegefestival4.jpg", title: "IISC Bangalore - Pravega" },
    { src: "/collegefestival5.jpg", title: "IIT GandhiNagar - Blithchron" },
    { src: "/collegefestival6.jpg", title: "IISC Bangalore - Rhapsody" },
    { src: "/collegefestival7.JPEG", title: "GL Bajaj" },
  ];

  const artistImagesBollywood = [
    { src: "/artistBooking/artistbookingbollywood1.jpg" },
    { src: "/artistBooking/artistbookingbollywood2.jpg" },
    { src: "/artistBooking/artistbookingbollywood3.jpg" },
    { src: "/artistBooking/artistbookingbollywood4.jpg" },
    { src: "/artistBooking/artistbookingbollywood6.jpg" },
  ];

  const artistImagesDj = [
    { src: "/artistBooking/dj1.jpg" },
    { src: "/artistBooking/dj2.jpg" },
    { src: "/artistBooking/dj3.jpg" },
    { src: "/artistBooking/dj4.jpg" },
  ];

  const artistImagesComedy = [
    { src: "/artistBooking/comedy1.jpg" },
    { src: "/artistBooking/comedy2.jpg" },
    { src: "/artistBooking/comedy3.jpg" },
    { src: "/artistBooking/comedy4.jpg" },
  ];

  const artistImagesBands = [
    { src: "/artistBooking/band1.jpg" },
    { src: "/artistBooking/band2.jpg" },
    {
      src: "/artistBooking/band3.jpg",
      title: "(Bands) - As We Keep Searching1",
    },
    { src: "/artistBooking/band4.jpg" },
    { src: "/artistBooking/band5.jpg" },
  ];

  const artistImagesSpokenArt = [{ src: "/artistBooking/spokenart.jpg" }];

  const artistImagesSingerSongwriters = [
    { src: "/artistBooking/singer1.jpg" },
    { src: "/artistBooking/singer2.jpg" },
  ];

  const artistImagesEventProduction = [
    { src: "/artistBooking/eventproduction1.jpg" },
    { src: "/artistBooking/eventproduction2.jpg" },
    { src: "/artistBooking/eventproduction3.jpg" },
    { src: "/artistBooking/eventproduction4.JPEG" },
    { src: "/artistBooking/eventproduction5.JPEG" },
    { src: "/artistBooking/eventproduction6.JPEG" },
  ];

  const artistImagesMusicFestival = [
    { src: "/artistBooking/musicfestival1.jpg" },
    { src: "/artistBooking/musicfestival2.jpg" },
    { src: "/artistBooking/musicfestival3.jpg" },
    { src: "/artistBooking/musicfestival4.jpg" },
    { src: "/artistBooking/musicfestival5.jpg" },
    { src: "/artistBooking/musicfestival6.jpg" },
    { src: "/artistBooking/musicfestival7.jpg" },
    { src: "/artistBooking/musicfestival8.jpg" },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services Offered", href: "#services" },
    {
      name: "What Do We Do?",
      href: "#what-do-we-do",
      subLinks: [
        { name: "College Festivals", href: "#college-festivals" },
        { name: "Artist Booking", href: "#artistbooking" },
        { name: "Event Production", href: "#eventproduction" },
        { name: "Music Festival", href: "#music-festivals" },
      ],
    },
    { name: "Lets's Get In Touch", href: "#get-in-touch" },
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

      // Handle ArtistBooking Event Production
      if (artistBookingEventProductionRef.current) {
        const section = artistBookingEventProductionRef.current;
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= windowHeight && rect.bottom >= 0;

        if (isInView && window.innerWidth >= 768) {
          const sectionHeight = section.offsetHeight;
          const scrollProgress = Math.max(
            0,
            Math.min(1, -rect.top / (sectionHeight - windowHeight))
          );
          const newImageIndex = Math.min(
            artistImagesEventProduction.length - 1,
            Math.floor(scrollProgress * artistImagesEventProduction.length)
          );
          setArtistBookingIndexEventProduction(newImageIndex);
        } else if (rect.top > windowHeight) {
          setArtistBookingIndexEventProduction(0);
        }
      }

      // Handle ArtistBooking Music Festival
      if (artistBookingMusicFestivalRef.current) {
        const section = artistBookingMusicFestivalRef.current;
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= windowHeight && rect.bottom >= 0;

        if (isInView && window.innerWidth >= 768) {
          const sectionHeight = section.offsetHeight;
          const scrollProgress = Math.max(
            0,
            Math.min(1, -rect.top / (sectionHeight - windowHeight))
          );
          const newImageIndex = Math.min(
            artistImagesMusicFestival.length - 1,
            Math.floor(scrollProgress * artistImagesMusicFestival.length)
          );
          setArtistBookingIndexMusicFestival(newImageIndex);
        } else if (rect.top > windowHeight) {
          setArtistBookingIndexMusicFestival(0);
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
    artistImagesEventProduction.length,
    artistImagesMusicFestival.length,
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
        <ServicesSection scrollToSection={scrollToSection} />
        <CollegeFestivalsSection
          sectionRef={collegeFestivalsRef}
          collegeImages={collegeImages}
          currentImageIndex={collegeFestivalsIndex}
          setCurrentImageIndex={setCollegeFestivalsIndex}
        />
        <div id="artistbooking">
          <ArtistBooking
            sectionRef={artistBookingBollywoodRef}
            id="artist-booking-bollywood"
            Topic="Bollywood Artists"
            Description="Feel the magic of the mainstream with Bollywood’s biggest voices — from soulful serenades to high-energy hits, we bring the stars that make you dance, sing, and scream with joy."
            images={artistImagesBollywood}
            currentImageIndex={artistBookingIndexBollywood}
            setCurrentImageIndex={setArtistBookingIndexBollywood}
            imagePositionType={2}
            showSideTitle={true}
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
            showSideTitle={true}
          />
          <ArtistBooking
            sectionRef={artistBookingComedyRef}
            id="artist-booking-comedy"
            Topic="Comedy"
            Description="Tired of lectures and lab reports? India’s top comics are here to turn your fest into a laugh riot. Wit, roast, or relatable chaos — we’ve got it all."
            images={artistImagesComedy}
            currentImageIndex={artistBookingIndexComedy}
            setCurrentImageIndex={setArtistBookingIndexComedy}
            imagePositionType={2}
            showSideTitle={true}
          />
          <ArtistBooking
            sectionRef={artistBookingBandsRef}
            id="artist-booking-bands"
            Topic="Bands"
            Description="If you're craving something real, raw, and ridiculously good — India’s freshest indie bands will hit you with tunes that feel both new and nostalgic."
            images={artistImagesBands}
            currentImageIndex={artistBookingIndexBands}
            setCurrentImageIndex={setArtistBookingIndexBands}
            imagePositionType={1}
            showSideTitle={true}
          />
          <ArtistBooking
            sectionRef={artistBookingSpokenArtRef}
            id="artist-booking-spoken-art"
            Topic="Spoken Art"
            Description="Not into loud beats? We’ve got artists who speak to your soul. From poetry to storytelling, experience performances that stay with you long after the mic drops."
            images={artistImagesSpokenArt}
            currentImageIndex={artistBookingIndexSpokenArt}
            setCurrentImageIndex={setArtistBookingIndexSpokenArt}
            imagePositionType={2}
            showSideTitle={true}
          />
          <ArtistBooking
            sectionRef={artistBookingSingerSongwritersRef}
            id="artist-booking-singer-songwriters"
            Topic="Singer-Songwriters"
            Description="Stripped-down sets, honest lyrics, and pure vibes. Perfect for evenings that call for quiet magic and a crowd that listens."
            images={artistImagesSingerSongwriters}
            currentImageIndex={artistBookingIndexSingerSongwriters}
            setCurrentImageIndex={setArtistBookingIndexSingerSongwriters}
            imagePositionType={1}
            showSideTitle={true}
          />
        </div>
        <div id="eventproduction">
          <ArtistBooking
            sectionRef={artistBookingEventProductionRef}
            id="artist-booking-event-production"
            Topic="Event Production"
            Description="From stunning stage designs to flawless sound and lighting, our event production team crafts unforgettable experiences tailored to your vision."
            images={artistImagesEventProduction}
            currentImageIndex={artistBookingIndexEventProduction}
            setCurrentImageIndex={setArtistBookingIndexEventProduction}
            imagePositionType={2}
          />
        </div>
        <div id="music-festivals">
          <ArtistBooking
            sectionRef={artistBookingMusicFestivalRef}
            id="artist-booking-music-festival"
            Topic="Music Festival"
            Description="Curate epic music festivals with our expertise in booking top-tier artists and creating vibrant, crowd-pulling events that resonate with music lovers."
            images={artistImagesMusicFestival}
            currentImageIndex={artistBookingIndexMusicFestival}
            setCurrentImageIndex={setArtistBookingIndexMusicFestival}
            imagePositionType={1}
          />
        </div>
        <GetInTouch />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
