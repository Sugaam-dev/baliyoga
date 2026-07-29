import React from "react";
import bali1 from "../../../assets/images/home/bali1.jpg";

export default function ContactHero() {
  return (
    <section className="relative min-h-[380px] md:min-h-[440px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Clean Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bali1}
          alt="Bali Yoga Kendra Contact Us"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#182222]/65" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] mx-auto w-full px-4 sm:px-6 lg:px-6 xl:px-10 py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#e5a93b] uppercase">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif tracking-tight text-white leading-tight">
            Connect With Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-200 font-serif italic max-w-2xl mx-auto leading-relaxed">
            We are here to support your spiritual & yoga journey. Reach out for course details, retreat bookings, or personalized guidance.
          </p>
        </div>
      </div>
    </section>
  );
}
