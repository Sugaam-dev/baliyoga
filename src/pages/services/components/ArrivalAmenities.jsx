import React from "react";
import arrivalImg from "../../../assets/images/services/Bestyoga.jpg";
import { FaGlassCheers, FaAppleAlt, FaUtensils, FaCar } from "react-icons/fa";

const ArrivalAmenities = () => {
  return (
    <section className="w-full py-20 px-6 bg-[#f7f4f2]">
      <div className="max-w-7xl mx-auto relative">

        {/* Card Container */}
        <div className="relative bg-[#efe6df] rounded-3xl p-10 md:p-16 overflow-hidden">

          {/* Decorative Circles */}
          <div className="absolute w-40 h-40 bg-[#e4d8cf] rounded-full -top-10 -left-10 opacity-60"></div>
          <div className="absolute w-40 h-40 bg-[#e4d8cf] rounded-full -top-10 -right-10 opacity-60"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div>

              <p className="text-[#b37a55] text-xs tracking-widest mb-2 uppercase">
                • Warm Welcome & Thoughtful Amenities
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold text-[#b37a55] mb-4">
                Amenities On Arrival to Begin Your Journey
              </h2>

              <p className="text-gray-600 text-sm mb-8 max-w-xl">
                Students will receive welcome drinks upon arrival. You will be warmly
                welcomed by our team as you check in. Fruits will be available at the
                reception desk for students to enjoy it at anytime.
              </p>

              {/* FEATURES */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#b37a55] text-white flex items-center justify-center rounded-lg shadow">
                    <FaGlassCheers />
                  </div>
                  <p className="text-gray-700 text-sm">
                    Welcome drinks on arrival
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#b37a55] text-white flex items-center justify-center rounded-lg shadow">
                    <FaAppleAlt />
                  </div>
                  <p className="text-gray-700 text-sm">
                    Fruits available at reception
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#b37a55] text-white flex items-center justify-center rounded-lg shadow">
                    <FaUtensils />
                  </div>
                  <p className="text-gray-700 text-sm">
                    Meals available upon arrival
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#b37a55] text-white flex items-center justify-center rounded-lg shadow">
                    <FaCar />
                  </div>
                  <p className="text-gray-700 text-sm">
                    Transportation assistance
                  </p>
                </div>

              </div>

              <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                If students arrive during breakfast, lunch or dinner they are welcome
                to eat in the dining hall. For students coming from other hotels we
                are able to offer our car or scooter to pick you up and can help with
                anything you need, just let us know. We are here to ensure your stay
                begins with ease and comfort.
              </p>

            </div>

            {/* RIGHT IMAGE */}
            <div className="h-full flex justify-center lg:justify-end">
              <img
                src={arrivalImg}
                alt="Arrival Welcome"
                className="w-full max-w-sm h-full object-cover rounded-2xl shadow-lg"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ArrivalAmenities;
