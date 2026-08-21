import React, { useState, useRef, useEffect } from "react";
import { Star, MapPin, Clock, CheckCircle, Info, ChevronRight } from "lucide-react";
import { useParams } from "react-router-dom";
import { getIcon } from "./icons";
import MobileCarousel from "../../../components/shared/MobileCarousel";

// Food Images
import breakFastImg from "../../../assets/foods/breakFast.webp";
import lunchImg from "../../../assets/foods/lunch.webp";
import dinnerImg from "../../../assets/foods/dinner.webp";

const getMealImage = (title, fallbackImg, isBali) => {
  if (!isBali || !title) return fallbackImg;
  const lower = title.toLowerCase();
  if (lower.includes("breakfast")) {
    return breakFastImg;
  }
  if (lower.includes("lunch")) {
    return lunchImg;
  }
  if (lower.includes("dinner")) {
    return dinnerImg;
  }
  return fallbackImg;
};

export default function ExperienceSection({ foodData, excursionData, locationData, massageData }) {
  const { location: locParam } = useParams();
  const isBali = locParam?.toLowerCase() === "bali";
  const [activeTab, setActiveTab] = useState("food");
  const [showArrow, setShowArrow] = useState(false);
  const scrollRef = useRef(null);

  if (!foodData && !excursionData && !locationData && !massageData) return null;

  const food = foodData || {};
  const excursions = excursionData?.excursions || [];
  const location = locationData || {};
  const massage = massageData || {};

  const availableTabs = [
    { id: "food",      label: "🥗 Food & Dining",    show: !!foodData },
    { id: "excursion", label: "🗺️ Excursions",        show: !!excursionData },
    { id: "location",  label: "📍 Location & Travel", show: !!locationData },
    { id: "massage",   label: "💆 Spa & Massage",     show: !!massageData && !!massage.massages }
  ].filter(t => t.show);

  useEffect(() => {
    if (availableTabs.length > 0 && !availableTabs.some(t => t.id === activeTab)) {
      setActiveTab(availableTabs[0].id);
    }
  }, []);

  // Check if scroll container can scroll further right
  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const canScrollMore = el.scrollLeft + el.clientWidth < el.scrollWidth - 8;
    setShowArrow(canScrollMore);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [availableTabs]);

  // When a tab is clicked, scroll it into view with the next tab peeking
  const handleTabClick = (id, idx) => {
    setActiveTab(id);
    const el = scrollRef.current;
    if (!el) return;
    const buttons = el.querySelectorAll("button");
    if (buttons[idx]) {
      // Scroll so the clicked tab is visible and next one peeks
      const btn = buttons[idx];
      const peekOffset = 40; // px to show of next tab
      const targetScroll = btn.offsetLeft - peekOffset;
      el.scrollTo({ left: Math.max(0, targetScroll), behavior: "smooth" });
    }
    // Re-check arrow after scroll
    setTimeout(checkScroll, 400);
  };

  return (
    <section className="py-8 md:py-10 lg:py-12 md:py-8 md:py-10 bg-white">
      <div className="max-w-6xl min-[1600px]:max-w-[1320px] min-[1920px]:max-w-[1520px] min-[2500px]:max-w-[2000px] mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#C8A96A] text-xs font-semibold uppercase tracking-wider">The Stay Experience</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A2456] mt-2 mb-3">
            Life in the <span className="text-[#C8A96A]">Spiritual Heart</span> of Bali
          </h2>
          <p className="max-w-xl mx-auto text-gray-500 text-sm md:text-base leading-relaxed">
            From organic cooking to temple hikes, explore all amenities included in your package.
          </p>
        </div>

        {/* Blinking arrow hint — shown ABOVE tab row on mobile/tablet when more tabs exist off-screen */}
        {showArrow && (
          <div className="flex justify-end mb-2 lg:hidden">
            <span className="flex items-center gap-1 text-xs font-semibold text-[#1A2456] animate-[arrowPulse_1s_ease-in-out_infinite]">
              swipe for more <ChevronRight size={16} strokeWidth={2.5} />
            </span>
          </div>
        )}

        {/* Tab Switcher — horizontal scroll on mobile, full row on desktop */}
        <div className="mb-10">
          <style>{`
            .tab-scroll::-webkit-scrollbar { display: none; }
            @keyframes arrowPulse {
              0%, 100% { opacity: 1; transform: translateX(0); }
              50%       { opacity: 0.35; transform: translateX(4px); }
            }
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(8px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>

          {/* Scroll container — tabs peek on mobile, centered on large screens */}
          <div
            ref={scrollRef}
            className="tab-scroll flex gap-2.5 overflow-x-auto pb-1 lg:justify-center"
            style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
          >
            {availableTabs.map((tab, idx) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabClick(tab.id, idx)}
                  style={{ minWidth: "min(158px, 43vw)" }}
                  className={[
                    "flex-shrink-0 px-5 py-3 rounded-full border text-sm font-semibold",
                    "transition-colors duration-200 cursor-pointer whitespace-nowrap",
                    isActive
                      ? "bg-[#1A2456] text-white border-[#1A2456]"
                      : "bg-white text-stone-700 border-stone-300 hover:bg-stone-50"
                  ].join(" ")}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Panel */}
        <div className="transition-all duration-300">
          
          {/* TAB 1: FOOD & DIET */}
          {activeTab === "food" && food.title && (
            <div className="space-y-12 animate-[fadeIn_0.4s_ease-in-out]">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-semibold text-[#1A2456] mb-3">
                  {food.title} <span className="text-[#C8A96A]">{food.highlight}</span>
                </h3>
                <p className="text-gray-600 text-sm">{food.subtitle}</p>
              </div>

              {/* Meals - Carousel on mobile/tablet, Grid on desktop */}
              <MobileCarousel
                items={food.meals || []}
                gridClass="grid-cols-1 md:grid-cols-3 gap-6"
                renderItem={(meal, i) => (
                  <div key={i} className="bg-stone-50 rounded-3xl overflow-hidden border border-stone-100 flex flex-col shadow-sm h-full justify-between">
                    <div>
                      <div className="h-44 relative">
                        <img src={getMealImage(meal.title, meal.img, isBali)} alt={meal.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <span className="text-xs font-semibold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded backdrop-blur-sm">{meal.time}</span>
                          <h4 className="font-semibold mt-1 text-base">{meal.title}</h4>
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <p className="text-gray-500 text-xs leading-relaxed mb-4 text-justify">{meal.desc}</p>
                        <div className="border-t border-stone-200/50 pt-3">
                          <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider block mb-2">Featured Dishes</span>
                          <div className="grid grid-cols-2 gap-1.5">
                            {(meal.items || []).map((item, idx) => (
                              <span key={idx} className="text-xs text-gray-700 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#7BAF8A]" /> {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              />

              {/* Dietary Specifications */}
              <div className="bg-[#7BAF8A]/5 border border-[#7BAF8A]/20 p-5 rounded-2xl flex flex-wrap gap-4 items-center justify-center">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider mr-2">Dietary Accreditations:</span>
                {(food.dietary || []).map((diet, i) => (
                  <span key={i} className="bg-white border border-stone-200 px-3.5 py-1.5 rounded-full text-xs font-medium text-gray-700 flex items-center gap-1.5 shadow-sm">
                    {getIcon(diet.icon, 12)}
                    {diet.label}
                  </span>
                ))}
              </div>

              {/* Disclaimer */}
              <p className="text-[11px] text-gray-500 italic text-center mt-3">
                * Note: Meal selections and featured dishes are subject to change according to seasonality and ingredient availability.
              </p>
            </div>
          )}

          {/* TAB 2: EXCURSIONS */}
          {activeTab === "excursion" && excursions.length > 0 && (
            <div className="space-y-10 animate-[fadeIn_0.4s_ease-in-out]">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-semibold text-[#1A2456] mb-3">
                  Weekend <span className="text-[#C8A96A]">Cultural Excursions</span>
                </h3>
                <p className="text-gray-600 text-sm">Discover Bali's majestic temples, nature walks, and waterfalls — all transport, entrance fees, and guides are fully included.</p>
              </div>

              {/* Excursions - Carousel on mobile/tablet, Grid on desktop */}
              <MobileCarousel
                items={excursions}
                gridClass="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                renderItem={(ex, i) => (
                  <div key={i} className="bg-white border border-stone-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between h-full">
                    <div>
                      <div className="h-48 relative">
                        <img src={ex.img} alt={ex.title} className="w-full h-full object-cover" />
                        <div className="absolute top-4 left-4 flex gap-1.5">
                          <span className="text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: ex.tagBg || "#1A2456" }}>
                            {ex.tag}
                          </span>
                          <span className="bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                            <Clock size={10} /> {ex.duration}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-base text-[#1A2456]">{ex.title}</h4>
                          <p className="text-gray-500 text-xs leading-normal text-justify">{ex.desc}</p>
                        </div>
                        <div className="border-t border-stone-100 pt-4 mt-4 space-y-1.5">
                          {(ex.highlights || []).map((high, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-700">
                              <CheckCircle size={12} className="text-[#7BAF8A]" />
                              {high}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          )}

          {/* TAB 3: LOCATION & MAP */}
          {activeTab === "location" && location.title && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-[fadeIn_0.4s_ease-in-out]">
              
              {/* Distance spots & stats */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-[#1A2456] mb-3">
                    {location.title} <span className="text-[#C8A96A]">{location.highlight}</span>
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">{location.subtitle}</p>
                  <p className="text-gray-500 text-xs mt-3 flex items-start gap-1.5">
                    <MapPin size={14} className="text-[#C8A96A] flex-shrink-0 mt-0.5" />
                    {location.address}
                  </p>
                </div>

                {/* Distance Points */}
                <div className="bg-stone-50 border border-stone-100 rounded-3xl p-5 space-y-4 shadow-sm">
                  <h4 className="text-xs font-bold text-[#1A2456] uppercase tracking-wider border-b border-stone-200/50 pb-2">Nearby Proximities</h4>
                  <div className="space-y-3">
                    {(location.spots || []).map((spot, i) => (
                      <div key={i} className="flex items-start justify-between text-xs pb-2 border-b border-stone-200/50 last:border-0 last:pb-0">
                        <div className="flex items-start gap-2 max-w-[70%]">
                          <div className="mt-0.5 text-[#C8A96A]">{getIcon(spot.icon || "globe", 12)}</div>
                          <div>
                            <span className="font-semibold text-gray-800 block">{spot.name}</span>
                            <span className="text-gray-500 text-[10px] leading-tight block">{spot.desc}</span>
                          </div>
                        </div>
                        <span className="bg-[#1A2456]/5 text-[#1A2456] px-2.5 py-1 rounded-full font-semibold text-[10px] flex-shrink-0">{spot.distance}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Climate Stats Table (Responsive Grid) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(location.stats || []).map((stat, i) => (
                    <div key={i} className="bg-[#1A2456] text-white p-3 rounded-xl text-center shadow-sm">
                      <div className="flex justify-center mb-1 text-[#C8A96A]">{getIcon(stat.icon || "globe", 12)}</div>
                      <div className="text-[10px] text-white/60 truncate">{stat.label}</div>
                      <div className="text-xs font-semibold mt-0.5">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Embed */}
              <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-stone-200 shadow-md h-[300px] md:h-[400px]">
                <iframe
                  title="Google Map Embed"
                  src={location.mapEmbed}
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          )}

          {/* TAB 4: SPA & MASSAGE */}
          {activeTab === "massage" && massage.massages && (
            <div className="space-y-10 animate-[fadeIn_0.4s_ease-in-out]">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-semibold text-[#1A2456] mb-3">
                  {massage.title} <span className="text-[#C8A96A]">{massage.highlight}</span>
                </h3>
                <p className="text-gray-600 text-sm">{massage.subtitle}</p>
              </div>

              {/* Massages - Carousel on mobile/tablet, Grid on desktop */}
              <MobileCarousel
                items={massage.massages}
                gridClass="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                renderItem={(mass, i) => (
                  <div key={mass.id || i} className="bg-stone-50 border border-stone-100 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-200 h-full">
                    <div>
                      <div className="h-44 relative">
                        <img src={mass.image} alt={mass.title} className="w-full h-full object-cover" />
                        {mass.isPopular && (
                          <span className="absolute top-4 left-4 bg-[#C8A96A] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                            Popular
                          </span>
                        )}
                        <span className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                          <Clock size={10} /> {mass.duration}
                        </span>
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-sm text-[#1A2456]">{mass.title}</h4>
                            <span className="text-[10px] font-semibold text-gray-500 flex items-center gap-0.5">
                              <Star size={10} className="fill-[#C8A96A] text-[#C8A96A]" /> {mass.rating}
                            </span>
                          </div>
                          <p className="text-gray-500 text-xs leading-normal text-justify">{mass.tagline}</p>
                        </div>
                        <div className="border-t border-stone-200/50 pt-3 mt-4 flex items-center justify-between text-xs">
                          <span className="text-gray-400 font-medium">Pricing Tier</span>
                          <span className={`font-semibold ${mass.isPaid ? "text-amber-700" : "text-green-600 bg-green-50 px-2 py-0.5 rounded"}`}>
                            {mass.isPaid ? "Paid Treatment" : "Complimentary ✨"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          )}

        </div>

      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
