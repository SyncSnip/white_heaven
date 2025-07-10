import React from "react";
export const Card = ({
  icon,
  title,
  description,
  highlightColor = "green",
  scrollToSection,
  link,
}) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front bg-white p-8 rounded-lg shadow-sm flex flex-col items-center">
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
          {link ? (
            <button
              onClick={() => scrollToSection(link.substring(1))}
              className="flex items-center space-x-4 cursor-pointer mt-4 flex-col"
            >
              Read More
              <div
                className={`mt-2 w-16 h-1 bg-${highlightColor}-300 rounded`}
              ></div>
            </button>
          ) : (
            <div
              className={`mt-4 w-16 h-1 bg-${highlightColor}-300 rounded`}
            ></div>
          )}
        </div>
        <div className="flip-card-back bg-white p-8 rounded-lg shadow-sm flex flex-col items-center">
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
          {link ? (
            <button
              onClick={() => scrollToSection(link.substring(1))}
              className="flex items-center space-x-4 cursor-pointer mt-4 flex-col"
            >
              Read More
              <div
                className={`mt-2 w-16 h-1 bg-${highlightColor}-300 rounded`}
              ></div>
            </button>
          ) : (
            <div
              className={`mt-4 w-16 h-1 bg-${highlightColor}-300 rounded`}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};
