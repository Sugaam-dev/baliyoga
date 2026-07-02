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

      {/* WHY CHOOSE SECTION */}
<div className="mt-20">

  {/* Title */}
  <h2 className="text-2xl md:text-3xl font-semibold text-[#b37a55] text-center">
    Why Choose 200 Hour YTTC With Bali Yoga Retreats?
  </h2>

  {/* Divider */}
  <div className="flex justify-center items-center my-4">
    <div className="w-20 h-[1px] bg-[#d3a98c]"></div>
    <span className="mx-3 text-[#d3a98c] text-xl">🪷</span>
    <div className="w-20 h-[1px] bg-[#d3a98c]"></div>
  </div>

  {/* Cards */}
  <div className="grid md:grid-cols-3 gap-6 mt-12">

    {/* CARD */}
    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#edd3c4] text-left">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#c3875a] text-white mb-4">
        🌎
      </div>
      <h3 className="text-[#b37a55] font-semibold mb-2">
        Internationally Recognized Certification
      </h3>
      <p className="text-gray-600 text-sm">
        After completing a 200 hour yoga teacher training course, you will receive an official Yoga Alliance certification, which will allow you to teach anywhere in the world.
         It is a globally recognized certificate that is respected by all the yoga studios, fitness centers, and wellness communities.
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#edd3c4] text-left">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#c3875a] text-white mb-4">
        📦
      </div>
      <h3 className="text-[#b37a55] font-semibold mb-2">
        All-Inclusive Packages
      </h3>
      <p className="text-gray-600 text-sm">
        Our package includes comfortable accommodation, 3 meals a day, a course manual, workshops, an adventure outing, and certification fees all in one package. There will be no hidden costs,
         only clear and honest pricing, so that you can completely focus on yoga and enjoy your journey with self-development.
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#edd3c4] text-left">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#c3875a] text-white mb-4">
        🧘
      </div>
      <h3 className="text-[#b37a55] font-semibold mb-2">
        Multi-Style Yoga Training
      </h3>
      <p className="text-gray-600 text-sm">
        Our Program/ Course is designed in a way that will give students the opportunity to learn different styles of yoga, 
        such as Hatha, Vinyasa, and Ashtanga. You will get the unique benefits from each style, and understand how these styles link to body and mind, and how you can combine them in your teaching.
         This multi-style yoga approach will help you become a more flexible and creative yoga teacher.
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#edd3c4] text-left">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#c3875a] text-white mb-4">
        🕉
      </div>
      <h3 className="text-[#b37a55] font-semibold mb-2">
        Traditional and Modern Yoga Styles
      </h3>
      <p className="text-gray-600 text-sm">
        At Bali Yoga Retreats, we teach yoga in a way that is easy to learn and fun to practice. You will learn old yoga wisdom, 
        like breathing, meditation, and stories behind yoga. 
        At the same time, you will learn how to teach yoga to people today. This way you understand the ancient ways and also know how to share yoga with everyone.
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#edd3c4] text-left">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#c3875a] text-white mb-4">
        🎓
      </div>
      <h3 className="text-[#b37a55] font-semibold mb-2">
        Learn to Teach Yoga Confidently at Any Level
      </h3>
      <p className="text-gray-600 text-sm">
        Our teacher training teaches you how to guide beginners, intermediate and advanced students. You will also 
        learn how to modify postures, provide variations and how to design a class for everyone.
         This way you’ll feel comfortable teaching any student who enrolls in your courses all over the world!
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#edd3c4] text-left">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#c3875a] text-white mb-4">
        🤝
      </div>
      <h3 className="text-[#b37a55] font-semibold mb-2">
        Safe & Supportive Environment
      </h3>
      <p className="text-gray-600 text-sm">
       We ensure to create a safe and supportive environment for you at BYR so that your journey in Bali, Indonesia, 
       will be memorable. You can discuss your concerns with our authority and we are happy and grateful to resolve it for you. 
       From the moment you step into Bali Yoga Retreats, you will feel welcome and cared for. Our friendly
        teachers and staff are always nearby to help, whether it’s showing you how to do a pose, answering your questions,
         or helping you get used to life in Bali. We make sure everyone feels safe,
        happy, and part of a big yoga family, so you can focus on learning and enjoying every moment.
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#edd3c4] text-left">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#c3875a] text-white mb-4">
        📖
      </div>
      <h3 className="text-[#b37a55] font-semibold mb-2">
        Teaching Manual
      </h3>
      <p className="text-gray-600 text-sm">
       Students who have enrolled for our teacher training program will receive a course manual which itself is a complete
        guidebook that helps you in your career. The manual contains step by step instructions, yoga poses, breathing exercises, 
        meditation tips, and teaching guidance. 
       The course manual will help students remember everything they have learned, review yoga lessons, and practice it at home.
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#edd3c4] text-left">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#c3875a] text-white mb-4">
        📚
      </div>
      <h3 className="text-[#b37a55] font-semibold mb-2">
        Structured & Comprehensive Learning
      </h3>
      <p className="text-gray-600 text-sm">
       Our 200 Hour Yoga Teacher Training Bali program provides structured and comprehensive learning, 
       which is carefully planned to help you learn everything step by step. The program is complete and balanced, 
       designed to give a strong foundation while keeping learning smooth and enjoyable. 
       This structured approach ensures you gain confidence and clarity as you progress through your yoga journey.
      </p>
    </div>

  </div>
</div>
    </section>
  );
};

export default DailySchedule;
