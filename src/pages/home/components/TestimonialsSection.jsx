import React, { useState } from "react";
import { Quote, Star, ChevronDown, ChevronUp, MapPin } from "lucide-react";
import SectionHeading from "../../../components/shared/SectionHeading";
import MobileCarousel from "../../../components/shared/MobileCarousel";
import ScrollReveal from "../../../components/shared/ScrollReveal";
import yoga1 from "../../../assets/images/home/Ubud-Yoga-Photography-3-1.jpg";

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
    <section className="relative overflow-hidden bg-[#FAF8F5] py-10 md:py-14 border-b border-stone-200/50">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-orange-200/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-green-200/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading using SectionHeading */}
        <ScrollReveal>
          <div className="relative">
            <div className="flex justify-center mb-6">
              <span className="uppercase tracking-[0.2em] text-[11px] font-bold text-[#c38b5f] inline-block">
                Student Experiences ✦
              </span>
            </div>
            <SectionHeading 
              title="Stories That" 
              highlight="Inspire Transformation" 
              subtitle="Hear from students around the world who discovered peace, confidence, healing, and purpose through our authentic Bali yoga teacher training."
            />
          </div>
        </ScrollReveal>

        {/* Carousel on mobile, grid with read more button on desktop */}
        <ScrollReveal delay={0.15}>
          <div>
            {/* Mobile view uses ALL testimonials inside the carousel */}
            <MobileCarousel
              items={testimonials}
              gridClass="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
              renderItem={(item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[28px] border border-stone-200/40 bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Quote / Star Row */}
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50/60 text-[#c38b5f]">
                        <Quote className="h-5 w-5 fill-current" />
                      </div>

                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className="h-3.5 w-3.5 fill-amber-500 text-amber-500"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="mb-6 text-sm text-stone-700 leading-relaxed italic">
                      “{item.review}”
                    </p>
                  </div>

                  {/* User Profile Info */}
                  <div className="flex items-center gap-4 border-t border-stone-100 pt-4 mt-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-orange-100/50 transform transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    <div>
                      <h4 className="text-sm font-bold text-stone-900">
                        {item.name}
                      </h4>

                      <div className="mt-1 flex items-center gap-1 text-[11px] font-bold text-stone-500 uppercase tracking-wide">
                        <MapPin className="h-3 w-3 text-[#c38b5f]" />
                        {item.country}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
        </ScrollReveal>

        {/* Read More Button - Only visible on desktop/tablet since mobile uses all items inside carousel */}
        <div className="hidden md:flex justify-center mt-12">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 border border-[#c38b5f] text-[#c38b5f] hover:bg-[#c38b5f] hover:text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer bg-transparent"
          >
            {showMore ? "Show Less Reviews" : "Read More Reviews"}
            {showMore ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
