import React from "react";

// Schedule & Booking Images
import scheduleImg from "./images/schedule.jpg";
import workshopImg from "./images/workshop.jpg";
import retreatImg from "./images/retreat.jpg";
import ttcImg from "./images/ttc.jpg";
import bookingImg from "./images/booking.jpg";

// Online Learning Images
import onlineClassImg from "./images/Free-Online-Beginner’s-Yoga-Class.jpg";
import virtualTTCImg from "./images/online-beginner-yoga-classes.jpg";
import libraryImg from "./images/online.jpg";
import meditationImg from "./images/aham-yoga-beginner-course.jpg";

export default function OnlinePage() {
  return (
    <div className="bg-[#f8f5f0] text-gray-800">

      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-[#e6dfd5] to-[#f8f5f0]">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-wide text-center px-4">
          Online Learning & Schedule
        </h1>
      </section>

      {/* ========================= */}
      {/* SCHEDULE & BOOKING */}
      {/* ========================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          Schedule & Booking
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card Component */}
          {[
            { title: "Class Schedule", img: scheduleImg },
            { title: "Workshop Calendar", img: workshopImg },
            { title: "Retreat Dates", img: retreatImg },
            { title: "Teacher Training Intake Dates", img: ttcImg },
            { title: "Online Booking", img: bookingImg },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-gray-600 text-sm">
                  Explore our {item.title.toLowerCase()} and plan your
                  journey with Bali Yoga Kendra.
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ========================= */}
      {/* ONLINE LEARNING */}
      {/* ========================= */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            Online Learning
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              { title: "Online Yoga Classes", img: onlineClassImg },
              { title: "Virtual TTC Programs", img: virtualTTCImg },
              { title: "Recorded Video Library", img: libraryImg },
              { title: "Online Meditation Sessions", img: meditationImg },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-[#f8f5f0] rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-gray-600 text-sm">
                    Join our {item.title.toLowerCase()} from anywhere in
                    the world and deepen your practice.
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}