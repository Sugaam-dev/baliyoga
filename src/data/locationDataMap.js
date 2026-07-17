// locationDataMap.js
// Maps location, category, and slug parameters to their specific detail dataset configurations.

// ─── Bali Imports ────────────────────────────────────────────────────────────
import { courseData as BaliMultiStyle50hr }    from "./bali/ttc/multiStyle/6-days-50hr-multi-style";
import { courseData as BaliMultiStyle100hr }   from "./bali/ttc/multiStyle/10-days-100hr-multi-style";
import { courseData as BaliMultiStyle200hr }   from "./bali/ttc/multiStyle/20-days-200hr-multi-style";
import { courseData as BaliMultiStyle300hr }   from "./bali/ttc/multiStyle/300hr-multi-style-bali";
import { courseData as BaliMultiStyle500hr }   from "./bali/ttc/multiStyle/500hr-multi-style-bali";

import { courseData as BaliKundalini50hr }    from "./bali/ttc/kundalini/6-days-50hr-kundalini";
import { courseData as BaliKundalini100hr }   from "./bali/ttc/kundalini/100hr-kundalini-bali";
import { courseData as BaliKundalini200hr }   from "./bali/ttc/kundalini/200hr-kundalini-bali";
import { courseData as BaliKundalini300hr }   from "./bali/ttc/kundalini/300hr-kundalini-bali";
import { courseData as BaliKundalini500hr }   from "./bali/ttc/kundalini/500hr-kundalini-bali";

import { courseData as BaliAcroYoga }         from "./bali/ttc/shortCourse/acro-yoga-course";
import { courseData as BaliAerialYoga }       from "./bali/ttc/shortCourse/aerial-yoga-course";
import { courseData as BaliYinYoga }          from "./bali/ttc/shortCourse/50hr-yin-yoga";
import { courseData as BaliPrenatalYoga }     from "./bali/ttc/shortCourse/85hr-prenatal-yoga";

import { courseData as BaliYogaTherapy }      from "./bali/ttc/specialization/100hr-yoga-therapy-ayurveda";
import { courseData as BaliAyurvedicTTC }     from "./bali/ttc/specialization/ayurvedic-treatment-bali";
import { courseData as BaliAbhyangam }        from "./bali/ttc/specialization/abhyangam-massage-training-bali";
import { courseData as BaliSoundHealing }     from "./bali/ttc/specialization/vedic-sound-healing-level-1-2";

import { Retreats6DaysData as BaliRetreats6Days } from "./bali/retreats/Retreats6DaysData";
import { VipassanaMeditationRetreatData as BaliVipassana } from "./bali/retreats/VipassanaMeditationRetreatData";
import { ThreeDayWellnessRetreatData as BaliThreeDay } from "./bali/retreats/ThreeDayWellnessRetreatData";
import { AdventureYogaRetreatData as BaliAdventure } from "./bali/retreats/AdventureYogaRetreatData";
import { MultiStyleMeditationRetreatData as BaliMultiStyleMeditation } from "./bali/retreats/MultiStyleMeditationRetreatData";

// ─── Rishikesh Imports ───────────────────────────────────────────────────────
import { Rishikesh100HoursData }              from "./rishikesh/ttc/multiStyle/Rishikesh100HoursData";
import { Rishikesh200HoursData }              from "./rishikesh/ttc/multiStyle/Rishikesh200HoursData";
import { Rishikesh300HoursData }              from "./rishikesh/ttc/multiStyle/Rishikesh300HoursData";
import { Rishikesh500HoursData }              from "./rishikesh/ttc/multiStyle/Rishikesh500HoursData";

import { RishikeshKundali50HoursData }       from "./rishikesh/ttc/kundalini/RishikeshKundali50HoursData";
import { RishikeshKundali100HoursData }      from "./rishikesh/ttc/kundalini/RishikeshKundali100HoursData";
import { RishikeshKundali200HoursData }      from "./rishikesh/ttc/kundalini/RishikeshKundali200HoursData";
import { RishikeshKundali300HoursData }      from "./rishikesh/ttc/kundalini/RishikeshKundali300HoursData";
import { RishikeshKundali500HoursData }      from "./rishikesh/ttc/kundalini/RishikeshKundali500HoursData";

import { RishikeshPrenatalYogaData }          from "./rishikesh/ttc/shortCourse/RishikeshPrenatalYogaData";
import { Rishikesh6NightsYinYogaData }        from "./rishikesh/ttc/shortCourse/Rishikesh6NightsYinYogaData";
import { Rishikesh50HourYogaNidraData }       from "./rishikesh/ttc/shortCourse/Rishikesh50HourYogaNidraData";

import { Rishikesh2DaysAyurvedicNutritionData } from "./rishikesh/ttc/specialization/Rishikesh2DaysAyurvedicNutritionData";
import { RishikeshSoundHealingData }          from "./rishikesh/ttc/specialization/RishikeshSoundHealingData";
import { RishikeshAyurvedaTherapistDiplomaData } from "./rishikesh/ttc/specialization/RishikeshAyurvedaTherapistDiplomaData";
import { Rishikesh18DaysYogaTherapyWellnessData } from "./rishikesh/ttc/specialization/Rishikesh18DaysYogaTherapyWellnessData";
import { Rishikesh200HourMultiStyleKundaliniAyurvedaMassageData } from "./rishikesh/ttc/specialization/Rishikesh200HourMultiStyleKundaliniAyurvedaMassageData";
import { Rishikesh10DaysPanchakarmaData }     from "./rishikesh/ttc/specialization/Rishikesh10DaysPanchakarmaData";

import { Rishikesh5DaysMindfulnessMeditationData } from "./rishikesh/retreats/Rishikesh5DaysMindfulnessMeditationData";
import { Rishikesh5DaysYogaRetreatData } from "./rishikesh/retreats/Rishikesh5DaysYogaRetreatData";
import { Rishikesh7DaysYogaRetreatData } from "./rishikesh/retreats/Rishikesh7DaysYogaRetreatData";
import { Rishikesh15DaysYogaRetreatData } from "./rishikesh/retreats/Rishikesh15DaysYogaRetreatData";
import { Rishikesh5DaysAcupressureData } from "./rishikesh/retreats/Rishikesh5DaysAcupressureData";

// ─── Mysore Imports ──────────────────────────────────────────────────────────
import { Mysore200HourAshtangaHathaData }     from "./mysore/ttc/multiStyle/Mysore200HourAshtangaHathaData";
import { Mysore200HoursMultistyle }           from "./mysore/ttc/multiStyle/Mysore200HoursMultistyle";
import { Mysore21DayAshtangaTTCData }         from "./mysore/ttc/multiStyle/Mysore21DayAshtangaTTCData";
import { Mysore21DayHathaTTCData }            from "./mysore/ttc/multiStyle/Mysore21DayHathaTTCData";
import { Mysore300HoursData }                 from "./mysore/ttc/multiStyle/Mysore300HoursData";
import { Mysore500HoursData }                 from "./mysore/ttc/multiStyle/Mysore500HoursData";

import { Mysore50HourAerialYogaData }         from "./mysore/ttc/shortCourse/Mysore50HourAerialYogaData";
import { Mysore50HourYinYogaData }            from "./mysore/ttc/shortCourse/Mysore50HourYinYogaData";
import { Mysore7DayYogaTherapyTTCData }       from "./mysore/ttc/shortCourse/Mysore7DayYogaTherapyTTCData";
import { MysorePrenatalYogaData }             from "./mysore/ttc/shortCourse/MysorePrenatalYogaData";

import { Mysore7DayChairYogaData }            from "./mysore/retreats/Mysore7DayChairYogaData";
import { Mysore7DayWheelYogaData }            from "./mysore/retreats/Mysore7DayWheelYogaData";
import { MysoreSingingBowlSoundHealingData }  from "./mysore/retreats/MysoreSingingBowlSoundHealingData";

export const locationDataMap = {
  bali: {
    ytt: {
      "50hr": BaliMultiStyle50hr,
      "100hr": BaliMultiStyle100hr,
      "200hr": BaliMultiStyle200hr,
      "300hr": BaliMultiStyle300hr,
      "500hr": BaliMultiStyle500hr
    },
    kundalini: {
      "kundalini50hr": BaliKundalini50hr,
      "kundalini100hr": BaliKundalini100hr,
      "kundalini200hr": BaliKundalini200hr,
      "kundalini300hr": BaliKundalini300hr,
      "kundalini500hr": BaliKundalini500hr
    },
    "short-courses": {
      "acroyoga": BaliAcroYoga,
      "aerialyoga": BaliAerialYoga,
      "yinyoga": BaliYinYoga,
      "prenatalyoga": BaliPrenatalYoga
    },
    specialization: {
      "100houryogatherapyayurve": BaliYogaTherapy,
      "ayurvedictreatmentttc": BaliAyurvedicTTC,
      "ayurveda5hoursabhyangam": BaliAbhyangam,
      "soundhealing": BaliSoundHealing
    },
    retreats: {
      "retreats6days": BaliRetreats6Days,
      "vipassanameditation": BaliVipassana,
      "3daywellness": BaliThreeDay,
      "adventureyoga": BaliAdventure,
      "multistylemeditation": BaliMultiStyleMeditation
    }
  },
  rishikesh: {
    ytt: {
      "100hr": Rishikesh100HoursData,
      "200hr": Rishikesh200HoursData,
      "300hr": Rishikesh300HoursData,
      "500hr": Rishikesh500HoursData
    },
    kundalini: {
      "kundalini50hr": RishikeshKundali50HoursData,
      "kundalini100hr": RishikeshKundali100HoursData,
      "kundalini200hr": RishikeshKundali200HoursData,
      "kundalini300hr": RishikeshKundali300HoursData,
      "kundalini500hr": RishikeshKundali500HoursData
    },
    "short-courses": {
      "rishikeshprenatalyoga": RishikeshPrenatalYogaData,
      "rishikesh6nightsyinyoga": Rishikesh6NightsYinYogaData,
      "rishikesh50houryoganidra": Rishikesh50HourYogaNidraData
    },
    specialization: {
      "rishikesh2daysayurvedicnutrition": Rishikesh2DaysAyurvedicNutritionData,
      "rishikeshsoundhealing": RishikeshSoundHealingData,
      "rishikeshayurvedatherapistdiploma": RishikeshAyurvedaTherapistDiplomaData,
      "rishikesh18daysyogatherapywellness": Rishikesh18DaysYogaTherapyWellnessData,
      "rishikesh200hourmultistylekundaliniayurvedamassage": Rishikesh200HourMultiStyleKundaliniAyurvedaMassageData,
      "rishikesh10dayspanchakarma": Rishikesh10DaysPanchakarmaData
    },
    retreats: {
      "rishikesh5daysmindfulnessmeditation": Rishikesh5DaysMindfulnessMeditationData,
      "rishikesh5daysyogaretreat": Rishikesh5DaysYogaRetreatData,
      "rishikesh7daysyogaretreat": Rishikesh7DaysYogaRetreatData,
      "rishikesh15daysyogaretreat": Rishikesh15DaysYogaRetreatData,
      "rishikesh5daysacupressure": Rishikesh5DaysAcupressureData,
      "rishikesh10dayspanchakarma": Rishikesh10DaysPanchakarmaData
    }
  },
  mysuru: {
    ytt: {
      "200hr": Mysore200HourAshtangaHathaData,
      "200hrmultistyle": Mysore200HoursMultistyle,
      "300hr": Mysore300HoursData,
      "500hr": Mysore500HoursData,
      "mysore21dayashtanga": Mysore21DayAshtangaTTCData,
      "mysore21dayhatha": Mysore21DayHathaTTCData
    },
    "short-courses": {
      "mysore50houryinyoga": Mysore50HourYinYogaData,
      "mysore50houraerialyoga": Mysore50HourAerialYogaData,
      "mysoreprenatalyoga": MysorePrenatalYogaData,
      "mysore7dayyogatherapy": Mysore7DayYogaTherapyTTCData
    },
    specialization: {
      "mysoresingingbowlsoundhealing": MysoreSingingBowlSoundHealingData,
      "mysore7daychairyoga": Mysore7DayChairYogaData,
      "mysore7daywheelyoga": Mysore7DayWheelYogaData
    },
    retreats: {
      "mysoresingingbowlsoundhealing": MysoreSingingBowlSoundHealingData,
      "mysore7daychairyoga": Mysore7DayChairYogaData,
      "mysore7daywheelyoga": Mysore7DayWheelYogaData
    }
  }
};
