import React from "react";
import ScrollReveal from "../../../components/shared/ScrollReveal";
import SectionHeading from "../../../components/shared/SectionHeading";
import MobileCarousel from "../../../components/shared/MobileCarousel";

const specializations = [
  "Traditional Hatha Yoga", "Yoga Philosophy",
  "Ashtanga Yoga",          "Anatomy & Physiology",
  "Yin Yoga",               "Ayurveda",
  "Pranayama & Breathwork", "Sound Healing",
  "Meditation & Mindfulness","Energy Healing Practices",
];

export default function Teachers({ teachers }) {
  return (
    <section className="bg-[#FAF8F5] py-8 sm:py-10 md:py-12 border-b border-stone-200/50">
      <div className="max-w-7xl min-[1600px]:max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal>
          <span className="flex justify-center uppercase tracking-[0.2em] text-[11px] font-bold text-[#c38b5f] mb-3">
            Learn from Experienced Yoga Teachers in Bali ✦
          </span>
          <SectionHeading
            title="Our Experienced"
            highlight="Yoga Teachers"
            subtitle="At Bali Yoga Kendra, students learn from a diverse team of highly trained and internationally experienced yoga teachers who bring decades of combined expertise in yoga education, meditation, wellness, and holistic healing."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-12">
            {specializations.map((s, i) => (
              <div key={i} className="flex items-center gap-2 bg-white border border-stone-200/40 rounded-xl px-3 py-2.5 shadow-sm">
                <span className="text-[#c38b5f] text-xs flex-shrink-0">✦</span>
                <p className="text-stone-700 text-xs sm:text-sm font-medium leading-snug">{s}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <MobileCarousel
            items={teachers}
            gridClass="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            renderItem={(teacher, i) => (
              <div key={i} className="bg-white border border-stone-200/40 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 p-6 text-center flex flex-col h-full">
                <div className="w-36 h-36 mx-auto mb-5 rounded-full overflow-hidden border-4 border-[#c38b5f]/20 shadow-md">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-wide">{teacher.name}</h3>
                <p className="text-[#c38b5f] text-xs font-semibold mt-1 mb-3 leading-snug">{teacher.title}</p>
                <p className="text-stone-500 text-sm leading-relaxed flex-grow">{teacher.description}</p>
              </div>
            )}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-center text-stone-500 text-sm leading-relaxed mt-10 max-w-3xl mx-auto">
            Every teacher at Bali Yoga Kendra is committed to preserving the authenticity of yoga while providing a supportive and inclusive learning environment. Through personalized guidance, practical teaching experience, and compassionate mentorship, our faculty helps students develop confidence both on and off the mat.
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}
