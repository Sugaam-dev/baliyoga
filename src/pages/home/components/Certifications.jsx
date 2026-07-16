import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Users, Compass } from "lucide-react";
import SectionHeading from "../../../components/shared/SectionHeading";
import MobileCarousel from "../../../components/shared/MobileCarousel";
import ScrollReveal from "../../../components/shared/ScrollReveal";
import founderImg from "../../../assets/images/home/balitemple.JPEG";

const leadershipCards = [
  {
    icon: <Sparkles className="w-7 h-7 text-[#c38b5f]" />,
    title: "Visionary Leader",
    description: "Inspiring conscious growth through authentic, time-tested yoga guidance.",
  },
  {
    icon: <Users className="w-7 h-7 text-[#c38b5f]" />,
    title: "Community Builder",
    description: "Creating warm, supportive spaces that uplift students on a global scale.",
  },
  {
    icon: <Compass className="w-7 h-7 text-[#c38b5f]" />,
    title: "Yoga Practitioner",
    description: "Embodies the profound truths of yogic wisdom in every class, retreat, and breath.",
  },
];

const Certifications = () => {
  return (
    <div className="w-full bg-[#faf8f5] text-stone-850 antialiased selection:bg-[#c38b5f]/10 selection:text-[#c38b5f]">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14">
        
        {/* SECTION 1: MEET THE FOUNDER */}
        <section className="relative w-full mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-5 relative w-full max-w-md lg:max-w-none mx-auto">
              <ScrollReveal>
                <div className="border border-stone-200/60 p-2.5 rounded-[36px]">
                  <div className="relative h-[480px] sm:h-[550px] lg:h-[580px] w-full rounded-[28px] overflow-hidden shadow-lg bg-[#efe7da] isolate transform translate-z-0">
                    <img
                      src={founderImg}
                      alt="Yogi Ranjan - Founder"
                      className="w-full h-full object-cover object-center transform transition duration-700 hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent"></div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Founder Bio Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <ScrollReveal delay={0.15}>
                <span className="uppercase tracking-[0.2em] text-[11px] font-bold text-[#c38b5f] mb-3 inline-block">
                  Meet The Founder ✦
                </span>
                <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-stone-900 tracking-tight leading-none mb-3">
                  Yogi Ranjan
                </h2>
                <p className="text-[#a6734c] text-sm font-semibold tracking-wider uppercase mb-6">
                  Founder, Bali Yoga Kendra
                </p>
                
                <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-8">
                  Rooted in traditional yogic wisdom and refined through years of global teaching experience, 
                  Yogi Ranjan guides students through a deeply transformative spiritual journey. His classes blend 
                  classical practices with mindful awareness to cultivate internal balance and inner peace.
                </p>

                <div className="h-px w-20 bg-stone-300/80 mb-8"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
                  {[
                    "E-RYT 500 Certified Yoga Alliance Professional",
                    "YACEP Continuing Education Provider",
                    "Master in Yoga & Conscious Meditation",
                    "Specialist in Pranayama & Breathwork Healing",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-[#c38b5f] text-xs mt-1.5 flex-shrink-0">✦</span>
                      <p className="text-sm sm:text-base text-stone-700 leading-snug">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link 
                    to="/contact" 
                    className="bg-[#1c2e24] hover:bg-stone-850 text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 text-center no-underline"
                  >
                    Learn From The Founder
                  </Link>
                  <Link 
                    to="/founder" 
                    className="border border-[#c38b5f] text-[#c38b5f] hover:bg-[#c38b5f] hover:text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 text-center no-underline"
                  >
                    View Full Journey
                  </Link>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>

        {/* SECTION 2: CORE LEADERSHIP PILLARS */}
        <section className="relative w-full border-t border-stone-200/50 pt-10 md:pt-12">
          <ScrollReveal>
            <SectionHeading 
              title="The Pillars of" 
              highlight="Leadership" 
              subtitle="Explore our core leadership pillars representing our dedication to yoga, self-growth, and global community."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <MobileCarousel
              items={leadershipCards}
              gridClass="grid-cols-1 md:grid-cols-3 gap-8 mt-12"
              renderItem={(card, index) => (
                <div
                  key={index}
                  className="bg-white border border-stone-200/40 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center group h-full"
                >
                  <div className="w-16 h-16 bg-[#faf8f5] border border-stone-200/50 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:bg-[#c38b5f]/10 group-hover:border-[#c38b5f] transition-all duration-500">
                    {card.icon}
                  </div>
                  
                  <h3 className="text-stone-900 text-xl font-bold mb-3 font-serif">
                    {card.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              )}
            />
          </ScrollReveal>
        </section>

      </div>
    </div>
  );
};

export default Certifications;