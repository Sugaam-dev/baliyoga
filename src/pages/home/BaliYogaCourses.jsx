import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

// IMPORT IMAGES
import bali4 from "./images/bali4.jpg";
import bali5 from "./images/bali5.jpg";
import bali6 from "./images/bali6.jpg";
import bali7 from "./images/bali7.jpg";
import yoga from "./images/yoga.jpg";
import yoga0 from "./images/yoga0.jpg";
import yoga1 from "./images/yoga1.jpg";
import yogagallery from "./images/yogagallery.jpg";

const BaliCoursesPage = () => {
  const [showAll, setShowAll] = useState(false);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(4);
      } else {
        setVisibleCards(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // COURSES DATA
  const courses = [
    {
      title: "BALI 200H HYBRID YTTC",
      price: "FROM: IDR 20.000.000",
      image: bali4,
    },
    {
      title: "BALI 300H YTTC",
      price: "FROM: IDR 52.000.000",
      image: bali5,
    },
    {
      title: "BALI 200H SOMATIC BREATHWORK TTC",
      price: "FROM: IDR 62.000.000",
      image: bali6,
    },
    {
      title: "BALI 50H YIN YTTC",
      price: "FROM: IDR 15.400.000",
      image: bali7,
    },
    {
      title: "BALI VINYASA TTC",
      price: "FROM: IDR 25.000.000",
      image: yoga,
    },
    {
      title: "BALI HATHA TTC",
      price: "FROM: IDR 28.000.000",
      image: yoga0,
    },
    {
      title: "BALI MEDITATION TTC",
      price: "FROM: IDR 18.000.000",
      image: yoga1,
    },
    {
      title: "BALI SOUND HEALING TTC",
      price: "FROM: IDR 32.000.000",
      image: yogagallery,
    },
  ];

  const displayedCourses = showAll
    ? courses
    : courses.slice(0, visibleCards);

  return (
    <div className="bg-[#f7f3ee] py-14 md:py-20 overflow-hidden">
      {/* ULTRA WIDE WRAPPER */}
      <div className="mx-auto w-full max-w-[1920px] 2xl:max-w-[2200px] px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* COURSES SECTION */}
        <section className="max-w-[1800px] mx-auto">
          
          {/* HEADING */}
          <div className="text-center mb-14 lg:mb-20">
            <p className="text-[#b57c4d] uppercase tracking-[3px] text-sm font-semibold mb-3">
              Our Courses
            </p>

            <h2
              className="
                text-[#2d2d2d]
                text-2xl
                sm:text-2xl
                md:text-3xl
                xl:text-5xl
                2xl:text-6xl
                font-serif
                leading-tight
              "
            >
              Yoga Teacher Training Courses in Bali
            </h2>

            <div className="w-20 h-[2px] bg-[#c69b74] mx-auto mt-5 rounded-full"></div>
          </div>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7 2xl:gap-10">
            {displayedCourses.map((course, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-[24px]
                  overflow-hidden
                  border
                  border-[#e8ddd1]
                  shadow-sm
                  hover:shadow-2xl
                  transition-all
                  duration-500
                  group
                  hover:-translate-y-2
                "
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="
                      w-full
                      h-[260px]
                      sm:h-[300px]
                      xl:h-[320px]
                      2xl:h-[360px]
                      object-cover
                      group-hover:scale-110
                      transition-transform
                      duration-700
                    "
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

                  {/* BADGE */}
                  <div className="absolute top-4 left-4 bg-[#314120] text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-md">
                    BALI
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 xl:p-7">
                  <h3
                    className="
                      text-[#2d2d2d]
                      text-[20px]
                      xl:text-[22px]
                      2xl:text-[24px]
                      leading-snug
                      font-serif
                     
                      min-h-[78px]
                    "
                  >
                    {course.title}
                  </h3>

                  <p className="text-[#b57c4d] font-bold text-sm mt-3 mb-6">
                    {course.price}
                  </p>

                  {/* BUTTON */}
                  <button
                    className="
                      flex
                      items-center
                      gap-2
                      text-[#314120]
                      text-sm
                      font-semibold
                      uppercase
                      tracking-wide
                      hover:gap-3
                      hover:text-[#b57c4d]
                      transition-all
                      duration-300
                    "
                  >
                    View More
                    <ArrowRight size={16} />
                  </button>
                </div>

                {/* BOTTOM LINE */}
                <div className="h-[3px] w-0 bg-gradient-to-r from-[#314120] to-[#b57c4d] group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* VIEW ALL BUTTON */}
          {courses.length > visibleCards && (
            <div className="flex justify-center mt-14">
              <button
                onClick={() => setShowAll(!showAll)}
                className="
                  bg-[#314120]
                  hover:bg-[#253218]
                  text-white
                  px-9
                  py-3.5
                  rounded-full
                  text-sm
                  font-semibold
                  tracking-wide
                  transition-all
                  duration-300
                  shadow-lg
                  hover:scale-105
                "
              >
                {showAll ? "SHOW LESS" : "VIEW ALL COURSES"}
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default BaliCoursesPage;