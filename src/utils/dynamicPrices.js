// src/utils/dynamicPrices.js

import { PROGRAM_PRICES, ROOM_PRICES_BALI } from "../data/bali/programPrices.js";
import { PROGRAM_PRICES_RISHIKESH, ROOM_PRICES_RISHIKESH } from "../data/rishikesh/programPricesRishikesh.js";
import { PROGRAM_PRICES_MYSORE, ROOM_PRICES_MYSORE } from "../data/mysore/programPricesMysore.js";
import generatedPrices from "../data/generated-prices.js";

// ============================================================================
// ⚙️ SOURCE CONFIGURATION TOGGLE
// ============================================================================
// Set to false to read directly from pre-compiled local Excel data (generated-prices.json)
// Set to true  or provide VITE_SPREADSHEET_ID in .env to read live in real-time from Google Spreadsheets
export const USE_GOOGLE_SHEETS = false; 
// ============================================================================

const UNIFIED_PRICE_MAP = {
  bali: {
    "50hr": { cat: "multiStyle", key: "50hr" },
    "100hr": { cat: "multiStyle", key: "100hr" },
    "200hr": { cat: "multiStyle", key: "200hr" },
    "300hr": { cat: "multiStyle", key: "300hr" },
    "500hr": { cat: "multiStyle", key: "500hr" },
    "kundalini50hr": { cat: "kundalini", key: "50hr" },
    "kundalini100hr": { cat: "kundalini", key: "100hr" },
    "kundalini200hr": { cat: "kundalini", key: "200hr" },
    "kundalini300hr": { cat: "kundalini", key: "300hr" },
    "kundalini500hr": { cat: "kundalini", key: "500hr" },
    "yinyoga": { cat: "shortcourses", key: "yinyoga" },
    "prenatalyoga": { cat: "shortcourses", key: "prenatalyoga" },
    "aerialyoga": { cat: "shortcourses", key: "aerialyoga" },
    "acroyoga": { cat: "shortcourses", key: "acroyoga" },
    "soundhealing": { cat: "specializations", key: "soundhealing" },
    "100houryogatherapyayurve": { cat: "specializations", key: "100houryogatherapyayurve" },
    "ayurvedictreatmentttc": { cat: "specializations", key: "ayurvedictreatmentttc" },
    "ayurveda5hoursabhyangam": { cat: "specializations", key: "ayurveda5hoursabhyangam" },
    "retreats6days": { cat: "specializations", key: "retreats6days" },
    "vipassanameditation": { cat: "specializations", key: "vipassanameditation" },
    "3daywellness": { cat: "specializations", key: "3daywellness" },
    "adventureyoga": { cat: "specializations", key: "adventureyoga" },
    "multistylemeditation": { cat: "specializations", key: "multistylemeditation" }
  },
  rishikesh: {
    "100hr": { cat: "multiStyle", key: "100hr" },
    "200hr": { cat: "multiStyle", key: "200hr" },
    "300hr": { cat: "multiStyle", key: "300hr" },
    "500hr": { cat: "multiStyle", key: "500hr" },
    "kundalini50hr": { cat: "kundalini", key: "50hr" },
    "kundalini100hr": { cat: "kundalini", key: "100hr" },
    "kundalini200hr": { cat: "kundalini", key: "200hr" },
    "kundalini300hr": { cat: "kundalini", key: "300hr" },
    "kundalini500hr": { cat: "kundalini", key: "500hr" },
    "rishikeshprenatalyoga": { cat: "shortcourses", key: "prenatalyoga" },
    "rishikesh6nightsyinyoga": { cat: "shortcourses", key: "yinyoga" },
    "rishikesh50houryoganidra": { cat: "shortcourses", key: "nidra" },
    "rishikeshsoundhealing": { cat: "specializations", key: "RishikeshSoundHealingData" },
    "rishikesh200hourmultistylekundaliniayurvedamassage": { cat: "specializations", key: "Rishikesh200HourMultiStyleKundaliniAyurvedaMassageData" },
    "rishikesh10dayspanchakarma": { cat: "specializations", key: "Rishikesh10DaysPanchakarmaData" },
    "rishikesh2daysayurvedicnutrition": { cat: "specializations", key: "Rishikesh2DaysAyurvedicNutritionData" },
    "rishikeshayurvedatherapistdiploma": { cat: "specializations", key: "RishikeshAyurvedaTherapistDiplomaData" },
    "rishikesh18daysyogatherapywellness": { cat: "specializations", key: "Rishikesh18DaysYogaTherapyWellnessData" },
    "rishikesh5daysmindfulnessmeditation": { cat: "specializations", key: "RishikeshmindfulnessMeditationData" },
    "rishikesh5daysyogaretreat": { cat: "specializations", key: "Rishikesh5DaysYogaRetreatData" },
    "rishikesh7daysyogaretreat": { cat: "specializations", key: "Rishikesh7DaysYogaRetreatData" },
    "rishikesh15daysyogaretreat": { cat: "specializations", key: "Rishikesh15DaysYogaRetreatData" },
    "rishikesh5daysacupressure": { cat: "specializations", key: "Rishikesh5DaysAcupressureData" }
  },
  mysore: {
    "200hr": { cat: "multiStyle", key: "200hrAshtanga" },
    "200hrmultistyle": { cat: "multiStyle", key: "200hrMultistyle" },
    "300hr": { cat: "multiStyle", key: "300hr" },
    "500hr": { cat: "multiStyle", key: "500hr" },
    "mysore21dayashtanga": { cat: "multiStyle", key: "21DayAshtanga" },
    "mysore21dayhatha": { cat: "multiStyle", key: "21DayHatha" },
    "mysore50houryinyoga": { cat: "shortcourses", key: "yinyoga" },
    "mysore50houraerialyoga": { cat: "shortcourses", key: "aerialyoga" },
    "mysoreprenatalyoga": { cat: "shortcourses", key: "prenatalyoga" },
    "mysore7dayyogatherapy": { cat: "shortcourses", key: "yogatherapy" },
    "mysoresingingbowlsoundhealing": { cat: "specializations", key: "MysoreSingingBowlSoundHealingData" },
    "mysore7daychairyoga": { cat: "specializations", key: "Mysore7DayChairYogaData" },
    "mysore7daywheelyoga": { cat: "specializations", key: "Mysore7DayWheelYogaData" }
  }
};

export const DYNAMIC_BATCHES = {};

export const DYNAMIC_TESTIMONIALS = [
  {
    stars: 5,
    quote: "The Yoga TTC in Bali changed my life completely. The teachers, the food, the environment — everything was magical!",
    avatar: "/images/external/testimonials/44.jpg",
    name: "Jessica M.",
    country: "USA",
  },
  {
    stars: 5,
    quote: "Ayurveda Healing Retreat in Rishikesh gave me a new life. I feel lighter, healthier and mentally so calm.",
    avatar: "/images/external/testimonials/32.jpg",
    name: "Arjun P.",
    country: "Australia",
  },
  {
    stars: 5,
    quote: "A life-changing experience! I found my purpose and a beautiful community for life.",
    avatar: "/images/external/testimonials/68.jpg",
    name: "Maria K.",
    country: "Germany",
  }
];

function normalizeHeaders(headers) {
  return headers.map(h => {
    if (!h) return "";
    const lower = String(h).toLowerCase();
    if (lower.includes("location")) return "location";
    if (lower.includes("program name") || lower.includes("activity name") || lower.includes("title")) return "programname";
    if (lower.includes("activity") || lower.includes("course") || lower.includes("key") || lower.includes("code") || lower.includes("id") || lower.includes("slug")) return "coursekey";
    if (lower.includes("duration")) return "durationdays";
    if (lower.includes("room type")) return "roomtype";
    if (lower.includes("current") || lower.includes("discounted")) return "current";
    if (lower.includes("original") || lower.includes("strike")) return "original";
    if (lower.includes("base price") || lower.includes("program price") || lower.includes("activity price") || lower.includes("price")) return "price";
    if (lower.includes("currency")) return "currency";
    if (lower.includes("note")) return "note";
    if (lower.includes("popular")) return "popular";
    if (lower.includes("start date") || lower.includes("startdate")) return "startdate";
    if (lower.includes("end date") || lower.includes("enddate")) return "enddate";
    if (lower.includes("seats")) return "seatsleft";
    if (lower.includes("custom date") || lower.includes("datetext")) return "datetext";
    return lower.replace(/\s+/g, '');
  });
}

function parseCSV(text) {
  const lines = text.split(/\r?\n/).filter(line => line.trim().length > 0);
  if (lines.length === 0) return [];
  
  const parseLine = (line) => {
    const result = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        result.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }
    result.push(current.trim());
    return result;
  };

  const rawHeaders = parseLine(lines[0]);
  const headers = normalizeHeaders(rawHeaders);
  const rows = [];
  
  for (let i = 1; i < lines.length; i++) {
    const values = parseLine(lines[i]);
    if (values.every(v => v === "")) continue;
    const obj = {};
    headers.forEach((header, idx) => {
      if (header) {
        obj[header] = values[idx] !== undefined ? values[idx] : null;
      }
    });
    rows.push(obj);
  }
  
  return rows;
}

async function fetchGoogleSheetRows(spreadsheetId, sheetName) {
  const isPublished = spreadsheetId.includes("2PACX-") || spreadsheetId.includes("/d/e/");
  let url;
  
  if (isPublished) {
    if (spreadsheetId.includes("output=csv")) {
      url = spreadsheetId;
    } else {
      const match = spreadsheetId.match(/\/d\/e\/([a-zA-Z0-9_-]+)/);
      const publishedId = match ? match[1] : spreadsheetId;
      const gidMatch = spreadsheetId.match(/[&?]gid=([0-9]+)/);
      const gidParam = gidMatch ? `&gid=${gidMatch[1]}` : "";
      url = `https://docs.google.com/spreadsheets/d/e/${publishedId}/pub?output=csv${gidParam}`;
    }
  } else {
    const sheetParam = sheetName ? `&sheet=${encodeURIComponent(sheetName)}` : "";
    url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json${sheetParam}`;
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch sheet: HTTP status ${res.status}`);
  }
  const text = await res.text();

  if (isPublished) {
    return parseCSV(text);
  }
  
  const startIdx = text.indexOf('{');
  const endIdx = text.lastIndexOf('}');
  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Invalid response format from Google Sheets API`);
  }
  
  const jsonStr = text.substring(startIdx, endIdx + 1);
  const data = JSON.parse(jsonStr);
  
  if (data.status !== "ok" || !data.table) {
    throw new Error(`Google Sheets API status is not OK`);
  }
  
  const rawCols = data.table.cols.map((col, idx) => {
    return col.label ? col.label.trim() : `col${idx}`;
  });
  const cols = normalizeHeaders(rawCols);
  
  const rows = data.table.rows.map(row => {
    const obj = {};
    if (row && row.c) {
      row.c.forEach((cell, idx) => {
        const colName = cols[idx];
        if (colName) {
          obj[colName] = cell ? (cell.f !== undefined ? cell.f : cell.v) : null;
        }
      });
    }
    return obj;
  });
  
  return rows;
}

function getUpdatedProgramPrice(mappedLoc, key) {
  const program = {
    bali: PROGRAM_PRICES,
    rishikesh: PROGRAM_PRICES_RISHIKESH,
    mysore: PROGRAM_PRICES_MYSORE,
  }[mappedLoc];

  if (!program) return null;

  const mapping = UNIFIED_PRICE_MAP[mappedLoc]?.[key];
  if (mapping) {
    const { cat, key: priceKey } = mapping;
    if (program[cat]?.[priceKey]) {
      return program[cat][priceKey];
    }
  }

  if (key.startsWith("kundalini")) {
    const duration = key.replace("kundalini", "");
    if (program.kundalini?.[duration]) {
      return program.kundalini[duration];
    }
  }

  if (program.multiStyle?.[key]) {
    return program.multiStyle[key];
  }
  if (program.shortcourses?.[key]) {
    return program.shortcourses[key];
  }
  if (program.specializations?.[key]) {
    return program.specializations[key];
  }

  return null;
}

// Helper to parse price string to number
const parsePriceValue = (str) => {
  if (!str) return 0;
  const clean = String(str).replace(/[^0-9.]/g, "");
  return parseFloat(clean) || 0;
};

/**
 * Applies normalized rows data to PROGRAM_PRICES, ROOM_PRICES, DYNAMIC_BATCHES, etc.
 */
function applyPriceData(data) {
  if (!data) return;
  const { programRows = [], roomRows = [], batchRows = [] } = data;

  // 1. Group and apply Program Prices
  const sheetProgramPrices = {
    bali: { multiStyle: {}, kundalini: {}, shortcourses: {}, specializations: {} },
    rishikesh: { multiStyle: {}, kundalini: {}, shortcourses: {}, specializations: {} },
    mysore: { multiStyle: {}, kundalini: {}, shortcourses: {}, specializations: {} },
  };

  for (const row of programRows) {
    const loc = row.location?.toLowerCase().trim();
    let mappedLoc = loc;
    if (loc === "mysuru") mappedLoc = "mysore";

    if (!mappedLoc || !sheetProgramPrices[mappedLoc]) continue;

    const courseKey = row.coursekey?.trim();
    const rawPrice = row.price ? String(row.price).trim() : "";
    if (!courseKey || !rawPrice) continue;

    const formattedPrice = rawPrice.startsWith("$") ? rawPrice : `$${rawPrice}`;

    const mapping = UNIFIED_PRICE_MAP[mappedLoc]?.[courseKey];
    if (mapping) {
      sheetProgramPrices[mappedLoc][mapping.cat][mapping.key] = formattedPrice;
    } else {
      if (courseKey.startsWith("kundalini")) {
        const dur = courseKey.replace("kundalini", "");
        sheetProgramPrices[mappedLoc].kundalini[dur] = formattedPrice;
      } else if (["50hr", "100hr", "200hr", "300hr", "500hr"].includes(courseKey)) {
        sheetProgramPrices[mappedLoc].multiStyle[courseKey] = formattedPrice;
      } else {
        sheetProgramPrices[mappedLoc].specializations[courseKey] = formattedPrice;
      }
    }
  }

  // Merge into static dictionaries
  const mergePrices = (target, source) => {
    for (const cat of Object.keys(source)) {
      if (!target[cat]) target[cat] = {};
      for (const [k, v] of Object.entries(source[cat])) {
        target[cat][k] = v;
      }
    }
  };

  mergePrices(PROGRAM_PRICES, sheetProgramPrices.bali);
  mergePrices(PROGRAM_PRICES_RISHIKESH, sheetProgramPrices.rishikesh);
  mergePrices(PROGRAM_PRICES_MYSORE, sheetProgramPrices.mysore);

  // 2. Group and apply Room Prices
  const sheetRoomPrices = {
    bali: {},
    rishikesh: {},
    mysore: {},
  };

  for (const row of roomRows) {
    const loc = row.location?.toLowerCase().trim();
    let mappedLoc = loc;
    if (loc === "mysuru") mappedLoc = "mysore";

    if (!mappedLoc || !sheetRoomPrices[mappedLoc]) continue;

    const courseKey = row.coursekey?.trim();
    if (!courseKey) continue;

    if (!sheetRoomPrices[mappedLoc][courseKey]) {
      sheetRoomPrices[mappedLoc][courseKey] = {
        durationDays: parseInt(row.durationdays) || 0,
        rooms: []
      };
    }

    const basePriceStr = getUpdatedProgramPrice(mappedLoc, courseKey);
    const basePrice = parsePriceValue(basePriceStr);

    const rawCurrent = parseFloat(row.current) || 0;
    const rawOriginal = parseFloat(row.original) || 0;

    const currentPrice = basePrice + rawCurrent;
    const originalPrice = basePrice + rawOriginal;

    sheetRoomPrices[mappedLoc][courseKey].rooms.push({
      type: row.roomtype || "",
      current: currentPrice,
      original: originalPrice,
      note: row.note || "",
      popular: String(row.popular).toLowerCase() === "true"
    });
  }

  for (const [key, val] of Object.entries(sheetRoomPrices.bali)) {
    ROOM_PRICES_BALI[key] = val;
  }
  for (const [key, val] of Object.entries(sheetRoomPrices.rishikesh)) {
    ROOM_PRICES_RISHIKESH[key] = val;
  }
  for (const [key, val] of Object.entries(sheetRoomPrices.mysore)) {
    ROOM_PRICES_MYSORE[key] = val;
  }

  // 3. Process and apply Batches
  for (const row of batchRows) {
    const loc = row.location?.toLowerCase().trim();
    let mappedLoc = loc;
    if (loc === "mysuru") mappedLoc = "mysore";

    const courseKey = row.coursekey?.trim();
    const startStr = row.startdate ? String(row.startdate).trim() : "";
    const endStr = row.enddate ? String(row.enddate).trim() : "";
    const dateText = row.datetext ? String(row.datetext).trim() : "";

    if (mappedLoc && courseKey && (startStr || dateText)) {
      const batchKey = `${mappedLoc}_${courseKey}`;
      if (!DYNAMIC_BATCHES[batchKey]) {
        DYNAMIC_BATCHES[batchKey] = [];
      }

      const parseDate = (str) => {
        if (!str) return new Date(NaN);
        const parts = str.split("-");
        if (parts.length === 3) {
          return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
        }
        return new Date(str);
      };

      const startDate = parseDate(startStr);
      const endDate = parseDate(endStr);

      if (dateText || (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime()))) {
        DYNAMIC_BATCHES[batchKey].push({
          startDate: !isNaN(startDate.getTime()) ? startDate : new Date(),
          endDate: !isNaN(endDate.getTime()) ? endDate : new Date(),
          dateText,
          seatsLeft: parseInt(row.seatsleft) || 3
        });
      }
    }
  }

  // Sort batches chronologically
  for (const key of Object.keys(DYNAMIC_BATCHES)) {
    DYNAMIC_BATCHES[key].sort((a, b) => a.startDate - b.startDate);
  }

  return true;
}

// Synchronously apply precompiled prices on initial module load
applyPriceData(generatedPrices);

async function applyActivitiesPriceData(activityRows) {
  if (!activityRows || activityRows.length === 0) return;
  try {
    const activitiesModule = await import("../data/bali/activities");
    const actList = activitiesModule.activitiesData || [];
    
    for (const row of activityRows) {
      const loc = row.location ? String(row.location).toLowerCase().trim() : "";
      if (loc && loc !== "bali") continue; // only for Bali

      const courseKey = (row.coursekey || row.slug || row.key || "").trim().toLowerCase();
      const rawPrice = row.price ? String(row.price).trim() : "";
      if (!courseKey || !rawPrice) continue;

      const activity = actList.find(act => 
        act && act.slug && (
          act.slug.toLowerCase() === courseKey || 
          act.slug.toLowerCase().replace(/[-_\s]/g, '') === courseKey.replace(/[-_\s]/g, '')
        )
      );

      if (activity) {
        const numericVal = parseFloat(rawPrice.replace(/[^0-9.]/g, ""));
        if (!isNaN(numericVal)) {
          activity.price = numericVal;
        } else {
          activity.price = rawPrice;
        }

        if (row.currency) {
          activity.currency = String(row.currency).trim();
        } else if (rawPrice.includes("$")) {
          activity.currency = "USD";
        } else if (rawPrice.includes("₹")) {
          activity.currency = "INR";
        }
      }
    }
  } catch (actErr) {
    console.warn("[Dynamic Pricing] Error updating activity prices:", actErr);
  }
}

async function applyDynamicPricesToDataMaps() {
  const { locationDataMap } = await import("../data/locationDataMap");
  const { LANDING_LOCATION_DATA } = await import("../pages/programsCard/LandingPageData");

  const mappings = [
    { locKeys: ["bali"], mappedLoc: "bali" },
    { locKeys: ["rishikesh"], mappedLoc: "rishikesh" },
    { locKeys: ["mysuru", "mysore"], mappedLoc: "mysore" },
  ];

  for (const mapping of mappings) {
    for (const locKey of mapping.locKeys) {
      // 1. Update locationDataMap
      const locationData = locationDataMap[locKey];
      if (locationData) {
        for (const [catName, catCourses] of Object.entries(locationData)) {
          if (!catCourses || typeof catCourses !== "object") continue;
          for (const [courseKey, courseData] of Object.entries(catCourses)) {
            if (!courseData || !courseData.heroSection || !courseData.heroSection.hero) continue;
            const newPrice = getUpdatedProgramPrice(mapping.mappedLoc, courseKey);
            if (newPrice) {
              courseData.heroSection.hero.price = newPrice;
            }
          }
        }
      }

      // 2. Update LANDING_LOCATION_DATA
      const landingData = LANDING_LOCATION_DATA[locKey];
      if (landingData && landingData.programsByCategoryId) {
        for (const [catId, programs] of Object.entries(landingData.programsByCategoryId)) {
          if (!Array.isArray(programs)) continue;
          for (const prog of programs) {
            if (!prog || !prog.slug) continue;
            const newPrice = getUpdatedProgramPrice(mapping.mappedLoc, prog.slug);
            if (newPrice) {
              prog.price = newPrice;
            }
          }
        }
      }
    }
  }
}

/**
 * Main execution function to fetch and apply dynamic prices.
 */
export async function fetchAndApplyDynamicPrices() {
  const env = (typeof import.meta !== "undefined" && import.meta?.env) ? import.meta.env : {};
  const spreadsheetId = env.VITE_SPREADSHEET_ID;
  const programSpreadsheetId = env.VITE_SPREADSHEET_ID_PROGRAM;
  const roomSpreadsheetId = env.VITE_SPREADSHEET_ID_ROOM;
  const batchesSpreadsheetId = env.VITE_SPREADSHEET_ID_BATCHES;
  const activitiesSpreadsheetId = env.VITE_SPREADSHEET_ID_ACTIVITIES;

  const hasGoogleSheetConfig = !!(spreadsheetId || programSpreadsheetId || roomSpreadsheetId || batchesSpreadsheetId || activitiesSpreadsheetId);
  const useGoogleSheets = USE_GOOGLE_SHEETS || env.VITE_USE_GOOGLE_SHEETS === "true" || hasGoogleSheetConfig;

  console.log(`[Dynamic Pricing] Source Mode: ${useGoogleSheets && hasGoogleSheetConfig ? "GOOGLE SHEETS (Live)" : "PRE-COMPILED LOCAL JSON (Zero Bundle/CPU Overhead)"}`);

  let programRows = [], roomRows = [], batchRows = [], activityRows = [];

  try {
    if (useGoogleSheets && hasGoogleSheetConfig) {
      try {
        const isSingleSheet = !!spreadsheetId && !spreadsheetId.includes("2PACX-") && !spreadsheetId.includes("/d/e/");
        if (isSingleSheet) {
          [programRows, roomRows, batchRows, activityRows] = await Promise.all([
            fetchGoogleSheetRows(spreadsheetId, "Program Prices").catch(() => []),
            fetchGoogleSheetRows(spreadsheetId, "Room Prices").catch(() => []),
            fetchGoogleSheetRows(spreadsheetId, "Batches").catch(() => []),
            fetchGoogleSheetRows(spreadsheetId, "Activity Prices").catch(() => fetchGoogleSheetRows(spreadsheetId, "Activities").catch(() => []))
          ]);
        } else {
          const pSrc = programSpreadsheetId || spreadsheetId;
          const rSrc = roomSpreadsheetId || spreadsheetId;
          const bSrc = batchesSpreadsheetId || spreadsheetId;
          const aSrc = activitiesSpreadsheetId || spreadsheetId;

          const [pRes, rRes, bRes, aRes] = await Promise.all([
            pSrc ? fetchGoogleSheetRows(pSrc, "Program Prices").catch(() => []) : [],
            rSrc ? fetchGoogleSheetRows(rSrc, "Room Prices").catch(() => []) : [],
            bSrc ? fetchGoogleSheetRows(bSrc, "Batches").catch(() => []) : [],
            aSrc ? fetchGoogleSheetRows(aSrc, "Activity Prices").catch(() => fetchGoogleSheetRows(aSrc, "Activities").catch(() => [])) : []
          ]);

          programRows = pRes;
          roomRows = rRes;
          batchRows = bRes;
          activityRows = aRes;
        }

        if (programRows.length > 0 || roomRows.length > 0 || batchRows.length > 0) {
          applyPriceData({ programRows, roomRows, batchRows, activityRows });
          await applyActivitiesPriceData(activityRows);
          console.log(`[Dynamic Pricing] Successfully updated from Google Sheets: ${programRows.length} programs, ${roomRows.length} room rows, ${batchRows.length} batch rows.`);
        }
      } catch (err) {
        console.warn("[Dynamic Pricing] Error fetching Google Sheets, falling back to precompiled JSON:", err);
      }
    }

    // Apply activity prices from generated-prices.js if not updated from Google Sheets
    if (activityRows.length === 0 && generatedPrices.activityRows) {
      try {
        await applyActivitiesPriceData(generatedPrices.activityRows);
      } catch (err) {
        console.warn("[Dynamic Pricing] Activities update note:", err?.message);
      }
    }

    // Propagate updated prices into static maps
    try {
      await applyDynamicPricesToDataMaps();
    } catch (err) {
      console.warn("[Dynamic Pricing] Static maps update note:", err?.message);
    }

    console.log("[Dynamic Pricing] Dynamic price calculations populated successfully.");
    return true;
  } catch (err) {
    console.error("[Dynamic Pricing] Fetching error:", err);
    return false;
  }
}
