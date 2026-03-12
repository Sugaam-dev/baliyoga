import React from "react";

const inclusions = [
  "Accommodation (Air Conditioned Room)",
  "3 Times Daily Nutritious Meals",
  "Outdoor Yoga Classes",
  "Weekend Excursions",
  "Yoga Materials",
  "Yoga Alliance RYT-200 certification",
  "Teaching methodology practice sessions",
  "Kirtan Session (Optional)",
  "Sacred Fire Ceremony",
  "Balinese Cultural experience",
  "Towels and Bed sheets",
  "Online Pre-recorded preparatory course videos after booking"
];

const exclusions = [
  "Medical expenses",
  "Insurance",
  "Ayurveda consultation",
  "Visa",
  "Panchkarma",
  "Toiletries"
];

const InclusionExclusion = () => {
  return (
    <section
      id="inclusions"
      className="scroll-mt-32 py-20 px-6 bg-[#f7efe9]"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/arabesque.png')"
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-14">

          <h2 className="text-2xl md:text-3xl font-semibold text-[#b37a55]">
            Inclusions & Exclusions of 200 Hour Yoga Teacher Training In Bali
          </h2>

          <div className="flex justify-center items-center mt-4">
            <div className="w-20 h-[1px] bg-[#d9b6a3]"></div>
            <span className="mx-3 text-[#d9b6a3] text-xl">🪷</span>
            <div className="w-20 h-[1px] bg-[#d9b6a3]"></div>
          </div>

          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Everything You Need to Know About What's Covered and What's Not
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* INCLUSION */}
          <div className="border border-[#e6c9b5] rounded-lg bg-white overflow-hidden">

            <div className="bg-[#c3875a] text-white px-6 py-3 font-semibold">
              Inclusion
            </div>

            <ul className="p-6 space-y-3 text-gray-700 text-sm md:text-base">

              {inclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#c3875a] mt-[3px]">➤</span>
                  {item}
                </li>
              ))}

            </ul>

          </div>

          {/* EXCLUSION */}
          <div className="border border-[#e6c9b5] rounded-lg bg-white overflow-hidden">

            <div className="bg-[#c3875a] text-white px-6 py-3 font-semibold">
              Exclusion
            </div>

            <ul className="p-6 space-y-3 text-gray-700 text-sm md:text-base">

              {exclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#c3875a] mt-[3px]">➤</span>
                  {item}
                </li>
              ))}

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
};

export default InclusionExclusion;