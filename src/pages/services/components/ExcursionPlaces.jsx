import React from "react";

import cooking from "../../../assets/images/services/yoga-bali-yoga-school.jpg";
import temple from "../../../assets/images/services/yoga-bali-yoga.jpg";
import monkey from "../../../assets/images/services/yoga-bali.jpg";
import beach from "../../../assets/images/services/Yoga-Searcher.jpg";

// import pattern from "../../../assets/images/services/pattern.png";

const places = [
  {
    title: "Balinese Cooking Class in Ubud",
    image: cooking,
  },
  {
    title: "Tirta Empul Holy Temple",
    image: temple,
  },
  {
    title: "Sacred Monkey Forest Walk",
    image: monkey,
  },
  {
    title: "Bali Beach",
    image: beach,
  },
];

const ExcursionPlaces = () => {
  return (
    <section className="w-full py-20 px-6 bg-[#ffffff]"
    //   className="py-20 px-6"
    //   style={{
    //     backgroundImage: `url(${pattern})`,
    //     backgroundSize: "cover",
    //     backgroundRepeat: "repeat",
    //   }}
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-14">

          <h2 className="text-2xl md:text-3xl font-semibold text-[#b37a55]">
            Excursion Places During The Course
          </h2>

          <div className="flex justify-center items-center mt-4">
            <div className="w-20 h-[1px] bg-[#d9b6a3]"></div>
            <span className="mx-3 text-[#d9b6a3] text-xl">🪷</span>
            <div className="w-20 h-[1px] bg-[#d9b6a3]"></div>
          </div>

          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Immerse yourself in divine moments that touch the soul
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {places.map((place, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md overflow-hidden border border-[#e8cdb9] hover:shadow-lg transition"
            >
              <div className="h-[180px] overflow-hidden">
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="py-3 text-center text-sm md:text-base text-gray-700 font-medium">
                {place.title}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ExcursionPlaces;
