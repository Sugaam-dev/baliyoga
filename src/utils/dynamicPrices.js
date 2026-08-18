import { PROGRAM_PRICES, ROOM_PRICES_BALI } from "../data/bali/programPrices";
import { PROGRAM_PRICES_RISHIKESH, ROOM_PRICES_RISHIKESH } from "../data/rishikesh/programPricesRishikesh";
import { PROGRAM_PRICES_MYSORE, ROOM_PRICES_MYSORE } from "../data/mysore/programPricesMysore";
import { locationDataMap } from "../data/locationDataMap";
import { LANDING_LOCATION_DATA } from "../pages/programsCard/LandingPageData";

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
    "100houryogatherapyayurve": { cat: "specializations", key: "Bali100HourYogaTherapyAyurvedaData" },
    "ayurvedictreatmentttc": { cat: "specializations", key: "BaliAyurvedicTreatmentTTCData" },
    "ayurveda5hoursabhyangam": { cat: "specializations", key: "BaliAyurveda5HoursAbhyangamData" },
    "wellness-retreat": { cat: "specializations", key: "wellnessretreat" },
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

function parseCSV(text) {
  const lines = text.split(/\r?\n/).filter(line => line.trim().length > 0);
  if (lines.length === 0) return [];
  
  // Custom CSV parser handling quotes
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

  const headers = parseLine(lines[0]).map(h => h.toLowerCase().replace(/[^a-z0-9]/g, ""));
  
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const values = parseLine(lines[i]);
    const rowObj = {};
    headers.forEach((h, idx) => {
      rowObj[h] = values[idx] || "";
    });
    rows.push(rowObj);
  }
  return rows;
}

async function fetchGoogleSheetRows(url) {
  if (!url) return [];
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch sheet: HTTP status ${res.status}`);
  }
  const text = await res.text();
  return parseCSV(text);
}

function getUpdatedProgramPrice(mappedLoc, key) {
  const program = {
    bali: PROGRAM_PRICES,
    rishikesh: PROGRAM_PRICES_RISHIKESH,
    mysore: PROGRAM_PRICES_MYSORE
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

  for (const cat of ["shortcourses", "specializations"]) {
    if (program[cat]) {
      for (const [sKey, val] of Object.entries(program[cat])) {
        if (key.toLowerCase().includes(sKey.toLowerCase())) {
          return val;
        }
      }
    }
  }

  if (mappedLoc === "mysore") {
    if (key === "200hr" && program.multiStyle?.["200hrAshtanga"]) return program.multiStyle["200hrAshtanga"];
    if (key === "200hrmultistyle" && program.multiStyle?.["200hrMultistyle"]) return program.multiStyle["200hrMultistyle"];
  }

  return null;
}

function applyDynamicPricesToDataMaps() {
  const mappings = [
    { locKeys: ["bali"], mappedLoc: "bali" },
    { locKeys: ["rishikesh"], mappedLoc: "rishikesh" },
    { locKeys: ["mysuru", "mysore"], mappedLoc: "mysore" }
  ];

  for (const mapping of mappings) {
    for (const locKey of mapping.locKeys) {
      // 1. Update locationDataMap
      const locationData = locationDataMap[locKey];
      if (locationData) {
        for (const cat of Object.keys(locationData)) {
          for (const [courseKey, courseData] of Object.entries(locationData[cat])) {
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

export async function fetchAndApplyDynamicPrices() {
  const programSpreadsheetId = import.meta.env.VITE_SPREADSHEET_ID_PROGRAM || "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyHy9zcov1CcVPTGO6Y_RJimLCk2Y3sExKoYMtOVyDdWnN4yDIxZgpC93K1uRHiXWB0Gmqf1EMm7eh/pub?output=csv&gid=905979125";
  const roomSpreadsheetId = import.meta.env.VITE_SPREADSHEET_ID_ROOM || "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyHy9zcov1CcVPTGO6Y_RJimLCk2Y3sExKoYMtOVyDdWnN4yDIxZgpC93K1uRHiXWB0Gmqf1EMm7eh/pub?output=csv&gid=396782719";
  const batchesSpreadsheetId = import.meta.env.VITE_SPREADSHEET_ID_BATCHES || "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyHy9zcov1CcVPTGO6Y_RJimLCk2Y3sExKoYMtOVyDdWnN4yDIxZgpC93K1uRHiXWB0Gmqf1EMm7eh/pub?output=csv&gid=1930415554";

  if (!programSpreadsheetId && !roomSpreadsheetId && !batchesSpreadsheetId) {
    console.warn("[Dynamic Pricing] Spreadsheet IDs are missing in environment variables.");
    return false;
  }

  try {
    let programRows = [], roomRows = [], batchRows = [];

    if (programSpreadsheetId) {
      programRows = await fetchGoogleSheetRows(programSpreadsheetId);
    }
    if (roomSpreadsheetId) {
      roomRows = await fetchGoogleSheetRows(roomSpreadsheetId);
    }
    if (batchesSpreadsheetId) {
      batchRows = await fetchGoogleSheetRows(batchesSpreadsheetId);
    }

    // 1. Group and apply Program Prices first
    const sheetProgramPrices = {
      bali: { multiStyle: {}, kundalini: {}, shortcourses: {}, specializations: {} },
      rishikesh: { multiStyle: {}, kundalini: {}, shortcourses: {}, specializations: {} },
      mysore: { multiStyle: {}, kundalini: {}, shortcourses: {}, specializations: {} }
    };

    for (const row of programRows) {
      const loc = row.location?.toLowerCase().trim();
      let mappedLoc = loc;
      if (loc === "mysuru") mappedLoc = "mysore";

      if (!sheetProgramPrices[mappedLoc]) continue;

      const courseKey = row.coursecodeid?.trim();
      const price = row.priceeg1299?.trim();
      if (courseKey && price) {
        const mapping = UNIFIED_PRICE_MAP[mappedLoc]?.[courseKey];
        if (mapping) {
          const { cat, key } = mapping;
          sheetProgramPrices[mappedLoc][cat][key] = price;
        } else {
          const category = row.category?.trim();
          if (category && sheetProgramPrices[mappedLoc][category]) {
            sheetProgramPrices[mappedLoc][category][courseKey] = price;
          }
        }
      }
    }

    for (const cat of ["multiStyle", "kundalini", "shortcourses", "specializations"]) {
      if (PROGRAM_PRICES[cat]) Object.assign(PROGRAM_PRICES[cat], sheetProgramPrices.bali[cat]);
      if (PROGRAM_PRICES_RISHIKESH[cat]) Object.assign(PROGRAM_PRICES_RISHIKESH[cat], sheetProgramPrices.rishikesh[cat]);
      if (PROGRAM_PRICES_MYSORE[cat]) Object.assign(PROGRAM_PRICES_MYSORE[cat], sheetProgramPrices.mysore[cat]);
    }

    const parsePriceValue = (val) => {
      if (!val) return 0;
      const clean = String(val).replace(/[^0-9.]/g, "");
      return parseFloat(clean) || 0;
    };

    // 2. Group, calculate, and apply Room Prices
    const sheetRoomPrices = {
      bali: {},
      rishikesh: {},
      mysore: {}
    };

    for (const row of roomRows) {
      const loc = row.location?.toLowerCase().trim();
      let mappedLoc = loc;
      if (loc === "mysuru") mappedLoc = "mysore";

      if (!sheetRoomPrices[mappedLoc]) continue;

      const courseKey = row.coursecodeid?.trim();
      if (!courseKey) continue;

      if (!sheetRoomPrices[mappedLoc][courseKey]) {
        sheetRoomPrices[mappedLoc][courseKey] = {
          durationDays: parseInt(row.durationnumberofdays) || 0,
          rooms: []
        };
      }

      const basePriceStr = getUpdatedProgramPrice(mappedLoc, courseKey);
      const basePrice = parsePriceValue(basePriceStr);

      const rawCurrent = parseFloat(row.roompricecurrent) || 0;
      const rawOriginal = parseFloat(row.roompriceoriginal) || 0;

      const currentPrice = basePrice + rawCurrent;
      const originalPrice = basePrice + rawOriginal;

      sheetRoomPrices[mappedLoc][courseKey].rooms.push({
        type: row.roomtypename || "",
        current: currentPrice,
        original: originalPrice,
        note: row.roomnoteegfemalesonly || "",
        popular: String(row.popularpackagetrueorfalse).toLowerCase() === "true"
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

      const courseKey = row.coursecodeid?.trim();
      const startStr = row.batchstartdateyyyymmdd?.trim();
      const endStr = row.batchenddateyyyymmdd?.trim();

      if (mappedLoc && courseKey && startStr && endStr) {
        const batchKey = `${mappedLoc}_${courseKey}`;
        if (!DYNAMIC_BATCHES[batchKey]) {
          DYNAMIC_BATCHES[batchKey] = [];
        }

        const cleanPart = (str) => {
          const parts = str.split("-");
          return new Date(parts[0], parts[1] - 1, parts[2]);
        };

        const startDate = cleanPart(startStr);
        const endDate = cleanPart(endStr);

        DYNAMIC_BATCHES[batchKey].push({
          startDate,
          endDate,
          dateText: row.customdatetextoptional || "",
          seatsLeft: parseInt(row.seatsleft) || 3
        });
      }
    }

    // Sort batches chronologically
    for (const key of Object.keys(DYNAMIC_BATCHES)) {
      DYNAMIC_BATCHES[key].sort((a, b) => a.startDate - b.startDate);
    }

    // Propagate updated prices into static maps
    applyDynamicPricesToDataMaps();

    console.log("[Dynamic Pricing] Dynamic price calculations populated successfully.");
    return true;
  } catch (err) {
    console.error("[Dynamic Pricing] Fetching error:", err);
    return false;
  }
}
