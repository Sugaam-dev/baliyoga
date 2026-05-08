// // import React from "react";
// // import {
// //   Leaf,
// //   Sparkles,
// //   Flower2,
// //   CheckCircle2,
// //   ArrowRight,
// // } from "lucide-react";

// // import baliMeditation from "./images/yogagallery.jpg";


// // const BaliYogaKendraExperience = () => {
// //   const features = [
// //     "Ancient Wisdom & Authentic Teachings",
// //     "Meditation, Rituals & Healing Practices",
// //     "Daily Yoga, Breathwork & Philosophy",
// //     "Nature, Community & Self Discovery",
// //   ];

// //   const stats = [
// //     {
// //       number: "10+",
// //       label: "Years Experience",
// //     },
// //     {
// //       number: "5000+",
// //       label: "Happy Students",
// //     },
// //     {
// //       number: "100%",
// //       label: "Peaceful Environment",
// //     },
// //   ];

// //   return (
// //     <section className="relative overflow-hidden bg-[#f8f5ef]">
// //       {/* Background Gradient */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-[#fff6eb] via-[#f8f5ef] to-[#eef7ec] z-0"></div>

// //       {/* Blur Effects */}
// //       <div className="absolute top-[-120px] left-[-100px] w-[350px] h-[350px] bg-orange-300/20 blur-3xl rounded-full"></div>

// //       <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-green-300/20 blur-3xl rounded-full"></div>

// //       <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 xl:px-16 py-12 md:py-20 2xl:py-28">
// //         {/* TOP SECTION */}
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
// //           {/* LEFT IMAGE */}
// //           <div className="relative group">
// //             {/* Glow */}
// //             <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-green-500 rounded-[35px] blur opacity-30 group-hover:opacity-50 transition duration-500"></div>

// //             <div className="relative rounded-[30px] overflow-hidden shadow-2xl">
// //               <img
// //                 src={baliMeditation}
// //                 alt="Bali Yoga"
// //                 className="
// //                   w-full
// //                   h-[320px]
// //                   sm:h-[450px]
// //                   md:h-[550px]
// //                   lg:h-[650px]
// //                   xl:h-[720px]
// //                   2xl:h-[850px]
// //                   object-cover
// //                   transition-transform duration-700
// //                   group-hover:scale-105
// //                 "
// //               />

// //               {/* Overlay */}
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

// //               {/* Floating Card */}
// //               <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-white/90 backdrop-blur-md rounded-3xl p-5 shadow-2xl max-w-[360px] border border-white/40">
// //                 <div className="flex items-center gap-4">
// //                   <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-green-500 flex items-center justify-center text-white shadow-lg">
// //                     <Flower2 size={24} />
// //                   </div>

// //                   <div>
// //                     <h3 className="text-xl font-bold text-[#1f3528]">
// //                       Bali Yoga Kendra
// //                     </h3>

// //                     <p className="text-sm text-gray-600">
// //                       Healing • Nature • Transformation
// //                     </p>
// //                   </div>
// //                 </div>

// //                 <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
// //                   Experience authentic yoga surrounded by Bali’s spiritual
// //                   atmosphere, lush greenery, peaceful beaches, and healing
// //                   energy.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* RIGHT CONTENT */}
// //           <div className="relative">
// //             {/* TREE STYLE DESIGN */}
// //             <div className="hidden xl:block absolute right-[-120px] top-0 opacity-20 pointer-events-none">
// //               <div className="relative w-[350px] h-[700px]">
// //                 {[...Array(11)].map((_, i) => (
// //                   <div
// //                     key={i}
// //                     className="absolute border border-[#d38b3c] rounded-full"
// //                     style={{
// //                       width: `${220 + i * 22}px`,
// //                       height: `${220 + i * 22}px`,
// //                       right: `${-100 + i * 8}px`,
// //                       top: `${i * 42}px`,
// //                       borderLeft: "none",
// //                       borderBottom: "none",
// //                     }}
// //                   ></div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* TAG */}
// //             <div className="inline-flex items-center gap-2 bg-[#eaf6e8] border border-green-200 text-[#2d5a3d] px-5 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm">
// //               <Sparkles size={16} />
// //               MORE THAN A COURSE, IT’S A TRANSFORMATION
// //             </div>

// //             {/* HEADING */}
// //             <h1
// //               className="
// //                 mt-6
// //                 text-[2.4rem]
// //                 sm:text-[3.3rem]
// //                 md:text-[4.5rem]
// //                 xl:text-[5rem]
// //                 2xl:text-[6rem]
// //                 leading-[1.05]
// //                 font-bold
// //                 text-[#1f3528]
// //               "
// //             >
// //               Experience The
// //               <span className="block bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
// //                 Magic Of Bali
// //               </span>
// //             </h1>

// //             {/* DESCRIPTION */}
// //             <p className="mt-6 text-gray-700 leading-relaxed text-[16px] sm:text-[18px] xl:text-[20px] max-w-2xl">
// //               Bali is a sacred destination filled with spiritual energy,
// //               tropical beauty, peaceful beaches, and healing traditions. At
// //               Bali Yoga Kendra, you will deepen your practice through yoga,
// //               meditation, breathwork, philosophy, and self-discovery.
// //             </p>

// //             {/* FEATURES */}
// //             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
// //               {features.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   className="flex items-start gap-4 bg-white/70 backdrop-blur-md border border-[#ececec] p-5 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
// //                 >
// //                   <div className="min-w-[48px] h-[48px] rounded-full bg-gradient-to-br from-orange-400 to-green-500 flex items-center justify-center text-white shadow-md">
// //                     <CheckCircle2 size={22} />
// //                   </div>

// //                   <p className="text-gray-800 font-medium leading-relaxed">
// //                     {item}
// //                   </p>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* BUTTONS */}
// //             <div className="mt-10 flex flex-col sm:flex-row gap-5">
// //               <button className="group bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:scale-105 transition duration-300 flex items-center justify-center gap-3">
// //                 Explore Our Experience

// //                 <ArrowRight
// //                   size={20}
// //                   className="group-hover:translate-x-1 transition"
// //                 />
// //               </button>

// //               <button className="border-2 border-[#2f7d4c] text-[#2f7d4c] hover:bg-[#2f7d4c] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300">
// //                 View Programs
// //               </button>
// //             </div>

// //             {/* STATS */}
// //             <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-5">
// //               {stats.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   className="bg-white/80 backdrop-blur-md border border-[#ececec] rounded-3xl p-6 text-center shadow-md hover:-translate-y-2 transition duration-300"
// //                 >
// //                   <h3 className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
// //                     {item.number}
// //                   </h3>

// //                   <p className="mt-2 text-gray-700 font-medium">
// //                     {item.label}
// //                   </p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

     
// //       </div>
// //     </section>
// //   );
// // };

// // export default BaliYogaKendraExperience;


// import React from "react";
// import {
//   Leaf,
//   Sparkles,
//   Flower2,
//   CheckCircle2,
//   ArrowRight,
// } from "lucide-react";

// import baliMeditation from "./images/yogagallery.jpg";


// const BaliYogaKendraExperience = () => {
//   const features = [
//     "Ancient Wisdom & Authentic Teachings",
//     "Meditation, Rituals & Healing Practices",
//     "Daily Yoga, Breathwork & Philosophy",
//     "Nature, Community & Self Discovery",
//   ];

//   const stats = [
//     {
//       number: "10+",
//       label: "Years Experience",
//     },
//     {
//       number: "5000+",
//       label: "Happy Students",
//     },
//     {
//       number: "100%",
//       label: "Peaceful Environment",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-[#f8f5ef]">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#fff6eb] via-[#f8f5ef] to-[#eef7ec] z-0"></div>

//       {/* Blur Effects */}
//       <div className="absolute top-[-120px] left-[-100px] w-[350px] h-[350px] bg-orange-300/20 blur-3xl rounded-full"></div>

//       <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-green-300/20 blur-3xl rounded-full"></div>

//       <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 xl:px-16 py-12 md:py-20 2xl:py-28">
//         {/* TOP SECTION */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
//           {/* LEFT IMAGE + CARD */}
//           <div className="relative group">
//             {/* Glow */}
//             <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-green-500 rounded-[35px] blur opacity-30 group-hover:opacity-50 transition duration-500"></div>

//             {/* Image container — no overflow:hidden so card can peek out below */}
//             <div className="relative rounded-[30px] shadow-2xl">
//               <div className="rounded-[30px] overflow-hidden">
//                 <img
//                   src={baliMeditation}
//                   alt="Bali Yoga"
//                   className="
//                     w-full
//                     h-[320px]
//                     sm:h-[450px]
//                     md:h-[550px]
//                     lg:h-[650px]
//                     xl:h-[720px]
//                     2xl:h-[850px]
//                     object-cover
//                     transition-transform duration-700
//                     group-hover:scale-105
//                   "
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent rounded-[30px]"></div>
//               </div>

//               {/* Floating Card — 10% overlaps image bottom, 90% sits below */}
//               {/* We use absolute bottom positioning so the card top edge is at ~90% of image height */}
//               <div
//                 className="
//                   absolute
//                   bottom-0
//                   left-0
//                   right-0
//                   translate-y-[90%]
//                   mx-4
//                   sm:mx-6
//                   bg-white/90
//                   backdrop-blur-md
//                   rounded-3xl
//                   p-5
//                   shadow-2xl
//                   border border-white/40
//                   z-10
//                 "
//               >
//                 <div className="flex items-center gap-4">
//                   <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-green-500 flex items-center justify-center text-white shadow-lg flex-shrink-0">
//                     <Flower2 size={24} />
//                   </div>

//                   <div>
//                     <h3 className="text-xl font-bold text-[#1f3528]">
//                       Bali Yoga Kendra
//                     </h3>

//                     <p className="text-sm text-gray-600">
//                       Healing • Nature • Transformation
//                     </p>
//                   </div>
//                 </div>

//                 <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
//                   Experience authentic yoga surrounded by Bali's spiritual
//                   atmosphere, lush greenery, peaceful beaches, and healing
//                   energy.
//                 </p>
//               </div>
//             </div>

//             {/* Spacer to push content below the card */}
//             {/* Card height is roughly 160px on mobile, so we reserve that space */}
//             <div className="h-[160px] sm:h-[170px] md:h-[180px]"></div>
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="relative">
//             {/* TREE STYLE DESIGN */}
//             <div className="hidden xl:block absolute right-[-120px] top-0 opacity-20 pointer-events-none">
//               <div className="relative w-[350px] h-[700px]">
//                 {[...Array(11)].map((_, i) => (
//                   <div
//                     key={i}
//                     className="absolute border border-[#d38b3c] rounded-full"
//                     style={{
//                       width: `${220 + i * 22}px`,
//                       height: `${220 + i * 22}px`,
//                       right: `${-100 + i * 8}px`,
//                       top: `${i * 42}px`,
//                       borderLeft: "none",
//                       borderBottom: "none",
//                     }}
//                   ></div>
//                 ))}
//               </div>
//             </div>

//             {/* TAG */}
//             <div className="inline-flex items-center gap-2 bg-[#eaf6e8] border border-green-200 text-[#2d5a3d] px-5 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm">
//               <Sparkles size={16} />
//               MORE THAN A COURSE, IT'S A TRANSFORMATION
//             </div>

//             {/* HEADING */}
//             <h1
//               className="
//                 mt-6
//                 text-[2.4rem]
//                 sm:text-[3.3rem]
//                 md:text-[4.5rem]
//                 xl:text-[5rem]
//                 2xl:text-[6rem]
//                 leading-[1.05]
//                 font-bold
//                 text-[#1f3528]
//               "
//             >
//               Experience The
//               <span className="block bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
//                 Magic Of Bali
//               </span>
//             </h1>

//             {/* DESCRIPTION */}
//             <p className="mt-6 text-gray-700 leading-relaxed text-[16px] sm:text-[18px] xl:text-[20px] max-w-2xl">
//               Bali is a sacred destination filled with spiritual energy,
//               tropical beauty, peaceful beaches, and healing traditions. At
//               Bali Yoga Kendra, you will deepen your practice through yoga,
//               meditation, breathwork, philosophy, and self-discovery.
//             </p>

//             {/* FEATURES */}
//             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
//               {features.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex items-start gap-4 bg-white/70 backdrop-blur-md border border-[#ececec] p-5 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
//                 >
//                   <div className="min-w-[48px] h-[48px] rounded-full bg-gradient-to-br from-orange-400 to-green-500 flex items-center justify-center text-white shadow-md">
//                     <CheckCircle2 size={22} />
//                   </div>

//                   <p className="text-gray-800 font-medium leading-relaxed">
//                     {item}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* BUTTONS */}
//             <div className="mt-10 flex flex-col sm:flex-row gap-5">
//               <button className="group bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:scale-105 transition duration-300 flex items-center justify-center gap-3">
//                 Explore Our Experience

//                 <ArrowRight
//                   size={20}
//                   className="group-hover:translate-x-1 transition"
//                 />
//               </button>

//               <button className="border-2 border-[#2f7d4c] text-[#2f7d4c] hover:bg-[#2f7d4c] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300">
//                 View Programs
//               </button>
//             </div>

//             {/* STATS */}
//             <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-5">
//               {stats.map((item, index) => (
//                 <div
//                   key={index}
//                   className="bg-white/80 backdrop-blur-md border border-[#ececec] rounded-3xl p-6 text-center shadow-md hover:-translate-y-2 transition duration-300"
//                 >
//                   <h3 className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
//                     {item.number}
//                   </h3>

//                   <p className="mt-2 text-gray-700 font-medium">
//                     {item.label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

     
//       </div>
//     </section>
//   );
// };

// export default BaliYogaKendraExperience;


import React from "react";
import {
  Leaf,
  Sparkles,
  Flower2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import baliMeditation from "./images/yogagallery.jpg";


const BaliYogaKendraExperience = () => {
  const features = [
    "Ancient Wisdom & Authentic Teachings",
    "Meditation, Rituals & Healing Practices",
    "Daily Yoga, Breathwork & Philosophy",
    "Nature, Community & Self Discovery",
  ];

  const stats = [
    {
      number: "10+",
      label: "Years Experience",
    },
    {
      number: "5000+",
      label: "Happy Students",
    },
    {
      number: "100%",
      label: "Peaceful Environment",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8f5ef]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff6eb] via-[#f8f5ef] to-[#eef7ec] z-0"></div>

      {/* Blur Effects */}
      <div className="absolute top-[-120px] left-[-100px] w-[350px] h-[350px] bg-orange-300/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-green-300/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 xl:px-16 py-12 md:py-20 2xl:py-28">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          {/* LEFT IMAGE + CARD */}
          <div className="relative group">
            {/* Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-green-500 rounded-[35px] blur opacity-30 group-hover:opacity-50 transition duration-500"></div>

            {/* Image container */}
            <div className="relative rounded-[30px] overflow-hidden shadow-2xl">
              <img
                src={baliMeditation}
                alt="Bali Yoga"
                className="
                  w-full
                  h-[320px]
                  sm:h-[450px]
                  md:h-[550px]
                  lg:h-[650px]
                  xl:h-[720px]
                  2xl:h-[850px]
                  object-cover
                  transition-transform duration-700
                  group-hover:scale-105
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
            </div>

            {/* Floating Card — pulled up so ~10% overlaps image bottom edge */}
            <div
              className="
                relative z-10
                -mt-[10%]
                mx-4
                sm:mx-6
                bg-white/90
                backdrop-blur-md
                rounded-3xl
                p-5
                shadow-2xl
                border border-white/40
              "
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-green-500 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                  <Flower2 size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1f3528]">
                    Bali Yoga Kendra
                  </h3>

                  <p className="text-sm text-gray-600">
                    Healing • Nature • Transformation
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                Experience authentic yoga surrounded by Bali's spiritual
                atmosphere, lush greenery, peaceful beaches, and healing
                energy.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative">
            {/* TREE STYLE DESIGN */}
            <div className="hidden xl:block absolute right-[-120px] top-0 opacity-20 pointer-events-none">
              <div className="relative w-[350px] h-[700px]">
                {[...Array(11)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute border border-[#d38b3c] rounded-full"
                    style={{
                      width: `${220 + i * 22}px`,
                      height: `${220 + i * 22}px`,
                      right: `${-100 + i * 8}px`,
                      top: `${i * 42}px`,
                      borderLeft: "none",
                      borderBottom: "none",
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* TAG */}
            <div className="inline-flex items-center gap-2 bg-[#eaf6e8] border border-green-200 text-[#2d5a3d] px-5 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm">
              <Sparkles size={16} />
              MORE THAN A COURSE, IT'S A TRANSFORMATION
            </div>

            {/* HEADING */}
            <h1
              className="
                mt-6
                text-[2.4rem]
                sm:text-[3.3rem]
                md:text-[4.5rem]
                xl:text-[5rem]
                2xl:text-[6rem]
                leading-[1.05]
                font-bold
                text-[#1f3528]
              "
            >
              Experience The
              <span className="block bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
                Magic Of Bali
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 text-gray-700 leading-relaxed text-[16px] sm:text-[18px] xl:text-[20px] max-w-2xl">
              Bali is a sacred destination filled with spiritual energy,
              tropical beauty, peaceful beaches, and healing traditions. At
              Bali Yoga Kendra, you will deepen your practice through yoga,
              meditation, breathwork, philosophy, and self-discovery.
            </p>

            {/* FEATURES */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white/70 backdrop-blur-md border border-[#ececec] p-5 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
                >
                  <div className="min-w-[48px] h-[48px] rounded-full bg-gradient-to-br from-orange-400 to-green-500 flex items-center justify-center text-white shadow-md">
                    <CheckCircle2 size={22} />
                  </div>

                  <p className="text-gray-800 font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col sm:flex-row gap-5">
              <button className="group bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:scale-105 transition duration-300 flex items-center justify-center gap-3">
                Explore Our Experience

                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition"
                />
              </button>

              <button className="border-2 border-[#2f7d4c] text-[#2f7d4c] hover:bg-[#2f7d4c] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300">
                View Programs
              </button>
            </div>

            {/* STATS */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-5">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-md border border-[#ececec] rounded-3xl p-6 text-center shadow-md hover:-translate-y-2 transition duration-300"
                >
                  <h3 className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-gray-700 font-medium">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

     
      </div>
    </section>
  );
};

export default BaliYogaKendraExperience;