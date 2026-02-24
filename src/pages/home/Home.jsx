

// // Import images correctly from home/images folder
// import bali1 from "./images/bali1.jpg";
// import bali2 from "./images/bali2.jpg";
// import bali3 from "./images/bali3.jpg";
// import bali4 from "./images/bali4.jpg";
// import bali5 from "./images/bali5.jpg";
// import bali6 from "./images/bali6.jpg";
// import bali7 from "./images/bali7.jpg";
// import HeroSection from "../../components/Hero";

// const galleryImages = [
//   { id: 1, image: bali1, title: "Yoga Practice" },
//   { id: 2, image: bali2, title: "Wellness & Healing" },
//   { id: 3, image: bali3, title: "Workshops & Events" },
//   { id: 4, image: bali4, title: "Spiritual Growth" },
//   { id: 5, image: bali5, title: "Meditation Retreat" },
//   { id: 6, image: bali6, title: "Community Connection" },
//   { id: 7, image: bali7, title: "Learning Spaces" },
  
// ];

// export default function Home() {
//   return (
//     <main className="bg-[#f8f5f5]">
//       {/* Hero Section */}
//       <HeroSection />

//       {/* Gallery Section */}
//       <section className="px-6 py-16">
//         <div className="mx-auto max-w-7xl">
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {galleryImages.map((item) => (
//               <div
//                 key={item.id}
//                 className="group relative overflow-hidden rounded-3xl"
//               >
//                 {/* Image */}
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />

//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

//                 {/* Text */}
//                 <div className="absolute bottom-6 left-6">
//                   <h3 className="text-xl font-semibold text-white">
//                     {item.title}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

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

  const visibleImages = 3;
  const maxIndex = galleryImages.length - visibleImages;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <main className="bg-[#f8f5f5]">
      <HeroSection />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl relative">

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg hover:bg-gray-100"
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
                  className="w-1/3 flex-shrink-0 px-4"
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
            className="absolute -right-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg hover:bg-gray-100"
          >
            <ChevronRight />
          </button>

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
    </main>
  );
}