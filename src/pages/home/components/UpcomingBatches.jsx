import React from "react";
import { ArrowRight, MapPin } from "lucide-react";
import SectionHeading from "../../../components/shared/SectionHeading";

import img1 from "../../../assets/hill.jpg";
import img2 from "../../../assets/hill1.jpg";
import img3 from "../../../assets/hill2.jpg";
import img4 from "../../../assets/hill3.jpg";

const UpcomingBatches = () => {
  const batches = [
    {
      title: "Bali – 200 Hour TTC",
      date: "May 10, 2026",
      seats: "5 Seats Left",
      img: img1,
      location: "Bali, Indonesia",
    },
    {
      title: "Rishikesh – 200 Hour TTC",
      date: "June 02, 2026",
      seats: "8 Seats Left",
      img: img2,
      location: "Rishikesh, India",
    },
    {
      title: "Mysore – 200 Hour TTC",
      date: "June 16, 2026",
      seats: "6 Seats Left",
      img: img3,
      location: "Mysore, India",
    },
    {
      title: "Bali – 300 Hour TTC",
      date: "July 05, 2026",
      seats: "7 Seats Left",
      img: img4,
      location: "Bali, Indonesia",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-14 px-6 md:px-12 border-b border-stone-200/50">
      
      {/* Background Blurs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-200/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* Heading using SectionHeading */}
        <div className="relative">
          <div className="flex justify-center mb-6">
            <span className="uppercase tracking-[0.2em] text-[11px] font-bold text-[#c38b5f] inline-block">
              Upcoming Yoga Programs ✦
            </span>
          </div>
          <SectionHeading 
            title="Join Our Upcoming" 
            highlight="Yoga Teacher Trainings" 
            subtitle="Discover transformative yoga journeys in the world's most peaceful destinations. Reserve your seat and begin your path toward growth, healing, and self-discovery."
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {batches.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[30px] h-[400px] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 border border-stone-200/40"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-stone-950/15" />

              {/* Top Seats Badge */}
              <div className="absolute top-5 left-5 z-20">
                <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  {item.seats}
                </span>
              </div>

              {/* Content Box */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-7 text-white">
                
                {/* Location */}
                <div className="flex items-center gap-1.5 text-orange-200 text-[10px] font-bold uppercase tracking-wider mb-2">
                  <MapPin size={12} className="text-[#c38b5f] flex-shrink-0" />
                  <span>{item.location}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold leading-snug mb-3 text-white">
                  {item.title}
                </h3>

                {/* Date Row */}
                <div className="flex items-center justify-between mb-5 border-t border-white/15 pt-3">
                  <p className="text-xs sm:text-sm text-stone-300 font-semibold tracking-wide">
                    Starts: {item.date}
                  </p>
                  <div className="w-8 h-[2px] bg-[#c38b5f] rounded-full" />
                </div>

                {/* CTA Button */}
                <a 
                  href="/contact"
                  className="w-full bg-[#493c28] text-stone-850 hover:bg-[#c38b5f] hover:text-[#FAF8F5] font-bold text-xs uppercase tracking-wider py-3.5 rounded-full transition-all duration-300 shadow-sm block text-center no-underline"
                >
                  Reserve Your Seat
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingBatches;
