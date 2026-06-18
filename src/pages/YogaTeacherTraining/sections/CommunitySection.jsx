import React, { useEffect, useState } from "react";
import { Sparkles, Feather } from "lucide-react";
import { getIcon } from "./icons";

/**
 * Expects: data = courseData.communitySection.content
 * Shape:
 * {
 *   bgImage, eyebrow, title, highlight, subtitle,
 *   stats: { value, label, icon }[],
 *   bottomText1, bottomText2
 * }
 */
const CommunitySection = ({ data }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  if (!data) return null;
  const { bgImage, eyebrow, title, highlight, subtitle, stats = [], bottomText1, bottomText2 } = data;

  return (
    <section className="relative overflow-hidden text-white">

      {/* Background */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-[1200ms] ease-in-out ${visible ? "scale-100" : "scale-110"}`}
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(87,93,141,0.65)] to-[rgba(54,56,66,0.95)] backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-5 py-20 lg:py-28">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-1.5 text-[#C8A96A] text-sm mb-3">
            <Sparkles size={14} /> {eyebrow}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
            {title}{" "}
            <em className="text-[#C8A96A] not-italic">{highlight}</em>{" "}
            yoga community
          </h2>
          <p className="max-w-xl mx-auto text-white/75 leading-relaxed text-sm md:text-base">
            {subtitle}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mb-16">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`p-6 rounded-3xl bg-white/8 backdrop-blur-md border border-white/20 text-center cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:scale-103 hover:bg-white/15 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="mb-2.5 flex justify-center text-white">{getIcon(s.icon, 20)}</div>
              <div className="text-3xl font-semibold text-[#C8A96A] mb-1">{s.value}</div>
              <div className="text-xs text-white/75">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className={`text-center max-w-2xl mx-auto transition-all duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}>
          <Feather size={14} className="mx-auto mb-3 text-white/60" />
          {bottomText1 && (
            <p className="leading-[1.8] text-white/85 mb-2 text-sm md:text-base">
              {bottomText1}
            </p>
          )}
          {bottomText2 && (
            <p className="text-white/70 text-sm md:text-base">
              {bottomText2}
            </p>
          )}
        </div>

      </div>
    </section>
  );
};

export default CommunitySection;