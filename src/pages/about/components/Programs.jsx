import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ScrollReveal from "../../../components/shared/ScrollReveal";
import SectionHeading from "../../../components/shared/SectionHeading";
import { programs } from "./ProgramsData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// Programs Section
// Displays all YTT programs (100 / 200 / 300 / 500 hr) in a Swiper carousel.
// To add/edit/remove a program → update ProgramsData.js
// To change card layout → edit the SwiperSlide block below
// To change section heading/subtitle → pass title, highlight, subtitle props

export default function Programs({
  title = "Choose the Right Program",
  highlight = "for Your Journey",
  subtitle = "Each training integrates yoga philosophy, asana alignment, anatomy, meditation, pranayama, teaching methodology, and spiritual development to create a well-rounded educational experience.",
}) {
  return (
    <section className="bg-white py-8 sm:py-10 md:py-12 border-b border-stone-200/50">
      <div className="max-w-7xl min-[1600px]:max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section heading ── */}
        <ScrollReveal>
          <span className="flex justify-center uppercase tracking-[0.2em] text-[11px] font-bold text-[#c38b5f] mb-3">
            Yoga Alliance Certified Teacher Training in Bali ✦
          </span>
          <SectionHeading
            title={title}
            highlight={highlight}
            subtitle={subtitle}
          />
        </ScrollReveal>

        {/* ── Carousel ── */}
        <div className="relative mt-8 xl:mt-12 px-0 xl:px-4">

          {/* Prev / Next arrows (desktop only) */}
          <button className="programs-prev absolute left-[-56px] top-[40%] -translate-y-1/2 hidden xl:flex w-11 h-11 rounded-full border border-stone-200/80 bg-white text-stone-700 hover:bg-[#c38b5f] hover:text-white hover:border-[#c38b5f] items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md z-30 cursor-pointer">
            <ChevronLeft size={20} />
          </button>
          <button className="programs-next absolute right-[-56px] top-[40%] -translate-y-1/2 hidden xl:flex w-11 h-11 rounded-full border border-stone-200/80 bg-white text-stone-700 hover:bg-[#c38b5f] hover:text-white hover:border-[#c38b5f] items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md z-30 cursor-pointer">
            <ChevronRight size={20} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={28}
            slidesPerView={1}
            navigation={{ nextEl: ".programs-next", prevEl: ".programs-prev" }}
            pagination={{ clickable: true, el: ".programs-pagination" }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640:  { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="w-full !items-stretch"
          >
            {programs.map((p, i) => (
              <SwiperSlide key={i} className="!h-auto">

                {/* ── Program card ── */}
                <div className="bg-white rounded-[24px] overflow-hidden border border-stone-200/40 shadow-sm hover:shadow-xl transition-all duration-500 group hover:-translate-y-1.5 flex flex-col h-full">

                  {/* Card image */}
                  <div className="relative overflow-hidden aspect-[4/3] w-full">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/35 via-transparent to-transparent" />
                    {/* Price badge on image */}
                    {p.price && (
                      <div className="absolute top-3 right-3 bg-[#c38b5f] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md tracking-wide">
                        From {p.price}
                      </div>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-stone-900 text-lg font-serif font-bold leading-snug group-hover:text-[#c38b5f] transition-colors duration-300 min-h-[52px]">
                        {p.title}
                      </h3>
                      <p className="text-stone-500 text-sm leading-relaxed mt-3 mb-6">
                        {p.desc}
                      </p>
                    </div>
                    <Link
                      to={p.link}
                      className="inline-flex items-center gap-2 text-stone-700 text-xs font-bold uppercase tracking-wider hover:gap-3 hover:text-[#c38b5f] transition-all duration-300 no-underline self-start"
                    >
                      Read More
                      <ArrowRight size={14} className="text-[#c38b5f]" />
                    </Link>
                  </div>

                  {/* Bottom hover bar */}
                  <div className="h-[3px] w-0 bg-gradient-to-r from-[#1c2e24] to-[#c38b5f] group-hover:w-full transition-all duration-500" />
                </div>

              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination dots */}
          <div className="programs-pagination flex justify-center gap-2 mt-8 [--swiper-pagination-color:#c38b5f]" />
        </div>

      </div>
    </section>
  );
}



