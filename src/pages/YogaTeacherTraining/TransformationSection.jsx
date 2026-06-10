import React from "react";
import { Sparkles } from "lucide-react";

const TransformationSection = () => {
  return (
    <section className="relative overflow-hidden text-center text-white">

      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&q=80"
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
          Begin your{" "}
          <em className="text-[#C8A96A] not-italic">multi style yoga journey</em>{" "}
          in the spiritual heart of Bali
        </blockquote>

        {/* Description */}
        <p className="text-sm md:text-lg text-white/85 leading-[1.8] max-w-2xl mx-auto">
          Discover a deeper connection with yourself through guided multi style practice, ancient wisdom, and a supportive community designed to nurture your growth from the very first step.
        </p>

      </div>
    </section>
  );
};

export default TransformationSection;