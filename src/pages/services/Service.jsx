import React from "react";
import HeroSection from "./HeroSection";
import TrainingInfo from "./TrainingInfo";
import CourseTabs from "./CourseTabs";
import DailySchedule from "./DailySchedule";
import CourseFee from "./CourseFee";
import InclusionExclusion from "./InclusionExclusion";
import FaqSection from "./FaqSection";
import ExcursionPlaces from "./ExcursionPlaces";
import SyllabusSection from "./SyllabusSection";
import FoodAccommodation from "./FoodAccommodation";
import YogaStyles from "./YogaStyles";
import EligibilitySection from "./EligibilitySection";
import ArrivalAmenities from "./ArrivalAmenities";

const Service = () => {
  return (
    <div className="w-full overflow-x-hidden">

      {/* Hero Section */}
      <HeroSection />

      {/* Training Info */}
      <TrainingInfo />

      {/* Sticky Tabs */}
      <CourseTabs />

      {/* Schedule Section */}
      <DailySchedule />
      <YogaStyles />
      <EligibilitySection />
      <ArrivalAmenities />
      <CourseFee />
      <InclusionExclusion />
      <SyllabusSection />   
      <FoodAccommodation />
      <FaqSection />
      <ExcursionPlaces />
    </div>
  );
};

export default Service;