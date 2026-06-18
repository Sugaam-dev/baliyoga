import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { getIcon } from "./icons";

/**
 * Expects: data = courseData.excursionSection.content
 * Shape:
 * {
 *   eyebrow, title, highlight, subtitle,
 *   excursions: { title, tag, tagBg, duration, icon, img, desc, highlights: string[] }[],
 *   bottom: { title, desc }
 * }
 */
const ExcursionSection = ({ data }) => {
  const [hovered, setHovered] = useState(null);

  if (!data) return null;
  const { eyebrow, title, highlight, subtitle, excursions = [], bottom = {} } = data;

  return (
    <section className="bg-white py-12 lg:py-16 px-2.5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-gray-500 mb-2">{eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A2456] mb-3">
            {title} <em className="text-[#C8A96A] not-italic">{highlight}</em>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-lg">
            {subtitle}
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
                <span
                  className="text-white px-2.5 py-1 rounded-full text-xs"
                  style={{ backgroundColor: exc.tagBg }}
                >
                  {exc.tag}
                </span>

                <h3 className="flex items-center gap-2 text-[#1A2456] font-semibold mt-2.5 mb-1">
                  {getIcon(exc.icon, 16)} {exc.title}
                </h3>

                <p className="text-black/60 text-sm leading-snug mb-3">{exc.desc}</p>

                <div className="flex flex-col gap-1.5">
                  {(exc.highlights || []).map((h, j) => (
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
        {(bottom.title || bottom.desc) && (
          <div className="mt-12 bg-[#1A2456] rounded-2xl p-7 text-white text-center">
            {bottom.title && <h3 className="font-semibold text-xl mb-2">{bottom.title}</h3>}
            {bottom.desc && <p className="text-white/70 text-sm">{bottom.desc}</p>}
          </div>
        )}

      </div>
    </section>
  );
};

export default ExcursionSection;