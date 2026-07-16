// import React from "react";

// /* ================= IMAGES ================= */
// import heroImg from "../../assets/images/online/online.jpg";

// import scheduleImg from "../../assets/images/online/schedule.jpg";
// import workshopImg from "../../assets/images/online/workshop.jpg";
// import retreatImg from "../../assets/images/online/retreat.jpg";
// import ttcImg from "../../assets/images/online/ttc.jpg";
// import bookingImg from "../../assets/images/online/booking.jpg";

// import onlineClassImg from "../../assets/images/online/online-beginner-yoga-classes.jpg";
// import beginnerFreeImg from "../../assets/images/online/Free-Online-Beginner’s-Yoga-Class.jpg";
// import ahamCourseImg from "../../assets/images/online/aham-yoga-beginner-course.jpg";

// export default function OnlinePage() {
//   return (
//     <div className="w-full overflow-x-hidden">

//       {/* ================= HERO SECTION ================= */}
//       <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
//         <img
//           src={heroImg}
//           alt="Bali Yoga"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         <div className="absolute inset-0 bg-black/40"></div>

//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
//           <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif mb-4">
//             Bali Yoga Kendra
//           </h1>
//           <p className="text-base sm:text-lg md:text-xl mb-6">
//             Awaken Your Body • Calm Your Mind
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition">
//               View Schedule
//             </button>
//             <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg transition">
//               Book Now
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ================= SCHEDULE & BOOKING ================= */}
//       <section className="py-16 px-4 md:px-12 bg-white">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-serif mb-3">
//             Schedule & Booking
//           </h2>
//           <p className="text-gray-600">
//             Plan your journey with us
//           </p>
//         </div>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           <Card img={scheduleImg} title="Class Schedule" />
//           <Card img={workshopImg} title="Workshop Calendar" />
//           <Card img={retreatImg} title="Retreat Dates" />
//           <Card img={ttcImg} title="TTC Intake Dates" />
//           <Card img={bookingImg} title="Online Booking" />
//         </div>
//       </section>

//       {/* ================= ONLINE LEARNING ================= */}
//      {/* ================= ONLINE LEARNING ================= */}
// <section className="py-16 px-4 md:px-12 bg-[#e6d6c3]/40">
//   <div className="text-center mb-12">
//     <h2 className="text-3xl md:text-4xl font-serif mb-3">
//       Online Learning
//     </h2>
//     <p className="text-gray-600">
//       Practice from Anywhere
//     </p>
//   </div>

//   <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//     <Card img={onlineClassImg} title="Online Yoga Classes" />
//     <Card img={beginnerFreeImg} title="Virtual TTC Programs " />
//     <Card img={ahamCourseImg} title="Recorded Video Library " />
//     <Card img={heroImg} title="Online Meditation Sessions" />
//   </div>
// </section>

//     </div>
//   );
// }

// /* ================= REUSABLE CARD ================= */
// function Card({ img, title }) {
//   return (
//     <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
//       <img
//         src={img}
//         alt={title}
//         className="w-full h-52 object-cover"
//       />
//       <div className="p-5 text-center">
//         <h3 className="text-xl font-semibold mb-4">{title}</h3>
//         <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition">
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// }



import React from "react";

/* ================= IMAGES ================= */
import heroImg from "../../assets/images/online/schedule.jpg";

import scheduleImg from "../../assets/images/online/schedule.jpg";
import workshopImg from "../../assets/images/online/workshop.jpg";
import retreatImg from "../../assets/images/online/retreat.jpg";
import ttcImg from "../../assets/images/online/ttc.jpg";
import bookingImg from "../../assets/images/online/booking.jpg";

import onlineClassImg from "../../assets/images/online/online-beginner-yoga-classes.jpg";
import beginnerFreeImg from "../../assets/images/online/Free-Online-Beginners-Yoga-Class.jpg";
import ahamCourseImg from "../../assets/images/online/aham-yoga-beginner-course.jpg";

export default function OnlinePage() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-32 text-white">
        
        {/* Background Image */}
        <img
          src={heroImg}
          alt="Bali Yoga"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif mb-4">
            Bali Yoga Kendra
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-6">
            Awaken Your Body • Calm Your Mind
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#b4533c] hover:bg-[#9e4633] px-6 py-3 rounded-lg transition">
              View Schedule
            </button>

            <button className="border border-white hover:bg-white/20 px-6 py-3 rounded-lg transition">
              Book Now
            </button>
          </div>
        </div>
      </section>


      {/* ================= SCHEDULE & BOOKING ================= */}
      <section className="py-16 px-4 md:px-12 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-3">
            Schedule & Booking
          </h2>

          <p className="text-stone-600">
            Plan your journey with us
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card img={scheduleImg} title="Class Schedule" />
          <Card img={workshopImg} title="Workshop Calendar" />
          <Card img={retreatImg} title="Retreat Dates" />
          <Card img={ttcImg} title="TTC Intake Dates" />
          <Card img={bookingImg} title="Online Booking" />
        </div>
      </section>


      {/* ================= ONLINE LEARNING ================= */}
      <section className="py-16 px-4 md:px-12 bg-[#e6d6c3]/40">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-3">
            Online Learning
          </h2>

          <p className="text-stone-600">
            Practice from Anywhere
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Card img={onlineClassImg} title="Online Yoga Classes" />
          <Card img={beginnerFreeImg} title="Virtual TTC Programs" />
          <Card img={ahamCourseImg} title="Recorded Video Library" />
          <Card img={heroImg} title="Online Meditation Sessions" />
        </div>
      </section>

    </div>
  );
}


/* ================= REUSABLE CARD COMPONENT ================= */
function Card({ img, title }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group">
      
      {/* Image Wrapper */}
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-52 object-cover transform transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Card Content */}
      <div className="p-5 text-center">
        <h3 className="text-xl font-semibold mb-4">
          {title}
        </h3>

        <button className="bg-[#b4533c] hover:bg-[#9e4633] text-white px-5 py-2 rounded-lg transition">
          View Details
        </button>
      </div>
    </div>
  );
}
