// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
// import { Link } from "react-router-dom";

// // Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";

// // 🔽 LOCAL IMAGE IMPORTS (ONLY ADDITION)
// import yoga0 from "../pages/home/images/yoga0.jpg";
// import yoga1 from "../pages/home/images/yoga1.jpg";
// import yoga from "../pages/home/images/yoga.jpg";

// function HeroSection() {
//   // 🔽 ONLY CHANGE: url → imported image
//   const heroImages = [
//     {
//       url: yoga0,
//       alt: "Students practicing yoga in a peaceful studio environment",
//     },
//     {
//       url: yoga1,
//       alt: "Group yoga session focused on balance and mindfulness",
//     },
//     {
//       url: yoga,
//       alt: "Professional yoga instructor guiding a meditation class",
//     },
//   ];

//   return (
//     <section className="relative w-full max-w-full h-screen m-0 p-0 overflow-hidden bg-black">
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation, EffectFade]}
//         effect="fade"
//         fadeEffect={{ crossFade: true }}
//         speed={1200}
//         autoplay={{ delay: 4500, disableOnInteraction: false }}
//         pagination={false}
//         navigation={true}
//         loop={true}
//           className="w-full h-full
//            [--swiper-navigation-color:#b4533c]

//           [&_.swiper-button-next]:hidden 
//           sm:[&_.swiper-button-next]:flex 
//           [&_.swiper-button-next]:right-10
//           [&_.swiper-button-next]:bg-transparent
//           [&_.swiper-button-next]:after:text-[30px]
//           [&_.swiper-button-next]:after:font-bold
//           [&_.swiper-button-next]:after:text-[#b4533c]

//           [&_.swiper-button-prev]:hidden 
//           sm:[&_.swiper-button-prev]:flex 
//           [&_.swiper-button-prev]:left-10
//           [&_.swiper-button-prev]:bg-transparent
//           [&_.swiper-button-prev]:after:text-[30px]
//           [&_.swiper-button-prev]:after:font-bold
//           [&_.swiper-button-prev]:after:text-[#b4533c]

//           [&_.swiper-pagination-bullet]:bg-white 
//           [&_.swiper-pagination-bullet]:opacity-50 
//           [&_.swiper-pagination-bullet]:w-3 
//           [&_.swiper-pagination-bullet]:h-3 
//           [&_.swiper-pagination-bullet]:transition-all
//           [&_.swiper-pagination-bullet-active]:opacity-1 
//           [&_.swiper-pagination-bullet-active]:w-10 
//           [&_.swiper-pagination-bullet-active]:rounded-[6px]"
//               >
//         {heroImages.map((image, index) => (
//           <SwiperSlide key={index} className="overflow-hidden bg-black">
//             <div className="w-full h-full relative">
//               <img
//                 src={image.url}
//                 alt={image.alt}
//                 loading={index === 0 ? "eager" : "lazy"}
//                 className="w-full h-full object-cover transition-opacity duration-700 [.swiper-slide-active_&]:animate-[kenBurnsZoom_8s_ease-out_forwards]"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Content Overlay */}
//       {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center text-white max-w-[800px] w-[90%] px-5 pointer-events-none">
//         <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold mb-5 leading-[1.2] drop-shadow-[2px_2px_8px_rgba(0,0,0,0.7)] animate-[fadeInUp_1s_ease_0.3s_backwards] pointer-events-auto">
//           Welcome to BALIYOGA
//         </h1>
//         <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal mb-[30px] leading-[1.6] drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)] animate-[fadeInUp_1s_ease_0.5s_backwards] pointer-events-auto">
//           Transform your body, calm your mind, and elevate your spirit through
//           authentic yoga practices guided by experienced instructors.
//         </p>

//         <Link
//           to="/contact"
//           className="group relative inline-block py-[15px] pr-[50px] pl-[40px] text-sm md:text-base lg:text-[18px] font-semibold text-white bg-[#b4533c] rounded-[50px] transition-all duration-400 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-[#b4533c] hover:-translate-y-[3px] hover:shadow-[0_6px_25px_rgba(0,0,0,0.4)] hover:pr-[55px] active:translate-y-[-1px] animate-[fadeInUp_1s_ease_0.7s_backwards] pointer-events-auto overflow-hidden no-underline"
//         >
//           Get Started
//           {/* <span className="absolute right-5 top-1/2 -translate-y-1/2 w-[12px] h-[12px] border-r-2 border-b-2 border-white -rotate-45 transition-all duration-400 group-hover:right-[15px] group-hover:animate-[arrowSlide_0.6s_ease_infinite]"></span> */}
//         {/* </Link>
//       </div> */} 

//       {/* Content Overlay */}
// <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-white px-5">

//   <div className="max-w-[900px] w-full">

//     {/* Heading */}
//     <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[26px] font-bold mb-4 leading-[1.2] drop-shadow-[2px_2px_8px_rgba(0,0,0,0.7)]">
//      <span className="block">
//         Become a Certified Yoga Teacher in Bali —
//       </span>
//        <span className="block text-yellow-400 mt-2">
//         Transform Your Life, Embrace Endless Possibilities
//       </span>
//     </h1>


//     {/* Subtext */}
//     <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] mb-6 leading-[1.6] drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)]">
//       Internationally certified Yoga TTC with accommodation, meals &
//       spiritual immersion in the heart of Bali.
//     </p>

//     {/* Buttons */}
//     <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">

//       {/* Apply Now */}
//       <a
//         href="/contact"
//         className="bg-[#3d4a3e] text-white px-6 py-3 rounded-md text-sm sm:text-base font-medium flex items-center gap-2 hover:bg-[#2c362d] transition"
//       >
//         Apply Now →
//       </a>

//       {/* Download Brochure */}
//       <a
//         href="/brochure.pdf"
//         className="bg-white text-black px-6 py-3 rounded-md text-sm sm:text-base font-medium flex items-center gap-2 hover:bg-gray-200 transition"
//       >
//         Download Brochure ⬇
//       </a>

//     </div>
//   </div>

//   {/* Bottom Info Strip */}
//   <div className="
//     absolute bottom-0 left-0 w-full 
//     bg-[#f5f2eb] text-black 
//     py-3 px-4
//   ">
//     <div className="
//       max-w-[1100px] mx-auto 
//       flex flex-col sm:flex-row 
//       justify-between items-center 
//       gap-3 text-center sm:text-left
//     ">

//       {/* Rating */}
//       <div className="flex items-center gap-2 text-sm">
//         ⭐ <span className="font-semibold">4.9/5 Rating</span>
//         <span className="text-gray-600">(120+ Reviews)</span>
//       </div>

//       {/* Students */}
//       <div className="text-sm">
//         🌍 <span className="font-semibold">1000+</span> Students Trained
//       </div>

//       {/* Certification */}
//       <div className="text-sm">
//         🏆 Yoga Alliance Certified School
//       </div>

//     </div>
//   </div>

// </div>

//       <style>{`
//         @keyframes kenBurnsZoom {
//           0% { transform: scale(1); }
//           100% { transform: scale(1.08); }
//         }
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes arrowSlide {
//           0%, 100% { right: 15px; }
//           50% { right: 10px; }
//         }
//       `}</style>
//     </section>
//   );
// }

// export default HeroSection;




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

              {/* ── DESKTOP LAYOUT (lg+) ── */}
              <div
                className="hidden lg:flex lg:flex-row"
                style={{ height: "clamp(500px, 48vw, 780px)" }}
              >
                {/* LEFT — text panel: 38% at lg (1024px), 34% at xl, 32% at 2xl+ */}
                <div
                  className="
                    relative z-20 bg-white
                    flex-shrink-0
                    flex flex-col justify-center
                    px-8 xl:px-12 2xl:px-16
                    py-8
                    w-[38%] xl:w-[34%] 2xl:w-[32%]
                  "
                >
                  <LeftContent />
                </div>

                {/* RIGHT — image (67%) */}
                <div className="relative flex-1 overflow-hidden">
  <img
    src={image.url}
    alt={image.alt}
    loading={index === 0 ? "eager" : "lazy"}
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* White fade from left side */}
  <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#f8f5ef] via-[#f8f5ef]/70 to-transparent z-10" />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/10" />
</div>
              </div>

              {/* ── MOBILE / TABLET LAYOUT ── */}
              <div className="flex flex-col lg:hidden">

                {/* Text block */}
                <div className="bg-white px-5 sm:px-8 py-10">
                  <LeftContent />
                </div>

                {/* Image */}
                <div className="relative">
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="w-full object-cover"
                    style={{ height: "62vw", minHeight: "260px", maxHeight: "480px" }}
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Stats card — top ~10% overlaps image */}
                <div className="relative z-20 -mt-[10%] px-3 pb-4">
                  <StatsCard />
                </div>
              </div>

              {/* ── DESKTOP FLOATING STATS CARD ── */}
              <div
                className="
                  hidden lg:block
                  absolute bottom-6 right-6
                  w-[420px] xl:w-[540px] 2xl:w-[660px]
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
   Sub-components
───────────────────────────────────────────── */

function LeftContent() {
  return (
    <>
      {/* Badge */}
      <div className="flex items-center gap-2 text-[#b86b2b] text-[10px] lg:text-[10px] xl:text-xs 2xl:text-sm font-semibold tracking-wide">
        <Award size={12} />
        A JOURNEY THAT TRANSFORMS YOU
      </div>

      {/* Heading
          Panel widths: lg=40%≈410px → 2.2rem | xl=35%≈448px → 2.6rem | 2xl=33%≈512px → 3.2rem */}
      <h1
        className="
          mt-3
          text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem]
          lg:text-[2.1rem] xl:text-[2.6rem] 2xl:text-[3.2rem]
          leading-[1.05] font-bold text-[#1f3528]
        "
      >
        Become a
        <span className="block">Certified Yoga</span>
        <span className="block">
          Teacher in{" "}
          <span className="text-[#c9732c]">Bali</span>
        </span>
      </h1>

      {/* Subtitle */}
      <p className="
        mt-2 italic text-gray-600 leading-relaxed
        text-[15px] sm:text-[17px]
        lg:text-[13px] xl:text-[15px] 2xl:text-[17px]
      ">
        Transform Your Life. Inspire The World.
      </p>

      {/* Feature pills */}
      <div className="mt-4 lg:mt-3 grid grid-cols-2 gap-3 lg:gap-2 xl:gap-3">
        {[
          { title: "21-Day Training", icon: "🧘" },
          { title: "Yoga Alliance Certified", icon: "🏆" },
          { title: "Luxury Stay In Nature", icon: "🌿" },
          { title: "Satvic Food & Excursions", icon: "🍃" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="
              rounded-xl bg-[#f1ebe2] flex items-center justify-center flex-shrink-0
              w-9 h-9 text-base
              lg:w-8 lg:h-8 lg:text-sm
              xl:w-9 xl:h-9 xl:text-base
            ">
              {item.icon}
            </div>
            <div className="
              text-[#1f3528] font-medium leading-snug
              text-sm
              lg:text-[12px] xl:text-[13px] 2xl:text-sm
            ">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="mt-5 lg:mt-4 flex flex-col sm:flex-row gap-3">
        <Link
          to="/contact"
          className="
            group
            bg-gradient-to-r from-[#2f5134] to-[#466a49]
            hover:from-[#26472b] hover:to-[#39593d]
            text-white
            px-5 lg:px-4 xl:px-5 py-3 lg:py-2 xl:py-3
            rounded-2xl
            text-base lg:text-[12px] xl:text-sm 2xl:text-base
            font-semibold shadow-lg
            transition-all duration-300
            flex items-center justify-center gap-2
          "
        >
          APPLY NOW
          <ArrowRight size={15} className="group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/brochure.pdf"
          className="
            border-2 border-[#d8b18b]
            text-[#c9732c]
            hover:bg-[#c9732c] hover:text-white
            px-5 lg:px-3 xl:px-5 py-3 lg:py-2 xl:py-3
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

function StatsCard() {
  return (
    <div className="
      bg-white/95 backdrop-blur-xl
      rounded-[20px]
      shadow-[0_10px_40px_rgba(0,0,0,0.12)]
      px-2 py-3 sm:px-5 sm:py-4
    ">
      <div className="flex items-center justify-between">

        {/* Rating */}
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 flex-1 px-1">
          <div className="w-7 h-7 sm:w-10 sm:h-10 lg:w-9 lg:h-9 xl:w-11 xl:h-11 rounded-xl bg-[#fff3e8] flex items-center justify-center flex-shrink-0">
            <Star className="text-[#c9732c]" size={13} />
          </div>
          <div className="min-w-0">
            <h3 className="text-[11px] sm:text-xl lg:text-base xl:text-2xl font-bold text-[#1f3528] leading-none">4.9/5</h3>
            <p className="text-gray-600 text-[8px] sm:text-xs lg:text-[10px] xl:text-sm leading-tight">Student Rating</p>
          </div>
        </div>

        <div className="w-px h-8 bg-gray-200 flex-shrink-0" />

        {/* Students */}
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 flex-1 px-1 sm:px-2">
          <div className="w-7 h-7 sm:w-10 sm:h-10 lg:w-9 lg:h-9 xl:w-11 xl:h-11 rounded-xl bg-[#eef7ee] flex items-center justify-center flex-shrink-0">
            <Users className="text-[#2f7d4c]" size={13} />
          </div>
          <div className="min-w-0">
            <h3 className="text-[11px] sm:text-xl lg:text-base xl:text-2xl font-bold text-[#1f3528] leading-none">1000+</h3>
            <p className="text-gray-600 text-[8px] sm:text-xs lg:text-[10px] xl:text-sm leading-tight">Happy Students</p>
          </div>
        </div>

        <div className="w-px h-8 bg-gray-200 flex-shrink-0" />

        {/* Countries */}
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 flex-1 px-1 justify-start">
          <div className="w-7 h-7 sm:w-10 sm:h-10 lg:w-9 lg:h-9 xl:w-11 xl:h-11 rounded-xl bg-[#fff3e8] flex items-center justify-center flex-shrink-0">
            <Globe className="text-[#c9732c]" size={13} />
          </div>
          <div className="min-w-0">
            <h3 className="text-[11px] sm:text-xl lg:text-base xl:text-2xl font-bold text-[#1f3528] leading-none">15+</h3>
            <p className="text-gray-600 text-[8px] sm:text-xs lg:text-[10px] xl:text-sm leading-tight">Countries</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;




// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Autoplay,
//   Navigation,
//   EffectFade,
// } from "swiper/modules";

// import { Link } from "react-router-dom";

// import {
//   Star,
//   Users,
//   Globe,
//   Download,
//   ArrowRight,
//   Award,
// } from "lucide-react";

// // Swiper CSS
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";

// // Images
// import yoga0 from "../pages/home/images/yoga10.png";
// import yoga1 from "../pages/home/images/yoga1.jpg";
// import yoga from "../pages/home/images/yoga0.jpg";

// function HeroSection() {
//   const heroImages = [
//     { url: yoga0, alt: "Yoga Training Bali" },
//     { url: yoga1, alt: "Yoga Retreat Bali" },
//     { url: yoga, alt: "Yoga Meditation Bali" },
//   ];

//   return (
//     <section className="relative w-full overflow-hidden bg-[#f8f5ef]">
//       <Swiper
//         modules={[Autoplay, Navigation, EffectFade]}
//         effect="fade"
//         fadeEffect={{ crossFade: true }}
//         speed={1200}
//         autoplay={{
//           delay: 4500,
//           disableOnInteraction: false,
//         }}
//         navigation={true}
//         loop={true}
//         className="
//           w-full h-auto
//           [--swiper-navigation-color:#b86b2b]

//           [&_.swiper-button-next]:!hidden
//           lg:[&_.swiper-button-next]:!flex
//           [&_.swiper-button-next]:right-8
//           [&_.swiper-button-next]:w-14
//           [&_.swiper-button-next]:h-14
//           [&_.swiper-button-next]:rounded-full
//           [&_.swiper-button-next]:bg-white/90
//           [&_.swiper-button-next]:shadow-xl
//           [&_.swiper-button-next]:after:text-[18px]
//           [&_.swiper-button-next]:after:font-bold

//           [&_.swiper-button-prev]:!hidden
//           lg:[&_.swiper-button-prev]:!flex
//           [&_.swiper-button-prev]:left-8
//           [&_.swiper-button-prev]:w-14
//           [&_.swiper-button-prev]:h-14
//           [&_.swiper-button-prev]:rounded-full
//           [&_.swiper-button-prev]:bg-white/90
//           [&_.swiper-button-prev]:shadow-xl
//           [&_.swiper-button-prev]:after:text-[18px]
//           [&_.swiper-button-prev]:after:font-bold
//         "
//       >
//         {heroImages.map((image, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full overflow-hidden">

//               {/* ───────────────── DESKTOP LAYOUT ───────────────── */}
//               <div
//                 className="hidden lg:flex relative overflow-hidden"
//                 style={{ height: "clamp(500px, 48vw, 780px)" }}
//               >

//                 {/* BACKGROUND IMAGE */}
//                 <div className="absolute inset-0">
//                   <img
//                     src={image.url}
//                     alt={image.alt}
//                     loading={index === 0 ? "eager" : "lazy"}
//                     className="
//                       w-full h-full object-cover
//                       scale-[1.03]
//                     "
//                   />

//                   {/* Dark cinematic overlay */}
//                   <div className="absolute inset-0 bg-black/20" />

//                   {/* Left fade for seamless blending */}
//                   {/* Left fade for seamless blending */}
//                   <div
//                     className="
//     absolute inset-0
//     bg-gradient-to-r
//     from-[#f8f5eff4]
//     via-[#f8f5efb3]
//     via-[1%]
//     to-transparent
//   "
//                   />

//                   {/* Extra soft blend */}
//                   {/* Extra soft blend */}
//                   <div
//                     className="
//     absolute inset-y-0 left-0
//     w-[30%]
//     backdrop-blur-[0.1px]
//   "
//                   />
//                 </div>

//                 {/* CONTENT SECTION */}
//                 <div
//                   className="
//                     relative z-20
//                     flex flex-col justify-center
//                     px-8 xl:px-12 2xl:px-16
//                     py-8
//                     w-[42%] xl:w-[38%] 2xl:w-[34%]
//                   "
//                 >
//                   <LeftContent />
//                 </div>
//               </div>

//               {/* ───────────────── MOBILE / TABLET ───────────────── */}
//               <div className="relative flex flex-col lg:hidden overflow-hidden">

//                 {/* Background Image */}
//                 <div className="absolute inset-0">
//                   <img
//                     src={image.url}
//                     alt={image.alt}
//                     loading={index === 0 ? "eager" : "lazy"}
//                     className="w-full h-full object-cover"
//                     style={{
//                       minHeight: "720px",
//                     }}
//                   />

//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-black/30" />

//                   {/* Soft cream fade */}
//                   <div
//                     className="
//                       absolute inset-0
//                       bg-gradient-to-b
//                       from-[#f8f5efee]
//                       via-[#f8f5ef9f]
//                       to-transparent
//                     "
//                   />
//                 </div>

//                 {/* Text */}
//                 <div className="relative z-20 px-5 sm:px-8 pt-12 pb-12">
//                   <LeftContent />
//                 </div>

//                 {/* Spacer for image visibility */}
//                 <div
//                   style={{
//                     height: "260px",
//                   }}
//                 />

//                 {/* Stats Card */}
//                 <div className="relative z-20 px-3 pb-5 -mt-10">
//                   <StatsCard />
//                 </div>
//               </div>

//               {/* ───────────────── DESKTOP STATS CARD ───────────────── */}
//               <div
//                 className="
//                   hidden lg:block
//                   absolute bottom-6 right-6
//                   w-[420px] xl:w-[540px] 2xl:w-[660px]
//                   z-30
//                 "
//               >
//                 <StatsCard />
//               </div>

//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }

// /* ─────────────────────────────────────────────
//    LEFT CONTENT
// ───────────────────────────────────────────── */

// function LeftContent() {
//   return (
//     <>
//       {/* Badge */}
//       <div className="flex items-center gap-2 text-[#b86b2b] text-[10px] lg:text-[10px] xl:text-xs 2xl:text-sm font-semibold tracking-wide">
//         <Award size={12} />
//         A JOURNEY THAT TRANSFORMS YOU
//       </div>

//       {/* Heading */}
//       <h1
//         className="
//           mt-3
//           text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem]
//           lg:text-[2.1rem] xl:text-[2.6rem] 2xl:text-[3.2rem]
//           leading-[1.05] font-bold text-[#1f3528]
//         "
//       >
//         Become a
//         <span className="block">Certified Yoga</span>
//         <span className="block">
//           Teacher in{" "}
//           <span className="text-[#c9732c]">Bali</span>
//         </span>
//       </h1>

//       {/* Subtitle */}
//       <p
//         className="
//           mt-2 italic text-gray-700 leading-relaxed
//           text-[15px] sm:text-[17px]
//           lg:text-[13px] xl:text-[15px] 2xl:text-[17px]
//         "
//       >
//         Transform Your Life. Inspire The World.
//       </p>

//       {/* Feature pills */}
//       <div className="mt-4 lg:mt-3 grid grid-cols-2 gap-3 lg:gap-2 xl:gap-3">
//         {[
//           { title: "21-Day Training", icon: "🧘" },
//           { title: "Yoga Alliance Certified", icon: "🏆" },
//           { title: "Luxury Stay In Nature", icon: "🌿" },
//           { title: "Satvic Food & Excursions", icon: "🍃" },
//         ].map((item, i) => (
//           <div
//             key={i}
//             className="
//               flex items-center gap-2
//               bg-white/30
//               backdrop-blur-md
//               rounded-2xl
//               p-2
//               border border-white/20
//             "
//           >
//             <div
//               className="
//                 rounded-xl bg-[#f1ebe2]
//                 flex items-center justify-center
//                 flex-shrink-0
//                 w-9 h-9 text-base
//                 lg:w-8 lg:h-8 lg:text-sm
//                 xl:w-9 xl:h-9 xl:text-base
//               "
//             >
//               {item.icon}
//             </div>

//             <div
//               className="
//                 text-[#1f3528]
//                 font-medium leading-snug
//                 text-sm
//                 lg:text-[12px]
//                 xl:text-[13px]
//                 2xl:text-sm
//               "
//             >
//               {item.title}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* CTA Buttons */}
//       <div className="mt-5 lg:mt-4 flex flex-col sm:flex-row gap-3">
//         <Link
//           to="/contact"
//           className="
//             group
//             bg-gradient-to-r from-[#2f5134] to-[#466a49]
//             hover:from-[#26472b] hover:to-[#39593d]
//             text-white
//             px-5 lg:px-4 xl:px-5 py-3 lg:py-2 xl:py-3
//             rounded-2xl
//             text-base lg:text-[12px] xl:text-sm 2xl:text-base
//             font-semibold shadow-lg
//             transition-all duration-300
//             flex items-center justify-center gap-2
//           "
//         >
//           APPLY NOW

//           <ArrowRight
//             size={15}
//             className="group-hover:translate-x-1 transition"
//           />
//         </Link>

//         <a
//           href="/brochure.pdf"
//           className="
//             bg-white/40
//             backdrop-blur-md
//             border border-white/40
//             text-[#c9732c]
//             hover:bg-[#c9732c]
//             hover:text-white
//             px-5 lg:px-3 xl:px-5 py-3 lg:py-2 xl:py-3
//             rounded-2xl
//             text-base lg:text-[12px] xl:text-sm 2xl:text-base
//             font-semibold
//             transition-all duration-300
//             flex items-center justify-center gap-2
//           "
//         >
//           <Download size={15} />
//           DOWNLOAD BROCHURE
//         </a>
//       </div>
//     </>
//   );
// }

// /* ─────────────────────────────────────────────
//    STATS CARD
// ───────────────────────────────────────────── */

// function StatsCard() {
//   return (
//     <div
//       className="
//         bg-white/80 backdrop-blur-xl
//         rounded-[20px]
//         shadow-[0_10px_40px_rgba(0,0,0,0.12)]
//         px-2 py-3 sm:px-5 sm:py-4
//         border border-white/40
//       "
//     >
//       <div className="flex items-center justify-between">

//         {/* Rating */}
//         <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 flex-1 px-1">
//           <div className="w-7 h-7 sm:w-10 sm:h-10 lg:w-9 lg:h-9 xl:w-11 xl:h-11 rounded-xl bg-[#fff3e8] flex items-center justify-center flex-shrink-0">
//             <Star className="text-[#c9732c]" size={13} />
//           </div>

//           <div className="min-w-0">
//             <h3 className="text-[11px] sm:text-xl lg:text-base xl:text-2xl font-bold text-[#1f3528] leading-none">
//               4.9/5
//             </h3>

//             <p className="text-gray-600 text-[8px] sm:text-xs lg:text-[10px] xl:text-sm leading-tight">
//               Student Rating
//             </p>
//           </div>
//         </div>

//         <div className="w-px h-8 bg-gray-200 flex-shrink-0" />

//         {/* Students */}
//         <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 flex-1 px-1 sm:px-2">
//           <div className="w-7 h-7 sm:w-10 sm:h-10 lg:w-9 lg:h-9 xl:w-11 xl:h-11 rounded-xl bg-[#eef7ee] flex items-center justify-center flex-shrink-0">
//             <Users className="text-[#2f7d4c]" size={13} />
//           </div>

//           <div className="min-w-0">
//             <h3 className="text-[11px] sm:text-xl lg:text-base xl:text-2xl font-bold text-[#1f3528] leading-none">
//               1000+
//             </h3>

//             <p className="text-gray-600 text-[8px] sm:text-xs lg:text-[10px] xl:text-sm leading-tight">
//               Happy Students
//             </p>
//           </div>
//         </div>

//         <div className="w-px h-8 bg-gray-200 flex-shrink-0" />

//         {/* Countries */}
//         <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 flex-1 px-1 justify-start">
//           <div className="w-7 h-7 sm:w-10 sm:h-10 lg:w-9 lg:h-9 xl:w-11 xl:h-11 rounded-xl bg-[#fff3e8] flex items-center justify-center flex-shrink-0">
//             <Globe className="text-[#c9732c]" size={13} />
//           </div>

//           <div className="min-w-0">
//             <h3 className="text-[11px] sm:text-xl lg:text-base xl:text-2xl font-bold text-[#1f3528] leading-none">
//               15+
//             </h3>

//             <p className="text-gray-600 text-[8px] sm:text-xs lg:text-[10px] xl:text-sm leading-tight">
//               Countries
//             </p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default HeroSection;