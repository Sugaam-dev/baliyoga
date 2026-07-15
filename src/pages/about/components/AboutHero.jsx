import React from "react";

export default function AboutHero({ storyImg }) {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-end justify-start text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src={storyImg} alt="About Bali Yoga Kendra" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-20 space-y-3">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold leading-tight">
          <span className="text-[#c38b5f]">Bali Yoga Kendra</span>
        </h1>
        <p className="text-lg sm:text-xl text-stone-200 font-light">
          Awakening Body, Mind &amp; Spirit
        </p>
      </div>
    </section>
  );
}
