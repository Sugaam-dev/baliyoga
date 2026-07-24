import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../../../components/shared/ScrollReveal";
import SectionHeading from "../../../components/shared/SectionHeading";

const offerings = [
  { icon: "🧘", label: "Yoga Teacher Training" },
  { icon: "🪷", label: "Meditation Retreats" },
  { icon: "🌿", label: "Wellness Programs" },
  { icon: "🔔", label: "Sound Healing Programs" },
  { icon: "✨", label: "Spiritual Workshops" },
  { icon: "🌍", label: "Community Events" },
];

export default function Lifestyle({ lifestyleImg }) {
  return (
    <section className="bg-white py-8 sm:py-10 md:py-12 border-b border-stone-200/50">
      <div className="max-w-7xl min-[1600px]:max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal>
          <span className="flex justify-center uppercase tracking-[0.2em] text-[11px] font-bold text-[#c38b5f] mb-3">
            More Than a Yoga School ✦
          </span>
          <SectionHeading
            title="More Than a"
            highlight="Yoga School"
            subtitle="Bali Yoga Kendra is a thriving community dedicated to conscious living, spiritual exploration, personal growth, and holistic wellness."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-6">

          {/* Left: image */}
          <ScrollReveal>
            <div className="border border-stone-200/60 p-2.5 rounded-[36px]">
              <div className="relative h-[380px] sm:h-[460px] w-full rounded-[28px] overflow-hidden shadow-lg bg-[#efe7da]">
                <img
                  src={lifestyleImg}
                  alt="Bali Yoga Lifestyle"
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent" />
              </div>
            </div>
          </ScrollReveal>

          {/* Right: content */}
          <ScrollReveal delay={0.1}>
            <p className="text-stone-600 text-base leading-relaxed mb-6">
              Bali Yoga Kendra is more than a place to earn a yoga certification. It is a thriving community dedicated to conscious living, spiritual exploration, personal growth, and holistic wellness.
            </p>
            <p className="text-stone-600 text-base leading-relaxed mb-8">
              Our goal is to inspire individuals to live with greater awareness, purpose, compassion, and joy.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {offerings.map((o, i) => (
                <div key={i} className="flex items-center gap-2 bg-[#FAF8F5] border border-stone-200/40 rounded-xl px-3 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <span className="text-lg">{o.icon}</span>
                  <p className="text-stone-700 text-xs font-semibold leading-snug">{o.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
