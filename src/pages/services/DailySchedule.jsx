import React from "react";

const scheduleLeft = [
  { time: "05:00 am", title: "Wake Up" },
  { time: "5:30 - 6:30 am", title: "Silent Meditation" },
  { time: "6:30 - 8:00 am", title: "Hatha Yoga" },
  { time: "8:00 - 8:15 am", title: "Shatkarma/Yoga cleansing" },
  { time: "8:15 - 9:15 am", title: "Pranayama/Bandha/Mudra" },
  { time: "09:15 am", title: "Breakfast" },
  { time: "10:30 - 11:30 am", title: "Self-study" },
  { time: "11:30 am", title: "Yoga Philosophy" },
  { time: "12:30 pm", title: "Yoga Anatomy" }
];

const scheduleRight = [
  { time: "1:30 - 2:30 pm", title: "Lunch" },
  { time: "3:30 - 4:30 pm", title: "Self-practice/Practice teaching" },
  { time: "4:30 - 6:00 pm", title: "Vinyasa Yoga/Yin" },
  { time: "6:00 pm", title: "Hatha/Ashtanga Yoga Asana" },
  { time: "6:00 - 6:30 pm", title: "Shower" },
  { time: "6:30 - 7:00 pm", title: "Dinner" },
  { time: "7:00 - 7:30 pm", title: "Digestive and Silent meditative walk" },
  { time: "7:45 - 9:00 pm", title: "Satsang/Evening cultural program/self study" },
  { time: "10:00 pm", title: "Lights Out" }
];

const DailySchedule = () => {
  return (
    <section
      id="schedule"
      className="scroll-mt-32 w-full py-20 px-6 bg-[#f7efe9]"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/arabesque.png')"
      }}
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#b37a55]">
          Daily Schedule for 200 Hour Yoga Teacher Training Bali, Indonesia
        </h2>

        {/* Divider */}
        <div className="flex justify-center items-center my-4">
          <div className="w-20 h-[1px] bg-[#d3a98c]"></div>
          <span className="mx-3 text-[#d3a98c] text-xl">🪷</span>
          <div className="w-20 h-[1px] bg-[#d3a98c]"></div>
        </div>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base mb-12">
          
In keeping with the requirements of Yoga Alliance - USA, 200hr yoga teacher training Bali program follows a tight schedule
 where almost each of the 6 to 7 training hours in the day is assigned to some aspect of yoga. You could find the training
  intensive but enlightening. At our yoga school the mornings can begin as early as 5:30 a.m. with meditation followed by 
  some yoga postures and maybe some classes or lectures in philosophy or anatomy. Chanting and pranayama are also part of 
  the schedule. During training you are provided with two to three yoga meals, fruit refreshments and green tea. Daily written
   homework is also the norm as
 that is how you gain in-depth knowledge of the subject. Sleeping early is encouraged as that is part of yogic practice.
        </p>

        {/* Schedule Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* LEFT COLUMN */}
          <div className="space-y-4">
            {scheduleLeft.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white rounded-md border border-[#e6c9b5]"
              >
                <div className="bg-[#c3875a] text-white text-sm px-4 py-2 rounded-l-md min-w-[140px]">
                  {item.time}
                </div>

                <div className="px-4 py-2 text-gray-700 text-sm md:text-base">
                  {item.title}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            {scheduleRight.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white rounded-md border border-[#e6c9b5]"
              >
                <div className="bg-[#c3875a] text-white text-sm px-4 py-2 rounded-l-md min-w-[140px]">
                  {item.time}
                </div>

                <div className="px-4 py-2 text-gray-700 text-sm md:text-base">
                  {item.title}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Note */}
        <div className="mt-10 text-sm text-[#b37a55]">
          ⚠ Please note: The timing of teaching and modules may vary depending
          on seasons.
        </div>

      </div>
    </section>
  );
};

export default DailySchedule;