import { motion } from "framer-motion";
import { useState } from "react";

export const Card = ({
  icon,
  title,
  description,
  highlightColor = "green",
  scrollToSection,
  link,
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      style={{ perspective: 1000 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative w-full h-80"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT SIDE */}
        <div
          className="absolute inset-0 bg-white p-8 rounded-lg shadow-sm flex flex-col items-center"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {icon && (
            <div className="bg-green-100 p-4 rounded-full mb-4">{icon}</div>
          )}
          <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>
          {typeof description === "string" ? (
            <p className="text-slate-600 text-center line-clamp-5">
              {description}
            </p>
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
              className="mt-4 text-green-600 hover:underline text-sm"
            >
              Read More →
            </button>
          )}
        </div>

        {/* BACK SIDE */}
        <div
          className="absolute inset-0 bg-green-50 p-8 rounded-lg shadow-inner flex items-center justify-center text-center text-green-800 text-lg font-semibold"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          👋 White Heaven
        </div>
      </motion.div>
    </div>
  );
};
