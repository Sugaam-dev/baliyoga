import React, { useState, useEffect } from "react";
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

import { DYNAMIC_BATCHES, fetchAndApplyDynamicPrices } from "../../utils/dynamicPrices";

const generateBatches = (durationDays, locationKey, courseKey) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const customKey = `${locationKey?.toLowerCase()}_${courseKey?.toLowerCase()}`;
  const customBatches = DYNAMIC_BATCHES[customKey];

  const getSuffix = (day) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:  return 'st';
      case 2:  return 'nd';
      case 3:  return 'rd';
      default: return 'th';
    }
  };

  const formatBatch = (startDate, endDate) => {
    const startDayStr = `${startDate.getDate()}${getSuffix(startDate.getDate())}`;
    const endDayStr = `${endDate.getDate()}${getSuffix(endDate.getDate())}`;
    const startMonthStr = startDate.toLocaleString('en-US', { month: 'short' });
    const endMonthStr = endDate.toLocaleString('en-US', { month: 'short' });
    
    if (startDate.getMonth() === endDate.getMonth()) {
      return `${startDayStr} To ${endDayStr} ${startMonthStr} ${startDate.getFullYear()}`;
    } else {
      return `${startDayStr} ${startMonthStr} To ${endDayStr} ${endMonthStr} ${endDate.getFullYear()}`;
    }
  };

  if (customBatches && customBatches.length > 0) {
    return customBatches
      .filter(b => b.startDate >= today)
      .map(b => b.dateText || formatBatch(b.startDate, b.endDate))
      .slice(0, 6);
  }

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

  return months
    .map(m => {
      const startDate = new Date(m.year, m.monthIndex, m.startDay);
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + durationDays - 1);
      return { startDate, endDate };
    })
    .filter(batch => batch.startDate >= today)
    .slice(0, 6)
    .map(batch => formatBatch(batch.startDate, batch.endDate));
};

// Generic dynamic course page.
const ProgramPage = ({ data }) => {
  const { location: locParam, course: courseParam } = useParams();
  const navigate = useNavigate();
  const locationPath = useLocation().pathname;
  const [selectedBatch, setSelectedBatch] = useState(0);
  const [, setBatchesUpdated] = useState(0);

  useEffect(() => {
    fetchAndApplyDynamicPrices().then((success) => {
      if (success) setBatchesUpdated((prev) => prev + 1);
    });
  }, [locParam, courseParam]);

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
  const batches = generateBatches(durationDays, locParam, courseParam);

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
  if (accommodationData?.rooms && pricingInfo?.rooms && pricingInfo.rooms.length > 0) {
    const hardcodedRooms = accommodationData.rooms;
    accommodationData = {
      ...accommodationData,
      rooms: pricingInfo.rooms.map(sheetRoom => {
        const normalise = s => s?.toLowerCase().replace(/\s+/g, "") || "";
        const sheetTypeLower = sheetRoom.type?.toLowerCase() || "";
        
        // 1. Try exact normalized match
        let hardcoded = hardcodedRooms.find(
          hr => normalise(hr.type) === normalise(sheetRoom.type)
        );
        
        // 2. Try substring match on standard terms
        if (!hardcoded) {
          if (sheetTypeLower.includes("private")) {
            hardcoded = hardcodedRooms.find(hr => hr.type?.toLowerCase().includes("private"));
          } else if (sheetTypeLower.includes("6 sharing") || sheetTypeLower.includes("6-bed") || sheetTypeLower.includes("6 sharing room")) {
            hardcoded = hardcodedRooms.find(hr => hr.type?.toLowerCase().includes("6 sharing") || hr.type?.toLowerCase().includes("6-bed") || hr.type?.toLowerCase().includes("6 sharing room"));
          } else if (sheetTypeLower.includes("4 sharing") || sheetTypeLower.includes("4-bed") || sheetTypeLower.includes("4 sharing room")) {
            hardcoded = hardcodedRooms.find(hr => hr.type?.toLowerCase().includes("4 sharing") || hr.type?.toLowerCase().includes("4-bed") || hr.type?.toLowerCase().includes("4 sharing room"));
          } else if (sheetTypeLower.includes("2 sharing") || sheetTypeLower.includes("twin") || sheetTypeLower.includes("double") || sheetTypeLower.includes("2 sharing room")) {
            hardcoded = hardcodedRooms.find(hr => hr.type?.toLowerCase().includes("2 sharing") || hr.type?.toLowerCase().includes("twin") || hr.type?.toLowerCase().includes("double") || hr.type?.toLowerCase().includes("2 sharing room"));
          } else if (sheetTypeLower.includes("sharing") || sheetTypeLower.includes("shared")) {
            hardcoded = hardcodedRooms.find(hr => hr.type?.toLowerCase().includes("sharing") || hr.type?.toLowerCase().includes("shared") || hr.type?.toLowerCase().includes("shared room"));
          }
        }
        
        // 3. Fall back to matching position index if any
        if (!hardcoded) {
          const idx = pricingInfo.rooms.indexOf(sheetRoom);
          if (idx >= 0 && idx < hardcodedRooms.length) {
            hardcoded = hardcodedRooms[idx];
          }
        }
        
        // 4. Absolute fallback to the first available hardcoded room
        if (!hardcoded && hardcodedRooms.length > 0) {
          hardcoded = hardcodedRooms[0];
        }

        return {
          ...(hardcoded || {}),
          type: sheetRoom.type,
          price: `$${sheetRoom.current}`,
          note: sheetRoom.note || hardcoded?.note || "",
          popular: sheetRoom.popular,
        };
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