import React from "react";

const CourseTabs = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <div className="w-full bg-[#c3875a] sticky top-[70px] z-40">

      <div className="max-w-7xl mx-auto px-4 py-3">

        <div className="flex flex-wrap justify-center gap-3">

          <button
            onClick={() => scrollToSection("syllabus")}
            className="border border-white text-white px-5 py-2 text-sm hover:bg-white hover:text-[#c3875a] transition"
          >
            Syllabus
          </button>

          <button
            onClick={() => scrollToSection("schedule")}
            className="border border-white text-white px-5 py-2 text-sm hover:bg-white hover:text-[#c3875a] transition"
          >
            Schedule
          </button>

          <button
            onClick={() => scrollToSection("courseFee")}
            className="border border-white text-white px-5 py-2 text-sm hover:bg-white hover:text-[#c3875a] transition"
          >
            Course Fee
          </button>

          <button
            onClick={() => scrollToSection("rooms")}
            className="border border-white text-white px-5 py-2 text-sm hover:bg-white hover:text-[#c3875a] transition"
          >
            Rooms
          </button>

        </div>

      </div>

    </div>
  );
};

export default CourseTabs;
