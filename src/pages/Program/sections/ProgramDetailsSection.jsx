import React, { useState } from "react";
import { Sunrise, Moon, CheckCircle, Sunrise as SunIcon, BookOpen, Clock, Info } from "lucide-react";
import { getIcon } from "./icons";
import MobileCarousel from "../../../components/shared/MobileCarousel";

// Sub-component for schedule items
const ScheduleRow = ({ item }) => (
  <div className="flex items-center gap-3.5 py-3.5 border-b border-stone-100 last:border-0">
    <div className="w-9 h-9 rounded-xl bg-stone-100 flex items-center justify-center text-[#1A2456] flex-shrink-0">
      {getIcon(item.icon, 14)}
    </div>
    <span className="font-semibold text-xs text-[#1A2456] w-20 flex-shrink-0">{item.time}</span>
    <span className="text-sm text-gray-700">{item.activity}</span>
  </div>
);

/**
 * ProgramDetailsSection - Merges CurriculumSection and ScheduleSection.
 * Allows users to toggle between the Syllabus and the Daily Schedule on the same block.
 */
export default function ProgramDetailsSection({ curriculumData, scheduleData }) {
  const [activeTab, setActiveTab] = useState("schedule"); // "curriculum" | "schedule"

  if (!curriculumData && !scheduleData) return null;

  const curriculum = curriculumData || {};
  const schedule = scheduleData || {};

  return (
    <section className="py-8 md:py-10 lg:py-12 md:py-8 md:py-10 bg-[#F7F3EF]">
      <div className="max-w-6xl min-[1600px]:max-w-[1320px] min-[1920px]:max-w-[1520px] min-[2500px]:max-w-[2000px] mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-[#C8A96A] text-xs font-semibold uppercase tracking-wider">
            {activeTab === "curriculum" ? curriculum.eyebrow || "Curriculum" : schedule.eyebrow || "Daily Flow"}
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A2456] mt-2 mb-3">
            {activeTab === "curriculum" 
              ? <>{curriculum.title} <em className="text-[#C8A96A] not-italic">{curriculum.highlight}</em></>
              : <>{schedule.title} <em className="text-[#C8A96A] not-italic">{schedule.highlight}</em></>
            }
          </h2>
          <p className="max-w-xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed">
            {activeTab === "curriculum" ? curriculum.subtitle : schedule.subtitle}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-stone-200/50 p-1.5 rounded-full inline-flex border border-stone-200">
            <button
              onClick={() => setActiveTab("schedule")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer border-0 ${activeTab === "schedule" ? "bg-[#1A2456] text-white shadow-sm" : "text-gray-600 hover:text-gray-800"}`}
            >
              <Clock size={16} /> Daily Schedule
            </button>
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer border-0 ${activeTab === "curriculum" ? "bg-[#1A2456] text-white shadow-sm" : "text-gray-600 hover:text-gray-800"}`}
            >
              <BookOpen size={16} /> Course Syllabus
            </button>
          
          </div>
        </div>

        {/* Dynamic Content Panels */}
        <div className="transition-all duration-300">
          
          {/* TAB 1: CURRICULUM */}
          {activeTab === "curriculum" && (
            <div className="space-y-16">
              
              {/* Courses Grid - Carousel on mobile/tablet, Grid on desktop */}
              <MobileCarousel
                items={curriculum.courses || []}
                gridClass="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                renderItem={(c, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-white border border-stone-200/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 h-full flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A2456] to-[#5B4FCF] text-white flex items-center justify-center mb-4">
                      {getIcon(c.icon, 20)}
                    </div>
                    <h4 className="font-semibold text-sm text-[#1A2456] mb-3">{c.title}</h4>
                    <div className="space-y-1.5 flex-1">
                      {(c.items || []).map((item, j) => (
                        <div key={j} className="flex items-start gap-2 text-xs text-gray-600">
                          <CheckCircle size={12} className="text-[#7BAF8A] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              />

              {/* Journey Phases - Carousel on mobile/tablet, Grid on desktop */}
              {(curriculum.phases || []).length > 0 && (
                <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200/50 shadow-sm space-y-8">
                  <h3 className="text-center text-xl md:text-2xl font-semibold text-[#1A2456]">
                    Your Course <em className="text-[#C8A96A] not-italic">Journey Phases</em>
                  </h3>
                  <MobileCarousel
                    items={curriculum.phases || []}
                    gridClass="grid-cols-1 sm:grid-cols-3 gap-6"
                    renderItem={(p, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-2xl bg-stone-50 border border-stone-100 text-center flex flex-col justify-between h-full"
                        style={{ borderTop: `4px solid ${p.color}` }}
                      >
                        <div className="mb-4">
                          <small className="font-bold text-xs uppercase tracking-wider block" style={{ color: p.color }}>{p.days}</small>
                          <h4 className="font-semibold text-sm text-[#1A2456] mt-1.5 mb-2">{p.title}</h4>
                          <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                        </div>
                      </div>
                    )}
                  />
                </div>
              )}
            </div>
          )}

          {/* TAB 2: SCHEDULE */}
          {activeTab === "schedule" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left sidebar info or image */}
              <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-md relative min-h-[250px] lg:h-auto">
                <img 
                  src={schedule.image || "/images/external/general/unsplash_photo-1506126613408-eca07ce68773.jpg"} 
                  alt="Daily Schedule" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-semibold text-[#C8A96A] bg-white/10 px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">Immersive Flow</span>
                  <h4 className="text-lg font-semibold mt-2">A day of yoga practice, study, and reflection in spiritual Bali</h4>
                </div>
              </div>

              {/* Right Schedule Content */}
              <div className="lg:col-span-7 bg-white rounded-3xl shadow-sm border border-stone-200/50 overflow-hidden grid grid-cols-1 md:grid-cols-2">
                {/* Morning */}
                <div className="p-6 border-b md:border-b-0 md:border-r border-stone-100">
                  <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-stone-100">
                    <Sunrise size={18} className="text-[#C8A96A]" />
                    <h3 className="font-semibold text-[#1A2456] text-sm uppercase tracking-wider">{schedule.sections?.morningTitle || "Morning"}</h3>
                  </div>
                  <div className="divide-y divide-stone-50">
                    {(schedule.morning || []).map((item, i) => <ScheduleRow key={i} item={item} />)}
                  </div>
                </div>

                {/* Afternoon & Evening */}
                <div className="p-6">
                  <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-stone-100">
                    <Moon size={16} className="text-[#5B4FCF]" />
                    <h3 className="font-semibold text-[#1A2456] text-sm uppercase tracking-wider">{schedule.sections?.afternoonTitle || "Afternoon"}</h3>
                  </div>
                  <div className="divide-y divide-stone-50">
                    {(schedule.afternoon || []).map((item, i) => <ScheduleRow key={i} item={item} />)}
                  </div>
                </div>
              </div>

              {/* Note banner */}
              {schedule.sections?.note && (
                <div className="lg:col-span-12 p-4 bg-[#5B4FCF]/5 border-l-4 border-[#5B4FCF] rounded-r-2xl text-xs text-gray-600 flex items-center gap-2">
                  <Info size={14} className="text-[#5B4FCF] flex-shrink-0" />
                  <span>{schedule.sections.note}</span>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
