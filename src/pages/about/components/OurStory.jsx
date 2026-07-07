import React from "react";

export default function OurStory({ ourImg }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="overflow-hidden rounded-3xl">
          <img
            src={ourImg}
            alt="Our Story"
            className="w-full h-full object-cover rounded-3xl shadow-md transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl cursor-pointer"
          />
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight">
            Our Story
          </h2>

          <p className="leading-relaxed text-base sm:text-lg text-gray-700">
            Bali Yoga Kendra was created as a sacred space where ancient yogic
            wisdom meets the serene spiritual energy of Bali.
          </p>

          <p className="mt-4 leading-relaxed text-gray-600">
            Here, yoga is not just a physical practice — it is a way of life.
          </p>
        </div>
      </div>
    </section>
  );
}
