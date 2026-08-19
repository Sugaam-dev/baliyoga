import React from "react";
import ActivitiesCarousel from "../../components/shared/ActivitiesCarousel";
import heroBg from "../../assets/images/home/Bali_Yoga_Kendra_Banner_1.webp";

export default function BaliActivitiesPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen text-stone-850 pb-20">
      
      {/* 1. Tall Premium Hero Banner Section (With light black overlay, text moved down) */}
      <section className="relative h-[55vh] md:h-[65vh] min-h-[400px] flex items-end justify-center text-white overflow-hidden pb-12 md:pb-20">
        {/* Background Image & Light Black Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Sacred Bali Excursions" 
            className="w-full h-full object-cover object-center" 
          />
          {/* Light Black Overlay */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        </div>

        {/* Hero Title (Pushed downwards by flex items-end alignment) */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white leading-tight uppercase tracking-wider drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)]">
            Sacred Bali Activities
          </h1>
        </div>
      </section>

      {/* 2. Premium Spacious Description Section (Wider paragraph layout) */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <span className="text-[#c38b5f] text-xs sm:text-sm font-bold uppercase tracking-[0.25em] block">
            Handpicked Spiritual & Cultural Experiences
          </span>
          
          <p className="text-stone-650 text-base sm:text-lg md:text-xl leading-loose font-sans font-light max-w-5xl mx-auto">
            Discover the very best of Bali with our handpicked selection of premium tours and unforgettable activities. From private sightseeing tours and cultural experiences to thrilling adventures, island escapes, and water sports, we offer exceptional travel experiences designed for every type of traveler. With trusted local expertise, personalized service, seamless bookings, and the best prices, we ensure every journey is comfortable, memorable, and hassle-free. Explore Bali with confidence and create unforgettable memories through world-class service, exclusive experiences, and unbeatable value.
          </p>
          
          {/* Elegant decorative line */}
          <div className="flex items-center justify-center gap-4 pt-6">
            <span className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-[#c38b5f]" />
            <i className="text-[#c38b5f] text-lg not-italic font-serif">&#10022;</i>
            <span className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-[#c38b5f]" />
          </div>
        </div>
      </section>

      {/* 3. Reusable Carousel Section (Reduced spacing, with Heading enabled) */}
      <section className="py-2 md:py-4 bg-[#FAF8F5]">
        <ActivitiesCarousel 
          showHeading={true}
          title="Curated Bali"
          highlight="Activities"
          subtitle="Explore the tours and excursions available to book for your Bali stay."
        />
      </section>
    </main>
  );
}
