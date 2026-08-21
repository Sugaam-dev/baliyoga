import React from "react";
import ScrollReveal from "../../../components/shared/ScrollReveal";
import SectionHeading from "../../../components/shared/SectionHeading";

import rishikeshImg from "../../../assets/images/home/bali1.webp";
import mysoreImg from "../../../assets/images/home/bali2.webp";
import chiangMaiImg from "../../../assets/images/home/bali3.webp";
import baliImg from "../../../assets/images/home/balitemple.webp";

const locations = [
  { city: "Rishikesh, India", desc: "The Yoga Capital of the World. Study amidst the sacred energy of the Himalayas and the River Ganges.", img: rishikeshImg },
  { city: "Mysore, India", desc: "A city with a deep connection to traditional Ashtanga Yoga and authentic yogic learning.", img: mysoreImg },
  { city: "Chiang Mai, Thailand", desc: "A peaceful destination celebrated for its rich culture, natural beauty, and wellness community.", img: chiangMaiImg },
  { city: "Bali, Indonesia", desc: "Our home and heart. Experience the spiritual energy and beauty of the Island of the Gods.", img: baliImg },
];

export default function SacredDestinations() {
  return (
    <section className="bg-white py-8 sm:py-10 md:py-12 border-b border-stone-200/50">
      <div className="max-w-7xl min-[1600px]:max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <span className="flex justify-center uppercase tracking-[0.2em] text-[11px] font-bold text-[#854417] mb-3">
            A Global Yoga Community ✦
          </span>
          <SectionHeading
            title="Across Sacred"
            highlight="Destinations"
            subtitle="While proudly based in Bali, our vision extends beyond a single location — offering transformative programs across the world's most renowned spiritual destinations."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {locations.map((loc, i) => (
              <div key={i} className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 border border-stone-200/40">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={loc.img}
                    alt={loc.city}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 text-white font-serif text-base font-semibold drop-shadow">
                    {loc.city}
                  </h3>
                </div>
                <div className="bg-white px-4 py-4">
                  <p className="text-stone-600 text-sm leading-relaxed">{loc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-stone-600 text-sm leading-relaxed mt-8 text-center italic max-w-2xl mx-auto">
            By bringing together the spiritual wisdom of these sacred places, we offer students a truly international learning experience rooted in authentic yogic teachings.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
