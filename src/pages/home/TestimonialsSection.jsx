import React, { useState } from "react";
import {
  Quote,
  Star,
  ChevronDown,
  ChevronUp,
  MapPin,
} from "lucide-react";
import yoga1 from "./images/Ubud-Yoga-Photography-3-1.jpg";


const TestimonialsSection = () => {
  const [showMore, setShowMore] = useState(false);

  const testimonials = [
    {
      name: "Sophia M.",
      country: "Australia",
      image: yoga1,
      review:
        "This training changed my life. The teachings, food, people and energy in Bali are something I’ll forever be grateful for.",
    },
    {
      name: "James L.",
      country: "United States",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
      review:
        "I came for certification, but I found my purpose. The teachers are authentic and truly inspiring.",
    },
    {
      name: "Clara R.",
      country: "Germany",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
      review:
        "The perfect blend of tradition, practice and transformation. I highly recommend Bali Yoga Kendra.",
    },
    {
      name: "Marco D.",
      country: "Italy",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
      review:
        "An unforgettable experience! I leave not just as a teacher, but as a more conscious human being.",
    },
    {
      name: "Emma K.",
      country: "Canada",
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400&auto=format&fit=crop",
      review:
        "Every sunrise meditation felt magical. The peaceful Bali atmosphere made learning deeply transformative.",
    },
    {
      name: "Daniel S.",
      country: "Spain",
      image:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=400&auto=format&fit=crop",
      review:
        "Beautiful people, beautiful culture, and a yoga experience that touched my soul completely.",
    },
    {
      name: "Olivia T.",
      country: "France",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
      review:
        "The retreat center, the nature and the teaching quality exceeded all my expectations.",
    },
    {
      name: "Ryan J.",
      country: "Singapore",
      image:
        "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=400&auto=format&fit=crop",
      review:
        "I gained confidence, clarity and lifelong friendships during this beautiful yoga journey.",
    },
  ];

  const visibleTestimonials = showMore
    ? testimonials
    : testimonials.slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-[#f9f5ef] py-14 sm:py-16 lg:py-20 2xl:py-28">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#ffb366]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#5b8c51]/20 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-[95%] sm:max-w-[92%] lg:max-w-[90%] 2xl:max-w-[1800px]">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-14 lg:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[5px] text-[#d97706] sm:text-base 2xl:text-xl">
            Student Experiences
          </p>

          <h2 className="mx-auto max-w-4xl font-serif text-3xl font-bold leading-tight text-[#1e3d2f] sm:text-4xl lg:text-5xl 2xl:text-7xl">
            Stories That Inspire
            <span className="block text-[#d97706]">
              Transformation Through Yoga
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#d97706] to-[#5b8c51] sm:w-28 2xl:h-2 2xl:w-40" />

          <p className="mx-auto mt-6 max-w-3xl px-2 text-sm leading-relaxed text-[#5c5c5c] sm:text-base lg:text-lg 2xl:max-w-5xl 2xl:text-2xl">
            Hear from students around the world who discovered peace,
            confidence, healing and purpose through our authentic Bali yoga
            experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 2xl:gap-10">
          {visibleTestimonials.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[28px] border border-[#e7dfd3] bg-white/90 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:p-7 lg:p-6 2xl:rounded-[40px] 2xl:p-10"
            >
              {/* Top Gradient */}
              <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#5b8c51] via-[#f59e0b] to-[#5b8c51]" />

              {/* Quote */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff4e6] text-[#d97706] shadow-sm 2xl:h-16 2xl:w-16">
                  <Quote className="h-6 w-6 2xl:h-8 2xl:w-8" />
                </div>

                <div className="flex gap-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b] 2xl:h-6 2xl:w-6"
                    />
                  ))}
                </div>
              </div>

              {/* Review */}
              <p className="mb-8 text-[15px] leading-relaxed text-[#4f4f4f] sm:text-base 2xl:text-2xl 2xl:leading-relaxed">
                “{item.review}”
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover ring-4 ring-[#fff3e0] transition-transform duration-500 group-hover:scale-105 2xl:h-20 2xl:w-20"
                />

                <div>
                  <h4 className="text-base font-semibold text-[#1e3d2f] 2xl:text-3xl">
                    {item.name}
                  </h4>

                  <div className="mt-1 flex items-center gap-1 text-sm text-[#6b7280] 2xl:text-xl">
                    <MapPin className="h-4 w-4 text-[#d97706] 2xl:h-5 2xl:w-5" />
                    {item.country}
                  </div>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#5b8c51]/10 blur-3xl transition-all duration-500 group-hover:scale-150" />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center sm:mt-14">
          <button
            onClick={() => setShowMore(!showMore)}
            className="group inline-flex items-center gap-3 rounded-full border border-[#d97706] bg-gradient-to-r from-[#d97706] to-[#f59e0b] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:px-9 sm:py-4 sm:text-base 2xl:px-14 2xl:py-6 2xl:text-2xl"
          >
            {showMore ? "Show Less Reviews" : "Read More Reviews"}

            {showMore ? (
              <ChevronUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 2xl:h-7 2xl:w-7" />
            ) : (
              <ChevronDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1 2xl:h-7 2xl:w-7" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;