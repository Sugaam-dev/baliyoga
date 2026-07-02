import React, { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaBook,
  FaVenusMars,
  FaCalendarAlt,
  FaBed,
  FaChevronDown
} from "react-icons/fa";

const syllabusItems = [
  "Mantra & Mantra Chanting",
  "Hatha Yoga",
  "Ashtanga Yoga",
  "Pranayama",
  "Meditation",
  "Yoga Nidra",
  "Yoga Cleansing",
  "Yoga Philosophy",
  "Anatomy & Physiology",
  "Yoga Therapy",
  "Ayurveda",
  "Mudra",
  "Bandha (Energy Lock)",
  "Teaching Methodology",
  "Alignment",
  "Adjustment",
  "Evaluation & Certification"
];

export default function SyllabusSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // <section className="w-full py-20 bg-[#f7f4f2] px-6">
         <section
      id="syllabus"
      className="scroll-mt-32 w-full py-20 bg-[#f7f4f2] px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#b37a55]">
            Syllabus For 200 Hour Yoga Teacher Training Bali
          </h2>

          <div className="flex justify-center items-center mt-4">
            <div className="w-20 h-[1px] bg-[#d9b6a3]"></div>
            <span className="mx-3 text-[#d9b6a3] text-xl">🪷</span>
            <div className="w-20 h-[1px] bg-[#d9b6a3]"></div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* SYLLABUS ACCORDION */}
          <div className="lg:col-span-2 space-y-4">

            {syllabusItems.map((item, index) => (
              <div
                key={index}
                className="border border-[#e6c9b5] rounded-md overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left text-[#b37a55] font-medium"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#c3875a]">✦</span>
                    {item}
                  </span>

                  <FaChevronDown
                    className={`transition ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-5 pb-4 text-gray-600 text-sm">
                    Detailed content about {item} will be covered during the
                    course.
                  </div>
                )}
              </div>
            ))}

          </div>

          {/* ENQUIRY FORM */}
          <div className="bg-white shadow-md rounded-lg p-6 border border-[#ead5c8]">

            <h3 className="text-xl font-semibold text-[#b37a55] text-center">
              Enquiry Form
            </h3>

            <p className="text-center text-sm text-gray-500 mb-6">
              We'll contact you shortly
            </p>

            <form className="space-y-4">

              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-[#e6c9b5] rounded-md pl-10 py-2"
                />
              </div>

              <div className="relative">
                <FaPhone className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="w-full border border-[#e6c9b5] rounded-md pl-10 py-2"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-[#e6c9b5] rounded-md pl-10 py-2"
                />
              </div>

              <div className="relative">
                <FaBook className="absolute left-3 top-3 text-gray-400" />
                <select className="w-full border border-[#e6c9b5] rounded-md pl-10 py-2">
                  <option>Select Course</option>
                  <option>200 Hour Yoga TTC</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">

                <div className="relative">
                  <FaVenusMars className="absolute left-3 top-3 text-gray-400" />
                  <select className="w-full border border-[#e6c9b5] rounded-md pl-10 py-2">
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div className="relative">
                  <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
                  <select className="w-full border border-[#e6c9b5] rounded-md pl-10 py-2">
                    <option>Select Month</option>
                  </select>
                </div>

              </div>

              <div className="relative">
                <FaBed className="absolute left-3 top-3 text-gray-400" />
                <select className="w-full border border-[#e6c9b5] rounded-md pl-10 py-2">
                  <option>Select Room Type</option>
                </select>
              </div>

              <textarea
                placeholder="Your yoga experience level and any questions..."
                className="w-full border border-[#e6c9b5] rounded-md p-3"
                rows="3"
              ></textarea>

              <button className="w-full bg-[#c3875a] text-white py-3 rounded-md hover:bg-[#b3754c] transition">
                Submit Details
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
