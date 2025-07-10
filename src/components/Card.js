import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

export const Card = ({
  icon,
  title,
  description,
  highlightColor = "green",
  scrollToSection,
  link,
}) => {
  const controls = useAnimation();
  const [hasRotated, setHasRotated] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleHoverStart = async () => {
    if (!hasRotated && !hovering) {
      setHovering(true);
      setHasRotated(true);
      await controls.start({
        rotateY: 360,
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }, // smoother curve
      });
      controls.set({ rotateY: 0 }); // reset rotation visually
    }
  };

  const handleHoverEnd = () => {
    setHasRotated(false);
    setHovering(false);
  };

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        animate={controls}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        className="bg-white p-8 md:h-80 rounded-lg shadow-md flex flex-col items-center transition-all duration-300"
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        {icon && (
          <div className={`bg-${highlightColor}-100 p-4 rounded-full mb-4`}>
            {icon}
          </div>
        )}

        <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>

        {typeof description === "string" ? (
          <p className="text-slate-600 text-center">{description}</p>
        ) : (
          description.map((text, index) => (
            <p key={index} className="text-slate-600 text-center">
              {text}
            </p>
          ))
        )}

        {link && (
          <button
            onClick={() => scrollToSection(link.substring(1))}
            className="flex items-center space-x-4 cursor-pointer mt-4 flex-col"
          >
            Read More
            <div className={`mt-2 w-16 h-1 bg-${highlightColor}-300 rounded`} />
          </button>
        )}

        {!link && (
          <div className={`mt-4 w-16 h-1 bg-${highlightColor}-300 rounded`} />
        )}
      </motion.div>
    </div>
  );
};
