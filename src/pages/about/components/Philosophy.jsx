import React from "react";

export default function Philosophy({ philosophyImg }) {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight">
              The Philosophy
            </h2>

            <p className="leading-relaxed text-base sm:text-lg text-gray-700">
              Rooted in traditional Hatha Yoga, breath awareness, meditation,
              and yogic lifestyle principles.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Classical Hatha Yoga</li>
              <li>• Pranayama & Meditation</li>
              <li>• Yogic Ethics</li>
              <li>• Holistic Lifestyle Living</li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src={philosophyImg}
              alt="Philosophy"
              className="w-full h-full object-cover rounded-3xl shadow-md transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
