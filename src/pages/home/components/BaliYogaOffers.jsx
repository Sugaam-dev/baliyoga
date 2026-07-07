import React from "react";
import { ArrowRight, MapPin, Sparkles, BadgePercent } from "lucide-react";
import SectionHeading from "../../../components/shared/SectionHeading";
import MobileCarousel from "../../../components/shared/MobileCarousel";
import ScrollReveal from "../../../components/shared/ScrollReveal";

import yogaTeacherImg from "../../../assets/images/home/yoga-teacher-training-bali.jpg";
import yogaRetreatImg from "../../../assets/images/home/yoga.jpg";
import soundHealingImg from "../../../assets/images/home/yoga0.jpg";

const BaliYogaOffers = () => {
  const offers = [
    {
      id: 1,
      image: yogaTeacherImg,
      title: "Yoga Teacher Training",
      discount: "30% OFF",
      subtitle: "LIMITED TIME",
      locations: ["Ubud", "Uluwatu", "Canggu", "Rishikesh"],
      button: "Join Training",
    },
    {
      id: 2,
      image: yogaRetreatImg,
      title: "Yoga Retreat",
      discount: "20% OFF",
      subtitle: "EARLY BIRD",
      locations: ["Rishikesh", "Ubud", "Uluwatu", "Canggu"],
      button: "Book Retreat",
    },
    {
      id: 3,
      image: soundHealingImg,
      title: "Sound & Reiki Healing",
      discount: "20% OFF",
      subtitle: "SPECIAL OFFER",
      locations: ["Rishikesh", "Ubud", "Uluwatu", "Canggu"],
      button: "Explore Healing",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-14 border-b border-stone-200/50">
      {/* Background Gradient - White type */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#FAF8F5] z-0"></div>

      {/* Blur Effects - Gray/Slate blurs */}
      <div className="absolute top-[-100px] left-[-100px] w-[320px] h-[320px] bg-stone-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[320px] h-[320px] bg-slate-300/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading using SectionHeading */}
        <ScrollReveal>
          <div className="relative">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-white/80 border border-stone-200/60 text-[#1c2e24] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles size={14} className="text-[#c38b5f]" />
                SPECIAL BALI YOGA OFFERS
              </div>
            </div>
            <SectionHeading 
              title="Transform Your Life With" 
              highlight="Bali Yoga Experiences" 
              subtitle="Discover authentic yoga teacher training, peaceful retreats, meditation, sound healing, and spiritual growth in Bali’s most beautiful destinations."
            />
          </div>
        </ScrollReveal>

        {/* Carousel on mobile, Grid on desktop */}
        <ScrollReveal delay={0.15}>
          <MobileCarousel
            items={offers}
            gridClass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            renderItem={(offer) => (
              <div
                key={offer.id}
                className="group relative overflow-hidden rounded-[30px] shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-200/40 h-full flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden flex-1">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-stone-950/15" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                    {/* Top Badge and Floating Discount Badge */}
                    <div className="flex items-center justify-between">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
                        Bali Yoga Kendra
                      </div>
                      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-[0_4px_15px_rgba(245,158,11,0.4)] z-20">
                        {offer.discount}
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Title */}
                      <h3 className="text-white text-2xl font-serif font-bold leading-snug">
                        {offer.title}
                      </h3>

                      {/* Highlighted Discount Box */}
                      <div className="bg-stone-900/50 border border-stone-700/40 rounded-2xl px-4 py-3 flex items-center justify-between shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-stone-300 uppercase tracking-widest leading-none mb-1.5">
                            {offer.subtitle}
                          </span>
                          <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-red-400 bg-clip-text text-transparent text-3xl font-serif font-extrabold leading-none">
                            {offer.discount}
                          </span>
                        </div>
                        <BadgePercent size={24} className="text-amber-400 animate-pulse" />
                      </div>

                      {/* Locations */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                        {offer.locations.map((location, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-1.5 text-stone-300 text-xs"
                          >
                            <MapPin size={12} className="text-[#c38b5f]" />
                            <span>{location}</span>
                          </div>
                        ))}
                      </div>

                      {/* Button */}
                      <a 
                        href="#contact"
                        className="w-full bg-[#FAF8F5] text-stone-850 hover:bg-[#c38b5f] hover:text-[#FAF8F5] py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-sm no-underline"
                      >
                        {offer.button}
                        <ArrowRight size={14} className="text-[#c38b5f] group-hover:text-[#FAF8F5] transition" />
                      </a>
                    </div>

                    {/* Bottom Label */}
                    <div className="flex items-center justify-between text-stone-400 text-[10px] font-semibold tracking-wider uppercase">
                      <div className="flex items-center gap-1.5">
                        <BadgePercent size={14} className="text-[#c38b5f]" />
                        Limited Time Offer
                      </div>
                      <span>Verified Spot</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BaliYogaOffers;
