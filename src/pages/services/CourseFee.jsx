import React from "react";

const pricing = [
  {
    title: "6 Shared Room",
    price: "$1299",
    old: "$1699",
    tag: "Females Only",
    save: "Save $400 (24% off)"
  },
  {
    title: "4 Shared Room",
    price: "$1399",
    old: "$1799",
    tag: "Females Only",
    save: "Save $400 (22% off)"
  },
  {
    title: "2 Shared Room",
    price: "$1699",
    old: "$2099",
    tag: "Icon",
    save: "Save $400 (19% off)"
  },
  {
    title: "Private Room",
    price: "$2299",
    old: "$2699",
    tag: "Recommended",
    save: "Save $400 (15% off)"
  }
];

const CourseFee = () => {
  return (
    <section id="courseFee" className="scroll-mt-32 py-20 bg-[#f7f4f2] px-6">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#b37a55]">
            Course Fees & Upcoming Dates For 200HR Yoga Teacher Training Bali
          </h2>

          <div className="flex justify-center items-center mt-4">
            <div className="w-20 h-[1px] bg-[#d9b6a3]"></div>
            <span className="mx-3 text-[#d9b6a3] text-xl">🪷</span>
            <div className="w-20 h-[1px] bg-[#d9b6a3]"></div>
          </div>

          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Course Fee Includes Food & Accommodation
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT INFO */}
          <div className="bg-white rounded-xl p-8 border border-[#ead5c8] shadow-sm">

            <div className="space-y-6">

              <div>
                <h4 className="font-semibold text-gray-800">Available batches:</h4>
                <p className="text-gray-600">September 2025 - May 2026</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">Course starts:</h4>
                <p className="text-gray-600">1st of every month</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">Course ends:</h4>
                <p className="text-gray-600">20th of every month</p>
              </div>

              <hr />

              <p className="text-gray-600 text-sm">
                Ready to start your yoga journey? Book your spot now and transform your life.
              </p>

              <button className="w-full bg-[#c3875a] text-white py-3 rounded-md hover:bg-[#b3754c] transition">
                Enroll Now
              </button>

              {/* INCLUDED */}
              <div className="mt-6">
                <h4 className="font-semibold mb-3 text-[#b37a55]">
                  What's Included:
                </h4>

                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 200 hours of comprehensive training</li>
                  <li>• All meals and accommodation</li>
                  <li>• Yoga Alliance certification</li>
                  <li>• Expert guidance from certified instructors</li>
                  <li>• Free Wifi</li>
                </ul>
              </div>

            </div>

          </div>

          {/* RIGHT PRICING */}
          <div className="space-y-6">

            {pricing.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#ead5c8] rounded-xl p-6 flex justify-between items-center flex-wrap gap-4 shadow-sm"
              >
                <div>
                  <h4 className="font-semibold text-[#b37a55]">
                    {item.title}
                  </h4>

                  <div className="mt-1">
                    <span className="text-xl font-semibold text-gray-800">
                      {item.price}
                    </span>

                    <span className="text-gray-400 line-through ml-2 text-sm">
                      {item.old}
                    </span>
                  </div>
                </div>

                <div className="text-right space-y-2">
                  <div className="text-xs border px-3 py-1 rounded-full text-[#b37a55] border-[#b37a55]">
                    {item.tag}
                  </div>

                  <div className="text-xs border px-3 py-1 rounded-full text-[#b37a55] border-[#b37a55]">
                    {item.save}
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>

        {/* NOTE */}
        <div className="mt-10 bg-[#ead5c8] text-[#b37a55] text-sm p-4 rounded">
          Note: Yogi Vishnu & Yogini HariPriya (teachers) both organise their
          time between Rishikesh and Bali depending on their schedules.
        </div>

      </div>
    </section>
  );
};

export default CourseFee;