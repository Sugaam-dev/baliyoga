// import React, { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";
// import { Link } from "react-router-dom";
// import { Award, Calendar, Home, Utensils, ArrowRight } from "lucide-react";

// // Swiper CSS
// import "swiper/css";
// import "swiper/css/effect-fade";

// // Images
// import yoga1 from "../../assets/images/home/Bali_Yoga_Kendra_Banner_1.webp";
// import yoga2 from "../../assets/images/home/Bali_Yoga_Kendra_Banner_2.webp";
// import yoga3 from "../../assets/images/home/Bali_Yoga_Kendra_Banner_3.webp";
// import yoga4 from "../../assets/images/home/Bali_Yoga_Kendra_Banner_4.webp";
// import yoga5 from "../../assets/images/home/Bali_Yoga_Kendra_Banner_5.webp";


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
//     { url: yoga1, alt: "Yoga Retreat Bali" },
//     { url: yoga2, alt: "Yoga Meditation Bali" },
//      { url: yoga3, alt: "Yoga Retreat Bali" },
//     { url: yoga4, alt: "Yoga Meditation Bali" },
//    { url: yoga5, alt: "Yoga Retreat Bali" },
//   ];

//   return (
//     <section className="relative w-full overflow-hidden bg-[#FAF8F5] p-0 m-0">
//       <Swiper
//         modules={[Autoplay, EffectFade]}
//         effect="fade"
//         fadeEffect={{ crossFade: true }}
//         speed={1200}
//         autoplay={{
//           delay: 4500,
//           disableOnInteraction: false,
//         }}
//         loop={true}
//         className="w-full h-full"
//       >
//         {heroImages.map((image, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full bg-[#FAF8F5] flex flex-col lg:block">

//               {/* ───────────────── DESKTOP HERO (Unified Layout) ───────────────── */}
//               <div className="hidden lg:block relative h-[86vh] min-h-[600px] max-h-[820px] w-full">
                
//                 {/* Background image spanning the entire banner */}
//                 <div className="absolute inset-0 z-0">
//                   <img
//                     src={image.url}
//                     alt={image.alt}
//                     loading={index === 0 ? "eager" : "lazy"}
//                     className="w-full h-full object-cover"
//                   />
//                   {/* 
//                     Smooth, wide fade:
//                     - Solid #FAF8F5 on the left (0% to 30%) to make sure the user does not see the image behind the text
//                     - Increased, gradual fade-out from 30% to 65% to blend the transition seamlessly
//                   */}
//                   <div 
//                     className="absolute inset-0" 
//                     style={{
//                       background: 'linear-gradient(to right, #FAF8F5 0%, #FAF8F5 30%, rgba(250, 248, 245, 0.95) 38%, rgba(250, 248, 245, 0.6) 50%, rgba(250, 248, 245, 0) 65%)'
//                     }}
//                   />
//                 </div>

//                 {/* Left content overlaid directly on top of the blended canvas */}
//                 <div className="relative z-10 h-full max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] mx-auto w-full px-4 sm:px-6 lg:px-6 xl:px-10 flex items-center">
//                   <div className="w-[45%] lg:w-[40%] xl:w-[38%] flex flex-col justify-center pt-24 pb-24 pr-4">
//                     <LeftContent />
//                   </div>
//                 </div>

//               </div>

//               {/* ───────────────── MOBILE / TABLET ───────────────── */}
//               <div className="flex flex-col lg:hidden">
//                 {/* TEXT */}
//                 <div className="bg-[#FAF8F5] px-6 sm:px-12 pt-24 pb-24">
//                   <LeftContent />
//                 </div>

//                 {/* IMAGE */}
//                 <div className="relative w-full overflow-hidden">
//                   <img
//                     src={image.url}
//                     alt={image.alt}
//                     loading={index === 0 ? "eager" : "lazy"}
//                     className="w-full object-cover"
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
//       <div className="flex items-center gap-2 text-[#b86b2b] text-[10px] xl:text-[11px] 2xl:text-xs font-semibold tracking-wider uppercase">
//         <Award size={13} className="stroke-[2.5]" />
//         A Journey That Transforms You
//       </div>

//       {/* HEADING */}
//       <h1
//         className="
//           mt-4
//           font-['Montserrat']
//           text-[2.2rem] sm:text-[2.8rem]
//           lg:text-[3.2rem] xl:text-[3.5rem] 2xl:text-[3.8rem]
//           leading-[1.15] font-extrabold text-[#1f3528]
//           tracking-tight
//         "
//       >
//         Become a <br />
//         <span className="font-extrabold">Certified Yoga</span> <br />
//         Teacher in{" "}
//         <span className="text-[#b86b2b] font-extrabold">Bali</span>
//       </h1>

//       {/* SUBTITLE */}
//       <p
//         className="
//           mt-7 text-black-600 font-bold
//           font-['Playfair_Display'] italic
//           text-[16px] sm:text-[20px]
//           lg:text-[18px] xl:text-[22px] 2xl:text-[24px]
//         "
//       >
//         Transform Your Life. Inspire the World.
//       </p>

//       {/* HORIZONTAL FEATURES */}
//       <div className="mt-3 flex flex-row flex-wrap lg:flex-nowrap items-center justify-start gap-y-3 gap-x-2 border-t border-gray-200/80 pt-4">
//         {[
//           { title: <>21-Day <br /> Training</>, icon: Calendar },
//           { title: <>Yoga Alliance <br /> Certified</>, icon: Award },
//           { title: <>Luxury Stay <br /> In Nature</>, icon: Home },
//           { title: <>Sattvic Food <br /> & Excursions</>, icon: Utensils },
//         ].map((item, i) => {
//           const IconComponent = item.icon;
//           return (
//             <React.Fragment key={i}>
//               <div className="flex flex-col items-center text-center gap-1 flex-shrink-0 min-w-[72px] lg:min-w-[65px] xl:min-w-[75px]">
//                 {/* Logo / Icon on top */}
//                 <div
//                   className="
//                     rounded-full border border-gray-300 bg-white
//                     flex items-center justify-center flex-shrink-0
//                     w-7 h-7 text-[#1f3528] shadow-sm
//                   "
//                 >
//                   <IconComponent size={13} className="stroke-[1.75]" />
//                 </div>

//                 {/* Label text directly below icon */}
//                 <div
//                   className="
//                     text-[#1f3528]
//                     font-semibold
//                     text-[9px]
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
//                 <div className="hidden lg:block h-6 w-px bg-gray-300/70 mx-0.5 self-center flex-shrink-0" />
//               )}
//             </React.Fragment>
//           );
//         })}
//       </div>

//       {/* BUTTONS */}
//       <div className="mt-8 flex flex-col sm:flex-row gap-2.5">
//         {/* APPLY NOW */}
//         <Link
//           to="/contact"
//           className="
//             group
//             bg-[#26402e] hover:bg-[#182b1f]
//             text-white
//             px-4 lg:px-3 xl:px-4
//             py-3 lg:py-2.5 xl:py-3
//             rounded-xl
//             text-xs lg:text-[10px] xl:text-xs 2xl:text-sm
//             font-bold tracking-wide
//             shadow-md transition-all duration-300
//             flex items-center justify-center gap-1.5
//           "
//         >
//           APPLY NOW
//           <ArrowRight
//             size={14}
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
//             px-4 lg:px-3 xl:px-4
//             py-3 lg:py-2.5 xl:py-3
//             rounded-xl
//             text-xs lg:text-[10px] xl:text-xs 2xl:text-sm
//             font-bold tracking-wide
//             transition-all duration-300
//             flex items-center justify-center gap-1.5
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
import { Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import { Award, Calendar, Home, Utensils, ArrowRight } from "lucide-react";

// Swiper CSS
import "swiper/css";
import "swiper/css/effect-fade";

// Desktop Images
import yoga1 from "../../assets/images/home/Bali_Yoga_Kendra_Banner_1.webp";
import yoga2 from "../../assets/images/home/Bali_Yoga_Kendra_Banner_2.webp";
import yoga3 from "../../assets/images/home/Bali_Yoga_Kendra_Banner_3.webp";
import yoga4 from "../../assets/images/home/Bali_Yoga_Kendra_Banner_4.webp";
import yoga5 from "../../assets/images/home/Bali_Yoga_Kendra_Banner_5.webp";

// Mobile Images (You can import your mobile-specific assets here)
import mobileYoga1 from "../../assets/images/home/Bali_Yoga_Kendra_mobile_1.webp";
import mobileYoga2 from "../../assets/images/home/Bali_Yoga_Kendra_mobile_2.webp";
import mobileYoga3 from "../../assets/images/home/Bali_Yoga_Kendra_mobile_3.webp";
import mobileYoga4 from "../../assets/images/home/Bali_Yoga_Kendra_mobile_4.webp";
import mobileYoga5 from "../../assets/images/home/Bali_Yoga_Kendra_mobile_5.webp";

function HeroSection() {
  const desktopImages = [
    { url: yoga1, alt: "Yoga Retreat Bali Desktop 1" },
    { url: yoga2, alt: "Yoga Meditation Bali Desktop 2" },
    { url: yoga3, alt: "Yoga Retreat Bali Desktop 3" },
    { url: yoga4, alt: "Yoga Meditation Bali Desktop 4" },
    { url: yoga5, alt: "Yoga Retreat Bali Desktop 5" },
  ];

  const mobileImages = [
    { url: mobileYoga1, alt: "Yoga Retreat Bali Mobile 1" },
    { url: mobileYoga2, alt: "Yoga Meditation Bali Mobile 2" },
    { url: mobileYoga3, alt: "Yoga Retreat Bali Mobile 3" },
    { url: mobileYoga4, alt: "Yoga Meditation Bali Mobile 4" },
    { url: mobileYoga5, alt: "Yoga Retreat Bali Mobile 5" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF8F5] p-0 m-0">
      {/* Desktop Swiper */}
      <div className="hidden lg:block w-full h-full">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1200}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full h-full"
        >
          {desktopImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full bg-[#FAF8F5] lg:block">
                <div className="relative h-[86vh] min-h-[600px] max-h-[820px] w-full">
                  {/* Background image spanning the entire banner */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={image.url}
                      alt={image.alt}
                      loading={index === 0 ? "eager" : "lazy"}
                      fetchpriority={index === 0 ? "high" : "auto"}
                      width="1400"
                      height="820"
                      className="w-full h-full object-cover"
                    />
                    <div 
                      className="absolute inset-0" 
                      style={{
                        background: 'linear-gradient(to right, #FAF8F5 0%, #FAF8F5 30%, rgba(250, 248, 245, 0.95) 38%, rgba(250, 248, 245, 0.6) 50%, rgba(250, 248, 245, 0) 65%)'
                      }}
                    />
                  </div>

                  {/* Left content overlaid directly on top of the blended canvas */}
                  <div className="relative z-10 h-full max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] mx-auto w-full px-4 sm:px-6 lg:px-6 xl:px-10 flex items-center">
                    <div className="w-[45%] lg:w-[40%] xl:w-[38%] flex flex-col justify-center pt-24 pb-24 pr-4">
                      <LeftContent />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile / Tablet Swiper */}
      <div className="block lg:hidden w-full h-full">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1200}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full h-full"
        >
          {mobileImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col">
                {/* TEXT */}
                <div className="bg-[#FAF8F5] px-6 sm:px-12 pt-24 pb-12">
                  <LeftContent />
                </div>

                {/* IMAGE */}
                <div className="relative w-full overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchpriority={index === 0 ? "high" : "auto"}
                    width="900"
                    height="1093"
                    className="w-full object-cover"
                    style={{
                      height: "45vw",
                      minHeight: "500px",
                      maxHeight: "900px",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/5" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
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
      <div className="flex items-center gap-2 text-[#854417] text-[10px] xl:text-[11px] 2xl:text-xs font-semibold tracking-wider uppercase">
        <Award size={13} className="stroke-[2.5]" />
        A Journey That Transforms You
      </div>

      {/* HEADING */}
      <h1
        className="
          mt-4
          font-['Montserrat']
          text-[2.2rem] sm:text-[2.8rem]
          lg:text-[3.2rem] xl:text-[3.5rem] 2xl:text-[3.8rem]
          leading-[1.15] font-extrabold text-[#1f3528]
          tracking-tight
        "
      >
        Become a <br />
        <span className="font-extrabold">Certified Yoga</span> <br />
        Teacher in{" "}
        <span className="text-[#854417] font-extrabold">Bali</span>
      </h1>

      {/* SUBTITLE */}
      <p
        className="
          mt-7 text-stone-800 font-bold
          font-['Playfair_Display'] italic
          text-[16px] sm:text-[20px]
          lg:text-[18px] xl:text-[22px] 2xl:text-[24px]
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
          aria-label="Apply now for yoga teacher training"
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
            no-underline
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
          aria-label="Download course brochure"
          className="
            border-2 border-[#854417]
            text-[#854417] bg-transparent
            hover:bg-[#854417] hover:text-white
            px-4 lg:px-3 xl:px-4
            py-3 lg:py-2.5 xl:py-3
            rounded-xl
            text-xs lg:text-[10px] xl:text-xs 2xl:text-sm
            font-bold tracking-wide
            transition-all duration-300
            flex items-center justify-center gap-1.5
            no-underline
          "
        >
          DOWNLOAD BROCHURE
        </a>
      </div>
    </>
  );
}

export default HeroSection;