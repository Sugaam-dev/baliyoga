import React, { useEffect, useRef, useState } from "react";
import { Clock, Star, Sparkles } from "lucide-react";

/**
 * Expects: data = courseData.MassageSection.content
 * Shape:
 * {
 *   title, highlight, subtitle,
 *   massages: { id, title, tagline, duration, rating, reviews, isPopular, isPaid, image }[]
 * }
 */
const MassageSection = ({ data }) => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  if (!data) return null;
  const { title, highlight, subtitle, massages = [] } = data;

  // Triplicate for infinite scroll illusion
  const infiniteMassages = [...massages, ...massages, ...massages];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || massages.length === 0) return;
    let rafId;
    const tick = () => {
      if (!isPaused) {
        container.scrollLeft += 1;
        if (container.scrollLeft >= (container.scrollWidth / 3) * 2) {
          container.scrollLeft = container.scrollWidth / 3;
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused, massages.length]);

  if (massages.length === 0) return null;

  return (
    <section className="w-full bg-[#1A2456] py-14 md:py-20 px-4 md:px-10 overflow-hidden">

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#7BAF8A] bg-[rgba(123,175,138,0.1)] px-3.5 py-1.5 rounded-full mb-3">
          Relaxation Menu
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-2">
          {title} <span className="text-[#7BAF8A]">{highlight}</span>
        </h2>
        <p className="text-white/60 text-sm max-w-xl leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-1 cursor-grab"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {infiniteMassages.map((m, index) => (
          <div
            key={`${m.id}-${index}`}
            className="relative flex-shrink-0 w-[82vw] sm:w-[310px] md:w-[340px] bg-white/5 border border-white/15 rounded-[28px] overflow-hidden backdrop-blur-md flex flex-col hover:-translate-y-1.5 hover:border-white/35 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300"
          >
            {/* Popular badge */}
            {m.isPopular && (
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-amber-400 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                <Sparkles size={11} /> Popular
              </div>
            )}

            {/* Image */}
            <div className="h-[190px] overflow-hidden relative">
              <img src={m.image} alt={m.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,36,86,0.4)] to-transparent" />
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Rating + duration */}
              <div className="flex justify-between items-center text-xs mb-3">
                <div className="flex items-center gap-1 text-amber-400 bg-amber-400/10 px-2 py-1 rounded-lg font-medium">
                  <Star size={13} className="fill-amber-400 stroke-amber-400" />
                  <span>{m.rating}</span>
                  <span className="text-white/50 font-normal">({m.reviews})</span>
                </div>
                <div className="flex items-center gap-1 text-slate-400 bg-slate-400/10 px-2 py-1 rounded-lg font-medium">
                  <Clock size={13} /> {m.duration}
                </div>
              </div>

              <h3 className="text-white font-bold text-xl mb-2">{m.title}</h3>
              <p className="text-white/50 text-[13.5px] leading-relaxed line-clamp-2 min-h-[40px]">{m.tagline}</p>

              {/* Status */}
              <div className={`mt-4 pt-4 border-t border-white/10 flex items-center gap-1.5 text-[12.5px] font-semibold ${m.isPaid ? "text-purple-400" : "text-[#7BAF8A]"}`}>
                {m.isPaid ? (
                  <><Star size={14} className="fill-purple-400 stroke-purple-400" /> Premium Treatment</>
                ) : (
                  <><span className="w-1.5 h-1.5 rounded-full bg-[#7BAF8A] inline-block" /> Complimentary Session</>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
};

export default MassageSection;