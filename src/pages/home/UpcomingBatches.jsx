import React from "react";

import img1 from "../../assets/hill.jpg";
import img2 from "../../assets/hill1.jpg";
import img3 from "../../assets/hill2.jpg";
import img4 from "../../assets/hill3.jpg";

const UpcomingBatches = () => {
  return (
    <section className="bg-[#f5f1ea] py-16 px-4">
      <div className="max-w-7xl mx-auto">

        <h3 className="text-center text-sm tracking-[0.25em] text-[#3b2a1f] mb-10 font-semibold">
          UPCOMING BATCHES ✦
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              title: "BALI – 200 HOUR TTC",
              date: "May 10, 2026",
              seats: "5 Seats Left",
              img: img1,
            },
            {
              title: "RISHIKESH – 200 HOUR TTC",
              date: "June 02, 2026",
              seats: "8 Seats Left",
              img: img2,
            },
            {
              title: "MYSORE – 200 HOUR TTC",
              date: "June 16, 2026",
              seats: "6 Seats Left",
              img: img3,
            },
            {
              title: "BALI – 300 HOUR TTC",
              date: "July 05, 2026",
              seats: "7 Seats Left",
              img: img4,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative h-52 rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition duration-300"
            >
              <img
                src={item.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

              <div className="relative z-10 p-4 h-full flex flex-col justify-between text-white">

                <div>
                  <h4 className="text-sm font-semibold leading-tight">
                    {item.title}
                  </h4>

                  <p className="text-xs text-gray-200 mt-1">
                    {item.date}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[10px] bg-orange-500/90 px-3 py-1 rounded-full">
                    {item.seats}
                  </span>

                  <button className="text-xs hover:underline">
                    Reserve Now →
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingBatches;