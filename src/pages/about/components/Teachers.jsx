import React from "react";

export default function Teachers({ teachers }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-12">
        Meet Our Teachers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {teachers.map((teacher, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 p-6 text-center h-full flex flex-col border border-stone-100"
          >
            <div className="overflow-hidden rounded-full w-40 h-40 mx-auto mb-6">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-full object-cover rounded-full transition-all duration-500 hover:scale-110 cursor-pointer"
              />
            </div>

            <div className="min-h-[90px] flex flex-col justify-start">
              <h3 className="text-lg sm:text-xl font-bold tracking-wide">
                {teacher.name}
              </h3>

              <p className="text-[#b4533c] text-sm font-medium mt-2 leading-relaxed">
                {teacher.title}
              </p>
            </div>

            <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base flex-grow">
              {teacher.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
