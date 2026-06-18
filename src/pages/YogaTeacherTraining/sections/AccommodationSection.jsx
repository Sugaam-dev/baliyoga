import React, { useState, useEffect } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getIcon } from "./icons";

/**
 * Expects: data = courseData.accommodationSection.content
 * Shape:
 * {
 *   title, highlight, subtitle,
 *   rooms: { type, tag, tagBg, price, img, desc, features: string[] }[],
 *   amenities: { icon, label }[],
 *   buttonText, url
 * }
 */
const AccommodationSection = ({ data }) => {
  const [activeRoom, setActiveRoom] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!data) return null;
  const { title, highlight, subtitle, rooms = [], amenities = [], buttonText, url } = data;
  const room = rooms[activeRoom];
  if (!room) return null;

  return (
    <section className="bg-[#1A2456] text-white py-14 lg:py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-4xl font-semibold mb-2">
            {title} <em className="text-[#C8A96A] not-italic">{highlight}</em>
          </h2>
          <p className="text-white/70 max-w-lg text-sm md:text-base">
            {subtitle}
          </p>
        </div>

        {/* Room tabs */}
        <div className="flex gap-2.5 overflow-x-auto pb-1.5 mb-7 scrollbar-hide">
          {rooms.map((r, i) => (
            <button
              key={i}
              onClick={() => setActiveRoom(i)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full border text-sm cursor-pointer transition-colors ${activeRoom === i ? "bg-white text-[#1A2456] border-white" : "bg-transparent text-white border-white/25"}`}
            >
              {r.type}
            </button>
          ))}
        </div>

        {/* Main grid */}
        <div className={`grid gap-6 ${isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
          {/* Image */}
          <div className="rounded-2xl overflow-hidden min-h-[250px] h-[clamp(250px,40vw,420px)] shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            <img src={room.img} alt={room.type} loading="lazy" className="w-full h-full object-cover" />
          </div>

          {/* Content card */}
          <div className="bg-white text-[#1A2456] rounded-2xl p-6 md:p-9 shadow-[0_8px_24px_rgba(0,0,0,0.15)] flex flex-col justify-between">
            <div>
              <span
                className="text-white px-3.5 py-1 rounded-full text-xs"
                style={{ backgroundColor: room.tagBg }}
              >
                {room.tag}
              </span>
              <h2 className="text-xl md:text-2xl font-semibold mt-3 mb-2">{room.type}</h2>
              <p className="text-gray-500 text-sm mb-5">{room.desc}</p>
              <div className="grid grid-cols-2 gap-2.5">
                {(room.features || []).map((f, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-sm text-gray-700">
                    <CheckCircle size={14} className="text-[#7BAF8A] flex-shrink-0" /> {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <div className="text-lg font-semibold text-[#1A2456] mb-3">{room.price}</div>
              <Link
                to={url || "/contact"}
                className="inline-flex items-center gap-2 bg-[#1A2456] text-white font-medium text-sm px-5 py-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-200 no-underline"
              >
                {buttonText || "Book Now"} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Amenities */}
        {amenities.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Amenities</h3>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3.5">
              {amenities.map((a, i) => (
                <div key={i} className="bg-white/8 text-white p-3.5 rounded-xl text-center">
                  <div className="flex justify-center mb-1.5">{getIcon(a.icon, 18)}</div>
                  <div className="text-xs">{a.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
};

export default AccommodationSection;