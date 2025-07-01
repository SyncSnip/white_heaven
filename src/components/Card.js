import { motion } from "framer-motion";

export const Card = ({ icon, title, description, highlightColor }) => {
  return (
    <motion.div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center transform transition-all duration-300 hover:shadow-md hover:-translate-y-2">
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
      <div className={`mt-6 w-16 h-1 bg-${highlightColor}-300 rounded`}></div>
    </motion.div>
  );
};
