import React from "react";
import { Sparkles, Flower2, CheckCircle2, ArrowRight } from "lucide-react";
import ScrollReveal from "../../components/shared/ScrollReveal";
import baliMeditation from "../../assets/images/home/yogagallery.jpg";

const BaliYogaKendraExperience = () => {
  const features = [
    "Ancient Wisdom & Authentic Teachings",
    "Meditation, Rituals & Healing Practices",
    "Daily Yoga, Breathwork & Philosophy",
    "Nature, Community & Self Discovery",
  ];

  const stats = [
    {
      number: "10+",
      label: "Years Experience",
    },
    {
      number: "5000+",
      label: "Happy Students",
    },
    {
      number: "100%",
      label: "Peaceful Environment",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white border-b border-stone-200/50">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#FAF8F5] z-0"></div>

      {/* Blur Effects */}
      <div className="absolute top-[-120px] left-[-100px] w-[350px] h-[350px] bg-orange-200/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-green-200/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl min-[1600px]:max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] mx-auto px-4 sm:px-6 md:px-12 py-6 md:py-10">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT IMAGE WITH RESPONSIVE OVERLAP CARD */}
          <div className="relative group w-full max-w-md lg:max-w-none mx-auto">
            <ScrollReveal>
              {/* Glow frame */}
              <div className="absolute -inset-2 rounded-[34px] blur opacity-10 group-hover:opacity-20 transition duration-500"></div>

              {/* Image container */}
              <div className="relative rounded-[30px] overflow-hidden shadow-xl aspect-[3/4] w-full">
                <img
                  src={baliMeditation}
                  alt="Bali Yoga"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Soft dark gradient mask for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />

                {/* Overlapping text directly on the image (no solid white block to cover details) */}
                <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-[#854417] flex items-center justify-center text-white shadow">
                      <Flower2 size={11} />
                    </div>
                    <span className="uppercase tracking-[0.2em] text-[8px] sm:text-[9px] text-[#e5a93b] font-bold">
                      Healing • Nature • Transformation
                    </span>
                  </div>
                  <h3 className="text-white text-base sm:text-lg md:text-xl font-serif font-bold leading-snug mb-1">
                    Bali Yoga Kendra
                  </h3>
                  <p className="text-stone-300 text-[11px] leading-relaxed">
                    Experience authentic yoga surrounded by Bali's spiritual atmosphere, lush greenery, peaceful beaches, and healing energy.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex flex-col justify-center">
            
            {/* TAG */}
            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap items-center gap-2 bg-[#f4f7f4] border border-green-200/50 text-[#1c2e24] px-4 py-1.5 rounded-[20px] text-[10px] sm:text-xs font-bold uppercase tracking-wider self-start shadow-sm max-w-full">
                <Sparkles size={13} className="text-[#854417] flex-shrink-0" />
                <span>MORE THAN A COURSE, IT'S A TRANSFORMATION</span>
              </div>
            </ScrollReveal>

            {/* HEADING */}
            <ScrollReveal delay={0.15}>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#1c2e24] leading-tight">
                Experience The{" "}
                <span className="block bg-gradient-to-r from-[#854417] to-[#5C2E0B] bg-clip-text text-transparent mt-1">
                  Magic Of Bali
                </span>
              </h2>
            </ScrollReveal>

            {/* DESCRIPTION */}
            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-stone-600 text-base sm:text-lg leading-relaxed">
                Bali is a sacred destination filled with spiritual energy, tropical beauty, peaceful beaches, 
                and healing traditions. At Bali Yoga Kendra, you will deepen your practice through yoga, 
                meditation, breathwork, philosophy, and self-discovery.
              </p>
            </ScrollReveal>

            {/* FEATURES */}
            <ScrollReveal delay={0.25}>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/70 border border-stone-200/40 p-4 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
                  >
                    <CheckCircle2 size={18} className="text-[#854417] flex-shrink-0" />
                    <p className="text-stone-700 text-sm font-semibold">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* BUTTONS */}
            <ScrollReveal delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact"
                  aria-label="Explore Bali Yoga Kendra experience"
                  className="group bg-[#1c2e24] hover:bg-stone-850 text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center gap-2 no-underline"
                >
                  Explore Our Experience
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
                </a>

                <a 
                  href="/yoga-teacher-training"
                  aria-label="View yoga programs"
                  className="border-2 border-[#854417] text-[#854417] hover:bg-[#854417] hover:text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition duration-300 text-center no-underline"
                >
                  View Programs
                </a>
              </div>
            </ScrollReveal>

            {/* STATS */}
            <ScrollReveal delay={0.35}>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/80 border border-stone-200/40 rounded-2xl p-4 text-center shadow-sm hover:-translate-y-1 transition duration-300"
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#1c2e24] to-[#854417] bg-clip-text text-transparent font-serif">
                      {item.number}
                    </h3>
                    <p className="mt-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-stone-600">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BaliYogaKendraExperience;
