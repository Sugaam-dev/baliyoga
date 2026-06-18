import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { getIcon } from "./icons";

/**
 * Expects: data = courseData.foodSection.content
 * Shape:
 * {
 *   eyebrow, title, highlight, subtitle,
 *   meals: { key, title, icon, time, img, desc, items: string[] }[],
 *   dietary: { icon, label }[],
 *   philosophy: { icon, title, desc }[]
 * }
 */
const FoodSection = ({ data }) => {
  if (!data) return null;
  const { eyebrow, title, highlight, subtitle, meals = [], dietary = [], philosophy = [] } = data;

  const [activeTab, setActiveTab] = useState(meals[0]?.key);
  const activeMeal = meals.find((m) => m.key === activeTab) || meals[0];

  if (!activeMeal) return null;

  return (
    <section className="bg-[#F7F3EF] py-12 lg:py-16 px-2.5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="text-sm text-gray-500 mb-2">{eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A2456] mb-3">
            {title} <em className="text-[#C8A96A] not-italic">{highlight}</em>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-lg">
            {subtitle}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 flex-wrap mb-10">
          {meals.map((m) => (
            <button
              key={m.key}
              onClick={() => setActiveTab(m.key)}
              className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full border-none cursor-pointer text-sm font-medium transition-colors shadow-[0_4px_12px_rgba(0,0,0,0.08)] ${activeTab === m.key ? "bg-[#1A2456] text-white" : "bg-white text-[#1A2456]"}`}
            >
              {getIcon(m.icon, 16)} {m.title}
            </button>
          ))}
        </div>

        {/* Meal card */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.15)] mb-14">
          <div className="min-h-[260px]">
            <img src={activeMeal.img} alt={activeMeal.title} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="p-7 md:p-10">
            <h3 className="text-xl font-semibold text-[#1A2456] mb-1">{activeMeal.title}</h3>
            <p className="text-xs text-gray-400 mb-3">🕐 {activeMeal.time}</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{activeMeal.desc}</p>
            {(activeMeal.items || []).map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-700 mb-1.5">
                <CheckCircle size={14} className="text-[#7BAF8A] flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Dietary */}
        {dietary.length > 0 && (
          <>
            <h3 className="text-xl font-semibold text-[#1A2456] mb-5">Dietary Options</h3>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-14">
              {dietary.map((d, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl text-center shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                  <div className="flex justify-center mb-2 text-[#1A2456]">{getIcon(d.icon, 16)}</div>
                  <div className="text-xs text-gray-700 font-medium">{d.label}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Philosophy */}
        {philosophy.length > 0 && (
          <>
            <h3 className="text-xl font-semibold text-[#1A2456] mb-5">Food Philosophy</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {philosophy.map((p, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                  <div className="text-[#1A2456] mb-2">{getIcon(p.icon, 18)}</div>
                  <h4 className="font-semibold text-[#1A2456] mb-1">{p.title}</h4>
                  <p className="text-gray-500 text-xs">{p.desc}</p>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
};

export default FoodSection;