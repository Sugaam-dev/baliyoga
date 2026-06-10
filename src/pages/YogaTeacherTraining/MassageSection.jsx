import React, { useEffect, useRef, useState } from "react";
import { Clock, Star, Sparkles } from "lucide-react";

const massages = [
  {
    id: 1,
    title: "Deep Tissue Ritual",
    tagline: "Designed to relieve deep-seated muscle tension, chronic stress, and stiffness using slow, deliberate strokes.",
    duration: "60 mins",
    rating: 4.9,
    reviews: 184,
    isPopular: true,
    isPaid: true,
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Himalayan Hot Stone",
    tagline: "Warm, mineral-rich basalt stones are placed strategically to melt away anxiety and restore deeply aligned energy flow.",
    duration: "75 mins",
    rating: 4.8,
    reviews: 92,
    isPopular: false,
    isPaid: true,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Complimentary Aroma Mist",
    tagline: "A brief, relaxing hydration aromatherapy session available to all resort guests during morning welcome check-ins.",
    duration: "15 mins",
    rating: 5.0,
    reviews: 210,
    isPopular: false,
    isPaid: false,
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Swedish Bliss Massage",
    tagline: "Long, gliding strokes mixed with kneading to promote total body relaxation, improved circulation, and optimal flexibility.",
    duration: "50 mins",
    rating: 4.7,
    reviews: 145,
    isPopular: false,
    isPaid: true,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Welcome Scalp Massage",
    tagline: "Enjoy a quick, stress-relieving tension release head massage routine. Completely complimentary.",
    duration: "10 mins",
    rating: 4.9,
    reviews: 76,
    isPopular: true,
    isPaid: false,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
  },
];

// Triplicate for infinite scroll illusion
const infiniteMassages = [...massages, ...massages, ...massages];

const MassageSection = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
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
  }, [isPaused]);

  return (
    <section className="w-full bg-[#1A2456] py-14 md:py-20 px-4 md:px-10 overflow-hidden">

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#7BAF8A] bg-[rgba(123,175,138,0.1)] px-3.5 py-1.5 rounded-full mb-3">
          Relaxation Menu
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-2">
          Signature <span className="text-[#7BAF8A]">Massage Treatments</span>
        </h2>
        <p className="text-white/60 text-sm max-w-xl leading-relaxed">
          Unwind your body and restore your muscle flexibility after intensive yoga training sessions with expert therapies.
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
              <img
                src={m.image}
                alt={m.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
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