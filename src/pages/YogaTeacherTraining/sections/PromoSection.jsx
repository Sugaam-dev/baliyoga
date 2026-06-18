import React, { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { getIcon } from "./icons";

/**
 * Expects: data = courseData.promoSection.content
 * Shape:
 * {
 *   eyebrow, title, highlight, duration, strongText,
 *   features: { icon, title, sub }[],
 *   images: { main, food, stay }
 * }
 */
const PromoSection = ({ data }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  if (!data) return null;
  const { eyebrow, title, highlight, duration, strongText, features = [], images = {} } = data;

  return (
    <section className="py-16 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">

          {/* Left */}
          <div>
            <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-3">
              <Sparkles size={14} /> {eyebrow}
            </div>
            <h2 className="text-3xl md:text-4xl font-medium leading-snug mb-6 text-[#1A2456]">
              {title} <em className="text-[#C8A96A] not-italic">{highlight}</em> {duration} journey in{" "}
              <strong>{strongText}</strong>
            </h2>

            <div className="flex flex-col gap-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`flex gap-3.5 p-3.5 rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:translate-x-1.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="min-w-[42px] h-[42px] rounded-xl bg-[#1A2456] text-white flex items-center justify-center flex-shrink-0">
                    {getIcon(f.icon, 18)}
                  </div>
                  <div>
                    <p className="font-semibold text-base text-gray-900 mb-0.5">{f.title}</p>
                    <p className="text-sm text-gray-500 leading-snug">{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="rounded-2xl overflow-hidden h-[clamp(220px,30vw,360px)] relative">
              <img src={images.main} alt="Yoga" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Small images */}
            <div className="grid grid-cols-2 gap-3.5">
              <img src={images.food} alt="Food" loading="lazy" className="w-full h-[150px] object-cover rounded-2xl" />
              <img src={images.stay} alt="Stay" loading="lazy" className="w-full h-[150px] object-cover rounded-2xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PromoSection;