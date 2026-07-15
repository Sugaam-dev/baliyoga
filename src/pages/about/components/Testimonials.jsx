import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../../../components/shared/ScrollReveal";

export default function Testimonials() {
  return (
    <section className="bg-[#1c2e24] py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="uppercase tracking-[0.25em] text-[11px] font-bold text-[#c38b5f] mb-4 inline-block">
            Begin Your Yoga Journey in Bali ✦
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold mb-6 leading-tight">
            Begin Your Yoga Journey in Bali
          </h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether you dream of becoming a certified yoga teacher, deepening your personal practice, joining a transformative yoga retreat, or experiencing authentic yogic living in Bali, Bali Yoga Kendra welcomes you.
          </p>
          <p className="text-stone-400 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
            Join our global community and discover why students from around the world choose Bali Yoga Kendra for Yoga Teacher Training in Bali, Meditation Retreats, Spiritual Growth, and Holistic Wellness.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#c38b5f] hover:bg-[#a6734c] text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 no-underline"
          >
            Join Our Global Community
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
