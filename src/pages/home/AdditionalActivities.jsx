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
    <div className="min-h-screen bg-gradient-to-b from-[#f5f3ec] via-[#f7f3ee] to-[#efe7dc] py-16 md:py-20 overflow-hidden">
      
      {/* ULTRA WIDE WRAPPER */}
      <div className="mx-auto w-full max-w-[1920px] 2xl:max-w-[2200px] px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <p className="uppercase tracking-[4px] text-sm text-[#d97706] font-semibold mb-4">
            Bali Yoga Kendra
          </p>

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              xl:text-6xl
              2xl:text-7xl
              font-serif
              text-[#234b2c]
              leading-tight
            "
          >
            Additional Activities
          </h2>

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-14 h-[2px] bg-[#d97706]"></div>

            <span className="text-[#d97706] text-xl">
              ❦
            </span>

            <div className="w-14 h-[2px] bg-[#234b2c]"></div>
          </div>

          <p className="text-gray-600 text-sm md:text-base xl:text-lg leading-7 xl:leading-8 mt-6 max-w-3xl mx-auto">
            Explore holistic experiences that complement your yoga journey and
            nurture mind, body & soul with healing, mindfulness, movement, and
            nature-inspired activities.
          </p>
        </div>

        {/* GRID */}
        <div className="max-w-[1800px] mx-auto grid gap-8 md:gap-10 sm:grid-cols-2 xl:grid-cols-3">

          {activities.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                rounded-[28px]
                overflow-hidden
                shadow-md
                hover:shadow-2xl
                transition-all
                duration-500
                border
                border-[#e8ddd1]
                hover:-translate-y-2
              "
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="
                    w-full
                    h-[260px]
                    sm:h-[320px]
                    2xl:h-[360px]
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                    group-hover:rotate-1
                  "
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#234b2c]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* ICON BADGE */}
                <div
                  className="
                    absolute
                    -bottom-7
                    left-1/2
                    transform
                    -translate-x-1/2
                    bg-gradient-to-br
                    from-[#234b2c]
                    to-[#d97706]
                    w-16
                    h-16
                    flex
                    items-center
                    justify-center
                    rounded-full
                    shadow-xl
                    border-4
                    border-white
                    transition-all
                    duration-500
                    group-hover:scale-110
                  "
                >
                  <span className="text-white text-2xl">
                    {item.icon}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="pt-12 pb-8 px-7 xl:px-8 text-center">
                <h3
                  className="
                    text-[#234b2c]
                    font-serif
                    
                    text-2xl
                    xl:text-3xl
                    mb-4
                    group-hover:text-[#d97706]
                    transition
                    duration-300
                  "
                >
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm xl:text-base leading-7 xl:leading-8">
                  {item.desc}
                </p>

                {/* BUTTON */}
                <button
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-[#234b2c]
                    hover:text-[#d97706]
                    font-semibold
                    text-sm
                    uppercase
                    tracking-wide
                    transition-all
                    duration-300
                    group-hover:gap-3
                  "
                >
                  Explore More

                  <span className="text-lg">
                    →
                  </span>
                </button>
              </div>

              {/* BOTTOM LINE */}
              <div className="h-1 w-0 bg-gradient-to-r from-[#234b2c] to-[#d97706] group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdditionalActivities;