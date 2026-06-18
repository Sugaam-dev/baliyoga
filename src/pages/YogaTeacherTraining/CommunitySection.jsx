import React, { useEffect, useState } from "react";
import { Clock, Heart, Calendar, Award, Globe, Sparkles, Feather } from "lucide-react";

const stats = [
  { value: "50+", label: "Training Hours", icon: <Clock size={20} className="text-white" /> },
  { value: "Beginner", label: "Friendly Program", icon: <Heart size={20} className="text-white" /> },
  { value: "6 Days", label: "Immersive Journey", icon: <Calendar size={20} className="text-white" /> },
  { value: "YACEP", label: "Yoga Certification", icon: <Award size={20} className="text-white" /> },
  { value: "Multi", label: "Style Yoga", icon: <Globe size={20} className="text-white" /> },
];

const CommunitySection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden text-white">

      {/* Background */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-[1200ms] ease-in-out ${visible ? "scale-100" : "scale-110"}`}
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&q=80)" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(87,93,141,0.65)] to-[rgba(54,56,66,0.95)] backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-5 py-20 lg:py-28">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-1.5 text-[#C8A96A] text-sm mb-3">
            <Sparkles size={14} /> World Peace Yoga School Experience
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
            Join our{" "}
            <em className="text-[#C8A96A] not-italic">transformative</em>{" "}
            yoga community
          </h2>
          <p className="max-w-xl mx-auto text-white/75 leading-relaxed text-sm md:text-base">
            Experience authentic multi style yoga in Bali with expert teachers, deep philosophy, and life-changing practices.
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
              <div className="mb-2.5 flex justify-center">{s.icon}</div>
              <div className="text-3xl font-semibold text-[#C8A96A] mb-1">{s.value}</div>
              <div className="text-xs text-white/75">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className={`text-center max-w-2xl mx-auto transition-all duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}>
          <Feather size={14} className="mx-auto mb-3 text-white/60" />
          <p className="leading-[1.8] text-white/85 mb-2 text-sm md:text-base">
            Our 50-hour multi style training is designed for beginners looking to build a strong base in yoga.
          </p>
          <p className="text-white/70 text-sm md:text-base">
            Learn in a peaceful Bali environment while transforming your body, mind, and soul.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CommunitySection;