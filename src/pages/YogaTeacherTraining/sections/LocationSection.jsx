import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { getIcon } from "./icons";

/**
 * Expects: data = courseData.locationSection.content
 * Shape:
 * {
 *   eyebrow, title, highlight, subtitle, address, mapEmbed,
 *   spots: { name, distance, desc, icon }[],
 *   stats: { label, value, icon }[]
 * }
 */
const LocationSection = ({ data }) => {
  const [activeSpot, setActiveSpot] = useState(0);

  if (!data) return null;
  const { eyebrow, title, highlight, subtitle, address, mapEmbed, spots = [], stats = [] } = data;

  return (
    <section className="bg-[#F7F3EF] py-14 lg:py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12">

          {/* Left */}
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase font-semibold tracking-wide text-[#5B4FCF]">{eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2456] leading-snug m-0">
              {title}{" "}
              <span className="text-[#5B4FCF] font-bold not-italic">{highlight}</span>
            </h2>
            <p className="text-[#555] text-sm md:text-base leading-relaxed m-0">
              {subtitle}
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
                    {getIcon(s.icon, 18)}
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
            {address && (
              <div className="bg-[#1A2456] text-white rounded-xl p-5 flex gap-3 items-start">
                <MapPin size={20} className="flex-shrink-0 mt-0.5 text-[#C8A96A]" />
                <p className="text-sm leading-relaxed m-0">{address}</p>
              </div>
            )}
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5">
            {/* Map */}
            {mapEmbed && (
              <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-200">
                <iframe
                  title="map"
                  src={mapEmbed}
                  className="w-full border-0 block h-[250px] sm:h-[320px] lg:h-[380px]"
                />
              </div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2.5">
              {stats.map((s, i) => (
                <div key={i} className="bg-white rounded-xl py-3 px-2 text-center shadow-sm flex flex-col items-center gap-1">
                  <div className="text-[#5B4FCF]">{getIcon(s.icon, 18)}</div>
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