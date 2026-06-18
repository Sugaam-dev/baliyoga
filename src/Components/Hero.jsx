// // // // // import React from "react";
// // // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // // import {
// // // // //   Autoplay,
// // // // //   Navigation,
// // // // //   EffectFade,
// // // // // } from "swiper/modules";

// // // // // import { Link } from "react-router-dom";

// // // // // import {
// // // // //   Star,
// // // // //   Users,
// // // // //  Globe,
// // // // //   Download,
// // // // //   ArrowRight,
// // // // //   Award,
// // // // // } from "lucide-react";

// // // // // // Swiper CSS
// // // // // import "swiper/css";
// // // // // import "swiper/css/navigation";
// // // // // import "swiper/css/effect-fade";

// // // // // // Images
// // // // // import yoga0 from "../pages/home/images/yoga10.png";
// // // // // import yoga1 from "../pages/home/images/yoga1.jpg";
// // // // // import yoga from "../pages/home/images/yoga.jpg";

// // // // // function HeroSection() {
// // // // //   const heroImages = [
// // // // //     { url: yoga0, alt: "Yoga Training Bali" },
// // // // //     { url: yoga1, alt: "Yoga Retreat Bali" },
// // // // //     { url: yoga, alt: "Yoga Meditation Bali" },
// // // // //   ];

// // // // //   return (
// // // // //     <section className="relative w-full overflow-hidden bg-[#f8f5ef]">

// // // // //       <Swiper
// // // // //         modules={[Autoplay, Navigation, EffectFade]}
// // // // //         effect="fade"
// // // // //         fadeEffect={{ crossFade: true }}
// // // // //         speed={1200}
// // // // //         autoplay={{
// // // // //           delay: 4500,
// // // // //           disableOnInteraction: false,
// // // // //         }}
// // // // //         navigation={true}
// // // // //         loop={true}
// // // // //         className="
// // // // //           w-full h-auto
// // // // //           [--swiper-navigation-color:#b86b2b]

// // // // //           [&_.swiper-button-next]:!hidden
// // // // //           lg:[&_.swiper-button-next]:!flex
// // // // //           [&_.swiper-button-next]:right-8
// // // // //           [&_.swiper-button-next]:w-14
// // // // //           [&_.swiper-button-next]:h-14
// // // // //           [&_.swiper-button-next]:rounded-full
// // // // //           [&_.swiper-button-next]:bg-white/90
// // // // //           [&_.swiper-button-next]:shadow-xl
// // // // //           [&_.swiper-button-next]:after:text-[18px]
// // // // //           [&_.swiper-button-next]:after:font-bold

// // // // //           [&_.swiper-button-prev]:!hidden
// // // // //           lg:[&_.swiper-button-prev]:!flex
// // // // //           [&_.swiper-button-prev]:left-8
// // // // //           [&_.swiper-button-prev]:w-14
// // // // //           [&_.swiper-button-prev]:h-14
// // // // //           [&_.swiper-button-prev]:rounded-full
// // // // //           [&_.swiper-button-prev]:bg-white/90
// // // // //           [&_.swiper-button-prev]:shadow-xl
// // // // //           [&_.swiper-button-prev]:after:text-[18px]
// // // // //           [&_.swiper-button-prev]:after:font-bold
// // // // //         "
// // // // //       >

// // // // //         {heroImages.map((image, index) => (
// // // // //           <SwiperSlide key={index}>

// // // // //             <div className="relative w-full bg-[#f8f5ef] flex flex-col lg:block">

// // // // //               {/* ───────────────── DESKTOP HERO ───────────────── */}
// // // // //               <div
// // // // //                 className="hidden lg:flex lg:flex-row"
// // // // //                 style={{ height: "clamp(500px, 48vw, 780px)" }}
// // // // //               >

// // // // //                 {/* LEFT CONTENT */}
// // // // //                 <div
// // // // //                   className="
// // // // //                     relative z-20 bg-[#f8f5ef]
// // // // //                     flex-shrink-0
// // // // //                     flex flex-col justify-center
// // // // //                     pl-10 xl:pl-15 2xl:pl-20
// // // // //                     py-10
// // // // //                     w-[30%] xl:w-[28%] 2xl:w-[26%]
// // // // //                   "
// // // // //                 >
// // // // //                   <LeftContent />
// // // // //                 </div>

// // // // //                 {/* RIGHT IMAGE */}
// // // // //                 <div className="relative flex-1 overflow-hidden">

// // // // //                   {/* IMAGE */}
// // // // //                   <img
// // // // //                     src={image.url}
// // // // //                     alt={image.alt}
// // // // //                     loading={index === 0 ? "eager" : "lazy"}
// // // // //                     className="absolute inset-0 w-full h-full object-cover scale-[1.06]"
// // // // //                   />

// // // // //                   {/* PREMIUM INVISIBLE BLEND */}
// // // // //             <div className="absolute inset-y-0 -left-[4%] z-10 w-[28%] pointer-events-none">

// // // // //                     {/* MAIN CINEMATIC FADE */}
// // // // //                     <div
// // // // //                       className="
// // // // //                         absolute inset-0
// // // // //                         bg-gradient-to-r
// // // // //                         from-[#f8f5ef]
// // // // //                         via-[#f8f5ef]
// // // // //                         via-[#f8f5ef]
// // // // //                         via-[#f8f5ef]/98
// // // // //                         via-[#f8f5ef]/95
// // // // //                         via-[#f8f5ef]/88
// // // // //                         via-[#f8f5ef]/72
// // // // //                         via-[#f8f5ef]/48
// // // // //                         via-[#f8f5ef]/20
// // // // //                         to-transparent
// // // // //                       "
// // // // //                     />

// // // // //                     {/* CREAMY GLOW */}
// // // // //                  <div className="absolute inset-y-0 -left-[60px] w-[220px] bg-[#f8f5ef] blur-[90px] opacity-100" />

// // // // //                   </div>

// // // // //                   {/* DARK CINEMATIC OVERLAY */}
// // // // //                   <div className="absolute inset-0 bg-black/[0.06]" />

// // // // //                 </div>

// // // // //               </div>

// // // // //               {/* ───────────────── MOBILE / TABLET ───────────────── */}
// // // // //               <div className="flex flex-col lg:hidden">

// // // // //                 {/* TEXT */}
// // // // //                 <div className="bg-[#f8f5ef] px-5 sm:px-8 py-10">
// // // // //                   <LeftContent />
// // // // //                 </div>

// // // // //                 {/* IMAGE */}
// // // // //                 <div className="relative">

// // // // //                   <img
// // // // //                     src={image.url}
// // // // //                     alt={image.alt}
// // // // //                     loading={index === 0 ? "eager" : "lazy"}
// // // // //                     className="w-full object-cover"
// // // // //                     style={{
// // // // //                       height: "62vw",
// // // // //                       minHeight: "260px",
// // // // //                       maxHeight: "480px",
// // // // //                     }}
// // // // //                   />

// // // // //                   <div className="absolute inset-0 bg-black/10" />

// // // // //                 </div>

// // // // //                 {/* MOBILE STATS */}
// // // // //                 <div className="relative z-20 -mt-[10%] px-3 pb-4">
// // // // //                   {/* <StatsCard /> */}
// // // // //                 </div>

// // // // //               </div>

// // // // //               {/* DESKTOP FLOATING STATS */}
// // // // //               <div
// // // // //                 className="
// // // // //                   hidden lg:block
// // // // //                   absolute bottom-2 lg:bottom-2 xl:bottom-6 right-6
// // // // //                   w-[600px] xl:w-[900px] 2xl:w-[1000px]
// // // // //                   z-30
// // // // //                 "
// // // // //               >
// // // // //                 {/* <StatsCard /> */}
// // // // //               </div>

// // // // //             </div>

// // // // //           </SwiperSlide>
// // // // //         ))}

// // // // //       </Swiper>

// // // // //     </section>
// // // // //   );
// // // // // }

// // // // // /* ─────────────────────────────────────────────
// // // // //    LEFT CONTENT
// // // // // ───────────────────────────────────────────── */

// // // // // function LeftContent() {
// // // // //   return (
// // // // //     <>

// // // // //       {/* BADGE */}
// // // // //       <div className="flex items-center gap-2 text-[#b86b2b] text-[10px] lg:text-[10px] xl:text-xs 2xl:text-sm font-semibold tracking-wide">

// // // // //         <Award size={12} />

// // // // //         A JOURNEY THAT TRANSFORMS YOU

// // // // //       </div>

// // // // //       {/* HEADING */}
// // // // //       <h1
// // // // //         className="
// // // // //           mt-3
// // // // //           text-[2.5rem] sm:text-[3rem] md:text-[3.6rem]
// // // // //           lg:text-[2.3rem] xl:text-[2.8rem] 2xl:text-[3.4rem]
// // // // //           leading-[1.05] font-bold text-[#1f3528]
// // // // //         "
// // // // //       >
// // // // //         Become a

// // // // //         <span className="block">
// // // // //           Certified Yoga
// // // // //         </span>

// // // // //         <span className="block">
// // // // //           Teacher in{" "}

// // // // //           <span className="text-[#c9732c]">
// // // // //             Bali
// // // // //           </span>

// // // // //         </span>
// // // // //       </h1>

// // // // //       {/* SUBTITLE */}
// // // // //       <p
// // // // //         className="
// // // // //           mt-2 italic text-gray-600 leading-relaxed
// // // // //           text-[16px] sm:text-[18px]
// // // // //           lg:text-[15px] xl:text-[17px] 2xl:text-[19px]
// // // // //         "
// // // // //       >
// // // // //         Transform Your Life. Inspire The World.
// // // // //       </p>

// // // // //       {/* FEATURES */}
// // // // //       <div className="mt-7 grid grid-cols-2 gap-4 lg:gap-4">

// // // // //         {[
// // // // //           { title: "21-Day Training", icon: "🧘" },
// // // // //           { title: "Yoga Alliance Certified", icon: "🏆" },
// // // // //           { title: "Luxury Stay In Nature", icon: "🌿" },
// // // // //           { title: "Satvic Food & Excursions", icon: "🍃" },
// // // // //         ].map((item, i) => (

// // // // //           <div key={i} className="flex items-center gap-2">

// // // // //             <div
// // // // //               className="
// // // // //                 rounded-xl bg-[#f1ebe2]
// // // // //                 flex items-center justify-center
// // // // //                 flex-shrink-0
// // // // //                 w-9 h-9 text-base
// // // // //                 lg:w-8 lg:h-8 lg:text-sm
// // // // //                 xl:w-9 xl:h-9 xl:text-base
// // // // //               "
// // // // //             >
// // // // //               {item.icon}
// // // // //             </div>

// // // // //             <div
// // // // //               className="
// // // // //                 text-[#1f3528]
// // // // //                 font-medium
// // // // //                 leading-snug
// // // // //                 text-sm
// // // // //                 lg:text-[12px]
// // // // //                 xl:text-[13px]
// // // // //                 2xl:text-sm
// // // // //               "
// // // // //             >
// // // // //               {item.title}
// // // // //             </div>

// // // // //           </div>

// // // // //         ))}

// // // // //       </div>

// // // // //       {/* BUTTONS */}
// // // // //       <div className="mt-6 flex flex-col sm:flex-row gap-3">

// // // // //         {/* APPLY NOW */}
// // // // //         <Link
// // // // //           to="/contact"
// // // // //           className="
// // // // //             group
// // // // //             bg-gradient-to-r from-[#2f5134] to-[#466a49]
// // // // //             hover:from-[#26472b] hover:to-[#39593d]
// // // // //             text-white
// // // // //             px-5 lg:px-4 xl:px-5
// // // // //             py-3 lg:py-2 xl:py-3
// // // // //             rounded-2xl
// // // // //             text-base lg:text-[12px] xl:text-sm 2xl:text-base
// // // // //             font-semibold
// // // // //             shadow-lg
// // // // //             transition-all duration-300
// // // // //             flex items-center justify-center gap-2
// // // // //           "
// // // // //         >

// // // // //           APPLY NOW

// // // // //           <ArrowRight
// // // // //             size={15}
// // // // //             className="group-hover:translate-x-1 transition"
// // // // //           />

// // // // //         </Link>

// // // // //         {/* BROCHURE */}
// // // // //         <a
// // // // //           href="/brochure.pdf"
// // // // //           className="
// // // // //             border-2 border-[#d8b18b]
// // // // //             text-[#c9732c]
// // // // //             hover:bg-[#c9732c]
// // // // //             hover:text-white
// // // // //             px-5 lg:px-3 xl:px-5
// // // // //             py-3 lg:py-2 xl:py-3
// // // // //             rounded-2xl
// // // // //             text-base lg:text-[12px] xl:text-sm 2xl:text-base
// // // // //             font-semibold
// // // // //             transition-all duration-300
// // // // //             flex items-center justify-center gap-2
// // // // //           "
// // // // //         >

// // // // //           <Download size={15} />

// // // // //           DOWNLOAD BROCHURE

// // // // //         </a>

// // // // //       </div>

// // // // //     </>
// // // // //   );
// // // // // }

// // // // // /* ─────────────────────────────────────────────
// // // // //    STATS CARD
// // // // // ───────────────────────────────────────────── */

// // // // // // function StatsCard() {
// // // // // //   return (
// // // // // //     <div
// // // // // //       className="
// // // // // //         bg-white/95 backdrop-blur-xl
// // // // // //         rounded-[20px]
// // // // // //         shadow-[0_10px_40px_rgba(0,0,0,0.12)]
// // // // // //         px-2 py-3 sm:px-5 sm:py-4
// // // // // //       "
// // // // // //     >

// // // // // //       <div className="flex items-center justify-between">

// // // // // //         {/* RATING */}
// // // // // //         <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 flex-1 px-1">

// // // // // //           <div className="w-7 h-7 sm:w-10 sm:h-10 lg:w-9 lg:h-9 xl:w-11 xl:h-11 rounded-xl bg-[#fff3e8] flex items-center justify-center flex-shrink-0">

// // // // // //             <Star className="text-[#c9732c]" size={13} />

// // // // // //           </div>

// // // // // //           <div className="min-w-0">

// // // // // //             <h3 className="text-[11px] sm:text-xl lg:text-base xl:text-2xl font-bold text-[#1f3528] leading-none">
// // // // // //               4.9/5
// // // // // //             </h3>

// // // // // //             <p className="text-gray-600 text-[8px] sm:text-xs lg:text-[10px] xl:text-sm leading-tight">
// // // // // //               Student Rating
// // // // // //             </p>

// // // // // //           </div>

// // // // // //         </div>

// // // // // //         <div className="w-px h-8 bg-gray-200 flex-shrink-0" />

// // // // // //         {/* STUDENTS */}
// // // // // //         <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 flex-1 px-1 sm:px-2">

// // // // // //           <div className="w-7 h-7 sm:w-10 sm:h-10 lg:w-9 lg:h-9 xl:w-11 xl:h-11 rounded-xl bg-[#eef7ee] flex items-center justify-center flex-shrink-0">

// // // // // //             <Users className="text-[#2f7d4c]" size={13} />

// // // // // //           </div>

// // // // // //           <div className="min-w-0">

// // // // // //             <h3 className="text-[11px] sm:text-xl lg:text-base xl:text-2xl font-bold text-[#1f3528] leading-none">
// // // // // //               1000+
// // // // // //             </h3>

// // // // // //             <p className="text-gray-600 text-[8px] sm:text-xs lg:text-[10px] xl:text-sm leading-tight">
// // // // // //               Happy Students
// // // // // //             </p>

// // // // // //           </div>

// // // // // //         </div>

// // // // // //         <div className="w-px h-8 bg-gray-200 flex-shrink-0" />

// // // // // //         {/* COUNTRIES */}
// // // // // //         <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 flex-1 px-1 justify-start">

// // // // // //           <div className="w-7 h-7 sm:w-10 sm:h-10 lg:w-9 lg:h-9 xl:w-11 xl:h-11 rounded-xl bg-[#fff3e8] flex items-center justify-center flex-shrink-0">

// // // // // //             <Globe className="text-[#c9732c]" size={13} />

// // // // // //           </div>

// // // // // //           <div className="min-w-0">

// // // // // //             <h3 className="text-[11px] sm:text-xl lg:text-base xl:text-2xl font-bold text-[#1f3528] leading-none">
// // // // // //               15+
// // // // // //             </h3>

// // // // // //             <p className="text-gray-600 text-[8px] sm:text-xs lg:text-[10px] xl:text-sm leading-tight">
// // // // // //               Countries
// // // // // //             </p>

// // // // // //           </div>

// // // // // //         </div>

// // // // // //       </div>

// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // export default HeroSection;

// // // // import React, { useEffect } from "react";
// // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // import {
// // // //   Autoplay,
// // // //   Navigation,
// // // //   EffectFade,
// // // // } from "swiper/modules";

// // // // import { Link } from "react-router-dom";

// // // // import {
// // // //   Star,
// // // //   Users,
// // // //   Globe,
// // // //   Download,
// // // //   ArrowRight,
// // // //   Award,
// // // // } from "lucide-react";

// // // // // Swiper CSS
// // // // import "swiper/css";
// // // // import "swiper/css/navigation";
// // // // import "swiper/css/effect-fade";

// // // // // Images
// // // // import yoga0 from "../pages/home/images/yoga10.png";
// // // // import yoga1 from "../pages/home/images/yoga1.jpg";
// // // // import yoga from "../pages/home/images/yoga.jpg";

// // // // function HeroSection() {
// // // //   // Dynamically inject Google Fonts for both Montserrat (Heading) and Playfair Display (Subtitle)
// // // //   useEffect(() => {
// // // //     const fontId = "google-fonts-hero";
// // // //     if (!document.getElementById(fontId)) {
// // // //       const link = document.createElement("link");
// // // //       link.id = fontId;
// // // //       link.rel = "stylesheet";
// // // //       // Loading Montserrat (Bold 700) and Playfair Display (Italic 400i)
// // // //       link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Playfair+Display:ital,wght@1,400&display=swap";
// // // //       document.head.appendChild(link);
// // // //     }
// // // //   }, []);

// // // //   const heroImages = [
// // // //     { url: yoga0, alt: "Yoga Training Bali" },
// // // //     { url: yoga1, alt: "Yoga Retreat Bali" },
// // // //     { url: yoga, alt: "Yoga Meditation Bali" },
// // // //   ];

// // // //   return (
// // // //     <section className="relative w-full overflow-hidden bg-[#f8f5ef]">

// // // //       <Swiper
// // // //         modules={[Autoplay, Navigation, EffectFade]}
// // // //         effect="fade"
// // // //         fadeEffect={{ crossFade: true }}
// // // //         speed={1200}
// // // //         autoplay={{
// // // //           delay: 4500,
// // // //           disableOnInteraction: false,
// // // //         }}
// // // //         navigation={true}
// // // //         loop={true}
// // // //         className="
// // // //           w-full h-auto
// // // //           [--swiper-navigation-color:#b86b2b]

// // // //           [&_.swiper-button-next]:!hidden
// // // //           lg:[&_.swiper-button-next]:!flex
// // // //           [&_.swiper-button-next]:right-8
// // // //           [&_.swiper-button-next]:w-14
// // // //           [&_.swiper-button-next]:h-14
// // // //           [&_.swiper-button-next]:rounded-full
// // // //           [&_.swiper-button-next]:bg-white/90
// // // //           [&_.swiper-button-next]:shadow-xl
// // // //           [&_.swiper-button-next]:after:text-[18px]
// // // //           [&_.swiper-button-next]:after:font-bold

// // // //           [&_.swiper-button-prev]:!hidden
// // // //           lg:[&_.swiper-button-prev]:!flex
// // // //           [&_.swiper-button-prev]:left-8
// // // //           [&_.swiper-button-prev]:w-14
// // // //           [&_.swiper-button-prev]:h-14
// // // //           [&_.swiper-button-prev]:rounded-full
// // // //           [&_.swiper-button-prev]:bg-white/90
// // // //           [&_.swiper-button-prev]:shadow-xl
// // // //           [&_.swiper-button-prev]:after:text-[18px]
// // // //           [&_.swiper-button-prev]:after:font-bold
// // // //         "
// // // //       >

// // // //         {heroImages.map((image, index) => (
// // // //           <SwiperSlide key={index}>

// // // //             <div className="relative w-full bg-[#f8f5ef] flex flex-col lg:block">

// // // //               {/* ───────────────── DESKTOP HERO ───────────────── */}
// // // //               <div
// // // //                 className="hidden lg:flex lg:flex-row"
// // // //                 style={{ height: "clamp(500px, 48vw, 780px)" }}
// // // //               >

// // // //                 {/* LEFT CONTENT */}
// // // //                 <div
// // // //                   className="
// // // //                     relative z-20 bg-[#f8f5ef]
// // // //                     flex-shrink-0
// // // //                     flex flex-col justify-center
// // // //                     pl-10 xl:pl-15 2xl:pl-20
// // // //                     py-10
// // // //                     w-[30%] xl:w-[28%] 2xl:w-[26%]
// // // //                   "
// // // //                 >
// // // //                   <LeftContent />
// // // //                 </div>

// // // //                 {/* RIGHT IMAGE */}
// // // //                 <div className="relative flex-1 overflow-hidden">

// // // //                   {/* IMAGE */}
// // // //                   <img
// // // //                     src={image.url}
// // // //                     alt={image.alt}
// // // //                     loading={index === 0 ? "eager" : "lazy"}
// // // //                     className="absolute inset-0 w-full h-full object-cover scale-[1.06]"
// // // //                   />

// // // //                   {/* PREMIUM INVISIBLE BLEND */}
// // // //                   <div className="absolute inset-y-0 -left-[4%] z-10 w-[28%] pointer-events-none">

// // // //                     {/* MAIN CINEMATIC FADE */}
// // // //                     <div
// // // //                       className="
// // // //                         absolute inset-0
// // // //                         bg-gradient-to-r
// // // //                         from-[#f8f5ef]
// // // //                         via-[#f8f5ef]
// // // //                         via-[#f8f5ef]
// // // //                         via-[#f8f5ef]/98
// // // //                         via-[#f8f5ef]/95
// // // //                         via-[#f8f5ef]/88
// // // //                         via-[#f8f5ef]/72
// // // //                         via-[#f8f5ef]/48
// // // //                         via-[#f8f5ef]/20
// // // //                         to-transparent
// // // //                       "
// // // //                     />

// // // //                     {/* CREAMY GLOW */}
// // // //                     <div className="absolute inset-y-0 -left-[60px] w-[220px] bg-[#f8f5ef] blur-[90px] opacity-100" />

// // // //                   </div>

// // // //                   {/* DARK CINEMATIC OVERLAY */}
// // // //                   <div className="absolute inset-0 bg-black/[0.06]" />

// // // //                 </div>

// // // //               </div>

// // // //               {/* ───────────────── MOBILE / TABLET ───────────────── */}
// // // //               <div className="flex flex-col lg:hidden">

// // // //                 {/* TEXT */}
// // // //                 <div className="bg-[#f8f5ef] px-5 sm:px-8 py-10">
// // // //                   <LeftContent />
// // // //                 </div>

// // // //                 {/* IMAGE */}
// // // //                 <div className="relative">

// // // //                   <img
// // // //                     src={image.url}
// // // //                     alt={image.alt}
// // // //                     loading={index === 0 ? "eager" : "lazy"}
// // // //                     className="w-full object-cover"
// // // //                     style={{
// // // //                       height: "62vw",
// // // //                       minHeight: "260px",
// // // //                       maxHeight: "480px",
// // // //                     }}
// // // //                   />

// // // //                   <div className="absolute inset-0 bg-black/10" />

// // // //                 </div>

// // // //                 {/* MOBILE STATS */}
// // // //                 <div className="relative z-20 -mt-[10%] px-3 pb-4">
// // // //                   {/* <StatsCard /> */}
// // // //                 </div>

// // // //               </div>

// // // //               {/* DESKTOP FLOATING STATS */}
// // // //               <div
// // // //                 className="
// // // //                   hidden lg:block
// // // //                   absolute bottom-2 lg:bottom-2 xl:bottom-6 right-6
// // // //                   w-[600px] xl:w-[900px] 2xl:w-[1000px]
// // // //                   z-30
// // // //                 "
// // // //               >
// // // //                 {/* <StatsCard /> */}
// // // //               </div>

// // // //             </div>

// // // //           </SwiperSlide>
// // // //         ))}

// // // //       </Swiper>

// // // //     </section>
// // // //   );
// // // // }

// // // // /* ─────────────────────────────────────────────
// // // //     LEFT CONTENT
// // // // ───────────────────────────────────────────── */

// // // // function LeftContent() {
// // // //   return (
// // // //     <>

// // // //       {/* BADGE */}
// // // //       <div className="flex items-center gap-2 text-[#b86b2b] text-[10px] lg:text-[10px] xl:text-xs 2xl:text-sm font-semibold tracking-wide">

// // // //         <Award size={12} />

// // // //         A JOURNEY THAT TRANSFORMS YOU

// // // //       </div>

// // // //       {/* HEADING (Montserrat Font) */}
// // // //       <h1
// // // //         className="
// // // //           mt-3
// // // //           font-['Montserrat']
// // // //           text-[2.5rem] sm:text-[3rem] md:text-[3.6rem]
// // // //           lg:text-[2.3rem] xl:text-[2.8rem] 2xl:text-[3.4rem]
// // // //           leading-[1.05] font-bold text-[#1f3528]
// // // //         "
// // // //       >
// // // //         Become a

// // // //         <span className="block">
// // // //           Certified Yoga
// // // //         </span>

// // // //         <span className="block">
// // // //           Teacher in{" "}

// // // //           <span className="text-[#c9732c]">
// // // //             Bali
// // // //           </span>

// // // //         </span>
// // // //       </h1>

// // // //       {/* SUBTITLE (Playfair Display Italic Font) */}
// // // //       <p
// // // //         className="
// // // //           mt-2 text-gray-600 leading-relaxed
// // // //           font-['Playfair_Display'] italic
// // // //           text-[16px] sm:text-[18px]
// // // //           lg:text-[15px] xl:text-[17px] 2xl:text-[19px]
// // // //         "
// // // //       >
// // // //         Transform Your Life. Inspire The World.
// // // //       </p>

// // // //       {/* FEATURES */}
// // // //       <div className="mt-7 grid grid-cols-2 gap-4 lg:gap-4">

// // // //         {[
// // // //           { title: "21-Day Training", icon: "🧘" },
// // // //           { title: "Yoga Alliance Certified", icon: "🏆" },
// // // //           { title: "Luxury Stay In Nature", icon: "🌿" },
// // // //           { title: "Satvic Food & Excursions", icon: "🍃" },
// // // //         ].map((item, i) => (

// // // //           <div key={i} className="flex items-center gap-2">

// // // //             <div
// // // //               className="
// // // //                 rounded-xl bg-[#f1ebe2]
// // // //                 flex items-center justify-center
// // // //                 flex-shrink-0
// // // //                 w-9 h-9 text-base
// // // //                 lg:w-8 lg:h-8 lg:text-sm
// // // //                 xl:w-9 xl:h-9 xl:text-base
// // // //               "
// // // //             >
// // // //               {item.icon}
// // // //             </div>

// // // //             <div
// // // //               className="
// // // //                 text-[#1f3528]
// // // //                 font-medium
// // // //                 leading-snug
// // // //                 text-sm
// // // //                 lg:text-[12px]
// // // //                 xl:text-[13px]
// // // //                 2xl:text-sm
// // // //               "
// // // //             >
// // // //               {item.title}
// // // //             </div>

// // // //           </div>

// // // //         ))}

// // // //       </div>

// // // //       {/* BUTTONS */}
// // // //       <div className="mt-6 flex flex-col sm:flex-row gap-3">

// // // //         {/* APPLY NOW */}
// // // //         <Link
// // // //           to="/contact"
// // // //           className="
// // // //             group
// // // //             bg-gradient-to-r from-[#2f5134] to-[#466a49]
// // // //             hover:from-[#26472b] hover:to-[#39593d]
// // // //             text-white
// // // //             px-5 lg:px-4 xl:px-5
// // // //             py-3 lg:py-2 xl:py-3
// // // //             rounded-2xl
// // // //             text-base lg:text-[12px] xl:text-sm 2xl:text-base
// // // //             font-semibold
// // // //             shadow-lg
// // // //             transition-all duration-300
// // // //             flex items-center justify-center gap-2
// // // //           "
// // // //         >

// // // //           APPLY NOW

// // // //           <ArrowRight
// // // //             size={15}
// // // //             className="group-hover:translate-x-1 transition"
// // // //           />

// // // //         </Link>

// // // //         {/* BROCHURE */}
// // // //         <a
// // // //           href="/brochure.pdf"
// // // //           className="
// // // //             border-2 border-[#d8b18b]
// // // //             text-[#c9732c]
// // // //             hover:bg-[#c9732c]
// // // //             hover:text-white
// // // //             px-5 lg:px-3 xl:px-5
// // // //             py-3 lg:py-2 xl:py-3
// // // //             rounded-2xl
// // // //             text-base lg:text-[12px] xl:text-sm 2xl:text-base
// // // //             font-semibold
// // // //             transition-all duration-300
// // // //             flex items-center justify-center gap-2
// // // //           "
// // // //         >

// // // //           <Download size={15} />

// // // //           DOWNLOAD BROCHURE

// // // //         </a>

// // // //       </div>

// // // //     </>
// // // //   );
// // // // }

// // // // export default HeroSection;

// // // import React, { useEffect } from "react";
// // // import { Swiper, SwiperSlide } from "swiper/react";
// // // import {
// // //   Autoplay,
// // //   Navigation,
// // //   EffectFade,
// // // } from "swiper/modules";

// // // import { Link } from "react-router-dom";

// // // import {
// // //   Download,
// // //   ArrowRight,
// // //   Award,
// // //   Calendar,
// // //   Home,
// // //   Utensils,
// // // } from "lucide-react";

// // // // Swiper CSS
// // // import "swiper/css";
// // // import "swiper/css/navigation";
// // // import "swiper/css/effect-fade";

// // // // Images
// // // import yoga0 from "../pages/home/images/yoga10.png";
// // // import yoga1 from "../pages/home/images/yoga1.jpg";
// // // import yoga from "../pages/home/images/yoga.jpg";

// // // function HeroSection() {
// // //   // Dynamically inject Google Fonts for both Montserrat (Heading) and Playfair Display (Subtitle)
// // //   useEffect(() => {
// // //     const fontId = "google-fonts-hero";
// // //     if (!document.getElementById(fontId)) {
// // //       const link = document.createElement("link");
// // //       link.id = fontId;
// // //       link.rel = "stylesheet";
// // //       link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Playfair+Display:ital,wght@1,400&display=swap";
// // //       document.head.appendChild(link);
// // //     }
// // //   }, []);

// // //   const heroImages = [
// // //     { url: yoga0, alt: "Yoga Training Bali" },
// // //     { url: yoga1, alt: "Yoga Retreat Bali" },
// // //     { url: yoga, alt: "Yoga Meditation Bali" },
// // //   ];

// // //   return (
// // //     <section className="relative w-full overflow-hidden bg-[#f8f5ef]">

// // //       <Swiper
// // //         modules={[Autoplay, Navigation, EffectFade]}
// // //         effect="fade"
// // //         fadeEffect={{ crossFade: true }}
// // //         speed={1200}
// // //         autoplay={{
// // //           delay: 4500,
// // //           disableOnInteraction: false,
// // //         }}
// // //         navigation={true}
// // //         loop={true}
// // //         className="
// // //           w-full h-auto
// // //           [--swiper-navigation-color:#b86b2b]

// // //           [&_.swiper-button-next]:!hidden
// // //           lg:[&_.swiper-button-next]:!flex
// // //           [&_.swiper-button-next]:right-8
// // //           [&_.swiper-button-next]:w-14
// // //           [&_.swiper-button-next]:h-14
// // //           [&_.swiper-button-next]:rounded-full
// // //           [&_.swiper-button-next]:bg-white/90
// // //           [&_.swiper-button-next]:shadow-xl
// // //           [&_.swiper-button-next]:after:text-[18px]
// // //           [&_.swiper-button-next]:after:font-bold

// // //           [&_.swiper-button-prev]:!hidden
// // //           lg:[&_.swiper-button-prev]:!flex
// // //           [&_.swiper-button-prev]:left-8
// // //           [&_.swiper-button-prev]:w-14
// // //           [&_.swiper-button-prev]:h-14
// // //           [&_.swiper-button-prev]:rounded-full
// // //           [&_.swiper-button-prev]:bg-white/90
// // //           [&_.swiper-button-prev]:shadow-xl
// // //           [&_.swiper-button-prev]:after:text-[18px]
// // //           [&_.swiper-button-prev]:after:font-bold
// // //         "
// // //       >

// // //         {heroImages.map((image, index) => (
// // //           <SwiperSlide key={index}>

// // //             <div className="relative w-full bg-[#f8f5ef] flex flex-col lg:block">

// // //               {/* ───────────────── DESKTOP HERO ───────────────── */}
// // //               <div
// // //                 className="hidden lg:flex lg:flex-row"
// // //                 style={{ height: "clamp(500px, 48vw, 780px)" }}
// // //               >

// // //                 {/* LEFT CONTENT */}
// // //                 <div
// // //                   className="
// // //                     relative z-20 bg-[#f8f5ef]
// // //                     flex-shrink-0
// // //                     flex flex-col justify-center
// // //                     pl-10 xl:pl-15 2xl:pl-20
// // //                     py-10
// // //                     w-[30%] xl:w-[28%] 2xl:w-[26%]
// // //                   "
// // //                 >
// // //                   <LeftContent />
// // //                 </div>

// // //                 {/* RIGHT IMAGE */}
// // //                 <div className="relative flex-1 overflow-hidden">

// // //                   {/* IMAGE */}
// // //                   <img
// // //                     src={image.url}
// // //                     alt={image.alt}
// // //                     loading={index === 0 ? "eager" : "lazy"}
// // //                     className="absolute inset-0 w-full h-full object-cover scale-[1.06]"
// // //                   />

// // //                   {/* PREMIUM INVISIBLE BLEND */}
// // //                   <div className="absolute inset-y-0 -left-[4%] z-10 w-[28%] pointer-events-none">

// // //                     {/* MAIN CINEMATIC FADE */}
// // //                     <div
// // //                       className="
// // //                         absolute inset-0
// // //                         bg-gradient-to-r
// // //                         from-[#f8f5ef]
// // //                         via-[#f8f5ef]
// // //                         via-[#f8f5ef]
// // //                         via-[#f8f5ef]/98
// // //                         via-[#f8f5ef]/95
// // //                         via-[#f8f5ef]/88
// // //                         via-[#f8f5ef]/72
// // //                         via-[#f8f5ef]/48
// // //                         via-[#f8f5ef]/20
// // //                         to-transparent
// // //                       "
// // //                     />

// // //                     {/* CREAMY GLOW */}
// // //                     <div className="absolute inset-y-0 -left-[60px] w-[220px] bg-[#f8f5ef] blur-[90px] opacity-100" />

// // //                   </div>

// // //                   {/* DARK CINEMATIC OVERLAY */}
// // //                   <div className="absolute inset-0 bg-black/[0.06]" />

// // //                 </div>

// // //               </div>

// // //               {/* ───────────────── MOBILE / TABLET ───────────────── */}
// // //               <div className="flex flex-col lg:hidden">

// // //                 {/* TEXT */}
// // //                 <div className="bg-[#f8f5ef] px-5 sm:px-8 py-10">
// // //                   <LeftContent />
// // //                 </div>

// // //                 {/* IMAGE */}
// // //                 <div className="relative">

// // //                   <img
// // //                     src={image.url}
// // //                     alt={image.alt}
// // //                     loading={index === 0 ? "eager" : "lazy"}
// // //                     className="w-full object-cover"
// // //                     style={{
// // //                       height: "62vw",
// // //                       minHeight: "260px",
// // //                       maxHeight: "480px",
// // //                     }}
// // //                   />

// // //                   <div className="absolute inset-0 bg-black/10" />

// // //                 </div>

// // //                 {/* MOBILE STATS */}
// // //                 <div className="relative z-20 -mt-[10%] px-3 pb-4">
// // //                   {/* <StatsCard /> */}
// // //                 </div>

// // //               </div>

// // //               {/* DESKTOP FLOATING STATS */}
// // //               <div
// // //                 className="
// // //                   hidden lg:block
// // //                   absolute bottom-2 lg:bottom-2 xl:bottom-6 right-6
// // //                   w-[600px] xl:w-[900px] 2xl:w-[1000px]
// // //                   z-30
// // //                 "
// // //               >
// // //                 {/* <StatsCard /> */}
// // //               </div>

// // //             </div>

// // //           </SwiperSlide>
// // //         ))}

// // //       </Swiper>

// // //     </section>
// // //   );
// // // }

// // // /* ─────────────────────────────────────────────
// // //     LEFT CONTENT
// // // ───────────────────────────────────────────── */

// // // function LeftContent() {
// // //   return (
// // //     <>

// // //       {/* BADGE */}
// // //       <div className="flex items-center gap-2 text-[#b86b2b] text-[10px] lg:text-[10px] xl:text-xs 2xl:text-sm font-semibold tracking-wide">
// // //         <Award size={12} />
// // //         A JOURNEY THAT TRANSFORMS YOU
// // //       </div>

// // //       {/* HEADING */}
// // //       <h1
// // //         className="
// // //           mt-3
// // //           font-['Montserrat']
// // //           text-[2.3rem] sm:text-[2.8rem] md:text-[3.2rem]
// // //           lg:text-[2.1rem] xl:text-[2.3rem] 2xl:text-[3.2rem]
// // //           leading-[1.1] font-bold text-[#1f3528]
// // //         "
// // //       >
// // //         Become a
// // //         <span className="block">Certified Yoga</span>
// // //         <span className="block">
// // //           Teacher in{" "}
// // //           <span className="text-[#c9732c]">Bali</span>
// // //         </span>
// // //       </h1>

// // //       {/* SUBTITLE */}
// // //       <p
// // //         className="
// // //           mt-4 text-gray-600 leading-relaxed
// // //           font-['Playfair_Display'] italic
// // //           text-[16px] sm:text-[18px]
// // //           lg:text-[14px] xl:text-[16px] 2xl:text-[18px]
// // //         "
// // //       >
// // //         Transform Your Life. Inspire The World.
// // //       </p>

// // //       {/* FEATURES SECTION (Redesigned to perfectly match snapshot) */}
// // //       <div className="mt-2 flex flex-wrap items-center justify-start gap-x-6 gap-y-4 border-t border-gray-200/60 pt-5">

// // //         {[
// // //           { title: "21-Day Training", icon: <Calendar size={16} className="text-[#1f3528]" /> },
// // //           { title: "Yoga Alliance Certified", icon: <Award size={16} className="text-[#1f3528]" /> },
// // //           { title: "Luxury Stay In Nature", icon: <Home size={16} className="text-[#1f3528]" /> },
// // //           { title: "Sattvic Food & Excursions", icon: <Utensils size={16} className="text-[#1f3528]" /> },
// // //         ].map((item, i) => (
// // //           <React.Fragment key={i}>
// // //             <div className="flex items-center gap-2.5">
// // //               {/* Icon Container */}
// // //               <div className="w-8 h-8 rounded-full bg-transparent border border-gray-300/80 flex items-center justify-center flex-shrink-0 shadow-sm">
// // //                 {item.icon}
// // //               </div>

// // //               {/* Text Label */}
// // //               <div className="text-[#1f3528] text-xs lg:text-[11px] xl:text-[12px] 2xl:text-sm font-medium tracking-wide">
// // //                 {item.title}
// // //               </div>
// // //             </div>

// // //             {/* Vertical Separator lines between items (except after the last one) */}
// // //             {i < 3 && (
// // //               <div className="hidden sm:block h-4 w-px bg-gray-300/60 self-center" />
// // //             )}
// // //           </React.Fragment>
// // //         ))}

// // //       </div>

// // //       {/* BUTTONS */}
// // //       <div className="mt-8 flex flex-col sm:flex-row gap-3">

// // //         {/* APPLY NOW */}
// // //         <Link
// // //           to="/contact"
// // //           className="
// // //             group
// // //             bg-gradient-to-r from-[#2f5134] to-[#466a49]
// // //             hover:from-[#26472b] hover:to-[#39593d]
// // //             text-white
// // //             px-5 lg:px-4 xl:px-5
// // //             py-3 lg:py-2 xl:py-3
// // //             rounded-2xl
// // //             text-base lg:text-[12px] xl:text-sm 2xl:text-base
// // //             font-semibold
// // //             shadow-lg
// // //             transition-all duration-300
// // //             flex items-center justify-center gap-2
// // //           "
// // //         >
// // //           APPLY NOW
// // //           <ArrowRight
// // //             size={15}
// // //             className="group-hover:translate-x-1 transition"
// // //           />
// // //         </Link>

// // //         {/* BROCHURE */}
// // //         <a
// // //           href="/brochure.pdf"
// // //           className="
// // //             border-2 border-[#d8b18b]
// // //             text-[#c9732c]
// // //             hover:bg-[#c9732c]
// // //             hover:text-white
// // //             px-5 lg:px-3 xl:px-5
// // //             py-3 lg:py-2 xl:py-3
// // //             rounded-2xl
// // //             text-base lg:text-[12px] xl:text-sm 2xl:text-base
// // //             font-semibold
// // //             transition-all duration-300
// // //             flex items-center justify-center gap-2
// // //           "
// // //         >
// // //           <Download size={15} />
// // //           DOWNLOAD BROCHURE
// // //         </a>

// // //       </div>

// // //     </>
// // //   );
// // // }

// // // export default HeroSection;
// // import React, { useEffect } from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import {
// //   Autoplay,
// //   Navigation,
// //   EffectFade,
// // } from "swiper/modules";

// // import { Link } from "react-router-dom";

// // import {
// //   Download,
// //   ArrowRight,
// //   Award,
// //   Calendar,
// //   Home,
// //   Utensils,
// // } from "lucide-react";

// // // Swiper CSS
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/effect-fade";

// // // Images
// // import yoga0 from "../pages/home/images/yoga10.png";
// // import yoga1 from "../pages/home/images/yoga1.jpg";
// // import yoga from "../pages/home/images/yoga.jpg";

// // function HeroSection() {
// //   // Dynamically inject Google Fonts for both Montserrat (Heading) and Playfair Display (Subtitle)
// //   useEffect(() => {
// //     const fontId = "google-fonts-hero";
// //     if (!document.getElementById(fontId)) {
// //       const link = document.createElement("link");
// //       link.id = fontId;
// //       link.rel = "stylesheet";
// //       link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Playfair+Display:ital,wght@1,400&display=swap";
// //       document.head.appendChild(link);
// //     }
// //   }, []);

// //   const heroImages = [
// //     { url: yoga0, alt: "Yoga Training Bali" },
// //     { url: yoga1, alt: "Yoga Retreat Bali" },
// //     { url: yoga, alt: "Yoga Meditation Bali" },
// //   ];

// //   return (
// //     <section className="relative w-full overflow-hidden bg-[#f8f5ef]">
// //       <Swiper
// //         modules={[Autoplay, Navigation, EffectFade]}
// //         effect="fade"
// //         fadeEffect={{ crossFade: true }}
// //         speed={1200}
// //         autoplay={{
// //           delay: 4500,
// //           disableOnInteraction: false,
// //         }}
// //         navigation={true}
// //         loop={true}
// //         className="
// //           w-full h-auto
// //           [--swiper-navigation-color:#b86b2b]

// //           [&_.swiper-button-next]:!hidden
// //           lg:[&_.swiper-button-next]:!flex
// //           [&_.swiper-button-next]:right-8
// //           [&_.swiper-button-next]:w-14
// //           [&_.swiper-button-next]:h-14
// //           [&_.swiper-button-next]:rounded-full
// //           [&_.swiper-button-next]:bg-white/90
// //           [&_.swiper-button-next]:shadow-xl
// //           [&_.swiper-button-next]:after:text-[18px]
// //           [&_.swiper-button-next]:after:font-bold

// //           [&_.swiper-button-prev]:!hidden
// //           lg:[&_.swiper-button-prev]:!flex
// //           [&_.swiper-button-prev]:left-8
// //           [&_.swiper-button-prev]:w-14
// //           [&_.swiper-button-prev]:h-14
// //           [&_.swiper-button-prev]:rounded-full
// //           [&_.swiper-button-prev]:bg-white/90
// //           [&_.swiper-button-prev]:shadow-xl
// //           [&_.swiper-button-prev]:after:text-[18px]
// //           [&_.swiper-button-prev]:after:font-bold
// //         "
// //       >
// //         {heroImages.map((image, index) => (
// //           <SwiperSlide key={index}>
// //             <div className="relative w-full bg-[#f8f5ef] flex flex-col lg:block">

// //               {/* ───────────────── DESKTOP HERO ───────────────── */}
// //               <div
// //                 className="hidden lg:flex lg:flex-row"
// //                 style={{ height: "clamp(550px, 52vw, 820px)" }}
// //               >
// //                 {/* LEFT CONTENT CONTAINER */}
// //                 <div
// //                   className="
// //                     relative z-20 bg-[#f8f5ef]
// //                     flex-shrink-0
// //                     flex flex-col justify-center
// //                     pl-10 xl:pl-16 2xl:pl-24
// //                     py-10
// //                     w-[42%] xl:w-[38%] 2xl:w-[35%]
// //                   "
// //                 >
// //                   <LeftContent />
// //                 </div>

// //                 {/* RIGHT IMAGE */}
// //                 <div className="relative flex-1 overflow-hidden">
// //                   <img
// //                     src={image.url}
// //                     alt={image.alt}
// //                     loading={index === 0 ? "eager" : "lazy"}
// //                     className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
// //                   />

// //                   {/* PREMIUM INVISIBLE BLEND */}
// //                   <div className="absolute inset-y-0 -left-[2%] z-10 w-[30%] pointer-events-none">
// //                     <div
// //                       className="
// //                         absolute inset-0
// //                         bg-gradient-to-r
// //                         from-[#f8f5ef]
// //                         via-[#f8f5ef]/98
// //                         via-[#f8f5ef]/90
// //                         via-[#f8f5ef]/70
// //                         via-[#f8f5ef]/40
// //                         to-transparent
// //                       "
// //                     />
// //                     <div className="absolute inset-y-0 -left-[40px] w-[180px] bg-[#f8f5ef] blur-[60px] opacity-95" />
// //                   </div>

// //                   <div className="absolute inset-0 bg-black/[0.02]" />
// //                 </div>
// //               </div>

// //               {/* ───────────────── MOBILE / TABLET ───────────────── */}
// //               <div className="flex flex-col lg:hidden">
// //                 {/* TEXT */}
// //                 <div className="bg-[#f8f5ef] px-6 sm:px-12 py-12">
// //                   <LeftContent />
// //                 </div>

// //                 {/* IMAGE */}
// //                 <div className="relative">
// //                   <img
// //                     src={image.url}
// //                     alt={image.alt}
// //                     loading={index === 0 ? "eager" : "lazy"}
// //                     className="w-full object-cover"
// //                     style={{
// //                       height: "65vw",
// //                       minHeight: "280px",
// //                       maxHeight: "520px",
// //                     }}
// //                   />
// //                   <div className="absolute inset-0 bg-black/5" />
// //                 </div>
// //               </div>

// //             </div>
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>
// //     </section>
// //   );
// // }

// // /* ─────────────────────────────────────────────
// //     LEFT CONTENT COMPONENT
// // ───────────────────────────────────────────── */

// // function LeftContent() {
// //   return (
// //     <>
// //       {/* BADGE */}
// //       <div className="flex items-center gap-2 text-[#b86b2b] text-[11px] xl:text-xs 2xl:text-sm font-semibold tracking-wider uppercase">
// //         <Award size={14} className="stroke-[2.5]" />
// //         A Journey That Transforms You
// //       </div>

// //       {/* HEADING */}
// //       <h1
// //         className="
// //           mt-4
// //           font-['Montserrat']
// //           text-[2.2rem] sm:text-[2.8rem]
// //           lg:text-[2.0rem] xl:text-[2.5rem] 2xl:text-[3.0rem]
// //           leading-[1.15] font-bold text-[#1f3528]
// //           tracking-tight
// //         "
// //       >
// //         Become a <br />
// //         <span className="font-bold">Certified Yoga</span> <br />
// //         Teacher in{" "}
// //         <span className="text-[#b86b2b] font-bold">Bali</span>
// //       </h1>

// //       {/* SUBTITLE */}
// //       <p
// //         className="
// //           mt-3 text-gray-600 font-medium
// //           font-['Playfair_Display'] italic
// //           text-[16px] sm:text-[18px]
// //           lg:text-[14px] xl:text-[16px] 2xl:text-[18px]
// //         "
// //       >
// //         Transform Your Life. Inspire the World.
// //       </p>

// //      {/* HORIZONTAL FEATURES (STRAIGHT LINE - SNAPSHOT DESIGN) */}
// //         <div className="mt-4 flex flex-row flex-wrap lg:flex-nowrap items-center justify-start gap-y-4 gap-x-4 border-t border-gray-200/80 pt-5">
// //           {[
// //             { title: <>21-Day <br /> Training</>, icon: Calendar },
// //             { title: <>Yoga Alliance <br /> Certified</>, icon: Award },
// //             { title: <>Luxury Stay <br /> In Nature</>, icon: Home },
// //             { title: <>Sattvic Food <br /> & Excursions</>, icon: Utensils },
// //           ].map((item, i) => {
// //             const IconComponent = item.icon;
// //             return (
// //               <React.Fragment key={i}>
// //                 {/* Changed items-start to items-center to horizontally align icon and text */}
// //                 <div className="flex flex-col items-center text-center gap-1.5 flex-shrink-0 min-w-[85px]">
// //                   {/* Logo / Icon on top */}
// //                   <div
// //                     className="
// //                       rounded-full border border-gray-300 bg-white
// //                       flex items-center justify-center flex-shrink-0
// //                       w-8 h-8 text-[#1f3528] shadow-sm
// //                     "
// //                   >
// //                     <IconComponent size={14} className="stroke-[1.75]" />
// //                   </div>

// //                   {/* Label text directly below icon */}
// //                   <div
// //                     className="
// //                       text-[#1f3528]
// //                       font-semibold
// //                       text-[11px]
// //                       xl:text-[11px]
// //                       2xl:text-[12px]
// //                       tracking-wide
// //                       leading-tight
// //                     "
// //                   >
// //                     {item.title}
// //                   </div>
// //                 </div>

// //                 {/* Middle line separator dividers between items */}
// //                 {i < 3 && (
// //                   <div className="hidden lg:block h-7 w-px bg-gray-300/70 mx-1 xl:mx-2 self-center flex-shrink-0" />
// //                 )}
// //               </React.Fragment>
// //             );
// //           })}
// //         </div>

// //       {/* BUTTONS */}
// //       <div className="mt-8 flex flex-col sm:flex-row gap-4">
// //         {/* APPLY NOW */}
// //         <Link
// //           to="/contact"
// //           className="
// //             group
// //             bg-[#26402e] hover:bg-[#182b1f]
// //             text-white
// //             px-6 lg:px-4 xl:px-6
// //             py-3.5 lg:py-2.5 xl:py-3.5
// //             rounded-xl
// //             text-sm lg:text-[11px] xl:text-sm 2xl:text-base
// //             font-bold tracking-wide
// //             shadow-md transition-all duration-300
// //             flex items-center justify-center gap-2
// //           "
// //         >
// //           APPLY NOW
// //           <ArrowRight
// //             size={16}
// //             className="group-hover:translate-x-1 transition stroke-[2.5]"
// //           />
// //         </Link>

// //         {/* DOWNLOAD BROCHURE */}
// //         <a
// //           href="/brochure.pdf"
// //           className="
// //             border border-[#b86b2b]
// //             text-[#b86b2b] bg-transparent
// //             hover:bg-[#b86b2b] hover:text-white
// //             px-6 lg:px-4 xl:px-6
// //             py-3.5 lg:py-2.5 xl:py-3.5
// //             rounded-xl
// //             text-sm lg:text-[11px] xl:text-sm 2xl:text-base
// //             font-bold tracking-wide
// //             transition-all duration-300
// //             flex items-center justify-center gap-2
// //           "
// //         >
// //           DOWNLOAD BROCHURE
// //         </a>
// //       </div>
// //     </>
// //   );
// // }

// // export default HeroSection;

// import React, { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Autoplay,
//   Navigation,
//   EffectFade,
// } from "swiper/modules";

// import { Link } from "react-router-dom";

// import {
//   Download,
//   ArrowRight,
//   Award,
//   Calendar,
//   Home,
//   Utensils,
// } from "lucide-react";

// // Swiper CSS
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";

// // Images
// import yoga0 from "../pages/home/images/yoga10.png";
// import yoga1 from "../pages/home/images/yoga1.jpg";
// import yoga from "../pages/home/images/yoga.jpg";

// function HeroSection() {
//   // Dynamically inject Google Fonts for both Montserrat (Heading) and Playfair Display (Subtitle)
//   useEffect(() => {
//     const fontId = "google-fonts-hero";
//     if (!document.getElementById(fontId)) {
//       const link = document.createElement("link");
//       link.id = fontId;
//       link.rel = "stylesheet";
//       link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Playfair+Display:ital,wght@1,400&display=swap";
//       document.head.appendChild(link);
//     }
//   }, []);

//   const heroImages = [
//     { url: yoga0, alt: "Yoga Training Bali" },
//     { url: yoga1, alt: "Yoga Retreat Bali" },
//     { url: yoga, alt: "Yoga Meditation Bali" },
//   ];

//   return (
//     // Changed: Removed any potential margins/paddings to lock it flush to headers or sections
//     <section className="relative w-full overflow-hidden bg-[#f8f5ef] p-0 m-0">
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
//           w-full h-full
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
//             <div className="relative w-full bg-[#f8f5ef] flex flex-col lg:block">

//               {/* ───────────────── DESKTOP HERO ───────────────── */}
//               {/* Changed: Replaced dynamic static height clamp with crisp screen proportion locks */}
//               <div className="hidden lg:flex lg:flex-row h-[75vh] min-h-[500px] max-h-[720px]">
                
//                 {/* LEFT CONTENT CONTAINER */}
//                 {/* Changed: Adjusted layout width profile and removed py-10 vertical spacing blocks */}
//                 <div
//                   className="
//                     relative z-20 bg-[#f8f5ef]
//                     flex-shrink-0
//                     flex flex-col justify-center
//                     pl-10 xl:pl-16 2xl:pl-24
//                     w-[46%] xl:w-[42%] 2xl:w-[38%]
//                   "
//                 >
//                   <LeftContent />
//                 </div>

//                 {/* RIGHT IMAGE */}
//                 <div className="relative flex-1 overflow-hidden h-full">
//                   <img
//                     src={image.url}
//                     alt={image.alt}
//                     loading={index === 0 ? "eager" : "lazy"}
//                     className="absolute inset-0 w-full h-full object-cover scale-[1.01]"
//                   />

//                   {/* PREMIUM INVISIBLE BLEND */}
//                   <div className="absolute inset-y-0 -left-[2%] z-10 w-[30%] pointer-events-none">
//                     <div
//                       className="
//                         absolute inset-0
//                         bg-gradient-to-r
//                         from-[#f8f5ef]
//                         via-[#f8f5ef]/98
//                         via-[#f8f5ef]/90
//                         via-[#f8f5ef]/70
//                         via-[#f8f5ef]/40
//                         to-transparent
//                       "
//                     />
//                     <div className="absolute inset-y-0 -left-[40px] w-[180px] bg-[#f8f5ef] blur-[60px] opacity-95" />
//                   </div>

//                   <div className="absolute inset-0 bg-black/[0.02]" />
//                 </div>
//               </div>

//               {/* ───────────────── MOBILE / TABLET ───────────────── */}
//               <div className="flex flex-col lg:hidden">
//                 {/* TEXT */}
//                 {/* Changed: Reduced mobile layout padding density to save vertical real estate */}
//                 <div className="bg-[#f8f5ef] px-6 sm:px-12 pt-8 pb-6">
//                   <LeftContent />
//                 </div>

//                 {/* IMAGE */}
//                 <div className="relative w-full overflow-hidden">
//                   <img
//                     src={image.url}
//                     alt={image.alt}
//                     loading={index === 0 ? "eager" : "lazy"}
//                     className="w-full object-cover vertical-align-middle"
//                     style={{
//                       height: "45vw",
//                       minHeight: "240px",
//                       maxHeight: "400px",
//                     }}
//                   />
//                   <div className="absolute inset-0 bg-black/5" />
//                 </div>
//               </div>

//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }

// /* ─────────────────────────────────────────────
//     LEFT CONTENT COMPONENT
// ───────────────────────────────────────────── */

// function LeftContent() {
//   return (
//     <>
//       {/* BADGE */}
//       <div className="flex items-center gap-2 text-[#b86b2b] text-[11px] xl:text-xs 2xl:text-sm font-semibold tracking-wider uppercase">
//         <Award size={14} className="stroke-[2.5]" />
//         A Journey That Transforms You
//       </div>

//       {/* HEADING */}
//       <h1
//         className="
//           mt-3
//           font-['Montserrat']
//           text-[2.0rem] sm:text-[2.6rem]
//           lg:text-[1.8rem] xl:text-[2.2rem] 2xl:text-[2.7rem]
//           leading-[1.15] font-bold text-[#1f3528]
//           tracking-tight
//         "
//       >
//         Become a <br />
//         <span className="font-bold">Certified Yoga</span> <br />
//         Teacher in{" "}
//         <span className="text-[#b86b2b] font-bold">Bali</span>
//       </h1>

//       {/* SUBTITLE */}
//       <p
//         className="
//           mt-2 text-gray-600 font-medium
//           font-['Playfair_Display'] italic
//           text-[15px] sm:text-[17px]
//           lg:text-[13px] xl:text-[15px] 2xl:text-[17px]
//         "
//       >
//         Transform Your Life. Inspire the World.
//       </p>

//       {/* HORIZONTAL FEATURES (STRAIGHT LINE - SNAPSHOT DESIGN) */}
//       <div className="mt-4 flex flex-row flex-wrap lg:flex-nowrap items-center justify-start gap-y-3 gap-x-3 border-t border-gray-200/80 pt-4">
//         {[
//           { title: <>21-Day <br /> Training</>, icon: Calendar },
//           { title: <>Yoga Alliance <br /> Certified</>, icon: Award },
//           { title: <>Luxury Stay <br /> In Nature</>, icon: Home },
//           { title: <>Sattvic Food <br /> & Excursions</>, icon: Utensils },
//         ].map((item, i) => {
//           const IconComponent = item.icon;
//           return (
//             <React.Fragment key={i}>
//               <div className="flex flex-col items-center text-center gap-1 flex-shrink-0 min-w-[80px]">
//                 {/* Logo / Icon on top */}
//                 <div
//                   className="
//                     rounded-full border border-gray-300 bg-white
//                     flex items-center justify-center flex-shrink-0
//                     w-8 h-8 text-[#1f3528] shadow-sm
//                   "
//                 >
//                   <IconComponent size={14} className="stroke-[1.75]" />
//                 </div>

//                 {/* Label text directly below icon */}
//                 <div
//                   className="
//                     text-[#1f3528]
//                     font-semibold
//                     text-[10px]
//                     xl:text-[10px]
//                     2xl:text-[11px]
//                     tracking-wide
//                     leading-tight
//                   "
//                 >
//                   {item.title}
//                 </div>
//               </div>

//               {/* Middle line separator dividers between items */}
//               {i < 3 && (
//                 <div className="hidden lg:block h-6 w-px bg-gray-300/70 mx-0.5 xl:mx-1 self-center flex-shrink-0" />
//               )}
//             </React.Fragment>
//           );
//         })}
//       </div>

//       {/* BUTTONS */}
//       <div className="mt-5 flex flex-col sm:flex-row gap-3">
//         {/* APPLY NOW */}
//         <Link
//           to="/contact"
//           className="
//             group
//             bg-[#26402e] hover:bg-[#182b1f]
//             text-white
//             px-5 lg:px-4 xl:px-5
//             py-3 lg:py-2.5 xl:py-3
//             rounded-xl
//             text-xs lg:text-[11px] xl:text-xs 2xl:text-sm
//             font-bold tracking-wide
//             shadow-md transition-all duration-300
//             flex items-center justify-center gap-2
//           "
//         >
//           APPLY NOW
//           <ArrowRight
//             size={15}
//             className="group-hover:translate-x-1 transition stroke-[2.5]"
//           />
//         </Link>

//         {/* DOWNLOAD BROCHURE */}
//         <a
//           href="/brochure.pdf"
//           className="
//             border border-[#b86b2b]
//             text-[#b86b2b] bg-transparent
//             hover:bg-[#b86b2b] hover:text-white
//             px-5 lg:px-4 xl:px-5
//             py-3 lg:py-2.5 xl:py-3
//             rounded-xl
//             text-xs lg:text-[11px] xl:text-xs 2xl:text-sm
//             font-bold tracking-wide
//             transition-all duration-300
//             flex items-center justify-center gap-2
//           "
//         >
//           DOWNLOAD BROCHURE
//         </a>
//       </div>
//     </>
//   );
// }

// export default HeroSection;

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
import yoga0 from "../pages/home/images/yoga10.png";
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
    { url: yoga0, alt: "Yoga Training Bali" },
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