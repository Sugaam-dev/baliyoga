import React from "react";

export default function Lifestyle({ lifestyleImg }) {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={lifestyleImg}
              alt="Lifestyle"
              className="w-full h-full object-cover rounded-3xl shadow-md transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl cursor-pointer"
            />
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 leading-tight">
              Bali Yoga Lifestyle
            </h2>

            <p className="leading-relaxed text-base sm:text-lg text-gray-700">
              From sunrise meditation to nourishing vegetarian meals, students
              immerse themselves in conscious living.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
