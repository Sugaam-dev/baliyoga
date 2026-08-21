import React from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, ArrowRight, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SectionHeading from "./SectionHeading";
import { activitiesData } from "../../data/bali/activities";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ActivitiesCarousel = ({
  showHeading = true,
  title = "Curated Bali",
  highlight = "Activities",
  subtitle = "Immerse yourself in Balinese culture, spiritual adventures, and breathtaking excursions during your journey."
}) => {
  return (
    <div className="bg-[#FAF8F5] py-6 md:py-10">
      <div className="max-w-7xl min-[1600px]:max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] mx-auto px-6 md:px-12">
        
        {/* HEADER */}
        {showHeading && (
          <SectionHeading 
            title={title} 
            highlight={highlight} 
            subtitle={subtitle}
          />
        )}

        {/* CAROUSEL CONTAINER */}
        <div className="relative mt-8 xl:mt-12 px-0 xl:px-4">
          
          {/* Custom Navigation Arrows for Desktop (Hidden on mobile/tablet) */}
          <button
            type="button"
            aria-label="Previous Activity"
            className="activities-prev absolute left-[-56px] top-[40%] -translate-y-1/2 hidden xl:flex w-11 h-11 rounded-full border border-stone-200/80 bg-white text-stone-700 hover:bg-[#854417] hover:text-white hover:border-[#854417] items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md z-30 cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Next Activity"
            className="activities-next absolute right-[-56px] top-[40%] -translate-y-1/2 hidden xl:flex w-11 h-11 rounded-full border border-stone-200/80 bg-white text-stone-700 hover:bg-[#854417] hover:text-white hover:border-[#854417] items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md z-30 cursor-pointer"
          >
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
            autoplay={{ delay: 6000, disableOnInteraction: false }}
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
            {activitiesData.map((item, index) => (
              <SwiperSlide key={`activity-${item.slug}-${index}`} className="h-auto">
                <div className="bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl border border-stone-200/40 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full group">
                  {/* IMAGE */}
                  <div className="relative overflow-hidden aspect-[4/3] w-full bg-stone-50">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />
                    
                    {/* Price Badge */}
                    {item.price && (
                      <div className="absolute bottom-4 right-4 bg-[#1A2456] text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                        From ₹{item.price}
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                    <div className="space-y-3.5">
                      {/* Location/Address */}
                      <div className="flex items-center gap-1.5 text-stone-600 text-xs font-medium">
                        <MapPin size={13} className="text-[#854417]" />
                        <span className="truncate max-w-[250px]">{item.address.split(',')[0]}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-stone-900 font-serif font-bold text-lg leading-snug group-hover:text-[#854417] transition-colors duration-300 line-clamp-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-stone-600 text-sm leading-relaxed line-clamp-3">
                        {item.desc}
                      </p>
                    </div>

                    {/* BUTTON & FOOTER */}
                    <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                      <Link 
                        to={`/bali-activities/${item.slug}`}
                        aria-label={`Explore more about ${item.title}`}
                        className="inline-flex items-center gap-2 text-[#1A2456] hover:text-[#854417] font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:gap-3 cursor-pointer no-underline"
                      >
                        Explore More
                        <ArrowRight size={14} className="text-[#854417]" />
                      </Link>

                      <div className="flex items-center gap-1 text-[11px] font-semibold text-[#854417]">
                        <Calendar size={12} />
                        <span>Available Daily</span>
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM LINE */}
                  <div className="h-[3px] w-0 bg-gradient-to-r from-[#1c2e24] to-[#854417] group-hover:w-full transition-all duration-500" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination (Visible on all screens including mobile/tablet) */}
          <div className="activities-pagination flex justify-center gap-2 mt-8 [--swiper-pagination-color:#854417]" />
        </div>

      </div>
    </div>
  );
};

export default ActivitiesCarousel;
