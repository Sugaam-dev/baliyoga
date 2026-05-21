import React from "react";
import {
  ArrowRight,
  MapPin,
  Star,
  Sparkles,
  BadgePercent,
} from "lucide-react";

import yogaTeacherImg from "./images/yoga-teacher-training-bali.jpg";
import yogaRetreatImg from "./images/yoga.jpg";
import soundHealingImg from "./images/yoga0.jpg";

const BaliYogaOffers = () => {
  const offers = [
    {
      id: 1,
      image: yogaTeacherImg,
      title: "Yoga Teacher Training",
      discount: "30%",
      subtitle: "DISCOUNT",
      locations: ["Ubud", "Uluwatu", "Canggu", "Rishikesh"],
      color: "from-orange-500 to-yellow-400",
      button: "Join Training",
    },
    {
      id: 2,
      image: yogaRetreatImg,
      title: "Yoga Retreat",
      discount: "20%",
      subtitle: "DISCOUNT",
      locations: ["Rishikesh", "Ubud", "Uluwatu", "Canggu"],
      color: "from-pink-400 to-orange-400",
      button: "Book Retreat",
    },
    {
      id: 3,
      image: soundHealingImg,
      title: "Sound / Reiki Healing",
      discount: "20%",
      subtitle: "DISCOUNT",
      locations: ["Rishikesh", "Ubud", "Uluwatu", "Canggu"],
      color: "from-green-300 to-green-500",
      button: "Explore Healing",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f4ee] py-16 md:py-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff8ef] via-[#f7f4ee] to-[#edf8ee] z-0"></div>

      {/* Blur Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[320px] h-[320px] bg-orange-300/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-100px] w-[320px] h-[320px] bg-green-300/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-[1900px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#e9f6e9] border border-green-200 text-[#2f7d4c] px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
            <Sparkles size={16} />
            SPECIAL BALI YOGA OFFERS
          </div>

          <h2 className="mt-6 text-[1rem] sm:text-[1.5rem] md:text-[2.5rem] xl:text-[3rem] leading-[1.1] text-[#1e3527]">
            Transform Your Life With
            <span className="block bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
              Bali Yoga Experiences
            </span>
          </h2>

          <p className="mt-6 text-gray-700 text-[16px] sm:text-[18px] xl:text-[20px] leading-relaxed">
            Discover authentic yoga teacher training, peaceful retreats,
            meditation, sound healing, and spiritual growth in Bali’s most
            beautiful destinations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="group relative overflow-hidden rounded-[30px] shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-[620px] sm:h-[720px] xl:h-[760px] 2xl:h-[850px] overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                  {/* Top Badge */}
                  <div className="self-start">
                    <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm font-semibold">
                      <Star size={16} className="fill-white" />
                      Bali Yoga Kendra
                    </div>
                  </div>

                  <div className="space-y-5">
                    {/* Title */}
                    <h3 className="text-white text-[2rem] sm:text-[2.5rem] xl:text-[3rem] leading-[1.05] font-light uppercase tracking-wide">
                      {offer.title}
                    </h3>

                    {/* Divider */}
                    <div className="w-full h-[2px] bg-white/40"></div>

                    {/* Discount */}
                    <div className="flex flex-wrap items-end gap-4">
                      <h1
                        className={`text-[4rem] sm:text-[5rem] xl:text-[5.8rem] leading-none font-black bg-gradient-to-r ${offer.color} bg-clip-text text-transparent drop-shadow-2xl`}
                      >
                        {offer.discount}
                      </h1>

                      <span className="text-white text-[2rem] sm:text-[2.5rem] xl:text-[3rem] font-bold mb-4 tracking-wide whitespace-normal">
                        {offer.subtitle}
                      </span>
                    </div>

                    {/* Locations */}
                    <div className="space-y-3">
                      {offer.locations.map((location, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 text-white/90 text-lg sm:text-xl"
                        >
                          <MapPin
                            size={18}
                            className="text-orange-300 min-w-[18px]"
                          />

                          <span>{location}</span>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <button className="group/btn w-full bg-white text-[#1e3527] hover:bg-gradient-to-r hover:from-orange-500 hover:to-green-600 hover:text-white px-6 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-xl">
                      {offer.button}

                      <ArrowRight
                        size={20}
                        className="group-hover/btn:translate-x-1 transition"
                      />
                    </button>
                  </div>

                  {/* Bottom Label */}
                  <div className="flex items-center justify-between text-white/70 text-sm">
                    <div className="flex items-center gap-2">
                      <BadgePercent size={16} />
                      Limited Time Offer
                    </div>

                    <span> Bali Yoga Kendra</span>
                  </div>
                </div>
              </div>

              {/* Glow Border */}
              <div className="absolute inset-0 rounded-[30px] border border-white/10"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-20 relative overflow-hidden rounded-[35px] bg-gradient-to-r from-[#1f3528] to-[#2f7d4c] p-8 md:p-14 shadow-2xl"> */}
          {/* Decorative */}
          {/* <div className="absolute right-[-100px] top-[-100px] w-[300px] h-[300px] border border-white/10 rounded-full"></div> */}

          {/* <div className="absolute right-[20px] top-[20px] w-[220px] h-[220px] border border-white/10 rounded-full"></div> */}

          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10"> */}
            {/* <div> */}
              {/* <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-white px-5 py-2 rounded-full text-sm font-semibold">
                <Sparkles size={16} />
                START YOUR JOURNEY TODAY
              </div> */}

              {/* <h2 className="mt-6 text-white text-[2.5rem] sm:text-[3.5rem] xl:text-[4.5rem] leading-[1.1] font-bold">
                Heal, Grow & Transform In Bali
              </h2> */}

              {/* <p className="mt-6 text-white/80 text-lg leading-relaxed max-w-2xl">
                Join our globally recognized yoga teacher training, retreats,
                and healing programs designed to transform your body, mind, and
                soul.
              </p> */}
            {/* </div> */}

            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row lg:justify-end gap-5">
              <button className="bg-gradient-to-r from-orange-500 to-orange-400 hover:scale-105 transition duration-300 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl">
                Explore Courses
              </button>

              <button className="border-2 border-white/40 text-white hover:bg-white hover:text-[#1f3528] px-8 py-4 rounded-full text-lg font-semibold transition duration-300">
                Contact Us
              </button>
            </div> */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default BaliYogaOffers;