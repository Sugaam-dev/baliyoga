import React from "react";
import { Award, ChevronRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { getIcon } from "./icons";

/**
 * Expects: data = courseData.curriculumSection.content
 * Shape:
 * {
 *   eyebrow, title, highlight, subtitle,
 *   courses: { title, icon, items: string[] }[],
 *   phases: { title, days, desc, color }[],
 *   cta: { title, desc, buttonText, url }
 * }
 */
const CurriculumSection = ({ data }) => {
  if (!data) return null;
  const { eyebrow, title, highlight, subtitle, courses = [], phases = [], cta = {} } = data;

  return (
    <section className="py-12 lg:py-16 px-2.5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm text-gray-500 mb-2">{eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A2456] mb-3">
            {title} <em className="text-[#C8A96A] not-italic">{highlight}</em>
          </h2>
          <p className="max-w-xl mx-auto text-gray-600 text-sm md:text-base">
            {subtitle}
          </p>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {courses.map((c, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] bg-white hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300"
            >
              <div className="w-[52px] h-[52px] rounded-xl bg-gradient-to-br from-[#1A2456] to-[#5B4FCF] text-white flex items-center justify-center mb-4">
                {getIcon(c.icon, 22)}
              </div>
              <h4 className="font-semibold text-[#1A2456] mb-3">{c.title}</h4>
              {(c.items || []).map((item, j) => (
                <div key={j} className="flex items-center gap-2 text-sm text-gray-600 mb-1.5">
                  <CheckCircle size={14} className="text-[#7BAF8A] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Journey phases */}
        {phases.length > 0 && (
          <div className="mb-24">
            <h3 className="text-center text-2xl md:text-3xl font-semibold text-[#1A2456] mb-10">
              Training <em className="text-[#C8A96A] not-italic">Journey</em>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
              {phases.map((p, i) => (
                <div
                  key={i}
                  className="p-7 rounded-2xl bg-[#F7F3EF] text-center"
                  style={{ borderTop: `4px solid ${p.color}` }}
                >
                  <small className="font-semibold" style={{ color: p.color }}>{p.days}</small>
                  <h4 className="font-semibold text-[#1A2456] mt-1 mb-2">{p.title}</h4>
                  <p className="text-gray-600 text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#1A2456] to-[#2E3A87] rounded-3xl py-14 px-7 text-center text-white">
          <Award size={36} className="mx-auto mb-4 text-[#C8A96A]" />
          <h3 className="text-2xl font-semibold mb-3">{cta.title}</h3>
          <p className="text-white/80 mb-5 max-w-lg mx-auto text-sm md:text-base">
            {cta.desc}
          </p>
          <Link
            to={cta.url || "/contact"}
            className="inline-flex items-center gap-2 bg-white text-[#1A2456] font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-white/90 transition-colors"
          >
            {cta.buttonText || "Start Your Journey"} <ChevronRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CurriculumSection;