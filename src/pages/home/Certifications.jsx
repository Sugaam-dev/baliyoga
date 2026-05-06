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

// const Certifications = () => {
//   return (
//     <section className="w-full bg-[#f7f4ee] py-16 md:py-24 px-4 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* MAIN CONTAINER */}
//         {/* <div className="bg-white rounded-[36px] shadow-2xl border border-[#eadfce] overflow-hidden"> */}
//           <div className="flex flex-col xl:flex-row">
//             {/* LEFT SIDE */}
//             <div className="xl:w-[42%] relative bg-[#234b2c]">
//               {/* IMAGE */}
//               <div className="relative h-[500px] md:h-[700px] xl:h-full overflow-hidden bg-[#234b2c]">
//                 <img
//                   src={founderImg}
//                   alt="Founder"
//                   className="w-full h-full object-contain"
//                 />

//                 {/* SOFT OVERLAY */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#234b2c]/40 via-transparent to-transparent"></div>

//                 {/* CONTENT CARD */}
//                 <div className="absolute bottom-0 left-0 w-full p-5 md:p-8 lg:p-10">
//                   <div className="bg-white/92 backdrop-blur-md rounded-[30px] p-6 md:p-8 shadow-2xl border border-[#d89b5b]/20">
//                     {/* SMALL TITLE */}
//                     <p className="uppercase tracking-[3px] text-xs text-[#d97706] font-semibold mb-3">
//                       Meet The Founder
//                     </p>

//                     {/* HEADING */}
//                     <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#234b2c] leading-tight">
//                       Yogi Balaji
//                     </h2>

//                     {/* SUBTITLE */}
//                     <p className="text-[#d97706] mt-2 font-medium">
//                       Founder, Bali Yoga Kendra
//                     </p>

//                     {/* DESCRIPTION */}
//                     <p className="text-gray-600 text-sm md:text-base leading-7 mt-5">
//                       Rooted in traditional yogic wisdom and refined through
//                       years of global teaching experience, Yogi Balaji guides
//                       students through a deeply transformative spiritual journey.
//                     </p>

//                     {/* FEATURES */}
//                     <div className="space-y-4 mt-6">
//                       {[
//                         "E-RYT 500 Certified Yoga Alliance Professional",
//                         "YACEP Continuing Education Provider",
//                         "Master in Yoga & Conscious Meditation",
//                         "Specialist in Pranayama & Breathwork Healing",
//                       ].map((item, index) => (
//                         <div
//                           key={index}
//                           className="flex items-start gap-3"
//                         >
//                           <div
//                             className={`w-2.5 h-2.5 rounded-full mt-2 ${
//                               index % 2 === 0
//                                 ? "bg-[#d97706]"
//                                 : "bg-[#234b2c]"
//                             }`}
//                           ></div>

//                           <p className="text-gray-700 text-sm leading-7">
//                             {item}
//                           </p>
//                         </div>
//                       ))}
//                     </div>

//                     {/* BUTTONS */}
//                     <div className="flex flex-wrap gap-4 mt-8">
//                       <button className="bg-[#234b2c] hover:bg-[#18331f] text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:scale-105">
//                         Learn From The Founder
//                       </button>

//                       <button className="border border-[#d97706] text-[#d97706] hover:bg-[#d97706] hover:text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300">
//                         View Full Journey
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT SIDE */}
//             <div className="xl:w-[58%] p-6 md:p-10 lg:p-14">
//               {/* HEADER */}
//               <div className="mb-12">
//                 <p className="uppercase tracking-[3px] text-sm text-[#d97706] font-semibold mb-3">
//                   International Recognition
//                 </p>

//                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#234b2c] leading-tight">
//                   Our Teachers Certifications
//                 </h2>

//                 <div className="flex items-center gap-3 mt-5">
//                   <div className="w-16 h-[2px] bg-[#d97706]"></div>
//                   <span className="text-[#d97706] text-lg">❦</span>
//                 </div>
//               </div>

//               {/* CERTIFICATE GRID */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {certifications.map((item, index) => (
//                   <div
//                     key={index}
//                     className="bg-[#fffdfa] border border-[#eadfce] rounded-[28px] p-5 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group"
//                   >
//                     {/* IMAGE */}
//                     <div className="bg-[#f7f4ee] rounded-2xl p-4 flex items-center justify-center h-[320px] overflow-hidden">
//                       <img
//                         src={item.img}
//                         alt={item.title}
//                         className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-500"
//                       />
//                     </div>

//                     {/* TITLE */}
//                     <h3 className="text-[#234b2c] text-lg md:text-xl font-semibold text-center leading-8 mt-5">
//                       {item.title}
//                     </h3>
//                   </div>
//                 ))}
//               </div>

//               {/* OPTIONAL CTA */}
              // <div className="mt-12 flex flex-wrap gap-4">
              //   <button className="bg-[#234b2c] hover:bg-[#18331f] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:scale-105">
              //     Explore Certifications
              //   </button>

              //   <button className="border border-[#d97706] text-[#d97706] hover:bg-[#d97706] hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
              //     Join Our Training
              //   </button>
              // </div>
//             </div>
//           </div>
//         {/* </div> */}
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

// const Certifications = () => {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#f7f5ef] py-14 sm:py-16 lg:py-24">
//   <div className="mx-auto w-full max-w-[1920px] 2xl:max-w-[2200px] px-4 sm:px-6 lg:px-8 xl:px-10">
//         {/* MAIN CONTAINER */}
//         <div className="bg-[#fcfaf7] rounded-[32px] border border-[#eadfce] overflow-hidden shadow-xl">
//           <div className="flex flex-col xl:flex-row">
//             {/* LEFT SIDE */}
//             <div className="xl:w-[42%] relative">
//               {/* IMAGE SECTION */}
//               <div className="relative h-[820px] sm:h-[900px] md:h-[1100px] xl:h-full overflow-hidden">
//                 {/* IMAGE */}
//                 <img
//                   src={founderImg}
//                   alt="Founder"
//                   className="w-full h-full object-cover object-center"
//                 />

//                 {/* DARK OVERLAY */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

//                 {/* CONTENT CARD */}
//                 <div className="absolute bottom-6 left-4 right-4 sm:left-6 sm:right-6 md:left-8 md:right-8">
//                   <div className="bg-[#f8f7f4]/95 backdrop-blur-md rounded-[28px] md:rounded-[32px] p-5 sm:p-7 md:p-8 shadow-2xl border border-[#e7dccd]">
//                     {/* SMALL TITLE */}
//                     <p className="uppercase tracking-[4px] text-[10px] sm:text-xs text-[#d97706] font-semibold mb-3">
//                       Meet The Founder
//                     </p>

//                     {/* NAME */}
//                     <h2 className="text-[34px] sm:text-[42px] md:text-[52px] font-serif font-bold text-[#234b2c] leading-[1.05]">
//                       Yogi Balaji
//                     </h2>

//                     {/* ROLE */}
//                     <p className="text-[#d97706] mt-2 text-sm sm:text-base font-medium">
//                       Founder, Bali Yoga Kendra
//                     </p>

//                     {/* DESCRIPTION */}
//                     <p className="text-gray-600 text-sm md:text-[15px] leading-8 mt-6">
//                       Rooted in traditional yogic wisdom and refined through
//                       years of global teaching experience, Yogi Balaji guides
//                       students through a deeply transformative spiritual journey.
//                     </p>

//                     {/* FEATURES */}
//                     <div className="space-y-4 mt-7">
//                       {[
//                         "E-RYT 500 Certified Yoga Alliance Professional",
//                         "YACEP Continuing Education Provider",
//                         "Master in Yoga & Conscious Meditation",
//                         "Specialist in Pranayama & Breathwork Healing",
//                       ].map((item, index) => (
//                         <div
//                           key={index}
//                           className="flex items-start gap-3"
//                         >
//                           <div
//                             className={`w-2.5 h-2.5 rounded-full mt-[10px] flex-shrink-0 ${
//                               index % 2 === 0
//                                 ? "bg-[#d97706]"
//                                 : "bg-[#234b2c]"
//                             }`}
//                           ></div>

//                           <p className="text-gray-700 text-[13px] sm:text-sm leading-7">
//                             {item}
//                           </p>
//                         </div>
//                       ))}
//                     </div>

//                     {/* BUTTONS */}
//                     <div className="flex flex-col sm:flex-row gap-4 mt-8">
//                       <button className="bg-[#234b2c] hover:bg-[#18331f] text-white px-6 py-4 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg">
//                         Learn From The Founder
//                       </button>

//                       <button className="border border-[#d97706] text-[#d97706] hover:bg-[#d97706] hover:text-white px-6 py-4 rounded-full text-sm font-semibold transition-all duration-300">
//                         View Full Journey
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT SIDE */}
//             <div className="xl:w-[58%] p-6 sm:p-8 md:p-10 lg:p-14">
//               {/* HEADER */}
//               <div className="mb-10 md:mb-14">
//                 <p className="uppercase tracking-[5px] text-xs sm:text-sm text-[#d97706] font-semibold mb-4">
//                   International Recognition
//                 </p>

//                 <h2 className="text-[42px] sm:text-[54px] md:text-[68px] lg:text-[74px] font-serif font-bold text-[#234b2c] leading-[1.05]">
//                   Our Teachers Certifications
//                 </h2>

//                 <div className="flex items-center gap-3 mt-6">
//                   <div className="w-16 h-[2px] bg-[#d97706]"></div>
//                   <span className="text-[#d97706] text-lg">❦</span>
//                 </div>
//               </div>

//               {/* CERTIFICATIONS GRID */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {certifications.map((item, index) => (
//                   <div
//                     key={index}
//                     className="bg-white border border-[#eadfce] rounded-[28px] p-5 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group"
//                   >
//                     {/* CERTIFICATE IMAGE */}
//                     <div className="bg-[#f7f4ee] rounded-[22px] p-4 flex items-center justify-center h-[280px] sm:h-[320px] overflow-hidden">
//                       <img
//                         src={item.img}
//                         alt={item.title}
//                         className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-500"
//                       />
//                     </div>

//                     {/* TITLE */}
//                     <h3 className="text-[#234b2c] text-lg md:text-xl font-semibold text-center leading-8 mt-5">
//                       {item.title}
//                     </h3>
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

const Certifications = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7f5ef] py-10 sm:py-14">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
        
        {/* MAIN CONTAINER */}
        <div className="bg-[#fcfaf7] rounded-[28px] border border-[#eadfce] overflow-hidden shadow-lg">
          
          {/* EQUAL HEIGHT LAYOUT */}
          <div className="grid xl:grid-cols-2 items-stretch">
            
            {/* LEFT SIDE */}
            <div className="relative h-full">
              
              {/* IMAGE SECTION */}
              <div className="relative h-full min-h-[900px] bg-[#ede7dc] overflow-hidden">
                
                {/* IMAGE */}
                <img
                  src={founderImg}
                  alt="Founder"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent"></div>

                {/* CONTENT CARD */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-[#f8f7f4]/95 backdrop-blur-sm rounded-[24px] p-5 sm:p-6 shadow-xl border border-[#e7dccd]">
                    
                    {/* SMALL TITLE */}
                    <p className="uppercase tracking-[3px] text-[10px] sm:text-xs text-[#d97706] font-semibold mb-3">
                      Meet The Founder
                    </p>

                    {/* NAME */}
                    <h2 className="text-[30px] sm:text-[40px] md:text-[48px] font-serif font-bold text-[#234b2c] leading-[1.1]">
                      Yogi Balaji
                    </h2>

                    {/* ROLE */}
                    <p className="text-[#d97706] mt-2 text-sm sm:text-base font-medium">
                      Founder, Bali Yoga Kendra
                    </p>

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 text-sm md:text-[15px] leading-7 mt-5">
                      Rooted in traditional yogic wisdom and refined through
                      years of global teaching experience, Yogi Balaji guides
                      students through a deeply transformative spiritual journey.
                    </p>

                    {/* FEATURES */}
                    <div className="space-y-3 mt-6">
                      {[
                        "E-RYT 500 Certified Yoga Alliance Professional",
                        "YACEP Continuing Education Provider",
                        "Master in Yoga & Conscious Meditation",
                        "Specialist in Pranayama & Breathwork Healing",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3"
                        >
                          <div
                            className={`w-2.5 h-2.5 rounded-full mt-[9px] flex-shrink-0 ${
                              index % 2 === 0
                                ? "bg-[#d97706]"
                                : "bg-[#234b2c]"
                            }`}
                          ></div>

                          <p className="text-gray-700 text-[13px] sm:text-sm leading-6">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* BUTTONS */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-7">
                      <button className="bg-[#234b2c] hover:bg-[#18331f] text-white px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300">
                        Learn From The Founder
                      </button>

                      <button className="border border-[#d97706] text-[#d97706] hover:bg-[#d97706] hover:text-white px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300">
                        View Full Journey
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="h-full p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              
              {/* HEADER */}
              <div className="mb-10">
                <p className="uppercase tracking-[4px] text-xs sm:text-sm text-[#d97706] font-semibold mb-4">
                  International Recognition
                </p>

                <h2 className="text-[34px] sm:text-[46px] md:text-[58px] lg:text-[64px] font-serif font-bold text-[#234b2c] leading-[1.05]">
                  Our Teachers Certifications
                </h2>

                <div className="flex items-center gap-3 mt-5">
                  <div className="w-14 h-[2px] bg-[#d97706]"></div>
                  <span className="text-[#d97706] text-lg">❦</span>
                </div>
              </div>

              {/* CERTIFICATIONS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {certifications.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#eadfce] rounded-[24px] p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  >
                    
                    {/* CERTIFICATE IMAGE */}
                    <div className="bg-[#f7f4ee] rounded-[20px] p-4 flex items-center justify-center h-[220px] sm:h-[240px] overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-[#234b2c] text-base md:text-lg font-semibold text-center leading-7 mt-4">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;