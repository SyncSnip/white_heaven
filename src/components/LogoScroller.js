import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const logos = [
  "/logos/6.png",
  "/logos/7.png",
  "/logos/8.png",
  "/logos/9.png",
  "/logos/10.png",
  "/logos/11.png",
  "/logos/12.png",
  "/logos/13.png",
  "/logos/14.png",
  "/logos/15.png",
  "/logos/16.png",
  "/logos/17.png",
  "/logos/18.png",
  "/logos/19.png",
  "/logos/20.png",
  "/logos/21.png",
  "/logos/22.png",
  "/logos/23.png",
  "/logos/24.png",
  "/logos/25.png",
  "/logos/26.png",
  "/logos/27.png",
  "/logos/28.png",
  "/logos/29.png",
  "/logos/30.png",
  "/logos/31.png",
  "/logos/32.png",
  "/logos/33.png",
  "/logos/34.png",
  "/logos/35.png",
  "/logos/36.png",
  "/logos/37.png",
  "/logos/38.png",
  "/logos/39.png",
  "/logos/40.png",
  "/logos/41.png",
  "/logos/42.png",
  "/logos/43.png",
  "/logos/44.png",
  "/logos/45.png",
  "/logos/46.png",
  "/logos/47.png",
  "/logos/48.png",
  "/logos/49.png",
  "/logos/50.png",
  "/logos/51.png",
  "/logos/52.png",
  "/logos/53.png",
  "/logos/54.png",
  "/logos/55.png",
  "/logos/56.png",
  "/logos/57.png",
  "/logos/58.png",
  "/logos/59.png",
  "/logos/60.png",
  "/logos/61.png",
  "/logos/62.png",
  "/logos/63.png",
  "/logos/64.png",
  "/logos/65.png",
  "/logos/66.png",
  "/logos/67.png",
  "/logos/68.png",
];

export const LogoScroller = () => {
  const controls = useAnimation();

  const duplicatedLogos = [...logos, ...logos];
  const logoWidth = 100;
  const gap = 12;
  const totalScrollWidth = logos.length * (logoWidth + gap);

  useEffect(() => {
    controls.start({
      x: [0, -totalScrollWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    });
  }, [controls, totalScrollWidth]);

  return (
    <div className="relative w-full overflow-hidden mt-6 sm:mt-8 h-20 sm:h-24">
      <motion.div className="flex gap-3 items-center h-full" animate={controls}>
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="relative h-full w-[100px] flex-shrink-0 flex items-center justify-center"
          >
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              fill
              className="object-contain"
              priority={index < logos.length}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
