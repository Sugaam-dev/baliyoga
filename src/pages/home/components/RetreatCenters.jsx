import React from "react";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import SectionHeading from "../../../components/shared/SectionHeading";
import retreatImg from "../../../assets/images/home/bali1.jpg";

const RetreatCenters = () => {
  return (
    <section className="bg-white py-10 md:py-14 overflow-hidden border-b border-stone-200/50">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <span className="uppercase tracking-[0.2em] text-[11px] font-bold text-[#c38b5f] mb-3 inline-block">
              Bali Yoga Kendra ✦
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#1c2e24] leading-tight mb-4">
              Our Spiritual
              <span className="block bg-gradient-to-r from-[#c38b5f] to-[#a6734c] bg-clip-text text-transparent mt-1">
                Yoga Retreat Centers
              </span>
            </h2>

            <div className="w-12 h-[2px] bg-[#c38b5f] mb-6" />

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-8">
              Experience transformational retreats surrounded by Bali’s healing energy, tropical nature, 
              yoga philosophy, meditation, and soulful community living designed for complete rejuvenation.
            </p>

            {/* RETREAT LINKS */}
            <div className="space-y-4 max-w-lg">
              
              {/* ITEM 1 */}
              <div className="group flex items-center justify-between rounded-2xl bg-white border border-stone-200/40 px-6 py-5 shadow-sm hover:shadow-md cursor-pointer hover:bg-[#c38b5f] hover:border-[#c38b5f] transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-50 group-hover:bg-white/20 flex items-center justify-center text-[#c38b5f] group-hover:text-white transition duration-300 flex-shrink-0">
                    <Compass size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-900 group-hover:text-white transition duration-300">
                      Signature Retreats
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5 group-hover:text-white/80 transition duration-300">
                      Deep healing, traditional yoga & wellness immersion
                    </p>
                  </div>
                </div>
                <ArrowRight size={16} className="text-stone-400 group-hover:text-white group-hover:translate-x-1 transition duration-300 flex-shrink-0" />
              </div>

              {/* ITEM 2 */}
              <div className="group flex items-center justify-between rounded-2xl bg-white border border-stone-200/40 px-6 py-5 shadow-sm hover:shadow-md cursor-pointer hover:bg-[#1c2e24] hover:border-[#1c2e24] transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-50 group-hover:bg-white/20 flex items-center justify-center text-[#1c2e24] group-hover:text-white transition duration-300 flex-shrink-0">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-900 group-hover:text-white transition duration-300">
                      Yogi’s Garden
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5 group-hover:text-white/80 transition duration-300">
                      Nature inspired mindful retreat experience
                    </p>
                  </div>
                </div>
                <ArrowRight size={16} className="text-stone-400 group-hover:text-white group-hover:translate-x-1 transition duration-300 flex-shrink-0" />
              </div>

            </div>

            {/* BUTTON */}
            <a 
              href="#retreats"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#c38b5f] text-[#c38b5f] hover:bg-[#c38b5f] hover:text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md no-underline"
            >
              ALL RETREATS
              <ArrowRight size={14} />
            </a>
          </div>

          {/* RIGHT IMAGE WITH GLOW & CARD */}
          <div className="relative flex justify-center lg:justify-end">
            
            {/* Glow frame */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#c38b5f] to-[#1c2e24] rounded-[34px] blur opacity-10 pointer-events-none" />

            {/* Image Box */}
            <div className="relative overflow-hidden rounded-[30px] shadow-xl group w-full max-w-xl aspect-[4/3] sm:aspect-[3/4]">
              <img
                src={retreatImg}
                alt="Retreat Center"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />

              {/* Floating glass card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/60">
                <p className="uppercase tracking-[0.2em] text-[10px] text-[#c38b5f] font-bold mb-1">
                  Transform Your Journey
                </p>
                <h3 className="text-[#1c2e24] text-lg font-serif font-bold">
                  Retreat Into Nature & Inner Peace
                </h3>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default RetreatCenters;
