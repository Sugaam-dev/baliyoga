import React from "react";
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
 * Pass in any course data object (e.g. Bali50HourData, Bali100HoursData,
 * BaliKundali200HoursData, etc.) that follows the same shape:
 *
 * {
 *   heroSection: { hero, gains, certificates, content },
 *   communitySection: { content },
 *   promoSection: { content },
 *   transformationSection: { content },
 *   practiceSection: { content },
 *   curriculumSection: { content },
 *   scheduleSection: { content },
 *   excursionSection: { content },
 *   foodSection: { content },
 *   accommodationSection: { content },
 *   locationSection: { content },
 *   MassageSection: { content },        // optional
 *   teacherTrainingFaq: { content },    // optional
 * }
 *
 * Usage:
 *   <YogaTeacherTrainingPage data={Bali100HoursData} />
 */
const YogaTeacherTrainingPage = ({ data }) => {
  if (!data) return null;

  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection data={data.heroSection} />
      <CommunitySection data={data.communitySection?.content} />
      <PromoSection data={data.promoSection?.content} />
      <TransformationSection data={data.transformationSection?.content} />
      <PracticeSection data={data.practiceSection?.content} />
      <CurriculumSection data={data.curriculumSection?.content} />
      <ScheduleSection data={data.scheduleSection?.content} />
      {data.MassageSection?.content && (
        <MassageSection data={data.MassageSection.content} />
      )}
      <ExcursionSection data={data.excursionSection?.content} />
      <FoodSection data={data.foodSection?.content} />
      <AccommodationSection data={data.accommodationSection?.content} />
      <LocationSection data={data.locationSection?.content} />
      {data.teacherTrainingFaq?.content && (
        <FaqSection data={data.teacherTrainingFaq.content} />
      )}
    </div>
  );
};

export default YogaTeacherTrainingPage;