import React from "react";

import img1 from "./images/bali1.jpg";
import img2 from "./images/bali2.jpg";
import img3 from "./images/bali3.jpg";
import img4 from "./images/bali4.jpg";
import img5 from "./images/bali5.jpg";
import img6 from "./images/bali6.jpg";

const activities = [
  {
    title: "Sound Healing",
    desc: "Experience deep relaxation and energetic balance through healing vibrations.",
    img: img1,
    icon: "🪷",
  },
  {
    title: "Acro Yoga",
    desc: "Build trust, strength & connection through playful and supportive partner yoga.",
    img: img2,
    icon: "🤸",
  },
  {
    title: "Kirtan Session",
    desc: "Join soulful chanting and immerse in the vibrations of devotion and music.",
    img: img3,
    icon: "🎵",
  },
  {
    title: "Nature Walk",
    desc: "Reconnect with nature and rejuvenate your senses on mindful walks.",
    img: img4,
    icon: "🍃",
  },
  {
    title: "Yin Yoga",
    desc: "Release tension, improve flexibility and find stillness in deep, calming postures.",
    img: img5,
    icon: "🧘",
  },
  {
    title: "Waterfall Visit",
    desc: "Refresh your spirit with natural beauty and joyful experiences.",
    img: img6,
    icon: "💧",
  },
];

const AdditionalActivities = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f1ea] to-[#efe7dc] py-16 px-4">

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="text-orange-500 text-3xl mb-2">🪷</div>

        <h2 className="text-3xl md:text-5xl font-serif text-[#3b2a1f] tracking-wide">
          ADDITIONAL ACTIVITIES
        </h2>

        <div className="text-orange-400 my-2">❦</div>

        <p className="text-gray-500 text-sm md:text-base">
          Explore holistic experiences that complement your yoga journey and nurture
          mind, body & soul.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {activities.map((item, index) => (
          <div
            key={index}
            className="bg-[#f8f5ef] rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 object-cover"
              />

              {/* ICON BADGE */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white border border-orange-200 w-12 h-12 flex items-center justify-center rounded-full shadow">
                <span className="text-orange-500 text-xl">
                  {item.icon}
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="pt-10 pb-6 px-6 text-center">
              <h3 className="text-[#3b2a1f] font-semibold text-sm tracking-wide uppercase mb-2">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default AdditionalActivities;