import React from "react";
import SectionHeading from "../../components/shared/SectionHeading";
import MobileCarousel from "../../components/shared/MobileCarousel";
import ScrollReveal from "../../components/shared/ScrollReveal";

import gallery1 from "../../assets/images/home/bali-yoga-teacher-training-check-list-NAMASTSHAY.webp";
import gallery2 from "../../assets/images/home/Yoga-session-at-the-Bali-Green-Retreat.webp";
import gallery3 from "../../assets/images/home/yogagallery.webp";
import gallery4 from "../../assets/images/home/alchemyyoga.webp";
import gallery5 from "../../assets/images/home/yoga-teacher-training-bali.webp";
import gallery6 from "../../assets/images/home/Ubud-Yoga-Photography-3-1.webp";
import gallery7 from "../../assets/images/home/4-Days-Yoga-Retreat-In-Canggu-Bali.webp";
import gallery8 from "../../assets/images/home/the-istana-1.webp";
import gallery9 from "../../assets/images/home/shutterstock_314587241.webp";
import gallery10 from "../../assets/images/home/baligallery.webp";

const galleryList = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
];

const BaliYogaGallery = () => {
  return (
    <section className="bg-white py-6 md:py-10 overflow-hidden border-b border-stone-200/50">
      <div className="mx-auto w-full max-w-7xl min-[1600px]:max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] px-6 md:px-12">
        
        {/* HEADER */}
        <ScrollReveal>
          <div className="relative">
            <div className="flex justify-center mb-6">
              <span className="uppercase tracking-[0.2em] text-[11px] font-bold text-[#854417] inline-block">
                Bali Yoga Kendra ✦
              </span>
            </div>
            <SectionHeading 
              title="Discover our" 
              highlight="Yoga Gallery" 
              subtitle="Explore moments of mindfulness, traditional yoga practice, nature immersion, and transformational training experiences."
            />
          </div>
        </ScrollReveal>

        {/* Carousel on mobile, Grid on desktop */}
        <ScrollReveal delay={0.15}>
          <MobileCarousel
            items={galleryList}
            gridClass="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 mt-8"
            renderItem={(img, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[24px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-stone-200/20 aspect-[4/5] w-full"
              >
                {/* IMAGE */}
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={img}
                    alt={`Bali Yoga Kendra Gallery Photo ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* OVERLAY ON HOVER */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c2e24]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

                {/* BOTTOM LINE */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#1c2e24] to-[#854417] group-hover:w-full transition-all duration-500 pointer-events-none" />
              </div>
            )}
          />
        </ScrollReveal>

      </div>
    </section>
  );
};

export default BaliYogaGallery;
