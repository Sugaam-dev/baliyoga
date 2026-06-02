// import React from "react";
// import founderImg from "./images/balitemple.JPEG";
// import cert1 from "./images/yoga-alliance-usa-certified-200.jpeg";
// import cert2 from "./images/yoga-alliance-usa-certified.jpeg";
// import cert3 from "./images/Internatonal-yoga.jpeg";
// import cert4 from "./images/Internatonal-yoga-organization.jpeg";

// const certifications = [
//   {
//     img: cert1,
//     title: "Yoga Alliance ERYT 500",
//   },
//   {
//     img: cert2,
//     title: "Traditional Hatha Yoga Certification",
//   },
//   {
//     img: cert3,
//     title: "Ashtanga Yoga (Mysore)",
//   },
//   {
//     img: cert4,
//     title: "Meditation & Breathwork Certification",
//   },
// ];

// const leadershipCards = [
//   {
//     icon: "🪷",
//     title: "Visionary Leader",
//     description: "Inspiring conscious growth through authentic yoga guidance.",
//   },
//   {
//     icon: "⛰️",
//     title: "Community Builder",
//     description: "Creating supportive spaces that uplift students worldwide.",
//   },
//   {
//     icon: "🧘",
//     title: "Yoga Practitioner",
//     description: "Embodies yogic wisdom in every class, retreat, and training.",
//   },
// ];

// const CardContent = () => (
//   <>
//     {/* SMALL TITLE */}
//     <p className="uppercase tracking-[3px] text-[10px] sm:text-xs text-[#d97706] font-semibold mb-3">
//       Meet The Founder
//     </p>

//     {/* NAME */}
//     <h2 className="text-[30px] sm:text-[40px] md:text-[48px] font-serif text-[#234b2c] leading-[1.1]">
//       Yogi Balaji
//     </h2>

//     {/* ROLE */}
//     <p className="text-[#d97706] mt-2 text-sm sm:text-base font-medium">
//       Founder, Bali Yoga Kendra
//     </p>

//     {/* DESCRIPTION */}
//     <p className="mx-auto mt-6 max-w-3xl px-2 text-sm leading-relaxed text-[#5c5c5c] sm:text-base lg:text-lg 2xl:max-w-5xl 2xl:text-2xl">
//       Rooted in traditional yogic wisdom and refined through
//       years of global teaching experience, Yogi Balaji guides
//       students through a deeply transformative spiritual journey.
//     </p>

//     {/* FEATURES */}
//     <div className="space-y-3 mt-6 ">
//       {[
//         "E-RYT 500 Certified Yoga Alliance Professional",
//         "YACEP Continuing Education Provider",
//         "Master in Yoga & Conscious Meditation",
//         "Specialist in Pranayama & Breathwork Healing",
//       ].map((item, index) => (
//         <div
//           key={index}
//           className="flex items-start gap-3"
//         >
//           <div
//             className={`w-2.5 h-2.5 rounded-full mt-[9px] flex-shrink-0 ${
//               index % 2 === 0
//                 ? "bg-[#d97706]"
//                 : "bg-[#234b2c]"
//             }`}
//           ></div>

//           <p className="text-gray-700 text-[13px] sm:text-sm leading-6">
//             {item}
//           </p>
//         </div>
//       ))}
//     </div>

//     {/* BUTTONS */}
//     <div className="flex flex-col sm:flex-row gap-3 mt-7">
//       <button className="bg-[#234b2c] hover:bg-[#18331f] text-white px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300">
//         Learn From The Founder
//       </button>

//       <button className="border border-[#d97706] text-[#d97706] hover:bg-[#d97706] hover:text-white px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300">
//         View Full Journey
//       </button>
//     </div>
//   </>
// );

// const Certifications = () => {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#f7f5ef] py-10 sm:py-14">
//       <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
        
//         {/* MAIN CONTAINER */}
//         <div className="bg-[#fcfaf7] rounded-[28px] border border-[#eadfce] overflow-hidden shadow-lg">
          
//           {/* EQUAL HEIGHT LAYOUT */}
//           <div className="grid xl:grid-cols-2 items-stretch">
            
//             {/* LEFT SIDE */}
//             <div className="relative h-full">
              
//               {/* IMAGE SECTION */}
//               <div className="relative bg-[#ede7dc] overflow-hidden xl:h-full xl:min-h-[900px]">
                
//                 {/* IMAGE — fixed height on mobile, full height on xl */}
//                 <img
//                   src={founderImg}
//                   alt="Founder"
//                   className="
//                     w-full object-cover object-center
//                     h-[420px] sm:h-[560px] md:h-[680px]
//                     xl:absolute xl:inset-0 xl:h-full xl:w-full
//                   "
//                 />

//                 {/* OVERLAY */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent"></div>

//                 {/* CONTENT CARD — desktop only (xl+): absolute inside image */}
//                 <div className="hidden xl:block absolute bottom-5 left-5 right-5">
//                   <div className="bg-[#f8f7f4]/95 backdrop-blur-sm rounded-[24px] p-5 sm:p-6 shadow-xl border border-[#e7dccd]">
//                     <CardContent />
//                   </div>
//                 </div>
//               </div>

//               {/* CONTENT CARD — mobile only (below xl): flows below image with -mt overlap */}
//               <div className="xl:hidden relative z-10 -mt-[10%] mx-4 sm:mx-6">
//                 <div className="bg-[#f8f7f4]/95 backdrop-blur-sm rounded-[24px] p-5 sm:p-6 shadow-xl border border-[#e7dccd]">
//                   <CardContent />
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT SIDE */}
//             <div className="h-full p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              
//               {/* HEADER */}
//               <div className="mb-10">
//                 <p className="uppercase tracking-[4px] text-xs sm:text-sm text-[#d97706] font-semibold mb-4">
//                   International Recognition
//                 </p>

//                 <h2 className="text-[25px] sm:text-[35px] md:text-[45px] lg:text-[55px] font-serif text-[#234b2c] leading-[1.05]">
//                   Our Teachers Certifications
//                 </h2>

//                 <div className="flex items-center gap-3 mt-5">
//                   <div className="w-14 h-[2px] bg-[#d97706]"></div>
//                   <span className="text-[#d97706] text-lg">❦</span>
//                 </div>
//               </div>

              

//               {/* CERTIFICATIONS GRID */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 {certifications.map((item, index) => (
//                   <div
//                     key={index}
//                     className="bg-white border border-[#eadfce] rounded-[24px] p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
//                   >
                    
//                     {/* CERTIFICATE IMAGE */}
//                     <div className="bg-[#f7f4ee] rounded-[20px] p-4 flex items-center justify-center h-[220px] sm:h-[240px] overflow-hidden">
//                       <img
//                         src={item.img}
//                         alt={item.title}
//                         className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-500"
//                       />
//                     </div>

//                     {/* TITLE */}
//                     <h3 className="text-[#234b2c] text-base md:text-lg font-semibold text-center leading-7 mt-4">
//                       {item.title}
//                     </h3>
//                   </div>
//                 ))}
//               </div>

//               {/* HIGHLIGHT CARDS */}
//               {/* HIGHLIGHT CARDS */}
//               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 xl:mt-14 mb-8">
//                 {leadershipCards.map((card, index) => (
//                   <div
//                     key={index}
//                     className="bg-white border border-[#eadfce] rounded-[24px] p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//                   >
//                     <div className="text-4xl mb-4">{card.icon}</div>
//                     <h3 className="text-[#234b2c] text-xl font-semibold mb-3">
//                       {card.title}
//                     </h3>
//                     <p className="mx-auto mt-6 max-w-3xl px-2 text-sm leading-relaxed text-[#5c5c5c] sm:text-base lg:text-lg 2xl:max-w-5xl 2xl:text-2xl">
//                       {card.description}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;



// import React from "react";
// import founderImg from "./images/balitemple.JPEG";
// import cert1 from "./images/yoga-alliance-usa-certified-200.jpeg";
// import cert2 from "./images/yoga-alliance-usa-certified.jpeg";
// import cert3 from "./images/Internatonal-yoga.jpeg";
// import cert4 from "./images/Internatonal-yoga-organization.jpeg";

// const certifications = [
//   {
//     img: cert1,
//     title: "Yoga Alliance ERYT 500",
//   },
//   {
//     img: cert2,
//     title: "Traditional Hatha Yoga Certification",
//   },
//   {
//     img: cert3,
//     title: "Ashtanga Yoga (Mysore)",
//   },
//   {
//     img: cert4,
//     title: "Meditation & Breathwork Certification",
//   },
// ];

// const leadershipCards = [
//   {
//     icon: "🪷",
//     title: "Visionary Leader",
//     description: "Inspiring conscious growth through authentic yoga guidance.",
//   },
//   {
//     icon: "⛰️",
//     title: "Community Builder",
//     description: "Creating supportive spaces that uplift students worldwide.",
//   },
//   {
//     icon: "🧘",
//     title: "Yoga Practitioner",
//     description: "Embodies yogic wisdom in every class, retreat, and training.",
//   },
// ];

// const Certifications = () => {
//   return (
//     <div className="w-full bg-[#faf8f5] text-[#234b2c] antialiased selection:bg-[#d97706]/20 selection:text-[#d97706]">
      
//       {/* SECTION 1: MEET THE FOUNDER HERO */}
//       {/* <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
//       <section className="relative w-full overflow-hidden bg-[#f7f5ef] py-10 sm:py-14">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
//           {/* Left Column: Image with Elegant Frame */}
//           <div className="lg:col-span-5 relative group">
//             <div className="absolute inset-0 border border-[#eadfce] rounded-[32px] translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
//             <div className="relative h-[450px] sm:h-[550px] lg:h-[600px] w-full rounded-[32px] overflow-hidden shadow-md bg-[#ede7dc]">
//               <img
//                 src={founderImg}
//                 alt="Yogi Ranjan - Founder"
//                 className="w-full h-full object-cover object-center transform transition duration-700 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
//             </div>
//           </div>

//           {/* Right Column: Founder Bio Content */}
//           <div className="lg:col-span-7 flex flex-col justify-center">
//             <span className="uppercase tracking-[3px] text-xs font-bold text-[#d97706] mb-3 inline-block">
//               Meet The Founder
//             </span>
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#234b2c] tracking-tight leading-none mb-2">
//               Yogi Ranjan
//             </h1>
//             <p className="text-[#d97706] text-base sm:text-lg font-medium mb-6">
//               Founder, Bali Yoga Kendra
//             </p>
            
//             <p className="text-[#5c5c5c] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
//               Rooted in traditional yogic wisdom and refined through years of global teaching experience, 
//               Yogi Ranjan guides students through a deeply transformative spiritual journey.
//             </p>

//             {/* Accent Separator */}
//             <div className="h-px w-20 bg-[#eadfce] mb-8"></div>

//             {/* Bullet Highlights */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
//               {[
//                 "E-RYT 500 Certified Yoga Alliance Professional",
//                 "YACEP Continuing Education Provider",
//                 "Master in Yoga & Conscious Meditation",
//                 "Specialist in Pranayama & Breathwork Healing",
//               ].map((item, index) => (
//                 <div key={index} className="flex items-start gap-3">
//                   <span className="text-[#d97706] text-base mt-0.5 flex-shrink-0">✦</span>
//                   <p className="text-sm sm:text-base text-gray-700 leading-snug">
//                     {item}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
//               <button className="bg-[#234b2c] hover:bg-[#18331f] text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-300 text-center">
//                 Learn From The Founder
//               </button>
//               <button className="border border-[#d97706] text-[#d97706] hover:bg-[#d97706] hover:text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 text-center">
//                 View Full Journey
//               </button>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* SECTION 2: CERTIFICATIONS GRID */}
//       {/* <section className="bg-[#f4f0e6] py-16 sm:py-24 border-y border-[#eadfce]"> */}
//      <section className="relative w-full overflow-hidden bg-[#f7f5ef] py-10 sm:py-14">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           {/* Section Header */}
//           <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
//             <span className="uppercase tracking-[4px] text-xs font-bold text-[#d97706] mb-3 inline-block">
//               International Recognition
//             </span>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#234b2c] tracking-tight">
//               Our Teachers Certifications
//             </h2>
//             <div className="flex items-center justify-center gap-3 mt-4">
//               <div className="w-10 h-[1px] bg-[#d97706]"></div>
//               <span className="text-[#d97706] text-base">❦</span>
//               <div className="w-10 h-[1px] bg-[#d97706]"></div>
//             </div>
//           </div>

//           {/* Cards Grid Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {certifications.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white border border-[#eadfce]/60 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
//               >
//                 {/* Certificate Display Area */}
//                 <div className="bg-[#faf8f5] rounded-2xl p-4 flex items-center justify-center aspect-[4/3] sm:aspect-square overflow-hidden border border-[#eadfce]/30">
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition duration-500"
//                   />
//                 </div>

//                 {/* Card Title */}
//                 <h3 className="text-[#234b2c] text-sm sm:text-base font-semibold text-center leading-snug mt-4 group-hover:text-[#d97706] transition-colors duration-300">
//                   {item.title}
//                 </h3>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* SECTION 3: CORE LEADERSHIP PILLARS */}
//       {/* <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
//         <section className="relative w-full overflow-hidden bg-[#f7f5ef] py-10 sm:py-14">
//         <div className="text-center max-w-xl mx-auto mb-14">
//           <span className="uppercase tracking-[3px] text-xs font-bold text-[#d97706] mb-2 inline-block">
//             Our Core Pillars
//           </span>
//           <h2 className="text-3xl sm:text-4xl font-serif text-[#234b2c]">
//             The Pillars of Leadership
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {leadershipCards.map((card, index) => (
//             <div
//               key={index}
//               className="bg-white border border-[#eadfce] rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
//             >
//               {/* Icon Frame */}
//               <div className="w-16 h-16 bg-[#faf8f5] border border-[#eadfce] rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner group-hover:bg-[#d97706]/10 group-hover:border-[#d97706] transition-all duration-300">
//                 {card.icon}
//               </div>
              
//               {/* Pillar Title */}
//               <h3 className="text-[#234b2c] text-xl font-semibold mb-3 font-serif">
//                 {card.title}
//               </h3>
              
//               {/* Pillar Description */}
//               <p className="text-sm sm:text-base text-[#5c5c5c] leading-relaxed">
//                 {card.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Certifications;


import React from "react";
import founderImg from "./images/balitemple.JPEG";
import cert1 from "./images/yoga-alliance-usa-certified-200.jpeg";
import cert2 from "./images/yoga-alliance-usa-certified.jpeg";
import cert3 from "./images/Internatonal-yoga.jpeg";
import cert4 from "./images/Internatonal-yoga-organization.jpeg";

const certifications = [
  {
    img: cert1,
    title: "Yoga Alliance ERYT 500",
  },
  {
    img: cert2,
    title: "Traditional Hatha Yoga Certification",
  },
  {
    img: cert3,
    title: "Ashtanga Yoga (Mysore)",
  },
  {
    img: cert4,
    title: "Meditation & Breathwork Certification",
  },
];

const leadershipCards = [
  {
    icon: "🪷",
    title: "Visionary Leader",
    description: "Inspiring conscious growth through authentic yoga guidance.",
  },
  {
    icon: "⛰️",
    title: "Community Builder",
    description: "Creating supportive spaces that uplift students worldwide.",
  },
  {
    icon: "🧘",
    title: "Yoga Practitioner",
    description: "Embodies yogic wisdom in every class, retreat, and training.",
  },
];

const Certifications = () => {
  return (
    <div className="w-full bg-[#faf8f5] text-[#234b2c] antialiased selection:bg-[#d97706]/20 selection:text-[#d97706]">
      {/* Outer wrapper limiting absolute maximum width for ultra-wide displays (1440px - 2560px) to maintain your layout balance */}
      <div className="w-full max-w-[1440px] 2xl:max-w-[2160px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* SECTION 1: MEET THE FOUNDER HERO */}
        <section className="relative w-full overflow-hidden bg-[#f7f5ef] py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image with Elegant Frame */}
            <div className="lg:col-span-5 relative group w-full max-w-md lg:max-w-none mx-auto">
              <div className="absolute inset-0 border border-[#eadfce] rounded-[32px] translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
              <div className="relative h-[450px] sm:h-[550px] lg:h-[600px] w-full rounded-[32px] overflow-hidden shadow-md bg-[#ede7dc]">
                <img
                  src={founderImg}
                  alt="Yogi Ranjan - Founder"
                  className="w-full h-full object-cover object-center transform transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Right Column: Founder Bio Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="uppercase tracking-[3px] text-xs font-bold text-[#d97706] mb-3 inline-block">
                Meet The Founder
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#234b2c] tracking-tight leading-none mb-2">
                Yogi Ranjan
              </h1>
              <p className="text-[#d97706] text-base sm:text-lg font-medium mb-6">
                Founder, Bali Yoga Kendra
              </p>
              
              <p  className=" mx-auto mt-6 max-w-3xl px-2 text-sm leading-relaxed text-[#5c5c5c] sm:text-base lg:text-lg 2xl:max-w-5xl 2xl:text-2xl">
                Rooted in traditional yogic wisdom and refined through years of global teaching experience, 
                Yogi Ranjan guides students through a deeply transformative spiritual journey.
              </p>

              {/* Accent Separator */}
              <div className="h-px w-20 bg-[#eadfce] mb-8"></div>

              {/* Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "E-RYT 500 Certified Yoga Alliance Professional",
                  "YACEP Continuing Education Provider",
                  "Master in Yoga & Conscious Meditation",
                  "Specialist in Pranayama & Breathwork Healing",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-[#d97706] text-base mt-0.5 flex-shrink-0">✦</span>
                    <p className="text-sm sm:text-base text-gray-700 leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button className="bg-[#234b2c] hover:bg-[#18331f] text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  Learn From The Founder
                </button>
                <button className="border border-[#d97706] text-[#d97706] hover:bg-[#d97706] hover:text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 text-center">
                  View Full Journey
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: CERTIFICATIONS GRID */}
        <section className="relative w-full overflow-hidden bg-[#f7f5ef] py-10 sm:py-14">
          <div className="w-full">
            
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
              <span className="uppercase tracking-[4px] text-xs font-bold text-[#d97706] mb-3 inline-block">
                International Recognition
              </span>
              <h2 className="text-[25px] sm:text-[35px] md:text-[45px] lg:text-[55px] font-serif text-[#234b2c] leading-[1.05]">
                Our Teachers Certifications
              </h2>
              <div className="flex items-center justify-center gap-3 mt-4">
                <div className="w-10 h-[1px] bg-[#d97706]"></div>
                <span className="text-[#d97706] text-base">❦</span>
                <div className="w-10 h-[1px] bg-[#d97706]"></div>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#eadfce]/60 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
                >
                  {/* Certificate Display Area */}
                  <div className="bg-[#faf8f5] rounded-2xl p-4 flex items-center justify-center aspect-[4/3] sm:aspect-square overflow-hidden border border-[#eadfce]/30">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-[#234b2c] text-sm sm:text-base font-semibold text-center leading-snug mt-4 group-hover:text-[#d97706] transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 3: CORE LEADERSHIP PILLARS */}
        <section className="relative w-full overflow-hidden bg-[#f7f5ef] py-10 sm:py-14">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="uppercase tracking-[3px] text-xs font-bold text-[#d97706] mb-2 inline-block">
              Our Core Pillars
            </span>
          <h2 className="text-[25px] sm:text-[35px] md:text-[42px] lg:text-[48px] xl:text-[56px] font-serif text-[#234b2c] leading-[1.05] whitespace-nowrap">
            The Pillars of Leadership
          </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipCards.map((card, index) => (
              <div
                key={index}
                className="bg-white border border-[#eadfce] rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Icon Frame */}
                <div className="w-16 h-16 bg-[#faf8f5] border border-[#eadfce] rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner group-hover:bg-[#d97706]/10 group-hover:border-[#d97706] transition-all duration-300">
                  {card.icon}
                </div>
                
                {/* Pillar Title */}
                <h3 className="text-[#234b2c] text-xl font-semibold mb-3 font-serif">
                  {card.title}
                </h3>
                
                {/* Pillar Description */}
                <p className="text-sm sm:text-base text-[#5c5c5c] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Certifications;