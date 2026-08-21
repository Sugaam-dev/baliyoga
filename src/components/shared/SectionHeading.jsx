import React from "react";

const SectionHeading = ({
  title,
  highlight,
  subtitle,
  highlightColor = "#854417",
  textColor = "#1c2e24",
}) => {
  return (
    <div className="text-center mb-8 md:mb-12 px-4">
      {/* Title */}
      <h2 
        className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-3"
        style={{ color: textColor }}
      >
        {title}{" "}
        <em className="not-italic font-normal" style={{ color: highlightColor }}>
          {highlight}
        </em>
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="font-sans text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed mt-4">
          {subtitle}
        </p>
      )}

      {/* Elegant Line Divider */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <span className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#854417]" />
        <i className="text-[#854417] text-sm not-italic">&#10022;</i>
        <span className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#854417]" />
      </div>
    </div>
  );
};

export default SectionHeading;
