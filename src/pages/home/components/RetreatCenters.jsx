import React from "react";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import SectionHeading from "../../../components/shared/SectionHeading";
import ScrollReveal from "../../../components/shared/ScrollReveal";
import retreatImg from "../../../assets/images/home/bali1.jpg";

const RetreatCenters = () => {
  return (
    <section className="bg-white py-10 md:py-14 overflow-hidden border-b border-stone-200/50">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        
        {/* HEADING */}
        <ScrollReveal>
          <div className="relative">
            <div className="flex justify-center mb-6">
              <span className="uppercase tracking-[0.2em] text-[11px] font-bold text-[#c38b5f] inline-block">
                Bali Yoga Kendra ✦
              </span>
            </div>
            <SectionHeading 
              title="Our Spiritual" 
              highlight="Yoga Retreat Centers" 
              subtitle="Experience transformational retreats surrounded by Bali’s healing energy, tropical nature, yoga philosophy, meditation, and soulful community living designed for complete rejuvenation."
            />
          </div>
        </ScrollReveal>

        {/* BOTTOM CONTENT: split layout for links and responsive overlap image */}
        <div className="grid items-center gap-10 lg:grid-cols-2 mt-10">

          {/* LEFT RETREAT LINKS */}
          <ScrollReveal delay={0.15}>
            <div className="space-y-5 max-w-lg mx-auto lg:mx-0 w-full">
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4 text-justify">
                Our tranquil sanctuaries in Ubud are designed to support your yoga study, physical healing, and deep emotional release. Enjoy organic meals, standard amenities, and high-vibrational living spaces.
              </p>

              {/* ITEM 1 */}
              <div className="group flex items-center justify-between rounded-2xl bg-white border border-stone-200/40 px-5 py-4 sm:px-6 sm:py-5 shadow-sm hover:shadow-md cursor-pointer hover:bg-[#c38b5f] hover:border-[#c38b5f] transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-50 group-hover:bg-white/20 flex items-center justify-center text-[#c38b5f] group-hover:text-white transition duration-300 flex-shrink-0">
                    <Compass size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-stone-900 group-hover:text-white transition duration-300">
                      Signature Retreats
                    </h3>
                    <p className="text-[10px] sm:text-xs text-stone-500 mt-0.5 group-hover:text-white/80 transition duration-300">
                      Deep healing, traditional yoga & wellness immersion
                    </p>
                  </div>
                </div>
                <ArrowRight size={16} className="text-stone-400 group-hover:text-white group-hover:translate-x-1 transition duration-300 flex-shrink-0" />
              </div>

              {/* ITEM 2 */}
              <div className="group flex items-center justify-between rounded-2xl bg-white border border-stone-200/40 px-5 py-4 sm:px-6 sm:py-5 shadow-sm hover:shadow-md cursor-pointer hover:bg-[#1c2e24] hover:border-[#1c2e24] transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-50 group-hover:bg-white/20 flex items-center justify-center text-[#1c2e24] group-hover:text-white transition duration-300 flex-shrink-0">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-stone-900 group-hover:text-white transition duration-300">
                      Yogi’s Garden
                    </h3>
                    <p className="text-[10px] sm:text-xs text-stone-500 mt-0.5 group-hover:text-white/80 transition duration-300">
                      Nature inspired mindful retreat experience
                    </p>
                  </div>
                </div>
                <ArrowRight size={16} className="text-stone-400 group-hover:text-white group-hover:translate-x-1 transition duration-300 flex-shrink-0" />
              </div>

              {/* BUTTON */}
              <div className="pt-2">
                <a 
                  href="#retreats"
                  className="inline-flex items-center gap-2 rounded-full border border-[#c38b5f] text-[#c38b5f] hover:bg-[#c38b5f] hover:text-white px-7 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md no-underline bg-white"
                >
                  ALL RETREATS
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT IMAGE WITH GLOW & RESPONSIVE OVERLAP CARD */}
          <ScrollReveal delay={0.25}>
            <div className="relative flex justify-center lg:justify-end w-full max-w-xl mx-auto lg:mx-0">
              
              {/* Glow frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#c38b5f] to-[#1c2e24] rounded-[34px] blur opacity-10 pointer-events-none" />

              {/* Image Box */}
              <div className="relative overflow-hidden rounded-[30px] shadow-xl group w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3]">
                <img
                  src={retreatImg}
                  alt="Retreat Center"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Soft dark gradient mask for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

                {/* Overlapping text directly on the image */}
                <div className="absolute bottom-5 left-6 right-6 text-white pointer-events-none">
                  <p className="uppercase tracking-[0.2em] text-[9px] sm:text-[10px] text-[#c38b5f] font-bold mb-1.5">
                    Transform Your Journey
                  </p>
                  <h3 className="text-white text-base sm:text-lg md:text-xl font-serif font-bold leading-tight">
                    Retreat Into Nature & Inner Peace
                  </h3>
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default RetreatCenters;
