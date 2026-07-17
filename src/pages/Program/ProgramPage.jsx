import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { locationDataMap } from "../../data/locationDataMap";

import HeroSection          from "./sections/HeroSection";
import HighlightsSection    from "./sections/HighlightsSection";
import PracticeSection      from "./sections/PracticeSection";
import ProgramDetailsSection from "./sections/ProgramDetailsSection";
import ExperienceSection    from "./sections/ExperienceSection";
import AccommodationSection from "./sections/AccommodationSection";
import FaqSection           from "./sections/FaqSection";

/**
 * Generic dynamic course page.
 */
const ProgramPage = ({ data }) => {
  const { location: locParam, course: courseParam } = useParams();
  const navigate = useNavigate();
  const locationPath = useLocation().pathname;

  let pageData = data;
  if (!pageData) {
    const locKey = locParam?.toLowerCase();
    const slugKey = courseParam?.toLowerCase();
    const isRetreat = locationPath.toLowerCase().startsWith("/retreats/");
    const targetCats = isRetreat 
      ? ["retreats"] 
      : ["ytt", "kundalini", "short-courses", "specialization"];

    if (locationDataMap[locKey]) {
      for (const cat of targetCats) {
        if (locationDataMap[locKey][cat]?.[slugKey]) {
          pageData = locationDataMap[locKey][cat][slugKey];
          break;
        }
      }
    }
  }

  if (!pageData) {
    return (
      <div className="w-full py-20 text-center">
        <h2 className="text-2xl font-semibold">Course Not Found</h2>
        <p className="mt-2 text-gray-600">We couldn't find the requested program. Check the URL and try again.</p>
      </div>
    );
  }

  const handleOpenCheckout = (roomType) => {
    const isRetreat = locationPath.toLowerCase().startsWith("/retreats/");
    navigate("/checkout", { 
      state: { 
        location: locParam, 
        slug: courseParam, 
        type: isRetreat ? "retreats" : "programs", 
        roomType 
      } 
    });
  };

  return (
    <div className="w-full overflow-x-hidden">

      {/* 1. Hero */}
      <HeroSection
        data={pageData.heroSection}
        onBookClick={() => handleOpenCheckout("6 Shared Room")}
      />

      {/* 2. Highlights — community story, promo stats */}
      <HighlightsSection
        communityData={pageData.highlightsSection?.community}
        promoData={pageData.highlightsSection?.promo}
      />

      {/* 3. Core Practices */}
      <PracticeSection data={pageData.practiceSection?.content} />

      {/* 4. Program Details — curriculum + daily schedule */}
      <ProgramDetailsSection
        curriculumData={pageData.programDetailsSection?.curriculum?.content}
        scheduleData={pageData.programDetailsSection?.schedule?.content}
      />

      {/* 5. Stay Experience — food, excursions, location, massage */}
      <ExperienceSection
        foodData={pageData.experienceSection?.food?.content}
        excursionData={pageData.experienceSection?.excursion?.content}
        locationData={pageData.experienceSection?.location?.content}
        massageData={pageData.experienceSection?.massage?.content}
      />

      {/* 6. Rooms & Pricing */}
      <AccommodationSection
        data={pageData.accommodationSection?.content}
        onBookClick={handleOpenCheckout}
      />

      {/* 7. FAQs */}
      {pageData.faqSection?.content && (
        <FaqSection data={pageData.faqSection.content} />
      )}

    </div>
  );
};

export default ProgramPage;