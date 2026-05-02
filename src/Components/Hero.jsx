import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// 🔽 LOCAL IMAGE IMPORTS (ONLY ADDITION)
import yoga0 from "../pages/home/images/yoga0.jpg";
import yoga1 from "../pages/home/images/yoga1.jpg";
import yoga from "../pages/home/images/yoga.jpg";

function HeroSection() {
  // 🔽 ONLY CHANGE: url → imported image
  const heroImages = [
    {
      url: yoga0,
      alt: "Students practicing yoga in a peaceful studio environment",
    },
    {
      url: yoga1,
      alt: "Group yoga session focused on balance and mindfulness",
    },
    {
      url: yoga,
      alt: "Professional yoga instructor guiding a meditation class",
    },
  ];

  return (
    <section className="relative w-full max-w-full h-screen m-0 p-0 overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={false}
        navigation={true}
        loop={true}
          className="w-full h-full
           [--swiper-navigation-color:#b4533c]

          [&_.swiper-button-next]:hidden 
          sm:[&_.swiper-button-next]:flex 
          [&_.swiper-button-next]:right-10
          [&_.swiper-button-next]:bg-transparent
          [&_.swiper-button-next]:after:text-[30px]
          [&_.swiper-button-next]:after:font-bold
          [&_.swiper-button-next]:after:text-[#b4533c]

          [&_.swiper-button-prev]:hidden 
          sm:[&_.swiper-button-prev]:flex 
          [&_.swiper-button-prev]:left-10
          [&_.swiper-button-prev]:bg-transparent
          [&_.swiper-button-prev]:after:text-[30px]
          [&_.swiper-button-prev]:after:font-bold
          [&_.swiper-button-prev]:after:text-[#b4533c]

          [&_.swiper-pagination-bullet]:bg-white 
          [&_.swiper-pagination-bullet]:opacity-50 
          [&_.swiper-pagination-bullet]:w-3 
          [&_.swiper-pagination-bullet]:h-3 
          [&_.swiper-pagination-bullet]:transition-all
          [&_.swiper-pagination-bullet-active]:opacity-1 
          [&_.swiper-pagination-bullet-active]:w-10 
          [&_.swiper-pagination-bullet-active]:rounded-[6px]"
              >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index} className="overflow-hidden bg-black">
            <div className="w-full h-full relative">
              <img
                src={image.url}
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className="w-full h-full object-cover transition-opacity duration-700 [.swiper-slide-active_&]:animate-[kenBurnsZoom_8s_ease-out_forwards]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Overlay */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center text-white max-w-[800px] w-[90%] px-5 pointer-events-none">
        <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold mb-5 leading-[1.2] drop-shadow-[2px_2px_8px_rgba(0,0,0,0.7)] animate-[fadeInUp_1s_ease_0.3s_backwards] pointer-events-auto">
          Welcome to BALIYOGA
        </h1>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal mb-[30px] leading-[1.6] drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)] animate-[fadeInUp_1s_ease_0.5s_backwards] pointer-events-auto">
          Transform your body, calm your mind, and elevate your spirit through
          authentic yoga practices guided by experienced instructors.
        </p>

        <Link
          to="/contact"
          className="group relative inline-block py-[15px] pr-[50px] pl-[40px] text-sm md:text-base lg:text-[18px] font-semibold text-white bg-[#b4533c] rounded-[50px] transition-all duration-400 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-[#b4533c] hover:-translate-y-[3px] hover:shadow-[0_6px_25px_rgba(0,0,0,0.4)] hover:pr-[55px] active:translate-y-[-1px] animate-[fadeInUp_1s_ease_0.7s_backwards] pointer-events-auto overflow-hidden no-underline"
        >
          Get Started
          {/* <span className="absolute right-5 top-1/2 -translate-y-1/2 w-[12px] h-[12px] border-r-2 border-b-2 border-white -rotate-45 transition-all duration-400 group-hover:right-[15px] group-hover:animate-[arrowSlide_0.6s_ease_infinite]"></span> */}
        {/* </Link>
      </div> */} 

      {/* Content Overlay */}
<div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-white px-5">

  <div className="max-w-[900px] w-full">

    {/* Heading */}
    <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[26px] font-bold mb-4 leading-[1.2] drop-shadow-[2px_2px_8px_rgba(0,0,0,0.7)]">
     <span className="block">
        Become a Certified Yoga Teacher in Bali —
      </span>
       <span className="block text-yellow-400 mt-2">
        Transform Your Life, Embrace Endless Possibilities
      </span>
    </h1>
    

    {/* Subtext */}
    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] mb-6 leading-[1.6] drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)]">
      Internationally certified Yoga TTC with accommodation, meals &
      spiritual immersion in the heart of Bali.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">

      {/* Apply Now */}
      <a
        href="/contact"
        className="bg-[#3d4a3e] text-white px-6 py-3 rounded-md text-sm sm:text-base font-medium flex items-center gap-2 hover:bg-[#2c362d] transition"
      >
        Apply Now →
      </a>

      {/* Download Brochure */}
      <a
        href="/brochure.pdf"
        className="bg-white text-black px-6 py-3 rounded-md text-sm sm:text-base font-medium flex items-center gap-2 hover:bg-gray-200 transition"
      >
        Download Brochure ⬇
      </a>

    </div>
  </div>

  {/* Bottom Info Strip */}
  <div className="
    absolute bottom-0 left-0 w-full 
    bg-[#f5f2eb] text-black 
    py-3 px-4
  ">
    <div className="
      max-w-[1100px] mx-auto 
      flex flex-col sm:flex-row 
      justify-between items-center 
      gap-3 text-center sm:text-left
    ">

      {/* Rating */}
      <div className="flex items-center gap-2 text-sm">
        ⭐ <span className="font-semibold">4.9/5 Rating</span>
        <span className="text-gray-600">(120+ Reviews)</span>
      </div>

      {/* Students */}
      <div className="text-sm">
        🌍 <span className="font-semibold">1000+</span> Students Trained
      </div>

      {/* Certification */}
      <div className="text-sm">
        🏆 Yoga Alliance Certified School
      </div>

    </div>
  </div>

</div>

      <style>{`
        @keyframes kenBurnsZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes arrowSlide {
          0%, 100% { right: 15px; }
          50% { right: 10px; }
        }
      `}</style>
    </section>
  );
}

export default HeroSection;















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
//        Become a Certified Yoga Teacher in Bali —{" "}
//        <span className="text-yellow-400">
//             Transform Your Life, Embrace Endless Possibilities
//           </span>
//     </h1>
//     <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[26px] font-bold mb-4 leading-[1.2] drop-shadow-[2px_2px_8px_rgba(0,0,0,0.7)]">
//        Train as a Certified Yoga Teacher in Bali  —{" "}
//        <span className="text-yellow-400">
//             A Journey of Transformation and Discovery
//           </span>
//     </h1>
//     <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[26px] font-bold mb-4 leading-[1.2] drop-shadow-[2px_2px_8px_rgba(0,0,0,0.7)]">
//       Become a Certified Yoga Teacher in Bali  —{" "}
//        <span className="text-yellow-400">
//             Where Transformation Meets New Adventures
//           </span>
//     </h1>

//     {/* Subtext */}
//     {/* <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] mb-6 leading-[1.6] drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)]">
//       Join our certified yoga programs in Bali and elevate your mind, body, and spirit.
//     </p> */}
//       {/* Subheadline */}
//         {/* <p className="text-lg md:text-xl text-gray-200 mb-8"> */}
//          <p className="text-sm sm:text-base md:text-lg lg:text-xl 
//                       text-gray-200 mb-8 max-w-2xl mx-auto">
//           Internationally certified Yoga TTC with accommodation, meals & 
//           spiritual immersion in the heart of Bali.
//         </p>

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
