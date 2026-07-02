import React from "react";

export default function AboutHero({ storyImg }) {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={storyImg}
          alt="About Bali Yoga Kendra"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide">
          About Bali Yoga Kendra
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-stone-100 leading-relaxed max-w-3xl mx-auto">
          Rooted in tradition and guided by mindful living, we offer authentic
          yoga experiences that nurture body, mind, and spirit.
        </p>
      </div>
    </section>
  );
}
