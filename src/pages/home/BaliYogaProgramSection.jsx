// // import React from "react";
// // import {
// //   CheckCircle2,
// //   CalendarDays,
// //   ArrowRight,
// //   Leaf,
// // } from "lucide-react";

// // const BaliYogaProgramSection = () => {
// //   const includes = [
// //     "21/28 Days Comfortable Accommodation",
// //     "3 Sattvic Meals Daily",
// //     "200 Hour Yoga Alliance Certification",
// //     "Course Materials & Manual",
// //     "Daily Yoga & Meditations",
// //     "Nature & Cultural Excursions",
// //     "Airport Pickup (DPS)",
// //     "Community & Lifetime Support",
// //   ];

// //   const batches = [
// //     {
// //       day: "10",
// //       month: "MAY",
// //       date: "May 10 – May 30, 2026",
// //       status: "5 Seats Left",
// //     },
// //     {
// //       day: "02",
// //       month: "JUN",
// //       date: "June 02 – June 22, 2026",
// //       status: "Filling Fast",
// //     },
// //     {
// //       day: "24",
// //       month: "JUN",
// //       date: "June 24 – July 14, 2026",
// //       status: "Limited Seats",
// //     },
// //     {
// //       day: "24",
// //       month: "JUN",
// //       date: "June 24 – July 14, 2026",
// //       status: "Limited Seats",
// //     },
// //     {
// //       day: "24",
// //       month: "JUN",
// //       date: "June 24 – July 14, 2026",
// //       status: "Limited Seats",
// //     },
// //     {
// //       day: "24",
// //       month: "JUN",
// //       date: "June 24 – July 14, 2026",
// //       status: "Limited Seats",
// //     },
    
// //   ];

// //   const benefits = [
// //     "21 Days / 20 Nights Accommodation",
// //     "All Meals & Certification",
// //     "Course Material & Manual",
// //     "Lifetime Support",
// //     "Flexible Payment Options",
// //   ];

// //   return (
// //     <section className="relative w-full overflow-hidden bg-[#f7f5ef] py-14 sm:py-16 lg:py-24">
// //       {/* Background Effects */}
// //       <div className="absolute left-[-120px] top-[-100px] h-[280px] w-[280px] rounded-full bg-orange-200/40 blur-3xl" />
// //       <div className="absolute bottom-[-120px] right-[-100px] h-[320px] w-[320px] rounded-full bg-green-200/40 blur-3xl" />

// //       <div className="relative mx-auto w-full max-w-[1700px] px-4 sm:px-6 lg:px-8">
// //         {/* Heading */}
// //         <div className="mb-12 text-center">
// //           <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-300 bg-white px-5 py-2 text-sm font-semibold tracking-wide text-orange-600 shadow-sm">
// //             <Leaf className="h-4 w-4" />
// //             Bali Yoga Kendra
// //           </span>

// //           <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-tight text-[#18392b] sm:text-4xl lg:text-5xl">
// //             Begin Your Transformational
// //             <span className="block text-orange-500">
// //               Yoga Journey In Bali
// //             </span>
// //           </h2>

// //           <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
// //             Immerse yourself in authentic yogic living surrounded by Bali’s
// //             peaceful nature, spiritual culture, and healing energy.
// //           </p>
// //         </div>

// //         {/* Main Grid */}
// //         <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
// //           {/* Program Includes */}
// //           <div className="group rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:p-8 xl:col-span-3">
// //             <div className="mb-7 flex items-center gap-3">
// //               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100">
// //                 <Leaf className="h-6 w-6 text-orange-500" />
// //               </div>

// //               <div>
// //                 <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-500">
// //                   Program
// //                 </p>
// //                 <h3 className="text-xl font-bold text-[#18392b]">
// //                   Includes
// //                 </h3>
// //               </div>
// //             </div>

// //             <div className="space-y-4">
// //               {includes.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#fafaf7] p-3 transition-all duration-300 hover:border-orange-200 hover:bg-orange-50"
// //                 >
// //                   <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />

// //                   <p className="text-sm leading-relaxed text-gray-700">
// //                     {item}
// //                   </p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Upcoming Batches */}
// //           <div className="group rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:p-8 xl:col-span-5">
// //             <div className="mb-7 flex items-center gap-3">
// //               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100">
// //                 <CalendarDays className="h-6 w-6 text-green-700" />
// //               </div>

// //               <div>
// //                 <p className="text-xs font-semibold uppercase tracking-[3px] text-green-700">
// //                   Schedule
// //                 </p>
// //                 <h3 className="text-xl font-bold text-[#18392b]">
// //                   Upcoming Batches
// //                 </h3>
// //               </div>
// //             </div>

// //             <div className="space-y-4">
// //               {batches.map((batch, index) => (
// //                 <div
// //                   key={index}
// //                   className="flex flex-col gap-4 rounded-3xl border border-gray-100 bg-[#fafaf7] p-4 transition-all duration-300 hover:border-green-200 hover:bg-green-50/40 sm:flex-row sm:items-center sm:justify-between"
// //                 >
// //                   {/* Date Box */}
// //                   <div className="flex items-center gap-4">
// //                     <div className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl border border-orange-200 bg-white shadow-sm">
// //                       <span className="text-xl font-bold text-[#18392b]">
// //                         {batch.day}
// //                       </span>
// //                       <span className="text-xs font-semibold tracking-wide text-orange-500">
// //                         {batch.month}
// //                       </span>
// //                     </div>

// //                     <div>
// //                       <p className="text-base font-semibold text-[#18392b]">
// //                         {batch.date}
// //                       </p>

// //                       <p className="mt-1 text-sm font-medium text-orange-500">
// //                         {batch.status}
// //                       </p>
// //                     </div>
// //                   </div>

// //                   {/* Button */}
// //                   <button className="group/button inline-flex items-center justify-center gap-2 rounded-full bg-[#18392b] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-500">
// //                     Apply Now
// //                     <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
// //                   </button>
// //                 </div>
// //               ))}
// //             </div>

// //             <div className="mt-7 flex justify-center">
// //               <button className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-6 py-3 text-sm font-semibold text-[#18392b] transition-all duration-300 hover:border-orange-300 hover:bg-orange-50">
// //                 View All Batches
// //                 <ArrowRight className="h-4 w-4" />
// //               </button>
// //             </div>
// //           </div>

// //           {/* Investment */}
// //           <div className="group rounded-[28px] border border-white/60 bg-gradient-to-br from-[#18392b] to-[#27553f] p-6 text-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:p-8 xl:col-span-2">
// //             <div className="text-center">
// //               <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-300">
// //                 Course Investment
// //               </p>

// //               <h3 className="mt-3 text-lg font-semibold text-orange-100">
// //                 All-Inclusive Package
// //               </h3>

// //               <div className="my-8">
// //                 <p className="text-sm text-green-100">
// //                   Starting From
// //                 </p>

// //                 <h2 className="mt-2 text-5xl font-bold tracking-tight">
// //                   $2,200
// //                 </h2>

// //                 <p className="mt-3 text-sm text-green-100">
// //                   Flexible Payment Options
// //                 </p>
// //               </div>

// //               <button className="w-full rounded-full bg-orange-500 px-5 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-orange-400">
// //                 APPLY NOW
// //               </button>
// //             </div>
// //           </div>

// //           {/* What You Get */}
// //           <div className="group rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:p-8 xl:col-span-2">
// //             <div className="mb-7 text-center">
// //               <p className="text-xs font-semibold uppercase tracking-[3px] text-green-700">
// //                 Benefits
// //               </p>

// //               <h3 className="mt-2 text-2xl font-bold text-[#18392b]">
// //                 What You Get
// //               </h3>
// //             </div>

// //             <div className="space-y-4">
// //               {benefits.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#fafaf7] p-3 transition-all duration-300 hover:border-green-200 hover:bg-green-50/40"
// //                 >
// //                   <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />

// //                   <p className="text-sm leading-relaxed text-gray-700">
// //                     {item}
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

// // export default BaliYogaProgramSection;



// import React, { useState } from "react";
// import {
//   CheckCircle2,
//   CalendarDays,
//   ArrowRight,
//   Leaf,
//   X,
// } from "lucide-react";

// const BaliYogaProgramSection = () => {
//   const [showAllBatches, setShowAllBatches] = useState(false);

//   const includes = [
//     "21/28 Days Comfortable Accommodation",
//     "3 Sattvic Meals Daily",
//     "200 Hour Yoga Alliance Certification",
//     "Course Materials & Manual",
//     "Daily Yoga & Meditations",
//     "Nature & Cultural Excursions",
//     "Airport Pickup (DPS)",
//     "Community & Lifetime Support",
//   ];

//   const batches = [
//     {
//       day: "10",
//       month: "MAY",
//       date: "May 10 – May 30, 2026",
//       status: "5 Seats Left",
//     },
//     {
//       day: "02",
//       month: "JUN",
//       date: "June 02 – June 22, 2026",
//       status: "Filling Fast",
//     },
//     {
//       day: "24",
//       month: "JUN",
//       date: "June 24 – July 14, 2026",
//       status: "Limited Seats",
//     },
//   ];

//   const allBatches = [
//     {
//       day: "10",
//       month: "MAY",
//       title: "200 Hour Yoga Teacher Training",
//       date: "May 10 – May 30, 2026",
//       seats: "5 Seats Left",
//     },
//     {
//       day: "02",
//       month: "JUN",
//       title: "Meditation & Healing Retreat",
//       date: "June 02 – June 22, 2026",
//       seats: "Filling Fast",
//     },
//     {
//       day: "24",
//       month: "JUN",
//       title: "Advanced Yoga Immersion",
//       date: "June 24 – July 14, 2026",
//       seats: "Limited Seats",
//     },
//     {
//       day: "15",
//       month: "JUL",
//       title: "300 Hour Yoga TTC",
//       date: "July 15 – August 04, 2026",
//       seats: "Early Bird Open",
//     },
//     {
//       day: "08",
//       month: "AUG",
//       title: "Bali Wellness Retreat",
//       date: "August 08 – August 18, 2026",
//       seats: "Booking Open",
//     },
//     {
//       day: "01",
//       month: "SEP",
//       title: "Sound Healing Certification",
//       date: "September 01 – September 10, 2026",
//       seats: "7 Seats Left",
//     },
//   ];

//   const benefits = [
//     "21 Days / 20 Nights Accommodation",
//     "All Meals & Certification",
//     "Course Material & Manual",
//     "Lifetime Support",
//     "Flexible Payment Options",
//   ];

//   return (
//     <>
//       <section className="relative w-full overflow-hidden bg-[#f7f5ef] py-14 sm:py-16 lg:py-24">
//         {/* Background Effects */}
//         <div className="absolute left-[-120px] top-[-100px] h-[280px] w-[280px] rounded-full bg-orange-200/40 blur-3xl" />
//         <div className="absolute bottom-[-120px] right-[-100px] h-[320px] w-[320px] rounded-full bg-green-200/40 blur-3xl" />

//         <div className="relative mx-auto w-full max-w-[1700px] px-4 sm:px-6 lg:px-8">
//           {/* Heading */}
//           <div className="mb-12 text-center">
//             <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-300 bg-white px-5 py-2 text-sm font-semibold tracking-wide text-orange-600 shadow-sm">
//               <Leaf className="h-4 w-4" />
//               Bali Yoga Kendra
//             </span>

//             <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-tight text-[#18392b] sm:text-4xl lg:text-5xl">
//               Begin Your Transformational
//               <span className="block text-orange-500">
//                 Yoga Journey In Bali
//               </span>
//             </h2>

//             <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
//               Immerse yourself in authentic yogic living surrounded by Bali’s
//               peaceful nature, spiritual culture, and healing energy.
//             </p>
//           </div>

//           {/* Main Grid */}
//           <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
//             {/* Program Includes */}
//             <div className="rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-md sm:p-8 xl:col-span-3">
//               <div className="mb-7 flex items-center gap-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100">
//                   <Leaf className="h-6 w-6 text-orange-500" />
//                 </div>

//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-500">
//                     Program
//                   </p>
//                   <h3 className="text-xl font-bold text-[#18392b]">
//                     Includes
//                   </h3>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 {includes.map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#fafaf7] p-3 hover:border-orange-200 hover:bg-orange-50"
//                   >
//                     <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />

//                     <p className="text-sm leading-relaxed text-gray-700">
//                       {item}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Upcoming Batches */}
//             <div className="rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-md sm:p-8 xl:col-span-5">
//               <div className="mb-7 flex items-center gap-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100">
//                   <CalendarDays className="h-6 w-6 text-green-700" />
//                 </div>

//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-[3px] text-green-700">
//                     Schedule
//                   </p>
//                   <h3 className="text-xl font-bold text-[#18392b]">
//                     Upcoming Batches
//                   </h3>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 {batches.map((batch, index) => (
//                   <div
//                     key={index}
//                     className="flex flex-col gap-4 rounded-3xl border border-gray-100 bg-[#fafaf7] p-4 hover:border-green-200 hover:bg-green-50/40 sm:flex-row sm:items-center sm:justify-between"
//                   >
//                     <div className="flex items-center gap-4">
//                       <div className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl border border-orange-200 bg-white shadow-sm">
//                         <span className="text-xl font-bold text-[#18392b]">
//                           {batch.day}
//                         </span>
//                         <span className="text-xs font-semibold tracking-wide text-orange-500">
//                           {batch.month}
//                         </span>
//                       </div>

//                       <div>
//                         <p className="text-base font-semibold text-[#18392b]">
//                           {batch.date}
//                         </p>

//                         <p className="mt-1 text-sm font-medium text-orange-500">
//                           {batch.status}
//                         </p>
//                       </div>
//                     </div>

//                     <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#18392b] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-500">
//                       Apply Now
//                       <ArrowRight className="h-4 w-4" />
//                     </button>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-7 flex justify-center">
//                 <button
//                   onClick={() => setShowAllBatches(true)}
//                   className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-6 py-3 text-sm font-semibold text-[#18392b] transition-all duration-300 hover:border-orange-300 hover:bg-orange-50"
//                 >
//                   View All Batches
//                   <ArrowRight className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>

//             {/* Investment */}
//             <div className="rounded-[28px] bg-gradient-to-br from-[#18392b] to-[#27553f] p-6 text-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] sm:p-8 xl:col-span-2">
//               <div className="text-center">
//                 <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-300">
//                   Course Investment
//                 </p>

//                 <h3 className="mt-3 text-lg font-semibold text-orange-100">
//                   All-Inclusive Package
//                 </h3>

//                 <div className="my-8">
//                   <p className="text-sm text-green-100">
//                     Starting From
//                   </p>

//                   <h2 className="mt-2 text-5xl font-bold tracking-tight">
//                     $2,200
//                   </h2>

//                   <p className="mt-3 text-sm text-green-100">
//                     Flexible Payment Options
//                   </p>
//                 </div>

//                 <button className="w-full rounded-full bg-orange-500 px-5 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-400">
//                   APPLY NOW
//                 </button>
//               </div>
//             </div>

//             {/* What You Get */}
//             <div className="rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-md sm:p-8 xl:col-span-2">
//               <div className="mb-7 text-center">
//                 <p className="text-xs font-semibold uppercase tracking-[3px] text-green-700">
//                   Benefits
//                 </p>

//                 <h3 className="mt-2 text-2xl font-bold text-[#18392b]">
//                   What You Get
//                 </h3>
//               </div>

//               <div className="space-y-4">
//                 {benefits.map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#fafaf7] p-3 hover:border-green-200 hover:bg-green-50/40"
//                   >
//                     <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />

//                     <p className="text-sm leading-relaxed text-gray-700">
//                       {item}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* View All Batches Modal */}
//       {showAllBatches && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-10 backdrop-blur-sm">
//           <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[32px] bg-white p-6 shadow-2xl sm:p-10">
//             {/* Close Button */}
//             <button
//               onClick={() => setShowAllBatches(false)}
//               className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white"
//             >
//               <X className="h-5 w-5" />
//             </button>

//             {/* Heading */}
//             <div className="mb-10 text-center">
//               <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
//                 <Leaf className="h-4 w-4" />
//                 Bali Yoga Kendra
//               </span>

//               <h2 className="mt-5 text-3xl font-bold text-[#18392b] sm:text-4xl">
//                 All Upcoming Batches
//               </h2>

//               <p className="mt-3 text-gray-600">
//                 Choose your perfect yoga journey and reserve your seat today.
//               </p>
//             </div>

//             {/* Batch Grid */}
//             <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//               {allBatches.map((batch, index) => (
//                 <div
//                   key={index}
//                   className="rounded-3xl border border-gray-100 bg-[#fafaf7] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
//                 >
//                   <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
//                     <div className="flex items-center gap-4">
//                       {/* Date */}
//                       <div className="flex h-20 w-20 flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-orange-100 to-orange-50 shadow-md">
//                         <span className="text-2xl font-bold text-[#18392b]">
//                           {batch.day}
//                         </span>

//                         <span className="text-sm font-semibold tracking-wide text-orange-500">
//                           {batch.month}
//                         </span>
//                       </div>

//                       {/* Details */}
//                       <div>
//                         <h3 className="text-lg font-bold text-[#18392b]">
//                           {batch.title}
//                         </h3>

//                         <p className="mt-1 text-sm text-gray-600">
//                           {batch.date}
//                         </p>

//                         <p className="mt-2 text-sm font-semibold text-orange-500">
//                           {batch.seats}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <button className="mt-6 w-full rounded-full bg-[#18392b] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-500">
//                     Reserve Your Spot
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default BaliYogaProgramSection;




import React, { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  CalendarDays,
  ArrowRight,
  Leaf,
  X,
} from "lucide-react";

const BaliYogaProgramSection = () => {
  const [showAllBatches, setShowAllBatches] = useState(false);

  // Modal Ref
  const modalRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        showAllBatches &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setShowAllBatches(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [showAllBatches]);

  // Prevent background scroll
  useEffect(() => {
    if (showAllBatches) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showAllBatches]);

  const includes = [
    "21/28 Days Comfortable Accommodation",
    "3 Sattvic Meals Daily",
    "200 Hour Yoga Alliance Certification",
    "Course Materials & Manual",
    "Daily Yoga & Meditations",
    "Nature & Cultural Excursions",
    "Airport Pickup (DPS)",
    "Community & Lifetime Support",
  ];

  const batches = [
    {
      day: "10",
      month: "MAY",
      date: "May 10 – May 30, 2026",
      status: "5 Seats Left",
    },
    {
      day: "02",
      month: "JUN",
      date: "June 02 – June 22, 2026",
      status: "Filling Fast",
    },
    {
      day: "24",
      month: "JUN",
      date: "June 24 – July 14, 2026",
      status: "Limited Seats",
    },
  ];

  const allBatches = [
    {
      day: "10",
      month: "MAY",
      title: "200 Hour Yoga Teacher Training",
      date: "May 10 – May 30, 2026",
      seats: "5 Seats Left",
    },
    {
      day: "02",
      month: "JUN",
      title: "Meditation & Healing Retreat",
      date: "June 02 – June 22, 2026",
      seats: "Filling Fast",
    },
    {
      day: "24",
      month: "JUN",
      title: "Advanced Yoga Immersion",
      date: "June 24 – July 14, 2026",
      seats: "Limited Seats",
    },
    {
      day: "15",
      month: "JUL",
      title: "300 Hour Yoga TTC",
      date: "July 15 – August 04, 2026",
      seats: "Early Bird Open",
    },
    {
      day: "08",
      month: "AUG",
      title: "Bali Wellness Retreat",
      date: "August 08 – August 18, 2026",
      seats: "Booking Open",
    },
    {
      day: "01",
      month: "SEP",
      title: "Sound Healing Certification",
      date: "September 01 – September 10, 2026",
      seats: "7 Seats Left",
    },
  ];

  const benefits = [
    "21 Days / 20 Nights Accommodation",
    "All Meals & Certification",
    "Course Material & Manual",
    "Lifetime Support",
    "Flexible Payment Options",
  ];

  return (
    <>
      {/* MAIN SECTION */}
      <section className="relative w-full overflow-hidden bg-[#f7f5ef] py-14 sm:py-16 lg:py-24">
        <div className="absolute left-[-120px] top-[-100px] h-[280px] w-[280px] rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-100px] h-[320px] w-[320px] rounded-full bg-green-200/40 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1700px] px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-12 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-300 bg-white px-5 py-2 text-sm font-semibold tracking-wide text-orange-600 shadow-sm">
              <Leaf className="h-4 w-4" />
              Bali Yoga Kendra
            </span>

            <h2 className="mx-auto max-w-4xl text-3xl leading-tight text-[#18392b] sm:text-4xl lg:text-5xl">
              Begin Your Transformational
              <span className="block text-orange-500">
                Yoga Journey In Bali
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
              Immerse yourself in authentic yogic living surrounded by Bali’s
              peaceful nature, spiritual culture, and healing energy.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
            {/* PROGRAM */}
            <div className="rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-md sm:p-8 xl:col-span-3">
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100">
                  <Leaf className="h-6 w-6 text-orange-500" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-500">
                    Program
                  </p>

                  <h3 className="text-xl font-bold text-[#18392b]">
                    Includes
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {includes.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#fafaf7] p-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />

                    <p className="text-sm leading-relaxed text-gray-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* BATCHES */}
            <div className="rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-md sm:p-8 xl:col-span-5">
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100">
                  <CalendarDays className="h-6 w-6 text-green-700" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[3px] text-green-700">
                    Schedule
                  </p>

                  <h3 className="text-xl font-bold text-[#18392b]">
                    Upcoming Batches
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {batches.map((batch, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-4 rounded-3xl border border-gray-100 bg-[#fafaf7] p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl border border-orange-200 bg-white shadow-sm">
                        <span className="text-xl font-bold text-[#18392b]">
                          {batch.day}
                        </span>

                        <span className="text-xs font-semibold tracking-wide text-orange-500">
                          {batch.month}
                        </span>
                      </div>

                      <div>
                        <p className="text-base font-semibold text-[#18392b]">
                          {batch.date}
                        </p>

                        <p className="mt-1 text-sm font-medium text-orange-500">
                          {batch.status}
                        </p>
                      </div>
                    </div>

                    <button className="rounded-full bg-[#18392b] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-500">
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex justify-center">
                <button
                  onClick={() => setShowAllBatches(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-6 py-3 text-sm font-semibold text-[#18392b] transition-all duration-300 hover:border-orange-300 hover:bg-orange-50"
                >
                  View All Batches
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* INVESTMENT */}
            <div className="rounded-[28px] bg-gradient-to-br from-[#18392b] to-[#27553f] p-6 text-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] sm:p-8 xl:col-span-2">
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-300">
                  Course Investment
                </p>

                <h3 className="mt-3 text-lg font-semibold text-orange-100">
                  All-Inclusive Package
                </h3>

                <div className="my-8">
                  <p className="text-sm text-green-100">
                    Starting From
                  </p>

                  <h2 className="mt-2 text-5xl font-bold tracking-tight">
                    $2,200
                  </h2>

                  <p className="mt-3 text-sm text-green-100">
                    Flexible Payment Options
                  </p>
                </div>

                <button className="w-full rounded-full bg-orange-500 px-5 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-400">
                  APPLY NOW
                </button>
              </div>
            </div>

            {/* BENEFITS */}
            <div className="rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-md sm:p-8 xl:col-span-2">
              <div className="mb-7 text-center">
                <p className="text-xs font-semibold uppercase tracking-[3px] text-green-700">
                  Benefits
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#18392b]">
                  What You Get
                </h3>
              </div>

              <div className="space-y-4">
                {benefits.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#fafaf7] p-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />

                    <p className="text-sm leading-relaxed text-gray-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {showAllBatches && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4 py-6 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[32px] bg-white p-5 shadow-2xl sm:p-8 lg:p-10"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowAllBatches(false)}
              className="sticky top-0 ml-auto flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-orange-500 shadow-md transition-all duration-300 hover:bg-orange-500 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {/* HEADER */}
            <div className="mb-10 text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
                <Leaf className="h-4 w-4" />
                Bali Yoga Kendra
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#18392b] sm:text-4xl lg:text-5xl">
                All Upcoming Batches
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Choose your perfect yoga journey and reserve your seat today.
              </p>
            </div>

            {/* BATCH GRID */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {allBatches.map((batch, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-gray-100 bg-[#fafaf7] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-orange-100 to-orange-50 shadow-md">
                      <span className="text-2xl font-bold text-[#18392b]">
                        {batch.day}
                      </span>

                      <span className="text-sm font-semibold tracking-wide text-orange-500">
                        {batch.month}
                      </span>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold leading-snug text-[#18392b]">
                        {batch.title}
                      </h3>

                      <p className="mt-2 text-sm text-gray-600">
                        {batch.date}
                      </p>

                      <p className="mt-3 text-sm font-semibold text-orange-500">
                        {batch.seats}
                      </p>
                    </div>
                  </div>

                  <button className="mt-6 w-full rounded-full bg-[#18392b] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-500">
                    Reserve Your Spot
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BaliYogaProgramSection;