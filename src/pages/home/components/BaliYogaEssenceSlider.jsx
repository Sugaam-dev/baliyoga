import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../../../components/shared/SectionHeading";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images
import bali1 from "../../../assets/images/home/bali1.jpg";
import bali2 from "../../../assets/images/home/bali2.jpg";
import bali3 from "../../../assets/images/home/bali3.jpg";
import bali4 from "../../../assets/images/home/bali4.jpg";
import bali5 from "../../../assets/images/home/bali5.jpg";
import bali6 from "../../../assets/images/home/bali6.jpg";
import bali7 from "../../../assets/images/home/bali7.jpg";

const galleryImages = [
  {
    id: 1,
    image: bali1,
    title: "Yoga Practice",
    description: "Experience mindful movement and breath awareness.",
  },
  {
    id: 2,
    image: bali2,
    title: "Wellness & Healing",
    description: "Holistic therapies for body and soul.",
  },
  {
    id: 3,
    image: bali3,
    title: "Workshops & Events",
    description: "Join transformative learning sessions.",
  },
  {
    id: 4,
    image: bali4,
    title: "Spiritual Growth",
    description: "Deepen your inner connection.",
  },
  {
    id: 5,
    image: bali5,
    title: "Meditation Retreat",
    description: "Find peace in serene surroundings.",
  },
  {
    id: 6,
    image: bali6,
    title: "Community Connection",
    description: "Grow together in supportive community.",
  },
  {
    id: 7,
    image: bali7,
    title: "Learning Spaces",
    description: "Inspiring spaces for transformation.",
  },
];

const BaliYogaEssenceSlider = () => {
  return (
    <section className="bg-[#FAF8F5] py-10 md:py-14 overflow-hidden border-b border-stone-200/50">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        
        {/* Section heading using SectionHeading */}
        <div className="relative">
          <div className="flex justify-center mb-6">
            <span className="uppercase tracking-[0.2em] text-[11px] font-bold text-[#c38b5f] inline-block">
              Bali Yoga Kendra ✦
            </span>
          </div>
          <SectionHeading 
            title="Experience the Essence of" 
            highlight="Bali Yoga" 
            subtitle="Explore inspiring yoga practices, retreats, workshops, and mindful experiences designed to deepen your connection with body, mind, and spirit."
          />
        </div>

        {/* Carousel Container */}
        <div className="relative mt-8 xl:mt-12 px-0 xl:px-4">
          
          {/* Custom Navigation Arrows for Desktop */}
          <button className="essence-prev absolute left-[-56px] top-[45%] -translate-y-1/2 hidden xl:flex w-11 h-11 rounded-full border border-stone-200/80 bg-white text-stone-700 hover:bg-[#c38b5f] hover:text-white hover:border-[#c38b5f] items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md z-30 cursor-pointer">
            <ChevronLeft size={20} />
          </button>
          <button className="essence-next absolute right-[-56px] top-[45%] -translate-y-1/2 hidden xl:flex w-11 h-11 rounded-full border border-stone-200/80 bg-white text-stone-700 hover:bg-[#c38b5f] hover:text-white hover:border-[#c38b5f] items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md z-30 cursor-pointer">
            <ChevronRight size={20} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={28}
            slidesPerView={1}
            navigation={{
              nextEl: ".essence-next",
              prevEl: ".essence-prev",
            }}
            pagination={{ 
              clickable: true,
              el: ".essence-pagination"
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
            {galleryImages.map((item, index) => (
              <SwiperSlide key={`essence-${index}`} className="h-auto">
                <div className="group relative overflow-hidden rounded-[28px] border border-stone-200/40 bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col h-full">
                  {/* Image wrapper */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-stone-950/15" />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-white">
                      
                      {/* Badge */}
                      <span className="self-start rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white mb-3">
                        Bali Yoga Experience
                      </span>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-serif font-bold leading-snug mb-2 text-white">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-stone-200 text-xs sm:text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Action Link */}
                      <a 
                        href="#contact"
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white hover:bg-[#c38b5f] hover:border-[#c38b5f] transition-all duration-300 self-start no-underline"
                      >
                        Explore Experience
                        <span className="text-sm">→</span>
                      </a>
                    </div>
                  </div>

                  {/* Bottom Line */}
                  <div className="h-[3px] w-0 bg-gradient-to-r from-[#1c2e24] to-[#c38b5f] group-hover:w-full transition-all duration-500" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination (Visible on all screens including mobile/tablet) */}
          <div className="essence-pagination flex justify-center gap-2 mt-8 [--swiper-pagination-color:#c38b5f]" />
        </div>

      </div>
    </section>
  );
};

export default BaliYogaEssenceSlider;
