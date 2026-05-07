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
import yoga0 from "../pages/home/images/yoga0.jpg";
import yoga1 from "../pages/home/images/yoga1.jpg";
import yoga from "../pages/home/images/yoga.jpg";

function HeroSection() {
  const heroImages = [
    {
      url: yoga0,
      alt: "Yoga Training Bali",
    },
    {
      url: yoga1,
      alt: "Yoga Retreat Bali",
    },
    {
      url: yoga,
      alt: "Yoga Meditation Bali",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#f8f5ef] pb-16 md:pb-20 lg:pb-0">
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
          w-full
          h-auto

          [--swiper-navigation-color:#b86b2b]

          [&_.swiper-button-next]:hidden
          lg:[&_.swiper-button-next]:flex
          [&_.swiper-button-next]:right-4
          xl:[&_.swiper-button-next]:right-8
          [&_.swiper-button-next]:top-[45%]
          [&_.swiper-button-next]:w-12
          [&_.swiper-button-next]:h-12
          [&_.swiper-button-next]:rounded-full
          [&_.swiper-button-next]:bg-white/90
          [&_.swiper-button-next]:shadow-xl
          [&_.swiper-button-next]:after:text-[16px]
          [&_.swiper-button-next]:after:font-bold

          [&_.swiper-button-prev]:hidden
          lg:[&_.swiper-button-prev]:flex
          [&_.swiper-button-prev]:left-4
          xl:[&_.swiper-button-prev]:left-8
          [&_.swiper-button-prev]:top-[45%]
          [&_.swiper-button-prev]:w-12
          [&_.swiper-button-prev]:h-12
          [&_.swiper-button-prev]:rounded-full
          [&_.swiper-button-prev]:bg-white/90
          [&_.swiper-button-prev]:shadow-xl
          [&_.swiper-button-prev]:after:text-[16px]
          [&_.swiper-button-prev]:after:font-bold
        "
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="
                relative
                w-full
                min-h-[760px]
                md:min-h-[820px]
                lg:min-h-[760px]
                xl:min-h-[860px]
                bg-[#f8f5ef]
              "
            >
              {/* MAIN HERO */}
              <div
                className="
                  grid
                  grid-cols-1
                  lg:grid-cols-[44%_56%]
                  items-center

                  min-h-[760px]
                  md:min-h-[820px]
                  lg:min-h-[760px]
                  xl:min-h-[860px]
                "
              >
                {/* LEFT CONTENT */}
                <div
                  className="
                    relative
                    z-20
                    h-full
                    flex
                    flex-col
                    justify-center

                    bg-gradient-to-r
                    from-[#fffdf9]
                    via-[#fffdf9f2]
                    to-[#fffdf900]

                    px-5
                    sm:px-8
                    md:px-10
                    lg:px-12
                    xl:px-16

                    py-10
                    md:py-12
                    lg:py-8
                  "
                >
                  {/* TOP TEXT */}
                  <div className="flex items-center gap-2 text-[#b86b2b] text-xs sm:text-sm font-semibold tracking-[2px] uppercase">
                    <Award size={15} />
                    A Journey That Transforms You
                  </div>

                  {/* HEADING */}
                  <h1
                    className="
                      mt-4
                      text-[2.5rem]
                      sm:text-[3.2rem]
                      md:text-[4rem]
                      lg:text-[4.3rem]
                      xl:text-[5rem]
                      leading-[1.05]
                      tracking-[-1px]
                      font-bold
                      text-[#1f3528]
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
                      mt-4
                      text-[15px]
                      sm:text-[17px]
                      lg:text-[18px]
                      xl:text-[20px]
                      italic
                      text-gray-600
                      leading-relaxed
                      max-w-[620px]
                    "
                  >
                    Transform Your Life. Inspire The
                    World.
                  </p>

                  {/* FEATURES */}
                  <div className="mt-7 grid grid-cols-2 gap-4 max-w-[620px]">
                    {[
                      {
                        title: "21-Day Training",
                        icon: "🧘",
                      },
                      {
                        title:
                          "Yoga Alliance Certified",
                        icon: "🏆",
                      },
                      {
                        title: "Luxury Stay In Nature",
                        icon: "🌿",
                      },
                      {
                        title:
                          "Satvic Food & Excursions",
                        icon: "🍃",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#f1ebe2] flex items-center justify-center text-lg shrink-0">
                          {item.icon}
                        </div>

                        <div className="text-[#1f3528] text-sm sm:text-base font-medium leading-snug">
                          {item.title}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="mt-7 flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/contact"
                      className="
                        group
                        bg-gradient-to-r
                        from-[#2f5134]
                        to-[#466a49]
                        hover:from-[#26472b]
                        hover:to-[#39593d]

                        text-white
                        px-6
                        py-3.5
                        rounded-xl
                        text-base
                        font-semibold

                        shadow-lg
                        transition-all
                        duration-300

                        flex
                        items-center
                        justify-center
                        gap-2
                      "
                    >
                      APPLY NOW

                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition"
                      />
                    </Link>

                    <a
                      href="/brochure.pdf"
                      className="
                        border-2
                        border-[#d8b18b]
                        text-[#c9732c]

                        hover:bg-[#c9732c]
                        hover:text-white

                        px-6
                        py-3.5
                        rounded-xl
                        text-base
                        font-semibold

                        transition-all
                        duration-300

                        flex
                        items-center
                        justify-center
                        gap-2
                      "
                    >
                      <Download size={18} />
                      DOWNLOAD BROCHURE
                    </a>
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative h-full min-h-[360px] md:min-h-[500px] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />

                  {/* OVERLAYS */}
                  <>
                    <div className="absolute inset-0 bg-black/10"></div>

                    <div
                      className="
                        absolute
                        inset-y-0
                        left-0
                        w-40
                        hidden
                        lg:block
                        bg-gradient-to-r
                        from-[#fffdf9]
                        to-transparent
                      "
                    ></div>
                  </>
                </div>
              </div>

              {/* FLOATING STATS CARD */}
              <div
                className="
                  absolute
                  bottom-[1.5px]
                  left-4
                  right-4

                  md:bottom-[-40px]

                  lg:bottom-6
                  lg:left-auto
                  lg:right-8
                  lg:w-[680px]

                  z-30
                "
              >
                <div
                  className="
                    bg-white/95
                    backdrop-blur-xl

                    rounded-[20px]

                    shadow-[0_10px_40px_rgba(0,0,0,0.12)]

                    px-4
                    py-4

                    md:px-5
                    md:py-5
                  "
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* RATING */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#fff3e8] flex items-center justify-center shrink-0">
                        <Star
                          className="text-[#c9732c]"
                          size={24}
                        />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-[#1f3528]">
                          4.9/5
                        </h3>

                        <p className="text-gray-600 text-sm">
                          Student Rating
                        </p>
                      </div>
                    </div>

                    {/* STUDENTS */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#eef7ee] flex items-center justify-center shrink-0">
                        <Users
                          className="text-[#2f7d4c]"
                          size={24}
                        />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-[#1f3528]">
                          1000+
                        </h3>

                        <p className="text-gray-600 text-sm">
                          Happy Students
                        </p>
                      </div>
                    </div>

                    {/* COUNTRIES */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#fff3e8] flex items-center justify-center shrink-0">
                        <Globe
                          className="text-[#c9732c]"
                          size={24}
                        />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-[#1f3528]">
                          15+
                        </h3>

                        <p className="text-gray-600 text-sm">
                          Countries
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* MOBILE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:hidden"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
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
//   Leaf,
// } from "lucide-react";

// // Swiper CSS
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";

// // Images
// import yoga0 from "../pages/home/images/yoga0.jpg";
// import yoga1 from "../pages/home/images/yoga1.jpg";
// import yoga from "../pages/home/images/yoga.jpg";

// function HeroSection() {
//   const heroImages = [
//     {
//       url: yoga0,
//       alt: "Yoga Training Bali",
//     },
//     {
//       url: yoga1,
//       alt: "Yoga Retreat Bali",
//     },
//     {
//       url: yoga,
//       alt: "Yoga Meditation Bali",
//     },
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
//           w-full
//           h-auto

//           [--swiper-navigation-color:#b86b2b]

//           [&_.swiper-button-next]:hidden
//           lg:[&_.swiper-button-next]:flex
//           [&_.swiper-button-next]:right-8
//           [&_.swiper-button-next]:w-14
//           [&_.swiper-button-next]:h-14
//           [&_.swiper-button-next]:rounded-full
//           [&_.swiper-button-next]:bg-white/90
//           [&_.swiper-button-next]:shadow-xl
//           [&_.swiper-button-next]:after:text-[18px]
//           [&_.swiper-button-next]:after:font-bold

//           [&_.swiper-button-prev]:hidden
//           lg:[&_.swiper-button-prev]:flex
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
//             <div
//               className="
//                 relative
//                 w-full
//                 min-h-[100svh]
//                 lg:min-h-[900px]
//                 2xl:min-h-[1100px]
//                 bg-[#f8f5ef]
//               "
//             >
//               {/* MAIN HERO */}
//               <div
//                 className="
//                   grid
//                   grid-cols-1
//                   lg:grid-cols-[42%_58%]
//                   items-center
//                   min-h-[100svh]
//                   lg:min-h-[900px]
//                   2xl:min-h-[1100px]
//                 "
//               >
//                 {/* LEFT CONTENT */}
//                 <div
//                   className="
//                     relative
//                     z-20
//                     bg-[#ffffff]
//                     h-full
//                     flex
//                     flex-col
//                     justify-center
//                     px-5
//                     sm:px-8
//                     md:px-12
//                     xl:px-16
//                     2xl:px-24
//                     py-16
//                     lg:py-10
//                   "
//                 >
//                   {/* Logo */}
//                   {/* <div className="w-20 h-20 rounded-full border border-[#dcc8b2] bg-white flex items-center justify-center shadow-sm">
//                     <Leaf
//                       size={34}
//                       className="text-[#b86b2b]"
//                     />
//                   </div> */}

//                   {/* Top Text */}
//                   <div className="mt-7 flex items-center gap-2 text-[#b86b2b] text-sm font-semibold tracking-wide">
//                     <Award size={16} />
//                     A JOURNEY THAT TRANSFORMS YOU
//                   </div>

//                   {/* Heading */}
//                   <h1
//                     className="
//                       mt-5
//                       text-[2.7rem]
//                       sm:text-[3.5rem]
//                       md:text-[4.5rem]
//                       xl:text-[5.2rem]
//                       2xl:text-[6.5rem]
//                       leading-[1.03]
//                       font-bold
//                       text-[#1f3528]
//                     "
//                   >
//                     Become a
//                     <span className="block">
//                       Certified Yoga
//                     </span>

//                     <span className="block">
//                       Teacher in{" "}
//                       <span className="text-[#c9732c]">
//                         Bali
//                       </span>
//                     </span>
//                   </h1>

//                   {/* Subtitle */}
//                   <p
//                     className="
//                       mt-6
//                       text-[17px]
//                       sm:text-[19px]
//                       xl:text-[22px]
//                       italic
//                       text-gray-600
//                       leading-relaxed
//                       max-w-[650px]
//                     "
//                   >
//                     Transform Your Life. Inspire The World.
//                   </p>

//                   {/* Features */}
//                   <div className="mt-10 grid grid-cols-2 gap-5 max-w-[700px]">
//                     {[
//                       {
//                         title: "21-Day Training",
//                         icon: "🧘",
//                       },
//                       {
//                         title: "Yoga Alliance Certified",
//                         icon: "🏆",
//                       },
//                       {
//                         title: "Luxury Stay In Nature",
//                         icon: "🌿",
//                       },
//                       {
//                         title: "Satvic Food & Excursions",
//                         icon: "🍃",
//                       },
//                     ].map((item, i) => (
//                       <div
//                         key={i}
//                         className="flex items-start gap-3"
//                       >
//                         <div className="w-12 h-12 rounded-xl bg-[#f1ebe2] flex items-center justify-center text-xl">
//                           {item.icon}
//                         </div>

//                         <div className="text-[#1f3528] font-medium leading-snug">
//                           {item.title}
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Buttons */}
//                   <div className="mt-10 flex flex-col sm:flex-row gap-4">
//                     <Link
//                       to="/contact"
//                       className="
//                         group
//                         bg-gradient-to-r
//                         from-[#2f5134]
//                         to-[#466a49]
//                         hover:from-[#26472b]
//                         hover:to-[#39593d]
//                         text-white
//                         px-8
//                         py-4
//                         rounded-2xl
//                         text-lg
//                         font-semibold
//                         shadow-xl
//                         transition-all
//                         duration-300
//                         flex
//                         items-center
//                         justify-center
//                         gap-3
//                       "
//                     >
//                       APPLY NOW

//                       <ArrowRight
//                         size={20}
//                         className="group-hover:translate-x-1 transition"
//                       />
//                     </Link>

//                     <a
//                       href="/brochure.pdf"
//                       className="
//                         border-2
//                         border-[#d8b18b]
//                         text-[#c9732c]
//                         hover:bg-[#c9732c]
//                         hover:text-white
//                         px-8
//                         py-4
//                         rounded-2xl
//                         text-lg
//                         font-semibold
//                         transition-all
//                         duration-300
//                         flex
//                         items-center
//                         justify-center
//                         gap-3
//                       "
//                     >
//                       <Download size={20} />
//                       DOWNLOAD BROCHURE
//                     </a>
//                   </div>
//                 </div>

//                 {/* RIGHT IMAGE */}
//                 <div className="relative h-full min-h-[420px] lg:min-h-full">
//                   <img
//                     src={image.url}
//                     alt={image.alt}
//                     loading={index === 0 ? "eager" : "lazy"}
//                     className="
//                       w-full
//                       h-full
//                       object-cover
//                     "
//                   />

//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-black/10"></div>
//                 </div>
//               </div>

//               {/* FLOATING BOTTOM CARD */}
//               <div
//                 className="
//                   absolute
//                   bottom-4
//                   left-4
//                   right-4
//                   lg:left-auto
//                   lg:right-8
//                   lg:w-[700px]
//                   z-30
//                 "
//               >
//                 <div
//                   className="
//                     bg-white/95
//                     backdrop-blur-xl
//                     rounded-[24px]
//                     shadow-[0_10px_40px_rgba(0,0,0,0.12)]
//                     px-5
//                     py-5
//                   "
//                 >
//                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
//                     {/* Rating */}
//                     <div className="flex items-center gap-4">
//                       <div className="w-14 h-14 rounded-2xl bg-[#fff3e8] flex items-center justify-center">
//                         <Star
//                           className="text-[#c9732c]"
//                           size={28}
//                         />
//                       </div>

//                       <div>
//                         <h3 className="text-2xl font-bold text-[#1f3528]">
//                           4.9/5
//                         </h3>

//                         <p className="text-gray-600 text-sm">
//                           Student Rating
//                         </p>
//                       </div>
//                     </div>

//                     {/* Students */}
//                     <div className="flex items-center gap-4">
//                       <div className="w-14 h-14 rounded-2xl bg-[#eef7ee] flex items-center justify-center">
//                         <Users
//                           className="text-[#2f7d4c]"
//                           size={28}
//                         />
//                       </div>

//                       <div>
//                         <h3 className="text-2xl font-bold text-[#1f3528]">
//                           1000+
//                         </h3>

//                         <p className="text-gray-600 text-sm">
//                           Happy Students
//                         </p>
//                       </div>
//                     </div>

//                     {/* Countries */}
//                     <div className="flex items-center gap-4">
//                       <div className="w-14 h-14 rounded-2xl bg-[#fff3e8] flex items-center justify-center">
//                         <Globe
//                           className="text-[#c9732c]"
//                           size={28}
//                         />
//                       </div>

//                       <div>
//                         <h3 className="text-2xl font-bold text-[#1f3528]">
//                           15+
//                         </h3>

//                         <p className="text-gray-600 text-sm">
//                           Countries
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* MOBILE GRADIENT */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:hidden"></div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }

// export default HeroSection;













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
// import yoga0 from "../pages/home/images/yoga0.jpg";
// import yoga1 from "../pages/home/images/yoga1.jpg";
// import yoga from "../pages/home/images/yoga.jpg";

// function HeroSection() {
//   const heroImages = [
//     {
//       url: yoga0,
//       alt: "Yoga Training Bali",
//     },
//     {
//       url: yoga1,
//       alt: "Yoga Retreat Bali",
//     },
//     {
//       url: yoga,
//       alt: "Yoga Meditation Bali",
//     },
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
//           w-full
//           h-auto

//           [--swiper-navigation-color:#b86b2b]

//           [&_.swiper-button-next]:hidden
//           lg:[&_.swiper-button-next]:flex
//           [&_.swiper-button-next]:right-8
//           [&_.swiper-button-next]:w-14
//           [&_.swiper-button-next]:h-14
//           [&_.swiper-button-next]:rounded-full
//           [&_.swiper-button-next]:bg-white/90
//           [&_.swiper-button-next]:shadow-xl
//           [&_.swiper-button-next]:after:text-[18px]
//           [&_.swiper-button-next]:after:font-bold

//           [&_.swiper-button-prev]:hidden
//           lg:[&_.swiper-button-prev]:flex
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
//             <div
//               className="
//                 relative
//                 w-full
//                 min-h-[100svh]
//                 lg:min-h-[920px]
//                 2xl:min-h-[1100px]
//                 bg-[#f8f5ef]
//                 overflow-hidden
//                 pb-[140px]
//                 lg:pb-[180px]
//                 xl:pb-[120px]
//               "
//             >
//               {/* MAIN HERO */}
//               <div
//                 className="
//                   grid
//                   grid-cols-1
//                   lg:grid-cols-[45%_55%]
//                   items-center
//                   min-h-[100svh]
//                   lg:min-h-[920px]
//                   2xl:min-h-[1100px]
//                 "
//               >
//                 {/* LEFT CONTENT */}
//                 <div
//                   className="
//                     relative
//                     z-20
//                     bg-[#ffffff]
//                     h-full
//                     flex
//                     flex-col
//                     justify-center
//                     px-5
//                     sm:px-8
//                     md:px-10
//                     lg:px-12
//                     xl:px-16
//                     2xl:px-24
//                     py-16
//                     lg:py-10
//                   "
//                 >
//                   {/* TOP TEXT */}
//                   <div className="mt-7 flex items-center gap-2 text-[#b86b2b] text-sm font-semibold tracking-wide">
//                     <Award size={16} />
//                     A JOURNEY THAT TRANSFORMS YOU
//                   </div>

//                   {/* HEADING */}
//                   <h1
//                     className="
//                       mt-5
//                       text-[2.8rem]
//                       sm:text-[3.6rem]
//                       md:text-[4.4rem]
//                       lg:text-[4.8rem]
//                       xl:text-[5.4rem]
//                       2xl:text-[6.3rem]
//                       leading-[1.03]
//                       font-bold
//                       text-[#1f3528]
//                     "
//                   >
//                     Become a
//                     <span className="block">
//                       Certified Yoga
//                     </span>

//                     <span className="block">
//                       Teacher in{" "}
//                       <span className="text-[#c9732c]">
//                         Bali
//                       </span>
//                     </span>
//                   </h1>

//                   {/* SUBTITLE */}
//                   <p
//                     className="
//                       mt-6
//                       text-[17px]
//                       sm:text-[19px]
//                       xl:text-[22px]
//                       italic
//                       text-gray-600
//                       leading-relaxed
//                       max-w-[650px]
//                     "
//                   >
//                     Transform Your Life. Inspire The World.
//                   </p>

//                   {/* FEATURES */}
//                   <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[680px]">
//                     {[
//                       {
//                         title: "21-Day Training",
//                         icon: "🧘",
//                       },
//                       {
//                         title: "Yoga Alliance Certified",
//                         icon: "🏆",
//                       },
//                       {
//                         title: "Luxury Stay In Nature",
//                         icon: "🌿",
//                       },
//                       {
//                         title: "Satvic Food & Excursions",
//                         icon: "🍃",
//                       },
//                     ].map((item, i) => (
//                       <div
//                         key={i}
//                         className="
//                           flex
//                           items-start
//                           gap-4
//                           bg-[#faf7f2]
//                           border
//                           border-[#eee5d8]
//                           rounded-2xl
//                           p-4
//                           hover:shadow-md
//                           transition-all
//                           duration-300
//                         "
//                       >
//                         <div className="w-12 h-12 rounded-xl bg-[#f1ebe2] flex items-center justify-center text-xl shrink-0">
//                           {item.icon}
//                         </div>

//                         <div className="text-[#1f3528] font-medium leading-snug">
//                           {item.title}
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* BUTTONS */}
//                   <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
//                     <Link
//                       to="/contact"
//                       className="
//                         group
//                         bg-gradient-to-r
//                         from-[#2f5134]
//                         to-[#466a49]
//                         hover:from-[#26472b]
//                         hover:to-[#39593d]
//                         text-white
//                         px-8
//                         py-4
//                         rounded-2xl
//                         text-lg
//                         font-semibold
//                         shadow-xl
//                         transition-all
//                         duration-300
//                         flex
//                         items-center
//                         justify-center
//                         gap-3
//                         hover:-translate-y-1
//                       "
//                     >
//                       APPLY NOW

//                       <ArrowRight
//                         size={20}
//                         className="group-hover:translate-x-1 transition"
//                       />
//                     </Link>

//                     <a
//                       href="/brochure.pdf"
//                       className="
//                         border-2
//                         border-[#d8b18b]
//                         text-[#c9732c]
//                         hover:bg-[#c9732c]
//                         hover:text-white
//                         px-8
//                         py-4
//                         rounded-2xl
//                         text-lg
//                         font-semibold
//                         transition-all
//                         duration-300
//                         flex
//                         items-center
//                         justify-center
//                         gap-3
//                         bg-white
//                         hover:-translate-y-1
//                       "
//                     >
//                       <Download size={20} />
//                       DOWNLOAD BROCHURE
//                     </a>
//                   </div>
//                 </div>

//                 {/* RIGHT IMAGE */}
//                 <div className="relative h-full min-h-[420px] lg:min-h-full">
//                   <img
//                     src={image.url}
//                     alt={image.alt}
//                     loading={index === 0 ? "eager" : "lazy"}
//                     className="
//                       w-full
//                       h-full
//                       object-cover
//                     "
//                   />

//                   {/* OVERLAY */}
//                   <div className="absolute inset-0 bg-black/10"></div>

//                   {/* PREMIUM OVERLAY */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent"></div>
//                 </div>
//               </div>

//               {/* FLOATING STATS CARD */}
//               <div
//                 className="
//                   absolute
//                   left-4
//                   right-4
//                   bottom-6

//                   md:bottom-8

//                   lg:left-1/2
//                   lg:-translate-x-1/2
//                   lg:bottom-10
//                   lg:w-[88%]

//                   xl:left-auto
//                   xl:translate-x-0
//                   xl:right-8
//                   xl:w-[720px]

//                   z-30
//                 "
//               >
//                 <div
//                   className="
//                     bg-white/95
//                     backdrop-blur-xl
//                     rounded-[28px]
//                     shadow-[0_10px_40px_rgba(0,0,0,0.12)]
//                     px-5
//                     py-5
//                     border
//                     border-white/50
//                   "
//                 >
//                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//                     {/* RATING */}
//                     <div className="flex items-center gap-4">
//                       <div className="w-14 h-14 rounded-2xl bg-[#fff3e8] flex items-center justify-center shrink-0">
//                         <Star
//                           className="text-[#c9732c]"
//                           size={28}
//                         />
//                       </div>

//                       <div>
//                         <h3 className="text-2xl font-bold text-[#1f3528]">
//                           4.9/5
//                         </h3>

//                         <p className="text-gray-600 text-sm">
//                           Student Rating
//                         </p>
//                       </div>
//                     </div>

//                     {/* STUDENTS */}
//                     <div className="flex items-center gap-4">
//                       <div className="w-14 h-14 rounded-2xl bg-[#eef7ee] flex items-center justify-center shrink-0">
//                         <Users
//                           className="text-[#2f7d4c]"
//                           size={28}
//                         />
//                       </div>

//                       <div>
//                         <h3 className="text-2xl font-bold text-[#1f3528]">
//                           1000+
//                         </h3>

//                         <p className="text-gray-600 text-sm">
//                           Happy Students
//                         </p>
//                       </div>
//                     </div>

//                     {/* COUNTRIES */}
//                     <div className="flex items-center gap-4">
//                       <div className="w-14 h-14 rounded-2xl bg-[#fff3e8] flex items-center justify-center shrink-0">
//                         <Globe
//                           className="text-[#c9732c]"
//                           size={28}
//                         />
//                       </div>

//                       <div>
//                         <h3 className="text-2xl font-bold text-[#1f3528]">
//                           15+
//                         </h3>

//                         <p className="text-gray-600 text-sm">
//                           Countries
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* MOBILE GRADIENT */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:hidden"></div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }

// export default HeroSection;