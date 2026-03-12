import React from "react";
import heroImg from "./images/hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[420px] md:h-[500px] overflow-hidden">

      {/* Background Image */}
      <img
        src={heroImg}
        alt="200 Hour Yoga Teacher Training in Bali"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        <h1 className="text-white text-3xl md:text-5xl font-semibold mb-4">
          200 Hour Yoga Teacher Training In Bali
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-white text-sm md:text-base">
          <span className="font-medium border-b border-white pb-1">Home</span>
          <span>/</span>
          <span>200 Hour Yoga Teacher Training In Bali</span>
        </div>

      </div>

    </section>
  );
};

export default HeroSection;