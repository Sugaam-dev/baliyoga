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

     <CourseFee />
     <InclusionExclusion />

           {/* Dummy sections */}
      {/* <section id="syllabus" className="scroll-mt-32 py-24 text-center">
        Syllabus Section
      </section> */}
      <SyllabusSection />

     
<FoodAccommodation />
      {/* <section id="rooms" className="scroll-mt-32 py-24 text-center">
        Rooms Section
      </section> */}

<FaqSection />
<ExcursionPlaces />
    </div>
  );
};

export default Service;