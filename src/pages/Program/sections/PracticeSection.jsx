import React, { useEffect, useState } from "react";
import { getIcon } from "./icons";
import MobileCarousel from "../../../components/shared/MobileCarousel";

/**
 * Expects: data = courseData.practiceSection.content
 */
const PracticeSection = ({ data }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  if (!data) return null;
  const { eyebrow, title, highlight, subtitle, practices = [], specialTitle, specialHighlight, specials = [] } = data;

  return (
    <section className="py-12 lg:py-16 px-2.5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm text-gray-500 mb-2">{eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A2456] mb-3">
            {title} <em className="text-[#C8A96A] not-italic">{highlight}</em>
          </h2>
          <p className="max-w-xl mx-auto text-gray-600 text-sm md:text-base">
            {subtitle}
          </p>
        </div>

        {/* Practice cards - Grid on desktop, Carousel on mobile */}
        <div className="mb-16">
          <MobileCarousel
            items={practices}
            gridClass="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            renderItem={(p, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 h-full flex flex-col justify-between ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div>
                  {/* Image */}
                  <div className="h-[220px] relative">
                    <img src={p.img} alt={p.label} loading="lazy" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  {/* Content */}
                  <div className="p-6 bg-white">
                    <div className="w-11 h-11 rounded-xl bg-[#1A2456] text-white flex items-center justify-center mb-3">
                      {getIcon(p.icon, 20)}
                    </div>
                    <h3 className="font-semibold text-lg text-[#1A2456] mb-2">{p.label}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            )}
          />
        </div>

        {/* Special features - Grid on desktop, Carousel on mobile */}
        <div className="bg-white rounded-2xl p-6 md:p-12 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
          <h3 className="text-center text-2xl md:text-3xl font-semibold text-[#1A2456] mb-10">
            {specialTitle} <em className="text-[#C8A96A] not-italic">{specialHighlight}</em>
          </h3>
          <MobileCarousel
            items={specials}
            gridClass="grid-cols-1 sm:grid-cols-3 gap-6"
            renderItem={(s, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#F7F3EF] hover:-translate-y-1.5 transition-transform duration-300 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-[10px] bg-[#1A2456] text-white flex items-center justify-center mb-3">
                    {getIcon(s.icon, 18)}
                  </div>
                  <h4 className="font-semibold text-[#1A2456] mb-1.5">{s.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            )}
          />
        </div>

      </div>
    </section>
  );
};

export default PracticeSection;