import React from "react";

import img1 from "./images/yogabali.jpg";
import img2 from "./images/yogainbali.jpg";
import img3 from "./images/Bestyoga.jpg";

const TermsPolicy = () => {
  return (
    <section
      className="w-full py-20 px-6"
      style={{
        backgroundColor: "#f7efe9",
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/arabesque.png')",
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#b37a55]">
            T&C & Privacy Policy of Bali Yoga Retreats (BYR)
          </h2>

          <div className="flex justify-center items-center mt-4 mb-4">
            <div className="w-16 h-[1px] bg-[#d8b7a1]"></div>
            <span className="mx-3 text-[#d8b7a1] text-xl">🪷</span>
            <div className="w-16 h-[1px] bg-[#d8b7a1]"></div>
          </div>

          <p className="text-gray-600 text-sm">
            Please review our guidelines to ensure a smooth and respectful experience for all participants
          </p>
        </div>

        {/* SECTION 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

          <img
            src={img1}
            alt="Requirements"
            className="w-full rounded-lg shadow-md"
          />

          <div>
            <p className="text-sm text-[#b37a55] mb-2">Requirements</p>

            <h3 className="text-xl font-semibold text-[#b37a55] mb-4">
              Requirements for Students
            </h3>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>✿ Participants are required to show self-discipline and respect.</li>
              <li>✿ The course is open for beginners and experienced practitioners.</li>
              <li>✿ Attend all yoga sessions, meditation practices and lectures.</li>
              <li>✿ Bring yoga clothing suitable for tropical weather.</li>
              <li>✿ Maintain personal cleanliness and respect retreat rules.</li>
              <li>✿ Follow ethical behaviour consistent with yogic values.</li>
            </ul>
          </div>

        </div>

        {/* SECTION 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

          <div>
            <p className="text-sm text-[#b37a55] mb-2">Discipline Guidelines</p>

            <h3 className="text-xl font-semibold text-[#b37a55] mb-4">
              Discipline Guidelines for Students
            </h3>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>✿ Smoking and alcohol consumption are strictly prohibited.</li>
              <li>✿ Maintain punctuality and respect class timings.</li>
              <li>✿ Follow silence during meditation and spiritual practices.</li>
              <li>✿ Maintain cleanliness of rooms and retreat surroundings.</li>
              <li>✿ Return borrowed items before leaving the retreat.</li>
              <li>✿ Respect fellow students and teachers.</li>
            </ul>
          </div>

          <img
            src={img3}
            alt="Guidelines"
            className="w-full rounded-lg shadow-md"
          />

        </div>

        {/* SECTION 3 */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">

          <img
            src={img2}
            alt="Refund Policy"
            className="w-full rounded-lg shadow-md"
          />

          <div>
            <p className="text-sm text-[#b37a55] mb-2">Refund Policy</p>

            <h3 className="text-xl font-semibold text-[#b37a55] mb-4">
              Refund & Cancellation Policy for Students
            </h3>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>✿ Advance course fees are non-refundable.</li>
              <li>✿ Students may join another scheduled course in case of emergency.</li>
              <li>✿ Once the course starts, cancellation refunds are not available.</li>
              <li>✿ Students must inform us via email for schedule changes.</li>
            </ul>
          </div>

        </div>

        {/* EXPLORE SECTION */}
        <div className="text-center">

          <h3 className="text-xl font-semibold text-[#b37a55] mb-10">
            Explore More Yoga Teacher Training Programs in Ubud, Bali
          </h3>

          <div className="flex flex-wrap justify-center gap-4">

            <button className="bg-[#b37a55] text-white px-5 py-2 rounded-md text-sm hover:bg-[#9c6646] transition">
              300 Hr Yoga TTC Bali
            </button>

            <button className="bg-[#b37a55] text-white px-5 py-2 rounded-md text-sm hover:bg-[#9c6646] transition">
              Yoga Retreat Bali 2026
            </button>

            <button className="bg-[#b37a55] text-white px-5 py-2 rounded-md text-sm hover:bg-[#9c6646] transition">
              200 Hr Kundalini Yoga TTC
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TermsPolicy;