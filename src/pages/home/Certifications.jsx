import React from "react";

import cert1 from "./images/yoga-alliance-usa-certified-200.jpeg";
import cert2 from "./images/yoga-alliance-usa-certified.jpeg";
import cert3 from "./images/Internatonal-yoga.jpeg";
import cert4 from "./images/Internatonal-yoga-organization.jpeg";

const Certifications = () => {
  return (
    <section className="w-full bg-[#f3f3f3] py-12 px-4">
      <div className="max-w-6xl mx-auto border border-orange-400 rounded-2xl bg-white p-6 md:p-10">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-orange-500">
            OUR YOGA CERTIFICATIONS
          </h2>

          <div className="w-16 h-[2px] bg-orange-400 mx-auto my-3"></div>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            <span className="font-semibold text-gray-800">Bali Yoga School</span> is globally recognized for authentic yoga education and certified by leading yoga organizations worldwide. Our certifications represent integrity, professionalism, and spiritual excellence.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-6">

            <div className="border-l-2 border-orange-400 pl-4">
              <h3 className="text-orange-500 font-medium">
                Yoga Alliance 200 hrs Certificate
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Begin your teaching journey with this foundational course, accredited by Yoga Alliance USA.
              </p>
            </div>

            <div className="border-l-2 border-orange-400 pl-4">
              <h3 className="text-orange-500 font-medium">
                Yoga Alliance 300 hrs Certificate
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Advance your yoga expertise with deeper studies in teaching methodology and yogic sciences.
              </p>
            </div>

            <div className="border-l-2 border-orange-400 pl-4">
              <h3 className="text-orange-500 font-medium">
                IYS® - International Yoga School Certification
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Recognizing Bali Yoga School for international standards in authentic yoga education.
              </p>
            </div>

            <div className="border-l-2 border-orange-400 pl-4">
              <h3 className="text-orange-500 font-medium">
                IYS® Recognition
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Exclusive IYS® certification acknowledging Bali Yoga School as a globally registered yoga institution.
              </p>
            </div>

          </div>

          {/* RIGHT IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            
            <img
              src={cert1}
              alt="200hrs"
              className="rounded-xl shadow-sm border p-2 bg-white object-cover w-full h-full"
            />

            <img
              src={cert2}
              alt="300hrs"
              className="rounded-xl shadow-sm border p-2 bg-white object-cover w-full h-full"
            />

            <img
              src={cert3}
              alt="IYS"
              className="rounded-xl shadow-sm border p-2 bg-white object-cover w-full h-full"
            />

            <img
              src={cert4}
              alt="IYO"
              className="rounded-xl shadow-sm border p-2 bg-white object-cover w-full h-full"
            />
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          
          <button className="border border-orange-400 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition">
            View IYO Registration
          </button>

          <button className="border border-orange-400 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition">
            IYO Certification Registry
          </button>

          <button className="border border-orange-400 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition">
            Yoga Alliance Profile
          </button>

        </div>
      </div>
    </section>
  );
};

export default Certifications;