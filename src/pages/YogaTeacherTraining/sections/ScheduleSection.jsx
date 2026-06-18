import React from "react";
import { Sunrise, Moon } from "lucide-react";
import { getIcon } from "./icons";

/**
 * Expects: data = courseData.scheduleSection.content
 * Shape:
 * {
 *   eyebrow, title, highlight, subtitle, image,
 *   morning: { time, activity, icon }[],
 *   afternoon: { time, activity, icon }[],
 *   sections: { morningTitle, afternoonTitle, note }
 * }
 */
const Row = ({ item }) => (
  <div className="flex items-center gap-3.5 py-3 border-b border-[#e8e2da]">
    <div className="w-10 h-10 rounded-[10px] bg-[#F7F3EF] flex items-center justify-center text-[#1A2456] flex-shrink-0">
      {getIcon(item.icon, 15)}
    </div>
    <span className="font-semibold text-xs text-[#1A2456] w-20 flex-shrink-0">{item.time}</span>
    <span className="text-sm text-gray-700">{item.activity}</span>
  </div>
);

const ScheduleSection = ({ data }) => {
  if (!data) return null;
  const { eyebrow, title, highlight, subtitle, image, morning = [], afternoon = [], sections = {} } = data;

  return (
    <section className="bg-[#F7F3EF] py-16 lg:py-24 px-5">
      <div className="max-w-6xl mx-auto">

        {/* Header row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <div>
            <p className="text-sm text-gray-500 mb-2">{eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A2456] mb-3">
              {title} <em className="text-[#C8A96A] not-italic">{highlight}</em>
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Schedule image */}
          <div className="rounded-2xl overflow-hidden h-[250px] shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            <img src={image} alt="Schedule" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Schedule grid */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] grid grid-cols-1 md:grid-cols-2">
          {/* Morning */}
          <div className="p-6 border-b md:border-b-0 md:border-r border-[#e8e2da]">
            <div className="flex items-center gap-2.5 mb-5">
              <Sunrise size={20} className="text-[#C8A96A]" />
              <h3 className="font-semibold text-[#1A2456] text-lg">{sections.morningTitle || "Morning"}</h3>
            </div>
            {morning.map((item, i) => <Row key={i} item={item} />)}
          </div>

          {/* Afternoon */}
          <div className="p-6">
            <div className="flex items-center gap-2.5 mb-5">
              <Moon size={20} className="text-[#5B4FCF]" />
              <h3 className="font-semibold text-[#1A2456] text-lg">{sections.afternoonTitle || "Afternoon & Evening"}</h3>
            </div>
            {afternoon.map((item, i) => <Row key={i} item={item} />)}
          </div>
        </div>

        {/* Note */}
        {sections.note && (
          <div className="mt-6 p-5 bg-[rgba(91,79,207,0.08)] border-l-4 border-[#5B4FCF] rounded-xl">
            <p className="text-sm text-gray-600">{sections.note}</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default ScheduleSection;