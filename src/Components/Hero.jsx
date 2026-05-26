import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  EffectFade,
} from "swiper/modules";

import { Link } from "react-router-dom";

import {
  Star,
  Users,
 Globe,
  Download,
  ArrowRight,
  Award,
} from "lucide-react";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Images
import yoga0 from "../pages/home/images/yoga10.png";
import yoga1 from "../pages/home/images/yoga1.jpg";
import yoga from "../pages/home/images/yoga.jpg";

function HeroSection() {
  const heroImages = [
    { url: yoga0, alt: "Yoga Training Bali" },
    { url: yoga1, alt: "Yoga Retreat Bali" },
    { url: yoga, alt: "Yoga Meditation Bali" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#f8f5ef]">

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
          w-full h-auto
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
              <div
                className="hidden lg:flex lg:flex-row"
                style={{ height: "clamp(500px, 48vw, 780px)" }}
              >

                {/* LEFT CONTENT */}
                <div
                  className="
                    relative z-20 bg-[#f8f5ef]
                    flex-shrink-0
                    flex flex-col justify-center
                    px-10 xl:px-14 2xl:px-20
                    py-10
                    w-[36%] xl:w-[34%] 2xl:w-[32%]
                  "
                >
                  <LeftContent />
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative flex-1 overflow-hidden">

                  {/* IMAGE */}
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="absolute inset-0 w-full h-full object-cover scale-[1.06]"
                  />

                  {/* PREMIUM INVISIBLE BLEND */}
                  <div className="absolute inset-y-0 left-0 z-10 w-[24%] pointer-events-none">

                    {/* MAIN CINEMATIC FADE */}
                    <div
                      className="
                        absolute inset-0
                        bg-gradient-to-r
                        from-[#f8f5ef]
                        via-[#f8f5ef]
                        via-[#f8f5ef]
                        via-[#f8f5ef]/98
                        via-[#f8f5ef]/95
                        via-[#f8f5ef]/88
                        via-[#f8f5ef]/72
                        via-[#f8f5ef]/48
                        via-[#f8f5ef]/20
                        to-transparent
                      "
                    />

                    {/* CREAMY GLOW */}
                    <div className="absolute inset-y-0 left-0 w-[180px] bg-[#f8f5ef] blur-[90px] opacity-100" />

                  </div>

                  {/* DARK CINEMATIC OVERLAY */}
                  <div className="absolute inset-0 bg-black/[0.06]" />

                </div>

              </div>

              {/* ───────────────── MOBILE / TABLET ───────────────── */}
              <div className="flex flex-col lg:hidden">

                {/* TEXT */}
                <div className="bg-[#f8f5ef] px-5 sm:px-8 py-10">
                  <LeftContent />
                </div>

                {/* IMAGE */}
                <div className="relative">

                  <img
                    src={image.url}
                    alt={image.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="w-full object-cover"
                    style={{
                      height: "62vw",
                      minHeight: "260px",
                      maxHeight: "480px",
                    }}
                  />

                  <div className="absolute inset-0 bg-black/10" />

                </div>

                {/* MOBILE STATS */}
                <div className="relative z-20 -mt-[10%] px-3 pb-4">
                  <StatsCard />
                </div>

              </div>

              {/* DESKTOP FLOATING STATS */}
              <div
                className="
                  hidden lg:block
                  absolute bottom-6 right-6
                  w-[700px] xl:w-[900px] 2xl:w-[1200px]
                  z-30
                "
              >
                <StatsCard />
              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
}

/* ─────────────────────────────────────────────
   LEFT CONTENT
───────────────────────────────────────────── */

function LeftContent() {
  return (
    <>

      {/* BADGE */}
      <div className="flex items-center gap-2 text-[#b86b2b] text-[10px] lg:text-[10px] xl:text-xs 2xl:text-sm font-semibold tracking-wide">

        <Award size={12} />

        A JOURNEY THAT TRANSFORMS YOU

      </div>

      {/* HEADING */}
      <h1
        className="
          mt-3
          text-[2.5rem] sm:text-[3rem] md:text-[3.6rem]
          lg:text-[2.3rem] xl:text-[2.8rem] 2xl:text-[3.4rem]
          leading-[1.05] font-bold text-[#1f3528]
        "
      >
        Become a

        <span className="block">
          Certified Yoga
        </span>

        <span className="block">
          Teacher in{" "}

          <span className="text-[#c9732c]">
            Bali
          </span>

        </span>
      </h1>

      {/* SUBTITLE */}
      <p
        className="
          mt-2 italic text-gray-600 leading-relaxed
          text-[16px] sm:text-[18px]
          lg:text-[15px] xl:text-[17px] 2xl:text-[19px]
        "
      >
        Transform Your Life. Inspire The World.
      </p>

      {/* FEATURES */}
      <div className="mt-7 grid grid-cols-2 gap-4 lg:gap-4">

        {[
          { title: "21-Day Training", icon: "🧘" },
          { title: "Yoga Alliance Certified", icon: "🏆" },
          { title: "Luxury Stay In Nature", icon: "🌿" },
          { title: "Satvic Food & Excursions", icon: "🍃" },
        ].map((item, i) => (

          <div key={i} className="flex items-center gap-2">

            <div
              className="
                rounded-xl bg-[#f1ebe2]
                flex items-center justify-center
                flex-shrink-0
                w-9 h-9 text-base
                lg:w-8 lg:h-8 lg:text-sm
                xl:w-9 xl:h-9 xl:text-base
              "
            >
              {item.icon}
            </div>

            <div
              className="
                text-[#1f3528]
                font-medium
                leading-snug
                text-sm
                lg:text-[12px]
                xl:text-[13px]
                2xl:text-sm
              "
            >
              {item.title}
            </div>

          </div>

        ))}

      </div>

      {/* BUTTONS */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">

        {/* APPLY NOW */}
        <Link
          to="/contact"
          className="
            group
            bg-gradient-to-r from-[#2f5134] to-[#466a49]
            hover:from-[#26472b] hover:to-[#39593d]
            text-white
            px-5 lg:px-4 xl:px-5
            py-3 lg:py-2 xl:py-3
            rounded-2xl
            text-base lg:text-[12px] xl:text-sm 2xl:text-base
            font-semibold
            shadow-lg
            transition-all duration-300
            flex items-center justify-center gap-2
          "
        >

          APPLY NOW

          <ArrowRight
            size={15}
            className="group-hover:translate-x-1 transition"
          />

        </Link>

        {/* BROCHURE */}
        <a
          href="/brochure.pdf"
          className="
            border-2 border-[#d8b18b]
            text-[#c9732c]
            hover:bg-[#c9732c]
            hover:text-white
            px-5 lg:px-3 xl:px-5
            py-3 lg:py-2 xl:py-3
            rounded-2xl
            text-base lg:text-[12px] xl:text-sm 2xl:text-base
            font-semibold
            transition-all duration-300
            flex items-center justify-center gap-2
          "
        >

          <Download size={15} />

          DOWNLOAD BROCHURE

        </a>

      </div>

    </>
  );
}

/* ─────────────────────────────────────────────
   STATS CARD
───────────────────────────────────────────── */

function StatsCard() {
  return (
    <div
      className="
        bg-white/95 backdrop-blur-xl
        rounded-[20px]
        shadow-[0_10px_40px_rgba(0,0,0,0.12)]
        px-2 py-3 sm:px-5 sm:py-4
      "
    >

      <div className="flex items-center justify-between">

        {/* RATING */}
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 flex-1 px-1">

          <div className="w-7 h-7 sm:w-10 sm:h-10 lg:w-9 lg:h-9 xl:w-11 xl:h-11 rounded-xl bg-[#fff3e8] flex items-center justify-center flex-shrink-0">

            <Star className="text-[#c9732c]" size={13} />

          </div>

          <div className="min-w-0">

            <h3 className="text-[11px] sm:text-xl lg:text-base xl:text-2xl font-bold text-[#1f3528] leading-none">
              4.9/5
            </h3>

            <p className="text-gray-600 text-[8px] sm:text-xs lg:text-[10px] xl:text-sm leading-tight">
              Student Rating
            </p>

          </div>

        </div>

        <div className="w-px h-8 bg-gray-200 flex-shrink-0" />

        {/* STUDENTS */}
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 flex-1 px-1 sm:px-2">

          <div className="w-7 h-7 sm:w-10 sm:h-10 lg:w-9 lg:h-9 xl:w-11 xl:h-11 rounded-xl bg-[#eef7ee] flex items-center justify-center flex-shrink-0">

            <Users className="text-[#2f7d4c]" size={13} />

          </div>

          <div className="min-w-0">

            <h3 className="text-[11px] sm:text-xl lg:text-base xl:text-2xl font-bold text-[#1f3528] leading-none">
              1000+
            </h3>

            <p className="text-gray-600 text-[8px] sm:text-xs lg:text-[10px] xl:text-sm leading-tight">
              Happy Students
            </p>

          </div>

        </div>

        <div className="w-px h-8 bg-gray-200 flex-shrink-0" />

        {/* COUNTRIES */}
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 flex-1 px-1 justify-start">

          <div className="w-7 h-7 sm:w-10 sm:h-10 lg:w-9 lg:h-9 xl:w-11 xl:h-11 rounded-xl bg-[#fff3e8] flex items-center justify-center flex-shrink-0">

            <Globe className="text-[#c9732c]" size={13} />

          </div>

          <div className="min-w-0">

            <h3 className="text-[11px] sm:text-xl lg:text-base xl:text-2xl font-bold text-[#1f3528] leading-none">
              15+
            </h3>

            <p className="text-gray-600 text-[8px] sm:text-xs lg:text-[10px] xl:text-sm leading-tight">
              Countries
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default HeroSection;