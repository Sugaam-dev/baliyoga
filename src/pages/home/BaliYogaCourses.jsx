import React from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SectionHeading from "../../components/shared/SectionHeading";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// IMPORT IMAGES
import bali4 from "../../assets/images/home/bali4.jpg";
import bali5 from "../../assets/images/home/bali5.jpg";
import bali6 from "../../assets/images/home/bali6.jpg";
import bali7 from "../../assets/images/home/bali7.jpg";
import yoga from "../../assets/images/home/yoga.jpg";
import yoga0 from "../../assets/images/home/yoga0.jpg";
import yoga1 from "../../assets/images/home/yoga1.jpg";
import yogagallery from "../../assets/images/home/yogagallery.jpg";

const BaliCoursesPage = () => {
  const courses = [
    {
      title: "Bali 200H Hybrid YTTC",
      price: "FROM: IDR 20.000.000",
      image: bali4,
    },
    {
      title: "Bali 300H YTTC",
      price: "FROM: IDR 52.000.000",
      image: bali5,
    },
    {
      title: "Bali 200H Somatic Breathwork TTC",
      price: "FROM: IDR 62.000.000",
      image: bali6,
    },
    {
      title: "Bali 50H Yin YTTC",
      price: "FROM: IDR 15.400.000",
      image: bali7,
    },
    {
      title: "Bali Vinyasa TTC",
      price: "FROM: IDR 25.000.000",
      image: yoga,
    },
    {
      title: "Bali Hatha TTC",
      price: "FROM: IDR 28.000.000",
      image: yoga0,
    },
    {
      title: "Bali Meditation TTC",
      price: "FROM: IDR 18.000.000",
      image: yoga1,
    },
    {
      title: "Bali Sound Healing TTC",
      price: "FROM: IDR 32.000.000",
      image: yogagallery,
    },
  ];

  return (
    <div className="bg-white py-10 md:py-14 border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <section className="w-full">
          
          {/* HEADING */}
          <SectionHeading 
            title="Yoga Teacher Training" 
            highlight="Courses in Bali" 
            subtitle="Deepen your practice and obtain an internationally recognized certification in the heart of paradise."
          />

          {/* CAROUSEL CONTAINER */}
          <div className="relative mt-8 xl:mt-12 px-0 xl:px-4">
            
            {/* Custom Navigation Arrows for Desktop (Hidden on mobile/tablet) */}
            <button className="courses-prev absolute left-[-56px] top-[40%] -translate-y-1/2 hidden xl:flex w-11 h-11 rounded-full border border-stone-200/80 bg-white text-stone-700 hover:bg-[#c38b5f] hover:text-white hover:border-[#c38b5f] items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md z-30 cursor-pointer">
              <ChevronLeft size={20} />
            </button>
            <button className="courses-next absolute right-[-56px] top-[40%] -translate-y-1/2 hidden xl:flex w-11 h-11 rounded-full border border-stone-200/80 bg-white text-stone-700 hover:bg-[#c38b5f] hover:text-white hover:border-[#c38b5f] items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md z-30 cursor-pointer">
              <ChevronRight size={20} />
            </button>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={28}
              slidesPerView={1}
              navigation={{
                nextEl: ".courses-next",
                prevEl: ".courses-prev",
              }}
              pagination={{ 
                clickable: true,
                el: ".courses-pagination"
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
                1280: {
                  slidesPerView: 4,
                },
              }}
              className="w-full"
            >
              {courses.map((course, index) => (
                <SwiperSlide key={`course-${index}`} className="h-auto">
                  <div className="bg-white rounded-[24px] overflow-hidden border border-stone-200/40 shadow-sm hover:shadow-xl transition-all duration-500 group hover:-translate-y-1.5 flex flex-col h-full">
                    {/* IMAGE */}
                    <div className="relative overflow-hidden aspect-[4/3] w-full">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/35 via-transparent to-transparent" />
                      
                      {/* BADGE */}
                      <div className="absolute top-4 left-4 bg-[#1c2e24] text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                        BALI
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="text-stone-900 text-lg font-serif font-bold leading-snug group-hover:text-[#c38b5f] transition-colors duration-300 min-h-[52px]">
                          {course.title}
                        </h3>

                        <p className="text-[#a6734c] text-xs font-semibold tracking-wider uppercase mt-3 mb-6">
                          {course.price}
                        </p>
                      </div>

                      {/* BUTTON */}
                      <button className="inline-flex items-center gap-2 text-stone-700 text-xs font-bold uppercase tracking-wider hover:gap-3 hover:text-[#c38b5f] transition-all duration-300 cursor-pointer self-start">
                        View Course
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
            <div className="courses-pagination flex justify-center gap-2 mt-8 [--swiper-pagination-color:#c38b5f]" />
          </div>

        </section>
      </div>
    </div>
  );
};

export default BaliCoursesPage;
