import React, { useEffect, useState } from "react";
import { MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);

  const gains = [
    "Basic understanding of yoga teaching course",
    "Taste of authentic yogic lifestyle in Bali",
    "Builds confidence to continue advanced course training",
    "Introduction to multi style yoga — Hatha, Ashtanga & more",
    "YACEP registerable 50-hour foundation certificate",
    "Pathway to extend into 100, 200 or 500-hour TTC",
  ];

  const certificates = [
    { img: "https://www.ombreathe.in/static/media/200.197061cc4d2bc369826c.png", label: "50 Hrs" },
    { img: "https://www.ombreathe.in/static/media/yoga.562f46cb59ea00ca8753.png", label: "Certified" },
    { img: "https://www.ombreathe.in/static/media/YACEP.50cf2e991c78fbe3a13d.png", label: "YACEP" },
  ];

  return (
    <section className="bg-[#F7F3EF]">

      {/* ── HERO BG IMAGE ── */}
      <div className="relative w-full min-h-[500px] lg:min-h-[90vh] max-h-[900px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1600&q=80"
          alt=""
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover object-center block transition-transform duration-[1200ms] ease-in-out ${loaded ? "scale-100" : "scale-110"}`}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,36,86,0.55)] to-[rgba(26,36,86,0.9)]" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-3xl mx-auto px-5 py-16 text-center text-white">

          {/* Location */}
          <div className={`inline-flex items-center gap-1.5 text-[#C8A96A] text-sm mb-4 transition-all duration-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <MapPin size={14} />
            Ubud, Bali · 50-Hour Multi Style
          </div>

          {/* Title */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-5 transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <em className="text-[#C8A96A] not-italic">6-Day 50-Hour </em>
            Multi-Style Yoga Training in Bali
          </h1>

          {/* Subtitle */}
          <p className={`text-base md:text-lg text-white/85 mb-7 leading-relaxed transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            An immersive experience to transform your body, mind, and teaching journey
          </p>

          {/* Price */}
          <div className="text-5xl md:text-6xl font-semibold leading-tight mb-2">$650</div>
          <p className="text-sm text-white/80 mb-8">Includes stay, meals & certification</p>

          {/* CTA */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-br from-green-600 via-green-700 to-green-900 text-white font-semibold px-8 py-4 rounded-full text-sm hover:-translate-y-2 hover:scale-105 hover:shadow-[0_15px_35px_rgba(11,78,53,0.6)] transition-all duration-300 animate-[floatingGlow_3.5s_ease-in-out_infinite]"
          >
            Book Now <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* ── BELOW HERO ── */}
      <div className="max-w-6xl mx-auto px-5 py-16">

        {/* Feature image */}
        <div className="rounded-2xl overflow-hidden mb-12 shadow-[0_12px_40px_rgba(0,0,0,0.2)] w-full aspect-[16/10]">
          <img
            src="https://www.ombreathe.in/static/media/Yogalyaa_200_Hour_TTC_1st%20image.68041e974b4b6b7d159e.jpg"
            alt=""
            loading="lazy"
            className="w-full h-full object-cover object-[center_40%] block"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Gains */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mt-0 mb-5 text-[#1A2456]">
              What You'll <em className="text-[#C8A96A] not-italic font-semibold">Gain</em>
            </h2>
            {gains.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 mb-3 text-sm md:text-base leading-relaxed text-gray-700">
                <CheckCircle size={18} className="text-[#7BAF8A] flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Certificates */}
          <div>
            <div className="flex gap-5 flex-wrap items-start">
              {certificates.map((item, i) => (
                <div
                  key={i}
                  className="text-center cursor-default"
                  onMouseEnter={() => setHoverIndex(i)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <div className={`w-20 h-20 mx-auto mb-2.5 flex items-center justify-center transition-transform duration-300 ${hoverIndex === i ? "scale-110" : "scale-100"}`}>
                    <img src={item.img} alt={item.label} loading="lazy" className="max-w-full max-h-full object-contain block" />
                  </div>
                  <div className="text-[#1A2456] text-xs md:text-sm">{item.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm md:text-base leading-relaxed text-gray-700">
              Receive a 50-hour multi style foundation certificate and begin your transformation journey in yoga.
            </p>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes floatingGlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;