import React, { useState, useEffect } from "react";

export default function Testimonials({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // ===============================
  // RESPONSIVE CARDS
  // ===============================
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ===============================
  // AUTO SLIDER
  // ===============================
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = testimonials.length - visibleCards;

        if (prev >= maxIndex) return 0;

        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [visibleCards, testimonials.length]);

  return (
    <section className="py-14 sm:py-16 md:py-20 bg-[#f3eee7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-12">
          Student Testimonials
        </h2>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-[2000ms] ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`px-3 flex-shrink-0 ${
                  visibleCards === 1
                    ? "w-full"
                    : visibleCards === 2
                    ? "w-1/2"
                    : "w-1/3"
                }`}
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 text-center h-full border border-stone-100">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-52 sm:h-64 object-cover rounded-2xl mb-6 transition-all duration-500 hover:scale-105 cursor-pointer"
                    />
                  </div>

                  <p className="italic text-base sm:text-lg text-gray-700 leading-relaxed">
                    "{item.text}"
                  </p>

                  <p className="mt-4 font-semibold text-[#b4533c]">
                    – {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
