import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { baliDataMap } from "../../data/baliDataMap";

import HeroSection          from "./sections/HeroSection";
import HighlightsSection    from "./sections/HighlightsSection";
import PracticeSection      from "./sections/PracticeSection";
import ProgramDetailsSection from "./sections/ProgramDetailsSection";
import ExperienceSection    from "./sections/ExperienceSection";
import AccommodationSection from "./sections/AccommodationSection";
import FaqSection           from "./sections/FaqSection";

/**
 * Generic dynamic course page.
 * Data shape (all 18 files):
 *   courseData.heroSection
 *   courseData.highlightsSection.{ community, promo, transformation }
 *   courseData.practiceSection
 *   courseData.programDetailsSection.{ curriculum, schedule }
 *   courseData.experienceSection.{ food, excursion, location, massage }
 *   courseData.accommodationSection
 *   courseData.faqSection
 */
const ProgramPage = ({ data }) => {
  const { category, slug } = useParams();
  const navigate = useNavigate();

  const pageData = data || baliDataMap.bali?.[category?.toLowerCase()]?.[slug?.toLowerCase()];

  if (!pageData) {
    return (
      <div className="w-full py-20 text-center">
        <h2 className="text-2xl font-semibold">Course Not Found</h2>
        <p className="mt-2 text-gray-600">We couldn't find the requested program. Check the URL and try again.</p>
      </div>
    );
  }

  const handleOpenCheckout = (roomType) => {
    navigate("/checkout", { state: { category, slug, roomType } });
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