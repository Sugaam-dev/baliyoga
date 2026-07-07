import React from "react";
import { getIcon } from "./icons";

/**
 * HighlightsSection - Consolidates CommunitySection, PromoSection, and TransformationSection.
 * Reduces three large scrolling sections into a single, high-impact block.
 */
export default function HighlightsSection({ communityData, promoData }) {
  if (!communityData && !promoData) return null;

  const stats = communityData?.content?.stats || [];
  const promoFeatures = promoData?.content?.features || [];

  return (
    <section className="bg-stone-50 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        
        {/* Dynamic Grid: Trust Stats & Package Inclusions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Trust Stats & Experience */}
          <div className="space-y-6">
            <div>
              <span className="text-[#C8A96A] text-xs font-semibold uppercase tracking-wider">
                {communityData?.content?.eyebrow || "The Kendra Experience"}
              </span>
              <h2 className="text-3xl font-semibold text-[#1A2456] mt-2 mb-4 leading-tight">
                {communityData?.content?.title || "Join our"} <span className="text-[#C8A96A]">{communityData?.content?.highlight || "transformative"}</span> yoga journey
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {communityData?.content?.subtitle || "Experience authentic yoga in Bali with Yoga Alliance certified teachers, deep Vedic philosophy, and life-changing practices."}
              </p>
            </div>

            {/* Statistics Badges */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-stone-200/60 shadow-sm flex flex-col items-center text-center">
                  <div className="w-9 h-9 rounded-full bg-[#1A2456]/5 text-[#1A2456] flex items-center justify-center mb-2">
                    {getIcon(stat.icon || "clock", 16)}
                  </div>
                  <span className="text-lg font-bold text-[#1A2456]">{stat.value}</span>
                  <span className="text-xs text-gray-500 font-medium leading-tight mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Bottom context lines */}
            {(communityData?.content?.bottomText1 || communityData?.content?.bottomText2) && (
              <div className="bg-[#F7F3EF] border-l-4 border-[#C8A96A] p-4 rounded-r-2xl space-y-2 text-xs text-gray-600 mt-6">
                {communityData?.content?.bottomText1 && <p>{communityData?.content?.bottomText1}</p>}
                {communityData?.content?.bottomText2 && <p>{communityData?.content?.bottomText2}</p>}
              </div>
            )}
          </div>

          {/* Right Column: Inclusions & Features */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200/60 shadow-md space-y-6">
            <div>
              <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Course Inclusions</span>
              <h3 className="text-xl font-semibold text-[#1A2456] mt-1">What's included in your training package:</h3>
            </div>

            <div className="space-y-4">
              {promoFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-3.5 pb-4 border-b border-stone-100 last:border-0 last:pb-0">
                  <div className="w-10 h-10 rounded-xl bg-[#7BAF8A]/10 text-[#7BAF8A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    {getIcon(feat.icon || "award", 18)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#1A2456]">{feat.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{feat.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
