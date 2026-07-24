import React, { useEffect, useRef, useState } from "react";
import { CheckCircle2, CalendarDays, ArrowRight, X, Sparkles } from "lucide-react";
import SectionHeading from "../../components/shared/SectionHeading";

const BaliYogaProgramSection = () => {
  const [showAllBatches, setShowAllBatches] = useState(false);
  const modalRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        showAllBatches &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setShowAllBatches(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [showAllBatches]);

  // Prevent background scroll
  useEffect(() => {
    if (showAllBatches) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showAllBatches]);

  const includes = [
    "21/28 Days Accommodation",
    "3 Sattvic Meals Daily",
    "Yoga Alliance Certification",
    "Course Materials & Manual",
    "Daily Yoga & Meditations",
    "Nature & Excursions",
    "DPS Airport Pickup",
    "Lifetime Support",
  ];

  const batches = [
    {
      day: "10",
      month: "MAY",
      date: "May 10 – May 30, 2026",
      status: "5 Seats Left",
      isLimited: true,
    },
    {
      day: "02",
      month: "JUN",
      date: "June 02 – June 22, 2026",
      status: "Filling Fast",
      isLimited: false,
    },
    {
      day: "24",
      month: "JUN",
      date: "June 24 – July 14, 2026",
      status: "Limited Seats",
      isLimited: true,
    },
  ];

  const allBatches = [
    {
      day: "10",
      month: "MAY",
      title: "200 Hour Yoga Teacher Training",
      date: "May 10 – May 30, 2026",
      seats: "5 Seats Left",
    },
    {
      day: "02",
      month: "JUN",
      title: "Meditation & Healing Retreat",
      date: "June 02 – June 22, 2026",
      seats: "Filling Fast",
    },
    {
      day: "24",
      month: "JUN",
      title: "Advanced Yoga Immersion",
      date: "June 24 – July 14, 2026",
      seats: "Limited Seats",
    },
    {
      day: "15",
      month: "JUL",
      title: "300 Hour Yoga TTC",
      date: "July 15 – August 04, 2026",
      seats: "Early Bird Open",
    },
    {
      day: "08",
      month: "AUG",
      title: "Bali Wellness Retreat",
      date: "August 08 – August 18, 2026",
      seats: "Booking Open",
    },
    {
      day: "01",
      month: "SEP",
      title: "Sound Healing Certification",
      date: "September 01 – September 10, 2026",
      seats: "7 Seats Left",
    },
  ];

  return (
    <>
      {/* MAIN SECTION */}
      <section className="relative w-full overflow-hidden bg-[#FAF8F5] py-6 md:py-10 border-b border-stone-200/50">
        <div className="absolute left-[-120px] top-[-100px] h-[280px] w-[280px] rounded-full bg-orange-200/10 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-100px] h-[320px] w-[320px] rounded-full bg-green-200/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl min-[1600px]:max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] px-6 md:px-12">
          {/* Heading using SectionHeading */}
          <SectionHeading 
            title="Begin Your" 
            highlight="Yoga Journey In Bali" 
            subtitle="Immerse yourself in authentic yogic living surrounded by Bali’s peaceful nature, spiritual culture, and healing energy."
          />

          {/* Restructured 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mt-12">
            
            {/* COLUMN 1: All-Inclusive Investment & Benefits Package */}
            <div className="bg-[#1c2e24] text-white rounded-[32px] p-8 sm:p-10 shadow-lg lg:col-span-5 flex flex-col justify-between relative overflow-hidden">
              {/* Background accent glow */}
              <div className="absolute -right-16 -top-16 w-36 h-36 bg-[#c38b5f]/15 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 w-full">
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-200/80 block mb-2">
                  Course Investment ✦
                </span>
                
                <h3 className="text-2xl font-bold font-serif text-[#FAF8F5]">
                  All-Inclusive Package
                </h3>
                
                <div className="my-6 flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-serif font-bold text-[#FAF8F5]">$2,200</span>
                  <span className="text-stone-300 text-xs font-semibold">USD / All Inclusive</span>
                </div>
                
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-8">
                  Covers organic meals, full accommodation, materials, dynamic excursions, airport transport, 
                  and your official Yoga Alliance Certification.
                </p>

                {/* Divider */}
                <div className="h-px bg-white/10 my-6" />

                {/* Inclusions checklist */}
                <h4 className="text-orange-200/80 font-bold uppercase tracking-wider text-[10px] mb-4">
                  What is included:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                  {includes.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#c38b5f]" />
                      <span className="text-xs sm:text-sm text-stone-200 font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a 
                href="#contact"
                className="w-full rounded-full bg-[#c38b5f] hover:bg-[#b0784d] text-white px-6 py-4 text-xs font-bold uppercase tracking-wider transition-all duration-300 text-center shadow-md hover:shadow-lg mt-10 block no-underline relative z-10"
              >
                APPLY FOR PROGRAM
              </a>
            </div>

            {/* COLUMN 2: Upcoming Batches & Schedule */}
            <div className="bg-white rounded-[32px] border border-stone-200/40 p-8 sm:p-10 shadow-sm lg:col-span-7 flex flex-col justify-between">
              
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-[#1c2e24] shadow-inner">
                    <CalendarDays className="h-5.5 w-5.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                      Schedule Details
                    </span>
                    <h3 className="text-xl font-bold text-stone-900 font-serif">
                      Upcoming Batches
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {batches.map((batch, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-4 rounded-2xl border border-stone-200/30 bg-[#fafafa] p-4 sm:flex-row sm:items-center sm:justify-between hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-4">
                        {/* Calendar Badge */}
                        <div className="flex h-14 w-14 flex-col items-center justify-center rounded-xl border border-stone-200 bg-white shadow-sm flex-shrink-0">
                          <span className="text-lg font-bold text-[#1c2e24]">
                            {batch.day}
                          </span>
                          <span className="text-[9px] font-bold tracking-wider text-[#c38b5f]">
                            {batch.month}
                          </span>
                        </div>

                        {/* Date details */}
                        <div>
                          <p className="text-sm font-bold text-stone-900 leading-snug">
                            {batch.date}
                          </p>
                          <span 
                            className={`inline-block text-[10px] font-bold uppercase tracking-wider mt-1 ${
                              batch.isLimited ? 'text-[#c38b5f]' : 'text-stone-500'
                            }`}
                          >
                            {batch.status}
                          </span>
                        </div>
                      </div>

                      {/* Apply button */}
                      <a 
                        href="#contact"
                        className="rounded-full bg-[#1c2e24] hover:bg-[#c38b5f] text-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider text-center transition-colors duration-300 no-underline self-start sm:self-center"
                      >
                        Reserve Spot
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* bottom view all button */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setShowAllBatches(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-700 transition-all duration-300 hover:border-[#c38b5f] hover:text-[#c38b5f] cursor-pointer"
                >
                  View All Batches
                  <ArrowRight className="h-3.5 w-3.5 text-[#c38b5f]" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ALL BATCHES POPUP MODAL */}
      {showAllBatches && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm animate-fade-in">
          <div
            ref={modalRef}
            className="relative w-full max-w-lg rounded-[28px] bg-[#FAF8F5] border border-stone-200/50 p-6 sm:p-8 shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowAllBatches(false)}
              className="absolute right-5 top-5 text-stone-400 hover:text-stone-700 transition cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Modal Heading */}
            <div className="mb-6 text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#c38b5f]">
                Complete List
              </span>
              <h3 className="text-2xl font-bold font-serif text-[#1c2e24] mt-1">
                Yoga Teacher Training Batches
              </h3>
            </div>

            {/* Scrollable list */}
            <div className="max-h-[380px] overflow-y-auto space-y-3 pr-2 scrollbar-thin">
              {allBatches.map((batch, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-stone-200/40 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 flex-col items-center justify-center rounded-xl border border-stone-200 bg-[#FAF8F5]">
                      <span className="text-lg font-bold text-[#1c2e24]">
                        {batch.day}
                      </span>
                      <span className="text-[9px] font-bold text-[#c38b5f]">
                        {batch.month}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-stone-900 leading-snug">
                        {batch.title}
                      </h4>
                      <p className="text-xs text-stone-600 font-semibold mt-0.5">
                        {batch.date}
                      </p>
                      <p className="text-[10px] font-bold text-[#c38b5f] mt-0.5">
                        {batch.seats}
                      </p>
                    </div>
                  </div>

                  <a 
                    href="#contact"
                    onClick={() => setShowAllBatches(false)}
                    className="rounded-full bg-[#1c2e24] hover:bg-[#c38b5f] px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-white text-center no-underline"
                  >
                    Select
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BaliYogaProgramSection;
