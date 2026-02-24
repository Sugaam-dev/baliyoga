import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import images
import bali1 from "./images/bali1.jpg";
import bali2 from "./images/bali2.jpg";
import bali3 from "./images/bali3.jpg";
import bali4 from "./images/bali4.jpg";
import bali5 from "./images/bali5.jpg";
import bali6 from "./images/bali6.jpg";
import bali7 from "./images/bali7.jpg";

import centre1 from "./images/Yoga-Searcher-Uluwatu-Bali.jpg";
import centre2 from "./images/fivelements-2.jpg";
import centre3 from "./images/baliimage.jpg";
import centre4 from "./images/Prana-Yoga-Studio-Seminyak-Bali.jpg";



import gallery1 from "./images/bali-yoga-teacher-training-check-list-NAMASTSHAY.jpg";
import gallery2 from "./images/Yoga-session-at-the-Bali-Green-Retreat.jpg";
import gallery3 from "./images/yogagallery.jpg";
import gallery4 from "./images/alchemyyoga.jpg";
import gallery5 from "./images/yoga-teacher-training-bali.jpg";
import gallery6 from "./images/Ubud-Yoga-Photography-3-1.jpg";
import gallery7 from "./images/4-Days-Yoga-Retreat-In-Canggu-Bali.jpg";
import gallery8 from "./images/the-istana-1.jpg";
import gallery9 from "./images/shutterstock_314587241.jpg";
import gallery10 from "./images/baligallery.jpg";

import retreatImg from "./images/bali1.jpg"; // or use your exact retreat image

import HeroSection from "../../components/Hero";

const galleryImages = [
  {
    id: 1,
    image: bali1,
    title: "Yoga Practice",
    description: "Experience mindful movement and breath awareness.",
  },
  {
    id: 2,
    image: bali2,
    title: "Wellness & Healing",
    description: "Holistic therapies for body and soul.",
  },
  {
    id: 3,
    image: bali3,
    title: "Workshops & Events",
    description: "Join transformative learning sessions.",
  },
  {
    id: 4,
    image: bali4,
    title: "Spiritual Growth",
    description: "Deepen your inner connection.",
  },
  {
    id: 5,
    image: bali5,
    title: "Meditation Retreat",
    description: "Find peace in serene surroundings.",
  },
  {
    id: 6,
    image: bali6,
    title: "Community Connection",
    description: "Grow together in supportive community.",
  },
  {
    id: 7,
    image: bali7,
    title: "Learning Spaces",
    description: "Inspiring spaces for transformation.",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const visibleImages = 3;
  const visibleImages = window.innerWidth < 768 ? 1 : 3;
  const maxIndex = galleryImages.length - visibleImages;

  // const handleNext = () => {
  //   if (currentIndex < maxIndex) {
  //     setCurrentIndex(currentIndex + 1);
  //   }
  // };

 const handleNext = () => {
  setCurrentIndex((prev) =>
    prev >= maxIndex ? 0 : prev + 1
  );
};

  // const handlePrev = () => {
  //   if (currentIndex > 0) {
  //     setCurrentIndex(currentIndex - 1);
  //   }
  // };
  const handlePrev = () => {
  setCurrentIndex((prev) =>
    prev <= 0 ? maxIndex : prev - 1
  );
};

  return (
    <main className="bg-[#f8f5f5]">
      <HeroSection />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl relative">

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:-left-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg hover:bg-gray-100"
          >
            <ChevronLeft />
          </button>

          {/* Slider Wrapper */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleImages)}%)`,
              }}
            >
              {galleryImages.map((item) => (
                <div
                  key={item.id}
                  className="w-full md:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="group relative overflow-hidden rounded-3xl">

                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Title + Text */}
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-200">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 md:-right-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg hover:bg-gray-100"
          >
            <ChevronRight />
          </button>

        </div>
      </section>

       


                    {/* Bali Yoga Centre Section */}
             <section className="bg-[#f3f3f3] py-20 px-6">
                <div className="mx-auto max-w-7xl">
                  {/* Section Heading */}
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-gray-800">                     
                      WHAT’S HAPPENING AT THE BALI YOGA CENTRE
                    </h2>
                  </div>

                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

                    {/* Card */}
                    {[
                      {
                        img: centre1,
                        title: "Yoga Classes & Events",
                        desc: "Daily classes, retreat, workshops, holidays trainings.",
                      },
                      {
                        img: centre2,
                        title: "Cafe & Lounge",
                        desc: "A peaceful and mindful place to eat delicious, healthy food and spend time after class.",
                      },
                      {
                        img: centre3,
                        title: "Lifestyle Shop",
                        desc: "We’ve got yoga clothes, jewelry, holistic self-care products, snacks and more.",
                      },
                      {
                        img: centre4,
                        title: "Beauty / Body Work",
                        desc: "Natural facials and massage for yogis (must prebook in advanced).",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="group text-center transition-all duration-500 hover:-translate-y-2"
                      >
                        <div className="relative overflow-hidden">

                          {/* Image */}
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-[280px] md:h-[320px] object-cover transition-transform duration-700 group-hover:scale-110"
                          />

                          {/* Overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500"></div>
                        </div>

                        {/* Text */}
                        <h3 className="mt-6 text-sm tracking-widest font-semibold text-gray-800 uppercase">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm text-gray-600 max-w-md mx-auto">
                          {item.desc}
                        </p>
                      </div>
                    ))}

                  </div>
                </div>
              </section>






      {/* Retreat Section */}
<section className="bg-[#e6d6c3] py-20 px-6">
  <div className="mx-auto max-w-7xl grid items-center gap-12 md:grid-cols-2">

    {/* Left Content */}
    <div className="relative">

      {/* Light Mandala Background Effect */}
      <div className="absolute -left-10 top-0 h-80 w-80 opacity-10">
        <div className="h-full w-full rounded-full border-4 border-[#b4533c]" />
      </div>

      <h2 className="relative text-4xl font-bold tracking-wide text-[#b4533c]">
       OUR RETREATS
      </h2>

      <div className="mt-8 space-y-6">
        <div className="flex items-center justify-between max-w-xs text-lg text-gray-700 hover:text-[#b4533c] cursor-pointer">
          <span>Signature Retreats</span>
          <span className="text-2xl">›</span>
        </div>

        <div className="flex items-center justify-between max-w-xs text-lg text-gray-700 hover:text-[#b4533c] cursor-pointer">
          <span>Yogi’s Garden</span>
          <span className="text-2xl">›</span>
        </div>
      </div>

      <button className="mt-10 rounded-md border border-[#b4533c] px-6 py-3 text-sm font-medium text-[#b4533c] transition hover:bg-[#b4533c] hover:text-white">
        ALL RETREATS
      </button>
    </div>

    {/* Right Image */}
    <div className="flex justify-center md:justify-end">
      <img
        src={retreatImg}
        alt="Retreat"
        className="w-full max-w-xl rounded-[40px] object-cover shadow-lg"
      />
    </div>

  </div>
</section>







            {/* Discover the Yoga Gallery Section */}
            <section className="bg-[#e6d6c3] py-20 px-6">
              <div className="mx-auto max-w-7xl">

                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-4">
                  
                  <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-[#b4533c]">
                    Discover the Yoga Gallery
                  </h2>

                  <div className="text-sm md:text-base text-[#b4533c] font-medium">
                    @theyogabarn
                  </div>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                  {[
                    gallery1,
                    gallery2,
                    gallery3,
                    gallery4,
                    gallery5,
                    gallery6,
                    gallery7,
                    gallery8,
                    gallery9,
                    gallery10,
                  ].map((img, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden"
                    >
                      <img
                        src={img}
                        alt="Yoga Gallery"
                        className="w-full h-60 md:h-56 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500"></div>
                    </div>
                  ))}

                </div>
              </div>
            </section>
    </main>
  );
}