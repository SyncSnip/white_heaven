import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Image paths (ensure these are in the public/about/ directory)
const images = [
  "/about/1.png",
  "/about/2.png",
  "/about/3.png",
  "/about/4.png",
  "/about/5.png",
];

export const AboutSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Slider settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-50 py-8 sm:py-12"
    >
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center w-full p-4 sm:p-6 max-w-7xl mx-auto gap-4 sm:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        {/* Text Content */}
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl w-full lg:w-1/2">
          <SectionHeader title="About Us" highlightColor="bg-yellow-300" />
          <div className="space-y-4 sm:space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed mt-6 sm:mt-8">
            <p>
              <strong className="text-slate-900 font-semibold">
                White Heaven Entertainments Pvt. Ltd.
              </strong>{" "}
              is a premier live entertainment and artist programming company
              that has been revolutionizing the event experience since{" "}
              <span className="font-medium text-black">2013</span>.
            </p>
            <p>
              From{" "}
              <span className="text-yellow-500 font-medium">
                stadium-sized spectacles
              </span>{" "}
              to intimate cultural showcases, we deliver{" "}
              <span className="font-medium">end-to-end curation</span>,
              immersive{" "}
              <span className="font-medium">arena production design</span>, and
              flawless show execution.
            </p>
            <p>
              Our vibrant universe includes{" "}
              <span className="font-semibold text-indigo-600">music</span>,{" "}
              <span className="font-semibold text-pink-500">art</span>,{" "}
              <span className="font-semibold text-green-600">comedy</span>,{" "}
              <span className="font-semibold text-blue-500">storytelling</span>,
              and more — working with top-tier talent to craft unforgettable
              audience experiences.
            </p>
            <p>
              Whether it&apos;s a{" "}
              <span className="text-black font-medium">headline concert</span>,
              a{" "}
              <span className="text-black font-medium">
                multi-genre festival
              </span>
              , or a stunning{" "}
              <span className="text-black font-medium">visual production</span>,
              we create moments that echo long after the lights fade.
            </p>
          </div>
        </div>

        {/* Image Slider */}
        <div className="w-full lg:w-1/2 h-full">
          <Slider {...sliderSettings}>
            {images.map((image, index) => (
              <div key={index} className="px-2 h-full">
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-2xl"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    priority={index === 0} // Priority for the first image
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </section>
  );
};
