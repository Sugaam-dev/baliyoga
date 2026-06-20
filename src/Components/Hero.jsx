

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  EffectFade,
} from "swiper/modules";

import { Link } from "react-router-dom";

import {
  Download,
  ArrowRight,
  Award,
  Calendar,
  Home,
  Utensils,
} from "lucide-react";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Images
// import yoga0 from "../pages/home/images/yoga10.png";
import yoga1 from "../pages/home/images/yoga1.jpg";
import yoga from "../pages/home/images/yoga.jpg";

function HeroSection() {
  // Dynamically inject Google Fonts for both Montserrat (Heading) and Playfair Display (Subtitle)
  useEffect(() => {
    const fontId = "google-fonts-hero";
    if (!document.getElementById(fontId)) {
      const link = document.createElement("link");
      link.id = fontId;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Playfair+Display:ital,wght@1,400&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  const heroImages = [
    // { url: yoga0, alt: "Yoga Training Bali" },
    { url: yoga1, alt: "Yoga Retreat Bali" },
    { url: yoga, alt: "Yoga Meditation Bali" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#f8f5ef] p-0 m-0">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        className="
          w-full h-full
          [--swiper-navigation-color:#b86b2b]

          [&_.swiper-button-next]:!hidden
          lg:[&_.swiper-button-next]:!flex
          [&_.swiper-button-next]:right-8
          [&_.swiper-button-next]:w-14
          [&_.swiper-button-next]:h-14
          [&_.swiper-button-next]:rounded-full
          [&_.swiper-button-next]:bg-white/90
          [&_.swiper-button-next]:shadow-xl
          [&_.swiper-button-next]:after:text-[18px]
          [&_.swiper-button-next]:after:font-bold

          [&_.swiper-button-prev]:!hidden
          lg:[&_.swiper-button-prev]:!flex
          [&_.swiper-button-prev]:left-8
          [&_.swiper-button-prev]:w-14
          [&_.swiper-button-prev]:h-14
          [&_.swiper-button-prev]:rounded-full
          [&_.swiper-button-prev]:bg-white/90
          [&_.swiper-button-prev]:shadow-xl
          [&_.swiper-button-prev]:after:text-[18px]
          [&_.swiper-button-prev]:after:font-bold
        "
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full bg-[#f8f5ef] flex flex-col lg:block">

              {/* ───────────────── DESKTOP HERO ───────────────── */}
              <div className="hidden lg:flex lg:flex-row h-[75vh] min-h-[500px] max-h-[720px]">
                
                {/* LEFT CONTENT CONTAINER - EXACTLY 30% WIDTH */}
                <div
                  className="
                    relative z-20 bg-[#f8f5ef]
                    flex-shrink-0
                    flex flex-col justify-center
                    pl-8 xl:pl-12 2xl:pl-16
                    pr-4
                    w-[30%]
                  "
                >
                  <LeftContent />
                </div>

                {/* RIGHT IMAGE - EXACTLY 70% WIDTH */}
                <div className="relative w-[70%] overflow-hidden h-full flex-shrink-0">
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="absolute inset-0 w-full h-full object-cover scale-[1.01]"
                  />

                  {/* PREMIUM INVISIBLE BLEND */}
                  <div className="absolute inset-y-0 -left-[2%] z-10 w-[25%] pointer-events-none">
                    <div
                      className="
                        absolute inset-0
                        bg-gradient-to-r
                        from-[#f8f5ef]
                        via-[#f8f5ef]/98
                        via-[#f8f5ef]/90
                        via-[#f8f5ef]/60
                        via-[#f8f5ef]/20
                        to-transparent
                      "
                    />
                    <div className="absolute inset-y-0 -left-[40px] w-[140px] bg-[#f8f5ef] blur-[50px] opacity-95" />
                  </div>

                  <div className="absolute inset-0 bg-black/[0.02]" />
                </div>
              </div>

              {/* ───────────────── MOBILE / TABLET ───────────────── */}
              <div className="flex flex-col lg:hidden">
                {/* TEXT */}
                <div className="bg-[#f8f5ef] px-6 sm:px-12 pt-8 pb-6">
                  <LeftContent />
                </div>

                {/* IMAGE */}
                <div className="relative w-full overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="w-full object-cover"
                    style={{
                      height: "45vw",
                      minHeight: "240px",
                      maxHeight: "400px",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/5" />
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

/* ─────────────────────────────────────────────
    LEFT CONTENT COMPONENT
───────────────────────────────────────────── */

function LeftContent() {
  return (
    <>
      {/* BADGE */}
      <div className="flex items-center gap-2 text-[#b86b2b] text-[10px] xl:text-[11px] 2xl:text-xs font-semibold tracking-wider uppercase">
        <Award size={13} className="stroke-[2.5]" />
        A Journey That Transforms You
      </div>

      {/* HEADING */}
      <h1
        className="
          mt-4
          font-['Montserrat']
          text-[1.8rem] sm:text-[2.3rem]
          lg:text-[2.8rem] xl:text-[2.4rem] 2xl:text-[1.8rem]
          leading-[1.15] font-bold text-[#1f3528]
          tracking-tight
        "
      >
        Become a <br />
        <span className="font-bold">Certified Yoga</span> <br />
        Teacher in{" "}
        <span className="text-[#b86b2b] font-bold">Bali</span>
      </h1>

      {/* SUBTITLE */}
      <p
        className="
          mt-7 text-black-600 font-medium
          font-['Playfair_Display'] italic
          text-[14px] sm:text-[17px]
          lg:text-[16px] xl:text-[18px] 2xl:text-[18px]
        "
      >
        Transform Your Life. Inspire the World.
      </p>

      {/* HORIZONTAL FEATURES */}
      <div className="mt-3 flex flex-row flex-wrap lg:flex-nowrap items-center justify-start gap-y-3 gap-x-2 border-t border-gray-200/80 pt-4">
        {[
          { title: <>21-Day <br /> Training</>, icon: Calendar },
          { title: <>Yoga Alliance <br /> Certified</>, icon: Award },
          { title: <>Luxury Stay <br /> In Nature</>, icon: Home },
          { title: <>Sattvic Food <br /> & Excursions</>, icon: Utensils },
        ].map((item, i) => {
          const IconComponent = item.icon;
          return (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center text-center gap-1 flex-shrink-0 min-w-[72px] lg:min-w-[65px] xl:min-w-[75px]">
                {/* Logo / Icon on top */}
                <div
                  className="
                    rounded-full border border-gray-300 bg-white
                    flex items-center justify-center flex-shrink-0
                    w-7 h-7 text-[#1f3528] shadow-sm
                  "
                >
                  <IconComponent size={13} className="stroke-[1.75]" />
                </div>

                {/* Label text directly below icon */}
                <div
                  className="
                    text-[#1f3528]
                    font-semibold
                    text-[9px]
                    xl:text-[10px]
                    2xl:text-[11px]
                    tracking-wide
                    leading-tight
                  "
                >
                  {item.title}
                </div>
              </div>

              {/* Middle line separator dividers between items */}
              {i < 3 && (
                <div className="hidden lg:block h-6 w-px bg-gray-300/70 mx-0.5 self-center flex-shrink-0" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* BUTTONS */}
      <div className="mt-8 flex flex-col sm:flex-row gap-2.5">
        {/* APPLY NOW */}
        <Link
          to="/contact"
          className="
            group
            bg-[#26402e] hover:bg-[#182b1f]
            text-white
            px-4 lg:px-3 xl:px-4
            py-3 lg:py-2.5 xl:py-3
            rounded-xl
            text-xs lg:text-[10px] xl:text-xs 2xl:text-sm
            font-bold tracking-wide
            shadow-md transition-all duration-300
            flex items-center justify-center gap-1.5
          "
        >
          APPLY NOW
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition stroke-[2.5]"
          />
        </Link>

        {/* DOWNLOAD BROCHURE */}
        <a
          href="/brochure.pdf"
          className="
            border border-[#b86b2b]
            text-[#b86b2b] bg-transparent
            hover:bg-[#b86b2b] hover:text-white
            px-4 lg:px-3 xl:px-4
            py-3 lg:py-2.5 xl:py-3
            rounded-xl
            text-xs lg:text-[10px] xl:text-xs 2xl:text-sm
            font-bold tracking-wide
            transition-all duration-300
            flex items-center justify-center gap-1.5
          "
        >
          DOWNLOAD BROCHURE
        </a>
      </div>
    </>
  );
}

export default HeroSection;