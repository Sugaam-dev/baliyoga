import React, { useState } from "react";
import { Globe, Leaf, Sparkles, Trees, Mountain, MapPin, Sun } from "lucide-react";

const iconMap = {
  globe: <Globe size={18} />,
  leaf: <Leaf size={18} />,
  sparkles: <Sparkles size={18} />,
  trees: <Trees size={18} />,
  mountain: <Mountain size={18} />,
  map: <MapPin size={14} />,
  sun: <Sun size={14} />,
};

const spots = [
  { name: "Ubud Center", distance: "5 min walk", desc: "Heart of Bali's culture with cafés, markets & temples.", icon: "globe" },
  { name: "Rice Terraces", distance: "15 min drive", desc: "Famous green landscapes of Bali.", icon: "leaf" },
  { name: "Tirta Empul", distance: "20 min drive", desc: "Sacred water temple for purification rituals.", icon: "sparkles" },
  { name: "Monkey Forest", distance: "8 min walk", desc: "Jungle sanctuary with ancient temples.", icon: "trees" },
  { name: "Mount Batur", distance: "45 min drive", desc: "Sunrise trekking volcano experience.", icon: "mountain" },
];

const stats = [
  { label: "Airport", value: "~75 min", icon: "globe" },
  { label: "Town", value: "5 min", icon: "map" },
  { label: "Altitude", value: "450m", icon: "mountain" },
  { label: "Climate", value: "Tropical", icon: "sun" },
];

const LocationSection = () => {
  const [activeSpot, setActiveSpot] = useState(0);

  return (
    <section className="bg-[#F7F3EF] py-14 lg:py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12">

          {/* Left */}
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase font-semibold tracking-wide text-[#5B4FCF]">Location</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2456] leading-snug m-0">
              Spiritual{" "}
              <span className="text-[#5B4FCF] font-bold not-italic">heart of Bali</span>
            </h2>
            <p className="text-[#555] text-sm md:text-base leading-relaxed m-0">
              Located in Ubud, surrounded by jungle, temples, and nature.
            </p>

            {/* Spots */}
            <div className="mt-2">
              {spots.map((s, i) => (
                <div
                  key={i}
                  onClick={() => setActiveSpot(i)}
                  className={`flex gap-3.5 p-4 rounded-xl cursor-pointer mb-3 border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${activeSpot === i ? "bg-[rgba(91,79,207,0.1)] border-[#5B4FCF]" : "bg-white border-transparent"}`}
                >
                  <div className={`mt-0.5 ${activeSpot === i ? "text-[#5B4FCF]" : "text-gray-400"}`}>
                    {iconMap[s.icon]}
                  </div>
                  <div className="flex-1">
                    <strong className="text-[#1A2456] block text-sm">{s.name}</strong>
                    <div className="text-xs text-[#5B4FCF] font-medium mt-0.5 mb-1">{s.distance}</div>
                    {activeSpot === i && (
                      <p className="text-xs text-gray-600 leading-snug mt-1.5 m-0">{s.desc}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Address */}
            <div className="bg-[#1A2456] text-white rounded-xl p-5 flex gap-3 items-start">
              <MapPin size={20} className="flex-shrink-0 mt-0.5 text-[#C8A96A]" />
              <p className="text-sm leading-relaxed m-0">
                No 77 A, Jl. Bisma, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571, Indonesia
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-200">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Jl.+Bisma+Ubud+Bali+Indonesia&output=embed"
                className="w-full border-0 block h-[250px] sm:h-[320px] lg:h-[380px]"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2.5">
              {stats.map((s, i) => (
                <div key={i} className="bg-white rounded-xl py-3 px-2 text-center shadow-sm flex flex-col items-center gap-1">
                  <div className="text-[#5B4FCF]">{iconMap[s.icon]}</div>
                  <div className="font-bold text-[#1A2456] text-base leading-tight">{s.value}</div>
                  <small className="text-gray-500 text-xs">{s.label}</small>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;