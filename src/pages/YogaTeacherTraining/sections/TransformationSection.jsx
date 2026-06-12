import React from "react";
import { Sparkles } from "lucide-react";

/**
 * Expects: data = courseData.transformationSection.content
 * Shape:
 * { bgImage, quoteStart, highlight, quoteEnd, description }
 */
const TransformationSection = ({ data }) => {
  if (!data) return null;
  const { bgImage, quoteStart, highlight, quoteEnd, description } = data;

  return (
    <section className="relative overflow-hidden text-center text-white">

      {/* Background */}
      <img
        src={bgImage}
        alt="Yoga Meditation"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,36,86,0.75)] to-[rgba(26,36,86,0.95)]" />

      {/* Content */}
      <div className="relative max-w-3xl mx-auto px-5 py-24 lg:py-32">

        {/* Icon */}
        <div className="w-[70px] h-[70px] rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto mb-6">
          <Sparkles size={30} className="text-[#C8A96A]" />
        </div>

        {/* Quote */}
        <blockquote className="text-3xl md:text-5xl font-light leading-snug mb-8">
          {quoteStart}{" "}
          <em className="text-[#C8A96A] not-italic">{highlight}</em>{" "}
          {quoteEnd}
        </blockquote>

        {/* Description */}
        <p className="text-sm md:text-lg text-white/85 leading-[1.8] max-w-2xl mx-auto">
          {description}
        </p>

      </div>
    </section>
  );
};

export default TransformationSection;