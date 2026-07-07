import React from "react";
import Hero from "../../components/shared/Hero";
import TrustBanner from "./components/TrustBanner";
import Certifications from "./components/Certifications";
import BaliYogaCourses from "./components/BaliYogaCourses";
import AdditionalActivities from "./components/AdditionalActivities";
import BaliYogaKendraExperience from "./components/BaliYogaKendraExperience";
import BaliYogaEssenceSlider from "./components/BaliYogaEssenceSlider";
import BaliYogaRetreatsGrid from "./components/BaliYogaRetreatsGrid";
import RetreatCenters from "./components/RetreatCenters";
import BaliYogaProgramSection from "./components/BaliYogaProgramSection";
import BaliYogaOffers from "./components/BaliYogaOffers";
import BaliYogaGallery from "./components/BaliYogaGallery";
import TestimonialsSection from "./components/TestimonialsSection";
import UpcomingBatches from "./components/UpcomingBatches";

export default function Home() {
  return (
    <main className="bg-[#FAF8F5]">
      {/* 1. Hero Slide Banner */}
      <Hero />
      
      {/* 2. Trust Seals & Ratings Banner */}
      <TrustBanner />
      
      {/* 3. Founder Details & Core Pillars */}
      <Certifications />
      
      {/* 4. Yoga Teacher Training Courses Slider */}
      <BaliYogaCourses />
      
      {/* 5. Additional Activities (Excursions & Healing) */}
      <AdditionalActivities />
      
      {/* 6. Magic of Bali Kendra Experience */}
      <BaliYogaKendraExperience />
      
      {/* 7. Essence of Bali Yoga Carousel Slider */}
      <BaliYogaEssenceSlider />
      
      {/* 8. Bali Yoga Retreats & Courses Grid */}
      <BaliYogaRetreatsGrid />
      
      {/* 9. Retreat Center Locations */}
      <RetreatCenters />
      
      {/* 10. Program Inclusions, Schedule & Pricing */}
      <BaliYogaProgramSection />
      
      {/* 11. Special Discount Offers */}
      <BaliYogaOffers />
      
      {/* 12. Picture Gallery Grid */}
      <BaliYogaGallery />
      
      {/* 13. Student Testimonials */}
      <TestimonialsSection />
      
      {/* 14. Upcoming Course Batches */}
      <UpcomingBatches />
    </main>
  );
}
