// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
// import { Link } from 'react-router-dom';

// // Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/css/effect-fade';

// function HeroSection() {
//   const heroImages = [
//     {
//       url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80",
//       alt: "Financial Analysis"
//     },
//     {
//       url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80",
//       alt: "Market Data Growth"
//     },
//     {
//       url: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1920&q=80",
//       alt: "Professional Financial Consulting"
//     }
//   ];

//   return (
//     /* Changed w-screen to w-full and added max-w-full to prevent horizontal overflow */
//     <section className="relative w-full max-w-full h-screen m-0 p-0 overflow-hidden bg-black">
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation, EffectFade]}
//         effect="fade"
//         fadeEffect={{ crossFade: true }}
//         speed={1200}
//         autoplay={{ delay: 4500, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         loop={true}
//         className="w-full h-full 
//           [&_.swiper-button-next]:hidden sm:[&_.swiper-button-next]:flex [&_.swiper-button-next]:w-[50px] [&_.swiper-button-next]:h-[50px] [&_.swiper-button-next]:bg-white/10 [&_.swiper-button-next]:border-2 [&_.swiper-button-next]:border-white/50 [&_.swiper-button-next]:right-10 [&_.swiper-button-next]:backdrop-blur-md [&_.swiper-button-next:after]:text-[20px] [&_.swiper-button-next:after]:text-white [&_.swiper-button-next:after]:font-bold hover:[&_.swiper-button-next]:bg-white/20 hover:[&_.swiper-button-next]:scale-110
//           [&_.swiper-button-prev]:hidden sm:[&_.swiper-button-prev]:flex [&_.swiper-button-prev]:w-[50px] [&_.swiper-button-prev]:h-[50px] [&_.swiper-button-prev]:bg-white/10 [&_.swiper-button-prev]:border-2 [&_.swiper-button-prev]:border-white/50 [&_.swiper-button-prev]:left-10 [&_.swiper-button-prev]:backdrop-blur-md [&_.swiper-button-prev:after]:text-[20px] [&_.swiper-button-prev:after]:text-white [&_.swiper-button-prev:after]:font-bold hover:[&_.swiper-button-prev]:bg-white/20 hover:[&_.swiper-button-prev]:scale-110
//           [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet]:opacity-50 [&_.swiper-pagination-bullet]:w-3 [&_.swiper-pagination-bullet]:h-3 [&_.swiper-pagination-bullet]:transition-all
//           [&_.swiper-pagination-bullet-active]:opacity-1 [&_.swiper-pagination-bullet-active]:w-10 [&_.swiper-pagination-bullet-active]:rounded-[6px]"
//       >
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
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center text-white max-w-[800px] w-[90%] px-5 pointer-events-none">
//         <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold mb-5 leading-[1.2] drop-shadow-[2px_2px_8px_rgba(0,0,0,0.7)] animate-[fadeInUp_1s_ease_0.3s_backwards] pointer-events-auto">
//           Welcome to PFL Financial Solutions
//         </h1>
//         <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal mb-[30px] leading-[1.6] drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)] animate-[fadeInUp_1s_ease_0.5s_backwards] pointer-events-auto">
//           Empowering your growth with smart, transparent, and reliable financial solutions tailored for your success.
//         </p>
        
//         <Link
//           to="/contact"
//           className="group relative inline-block py-[15px] pr-[50px] pl-[40px] text-sm md:text-base lg:text-[18px] font-semibold text-white bg-[#0a4b8f] rounded-[50px] transition-all duration-400 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-[#397fb4] hover:-translate-y-[3px] hover:shadow-[0_6px_25px_rgba(0,0,0,0.4)] hover:pr-[55px] active:translate-y-[-1px] animate-[fadeInUp_1s_ease_0.7s_backwards] pointer-events-auto overflow-hidden no-underline"
//         >
//           Get Started
//           <span className="absolute right-5 top-1/2 -translate-y-1/2 w-[12px] h-[12px] border-r-2 border-b-2 border-white -rotate-45 transition-all duration-400 group-hover:right-[15px] group-hover:animate-[arrowSlide_0.6s_ease_infinite]"></span>
//         </Link>
//       </div>

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



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// 🔽 LOCAL IMAGE IMPORTS (ONLY ADDITION)
import hero from '../pages/home/images/hero.png';
import hero1 from '../pages/home/images/hero1.png';
import hero2 from '../pages/home/images/hero2.png';

function HeroSection() {
  // 🔽 ONLY CHANGE: url → imported image
  const heroImages = [
    {
      url: hero,
      alt: 'Financial Analysis'
    },
    {
      url: hero1,
      alt: 'Market Data Growth'
    },
    {
      url: hero2,
      alt: 'Professional Financial Consulting'
    }
  ];

  return (
    <section className="relative w-full max-w-full h-screen m-0 p-0 overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="w-full h-full 
          [&_.swiper-button-next]:hidden sm:[&_.swiper-button-next]:flex [&_.swiper-button-next]:w-[50px] [&_.swiper-button-next]:h-[50px] [&_.swiper-button-next]:bg-white/10 [&_.swiper-button-next]:border-2 [&_.swiper-button-next]:border-white/50 [&_.swiper-button-next]:right-10 [&_.swiper-button-next]:backdrop-blur-md [&_.swiper-button-next:after]:text-[20px] [&_.swiper-button-next:after]:text-white [&_.swiper-button-next:after]:font-bold hover:[&_.swiper-button-next]:bg-white/20 hover:[&_.swiper-button-next]:scale-110
          [&_.swiper-button-prev]:hidden sm:[&_.swiper-button-prev]:flex [&_.swiper-button-prev]:w-[50px] [&_.swiper-button-prev]:h-[50px] [&_.swiper-button-prev]:bg-white/10 [&_.swiper-button-prev]:border-2 [&_.swiper-button-prev]:border-white/50 [&_.swiper-button-prev]:left-10 [&_.swiper-button-prev]:backdrop-blur-md [&_.swiper-button-prev:after]:text-[20px] [&_.swiper-button-prev:after]:text-white [&_.swiper-button-prev:after]:font-bold hover:[&_.swiper-button-prev]:bg-white/20 hover:[&_.swiper-button-prev]:scale-110
          [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet]:opacity-50 [&_.swiper-pagination-bullet]:w-3 [&_.swiper-pagination-bullet]:h-3 [&_.swiper-pagination-bullet]:transition-all
          [&_.swiper-pagination-bullet-active]:opacity-1 [&_.swiper-pagination-bullet-active]:w-10 [&_.swiper-pagination-bullet-active]:rounded-[6px]"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index} className="overflow-hidden bg-black">
            <div className="w-full h-full relative">
              <img
                src={image.url}
                alt={image.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover transition-opacity duration-700 [.swiper-slide-active_&]:animate-[kenBurnsZoom_8s_ease-out_forwards]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center text-white max-w-[800px] w-[90%] px-5 pointer-events-none">
        <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold mb-5 leading-[1.2] drop-shadow-[2px_2px_8px_rgba(0,0,0,0.7)] animate-[fadeInUp_1s_ease_0.3s_backwards] pointer-events-auto">
           Welcome to CMG
        </h1>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal mb-[30px] leading-[1.6] drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)] animate-[fadeInUp_1s_ease_0.5s_backwards] pointer-events-auto">
          Empowering Students & Parents
        </p>

        <Link
          to="/contact"
          className="group relative inline-block py-[15px] pr-[50px] pl-[40px] text-sm md:text-base lg:text-[18px] font-semibold text-white bg-[#0a4b8f] rounded-[50px] transition-all duration-400 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-[#397fb4] hover:-translate-y-[3px] hover:shadow-[0_6px_25px_rgba(0,0,0,0.4)] hover:pr-[55px] active:translate-y-[-1px] animate-[fadeInUp_1s_ease_0.7s_backwards] pointer-events-auto overflow-hidden no-underline"
        >
          Get Started
          <span className="absolute right-5 top-1/2 -translate-y-1/2 w-[12px] h-[12px] border-r-2 border-b-2 border-white -rotate-45 transition-all duration-400 group-hover:right-[15px] group-hover:animate-[arrowSlide_0.6s_ease_infinite]"></span>
        </Link>
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
