import React from "react";
import founderImg from "./images/ranjan_sir.jpg"; // replace with your image

const FounderSection = () => {
  return (
    // <div className="w-full bg-[#f5f1ea] py-12 px-4">
     <div className="w-full bg-[#ffffff] py-12 px-4">
      <div className="max-w-7xl mx-auto bg-[#f8f5ef] rounded-3xl shadow-sm overflow-hidden">
        
        <div className="flex flex-col lg:flex-row items-center">

          {/* LEFT IMAGE */}
          <div className="relative w-full lg:w-1/2 p-4">
            <div className="relative rounded-[40px] overflow-hidden">
              
              {/* Orange curved border */}
              {/* <div className="absolute inset-0 border-[6px] border-orange-500 rounded-[40px]"></div> */}

              <img
                src={founderImg}
                alt="Founder"
                className="w-full h-full object-cover rounded-[35px]"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-1/2 px-6 py-8 lg:py-12">

            {/* Subtitle */}
            <div className="flex items-center gap-2 text-orange-500 text-sm tracking-widest uppercase mb-3">
              <span className="w-6 h-[1px] bg-orange-400"></span>
              Founder of Bali Yoga School
              <span className="w-6 h-[1px] bg-orange-400"></span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-serif text-[#3b2a1f] mb-4">
              Yogi Ranjan
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Everything you experience at Bali Yoga School community has come
              from our great leader,{" "}
              <span className="text-orange-500 font-semibold">
                 Yogi Ranjan
              </span>
              . He is the most honest, hard-working, authentic person we can
              ever meet. His yoga journey started from a severe injury after
              playing sports for a long time at the state / national level.
              Yoga brought him up into the light from the darkness.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              He contributed to the success of other yoga schools in Rishikesh,
              and then built his own —{" "}
              <span className="text-orange-500 font-semibold">
                Himalayan Yoga Association
              </span>{" "}
              and{" "}
              <span className="text-orange-500 font-semibold">
                Bali Yoga School
              </span>
              . He continues to expand the community, uplifting lives for the
              better.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 text-center sm:text-left">
              
              <div>
                <div className="text-orange-500 text-2xl mb-2">🪷</div>
                <h4 className="font-semibold text-[#3b2a1f] text-sm">
                  Visionary Leader
                </h4>
                <p className="text-gray-500 text-xs">
                  Inspiring growth and transformation.
                </p>
              </div>

              <div>
                <div className="text-orange-500 text-2xl mb-2">⛰️</div>
                <h4 className="font-semibold text-[#3b2a1f] text-sm">
                  Community Builder
                </h4>
                <p className="text-gray-500 text-xs">
                  Expanding opportunities and uplifting lives.
                </p>
              </div>

              <div>
                <div className="text-orange-500 text-2xl mb-2">🧘</div>
                <h4 className="font-semibold text-[#3b2a1f] text-sm">
                  Yoga Practitioner
                </h4>
                <p className="text-gray-500 text-xs">
                  Living yoga in every moment.
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-md transition-all duration-300">
              READ MORE →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;