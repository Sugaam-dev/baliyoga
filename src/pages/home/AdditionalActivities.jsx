import React from "react";
import { Music, Wind, Compass, Waves, Heart, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SectionHeading from "../../components/shared/SectionHeading";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../assets/images/home/bali1.jpg";
import img2 from "../../assets/images/home/bali2.jpg";
import img3 from "../../assets/images/home/bali3.jpg";
import img4 from "../../assets/images/home/bali4.jpg";
import img5 from "../../assets/images/home/bali5.jpg";
import img6 from "../../assets/images/home/bali6.jpg";

const activities = [
  {
    title: "Sound Healing",
    desc: "Experience deep relaxation and energetic balance through healing vibrations and therapeutic sound baths.",
    img: img1,
    icon: <Music className="w-5 h-5 text-[#c38b5f] flex-shrink-0" />,
  },
  {
    title: "Acro Yoga",
    desc: "Build trust, strength & connection through playful and supportive partner dynamics and balances.",
    img: img2,
    icon: <Heart className="w-5 h-5 text-[#c38b5f] flex-shrink-0" />,
  },
  {
    title: "Kirtan Session",
    desc: "Join soulful chanting and immerse yourself in the vibrations of devotion, music, and community.",
    img: img3,
    icon: <Wind className="w-5 h-5 text-[#c38b5f] flex-shrink-0" />,
  },
  {
    title: "Nature Walk",
    desc: "Reconnect with nature and quiet your mind with mindful walks through Ubud's lush green rice fields.",
    img: img4,
    icon: <Compass className="w-5 h-5 text-[#c38b5f] flex-shrink-0" />,
  },
  {
    title: "Yin Yoga",
    desc: "Release deep-seated physical tension and find internal stillness in calming, restorative postures.",
    img: img5,
    icon: <Sparkles className="w-5 h-5 text-[#c38b5f] flex-shrink-0" />,
  },
  {
    title: "Waterfall Visit",
    desc: "Refresh your spirit and clean your energy field under Bali's sacred and hidden waterfalls.",
    img: img6,
    icon: <Waves className="w-5 h-5 text-[#c38b5f] flex-shrink-0" />,
  },
];

const AdditionalActivities = () => {
  return (
    <div className="bg-[#FAF8F5] py-10 md:py-14 border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* HEADER */}
        <SectionHeading 
          title="Additional" 
          highlight="Activities" 
          subtitle="Explore holistic experiences that complement your yoga journey and nurture mind, body & soul."
        />

        {/* CAROUSEL CONTAINER */}
        <div className="relative mt-8 xl:mt-12 px-0 xl:px-4">
          
          {/* Custom Navigation Arrows for Desktop (Hidden on mobile/tablet) */}
          <button className="activities-prev absolute left-[-56px] top-[40%] -translate-y-1/2 hidden xl:flex w-11 h-11 rounded-full border border-stone-200/80 bg-white text-stone-700 hover:bg-[#c38b5f] hover:text-white hover:border-[#c38b5f] items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md z-30 cursor-pointer">
            <ChevronLeft size={20} />
          </button>
          <button className="activities-next absolute right-[-56px] top-[40%] -translate-y-1/2 hidden xl:flex w-11 h-11 rounded-full border border-stone-200/80 bg-white text-stone-700 hover:bg-[#c38b5f] hover:text-white hover:border-[#c38b5f] items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md z-30 cursor-pointer">
            <ChevronRight size={20} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={28}
            slidesPerView={1}
            navigation={{
              nextEl: ".activities-next",
              prevEl: ".activities-prev",
            }}
            pagination={{ 
              clickable: true,
              el: ".activities-pagination"
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="w-full"
          >
            {activities.map((item, index) => (
              <SwiperSlide key={`activity-${index}`} className="h-auto">
                <div className="bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl border border-stone-200/40 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full">
                  {/* IMAGE */}
                  <div className="relative overflow-hidden aspect-[4/3] w-full">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/35 via-transparent to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-stone-900 font-serif font-bold text-xl mb-3 group-hover:text-[#c38b5f] transition-colors duration-300 flex items-center gap-2">
                        {item.icon}
                        <span>{item.title}</span>
                      </h3>

                      <p className="text-stone-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* BUTTON */}
                    <button className="mt-6 inline-flex items-center gap-2 text-stone-700 hover:text-[#c38b5f] font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:gap-3 cursor-pointer self-start">
                      Explore More
                      <ArrowRight size={14} className="text-[#c38b5f]" />
                    </button>
                  </div>

                  {/* BOTTOM LINE */}
                  <div className="h-[3px] w-0 bg-gradient-to-r from-[#1c2e24] to-[#c38b5f] group-hover:w-full transition-all duration-500" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination (Visible on all screens including mobile/tablet) */}
          <div className="activities-pagination flex justify-center gap-2 mt-8 [--swiper-pagination-color:#c38b5f]" />
        </div>

      </div>
    </div>
  );
};

export default AdditionalActivities;
