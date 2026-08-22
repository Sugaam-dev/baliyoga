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
import BaliYogaOffers from "./BaliYogaOffers";
import BaliYogaGallery from "./BaliYogaGallery";
import TestimonialsSection from "./TestimonialsSection";
import UpcomingBatches from "./UpcomingBatches";
import WhereToTrain from "./WhereToTrain";
import LazySection from "../../components/shared/LazySection";

export default function Home() {
  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. Hero Slide Banner */}
      <Hero />
      
      {/* 2. Trust Seals & Ratings Banner */}
      <TrustBanner />

      {/* 3. Introduction Section */}
      <BYKIntroduction />

      {/* 4. Yoga Teacher Training Courses Slider */}
      <LazySection minHeight="400px">
        <Programs
          title="Yoga Teacher Training"
          highlight="Courses in Bali"
          subtitle="Deepen your practice and obtain an internationally recognized certification in the heart of paradise."
        />
      </LazySection>
      
      {/* 5. Founder Details & Core Pillars */}
      <LazySection minHeight="400px">
        <Certifications />
      </LazySection>

      {/* 6. Where To Train */}
      <LazySection minHeight="400px">
        <WhereToTrain />
      </LazySection>
    
      {/* 7. Additional Activities (Excursions & Healing) */}
      <LazySection minHeight="400px">
        <AdditionalActivities />
      </LazySection>
      
      {/* 8. Magic of Bali Kendra Experience */}
      <LazySection minHeight="400px">
        <BaliYogaKendraExperience />
      </LazySection>
      
      {/* 9. Essence of Bali Yoga Carousel Slider */}
      <LazySection minHeight="400px">
        <BaliYogaEssenceSlider />
      </LazySection>
      
      {/* 10. Bali Yoga Retreats & Courses Grid */}
      <LazySection minHeight="400px">
        <BaliYogaRetreatsGrid />
      </LazySection>
      
      {/* 11. Retreat Center Locations */}
      <LazySection minHeight="400px">
        <RetreatCenters />
      </LazySection>
      
      {/* 12. Special Discount Offers */}
      <LazySection minHeight="400px">
        <BaliYogaOffers />
      </LazySection>
      
      {/* 13. Picture Gallery Grid */}
      <LazySection minHeight="400px">
        <BaliYogaGallery />
      </LazySection>
      
      {/* 14. Student Testimonials */}
      <LazySection minHeight="400px">
        <TestimonialsSection />
      </LazySection>
      
      {/* 15. Upcoming Course Batches */}
      <LazySection minHeight="400px">
        <UpcomingBatches />
      </LazySection>
    </div>
  );
}
