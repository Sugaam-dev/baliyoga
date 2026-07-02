import React from "react";
import { useParams } from "react-router-dom";
import { baliDataMap } from "../../data/baliDataMap";

import HeroSection from "./sections/HeroSection";
import CommunitySection from "./sections/CommunitySection";
import PromoSection from "./sections/PromoSection";
import TransformationSection from "./sections/TransformationSection";
import PracticeSection from "./sections/PracticeSection";
import CurriculumSection from "./sections/CurriculumSection";
import ScheduleSection from "./sections/ScheduleSection";
import MassageSection from "./sections/MassageSection";
import ExcursionSection from "./sections/ExcursionSection";
import FoodSection from "./sections/FoodSection";
import AccommodationSection from "./sections/AccommodationSection";
import LocationSection from "./sections/LocationSection";
import FaqSection from "./sections/FaqSection";

/**
 * Generic Yoga Teacher Training course page.
 *
 * Supports both static mapping via props:
 *   <YogaTeacherTrainingPage data={Bali100HoursData} />
 * Or dynamic routing lookup from useParams using category & slug:
 *   <Route path=":category/:slug" element={<YogaTeacherTrainingPage />} />
 */
const YogaTeacherTrainingPage = ({ data }) => {
  const { category, slug } = useParams();

  // If no static data prop is passed, lookup in the dynamic mapping registry
  const pageData = data || baliDataMap.bali?.[category?.toLowerCase()]?.[slug?.toLowerCase()];

  if (!pageData) {
    return (
      <div className="w-full py-20 text-center">
        <h2 className="text-2xl font-semibold">Course Not Found</h2>
        <p className="mt-2 text-gray-600">We couldn't find the requested program. Check the URL and try again.</p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection data={pageData.heroSection} />
      <CommunitySection data={pageData.communitySection?.content} />
      <PromoSection data={pageData.promoSection?.content} />
      <TransformationSection data={pageData.transformationSection?.content} />
      <PracticeSection data={pageData.practiceSection?.content} />
      <CurriculumSection data={pageData.curriculumSection?.content} />
      <ScheduleSection data={pageData.scheduleSection?.content} />
      {pageData.MassageSection?.content && (
        <MassageSection data={pageData.MassageSection.content} />
      )}
      <ExcursionSection data={pageData.excursionSection?.content} />
      <FoodSection data={pageData.foodSection?.content} />
      <AccommodationSection data={pageData.accommodationSection?.content} />
      <LocationSection data={pageData.locationSection?.content} />
      {pageData.teacherTrainingFaq?.content && (
        <FaqSection data={pageData.teacherTrainingFaq.content} />
      )}
    </div>
  );
};

export default YogaTeacherTrainingPage;