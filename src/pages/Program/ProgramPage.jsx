import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { locationDataMap } from "../../data/locationDataMap";

import HeroSection          from "./sections/HeroSection";
import HighlightsSection    from "./sections/HighlightsSection";
import PracticeSection      from "./sections/PracticeSection";
import ProgramDetailsSection from "./sections/ProgramDetailsSection";
import ExperienceSection    from "./sections/ExperienceSection";
import AccommodationSection from "./sections/AccommodationSection";
import FaqSection           from "./sections/FaqSection";
import YogaTrainingPage from "./sections/YogaTrainingPage";

import { ROOM_PRICES_BALI } from "../../data/bali/programPrices";
import { ROOM_PRICES_RISHIKESH } from "../../data/rishikesh/programPricesRishikesh";
import { ROOM_PRICES_MYSORE } from "../../data/mysore/programPricesMysore";

const generateBatches = (durationDays) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  
  const months = [];
  for (let i = 0; i < 8; i++) {
    const d = new Date(currentYear, currentMonth + i, 1);
    const monthIndex = d.getMonth();
    const year = d.getFullYear();
    const name = d.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    const startDay = monthIndex === 0 ? 5 : 1; // Course starts on 5th in January, 1st in others
    months.push({ name, year, monthIndex, startDay });
  }
  
  const getSuffix = (day) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:  return 'st';
      case 2:  return 'nd';
      case 3:  return 'rd';
      default: return 'th';
    }
  };

  return months
    .map(m => {
      const startDate = new Date(m.year, m.monthIndex, m.startDay);
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + durationDays - 1);
      return { startDate, endDate };
    })
    .filter(batch => batch.startDate >= today)
    .slice(0, 6)
    .map(batch => {
      const { startDate, endDate } = batch;
      const startDayStr = `${startDate.getDate()}${getSuffix(startDate.getDate())}`;
      const endDayStr = `${endDate.getDate()}${getSuffix(endDate.getDate())}`;
      
      const startMonthStr = startDate.toLocaleString('en-US', { month: 'short' });
      const endMonthStr = endDate.toLocaleString('en-US', { month: 'short' });
      
      if (startDate.getMonth() === endDate.getMonth()) {
        return `${startDayStr} To ${endDayStr} ${startMonthStr} ${startDate.getFullYear()}`;
      } else {
        return `${startDayStr} ${startMonthStr} To ${endDayStr} ${endMonthStr} ${endDate.getFullYear()}`;
      }
    });
};

// Generic dynamic course page.
const ProgramPage = ({ data }) => {
  const { location: locParam, course: courseParam } = useParams();
  const navigate = useNavigate();
  const locationPath = useLocation().pathname;
  const [selectedBatch, setSelectedBatch] = useState(0);

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
      <div className="w-full py-10 md:py-12 text-center">
        <h2 className="text-2xl font-semibold">Course Not Found</h2>
        <p className="mt-2 text-gray-600">We couldn't find the requested program. Check the URL and try again.</p>
      </div>
    );
  }



  // Resolve dynamic pricing rooms info
  const locKey = locParam?.toLowerCase();
  const slugKey = courseParam?.toLowerCase();
  let pricingInfo = null;
  if (locKey === "bali") {
    pricingInfo = ROOM_PRICES_BALI[slugKey];
  } else if (locKey === "rishikesh") {
    pricingInfo = ROOM_PRICES_RISHIKESH[slugKey];
  } else if (locKey === "mysuru" || locKey === "mysore") {
    pricingInfo = ROOM_PRICES_MYSORE[slugKey];
  }

  // Pre-calculate batch dates
  const durationDays = pricingInfo?.durationDays || 25;
  const batches = generateBatches(durationDays);

  const handleOpenCheckout = (roomType) => {
    const isRetreat = locationPath.toLowerCase().startsWith("/retreats/");
    navigate("/checkout", { 
      state: { 
        location: locParam, 
        slug: courseParam, 
        type: isRetreat ? "retreats" : "programs", 
        roomType,
        selectedDate: batches[selectedBatch] || "Select on arrival"
      } 
    });
  };

  // Construct dynamic accommodation content by pulling room details from the course file and prices from the price file
  let accommodationData = pageData.accommodationSection?.content;
  if (accommodationData?.rooms && pricingInfo?.rooms) {
    accommodationData = {
      ...accommodationData,
      rooms: accommodationData.rooms.map(originalRoom => {
        const matchedPrice = pricingInfo.rooms.find(
          room => room.type?.toLowerCase().replace(/\s+/g, '') === originalRoom.type?.toLowerCase().replace(/\s+/g, '')
        );
        if (matchedPrice) {
          return {
            ...originalRoom,
            price: `$${matchedPrice.current}`
          };
        }
        return originalRoom;
      })
    };
  }

  const defaultRoomType = pricingInfo?.rooms?.[0]?.type || "6 Shared Room";

  return (
    <div className="w-full overflow-x-hidden">

      {/* 1. Hero */}
      <HeroSection
        data={pageData.heroSection}
        onBookClick={() => handleOpenCheckout(defaultRoomType)}
      />

      {/* 2. Highlights — community story, promo stats */}
      <HighlightsSection
        communityData={pageData.highlightsSection?.community}
        promoData={pageData.highlightsSection?.promo}
      />

      {/* 3. Core Practices */}
      <PracticeSection data={pageData.practiceSection?.content} />
      <YogaTrainingPage 
        pageData={pageData} 
        selectedBatch={selectedBatch}
        setSelectedBatch={setSelectedBatch}
        onBookClick={handleOpenCheckout}
      />
      
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
        data={accommodationData}
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