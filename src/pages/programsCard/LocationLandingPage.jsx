import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LANDING_LOCATION_DATA, LANDING_PROGRAM_CATEGORIES } from "./LandingPageData";
import { buildPath } from "../../data/locations";

const ProgramCard = React.memo(({ prog, location, activeCategory, theme, onNavigate }) => (
  <div
    className="bg-white rounded-xl overflow-hidden border border-[#e8e4dc] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent flex flex-col h-full"
    style={{ "--accent": theme.bgAccent.replace("bg-[", "").replace("]", "") }}
    onClick={() => onNavigate(buildPath(location.toLowerCase(), prog.slug, "programs"))}
  >
    {/* Header band (Hours + Badge) */}
    <div className={`relative p-5 pb-4 ${theme.bgAccent}`}>
      <span className="font-serif text-[50px] font-black text-white leading-none block">
        {prog.hours === "N/A" ? "N/A" : prog.hours}
        {prog.hours !== "N/A" && <small className="text-[18px] font-normal opacity-60">hr</small>}
      </span>
      {prog.badge && (
        <span className="absolute top-3 right-3 text-[9.5px] font-bold tracking-[0.4px] uppercase bg-white/18 text-white rounded py-1 px-2">
          {prog.badge}
        </span>
      )}
    </div>

    {/* Card Body */}
    <div className="p-[16px_18px_12px] flex-1 flex flex-col">
      {/* Title with flex and min-height to align perfectly across all cards and prevent overlap */}
      <h4 className="font-serif text-[18px] font-semibold text-[#1c1c1e] mb-2 leading-[1.3] min-h-[54px] flex items-center line-clamp-2">
        {prog.title || prog.name}
      </h4>

      {/* Meta (Duration & Location) */}
      <div className="flex flex-col gap-1 text-[11.5px] text-[#9a9aa4] font-medium mb-3">
        <span className="flex items-center gap-1">⏱ {prog.duration}</span>
        <span className="flex items-center gap-1">📍 {location}</span>
      </div>

      {/* Features List (pushed to the bottom of the body area for alignment) */}
      <div className="mt-auto">
        {prog.features && prog.features.length > 0 ? (
          <ul className="list-none p-0 flex flex-col gap-1 mb-4">
            {prog.features.map((feature, idx) => (
              <li key={idx} className="text-[12px] text-[#5e5e68] flex items-center gap-1.5">
                <span className={`${theme.textAccent} font-bold text-[10.5px]`}>✓</span>
                <span className="truncate">{feature}</span>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="list-none p-0 flex flex-col gap-1 mb-4">
            <li className="text-[12px] text-[#5e5e68] flex items-center gap-1.5">
              <span className={`${theme.textAccent} font-bold text-[10.5px]`}>✓</span>
              <span>{prog.certification} Certified</span>
            </li>
            <li className="text-[12px] text-[#5e5e68] flex items-center gap-1.5">
              <span className={`${theme.textAccent} font-bold text-[10.5px]`}>✓</span>
              <span>Meals &amp; accommodation</span>
            </li>
            <li className="text-[12px] text-[#5e5e68] flex items-center gap-1.5">
              <span className={`${theme.textAccent} font-bold text-[10.5px]`}>✓</span>
              <span>All materials included</span>
            </li>
          </ul>
        )}
      </div>
    </div>

    {/* Footer */}
    <div className="flex justify-between items-center p-[12px_18px] border-t border-[#f0ece5] bg-[#fdfcfb]">
      <span className={`font-serif text-[22px] font-bold ${theme.textAccent}`}>
        {prog.price}
      </span>
      <button
        className={`font-sans text-[12px] font-bold text-white rounded-[5px] py-1.5 px-[14px] transition-all ${theme.bgAccent} ${theme.hoverBgAccent} hover:brightness-110 hover:translate-x-0.5`}
        onClick={(e) => {
          e.stopPropagation(); // Avoid triggering card div click
          onNavigate(buildPath(location.toLowerCase(), prog.slug, "programs"));
        }}
      >
        View →
      </button>
    </div>
  </div>
));

const LocationLandingPage = () => {
  const { location = "bali" } = useParams();
  const navigate = useNavigate();
  const programsRef = useRef(null);

  const matchedKey = Object.keys(LANDING_LOCATION_DATA).find(
    (key) => key.toLowerCase() === location.toLowerCase()
  );
  const resolvedLocationName = matchedKey || "bali";
  const data = LANDING_LOCATION_DATA[resolvedLocationName] || LANDING_LOCATION_DATA["bali"];
  const theme = data.theme;

  const storageKey = `active_cat_${resolvedLocationName.toLowerCase()}`;

  const [activeCategory, setActiveCategory] = useState(() => {
    const savedTab = sessionStorage.getItem(storageKey);
    if (savedTab && data.programsByCategoryId?.[savedTab]?.length > 0) {
      return savedTab;
    }
    if (data.programsByCategoryId?.["ytt"]?.length > 0) {
      return "ytt";
    }
    return Object.keys(data.programsByCategoryId || {})[0] || "ytt";
  });

  const activeLocationPrograms = data.programsByCategoryId?.[activeCategory] || [];
  const selectedCategoryMeta = LANDING_PROGRAM_CATEGORIES.find((c) => c.id === activeCategory);

  const handleTabChange = (catId) => {
    setActiveCategory(catId);
    sessionStorage.setItem(storageKey, catId);
  };

  const scrollToPrograms = () =>
    programsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  useEffect(() => {
    window.scrollTo(0, 0);
    const savedTab = sessionStorage.getItem(storageKey);
    if (savedTab && data.programsByCategoryId?.[savedTab]?.length > 0) {
      setActiveCategory(savedTab);
    } else {
      if (data.programsByCategoryId?.["ytt"]?.length > 0) {
        setActiveCategory("ytt");
      } else {
        setActiveCategory(Object.keys(data.programsByCategoryId || {})[0] || "ytt");
      }
    }
  }, [location]);

  const accentPale = data.accentColor || "#047857"; // Fallback color

  return (
    <div className="font-sans text-[#1c1c1e] bg-[#f5f3ef] overflow-x-hidden w-full">
      {/* ───────── HERO ───────── */}
      <section className="relative w-full h-[75vh] flex flex-col justify-center overflow-hidden">
        <img
          src={data.heroImage}
          alt={`${resolvedLocationName} yoga teacher training`}
          className="w-full h-full object-cover block absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/22 via-black/45 to-black/75 pointer-events-none" />

        <div className="relative max-w-[1200px] w-full mx-auto px-7 md:px-[60px] z-10">
          <div className="max-w-2xl">
            <div className={`inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[4px] uppercase ${theme.taglineText} mb-3.5`}>
              <span className={`w-1.5 h-1.5 rounded-full ${theme.dotBg} animate-pulse flex-shrink-0`} />
              {data.tagline}
            </div>
            <h1 className="font-serif text-[clamp(38px,6vw,80px)] font-black text-white leading-[1.04] tracking-tight mb-2.5">
              {data.headline}
            </h1>
            <p className="font-serif italic font-normal text-white/65 mb-7 text-[clamp(15px,1.8vw,20px)]">
              {data.subheadline}
            </p>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={scrollToPrograms}
                className={`font-serif text-[13.5px] font-semibold py-3 px-8 rounded-[7px] cursor-pointer transition-all duration-200 tracking-[0.2px] inline-flex items-center gap-1.5 text-white ${theme.bgAccent} ${theme.hoverBgAccent} hover:brightness-110 hover:-translate-y-0.5 hover:shadow-lg`}
              >
                Browse Programs
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="font-serif text-[13.5px] font-semibold py-3 px-8 rounded-[7px] cursor-pointer transition-all duration-200 tracking-[0.2px] inline-flex items-center gap-1.5 bg-white/10 text-white border border-white/32 backdrop-blur-md hover:bg-white/18 hover:border-white/60"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── WHY THIS LOCATION ───────── */}
      <section className="py-[50px] px-7 md:px-[60px] bg-white">
        <div className="max-w-[1160px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[72px] items-start">
          <div>
            <span className={`block text-[10.5px] font-bold tracking-[4px] uppercase mb-3 ${theme.textAccentMuted}`}>
              Why {resolvedLocationName}?
            </span>
            <h2 className={`font-serif text-[clamp(26px,3vw,42px)] font-bold leading-[1.18] ${theme.textAccent} mt-3 mb-4`}>
              {data.headline}
            </h2>
            <p className="text-[15px] leading-[1.82] text-[#4e4e56]">
              {data.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.highlights.map((card, i) => (
              <div
                key={i}
                className="bg-[#f5f3ef] border border-[#e8e4dc] rounded-xl p-[18px_16px] flex flex-col gap-1.5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="text-[24px] leading-none">{card.icon}</span>
                <h3 className={`font-serif text-lg font-semibold ${theme.textAccent} mt-1 mb-1.5`}>
                  {card.label}
                </h3>
                <p className="text-[12px] text-[#80808c] leading-normal">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thin dynamic divider */}
      <div className="max-w-7xl min-[1600px]:max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] mx-auto px-6 md:px-12">
        <div className={`h-px bg-gradient-to-r from-transparent ${theme.dividerAccent} to-transparent`} />
      </div>

      {/* ───────── PROGRAMS ───────── */}
      <section id="programs" className="py-[55px] px-7 md:px-[60px] bg-[#f5f3ef]" ref={programsRef}>
        <div className="max-w-[1160px] mx-auto">
          <span className={`block text-[10.5px] font-bold tracking-[4px] uppercase mb-3 ${theme.textAccentMuted}`}>
            What We Offer
          </span>
          <h2 className={`font-serif text-[clamp(26px,3vw,42px)] font-bold leading-[1.18] ${theme.textAccent} mt-3 mb-3`}>
            {resolvedLocationName} Programs
          </h2>
          <p className="text-[15px] text-[#5e5e68] leading-[1.7] max-w-[520px] mt-2 mb-10">
            Yoga Alliance certified · Meals &amp; stay included · Max 12 students per batch
          </p>

          {/* Categories Tab Selector */}
          <div className="flex gap-2 flex-wrap mb-3">
            {LANDING_PROGRAM_CATEGORIES.map((cat) => {
              const hasCourses = !!data.programsByCategoryId?.[cat.id]?.length;
              if (!hasCourses) return null;

              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleTabChange(cat.id)}
                  className={`font-sans text-[13px] font-semibold py-2 px-4.5 rounded-[7px] border border-[#dedad2] transition-all cursor-pointer ${
                    isActive
                      ? `${theme.bgAccent} text-white shadow-md border-transparent`
                      : `bg-white text-[#5e5e68] hover:border-stone-400`
                  }`}
                >
                  <span className="mr-1">{cat.icon}</span>
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Category Description */}
          {selectedCategoryMeta && activeLocationPrograms.length > 0 && (
            <p className={`text-[13.5px] text-[#767680] italic mb-[30px] pl-3 border-l-[2.5px] leading-[1.6] ${theme.borderAccent}`}>
              Custom {selectedCategoryMeta.label} schedules tailored specifically for our {resolvedLocationName} campus setting.
            </p>
          )}

          {/* Programs Grid (Responsive 1/2/3 cols based on screen width with dynamic padding and overflow controls) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeLocationPrograms.length > 0 ? (
              activeLocationPrograms.map((prog) => (
                <ProgramCard
                  key={prog.slug}
                  prog={prog}
                  location={resolvedLocationName}
                  activeCategory={activeCategory}
                  theme={theme}
                  onNavigate={navigate}
                />
              ))
            ) : (
              <p className="col-span-full text-center text-stone-500 italic py-10">
                No courses currently scheduled for this category in {resolvedLocationName}.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ───────── CTA FOOTER ───────── */}
      <section className={`relative w-full bg-gradient-to-r ${theme.ctaGradient} py-10 md:py-12 px-7 md:px-[60px] overflow-hidden`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06),transparent_55%)] pointer-events-none" />
        <div className="relative max-w-[1160px] mx-auto flex items-center justify-between gap-10 flex-wrap md:flex-nowrap">
          <div>
            <h2 className="font-serif text-[clamp(28px,3vw,42px)] font-bold text-white leading-[1.2] mb-2">
              Ready to train in {resolvedLocationName}?
            </h2>
            <p className="text-[14.5px] text-white/60 leading-[1.65]">
              Cohorts are capped at 12 — secure your spot today.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0 flex-wrap">
            <button
              onClick={() => navigate("/contact")}
              className="font-serif text-[13.5px] font-semibold py-3 px-8 rounded-[7px] cursor-pointer transition-all duration-200 tracking-[0.2px] inline-flex items-center gap-1.5 bg-white text-[#1c1c1e] font-bold hover:shadow-lg hover:-translate-y-0.5"
            >
              Book Appointment
            </button>
            <button
              onClick={scrollToPrograms}
              className="font-serif text-[13.5px] font-semibold py-3 px-8 rounded-[7px] cursor-pointer transition-all duration-200 tracking-[0.2px] inline-flex items-center gap-1.5 bg-transparent text-white border border-white/38 hover:bg-white/8"
            >
              View Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationLandingPage;
