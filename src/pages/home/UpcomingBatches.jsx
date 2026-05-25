import React from "react";

import img1 from "../../assets/hill.jpg";
import img2 from "../../assets/hill1.jpg";
import img3 from "../../assets/hill2.jpg";
import img4 from "../../assets/hill3.jpg";

const UpcomingBatches = () => {
  const batches = [
    {
      title: "BALI – 200 HOUR TTC",
      date: "May 10, 2026",
      seats: "5 Seats Left",
      img: img1,
      location: "Bali, Indonesia",
    },
    {
      title: "RISHIKESH – 200 HOUR TTC",
      date: "June 02, 2026",
      seats: "8 Seats Left",
      img: img2,
      location: "Rishikesh, India",
    },
    {
      title: "MYSORE – 200 HOUR TTC",
      date: "June 16, 2026",
      seats: "6 Seats Left",
      img: img3,
      location: "Mysore, India",
    },
    {
      title: "BALI – 300 HOUR TTC",
      date: "July 05, 2026",
      seats: "7 Seats Left",
      img: img4,
      location: "Bali, Indonesia",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8f4ee] to-[#efe7da] py-16 sm:py-20 lg:py-24 px-4">
      
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-[95%] sm:max-w-[92%] lg:max-w-[90%] 2xl:max-w-[1800px]">
        
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs sm:text-sm tracking-[0.35em] text-[#9a6b3d] font-semibold uppercase mb-4">
            Upcoming Yoga Programs ✦
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl  2xl:text-6xl font-serif text-[#2f241c] leading-tight">
            Join Our Upcoming
            <span className="block text-[#c47b37] mt-2">
              Yoga Teacher Trainings
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto rounded-full mt-6" />

          <p className="mx-auto mt-6 max-w-3xl px-2 text-sm leading-relaxed text-[#5c5c5c] sm:text-base lg:text-lg 2xl:max-w-5xl 2xl:text-2xl">
            Discover transformative yoga journeys in the world's most peaceful
            destinations. Reserve your seat and begin your path toward growth,
            healing, and self-discovery.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {batches.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[28px] h-[380px] sm:h-[400px] shadow-[0_10px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

              {/* Top Badge */}
              <div className="absolute top-5 left-5 z-20">
                <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] sm:text-xs px-4 py-1.5 rounded-full tracking-wide">
                  {item.seats}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-7 text-white">
                
                {/* Location */}
                <p className="text-xs sm:text-sm text-orange-200 tracking-wide mb-2 uppercase">
                  {item.location}
                </p>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold leading-snug mb-3">
                  {item.title}
                </h3>

                {/* Date */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-sm sm:text-base text-gray-200">
                    {item.date}
                  </p>

                  <div className="w-10 h-[2px] bg-orange-400 rounded-full" />
                </div>

                {/* Button */}
                <button className="w-full bg-white text-[#2f241c] font-semibold text-sm sm:text-base py-3 rounded-full transition-all duration-300 hover:bg-orange-400 hover:text-white hover:scale-[1.02]">
                  Reserve Your Seat
                </button>
              </div>

              {/* Hover Glow */}
              <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-orange-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingBatches;