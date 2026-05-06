// import React from "react";
// import founderImg from "./images/ranjan_sir.jpg"; // replace with your image

// const FounderSection = () => {
//   return (
//     // <div className="w-full bg-[#f5f1ea] py-12 px-4">
//      <div className="w-full bg-[#ffffff] py-12 px-4">
//       <div className="max-w-7xl mx-auto bg-[#f8f5ef] rounded-3xl shadow-sm overflow-hidden">
        
//         <div className="flex flex-col lg:flex-row items-center">

//           {/* LEFT IMAGE */}
//           <div className="relative w-full lg:w-1/2 p-4">
//             <div className="relative rounded-[40px] overflow-hidden">
              
//               {/* Orange curved border */}
//               {/* <div className="absolute inset-0 border-[6px] border-orange-500 rounded-[40px]"></div> */}

//               <img
//                 src={founderImg}
//                 alt="Founder"
//                 className="w-full h-full object-cover rounded-[35px]"
//               />
//             </div>
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="w-full lg:w-1/2 px-6 py-8 lg:py-12">

//             {/* Subtitle */}
//             <div className="flex items-center gap-2 text-orange-500 text-sm tracking-widest uppercase mb-3">
//               <span className="w-6 h-[1px] bg-orange-400"></span>
//               Founder of Bali Yoga School
//               <span className="w-6 h-[1px] bg-orange-400"></span>
//             </div>

//             {/* Heading */}
//             <h2 className="text-3xl md:text-5xl font-serif text-[#3b2a1f] mb-4">
//               Yogi Ranjan
//             </h2>

//             {/* Paragraph */}
//             <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
//               Everything you experience at Bali Yoga School community has come
//               from our great leader,{" "}
//               <span className="text-orange-500 font-semibold">
//                  Yogi Ranjan
//               </span>
//               . He is the most honest, hard-working, authentic person we can
//               ever meet. His yoga journey started from a severe injury after
//               playing sports for a long time at the state / national level.
//               Yoga brought him up into the light from the darkness.
//             </p>

//             <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
//               He contributed to the success of other yoga schools in Rishikesh,
//               and then built his own —{" "}
//               <span className="text-orange-500 font-semibold">
//                 Himalayan Yoga Association
//               </span>{" "}
//               and{" "}
//               <span className="text-orange-500 font-semibold">
//                 Bali Yoga School
//               </span>
//               . He continues to expand the community, uplifting lives for the
//               better.
//             </p>

//             {/* FEATURES */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 text-center sm:text-left">
              
//               <div>
//                 <div className="text-orange-500 text-2xl mb-2">🪷</div>
//                 <h4 className="font-semibold text-[#3b2a1f] text-sm">
//                   Visionary Leader
//                 </h4>
//                 <p className="text-gray-500 text-xs">
//                   Inspiring growth and transformation.
//                 </p>
//               </div>

//               <div>
//                 <div className="text-orange-500 text-2xl mb-2">⛰️</div>
//                 <h4 className="font-semibold text-[#3b2a1f] text-sm">
//                   Community Builder
//                 </h4>
//                 <p className="text-gray-500 text-xs">
//                   Expanding opportunities and uplifting lives.
//                 </p>
//               </div>

//               <div>
//                 <div className="text-orange-500 text-2xl mb-2">🧘</div>
//                 <h4 className="font-semibold text-[#3b2a1f] text-sm">
//                   Yoga Practitioner
//                 </h4>
//                 <p className="text-gray-500 text-xs">
//                   Living yoga in every moment.
//                 </p>
//               </div>
//             </div>

//             {/* BUTTON */}
//             <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-md transition-all duration-300">
//               READ MORE →
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FounderSection;



import React from "react";
import founderImg from "./images/ranjan_sir.jpg";

const FounderSection = () => {
  return (
    <section className="w-full bg-[#ffffff] py-16 md:py-20 xl:py-24 overflow-hidden">

      {/* ULTRA WIDE WRAPPER */}
      <div className="mx-auto w-full max-w-[1920px] 2xl:max-w-[2200px] px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* MAIN CONTAINER */}
        <div
          className="
            max-w-[1800px]
            mx-auto
            bg-gradient-to-br
            from-[#f8f5ef]
            via-[#fbfaf7]
            to-[#f4ede4]
            rounded-[32px]
            xl:rounded-[42px]
            shadow-[0_15px_60px_rgba(0,0,0,0.06)]
            overflow-hidden
            relative
          "
        >

          {/* BACKGROUND EFFECT */}
          <div
            className="
              absolute
              -top-24
              -right-24
              w-[320px]
              h-[320px]
              rounded-full
              bg-[#d97706]/5
              blur-3xl
            "
          ></div>

          <div
            className="
              absolute
              -bottom-24
              -left-24
              w-[320px]
              h-[320px]
              rounded-full
              bg-[#234b2c]/5
              blur-3xl
            "
          ></div>

          {/* FLEX CONTAINER */}
          <div className="relative flex flex-col lg:flex-row items-center">

            {/* LEFT IMAGE SECTION */}
            <div className="w-full lg:w-1/2 p-5 md:p-8 xl:p-10">

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[30px]
                  xl:rounded-[40px]
                  group
                  shadow-2xl
                "
              >

                {/* IMAGE */}
                <img
                  src={founderImg}
                  alt="Founder"
                  className="
                    w-full
                    h-[450px]
                    sm:h-[550px]
                    xl:h-[720px]
                    2xl:h-[820px]
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/50
                    via-transparent
                    to-transparent
                  "
                ></div>

                {/* FLOATING BADGE */}
                <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    right-6
                    bg-white/90
                    backdrop-blur-md
                    rounded-2xl
                    p-5
                    shadow-xl
                  "
                >
                  <p className="uppercase tracking-[3px] text-xs text-[#d97706] font-semibold mb-2">
                    Founder & Visionary
                  </p>

                  <h3 className="text-[#234b2c] text-2xl font-serif font-semibold">
                    Yogi Ranjan
                  </h3>
                </div>

                {/* BORDER EFFECT */}
                <div
                  className="
                    absolute
                    inset-4
                    border
                    border-white/20
                    rounded-[26px]
                    xl:rounded-[34px]
                    pointer-events-none
                  "
                ></div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-full lg:w-1/2 px-6 py-10 lg:px-10 xl:px-14 xl:py-14">

              {/* SMALL TITLE */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-5
                  py-2
                  shadow-md
                  mb-6
                "
              >
                <span className="w-6 h-[1px] bg-orange-400"></span>

                <span className="text-orange-500 text-xs md:text-sm tracking-[3px] uppercase font-semibold">
                  Founder of Bali Yoga School
                </span>

                <span className="w-6 h-[1px] bg-orange-400"></span>
              </div>

              {/* MAIN TITLE */}
              <h2
                className="
                  text-4xl
                  md:text-5xl
                  xl:text-6xl
                  2xl:text-7xl
                  font-serif
                  leading-tight
                  text-[#234b2c]
                  mb-6
                "
              >
                Yogi Ranjan
              </h2>

              {/* DECORATION */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-16 h-[2px] bg-[#d97706]"></div>

                <span className="text-[#d97706] text-xl">
                  ❦
                </span>

                <div className="w-16 h-[2px] bg-[#234b2c]"></div>
              </div>

              {/* PARAGRAPH */}
              <p
                className="
                  text-gray-600
                  text-sm
                  md:text-base
                  xl:text-lg
                  leading-7
                  xl:leading-8
                  mb-6
                "
              >
                Everything you experience at Bali Yoga School community has
                come from our inspiring leader,
                <span className="text-[#d97706] font-semibold">
                  {" "}Yogi Ranjan
                </span>.
                His yoga journey began after a severe sports injury during his
                state and national-level athletic career. Yoga transformed his
                life and guided him from darkness into healing and purpose.
              </p>

              <p
                className="
                  text-gray-600
                  text-sm
                  md:text-base
                  xl:text-lg
                  leading-7
                  xl:leading-8
                  mb-10
                "
              >
                After contributing to the success of renowned yoga schools in
                Rishikesh, he established
                <span className="text-[#d97706] font-semibold">
                  {" "}Himalayan Yoga Association
                </span>
                {" "}and
                <span className="text-[#d97706] font-semibold">
                  {" "}Bali Yoga School
                </span>.
                Today, he continues expanding the community and uplifting lives
                through authentic yogic wisdom and mindful living.
              </p>

              {/* FEATURES */}
              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-3
                  gap-6
                  xl:gap-8
                  mb-10
                "
              >

                {/* FEATURE 1 */}
                <div
                  className="
                    bg-white/80
                    backdrop-blur-md
                    rounded-2xl
                    p-5
                    shadow-md
                    hover:shadow-xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                  "
                >
                  <div className="text-[#d97706] text-3xl mb-4">
                    🪷
                  </div>

                  <h4 className="font-semibold text-[#234b2c] text-lg mb-2">
                    Visionary Leader
                  </h4>

                  <p className="text-gray-500 text-sm leading-6">
                    Inspiring transformation and conscious growth through yoga.
                  </p>
                </div>

                {/* FEATURE 2 */}
                <div
                  className="
                    bg-white/80
                    backdrop-blur-md
                    rounded-2xl
                    p-5
                    shadow-md
                    hover:shadow-xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                  "
                >
                  <div className="text-[#234b2c] text-3xl mb-4">
                    ⛰️
                  </div>

                  <h4 className="font-semibold text-[#234b2c] text-lg mb-2">
                    Community Builder
                  </h4>

                  <p className="text-gray-500 text-sm leading-6">
                    Expanding opportunities and uplifting lives worldwide.
                  </p>
                </div>

                {/* FEATURE 3 */}
                <div
                  className="
                    bg-white/80
                    backdrop-blur-md
                    rounded-2xl
                    p-5
                    shadow-md
                    hover:shadow-xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                  "
                >
                  <div className="text-[#d97706] text-3xl mb-4">
                    🧘
                  </div>

                  <h4 className="font-semibold text-[#234b2c] text-lg mb-2">
                    Yoga Practitioner
                  </h4>

                  <p className="text-gray-500 text-sm leading-6">
                    Embodying yogic philosophy in everyday life and teaching.
                  </p>
                </div>
              </div>

              {/* BUTTON */}
              <button
                className="
                  inline-flex
                  items-center
                  gap-3
                  bg-[#d97706]
                  hover:bg-[#c76804]
                  text-white
                  px-8
                  py-4
                  rounded-full
                  shadow-xl
                  transition-all
                  duration-300
                  hover:gap-4
                  hover:scale-105
                  uppercase
                  tracking-wide
                  text-sm
                  font-semibold
                "
              >
                READ MORE

                <span className="text-lg">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;