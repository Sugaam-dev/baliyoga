import React, { useState } from "react";
import { ChevronDown, CheckCircle } from "lucide-react";

/**
 * Expects: data = courseData.teacherTrainingFaq.content
 * Shape:
 * {
 *   title, highlight, subtitle,
 *   faqs: { question, answer: string | string[] }[]
 * }
 */
const FaqSection = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(0);

  if (!data) return null;
  const { title, highlight, subtitle, faqs = [] } = data;
  if (faqs.length === 0) return null;

  return (
    <section className="bg-white py-8 md:py-10 lg:py-10 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A2456] mb-3">
            {title} <em className="text-[#C8A96A] not-italic">{highlight}</em>
          </h2>
          {subtitle && (
            <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">{subtitle}</p>
          )}
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3.5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl border border-[#e8e2da] bg-[#F7F3EF] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 cursor-pointer bg-transparent border-none"
                >
                  <span className="font-semibold text-[#1A2456] text-sm md:text-base">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#5B4FCF] flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                    {Array.isArray(faq.answer) ? (
                      <div className="flex flex-col gap-1.5 mt-1">
                        {faq.answer.map((line, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <CheckCircle size={14} className="text-[#7BAF8A] flex-shrink-0 mt-0.5" />
                            <span>{line}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="m-0">{faq.answer}</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;