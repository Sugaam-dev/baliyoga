import React from "react";
import HeroSection from "./components/HeroSection";
import TrainingInfo from "./components/TrainingInfo";
import CourseTabs from "./components/CourseTabs";
import DailySchedule from "./components/DailySchedule";
import CourseFee from "./components/CourseFee";
import InclusionExclusion from "./components/InclusionExclusion";
import FaqSection from "./components/FaqSection";
import ExcursionPlaces from "./components/ExcursionPlaces";
import SyllabusSection from "./components/SyllabusSection";
import FoodAccommodation from "./components/FoodAccommodation";
import YogaStyles from "./components/YogaStyles";
import EligibilitySection from "./components/EligibilitySection";
import ArrivalAmenities from "./components/ArrivalAmenities";
import TermsPolicy from "./components/TermsPolicy";

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
      <TermsPolicy />
    </div>
  );
};

export default Service;
