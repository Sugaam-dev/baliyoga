import React from "react";
import ScrollReveal from "../../../components/shared/ScrollReveal";
import SectionHeading from "../../../components/shared/SectionHeading";

const whyChoose = [
  { title: "Authentic Yogic Teachings", desc: "Learn traditional yoga directly from experienced teachers dedicated to preserving the ancient wisdom of India." },
  { title: "Internationally Recognized Certification", desc: "Graduate with a Yoga Alliance-recognized certification respected worldwide." },
  { title: "Transformational Learning Environment", desc: "Experience yoga in Bali, one of the world's most renowned destinations for wellness, spirituality, and conscious living." },
  { title: "Personalized Attention", desc: "Small class sizes ensure every student receives individual guidance and support." },
  { title: "More Than a Yoga School", desc: "We offer a complete experience of yogic living through retreats, workshops, healing sessions, and community." },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#FAF8F5] py-14 sm:py-16 md:py-20 border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <span className="flex justify-center uppercase tracking-[0.2em] text-[11px] font-bold text-[#c38b5f] mb-3">
            Why Choose Us ✦
          </span>
          <SectionHeading
            title="Why Choose"
            highlight="Bali Yoga Kendra?"
            subtitle="We offer a complete experience of yogic living that combines authentic teachings, world-class certification, and a transformational environment in the heart of Bali."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {whyChoose.map((item, i) => (
              <div key={i} className="bg-white border border-stone-200/40 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex items-start gap-4">
                <span className="text-[#c38b5f] text-base mt-0.5 flex-shrink-0">✦</span>
                <div>
                  <h4 className="text-stone-900 font-serif text-base font-semibold mb-2">{item.title}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
