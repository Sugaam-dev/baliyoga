import React from "react";
import Hero from "../../components/shared/Hero";
import TrustBanner from "./TrustBanner";
import BYKIntroduction from "./BYKIntroduction";
import Certifications from "./Certifications";
import Programs from "../about/components/Programs";
import AdditionalActivities from "./AdditionalActivities";
import BaliYogaKendraExperience from "./BaliYogaKendraExperience";
import BaliYogaEssenceSlider from "./BaliYogaEssenceSlider";
import BaliYogaRetreatsGrid from "./BaliYogaRetreatsGrid";
import RetreatCenters from "./RetreatCenters";
// import BaliYogaProgramSection from "./BaliYogaProgramSection";
import BaliYogaOffers from "./BaliYogaOffers";
import BaliYogaGallery from "./BaliYogaGallery";
import TestimonialsSection from "./TestimonialsSection";
import UpcomingBatches from "./UpcomingBatches";
import WhereToTrain from "./WhereToTrain";
export default function Home() {
  return (
    <main className="bg-[#FAF8F5]">
      {/* 1. Hero Slide Banner */}
      <Hero />
      
      {/* 2. Trust Seals & Ratings Banner */}
      <TrustBanner />
      {/* Introduction Section */}
      <BYKIntroduction />
  {/* 4. Yoga Teacher Training Courses Slider */}
      <Programs
        title="Yoga Teacher Training"
        highlight="Courses in Bali"
        subtitle="Deepen your practice and obtain an internationally recognized certification in the heart of paradise."
      />
      
      
      {/* 3. Founder Details & Core Pillars */}
      <Certifications />

      {/* Where To Train */}
      <WhereToTrain />
      
      
    
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
      {/* <BaliYogaProgramSection /> */}
      
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
