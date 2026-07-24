import React from "react";
import { Flower2, Leaf, Sparkles, Medal } from "lucide-react";
import SectionHeading from "../../components/shared/SectionHeading";
import MobileCarousel from "../../components/shared/MobileCarousel";

const retreatFeatures = [
  {
    icon: <Flower2 size={32} className="text-[#c38b5f] group-hover:text-white transition-all duration-500" />,
    title: "12 Types of Yoga Courses",
    desc: "Our extensive yoga teacher training courses in Bali inspire deeper learning and self-discovery, including Multistyle Yoga, Kundalini Yoga, and transformative short-term programs.",
    accent: "bg-[#c38b5f]/5 border-[#c38b5f] group-hover:bg-[#c38b5f]",
  },
  {
    icon: <Leaf size={32} className="text-[#1c2e24] group-hover:text-white transition-all duration-500" />,
    title: "5 Days Yoga Retreat",
    desc: "This 5-day retreat offers space to relax, heal, and reconnect with yourself through yoga, meditation, mindfulness, and inner peace in Ubud's tropical paradise.",
    accent: "bg-[#1c2e24]/5 border-[#1c2e24] group-hover:bg-[#1c2e24]",
  },
  {
    icon: <Sparkles size={32} className="text-[#c38b5f] group-hover:text-white transition-all duration-500" />,
    title: "14 Workshops",
    desc: "Join workshops that awaken your energy and elevate your life through Meditation, Yoga Nidra, Sound Healing, breathwork, and conscious yogic practices.",
    accent: "bg-[#c38b5f]/5 border-[#c38b5f] group-hover:bg-[#c38b5f]",
  },
  {
    icon: <Medal size={32} className="text-[#1c2e24] group-hover:text-white transition-all duration-500" />,
    title: "11+ Years of Experience",
    desc: "With over 11 years of yoga teaching experience in Bali since 2015, we continue sharing authentic traditional yogic wisdom and transformational guidance.",
    accent: "bg-[#1c2e24]/5 border-[#1c2e24] group-hover:bg-[#1c2e24]",
  },
];

const BaliYogaRetreatsGrid = () => {
  return (
    <section className="bg-[#FAF8F5] py-6 md:py-10 border-b border-stone-200/50">
      <div className="mx-auto w-full max-w-7xl min-[1600px]:max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] px-6 md:px-12">
        
        {/* HEADING */}
        <div className="relative">
          <div className="flex justify-center mb-6">
            <span className="uppercase tracking-[0.2em] text-[11px] font-bold text-[#c38b5f] inline-block">
              Bali Yoga Kendra ✦
            </span>
          </div>
          <SectionHeading 
            title="Bali Yoga Retreats &" 
            highlight="Teacher Trainings" 
            subtitle="Go on a life-changing yoga adventure in Bali. Learn to become a certified teacher, join transformational workshops, or relax on deeply healing retreats."
          />
        </div>

        {/* Carousel on mobile, Grid on desktop */}
        <MobileCarousel
          items={retreatFeatures}
          gridClass="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8"
          renderItem={(item, index) => (
            <div
              key={index}
              className="group bg-white rounded-[28px] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 border border-stone-200/40 text-center relative overflow-hidden flex flex-col justify-between h-full"
            >
              <div>
                {/* Icon Container */}
                <div className={`relative w-20 h-20 rounded-full border-2 flex items-center justify-center mx-auto mb-6 bg-white shadow-sm transition-all duration-500 ${item.accent}`}>
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-[#1c2e24] font-serif text-xl font-bold leading-snug group-hover:text-[#c38b5f] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-stone-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Line decoration */}
              <div className="h-[3px] w-0 bg-gradient-to-r from-[#1c2e24] to-[#c38b5f] group-hover:w-full transition-all duration-500 absolute bottom-0 left-0" />
            </div>
          )}
        />

      </div>
    </section>
  );
};

export default BaliYogaRetreatsGrid;
