import React, { useState } from "react";
import { Globe, Leaf, Trees, Mountain, Waves, Camera, CheckCircle } from "lucide-react";

const iconMap = {
  globe: <Globe size={16} />,
  leaf: <Leaf size={16} />,
  trees: <Trees size={16} />,
  mountain: <Mountain size={16} />,
  waves: <Waves size={16} />,
  camera: <Camera size={16} />,
};

const excursions = [
  {
    title: "Tirta Empul Temple",
    tag: "Spiritual", tagBg: "bg-[#5B4FCF]",
    duration: "Half Day", icon: "globe",
    img: "https://www.bulgarihotels.com/.imaging/bhr-wide-big-jpg/dam/arteit/80235---the-temple-of-tirta-empul---an-ancient-rit/format-2560x1600-80235/jcr%3Acontent",
    desc: "Sacred purification temple with holy spring pools.",
    highlights: ["Holy water ritual", "Ancient temple", "Spiritual cleansing"],
  },
  {
    title: "Rice Terraces",
    tag: "Nature", tagBg: "bg-[#7BAF8A]",
    duration: "Half Day", icon: "leaf",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    desc: "Famous green rice terraces of Ubud.",
    highlights: ["Rice fields", "Scenic views", "Nature walk"],
  },
  {
    title: "Monkey Forest",
    tag: "Wildlife", tagBg: "bg-[#C8964A]",
    duration: "2 Hours", icon: "trees",
    img: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800&q=80",
    desc: "Jungle sanctuary with ancient temples and monkeys.",
    highlights: ["Wild monkeys", "Temple ruins", "Jungle walk"],
  },
  {
    title: "Mount Batur",
    tag: "Adventure", tagBg: "bg-[#C0444A]",
    duration: "Full Day", icon: "mountain",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    desc: "Sunrise volcano trek with stunning lake views.",
    highlights: ["Sunrise", "Volcano hike", "Lake view"],
  },
  {
    title: "Tanah Lot",
    tag: "Cultural", tagBg: "bg-[#2E3A87]",
    duration: "Half Day", icon: "waves",
    img: "https://wallpaperaccess.com/full/139164.jpg",
    desc: "Iconic ocean temple with breathtaking sunset views.",
    highlights: ["Ocean temple", "Sunset", "Coastal walk"],
  },
  {
    title: "Ubud Walk",
    tag: "Culture", tagBg: "bg-[#9A7D2E]",
    duration: "3 Hours", icon: "camera",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    desc: "Explore local markets, art galleries & Balinese culture.",
    highlights: ["Local markets", "Art & craft", "Cultural walk"],
  },
];

const ExcursionSection = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-white py-12 lg:py-16 px-2.5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-gray-500 mb-2">Excursions</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A2456] mb-3">
            Explore <em className="text-[#C8A96A] not-italic">Bali Experiences</em>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-lg">
            Discover culture, nature, and spirituality through curated experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {excursions.map((exc, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden bg-white cursor-pointer transition-all duration-300 ${hovered === i ? "-translate-y-2 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]" : "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]"}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="h-[200px] relative overflow-hidden">
                <img
                  src={exc.img}
                  alt={exc.title}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-transform duration-300 ${hovered === i ? "scale-105" : "scale-100"}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${hovered === i ? "opacity-85" : "opacity-100"}`} />
                <div className="absolute top-2.5 right-2.5 bg-white px-2.5 py-1 rounded-full text-xs font-medium text-gray-700">
                  {exc.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <span className={`${exc.tagBg} text-white px-2.5 py-1 rounded-full text-xs`}>
                  {exc.tag}
                </span>

                <h3 className="flex items-center gap-2 text-[#1A2456] font-semibold mt-2.5 mb-1">
                  {iconMap[exc.icon]} {exc.title}
                </h3>

                <p className="text-black/60 text-sm leading-snug mb-3">{exc.desc}</p>

                <div className="flex flex-col gap-1.5">
                  {exc.highlights.map((h, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle size={14} className="text-[#7BAF8A] flex-shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-12 bg-[#1A2456] rounded-2xl p-7 text-white text-center">
          <h3 className="font-semibold text-xl mb-2">Bali experiences included ✨</h3>
          <p className="text-white/70 text-sm">Transport, guides & entry fees covered</p>
        </div>

      </div>
    </section>
  );
};

export default ExcursionSection;